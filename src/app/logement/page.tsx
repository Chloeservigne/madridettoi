import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement',
  },
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
  {
    emoji: "🔑",
    title: "Location longue durée : ce que dit la loi",
    description:
      "La LAU garantit 5 à 7 ans de bail — mais le contrat de temporada, très répandu à Madrid, ne t'offre aucune de ces protections.",
    href: "/logement/longue-duree",
  },
];

export default function LogementPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-xs font-semibold mb-4">
            Phase 2 — Je me prépare
          </span>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Se loger
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Trouver ton{" "}
            <span className="not-italic font-bold text-[#d6442a]">appart à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Le logement, c&apos;est souvent la première vraie galère. Le marché est
            tendu, les loyers ont augmenté, et tout se passe en espagnol. On te
            guide de la recherche depuis la France jusqu&apos;à la signature du bail.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Ce qu&apos;il faut savoir avant de chercher
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Le marché locatif madrilène est sous tension depuis 2022. Les loyers
            dans les quartiers centraux ont augmenté de 20 à 30 % en trois ans,
            et la demande dépasse l&apos;offre dans les zones prisées des expats.
            Un studio à{" "}
            <Link href="/logement/quartiers/malasana" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Malasaña
            </Link>{" "}
            ou{" "}
            <Link href="/logement/quartiers/chueca" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Chueca
            </Link>{" "}
            se loue aujourd&apos;hui entre 1 000 et 1 400 €/mois. Des quartiers
            comme{" "}
            <Link href="/logement/quartiers/lavapies" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Lavapiés
            </Link>{" "}
            ou{" "}
            <Link href="/logement/quartiers/chamberi" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Chamberí
            </Link>{" "}
            offrent de meilleures opportunités pour un budget maîtrisé.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Chercher depuis la France est possible mais difficile : les
            propriétaires préfèrent rencontrer les candidats en personne. La
            stratégie qui marche : prévoir 1 à 2 semaines sur place pour les
            visites, avec un logement temporaire (Airbnb, colocation courte
            durée). Les plateformes Idealista et Fotocasa concentrent la majorité
            des annonces sérieuses.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg">
            Pour les documents, les propriétaires demandent généralement un
            contrat de travail espagnol ou une preuve de revenus, et souvent le{" "}
            <Link href="/papiers/nie" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              NIE
            </Link>{" "}
            pour signer. La caution représente 1 à 2 mois de loyer — et si tu
            comptes t&apos;installer durablement, vérifie bien que ton{" "}
            <Link href="/logement/longue-duree" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              contrat t&apos;offre les protections de la LAU
            </Link>{" "}
            plutôt qu&apos;un simple contrat de temporada.
            Notre{" "}
            <Link href="/se-decider/budget" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              guide budget
            </Link>{" "}
            détaille les fourchettes de loyers par quartier pour 2026.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-28 px-6 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-[#d6442a] text-xs font-semibold">
                    Lire le guide →
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-3 group-hover:text-[#d6442a] transition-colors duration-200">
                  {card.title}
                </h2>
                <p className="text-[#171712]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-white shadow-sm opacity-50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-xs bg-[#d6442a]/20 text-[#d6442a] px-3 py-1 rounded-full font-semibold">
                    Bientôt
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-2">
                  {card.title}
                </h2>
                <p className="text-[#171712]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <EtapeSuivante label="Organiser son déménagement Paris → Madrid" href="/demenagement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10 leading-relaxed">
            Agences, contrats de bail, quartiers par budget — les prochains
            guides logement arrivent bientôt. Inscris-toi pour les recevoir.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#171712]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#171712] text-center">
        <Link href="/" className="inline-block mb-2 hover:opacity-80 transition-opacity">
          <Logo variant="cream" height={24} className="mx-auto" />
        </Link>
        <p className="text-[#fbe8e4]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
