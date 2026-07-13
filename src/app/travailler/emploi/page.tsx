import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler/emploi',
  },
  title: "Trouver un emploi à Madrid — guide pour les Français — Madrid & Toi",
  description:
    "Secteurs qui recrutent, salaires 2026, plateformes de recherche, conseils pour se démarquer à Madrid. Le guide complet pour décrocher un poste local.",
};

export default function EmploiPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Trouver un emploi à Madrid — guide pour les Français",
      description:
        "Secteurs qui recrutent, salaires 2026, plateformes de recherche, conseils pour se démarquer à Madrid. Le guide complet pour décrocher un poste local.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/travailler/emploi",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/travailler/emploi" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Travailler", item: "https://madrid-et-toi.com/travailler" },
        { "@type": "ListItem", position: 3, name: "Emploi", item: "https://madrid-et-toi.com/travailler/emploi" },
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
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide emploi
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Trouver un emploi{" "}
            <span className="not-italic font-bold text-[#F0552F]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Madrid est le premier marché de l&apos;emploi qualifié d&apos;Espagne —
            25 % des offres du pays. Pour un Français, la combinaison langue +
            profil européen est un vrai atout. Encore faut-il savoir où chercher et comment se présenter.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Contexte du marché */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Madrid, carrefour de l&apos;emploi qualifié
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            La capitale espagnole concentre les sièges sociaux des plus grandes entreprises
            du pays, des{" "}
            <Link href="/travailler/entreprises-francaises" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              multinationales
            </Link>
            , et un écosystème tech en plein essor. Le marché
            est compétitif — mais il est aussi en forte croissance. En 2025, le taux de
            chômage en Espagne est tombé à son niveau le plus bas depuis 17 ans.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Pour un Français, les opportunités sont réelles — à condition d&apos;avoir un
            niveau d&apos;espagnol opérationnel (ou un profil très spécialisé dans un secteur
            où l&apos;anglais suffit), et de comprendre les codes du marché local.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">1 221 €</p>
              <p className="text-[#33251E] text-sm">SMI brut mensuel 2026<br />(+3,1 % vs 2025)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">3 200 €</p>
              <p className="text-[#33251E] text-sm">Salaire moyen brut<br />à Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">25 %</p>
              <p className="text-[#33251E] text-sm">Des offres qualifiées<br />du pays sont à Madrid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs qui recrutent */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-8">
            Les secteurs qui recrutent des Français
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Tech & Numérique</p>
              <p className="text-[#33251E] leading-relaxed">
                Madrid est devenue un hub tech européen, portée par l&apos;agenda
                &ldquo;Digital Spain 2026&rdquo; du gouvernement. Développeurs, data engineers,
                experts cloud et cybersécurité sont en forte demande. Les FAANG
                et startups recrutent des profils seniors avec des packages entre
                45 000 et 65 000 € bruts annuels. Les profils IA sont les plus recherchés.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Finance & Banque</p>
              <p className="text-[#33251E] leading-relaxed">
                Siège de Santander, BBVA et de nombreuses institutions financières
                internationales, Madrid offre de réels débouchés en finance. Les postes
                d&apos;analyste débutant se situent autour de 30 000–40 000 € bruts/an,
                les profils expérimentés nettement plus.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Support client multilingue</p>
              <p className="text-[#33251E] leading-relaxed">
                Premier débouché pour les jeunes Français à Madrid. Les grandes entreprises
                internationales centralisent leurs équipes de support en Espagne. Parler
                français est un atout stratégique — des milliers de postes sont ouverts
                en permanence. Salaires modestes (1 400–1 800 € nets), mais accessible
                dès l&apos;arrivée.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Commercial & Business Development</p>
              <p className="text-[#33251E] leading-relaxed">
                Account managers, business developers, sales executives pour le marché
                francophone — la maîtrise du français est un véritable atout. Ces postes
                sont souvent assortis de commissions et offrent des progressions rapides.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Enseignement & FLE</p>
              <p className="text-[#33251E] leading-relaxed">
                La demande pour le français langue étrangère progresse. Écoles
                internationales, centres bilingues, cours particuliers — les profils
                français sont recherchés, souvent à mi-temps ou en complément d&apos;une
                autre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Où chercher */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Où chercher son emploi
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Le marché espagnol a ses propres plateformes — ne pas les connaître, c&apos;est
            rater la majorité des offres.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] mb-2">InfoJobs</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                La plateforme n°1 en Espagne, tous secteurs confondus. Incontournable
                pour les postes locaux, PME, et offres en espagnol.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] mb-2">LinkedIn</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Clé pour la tech, les multinationales et les postes intermédiaires.
                Le réseau est très actif à Madrid — soigne ton profil en espagnol et en anglais.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] mb-2">Le réseau</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Comme partout en Espagne, beaucoup de postes se pourvoyent par
                recommandation. Meetups tech, événements expat, communautés françaises
                à Madrid — ça vaut le déplacement.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#33251E] mb-2">Agences de recrutement</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Pour les profils expérimentés, des agences spécialisées comme
                Michael Page, Hays ou Adecco España ont une forte présence à Madrid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section dark */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-8">
            Ce que les Français sous-estiment souvent
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">L&apos;espagnol est non-négociable</p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                Sauf dans les multinationales ou les postes purement anglophones,
                un niveau B2 minimum en espagnol est attendu. C&apos;est le frein n°1
                des Français qui peinent à trouver. Investis dans des cours avant d&apos;arriver.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">Les salaires sont plus bas qu&apos;en France</p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                C&apos;est la réalité — mais le coût de la vie (hors logement) est aussi
                plus bas. Le calcul est différent. Un salaire de 2 200 € net à Madrid
                n&apos;a pas la même valeur qu&apos;en région parisienne.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">Le CV espagnol est différent</p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                Plus court (1 page), souvent avec photo, en espagnol.
                La lettre de motivation est moins usitée — c&apos;est le profil LinkedIn
                et le contact direct qui comptent.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              Si tu envisages de travailler localement, commence à chercher depuis
              la France — les entretiens en visio sont courants, et avoir un contrat
              avant d&apos;arriver simplifie tout le reste (logement, compte bancaire).
            </p>
          </blockquote>
        </div>
      </section>

      {/* NIE et paperasse */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Côté admin : ce qu&apos;il faut avoir
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Pour être embauché en Espagne, tu auras besoin d&apos;un{" "}
            <Link href="/papiers/nie" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              NIE (Número de Identificación de Extranjero)
            </Link>{" "}
            — c&apos;est ton identifiant fiscal espagnol. Ton employeur en aura besoin
            pour établir ton contrat et te déclarer à la Seguridad Social.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Une fois en poste, tu seras automatiquement affilié à la{" "}
            <Link href="/papiers/secu" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              Seguridad Social
            </Link>{" "}
            par ton employeur — couverture santé, retraite, chômage inclus.
            Pas de démarche de ton côté : c&apos;est l&apos;entreprise qui gère.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Si tu prévois de t&apos;installer durablement, pense aussi à faire ton{" "}
            <Link href="/papiers/padron" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              padron municipal
            </Link>{" "}
            — c&apos;est l&apos;inscription en mairie, qui sert pour de nombreuses démarches.
          </p>
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
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Devenir autónomo (indépendant)
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/se-decider/salaire-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Salaires brut/net à Madrid
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Budget pour vivre à Madrid
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
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
