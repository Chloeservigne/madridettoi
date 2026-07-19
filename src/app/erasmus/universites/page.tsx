import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/universites',
  },
  title: "Les universités Erasmus à Madrid — Madrid & Toi",
  description:
    "UCM, UAM, Carlos III, Comillas, Alcalá — les grandes universités madrilènes qui accueillent des Erasmus, leurs spécialités, et comment fonctionne le Learning Agreement.",
};

export default function UniversitesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Les universités Erasmus à Madrid",
      description:
        "UCM, UAM, Carlos III, Comillas, Alcalá — les grandes universités madrilènes qui accueillent des Erasmus, leurs spécialités, et comment fonctionne le Learning Agreement.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/universites",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/universites" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Universités", item: "https://madrid-et-toi.com/erasmus/universites" },
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
            Guide universités
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Les universités qui{" "}
            <span className="not-italic font-bold text-[#d6442a]">accueillent des Erasmus</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Madrid concentre plusieurs des plus grandes universités
            d&apos;Espagne, avec des centaines d&apos;accords Erasmus+ chacune.
            Tu ne choisis pas directement l&apos;université d&apos;accueil —
            c&apos;est ton université française qui a des accords bilatéraux
            précis. Voici ce qui distingue les principales.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le Learning Agreement, la pièce centrale du dossier
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Avant de partir, tu établis avec ton université d&apos;origine un{" "}
            <strong>Learning Agreement</strong> : la liste des cours que tu
            suivras à Madrid et leur équivalence en crédits ECTS avec ton
            cursus français. C&apos;est ce document, validé par les deux
            établissements, qui garantit que ton semestre à l&apos;étranger
            compte réellement dans ton diplôme.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Les accords Erasmus+ se négocient entre établissements, pas
            librement entre étudiants : le choix des universités d&apos;accueil
            disponibles dépend de la liste d&apos;accords bilatéraux de ta
            propre université — à consulter auprès de ton service des
            relations internationales avant même de penser à Madrid.
          </p>
        </div>
      </section>

      {/* Les universités */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-8">
            Les grandes universités madrilènes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Universidad Complutense (UCM)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                La plus grande université publique d&apos;Espagne, avec près de
                900 accords de coopération dans 77 pays. Campus principal à{" "}
                <Link href="/logement/quartiers/moncloa-arguelles" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
                  Moncloa
                </Link>
                , offre de formations disponibles dans presque tous les
                domaines.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Universidad Autónoma (UAM)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Campus principal excentré au nord de Madrid (Cantoblanco),
                bien desservi par Cercanías. Réputée en sciences, économie et
                droit, avec ses propres résidences universitaires
                (colegios mayores).
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Universidad Carlos III (UC3M)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Plus de 800 accords d&apos;échange dans le monde, l&apos;une
                des universités espagnoles les plus actives sur la mobilité
                Erasmus+. Forte réputation en économie, droit et ingénierie,
                campus modernes répartis sur plusieurs sites au sud de Madrid.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">
                Universidad Pontificia Comillas (ICAI-ICADE)
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Université privée jésuite, réputée en droit, économie et
                ingénierie (ICAI). Campus central, proche de{" "}
                <Link href="/logement/quartiers/salamanca" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
                  Salamanca
                </Link>
                . Frais et exigences d&apos;admission différents des
                universités publiques.
              </p>
            </div>
          </div>
          <p className="text-[#171712]/70 text-sm mt-6">
            L&apos;Universidad de Alcalá de Henares, à une trentaine de minutes
            de Madrid en Cercanías, fait aussi partie des destinations Erasmus+
            classiques — une option à considérer si tu cherches un cadre plus
            calme qu&apos;en plein centre.
          </p>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/erasmus/demarches" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Les démarches administratives
            </Link>
            <Link href="/erasmus/logement-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un logement étudiant
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Choisir son quartier
            </Link>
            <Link href="/erasmus/budget-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Le budget étudiant à Madrid
            </Link>
            <Link href="/vivre/transports" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Transports à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Les démarches administratives" href="/erasmus/demarches" />

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
