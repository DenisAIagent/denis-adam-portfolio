/* Zero-dependency static server + secure /api/contact endpoint (Resend).
   - Serves the portfolio and embedded apps with correct MIME types.
   - POST /api/contact: honeypot + validation + rate-limit, sends via Web3Forms.
   - Binds to 0.0.0.0:$PORT.
   Required env for the form: WEB3FORMS_KEY (access key tied to the recipient email). */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const NOINDEX = "noindex, nofollow, noarchive, noimageindex";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { "X-Robots-Tag": NOINDEX, ...headers });
  res.end(body);
}
function sendJSON(res, status, obj) {
  send(res, status, JSON.stringify(obj), { "Content-Type": "application/json; charset=utf-8" });
}

/* ---------- naive in-memory rate limiter (per IP) ---------- */
const HITS = new Map(); // ip -> number[] timestamps
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
function rateLimited(ip) {
  const now = Date.now();
  const arr = (HITS.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  HITS.set(ip, arr);
  return arr.length > MAX_HITS;
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

/* ---------- POST /api/contact ---------- */
async function handleContact(req, res) {
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
  if (rateLimited(ip)) return sendJSON(res, 429, { ok: false, error: "Trop de tentatives, réessayez plus tard." });

  let raw = "";
  let tooBig = false;
  req.on("data", (c) => { raw += c; if (raw.length > 20000) { tooBig = true; req.destroy(); } });
  req.on("end", async () => {
    if (tooBig) return sendJSON(res, 413, { ok: false, error: "Message trop long." });
    let body;
    try { body = JSON.parse(raw || "{}"); } catch { return sendJSON(res, 400, { ok: false, error: "Requête invalide." }); }

    // honeypot: bots fill hidden field "company" -> pretend success, drop silently
    if (body.company) return sendJSON(res, 200, { ok: true });

    const name = (body.name || "").toString().trim().slice(0, 120);
    const email = (body.email || "").toString().trim().slice(0, 180);
    const message = (body.message || "").toString().trim().slice(0, 5000);

    if (name.length < 2) return sendJSON(res, 422, { ok: false, error: "Nom requis." });
    if (!isEmail(email)) return sendJSON(res, 422, { ok: false, error: "Email invalide." });
    if (message.length < 10) return sendJSON(res, 422, { ok: false, error: "Message trop court." });

    const KEY = process.env.WEB3FORMS_KEY;
    if (!KEY) {
      console.error("Contact form: missing env WEB3FORMS_KEY");
      return sendJSON(res, 500, { ok: false, error: "Service email non configuré." });
    }

    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: KEY,
          subject: `Portfolio — message de ${name}`,
          from_name: "Portfolio Denis Adam",
          name,
          email,
          replyto: email,
          message,
        }),
      });
      const jr = await r.json().catch(() => ({}));
      if (!r.ok || !jr.success) {
        console.error("Web3Forms error", r.status, JSON.stringify(jr).slice(0, 300));
        return sendJSON(res, 502, { ok: false, error: "Envoi impossible pour le moment." });
      }
      return sendJSON(res, 200, { ok: true });
    } catch (e) {
      console.error("Web3Forms fetch failed", e.message);
      return sendJSON(res, 502, { ok: false, error: "Envoi impossible pour le moment." });
    }
  });
}

/* ---------- static GET ---------- */
function handleStatic(req, res) {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (urlPath.endsWith("/")) urlPath += "index.html";
    const filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) return send(res, 403, "Forbidden");

    fs.stat(filePath, (err, stat) => {
      let target = filePath;
      if (!err && stat.isDirectory()) target = path.join(filePath, "index.html");
      fs.readFile(target, (e, data) => {
        if (e) return send(res, 404, "Not found");
        const ext = path.extname(target).toLowerCase();
        send(res, 200, data, {
          "Content-Type": MIME[ext] || "application/octet-stream",
          "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
          "X-Content-Type-Options": "nosniff",
        });
      });
    });
  } catch {
    send(res, 400, "Bad request");
  }
}

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://x").pathname;
  if (pathname === "/api/contact") {
    if (req.method !== "POST") return sendJSON(res, 405, { ok: false, error: "Méthode non autorisée." });
    return handleContact(req, res);
  }
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Method not allowed");
  handleStatic(req, res);
});

server.listen(PORT, "0.0.0.0", () => console.log(`Portfolio server on 0.0.0.0:${PORT}`));
