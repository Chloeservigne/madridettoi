import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  alternates: {
    canonical: '/communaute',
  },
  title: "Communauté française à Madrid — Madrid & Toi",
  description:
    "Groupes Facebook et Discord de Français à Madrid, events réguliers, comment rencontrer des gens, associations franco-espagnoles.",
};

const cards = [
  {
    emoji: "🇫🇷",
    title: "La communauté française à Madrid",
    description:
      "35 000 Français vivent à Madrid. Associations, intercambios, groupes Facebook, Institut français — comment trouver ta communauté dès ton arrivée.",
    href: "/communaute/francais-madrid",
  },
  {
    emoji: "💬",
    title: "Groupes Facebook et Discord de Français",
    description:
      "Les communautés en ligne actives où les Français à Madrid partagent bons plans, demandes d&apos;aide, et informations pratiques.",
    href: null,
  },
  {
    emoji: "📅",
    title: "Events réguliers à Madrid",
    description:
      "Afterworks, dîners, randonnées, sorties culturelles — les rendez-vous récurrents pour rencontrer d'autres expats dès ton arrivée.",
    href: null,
  },
  {
    emoji: "🤝",
    title: "Comment rencontrer des gens",
    description:
      "Intercambios, coworking, sport, associations — les meilleures façons de construire un réseau à Madrid, entre Français et Espagnols.",
    href: null,
  },
  {
    emoji: "🏛️",
    title: "Associations franco-espagnoles",
    description:
      "L'Institut Français, la Chambre de Commerce Franco-Espagnole, les associations culturelles — les structures officielles et associatives.",
    href: null,
  },
];

export default function CommunautePage() {
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
            Phase 4 — Je vis à Madrid
          </span>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Trouver sa communauté
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Ne pas arriver{" "}
            <span className="italic text-[#C8614A]">seul(e)</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Des milliers de Français vivent déjà à Madrid. La communauté est
            active, accueillante, et il existe des dizaines de façons de
            rencontrer des gens dès les premières semaines.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            35 000 Français à Madrid — et ça se voit
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            Avec environ 35 000 ressortissants inscrits au consulat,{" "}
            <Link href="/communaute/francais-madrid" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              la communauté française de Madrid
            </Link>{" "}
            est l&apos;une des plus importantes d&apos;Europe. Elle est active,
            organisée, et bien souvent la première porte d&apos;entrée dans la vie
            madrilène pour les nouveaux arrivants.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-4">
            Les structures officielles existent : l&apos;Institut français de Madrid
            (fondé en 1913), la Chambre franco-espagnole (CCIFE), l&apos;association
            Madrid Accueil. Mais la majorité de la vie communautaire se passe
            dans des groupes Facebook actifs, des intercambios de langue dans
            les bars de{" "}
            <Link href="/logement/quartiers/malasana" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Malasaña
            </Link>{" "}
            et{" "}
            <Link href="/logement/quartiers/chueca" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Chueca
            </Link>
            , et des afterworks informels.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            L&apos;enjeu n&apos;est pas de rester dans une bulle française — c&apos;est
            précisément ce que la plupart veulent éviter en partant. Mais avoir
            un réseau de soutien au démarrage — pour une question administrative,
            une recommandation de médecin, ou juste un dîner familier dans les
            premiers jours — ça change tout.
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
            Rejoins la communauté
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10 leading-relaxed">
            On prépare un annuaire des communautés francophones à Madrid et un
            calendrier des events récurrents. Inscris-toi pour être informé(e)
            en premier.
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
