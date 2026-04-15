import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "S'installer à Madrid : le guide complet pour les Français",
  description:
    "Tout ce qu'il faut savoir pour s'installer à Madrid : logement, NIE, travail, déménagement, vie quotidienne. Le guide pratique des Français expatriés à Madrid.",
  openGraph: {
    title: "S'installer à Madrid : le guide complet pour les Français",
    description:
      "Tout ce qu'il faut savoir pour s'installer à Madrid : logement, NIE, travail, déménagement, vie quotidienne.",
  },
};

const phases = [
  {
    num: "1",
    titre: "Je rêve encore",
    desc: "Tu envisages Madrid, tu te demandes si c'est réalisable. Les réponses aux questions que tout le monde se pose avant de décider.",
    liens: [
      { label: "Pourquoi Madrid ?", href: "/se-decider/pourquoi-madrid" },
      { label: "Budget & coût de la vie", href: "/se-decider/budget" },
      { label: "Salaires à Madrid", href: "/se-decider/salaire-madrid" },
      { label: "Travailler en remote", href: "/travailler/remote" },
    ],
  },
  {
    num: "2",
    titre: "Je me prépare",
    desc: "La décision est prise. Il faut organiser le départ — boulot, logement, déménagement.",
    liens: [
      { label: "Trouver un appartement", href: "/logement/appartement" },
      { label: "Choisir son quartier", href: "/logement/quartiers" },
      { label: "Déménager Paris → Madrid", href: "/demenagement/paris-madrid" },
      { label: "Checklist départ", href: "/demenagement/checklist" },
      { label: "Trouver un emploi", href: "/travailler/emploi" },
      { label: "Devenir freelance", href: "/travailler/freelance" },
    ],
  },
  {
    num: "3",
    titre: "Je viens d'arriver",
    desc: "Tu es là. Les premières semaines sont denses — admin, banque, transports. Voilà dans quel ordre faire les choses.",
    liens: [
      { label: "Le NIE", href: "/papiers/nie" },
      { label: "Le padron municipal", href: "/papiers/padron" },
      { label: "Ouvrir un compte bancaire", href: "/papiers/compte-bancaire" },
      { label: "La sécu espagnole", href: "/papiers/secu" },
      { label: "Transports & Abono", href: "/vivre/transports" },
    ],
  },
  {
    num: "4",
    titre: "Je vis à Madrid",
    desc: "L'installation est faite. Maintenant il s'agit de vraiment vivre ici — se soigner, sortir, s'intégrer.",
    liens: [
      { label: "Santé & mutuelles", href: "/vivre/sante" },
      { label: "Courses & marchés", href: "/vivre/courses" },
      { label: "Apprendre l'espagnol", href: "/vivre/espagnol" },
      { label: "Sortir à Madrid", href: "/vivre/sortir" },
      { label: "Les impôts en Espagne", href: "/papiers/impots" },
      { label: "La communauté française", href: "/communaute/francais-madrid" },
    ],
  },
];

const questions = [
  { label: "Comment trouver un appartement depuis la France ?", href: "/logement/appartement" },
  { label: "Faut-il un NIE avant d'arriver ?", href: "/papiers/nie" },
  { label: "Quels sont les quartiers les plus sympa pour les expats ?", href: "/logement/quartiers" },
  { label: "Comment fonctionne la sécu en Espagne ?", href: "/papiers/secu" },
  { label: "Peut-on travailler en remote depuis Madrid ?", href: "/travailler/remote" },
];

const sections = [
  {
    label: "Se décider",
    titre: "Pourquoi partir à Madrid ?",
    desc: "Budget, salaires, qualité de vie. Tout pour évaluer si le projet tient la route.",
    href: "/se-decider/pourquoi-madrid",
  },
  {
    label: "Logement",
    titre: "Trouver où vivre",
    desc: "Appartements, quartiers, prix au m² — le marché immobilier madrilène expliqué.",
    href: "/logement/appartement",
  },
  {
    label: "Papiers",
    titre: "Les démarches admin",
    desc: "NIE, padron, compte bancaire, sécu, impôts. Dans l'ordre, sans se perdre.",
    href: "/papiers/nie",
  },
  {
    label: "Travailler",
    titre: "Emploi & freelance",
    desc: "Trouver un job local, travailler en remote ou devenir autónomo à Madrid.",
    href: "/travailler/emploi",
  },
  {
    label: "Déménagement",
    titre: "Organiser le départ",
    desc: "Tout planifier de J-6 mois à J+3 mois, transport des affaires inclus.",
    href: "/demenagement/checklist",
  },
  {
    label: "Vivre",
    titre: "La vie du quotidien",
    desc: "Transports, santé, courses, sorties, espagnol. Madrid au quotidien.",
    href: "/vivre/transports",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-in-up delay-1 text-[#C8614A] font-semibold tracking-widest uppercase text-sm mb-6">
              Pour les Français qui rêvent de Madrid
            </p>
            <h1 className="animate-fade-in-up delay-2 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2C1810] leading-tight mb-8">
              Et si tu sautais
              <br />
              <span className="italic text-[#C8614A]">le pas&nbsp;?</span>
            </h1>
            <p className="animate-fade-in-up delay-3 text-lg sm:text-xl text-[#5a3e35] mb-12 leading-relaxed">
              Madrid fait rêver. Mais entre l&apos;envie et le déménagement, il y a
              mille questions. <strong>Madrid & Toi</strong> est là pour t&apos;aider
              à franchir le cap, sans te perdre dans les démarches.
            </p>
            <div className="animate-fade-in-up delay-4 flex justify-center lg:justify-start">
              <a
                href="#parcours"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8614A] text-white font-semibold text-lg hover:bg-[#A84D3A] transition-all hover:scale-105 shadow-lg shadow-[#C8614A]/20"
              >
                Où en es-tu ?
                <span>→</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[440px]">
            <Image
              src="/images/madrid.svg"
              alt="Illustration d'une personne prête à partir s'installer à Madrid"
              width={440}
              height={440}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">35 000</p>
              <p className="text-[#5a3e35] text-sm">Français vivent à Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">900 €</p>
              <p className="text-[#5a3e35] text-sm">Loyer moyen pour un T1</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">1 184 €</p>
              <p className="text-[#5a3e35] text-sm">SMI espagnol en 2025</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">300 j</p>
              <p className="text-[#5a3e35] text-sm">De soleil par an</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Madrid */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">Le contexte</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Pourquoi autant de Français s&apos;installent à Madrid
          </h2>
          <div className="space-y-4 text-[#5a3e35] leading-relaxed text-lg">
            <p>
              Madrid n&apos;est plus seulement une destination touristique. Pour les Français, elle est devenue une vraie alternative à Paris — avec un{" "}
              <Link href="/se-decider/budget" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                coût de la vie encore accessible
              </Link>
              , une énergie différente, et la possibilité de se construire une vie à l&apos;étranger sans traverser un océan.
            </p>
            <p>
              Ils sont plus de 35 000 à y avoir posé leurs valises — jeunes actifs, freelances, familles, retraités. Certains arrivent avec un contrat dans une{" "}
              <Link href="/travailler/entreprises-francaises" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                entreprise française présente en Espagne
              </Link>
              , d&apos;autres tentent leur chance sur le marché local ou deviennent{" "}
              <Link href="/travailler/freelance" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                autónomos
              </Link>
              . D&apos;autres encore{" "}
              <Link href="/travailler/remote" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                télétravaillent depuis Madrid
              </Link>{" "}
              pour un employeur français.
            </p>
            <p>
              Mais s&apos;installer à Madrid, ça ne s&apos;improvise pas. Entre le{" "}
              <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                NIE à obtenir
              </Link>
              , l&apos;
              <Link href="/logement/appartement" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                appartement à trouver depuis la France
              </Link>
              , le{" "}
              <Link href="/papiers/padron" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                padron municipal
              </Link>
              , la{" "}
              <Link href="/papiers/secu" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                sécurité sociale espagnole
              </Link>{" "}
              et les{" "}
              <Link href="/papiers/impots" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                impôts à comprendre
              </Link>
              , les démarches peuvent vite sembler un labyrinthe. Ce guide est là pour t&apos;éviter ça.
            </p>
          </div>
        </div>
      </section>

      {/* Questions section */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#EDE0C8]/60 text-sm uppercase tracking-widest mb-8 text-center">
            Tu te poses ces questions ?
          </p>
          <div className="flex flex-col divide-y divide-[#F5ECD7]/10">
            {questions.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex items-center justify-between gap-4 py-4 text-[#F5ECD7]/80 hover:text-[#E8A838] transition-colors"
              >
                <span className="text-base">{q.label}</span>
                <span className="flex-shrink-0 text-[#C8614A] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl mt-10 text-center">
            On y répond, une par une.
          </p>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
              Ton parcours
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810]">
              Où en es-tu ?
            </h2>
          </div>

          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] text-white flex items-center justify-center font-[family-name:var(--font-playfair)] font-bold text-lg">
                    {phase.num}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] italic">
                      {phase.titre}
                    </p>
                    <p className="text-[#5a3e35]/70 text-sm mt-1 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.liens.map((lien) => (
                    <Link
                      key={lien.href}
                      href={lien.href}
                      className="px-3 py-1.5 rounded-full bg-[#F5ECD7] text-[#2C1810] text-sm font-medium hover:bg-[#EDE0C8] hover:text-[#C8614A] transition-colors"
                    >
                      {lien.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À l'arrivée */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">Dès ton arrivée</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Les cinq démarches indispensables
          </h2>
          <p className="text-[#5a3e35] text-lg leading-relaxed mb-10">
            Pas besoin de tout faire en même temps. Mais il y a un ordre logique — et certaines démarches débloquent les suivantes. Commence par là.
          </p>
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-1">
                  <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    Le NIE
                  </Link>
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Le Número de Identificación de Extranjero est le sésame de tout. Sans lui, tu ne peux ni signer un bail, ni ouvrir un compte, ni travailler légalement. C&apos;est la première démarche à lancer.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-1">
                  <Link href="/papiers/padron" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    Le padron municipal
                  </Link>
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  L&apos;inscription en mairie (empadronamiento) est obligatoire dès que tu as une adresse fixe. C&apos;est ce document qui prouve ta résidence à Madrid — et il t&apos;ouvre les droits à la sécu et à l&apos;Abono jeune.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-1">
                  <Link href="/papiers/compte-bancaire" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    Un compte bancaire espagnol
                  </Link>
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  La plupart des employeurs espagnols virent sur un compte ES. Et sans RIB local, impossible de domicilier tes factures. Ouvre un compte dès les premiers jours.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-1">
                  <Link href="/papiers/secu" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    La sécurité sociale espagnole
                  </Link>
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Une fois employé ou inscrit comme autónomo, tu es affilié à la Seguridad Social. Tu obtiens un número de afiliación et l&apos;accès au médecin de famille (médico de cabecera).
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold text-[#2C1810] text-lg mb-1">
                  <Link href="/vivre/transports" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                    L&apos;Abono Transporte
                  </Link>
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Le pass illimité pour le métro, le bus et le Cercanías. Indispensable pour se déplacer au quotidien — et très abordable avec le tarif jeune (- 26 ans).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark section + blockquote */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Ce que tu vas trouver ici</p>
              <ul className="space-y-2">
                {[
                  "Des guides pratiques écrits par quelqu'un qui l'a vécu",
                  "Des infos à jour — loyers, salaires, cotisations 2025/2026",
                  "Les démarches dans le bon ordre, sans jargon",
                  "Des liens directs vers les formulaires officiels",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
                    <span className="text-[#F5ECD7]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Ce que tu ne trouveras pas</p>
              <ul className="space-y-2">
                {[
                  "Des articles génériques copiés d'autres blogs",
                  "Des conseils d'agences immobilières rémunérées",
                  "Des infos périmées sur les démarches admin",
                  "Des promesses de vie facile — Madrid ça se mérite",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-[#F5ECD7]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Madrid ne te demande pas d&apos;être parfait·e en espagnol ni d&apos;avoir tout planifié. Elle demande juste de sauter — et de te débrouiller une fois là-bas.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Explorer le guide */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">Le guide complet</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#2C1810]">
              Explorer par thème
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-[#C8614A] text-xs font-semibold uppercase tracking-widest mb-2">{s.label}</p>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2C1810] mb-2 group-hover:text-[#C8614A] transition-colors">
                  {s.titre}
                </h3>
                <p className="text-[#5a3e35]/70 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810] mb-6">
            C&apos;est quoi,{" "}
            <span className="italic text-[#C8614A]">Madrid & Toi&nbsp;?</span>
          </h2>
          <p className="text-[#5a3e35] text-lg leading-relaxed mb-6">
            Un projet né d&apos;un déménagement — le mien. En 2020, j&apos;ai quitté
            Paris pour Madrid, seule, avec une valise et beaucoup de questions
            sans réponses claires. J&apos;ai tout appris en faisant.
          </p>
          <p className="text-[#5a3e35] text-lg leading-relaxed mb-6">
            Aujourd&apos;hui je construis la ressource que j&apos;aurais aimé avoir :
            des guides pratiques, des infos honnêtes, des contacts utiles.
            Pour que ton installation soit une aventure, pas un parcours du
            combattant.
          </p>
          <Link
            href="/mon-histoire"
            className="inline-flex items-center gap-2 text-[#C8614A] font-semibold hover:gap-3 transition-all mb-8"
          >
            Lire mon histoire →
          </Link>
          <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-[#2C1810]">
            C&apos;est en train de se construire — et tu peux en faire partie.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10 leading-relaxed">
            On prépare des guides pratiques sur le logement, les démarches
            administratives, les quartiers, le travail à Madrid et bien plus.
            Laisse ton email pour ne rien rater.
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
        <p className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2">
          Madrid & Toi
        </p>
        <p className="text-[#F5ECD7]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
        <p className="text-[#F5ECD7]/20 text-xs mt-2">
          <a href="https://storyset.com/people" className="hover:text-[#F5ECD7]/40 transition-colors">People illustrations by Storyset</a>
        </p>
      </footer>
    </div>
  );
}
