import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Salamanca, Madrid — Le guide pour les expats français",
  description:
    "Le quartier Salamanca est le plus huppé de Madrid. Rues larges, commerces de luxe, calme et qualité de vie — idéal pour les familles et les expatriés en mission.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "Salamanca, c'est le 16e arrondissement de Madrid. Des rues larges et propres, des immeubles haussmanniens impeccables, des boutiques de luxe sur la Calle Serrano, des restaurants gastronomiques. L'ambiance est calme, élégante, et résolument bourgeoise. C'est l'un des quartiers les plus chers de Madrid — et il le sait.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "Salamanca est la fourchette haute du marché madrilène. Compte 1 300 à 1 700 € pour un studio, 1 500 à 2 500 € pour un appartement d'une chambre. Les grands appartements familiaux peuvent atteindre 3 000 à 4 000 € par mois. En contrepartie, les biens sont généralement très bien entretenus et spacieux.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "Salamanca est très bien desservi par plusieurs lignes de métro (Serrano, Velázquez, Goya, Príncipe de Vergara). Les commerces haut de gamme côtoient des supermarchés de qualité. Le Mercado de la Paz est l'un des plus beaux marchés couverts de Madrid. Tout est propre, bien organisé, et fonctionnel.",
  },
  {
    number: "04",
    title: "Les familles françaises",
    content:
      "Salamanca attire beaucoup de familles françaises expatriées, notamment celles qui viennent dans le cadre d'une mission professionnelle. Le quartier est proche de plusieurs écoles françaises et internationales de qualité. Les espaces verts (Parque del Retiro à deux pas) et la sécurité du quartier en font un choix évident pour les parents.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "Salamanca convient aux familles avec enfants, aux profils CSP+, aux expatriés en mission avec package logement, et à ceux qui mettent la qualité de vie et la sécurité avant tout le reste. Si tu viens seul(e) et cherches une vie sociale intense, ce n'est probablement pas le bon choix.",
  },
];

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
];

export default function SalamancaPage() {
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
            💎 Quartier Salamanca
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à Salamanca —{" "}
            <span className="italic text-[#C8614A]">bourgeois, calme, haut de gamme</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le quartier le plus huppé de Madrid. Rues larges, immeubles impeccables,
            Parque del Retiro à deux pas. C&apos;est cher — mais la qualité de vie est
            au rendez-vous.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Bourgeois & élégant</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 500 – 2 500 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Familles · Expatriés en mission</span>
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
            Salamanca est le bon choix si ton budget le permet et si tu cherches
            une qualité de vie irréprochable. Si tu viens pour l&apos;aventure,
            l&apos;immersion et la découverte, regarde d&apos;abord Malasaña ou La Latina.
            Salamanca, c&apos;est Madrid — mais une version très policée de Madrid.
            Pas moins bien, juste différent.
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
