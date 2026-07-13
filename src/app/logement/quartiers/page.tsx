import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import BarrioQuiz from "@/components/BarrioQuiz";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/quartiers',
  },
  title: "Les quartiers de Madrid pour les expats français — Madrid & Toi",
  description:
    "Malasaña, Chueca, Lavapiés, La Latina... Quel quartier choisir pour s'installer à Madrid ? On décrit l'ambiance, les prix et le profil de chaque quartier.",
};

const quartiersCenter = [
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

const quartiersHorsM30 = [
  {
    name: "Hortaleza / Arturo Soria",
    emoji: "🇫🇷",
    vibe: "La petite France, familial, verdoyant",
    budget: "900 – 1 400 € / mois (1 chambre)",
    description:
      "Hortaleza, c'est le quartier français de Madrid — et ce n'est pas une métaphore. Le Lycée Français de Madrid s'y trouve depuis les années 60, et une grande partie de la communauté française s'est naturellement installée autour. On y trouve des librairies francophones, des épiceries avec du vrai fromage, des clubs de rugby. C'est plus calme que le centre, plus résidentiel, avec de vraies rues arborées. Arturo Soria, l'avenue principale, est à deux stations de métro du cœur de Madrid.",
    forWho: "Familles avec enfants, ceux qui cherchent la tranquillité sans quitter Madrid",
  },
  {
    name: "Carabanchel",
    emoji: "🌱",
    vibe: "Populaire, en pleine transformation, abordable",
    budget: "700 – 1 000 € / mois (1 chambre)",
    description:
      "Longtemps sous-estimé, Carabanchel est en train de devenir le quartier de ceux qui ne veulent pas payer les prix de Malasaña mais veulent la même ambiance. Des artistes, des jeunes actifs, des bars sympas ont commencé à s'y installer. Les loyers restent parmi les plus bas du sud de Madrid. C'est brut, authentique, et en mouvement.",
    forWho: "Budget serré, profils créatifs, esprit pionnier",
  },
  {
    name: "Tetuán",
    href: "/logement/quartiers/tetuan",
    emoji: "🏙️",
    vibe: "Multiculturel, nord de Madrid, bien connecté",
    budget: "850 – 1 200 € / mois (1 chambre)",
    description:
      "Au nord de la M30, Tetuán est un quartier dense et cosmopolite, avec une forte communauté latino-américaine et africaine. Il est souvent négligé par les expats, à tort : bien desservi par le métro, proche du centre, et avec des loyers plus raisonnables qu'intramuros. Un quartier de vraie vie madrilène.",
    forWho: "Ceux qui veulent l'immersion sans les prix du centre",
  },
  {
    name: "Moncloa-Argüelles",
    href: "/logement/quartiers/moncloa-arguelles",
    emoji: "🎓",
    vibe: "Estudiantin, vert, bien connecté",
    budget: "1 000 – 1 400 € / mois (1 chambre)",
    description:
      "Entre la Cité universitaire, le Parque del Oeste et la Casa de Campo, Moncloa-Argüelles offre quelque chose de rare dans une grande capitale : de l'espace, du calme et de la verdure, à deux stations de métro du centre. Très prisé des étudiants et des jeunes actifs qui veulent décrocher du bruit de Malasaña.",
    forWho: "Étudiants, familles, amateurs d'espaces verts",
  },
];

export default function QuartiersPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide quartiers
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Quels sont les quartiers{" "}
            <span className="not-italic font-bold text-[#F0552F]">les plus sympa pour les expats&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Madrid est une ville de quartiers. Chaque barrio a sa personnalité,
            son ambiance, son budget. La plupart des guides s&apos;arrêtent aux
            quartiers du centre — mais Madrid, c&apos;est bien plus grand que la M30.
            On t&apos;aide à trouver l&apos;endroit qui te ressemble vraiment.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-3">
              5 questions
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#33251E] mb-3">
              Quel barrio es-tu ?
            </h2>
            <p className="text-[#33251E]">
              Réponds honnêtement, on ne juge pas. Même si c&apos;est Salamanca.
            </p>
          </div>
          <BarrioQuiz />
        </div>
      </section>

      {/* Centre */}
      <section className="py-24 px-6 bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-2">
              Dans et autour du centre
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E]">
              Les quartiers intramuros
            </h2>
            <p className="text-[#33251E] mt-2">
              Les quartiers où la majorité des expats atterrissent en premier —
              bien connectés, animés, avec une forte vie de quartier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quartiersCenter.map((q) => {
              const slug = q.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
              return (
                <Link
                  key={q.name}
                  href={`/logement/quartiers/${slug}`}
                  className="group p-6 rounded-3xl bg-white shadow-md hover:border-[#F0552F]/30 hover:shadow-lg transition-all block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-2xl mr-2">{q.emoji}</span>
                      <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#33251E] group-hover:text-[#F0552F] transition-colors">
                        {q.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#F0552F] text-sm font-semibold mb-1">{q.vibe}</p>
                  <p className="text-[#F2A65A] text-xs mb-3">💶 {q.budget}</p>
                  <p className="text-[#33251E] text-sm leading-relaxed mb-3">{q.description}</p>
                  <p className="text-xs text-[#33251E]/50 border-t border-[#FBEBDD] pt-3">
                    <span className="font-semibold">Idéal pour :</span> {q.forWho}
                  </p>
                  <p className="text-[#F0552F] text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire le guide →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hors M30 */}
      <section className="py-24 px-6 bg-[#FBEBDD]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-2">
              Au-delà de la M30
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E]">
              Il y a de la vie hors du centre
            </h2>
            <p className="text-[#33251E] mt-2">
              Les guides s&apos;arrêtent souvent à Malasaña. Mais Madrid est une
              grande ville, et certains des meilleurs endroits pour vraiment
              s&apos;installer sont hors M30 — plus calmes, plus spacieux, souvent
              moins chers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quartiersHorsM30.map((q) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-2xl mr-2">{q.emoji}</span>
                      <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#33251E] group-hover:text-[#F0552F] transition-colors">
                        {q.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#F0552F] text-sm font-semibold mb-1">{q.vibe}</p>
                  <p className="text-[#F2A65A] text-xs mb-3">💶 {q.budget}</p>
                  <p className="text-[#33251E] text-sm leading-relaxed mb-3">{q.description}</p>
                  <p className="text-xs text-[#33251E]/50 border-t border-[#FBEBDD] pt-3">
                    <span className="font-semibold">Idéal pour :</span> {q.forWho}
                  </p>
                  {"href" in q && (
                    <p className="text-[#F0552F] text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Lire le guide →
                    </p>
                  )}
                </>
              );
              return "href" in q ? (
                <Link
                  key={q.name}
                  href={q.href as string}
                  className="group p-6 rounded-3xl bg-white shadow-md hover:shadow-lg transition-all block"
                >
                  {inner}
                </Link>
              ) : (
                <div key={q.name} className="group p-6 rounded-3xl bg-white shadow-md hover:shadow-lg transition-all">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tip block */}
      <section className="py-16 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-2xl mb-4">
            Notre conseil en une phrase
          </p>
          <p className="text-[#F6E7D9] text-lg leading-relaxed">
            Ne te limite pas au centre parce que c&apos;est ce qu&apos;on te recommande
            par défaut. Selon ton profil — famille, budget, envie d&apos;immersion
            ou de communauté française — la bonne réponse peut être Malasaña
            comme Hortaleza. Madrid se découvre en marchant, pas juste à
            l&apos;intérieur de la M30.
          </p>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:border-[#F0552F] hover:text-[#F0552F] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:border-[#F0552F] hover:text-[#F0552F] transition-colors">
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:border-[#F0552F] hover:text-[#F0552F] transition-colors">
              Combien ça coûte vraiment de vivre à Madrid ?
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:border-[#F0552F] hover:text-[#F0552F] transition-colors">
              Le guide du NIE
            </Link>
            <Link href="/logement/colocation" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:border-[#F0552F] hover:text-[#F0552F] transition-colors">
              La colocation à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10">
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#F6E7D9]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#241813] text-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl text-[#F6E7D9] mb-2 block hover:text-[#FFC24B] transition-colors"
        >
          Madrid & Toi
        </Link>
        <p className="text-[#F6E7D9]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
