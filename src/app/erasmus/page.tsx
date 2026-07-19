import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus',
  },
  title: "Erasmus à Madrid — Madrid & Toi",
  description:
    "Universités, démarches, logement étudiant, budget, vie étudiante — le guide complet pour préparer ton Erasmus à Madrid.",
};

const cards = [
  {
    emoji: "🎓",
    title: "Les universités qui accueillent des Erasmus",
    description:
      "UCM, UAM, Carlos III, Comillas, Alcalá — les grandes universités madrilènes, leurs spécialités, et comment fonctionne le Learning Agreement.",
    href: "/erasmus/universites",
  },
  {
    emoji: "📋",
    title: "Les démarches administratives",
    description:
      "Ce qui est obligatoire pour un étudiant UE (padrón, certificat de résidence), l'assurance santé, et ce qui ne l'est pas.",
    href: "/erasmus/demarches",
  },
  {
    emoji: "🏠",
    title: "Trouver un logement étudiant",
    description:
      "Résidences universitaires, colocation, plateformes spécialisées — les options et les prix par quartier pour un semestre ou un an.",
    href: "/erasmus/logement-etudiant",
  },
  {
    emoji: "💶",
    title: "Le budget étudiant à Madrid",
    description:
      "Bourse Erasmus+, aides complémentaires, coût de la vie réel pour un étudiant — de quoi construire un budget réaliste.",
    href: "/erasmus/budget-etudiant",
  },
  {
    emoji: "🎉",
    title: "La vie étudiante à Madrid",
    description:
      "ESN Madrid, associations, intercambios, sorties — comment s'intégrer vite et se faire un réseau dès les premières semaines.",
    href: "/erasmus/vie-etudiante",
  },
  {
    emoji: "✅",
    title: "La checklist complète de ton Erasmus",
    description:
      "Du Learning Agreement signé à l'arrivée à Madrid — toutes les étapes dans l'ordre pour ne rien oublier.",
    href: "/erasmus/checklist",
  },
];

export default function ErasmusPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Erasmus à Madrid : le guide complet",
      description:
        "Universités, démarches, logement étudiant, budget, vie étudiante — le guide complet pour préparer ton Erasmus à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
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
            href="/"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-xs font-semibold mb-4">
            Pour les étudiants
          </span>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Erasmus à Madrid
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Ton semestre à Madrid,{" "}
            <span className="not-italic font-bold text-[#d6442a]">préparé sans stress</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Université, logement, bourse, démarches, vie étudiante — un Erasmus
            à Madrid se prépare différemment d&apos;une installation classique.
            On te guide sur ce qui est spécifique aux étudiants, en s&apos;appuyant
            aussi sur nos guides pratiques pour tout le reste.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Un Erasmus, ce n&apos;est pas une installation comme une autre
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            La bonne nouvelle : en tant qu&apos;étudiant européen, la plupart
            des lourdeurs administratives d&apos;une installation classique ne
            s&apos;appliquent pas à toi de la même façon. Pas de visa, pas
            d&apos;affiliation obligatoire à la{" "}
            <Link href="/papiers/secu" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Seguridad Social
            </Link>{" "}
            espagnole, et un accompagnement assuré par ton{" "}
            <Link href="/erasmus/universites" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              université d&apos;accueil
            </Link>{" "}
            tout au long du séjour.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Ce qui reste incontournable : t&apos;inscrire au{" "}
            <Link href="/papiers/padron" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              padrón
            </Link>{" "}
            si ton séjour dépasse 3 mois, trouver un{" "}
            <Link href="/erasmus/logement-etudiant" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              logement étudiant
            </Link>{" "}
            adapté à ton budget, et anticiper le montant réel de ta{" "}
            <Link href="/erasmus/budget-etudiant" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              bourse Erasmus+
            </Link>
            , qui varie fortement d&apos;une université française à l&apos;autre.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg">
            Et pour vivre sur place, nos guides{" "}
            <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              transports
            </Link>
            ,{" "}
            <Link href="/vivre/espagnol" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              espagnol
            </Link>{" "}
            et{" "}
            <Link href="/vivre/sortir" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              sorties
            </Link>{" "}
            fonctionnent aussi bien pour un Erasmus que pour une installation
            longue durée.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-28 px-6 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">{card.emoji}</div>
                <span className="text-[#d6442a] text-xs font-semibold">
                  Lire le guide →
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-3 group-hover:text-[#d6442a] transition-colors duration-200">
                {card.title}
              </h2>
              <p className="text-[#171712]/70 text-sm leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <EtapeSuivante label="Choisir son quartier à Madrid" href="/logement/quartiers" />

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
