import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Chamberí, Madrid — Le guide pour les expats français",
  description:
    "Chamberí est la pépite méconnue des expats à Madrid. Résidentiel chic, authentique, sans touristes — le quartier idéal pour vraiment s'installer.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "Chamberí, c'est le quartier que les Madrilènes aiment en secret et que les touristes ne trouvent pas. Pas de grands axes commerciaux, pas de foules — juste des boulangeries artisanales, des marchés de quartier, des cafés tranquilles où les voisins se retrouvent. C'est un Madrid résidentiel, bourgeois sans être ostentatoire, authentique sans être populaire.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "Chamberí est dans la fourchette haute du centre, reflet de sa qualité de vie. Compte 1 000 à 1 300 € pour un studio, 1 200 à 1 700 € pour un appartement d'une chambre. Les appartements sont souvent plus grands et mieux finis qu'à Malasaña pour un budget équivalent. Le marché est moins tendu qu'à Chueca.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "Chamberí est traversé par plusieurs lignes de métro (Iglesia, Bilbao, Quevedo, Alonso Cano). Le quartier est très bien équipé : le Mercado de Vallehermoso est l'un des meilleurs marchés couverts de Madrid, les commerces de proximité sont nombreux et variés. Proche du Paseo de la Castellana, tout le nord de Madrid est facilement accessible.",
  },
  {
    number: "04",
    title: "Espaces verts et qualité de vie",
    content:
      "Chamberí est l'un des quartiers les mieux dotés en espaces verts du centre de Madrid. Le Parque del Oeste et la Casa de Campo sont accessibles en métro, et plusieurs jardins de quartier ponctuent les rues. L'air y est plus respirable qu'à Malasaña, les rues plus larges, le bruit moins présent.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "Chamberí est le quartier de ceux qui veulent vraiment vivre à Madrid — pas juste y faire du tourisme. Idéal pour les personnes qui arrivent avec un projet de moyen ou long terme, qui veulent s'intégrer dans la vie de quartier madrilène, et qui n'ont pas besoin d'être à 5 minutes d'une boîte de nuit.",
  },
];

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function ChamberiPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement/quartiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Tous les quartiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            ☕ Quartier Chamberí
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à Chamberí —{" "}
            <span className="italic text-[#C8614A]">la pépite méconnue de Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Résidentiel chic, authentique, sans touristes. Chamberí est le quartier
            que les expats découvrent souvent trop tard — et qu&apos;ils ne quittent plus.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Résidentiel & authentique</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 200 – 1 700 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Installation durable · Tous profils</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8614A]/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C8614A] font-bold text-sm">
                  {section.number}
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810] mb-3">
                  {section.title}
                </h2>
                <p className="text-[#5a3e35] leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Notre avis honnête
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Si on devait recommander un seul quartier pour une installation longue
            durée à Madrid, ce serait probablement Chamberí. Il combine qualité de
            vie, authenticité et bonne connexion au reste de la ville — sans les
            inconvénients du centre touristique. Le fait que peu d&apos;expats en parlent
            est précisément ce qui en fait la meilleure option.
          </p>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Les autres quartiers
          </p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
              >
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

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
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
