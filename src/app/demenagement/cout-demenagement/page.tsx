import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/demenagement/cout-demenagement',
  },
  title: "Coût d'un déménagement Paris–Madrid : budget réel 2026 — Madrid & Toi",
  description:
    "Groupage, camion low-cost, déménageur complet — combien coûte vraiment un déménagement France-Espagne selon le volume, et comment réduire la facture.",
};

export default function CoutDemenagementPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Coût d'un déménagement Paris–Madrid : budget réel 2026",
      description:
        "Groupage, camion low-cost, déménageur complet — combien coûte vraiment un déménagement France-Espagne selon le volume, et comment réduire la facture.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      url: "https://madrid-et-toi.com/demenagement/cout-demenagement",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/demenagement/cout-demenagement" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Déménagement", item: "https://madrid-et-toi.com/demenagement" },
        { "@type": "ListItem", position: 3, name: "Coût du déménagement", item: "https://madrid-et-toi.com/demenagement/cout-demenagement" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/demenagement"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Déménagement
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Budget déménagement
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Combien coûte vraiment{" "}
            <span className="not-italic font-extrabold text-[#d6442a]">un déménagement à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Entre le groupage à 750 € et le déménageur tout compris à plus de
            4 000 €, l&apos;écart est énorme. On détaille les options pour
            que tu paies le juste prix selon ton volume et ton budget.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Groupage dès ~750 €
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Formule complète 1 200 – 4 000 €+
            </span>
          </div>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Les options */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Trois façons de déménager, trois budgets
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Le prix d&apos;un{" "}
            <Link href="/demenagement/paris-madrid" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              déménagement Paris–Madrid
            </Link>{" "}
            dépend presque entièrement de deux facteurs : le volume à
            transporter (en m³) et le niveau de service choisi. En Europe, on
            compte en général entre 100 et 300 €/m³ selon la distance et la
            formule. Pour la route France–Espagne, le transport routier est de
            loin l&apos;option la plus rapide et la plus économique — comptez
            3 à 10 jours de délai selon le volume.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f2f0e9]">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-[#171712] font-semibold">Formule</th>
                  <th className="text-left px-4 py-3 text-[#171712] font-semibold">Budget indicatif</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl text-[#171712] font-semibold">Idéal pour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f0e9]">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#171712] font-medium">Groupage (petit volume, ≤ 5-10 m³)</td>
                  <td className="px-4 py-3 text-[#171712]">Dès ~750 €</td>
                  <td className="px-4 py-3 text-[#171712]">Studio, chambre, premier départ seul(e)</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#171712] font-medium">Déménagement basique France–Espagne</td>
                  <td className="px-4 py-3 text-[#171712]">1 200 – 2 000 €</td>
                  <td className="px-4 py-3 text-[#171712]">T2/T3, transport seul sans emballage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#171712] font-medium">Prise en charge complète (emballage inclus)</td>
                  <td className="px-4 py-3 text-[#171712]">4 000 € et plus</td>
                  <td className="px-4 py-3 text-[#171712]">Gros volume, famille, zéro logistique à gérer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#171712]/50 text-xs mt-3">
            Fourchettes indicatives 2026, hors assurance complémentaire. Demande toujours plusieurs devis détaillés avant de choisir.
          </p>
        </div>
      </section>

      {/* Réduire la facture */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Comment réduire la facture
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="text-[#d6442a] font-bold flex-shrink-0">—</span>
              <span className="text-[#171712] leading-relaxed">
                <strong>Le groupage</strong> (ton chargement partage le camion
                avec d&apos;autres clients) divise souvent le prix par deux
                pour un petit volume, au prix d&apos;un délai un peu plus long
                et moins flexible.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#d6442a] font-bold flex-shrink-0">—</span>
              <span className="text-[#171712] leading-relaxed">
                <strong>Trier avant de faire les cartons.</strong> Beaucoup de
                meubles français (type Ikea) ne valent pas le coût du
                transport — mieux vaut souvent les revendre ou les donner et
                racheter sur place.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#d6442a] font-bold flex-shrink-0">—</span>
              <span className="text-[#171712] leading-relaxed">
                <strong>Camion + amis</strong> reste l&apos;option la moins
                chère pour un petit volume, si tu as le temps et le permis —
                mais compte la fatigue et les 15h+ de route dans le calcul.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#d6442a] font-bold flex-shrink-0">—</span>
              <span className="text-[#171712] leading-relaxed">
                <strong>Compare plusieurs devis détaillés</strong> (au moins
                3) : le prix varie fortement d&apos;une société à l&apos;autre
                pour un même volume, et certaines incluent l&apos;assurance,
                d&apos;autres non.
              </span>
            </li>
          </ul>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#171712] mb-3">
              Un poste souvent oublié : l&apos;assurance transport
            </p>
            <p className="text-[#171712] text-sm leading-relaxed">
              Les déménageurs professionnels couvrent tes affaires jusqu&apos;à
              un certain montant par défaut — souvent insuffisant pour du
              mobilier ou de l&apos;électronique de valeur. Une assurance
              complémentaire (<em>valeur déclarée</em>) coûte quelques dizaines
              d&apos;euros et évite une mauvaise surprise en cas de casse
              pendant les 1 000+ km de trajet.
            </p>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Réserver au bon moment
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-8">
            Comme pour tout déménagement, les prix grimpent en juillet-août et
            en fin de mois — les périodes les plus demandées. Réserver 3 à
            4 semaines à l&apos;avance permet généralement de comparer plus de
            devis et d&apos;obtenir de meilleurs tarifs qu&apos;en réservant en
            urgence.
          </p>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Le prix d&apos;un déménagement se négocie presque toujours.
              Mets les devis en concurrence ouvertement — les sociétés
              s&apos;alignent plus souvent qu&apos;on ne le pense.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/demenagement/paris-madrid" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Déménagement Paris–Madrid : le guide complet
            </Link>
            <Link href="/demenagement/checklist" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La checklist complète J-6 mois → J+3 mois
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Budget de vie réel à Madrid
            </Link>
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/vivre/animaux" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Déménager avec son animal
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La checklist complète du déménagement" href="/demenagement/checklist" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Checklist logistique, les 30 premiers jours, ce qu&apos;on aurait
            voulu savoir avant de partir — inscris-toi pour les recevoir.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#171712]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#171712] text-center">
        <Link href="/" className="inline-block mb-2 hover:opacity-80 transition-opacity">
          <Logo variant="cream" height={24} className="mx-auto" />
        </Link>
        <p className="text-[#fbe8e4]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
