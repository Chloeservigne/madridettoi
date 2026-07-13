import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/appartement',
  },
  title: "Trouver un appartement à Madrid depuis la France — Madrid & Toi",
  description:
    "Comment trouver un appartement à Madrid avant d'arriver ? Plateformes, budget, documents, pièges à éviter — le guide complet.",
};

const steps = [
  {
    number: "01",
    title: "Les plateformes incontournables",
    content:
      "Idealista et Fotocasa sont les deux grands sites d'annonces immobilières en Espagne. Idealista est le plus utilisé, avec le plus grand volume d'annonces. Les groupes Facebook (\"Français à Madrid\", \"Logement Madrid expats\") sont aussi très actifs et permettent de trouver des colocations ou sous-locations.",
  },
  {
    number: "02",
    title: "Le budget à prévoir",
    content:
      <>Le marché a évolué : un studio dans un quartier central comme <Link href="/logement/quartiers" className="text-[#1fa971] underline underline-offset-2 hover:text-[#178a5d] transition-colors">Malasaña ou Chueca</Link> se loue aujourd&apos;hui entre 900 et 1 200 €/mois. Un appartement d&apos;une chambre entre 1 000 et 1 500 €. Lavapiés et Vallecas restent plus abordables. La caution représente généralement 1 à 2 mois de loyer. Pour les fourchettes détaillées par quartier, voir le <Link href="/se-decider/budget" className="text-[#1fa971] underline underline-offset-2 hover:text-[#178a5d] transition-colors">guide budget</Link>.</>,
  },
  {
    number: "03",
    title: "Les documents demandés",
    content:
      <>Les propriétaires demandent souvent : un contrat de travail espagnol ou une preuve de revenus, les 3 dernières fiches de paie, et parfois un garant. Si tu arrives sans emploi local, certains acceptent une garantie bancaire ou plusieurs mois de loyer d&apos;avance. <Link href="/papiers/nie" className="text-[#1fa971] underline underline-offset-2 hover:text-[#178a5d] transition-colors">Le NIE</Link> est souvent demandé pour signer.</>,
  },
  {
    number: "04",
    title: "Chercher depuis la France : est-ce possible ?",
    content:
      "C'est compliqué mais pas impossible. Les propriétaires préfèrent rencontrer en personne. Une bonne stratégie : prévoir un séjour de 1 à 2 semaines à Madrid pour visiter, réserver un Airbnb ou une chambre en colocation temporaire, puis signer une fois sur place. Certaines agences proposent des visites virtuelles.",
  },
  {
    number: "05",
    title: "Les pièges à éviter",
    content:
      "Méfie-toi des annonces trop belles à des prix bas — les arnaques existent. Ne verse jamais d'argent sans avoir visité (au moins en vidéo). Lis le contrat de location attentivement : durée minimale (souvent 12 mois), conditions de résiliation, charges incluses ou non. Les charges (comunidad, agua, luz) peuvent ajouter 100 à 200 €/mois.",
  },
];

export default function AppartementPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Comment trouver un appartement à Madrid depuis la France ?",
      description: "Comment trouver un appartement à Madrid avant d'arriver ? Plateformes, budget, documents, pièges à éviter — le guide complet.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/appartement",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/appartement" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Trouver un appartement", item: "https://madrid-et-toi.com/logement/appartement" },
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
            href="/logement"
            className="inline-flex items-center gap-2 text-[#1fa971] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#178a5d] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide logement
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Comment trouver un appartement à Madrid{" "}
            <span className="not-italic font-bold text-[#1fa971]">depuis la France&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            C&apos;est la première question que tout le monde se pose. La réponse
            honnête : c&apos;est faisable, mais ça demande de l&apos;organisation. Voici
            tout ce qu&apos;on aurait voulu savoir avant de chercher.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1fa971]/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-body)] text-[#1fa971] font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-body)] text-2xl font-bold text-[#171712] mb-3">
                  {step.title}
                </h2>
                <p className="text-[#171712] leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip block */}
      <section className="py-16 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#e6f4ec] font-[family-name:var(--font-body)] not-italic text-2xl mb-4">
            Notre conseil en une phrase
          </p>
          <p className="text-[#e6f4ec] text-lg leading-relaxed">
            Prévois un séjour de reconnaissance de 10 à 14 jours avant ton
            déménagement définitif. Loge en Airbnb, visite des appartements en
            vrai, et signe sur place. C&apos;est la méthode qui marche le mieux.
          </p>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:border-[#1fa971] hover:text-[#1fa971] transition-colors">
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:border-[#1fa971] hover:text-[#1fa971] transition-colors">
              Les quartiers les plus sympa pour les expats
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:border-[#1fa971] hover:text-[#1fa971] transition-colors">
              Combien ça coûte vraiment de vivre à Madrid ?
            </Link>
            <Link href="/papiers/secu" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:border-[#1fa971] hover:text-[#1fa971] transition-colors">
              Comment fonctionne la sécu en Espagne ?
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Organiser son déménagement Paris → Madrid" href="/demenagement/paris-madrid" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#e6f4ec]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#178a5d] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
        <p className="text-[#e6f4ec]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
