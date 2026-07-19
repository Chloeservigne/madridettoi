import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/erasmus/budget-etudiant',
  },
  title: "Budget étudiant Erasmus à Madrid en 2026 — Madrid & Toi",
  description:
    "Bourse Erasmus+ (225 à 550 €/mois), aides complémentaires, coût de la vie réel pour un étudiant — de quoi construire un budget réaliste pour ton semestre à Madrid.",
};

export default function BudgetEtudiantPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Budget étudiant Erasmus à Madrid en 2026",
      description:
        "Bourse Erasmus+ (225 à 550 €/mois), aides complémentaires, coût de la vie réel pour un étudiant — de quoi construire un budget réaliste pour ton semestre à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      url: "https://madrid-et-toi.com/erasmus/budget-etudiant",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/erasmus/budget-etudiant" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Erasmus", item: "https://madrid-et-toi.com/erasmus" },
        { "@type": "ListItem", position: 3, name: "Budget étudiant", item: "https://madrid-et-toi.com/erasmus/budget-etudiant" },
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
            Guide budget étudiant
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Combien coûte{" "}
            <span className="not-italic font-extrabold text-[#d6442a]">un semestre à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Entre la bourse Erasmus+ et le coût de la vie madrilène, le budget
            d&apos;un étudiant ne ressemble pas à celui d&apos;un expatrié
            classique. Voici comment estimer le tien.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* La bourse */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            La bourse Erasmus+ : entre 225 et 550 €/mois
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            L&apos;Espagne fait partie du groupe de pays pour lesquels la
            bourse Erasmus+ se situe entre <strong>225 et 550 €/mois</strong>.
            Le montant exact n&apos;est pas fixé au niveau européen : chaque
            université française fixe elle-même le montant précis dans cette
            fourchette, selon son enveloppe globale. Renseigne-toi directement
            auprès du service des relations internationales de ton
            établissement pour connaître le montant qui te sera versé.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">+150 €</p>
              <p className="text-[#171712] text-sm">Complément stage (mobilité de stage uniquement, pas d&apos;études)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">+250 €</p>
              <p className="text-[#171712] text-sm">Complément inclusion, sous conditions sociales ou géographiques</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">+50-100 €</p>
              <p className="text-[#171712] text-sm">Bonus transport écoresponsable pour le trajet vers Madrid</p>
            </div>
          </div>
          <p className="text-[#171712]/70 text-sm mt-6">
            L&apos;Aide à la Mobilité Internationale (AMI), versée sous
            conditions de ressources par les CROUS, peut se cumuler avec la
            bourse Erasmus+ — à vérifier sur ton dossier social étudiant.
          </p>
        </div>
      </section>

      {/* Coût de la vie */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le coût de la vie réel pour un étudiant
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            La bourse Erasmus+ ne couvre en général qu&apos;une partie du
            budget mensuel réel à Madrid — elle est pensée comme un
            complément, pas comme un revenu de subsistance complet. Pour un
            budget étudiant serré mais réaliste, le poste principal reste le{" "}
            <Link href="/erasmus/logement-etudiant" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              logement
            </Link>{" "}
            (450 à 700 €/mois en coloc selon le quartier), suivi de
            l&apos;alimentation, des{" "}
            <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              transports
            </Link>{" "}
            et des sorties.
          </p>
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold text-[#171712] mb-3">
              Pour aller plus loin
            </p>
            <p className="text-[#171712] text-sm leading-relaxed">
              Notre{" "}
              <Link href="/se-decider/budget" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
                guide budget complet
              </Link>{" "}
              détaille le coût de la vie à Madrid poste par poste (loyer,
              courses, loisirs) — utile pour affiner ton estimation, même si
              certains postes (assurance santé, mutuelle privée) ne
              s&apos;appliquent pas à un Erasmus.
            </p>
          </div>
        </div>
      </section>

      {/* Réductions étudiantes */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Les réductions qui font la différence
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Le principal levier d&apos;économie pour un étudiant à Madrid :
            l&apos;
            <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Abono Transporte
            </Link>{" "}
            tarif réduit pour les moins de 26 ans, qui couvre métro, bus et
            Cercanías illimités pour un tarif mensuel très inférieur au plein
            tarif. Ajoute à ça les réductions étudiantes fréquentes sur les
            musées, cinémas et certains restaurants sur présentation de la
            carte étudiante internationale.
          </p>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Prends ta carte d&apos;étudiant internationale avant de partir
              — beaucoup de musées madrilènes proposent la gratuité ou un
              tarif réduit aux étudiants, quelle que soit leur nationalité.
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
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Budget de vie réel à Madrid
            </Link>
            <Link href="/erasmus/logement-etudiant" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un logement étudiant
            </Link>
            <Link href="/vivre/transports" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Transports à Madrid
            </Link>
            <Link href="/vivre/courses" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Faire ses courses à Madrid
            </Link>
            <Link href="/erasmus/vie-etudiante" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La vie étudiante à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La vie étudiante à Madrid" href="/erasmus/vie-etudiante" />

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
