import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Trouver un logement à Madrid — Madrid & Toi",
  description:
    "Trouver un appartement depuis la France, choisir son quartier, travailler avec une agence, comprendre le contrat de bail espagnol.",
};

const cards = [
  {
    emoji: "🏠",
    title: "Trouver un appartement depuis la France",
    description:
      "Idealista, Fotocasa, les pièges à éviter, comment visiter à distance, et comment décrocher un bail sans être encore sur place.",
    href: "/logement/appartement",
  },
  {
    emoji: "🗺️",
    title: "Les quartiers pour les expats",
    description:
      "Malasaña, Chamberí, Lavapiés, La Latina — les quartiers préférés des Français, leurs ambiances, leurs prix, leurs avantages.",
    href: "/logement/quartiers",
  },
  {
    emoji: "🤝",
    title: "Travailler avec une agence immobilière",
    description:
      "Comment fonctionnent les agences à Madrid, les honoraires, ce qu'elles peuvent (et ne peuvent pas) faire pour toi.",
    href: null,
  },
  {
    emoji: "📄",
    title: "Comprendre le contrat de bail espagnol",
    description:
      "Durée minimale, garanties, fianza, ce que tu peux négocier, les clauses à vérifier avant de signer.",
    href: null,
  },
];

export default function LogementPage() {
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
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Se loger
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Trouver ton{" "}
            <span className="italic text-[#C8614A]">appart à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le logement, c&apos;est souvent la première vraie galère. Le marché est
            tendu, les loyers ont augmenté, et tout se passe en espagnol. On te
            guide de la recherche depuis la France jusqu&apos;à la signature du bail.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 rounded-2xl bg-white border border-[#EDE0C8] hover:border-[#C8614A]/40 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{card.emoji}</span>
                  <span className="text-[#C8614A] text-xs font-semibold">
                    Lire le guide →
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2 group-hover:text-[#C8614A] transition-colors">
                  {card.title}
                </h2>
                <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-white border border-[#EDE0C8] opacity-60"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{card.emoji}</span>
                  <span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-2 py-1 rounded-full font-semibold">
                    Bientôt
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
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
            Agences, contrats de bail, quartiers par budget — les prochains
            guides logement arrivent bientôt. Inscris-toi pour les recevoir.
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
