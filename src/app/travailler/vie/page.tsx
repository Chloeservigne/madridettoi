import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "VIE à Madrid — tout savoir sur le Volontariat International en Entreprise — Madrid & Toi",
  description:
    "2 400 € nets par mois, 18-28 ans, 6 à 24 mois dans un grand groupe français à Madrid. Comment fonctionne le VIE, comment postuler sur Business France, et à quoi s'attendre.",
};

export default function ViePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide emploi
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Faire un VIE{" "}
            <span className="italic text-[#C8614A]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le Volontariat International en Entreprise, c&apos;est jusqu&apos;à 2 ans dans
            un grand groupe français à Madrid — avec une indemnité qui peut dépasser
            2 400 € nets par mois. Pour les moins de 28 ans, c&apos;est l&apos;une des
            meilleures portes d&apos;entrée vers la vie madrilène.
          </p>
        </div>
      </section>

      {/* Qu'est-ce que le VIE */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            C&apos;est quoi, exactement, un VIE ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Le VIE est un dispositif public géré par <strong>Business France</strong> qui
            permet à une entreprise française d&apos;envoyer un jeune professionnel à
            l&apos;étranger pour une mission de <strong>6 à 24 mois</strong>. Ce n&apos;est
            pas un contrat de travail classique — c&apos;est un statut public avec un
            régime protecteur spécifique.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Tu es rattaché à Business France (pas à l&apos;entreprise d&apos;accueil),
            tu reçois une indemnité mensuelle exonérée de charges sociales — d&apos;où
            le net élevé. L&apos;entreprise t&apos;envoie en mission, mais c&apos;est
            Business France qui gère le cadre administratif et l&apos;assurance.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            En pratique, tu travailles exactement comme un salarié de l&apos;entreprise.
            Et l&apos;Espagne est l&apos;une des destinations les plus demandées d&apos;Europe
            occidentale — avec Madrid en tête.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">2 400 €</p>
              <p className="text-[#5a3e35] text-sm">nets/mois en Espagne<br />(indemnité exonérée de charges)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">6–24</p>
              <p className="text-[#5a3e35] text-sm">mois de mission,<br />renouvelable une fois</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">18–28</p>
              <p className="text-[#5a3e35] text-sm">ans au démarrage<br />de la mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Conditions et points d&apos;attention
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#7A8C5E] font-semibold uppercase tracking-widest text-sm mb-3">Pour être éligible</p>
              <ul className="text-[#5a3e35] text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Avoir entre 18 et 28 ans au démarrage</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Être ressortissant d&apos;un pays de l&apos;Espace Économique Européen (UE + Islande, Norvège, Liechtenstein)</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Étudiant ou jeune diplômé en recherche d&apos;emploi</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Ne pas avoir déjà effectué un VIE</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#7A8C5E] font-semibold uppercase tracking-widest text-sm mb-3">Ce qu&apos;il faut savoir</p>
              <ul className="text-[#5a3e35] text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Pas de cotisation chômage pendant la mission — pense à l&apos;après</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Activité rémunérée secondaire interdite</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Absences hors Espagne limitées à 7 jours/an (sinon prélèvement de 20 %)</li>
                <li className="flex gap-2"><span className="text-[#C8614A] font-bold">—</span> Ce n&apos;est pas un CDI — la mission a une fin, prépare la suite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment postuler */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Comment trouver et décrocher un VIE à Madrid
          </h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-2">Chercher sur la plateforme officielle</h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Toutes les offres VIE sont publiées sur{" "}
                  <a
                    href="https://mon-vie-via.businessfrance.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    mon-vie-via.businessfrance.fr
                  </a>{" "}
                  (Business France). Filtre par pays &ldquo;Espagne&rdquo;, ville &ldquo;Madrid&rdquo;,
                  et ton domaine. Les offres se renouvellent en continu.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-2">Cibler les grands groupes français en direct</h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Airbus, Thales, L&apos;Oréal, Renault, Orange, Safran, Schneider Electric —
                  ces entreprises publient régulièrement des missions VIE en Espagne. Consulte
                  aussi leurs portails carrières espagnols directement (cf.{" "}
                  <Link href="/travailler/entreprises-francaises" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    notre guide des entreprises françaises à Madrid
                  </Link>
                  ).
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-2">Prépare ton dossier</h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  CV en français (et idéalement en espagnol), lettre de motivation ciblée.
                  La sélection se fait d&apos;abord par l&apos;entreprise d&apos;accueil —
                  ensuite, si elle retient ta candidature, c&apos;est Business France
                  qui valide ton éligibilité et gère le cadre administratif.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-2">Prépare ton installation à Madrid</h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Une fois la mission confirmée, tu auras besoin d&apos;un{" "}
                  <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    NIE
                  </Link>{" "}
                  et d&apos;un{" "}
                  <Link href="/papiers/padron" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    padron municipal
                  </Link>
                  . Un{" "}
                  <Link href="/papiers/compte-bancaire" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
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
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Le VIE comme tremplin — et ses limites
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Les vrais avantages</p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                2 400 € nets à 23 ans à Madrid, c&apos;est confortable — le loyer d&apos;un bon appart
                en colocation dans{" "}
                <Link href="/logement/quartiers/malasana" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Malasaña
                </Link>{" "}
                ou{" "}
                <Link href="/logement/quartiers/chueca" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Chueca
                </Link>{" "}
                tourne autour de 700–900 €. Tu construis une expérience internationale dans un grand groupe,
                tu apprends l&apos;espagnol en immersion, et tu te crées un réseau franco-espagnol.
                Beaucoup de VIE débouchent sur un CDI dans l&apos;entreprise d&apos;accueil ou dans le groupe.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Ce qu&apos;il ne faut pas oublier</p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Tu ne cotises pas au chômage pendant ta mission. Si tu enchaînes VIE puis
                période sans emploi, tu ne touches pas les allocations. C&apos;est le
                principal point noir du dispositif — prévoie la transition vers un CDI
                ou une période de travail en France avant de partir si tu veux te constituer
                des droits.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Un VIE à Madrid, c&apos;est souvent l&apos;excuse officielle pour
              s&apos;installer — et la vraie raison pour ne jamais repartir.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/travailler/entreprises-francaises"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Les entreprises françaises à Madrid
            </Link>
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un emploi local à Madrid
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Budget pour vivre à Madrid
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
