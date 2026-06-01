import{a as i,j as e}from"./vendor-motion-C5NcMNbD.js";import{c as q,u as M,o as N}from"./main-Dad23MdQ.js";import{C as y,a as S,M as P}from"./index-CITBXVsz.js";import{M as z}from"./mail-CT1iQcKx.js";import{S as E}from"./send-DyjRMe1_.js";import"./vendor-crypto-D6Y-bsRO.js";import"./vendor-charts-JuJU8aFs.js";import"./vendor-pdf-D4bwRhTv.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],G=q("search",A),R=()=>{const{language:r}=M(),[l,d]=i.useState(""),[m,g]=i.useState(new Set);i.useEffect(()=>{const s={fr:{title:"FAQ MounjaGO — Questions frequentes sur le suivi Mounjaro et GLP-1",description:"Reponses aux questions frequentes sur MounjaGO : securite AES-256, fonctionnement hors ligne, rapport PDF medical, prix, RGPD et traitements GLP-1 supportes."},en:{title:"MounjaGO FAQ — Frequently Asked Questions about Mounjaro & GLP-1 Tracking",description:"Answers to frequently asked questions about MounjaGO: AES-256 security, offline mode, PDF medical reports, pricing, GDPR compliance and supported GLP-1 treatments."},pt:{title:"FAQ MounjaGO — Perguntas frequentes sobre o rastreador Mounjaro e GLP-1",description:"Respostas para perguntas frequentes sobre o MounjaGO: seguranca AES-256, modo offline, relatorios PDF medicos, precos, LGPD e tratamentos GLP-1 suportados."},es:{title:"FAQ MounjaGO — Preguntas frecuentes sobre el seguimiento Mounjaro y GLP-1",description:"Respuestas a preguntas frecuentes sobre MounjaGO: seguridad AES-256, modo offline, informes PDF medicos, precios, RGPD y tratamientos GLP-1 compatibles."}},n=s[r]||s.fr;document.title=n.title;const t=document.querySelector('meta[name="description"]');return t&&t.setAttribute("content",n.description),()=>{const a={fr:"MounjaGO — App de suivi Mounjaro, Ozempic, Wegovy (GLP-1) | 5€",en:"MounjaGO — Mounjaro, Ozempic, Wegovy Tracker App (GLP-1) | $12",pt:"MounjaGO — Rastreador Mounjaro, Ozempic, Wegovy (GLP-1) | R$ 29,90",es:"MounjaGO — App de seguimiento Mounjaro, Ozempic, Wegovy (GLP-1) | 5€"};document.title=a[r]||a.fr}},[r]);const[o,u]=i.useState({name:"",email:"",subject:"",message:""}),[p,x]=i.useState(!1),[j,v]=i.useState(!1),h=[{id:"general",title:"Général",icon:"",questions:[{q:"Qu'est-ce que MounjaGO ?",a:"MounjaGO est une application web progressive (PWA) qui vous permet de suivre votre traitement Mounjaro de manière sécurisée. Elle offre le suivi hebdomadaire, les calculs métaboliques (BMR/TDEE), le suivi des activités physiques avec calcul des calories, l'analyse nutritionnelle avec IA, et l'export de rapports médicaux en PDF."},{q:r==="en"?"How much does MounjaGO cost?":"Combien coûte MounjaGO ?",a:r==="en"?"MounjaGO costs $12 for lifetime access (launch price, normally $24). No subscription, no hidden fees, no ads. One-time secure payment via Stripe.":"MounjaGO coûte 5€ pour un accès à vie (prix de lancement, normalement 12€). Pas d'abonnement, pas de frais cachés, pas de publicité. Paiement unique et sécurisé via Stripe."},{q:"Sur quels appareils puis-je utiliser MounjaGO ?",a:"MounjaGO fonctionne sur smartphones (iOS et Android), ordinateurs (Windows, Mac, Linux) et tablettes. L'application est responsive et s'adapte automatiquement à votre écran."},{q:r==="en"?"MounjaGO is not on the App Store — how do I install it?":"MounjaGO n'est pas sur l'App Store — comment l'installer ?",a:r==="en"?`MounjaGO is a Progressive Web App (PWA) that installs directly from your browser, without going through Apple or Google.

**On iPhone with Safari:**
1. Open Safari and go to mounjago.com
2. Tap **...** at the bottom right
3. Tap the **Share** button
4. Tap **More** then **Add to Home Screen**

**On iPhone with Chrome:**
1. Open Chrome and go to mounjago.com
2. Tap the **Share** button at the top right
3. Tap **... More**
4. Tap **Add to Home Screen**

**On Android (Chrome):**
1. Open Chrome and go to mounjago.com
2. Tap the 3 dots at the top right
3. Tap **Add to Home Screen**

The MounjaGO icon will appear on your home screen just like a real app!`:`MounjaGO est une application web progressive (PWA) qui s'installe directement depuis votre navigateur, sans passer par Apple ou Google.

**Sur iPhone avec Safari :**
1. Ouvrez Safari et allez sur mounjago.com
2. Appuyez sur **...** en bas a droite
3. Appuyez sur le bouton **Partager**
4. Appuyez sur **Plus** puis **Sur l'ecran d'accueil**

**Sur iPhone avec Chrome :**
1. Ouvrez Chrome et allez sur mounjago.com
2. Appuyez sur le bouton **Partager** en haut a droite
3. Appuyez sur **... Plus**
4. Appuyez sur **Sur l'ecran d'accueil**

**Sur Android (Chrome) :**
1. Ouvrez Chrome et allez sur mounjago.com
2. Appuyez sur les 3 points en haut a droite
3. Appuyez sur **Ajouter a l'ecran d'accueil**

L'icone MounjaGO apparaitra sur votre ecran d'accueil comme une vraie app !`}]},{id:"security",title:"Sécurité & Confidentialité",icon:"",questions:[{q:"Mes données sont-elles sécurisées ?",a:"Oui, absolument. MounjaGO utilise un chiffrement AES-256 (niveau militaire). Toutes vos données sont chiffrées **sur votre appareil avant tout envoi**. Si vous activez la sauvegarde cloud, les données sont envoyées **déjà chiffrées** — le serveur ne peut pas les lire (architecture zero-knowledge). Sans votre mot de passe, vos données sont illisibles."},{q:"Où sont stockées mes données ?",a:"Vos données sont stockées **localement** sur votre appareil. Si vous activez la **sauvegarde cloud** (optionnelle), une copie chiffrée est également stockée sur des serveurs sécurisés en **Union Européenne** (Irlande). Jusqu'à 5 versions de sauvegarde sont conservées. Vous pouvez activer ou désactiver la sauvegarde cloud à tout moment dans les Paramètres."},{q:"Que se passe-t-il si je perds mon mot de passe ?",a:"**Important** : Si vous perdez votre mot de passe, **vos données seront irrécupérables** — même les sauvegardes cloud sont chiffrées avec votre mot de passe. C'est le prix de la confidentialité absolue : personne (pas même nous) ne peut déchiffrer vos données. Notez votre mot de passe dans un endroit sûr."},{q:"L'application est-elle conforme au RGPD ?",a:"Oui, MounjaGO est 100% conforme RGPD : données chiffrées localement, architecture zero-knowledge pour le cloud, serveurs hébergés en Union Européenne (Irlande), aucune transmission de données en clair, vous avez le contrôle total de vos données et pouvez les supprimer à tout moment."}]},{id:"metabolism",title:"Calculs Métaboliques",icon:"",questions:[{q:"Qu'est-ce que le BMR ?",a:`Le **BMR** (Basal Metabolic Rate) ou **Métabolisme de Base** est le nombre de calories que votre corps brûle au repos pour maintenir ses fonctions vitales. Formule utilisée : **Mifflin-St Jeor**.

**Hommes** : BMR = 10 × poids(kg) + 6.25 × taille(cm) - 5 × âge + 5

**Femmes** : BMR = 10 × poids(kg) + 6.25 × taille(cm) - 5 × âge - 161`},{q:"Qu'est-ce que le TDEE ?",a:`Le **TDEE** (Total Daily Energy Expenditure) est le nombre total de calories que vous brûlez par jour, incluant votre métabolisme de base, vos activités quotidiennes et vos exercices physiques.

**Calcul** : TDEE = BMR × Multiplicateur d'activité

**Multiplicateurs** :
- Sédentaire : 1.2
- Léger : 1.375
- Modéré : 1.55
- Actif : 1.725
- Très actif : 1.9`},{q:"Comment est calculé l'objectif calorique ?",a:`Pour une perte de 0.5 kg par semaine :

- Déficit nécessaire : 7700 kcal / 7 jours = **550 kcal/jour**
- Objectif calorique = TDEE - 550 kcal

**Exemple** :
- TDEE = 2200 kcal/jour
- Objectif = 2200 - 550 = **1650 kcal/jour**`}]},{id:"activities",title:"Activités Physiques",icon:"",questions:[{q:"Quels types d'activités puis-je enregistrer ?",a:"MounjaGO propose **13 types d'activités** : Marche lente, Marche rapide, Course à pied, Vélo, Natation, Musculation, Yoga, Danse, Football, Tennis, HIIT, Escalade, et Autre."},{q:"Comment sont calculées les calories brûlées ?",a:`Les calories sont calculées avec la **formule MET** :

\`\`\`
Calories = MET × Poids (kg) × Durée (heures)
\`\`\`

**Exemple** :
- Activité : Course à pied (MET = 9.0)
- Poids : 80 kg
- Durée : 30 minutes (0.5 heure)
- Calories = 9.0 × 80 × 0.5 = **360 kcal**`},{q:"Qu'est-ce qu'une valeur MET ?",a:`Le **MET** (Metabolic Equivalent of Task) mesure l'intensité d'une activité. 1 MET = énergie au repos. Plus le MET est élevé, plus l'activité est intense.

**Exemples** :
- Yoga : 2.5 MET (léger)
- Marche rapide : 4.5 MET (modéré)
- Course à pied : 9.0 MET (intense)
- HIIT : 10.0 MET (très intense)`}]},{id:"pdf",title:"Rapports PDF",icon:"",questions:[{q:"Comment exporter un rapport en PDF ?",a:`1. Allez dans l'onglet **'Mes Rapports'**
2. Cliquez sur une semaine pour l'ouvrir
3. Cliquez sur le bouton **'Exporter PDF'** (icône téléchargement)
4. Le PDF se télécharge automatiquement`},{q:"Que contient le rapport PDF ?",a:`Le rapport PDF inclut :
- En-tête médical avec logo MounjaGO
- Informations patient (nom, âge, sexe, taille, IMC)
- Suivi pondéral (poids de référence, poids actuel, évolution)
- **Graphique d'évolution** du poids (si ≥2 semaines)
- Traitement (dosage, site d'injection)
- Activité physique (niveau + activités détaillées avec calories)
- Données métaboliques (BMR, TDEE, objectif calorique)
- Analyse nutritionnelle complète
- Effets secondaires
- Recommandations personnalisées`},{q:"Puis-je partager le PDF avec mon médecin ?",a:"Oui, absolument ! Le rapport PDF est conçu pour être **professionnel et médical** : format standard A4, présentation claire et lisible, données complètes pour le suivi médical. Parfait pour vos consultations."}]},{id:"medical",title:"Utilisation Médicale",icon:"",questions:[{q:"MounjaGO remplace-t-il un suivi médical ?",a:`**Non, absolument pas.** MounjaGO est un **outil de suivi personnel**. Il ne remplace pas votre médecin, ne prescrit pas de traitement, et ne diagnostique pas de problèmes. Il aide à suivre votre évolution et facilite la communication avec votre médecin.

**Consultez toujours votre médecin** pour l'ajustement des dosages, les effets secondaires sévères, et toute question médicale.`},{q:"Que faire en cas d'effets secondaires sévères ?",a:`**Contactez immédiatement votre médecin** en cas de :
- Douleurs abdominales intenses
- Vomissements persistants
- Vision trouble
- Signes de pancréatite
- Réaction allergique

N'attendez pas, consultez un professionnel.`},{q:"Puis-je ajuster mon dosage en fonction de l'app ?",a:"**Non, jamais.** Seul votre médecin peut ajuster votre dosage, modifier votre traitement, ou interpréter vos résultats médicaux. Ne changez jamais votre traitement sans avis médical."}]},{id:"technical",title:"Problèmes Techniques",icon:"",questions:[{q:"L'application ne charge pas, que faire ?",a:`**Solutions** :
1. Actualisez la page (F5)
2. Videz le cache : Ctrl+Shift+Delete
3. Essayez un autre navigateur
4. Vérifiez que JavaScript est activé
5. Vérifiez votre connexion Internet`},{q:"Le PDF ne se génère pas, pourquoi ?",a:`**Causes possibles** :
- Navigateur incompatible (utilisez Chrome, Firefox, Safari)
- Popup bloquée
- Manque de données (profil incomplet)

**Solutions** :
1. Autorisez les popups pour mounjago.com
2. Vérifiez que votre profil est complet
3. Vérifiez qu'au moins une semaine est enregistrée`},{q:"Le graphique du PDF est vide, pourquoi ?",a:"Le graphique nécessite **au minimum 2 semaines** de données. Enregistrez au moins 2 semaines pour voir la courbe d'évolution."}]}],f=s=>{g(n=>{const t=new Set(n);return t.has(s)?t.delete(s):t.add(s),t})},c=i.useMemo(()=>{if(!l.trim())return h;const s=l.toLowerCase();return h.map(n=>({...n,questions:n.questions.filter(t=>t.q.toLowerCase().includes(s)||t.a.toLowerCase().includes(s))})).filter(n=>n.questions.length>0)},[l]),b=async s=>{if(s.preventDefault(),!o.name||!o.email||!o.subject||!o.message){alert("Veuillez remplir tous les champs");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)){alert("Veuillez entrer une adresse email valide");return}x(!0);try{await new Promise(t=>setTimeout(t,1500)),v(!0),u({name:"",email:"",subject:"",message:""}),setTimeout(()=>v(!1),5e3)}catch(t){console.error("Erreur envoi contact:",t),alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")}finally{x(!1)}};return e.jsxs("div",{className:"max-w-4xl mx-auto pb-24 px-4",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(N,{className:"w-8 h-8 text-teal-600"}),e.jsx("h1",{className:"text-3xl font-bold text-slate-800",children:"Aide & FAQ"})]}),e.jsx("p",{className:"text-slate-600",children:"Trouvez rapidement les réponses à vos questions sur MounjaGO"})]}),e.jsxs("div",{className:"relative mb-8",children:[e.jsx(G,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"}),e.jsx("input",{type:"text",placeholder:"Rechercher dans la FAQ...",value:l,onChange:s=>d(s.target.value),className:"w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors"}),l&&e.jsx("button",{onClick:()=>d(""),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold",children:"×"})]}),l&&e.jsxs("div",{className:"mb-4 text-sm text-slate-600",children:[c.reduce((s,n)=>s+n.questions.length,0)," résultat(s) trouvé(s)"]}),e.jsx("div",{className:"space-y-4",children:c.map(s=>e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:[e.jsxs("button",{onClick:()=>f(s.id),className:"w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h2",{className:"text-lg font-bold text-slate-800",children:s.title}),e.jsxs("span",{className:"text-sm text-slate-500",children:["(",s.questions.length,")"]})]}),m.has(s.id)?e.jsx(y,{className:"w-5 h-5 text-slate-400"}):e.jsx(S,{className:"w-5 h-5 text-slate-400"})]}),m.has(s.id)&&e.jsx("div",{className:"border-t border-slate-100",children:s.questions.map((n,t)=>e.jsxs("div",{className:"px-6 py-5 border-b border-slate-100 last:border-b-0",children:[e.jsxs("h3",{className:"font-semibold text-slate-800 mb-3 flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-600 flex-shrink-0",children:"Q:"}),e.jsx("span",{children:n.q})]}),e.jsx("div",{className:"pl-6 prose prose-sm prose-slate max-w-none",children:e.jsx(P,{components:{p:({children:a})=>e.jsx("p",{className:"mb-3 text-slate-700 leading-relaxed",children:a}),strong:({children:a})=>e.jsx("strong",{className:"font-semibold text-slate-900",children:a}),ul:({children:a})=>e.jsx("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:a}),ol:({children:a})=>e.jsx("ol",{className:"list-decimal pl-5 mb-3 space-y-1",children:a}),li:({children:a})=>e.jsx("li",{className:"text-slate-700",children:a}),code:({children:a})=>e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800",children:a})},children:n.a})})]},t))})]},s.id))}),c.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx("p",{className:"text-slate-600 mb-2 text-lg font-semibold",children:"Aucun résultat trouvé"}),e.jsx("p",{className:"text-sm text-slate-500",children:"Essayez avec d'autres mots-clés"})]}),e.jsxs("div",{className:"mt-12 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-3 text-white",children:[e.jsx(z,{className:"w-6 h-6"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg",children:"Contactez-nous"}),e.jsx("p",{className:"text-sm text-teal-100",children:"Vous n'avez pas trouvé la réponse ? Envoyez-nous un message"})]})]})}),e.jsxs("form",{onSubmit:b,className:"p-6 space-y-4",children:[j&&e.jsxs("div",{className:"bg-green-50 border-2 border-green-500 rounded-lg p-4",children:[e.jsx("p",{className:"font-semibold text-green-900",children:"Message envoyé avec succès !"}),e.jsx("p",{className:"text-sm text-green-700",children:"Nous vous répondrons dans les plus brefs délais."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-2",children:["Nom complet ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",value:o.name,onChange:s=>u({...o,name:s.target.value}),placeholder:"Jean Dupont",required:!0,className:"w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-2",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",value:o.email,onChange:s=>u({...o,email:s.target.value}),placeholder:"jean.dupont@example.com",required:!0,className:"w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors"})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-2",children:["Sujet ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{value:o.subject,onChange:s=>u({...o,subject:s.target.value}),required:!0,className:"w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors",children:[e.jsx("option",{value:"",children:"Sélectionnez un sujet"}),e.jsx("option",{value:"question",children:"Question générale"}),e.jsx("option",{value:"bug",children:"Signaler un bug"}),e.jsx("option",{value:"feature",children:"Suggestion de fonctionnalité"}),e.jsx("option",{value:"security",children:"Question de sécurité"}),e.jsx("option",{value:"account",children:"Problème de compte"}),e.jsx("option",{value:"pdf",children:"Problème avec les PDF"}),e.jsx("option",{value:"other",children:"Autre"})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-2",children:["Message ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{value:o.message,onChange:s=>u({...o,message:s.target.value}),placeholder:"Décrivez votre demande ou votre problème en détail...",required:!0,rows:6,className:"w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"}),e.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"Astuce : Plus votre message est détaillé, plus nous pourrons vous aider efficacement"})]}),e.jsx("button",{type:"submit",disabled:p,className:"w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"animate-spin inline-block",children:"⟳"}),"Envoi en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-5 h-5"}),"Envoyer le message"]})}),e.jsxs("p",{className:"text-xs text-slate-500 text-center",children:["En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à votre demande.",e.jsx("br",{}),"Vos informations ne seront jamais partagées avec des tiers."]})]})]}),e.jsxs("div",{className:"mt-12 bg-teal-50 rounded-xl p-6 border border-teal-200",children:[e.jsx("h3",{className:"font-bold text-teal-900 mb-3",children:"Besoin d'aide supplémentaire ?"}),e.jsx("p",{className:"text-teal-800 text-sm mb-4",children:"Si vous ne trouvez pas la réponse à votre question, consultez notre documentation complète ou contactez le support."}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("a",{href:"/TECHNICAL_DOCS.md",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium",children:"Documentation technique"}),e.jsx("a",{href:"/SECURITY.md",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-white text-teal-700 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-sm font-medium",children:"Guide de sécurité"})]})]}),e.jsx("div",{className:"mt-6 text-center text-sm text-slate-500",children:"MounjaGO v3.0.0 • Dernière mise à jour : 29 janvier 2026"})]})};export{R as default};
