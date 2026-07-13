import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/quartiers/lavapies',
  },
  title: "Vivre à Lavapiés, Madrid — Le guide pour les expats français",
  description:
    "Lavapiés est le quartier le plus multiculturel de Madrid. Abordable, alternatif, artistique — pour ceux qui veulent Madrid sans les prix du centre.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function LavapiesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Lavapiés : multiculturel, alternatif, abordable",
      description: "Lavapiés est le quartier le plus multiculturel de Madrid. Abordable, alternatif, artistique — pour ceux qui veulent Madrid sans les prix du centre.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/quartiers/lavapies",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/lavapies" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Lavapiés", item: "https://madrid-et-toi.com/logement/quartiers/lavapies" },
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
          <p className="text-[#178a5d] font-semibold tracking-widest uppercase text-sm mb-4">🌍 Quartier Lavapiés</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Lavapiés —{" "}
            <span className="not-italic font-bold text-[#1fa971]">multiculturel, alternatif, abordable</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Le quartier le plus cosmopolite de Madrid. Brut, créatif, avec les
            loyers les plus bas du centre — et une énergie qu&apos;on ne trouve
            nulle part ailleurs.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">Multiculturel & alternatif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">💶 800 – 1 100 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#1fa971]/10 text-[#1fa971] text-sm font-semibold">Profils créatifs · Budget serré</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">L&apos;ambiance</h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Lavapiés est le quartier le plus cosmopolite de Madrid : communautés
            indienne, africaine, asiatique, latino-américaine et espagnole
            cohabitent dans un espace dense et vivant. Street art partout,
            collectifs culturels, programmation alternative. Une énergie unique,
            brute et authentique.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Le Museo Reina Sofía est à deux pas — et c&apos;est peut-être ce qui
            dit le mieux ce qu&apos;est ce quartier : de l&apos;art partout, du bouillonnement
            permanent, une créativité qui déborde dans la rue.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">Les loyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">700 – 900 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">800 – 1 100 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#1fa971] font-bold text-xl font-[family-name:var(--font-body)]">400 – 580 €</p>
              <p className="text-[#171712]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed">
            Les loyers les plus bas du centre de Madrid — et ça monte. La
            gentrification avance lentement mais sûrement. Si tu veux le
            Lavapiés abordable, c&apos;est maintenant.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">Culture et vie alternative</h2>
          <p className="text-[#e6f4ec]/80 leading-relaxed text-lg">
            Lavapiés abrite une concentration exceptionnelle de lieux culturels
            alternatifs : salles de concert indépendantes, galeries d&apos;art,
            cinémas d&apos;auteur, espaces de coworking associatifs. Ici, personne
            ne te répondra en anglais — c&apos;est aussi ce qui en fait le meilleur
            quartier pour apprendre l&apos;espagnol en immersion totale.
          </p>
          <blockquote className="border-l-4 border-[#1fa971] pl-6 mt-8">
            <p className="text-[#e6f4ec] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Dans cinq ans, Lavapiés ressemblera peut-être à{" "}
              <Link href="/logement/quartiers/malasana" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Malasaña</Link>.
              Ce n&apos;est pas une raison pour ne pas y aller — c&apos;est une raison
              pour ne pas attendre.
            </p>
          </blockquote>
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
                <li>✓ Profil créatif, artiste, curieux</li>
                <li>✓ Budget serré mais refus de s&apos;exiler loin du centre</li>
                <li>✓ Quelqu&apos;un qui veut apprendre l&apos;espagnol vite</li>
                <li>✓ Esprit ouvert, voire militant</li>
              </ul>
            </div>
            <div className="bg-[#1fa971]/10 rounded-2xl p-5">
              <p className="text-[#1fa971] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#171712] text-sm">
                <li>✗ Tu cherches le calme et la sécurité absolue</li>
                <li>✗ Tu as des enfants en bas âge</li>
                <li>✗ Tu veux une communauté française proche</li>
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
