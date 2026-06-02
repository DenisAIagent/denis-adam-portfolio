/* ============================================================
   Denis Adam — site de présentation interactive
   Navigation par projet : rail d'étapes → mock navigateur qui
   fond-enchaîne les vrais écrans. hebdo & mounjago : toggle LIVE
   (l'app réelle embarquée en iframe). Zéro dépendance, zéro build.
   ============================================================ */
"use strict";

const CV_PDF = "Denis Adam — présentation.pdf";

const PROJECTS = [
  {
    id: "bandstream",
    name: "band.stream Boutique",
    ix: "§01",
    meta: "E-commerce · artistes & labels · 2025",
    tag: "band.stream · add-on boutique",
    title: "La boutique merch de tes fans.",
    lede: "Une vitrine à la marque de l'artiste côté fan, un back-office complet côté artiste — paiement Stripe direct, diffusion multicanal Google / Meta / TikTok, commission minimale.",
    color: "#0ED894",
    logo: "./assets/brand/bandstream-logo.png",
    deck: "Bandstream-Boutique-Design-Deck.pdf",
    live: null,
    facts: [
      { k: "Périmètre", v: "Vitrine publique + back-office" },
      { k: "Parcours", v: "Vitrine → Stripe → Finance" },
      { k: "Rôle", v: "Co-fondateur · product · proto" },
    ],
    ds: { swatches: ["#0ED894", "#0A0A0A", "#F4EFE6", "#FFFFFF"], typo: "<b>Next.js 15</b> + <b>Prisma</b> · <b>Stripe Connect</b>. Vert <span class='mono' style='color:#0c9e6f'>#0ED894</span> = action &amp; argent." },
    shots: [
      { src: "./assets/bandstream/01-vitrine.png", step: "Vitrine", sd: "Boutique publique aux couleurs de l'artiste, mobile-first.", url: "band.stream/foofighters", cap: "La vitrine du fan — boutique à la marque de l'artiste" },
      { src: "./assets/bandstream/02-fiche-tshirt.png", step: "Fiche produit", sd: "Galerie, variantes, réassurance, ajout panier.", url: "band.stream/foofighters/tee-tour-26", cap: "Fiche produit — variantes, paiement, réassurance" },
      { src: "./assets/bandstream/06-dashboard.png", step: "Tableau de bord", sd: "KPIs artiste en temps réel — ventes, net Stripe.", url: "app.band.stream/dashboard", cap: "Tableau de bord artiste — KPIs en temps réel" },
      { src: "./assets/bandstream/09-orders.png", step: "Commandes", sd: "Triées par urgence d'expédition, étiquettes 48 h.", url: "app.band.stream/commandes", cap: "Commandes — triées par urgence d'expédition" },
      { src: "./assets/bandstream/10-finance.png", step: "Finance", sd: "Brut, frais Stripe, commission, net reversé.", url: "app.band.stream/finance", cap: "Finance — brut, frais Stripe, commission, net" },
    ],
  },
  {
    id: "hebdo",
    name: "Hebdo Delivery",
    ix: "§02",
    meta: "Rolling Stone France · édition rédaction · 2025",
    tag: "Hebdo Delivery · plateforme rédactionnelle",
    title: "Livrez votre papier en quatre étapes.",
    lede: "De la saisie d'un papier à son dépôt dans Dropbox — correction IA, génération DOCX et notification de la rédaction. La forme est standardisée pour accélérer la maquette et supprimer les allers-retours.",
    color: "#E11D2E",
    logo: "./assets/brand/rollingstone-logo.png",
    deck: "Hebdo-Delivery-Design-Deck.pdf",
    live: "./embeds/hebdo/index.html",
    liveUrl: "hebdo.delivery — live",
    facts: [
      { k: "Périmètre", v: "10 écrans · 1 design system" },
      { k: "Workflow", v: "Saisie → IA → DOCX → Dropbox" },
      { k: "Rôle", v: "Automation & Marketing Mgr" },
    ],
    ds: { swatches: ["#E11D2E", "#16140F", "#F5F1E8", "#FFFFFF"], typo: "<b>Instrument Serif</b> titres · <b>Geist</b> interface. Rouge <span class='mono' style='color:#E11D2E'>#E11D2E</span> Rolling Stone." },
    shots: [
      { src: "./assets/hebdo/01-login.png", step: "Connexion", sd: "Entrée éditoriale signée Rolling Stone.", url: "hebdo.delivery/login", cap: "Connexion — entrée éditoriale signée Rolling Stone" },
      { src: "./assets/hebdo/02-dashboard.png", step: "Mon espace", sd: "Numéro de la semaine, papiers attendus, historique.", url: "hebdo.delivery/espace", cap: "Mon espace — numéro de la semaine & livraisons" },
      { src: "./assets/hebdo/03-livrer.png", step: "Livrer un papier", sd: "Formulaire structuré par type de papier.", url: "hebdo.delivery/livrer", cap: "Livrer un papier — formulaire guidé en 4 étapes" },
      { src: "./assets/hebdo/07-admin-deliveries.png", step: "Admin", sd: "Suivi de toutes les livraisons de la rédaction.", url: "hebdo.delivery/admin", cap: "Admin — suivi de toutes les livraisons" },
    ],
  },
  {
    id: "rcrc",
    name: "RCRC One",
    ix: "§03",
    meta: "Rolling Stone France · centre de relation client · 2025",
    tag: "RCRC One · console support",
    title: "Une console unique pour la relation client.",
    lede: "Tickets, clients, commandes, catalogue et marketing réunis dans une seule interface — recevoir et traiter les demandes, comprendre chaque client à 360°, piloter commerce et campagnes sans changer d'outil.",
    color: "#CC0000",
    logo: "./assets/brand/rollingstone-logo.png",
    deck: "RCRC-One-Design-Deck.pdf",
    live: null,
    facts: [
      { k: "Périmètre", v: "13 écrans · 1 design system" },
      { k: "Pilier", v: "Support · 360° · Commerce" },
      { k: "Rôle", v: "Automation & Marketing Mgr" },
    ],
    ds: { swatches: ["#CC0000", "#111111", "#6B7280", "#FFFFFF"], typo: "<b>Serif éditorial</b> identité · <b>sans système</b> interface. Rouge <span class='mono' style='color:#CC0000'>#CC0000</span> réservé aux actions · ⌘K." },
    shots: [
      { src: "./assets/rcrc/02-dashboard.png", step: "Tableau de bord", sd: "Cartes KPI + file d'attente prioritaire.", url: "rcrc.one/", cap: "Tableau de bord — vue d'ensemble du service client" },
      { src: "./assets/rcrc/03-tickets.png", step: "File de tickets", sd: "Tableau dense, filtres statut & canal.", url: "rcrc.one/tickets", cap: "Tickets — file de support priorisée" },
      { src: "./assets/rcrc/05-customers.png", step: "Clients & fidélité", sd: "Segments VIP / risque, score, total dépensé.", url: "rcrc.one/clients", cap: "Clients — fiches & historique 360°" },
      { src: "./assets/rcrc/07-orders.png", step: "Commandes", sd: "Suivi des commandes et de leurs statuts.", url: "rcrc.one/commandes", cap: "Commandes — suivi et statuts" },
      { src: "./assets/rcrc/10-analytics.png", step: "Analytics", sd: "Performance du service en temps réel.", url: "rcrc.one/analytics", cap: "Analytics — performance en temps réel" },
    ],
  },
  {
    id: "mounjago",
    name: "MounjaGO",
    ix: "§04",
    meta: "Application de suivi de santé · 2025",
    tag: "MounjaGO · suivi GLP-1",
    title: "Votre carnet de traitement Mounjaro.",
    lede: "De l'inscription au rapport médical — injections, poids, niveau de médicament estimé et nutrition, le tout chiffré sur l'appareil (zero-knowledge).",
    color: "#0d9488",
    logo: "./assets/brand/mounjago-logo.png",
    deck: "MounjaGO-Design-Deck.pdf",
    live: "./embeds/mounjago/index.html",
    liveUrl: "mounjago.com — live",
    facts: [
      { k: "Périmètre", v: "8 écrans · 1 design system" },
      { k: "Parcours", v: "Suivi → Rapports → Recettes" },
      { k: "Rôle", v: "Fondateur · product · proto" },
    ],
    ds: { swatches: ["#0D9488", "#4F46E5", "#16233B", "#F0FDFA"], typo: "<b>Outfit</b> interface · chiffres mono. Dégradé <span class='mono' style='color:#0D9488'>teal</span> → <span class='mono' style='color:#4F46E5'>indigo</span> = progression. Chiffré sur l'appareil." },
    shots: [
      { src: "./assets/mounjago/03-dashboard.png", step: "Tableau de bord", sd: "Durée, perte totale, niveau de médicament estimé.", url: "mounjago.com/dashboard", cap: "Tableau de bord — perte de poids & niveau de médicament" },
      { src: "./assets/mounjago/01-landing.png", step: "Page d'accueil", sd: "Carnet privé & chiffré, paiement unique à vie.", url: "mounjago.com", cap: "Page d'accueil — suivi privé Mounjaro & GLP-1" },
      { src: "./assets/mounjago/04-log.png", step: "Suivi hebdo", sd: "Injection, poids, humeur, effets secondaires.", url: "mounjago.com/suivi", cap: "Suivi hebdomadaire — injection, poids, humeur" },
      { src: "./assets/mounjago/07-reports.png", step: "Rapports", sd: "Synthèse par période, exportable pour le médecin.", url: "mounjago.com/rapports", cap: "Rapports — synthèse exportable pour le médecin" },
    ],
  },
  {
    id: "mdmc",
    name: "MDMC Facturation",
    ix: "§05",
    meta: "Application de bureau macOS · agence · 2026",
    tag: "MDMC · facturation",
    title: "La facturation de l'agence, sans friction.",
    lede: "Application de bureau synchronisée avec Odoo : création de factures, envoi par email (PDF ou lien), suivi des encaissements et factures récurrentes — une interface dédiée, plus rapide qu'Odoo.",
    color: "#E50914",
    logo: "./assets/brand/mdmc-logo.png",
    deck: "MDMC-Facturation-Design-Deck.pdf",
    live: null,
    note: "Données de démonstration entièrement fictives.",
    facts: [
      { k: "Périmètre", v: "Desktop app · sync Odoo" },
      { k: "Parcours", v: "Facture → Email → Encaissement" },
      { k: "Rôle", v: "Fondateur · product · proto" },
    ],
    ds: { swatches: ["#E50914", "#0A0A0A", "#6B7280", "#FFFFFF"], typo: "<b>Inter</b> interface · <b>JetBrains Mono</b> montants. Rouge <span class='mono' style='color:#E50914'>#E50914</span> MDMC. <i>Données de démo fictives.</i>" },
    shots: [
      { src: "./assets/mdmc/01-dashboard.png", step: "Tableau de bord", sd: "CA du mois, impayés, échéances à venir.", url: "mdmc · tableau de bord", cap: "Tableau de bord — CA, impayés, échéances" },
      { src: "./assets/mdmc/02-invoices.png", step: "Factures", sd: "Liste, états & actions groupées.", url: "mdmc · factures", cap: "Factures — liste, états & actions groupées" },
      { src: "./assets/mdmc/04-invoice-detail.png", step: "Détail facture", sd: "Lignes, paiements, envoi par email.", url: "mdmc · facture #1010", cap: "Détail facture — lignes, paiements, envoi" },
      { src: "./assets/mdmc/07-automations.png", step: "Automatisations", sd: "Factures récurrentes programmées.", url: "mdmc · automatisations", cap: "Automatisations — factures récurrentes" },
    ],
  },
];

const SKILLS = [
  { k: "Product", v: "Discovery, specs exécutables, roadmap, GTM", lvl: 92 },
  { k: "Prototypage IA", v: "Proto fonctionnel sans coder à la main", lvl: 90 },
  { k: "Compréhension tech", v: "React/Vite, Node, PostgreSQL, Supabase, Railway", lvl: 70 },
  { k: "Automation", v: "n8n, Make, MCP servers, intégrations API", lvl: 88 },
  { k: "Marketing / SEO-SEA", v: "Google Ads Partner, Meta, TikTok, SEO, Analytics", lvl: 90 },
  { k: "Management & Ops", v: "Équipes 3-8, refonte process, doc, Salesforce", lvl: 72 },
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const enc = (f) => encodeURI("./" + f);

/* ---------- CV links ---------- */
const cvHref = enc(CV_PDF);
["cvBtn", "cvLink"].forEach((id) => { const el = document.getElementById(id); if (el) el.href = cvHref; });

/* ---------- hero project pills ---------- */
function renderHeroPills() {
  const host = $("#heroPills");
  if (!host) return;
  host.innerHTML = PROJECTS.map((p) =>
    `<a class="ppill" href="#${p.id}" style="--pc:${p.color}"><span class="dot"></span>${p.name.replace(" Boutique", "").replace(" Facturation", " · Facturation")}<span class="arr">→</span></a>`
  ).join("");
}

/* ---------- nav project links ---------- */
function renderNavLinks() {
  const host = $("#navProjects");
  if (!host) return;
  host.innerHTML = PROJECTS.map((p) => `<a href="#${p.id}">${p.name.replace(" Boutique", "").replace(" Facturation", " Fact.")}</a>`).join("");
}

/* ---------- render projects (rail + browser mock) ---------- */
function renderProjects() {
  const list = $("#projectList");
  list.innerHTML = PROJECTS.map((p) => {
    const steps = p.shots.map((s, i) =>
      `<button class="step${i === 0 ? " on" : ""}" data-rail="${p.id}" data-i="${i}">
        <span class="num">${i + 1}</span>
        <span class="step-tx"><span class="st">${s.step}</span><span class="sd">${s.sd}</span></span>
      </button>`).join("");

    const shotsImgs = p.shots.map((s, i) =>
      `<img class="shot${i === 0 ? " on" : ""}" data-screen="${p.id}" data-i="${i}" src="${s.src}" alt="${s.cap}" loading="lazy" />`).join("");

    const liveToggle = p.live
      ? `<button class="live-toggle" data-live="${p.id}" title="Charger l'application réelle"><span class="ld"></span> Version live</button>` : "";

    const liveFrame = p.live
      ? `<iframe class="liveframe" data-frame="${p.id}" title="${p.name} — live" loading="lazy" tabindex="-1"></iframe>` : "";

    const note = p.note ? `<span class="proj-note">⚠︎ ${p.note}</span>` : "";

    return `
    <section class="proj reveal" id="${p.id}" style="--pc:${p.color}">
      <div class="wrap">
        <div class="proj-head"><span class="ix">${p.ix}</span><span class="meta">${p.meta}</span></div>
        <div class="proj-top">
          <div>
            <div class="proj-tag"><img class="ptag-logo" src="${p.logo}" alt="" /><span class="sq"></span>${p.tag}</div>
            <h3 class="proj-title">${p.title}</h3>
            <p class="proj-lede">${p.lede}</p>
            ${note}
          </div>
          <div class="facts">
            ${p.facts.map((f) => `<div class="fact"><span class="k">${f.k}</span><span class="v">${f.v}</span></div>`).join("")}
            <a class="deck-btn" href="${enc(p.deck)}" target="_blank" rel="noopener">Deck PDF →</a>
          </div>
        </div>

        <div class="proj-body">
          <aside class="side">
            <div class="rail">${steps}</div>
            <div class="ds">
              <div class="dsh">Design system</div>
              <div class="swatches">${p.ds.swatches.map((c) => `<span class="sw" style="background:${c}"></span>`).join("")}</div>
              <div class="ds-typo">${p.ds.typo}</div>
            </div>
          </aside>

          <div class="stage">
            <div class="pframe" data-pframe="${p.id}">
              <div class="pframe-bar">
                <span class="dots"><i></i><i></i><i></i></span>
                <span class="url" data-url="${p.id}">${p.shots[0].url}</span>
                ${liveToggle}
              </div>
              <div class="screen" data-screenwrap="${p.id}">
                ${shotsImgs}
                ${liveFrame}
              </div>
            </div>
            <div class="pframe-foot">
              <span class="hint" data-hint="${p.id}">${p.live ? "↑ clique une étape, ou passe en <b>version live</b>" : "↑ clique une étape pour parcourir les écrans"}</span>
              <button class="zoom-link" data-zoom="${p.id}">⤢ Plein écran</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }).join("");

  wireRails();
  wireLive();
  wireZoom();
}

/* ---------- rail: step → swap shot + url ---------- */
function setStep(id, i) {
  const p = PROJECTS.find((x) => x.id === id);
  exitLive(id); // any step click returns to captures
  $$(`.step[data-rail="${id}"]`).forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
  $$(`img.shot[data-screen="${id}"]`).forEach((im) => im.classList.toggle("on", +im.dataset.i === i));
  const url = $(`.url[data-url="${id}"]`); if (url) url.textContent = p.shots[i].url;
}
function wireRails() {
  $$(".step").forEach((b) => b.addEventListener("click", () => setStep(b.dataset.rail, +b.dataset.i)));
}

/* ---------- live toggle: load iframe app ---------- */
function enterLive(id) {
  const p = PROJECTS.find((x) => x.id === id); if (!p || !p.live) return;
  const frame = $(`.liveframe[data-frame="${id}"]`);
  if (frame && !frame.getAttribute("src")) frame.setAttribute("src", p.live);
  $(`.pframe[data-pframe="${id}"]`).classList.add("is-live");
  const url = $(`.url[data-url="${id}"]`); if (url) url.textContent = p.liveUrl || "live";
  const tog = $(`.live-toggle[data-live="${id}"]`); if (tog) { tog.classList.add("on"); tog.innerHTML = `<span class="ld"></span> Revenir aux écrans`; }
  const hint = $(`.hint[data-hint="${id}"]`); if (hint) hint.innerHTML = "● application réelle, interactive (sans backend)";
}
function exitLive(id) {
  const pf = $(`.pframe[data-pframe="${id}"]`); if (!pf || !pf.classList.contains("is-live")) return;
  pf.classList.remove("is-live");
  const tog = $(`.live-toggle[data-live="${id}"]`); if (tog) { tog.classList.remove("on"); tog.innerHTML = `<span class="ld"></span> Version live`; }
  const hint = $(`.hint[data-hint="${id}"]`); if (hint) hint.innerHTML = "↑ clique une étape, ou passe en <b>version live</b>";
  const i = $$(`.step[data-rail="${id}"]`).findIndex?.((b) => b.classList.contains("on"));
}
function wireLive() {
  $$(".live-toggle").forEach((t) => t.addEventListener("click", () => {
    const id = t.dataset.live;
    const pf = $(`.pframe[data-pframe="${id}"]`);
    pf.classList.contains("is-live") ? exitLive(id) : enterLive(id);
  }));
}

/* ---------- zoom → lightbox at current step ---------- */
function wireZoom() {
  $$(".zoom-link").forEach((z) => z.addEventListener("click", () => {
    const id = z.dataset.zoom;
    const cur = $$(`img.shot[data-screen="${id}"]`).findIndex((im) => im.classList.contains("on"));
    openLightbox(id, Math.max(0, cur));
  }));
  $$("img.shot").forEach((im) => im.addEventListener("click", () => openLightbox(im.dataset.screen, +im.dataset.i)));
}

/* ---------- render skills ---------- */
function renderSkills() {
  $("#skills").innerHTML = SKILLS.map((s) => `
    <div class="skill reveal">
      <div class="row"><span class="k">${s.k}</span><span class="v">${s.v}</span></div>
      <div class="bar"><span data-lvl="${s.lvl}"></span></div>
    </div>`).join("");
}

/* ---------- count-up ---------- */
function formatNum(n) { return n.toLocaleString("fr-FR"); }
function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const dur = 1400; const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(target * eased);
    el.innerHTML = formatNum(val) + (suffix ? `<span class="u">${suffix}</span>` : "");
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- reveal + triggers ---------- */
function setupObservers() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add("in");
      $$(".num[data-count]", el).forEach((n) => { if (!n.dataset.done) { n.dataset.done = "1"; reduce ? (n.innerHTML = formatNum(+n.dataset.count) + (n.dataset.suffix ? `<span class="u">${n.dataset.suffix}</span>` : "")) : countUp(n); } });
      const bar = $(".bar > span", el); if (bar && !bar.dataset.done) { bar.dataset.done = "1"; bar.style.width = bar.dataset.lvl + "%"; }
      io.unobserve(el);
    });
  }, { threshold: 0.18 });
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- nav: active link + burger ---------- */
function setupNav() {
  const nav = $("#nav");
  $("#burger").addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav .links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  const ids = [...PROJECTS.map((p) => p.id), "parcours", "competences", "contact"];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
  const links = new Map($$(".nav .links a[href^='#']").map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const a = links.get(e.target.id); if (a) a.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
}

/* ---------- lightbox / carousel (fullscreen) ---------- */
const lb = {
  el: $("#lb"), img: $("#lbImg"), cap: $("#lbCap"), title: $("#lbTitle"),
  logo: $("#lbLogo"), count: $("#lbCount"), thumbs: $("#lbThumbs"), deck: $("#lbDeck"),
  project: null, idx: 0,
};
function openLightbox(id, idx = 0) {
  const p = PROJECTS.find((x) => x.id === id); if (!p) return;
  lb.project = p; lb.idx = idx;
  lb.title.textContent = p.name;
  lb.logo.src = p.logo;
  lb.deck.href = enc(p.deck);
  lb.thumbs.innerHTML = p.shots.map((s, i) => `<img src="${s.src}" data-i="${i}" alt="" />`).join("");
  $$("#lbThumbs img").forEach((t) => t.addEventListener("click", () => { lb.idx = +t.dataset.i; paintLightbox(); }));
  lb.el.classList.add("open"); lb.el.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  paintLightbox();
}
function paintLightbox() {
  const p = lb.project, s = p.shots[lb.idx];
  lb.img.src = s.src; lb.cap.textContent = s.cap;
  lb.count.textContent = `${String(lb.idx + 1).padStart(2, "0")} / ${String(p.shots.length).padStart(2, "0")}`;
  $$("#lbThumbs img").forEach((t, i) => t.classList.toggle("active", i === lb.idx));
}
function moveLightbox(d) { const n = lb.project.shots.length; lb.idx = (lb.idx + d + n) % n; paintLightbox(); }
function closeLightbox() { lb.el.classList.remove("open"); lb.el.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
$("#lbClose").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => moveLightbox(-1));
$("#lbNext").addEventListener("click", () => moveLightbox(1));
lb.el.addEventListener("click", (e) => { if (e.target === lb.el) closeLightbox(); });
window.addEventListener("keydown", (e) => {
  if (!lb.el.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") moveLightbox(-1);
  if (e.key === "ArrowRight") moveLightbox(1);
});

/* ---------- contact form ---------- */
function showContactSuccess(form, name) {
  const safe = (name || "").replace(/[<>&]/g, "");
  const card = document.createElement("div");
  card.className = "cform-success reveal in";
  card.setAttribute("role", "status");
  card.innerHTML = `
    <div class="cs-check">✓</div>
    <h3>Message envoyé${safe ? `, merci ${safe}` : ", merci"} !</h3>
    <p>C'est bien parti — je te réponds sous 24 h, en général bien avant.</p>
    <button type="button" class="btn ghost" id="cfAgain">Envoyer un autre message</button>`;
  form.replaceWith(card);
  const again = card.querySelector("#cfAgain");
  again.addEventListener("click", () => { card.replaceWith(form); form.reset(); const s = $("#cfStatus"); if (s) { s.textContent = ""; s.className = "cf-status"; } });
}

function setupContactForm() {
  const form = $("#cform"); if (!form) return;
  const btn = $("#cfSubmit"), status = $("#cfStatus");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "cf-status";
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      company: form.company.value, // honeypot
    };
    if (data.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.message.length < 10) {
      status.textContent = "Vérifie le nom, l'email et le message (10 car. min)."; status.classList.add("err"); return;
    }
    btn.disabled = true; const label = btn.textContent; btn.textContent = "Envoi…";
    status.textContent = "";
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        showContactSuccess(form, data.name);
      } else {
        status.textContent = j.error || "Une erreur est survenue. Réessaie."; status.classList.add("err");
      }
    } catch {
      status.textContent = "Connexion impossible. Réessaie dans un instant."; status.classList.add("err");
    } finally {
      btn.disabled = false; btn.textContent = label;
    }
  });
}

/* ---------- boot ---------- */
renderNavLinks();
renderHeroPills();
renderProjects();
renderSkills();
setupObservers();
setupNav();
