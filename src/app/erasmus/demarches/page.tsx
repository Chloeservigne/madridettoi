import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/demarches',
  },
  title: "Démarches administratives pour un Erasmus à Madrid — Madrid & Toi",
  description:
    "Padrón, certificat de résidence UE, assurance santé (CEAM) — ce qui est vraiment obligatoire pour un étudiant Erasmus français à Madrid, et ce qui ne l'est pas.",
};

export default function DemarchesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Démarches administratives pour un Erasmus à Madrid",
      description:
        "Padrón, certificat de résidence UE, assurance santé (CEAM) — ce qui est vraiment obligatoire pour un étudiant Erasmus français à Madrid, et ce qui ne l'est pas.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/demarches",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/demarches" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Démarches", item: "https://madrid-et-toi.com/erasmus/demarches" },
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
            href="/erasmus"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Erasmus
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide démarches
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Ce qui est vraiment{" "}
            <span className="not-italic font-bold text-[#d6442a]">obligatoire</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            En tant qu&apos;étudiant européen, ton Erasmus à Madrid demande
            beaucoup moins de démarches qu&apos;une installation classique.
            Voici ce qui reste incontournable, et ce qui ne l&apos;est pas.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Pas de visa */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Pas de visa, mais une inscription au-delà de 3 mois
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Étant citoyen européen, tu n&apos;as besoin ni de visa ni de titre
            de séjour pour étudier en Espagne — ta carte d&apos;identité
            suffit pour entrer sur le territoire. En revanche, dès que ton
            séjour dépasse 3 mois (ce qui est le cas pour un semestre ou une
            année Erasmus), la loi espagnole impose de t&apos;inscrire au{" "}
            <strong>registre des citoyens de l&apos;Union européenne</strong>{" "}
            — la même démarche qui aboutit à l&apos;obtention d&apos;un
            numéro NIE, mais avec un formulaire spécifique aux citoyens
            européens (l&apos;EX-18) plutôt que celui utilisé par les
            ressortissants hors UE. Notre{" "}
            <Link href="/papiers/nie" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              guide NIE
            </Link>{" "}
            détaille la procédure et les liens vers les formulaires officiels.
          </p>
        </div>
      </section>

      {/* Padron */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le padrón : à faire dès que tu as une adresse
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            L&apos;
            <Link href="/papiers/padron" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              empadronamiento
            </Link>{" "}
            (inscription au registre municipal) est obligatoire pour tout
            séjour de plus de 3 mois — y compris pour les étudiants Erasmus.
            Bonne nouvelle : tu n&apos;as pas besoin d&apos;attendre ton
            certificat de résidence UE pour t&apos;inscrire, seulement un bail
            ou une attestation de logement à ton nom. Le padrón te sera
            souvent demandé par ton université pour finaliser ton inscription
            administrative sur place.
          </p>
        </div>
      </section>

      {/* Assurance santé */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            L&apos;assurance santé : CEAM + complémentaire, le duo gagnant
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Contrairement à une installation professionnelle, tu n&apos;as pas
            besoin de t&apos;affilier à la{" "}
            <Link href="/papiers/secu" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Seguridad Social
            </Link>{" "}
            espagnole pour ton Erasmus. Une assurance n&apos;est
            techniquement pas obligatoire pour étudier dans un pays de l&apos;UE,
            mais deux couvertures sont vivement recommandées avant le départ :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#d6442a] font-semibold mb-3">La CEAM</p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                La Carte Européenne d&apos;Assurance Maladie, gratuite, à
                demander au moins 15 jours avant le départ auprès de ta caisse
                française. Elle donne accès au système public espagnol, aux
                mêmes conditions qu&apos;un assuré espagnol.
              </p>
              <p className="text-[#fbe8e4]/50 text-xs mt-3">
                Ne couvre ni le rapatriement, ni les avances de frais en cas
                d&apos;hospitalisation lourde.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#d6442a] font-semibold mb-3">L&apos;assurance complémentaire</p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                Comptez 15 à 30 €/mois pour une assurance étudiante
                internationale couvrant rapatriement, responsabilité civile
                et avance de frais — souvent exigée par les universités pour
                valider ton dossier d&apos;inscription.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              CEAM + complémentaire étudiante : pour un semestre en Europe,
              c&apos;est la combinaison la plus simple et la moins chère qui
              couvre vraiment tout.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Documents à réunir */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les documents à réunir avant de partir
          </h2>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#d6442a]">
              <p className="text-white font-semibold">📋 Ton dossier</p>
            </div>
            <div className="divide-y divide-[#f2f0e9]">
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">Attestation d&apos;inscription de l&apos;université d&apos;accueil</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">Fournie une fois ton Learning Agreement validé</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">Preuve de ressources financières</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">Relevé bancaire, attestation de bourse, ou garant</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">Attestation d&apos;assurance santé</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">CEAM + assurance complémentaire</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">Justificatif de logement</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">Bail ou attestation, nécessaire pour le padrón</p>
                </div>
              </div>
            </div>
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
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Obtenir son NIE
            </Link>
            <Link href="/papiers/padron" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              L&apos;empadronamiento
            </Link>
            <Link href="/papiers/secu" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La Seguridad Social en Espagne
            </Link>
            <Link href="/erasmus/logement-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un logement étudiant
            </Link>
            <Link href="/erasmus/checklist" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La checklist complète de ton Erasmus
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un logement étudiant" href="/erasmus/logement-etudiant" />

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
            Universités, budget, logement étudiant — tous nos guides Erasmus
            pour préparer ton semestre à Madrid.
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
