import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler/freelance',
  },
  title: "Devenir autónomo en Espagne — guide complet 2026 — Madrid & Toi",
  description:
    "Tarifa plana, cotisations RETA, IRPF, IVA — tout ce qu'il faut savoir pour s'inscrire comme travailleur indépendant en Espagne et facturer légalement depuis Madrid.",
};

export default function FreelancePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Devenir autónomo en Espagne — guide complet 2026",
      description:
        "Tarifa plana, cotisations RETA, IRPF, IVA — tout ce qu'il faut savoir pour s'inscrire comme travailleur indépendant en Espagne et facturer légalement depuis Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/travailler/freelance",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/travailler/freelance" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Travailler", item: "https://madrid-et-toi.com/travailler" },
        { "@type": "ListItem", position: 3, name: "Freelance / autónomo", item: "https://madrid-et-toi.com/travailler/freelance" },
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
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide freelance
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Devenir{" "}
            <span className="not-italic font-bold text-[#F0552F]">autónomo en Espagne</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            C&apos;est la solution la plus propre pour les freelances et indépendants qui
            s&apos;installent à Madrid. Tu factures tes clients depuis l&apos;Espagne,
            tu cotises localement — et tu as une situation fiscale claire dès le départ.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Qu'est-ce qu'un autónomo */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            C&apos;est quoi, exactement, l&apos;autónomo ?
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            L&apos;<em>autónomo</em> est le statut de travailleur indépendant en Espagne.
            Il est équivalent à la micro-entreprise française — mais avec des règles fiscales
            différentes. Tu t&apos;inscris à la <em>Hacienda</em> (fisc espagnol) et à la
            <em> Seguridad Social</em>, tu paies tes cotisations mensuellement, tu factures
            avec TVA (<em>IVA</em>) et tu déclares tes revenus trimestriellement.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Contrairement à la micro en France, il n&apos;y a pas de franchise TVA : tu
            factures l&apos;IVA dès le premier euro. Et les cotisations sont fixes mensuellement —
            elles ne dépendent pas directement du chiffre d&apos;affaires du mois, mais
            d&apos;une estimation annuelle de tes revenus.
          </p>
        </div>
      </section>

      {/* Étapes d'inscription */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-10">
            Les démarches pour s&apos;inscrire
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">
                  Obtenir le NIE et un certificat numérique
                </h3>
                <p className="text-[#33251E] leading-relaxed">
                  Sans{" "}
                  <Link href="/papiers/nie" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                    NIE
                  </Link>{" "}
                  (Número de Identificación de Extranjero), rien n&apos;est possible.
                  Le certificat numérique (<em>certificado digital</em>) est indispensable
                  pour accéder aux portails en ligne de l&apos;administration espagnole.
                  Demande-le sur le site de la FNMT après avoir obtenu ton NIE.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">
                  S&apos;inscrire à la Hacienda — d&apos;abord
                </h3>
                <p className="text-[#33251E] leading-relaxed">
                  C&apos;est l&apos;ordre à respecter absolument : Hacienda en premier,
                  Seguridad Social ensuite. Tu remplis le <strong>Modelo 036 ou 037</strong>{" "}
                  (déclaration censale) pour déclarer ton activité, ton code IAE (code
                  d&apos;activité professionnelle), et choisir tes régimes fiscaux.
                  Le 037 est le formulaire simplifié — suffisant dans la grande majorité des cas.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">
                  S&apos;inscrire à la Seguridad Social (RETA)
                </h3>
                <p className="text-[#33251E] leading-relaxed">
                  Une fois inscrit à la Hacienda, tu t&apos;inscris au{" "}
                  <strong>RETA</strong> (Régimen Especial de Trabajadores Autónomos)
                  via le portail <em>Import@ss</em> ou en personne à l&apos;agence
                  Seguridad Social. Tu fournis ton NIE, ton NUSS (numéro de Sécurité
                  sociale espagnol), la date de début, ton IBAN espagnol et ton code
                  d&apos;activité.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-[#F0552F]/10 border border-[#F0552F]/20 rounded-2xl p-5">
            <p className="text-[#33251E] text-sm leading-relaxed">
              <strong>Important :</strong> s&apos;inscrire à la Seguridad Social avant la Hacienda
              est l&apos;erreur la plus courante — et la plus coûteuse. Tu perds le droit à la
              <em> Tarifa Plana</em> et paies le tarif plein dès le premier jour. Une{" "}
              <em>gestoría</em> (comptable espagnol) peut gérer ces démarches pour toi
              pour 100–200 €.
            </p>
          </div>
        </div>
      </section>

      {/* Cotisations */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-4">
            Les cotisations RETA en 2026
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Depuis 2023, les cotisations sont calculées selon les revenus nets réels estimés
            pour l&apos;année — plus tu gagnes, plus tu cotises. En 2026, le barème est gelé
            au niveau 2025. Tu peux ajuster ta base trimestriellement si ton activité évolue.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FBEBDD]">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-[#33251E] font-semibold">Revenus nets / mois</th>
                  <th className="text-right px-4 py-3 rounded-tr-xl text-[#33251E] font-semibold">Cotisation / mois</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FBEBDD]">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#33251E]">Moins de 670 €</td>
                  <td className="px-4 py-3 text-right text-[#33251E] font-medium">~205 €</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#33251E]">670 € – 1 300 €</td>
                  <td className="px-4 py-3 text-right text-[#33251E] font-medium">~260 – 290 €</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#33251E]">1 300 € – 1 700 €</td>
                  <td className="px-4 py-3 text-right text-[#33251E] font-medium">~310 – 350 €</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#33251E]">1 700 € – 2 500 €</td>
                  <td className="px-4 py-3 text-right text-[#33251E] font-medium">~370 – 425 €</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#33251E]">2 500 € – 6 000 €</td>
                  <td className="px-4 py-3 text-right text-[#33251E] font-medium">~470 – 530 €</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 rounded-b-xl text-[#33251E]">Plus de 6 000 €</td>
                  <td className="px-4 py-3 rounded-b-xl text-right text-[#33251E] font-medium">~590 – 605 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#33251E]/70 text-xs mt-3">
            Montants indicatifs basés sur le barème RETA 2025–2026. Source : Seguridad Social / seg-social.es
          </p>
          <p className="text-[#33251E] leading-relaxed text-base mt-6">
            Ces cotisations ouvrent droit à la couverture santé publique, à la retraite
            et aux arrêts maladie. Elles sont fiscalement déductibles de ta base imposable à l&apos;IRPF.
          </p>
        </div>
      </section>

      {/* Tarifa plana + blockquote */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-8">
            La Tarifa Plana : 80 € la première année
          </h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed mb-6">
            Si tu t&apos;inscris pour la première fois comme autónomo (ou si tu ne l&apos;as
            pas été depuis au moins 2 ans), tu bénéficies de la <em>Tarifa Plana</em> :
            une cotisation réduite à <strong className="text-white">80 € par mois</strong> pendant
            les 12 premiers mois (88,64 € avec le MEI en 2026).
          </p>
          <p className="text-[#F6E7D9]/80 leading-relaxed mb-8">
            Cette période peut être étendue 12 mois supplémentaires si tes revenus restent
            inférieurs au SMI (1 221 €/mois en 2026). C&apos;est un coup de pouce réel
            pour démarrer — utilise cette période pour te constituer une clientèle stable.
          </p>
          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              La <em>gestoría</em> espagnole, c&apos;est 50 à 150 € par mois — et ça vaut
              chaque euro. Déclarations trimestrielles, IRPF, IVA, optimisation fiscale :
              tu fais ton métier, ils font le reste.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Obligations fiscales */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Les obligations fiscales en pratique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">IVA (TVA)</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Tu factures l&apos;IVA à 21 % à tes clients espagnols. Tu le déclares
                trimestriellement via le <strong>Modelo 303</strong>. Si tes clients
                sont dans l&apos;UE (entreprises), tu peux facturer sans IVA — ils
                auto-liquident la TVA dans leur pays.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">IRPF (impôt sur le revenu)</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Tu déclares tes revenus nets chaque trimestre via le <strong>Modelo 130</strong>
                et tu fais ta déclaration annuelle au printemps (<em>Renta</em>). Le barème
                est progressif : de 19 % pour les premiers tranches à 47 % au-dessus de
                300 000 €. Pour la majorité des freelances, le taux effectif tourne autour
                de 20–30 %.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Résumé annuel</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                En janvier, tu soumets le <strong>Modelo 390</strong> (résumé IVA annuel)
                et le <strong>Modelo 347</strong> si tu as des clients avec plus de
                3 005 € de transactions. Ta <em>gestoría</em> gère tout ça.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Clients français</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Tu peux tout à fait continuer à travailler pour des clients français
                depuis l&apos;Espagne. Pour les particuliers français, tu factures l&apos;IVA espagnol.
                Pour les entreprises françaises, tu peux facturer hors TVA (règle
                B2B intra-UE).
              </p>
            </div>
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
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Trouver un emploi local à Madrid
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/papiers/compte-bancaire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Ouvrir un compte bancaire espagnol
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              La sécu pour les autónomos
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
