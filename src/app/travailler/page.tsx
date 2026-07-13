import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler',
  },
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
    href: "/travailler/emploi",
  },
  {
    emoji: "🧾",
    title: "Devenir autónomo (indépendant)",
    description:
      "Le statut d'autónomo, la Tarifa Plana à 80 €/mois, l'IRPF, comment facturer depuis l'Espagne — la solution la plus propre pour les freelances.",
    href: "/travailler/freelance",
  },
  {
    emoji: "🇫🇷",
    title: "Les entreprises françaises à Madrid",
    description:
      "Airbus, Decathlon, L'Oréal, Thales, Renault... Les grands groupes implantés à Madrid, la French Tech, et comment les cibler depuis la France.",
    href: "/travailler/entreprises-francaises",
  },
  {
    emoji: "✈️",
    title: "Faire un VIE à Madrid",
    description:
      "2 400 € nets par mois, 18-28 ans, jusqu'à 24 mois dans un grand groupe français. Comment postuler, à quoi s'attendre, et comment préparer ton installation.",
    href: "/travailler/vie",
  },
];

export default function TravaillerPage() {
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
            Travailler à Madrid
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Travailler depuis ou{" "}
            <span className="not-italic font-bold text-[#F0552F]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Remote, emploi local, freelance, entrepreneur — chaque situation a
            ses règles. On t&apos;aide à trouver le bon statut, à comprendre les
            implications fiscales, et à travailler sereinement.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Quel statut choisir pour travailler à Madrid ?
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            La question du statut est la première à trancher avant de partir.
            Elle conditionne ta fiscalité, ta couverture sociale, et ta légitimité
            aux yeux de l&apos;administration espagnole.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Si tu gardes ton emploi français et travailles depuis Madrid, tu es
            techniquement en{" "}
            <Link href="/travailler/remote" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              situation de remote international
            </Link>{" "}
            — ce qui a des implications fiscales dès 183 jours sur place. Si tu cherches
            un poste local, le marché madrilène recrute activement dans la tech,
            le tourisme, l&apos;éducation et la finance : le{" "}
            <Link href="/se-decider/salaire-madrid" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              salaire moyen tourne autour de 2 200 € brut
            </Link>
            , inférieur à Paris mais compensé par un coût de la vie plus bas.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Pour les freelances, le statut d&apos;
            <Link href="/travailler/freelance" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              autónomo
            </Link>{" "}
            est l&apos;équivalent espagnol de l&apos;auto-entrepreneur : cotisations RETA,
            Tarifa Plana à 80 €/mois la première année, IVA à 21 %. Simple à ouvrir,
            reconnu partout.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Pour les moins de 28 ans, le{" "}
            <Link href="/travailler/vie" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              VIE
            </Link>{" "}
            reste l&apos;une des meilleures portes d&apos;entrée : jusqu&apos;à 2 400 € nets
            par mois dans un grand groupe français, couverture sociale incluse.
            Les{" "}
            <Link href="/travailler/entreprises-francaises" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              entreprises françaises à Madrid
            </Link>{" "}
            — Airbus, Decathlon, L&apos;Oréal, Thales — publient régulièrement des offres VIE.
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

      <EtapeSuivante label="Trouver un appartement à Madrid" href="/logement" />

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
            Autónomo, emploi local, créer une SL — les prochains guides
            travail arrivent bientôt. Inscris-toi pour les recevoir dès leur
            publication.
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
