import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/ecoles',
  },
  title: "Scolariser ses enfants à Madrid : lycée français, école publique — Madrid & Toi",
  description:
    "Lycée Français de Madrid, école publique espagnole, sections bilingues, bourses AEFE — tout ce qu'il faut savoir pour scolariser ses enfants à Madrid selon sa situation.",
};

const mutuelles = [
  {
    nom: "Lycée Français de Madrid (LFM)",
    tag: "AEFE homologué",
    tagColor: "bg-[#C8614A]/10 text-[#C8614A]",
    detail: "Programme français continu de la TPS à la Terminale. Deux campus à Madrid. Idéal pour une expatriation courte ou si tu envisages un retour en France.",
    prix: "~6 000 – 7 500 €/an selon le niveau (hors cantine)",
  },
  {
    nom: "École publique espagnole",
    tag: "Gratuit",
    tagColor: "bg-[#7A8C5E]/10 text-[#7A8C5E]",
    detail: "Intégration réelle, bilinguisme espagnol en 1–2 ans. Gratuit de 3 à 18 ans. Procédure via la Comunidad de Madrid — le quartier du padrón détermine l'école.",
    prix: "Gratuit (fournitures ~100–200 €/an)",
  },
  {
    nom: "Section bilingue français dans le public",
    tag: "Option intermédiaire",
    tagColor: "bg-[#E8A838]/20 text-[#5a3e35]",
    detail: "15 établissements publics proposent une section bilingue franco-espagnole. 7 avec le Bachibac (double bac). Gratuit, accessible à partir du collège.",
    prix: "Gratuit",
  },
];

const iesBachibac = [
  "IES Beatriz Galindo",
  "IES Gabriel García Márquez",
  "IES Gregorio Marañón",
  "IES Juan de Mairena",
  "IES Las Canteras",
  "IES Marqués de Suanzes",
  "IES Pintor Antonio López",
];

export default function EcolesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Scolariser ses enfants à Madrid : lycée français, école publique, sections bilingues",
      description: "LFM, école publique espagnole, sections bilingues, bourses AEFE, maternelle — guide complet pour les familles françaises qui s'installent à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      url: "https://madrid-et-toi.com/vivre/ecoles",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/ecoles" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Écoles", item: "https://madrid-et-toi.com/vivre/ecoles" },
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
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide famille
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Scolariser ses enfants —{" "}
            <span className="italic text-[#C8614A]">le guide pour les familles françaises</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Lycée français ou école publique espagnole ? C&apos;est souvent le
            premier dilemme des familles françaises qui s&apos;installent à Madrid.
            Les deux ont leurs avantages — tout dépend de combien de temps tu
            restes et de ce que tu veux pour tes enfants.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              3 options comparées
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Bourses AEFE
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Maternelle dès 3 ans gratuite
            </span>
          </div>
          <AuthorBadge date="avril 2026" />
        </div>
      </section>

      {/* Vue d'ensemble */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Les 3 options en un coup d&apos;œil
          </h2>
          <div className="space-y-4">
            {mutuelles.map((option) => (
              <div key={option.nom} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-semibold text-[#2C1810]">{option.nom}</p>
                  <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${option.tagColor}`}>
                    {option.tag}
                  </span>
                </div>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed mb-2">{option.detail}</p>
                <p className="text-[#C8614A] text-xs font-semibold">{option.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le LFM */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le Lycée Français de Madrid
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Le LFM est l&apos;établissement de référence pour la{" "}
            <Link
              href="/communaute/francais-madrid"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              communauté française de Madrid
            </Link>. Il suit le programme officiel français
            de la TPS jusqu&apos;à la Terminale, avec une option Bachibac
            (double diplôme franco-espagnol, taux de réussite ~97 %).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">
                Campus Conde de Orgaz
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-2">
                Plaza del Liceo, 1 — 28043 Madrid
              </p>
              <p className="text-[#5a3e35]/70 text-xs">
                Campus principal. Maternelle → Terminale.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">
                Campus Saint-Exupéry (La Moraleja)
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-2">
                Camino Ancho, 85 — Alcobendas (banlieue nord)
              </p>
              <p className="text-[#5a3e35]/70 text-xs">
                Maternelle → 4e. Les élèves rejoignent Conde de Orgaz en 3e.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
            <p className="font-semibold text-[#2C1810] mb-3">Tarifs et inscription 2026-2027</p>
            <ul className="space-y-2 text-sm text-[#5a3e35]">
              <li className="flex gap-2">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                Frais de scolarité : environ <strong>6 000 à 7 500 €/an</strong> selon le niveau (hors cantine et activités)
              </li>
              <li className="flex gap-2">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                Droits de première inscription : <strong>1 604 €</strong> (non remboursables)
              </li>
              <li className="flex gap-2">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                Liste d&apos;attente en maternelle et primaire — à anticiper dès que possible
              </li>
              <li className="flex gap-2">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                Priorité aux fratries et aux élèves déjà inscrits
              </li>
            </ul>
          </div>

          <a
            href="https://www.lfmadrid.net/admission-a-tarifs/inscriptions-2025-2026/4384-inscriptions-2026-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
          >
            Inscriptions LFM 2026-2027 ↗
          </a>
        </div>
      </section>

      {/* École publique */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;école publique espagnole
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            L&apos;école publique est gratuite et obligatoire de 6 à 16 ans.
            La maternelle publique (<em>Educación Infantil</em>) est gratuite
            dès 3 ans. L&apos;intégration linguistique est rapide — la plupart
            des enfants sont à l&apos;aise en espagnol au bout d&apos;un an,
            plus vite encore en bas âge.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">Prérequis</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                Être{" "}
                <Link
                  href="/papiers/padron"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  empadronné
                </Link>{" "}
                à Madrid et disposer du{" "}
                <Link
                  href="/papiers/nie"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  NIE
                </Link>{" "}
                pour les parents.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">L&apos;école de secteur</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                L&apos;adresse du padrón détermine l&apos;école de rattachement. Le{" "}
                <Link
                  href="/logement/quartiers"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  choix du quartier
                </Link>{" "}
                pilote donc le choix de l&apos;école.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">Calendrier</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                Inscriptions chaque année en mars (comunidad.madrid). Résultats
                en mai, inscription effective en juin.
              </p>
            </div>
          </div>

          <div className="bg-[#7A8C5E]/10 border border-[#7A8C5E]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#2C1810] text-sm mb-2">Aulas de enlace</p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              Certains établissements proposent des classes de transition
              linguistique pour les enfants non hispanophones. Leur présence
              varie selon l&apos;école — à vérifier directement auprès de
              l&apos;établissement via le buscador de centros de la Comunidad
              de Madrid.
            </p>
          </div>
        </div>
      </section>

      {/* Sections bilingues + blockquote */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            L&apos;option intermédiaire : les sections bilingues français
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mb-8">
            15 établissements publics de la Communauté de Madrid proposent une
            section bilingue franco-espagnole — gratuite, avec une partie des
            cours dispensés en français. 7 d&apos;entre eux préparent au
            Bachibac, le double diplôme franco-espagnol reconnu dans les deux pays.
          </p>

          <div className="bg-white/10 rounded-2xl p-5 mb-8">
            <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-4">
              Établissements avec Bachibac à Madrid
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {iesBachibac.map((ies) => (
                <p key={ies} className="text-[#F5ECD7]/80 text-sm flex gap-2">
                  <span className="text-[#C8614A] flex-shrink-0">—</span>
                  {ies}
                </p>
              ))}
            </div>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le Bachibac est un vrai atout : double diplôme, bilinguisme
              certifié, accès aux universités françaises et espagnoles.
              Et totalement gratuit dans le public.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Bourses AEFE */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les bourses AEFE pour le lycée français
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Si tu scolarises ton enfant au LFM (ou à un autre établissement
            homologué), tu peux demander une bourse scolaire auprès de l&apos;AEFE
            via le consulat de France à Madrid.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold text-sm mb-2">Conditions</p>
              <ul className="space-y-1 text-[#5a3e35] text-sm">
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Enfant de nationalité française</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Inscrit au registre consulaire</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Scolarisé dans un établissement homologué MEN</li>
                <li className="flex gap-2"><span className="text-[#C8614A]">—</span>Âgé d&apos;au moins 3 ans à la rentrée</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold text-sm mb-2">Le barème</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Calculé sur un quotient familial pondéré par l&apos;indice du
                coût de la vie en Espagne. Si ce quotient est compris entre{" "}
                <strong>3 000 et 21 000 €</strong>, une bourse partielle ou
                totale est possible. Au-delà de 21 000 € : aucune bourse.
              </p>
            </div>
          </div>

          <div className="bg-[#C8614A]/10 border border-[#C8614A]/20 rounded-2xl p-5">
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              <strong>Important :</strong> la bourse est annuelle et non
              automatique — elle doit être renouvelée chaque année. Elle n&apos;est
              pas cumulable avec les prestations CAF françaises. La demande se
              fait via le consulat de France à Madrid, accessible depuis{" "}
              <a
                href="https://aefe.gouv.fr/fr/scolarite/aide-la-scolarite-par-des-bourses-scolaires"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
              >
                aefe.gouv.fr
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* La maternelle */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La maternelle espagnole (<em>Educación Infantil</em>)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-[#C8614A]">
              <p className="font-semibold text-[#2C1810] mb-1">0–3 ans — 1er cycle</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                Structures : <em>escuelas infantiles</em> municipales (77 à
                Madrid) ou privées conventionnées. <strong>Payant</strong> —
                le tarif dépend du revenu familial. Des aides mensuelles de
                118, 220 ou 385 € sont possibles selon le quotient.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-[#7A8C5E]">
              <p className="font-semibold text-[#2C1810] mb-1">3–6 ans — 2e cycle</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                Intégré dans les colegios públicos de primaire.{" "}
                <strong>Gratuit</strong> dans les écoles publiques à partir de
                3 ans. Non obligatoire légalement, mais la quasi-totalité des
                enfants y sont scolarisés. Inscriptions lors de la campagne
                annuelle de mars.
              </p>
            </div>
          </div>

          <p className="text-[#5a3e35] text-sm leading-relaxed">
            C&apos;est souvent à 3 ans que l&apos;intégration est la plus
            naturelle — les enfants absorbent la langue sans effort apparent.
            Si tu arrives à Madrid avec un enfant en bas âge, l&apos;école
            publique à 3 ans est souvent le premier pas le plus simple.
          </p>
        </div>
      </section>

      {/* Quel choix selon ta situation */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Lycée français ou école publique — selon ta situation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">
                Plutôt le Lycée Français si…
              </p>
              <ul className="space-y-3 text-[#5a3e35] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  Tu ne sais pas combien de temps tu restes à Madrid
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  Ton enfant est déjà scolarisé en France et tu veux éviter une rupture de cursus
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  Les frais sont pris en charge (partiellement) par ton employeur
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  Tu anticipes un retour en France dans les 3–5 ans
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">
                Plutôt l&apos;école publique si…
              </p>
              <ul className="space-y-3 text-[#5a3e35] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  Tu t&apos;installes durablement à Madrid
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  Tu veux que tes enfants s&apos;intègrent vraiment dans la culture espagnole
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  Ton enfant est en bas âge (l&apos;adaptation est beaucoup plus rapide avant 7 ans)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  Le budget est un critère : 6 000–7 500 €/an, ça compte
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Choisir son quartier
            </Link>
            <Link
              href="/communaute/francais-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La communauté française de Madrid
            </Link>
            <Link
              href="/vivre/sante"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La santé à Madrid
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
            Logement, papiers, vie quotidienne à Madrid — les guides pratiques
            pour toute la famille.
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
