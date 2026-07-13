import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: "S'installer à Madrid : le guide complet pour les Français",
  description:
    "Tout ce qu'il faut savoir pour s'installer à Madrid : logement, NIE, travail, déménagement, vie quotidienne. Le guide pratique des Français expatriés à Madrid.",
  openGraph: {
    title: "S'installer à Madrid : le guide complet pour les Français",
    description:
      "Tout ce qu'il faut savoir pour s'installer à Madrid : logement, NIE, travail, déménagement, vie quotidienne.",
  },
};

const popularTags = [
  { label: "Obtenir son NIE", href: "/papiers/nie" },
  { label: "Les quartiers", href: "/logement/quartiers" },
  { label: "Devenir autónomo", href: "/travailler/freelance" },
  { label: "Ouvrir un compte", href: "/papiers/compte-bancaire" },
];

const stats = [
  { n: "35 000", l: "Français vivent à Madrid" },
  { n: "900 €", l: "Loyer moyen pour un T1" },
  { n: "1 221 €", l: "SMI espagnol en 2026" },
  { n: "300 j", l: "De soleil par an" },
];

const journey = [
  {
    num: "1",
    when: "Avant le départ",
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
    when: "Le départ",
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
    when: "Le premier mois",
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
    when: "S'installer",
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

const guides = [
  {
    name: "Logement",
    tag: "Le plus consulté",
    desc: "Trouver, visiter et signer sans se faire avoir.",
    count: "12 guides",
    href: "/logement",
  },
  {
    name: "Paperasses",
    tag: "Indispensable",
    desc: "NIE, padrón, sécu : l'ordre malin des démarches.",
    count: "7 guides",
    href: "/papiers",
  },
  {
    name: "Travail",
    tag: "Gagner sa vie",
    desc: "Salariat, autónomo ou télétravail depuis Madrid.",
    count: "5 guides",
    href: "/travailler",
  },
  {
    name: "Vie quotidienne",
    tag: "S'installer",
    desc: "Banque, santé, transports, bonnes adresses.",
    count: "6 guides",
    href: "/vivre",
  },
];

const otherGuides = [
  { cat: "Paperasses", t: "NIE : la procédure étape par étape", href: "/papiers/nie" },
  { cat: "Travail", t: "Devenir autónomo : cotisations et tarif réduit", href: "/travailler/freelance" },
  { cat: "Se décider", t: "Combien coûte vraiment un mois à Madrid ?", href: "/se-decider/budget" },
  { cat: "Vivre", t: "L'Abono Transporte, ça vaut le coup ?", href: "/vivre/transports" },
  { cat: "Logement", t: "Les quartiers : lequel choisir selon ton profil", href: "/logement/quartiers" },
];

const faqs = [
  {
    tag: "Logement",
    q: "Trouver un appart depuis la France ?",
    a: "Possible mais risqué à distance. Les vrais sites, les arnaques à repérer et la stratégie une fois sur place.",
    href: "/logement/appartement",
  },
  {
    tag: "Paperasses",
    q: "Faut-il un NIE avant d'arriver ?",
    a: "Pas pour venir, mais indispensable pour louer, travailler ou ouvrir un compte. L'ordre malin des démarches.",
    href: "/papiers/nie",
  },
  {
    tag: "Quartiers",
    q: "Où habiter en débarquant ?",
    a: "Malasaña, Lavapiés, Chamberí… Le comparatif pour choisir selon ton budget et ton style de vie.",
    href: "/logement/quartiers",
  },
  {
    tag: "Santé",
    q: "Comment marche la sécu espagnole ?",
    a: "Affiliation via le travail ou l'autónomo, médico de cabecera, urgences : on démêle tes droits et le bon timing.",
    href: "/papiers/secu",
  },
  {
    tag: "Travail",
    q: "Devenir autónomo, compliqué ?",
    a: "Moins qu'on croit avec le mode d'emploi : inscription, cotisations RETA et tarif réduit la première année.",
    href: "/travailler/freelance",
  },
  {
    tag: "Budget",
    q: "Vivre à Madrid coûte combien ?",
    a: "Un budget mensuel réaliste selon que tu viens seul, en couple ou en famille.",
    href: "/se-decider/budget",
  },
];

const footGroups = [
  {
    title: "Logement",
    links: [
      { label: "Où chercher", href: "/logement/appartement" },
      { label: "Les quartiers", href: "/logement/quartiers" },
      { label: "Prix au m²", href: "/logement/prix" },
      { label: "Colocation", href: "/logement/colocation" },
    ],
  },
  {
    title: "Paperasses",
    links: [
      { label: "Obtenir son NIE", href: "/papiers/nie" },
      { label: "Empadronamiento", href: "/papiers/padron" },
      { label: "Sécurité sociale", href: "/papiers/secu" },
      { label: "Ouvrir un compte", href: "/papiers/compte-bancaire" },
    ],
  },
  {
    title: "Travail & vie",
    links: [
      { label: "Trouver un emploi", href: "/travailler/emploi" },
      { label: "Devenir autónomo", href: "/travailler/freelance" },
      { label: "Se déplacer", href: "/vivre/transports" },
      { label: "Sortir à Madrid", href: "/vivre/sortir" },
    ],
  },
  {
    title: "Le site",
    links: [
      { label: "Mon histoire", href: "/mon-histoire" },
      { label: "Newsletter", href: "/#newsletter" },
      { label: "La communauté française", href: "/communaute/francais-madrid" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-32 md:pt-40 pb-16 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,#FFC24B55,#F2A65A22_45%,transparent_68%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              Le guide des Français à Madrid
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#33251E] leading-[1.02] mb-6">
              S&apos;installer à Madrid,{" "}
              <span className="text-[#F0552F]">sans galérer</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#7C6A5C] mb-8 leading-relaxed max-w-lg">
              Logement, NIE, travail, santé, budget… Tous les guides pour préparer
              ton départ et réussir ton installation — écrits par quelqu&apos;un qui
              est passé par là.
            </p>

            <div className="max-w-md">
              <SearchBox variant="hero" placeholder="Que veux-tu savoir ? Ex : obtenir mon NIE" />
            </div>
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <span className="font-[family-name:var(--font-heading)] font-bold text-xs uppercase tracking-wide text-[#7C6A5C]">
                Populaire :
              </span>
              {popularTags.map((tag) => (
                <Link
                  key={tag.href}
                  href={tag.href}
                  className="text-sm font-medium text-[#33251E] bg-white border border-[#F2A65A]/45 rounded-full px-3.5 py-1.5 hover:bg-[#F0552F] hover:text-white hover:border-[#F0552F] transition-colors"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10 w-24 h-24 rounded-full bg-[radial-gradient(circle_at_50%_40%,#FFC24B,#F0552F)] text-white flex flex-col items-center justify-center shadow-[0_16px_30px_-12px_rgba(240,85,47,0.6)]">
              <span className="font-[family-name:var(--font-heading)] font-extrabold text-3xl leading-none">300</span>
              <span className="font-[family-name:var(--font-heading)] font-semibold text-[9px] uppercase text-center leading-tight mt-1">
                jours de<br />soleil / an
              </span>
            </div>
            <div className="relative rounded-3xl p-2.5 bg-white border border-[#F2A65A]/30 shadow-[0_40px_80px_-40px_rgba(36,24,19,0.5)]">
              <PhotoPlaceholder label="Madrid" className="w-full h-[380px] rounded-2xl" />
            </div>
            <div className="absolute -bottom-5 right-6 z-10 font-[family-name:var(--font-heading)] font-semibold text-sm text-[#33251E] bg-white rounded-full px-4 py-2.5 shadow-[0_14px_30px_-12px_rgba(36,24,19,0.35)] border border-[#F2A65A]/30">
              <span className="font-extrabold text-[#F0552F] mr-1">+35 000</span>
              Français y vivent déjà
            </div>
          </div>
        </div>
      </header>

      {/* Trust bar */}
      <section className="max-w-5xl mx-auto px-6 -mt-9 relative z-[5] mb-2" aria-label="Chiffres-clés">
        <div className="bg-[#241813] rounded-[22px] p-8 grid grid-cols-2 sm:grid-cols-4 shadow-[0_30px_70px_-34px_rgba(36,24,19,0.6)]">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`text-center px-4 py-1.5 ${i < stats.length - 1 ? "sm:border-r sm:border-[#F6E7D9]/10" : ""}`}
            >
              <p className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl tracking-tight text-[#FFC24B] leading-none">
                {s.n}
              </p>
              <p className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wide text-[#F6E7D9]/75 mt-2.5 leading-snug">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ton installation, étape par étape */}
      <section id="commencer" className="bg-[#FFFBF5] pt-20 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              Tu débarques ? Commence ici
            </p>
            <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl tracking-tight text-[#33251E] mb-4">
              Ton installation, étape par étape
            </h2>
            <p className="text-lg text-[#7C6A5C] max-w-xl">
              Pas besoin de tout lire. Suis le parcours dans l&apos;ordre : chaque
              étape te renvoie vers les guides détaillés.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {journey.map((j) => (
              <div
                key={j.num}
                className="bg-white rounded-[20px] p-7 border border-[#F2A65A]/20 shadow-[0_16px_40px_-30px_rgba(36,24,19,0.4)] hover:-translate-y-1 hover:shadow-[0_26px_50px_-28px_rgba(36,24,19,0.48)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-11 h-11 rounded-full bg-[#F0552F] text-white font-[family-name:var(--font-heading)] font-extrabold text-lg flex items-center justify-center">
                    {j.num}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase tracking-wide text-[#F0552F] bg-[#FBEBDD] rounded-full px-3 py-1.5">
                    {j.when}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-heading)] font-bold text-xl tracking-tight text-[#33251E] mb-2">
                  {j.titre}
                </p>
                <p className="text-[#7C6A5C] text-[15px] leading-relaxed mb-4">{j.desc}</p>
                <div className="flex flex-wrap gap-2 border-t border-[#FBEBDD] pt-4">
                  {j.liens.map((lien) => (
                    <Link
                      key={lien.href}
                      href={lien.href}
                      className="text-sm font-medium text-[#33251E] bg-[#FFFBF5] rounded-full px-3 py-1.5 hover:bg-[#FBEBDD] hover:text-[#F0552F] transition-colors"
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

      {/* Guides grid */}
      <section className="bg-[#FFFBF5] pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              Les grands thèmes
            </p>
            <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl tracking-tight text-[#33251E]">
              Explore par sujet
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group block bg-white rounded-[18px] overflow-hidden border border-[#F2A65A]/25 shadow-[0_16px_40px_-28px_rgba(36,24,19,0.4)] hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-26px_rgba(36,24,19,0.5)] transition-all"
              >
                <div className="relative">
                  <PhotoPlaceholder label={g.name} className="h-[140px]" />
                  <span className="absolute top-3 left-3 font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase tracking-wide text-white bg-[#F0552F] rounded-full px-3 py-1">
                    {g.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-[family-name:var(--font-heading)] font-bold text-xl text-[#33251E] mb-1.5 group-hover:text-[#F0552F] transition-colors">
                    {g.name}
                  </p>
                  <p className="text-[#7C6A5C] text-sm leading-relaxed mb-4">{g.desc}</p>
                  <div className="flex items-center justify-between font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wide text-[#F0552F]">
                    {g.count}
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* À la une + autres guides */}
      <section className="bg-[#FBEBDD] py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-11 items-start">
          <div>
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              À la une
            </p>
            <Link
              href="/logement/appartement"
              className="group block bg-white rounded-[20px] overflow-hidden border border-[#F2A65A]/25 shadow-[0_20px_46px_-30px_rgba(36,24,19,0.45)] hover:-translate-y-1 hover:shadow-[0_30px_56px_-28px_rgba(36,24,19,0.5)] transition-all"
            >
              <div className="relative">
                <PhotoPlaceholder label="Article à la une" className="h-[240px]" />
                <span className="absolute top-3 left-3 font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase tracking-wide text-white bg-[#F0552F] rounded-full px-3 py-1">
                  Guide complet
                </span>
              </div>
              <div className="p-7">
                <p className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wide text-[#F0552F] mb-2.5">
                  Logement · Mis à jour en mars 2026
                </p>
                <p className="font-[family-name:var(--font-heading)] font-extrabold text-2xl sm:text-[27px] tracking-tight text-[#33251E] mb-3 leading-snug">
                  Trouver un logement à Madrid sans se faire avoir
                </p>
                <p className="text-[#7C6A5C] text-base leading-relaxed mb-4">
                  Les vrais sites, les arnaques classiques et comment décrypter un
                  bail espagnol. Le guide que j&apos;aurais aimé avoir en arrivant.
                </p>
                <span className="font-[family-name:var(--font-heading)] font-bold text-sm uppercase tracking-wide text-[#F0552F]">
                  Lire le guide →
                </span>
              </div>
            </Link>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              D&apos;autres guides à explorer
            </p>
            <div className="flex flex-col">
              {otherGuides.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="grid grid-cols-[auto_1fr] items-center gap-3.5 py-4 border-t border-[#F2A65A]/25 hover:pl-2.5 transition-[padding]"
                >
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[10px] uppercase tracking-wide text-[#F0552F] bg-[#FFFBF5] rounded-full px-2.5 py-1 whitespace-nowrap">
                    {a.cat}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] font-semibold text-base text-[#33251E] leading-tight">
                    {a.t}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FFFBF5] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 max-w-xl">
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm tracking-[0.1em] uppercase text-[#F0552F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC24B] inline-block" />
              Les vraies questions
            </p>
            <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl tracking-tight text-[#33251E]">
              Ce que tout le monde se demande avant de partir
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faqs.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col bg-white rounded-[18px] p-6 border border-[#F2A65A]/20 shadow-[0_14px_36px_-28px_rgba(36,24,19,0.4)] hover:-translate-y-1 hover:border-[#F0552F]/40 hover:shadow-[0_26px_48px_-26px_rgba(36,24,19,0.42)] transition-all"
              >
                <span className="self-start font-[family-name:var(--font-heading)] font-bold text-[11px] uppercase tracking-wide text-[#F0552F] bg-[#FBEBDD] rounded-full px-3 py-1.5 mb-4">
                  {q.tag}
                </span>
                <p className="font-[family-name:var(--font-heading)] font-bold text-xl tracking-tight text-[#33251E] mb-2.5">
                  {q.q}
                </p>
                <p className="text-[#7C6A5C] text-sm leading-relaxed mb-4 flex-1">{q.a}</p>
                <span className="font-[family-name:var(--font-heading)] font-bold text-xs uppercase tracking-wide text-[#F0552F]">
                  Lire la réponse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-[#241813] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block font-[family-name:var(--font-heading)] font-extrabold text-6xl text-[#F0552F] leading-none mb-2 select-none">
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-heading)] font-medium not-italic text-2xl sm:text-3xl leading-snug tracking-tight text-[#F6E7D9] mb-8">
            1er septembre 2020. Deux valises, une coloc de 6 à Malasaña — un
            mélange improbable de nationalités. Et une sensation immédiate,
            inexplicable, d&apos;être exactement là où je devais être.
          </p>
          <div className="inline-flex items-center gap-3.5">
            <span className="w-[50px] h-[50px] rounded-full bg-[radial-gradient(circle_at_40%_35%,#F2A65A,#F0552F)] text-white font-[family-name:var(--font-heading)] font-extrabold text-xl flex items-center justify-center">
              C
            </span>
            <span className="text-left">
              <span className="block font-[family-name:var(--font-heading)] font-bold text-base text-[#F6E7D9]">
                Chloé, depuis Madrid
              </span>
              <Link
                href="/mon-histoire"
                className="block font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wide text-[#FFC24B] mt-0.5 hover:opacity-80 transition-opacity"
              >
                Lire mon histoire →
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative overflow-hidden bg-[#F0552F] py-20 px-6">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[320px] bg-[radial-gradient(circle,#FFC24B70,transparent_66%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Le guide, chaque dimanche
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-9 leading-relaxed">
            Mes trouvailles, mes galères, les démarches à ne pas rater. Un email
            par semaine, rien d&apos;autre.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#F6E7D9]/85 font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wide mt-5">
            Rejoins la communauté · Zéro spam · Désinscription en un clic
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#241813] pt-16 pb-8 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.3fr_2.2fr] gap-10 pb-9 border-b border-[#F6E7D9]/10">
          <div>
            <p className="font-[family-name:var(--font-heading)] font-extrabold text-2xl tracking-tight text-[#F6E7D9] mb-2.5">
              Madrid &amp; Toi
            </p>
            <p className="text-[#F6E7D9]/60 text-[15px] leading-relaxed max-w-[300px]">
              De Madrid al cielo — guides honnêtes pour s&apos;installer à Madrid
              quand on est français.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footGroups.map((fg) => (
              <div key={fg.title} className="flex flex-col gap-3">
                <p className="font-[family-name:var(--font-heading)] font-bold text-xs uppercase tracking-wide text-[#FFC24B] mb-1">
                  {fg.title}
                </p>
                {fg.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[#F6E7D9]/80 text-[15px] hover:opacity-100 hover:text-[#FFC24B] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-6 text-[#F6E7D9]/55 font-[family-name:var(--font-heading)] font-medium text-xs uppercase tracking-wide text-center">
          © {new Date().getFullYear()} Madrid &amp; Toi · Fait avec ☀️ depuis Madrid
        </div>
      </footer>
    </div>
  );
}
