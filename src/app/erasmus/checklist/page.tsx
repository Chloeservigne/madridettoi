import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/checklist',
  },
  title: "La checklist complète de ton Erasmus à Madrid — Madrid & Toi",
  description:
    "Du Learning Agreement à l'arrivée à Madrid : toutes les étapes de préparation de ton Erasmus, dans l'ordre, pour ne rien oublier.",
};

export default function ChecklistPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La checklist complète de ton Erasmus à Madrid",
      description:
        "Du Learning Agreement à l'arrivée à Madrid : toutes les étapes de préparation de ton Erasmus, dans l'ordre, pour ne rien oublier.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/checklist",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/checklist" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Checklist", item: "https://madrid-et-toi.com/erasmus/checklist" },
      ],
    },
  ];

  const etapes = [
    {
      titre: "Signe ton Learning Agreement",
      texte: (
        <>
          Avec ton université française, liste les cours que tu suivras à
          Madrid et leur équivalence en crédits ECTS. Consulte notre guide sur{" "}
          <Link href="/erasmus/universites" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            les universités madrilènes
          </Link>{" "}
          pour connaître les spécificités de ton établissement d&apos;accueil.
        </>
      ),
    },
    {
      titre: "Monte ton dossier de bourse Erasmus+",
      texte: (
        <>
          Renseigne-toi sur le montant exact versé par ton université (entre
          225 et 550 €/mois pour l&apos;Espagne) et sur l&apos;Aide à la
          Mobilité Internationale si tu y es éligible.
        </>
      ),
    },
    {
      titre: "Trouve ton logement",
      texte: (
        <>
          Commence 3 mois avant le départ, idéalement en mai-juin pour une
          rentrée en septembre. Résidence, colocation ou studio — voir notre{" "}
          <Link href="/erasmus/logement-etudiant" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            guide logement étudiant
          </Link>
          .
        </>
      ),
    },
    {
      titre: "Demande ta CEAM et une assurance complémentaire",
      texte: (
        <>
          Au moins 15 jours avant le départ auprès de ta caisse française,
          puis souscris une assurance complémentaire étudiante (15 à 30
          €/mois) pour le rapatriement et l&apos;avance de frais.
        </>
      ),
    },
    {
      titre: "Prépare ton dossier administratif",
      texte: (
        <>
          Attestation d&apos;inscription, preuve de ressources, attestation
          d&apos;assurance, justificatif de logement — réunis-les avant de
          partir pour gagner du temps sur place.
        </>
      ),
    },
    {
      titre: "Inscris-toi au padrón dès ton arrivée",
      texte: (
        <>
          Dès que tu as ton adresse définitive, direction la mairie de ton
          quartier. Voir{" "}
          <Link href="/papiers/padron" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            notre guide empadronamiento
          </Link>
          .
        </>
      ),
    },
    {
      titre: "Fais ta demande de certificat de résidence UE",
      texte: (
        <>
          Obligatoire au-delà de 3 mois sur place. Voir notre{" "}
          <Link href="/papiers/nie" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            guide NIE / certificat UE
          </Link>{" "}
          pour la procédure et les formulaires officiels.
        </>
      ),
    },
    {
      titre: "Prends ton Abono Transporte étudiant",
      texte: (
        <>
          Le tarif réduit moins de 26 ans est l&apos;une des meilleures
          affaires de Madrid pour se déplacer. Voir{" "}
          <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            notre guide transports
          </Link>
          .
        </>
      ),
    },
    {
      titre: "Rejoins ESN et les groupes d'accueil",
      texte: (
        <>
          Inscris-toi à la section ESN de ton université dès la semaine
          d&apos;accueil pour te faire un réseau rapidement. Voir notre{" "}
          <Link href="/erasmus/vie-etudiante" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
            guide vie étudiante
          </Link>
          .
        </>
      ),
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
            Checklist Erasmus
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Ton Erasmus,{" "}
            <span className="not-italic font-extrabold text-[#d6442a]">étape par étape</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Du Learning Agreement signé à ton premier cours à Madrid — toutes
            les étapes dans l&apos;ordre, pour ne rien oublier avant le départ.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {etapes.map((etape, i) => (
              <div key={etape.titre} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[#171712] text-lg mb-2">{etape.titre}</h3>
                  <p className="text-[#171712] leading-relaxed">{etape.texte}</p>
                </div>
              </div>
            ))}
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
            <Link href="/erasmus/universites" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Les universités Erasmus
            </Link>
            <Link href="/erasmus/demarches" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Les démarches administratives
            </Link>
            <Link href="/erasmus/logement-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un logement étudiant
            </Link>
            <Link href="/erasmus/budget-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Le budget étudiant à Madrid
            </Link>
            <Link href="/erasmus/vie-etudiante" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La vie étudiante à Madrid
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
