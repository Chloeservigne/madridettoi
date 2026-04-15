import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/prix',
  },
  title: "Prix des loyers à Madrid par quartier en 2026 — Madrid & Toi",
  description:
    "Loyers à Madrid en 2026 : prix au m² et fourchettes par type (T1, T2, T3) dans chaque quartier. Comparaison Paris–Madrid et conseils pour trouver au bon prix.",
};

const statCards = [
  { value: "~22 €/m²", label: "Prix moyen à Madrid (données Idealista déc. 2025)" },
  { value: "20% moins", label: "Que Paris en moyenne sur le loyer au m²" },
  { value: "+9,7 %", label: "Hausse annuelle 2025 dans les quartiers centraux" },
];

const quartiersData = [
  { quartier: "Salamanca (Goya, Lista)", zone: "Centre premium", prix: "24 – 27 €/m²", couleur: "text-[#C8614A] font-semibold" },
  { quartier: "Chamberí (Almagro, Trafalgar)", zone: "Centre premium", prix: "23 – 26 €/m²", couleur: "text-[#C8614A] font-semibold" },
  { quartier: "Centro (Malasaña, Chueca)", zone: "Centre premium", prix: "24 – 27 €/m²", couleur: "text-[#C8614A] font-semibold" },
  { quartier: "Retiro (Ibiza, Jerónimos)", zone: "Centre intermédiaire", prix: "21 – 24 €/m²", couleur: "text-[#5a3e35]" },
  { quartier: "Chamartín (Prosperidad)", zone: "Centre intermédiaire", prix: "21 – 23 €/m²", couleur: "text-[#5a3e35]" },
  { quartier: "Tetuán (Berruguete, Bellas Vistas)", zone: "Centre intermédiaire", prix: "20 – 22 €/m²", couleur: "text-[#5a3e35]" },
  { quartier: "Moncloa-Argüelles", zone: "Centre intermédiaire", prix: "19 – 21 €/m²", couleur: "text-[#5a3e35]" },
  { quartier: "Arganzuela (Legazpi, Delicias)", zone: "Centre intermédiaire", prix: "20 – 23 €/m²", couleur: "text-[#5a3e35]" },
  { quartier: "Carabanchel, Latina", zone: "Périphérique abordable", prix: "17 – 19 €/m²", couleur: "text-[#7A8C5E]" },
  { quartier: "Vallecas (Puente, Villa)", zone: "Périphérique abordable", prix: "16 – 18 €/m²", couleur: "text-[#7A8C5E]" },
  { quartier: "Villaverde, Vicálvaro", zone: "Périphérique abordable", prix: "15 – 17 €/m²", couleur: "text-[#7A8C5E]" },
];

export default function PrixLogementPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Prix des loyers à Madrid par quartier en 2026",
      description: "Prix au m² et fourchettes T1/T2/T3 par quartier à Madrid, comparaison Paris–Madrid, évolution des loyers 2025-2026.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      url: "https://madrid-et-toi.com/logement/prix",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/prix" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Prix des loyers", item: "https://madrid-et-toi.com/logement/prix" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Marché immobilier
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Prix des loyers à Madrid —{" "}
            <span className="italic text-[#C8614A]">par quartier en 2026</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Combien coûte vraiment un appartement à Madrid ? Du studio au T3,
            du centre haussmanien aux quartiers abordables — les chiffres réels
            pour budgéter ton installation.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Données Idealista déc. 2025
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              11 quartiers comparés
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Comparaison Paris incluse
            </span>
          </div>
          <AuthorBadge date="avril 2026" />
        </div>
      </section>

      {/* Stat cards */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statCards.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C8614A] mb-2">
                  {s.value}
                </p>
                <p className="text-[#5a3e35] text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau par quartier */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Prix au m² par quartier
          </h2>
          <p className="text-[#5a3e35] text-sm mb-8 leading-relaxed">
            Données croisées Idealista / Fotocasa, décembre 2025. Les fourchettes
            reflètent la variation entre les deux portails et au sein d&apos;un
            même quartier selon l&apos;état et l&apos;étage.
          </p>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2C1810]">
                  <th className="text-left px-5 py-4 text-[#F5ECD7] font-semibold">Quartier</th>
                  <th className="text-left px-5 py-4 text-[#F5ECD7]/60 font-normal hidden sm:table-cell">Zone</th>
                  <th className="text-right px-5 py-4 text-[#E8A838] font-semibold">€/m²/mois</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE0C8]">
                {quartiersData.map((row) => (
                  <tr key={row.quartier} className="hover:bg-[#F5ECD7]/50 transition-colors">
                    <td className="px-5 py-4 text-[#2C1810] font-medium">{row.quartier}</td>
                    <td className="px-5 py-4 text-[#5a3e35]/60 text-xs hidden sm:table-cell">{row.zone}</td>
                    <td className={`px-5 py-4 text-right ${row.couleur}`}>{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#5a3e35]/40 text-xs px-5 py-3">
              Sources : Idealista rapport déc. 2025, Fotocasa Índice Inmobiliario déc. 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Fourchettes par type */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Loyer mensuel par type et par zone
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-[#C8614A]">
                <p className="text-white font-semibold">Centre premium — Salamanca, Chamberí, Malasaña, Chueca</p>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#EDE0C8]">
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">Studio / Estudio (25–40 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">900 – 1 300 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T1 / 1 chambre (45–60 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">1 100 – 1 800 €</td>
                  </tr>
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">T2 / 2 chambres (65–85 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">1 500 – 2 500 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T3 / 3 chambres (90–110 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">2 000 – 3 500 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-[#5a3e35]">
                <p className="text-white font-semibold">Centre intermédiaire — Retiro, Tetuán, Moncloa-Argüelles, Chamartín</p>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#EDE0C8]">
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">Studio (25–40 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">750 – 1 100 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T1 (45–60 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">900 – 1 400 €</td>
                  </tr>
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">T2 (65–85 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">1 200 – 1 800 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T3 (90–110 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">1 600 – 2 400 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-[#7A8C5E]">
                <p className="text-white font-semibold">Périphérie abordable — Carabanchel, Latina, Vallecas</p>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#EDE0C8]">
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">Studio (25–40 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">600 – 850 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T1 (45–60 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">700 – 1 000 €</td>
                  </tr>
                  <tr className="bg-[#F5ECD7]/30">
                    <td className="px-5 py-4 text-[#5a3e35]">T2 (65–85 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">900 – 1 300 €</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[#5a3e35]">T3 (90–110 m²)</td>
                    <td className="px-5 py-4 text-right font-semibold text-[#2C1810]">1 200 – 1 700 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Évolution + blockquote */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Les loyers montent — mais pas uniformément
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-3">Quartiers en forte hausse (2025)</p>
              <ul className="space-y-2 text-[#F5ECD7]/80 text-sm">
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Tetuán : +12,3 %</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Puente de Vallecas : +12,8 %</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Retiro : +10,5 %</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Centre (Malasaña, Chueca) : +9,7 %</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-3">Zones plus stables</p>
              <ul className="space-y-2 text-[#F5ECD7]/80 text-sm">
                <li className="flex gap-2"><span className="text-[#7A8C5E]">—</span>Latina : légère correction</li>
                <li className="flex gap-2"><span className="text-[#7A8C5E]">—</span>Moncloa-Argüelles : stable</li>
                <li className="flex gap-2"><span className="text-[#7A8C5E]">—</span>Carabanchel : offre en hausse</li>
                <li className="flex gap-2"><span className="text-[#7A8C5E]">—</span>Villaverde, Barajas : baisse</li>
              </ul>
            </div>
          </div>
          <p className="text-[#F5ECD7]/70 text-sm leading-relaxed mb-8">
            Les loyers à Madrid ont augmenté d&apos;environ 25 % sur les 5
            dernières années. La pression reste forte dans les quartiers
            centraux, portée par la demande des expats et la contraction de
            l&apos;offre. Les zones périphériques comme Latina ou Carabanchel
            commencent à voir des corrections.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le bon deal à Madrid, c&apos;est souvent dans les quartiers
              intermédiaires — Tetuán, Arganzuela, Moncloa — où tu gardes
              l&apos;accès au centre sans payer le prix Chamberí.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Comparaison Paris */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Madrid vs Paris — le vrai écart
          </h2>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EDE0C8]">
                  <th className="text-left px-5 py-4 text-[#2C1810] font-semibold">Type</th>
                  <th className="text-right px-5 py-4 text-[#2C1810] font-semibold">Paris</th>
                  <th className="text-right px-5 py-4 text-[#C8614A] font-semibold">Madrid centre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE0C8]">
                <tr className="bg-white">
                  <td className="px-5 py-4 text-[#5a3e35]">Prix moyen au m²</td>
                  <td className="px-5 py-4 text-right text-[#5a3e35] font-medium">~27 €/m²</td>
                  <td className="px-5 py-4 text-right text-[#C8614A] font-semibold">20 – 27 €/m²</td>
                </tr>
                <tr className="bg-[#F5ECD7]/40">
                  <td className="px-5 py-4 text-[#5a3e35]">Studio ~30 m²</td>
                  <td className="px-5 py-4 text-right text-[#5a3e35] font-medium">1 000 – 1 200 €</td>
                  <td className="px-5 py-4 text-right text-[#C8614A] font-semibold">750 – 1 100 €</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-4 text-[#5a3e35]">T2 ~70 m²</td>
                  <td className="px-5 py-4 text-right text-[#5a3e35] font-medium">~2 400 €</td>
                  <td className="px-5 py-4 text-right text-[#C8614A] font-semibold">1 500 – 2 500 €</td>
                </tr>
                <tr className="bg-[#F5ECD7]/40">
                  <td className="px-5 py-4 text-[#5a3e35]">Quartier le plus cher</td>
                  <td className="px-5 py-4 text-right text-[#5a3e35] font-medium">16e : ~35 €/m²</td>
                  <td className="px-5 py-4 text-right text-[#C8614A] font-semibold">Salamanca : ~27 €/m²</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-4 text-[#5a3e35]">Quartier abordable proche centre</td>
                  <td className="px-5 py-4 text-right text-[#5a3e35] font-medium">19e/20e : ~23 €/m²</td>
                  <td className="px-5 py-4 text-right text-[#C8614A] font-semibold">Tetuán : ~21 €/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#5a3e35] text-sm mt-4 leading-relaxed">
            Madrid est en moyenne <strong>20 à 30 % moins cher que Paris</strong> sur
            le loyer au m². L&apos;écart est plus marqué pour les grandes surfaces
            et dans les quartiers chers. En revanche, pour un petit studio
            très central, les prix convergent.
          </p>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Ce que ça change concrètement pour toi
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] mb-1">Les annonces affichent rarement les charges</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Sur Idealista ou Fotocasa, le loyer affiché est presque toujours
                  hors charges (<em>gastos de comunidad</em>). Compte
                  50 à 120 € de plus selon la copropriété. Les charges
                  comprennent l&apos;eau, les parties communes, parfois
                  l&apos;ascenseur.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] mb-1">La caution est souvent de 2 mois</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Légalement, la caution (<em>fianza</em>) est d&apos;1 mois.
                  Mais beaucoup de propriétaires demandent un dépôt de garantie
                  supplémentaire de 1 à 2 mois. Prévois 2 à 3 mois de loyer en
                  trésorerie à l&apos;entrée, plus le premier mois. Pour la
                  procédure complète, voir le guide{" "}
                  <Link
                    href="/logement/appartement"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    trouver un appartement à Madrid
                  </Link>.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] mb-1">La colocation reste la meilleure entrée</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Pour un premier logement sans historique locatif espagnol ni
                  nómina, la{" "}
                  <Link
                    href="/logement/colocation"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    colocation
                  </Link>{" "}
                  est souvent la porte d&apos;entrée. Une chambre en centre de
                  Madrid tourne entre 550 et 850 €/mois charges comprises.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] mb-1">Le quartier change tout</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Pour le même budget, tu as un studio à Chueca ou un T2
                  à Tetuán. Les{" "}
                  <Link
                    href="/logement/quartiers"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    guides de quartiers
                  </Link>{" "}
                  t&apos;aident à choisir en fonction de ton mode de vie —
                  pas seulement du prix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement à Madrid
            </Link>
            <Link
              href="/logement/colocation"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La colocation à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Choisir son quartier
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Budget global pour vivre à Madrid
            </Link>
            <Link
              href="/se-decider/salaire-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Salaires à Madrid
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">
            Logement longue durée, déménagement Paris–Madrid, quartiers — les
            prochains guides pratiques arrivent bientôt.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#F5ECD7]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#2C1810] text-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors"
        >
          Madrid & Toi
        </Link>
        <p className="text-[#F5ECD7]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
