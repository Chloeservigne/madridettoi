import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/quartiers/chamberi',
  },
  title: "Vivre à Chamberí, Madrid — Le guide pour les expats français",
  description:
    "Chamberí est la pépite méconnue des expats à Madrid. Résidentiel chic, authentique, sans touristes — le quartier idéal pour vraiment s'installer.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function ChamberiPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Chamberí : la pépite méconnue de Madrid",
      description: "Chamberí est la pépite méconnue des expats à Madrid. Résidentiel chic, authentique, sans touristes — le quartier idéal pour vraiment s'installer.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/quartiers/chamberi",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/chamberi" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Chamberí", item: "https://madrid-et-toi.com/logement/quartiers/chamberi" },
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
          <Link href="/logement/quartiers" className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all">
            ← Tous les quartiers
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">☕ Quartier Chamberí</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Chamberí —{" "}
            <span className="not-italic font-bold text-[#F0552F]">la pépite méconnue de Madrid</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Résidentiel chic, authentique, sans touristes. Chamberí est le quartier
            que les expats découvrent souvent trop tard — et qu&apos;ils ne quittent plus.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Résidentiel & authentique</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">💶 1 200 – 1 700 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Installation durable · Tous profils</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">L&apos;ambiance</h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Chamberí, c&apos;est le quartier que les Madrilènes aiment en secret et que
            les touristes ne trouvent pas. Pas de grands axes commerciaux, pas de
            foules — juste des boulangeries artisanales, des marchés de quartier,
            des cafés tranquilles où les voisins se retrouvent.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            C&apos;est un Madrid résidentiel, bourgeois sans être ostentatoire,
            authentique sans être populaire. Le Mercado de Vallehermoso est
            l&apos;un des meilleurs marchés couverts de Madrid — frais, local,
            sans touristes.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">Les loyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">1 000 – 1 300 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">1 200 – 1 700 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#F0552F] font-bold text-xl font-[family-name:var(--font-heading)]">600 – 800 €</p>
              <p className="text-[#33251E]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#33251E] leading-relaxed">
            Dans la fourchette haute du centre — reflet de la qualité de vie.
            Mais les appartements sont souvent plus grands et mieux finis
            qu&apos;à <Link href="/logement/quartiers/malasana" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">Malasaña</Link> pour un budget équivalent. Le marché est moins
            tendu qu&apos;à <Link href="/logement/quartiers/chueca" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">Chueca</Link>, et les biens restent un peu plus longtemps
            disponibles.
          </p>
        </div>
      </section>

      {/* Qualité de vie */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-6">Qualité de vie</h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg">
            Chamberí est traversé par plusieurs lignes de métro — Iglesia,
            Bilbao, Quevedo, Alonso Cano. Proche du Paseo de la Castellana,
            tout le nord de Madrid est facilement accessible. Les espaces
            verts sont plus présents qu&apos;à <Link href="/logement/quartiers/malasana" className="text-[#F6E7D9]/80 underline underline-offset-2 hover:text-[#F6E7D9] transition-colors">Malasaña</Link>, les rues plus larges,
            le bruit moins présent.
          </p>
          <blockquote className="border-l-4 border-[#F0552F] pl-6 mt-8">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              Si on devait recommander un seul quartier pour une installation
              longue durée à Madrid, ce serait probablement Chamberí. Le fait
              que peu d&apos;expats en parlent est précisément ce qui en fait
              la meilleure option.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-8">Pour qui c&apos;est fait ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F2A65A]/10 rounded-2xl p-5">
              <p className="text-[#F2A65A] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#33251E] text-sm">
                <li>✓ En projet d&apos;installation moyen ou long terme</li>
                <li>✓ Quelqu&apos;un qui veut vivre à Madrid, pas y faire du tourisme</li>
                <li>✓ Fan de marchés, de cafés locaux, de vie de quartier</li>
                <li>✓ Tous profils, famille comprise</li>
              </ul>
            </div>
            <div className="bg-[#F0552F]/10 rounded-2xl p-5">
              <p className="text-[#F0552F] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#33251E] text-sm">
                <li>✗ Tu veux une vie nocturne intense à portée de main</li>
                <li>✗ Ton budget est très serré</li>
                <li>✗ Tu cherches la bulle expatriée française</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">Les autres quartiers</p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link key={q.href} href={q.href} className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors">
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors">
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#F6E7D9]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      <footer className="py-10 px-6 bg-[#241813] text-center">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#F6E7D9] mb-2 block hover:text-[#FFC24B] transition-colors">Madrid & Toi</Link>
        <p className="text-[#F6E7D9]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
