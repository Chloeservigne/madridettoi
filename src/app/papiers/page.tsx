import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  title: "Papiers & démarches administratives à Madrid — Madrid & Toi",
  description:
    "NIE, sécu, banque, impôts, résidence fiscale — toutes les démarches administratives pour t'installer légalement en Espagne.",
};

const cards = [
  {
    emoji: "🪪",
    title: "Le NIE : tout ce qu'il faut savoir",
    description:
      "C'est quoi, comment l'obtenir depuis la France ou en Espagne, les délais, les pièges. La démarche numéro 1 à faire à l'arrivée.",
    href: "/papiers/nie",
  },
  {
    emoji: "🏠",
    title: "L'empadronamiento",
    description:
      "L'inscription au registre municipal de Madrid. Obligatoire pour accéder aux soins, scolariser ses enfants et obtenir son NIE définitif. La démarche que tout le monde oublie.",
    href: "/papiers/padron",
  },
  {
    emoji: "🏦",
    title: "Ouvrir un compte bancaire espagnol",
    description:
      "BBVA, Santander, CaixaBank, Revolut — les options, les délais, ce qu'il faut comme documents, et si tu peux attendre pour l'ouvrir.",
    href: "/papiers/compte-bancaire",
  },
  {
    emoji: "🏥",
    title: "La sécu en Espagne",
    description:
      "Comment s'inscrire à la Seguridad Social, les droits selon ton statut, les médecins de ville, les urgences, les mutuelles privées.",
    href: "/papiers/secu",
  },
  {
    emoji: "💰",
    title: "Impôts et résidence fiscale",
    description:
      "La règle des 183 jours, comment se désinscrire des impôts français, s'inscrire en Espagne, et éviter les mauvaises surprises.",
    href: "/papiers/impots",
  },
];

export default function PapiersPage() {
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
            Phase 3 — Je viens d&apos;arriver
          </span>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Démarches administratives
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Les papiers,{" "}
            <span className="italic text-[#C8614A]">sans s&apos;arracher les cheveux</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            L&apos;administration espagnole a sa logique propre. NIE, sécu, banque,
            impôts — on t&apos;explique quoi faire, dans quel ordre, et comment
            éviter les erreurs qui coûtent du temps.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Dans quel ordre faire les démarches ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            L&apos;erreur classique : vouloir tout faire en même temps. L&apos;administration
            espagnole a une logique. Certaines démarches en débloquent d&apos;autres —
            si tu les fais dans le désordre, tu perds des semaines.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            Le bon ordre : commencer par le{" "}
            <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              NIE
            </Link>{" "}
            (numéro d&apos;identité étranger) dès ton arrivée — c&apos;est lui qui débloque
            tout le reste. Ensuite, l&apos;
            <Link href="/papiers/padron" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              empadronamiento
            </Link>{" "}
            (inscription au registre municipal), qui te donne accès aux services
            de santé et à certaines démarches administratives. Puis l&apos;
            <Link href="/papiers/compte-bancaire" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              ouverture d&apos;un compte bancaire espagnol
            </Link>{" "}
            — indispensable pour payer ton loyer et tes charges. Enfin l&apos;affiliation
            à la{" "}
            <Link href="/papiers/secu" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Seguridad Social
            </Link>{" "}
            pour avoir accès aux soins.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            La question fiscale — résidence en France ou en Espagne, règle des 183 jours —
            se pose dès que tu restes plus de 6 mois. Notre guide sur les{" "}
            <Link href="/papiers/impots" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              impôts et la résidence fiscale
            </Link>{" "}
            t&apos;explique comment éviter la double imposition et ce que tu dois déclarer
            en Espagne.
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

      <EtapeSuivante label="Vivre à Madrid au quotidien" href="/vivre" />

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
            NIE, sécu, banque, impôts — tous nos guides pour démêler
            l&apos;administration espagnole sans te perdre.
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
