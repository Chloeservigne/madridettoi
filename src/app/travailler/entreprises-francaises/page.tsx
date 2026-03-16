import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Entreprises françaises à Madrid — où travailler en 2026 — Madrid & Toi",
  description:
    "Airbus, Decathlon, L'Oréal, Thales, Renault... Les grands groupes français implantés à Madrid, la French Tech, et comment cibler ces employeurs depuis la France.",
};

export default function EntreprisesFrancaisesPage() {
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
            Les entreprises françaises{" "}
            <span className="italic text-[#C8614A]">à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Madrid est la première destination des investissements français en Espagne.
            Des dizaines de grands groupes y sont implantés — et ils recrutent régulièrement
            des profils français, parfois sans exiger un espagnol parfait.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            La France, premier investisseur étranger à Madrid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">130 000</p>
              <p className="text-[#5a3e35] text-sm">Emplois créés par des entreprises françaises dans la région de Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">400+</p>
              <p className="text-[#5a3e35] text-sm">Entreprises membres de la Chambre Franco-Espagnole (CCIFE)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">1894</p>
              <p className="text-[#5a3e35] text-sm">Année de création de la Chambre Franco-Espagnole — l&apos;une des plus anciennes d&apos;Europe</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Madrid est la communauté autonome qui reçoit le plus d&apos;investissements
            directs en provenance de France. La présence française est ancienne, diversifiée,
            et couvre tous les secteurs — de la grande distribution à l&apos;aéronautique
            en passant par la tech et l&apos;énergie.
          </p>
        </div>
      </section>

      {/* Grands groupes par secteur */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Les grands groupes français implantés à Madrid
          </h2>
          <div className="space-y-5">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-3">Distribution & Retail</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-[#2C1810]">Decathlon</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Classé 17e meilleur employeur en Espagne, Decathlon est une des entreprises
                    françaises les plus appréciées localement. Nombreux postes en magasin,
                    logistique et fonctions support au siège espagnol.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Carrefour</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Présence forte en Espagne avec des hypermarchés, supermarchés et le
                    développement du e-commerce. Recrutements réguliers en gestion, supply
                    chain et digital.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Leroy Merlin</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    L&apos;enseigne bricolage est bien implantée dans toute la région de Madrid.
                    Profils commerce, logistique et management de rayon régulièrement recherchés.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-3">Aéronautique, Défense & Industrie</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-[#2C1810]">Airbus — Getafe</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    L&apos;Espagne est l&apos;un des quatre pays fondateurs d&apos;Airbus.
                    Le site de Getafe (au sud de Madrid) est l&apos;un des plus importants —
                    ingénieurs, techniciens et fonctions support y sont régulièrement recrutés.
                    L&apos;anglais est souvent suffisant en interne.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Thales</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Présent à Madrid dans la défense, l&apos;aérospatial et la cybersécurité.
                    Profils ingénieurs et tech très recherchés.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Safran</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Implantation significative dans la région de Madrid, notamment dans
                    les équipements aéronautiques.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Schneider Electric & Saint-Gobain</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Deux géants industriels avec des bureaux et opérations à Madrid — gestion
                    de l&apos;énergie pour Schneider, matériaux de construction pour Saint-Gobain
                    (Sekurit, Isover).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-3">Beauté, Énergie & Télécom</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-[#2C1810]">L&apos;Oréal</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Classé parmi les entreprises les plus attractives en Espagne.
                    Siège espagnol à Madrid avec des équipes marketing, digital et commercial.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Air Liquide</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Bureaux à Madrid, actif dans les gaz industriels et la santé.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Orange España</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Le siège espagnol d&apos;Orange est à Madrid. Profils tech, data et
                    commercial régulièrement recherchés.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810]">Renault</p>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">
                    Présence commerciale et logistique à Madrid, avec une usine à Valladolid.
                    Siège pour l&apos;Espagne basé dans la capitale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* French Tech */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La French Tech à Madrid
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Madrid est devenu un terrain d&apos;expansion naturel pour les startups françaises.
            L&apos;écosystème de la ville est le 5e d&apos;Europe en nombre de startups
            financées par des VC, avec une valeur totale estimée à 25 milliards d&apos;euros.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            <strong>French Tech Madrid</strong> est une association active qui aide les
            startups françaises à s&apos;implanter en Espagne et connecte les acteurs
            des deux écosystèmes. Elle organise régulièrement des workshops, hackathons et
            soirées pitch. En juin 2025, le <em>Train de la French Tech</em> a conduit
            une centaine de startups et investisseurs depuis Perpignan jusqu&apos;à Madrid
            pour une mission d&apos;expansion.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le <strong>South Summit</strong>, l&apos;un des grands rendez-vous entrepreneuriaux
            européens, se tient chaque année à Madrid — 40 000 participants en 2025.
            C&apos;est l&apos;événement à ne pas rater si tu veux te connecter à l&apos;écosystème tech local.
          </p>
        </div>
      </section>

      {/* Section dark */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            La Chambre Franco-Espagnole et comment l&apos;utiliser
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed mb-6">
            La <strong className="text-white">Chambre Franco-Espagnole de Commerce et d&apos;Industrie</strong> (CCIFE),
            fondée en 1894, est l&apos;un des réseaux professionnels les plus actifs de Madrid.
            Elle regroupe plus de 400 entreprises membres et propose plus de 80 événements
            de networking par an.
          </p>
          <p className="text-[#F5ECD7]/80 leading-relaxed mb-8">
            Pour un candidat en recherche d&apos;emploi, c&apos;est une porte d&apos;entrée
            précieuse : salons de l&apos;emploi francophones (deux fois par an à Madrid),
            mise en relation avec des entreprises membres, et accès à un réseau de
            professionnels franco-espagnols. L&apos;adhésion existe aussi pour les
            particuliers — moins connue, mais utile.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Salons emploi francophones</p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Des salons de l&apos;emploi spécifiquement dédiés aux profils francophones
                sont organisés à Madrid (et Barcelone) — une occasion rare de rencontrer
                des recruteurs de groupes français en face à face.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Postuler depuis la France</p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Pour les grands groupes, postule directement sur leurs sites carrières
                espagnols — souvent distincts des portails français.
                Mets ton profil LinkedIn en espagnol et indique Madrid en localisation.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Travailler dans un grand groupe français à Madrid, c&apos;est souvent
              le meilleur des deux mondes : culture d&apos;entreprise familière,
              équipes locales, et vie madrilène à la sortie du bureau.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Comment cibler ces entreprises efficacement
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2.5"></div>
              <p className="text-[#5a3e35] leading-relaxed">
                <strong>Sites carrières espagnols :</strong> la majorité des grands groupes
                ont des portails de recrutement distincts pour l&apos;Espagne. Cherche
                &ldquo;[nom entreprise] empleo España&rdquo; — ne passe pas par le portail France.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2.5"></div>
              <p className="text-[#5a3e35] leading-relaxed">
                <strong>LinkedIn en espagnol :</strong> mets ton profil en espagnol (ou
                bilingue), indique Madrid comme localisation souhaitée. Les recruteurs
                espagnols filtrent par localisation.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2.5"></div>
              <p className="text-[#5a3e35] leading-relaxed">
                <strong>InfoJobs :</strong> même pour les entreprises françaises, de
                nombreuses offres sont publiées sur InfoJobs — la plateforme de référence
                en Espagne. Filtre par &ldquo;Madrid&rdquo; et le nom de l&apos;entreprise.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2.5"></div>
              <p className="text-[#5a3e35] leading-relaxed">
                <strong>Contact direct :</strong> pour les postes non publiés, contacter
                directement les RH ou managers via LinkedIn fonctionne bien — plus que
                dans la culture française. Un message court et ciblé en espagnol a de bonnes chances d&apos;aboutir.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8614A] mt-2.5"></div>
              <p className="text-[#5a3e35] leading-relaxed">
                <strong>NIE dès que possible :</strong> avoir son{" "}
                <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                  NIE
                </Link>{" "}
                avant de signer accélère les formalités d&apos;embauche. Sans NIE,
                certains groupes ne peuvent pas finaliser ton dossier administratif.
              </p>
            </div>
          </div>
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
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Tous les secteurs qui recrutent à Madrid
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Devenir autónomo (indépendant)
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/se-decider/salaire-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Salaires brut/net à Madrid
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement
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
