import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Vivre à Salamanca, Madrid — Le guide pour les expats français",
  description:
    "Le quartier Salamanca est le plus huppé de Madrid. Rues larges, commerces de luxe, calme et qualité de vie — idéal pour les familles et les expatriés en mission.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
];

export default function SalamancaPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Salamanca : bourgeois, calme, haut de gamme",
      description: "Le quartier Salamanca est le plus huppé de Madrid. Rues larges, commerces de luxe, calme et qualité de vie — idéal pour les familles et les expatriés en mission.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/logement/quartiers/salamanca",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/salamanca" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Salamanca", item: "https://madrid-et-toi.com/logement/quartiers/salamanca" },
      ],
    },
  ];
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link href="/logement/quartiers" className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all">
            ← Tous les quartiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">💎 Quartier Salamanca</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Salamanca —{" "}
            <span className="italic text-[#C8614A]">bourgeois, calme, haut de gamme</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le quartier le plus huppé de Madrid. Rues larges, immeubles
            impeccables, Parque del Retiro à deux pas. C&apos;est cher — mais
            la qualité de vie est au rendez-vous.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Bourgeois & élégant</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 500 – 2 500 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Familles · Expatriés en mission</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">L&apos;ambiance</h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Salamanca, c&apos;est le 16e arrondissement de Madrid. Des rues larges
            et propres, des immeubles haussmanniens impeccables, des boutiques
            de luxe sur la Calle Serrano, des restaurants gastronomiques.
            L&apos;ambiance est calme, élégante, et résolument bourgeoise.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le Parque del Retiro — l&apos;un des plus beaux parcs d&apos;Europe — est
            à deux pas. C&apos;est là que les familles du quartier passent leurs
            dimanches matins, que les joggers font leurs tours, et que Madrid
            ressemble à une autre ville.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">Les loyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">1 300 – 1 700 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">1 500 – 2 500 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">3 000 – 4 000 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Grand appart famille</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            La fourchette haute du marché madrilène — mais en contrepartie,
            les biens sont généralement très bien entretenus, spacieux, et
            avec des prestations que tu ne trouveras pas ailleurs dans le centre.
          </p>
        </div>
      </section>

      {/* Familles françaises */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">Le quartier des familles françaises</h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            Salamanca attire beaucoup de familles françaises expatriées, notamment
            celles qui viennent dans le cadre d&apos;une mission professionnelle.
            Plusieurs écoles françaises et internationales de qualité sont
            accessibles facilement depuis le quartier.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Salamanca, c&apos;est Madrid — mais une version très policée de Madrid.
              Pas moins bien, juste différent. Si tu viens pour l&apos;aventure
              et l&apos;immersion, regarde d&apos;abord{" "}
              <Link href="/logement/quartiers/malasana" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Malasaña</Link>{" "}
              ou{" "}
              <Link href="/logement/quartiers/la-latina" className="underline underline-offset-2 hover:opacity-80 transition-opacity">La Latina</Link>.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">Pour qui c&apos;est fait ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#7A8C5E]/10 rounded-2xl p-5">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✓ Famille avec enfants scolarisés</li>
                <li>✓ Expatrié(e) en mission avec package logement</li>
                <li>✓ Profil CSP+ qui mise sur la qualité de vie</li>
                <li>✓ Amateur(trice) de calme et de verdure</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu viens seul(e) chercher une vie sociale intense</li>
                <li>✗ Ton budget ne dépasse pas 1 200 € de loyer</li>
                <li>✗ Tu cherches l&apos;immersion dans le Madrid populaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">Les autres quartiers</p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link key={q.href} href={q.href} className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#F5ECD7]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      <footer className="py-10 px-6 bg-[#2C1810] text-center">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors">Madrid & Toi</Link>
        <p className="text-[#F5ECD7]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
