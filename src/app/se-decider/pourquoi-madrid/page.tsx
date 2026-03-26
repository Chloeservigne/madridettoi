import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Pourquoi Madrid ? Les vraies raisons de s'installer là-bas — Madrid & Toi",
  description:
    "Rythme de vie, gastronomie, climat (avec les nuances qu'il faut), proximité avec la France, les Espagnols — ce qui fait vraiment la différence quand on vit à Madrid.",
};

export default function PourquoiMadridPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Pourquoi Madrid ? Les vraies raisons de s'installer là-bas",
      description:
        "Rythme de vie, gastronomie, climat (avec les nuances qu'il faut), proximité avec la France, les Espagnols — ce qui fait vraiment la différence quand on vit à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/se-decider/pourquoi-madrid",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/se-decider/pourquoi-madrid" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Se décider", item: "https://madrid-et-toi.com/se-decider" },
        { "@type": "ListItem", position: 3, name: "Pourquoi Madrid", item: "https://madrid-et-toi.com/se-decider/pourquoi-madrid" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/se-decider"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Se décider
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Avant de partir
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Pourquoi Madrid,{" "}
            <span className="italic text-[#C8614A]">vraiment&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Pas les clichés de brochure touristique. Les vraies raisons — celles
            qui font qu&apos;après six ans, on est toujours là et on ne regrette
            rien.
          </p>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Le rythme de vie */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le rythme de vie
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            C&apos;est probablement la chose qui frappe le plus en arrivant de
            Paris. À Madrid, personne ne mange à midi pile en regardant son
            téléphone. Les terrasses se remplissent à toute heure. Les dîners
            commencent à 21h30, souvent plus tard. Les apéros durent. Les
            week-ends existent vraiment.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Ce n&apos;est pas de la paresse — c&apos;est une autre façon
            d&apos;organiser le temps, qui laisse de la place aux gens, aux
            conversations, à la vie qui se passe en dehors du boulot. Après
            quelques semaines, tu réalises que tu as arrêté de courir.
          </p>
        </div>
      </section>

      {/* La gastronomie */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La gastronomie
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Oh la bouffe espagnole... Les croquetas crémeuses à l&apos;intérieur
            et croustillantes dehors, la charcuterie — jamón ibérico, chorizo,
            lomo — qu&apos;on mange debout au comptoir d&apos;un bar, les
            calamares frits servis dans un petit pain au milieu de la Plaza
            Mayor.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Et puis il y a tout ce qu&apos;on ne connaît pas avant
            d&apos;arriver. Le cocido madrileño, par exemple — ce ragoût de
            pois chiches, légumes et viandes mijotés des heures, qui réchauffe
            les dimanches d&apos;hiver. La cuisine espagnole est généreuse,
            sans chichi, et franchement — elle est bonne.
          </p>
        </div>
      </section>

      {/* La culture */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            La culture
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            Madrid, c&apos;est trois musées de rang mondial à dix minutes à
            pied les uns des autres : le Prado, le Reina Sofía, le Thyssen.
            Des expositions en permanence, une vie culturelle dense, accessible,
            et souvent moins chère qu&apos;à Paris.
          </p>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mt-4">
            Mais ce qui frappe surtout, c&apos;est que les Espagnols sont fiers
            de leur culture — vraiment fiers, sans arrogance. Le flamenco, la
            cuisine, les fêtes locales, les traditions de quartier : ce ne sont
            pas des décors pour touristes, c&apos;est vivant, pratiqué, transmis.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              On arrive dans un pays qui sait ce qu&apos;il est — et ça se
              ressent dans chaque rue, chaque bar, chaque conversation.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Le climat */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le climat — avec les nuances qu&apos;il faut
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            300 jours de soleil par an, c&apos;est réel. La lumière de Madrid
            est quelque chose de particulier — dorée, franche, elle change
            l&apos;humeur. Les printemps et les automnes sont magnifiques.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Mais il faut être honnête : les étés tapent fort (40°C ne sont pas
            rares en juillet-août), et l&apos;hiver peut surprendre. Madrid est
            à 650 m d&apos;altitude, les nuits de janvier descendent sous zéro,
            et il neige. Ce n&apos;est pas la Costa del Sol. C&apos;est un vrai
            climat continental avec ses extrêmes.
          </p>
          <div className="mt-6 p-4 bg-[#EDE0C8] rounded-xl border-l-4 border-[#E8A838]">
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              <span className="font-semibold text-[#2C1810]">À savoir : </span>
              En août, les Madrilènes partent. La ville se vide, beaucoup de
              restaurants ferment. C&apos;est plutôt un avantage — calme, moins
              de monde — mais ne t&apos;attends pas à une ville festive en plein
              mois d&apos;août.
            </p>
          </div>
        </div>
      </section>

      {/* La proximité avec la France */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La proximité avec la France
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Paris-Madrid en avion, c&apos;est 2h de vol. Les vols sont fréquents
            et souvent pas chers si tu réserves à l&apos;avance. Tu peux rentrer
            pour un week-end sans que ça devienne une expédition.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Pour ceux qui hésitent à franchir le cap par peur de
            l&apos;éloignement : Madrid est l&apos;une des capitales européennes
            les mieux connectées à Paris. On est loin — mais pas si loin.
          </p>
        </div>
      </section>

      {/* L'espagnol et les Espagnols */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;espagnol et les Espagnols
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            L&apos;espagnol castillan — celui de Madrid — est une langue claire,
            bien articulée, accessible. Ce qui est frappant, c&apos;est que les
            Espagnols transforment peu leur langue : pas de verlan, peu
            d&apos;argot impénétrable. On comprend assez vite, et on progresse
            vite.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Et au-delà de la langue, il y a les gens. Les Espagnols sont
            chaleureux, directs, accueillants. Ils t&apos;intègrent facilement
            dans leurs cercles, ils ne font pas la différence entre un voisin
            de palier et un ami de dix ans pour t&apos;inviter à une fiesta.
            C&apos;est une culture du lien social qui, venant de Paris, fait
            un effet saisissant.
          </p>
        </div>
      </section>

      {/* Ce qu'on ne peut pas expliquer */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Ce qu&apos;on ne peut pas vraiment expliquer
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Il y a une chose que je n&apos;arrive pas à mettre en mots, et que
            je retrouve dans presque tous les témoignages d&apos;expats : une
            sensation d&apos;évidence. Pas l&apos;euphorie du touriste, pas
            l&apos;excitation de la nouveauté. Quelque chose de plus calme, plus
            ancré. Une ville dans laquelle on se sent à sa place. C&apos;est
            subjectif, c&apos;est personnel — mais ça compte.
          </p>
        </div>
      </section>

      {/* Liens */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            La suite logique
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Quel quartier choisir ?
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement
            </Link>
            <Link
              href="/mon-histoire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Mon histoire
            </Link>
            <Link
              href="/communaute/francais-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La communauté française à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Budget & coût de la vie à Madrid" href="/se-decider/budget" />

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
            Pour/contre, témoignages, banque, impôts — les prochains guides
            arrivent bientôt.
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
