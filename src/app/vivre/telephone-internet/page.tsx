import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/telephone-internet',
  },
  title: "Forfait mobile et internet à Madrid en 2026 — Madrid & Toi",
  description:
    "Movistar, MasOrange, Vodafone, Digi — comparatif des opérateurs espagnols, prix des forfaits mobile et fibre, et comment porter son numéro français.",
};

export default function TelephoneInternetPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Forfait mobile et internet à Madrid en 2026",
      description:
        "Movistar, MasOrange, Vodafone, Digi — comparatif des opérateurs espagnols, prix des forfaits mobile et fibre, et comment porter son numéro français.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      url: "https://madrid-et-toi.com/vivre/telephone-internet",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/telephone-internet" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Téléphone & internet", item: "https://madrid-et-toi.com/vivre/telephone-internet" },
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
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide téléphone & internet
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Forfait mobile et box internet{" "}
            <span className="not-italic font-bold text-[#d6442a]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Le marché espagnol des télécoms est nettement moins cher qu&apos;en
            France sur la fibre, avec quatre grands acteurs qui se tirent la
            bourre sur les prix. Voici comment t&apos;y retrouver et à qui
            confier ta ligne.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Fibre dès ~10 €/mois
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Mobile dès ~7 €/mois
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Sans engagement possible
            </span>
          </div>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Le marché */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Quatre opérateurs concentrent 98 % du marché
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Selon les données officielles de la <strong>CNMC</strong> (le
            régulateur espagnol des télécoms), publiées le 25 juin 2026 pour
            le mois de mai 2026, <strong>Movistar</strong> (Telefónica),{" "}
            <strong>Vodafone</strong> et <strong>MasOrange</strong>{" "}
            concentraient à eux seuls 85,6 % des lignes mobiles ; en ajoutant{" "}
            <strong>Digi</strong>, ce chiffre grimpe à 98,1 % sur un total de
            près de 63 millions de lignes mobiles actives dans le pays.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            MasOrange, né de la fusion entre Orange et MásMóvil, regroupe à
            lui seul huit marques nationales — dont <strong>Orange</strong>,{" "}
            <strong>Jazztel</strong> et <strong>Pepephone</strong>. Movistar
            possède également sa marque low-cost <strong>O2</strong>. Digi,
            de son côté, s&apos;est imposé en quelques années comme
            l&apos;acteur le moins cher du marché, en misant sur des prix bas
            et stables plutôt que sur des offres promotionnelles temporaires.
          </p>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Ce que ça coûte en pratique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">Digi</p>
              <p className="text-[#171712] text-sm leading-relaxed mb-3">
                Fibre seule dès 10 €/mois (500 Mb) jusqu&apos;à 20 €/mois
                (1 Gb symétrique). Forfait mobile seul dès 7 €/mois (50 Go),
                ou illimité (<em>IlimiTODO</em>). Sans engagement (
                <em>sin permanencia</em>) — l&apos;opérateur s&apos;est
                officiellement engagé à ne pas augmenter ses prix en 2026.
              </p>
              <p className="text-[#d6442a] text-xs font-semibold">Fibre + 2 lignes mobile dès 22 €/mois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">Movistar</p>
              <p className="text-[#171712] text-sm leading-relaxed mb-3">
                Fibre seule de 30 €/mois (300 Mb) à 45 €/mois (1 Gb), avec
                promotions fréquentes sur les premiers mois. Réseau et
                service client parmi les plus étendus du pays. Sa marque{" "}
                <strong>O2</strong> propose des forfaits mobile seuls plus
                économiques.
              </p>
              <p className="text-[#d6442a] text-xs font-semibold">Mobile seul dès 20 €/mois (50 Go)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">MasOrange (Orange / Jazztel / Pepephone)</p>
              <p className="text-[#171712] text-sm leading-relaxed mb-3">
                Orange se positionne sur des offres fibre + mobile complètes ;
                Jazztel et Pepephone, ses marques budget, proposent des
                forfaits plus simples et 100 % en ligne, sur le même réseau
                fibre et mobile du groupe.
              </p>
              <p className="text-[#d6442a] text-xs font-semibold">Forfaits fibre + mobile dès ~25-30 €/mois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">Vodafone</p>
              <p className="text-[#171712] text-sm leading-relaxed mb-3">
                Fibre 600 Mb seule autour de 20-30 €/mois selon les périodes
                promotionnelles en cours. Bundles fibre + 2 lignes mobile avec
                offre de lancement réduite les 3 premiers mois, puis tarif
                plein ensuite — à bien vérifier avant de signer.
              </p>
              <p className="text-[#d6442a] text-xs font-semibold">Mobile seul dès ~11 €/mois (30 Go)</p>
            </div>
          </div>
          <p className="text-[#171712]/50 text-xs mt-3">
            Prix vérifiés sur les sites officiels des opérateurs (digimobil.es,
            movistar.es, vodafone.es, orange.es) le 18 juillet 2026 — hors
            promotions ponctuelles, qui évoluent en continu et peuvent changer
            d&apos;une semaine à l&apos;autre. Données de marché : CNMC
            (cnmc.es), note du 25 juin 2026 portant sur mai 2026.
          </p>
        </div>
      </section>

      {/* Portabilité + arrivée */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Garder son numéro français, ou en prendre un espagnol ?
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-8">
            La <strong className="text-white">portabilité</strong> (
            <em>portabilidad</em>) permet de transférer ton numéro français
            chez un opérateur espagnol. En pratique, la plupart des expatriés
            préfèrent ouvrir une ligne espagnole dès l&apos;arrivée — un
            numéro local facilite les démarches administratives (banque,{" "}
            <Link href="/papiers/padron" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
              padrón
            </Link>
            , recherche de logement) et coûte souvent moins cher qu&apos;un
            forfait international.
          </p>
          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-2">
              Avant d&apos;avoir ton NIE
            </p>
            <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
              Signer un contrat mensuel exige généralement un{" "}
              <Link href="/papiers/nie" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
                NIE
              </Link>{" "}
              et un IBAN espagnol. En attendant, une carte prépayée (
              <em>prepago</em>), disponible sans papiers dans n&apos;importe
              quel bureau de tabac ou supermarché, permet de rester joignable
              dès les premiers jours.
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
            <Link href="/papiers/compte-bancaire" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Ouvrir un compte bancaire espagnol
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Obtenir son NIE
            </Link>
            <Link href="/papiers/padron" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              L&apos;empadronamiento
            </Link>
            <Link href="/vivre/transports" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Transports à Madrid
            </Link>
            <Link href="/demenagement/checklist" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La checklist complète du déménagement
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La santé à Madrid" href="/vivre/sante" />

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
            Transports, santé, courses, espagnol, sorties — tous nos guides
            pratiques pour vivre au mieux à Madrid.
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
