import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/demenagement/paris-madrid',
  },
  title: "Déménagement Paris–Madrid : le guide complet — Madrid & Toi",
  description:
    "Comment organiser son déménagement de Paris à Madrid ? Camion, affaires, résiliations, timing — le guide pratique étape par étape d'une Française qui l'a fait.",
};

export default function ParisMadridPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Déménagement Paris–Madrid : le guide complet",
      description:
        "Comment organiser son déménagement de Paris à Madrid ? Camion, affaires, résiliations, timing — le guide pratique étape par étape d'une Française qui l'a fait.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/demenagement/paris-madrid",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/demenagement/paris-madrid" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Déménagement", item: "https://madrid-et-toi.com/demenagement" },
        { "@type": "ListItem", position: 3, name: "Paris–Madrid", item: "https://madrid-et-toi.com/demenagement/paris-madrid" },
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
            Guide déménagement
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Déménagement Paris–Madrid —{" "}
            <span className="not-italic font-bold text-[#d6442a]">le guide complet</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            1 250 km. Une frontière. Beaucoup de cartons et autant de questions.
            Voici tout ce qu&apos;on aurait voulu savoir avant de faire le trajet —
            de la logistique aux démarches.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">~1 250 km</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">12–13h de route</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">Guide pratique</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Le transport */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Choisir son mode de transport
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Paris–Madrid, c&apos;est environ 1 250 km. Trois options
            s&apos;offrent à toi : le camion de déménagement (si tu pars avec
            beaucoup d&apos;affaires), le transport par colis ou palette (si tu
            pars léger), ou la voiture personnelle avec une remorque.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            La plupart des gens qui font le saut seuls partent avec leur voiture
            chargée et font envoyer le reste par transporteur. Le trajet en
            voiture dure environ 12 à 13 heures — prévoir une nuit à Bordeaux
            ou Burgos.
          </p>
        </div>
      </section>

      {/* Ce qu'on laisse */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Ce qu&apos;il vaut mieux laisser en France
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-6">
            Règle de base : si ça coûte moins de 200 € à racheter à Madrid,
            laisse-le en France.
          </p>
          <ul className="space-y-3 text-[#171712]">
            <li className="flex items-start gap-3">
              <span className="text-[#d6442a] mt-0.5 font-bold flex-shrink-0">—</span>
              <span><strong>Meubles Ikea</strong> : inutile de les transporter, ils coûtent pareil en Espagne.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d6442a] mt-0.5 font-bold flex-shrink-0">—</span>
              <span><strong>Gros électroménagers</strong> : les tensions électriques sont identiques mais les déménager ne vaut rarement le coup.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d6442a] mt-0.5 font-bold flex-shrink-0">—</span>
              <span><strong>Les livres</strong> : si tu as une bibliothèque, envoyer des cartons par Colissimo international est souvent la solution la plus économique.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Avant de partir — résiliations et démarches */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-8">
            Avant de partir : résiliations et démarches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-3">
                Résiliations
              </p>
              <ul className="space-y-2 text-[#fbe8e4]/80 text-sm leading-relaxed">
                <li>— Contrat EDF / Engie</li>
                <li>— Internet (1 à 3 mois de préavis)</li>
                <li>— Abonnement téléphonique si tu changes de numéro</li>
                <li>— Mutuelle santé française</li>
                <li>— Assurance habitation</li>
                <li>— Suivi du courrier via La Poste</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-3">
                Démarches côté France
              </p>
              <ul className="space-y-2 text-[#fbe8e4]/80 text-sm leading-relaxed">
                <li>— Signaler son départ à la CAF</li>
                <li>— Prévenir la CPAM et les impôts</li>
                <li>— Prévenir sa banque (certaines ferment les comptes non-résidents)</li>
                <li>— Exporter ses droits ARE si éligible (formulaire U2, 3 mois max)</li>
              </ul>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#d6442a] pl-6 mt-10">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Commence les résiliations et démarches 2 à 3 mois avant le départ
              — c&apos;est l&apos;administratif qui prend du temps, pas la
              logistique.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Le timing idéal */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le timing idéal
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            <strong>Septembre</strong> est le meilleur moment pour arriver à
            Madrid : la rentrée anime le marché du travail, les loyers sont
            légèrement plus bas qu&apos;en été, et la météo est encore douce.
            <strong> Janvier</strong> fonctionne aussi : moins de concurrence
            sur les logements, les employeurs reprennent leur recrutement.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Évite <strong>juillet–août</strong> : tout le monde est absent, les
            loyers saisonniers explosent, et rien n&apos;avance
            administrativement. Et garde-toi une semaine tampon entre la remise
            des clés à Paris et l&apos;arrivée à Madrid — ce tampon vaut de
            l&apos;or.
          </p>
        </div>
      </section>

      {/* Les premiers jours */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les premiers jours à Madrid
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Prévois un logement temporaire pour les 2 à 4 premières semaines —
            Airbnb, chambre en coloc ou sous-location. C&apos;est le temps
            nécessaire pour visiter des appartements en vrai et signer.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Dans les premiers jours : ouvre un compte bancaire (Revolut ou N26
            pour commencer, puis une banque espagnole comme CaixaBank ou BBVA),
            demande ton{" "}
            <Link
              href="/papiers/nie"
              className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
            >
              NIE
            </Link>
            , et fais ton{" "}
            <Link
              href="/papiers/padron"
              className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
            >
              empadronamiento
            </Link>{" "}
            dès que tu as une adresse fixe — c&apos;est la base de tout le reste.
          </p>
        </div>
      </section>

      {/* Liens */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Les prochaines étapes
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Trouver un appartement depuis la France
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Choisir son quartier à Madrid
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Coût de la vie à Madrid
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
        <p className="text-[#fbe8e4]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
