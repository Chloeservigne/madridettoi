import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/se-decider/pour-qui',
  },
  title: "Madrid est fait pour vous ? Les profils qui s'épanouissent — Madrid & Toi",
  description:
    "Remote worker, célibataire, famille, introverti — qui profite vraiment de Madrid ? Une lecture honnête des profils qui s'adaptent le mieux, et de ce qui peut coincer.",
};

export default function PourQuiPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Madrid est fait pour vous ? Les profils qui s'épanouissent",
      description:
        "Remote worker, célibataire, famille, introverti — qui profite vraiment de Madrid ? Une lecture honnête des profils qui s'adaptent le mieux, et de ce qui peut coincer.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      url: "https://madrid-et-toi.com/se-decider/pour-qui",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/se-decider/pour-qui" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Se décider", item: "https://madrid-et-toi.com/se-decider" },
        { "@type": "ListItem", position: 3, name: "Pour qui ?", item: "https://madrid-et-toi.com/se-decider/pour-qui" },
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
            href="/se-decider"
            className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Se décider
          </Link>
          <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">
            Avant de partir
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
            Madrid est fait{" "}
            <span className="not-italic font-bold text-[#F0552F]">pour toi&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed">
            Ni brochure touristique, ni mise en garde catastrophiste. Une lecture
            honnête de qui s&apos;épanouit à Madrid — et qui risque de déchanter.
            Parce que la question ne se pose pas pour tout le monde de la même façon.
          </p>
          <AuthorBadge date="avril 2026" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Ce que personne ne te dit vraiment
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Madrid est une ville facile à aimer. Le soleil, la gastronomie, les terrasses,
            le rythme de vie — tout ça existe vraiment. Mais l&apos;expatriation, ce
            n&apos;est pas des vacances prolongées. C&apos;est construire une vie dans un pays
            dont tu ne maîtrises pas encore les codes, l&apos;administration, les subtilités sociales.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg mb-4">
            Certains profils s&apos;adaptent très vite et ne veulent plus repartir.
            D&apos;autres arrivent avec des attentes qui ne correspondent pas à ce que Madrid
            peut offrir — et rentrent en France au bout de six mois, frustrés.
          </p>
          <p className="text-[#33251E] leading-relaxed text-lg">
            Voici une lecture honnête de ces différents profils, basée sur ce qu&apos;on
            observe dans la{" "}
            <Link href="/communaute/francais-madrid" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
              communauté française à Madrid
            </Link>{" "}
            — et sur six ans d&apos;expérience personnelle.
          </p>
        </div>
      </section>

      {/* Grille pour/contre */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-10">
            Ce qui marche — et ce qui peut coincer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Colonne positive */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <p className="text-[#F2A65A] font-semibold text-sm uppercase tracking-widest mb-5">
                Profils qui s&apos;épanouissent
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#F2A65A] font-bold mt-0.5">+</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Remote worker ou freelance</span> — Madrid donne la vie sociale et l&apos;énergie que le télétravail a tendance à effacer.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F2A65A] font-bold mt-0.5">+</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Quelqu&apos;un qui veut apprendre l&apos;espagnol</span> — immersion totale, langue accessible, et les Madrilènes sont patients avec les apprenants.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F2A65A] font-bold mt-0.5">+</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Curieux de culture et de gastronomie</span> — trois musées de rang mondial, une scène culinaire en pleine explosion, une ville en mouvement permanent.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F2A65A] font-bold mt-0.5">+</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Quelqu&apos;un qui cherche à ralentir</span> — sans sacrifier les avantages d&apos;une grande capitale européenne. Tout est accessible, mais personne ne court.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F2A65A] font-bold mt-0.5">+</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Les extravertis</span> — la culture espagnole est profondément sociale. Les cercles s&apos;ouvrent vite, les soirées s&apos;improvisent, les liens se créent facilement.
                  </p>
                </li>
              </ul>
            </div>

            {/* Colonne nuances */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <p className="text-[#F0552F] font-semibold text-sm uppercase tracking-widest mb-5">
                Ce qui peut coincer
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#F0552F] font-bold mt-0.5">−</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">L&apos;hyper-organisé</span> — l&apos;administration espagnole est lente, imprévisible, parfois kafkaïenne. Si tu as besoin de clarté et de process, prépare-toi à de la frustration.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F0552F] font-bold mt-0.5">−</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Celui qui refuse d&apos;apprendre l&apos;espagnol</span> — tu peux survivre en anglais dans certains quartiers, mais ton cercle social restera limité aux expats. La vraie intégration passe par la langue.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F0552F] font-bold mt-0.5">−</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Celui qui a besoin de la mer</span> — Madrid est à 350 km de la côte. Si la plage fait partie de ton quotidien idéal, c&apos;est un vrai manque à peser sérieusement.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F0552F] font-bold mt-0.5">−</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">Attentes salariales parisiennes</span> — si tu travailles pour une entreprise espagnole locale, les salaires seront sensiblement inférieurs. Compense uniquement si le coût de la vie et la qualité de vie compensent à tes yeux.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F0552F] font-bold mt-0.5">−</span>
                  <p className="text-[#33251E] text-sm leading-relaxed">
                    <span className="font-semibold text-[#33251E]">L&apos;introverti épuisé</span> — les horaires espagnols impliquent une vie sociale intense, des dîners tardifs, du bruit, de la présence permanente. Ce n&apos;est pas une ville pour se couper du monde.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selon ta situation */}
      <section className="py-20 px-6 bg-[#FFFBF5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-8">
            Selon ta situation
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[#33251E] text-lg mb-2">Tu viens en remote ou en freelance</h3>
              <p className="text-[#33251E] leading-relaxed text-lg">
                C&apos;est probablement le profil le mieux adapté à Madrid. Tu gardes ton
                salaire français ou international, et tu profites d&apos;un coût de la vie
                inférieur à Paris, d&apos;une ville vivante et d&apos;un réseau d&apos;expats
                déjà constitué. La seule vraie contrainte : le statut administratif. Se déclarer
                en tant qu&apos;<Link href="/travailler/freelance" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">autónomo</Link> ou
                gérer sa fiscalité depuis Madrid demande un peu d&apos;organisation au départ.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#33251E] text-lg mb-2">Tu viens pour travailler en local</h3>
              <p className="text-[#33251E] leading-relaxed text-lg">
                C&apos;est possible et ça marche — mais les yeux ouverts. Le{" "}
                <Link href="/se-decider/salaire-madrid" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                  salaire moyen à Madrid
                </Link>{" "}
                est sensiblement inférieur à Paris. Les secteurs tech, finance et certains postes
                dans les multinationales tirent leur épingle du jeu. Le reste suit les standards
                espagnols — qui correspondent à une autre réalité de vie, pas à un manque.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#33251E] text-lg mb-2">Tu arrives avec des enfants</h3>
              <p className="text-[#33251E] leading-relaxed text-lg">
                L&apos;adaptation est possible et beaucoup de familles s&apos;y épanouissent.
                Mais il faut anticiper : la question de la{" "}
                <Link href="/vivre/ecoles" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">
                  scolarisation
                </Link>{" "}
                se pose tôt (lycée français, école publique espagnole, section bilingue ?), les horaires
                tardifs de la vie madrilène s&apos;accordent moins facilement avec les rythmes des enfants,
                et la gestion administrative double — pour toi et tes enfants — prend du temps.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#33251E] text-lg mb-2">Tu viens seul(e), pour changer de vie</h3>
              <p className="text-[#33251E] leading-relaxed text-lg">
                Madrid est l&apos;une des villes les plus faciles d&apos;Europe pour arriver seul.
                La culture est ouverte, la communauté française est nombreuse et bien organisée,
                les intercambios permettent de rencontrer des locaux rapidement. Si tu es prêt
                à te mettre en situation d&apos;inconfort au début, la ville te rend très vite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section sombre */}
      <section className="py-20 px-6 bg-[#241813]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-6">
            Ce que l&apos;expérience enseigne
          </h2>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg mb-6">
            J&apos;ai vu beaucoup d&apos;arrivées et quelques départs. Ce qui fait la différence,
            ce n&apos;est pas le profil sur le papier — c&apos;est l&apos;état d&apos;esprit.
            Les gens qui partent frustrés avaient souvent une image figée de ce que serait
            leur vie ici. Ceux qui restent ont accepté de se laisser surprendre.
          </p>
          <p className="text-[#F6E7D9]/80 leading-relaxed text-lg mb-8">
            Madrid ne te ressemble pas forcément au départ. C&apos;est un pays avec sa propre
            logique, ses propres horaires, sa propre façon de faire les choses. Mais si tu acceptes
            de changer un peu pour t&apos;adapter — pas de tout changer, juste d&apos;ouvrir —
            la ville te donne beaucoup en retour.
          </p>
          <blockquote className="border-l-4 border-[#F0552F] pl-6">
            <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
              La question n&apos;est pas &quot;est-ce que Madrid est fait pour moi&nbsp;?&quot;
              C&apos;est &quot;est-ce que je suis prêt à me laisser faire par Madrid&nbsp;?&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Questions à se poser */}
      <section className="py-20 px-6 bg-[#FBEBDD]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6">
            Les questions à se poser avant de partir
          </h2>
          <p className="text-[#33251E] leading-relaxed text-lg mb-8">
            Pas des questions rhétoriques — de vraies questions qui permettent de partir
            avec les yeux ouverts.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F0552F]">
              <p className="text-[#33251E] font-semibold mb-1">Tu apprends l&apos;espagnol, ou tu as l&apos;intention de le faire ?</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Pas besoin d&apos;être bilingue avant de partir. Mais si la réponse est &quot;non,
                je me débrouillerai en anglais&quot;, c&apos;est un signal. Tu peux survivre,
                mais pas t&apos;intégrer vraiment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F0552F]">
              <p className="text-[#33251E] font-semibold mb-1">Tu as une source de revenus qui tient la route ?</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Remote, emploi local trouvé en avance, VIE, épargne suffisante — peu importe le
                format, mais venir à Madrid &quot;pour voir&quot; sans plan financier clair, c&apos;est
                le meilleur moyen de rentrer précipitamment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F0552F]">
              <p className="text-[#33251E] font-semibold mb-1">Tu as déjà passé du temps à Madrid hors saison touristique ?</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Madrid en février ou en novembre, ce n&apos;est pas Madrid en mai. Passer
                un week-end au soleil ne te dit pas grand-chose sur ce que sera ta vie là-bas.
                Si tu peux, passe une semaine en dehors des périodes touristiques.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F0552F]">
              <p className="text-[#33251E] font-semibold mb-1">Tu viens pour fuir Paris, ou tu viens pour Madrid ?</p>
              <p className="text-[#33251E] text-sm leading-relaxed">
                Nuance importante. Fuir Paris fonctionne à court terme. Mais les choses
                qu&apos;on fuit ont tendance à voyager avec nous. Venir vers quelque chose
                de précis — un rythme de vie, une langue, une scène professionnelle — c&apos;est
                plus solide.
              </p>
            </div>
          </div>
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
              href="/se-decider/pourquoi-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Pourquoi Madrid, vraiment ?
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/travailler/remote"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Travailler en remote depuis Madrid
            </Link>
            <Link
              href="/communaute/francais-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              La communauté française à Madrid
            </Link>
            <Link
              href="/demenagement/checklist"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors"
            >
              Checklist déménagement
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#F6E7D9]/90 text-lg mb-10 leading-relaxed">
            Budget, salaires, quartiers, papiers — tous nos guides pour préparer
            ton installation à Madrid sans mauvaises surprises.
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
