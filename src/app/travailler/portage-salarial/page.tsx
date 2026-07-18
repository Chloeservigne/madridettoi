import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler/portage-salarial',
  },
  title: "Portage salarial depuis Madrid : ce qu'il faut savoir — Madrid & Toi",
  description:
    "Le portage salarial français est-il compatible avec une installation durable à Madrid ? Résidence fiscale, règle des 183 jours, détachement A1 — ce qu'il faut vérifier avant de te lancer.",
};

export default function PortageSalarialPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Portage salarial depuis Madrid : ce qu'il faut savoir",
      description:
        "Le portage salarial français est-il compatible avec une installation durable à Madrid ? Résidence fiscale, règle des 183 jours, détachement A1 — ce qu'il faut vérifier avant de te lancer.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      url: "https://madrid-et-toi.com/travailler/portage-salarial",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/travailler/portage-salarial" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Travailler", item: "https://madrid-et-toi.com/travailler" },
        { "@type": "ListItem", position: 3, name: "Portage salarial", item: "https://madrid-et-toi.com/travailler/portage-salarial" },
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
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide portage salarial
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Le portage salarial,{" "}
            <span className="not-italic font-bold text-[#d6442a]">une bonne idée depuis Madrid ?</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Rester salarié d&apos;une société de portage française tout en
            vivant à Madrid séduit beaucoup de consultants — ça évite de
            gérer soi-même les démarches espagnoles. Le problème : ça ne
            fonctionne vraiment que pour une situation temporaire, pas pour
            une installation durable.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Le principe */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Comment fonctionne le portage salarial, en résumé
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            En portage salarial, tu restes formellement{" "}
            <strong>salarié d&apos;une société de portage</strong> française :
            elle facture tes clients, te reverse un salaire, et gère tes
            cotisations sociales et ta fiscalité françaises. C&apos;est une
            solution confortable quand tu es en France — mais toute la
            mécanique repose sur le fait que tu restes rattaché au système
            social et fiscal français.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Le problème apparaît dès que tu t&apos;installes réellement en
            Espagne : ce rattachement au système français cesse d&apos;être
            valable au-delà d&apos;un certain seuil de présence sur le
            territoire espagnol.
          </p>
        </div>
      </section>

      {/* La règle des 183 jours */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            La règle des 183 jours change tout
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Si tu passes plus de <strong className="text-white">183 jours par an en Espagne</strong>{" "}
            (ou que le centre de tes intérêts économiques s&apos;y trouve), tu
            deviens <strong className="text-white">résident fiscal espagnol</strong> — tu dois
            déclarer l&apos;ensemble de tes revenus mondiaux à la{" "}
            <Link href="/papiers/impots" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Hacienda
            </Link>{" "}
            et payer l&apos;IRPF espagnol, quelle que soit l&apos;origine des
            revenus. Une fois résident fiscal espagnol, tu ne peux
            théoriquement plus rester salarié d&apos;une société de portage
            française dans les conditions normales.
          </p>
          <div className="bg-white/10 rounded-2xl p-5 mb-6">
            <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-2">
              L&apos;exception : le détachement temporaire
            </p>
            <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
              Pour une <strong className="text-white">mission ponctuelle de moins de 24 mois</strong>, ta
              société de portage peut te fournir un formulaire{" "}
              <strong className="text-white">A1</strong>, qui te maintient affilié à la Sécurité sociale
              française pendant ta mission en Espagne. C&apos;est un mécanisme
              pensé pour de la mobilité temporaire — pas pour un déménagement
              définitif.
            </p>
          </div>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Si le projet, c&apos;est de t&apos;installer à Madrid pour de
              bon — pas juste pour une mission de quelques mois — le portage
              salarial français n&apos;est pas la solution durable, même si
              certaines sociétés de portage laissent entendre le contraire.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Les vraies options */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les options pour une installation durable
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Autónomo espagnol
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                L&apos;équivalent local de la micro-entreprise. Tu factures
                directement tes clients (français ou espagnols) depuis
                l&apos;Espagne, tu cotises au RETA, tu bénéficies de la Tarifa
                Plana la première année. C&apos;est la solution la plus propre
                pour la grande majorité des freelances qui s&apos;installent
                à Madrid.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Société de portage espagnole
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Moins répandue qu&apos;en France, mais elle existe : une
                société de portage locale te salarie selon les règles
                espagnoles, avec cotisations à la Seguridad Social. Utile si
                tu veux garder un statut de salarié sans créer ta propre
                structure.
              </p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-lg mt-8">
            Dans la grande majorité des cas, le passage au statut d&apos;
            <Link href="/travailler/freelance" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              autónomo
            </Link>{" "}
            reste la voie la plus simple et la plus reconnue à Madrid — y
            compris pour continuer à travailler avec des clients français,
            grâce aux règles de TVA intracommunautaire.
          </p>
        </div>
      </section>

      {/* Avant de se lancer */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#d6442a]/10 border border-[#d6442a]/20 rounded-2xl p-6">
            <p className="text-[#171712] text-sm leading-relaxed">
              <strong>Important :</strong> la frontière entre mission
              temporaire et installation durable a des conséquences fiscales
              et sociales réelles, et se juge au cas par cas. Avant de prendre
              une décision, fais valider ta situation précise par ta société
              de portage <em>et</em> par un conseiller fiscal spécialisé
              franco-espagnol — les règles se croisent entre deux
              administrations et une erreur de départ coûte cher à corriger.
            </p>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/travailler/freelance" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Devenir autónomo en Espagne
            </Link>
            <Link href="/travailler/remote" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Travailler en remote depuis Madrid
            </Link>
            <Link href="/papiers/impots" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Impôts & IRPF en Espagne
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Obtenir son NIE
            </Link>
            <Link href="/papiers/secu" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La Seguridad Social en Espagne
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Devenir autónomo en Espagne" href="/travailler/freelance" />

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
            Autónomo, emploi local, créer une SL — les prochains guides
            travail arrivent bientôt. Inscris-toi pour les recevoir dès leur
            publication.
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
