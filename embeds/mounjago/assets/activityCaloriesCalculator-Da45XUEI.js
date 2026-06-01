import{c as _,g as q,i as I,s as T,b as O,d as B}from"./main-Dad23MdQ.js";import{_ as D}from"./vendor-pdf-D4bwRhTv.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],se=_("file-check",H);function G(e){const t=e.toLowerCase().trim();if(I[t])return I[t];const r=q();return r[t]?t:Object.keys(r).find(a=>a.includes(t)||t.includes(a))||t}function U(e){const t=G(e);return q()[t]||null}function Y(e,t){const r=t/100;return{...e,calories:Math.round(e.calories*r),proteins:Math.round(e.proteins*r*10)/10,carbs:Math.round(e.carbs*r*10)/10,sugars:Math.round(e.sugars*r*10)/10,fats:Math.round(e.fats*r*10)/10,saturatedFats:Math.round(e.saturatedFats*r*10)/10,fiber:Math.round(e.fiber*r*10)/10,sodium:Math.round(e.sodium*r)}}function W(e){const t=[],r=e.split(`
`).map(a=>a.trim()).filter(a=>a.length>0),n=[/(\d+(?:\.\d+)?)\s*(?:g|grammes?|gr)\s+(.+)/i,/(\d+(?:\.\d+)?)\s*(?:ml|millilitres?)\s+(.+)/i,/(\d+)\s+(?:cuillères? à soupe|c\.?\s*à\s*s\.?|cas)\s+(.+)/i,/(\d+)\s+(?:cuillères? à café|c\.?\s*à\s*c\.?|cac)\s+(.+)/i,/(\d+)\s+(.+)/i];for(const a of r){let i=!1;for(const o of n){const c=a.match(o);if(c){const[,s,f]=c;let u=parseFloat(s),p="g";a.match(/cuillères? à soupe|cas/i)?(u*=15,p="cuillère à soupe"):a.match(/cuillères? à café|cac/i)?(u*=5,p="cuillère à café"):a.match(/ml|millilitres?/i)&&(p="ml"),t.push({name:f.trim(),quantity:u,unit:p}),i=!0;break}}!i&&a.length>0&&t.push({name:a,quantity:100,unit:"g (estimé)"})}return t}function K(e,t,r=1){const n=[];let a=0,i=0,o=0,c=0,s=0,f=0,u=0,p=0;for(const E of t){const A=U(E.name);if(A){const d=Y(A,E.quantity);n.push({...E,nutrition:d}),a+=d.calories,i+=d.proteins,o+=d.carbs,c+=d.sugars,s+=d.fats,f+=d.saturatedFats,u+=d.fiber,p+=d.sodium}}const y={calories:Math.round(a/r),proteins:Math.round(i/r*10)/10,carbs:Math.round(o/r*10)/10,sugars:Math.round(c/r*10)/10,fats:Math.round(s/r*10)/10,saturatedFats:Math.round(f/r*10)/10,fiber:Math.round(u/r*10)/10,sodium:Math.round(p/r)},b=i*4,m=o*4,F=s*9,g=b+m+F,M={proteinsPercent:Math.round(b/g*100),carbsPercent:Math.round(m/g*100),fatsPercent:Math.round(F/g*100)},j=k(y,M);return{recipeName:e,servings:r,totalNutrition:{calories:Math.round(a),proteins:Math.round(i*10)/10,carbs:Math.round(o*10)/10,sugars:Math.round(c*10)/10,fats:Math.round(s*10)/10,saturatedFats:Math.round(f*10)/10,fiber:Math.round(u*10)/10,sodium:Math.round(p)},perServing:y,distribution:M,ingredients:n,recommendations:j}}function k(e,t){const r=[];return e.calories<300?r.push("Repas léger, idéal pour une collation ou un déjeuner minceur."):e.calories>800?r.push("Repas très énergétique. Pensez à l'équilibrer avec un repas plus léger dans la journée."):r.push("Apport calorique équilibré pour un repas principal."),e.proteins<15?r.push("Faible en protéines. Ajoutez une source protéique (poulet, poisson, tofu, légumineuses)."):e.proteins>40&&r.push("Excellent apport protéique, idéal pour la satiété et le maintien musculaire."),t.carbsPercent>60?r.push("Riche en glucides. Si vous suivez un régime low-carb, réduisez les portions de féculents."):t.carbsPercent<20&&r.push("Très pauvre en glucides, convient aux régimes cétogènes."),e.saturatedFats>10&&r.push("Attention aux graisses saturées élevées. Privilégiez les sources de bonnes graisses (huile d'olive, avocat, noix)."),e.fiber>8?r.push("Excellent apport en fibres ! Bon pour la digestion et la satiété."):e.fiber<3&&r.push("Faible en fibres. Ajoutez des légumes verts ou des céréales complètes."),e.sodium>800&&r.push("Teneur en sel élevée. Limitez l'ajout de sel en cuisine et attention aux aliments transformés."),t.proteinsPercent>=20&&t.proteinsPercent<=35&&t.carbsPercent>=40&&t.carbsPercent<=55&&t.fatsPercent>=20&&t.fatsPercent<=35&&r.push("✓ Repas bien équilibré selon les recommandations nutritionnelles."),r}function J(e){const t=/\|\s*(\d{2,4})\s*\|\s*(\d+(?:\.\d+)?)\s*g\s*\|\s*(\d+(?:\.\d+)?)\s*g\s*\|\s*(\d+(?:\.\d+)?)\s*g/gi,r=/(\d{2,4})\s+(\d+(?:\.\d+)?)\s*g\s+(\d+(?:\.\d+)?)\s*g\s+(\d+(?:\.\d+)?)\s*g/gi;let n=[...e.matchAll(t)];if(n.length===0&&(n=[...e.matchAll(r)]),n.length===0)return null;let a=0,i=0,o=0,c=0;for(const A of n){const[,d,w,l,h]=A;a+=parseInt(d),i+=parseFloat(w),o+=parseFloat(l),c+=parseFloat(h)}const s=n.length,f=Math.round(o*.2),u=Math.round(c*.3),p=Math.round(o*.1),y=a*.8,b={calories:Math.round(a),proteins:Math.round(i*10)/10,carbs:Math.round(o*10)/10,sugars:f,fats:Math.round(c*10)/10,saturatedFats:Math.round(u*10)/10,fiber:p,sodium:Math.round(y)},m=i*4,F=o*4,g=c*9,M=m+F+g,j={proteinsPercent:Math.round(m/M*100)||0,carbsPercent:Math.round(F/M*100)||0,fatsPercent:Math.round(g/M*100)||0},E=k(b,j);return{recipeName:`Menu de la semaine (${s} repas analysés)`,servings:1,totalNutrition:b,perServing:b,distribution:j,ingredients:[],recommendations:E}}function V(e){const t=e.split(`
`).map(l=>l.trim()).filter(l=>l.length>0),r=J(e);if(r)return r;const n=t.some(l=>/\d+\s*kcal/i.test(l)||/^\d{2,4}$/.test(l)),a=t.some(l=>/\d+(\.\d+)?\s*g/i.test(l)),i=t.some(l=>/kcal|prot|carb|gord/i.test(l));if(!n&&!a&&!i)return null;let o=0,c=0,s=0,f=0,u=0,p=!1;for(let l=0;l<t.length;l++){const h=t[l];if(/^(refeição|porção|kcal|prot|carb|gord)/i.test(h)){p=!0;continue}const v=h.match(/^(\d{2,4})$/);if(v&&p){const P=parseInt(v[1]);if(P>=50&&P<=2e3&&(o+=P,l+3<t.length)){const $=t[l+1],L=t[l+2],N=t[l+3],z=$.match(/(\d+(?:\.\d+)?)\s*g/i),R=L.match(/(\d+(?:\.\d+)?)\s*g/i),x=N.match(/(\d+(?:\.\d+)?)\s*g/i);z&&(c+=parseFloat(z[1])),R&&(s+=parseFloat(R[1])),x&&(f+=parseFloat(x[1])),u++,l+=3}continue}const C=h.match(/(\d+)\s*kcal/i);if(C){const P=parseInt(C[1]);o+=P;const $=t.slice(l,l+5).join(" "),L=$.match(/(\d+(?:\.\d+)?)\s*g.*?(?:prot|protein)/i),N=$.match(/(\d+(?:\.\d+)?)\s*g.*?(?:carb|glucid)/i),z=$.match(/(\d+(?:\.\d+)?)\s*g.*?(?:gord|fat|lipid)/i);L&&(c+=parseFloat(L[1])),N&&(s+=parseFloat(N[1])),z&&(f+=parseFloat(z[1])),u++}}if(u===0){const l=/(\d+)\s*(?:kcal)?[,\s]+(\d+(?:\.\d+)?)\s*g\s*(?:prot)?[,\s]+(\d+(?:\.\d+)?)\s*g\s*(?:carb)?[,\s]+(\d+(?:\.\d+)?)\s*g/gi,h=[...e.matchAll(l)];for(const v of h){const[,C,P,$,L]=v;o+=parseInt(C),c+=parseFloat(P),s+=parseFloat($),f+=parseFloat(L),u++}}if(u===0){const l=[...e.matchAll(/(\d+(?:\.\d+)?)/g)];for(let h=0;h<l.length-3;h++){const v=parseFloat(l[h][1]),C=parseFloat(l[h+1][1]),P=parseFloat(l[h+2][1]),$=parseFloat(l[h+3][1]);v>=50&&v<=2e3&&C>=1&&C<=200&&P>=1&&P<=300&&$>=1&&$<=150&&(o+=v,c+=C,s+=P,f+=$,u++,h+=3)}}if(u===0)return null;if(f===0&&c>0&&s>0){const l=c*4+s*4;f=Math.max(0,(o-l)/9)}const y=Math.round(s*.2),b=Math.round(f*.3),m=Math.round(s*.1),F=o*.8,g={calories:Math.round(o),proteins:Math.round(c*10)/10,carbs:Math.round(s*10)/10,sugars:y,fats:Math.round(f*10)/10,saturatedFats:Math.round(b*10)/10,fiber:m,sodium:Math.round(F)},M=c*4,j=s*4,E=f*9,A=M+j+E,d={proteinsPercent:Math.round(M/A*100)||0,carbsPercent:Math.round(j/A*100)||0,fatsPercent:Math.round(E/A*100)||0},w=k(g,d);return{recipeName:`Menu de la semaine (${u} repas analysés)`,servings:1,totalNutrition:g,perServing:g,distribution:d,ingredients:[],recommendations:w}}function Q(e,t=1){const r=V(e);if(r)return r;const n=W(e);return K("Menu du jour",n,t)}const X=async e=>{const t={"Content-Type":"application/json"};if(T){const{data:{session:d}}=await T.auth.getSession();d!=null&&d.access_token&&(t.Authorization=`Bearer ${d.access_token}`)}const r=await fetch("/.netlify/functions/nutrition-analyze",{method:"POST",headers:t,body:JSON.stringify({menuText:e})});if(!r.ok){const d=await r.json().catch(()=>({}));throw new Error(`Mistral API error: ${r.status} - ${d.error||"Unknown"}`)}const n=await r.json(),a=n.weeklyTotal,i=14,o=7,c={calories:Math.round(a.calories/i),proteins:Math.round(a.proteins/i*10)/10,carbs:Math.round(a.carbs/i*10)/10,fats:Math.round(a.fats/i*10)/10},s={calories:Math.round(a.calories/o),proteins:Math.round(a.proteins/o*10)/10,carbs:Math.round(a.carbs/o*10)/10,fats:Math.round(a.fats/o*10)/10,fiber:Math.round(a.fiber/o*10)/10,sodium:Math.round(a.sodium/o)},f=Math.min(10,Math.max(1,Math.round(s.proteins/8)));let u="Hydratez-vous regulierement tout au long de la journee (objectif : 1.5-2L/jour).";s.sodium>2400?u="Teneur en sel elevee : buvez au moins 2-2.5L d'eau par jour pour compenser.":s.sodium<800&&(u="Faible teneur en sel. Maintenez une hydratation normale (1.5-2L/jour).");const p=a.proteins*4,y=a.carbs*4,b=a.fats*9,m=p+y+b,F=m>0?Math.round(p/m*100):0,g=m>0?Math.round(y/m*100):0,M=m>0?Math.round(b/m*100):0,j=n.recommendations.length>0?n.recommendations:["Analyse effectuee par IA. Verifiez les valeurs avec votre nutritionniste."],E=n.confidence==="high"?"Fiabilite elevee":n.confidence==="low"?"Fiabilite faible (plats complexes)":"Fiabilite moyenne",A=`
Analyse Nutritionnelle Hebdomadaire (IA)
━━━━━━━━━━━━━━━━━━━━━━━━━
${n.mealCount} plats detectes - 14 repas/semaine (2/jour x 7 jours)
${E}

TOTAL SEMAINE :
Calories : ${a.calories} kcal
Proteines : ${a.proteins}g
Glucides : ${a.carbs}g
Lipides : ${a.fats}g
Fibres : ${a.fiber}g
Sel : ${(a.sodium/1e3).toFixed(1)}g

MOYENNE PAR REPAS :
Calories : ${c.calories} kcal
Proteines : ${c.proteins}g
Glucides : ${c.carbs}g
Lipides : ${c.fats}g

MOYENNE PAR JOUR :
Calories : ${s.calories} kcal/jour
Proteines : ${s.proteins}g/jour
Glucides : ${s.carbs}g/jour
Lipides : ${s.fats}g/jour
Fibres : ${s.fiber}g/jour
Sel : ${(s.sodium/1e3).toFixed(1)}g/jour

Repartition Energetique :
Proteines : ${F}%
Glucides : ${g}%
Lipides : ${M}%

Recommandations :
${j.map(d=>`- ${d}`).join(`
`)}
━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();if(n.items&&n.items.length>0)try{const d=O(n.items);d>0&&console.log(`[Nutrition] ${d} nouvel(s) aliment(s) appris. Base locale : ${B()} aliments IA.`)}catch(d){console.warn("[Nutrition] Erreur sauvegarde base apprise:",d)}return{summary:A,proteinScore:f,hydrationAdvice:u}},Z=e=>{const t=Q(e,1),r=t.recipeName.match(/(\d+)\s*repas/),n=r?parseInt(r[1]):1,a=t.perServing,i=14,o=7,c={calories:Math.round(a.calories/i),proteins:Math.round(a.proteins/i*10)/10,carbs:Math.round(a.carbs/i*10)/10,fats:Math.round(a.fats/i*10)/10},s={calories:Math.round(a.calories/o),proteins:Math.round(a.proteins/o*10)/10,carbs:Math.round(a.carbs/o*10)/10,fats:Math.round(a.fats/o*10)/10,fiber:Math.round(a.fiber/o*10)/10,sodium:Math.round(a.sodium/o)},f=Math.min(10,Math.max(1,Math.round(s.proteins/8)));let u="Hydratez-vous regulierement tout au long de la journee (objectif : 1.5-2L/jour).";s.sodium>2400?u="Teneur en sel elevee : buvez au moins 2-2.5L d'eau par jour pour compenser.":s.sodium<800&&(u="Faible teneur en sel. Maintenez une hydratation normale (1.5-2L/jour).");const p=[];return s.calories<1200?p.push("Apport calorique estime bas (~"+s.calories+" kcal/jour). Assurez-vous de manger suffisamment pour eviter les carences."):s.calories>2500?p.push("Apport calorique estime eleve (~"+s.calories+" kcal/jour). Verifiez les portions."):p.push("Apport calorique estime dans la norme (~"+s.calories+" kcal/jour)."),s.proteins<50?p.push("Proteines insuffisantes (~"+s.proteins+"g/jour). Augmentez poulet, poisson, oeufs, legumineuses."):s.proteins>=70&&p.push("Bon apport proteique (~"+s.proteins+"g/jour), ideal pour la satiete et le maintien musculaire."),s.fiber<15?p.push("Fibres insuffisantes (~"+s.fiber+"g/jour). Ajoutez legumes verts, fruits, cereales completes."):s.fiber>=25&&p.push("Excellent apport en fibres ! Bon pour la digestion et la satiete."),t.distribution.fatsPercent>40&&p.push("Part de lipides elevee ("+t.distribution.fatsPercent+"%). Privilegiez les bonnes graisses (huile d'olive, avocat, noix)."),t.distribution.proteinsPercent>=15&&t.distribution.proteinsPercent<=35&&t.distribution.carbsPercent>=40&&t.distribution.carbsPercent<=60&&t.distribution.fatsPercent>=20&&t.distribution.fatsPercent<=40&&p.push("Bonne repartition energetique globale."),{summary:`
Analyse Nutritionnelle Hebdomadaire (locale)
━━━━━━━━━━━━━━━━━━━━━━━━━
${n} plats detectes - 14 repas/semaine (2/jour x 7 jours)

TOTAL SEMAINE :
Calories : ${a.calories} kcal
Proteines : ${a.proteins}g
Glucides : ${a.carbs}g
Lipides : ${a.fats}g
Fibres : ${a.fiber}g
Sel : ${(a.sodium/1e3).toFixed(1)}g

MOYENNE PAR REPAS :
Calories : ${c.calories} kcal
Proteines : ${c.proteins}g
Glucides : ${c.carbs}g
Lipides : ${c.fats}g

MOYENNE PAR JOUR :
Calories : ${s.calories} kcal/jour
Proteines : ${s.proteins}g/jour
Glucides : ${s.carbs}g/jour
Lipides : ${s.fats}g/jour
Fibres : ${s.fiber}g/jour
Sel : ${(s.sodium/1e3).toFixed(1)}g/jour

Repartition Energetique :
Proteines : ${t.distribution.proteinsPercent}%
Glucides : ${t.distribution.carbsPercent}%
Lipides : ${t.distribution.fatsPercent}%

Recommandations :
${p.map(m=>`- ${m}`).join(`
`)}
━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim(),proteinScore:f,hydrationAdvice:u}},oe=async e=>{try{const t=await X(e);return console.log("[Nutrition] Analyse Mistral AI reussie"),t}catch(t){console.warn("[Nutrition] Mistral AI indisponible, fallback local:",t)}try{const t=Z(e);return console.log("[Nutrition] Analyse locale (fallback) utilisee"),t}catch(t){throw console.error("[Nutrition] Echec analyse locale:",t),new Error("Impossible d'analyser le menu pour le moment.")}},ne=async(e,t)=>{try{const r=t?e.weight-t:0,n=r<0?`↓ ${Math.abs(r).toFixed(1)} kg`:r>0?`↑ ${r.toFixed(1)} kg`:"stable",a=e.sideEffects&&e.sideEffects.length>0?`⚠️ Effets notés : ${e.sideEffects.map(f=>`${f.name} (${f.severity})`).join(", ")}
• Mentionnez ces symptômes à votre médecin si persistants`:"✓ Aucun effet secondaire signalé",i=e.mood?e.mood==="Terrible"||e.mood==="Mauvais"?`Humeur : ${e.mood}
- Le traitement peut affecter l'humeur. Si cela persiste, parlez-en a votre medecin.
- L'activite physique douce et le sommeil de qualite peuvent aider.`:e.mood==="Moyen"?`Humeur : ${e.mood}
- Continuez a prendre soin de votre bien-etre mental.
- La meditation et la marche sont d'excellents allies.`:`Humeur : ${e.mood}
- Excellent moral ! Cela favorise l'adherence au traitement.`:"",o=e.appetite==="faible"?`🍽️ Appétit faible : normal avec ${e.medication||"Mounjaro"}. Assurez un apport protéique suffisant.`:e.appetite==="modéré"?"✓ Appétit modéré : idéal pour une perte de poids progressive.":"🍴 Appétit normal : continuez votre plan alimentaire équilibré.",c=e.hydration==="faible"?"💧 Hydratation insuffisante ! Augmentez votre consommation d'eau (objectif: 2-2.5L/jour).":e.hydration==="modérée"?"💧 Hydratation correcte. Essayez d'atteindre 2.5L/jour.":"✓ Excellente hydratation !";return`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 RAPPORT HEBDOMADAIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Semaine du ${new Date(e.date).toLocaleDateString("fr-FR")}
💉 Traitement : ${e.medication||"Mounjaro"} ${e.dosage}

⚖️ POIDS :
• Poids actuel : ${e.weight} kg
${t?`• Évolution : ${n} depuis la dernière mesure`:""}
${r<-.5?"✓ Excellente progression !":r<0?"✓ Perte de poids progressive":r>.5?"⚠️ Prise de poids constatée":"• Poids stable"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${i?`
BIEN-ETRE MENTAL :
${i}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`:""}
${o}

${c}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏥 SUIVI MÉDICAL :
${a}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 CONSEILS POUR LA SEMAINE :
${e.appetite==="faible"?"• Privilégiez des petites portions fréquentes si vous avez du mal à manger":""}
${e.hydration!=="bonne"?"• Gardez une bouteille d'eau à portée de main":""}
${r===0?"• Plateau de poids normal. Continuez vos efforts, la perte reprendra":""}
${r<0?"• Maintenez votre routine actuelle, elle fonctionne bien !":""}
${e.mood==="Terrible"||e.mood==="Mauvais"?"• Prenez du temps pour vous : repos, activités plaisantes, contact social":""}
${e.notes?`
📝 VOS NOTES : ${e.notes}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()}catch(r){return console.error("Error generating report:",r),"Désolé, je n'ai pas pu générer le rapport cette fois-ci."}};let S=null;async function ee(){if(!S){S=await D(()=>import("./vendor-pdf-D4bwRhTv.js").then(t=>t.p),[],import.meta.url);const e=await D(()=>import("./vendor-pdf-D4bwRhTv.js").then(t=>t.c),[],import.meta.url);S.GlobalWorkerOptions.workerSrc=e.default}return S}async function ie(e){try{const t=await ee(),r=atob(e),n=new Uint8Array(r.length);for(let o=0;o<r.length;o++)n[o]=r.charCodeAt(o);const a=await t.getDocument({data:n}).promise;let i="";for(let o=1;o<=a.numPages;o++){const f=(await(await a.getPage(o)).getTextContent()).items.map(u=>u.str).join(" ");i+=f+`
`}return i.trim()}catch(t){throw console.error("Error extracting text from PDF:",t),new Error("Impossible d'extraire le texte du PDF. Verifiez que le fichier est valide.")}}function ce(e){return e.type==="application/pdf"&&e.name.toLowerCase().endsWith(".pdf")}function le(e){return new Promise((t,r)=>{const n=new FileReader;n.onloadend=()=>{const i=n.result.split(",")[1];t(i)},n.onerror=r,n.readAsDataURL(e)})}const te={"Marche lente":2.5,"Marche rapide":4.5,"Course à pied":9,Vélo:6,Natation:8,Musculation:5,Yoga:2.5,Danse:5.5,Football:7,Tennis:7.3,HIIT:10,Escalade:8,Autre:5};function ue(e,t,r){const n=te[e],a=t/60,i=n*r*a;return Math.round(i)}function de(e){return{"Marche lente":"🚶","Marche rapide":"🚶‍♂️","Course à pied":"🏃",Vélo:"🚴",Natation:"🏊",Musculation:"💪",Yoga:"🧘",Danse:"💃",Football:"⚽",Tennis:"🎾",HIIT:"🔥",Escalade:"🧗",Autre:"🏋️"}[e]}export{se as F,oe as a,ne as b,ue as c,ie as e,le as f,de as g,ce as v};
