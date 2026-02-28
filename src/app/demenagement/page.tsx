import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Préparer son déménagement à Madrid — Madrid & Toi",
  description:
    "Quand partir, comment organiser la logistique, ce qu'on emporte ou non, et comment survivre aux 30 premiers jours à Madrid.",
};

const cards = [
  {
    emoji: "📅",
    title: "Quand partir ? Choisir le bon moment",
    description:
      "Septembre ou janvier ? Les périodes où les loyers sont plus accessibles, où le marché du travail s'anime, et où l'adaptation est plus douce.",
    href: null,
  },
  {
    emoji: "📦",
    title: "La logistique du déménagement",
    description:
      "Camion, transport de voiture, affaires à vendre ou stocker, démarches de résiliation en France — le checklist complet.",
    href: null,
  },
  {
    emoji: "🎒",
    title: "Ce qu'on emporte, ce qu'on laisse",
    description:
      "Meubles : inutile d'emporter ton Ikea. Electroménager : les normes espagnoles. Documents : la liste des papiers indispensables.",
    href: null,
  },
  {
    emoji: "🗺️",
    title: "Les 30 premiers jours à Madrid",
    description:
      "Le NIE, la banque, trouver un appart si ce n'est pas fait, l'empadronamiento — ce que tu dois faire en priority dès ton arrivée.",
    href: null,
  },
];

export default function DemenagementPage() {
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
            Préparer son départ
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Le grand saut,{" "}
            <span className="italic text-[#C8614A]">étape par étape</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            La décision est prise. Maintenant il faut organiser. Quand partir,
            comment déménager sans tout foirer, et comment aborder les premiers
            jours à Madrid sans paniquer.
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
                  <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">{card.emoji}</div>
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
                  <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full font-semibold">
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
            Le guide déménagement arrive bientôt — checklist logistique, les
            30 premiers jours, ce qu&apos;on aurait voulu savoir. Inscris-toi pour
            le recevoir en priorité.
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
