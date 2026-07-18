import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/papiers/documents-francais',
  },
  title: "Renouveler ses papiers français depuis Madrid : CNI, passeport — Madrid & Toi",
  description:
    "Carte d'identité, passeport, registre consulaire — comment refaire ses papiers français depuis Madrid. Procédure ANTS, RDV au consulat, délais, coûts.",
};

const stats = [
  { value: "Gratuite", label: "La CNI pour un renouvellement normal (25 € si perte ou vol)" },
  { value: "86 €", label: "Le passeport adulte (timbre fiscal à acheter avant le RDV)" },
  { value: "3 – 8 sem.", label: "Le délai de fabrication, selon la période" },
  { value: "0 exam.", label: "Aucun test à passer — juste un dossier à déposer" },
];

const checklistCNI = [
  { doc: "Photo d'identité récente aux normes françaises", detail: "Fond uni, visage dégagé — pas une photo espagnole carnet" },
  { doc: "Numéro de pré-demande ANTS", detail: "À créer sur ants.gouv.fr avant le RDV" },
  { doc: "Ancienne CNI", detail: "Ou déclaration de perte / vol (25 € de timbre fiscal)" },
  { doc: "Justificatif de domicile espagnol", detail: "Facture, bail ou certificado de empadronamiento" },
  { doc: "Acte de naissance de moins de 3 mois", detail: "Uniquement si le consulat n'a pas accès à ta base d'état civil" },
];

const checklistPasseport = [
  { doc: "Photo d'identité récente aux normes françaises", detail: "Fond uni clair, visage nu, expression neutre" },
  { doc: "Numéro de pré-demande ANTS", detail: "À créer sur ants.gouv.fr avant le RDV" },
  { doc: "Timbre fiscal de 86 €", detail: "Adulte — à acheter en ligne sur timbres.impots.gouv.fr avant le RDV" },
  { doc: "Ancien passeport", detail: "Ou déclaration de perte / vol" },
  { doc: "Justificatif de domicile espagnol", detail: "Facture, bail ou certificado de empadronamiento" },
  { doc: "Acte de naissance de moins de 3 mois", detail: "Si première demande ou si état civil non numérisé" },
];

const etapesCNI = [
  {
    num: "1",
    titre: "Faire la pré-demande en ligne sur ANTS",
    detail:
      "Crée un compte sur ants.gouv.fr et remplis le formulaire de pré-demande CNI. Tu obtiens un numéro de dossier à conserver — le consulat en aura besoin.",
  },
  {
    num: "2",
    titre: "Prendre un RDV au Consulat général de France à Madrid",
    detail:
      "Via le portail de prise de RDV en ligne du Ministère des Affaires étrangères. Les créneaux partent vite, particulièrement à l'approche de l'été — prévois 2 à 4 semaines d'avance.",
  },
  {
    num: "3",
    titre: "Déposer ton dossier au consulat",
    detail:
      "Présente-toi au consulat (Calle Marqués de la Ensenada, 10 — Madrid) avec l'ensemble du dossier. Les empreintes digitales sont prises sur place. La CNI est gratuite pour un renouvellement normal.",
  },
  {
    num: "4",
    titre: "Récupérer ta nouvelle CNI",
    detail:
      "Délai de fabrication : 3 à 8 semaines selon la période. Le consulat te prévient par e-mail ou SMS quand le document est disponible. Récupération en personne au guichet.",
  },
];

const etapesPasseport = [
  {
    num: "1",
    titre: "Faire la pré-demande en ligne sur ANTS",
    detail:
      "Même démarche que pour la CNI — crée un compte sur ants.gouv.fr et remplis la pré-demande passeport. Note bien ton numéro de dossier.",
  },
  {
    num: "2",
    titre: "Acheter le timbre fiscal (86 €)",
    detail:
      "Achète-le en ligne sur timbres.impots.gouv.fr avant ton RDV. Imprime ou enregistre le QR code — sans timbre fiscal, le dossier ne peut pas être déposé.",
  },
  {
    num: "3",
    titre: "Prendre un RDV au consulat et déposer le dossier",
    detail:
      "Même adresse que pour la CNI : Calle Marqués de la Ensenada, 10. Tes empreintes et ta photo numérique sont prises sur place. Apporte tous les documents de la checklist.",
  },
  {
    num: "4",
    titre: "Récupérer ton passeport",
    detail:
      "Délai identique : 3 à 8 semaines. Récupération obligatoire en personne — le passeport ne peut pas être envoyé par courrier à l'étranger.",
  },
];

export default function DocumentsFrancaisPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Renouveler ses papiers français depuis Madrid : CNI, passeport, consulat",
      description:
        "Carte d'identité, passeport, registre consulaire — tout ce qu'il faut savoir pour refaire ses papiers français depuis Madrid.",
      author: {
        "@type": "Person",
        name: "Chloé",
        url: "https://madrid-et-toi.com/mon-histoire",
      },
      publisher: {
        "@type": "Organization",
        name: "Madrid & Toi",
        url: "https://madrid-et-toi.com",
      },
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      url: "https://madrid-et-toi.com/papiers/documents-francais",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://madrid-et-toi.com/papiers/documents-francais",
      },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://madrid-et-toi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Papiers",
          item: "https://madrid-et-toi.com/papiers",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Papiers français depuis Madrid",
          item: "https://madrid-et-toi.com/papiers/documents-francais",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/papiers"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Papiers & démarches
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-xs font-semibold mb-4">
            Côté français
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Refaire ses papiers français{" "}
            <span className="not-italic font-bold text-[#d6442a]">depuis Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed mb-4">
            Ton passeport expire dans 3 mois. Ta carte d&apos;identité date de
            l&apos;époque lycée. Depuis Madrid, c&apos;est le Consulat général de France
            qui gère — pas la mairie de ton ancienne ville. Voici comment ça
            marche.
          </p>
          <AuthorBadge date="avril 2026" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[#d6442a] mb-2">
                {s.value}
              </p>
              <p className="text-[#171712]/70 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registre consulaire */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Première chose : t&apos;inscrire au registre consulaire
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Avant de renouveler quoi que ce soit, inscris-toi au{" "}
            <strong>registre des Français établis hors de France</strong> (dit
            &quot;registre consulaire&quot;). Ce n&apos;est pas obligatoire, mais c&apos;est
            vivement recommandé.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mb-6">
            L&apos;inscription te rattache officiellement au Consulat de Madrid. En
            pratique : tu figures sur les listes électorales consulaires (pour
            voter aux élections françaises depuis Madrid), tes démarches sont
            simplifiées, et tu es contacté(e) en cas de crise consulaire.
            C&apos;est gratuit et ça prend 10 minutes.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-2">
            <p className="font-semibold text-[#171712] text-sm mb-1">Comment s&apos;inscrire</p>
            <ul className="space-y-2">
              {[
                "Connecte-toi sur service-public.fr ou directement sur le portail Français à l'étranger",
                "Remplis le formulaire d'inscription en ligne — état civil, adresse à Madrid, situation professionnelle",
                "Le consulat valide l'inscription dans les jours suivants",
                "Tu reçois une confirmation par e-mail — conserve-la, elle facilite toutes les démarches suivantes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#171712]">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-[#af3722] text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CNI */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-2">
            Renouveler sa carte d&apos;identité (CNI)
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            La CNI est valable{" "}
            <strong>10 ans pour les majeurs</strong>. Le renouvellement est
            gratuit en cas d&apos;expiration normale (25 € de timbre fiscal si perte
            ou vol).
          </p>

          {/* Étapes CNI */}
          <div className="space-y-6 mb-10">
            {etapesCNI.map((etape) => (
              <div key={etape.num} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] text-white font-bold text-sm flex items-center justify-center">
                  {etape.num}
                </div>
                <div>
                  <h3 className="font-semibold text-[#171712] mb-1">
                    {etape.titre}
                  </h3>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    {etape.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist CNI */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#171712] text-sm mb-4">
              Documents à apporter au RDV
            </p>
            <ul className="space-y-3">
              {checklistCNI.map((item) => (
                <li key={item.doc} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded bg-[#d6442a]/10 text-[#d6442a] text-xs flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#171712]">
                      {item.doc}
                    </p>
                    <p className="text-xs text-[#171712]/70">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Passeport */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-2">
            Renouveler son passeport
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Le passeport est valable{" "}
            <strong>10 ans pour les adultes</strong>, 5 ans pour les mineurs. La
            procédure est très similaire à la CNI — la principale différence est
            le timbre fiscal de{" "}
            <strong>86 €</strong> à acheter avant le RDV.
          </p>

          {/* Étapes passeport */}
          <div className="space-y-6 mb-10">
            {etapesPasseport.map((etape) => (
              <div key={etape.num} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] text-white font-bold text-sm flex items-center justify-center">
                  {etape.num}
                </div>
                <div>
                  <h3 className="font-semibold text-[#171712] mb-1">
                    {etape.titre}
                  </h3>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    {etape.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist passeport */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#171712] text-sm mb-4">
              Documents à apporter au RDV
            </p>
            <ul className="space-y-3">
              {checklistPasseport.map((item) => (
                <li key={item.doc} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded bg-[#d6442a]/10 text-[#d6442a] text-xs flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#171712]">
                      {item.doc}
                    </p>
                    <p className="text-xs text-[#171712]/70">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dark blockquote */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-2xl mx-auto">
          <blockquote className="border-l-4 border-[#d6442a] pl-8">
            <p className="font-[family-name:var(--font-body)] text-2xl text-[#fbe8e4] leading-relaxed italic mb-6">
              &ldquo;Les RDV consulaires pour la CNI et le passeport partent en
              quelques heures. Ouvre une alerte sur le portail ou reviens vérifier
              tôt le matin — les annulations libèrent parfois des créneaux de
              dernière minute.&rdquo;
            </p>
            <footer className="text-[#d6442a] text-sm font-semibold">
              Consulat général de France à Madrid — Calle Marqués de la Ensenada, 10, 28004 Madrid
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Autres démarches */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les autres démarches depuis le consulat
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Acte de naissance
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Tu peux demander un extrait d&apos;acte de naissance directement en
                ligne sur service-public.fr — sans passer par le consulat. Le
                document arrive par courrier ou en version dématérialisée selon
                ta mairie de naissance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Vote aux élections françaises
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Une fois inscrit au registre consulaire, tu es automatiquement
                intégré(e) aux listes électorales de la{" "}
                <strong>1re circonscription des Français d&apos;Espagne</strong>.
                Tu peux voter au consulat de Madrid ou par procuration.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Légalisation et apostille
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Pour faire reconnaître un document français en Espagne (diplôme,
                acte d&apos;état civil), l&apos;apostille se demande en France auprès du
                Tribunal judiciaire compétent. Le consulat ne délivre pas
                d&apos;apostille.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Mariage et PACS consulaire
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Un mariage franco-espagnol ou un PACS entre résidents de Madrid
                peut être célébré ou enregistré au consulat. Délais : 3 à 6 mois
                selon les cas. Prendre contact tôt.
              </p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-sm mt-6">
            Pour toute démarche non listée ici, la page{" "}
            <a
              href="https://es.ambafrance.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
            >
              es.ambafrance.org
            </a>{" "}
            liste l&apos;ensemble des services consulaires disponibles à Madrid.
          </p>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/papiers/permis-de-conduire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Le permis de conduire en Espagne
            </Link>
            <Link
              href="/communaute/francais-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              La communauté française à Madrid
            </Link>
            <Link
              href="/demenagement/checklist"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Checklist déménagement
            </Link>
          </div>
        </div>
      </section>

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
            NIE, sécu, compte bancaire, impôts — tous les guides administratifs
            pour t&apos;installer sereinement à Madrid.
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
