import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/communaute/francais-madrid',
  },
  title: "La communauté française à Madrid — Madrid & Toi",
  description:
    "35 000 Français vivent à Madrid. Associations, groupes, événements — comment trouver ta communauté et ne pas te sentir seul(e).",
};

export default function FrancaisMadridPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "La communauté française à Madrid",
      description: "35 000 Français vivent à Madrid. Associations, groupes, événements — comment trouver ta communauté et ne pas te sentir seul(e).",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/communaute/francais-madrid",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/communaute/francais-madrid" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Communauté", item: "https://madrid-et-toi.com/communaute" },
        { "@type": "ListItem", position: 3, name: "Français à Madrid", item: "https://madrid-et-toi.com/communaute/francais-madrid" },
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
            href="/communaute"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Communauté
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Communauté
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            La communauté —{" "}
            <span className="not-italic font-bold text-[#d6442a]">les Français à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Environ 35 000 Français vivent à Madrid — l&apos;une des plus grandes
            communautés françaises d&apos;Europe. Des associations officielles
            aux groupes informels, en passant par les intercambios et les
            événements culturels : tu n&apos;es pas seul à débarquer.
          </p>
          <AuthorBadge date="mars 2026" />

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-1">
                ~35 000
              </p>
              <p className="text-[#171712] text-sm font-semibold">Français</p>
              <p className="text-[#171712]/60 text-xs mt-1">Inscrits au consulat</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-1">
                1ère
              </p>
              <p className="text-[#171712] text-sm font-semibold">Communauté étrangère</p>
              <p className="text-[#171712]/60 text-xs mt-1">À Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-1">
                1913
              </p>
              <p className="text-[#171712] text-sm font-semibold">Institut français</p>
              <p className="text-[#171712]/60 text-xs mt-1">Fondé cette année-là</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les associations officielles */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les associations officielles
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Madrid dispose d&apos;un réseau structuré d&apos;associations pour
            accueillir et soutenir les francophones. Quatre structures méritent
            d&apos;être connues dès l&apos;arrivée.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                Madrid Accueil
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                L&apos;association dédiée à faciliter l&apos;installation des
                nouveaux arrivants francophones. Cours de langue (espagnol),
                visites de Madrid, rencontres thématiques, groupes
                d&apos;entraide. La porte d&apos;entrée idéale pour les
                premières semaines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                CCIFE — Chambre de Commerce France-Espagne
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le réseau professionnel franco-espagnol. Événements networking,
                annuaire d&apos;entreprises françaises à Madrid, aide à
                l&apos;implantation professionnelle. Incontournable si tu
                travailles dans un contexte franco-espagnol.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                Institut français de Madrid
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Cours de langue française et espagnole, médiathèque
                franco-espagnole, expositions, concerts, cinéma, conférences.
                Situé <em>Calle Marqués de la Ensenada 10</em>. Un point de
                rencontre culturel vivant, fondé en 1913.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                ADFE-UFE — Association des Français de Madrid
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Défense des intérêts des Français établis à l&apos;étranger.
                Permanences consulaires, aide aux démarches administratives,
                lien avec les institutions françaises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes informels et réseaux sociaux */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les groupes informels et réseaux sociaux
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Au-delà des associations, une communauté très active existe en ligne —
            souvent le premier réflexe avant même d&apos;arriver à Madrid.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] text-sm mb-2">Facebook</p>
              <ul className="space-y-1">
                {[
                  "Français à Madrid (plus de 15 000 membres)",
                  "Expats Paris → Madrid",
                  "Francophones de Madrid",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#171712] text-sm"
                  >
                    <span className="text-[#d6442a] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] text-sm mb-2">Pro & tech</p>
              <ul className="space-y-1">
                {[
                  "French Tech Madrid (LinkedIn)",
                  "Groupes WhatsApp via Madrid Accueil",
                  "Reddit r/Madrid (anglophone, utile)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#171712] text-sm"
                  >
                    <span className="text-[#d6442a] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Les intercambios — section sombre */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Les intercambios
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Le concept espagnol d&apos;échange de langues est l&apos;un des
            meilleurs outils pour s&apos;intégrer à Madrid. Le principe : tu
            enseignes le français à quelqu&apos;un, et cette personne
            t&apos;enseigne l&apos;espagnol, autour d&apos;un café ou
            d&apos;un verre.
          </p>

          <div className="space-y-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm mb-2">
                Où trouver des intercambios
              </p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                Cafés comme Café Lago ou El Jardín Secreto organisent des
                sessions hebdomadaires. Meetup.com (&quot;Language Exchange
                Madrid&quot;), InterNations Madrid. Ces événements attirent
                autant des locaux que des expatriés de toutes nationalités.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#d6442a] font-semibold text-sm mb-2">
                Pourquoi ça marche
              </p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                C&apos;est l&apos;une des façons les plus naturelles de
                rencontrer à la fois des Madrilènes et d&apos;autres expatriés.
                Le format est détendu, sans engagement, et l&apos;utilité est
                immédiate : ton{" "}
                <Link
                  href="/vivre/espagnol"
                  className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  espagnol
                </Link>{" "}
                progresse beaucoup plus vite que dans un cours classique.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Un intercambio par semaine, c&apos;est souvent comme ça que
              les expatriés finissent par trouver leur cercle à Madrid.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Les événements et rendez-vous */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les événements et rendez-vous
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            La vie communautaire française à Madrid est rythmée par des
            rendez-vous réguliers, certains devenus incontournables.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Fête nationale — 14 juillet",
                detail:
                  "Célébration à l'Institut français de Madrid. L'événement annuel qui rassemble la communauté française et ses amis espagnols.",
              },
              {
                titre: "Beaujolais nouveau",
                detail:
                  "Tradition bien vivante à Madrid. Soirées organisées par les bars français et l'Institut culturel fin novembre.",
              },
              {
                titre: "French Tech Madrid events",
                detail:
                  "Événements mensuels dédiés aux profils tech, startups et entrepreneurs français installés à Madrid.",
              },
              {
                titre: "Spectacles en français à l'Institut",
                detail:
                  "Films, pièces de théâtre et concerts en langue française. La programmation est régulièrement renouvelée.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="font-semibold text-[#171712] text-sm mb-2">
                  {item.titre}
                </p>
                <p className="text-[#171712] text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#f2f0e9] rounded-2xl p-5">
            <p className="font-semibold text-[#171712] text-sm mb-1">
              Consulat de France à Madrid
            </p>
            <p className="text-[#171712] text-sm leading-relaxed">
              Pour les démarches officielles :{" "}
              <em>Calle Salustiano Olózaga 9</em>, Madrid. Sur rendez-vous
              via le portail du Ministère de l&apos;Europe et des Affaires
              étrangères.{" "}
              <Link
                href="/papiers/documents-francais"
                className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
              >
                CNI, passeport, registre consulaire : notre guide complet
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Les quartiers */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les quartiers où se concentrent les Français
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-6">
            La communauté française n&apos;est pas concentrée dans un seul
            quartier, mais certains secteurs accueillent davantage
            d&apos;expatriés — souvent en raison de la proximité des lycées
            ou de la qualité de vie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] text-sm mb-2">
                Les quartiers historiques des familles
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                <Link
                  href="/logement/quartiers/chamberi"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Chamberí
                </Link>{" "}
                et{" "}
                <Link
                  href="/logement/quartiers/salamanca"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Salamanca
                </Link>{" "}
                concentrent beaucoup de familles françaises, proches du
                Lycée français de Madrid (secteur Velázquez) et du Retiro.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] text-sm mb-2">
                Les quartiers des jeunes actifs
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                <Link
                  href="/logement/quartiers/malasana"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Malasaña
                </Link>{" "}
                et{" "}
                <Link
                  href="/logement/quartiers/chueca"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Chueca
                </Link>{" "}
                attirent de plus en plus de Français — vie de quartier animée,
                loyers encore accessibles par rapport à Salamanca.
              </p>
            </div>
          </div>

          <div className="bg-[#fbfaf6] rounded-2xl p-5">
            <p className="font-semibold text-[#171712] text-sm mb-1">
              Les lycées français à Madrid
            </p>
            <ul className="space-y-1 mt-2 mb-3">
              {[
                "Lycée français de Madrid — secteur Velázquez / Salamanca",
                "Section française au Collège Alfonso X el Sabio",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[#171712] text-sm"
                >
                  <span className="text-[#af3722] mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/vivre/ecoles"
              className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors text-sm"
            >
              Guide complet : scolariser ses enfants à Madrid →
            </Link>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/vivre/espagnol"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Apprendre l&apos;espagnol à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
            <Link
              href="/travailler/entreprises-francaises"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Entreprises françaises à Madrid
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Rejoins la communauté
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Rejoins les Français qui s&apos;installent à Madrid
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Rejoins la communauté des Français qui s&apos;installent à Madrid
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
