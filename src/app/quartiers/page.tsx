import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Les quartiers de Madrid pour les expats français — Madrid & Toi",
  description:
    "Malasaña, Chueca, Lavapiés, La Latina... Quel quartier choisir pour s'installer à Madrid ? On décrit l'ambiance, les prix et le profil de chaque quartier.",
};

const quartiers = [
  {
    name: "Malasaña",
    emoji: "🎨",
    vibe: "Bohème, branché, francophone",
    budget: "1 100 – 1 500 € / mois (1 chambre)",
    description:
      "C'est le quartier le plus prisé par les Français à Madrid. Ambiance Berlin en moins froid : cafés indépendants, vintage shops, terrasses animées. Beaucoup d'expatriés francophones y vivent, ce qui facilite l'intégration au début — mais ça peut aussi te donner l'impression de ne jamais vraiment quitter Paris.",
    forWho: "Jeunes actifs, créatifs, digital nomads",
  },
  {
    name: "Chueca",
    emoji: "🏳️‍🌈",
    vibe: "Cosmopolite, animé, inclusif",
    budget: "1 100 – 1 600 € / mois (1 chambre)",
    description:
      "Adjacent à Malasaña, Chueca est historiquement le quartier LGBTQ+ de Madrid. Il attire une population jeune, internationale, et ouverte. La vie de quartier est intense, les restaurants nombreux et l'ambiance toujours festive. Les prix sont similaires à Malasaña.",
    forWho: "Tous profils, vie sociale active",
  },
  {
    name: "La Latina",
    emoji: "🍷",
    vibe: "Traditionnel, tapas, village dans la ville",
    budget: "900 – 1 300 € / mois (1 chambre)",
    description:
      "Le coeur historique de Madrid avec ses ruelles pavées et ses tavernes centenaires. Le dimanche au Rastro (marché aux puces) est un rituel local. C'est un quartier plus calme en semaine, mais qui s'anime le week-end. Moins de Français, plus d'immersion espagnole — c'est souvent ce que les gens cherchent après quelques mois à Malasaña.",
    forWho: "Amateurs de culture locale, couples",
  },
  {
    name: "Lavapiés",
    emoji: "🌍",
    vibe: "Multiculturel, alternatif, abordable",
    budget: "750 – 1 100 € / mois (1 chambre)",
    description:
      "Le quartier le plus cosmopolite de Madrid : indien, africain, asiatique, espagnol — tout cohabite. C'est aussi le plus militant et artistique. Les loyers restent plus accessibles qu'ailleurs dans le centre. Attention : certaines rues sont plus animées que d'autres tard le soir.",
    forWho: "Budget serré, culture underground, ouverture d'esprit",
  },
  {
    name: "Salamanca",
    emoji: "💎",
    vibe: "Bourgeois, calme, haut de gamme",
    budget: "1 500 – 2 500 € / mois (1 chambre)",
    description:
      "Le 16e arrondissement de Madrid. Commerces de luxe, restaurants gastronomiques, rues larges et propres. Beaucoup de familles françaises avec enfants s'y installent pour la qualité de vie et la proximité des écoles françaises. C'est cher, mais le cadre de vie est excellent.",
    forWho: "Familles, profils CSP+, expatriés en mission",
  },
  {
    name: "Chamberí",
    emoji: "☕",
    vibe: "Résidentiel chic, authentique, équilibré",
    budget: "1 200 – 1 700 € / mois (1 chambre)",
    description:
      "La pépite méconnue des expats. Chamberí est un quartier résidentiel chic mais sans artifice : boulangeries artisanales, marchés de quartier, cafés tranquilles, peu de touristes. Idéal pour s'installer vraiment dans Madrid, pas juste y passer. Proche du Paseo de la Castellana et bien desservi.",
    forWho: "Ceux qui veulent vivre à Madrid, pas y faire du tourisme",
  },
];

export default function QuartiersPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide quartiers
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Quels sont les quartiers{" "}
            <span className="italic text-[#C8614A]">les plus sympa pour les expats&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Madrid est une ville de quartiers. Chaque barrio a sa personnalité,
            son ambiance, son budget. On t&apos;aide à trouver celui qui te
            ressemble.
          </p>
        </div>
      </section>

      {/* Quartiers grid */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {quartiers.map((q) => (
            <div
              key={q.name}
              className="p-6 rounded-2xl bg-white border border-[#EDE0C8] hover:border-[#C8614A]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-2xl mr-2">{q.emoji}</span>
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810]">
                    {q.name}
                  </span>
                </div>
              </div>
              <p className="text-[#C8614A] text-sm font-semibold mb-1">{q.vibe}</p>
              <p className="text-[#7A8C5E] text-xs mb-3">💶 {q.budget}</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">{q.description}</p>
              <p className="text-xs text-[#2C1810]/50 border-t border-[#EDE0C8] pt-3">
                <span className="font-semibold">Idéal pour :</span> {q.forWho}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tip block */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Notre conseil en une phrase
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Commence par Malasaña ou Chamberí si tu veux être bien entouré(e)
            dès le départ — et explore les autres quartiers au fil du temps.
            Madrid se découvre en marchant.
          </p>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/appartement" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/nie" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link href="/secu" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Comment fonctionne la sécu en Espagne ?
            </Link>
            <Link href="/remote" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Travailler en remote depuis Madrid
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
