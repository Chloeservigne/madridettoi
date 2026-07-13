import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler/entreprises-francaises',
  },
  title: "Entreprises françaises à Madrid — où travailler en 2026 — Madrid & Toi",
  description:
    "Airbus Getafe, Decathlon San Sebastián de los Reyes, L'Oréal, Thales, Renault Alcobendas... Les grands groupes français implantés à Madrid, leurs bureaux, leurs liens carrières, et le VIE.",
};

export default function EntreprisesFrancaisesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Les entreprises françaises à Madrid",
      description: "Airbus Getafe, Decathlon, L'Oréal, Thales, Renault... Les grands groupes français implantés à Madrid, leurs bureaux, leurs liens carrières, et le VIE.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/travailler/entreprises-francaises",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/travailler/entreprises-francaises" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Travailler", item: "https://madrid-et-toi.com/travailler" },
        { "@type": "ListItem", position: 3, name: "Entreprises françaises", item: "https://madrid-et-toi.com/travailler/entreprises-francaises" },
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
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#1fa971] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#178a5d] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide emploi
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Les entreprises françaises{" "}
            <span className="not-italic font-bold text-[#1fa971]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Madrid est la première destination des investissements français en Espagne.
            130 000 emplois, des dizaines de grands groupes implantés en banlieue ou en plein centre —
            avec adresses, liens carrières et le point sur le VIE.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-8">
            La France, premier investisseur étranger à Madrid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#1fa971] mb-2">130 000</p>
              <p className="text-[#171712] text-sm">Emplois créés par des entreprises françaises dans la région de Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#1fa971] mb-2">400+</p>
              <p className="text-[#171712] text-sm">Entreprises membres de la Chambre Franco-Espagnole (CCIFE)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#1fa971] mb-2">n°1</p>
              <p className="text-[#171712] text-sm">Communauté autonome qui reçoit le plus d&apos;investissements directs français</p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-lg">
            La présence française est ancienne, diversifiée, et couvre tous les secteurs —
            de la grande distribution à l&apos;aéronautique en passant par la tech et l&apos;énergie.
            La plupart des sièges espagnols se trouvent dans les parques empresariales
            au nord de Madrid (Alcobendas, San Sebastián de los Reyes, Pozuelo) ou sur des
            sites industriels comme Getafe au sud.
          </p>
        </div>
      </section>

      {/* Grands groupes par secteur */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-8">
            Les grands groupes — où ils sont, comment postuler
          </h2>
          <div className="space-y-5">

            {/* Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#1fa971] font-semibold uppercase tracking-widest text-sm mb-4">Distribution & Retail</p>
              <div className="space-y-5">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Decathlon España</p>
                    <a
                      href="https://www.decathlon.es/es/rrhh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège : San Sebastián de los Reyes (nord Madrid, 28702)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    17e meilleur employeur en Espagne. Le siège espagnol est à San Seba — une ville résidentielle
                    à 25 min du centre. Postes en magasin, logistique, marketing et fonctions support.
                    Bonne réputation employeur, culture sport omniprésente.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Carrefour España</p>
                    <a
                      href="https://www.carrefour.es/empleo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège : Boadilla del Monte (ouest Madrid)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Présence forte avec hypermarchés, supermarchés et e-commerce en pleine croissance.
                    Recrutements réguliers en gestion, supply chain et digital.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Leroy Merlin España</p>
                    <a
                      href="https://www.leroymerlin.es/trabaja-con-nosotros.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège : Alcobendas (nord Madrid)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Bien implantée dans toute la région. Profils commerce, logistique et management régulièrement recherchés.
                  </p>
                </div>
              </div>
            </div>

            {/* Aéro / Défense */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#1fa971] font-semibold uppercase tracking-widest text-sm mb-4">Aéronautique, Défense & Industrie</p>
              <div className="space-y-5">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Airbus España</p>
                    <a
                      href="https://www.airbus.com/en/careers/life-at-airbus/working-here/working-at-airbus-in-spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Site principal : Paseo John Lennon s/n, Getafe (sud Madrid, 28906)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    L&apos;Espagne est l&apos;un des quatre pays fondateurs d&apos;Airbus — le site de Getafe
                    est l&apos;un des plus importants du groupe. Ingénieurs aéronautiques, structures,
                    systèmes, techniciens assemblage et fonctions support. ~250 stages/an sur les
                    sites espagnols (Getafe, Séville, Illescas). L&apos;anglais est souvent suffisant en interne.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Thales España</p>
                    <a
                      href="https://thalesgroup.com/en/europe/spain/jobs-spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Bureaux : Parque Norte, Calle Serrano Galvache 56, Madrid 28033 — Centre de production : Tres Cantos (nord Madrid)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Présent en Espagne depuis plus de 30 ans. Défense, aérospatial, cybersécurité
                    (via S21Sec à Tres Cantos). Profils ingénieurs, systèmes embarqués et cybersécurité très recherchés.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Safran España</p>
                    <a
                      href="https://www.safran-group.com/careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Implantation dans la région de Madrid (équipements aéronautiques)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Moteurs, équipements de cabine et nacelles — Safran est un employeur régulier
                    pour les ingénieurs aéronautiques et mécaniciens de formation.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <p className="font-semibold text-[#171712] mb-1">Schneider Electric & Saint-Gobain</p>
                  <p className="text-[#178a5d] text-xs mb-2">Bureaux et opérations à Madrid</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Schneider Electric (gestion de l&apos;énergie) et Saint-Gobain (matériaux de construction —
                    Sekurit, Isover) ont tous deux une présence significative à Madrid avec des recrutements
                    réguliers en ingénierie et commerce.
                  </p>
                </div>
              </div>
            </div>

            {/* Beauté / Énergie / Télécom / Auto */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#1fa971] font-semibold uppercase tracking-widest text-sm mb-4">Beauté, Télécom, Énergie & Auto</p>
              <div className="space-y-5">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">L&apos;Oréal España</p>
                    <a
                      href="https://careers.loreal.com/global/en/spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège : Calle Alcalá 546, Madrid (nouveau siège inauguré récemment)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Classé parmi les entreprises les plus attractives en Espagne. Siège moderne
                    à l&apos;est de Madrid avec des équipes marketing, digital, commercial et R&D.
                    Le portail carrières espagnol est distinct du portail français.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Orange España</p>
                    <a
                      href="https://www.orange.es/trabaja-con-nosotros"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège : Parque Empresarial La Finca, Pozuelo de Alarcón (ouest Madrid, 28223)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Siège espagnol dans le parc d&apos;affaires La Finca à Pozuelo — l&apos;un des
                    plus beaux campus d&apos;entreprise de Madrid. Profils tech, data, réseau et commercial.
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Renault España</p>
                    <a
                      href="https://es.renaultgroup.com/empleo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Siège espagnol : Avenida de Europa Business Park, Alcobendas (nord Madrid)</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Siège espagnol à Alcobendas dans un bâtiment de 12 600 m². Fonctions commerciales,
                    marketing et support. L&apos;usine principale est à Valladolid (1h30 de Madrid en train).
                  </p>
                </div>
                <div className="border-t border-[#f2f0e9] pt-5">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-semibold text-[#171712]">Air Liquide España</p>
                    <a
                      href="https://www.airliquide.com/fr/rejoindre-air-liquide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1fa971] text-xs font-semibold whitespace-nowrap hover:underline"
                    >
                      Offres →
                    </a>
                  </div>
                  <p className="text-[#178a5d] text-xs mb-2">Bureaux à Madrid</p>
                  <p className="text-[#171712] text-sm leading-relaxed">
                    Actif dans les gaz industriels, médicaux et l&apos;hydrogène. Profils ingénieurs,
                    techniciens et commerciaux régulièrement recrutés.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIE */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-4">
            Le VIE : 2 400 € nets à 25 ans, chez un groupe français
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Le <strong>Volontariat International en Entreprise (VIE)</strong> est l&apos;une
            des meilleures façons d&apos;atterrir dans un grand groupe français à Madrid — surtout
            en début de carrière. C&apos;est une mission de 6 à 24 mois, avec un statut
            protecteur et une indemnité qui peut atteindre <strong>2 400 € nets par mois</strong> en Espagne.
            Exonéré de charges sociales, donc le net est élevé.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#1fa971] font-semibold uppercase tracking-widest text-sm mb-2">Conditions</p>
              <ul className="text-[#171712] text-sm leading-relaxed space-y-1">
                <li>— 18 à 28 ans au moment de la mission</li>
                <li>— Ressortissant d&apos;un pays de l&apos;Espace Économique Européen</li>
                <li>— Étudiant ou jeune diplômé en recherche d&apos;emploi</li>
                <li>— Durée : 6 à 24 mois</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#1fa971] font-semibold uppercase tracking-widest text-sm mb-2">Points d&apos;attention</p>
              <ul className="text-[#171712] text-sm leading-relaxed space-y-1">
                <li>— Pas de cotisation chômage pendant la mission</li>
                <li>— Activité rémunérée secondaire interdite</li>
                <li>— Absences limitées à 7 jours/an hors Espagne</li>
                <li>— Ce n&apos;est pas un CDI — prévoie la suite</li>
              </ul>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Les secteurs couverts sont larges : finance, marketing, commerce international,
            ingénierie, informatique, RH. Les entreprises françaises citées dans cette page
            (Airbus, Thales, L&apos;Oréal, Renault...) publient régulièrement des missions VIE en Espagne.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg">
            La plateforme officielle pour trouver et postuler :{" "}
            <a
              href="https://mon-vie-via.businessfrance.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1fa971] underline underline-offset-2 hover:text-[#178a5d] transition-colors"
            >
              mon-vie-via.businessfrance.fr
            </a>{" "}
            (Business France). Filtre par pays &ldquo;Espagne&rdquo; et la ville &ldquo;Madrid&rdquo;.
          </p>
        </div>
      </section>

      {/* Section dark — French Tech + CCIFE */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-8">
            Le réseau franco-espagnol à Madrid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#1fa971] font-semibold text-sm uppercase tracking-widest mb-2">La Chambre Franco-Espagnole</p>
              <p className="text-[#e6f4ec]/80 text-sm leading-relaxed">
                La CCIFE (fondée en 1894) organise plus de 80 événements par an et
                accueille 400+ entreprises membres. Des salons de l&apos;emploi francophones
                se tiennent à Madrid — une occasion rare de rencontrer des recruteurs
                en face à face.{" "}
                <a href="https://www.lachambre.es" target="_blank" rel="noopener noreferrer" className="text-[#1fa971] underline underline-offset-2 hover:opacity-80 transition-opacity">lachambre.es</a>
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#1fa971] font-semibold text-sm uppercase tracking-widest mb-2">French Tech Madrid</p>
              <p className="text-[#e6f4ec]/80 text-sm leading-relaxed">
                Association active qui connecte startups françaises et écosystème madrilène.
                Workshops, hackathons, pitch nights. En juin 2025, le Train de la French Tech
                a conduit ~100 startups et investisseurs de Perpignan à Madrid. Le South Summit
                (40 000 participants en 2025) est le grand rendez-vous tech local.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#1fa971] pl-6">
            <p className="text-[#e6f4ec] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Travailler dans un grand groupe français à Madrid, c&apos;est souvent
              le meilleur des deux mondes : culture d&apos;entreprise familière,
              équipes locales, et vie madrilène à la sortie du bureau.
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
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors"
            >
              Tous les secteurs qui recrutent à Madrid
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors"
            >
              Devenir autónomo (indépendant)
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/se-decider/salaire-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors"
            >
              Salaires brut/net à Madrid
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors"
            >
              Trouver un appartement
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

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
