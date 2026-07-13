import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/sortir',
  },
  title: "Sortir à Madrid : musées gratuits, parcs, vie nocturne — Madrid & Toi",
  description:
    "Musées gratuits (Prado, Reina Sofía, Thyssen), parcs emblématiques, El Rastro, terrasses et vie nocturne. Sortir à Madrid sans se ruiner, c'est possible.",
};

export default function SortirPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Sortir à Madrid : culture, parcs et nuits longues",
      description: "Musées gratuits (Prado, Reina Sofía, Thyssen), parcs emblématiques, El Rastro, terrasses et vie nocturne. Sortir à Madrid sans se ruiner.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/vivre/sortir",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/sortir" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Sortir à Madrid", item: "https://madrid-et-toi.com/vivre/sortir" },
      ],
    },
  ];
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Vie culturelle
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Sortir à Madrid —{" "}
            <span className="not-italic font-bold text-[#F0552F]">culture, parcs et nuits longues</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Madrid est l&apos;une des capitales européennes les plus généreuses
            pour qui sait s&apos;y repérer. Des musées de classe mondiale
            accessibles gratuitement plusieurs soirs par semaine, des parcs
            immenses, un marché aux puces culte, et une vie nocturne qui démarre
            là où les autres villes s&apos;arrêtent. Le tout à des prix qui
            rendent la chose accessible à tous les budgets.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              Prado gratuit dès 18h
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              +23 musées gratuits
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">
              Menu del día 10–15 €
            </span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Les musées */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Les musées — et leurs créneaux gratuits
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Madrid abrite le &quot;triangle d&apos;or&quot; des musées
            européens : le Prado, le Reina Sofía et le Thyssen à quelques
            centaines de mètres les uns des autres. Et une bonne nouvelle :
            tous trois ouvrent leur porte gratuitement à heures fixes.
            Au total, <strong>plus de 23 musées</strong> sont accessibles
            sans payer selon les créneaux horaires.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg">
                  Museo del Prado
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] text-xs font-semibold">
                  15 € plein tarif
                </span>
              </div>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Le plus grand musée d&apos;Espagne. Vélasquez, Goya, Rubens,
                Bosch — une collection permanente parmi les plus riches au monde.
                Un passage obligé, même pour les non-initiés.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit lun–sam 18h–20h
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit dim 12h–14h
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg">
                  Museo Reina Sofía
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] text-xs font-semibold">
                  Art moderne
                </span>
              </div>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                Le musée national d&apos;art contemporain espagnol. Son chef-d&apos;œuvre
                absolu : <strong>Guernica de Picasso</strong>, l&apos;une des
                toiles les plus importantes du XX<sup>e</sup> siècle. À voir
                au moins une fois.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit lun, mer–sam 19h–21h
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit dim 12h30–14h30
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg">
                  Museo Thyssen-Bornemisza
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] text-xs font-semibold">
                  Impressionnisme
                </span>
              </div>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                La collection qui fait le pont entre les primitifs flamands et
                l&apos;art moderne : Monet, Renoir, Degas, Kandinsky, Hopper.
                Une des collections privées les plus importantes au monde, léguée
                à l&apos;État espagnol.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit le lundi (exposition permanente)
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg">
                  Museo Sorolla
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] text-xs font-semibold">
                  Coup de cœur
                </span>
              </div>
              <p className="text-[#33251E] text-sm leading-relaxed mb-3">
                La maison-atelier du peintre valencien Joaquín Sorolla, transformée
                en musée après sa mort. Le jardin andalou, les toiles lumineuses,
                l&apos;atelier intact — un endroit magnifique et souvent méconnu
                des touristes. Petite taille, grande émotion.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-xs font-semibold">
                  Gratuit sam à partir de 14h
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les parcs */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Les parcs — le poumon vert de Madrid
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Madrid est plus verte qu&apos;on ne l&apos;imagine. La ville dispose de
            plusieurs grands espaces naturels en plein centre, tous gratuits.
            Le dimanche, ils deviennent le salon des Madrilènes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg mb-2">
                Parque del Retiro
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Le Central Park de Madrid. 118 hectares en plein centre,
                avec un lac pour se promener en barque, le Palacio de Cristal
                (expositions gratuites), des roseraies, des statues et une
                palmeraie. Bondé mais festif le dimanche — c&apos;est justement
                ça l&apos;intérêt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg mb-2">
                Temple de Debod
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Un temple égyptien de 2 200 ans offert par l&apos;Égypte à
                l&apos;Espagne en remerciement pour sa participation à la
                sauvegarde d&apos;Abou Simbel. Mais c&apos;est surtout le coucher
                de soleil depuis la colline qui l&apos;entoure qui le rend
                incontournable — vue spectaculaire sur Madrid.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg mb-2">
                Casa de Campo
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Le plus grand parc de Madrid — presque 2 000 hectares à l&apos;ouest
                de la ville, accessible directement en métro. Idéal pour courir
                sur des chemins forestiers, faire du vélo ou pique-niquer loin
                de l&apos;agitation du centre. Le lac central est aussi très agréable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-heading)] font-bold text-[#33251E] text-lg mb-2">
                Parque del Oeste
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Moins connu que le Retiro, plus tranquille. Célèbre pour ses
                roseraies (la <em>Rosaleda</em>) qui accueillent chaque
                printemps un concours international. En mai–juin, la floraison
                est spectaculaire. À deux pas du Temple de Debod.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Rastro */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            El Rastro — le rituel du dimanche matin
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-6">
            Chaque dimanche de 9h à 15h, le quartier de{" "}
            <Link
              href="/logement/quartiers/la-latina"
              className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
            >
              La Latina
            </Link>{" "}
            se transforme en l&apos;un des plus grands marchés aux puces
            d&apos;Europe. Des centaines d&apos;étals s&apos;étendent sur
            plusieurs rues en pente depuis la Plaza de Cascorro : friperie,
            vinyle, antiquités, bibelots, gadgets électroniques, livres
            d&apos;occasion, artisanat.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-6">
            El Rastro, c&apos;est aussi et surtout une ambiance. Les Madrilènes
            ne viennent pas tous pour acheter — beaucoup viennent se promener,
            voir du monde, boire un café dans l&apos;une des terrasses qui débordent
            dans les ruelles alentour. Le bon plan : arriver avant 10h30 pour
            éviter la foule du déjeuner.
          </p>
          <div className="bg-[#FBEBDD] rounded-2xl p-6">
            <p className="font-semibold text-[#33251E] mb-2">La suite logique du Rastro</p>
            <p className="text-[#33251E] text-sm leading-relaxed">
              Après le marché, tout le monde migre vers les bars de La Latina
              pour des tapas et des vermouths. La Cava Baja, la Cava Alta et
              la Plaza de la Paja sont les épicentres de ce rituel dominical
              madrilène. Prévoir un budget supplémentaire.
            </p>
          </div>
        </div>
      </section>

      {/* Culture à petit prix */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            La culture à petit prix
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Madrid regorge d&apos;options pour profiter sans dépenser. Les
            institutions culturelles ont une vocation publique très marquée —
            concerts gratuits, bibliothèques de qualité, cinéma accessible.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#F0552F] font-bold flex-shrink-0 mt-0.5">—</span>
              <div>
                <p className="font-semibold text-[#33251E] text-sm mb-1">
                  Le menu del día — l&apos;institution espagnole du déjeuner
                </p>
                <p className="text-[#33251E] text-sm leading-relaxed">
                  Entre 10 et 15 €, vous obtenez un repas complet : entrée,
                  plat, dessert et boisson. Servi de 13h30 à 16h dans quasiment
                  tous les restaurants du quartier. La meilleure façon de manger
                  bien et copieux sans se ruiner — ici, c&apos;est le repas
                  principal de la journée.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#F0552F] font-bold flex-shrink-0 mt-0.5">—</span>
              <div>
                <p className="font-semibold text-[#33251E] text-sm mb-1">
                  Concerts en plein air — les Veranos de la Villa
                </p>
                <p className="text-[#33251E] text-sm leading-relaxed">
                  L&apos;été, la Communauté de Madrid organise un festival
                  culturel pluri-disciplinaire avec des dizaines de concerts,
                  spectacles de rue et projections souvent gratuits ou à prix
                  très réduit. S&apos;ajoutent les fêtes de quartier
                  (verbenas), où scènes et fanfares animent les places chaque
                  week-end de juin à septembre.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#F0552F] font-bold flex-shrink-0 mt-0.5">—</span>
              <div>
                <p className="font-semibold text-[#33251E] text-sm mb-1">
                  Cinéma en version originale
                </p>
                <p className="text-[#33251E] text-sm leading-relaxed">
                  Le mardi est souvent le jour du tarif réduit dans les salles
                  madrilènes (6 à 7 €). Pour les films en VO sous-titrés,
                  chercher la mention{" "}
                  <strong>versión original subtitulada (VOS)</strong>. Les
                  cinémas Yelmo, Cinesa et les salles indépendantes proposent
                  toutes des séances en VO.
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#F0552F] font-bold flex-shrink-0 mt-0.5">—</span>
              <div>
                <p className="font-semibold text-[#33251E] text-sm mb-1">
                  Les bibliothèques publiques
                </p>
                <p className="text-[#33251E] text-sm leading-relaxed">
                  La Biblioteca Regional de Madrid (Paseo de Recoletos) est
                  une belle institution gratuite avec une collection importante,
                  des espaces de travail et des expositions régulières. Les
                  bibliothèques de quartier (bibliotecas municipales) offrent
                  aussi presses internationale, internet et salles silencieuses.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Vie nocturne */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            La vie nocturne — Madrid commence tard
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Si tu arrives de Paris ou de Lyon, prépare-toi à revoir tes
            horaires. À Madrid, on dîne à 21h30, on sort à 23h, et les clubs
            commencent à se remplir à 2h du matin. C&apos;est une autre
            culture du temps — personne ne rentre avant l&apos;aube un samedi.
            Et ça ne choque personne.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-xs mb-2">
                Bars alternatifs
              </p>
              <p className="font-semibold text-[#33251E] mb-1">
                <Link
                  href="/logement/quartiers/malasana"
                  className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                >
                  Malasaña
                </Link>{" "}
                &amp;{" "}
                <Link
                  href="/logement/quartiers/chueca"
                  className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                >
                  Chueca
                </Link>
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Les deux quartiers les plus vivants pour les bars de nuit. Malasaña
                pour l&apos;ambiance rock et alternative, Chueca pour la scène
                LGBTQ+ et les bars tendance. Concerts de salle en salle, terrasses
                animées, fêtes en appartement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-xs mb-2">
                Tapas &amp; vermouths
              </p>
              <p className="font-semibold text-[#33251E] mb-1">
                <Link
                  href="/logement/quartiers/la-latina"
                  className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                >
                  La Latina
                </Link>
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Le quartier pour la culture des tapas et des vermouths
                dominicaux. Les rues de la Cava Baja et alentour débordent
                de bars à pintxos et de terrasses animées. Idéal pour une
                soirée décontractée qui commence tôt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-xs mb-2">
                Vie nocturne touristique
              </p>
              <p className="font-semibold text-[#33251E] mb-1">Huertas</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Plus touristique et festif, le quartier Huertas (autour de la
                Plaza de Santa Ana) est idéal pour une soirée animée entre
                expats et locaux. Bière moins chère, musique plus commerciale,
                ambiance garantie les jeudis au dimanche.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-xs mb-2">
                Bars haut de gamme
              </p>
              <p className="font-semibold text-[#33251E] mb-1">
                <Link
                  href="/logement/quartiers/salamanca"
                  className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors"
                >
                  Salamanca
                </Link>
              </p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Le quartier chic de Madrid pour ses bars à cocktails soignés,
                ses rooftops et ses restaurants gastronomiques. Dress code plus
                strict, addition plus élevée — mais une ambiance élégante
                quand l&apos;envie s&apos;en fait sentir.
              </p>
            </div>
          </div>

          <div className="bg-[#FBEBDD] rounded-2xl p-6">
            <p className="font-semibold text-[#33251E] mb-2">Les terrazas — la culture de la terrasse</p>
            <p className="text-[#33251E] text-sm leading-relaxed">
              Dès le mois d&apos;avril, les terrasses de bars et restaurants
              envahissent les trottoirs, places et ruelles de Madrid. C&apos;est
              une culture à part entière : on ne consomme pas forcément plus,
              on reste plus longtemps. Un café du matin, un verre en fin
              d&apos;après-midi, des tapas le soir — tout se vit en terrasse
              jusqu&apos;en novembre.
            </p>
          </div>
        </div>
      </section>

      {/* Section sombre */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-8">
            Madrid, ville la plus accessible culturellement d&apos;Europe ?
          </h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg mb-8">
            Ce n&apos;est pas une formule. Trois musées d&apos;importance mondiale
            accessibles gratuitement plusieurs soirs par semaine. Un réseau de
            transports complet à{" "}
            <Link
              href="/se-decider/budget"
              className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              32,70 €/mois
            </Link>
            . Des concerts en plein air gratuits l&apos;été. Un menu du déjeuner
            complet à 12 €. Et une vie de quartier qui se déroule dans la rue,
            sur les terrasses, dans les parcs — sans avoir à consommer pour
            exister dans l&apos;espace public.
          </p>
          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              À Madrid, la richesse de la vie culturelle n&apos;est pas proportionnelle
              au budget. C&apos;est peut-être la ville d&apos;Europe où le rapport
              entre ce que tu dépenses et ce que tu vis est le plus favorable.
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
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/vivre/courses"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Faire ses courses à Madrid
            </Link>
            <Link
              href="/vivre/espagnol"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Apprendre l&apos;espagnol à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
            <Link
              href="/se-decider/pourquoi-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Pourquoi choisir Madrid ?
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="La communauté française à Madrid" href="/communaute/francais-madrid" />

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
            Communauté française, espagnol, santé, courses — les prochains
            guides sur la vie à Madrid arrivent bientôt.
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
