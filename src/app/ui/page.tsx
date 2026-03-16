import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Design System — Madrid & Toi",
  robots: { index: false, follow: false },
};

export default function UiPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Index */}
      <section className="pt-32 pb-10 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-semibold tracking-widest uppercase text-sm mb-4">Madrid & Toi</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Bibliothèque d&apos;éléments
          </h1>
          <p className="text-[#F5ECD7]/60 mb-8">Page non indexée — référence visuelle interne.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Hero","Sections","Stat cards","Blockquote","Étapes","Cards","Checklist","Tips","Tableau","Pills","Liens","Tags","Listes","Newsletter","Footer"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ","-")}`} className="px-3 py-1.5 rounded-full bg-white/10 text-[#F5ECD7]/70 hover:bg-white/20 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HERO ─── */}
      <section id="hero" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">01 — Hero</p>

          {/* Variante standard */}
          <div className="mb-4">
            <p className="text-xs text-[#5a3e35]/40 mb-3">Variante standard (max-w-3xl)</p>
            <div className="bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8] rounded-2xl p-8">
              <Link href="#" className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-6 hover:gap-3 transition-all">
                ← Retour à la section parent
              </Link>
              <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-3">Label de catégorie</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810] leading-tight mb-4">
                Titre principal de la page{" "}
                <span className="italic text-[#C8614A]">avec accent terracotta</span>
              </h1>
              <p className="text-lg text-[#5a3e35] leading-relaxed">
                Description introductive de la page. Une à deux phrases qui posent le contexte et donnent envie de lire la suite.
              </p>
            </div>
          </div>

          {/* Variante avec tags */}
          <div>
            <p className="text-xs text-[#5a3e35]/40 mb-3">Variante avec tags (ex: /salaire-madrid)</p>
            <div className="bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
                Titre avec{" "}
                <span className="italic text-[#C8614A]">tags dessous</span>
              </h2>
              <p className="text-[#5a3e35] mb-4">Description courte.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag 1</span>
                <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag 2</span>
                <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTIONS ─── */}
      <section id="sections" className="py-16 px-6 bg-[#EDE0C8] border-b-4 border-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">02 — Sections de contenu</p>
          <p className="text-[#5a3e35] text-sm mb-6">Les sections alternent <code className="bg-white px-1 rounded text-xs">bg-[#F5ECD7]</code> et <code className="bg-white px-1 rounded text-xs">bg-[#EDE0C8]</code>. Padding fixe : <code className="bg-white px-1 rounded text-xs">py-20 px-6</code>. Largeur contenu : <code className="bg-white px-1 rounded text-xs">max-w-3xl mx-auto</code>.</p>

          <div className="space-y-4">
            <div className="bg-[#F5ECD7] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">H2 — Titre de section</h2>
              <p className="text-[#5a3e35] leading-relaxed text-lg">Corps de texte standard. Taille <code className="bg-white px-1 rounded text-xs">text-lg</code> pour les paragraphes principaux. Couleur <code className="bg-white px-1 rounded text-xs">text-[#5a3e35]</code>.</p>
            </div>
            <div className="bg-[#EDE0C8] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">H2 — Section alternée</h2>
              <p className="text-[#5a3e35] leading-relaxed text-lg">Même structure, fond alterné. Les H3 (sous-titres dans une section) sont en <code className="bg-white px-1 rounded text-xs">font-semibold text-[#2C1810] text-lg</code>.</p>
              <h3 className="font-semibold text-[#2C1810] text-lg mt-4 mb-2">H3 — Sous-titre de section</h3>
              <p className="text-[#5a3e35] leading-relaxed">Texte secondaire, même couleur, taille de base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STAT CARDS ─── */}
      <section id="stat-cards" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">03 — Stat cards</p>
          <p className="text-[#5a3e35] text-sm mb-6">Grille de 2, 3 ou 4 colonnes. Fond blanc, ombre légère. Valeur en Playfair terracotta, label petit en dessous.</p>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">3 colonnes</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">1 221 €</p>
                  <p className="text-[#5a3e35] text-sm">SMI brut mensuel 2026</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">3 200 €</p>
                  <p className="text-[#5a3e35] text-sm">Salaire moyen à Madrid</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">25 %</p>
                  <p className="text-[#5a3e35] text-sm">Des offres qualifiées du pays</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">4 colonnes (valeur + label court)</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["2–6 sem.", "15–30 min", "Sept–Oct", "J+0"].map((v) => (
                  <div key={v} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                    <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C8614A] mb-2">{v}</p>
                    <p className="text-[#5a3e35] text-xs leading-snug">Label court</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCKQUOTE ─── */}
      <section id="blockquote" className="py-16 px-6 bg-[#2C1810] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#E8A838]/40 uppercase tracking-widest mb-6">04 — Blockquote / Citation</p>
          <p className="text-[#F5ECD7]/50 text-sm mb-8">Toujours sur fond sombre <code className="bg-white/10 px-1 rounded text-xs">bg-[#2C1810]</code>. Bordure or, texte or, italic Playfair.</p>

          <blockquote className="border-l-4 border-[#E8A838] pl-6 mb-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Citation éditoriale. Toujours percutante, une seule phrase ou deux maximum. Jamais de guillemets — la bordure suffit.
            </p>
          </blockquote>

          <p className="text-[#F5ECD7]/50 text-sm mb-4">La section sombre peut contenir d&apos;autres éléments avant la blockquote :</p>
          <div className="bg-white/10 rounded-2xl p-5 mb-6">
            <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Titre d&apos;un bloc interne</p>
            <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">Contenu d&apos;un bloc sur fond sombre. Texte en <code className="bg-white/10 px-1 rounded text-xs">text-[#F5ECD7]/80</code>, titre en <code className="bg-white/10 px-1 rounded text-xs">text-[#E8A838]</code>.</p>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              La blockquote termine toujours la section sombre.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─── ÉTAPES NUMÉROTÉES ─── */}
      <section id="étapes" className="py-16 px-6 bg-[#EDE0C8] border-b-4 border-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">05 — Étapes numérotées</p>
          <p className="text-[#5a3e35] text-sm mb-6">Uniquement pour les processus où l&apos;ordre est obligatoire. Cercle terracotta, chiffre blanc. Existe en variante fond clair et fond sombre.</p>

          <div className="space-y-4 mb-10">
            <p className="text-xs text-[#5a3e35]/40">Variante fond clair</p>
            <div className="space-y-6">
              {[
                { n: "1", title: "Première étape", body: "Description de l'étape. Texte explicatif en text-[#5a3e35]." },
                { n: "2", title: "Deuxième étape", body: "Description de l'étape suivante." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">{step.n}</div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] text-lg mb-1">{step.title}</h3>
                    <p className="text-[#5a3e35] leading-relaxed text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2C1810] rounded-2xl p-8">
            <p className="text-xs text-[#F5ECD7]/30 mb-6">Variante fond sombre (ex: /papiers/nie)</p>
            <div className="space-y-6">
              {[
                { n: "1", title: "Première étape", body: "Texte en text-[#F5ECD7]/80. Titre en text-white via font-[family-name:var(--font-playfair)]." },
                { n: "2", title: "Deuxième étape", body: "Même structure, fond inversé." },
              ].map((step) => (
                <div key={step.n} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARDS ─── */}
      <section id="cards" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">06 — Cards</p>

          <div className="space-y-8">
            {/* Cards simples */}
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Card contenu simple (bg-white, shadow-sm)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-2">Label catégorie</p>
                  <p className="font-semibold text-[#2C1810] mb-1">Titre de la card</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">Contenu descriptif. Utilisée pour les secteurs, les entreprises, les options, les conseils.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-2">Autre catégorie</p>
                  <p className="font-semibold text-[#2C1810] mb-1">Autre titre</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">Même structure. La grille est 1 col mobile, 2 col desktop.</p>
                </div>
              </div>
            </div>

            {/* Cards index (pages d'index) */}
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Card index (pages /travailler, /papiers…) — état actif</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link href="#" className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">💻</div>
                    <span className="text-[#C8614A] text-xs font-semibold">Lire le guide →</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#C8614A] transition-colors">Titre du guide</h2>
                  <p className="text-[#5a3e35]/70 text-sm leading-relaxed">Description courte du guide. Une à deux phrases.</p>
                </Link>
                <div className="p-8 rounded-3xl bg-white shadow-sm opacity-50">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">🔍</div>
                    <span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full font-semibold">Bientôt</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">Guide à venir</h2>
                  <p className="text-[#5a3e35]/70 text-sm leading-relaxed">État désactivé — opacité 50%, pas de hover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHECKLIST & TIPS ─── */}
      <section id="checklist" className="py-16 px-6 bg-[#EDE0C8] border-b-4 border-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">07 — Checklist & Tips</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Checklist (header terracotta)</p>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-[#C8614A]">
                  <p className="text-white font-semibold">📋 Titre de la checklist</p>
                </div>
                <div className="divide-y divide-[#EDE0C8]">
                  {[
                    { doc: "Document requis", detail: "Original + photocopie" },
                    { doc: "Formulaire à remplir", detail: "À télécharger avant" },
                    { doc: "Paiement à effectuer", detail: "~12 € en banque" },
                  ].map((item) => (
                    <div key={item.doc} className="px-6 py-4 flex items-start gap-4">
                      <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#2C1810] text-sm">{item.doc}</p>
                        <p className="text-[#5a3e35]/70 text-xs mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Tips list (header sombre)</p>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-[#2C1810]">
                  <p className="text-[#E8A838] font-semibold">💡 Titre des astuces</p>
                </div>
                <div className="divide-y divide-[#EDE0C8]">
                  {[
                    { emoji: "⏰", tip: "Astuce numéro 1 — conseil court et actionnable" },
                    { emoji: "🌙", tip: "Astuce numéro 2 — une info utile par ligne" },
                    { emoji: "💼", tip: "Astuce numéro 3 — max 4-5 items" },
                  ].map((item) => (
                    <div key={item.tip} className="px-6 py-4 flex items-start gap-4">
                      <span className="text-xl flex-shrink-0">{item.emoji}</span>
                      <p className="text-[#5a3e35] text-sm leading-relaxed">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TABLEAU ─── */}
      <section id="tableau" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">08 — Tableaux de données</p>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Tableau simple (2 colonnes)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#EDE0C8]">
                      <th className="text-left px-4 py-3 rounded-tl-xl text-[#2C1810] font-semibold">Colonne A</th>
                      <th className="text-right px-4 py-3 rounded-tr-xl text-[#2C1810] font-semibold">Colonne B</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDE0C8]">
                    {[["Ligne 1", "Valeur 1"],["Ligne 2","Valeur 2"],["Ligne 3","Valeur 3"]].map(([a,b]) => (
                      <tr key={a} className="bg-white">
                        <td className="px-4 py-3 text-[#5a3e35]">{a}</td>
                        <td className="px-4 py-3 text-right text-[#5a3e35] font-medium">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#5a3e35]/50 text-xs mt-2">Ligne note de bas : source ou précision.</p>
            </div>

            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Tableau comparatif (cards empilées, ex: Paris vs Madrid)</p>
              <div className="space-y-3">
                {[
                  { poste: "Développeur junior", paris: "34 000 – 40 000 €", madrid: "24 000 – 32 000 €" },
                  { poste: "Responsable marketing", paris: "36 000 – 48 000 €", madrid: "28 000 – 38 000 €" },
                ].map((item) => (
                  <div key={item.poste} className="bg-white rounded-2xl p-5 shadow-sm">
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] mb-3">{item.poste}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[#5a3e35]/50 text-xs uppercase tracking-widest mb-1">Paris</p>
                        <p className="text-[#5a3e35] font-semibold text-sm">{item.paris}</p>
                      </div>
                      <div>
                        <p className="text-[#C8614A] text-xs uppercase tracking-widest mb-1">Madrid</p>
                        <p className="text-[#C8614A] font-semibold text-sm">{item.madrid}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLS ─── */}
      <section id="pills" className="py-16 px-6 bg-[#EDE0C8] border-b-4 border-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">09 — Pills liens connexes</p>
          <p className="text-[#5a3e35] text-sm mb-6">Section récurrente en fin de page. Label uppercase, puis pills blanches. Fond <code className="bg-white px-1 rounded text-xs">bg-[#F5ECD7]</code> ou <code className="bg-white px-1 rounded text-xs">bg-[#EDE0C8]</code>.</p>

          <div className="bg-[#F5ECD7] rounded-2xl p-8">
            <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">Ça pourrait aussi t&apos;aider</p>
            <div className="flex flex-wrap gap-3">
              {["Lien connexe 1","Lien connexe 2","Lien connexe 3","Lien connexe 4"].map((l) => (
                <Link key={l} href="#" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIENS ─── */}
      <section id="liens" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">10 — Liens inline</p>

          <div className="space-y-6">
            <div className="bg-[#F5ECD7] rounded-2xl p-6">
              <p className="text-xs text-[#5a3e35]/40 mb-3">Sur fond clair — terracotta souligné</p>
              <p className="text-[#5a3e35] text-lg">
                Tu auras besoin d&apos;un{" "}
                <Link href="#" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">NIE</Link>{" "}
                avant de signer ton bail. Consulte aussi la page sur la{" "}
                <Link href="#" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">Seguridad Social</Link>.
              </p>
            </div>
            <div className="bg-[#2C1810] rounded-2xl p-6">
              <p className="text-xs text-[#F5ECD7]/30 mb-3">Sur fond sombre — or souligné</p>
              <p className="text-[#F5ECD7]/80 text-lg">
                Retrouve les quartiers comme{" "}
                <Link href="#" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">Malasaña</Link>{" "}
                ou{" "}
                <Link href="#" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">Chueca</Link>{" "}
                dans notre guide logement.
              </p>
            </div>
            <div className="bg-[#EDE0C8] rounded-2xl p-6">
              <p className="text-xs text-[#5a3e35]/40 mb-3">Bouton CTA externe (dans une étape)</p>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors">
                Lien externe officiel ↗
              </a>
              <span className="mx-3 text-[#5a3e35]/30">ou</span>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#C8614A]/30 text-[#C8614A] text-sm font-semibold hover:bg-white transition-colors">
                Lien secondaire ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TAGS ─── */}
      <section id="tags" className="py-16 px-6 bg-[#EDE0C8] border-b-4 border-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">11 — Tags & badges</p>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag terracotta</span>
            <span className="px-3 py-1.5 rounded-full bg-[#7A8C5E]/10 text-[#7A8C5E] text-sm font-semibold">Tag vert</span>
            <span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full font-semibold">Bientôt</span>
            <span className="px-3 py-1.5 rounded-full bg-[#2C1810]/10 text-[#2C1810] text-sm font-semibold">Tag sombre</span>
          </div>
        </div>
      </section>

      {/* ─── LISTES ─── */}
      <section id="listes" className="py-16 px-6 bg-[#F5ECD7] border-b-4 border-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#5a3e35]/40 uppercase tracking-widest mb-6">12 — Listes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Liste points négatifs (✕)</p>
              <ul className="text-[#5a3e35] space-y-3">
                {["Première erreur à éviter","Deuxième point d'attention","Troisième élément"].map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
                    <span className="text-sm">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-[#5a3e35]/40 mb-3">Liste points bullet (—)</p>
              <ul className="text-[#5a3e35] space-y-3">
                {["Premier élément de la liste","Deuxième élément","Troisième élément"].map((e) => (
                  <li key={e} className="flex gap-2 items-start">
                    <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                    <span className="text-sm">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">13 — Newsletter (identique sur toutes les pages)</p>
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">
            La description change selon la page — sinon tout est identique.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#F5ECD7]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <section id="footer" className="py-2 px-6 bg-[#2C1810]">
        <p className="text-xs font-mono text-[#F5ECD7]/20 uppercase tracking-widest text-center py-4 mb-0">14 — Footer (identique sur toutes les pages)</p>
      </section>
      <footer className="py-10 px-6 bg-[#2C1810] text-center">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors">
          Madrid & Toi
        </Link>
        <p className="text-[#F5ECD7]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
