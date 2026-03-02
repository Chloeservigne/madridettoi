import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Chueca, Madrid — Le guide pour les expats français",
  description:
    "Chueca est le quartier cosmopolite et LGBTQ+ de Madrid. Ambiance, loyers, vie de quartier — tout ce qu'il faut savoir pour s'installer à Chueca.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "Chueca est historiquement le quartier LGBTQ+ de Madrid, et il a gardé cette énergie ouverte, festive et cosmopolite. Les rues sont animées à toute heure, les terrasses bondées le week-end, et l'atmosphère est résolument inclusive. Adjacent à Malasaña, il en partage l'esprit tout en ayant sa propre identité.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "Les prix sont similaires à Malasaña : compte 950 à 1 200 € pour un studio, 1 100 à 1 600 € pour un appartement d'une chambre. Le quartier est très prisé et les biens partent vite. Les colocations tournent autour de 550 à 750 € par chambre.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "La station de métro Chueca (ligne 5) est en plein cœur du quartier. On y trouve tout à pied : supermarchés, pharmacies, restaurants de toutes les cuisines. Le marché de San Antón est une bonne adresse pour les courses. L'accès au centre de Madrid (Sol, Gran Vía) se fait en moins de 10 minutes à pied.",
  },
  {
    number: "04",
    title: "Restaurants et vie sociale",
    content:
      "Chueca est l'un des quartiers les plus dynamiques gastronomiquement parlant. On y trouve une concentration rare de bons restaurants, des tapas bars traditionnels aux concepts plus modernes. La Calle Pelayo et ses alentours sont particulièrement animées. Le Madrid Pride (Orgullo) chaque été transforme le quartier en épicentre festif de toute la ville.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "Chueca convient à tous les profils qui veulent une vie sociale intense dans un cadre ouvert et diversifié. C'est un excellent choix si tu viens seul(e) et veux te créer rapidement un réseau. Moins adapté aux familles ou à ceux qui recherchent le calme.",
  },
];

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function ChuecaPage() {
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
            🏳️‍🌈 Quartier Chueca
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à Chueca —{" "}
            <span className="italic text-[#C8614A]">cosmopolite, animé, inclusif</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Chueca est l&apos;un des quartiers les plus vivants de Madrid. Ouvert sur
            le monde, festif sans être épuisant, c&apos;est l&apos;endroit idéal pour se
            créer une vie sociale rapidement après l&apos;installation.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Cosmopolite & festif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 100 – 1 600 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tous profils · Vie sociale active</span>
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
            Chueca et Malasaña sont souvent mis en concurrence, mais ils sont
            complémentaires. Chueca est légèrement plus calme en semaine et plus
            international dans son public. Si tu hésites entre les deux, passe
            une soirée dans chaque quartier avant de décider — tu sentiras
            rapidement lequel te ressemble le plus.
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
