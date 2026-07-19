import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/vie-etudiante',
  },
  title: "La vie étudiante Erasmus à Madrid — Madrid & Toi",
  description:
    "ESN Madrid, intercambios, associations, sorties — comment s'intégrer vite et se faire un réseau dès les premières semaines de ton Erasmus.",
};

export default function VieEtudiantePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La vie étudiante Erasmus à Madrid",
      description:
        "ESN Madrid, intercambios, associations, sorties — comment s'intégrer vite et se faire un réseau dès les premières semaines de ton Erasmus.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/vie-etudiante",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/vie-etudiante" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Vie étudiante", item: "https://madrid-et-toi.com/erasmus/vie-etudiante" },
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
            Guide vie étudiante
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Se faire un réseau{" "}
            <span className="not-italic font-bold text-[#d6442a]">dès les premières semaines</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Madrid est l&apos;une des villes européennes les plus actives pour
            la vie étudiante internationale — à condition de savoir où
            regarder dès ton arrivée.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* ESN */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            ESN Madrid : le réflexe numéro un
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            L&apos;<strong>Erasmus Student Network (ESN)</strong> est le
            réseau associatif de référence pour les étudiants en échange en
            Europe. Chaque grande université madrilène a sa propre section
            locale (ESN UCM, ESN UAM, ESN Carlos III...), qui organise dès la
            rentrée des semaines d&apos;accueil, des voyages, des soirées et
            des activités pour aider les nouveaux arrivants à se rencontrer
            rapidement — c&apos;est souvent le point d&apos;entrée le plus
            simple pour se faire un premier cercle d&apos;amis.
          </p>
        </div>
      </section>

      {/* Intercambios */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Progresser en espagnol sans effort
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Les <em>intercambios</em> (rencontres linguistiques informelles
            dans les bars) sont une institution à Madrid, particulièrement
            dans les quartiers de{" "}
            <Link href="/logement/quartiers/malasana" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Malasaña
            </Link>{" "}
            et{" "}
            <Link href="/logement/quartiers/chueca" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Chueca
            </Link>
            . Notre{" "}
            <Link href="/vivre/espagnol" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              guide espagnol
            </Link>{" "}
            liste les meilleurs rendez-vous réguliers — un excellent moyen de
            rencontrer à la fois des Espagnols et d&apos;autres étudiants
            internationaux.
          </p>
        </div>
      </section>

      {/* Sorties */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Sortir sans se ruiner
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-8">
            Musées gratuits en fin de journée, parcs immenses pour les
            après-midis studieuses ou paresseuses, vie nocturne dense par
            quartier — notre{" "}
            <Link href="/vivre/sortir" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
              guide sorties
            </Link>{" "}
            détaille les horaires gratuits et les quartiers à privilégier
            selon l&apos;ambiance recherchée.
          </p>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Entre ESN, intercambios et vie de quartier, un Erasmus à Madrid
              se remplit vite d&apos;amis — le vrai risque, c&apos;est de ne
              jamais avoir de soirée tranquille.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Communauté française */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Garder un pied dans la communauté française
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Avec environ 35 000 Français résidents, Madrid a une{" "}
            <Link href="/communaute/francais-madrid" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              communauté française active
            </Link>{" "}
            — Institut français, groupes Facebook, événements réguliers. Ne
            pas s&apos;y enfermer, mais savoir que ce filet existe pour les
            coups de mou ou les questions pratiques, ça aide.
          </p>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/vivre/sortir" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Sortir à Madrid
            </Link>
            <Link href="/vivre/espagnol" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Apprendre l&apos;espagnol sur place
            </Link>
            <Link href="/communaute/francais-madrid" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La communauté française à Madrid
            </Link>
            <Link href="/erasmus/budget-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Le budget étudiant à Madrid
            </Link>
            <Link href="/erasmus/checklist" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La checklist complète de ton Erasmus
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La checklist complète de ton Erasmus" href="/erasmus/checklist" />

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
