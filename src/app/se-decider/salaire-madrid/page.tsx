import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/se-decider/salaire-madrid',
  },
  title: "Salaire à Madrid : ce qu'on gagne vraiment en 2026 — Madrid & Toi",
  description:
    "Salaire minimum, salaire moyen, salaires par secteur — et la vraie question : est-ce qu'on vit mieux à Madrid qu'à Paris avec un salaire plus bas ? La réponse chiffrée.",
};

const salairesParSecteur = [
  { secteur: "Tech / Développement", junior: "24 000 – 32 000 €", senior: "40 000 – 65 000 €", emoji: "💻" },
  { secteur: "Marketing / Com", junior: "20 000 – 28 000 €", senior: "32 000 – 48 000 €", emoji: "📣" },
  { secteur: "Finance / Banque", junior: "26 000 – 34 000 €", senior: "42 000 – 70 000 €", emoji: "📊" },
  { secteur: "Commercial / Sales", junior: "20 000 – 28 000 €", senior: "35 000 – 55 000 €", emoji: "🤝" },
  { secteur: "Ressources humaines", junior: "20 000 – 26 000 €", senior: "30 000 – 45 000 €", emoji: "👥" },
  { secteur: "Enseignement / Éducation", junior: "22 000 – 28 000 €", senior: "28 000 – 38 000 €", emoji: "📚" },
  { secteur: "Ingénierie", junior: "26 000 – 34 000 €", senior: "38 000 – 60 000 €", emoji: "⚙️" },
  { secteur: "Santé", junior: "24 000 – 30 000 €", senior: "35 000 – 55 000 €", emoji: "🏥" },
];

const comparaison = [
  {
    poste: "Développeur junior",
    paris: "34 000 – 40 000 €",
    madrid: "24 000 – 32 000 €",
    loyer: "Paris ~1 300 € · Madrid ~950 €",
    verdict: "Pouvoir d'achat comparable, parfois meilleur à Madrid",
  },
  {
    poste: "Responsable marketing",
    paris: "36 000 – 48 000 €",
    madrid: "28 000 – 38 000 €",
    loyer: "Paris ~1 400 € · Madrid ~1 000 €",
    verdict: "Salaire inférieur mais qualité de vie nettement supérieure",
  },
  {
    poste: "Profil senior / 10 ans d'exp.",
    paris: "55 000 – 75 000 €",
    madrid: "42 000 – 65 000 €",
    loyer: "Paris ~1 600 € · Madrid ~1 200 €",
    verdict: "L'écart se réduit, le différentiel de coût de vie pèse moins",
  },
];

export default function SalaireMadridPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Salaire à Madrid : ce qu'on gagne vraiment en 2026",
      description:
        "Salaire minimum, salaire moyen, salaires par secteur — et la vraie question : est-ce qu'on vit mieux à Madrid qu'à Paris avec un salaire plus bas ? La réponse chiffrée.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/se-decider/salaire-madrid",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/se-decider/salaire-madrid" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Se décider", item: "https://madrid-et-toi.com/se-decider" },
        { "@type": "ListItem", position: 3, name: "Salaires à Madrid", item: "https://madrid-et-toi.com/se-decider/salaire-madrid" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/se-decider"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Se décider
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Avant de partir
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Combien gagne-t-on{" "}
            <span className="not-italic font-bold text-[#F0552F]">vraiment à Madrid&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Les salaires espagnols font peur sur le papier — inférieurs aux
            salaires français. Mais la vraie question, c&apos;est le pouvoir
            d&apos;achat. Voici les chiffres réels, par secteur, avec la
            comparaison Paris–Madrid qui change tout.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Données 2026</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Salaires bruts annuels</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">14 mois en Espagne</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Le salaire minimum */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Le salaire minimum (SMI) en 2026
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Le <em>Salario Mínimo Interprofesional</em> (SMI) est fixé à{" "}
            <strong>1 221 € brut par mois</strong> en 2026, soit
            17 094 € annuels. Mais attention : en Espagne, les salaires sont
            versés sur <strong>14 mois</strong> — 12 mensualités standard +
            deux <em>pagas extras</em> (juillet et Noël). Ce détail change le
            calcul mensuel quand on compare avec la France.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            En pratique, peu de postes qualifiés sont au niveau du SMI à
            Madrid. Mais c&apos;est le plancher légal — et il a fortement
            progressé ces dernières années (+66 % depuis 2018).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-2xl font-[family-name:var(--font-heading)]">1 221 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">SMI mensuel brut</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-2xl font-[family-name:var(--font-heading)]">17 094 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">SMI annuel (14 mois)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-2xl font-[family-name:var(--font-heading)]">~1 050 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">SMI net estimé / mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salaire moyen à Madrid */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Le salaire moyen à Madrid
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Madrid est la ville la mieux payée d&apos;Espagne. Le salaire
            annuel brut moyen y tourne autour de <strong>30 000 à 35 000 €</strong>
            — soit environ 2 000 à 2 300 € nets par mois selon le taux
            d&apos;imposition. C&apos;est nettement au-dessus de la moyenne
            nationale espagnole (~26 000 €), mais inférieur à Paris.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Les profils expérimentés, bilingues ou dans la tech peuvent
            largement dépasser ces moyennes — surtout dans les filiales de
            multinationales qui calquent souvent leurs grilles sur des
            standards internationaux.
          </p>
        </div>
      </section>

      {/* Salaires par secteur */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
            Salaires par secteur à Madrid
          </h2>
          <p className="text-[#F6E7D9]/60 text-sm mb-8">Brut annuel · Fourchettes indicatives 2025</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {salairesParSecteur.map((item) => (
              <div key={item.secteur} className="bg-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <p className="text-white font-semibold text-sm">{item.secteur}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F6E7D9]/50 text-xs">Junior</span>
                    <span className="text-[#F6E7D9]/90 text-sm font-semibold">{item.junior}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFC24B] text-xs">Senior</span>
                    <span className="text-[#FFC24B] text-sm font-semibold">{item.senior}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brut vs net */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Brut / net : ce qu&apos;on touche vraiment
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            En Espagne, les cotisations salariales sont d&apos;environ{" "}
            <strong>6,35 %</strong> du brut (retraite + chômage + formation).
            L&apos;impôt sur le revenu (<em>IRPF</em>) est progressif et
            prélevé à la source, comme en France. Pour des salaires entre
            20 000 et 40 000 €, le taux effectif tourne entre <strong>15 et 25 %</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#33251E]/60 text-xs uppercase tracking-widest mb-2">Salaire brut annuel</p>
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">25 000 €</p>
              <p className="text-[#33251E] text-sm mt-2">→ ~1 550 € net / mois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#33251E]/60 text-xs uppercase tracking-widest mb-2">Salaire brut annuel</p>
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">35 000 €</p>
              <p className="text-[#33251E] text-sm mt-2">→ ~2 100 € net / mois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#33251E]/60 text-xs uppercase tracking-widest mb-2">Salaire brut annuel</p>
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">50 000 €</p>
              <p className="text-[#33251E] text-sm mt-2">→ ~2 850 € net / mois</p>
            </div>
          </div>
          <p className="text-[#33251E]/60 text-xs mt-4">
            Estimations indicatives. Le net dépend de la situation personnelle, des déductions et de la communauté autonome.
          </p>
        </div>
      </section>

      {/* Comparaison Paris / Madrid */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-4">
            La vraie comparaison : Paris vs Madrid
          </h2>
          <p className="text-[#33251E] leading-relaxed mb-8">
            Le salaire brut est souvent plus bas à Madrid. Mais ce qui compte,
            c&apos;est ce qu&apos;il reste après le loyer et les charges.
          </p>
          <div className="space-y-4">
            {comparaison.map((item) => (
              <div key={item.poste} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] mb-4">{item.poste}</p>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-[#33251E]/50 text-xs uppercase tracking-widest mb-1">Paris</p>
                    <p className="text-[#33251E] font-semibold text-sm">{item.paris}</p>
                  </div>
                  <div>
                    <p className="text-[#F0552F] text-xs uppercase tracking-widest mb-1">Madrid</p>
                    <p className="text-[#F0552F] font-semibold text-sm">{item.madrid}</p>
                  </div>
                </div>
                <p className="text-[#33251E]/60 text-xs border-t border-[#FBEBDD] pt-3">{item.loyer}</p>
                <p className="text-[#F2A65A] text-xs font-semibold mt-1">{item.verdict}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combien faut-il */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-6">
            Combien faut-il pour bien vivre à Madrid ?
          </h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg">
            Seul(e) dans un appartement dans un{" "}
            <Link href="/logement/quartiers" className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity">
              bon quartier
            </Link>
            , avec une vie sociale active (restos, sorties, voyages), le
            budget confortable tourne autour de <strong className="text-white">2 000 à 2 500 € nets par mois</strong>.
            Soit un brut annuel de 33 000 à 42 000 €.
          </p>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg mt-4">
            En coloc ou avec un mode de vie plus simple, 1 500 € nets
            suffisent largement. Le{" "}
            <Link href="/se-decider/budget" className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity">
              coût de la vie à Madrid
            </Link>{" "}
            reste nettement plus bas qu&apos;à Paris — et c&apos;est ça qui
            change tout le calcul.
          </p>
          <blockquote className="border-l-4 border-[#F0552F] pl-6 mt-10">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              Un salaire qui semble décevant sur le papier peut permettre une
              vie meilleure qu&apos;à Paris. L&apos;erreur classique, c&apos;est
              de comparer les chiffres bruts sans comparer les loyers, les
              charges et le reste à vivre.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens */}
      <section className="py-16 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">
            Pour aller plus loin
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Coût de la vie réel à Madrid
            </Link>
            <Link
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
            <Link
              href="/se-decider/pourquoi-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Pourquoi Madrid ?
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Choisir son quartier
            </Link>
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Trouver un emploi à Madrid
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Devenir autónomo
            </Link>
            <Link
              href="/papiers/impots"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Impôts & IRPF en Espagne
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10">
            Emploi, freelance, fiscalité — les prochains guides sur le travail
            à Madrid arrivent bientôt.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#F6E7D9]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#241813] text-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl text-[#F6E7D9] mb-2 block hover:text-[#FFC24B] transition-colors"
        >
          Madrid & Toi
        </Link>
        <p className="text-[#F6E7D9]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
