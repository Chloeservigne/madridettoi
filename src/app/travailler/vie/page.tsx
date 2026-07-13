import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/travailler/vie',
  },
  title: "VIE à Madrid — tout savoir sur le Volontariat International en Entreprise — Madrid & Toi",
  description:
    "2 400 € nets par mois, 18-28 ans, 6 à 24 mois dans un grand groupe français à Madrid. Comment fonctionne le VIE, comment postuler sur Business France, et à quoi s'attendre.",
};

export default function ViePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Faire un VIE à Madrid",
      description: "2 400 € nets par mois, 18-28 ans, 6 à 24 mois dans un grand groupe français à Madrid. Comment fonctionne le VIE, comment postuler sur Business France.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/travailler/vie",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/travailler/vie" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Travailler", item: "https://madrid-et-toi.com/travailler" },
        { "@type": "ListItem", position: 3, name: "VIE à Madrid", item: "https://madrid-et-toi.com/travailler/vie" },
      ],
    },
  ];
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide emploi
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Faire un VIE{" "}
            <span className="not-italic font-bold text-[#F0552F]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Le Volontariat International en Entreprise, c&apos;est jusqu&apos;à 2 ans dans
            un grand groupe français à Madrid — avec une indemnité qui peut dépasser
            2 400 € nets par mois. Pour les moins de 28 ans, c&apos;est l&apos;une des
            meilleures portes d&apos;entrée vers la vie madrilène. C&apos;est d&apos;ailleurs
            grâce à un VIE que je suis moi-même arrivée à Madrid.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Qu'est-ce que le VIE */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            C&apos;est quoi, exactement, un VIE ?
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Le VIE est un dispositif public géré par <strong>Business France</strong> qui
            permet à une entreprise française d&apos;envoyer un jeune professionnel à
            l&apos;étranger pour une mission de <strong>6 à 24 mois</strong>. Ce n&apos;est
            pas un contrat de travail classique — c&apos;est un statut public avec un
            régime protecteur spécifique.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            Tu es rattaché à Business France (pas à l&apos;entreprise d&apos;accueil),
            tu reçois une indemnité mensuelle exonérée de charges sociales — d&apos;où
            le net élevé. L&apos;entreprise t&apos;envoie en mission, mais c&apos;est
            Business France qui gère le cadre administratif et l&apos;assurance.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mt-4">
            En pratique, tu travailles exactement comme un salarié de l&apos;entreprise.
            Et l&apos;Espagne est l&apos;une des destinations les plus demandées d&apos;Europe
            occidentale — avec Madrid en tête.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">2 400 €</p>
              <p className="text-[#33251E] text-sm">nets/mois en Espagne<br />(indemnité exonérée de charges)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">6–24</p>
              <p className="text-[#33251E] text-sm">mois de mission,<br />renouvelable une fois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">18–28</p>
              <p className="text-[#33251E] text-sm">ans au démarrage<br />de la mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-8">
            Conditions et points d&apos;attention
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F2A65A] font-semibold uppercase tracking-widest text-sm mb-3">Pour être éligible</p>
              <ul className="text-[#33251E] text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Avoir entre 18 et 28 ans au démarrage</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Être ressortissant d&apos;un pays de l&apos;Espace Économique Européen (UE + Islande, Norvège, Liechtenstein)</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Étudiant ou jeune diplômé en recherche d&apos;emploi</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Ne pas avoir déjà effectué un VIE</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F2A65A] font-semibold uppercase tracking-widest text-sm mb-3">Ce qu&apos;il faut savoir</p>
              <ul className="text-[#33251E] text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Pas de cotisation chômage pendant la mission — pense à l&apos;après</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Activité rémunérée secondaire interdite</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Absences hors Espagne limitées à 7 jours/an (sinon prélèvement de 20 %)</li>
                <li className="flex gap-2"><span className="text-[#F0552F] font-bold">—</span> Ce n&apos;est pas un CDI — la mission a une fin, prépare la suite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment postuler */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Comment trouver et décrocher un VIE à Madrid
          </h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">Chercher sur la plateforme officielle</h3>
                <p className="text-[#33251E] leading-relaxed">
                  Toutes les offres VIE sont publiées sur{" "}
                  <a
                    href="https://mon-vie-via.businessfrance.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                  >
                    mon-vie-via.businessfrance.fr
                  </a>{" "}
                  (Business France). Filtre par pays &ldquo;Espagne&rdquo;, ville &ldquo;Madrid&rdquo;,
                  et ton domaine. Les offres se renouvellent en continu.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">Cibler les grands groupes français en direct</h3>
                <p className="text-[#33251E] leading-relaxed">
                  Airbus, Thales, L&apos;Oréal, Renault, Orange, Safran, Schneider Electric —
                  ces entreprises publient régulièrement des missions VIE en Espagne. Consulte
                  aussi leurs portails carrières espagnols directement (cf.{" "}
                  <Link href="/travailler/entreprises-francaises" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                    notre guide des entreprises françaises à Madrid
                  </Link>
                  ).
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">Prépare ton dossier</h3>
                <p className="text-[#33251E] leading-relaxed">
                  CV en français (et idéalement en espagnol), lettre de motivation ciblée.
                  La sélection se fait d&apos;abord par l&apos;entreprise d&apos;accueil —
                  ensuite, si elle retient ta candidature, c&apos;est Business France
                  qui valide ton éligibilité et gère le cadre administratif.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#33251E] text-lg mb-2">Prépare ton installation à Madrid</h3>
                <p className="text-[#33251E] leading-relaxed">
                  Une fois la mission confirmée, tu auras besoin d&apos;un{" "}
                  <Link href="/papiers/nie" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                    NIE
                  </Link>{" "}
                  et d&apos;un{" "}
                  <Link href="/papiers/padron" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                    padron municipal
                  </Link>
                  . Un{" "}
                  <Link href="/papiers/compte-bancaire" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                    compte bancaire espagnol
                  </Link>{" "}
                  est recommandé pour recevoir ton indemnité sans frais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section dark */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-8">
            Le VIE comme tremplin — et ses limites
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">Les vrais avantages</p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                2 400 € nets à 23 ans à Madrid, c&apos;est confortable — le loyer d&apos;un bon appart
                en colocation dans{" "}
                <Link href="/logement/quartiers/malasana" className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Malasaña
                </Link>{" "}
                ou{" "}
                <Link href="/logement/quartiers/chueca" className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Chueca
                </Link>{" "}
                tourne autour de 700–900 €. Tu construis une expérience internationale dans un grand groupe,
                tu apprends l&apos;espagnol en immersion, et tu te crées un réseau franco-espagnol.
                Beaucoup de VIE débouchent sur un CDI dans l&apos;entreprise d&apos;accueil ou dans le groupe.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">Ce qu&apos;il ne faut pas oublier</p>
              <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">
                Tu ne cotises pas au chômage pendant ta mission. Si tu enchaînes VIE puis
                période sans emploi, tu ne touches pas les allocations. C&apos;est le
                principal point noir du dispositif — prévoie la transition vers un CDI
                ou une période de travail en France avant de partir si tu veux te constituer
                des droits.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              Un VIE à Madrid, c&apos;est souvent l&apos;excuse officielle pour
              s&apos;installer — et la vraie raison pour ne jamais repartir.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/travailler/entreprises-francaises"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Les entreprises françaises à Madrid
            </Link>
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Trouver un emploi local à Madrid
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Trouver un appartement
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Budget pour vivre à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10">
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
