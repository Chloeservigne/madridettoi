import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/demenagement',
  },
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
    title: "Déménagement Paris–Madrid : le guide complet",
    description:
      "Camion, affaires à emporter ou non, résiliations en France, timing idéal — tout ce qu'il faut savoir pour organiser le trajet.",
    href: "/demenagement/paris-madrid",
  },
  {
    emoji: "🎒",
    title: "Ce qu'on emporte, ce qu'on laisse",
    description:
      "Meubles : inutile d'emporter ton Ikea. Electroménager : les normes espagnoles. Documents : la liste des papiers indispensables.",
    href: null,
  },
  {
    emoji: "✅",
    title: "La checklist complète : de J-6 mois à J+3 mois",
    description:
      "Toutes les étapes dans l'ordre — résiliation des contrats français, appartement, NIE, Padrón, compte bancaire, sécu — pour ne rien oublier.",
    href: "/demenagement/checklist",
  },
];

export default function DemenagementPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold mb-4">
            Phase 2 — Je me prépare
          </span>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Préparer son départ
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Le grand saut,{" "}
            <span className="not-italic font-bold text-[#F0552F]">étape par étape</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            La décision est prise. Maintenant il faut organiser. Quand partir,
            comment déménager sans tout foirer, et comment aborder les premiers
            jours à Madrid sans paniquer.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Organiser le déménagement : par où commencer ?
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Un déménagement Paris–Madrid ne s&apos;improvise pas — surtout quand
            on gère en parallèle la recherche d&apos;appartement, les résiliations
            en France, et les premières démarches administratives en Espagne.
            La clé : anticiper tôt et traiter les choses dans le bon ordre.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Côté logistique, la question du camion se pose rapidement. Pour un
            volume réduit (studio ou chambre), une voiture avec remorque ou un
            service de livraison de colis suffit souvent. Pour un appartement
            entier, les sociétés de déménagement international pratiquent des
            tarifs entre 800 et 2 500 € selon le volume et la formule. Notre{" "}
            <Link href="/demenagement/paris-madrid" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              guide Paris–Madrid
            </Link>{" "}
            détaille les options et les pièges à éviter.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Côté administratif français, certaines démarches prennent du temps :
            résilier son bail (préavis d&apos;1 mois en zone tendue), se désinscrire
            de la Sécurité sociale française, informer sa caisse de retraite,
            clôturer ou transférer ses contrats d&apos;assurance. Ne pas les oublier
            coûte parfois plusieurs mois de cotisations inutiles.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Notre{" "}
            <Link href="/demenagement/checklist" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              checklist complète de J-6 mois à J+3 mois
            </Link>{" "}
            liste toutes les actions dans l&apos;ordre chronologique — des résiliations
            françaises jusqu&apos;à l&apos;
            <Link href="/papiers/padron" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              empadronamiento
            </Link>{" "}
            et l&apos;affiliation à la{" "}
            <Link href="/papiers/secu" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              Seguridad Social
            </Link>{" "}
            une fois sur place.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-28 px-6 bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFBF5] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-[#F0552F] text-xs font-semibold">
                    Lire le guide →
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#33251E] mb-3 group-hover:text-[#F0552F] transition-colors duration-200">
                  {card.title}
                </h2>
                <p className="text-[#33251E]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-white shadow-sm opacity-50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFBF5] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-xs bg-[#FFC24B]/20 text-[#FFC24B] px-3 py-1 rounded-full font-semibold">
                    Bientôt
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#33251E] mb-2">
                  {card.title}
                </h2>
                <p className="text-[#33251E]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <EtapeSuivante label="Les démarches administratives à l'arrivée" href="/papiers" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10 leading-relaxed">
            Le guide déménagement arrive bientôt — checklist logistique, les
            30 premiers jours, ce qu&apos;on aurait voulu savoir. Inscris-toi pour
            le recevoir en priorité.
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
