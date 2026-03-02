import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à La Latina, Madrid — Le guide pour les expats français",
  description:
    "La Latina est le cœur historique de Madrid. Ruelles pavées, tapas, marché du Rastro — le quartier idéal pour une vraie immersion espagnole.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "La Latina, c'est le Madrid d'avant. Des ruelles pavées, des tavernes centenaires, des patios fleuris et des voisins qui se connaissent depuis toujours. Le dimanche matin au marché du Rastro est un rituel que tu ne rateras pour rien au monde. C'est le quartier le plus authentiquement madrilène du centre — loin de l'agitation touristique de la Gran Vía.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "La Latina est légèrement moins chère que Malasaña ou Chueca, mais les prix augmentent depuis quelques années avec sa popularité croissante. Compte 850 à 1 100 € pour un studio, 950 à 1 300 € pour un appartement d'une chambre. Les appartements anciens avec vue sur les ruelles sont les plus recherchés.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "La station de métro La Latina (ligne 5) dessert bien le quartier. Les commerces de proximité sont nombreux, même si c'est moins urbain que Malasaña. Le Mercado de la Cebada est tout proche pour les courses quotidiennes. Le quartier est calme en semaine et s'anime considérablement le week-end.",
  },
  {
    number: "04",
    title: "Les tapas et la gastronomie",
    content:
      "C'est ici que tu trouveras les meilleurs bars à tapas de Madrid. La Cava Baja et la Cava Alta sont les deux rues incontournables : jambon ibérique, croquetas, patatas bravas, et une carte des vins qui respecte les traditions. Les Madrilènes viennent exprès de tout Madrid pour y passer le dimanche après le Rastro.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "La Latina est parfaite pour ceux qui cherchent une vraie immersion dans la culture madrilène, loin de la bulle expatriée. Idéal pour les couples, les amateurs de culture locale, et ceux qui en ont marre de croiser des Français partout. Moins adapté aux personnes qui veulent une vie nocturne intense tous les soirs.",
  },
];

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function LaLatinaPage() {
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
            🍷 Quartier La Latina
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à La Latina —{" "}
            <span className="italic text-[#C8614A]">traditionnel, tapas, village dans la ville</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Ruelles pavées, tavernes centenaires, marché du Rastro le dimanche.
            La Latina, c&apos;est le Madrid authentique — celui qu&apos;on imaginait avant
            d&apos;arriver, et qui dépasse encore les attentes.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Traditionnel & authentique</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 950 – 1 300 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Couples · Amateurs de culture locale</span>
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
            Beaucoup de Français commencent à Malasaña puis migrent vers La Latina
            après quelques mois. C&apos;est souvent le signe qu&apos;ils ont vraiment commencé
            à s&apos;installer — à chercher la vie de quartier plutôt que la vie de bar.
            Si tu cherches à apprendre l&apos;espagnol et à t&apos;intégrer, c&apos;est ici que tu
            y arriveras le plus vite.
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
