import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/sante',
  },
  title: "Santé à Madrid : médecin, urgences, pharmacies, mutuelle privée — Madrid & Toi",
  description:
    "Comment voir un médecin à Madrid, utiliser les urgences (Urgencias vs PAC), les pharmacies de nuit, et si une mutuelle privée vaut le coup. Guide complet pour les Français expatriés.",
};

export default function SantePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La santé à Madrid : médecin, urgences, mutuelle",
      description: "Comment fonctionne le système de santé espagnol pour un expatrié français ? Médecin référent, urgences de quartier, pharmacies la nuit, mutuelle privée.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/vivre/sante",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/sante" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Santé à Madrid", item: "https://madrid-et-toi.com/vivre/sante" },
      ],
    },
  ];
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide santé
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            La santé à Madrid —{" "}
            <span className="not-italic font-bold text-[#F0552F]">médecin, urgences, mutuelle</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Comment fonctionne le système de santé espagnol pour un expatrié
            français ? Médecin référent, urgences de quartier, pharmacies la
            nuit, mutuelle privée — on t&apos;explique tout pour ne pas te
            retrouver démuni le jour où tu en as besoin.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              Médecin de famille gratuit
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              PAC sans RDV
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              Mutuelle dès ~49 €/mois
            </span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Le système public */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Le système public : ton médecin de famille en premier
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            En Espagne, tout passe d&apos;abord par le{" "}
            <strong>médico de cabecera</strong> — ton médecin de famille
            référent. C&apos;est lui qui te suit, te prescrit et
            t&apos;oriente vers un spécialiste si besoin. Pour en avoir un, il
            faut être affilié à la{" "}
            <Link
              href="/papiers/secu"
              className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
            >
              Seguridad Social
            </Link>{" "}
            et disposer de la <strong>tarjeta sanitaria</strong> (l&apos;équivalent
            de la carte Vitale). L&apos;attribution se fait au{" "}
            <strong>centro de salud</strong> de ton quartier — le centre de
            santé municipal le plus proche de chez toi.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Le médecin de famille est <strong>gratuit</strong>, consultable sur
            rendez-vous (en ligne, par téléphone ou à l&apos;accueil du centro
            de salud). Pour les spécialistes, le principe est le même
            qu&apos;en France : tu ne peux y accéder que sur orientation de ton
            médecin de famille. Les délais pour les spécialistes peuvent être
            longs — parfois plusieurs semaines, voire plusieurs mois selon la
            spécialité et la période.
          </p>

          <div className="mt-8 bg-[#FBEBDD] rounded-2xl p-6">
            <p className="font-semibold text-[#33251E] mb-3">
              Pour avoir ton médecin de famille, il te faut
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Ton{" "}
                  <Link
                    href="/papiers/nie"
                    className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                  >
                    NIE
                  </Link>{" "}
                  ou passeport européen
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Le{" "}
                  <Link
                    href="/papiers/padron"
                    className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                  >
                    padron
                  </Link>{" "}
                  (certificat de résidence à Madrid)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Un justificatif d&apos;affiliation à la Seguridad Social (NUSS)
                </span>
              </li>
            </ul>
            <p className="text-[#33251E] text-sm mt-4">
              Une fois ta demande de tarjeta sanitaria déposée au centro de
              salud, tu reçois la carte sous 3 à 4 semaines. En attendant,
              la <strong>CEAM</strong> (Carte Européenne d&apos;Assurance
              Maladie française) couvre les soins urgents.
            </p>
          </div>
        </div>
      </section>

      {/* CEAM */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            La CEAM : indispensable les premiers mois
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Avant de quitter la France, demande ta{" "}
            <strong>Carte Européenne d&apos;Assurance Maladie (CEAM)</strong>{" "}
            sur <em>ameli.fr</em>. Elle est gratuite, délivrée en quelques
            jours, et te couvre pour les soins urgents dans toute l&apos;Union
            Européenne — y compris en Espagne.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Elle est valable tant que tu restes affilié à la Sécurité Sociale
            française — c&apos;est-à-dire jusqu&apos;à ce que tu bascules sur
            la{" "}
            <Link
              href="/papiers/secu"
              className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
            >
              Seguridad Social espagnole
            </Link>
            . Pendant la période de transition administrative (les premières
            semaines ou les premiers mois), elle est ta bouée de sauvetage.
            Elle ne remplace pas une tarjeta sanitaria pour le suivi régulier,
            mais elle suffit pour les soins urgents.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] text-sm mb-2">Ce qu&apos;elle couvre</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Soins médicaux nécessaires (urgences, consultation, hôpital)
                dans le réseau public espagnol. Tu payes le même tarif
                qu&apos;un assuré espagnol — souvent rien pour les
                consultations, participation pour les médicaments.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] text-sm mb-2">Ce qu&apos;elle ne couvre pas</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Soins programmés à l&apos;avance, médecine privée, soins
                dentaires non urgents, rapatriement. Pour tout ça, une
                mutuelle privée ou une assurance voyage est utile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
            Urgences : Urgencias ou PAC ?
          </h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg mb-8">
            La distinction la plus importante à retenir pour ne pas passer
            4 heures aux urgences d&apos;un hôpital pour un rhume.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#FFC24B] font-semibold mb-3">
                Urgencias hospitalières
              </p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                Pour les cas <strong className="text-white">graves</strong> :
                douleur thoracique, fracture, AVC, difficulté respiratoire,
                traumatisme sévère. Ouvert 24h/24. En cas de détresse vitale,
                appelle le <strong className="text-white">112</strong>. Personne
                ne peut être refusé en urgence, même sans tarjeta sanitaria.
              </p>
              <p className="text-[#F6E7D9]/50 text-xs mt-3">
                Temps d&apos;attente souvent long pour les cas non urgents —
                plusieurs heures possible.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#FFC24B] font-semibold mb-3">
                PAC — Punto de Atención Continuada
              </p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                Pour tout ce qui n&apos;est{" "}
                <strong className="text-white">pas grave</strong> : fièvre,
                infection, douleur modérée, point de suture, gastro, angine.
                Sans rendez-vous. Ouverts en semaine de 15h à 8h du matin, et
                24h/24 les week-ends et jours fériés. Il y a environ{" "}
                <strong className="text-white">80 PAC</strong> sur la
                Communauté de Madrid.
              </p>
              <p className="text-[#F6E7D9]/50 text-xs mt-3">
                Le bon réflexe pour 80% des situations — bien plus rapide que
                les urgences hospitalières.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              Le PAC, c&apos;est la clé. Fièvre à 39° un dimanche soir ?
              Tu vas au PAC de ton quartier, sans rendez-vous, tu es vu dans
              l&apos;heure. Pas besoin d&apos;aller aux urgences d&apos;un
              grand hôpital.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pharmacies */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Les pharmacies : nombreuses, ouvertes la nuit
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Madrid est l&apos;une des villes d&apos;Europe avec la plus forte
            densité de pharmacies. Reconnaissables à leur{" "}
            <strong>croix verte lumineuse</strong>, elles sont présentes dans
            chaque rue ou presque. Un détail qui change la vie quand on
            arrive de France.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            En dehors des horaires normaux (généralement 9h–21h), le système
            des <strong>farmacias de guardia</strong> assure une permanence
            nocturne : chaque nuit, des pharmacies de quartier restent
            ouvertes en rotation. Une affiche sur la devanture de chaque
            pharmacie fermée indique la plus proche ouverte — et des applis
            comme <em>Farmacias de Guardia</em> géolocalisent la permanence
            en temps réel.
          </p>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#33251E] mb-3">
              Un rapport aux médicaments différent de la France
            </p>
            <p className="text-[#33251E] text-sm leading-relaxed">
              Beaucoup de médicaments disponibles uniquement sur ordonnance
              en France se vendent sans ordonnance en Espagne (certains
              antidouleurs, antihistaminiques, antiseptiques, antibiotiques
              locaux). Le pharmacien espagnol joue un rôle de conseil important
              et peut orienter directement pour les petits problèmes du
              quotidien. Pour les médicaments remboursés par la Seguridad
              Social, tu payes une participation selon tes revenus (le
              <em> copago farmacéutico</em>) — entre 40% et 60% du prix selon
              ta tranche.
            </p>
          </div>
        </div>
      </section>

      {/* Mutuelle privée */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            La mutuelle privée : est-ce que ça vaut le coup ?
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Le système public espagnol est solide, mais il a ses limites.
            La principale : les délais pour les spécialistes. Un dermato,
            un gynéco, un ophtalmo — les listes d&apos;attente peuvent
            dépasser plusieurs mois. Une mutuelle privée donne accès directement
            aux spécialistes en 48 à 72h, dans des cliniques comme{" "}
            <strong>Quirónsalud</strong>, <strong>HM Hospitales</strong> ou{" "}
            <strong>Ruber Internacional</strong>, sans avance de frais.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">
                Sanitas
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Filiale de Bupa. Cliniques propres à Madrid. Bonne appli
                mobile. Accès direct aux spécialistes, téléconsultation
                incluse dans certaines formules.
              </p>
              <p className="text-[#F0552F] text-xs font-semibold">
                À partir de ~49 €/mois
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">
                SegurCaixa Adeslas
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Leader du marché. Réseau très large à Madrid. Remboursement
                dentaire partiel dans certaines formules. Bon rapport
                couverture / prix.
              </p>
              <p className="text-[#F0552F] text-xs font-semibold">
                À partir de ~49 €/mois
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">
                Asisa
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Réseau médical propre important. Très utilisée par les expats.
                Bon rapport qualité-prix, avec ou sans copago selon la formule.
              </p>
              <p className="text-[#F0552F] text-xs font-semibold">
                À partir de ~35 €/mois
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">
                DKV
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Formules économiques, appli soignée. Moins de cliniques
                propres mais réseau de partenaires étendu. Idéal pour un
                premier budget serré.
              </p>
              <p className="text-[#F0552F] text-xs font-semibold">
                À partir de ~25 €/mois
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#33251E] mb-3">
              Pour qui ça vaut vraiment le coup ?
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Les <strong>familles avec enfants</strong> : pédiatre en
                  48h, sans attente
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Ceux qui <strong>voyagent souvent</strong> : soins couverts
                  dans d&apos;autres pays selon la formule
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Ceux qui ne veulent pas <strong>attendre 3 mois</strong>{" "}
                  pour voir un spécialiste
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
                <span className="text-sm text-[#33251E]">
                  Les <strong>premiers mois à Madrid</strong> avant d&apos;être
                  pleinement affilié à la sécu publique
                </span>
              </li>
            </ul>
            <p className="text-[#33251E] text-sm mt-4 leading-relaxed">
              <strong>Attention aux carences :</strong> la plupart des mutuelles
              imposent un délai avant que certains droits s&apos;activent — jusqu&apos;à
              6 mois à 2 ans pour la maternité. À vérifier avant de souscrire.
            </p>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              La Seguridad Social en Espagne
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/vivre/transports"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Transports à Madrid
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Faire ses courses à Madrid" href="/vivre/courses" />

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
            Impôts, logement, vie pratique — les prochains guides sur
            l&apos;installation à Madrid arrivent bientôt.
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
