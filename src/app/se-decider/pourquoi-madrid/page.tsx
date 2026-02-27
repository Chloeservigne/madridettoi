import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Pourquoi Madrid ? Les vraies raisons de s'installer là-bas — Madrid & Toi",
  description:
    "Rythme de vie, gastronomie, climat (avec les nuances qu'il faut), proximité avec la France, les Espagnols — ce qui fait vraiment la différence quand on vit à Madrid.",
};

const raisons = [
  {
    number: "01",
    title: "Le rythme de vie",
    content:
      "C'est probablement la chose qui frappe le plus en arrivant de Paris. À Madrid, personne ne mange à midi pile en regardant son téléphone. Les terrasses se remplissent à toute heure. Les dîners commencent à 21h30, souvent plus tard. Les apéros durent. Les week-ends existent vraiment. Ce n'est pas de la paresse — c'est une autre façon d'organiser le temps, qui laisse de la place aux gens, aux conversations, à la vie qui se passe en dehors du boulot. Après quelques semaines, tu réalises que tu as arrêté de courir.",
    nuance: null,
  },
  {
    number: "02",
    title: "La gastronomie",
    content:
      "Oh la bouffe espagnole... Les croquetas crémeuses à l'intérieur et croustillantes dehors, la charcuterie — jamón ibérico, chorizo, lomo — qu'on mange debout au comptoir d'un bar, les calamares frits servis dans un petit pain au milieu de la Plaza Mayor. Et puis il y a tout ce qu'on ne connaît pas avant d'arriver. Le cocido madrileño, par exemple — ce ragoût de pois chiches, légumes et viandes mijotés des heures, qui réchauffe les dimanches d'hiver. Mon péché mignon. (Surtout quand c'est la grand-mère de mon copain qui le prépare.) La cuisine espagnole est généreuse, sans chichi, et franchement — elle est bonne.",
    nuance: null,
  },
  {
    number: "03",
    title: "La culture",
    content:
      "Madrid, c'est trois musées de rang mondial à dix minutes à pied les uns des autres : le Prado, le Reina Sofía, le Thyssen. Des expositions en permanence, une vie culturelle dense, accessible, et souvent moins chère qu'à Paris. Mais ce qui frappe surtout, c'est que les Espagnols sont fiers de leur culture — vraiment fiers, sans arrogance. Le flamenco, la cuisine, les fêtes locales, les traditions de quartier : ce ne sont pas des décors pour touristes, c'est vivant, pratiqué, transmis. On arrive dans un pays qui sait ce qu'il est, et ça se ressent.",
    nuance: null,
  },
  {
    number: "04",
    title: "Le climat — avec les nuances qu'il faut",
    content:
      "300 jours de soleil par an, c'est réel. La lumière de Madrid est quelque chose de particulier — dorée, franche, elle change l'humeur. Les printemps et les automnes sont magnifiques. Mais il faut être honnête : les étés tapent fort (40°C ne sont pas rares en juillet-août), et l'hiver peut surprendre. Madrid est à 650m d'altitude, les nuits de janvier descendent sous zéro, et il neige — pas souvent, mais ça arrive. Ce n'est pas la Costa del Sol. C'est un vrai climat continental avec ses extrêmes. Ce qu'on gagne vraiment, c'est la lumière et le soleil au quotidien, même en hiver.",
    nuance: "Ce qu'on ne te dit pas : en août, les Madrilènes partent. La ville se vide, beaucoup de restaurants ferment. C'est plutôt un avantage — calme, moins de monde — mais ne t'attends pas à une ville festive en plein mois d'août.",
  },
  {
    number: "05",
    title: "La proximité avec la France",
    content:
      "Paris-Madrid en avion, c'est 2h de vol. Les vols sont fréquents et souvent pas chers si tu réserves à l'avance. Tu peux rentrer pour un week-end sans que ça devienne une expédition. En train, il y a aussi le Renfe-SNCF direct jusqu'à Barcelone, et de là le reste de la France. Pour ceux qui hésitent à franchir le cap par peur de l'éloignement : Madrid est l'une des capitales européennes les mieux connectées à Paris. On est loin, mais pas si loin.",
    nuance: null,
  },
  {
    number: "06",
    title: "L'espagnol et les Espagnols",
    content:
      "L'espagnol castillan — celui de Madrid — est une langue claire, bien articulée, accessible. Ce qui est frappant, c'est que les Espagnols transforment peu leur langue : pas de verlan, peu d'argot impénétrable, pas de codes qui excluent. On comprend assez vite, et on progresse vite. En quelques mois, tu passes de la survie à la vraie conversation. Et au-delà de la langue, il y a les gens. Les Espagnols sont chaleureux, directs, accueillants. Ils t'intègrent facilement dans leurs cercles, ils ne font pas la différence entre un voisin de palier et un ami de dix ans pour t'inviter à une fiesta. C'est une culture du lien social qui, venant de Paris, fait un effet saisissant.",
    nuance: null,
  },
];

export default function PourquoiMadridPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
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
        </div>
      </section>

      {/* Raisons */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto space-y-16">
          {raisons.map((r) => (
            <div key={r.number} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8614A]/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C8614A] font-bold text-sm">
                  {r.number}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810] mb-3">
                  {r.title}
                </h2>
                <p className="text-[#5a3e35] leading-relaxed">{r.content}</p>
                {r.nuance && (
                  <div className="mt-5 p-4 bg-[#EDE0C8] rounded-xl border-l-4 border-[#E8A838]">
                    <p className="text-[#5a3e35] text-sm leading-relaxed">
                      <span className="font-semibold text-[#2C1810]">À savoir : </span>
                      {r.nuance}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Citation */}
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
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Quel quartier choisir ?
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement
            </Link>
            <Link
              href="/mon-histoire"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Mon histoire
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
