import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/courses',
  },
  title: "Faire ses courses à Madrid — Madrid & Toi",
  description:
    "Supermarchés, marchés municipaux, El Rastro — tout ce qu'il faut savoir pour faire ses courses à Madrid sans se ruiner.",
};

export default function CoursesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Tout savoir sur les courses à Madrid",
      description: "Supermarchés, marchés municipaux, El Rastro — tout ce qu'il faut savoir pour faire ses courses à Madrid sans se ruiner.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/vivre/courses",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/courses" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Courses à Madrid", item: "https://madrid-et-toi.com/vivre/courses" },
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
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Vivre à Madrid
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Tout savoir sur{" "}
            <span className="not-italic font-bold text-[#d6442a]">les courses à Madrid</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Mercadona, marchés municipaux, El Rastro — faire ses courses à
            Madrid, c&apos;est bien différent de Paris. Prix plus bas, horaires
            surprenants, produits locaux incontournables. Voici tout ce
            qu&apos;il faut savoir pour s&apos;y retrouver dès les premiers
            jours.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Panier hebdo : 80–120 €
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              Mercadona : ~800 magasins en Espagne
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">
              40+ marchés municipaux à Madrid
            </span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Les supermarchés */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les supermarchés — lesquels choisir
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Madrid est bien équipée en supermarchés de tous formats. Pour les
            Français fraîchement installés, le premier réflexe est souvent de
            chercher un équivalent du Franprix ou du Monoprix — mais les usages
            locaux sont différents.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                Mercadona
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                La référence absolue en Espagne. Rapport qualité-prix
                imbattable, produits frais de qualité, et surtout la marque
                maison <strong>Hacendado</strong> qui couvre tout — des pâtes
                au fromage en passant par les surgelés. On y trouve tout le
                nécessaire du quotidien à des prix très raisonnables. Présent
                dans presque tous les quartiers de Madrid.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                Lidl et Aldi
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Incontournables pour les promos de la semaine et les produits
                frais à prix cassés. Le Lidl espagnol a une très bonne
                réputation pour les fruits, légumes et charcuterie. À surveiller
                pour les semaines à thème (produits italiens, français, etc.).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                Alcampo et Carrefour
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Les formats grand surface, souvent en périphérie ou dans les
                centres commerciaux. Idéal pour faire le plein une fois par
                mois — large choix, produits importés (et parfois quelques
                produits français), électroménager, vêtements. À éviter pour
                les petites courses quotidiennes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                DIA
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le petit format de quartier, présent partout en ville. Prix
                compétitifs, surface modeste. Idéal pour les dépannages ou
                quand on habite loin d&apos;un Mercadona. Gamme limitée mais
                l&apos;essentiel bien couvert.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-body)] font-bold text-[#171712] text-lg mb-2">
                El Corte Inglés Supermercado
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le segment premium. Produits importés, vins de qualité, fromages
                affinés. Et surtout le <strong>Gourmet Experience</strong> au
                dernier étage de certains magasins — un espace gastronomique
                haut de gamme avec une vue imprenable sur la ville. Pour se
                faire plaisir ou trouver des produits introuvables ailleurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les marchés municipaux */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les marchés municipaux — le cœur du quartier
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Madrid compte plus de 40 marchés municipaux couverts, chacun ancré
            dans son quartier. Ce sont des lieux de vie autant que des lieux de
            courses — producteurs locaux, poissonniers, bouchers, fromagers.
            Bien moins chers que les épiceries fines, et infiniment plus
            savoureux.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] mb-1">
                Mercado de Antón Martín
              </p>
              <p className="text-[#171712]/70 text-xs mb-2">
                <Link
                  href="/logement/quartiers/lavapies"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Lavapiés
                </Link>
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Un marché vivant, très ancré dans le quartier. Produits frais
                de qualité, atmosphère cosmopolite. Quelques stands de street
                food le midi pour manger sur place.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] mb-1">
                Mercado de la Cebada
              </p>
              <p className="text-[#171712]/70 text-xs mb-2">
                <Link
                  href="/logement/quartiers/la-latina"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  La Latina
                </Link>
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Grand marché peu touristique, fréquenté surtout par les
                habitants du quartier. Large choix de poissons, viandes et
                légumes. Idéal pour sentir le vrai Madrid de proximité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] mb-1">
                Mercado de San Miguel
              </p>
              <p className="text-[#171712]/70 text-xs mb-2">Sol / Centro</p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le plus touristique des marchés madrilènes — tapas, vins,
                jamón, huîtres. Magnifique architecture en fer forgé. Plutôt
                pour une dégustation que pour les courses du quotidien.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#171712] mb-1">
                Mercado de Maravillas
              </p>
              <p className="text-[#171712]/70 text-xs mb-2">
                Bravo Murillo / Tetuán
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le plus grand marché couvert de Madrid. Très local, très vivant,
                pas du tout touristique. Prix imbattables sur les fruits,
                légumes et viandes. Le vrai quotidien madrilène.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm sm:col-span-2">
              <p className="font-semibold text-[#171712] mb-1">
                Mercado de Vallehermoso
              </p>
              <p className="text-[#171712]/70 text-xs mb-2">
                <Link
                  href="/logement/quartiers/chamberi"
                  className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                >
                  Chamberí
                </Link>
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le marché artisanal et bio du quartier Chamberí. Producteurs
                locaux, produits de saison, stands de qualité. Une adresse
                incontournable pour qui cherche des produits soignés sans passer
                par le supermarché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Rastro — section dark */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            El Rastro — le marché aux puces du dimanche
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Chaque dimanche matin, de 9h à 15h, la{" "}
            <strong className="text-white">Ribera de Curtidores</strong> et les
            rues alentour se transforment en l&apos;un des plus grands marchés
            aux puces d&apos;Europe. Des centaines de stands : vêtements
            vintage, vinyles, antiquités, outils, bibelots, objets insolites.
          </p>
          <p className="text-[#fbe8e4]/80 leading-relaxed mb-8">
            Le quartier de{" "}
            <Link
              href="/logement/quartiers/la-latina"
              className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              La Latina
            </Link>{" "}
            est l&apos;épicentre du Rastro. Après le marché, les habitants du
            quartier se retrouvent pour le vermut dans les bars des rues
            adjacentes — une tradition dominicale immuable. C&apos;est aussi
            le meilleur moment pour faire du troc et dénicher de bonnes affaires
            auprès de particuliers qui vident leurs caves.
          </p>

          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Comprendre Madrid passe par ses marchés. Le Rastro le dimanche,
              la Cebada le mardi matin, Vallehermoso le samedi — chaque marché
              raconte un quartier, une façon de vivre.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Spécificités espagnoles */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les spécificités espagnoles à connaître
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Faire ses courses à Madrid, c&apos;est aussi apprendre les codes
            locaux. Quelques points qui surprennent souvent les Français à
            l&apos;arrivée.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                La siesta des petits commerces
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Certains commerces de quartier — boulangeries, boucheries,
                épiceries indépendantes — ferment encore entre{" "}
                <strong>14h et 17h</strong>. Les grandes enseignes (Mercadona,
                Lidl, Carrefour) sont ouvertes en continu, généralement de{" "}
                <strong>9h à 22h</strong>. Les dimanches et jours fériés, la
                plupart des supermarchés ferment — penser à anticiper.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Le jamón ibérico — un univers à part
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le jamón ibérico de bellota est une institution. Les grandes
                marques de référence sont <strong>Cinco Jotas</strong> et{" "}
                <strong>Joselito</strong>. Dans les supermarchés, on trouve du
                jamón serrano à partir de 3–5 €/100g. Dans les charcuteries
                spécialisées (jamonería), les pièces entières sont exposées à
                la vue de tous — spectacle garanti.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Le rayon fromages et les légumes de saison
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le fromage espagnol mérite qu&apos;on s&apos;y attarde :
                manchego (de brebis, affiné ou frais), tetilla (galicien, doux),
                idiazábal (basque, fumé). Dans les marchés municipaux, les
                stands de légumes proposent des produits de saison d&apos;une
                fraîcheur remarquable — et à des prix bien inférieurs à la
                grande surface.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-[#171712] mb-2">
                Les fêtes locales — attention portes closes
              </p>
              <p className="text-[#171712] text-sm leading-relaxed">
                Le <strong>2 mai</strong> (Fête de la Communauté de Madrid), le{" "}
                <strong>15 août</strong>, le <strong>12 octobre</strong> et les
                fêtes de Noël (24–26 décembre) : la plupart des commerces
                ferment, y compris les supermarchés. Il vaut mieux faire le
                plein la veille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu del día */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le menu del día — manger pour pas cher
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-8">
            Pas strictement des courses, mais ça fait partie du quotidien
            alimentaire à Madrid : le <strong>menú del día</strong>, c&apos;est
            l&apos;un des meilleurs deals de la ville. Pour{" "}
            <strong>12 à 15 €</strong>, tu as un repas complet — entrée, plat,
            dessert et boisson (eau, vin ou bière). Souvent fait maison, souvent
            copieux.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <p className="font-semibold text-[#171712] mb-3">
              Où trouver les meilleurs menus ?
            </p>
            <p className="text-[#171712] text-sm leading-relaxed">
              Autour des zones de bureaux (Azca, Paseo de la Castellana) à
              l&apos;heure du déjeuner, dans les restaurants de quartier de{" "}
              <Link
                href="/logement/quartiers/lavapies"
                className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
              >
                Lavapiés
              </Link>{" "}
              (cuisine du monde à des prix imbattables) et de{" "}
              <Link
                href="/logement/quartiers/malasana"
                className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
              >
                Malasaña
              </Link>{" "}
              (plus tendance mais toujours abordable). Le menu est généralement
              servi de <strong>13h30 à 16h</strong>, du lundi au vendredi. Le
              week-end, rares sont les restaurants qui le proposent encore.
            </p>
          </div>

          <div className="bg-[#d6442a]/10 border border-[#d6442a]/30 rounded-2xl px-5 py-4">
            <p className="text-[#171712] text-sm leading-relaxed">
              <strong>Astuce :</strong> les menus les moins chers sont souvent
              dans les rues perpendiculaires aux grands axes. Éviter les
              restaurants en façade de place — on paye la vue, pas la qualité.
            </p>
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
              href="/vivre/transports"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Transports à Madrid
            </Link>
            <Link
              href="/vivre/sortir"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Sortir à Madrid
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Apprendre l'espagnol à Madrid" href="/vivre/espagnol" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos bons plans du quotidien dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Marchés, adresses locales, astuces pour s&apos;installer — les
            prochains guides sur la vie à Madrid arrivent bientôt.
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
