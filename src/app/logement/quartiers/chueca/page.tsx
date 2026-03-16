import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
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
            Chueca —{" "}
            <span className="italic text-[#C8614A]">cosmopolite, animé, inclusif</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Chueca est l&apos;un des quartiers les plus vivants de Madrid. Ouvert sur
            le monde, festif sans être épuisant — l&apos;endroit idéal pour se créer
            une vie sociale rapidement après l&apos;installation.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Cosmopolite & festif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 100 – 1 600 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tous profils · Vie sociale active</span>
          </div>
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;ambiance
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Chueca est historiquement le quartier LGBTQ+ de Madrid, et il a gardé
            cette énergie ouverte, festive et cosmopolite. Les rues sont animées
            à toute heure, les terrasses bondées le week-end, l&apos;atmosphère
            résolument inclusive.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Adjacent à{" "}
            <Link href="/logement/quartiers/malasana" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
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
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les loyers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">950 – 1 200 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">1 100 – 1 600 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">550 – 750 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            Les prix sont similaires à Malasaña. Le marché est très tendu — les
            biens partent vite, souvent sans même être publiés. Les groupes
            Facebook restent une bonne source pour trouver avant que les agences
            ne s&apos;en emparent.
          </p>
        </div>
      </section>

      {/* Vie pratique */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La vie pratique
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            La station de métro Chueca (ligne 5) est en plein cœur du quartier.
            On y trouve tout à pied : supermarchés, pharmacies, restaurants de
            toutes les cuisines. Le marché de San Antón est une bonne adresse
            pour les courses.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Sol et la Gran Vía sont à moins de 10 minutes à pied. Le Madrid
            Pride chaque été transforme le quartier en épicentre festif de
            toute la ville — prévoir que les loyers courts terme explosent
            pendant cette période.
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Pour qui c&apos;est fait ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#F5ECD7]/80 text-sm">
                <li>✓ Arrivé(e) seul(e) et cherches à rencontrer des gens</li>
                <li>✓ Curieux(se) d&apos;une atmosphère internationale</li>
                <li>✓ Fan de bonne bouffe et de terrasses</li>
                <li>✓ Tous profils, toutes orientations</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#F5ECD7]/80 text-sm">
                <li>✗ Tu as des enfants en bas âge</li>
                <li>✗ Tu cherches le calme absolu</li>
                <li>✗ Ton budget est serré</li>
              </ul>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-10">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Chueca et Malasaña sont souvent mis en concurrence, mais ils sont
              complémentaires. Passe une soirée dans chaque quartier — tu
              sentiras rapidement lequel te ressemble.
            </p>
          </blockquote>
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

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#F5ECD7]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#2C1810] text-center">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors">Madrid & Toi</Link>
        <p className="text-[#F5ECD7]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
