import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "La Seguridad Social en Espagne — Madrid & Toi",
  description:
    "Tarjeta sanitaria, NUSS, RETA, copago médicaments, mutuelles privées — comment accéder aux soins en Espagne selon ta situation. Guide précis pour les Français à Madrid.",
};

const couvert = [
  "Consultations chez le médecin de famille (médico de familia)",
  "Urgences hospitalières (24h/24, même sans tarjeta)",
  "Hospitalisations et chirurgies",
  "Spécialistes (sur orientation du médecin de famille)",
  "Analyses, radios, IRM (sur prescription)",
  "Maternité et accouchement",
  "Vaccinations du calendrier officiel",
  "Médicaments (avec participation selon revenus)",
  "Transport sanitaire d'urgence",
];

const nonCouvert = [
  "Soins dentaires complexes (plombages, prothèses, implants, orthodontie)",
  "Optique (lunettes, lentilles)",
  "Psychologie libérale (sauf psychiatrie orientée)",
  "Médecine esthétique",
  "Chirurgie réfractive (laser)",
  "Cures thermales",
];

const mutuelles = [
  {
    nom: "SegurCaixa Adeslas",
    detail: "Leader du marché. Réseau très large à Madrid. Remboursement dentaire partiel dans certaines formules.",
    prix: "À partir de ~35 €/mois (sans copago)",
  },
  {
    nom: "Sanitas",
    detail: "Filiale de Bupa. Cliniques propres à Madrid (La Moraleja, etc.). Bonne appli mobile.",
    prix: "À partir de ~30 €/mois (sans copago)",
  },
  {
    nom: "Asisa",
    detail: "Bon rapport qualité-prix. Réseau médical propre important. Très utilisée par les expats.",
    prix: "À partir de ~27 €/mois (avec copago)",
  },
  {
    nom: "DKV",
    detail: "Formules économiques, appli soignée. Moins de cliniques propres mais réseau de partenaires étendu.",
    prix: "À partir de ~20 €/mois (avec copago)",
  },
];

export default function SecuPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La sécu en Espagne : comment ça marche vraiment",
      description: "Tarjeta sanitaria, NUSS, copago, mutuelles — comment accéder aux soins en Espagne selon ta situation. Guide précis pour les Français à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/papiers/secu",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/papiers/secu" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Papiers", item: "https://madrid-et-toi.com/papiers" },
        { "@type": "ListItem", position: 3, name: "Seguridad Social", item: "https://madrid-et-toi.com/papiers/secu" },
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
            href="/papiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Papiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide santé
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            La sécu en Espagne —{" "}
            <span className="italic text-[#C8614A]">comment ça marche vraiment</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Tarjeta sanitaria, NUSS, copago, mutuelles — on t&apos;explique le
            système espagnol dans le détail, pour que tu saches exactement ce à
            quoi tu as droit selon ta situation.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Consultations gratuites
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Tarjeta sous 3–4 semaines
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Médicaments avec participation
            </span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Le système */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le système de santé espagnol en bref
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            L&apos;Espagne dispose d&apos;un système de santé public universel,
            le <strong>Sistema Nacional de Salud (SNS)</strong>, financé par
            les cotisations sociales et l&apos;impôt. Il est géré par deux
            organismes principaux : la <strong>TGSS</strong> (Tesorería General
            de la Seguridad Social), qui collecte les cotisations et gère
            l&apos;administratif — l&apos;équivalent de l&apos;URSSAF —, et
            l&apos;<strong>INSS</strong> (Instituto Nacional de la Seguridad
            Social), qui reconnaît et verse les droits.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            La qualité des soins est réelle — l&apos;Espagne figure régulièrement
            parmi les meilleurs systèmes de santé en Europe. Le point
            d&apos;entrée du système, c&apos;est d&apos;abord ton{" "}
            <strong>numéro de sécurité sociale (NUSS)</strong>, puis la{" "}
            <strong>tarjeta sanitaria</strong> qui te donne accès aux soins.
          </p>
        </div>
      </section>

      {/* La tarjeta */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La tarjeta sanitaria (TSI) : ton sésame pour les soins
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            La <em>Tarjeta Sanitaria Individual</em> (TSI) est
            l&apos;équivalent de ta carte Vitale — elle t&apos;identifie comme
            usager du système public de santé madrilène (SERMAS). Elle est
            délivrée non pas par la Seguridad Social, mais par la{" "}
            <strong>Consejería de Sanidad de la Comunidad de Madrid</strong>.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">Où faire la demande</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                Au <em>centro de salud</em> de ton quartier, ou en ligne sur
                le portail de la Comunidad de Madrid avec Cl@ve.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">Documents requis</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                NIE (ou passeport UE) + <em>volante de empadronamiento</em> de
                moins de 90 jours + justificatif d&apos;affiliation SS.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-1">Délais</p>
              <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                Environ 3 à 4 semaines après dépôt du dossier complet. La
                carte est à récupérer au centro de salud.
              </p>
            </div>
          </div>

          <a
            href="https://www.comunidad.madrid/servicios/salud/tarjeta-sanitaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
          >
            Demander sa tarjeta sanitaria ↗
          </a>
        </div>
      </section>

      {/* Selon ta situation */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Selon ta situation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-3">
                Tu arrives en CDI ou CDD
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Ton employeur te déclare à la TGSS via le formulaire TA2/S
                avant ton premier jour de travail. Tu obtiens ton{" "}
                <strong className="text-white">NUSS</strong> (numéro
                d&apos;affiliation), puis tu fais ta demande de TSI au centro
                de salud. Le tout est actif dans les 2 à 4 semaines.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-3">
                Tu es autónomo
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Tu cotises toi-même au <strong className="text-white">RETA</strong>{" "}
                (Régimen Especial de Trabajadores Autónomos). Bonne nouvelle :
                les nouveaux autónomos bénéficient de la{" "}
                <strong className="text-white">tarifa plana à 80 €/mois</strong>{" "}
                les 12 premiers mois (prorogeable si revenus sous le SMI).
                Ensuite, la cotisation dépend de tes revenus réels — entre
                200 € et 590 €/mois selon 15 tranches.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-3">
                Tu arrives sans statut clair
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Si tu arrives de France, ta{" "}
                <strong className="text-white">CEAM</strong> (Carte Européenne
                d&apos;Assurance Maladie) est valable pour les soins urgents
                pendant ton séjour. Pour une couverture complète rapidement,
                beaucoup d&apos;expats prennent une mutuelle privée le temps
                de régulariser leur situation administrative.
              </p>
            </div>

          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le NUSS s&apos;obtient en ligne en 10 minutes sur le portail
              Importass de la TGSS — avec ton passeport français, aucun NIE
              n&apos;est obligatoire pour cette première étape.
            </p>
          </blockquote>
        </div>
      </section>

      {/* CEAM */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La carte européenne d&apos;assurance maladie (CEAM)
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            Ta CEAM française — délivrée par Ameli — te couvre pour les soins
            médicalement nécessaires pendant les premiers mois à Madrid, le
            temps de régulariser ton affiliation à la Seguridad Social. Elle
            permet d&apos;être soigné(e) dans le système public espagnol sans
            avance de frais pour les soins urgents.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Ce qu&apos;elle couvre</p>
              <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                Soins urgents ou médicalement nécessaires lors d&apos;un séjour
                temporaire en Espagne — consultations, urgences hospitalières,
                médicaments sur ordonnance (avec copago espagnol).
              </p>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="font-semibold text-[#C8614A] text-sm mb-2">Sa limite</p>
              <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                Elle n&apos;est valable que pour les séjours temporaires. Dès que
                tu es considéré(e) comme résident(e) en Espagne, elle perd sa
                légitimité comme couverture principale. Elle est transitoire —
                pas un substitut à la tarjeta sanitaria.
              </p>
            </div>
          </div>
          <p className="text-[#5a3e35] text-sm mt-5 leading-relaxed">
            Pour la renouveler ou en vérifier la validité, tout se gère directement
            sur{" "}
            <a
              href="https://www.ameli.fr/assure/droits-demarches/europe-international/partir-etranger/carte-europeenne-assurance-maladie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              ameli.fr
            </a>.
          </p>
        </div>
      </section>

      {/* Couvert / pas couvert */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Ce qui est couvert — et ce qui ne l&apos;est pas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <p className="font-semibold text-[#2C1810]">Pris en charge gratuitement</p>
              </div>
              <ul className="space-y-2">
                {couvert.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#5a3e35] text-sm leading-relaxed">
                    <span className="text-[#7A8C5E] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">❌</span>
                <p className="font-semibold text-[#2C1810]">Non couvert par le public</p>
              </div>
              <ul className="space-y-2">
                {nonCouvert.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#5a3e35] text-sm leading-relaxed">
                    <span className="text-[#C8614A] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-[#EDE0C8] rounded-2xl p-4">
                <p className="text-[#5a3e35] text-sm leading-relaxed">
                  <strong>À noter :</strong> les spécialistes sont accessibles
                  gratuitement, mais uniquement sur orientation de ton médecin
                  de famille. Les délais peuvent être longs — c&apos;est la
                  principale raison pour laquelle beaucoup d&apos;expats
                  prennent une mutuelle privée en complément.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copago médicaments */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Les médicaments : le copago
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Les médicaments sur ordonnance ne sont pas gratuits — tu payes une
            partie du prix (<em>copago farmacéutico</em>) selon tes revenus.
          </p>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">Travailleurs actifs (salariés, autónomos)</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">Revenus annuels &lt; 18 000 €</span>
                <span className="font-bold text-[#2C1810]">40 % du prix</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">18 000 € – 99 999 €</span>
                <span className="font-bold text-[#2C1810]">50 % du prix</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">100 000 € et plus</span>
                <span className="font-bold text-[#2C1810]">60 % du prix</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
            <div className="px-6 py-4 bg-[#2C1810]">
              <p className="text-[#E8A838] font-semibold">Retraités et pensionnés</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">Moins de 5 635 € / an</span>
                <span className="font-bold text-[#7A8C5E]">Gratuit</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">Jusqu'à 18 000 €</span>
                <span className="font-bold text-[#2C1810]">10 % (plafond 8,23 €/mois)</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">18 000 € – 99 999 €</span>
                <span className="font-bold text-[#2C1810]">10 % (plafond 18,52 €/mois)</span>
              </div>
            </div>
          </div>

          <div className="bg-[#7A8C5E]/10 border border-[#7A8C5E]/30 rounded-2xl p-5">
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              <strong>Exonérés totalement (0 %) :</strong> chômeurs ayant
              épuisé leurs droits, bénéficiaires du Revenu Minimum Vital (IMV),
              pensionnés non contributifs, accidents du travail et maladies
              professionnelles (pour les médicaments liés).
            </p>
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Urgences : SUH ou PAC ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Il y a deux types de structures d&apos;urgence à Madrid — et
            choisir la bonne fait gagner du temps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#C8614A]">
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                Urgences hospitalières (SUH)
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                Pour les cas graves : douleur thoracique, fracture, AVC,
                traumatisme, difficulté respiratoire. Ouvert 24h/24. En cas
                de détresse vitale, <strong>appelle le 112</strong>.
              </p>
              <p className="text-[#5a3e35]/70 text-xs">
                Soins garantis même sans tarjeta sanitaria. Personne ne peut
                être refusé en urgence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[#7A8C5E]">
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                PAC (Point de permanence)
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                Pour les cas non critiques hors horaires du médecin de
                famille : fièvre, infection, douleur modérée. Ouverts 15h–8h
                en semaine, 24h les week-ends et jours fériés. Réseau de ~80
                PAC sur la Communauté de Madrid.
              </p>
              <p className="text-[#5a3e35]/70 text-xs">
                Tarjeta sanitaria recommandée mais soins assurés en urgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mutuelles */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Les mutuelles privées
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mb-8">
            Le système public est solide mais les listes d&apos;attente pour
            les spécialistes peuvent être longues. Une mutuelle donne accès
            directement aux spécialistes (souvent sous 48–72h), aux cliniques
            privées, et couvre partiellement le dentaire selon la formule.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {mutuelles.map((m) => (
              <div key={m.nom} className="bg-white/10 rounded-2xl p-5">
                <p className="font-semibold text-white mb-1">{m.nom}</p>
                <p className="text-[#F5ECD7]/70 text-sm leading-relaxed mb-3">{m.detail}</p>
                <p className="text-[#E8A838] text-xs font-semibold">{m.prix}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
            <p className="text-[#F5ECD7]/70 text-sm leading-relaxed">
              <strong className="text-[#F5ECD7]">Attention aux carences :</strong> la
              plupart des mutuelles imposent un délai avant que certains droits
              s&apos;activent — 6 mois à 2 ans pour la maternité, quelques mois
              pour certaines spécialités. L&apos;optique est rarement couverte
              dans les formules de base.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le bon équilibre pour la plupart des Français à Madrid : santé
              publique pour le quotidien et les urgences, mutuelle privée pour
              les spécialistes sans attente. Environ 30–50 €/mois bien investis
              pour ne pas rester bloqué 6 semaines avant un dermato.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Médecins francophones */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Trouver un médecin francophone à Madrid
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Madrid compte environ{" "}
            <Link
              href="/communaute/francais-madrid"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              35 000 Français
            </Link>{" "}
            — il existe donc un vrai réseau de professionnels de santé
            francophones, même si c&apos;est moins formalisé qu&apos;en France.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] text-sm mb-1">Les groupes de la communauté française</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Le groupe Facebook &ldquo;Français à Madrid&rdquo; et les forums de{" "}
                  <Link
                    href="/communaute/francais-madrid"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    Madrid Accueil
                  </Link>{" "}
                  sont les meilleures ressources pour des recommandations
                  récentes — les retours d&apos;expérience y circulent activement.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] text-sm mb-1">Via ta mutuelle privée</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Sanitas et Adeslas permettent de filtrer les médecins par
                  langue parlée dans leur annuaire en ligne. C&apos;est souvent
                  le moyen le plus fiable pour trouver un généraliste ou un
                  spécialiste francophone.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] text-sm mb-1">L&apos;Institut français de Madrid</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  L&apos;IFM dispose d&apos;une liste de contacts utiles pour
                  les Français installés à Madrid, dont des professionnels de
                  santé francophones. À consulter directement auprès de leur
                  service d&apos;accueil.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2" />
              <div>
                <p className="font-semibold text-[#2C1810] text-sm mb-1">En dernier recours : Google Translate au cabinet</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                  Le vocabulaire médical en espagnol s&apos;apprend vite — et
                  la plupart des médecins ont l&apos;habitude des patients
                  étrangers. Pour les consultations courantes, une
                  préparation de 10 minutes avant le RDV suffit souvent.
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
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/papiers/compte-bancaire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Ouvrir un compte bancaire
            </Link>
            <Link
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Transports & l'Abono à Madrid" href="/vivre/transports" />

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
            Impôts, résidence fiscale, autónomo — les prochains guides
            administratifs arrivent bientôt.
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
