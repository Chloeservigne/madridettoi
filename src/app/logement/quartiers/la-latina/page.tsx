import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/quartiers/la-latina',
  },
  title: "Vivre à La Latina, Madrid — Le guide pour les expats français",
  description:
    "La Latina est le cœur historique de Madrid. Ruelles pavées, tapas, marché du Rastro — le quartier idéal pour une vraie immersion espagnole.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function LaLatinaPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La Latina : traditionnel, tapas, village dans la ville",
      description: "La Latina est le cœur historique de Madrid. Ruelles pavées, tapas, marché du Rastro — le quartier idéal pour une vraie immersion espagnole.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/quartiers/la-latina",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/la-latina" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "La Latina", item: "https://madrid-et-toi.com/logement/quartiers/la-latina" },
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
          <Link href="/logement/quartiers" className="inline-flex items-center gap-2 text-[#1fa971] text-sm font-semibold mb-8 hover:gap-3 transition-all">
            ← Tous les quartiers
          </Link>
          <p className="text-[#178a5d] font-semibold tracking-widest uppercase text-sm mb-4">🍷 Quartier La Latina</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            La Latina —{" "}
            <span className="not-italic font-bold text-[#1fa971]">traditionnel, tapas, village dans la ville</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Ruelles pavées, tavernes centenaires, marché du Rastro le dimanche.
            La Latina, c&apos;est le Madrid authentique — celui qu&apos;on imaginait avant
            d&apos;arriver, et qui dépasse encore les attentes.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">Traditionnel & authentique</span>
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">💶 950 – 1 300 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">Couples · Amateurs de culture locale</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">L&apos;ambiance</h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            La Latina, c&apos;est le Madrid d&apos;avant. Des ruelles pavées, des tavernes
            centenaires, des patios fleuris et des voisins qui se connaissent
            depuis toujours. C&apos;est le quartier le plus authentiquement madrilène
            du centre — loin de l&apos;agitation touristique de la Gran Vía.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Le dimanche matin au marché du Rastro est un rituel que tu ne
            rateras pour rien au monde. Les rues se remplissent de brocanteurs,
            de curieux et de Madrilènes de toutes générations — puis tout le
            monde finit en terrasse sur la Cava Baja.
          </p>
        </div>
      </section>

      {/* Les tapas */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">La Cava Baja et les tapas</h2>
          <p className="text-[#e6f4ec]/80 leading-relaxed text-lg">
            C&apos;est ici que tu trouveras les meilleurs bars à tapas de Madrid.
            Jambon ibérique, croquetas, patatas bravas, et une carte des vins
            qui respecte les traditions. Les Madrilènes viennent exprès de
            tout Madrid pour y passer le dimanche.
          </p>
          <blockquote className="border-l-4 border-[#1fa971] pl-6 mt-8">
            <p className="text-[#e6f4ec] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Beaucoup de Français commencent à Malasaña puis migrent vers
              La Latina après quelques mois. C&apos;est souvent le signe qu&apos;ils ont
              vraiment commencé à s&apos;installer.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">Les loyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">800 – 1 050 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">950 – 1 300 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">480 – 650 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed">
            Légèrement moins cher que Malasaña, mais les prix montent depuis
            quelques années avec la popularité croissante du quartier. Les
            appartements anciens avec vue sur les ruelles pavées sont les
            plus recherchés — et partent le plus vite.
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-8">Pour qui c&apos;est fait ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#178a5d]/10 rounded-2xl p-5">
              <p className="text-[#178a5d] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#171712] text-sm">
                <li>✓ En couple ou avec des amis</li>
                <li>✓ Amateur(trice) de culture locale</li>
                <li>✓ Prêt(e) à parler espagnol au quotidien</li>
                <li>✓ Fatigué(e) de croiser des Français partout</li>
              </ul>
            </div>
            <div className="bg-[#1fa971]/10 rounded-2xl p-5">
              <p className="text-[#1fa971] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#171712] text-sm">
                <li>✗ Tu cherches une vie nocturne intense tous les soirs</li>
                <li>✗ Tu as besoin d&apos;une communauté française proche</li>
                <li>✗ Tu veux de grands espaces verts autour</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">Les autres quartiers</p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link key={q.href} href={q.href} className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors">
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#1fa971] transition-colors">
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#e6f4ec]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#178a5d] text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#171712]/80 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#171712]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      <footer className="py-10 px-6 bg-[#171712] text-center">
        <Link href="/" className="inline-block mb-2 hover:opacity-80 transition-opacity">
          <Logo variant="cream" height={24} className="mx-auto" />
        </Link>
        <p className="text-[#e6f4ec]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
