import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Travailler à Madrid — Madrid & Toi",
  description:
    "Remote, emploi local, autónomo, créer une société — toutes les options pour travailler légalement depuis ou à Madrid.",
};

const cards = [
  {
    emoji: "💻",
    title: "Travailler en remote depuis Madrid",
    description:
      "C'est légal ? Quel statut adopter ? La règle des 183 jours, les risques à éviter, et comment le faire proprement.",
    href: "/travailler/remote",
  },
  {
    emoji: "🔍",
    title: "Chercher un emploi local à Madrid",
    description:
      "Infojobs, LinkedIn, les secteurs qui recrutent, les salaires, et comment se présenter dans un marché hispanophone.",
    href: null,
  },
  {
    emoji: "🧾",
    title: "Devenir autónomo (indépendant)",
    description:
      "Le statut d'autónomo, les cotisations (~230 €/mois), l'IRPF, comment facturer depuis l'Espagne — la solution la plus propre pour les freelances.",
    href: null,
  },
  {
    emoji: "🏢",
    title: "Créer une société en Espagne",
    description:
      "La SL (Sociedad Limitada), les démarches, les coûts, et si ça vaut vraiment le coup selon ton niveau d'activité.",
    href: null,
  },
];

export default function TravaillerPage() {
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
            Travailler à Madrid
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Travailler depuis ou{" "}
            <span className="italic text-[#C8614A]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Remote, emploi local, freelance, entrepreneur — chaque situation a
            ses règles. On t&apos;aide à trouver le bon statut, à comprendre les
            implications fiscales, et à travailler sereinement.
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
            Autónomo, emploi local, créer une SL — les prochains guides
            travail arrivent bientôt. Inscris-toi pour les recevoir dès leur
            publication.
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
