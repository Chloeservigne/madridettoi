import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/logement-etudiant',
  },
  title: "Logement étudiant à Madrid pour un Erasmus — Madrid & Toi",
  description:
    "Résidences universitaires, colocation, plateformes spécialisées (Uniplaces, HousingAnywhere, Erasmusu) — les options et les prix par quartier pour un semestre Erasmus.",
};

export default function LogementEtudiantPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Logement étudiant à Madrid pour un Erasmus",
      description:
        "Résidences universitaires, colocation, plateformes spécialisées (Uniplaces, HousingAnywhere, Erasmusu) — les options et les prix par quartier pour un semestre Erasmus.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/logement-etudiant",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/logement-etudiant" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Logement étudiant", item: "https://madrid-et-toi.com/erasmus/logement-etudiant" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/erasmus"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Erasmus
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide logement étudiant
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Trouver ton logement{" "}
            <span className="not-italic font-bold text-[#d6442a]">pour un semestre</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Résidence universitaire, colocation ou studio — pour un séjour
            court, les critères ne sont pas les mêmes que pour une
            installation durable. Voici les options qui marchent vraiment
            pour un Erasmus.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Les options */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Trois formats de logement étudiant
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Résidence universitaire (colegio mayor)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Souvent gérées ou recommandées par l&apos;université
                d&apos;accueil (l&apos;UAM propose par exemple le Colegio
                Mayor Juan Luis Vives ou la Residencia Universitaria Erasmo).
                Repas inclus, vie étudiante immédiate, mais moins
                d&apos;indépendance et un cadre parfois plus strict.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Colocation (piso compartido)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                L&apos;option la plus courante et la plus flexible. Plus
                d&apos;indépendance, souvent moins cher qu&apos;une résidence,
                et l&apos;occasion de vivre avec des Espagnols ou d&apos;autres
                Erasmus. Notre{" "}
                <Link href="/logement/colocation" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
                  guide colocation
                </Link>{" "}
                détaille les plateformes et documents à fournir.
              </p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-lg mt-6">
            Une troisième option existe pour les budgets plus larges : le{" "}
            <strong>studio ou co-living</strong> individuel, plus cher mais
            sans compromis sur l&apos;indépendance.
          </p>
        </div>
      </section>

      {/* Plateformes et prix */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les plateformes spécialisées et les prix
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Contrairement à un bail classique, la plupart des étudiants
            internationaux réservent leur logement à distance, avant même
            d&apos;arriver à Madrid, via des plateformes spécialisées dans le
            logement étudiant : <strong>Uniplaces</strong>,{" "}
            <strong>Spotahome</strong> et <strong>HousingAnywhere</strong>{" "}
            permettent de réserver une chambre ou un studio à distance avec
            visite virtuelle ; <strong>Erasmusu</strong> propose spécifiquement
            des chambres vérifiées en résidence ou en colocation pour
            étudiants Erasmus.
          </p>
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-[#171712] font-semibold">Format</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl text-[#171712] font-semibold">Budget indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f0e9]">
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#171712] font-medium">Chambre en coloc, quartier abordable (Lavapiés, Tetuán)</td>
                  <td className="px-4 py-3 text-[#171712]">450 – 550 €/mois</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#171712] font-medium">Chambre en coloc, quartier central</td>
                  <td className="px-4 py-3 text-[#171712]">550 – 700 €/mois</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 rounded-b-xl text-[#171712] font-medium">Résidence universitaire (repas inclus)</td>
                  <td className="px-4 py-3 rounded-b-xl text-[#171712]">Variable selon formule, souvent plus élevé</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#171712]/50 text-xs mt-3">
            Fourchettes indicatives 2026. Consulte notre{" "}
            <Link href="/logement/prix" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              guide des prix par quartier
            </Link>{" "}
            pour une vue complète.
          </p>
        </div>
      </section>

      {/* Timing et quartiers */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Quand chercher, et où
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Commence tes recherches au moins 3 mois avant le départ —
            idéalement en mai-juin pour une arrivée en septembre. Les
            meilleures options partent vite, en particulier près des campus
            universitaires.
          </p>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Malasaña, Chamberí et{" "}
              <Link href="/logement/quartiers/moncloa-arguelles" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
                Moncloa-Argüelles
              </Link>{" "}
              (proche UCM) sont les quartiers préférés des Erasmus — Lavapiés
              reste l&apos;option la plus abordable pour un petit budget.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/logement/colocation" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver une colocation
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Choisir son quartier
            </Link>
            <Link href="/logement/prix" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Prix au m² par quartier
            </Link>
            <Link href="/erasmus/budget-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Le budget étudiant à Madrid
            </Link>
            <Link href="/erasmus/universites" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Les universités Erasmus
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Le budget étudiant à Madrid" href="/erasmus/budget-etudiant" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Universités, budget, logement étudiant — tous nos guides Erasmus
            pour préparer ton semestre à Madrid.
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
