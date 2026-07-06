import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/se-decider',
  },
  title: "Se décider : pourquoi Madrid ? — Madrid & Toi",
  description:
    "Pourquoi Madrid plutôt qu'ailleurs ? Le pour/contre honnête, le budget de vie réel, des témoignages d'expats pour t'aider à franchir le cap.",
};

const cards = [
  {
    emoji: "☀️",
    title: "Pourquoi Madrid ? Les vraies raisons",
    description:
      "Au-delà des clichés, ce qui fait vraiment la différence au quotidien : le soleil, le rythme de vie, le coût, la proximité avec la France.",
    href: "/se-decider/pourquoi-madrid",
  },
  {
    emoji: "⚖️",
    title: "Madrid est fait pour toi ?",
    description:
      "Remote worker, famille, célibataire — qui s'épanouit vraiment à Madrid, et qui risque de déchanter. Une lecture honnête des profils qui s'adaptent le mieux.",
    href: "/se-decider/pour-qui",
  },
  {
    emoji: "💶",
    title: "Budget de vie réel à Madrid",
    description:
      "Loyer, courses, transports, resto, sorties : un budget mensuel chiffré, par profil. Sans se raconter d'histoires.",
    href: "/se-decider/budget",
  },
  {
    emoji: "💰",
    title: "Combien gagne-t-on à Madrid ?",
    description:
      "SMI, salaire moyen, salaires par secteur, et la comparaison Paris–Madrid qui change tout. Ce qu'on touche vraiment une fois les charges déduites.",
    href: "/se-decider/salaire-madrid",
  },
  {
    emoji: "🗣️",
    title: "Ils l'ont fait : témoignages d'expats",
    description:
      "Des Français installés à Madrid racontent leur déménagement — ce qui s'est bien passé, les galères, les regrets, les bonnes surprises.",
    href: null,
  },
];

export default function SeDeciderPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-xs font-semibold mb-4">
            Phase 1 — Je rêve encore
          </span>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Avant de partir
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Tu veux sauter{" "}
            <span className="italic text-[#C8614A]">le pas&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Avant de réserver le camion, il faut être sûr(e). Pourquoi Madrid
            plutôt qu&apos;ailleurs ? Est-ce vraiment fait pour toi ? On t&apos;aide à
            construire ta décision sur des bases solides.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Quelques chiffres pour construire ta décision
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            Madrid, c&apos;est 300 jours de soleil par an, une ville de 3,4 millions
            d&apos;habitants, et environ{" "}
            <Link href="/communaute/francais-madrid" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              35 000 Français installés
            </Link>{" "}
            — l&apos;une des plus grandes communautés françaises d&apos;Europe. Concrètement :
            tu ne seras pas seul(e).
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            Côté finances, le{" "}
            <Link href="/se-decider/budget" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              coût de la vie
            </Link>{" "}
            est 15 à 25 % inférieur à Paris selon les postes de dépense — surtout
            la restauration, les transports et certains services. En revanche,
            les loyers dans les quartiers centraux ont fortement augmenté ces
            dernières années. Le{" "}
            <Link href="/se-decider/salaire-madrid" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              salaire moyen à Madrid
            </Link>{" "}
            tourne autour de 2 200 € brut — inférieur à Paris, mais le pouvoir
            d&apos;achat réel est souvent comparable voire meilleur pour un cadre de vie supérieur.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Le point souvent sous-estimé : l&apos;administration espagnole. NIE,
            padron, sécu, impôts — ça prend du temps et de l&apos;organisation.
            Mais ça se fait. Nos guides{" "}
            <Link href="/papiers" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Papiers & démarches
            </Link>{" "}
            sont là pour que tu ne sois jamais pris(e) au dépourvu.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-28 px-6 bg-[#F5ECD7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">
                    {card.emoji}
                  </div>
                  <span className="text-[#C8614A] text-xs font-semibold">
                    Lire le guide →
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#C8614A] transition-colors duration-200">
                  {card.title}
                </h2>
                <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-white shadow-sm opacity-50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">
                    {card.emoji}
                  </div>
                  <span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full font-semibold">
                    Bientôt
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-3">
                  {card.title}
                </h2>
                <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <EtapeSuivante label="Maintenant, la question du travail" href="/travailler" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10 leading-relaxed">
            On prépare un guide complet pour t&apos;aider à prendre ta décision —
            budget réel, pour/contre, témoignages. Laisse ton email pour ne
            rien rater.
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
