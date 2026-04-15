import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/papiers/impots',
  },
  title: "Impôts à Madrid — Fiscalité pour les Français en Espagne — Madrid & Toi",
  description:
    "Règle des 183 jours, IRPF, déclaration de revenus, convention fiscale France-Espagne — tout ce qu'il faut savoir sur votre fiscalité à Madrid.",
};

export default function ImpotsPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Impôts à Madrid — Fiscalité pour les Français en Espagne",
      description:
        "Règle des 183 jours, IRPF, déclaration de revenus, convention fiscale France-Espagne — tout ce qu'il faut savoir sur votre fiscalité à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/papiers/impots",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/papiers/impots" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Papiers", item: "https://madrid-et-toi.com/papiers" },
        { "@type": "ListItem", position: 3, name: "Impôts", item: "https://madrid-et-toi.com/papiers/impots" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/papiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour aux démarches
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Démarches administratives
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Impôts à Madrid —{" "}
            <span className="italic text-[#C8614A]">ta fiscalité à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Résidence fiscale, IRPF, convention France-Espagne, Modelo 720 —
            la fiscalité espagnole a ses propres règles. On t&apos;explique
            clairement à partir de quand tu es concerné, comment fonctionne
            la déclaration et comment éviter la double imposition.
          </p>
          <AuthorBadge date="mars 2026" />
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Résidence fiscale
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              IRPF
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Convention Franco-Espagnole
            </span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                183
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">jours/an</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">Seuil résidence fiscale</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                19–47 %
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">IRPF</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">Selon tes revenus</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                Avril–Juin
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">Campagne Renta</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">Déclaration annuelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* La règle des 183 jours */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La règle des 183 jours
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Si tu passes plus de <strong>183 jours en Espagne sur l&apos;année
            civile</strong>, tu deviens <strong>résident fiscal espagnol</strong>.
            La conséquence est directe : tu déclares et payes tes impôts en
            Espagne sur l&apos;ensemble de tes <strong>revenus mondiaux</strong>.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Ce statut n&apos;est pas basé sur ta résidence légale (le NIE) mais
            sur ta <strong>présence physique</strong> en Espagne. Il peut aussi
            être déclenché si ton centre d&apos;intérêts économiques ou
            familiaux se situe en Espagne, même sans atteindre les 183 jours.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Point important : une double résidence fiscale — considéré comme
            résident fiscal en France et en Espagne simultanément — entraîne
            des complications sérieuses. La convention fiscale bilatérale est
            là pour trancher, mais mieux vaut clarifier ta situation dès la
            première année.
          </p>
        </div>
      </section>

      {/* Tranches IRPF */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les tranches d&apos;imposition IRPF 2026
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            L&apos;<strong>IRPF</strong> (<em>Impuesto sobre la Renta de las
            Personas Físicas</em>) est l&apos;impôt sur le revenu espagnol.
            Il est progressif, comme en France. Le taux est la somme d&apos;un
            barème national et d&apos;un barème régional.
          </p>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-4">
            <div className="px-6 py-4 bg-[#C8614A]">
              <div className="flex justify-between items-center">
                <p className="text-white font-semibold">Tranche</p>
                <p className="text-white font-semibold">Taux</p>
              </div>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">Jusqu&apos;à 12 450 €</span>
                <span className="font-bold text-[#2C1810]">19 %</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">12 450 € – 20 200 €</span>
                <span className="font-bold text-[#2C1810]">24 %</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">20 200 € – 35 200 €</span>
                <span className="font-bold text-[#2C1810]">30 %</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">35 200 € – 60 000 €</span>
                <span className="font-bold text-[#2C1810]">37 %</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">60 000 € – 300 000 €</span>
                <span className="font-bold text-[#2C1810]">45 %</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-[#5a3e35] text-sm">Au-delà de 300 000 €</span>
                <span className="font-bold text-[#2C1810]">47 %</span>
              </div>
            </div>
          </div>

          <p className="text-[#5a3e35]/60 text-xs">
            Taux combiné État + Communauté autonome. Madrid est parmi les
            communautés les plus avantageuses fiscalement d&apos;Espagne.
          </p>
        </div>
      </section>

      {/* La Renta — section sombre */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            La Renta — la déclaration annuelle
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mb-6">
            Chaque année, les résidents fiscaux espagnols déclarent leurs
            revenus de l&apos;année précédente via la <strong className="text-white">Renta</strong>.
            La campagne se tient <strong className="text-white">d&apos;avril à fin juin</strong>.
            En 2026, la déclaration concerne les revenus 2025.
          </p>

          <div className="space-y-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-2">
                Qui est obligé de déclarer
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Si tes revenus dépassent <strong className="text-white">22 000 €
                d&apos;un seul employeur</strong> (cas classique du salarié), ou{" "}
                <strong className="text-white">15 000 €</strong> avec plusieurs
                sources de revenus. En dessous de ces seuils, la déclaration est
                optionnelle — mais souvent avantageuse si tu as droit à des
                déductions.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-2">
                Comment déclarer
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Sur le site de l&apos;<strong className="text-white">Agencia
                Tributaria</strong> avec ton identifiant{" "}
                <strong className="text-white">Cl@ve PIN</strong>. L&apos;Agencia
                pre-remplit une grande partie des données. Il est aussi possible
                d&apos;être assisté gratuitement en bureau sur rendez-vous.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Madrid a l&apos;un des taux d&apos;imposition régionaux les plus
              bas d&apos;Espagne — c&apos;est un avantage réel pour les revenus
              élevés.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Convention fiscale France-Espagne */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La convention fiscale France-Espagne
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Signée en 1995, la convention fiscale bilatérale entre la France
            et l&apos;Espagne <strong>évite la double imposition</strong>. Le
            principe : tu payes dans ton pays de résidence fiscale. Si tu es
            résident fiscal espagnol, tu ne payes pas d&apos;impôts en France
            sur tes revenus espagnols.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Pour les <strong>revenus de source française</strong> — loyers,
            dividendes d&apos;actions françaises, pensions — la situation est
            plus nuancée. Ces revenus peuvent être imposés en France, mais un{" "}
            <strong>crédit d&apos;impôt</strong> équivalent s&apos;applique
            en Espagne pour éviter une double charge.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-[#C8614A]">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">
                Te désinscrire des impôts français
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Contacter le Centre des Impôts des Non-Résidents (CDNR) pour
                signaler ton départ et faire ta dernière déclaration française.
                Ne pas le faire expose à être considéré comme résident fiscal
                dans les deux pays.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-[#7A8C5E]">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">
                T&apos;inscrire au censo espagnol
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Via le Modelo 030 sur le site de l&apos;Agencia Tributaria,
                avec ton{" "}
                <Link
                  href="/papiers/nie"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  NIE
                </Link>
                . C&apos;est le point de départ de ta vie fiscale en Espagne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo 720 */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le Modelo 720 — déclarer tes avoirs à l&apos;étranger
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Si tu es résident fiscal espagnol et que tu détiens des{" "}
            <strong>comptes bancaires, investissements ou biens immobiliers
            à l&apos;étranger</strong> dont la valeur totale dépasse{" "}
            <strong>50 000 €</strong>, tu es obligé de les déclarer chaque
            année via le <strong>Modelo 720</strong>.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            La deadline est le <strong>31 mars</strong> de l&apos;année
            suivante. Ce n&apos;est pas un impôt supplémentaire — c&apos;est
            une déclaration informative. Mais les sanctions en cas d&apos;oubli
            ou d&apos;omission sont très élevées. Ne pas négliger.
          </p>

          <div className="mt-8 bg-[#2C1810]/5 border border-[#2C1810]/10 rounded-2xl p-5">
            <p className="font-semibold text-[#2C1810] text-sm mb-2">
              Ce qui est concerné
            </p>
            <ul className="space-y-1">
              {[
                "Comptes bancaires à l'étranger (dont France)",
                "Valeurs mobilières, actions, fonds d'investissement étrangers",
                "Assurance-vie souscrite à l'étranger",
                "Biens immobiliers situés hors d'Espagne",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[#5a3e35] text-sm"
                >
                  <span className="text-[#C8614A] mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cas pratiques */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Cas pratiques
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#2C1810] mb-2">
                Remote depuis Madrid pour une boîte française
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Passé 183 jours, tu payes l&apos;IRPF en Espagne, même si ton
                employeur est français. Ta boîte peut avoir des obligations
                déclaratives supplémentaires selon sa situation. La convention
                fiscale s&apos;applique, mais une gestoría est recommandée
                la première année. Pour en savoir plus :{" "}
                <Link
                  href="/travailler/remote"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  travailler en remote depuis Madrid
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#2C1810] mb-2">
                <Link
                  href="/travailler/freelance"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  Autónomo
                </Link>{" "}
                en Espagne
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                L&apos;IRPF s&apos;applique aussi aux travailleurs indépendants.
                En plus de la Renta annuelle, tu dois déposer des acomptes
                trimestriels via le <strong>Modelo 130</strong>. En pratique,
                une gestoría gère ça pour toi pour un coût raisonnable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#2C1810] mb-2">
                Salarié local en Espagne
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Ton employeur prélève l&apos;IRPF à la source chaque mois,
                comme en France avec le prélèvement à la source. La Renta
                annuelle régularise ensuite — la plupart des salariés reçoivent
                un petit remboursement (<em>devolución</em>).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La sécu en Espagne
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Devenir autónomo en Espagne
            </Link>
            <Link
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La communauté française à Madrid" href="/communaute/francais-madrid" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides pratiques
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">
            Reçois nos guides pratiques pour t&apos;installer sereinement
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
