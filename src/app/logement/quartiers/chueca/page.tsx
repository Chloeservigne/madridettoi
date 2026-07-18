import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/quartiers/chueca',
  },
  title: "Vivre à Chueca, Madrid — Le guide pour les expats français",
  description:
    "Chueca est le quartier cosmopolite et LGBTQ+ de Madrid. Ambiance, loyers, vie de quartier — tout ce qu'il faut savoir pour s'installer à Chueca.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function ChuecaPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Chueca : cosmopolite, animé, inclusif",
      description: "Chueca est le quartier cosmopolite et LGBTQ+ de Madrid. Ambiance, loyers, vie de quartier — tout ce qu'il faut savoir pour s'installer à Chueca.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/quartiers/chueca",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/chueca" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Chueca", item: "https://madrid-et-toi.com/logement/quartiers/chueca" },
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
            href="/logement/quartiers"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Tous les quartiers
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            🏳️‍🌈 Quartier Chueca
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Chueca —{" "}
            <span className="not-italic font-bold text-[#d6442a]">cosmopolite, animé, inclusif</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Chueca est l&apos;un des quartiers les plus vivants de Madrid. Ouvert sur
            le monde, festif sans être épuisant — l&apos;endroit idéal pour se créer
            une vie sociale rapidement après l&apos;installation.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">Cosmopolite & festif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">💶 1 100 – 1 600 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">Tous profils · Vie sociale active</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            L&apos;ambiance
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Chueca est historiquement le quartier LGBTQ+ de Madrid, et il a gardé
            cette énergie ouverte, festive et cosmopolite. Les rues sont animées
            à toute heure, les terrasses bondées le week-end, l&apos;atmosphère
            résolument inclusive.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Adjacent à{" "}
            <Link href="/logement/quartiers/malasana" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Malasaña
            </Link>
            , il en partage l&apos;esprit tout en ayant sa propre identité — plus
            internationale, plus ouverte, légèrement plus calme en semaine.
            La Calle Pelayo et ses alentours concentrent une quantité
            impressionnante de bons restaurants.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les loyers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#d6442a] font-bold text-xl font-[family-name:var(--font-body)]">950 – 1 200 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#d6442a] font-bold text-xl font-[family-name:var(--font-body)]">1 100 – 1 600 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#d6442a] font-bold text-xl font-[family-name:var(--font-body)]">550 – 750 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed">
            Les prix sont similaires à Malasaña. Le marché est très tendu — les
            biens partent vite, souvent sans même être publiés. Les groupes
            Facebook restent une bonne source pour trouver avant que les agences
            ne s&apos;en emparent.
          </p>
        </div>
      </section>

      {/* Vie pratique */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            La vie pratique
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            La station de métro Chueca (ligne 5) est en plein cœur du quartier.
            On y trouve tout à pied : supermarchés, pharmacies, restaurants de
            toutes les cuisines. Le marché de San Antón est une bonne adresse
            pour les courses.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Sol et la Gran Vía sont à moins de 10 minutes à pied. Le Madrid
            Pride chaque été transforme le quartier en épicentre festif de
            toute la ville — prévoir que les loyers courts terme explosent
            pendant cette période.
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-8">
            Pour qui c&apos;est fait ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#fbe8e4]/80 text-sm">
                <li>✓ Arrivé(e) seul(e) et cherches à rencontrer des gens</li>
                <li>✓ Curieux(se) d&apos;une atmosphère internationale</li>
                <li>✓ Fan de bonne bouffe et de terrasses</li>
                <li>✓ Tous profils, toutes orientations</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#fbe8e4]/80 text-sm">
                <li>✗ Tu as des enfants en bas âge</li>
                <li>✗ Tu cherches le calme absolu</li>
                <li>✗ Ton budget est serré</li>
              </ul>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#d6442a] pl-6 mt-10">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Chueca et Malasaña sont souvent mis en concurrence, mais ils sont
              complémentaires. Passe une soirée dans chaque quartier — tu
              sentiras rapidement lequel te ressemble.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Les autres quartiers
          </p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link key={q.href} href={q.href} className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#171712]/80 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#171712]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#171712] text-center">
        <Link href="/" className="inline-block mb-2 hover:opacity-80 transition-opacity">
          <Logo variant="cream" height={24} className="mx-auto" />
        </Link>
        <p className="text-[#fbe8e4]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
