import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Barcelone était le plan A — Madrid & Toi",
  description:
    "En 2020, je voulais Barcelone. J'ai atterri à Madrid, seule, sans jamais y avoir mis les pieds. Six ans plus tard, je ne suis toujours pas repartie.",
};

export default function MonHistoirePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Mon histoire
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Barcelone était{" "}
            <span className="italic text-[#C8614A]">le plan A</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            C&apos;était Barcelone. La plage, le soleil, les week-ends entre amis —
            j&apos;avais tout projeté là-bas. Et puis des proches m&apos;ont dit :
            regarde Madrid. J&apos;ai regardé. Deux valises, un contrat en VIE, et
            une ville où je n&apos;avais jamais mis les pieds. Six ans plus tard,
            je ne suis toujours pas repartie.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-2xl mx-auto space-y-10 text-[#5a3e35] text-lg leading-relaxed">
          <p>
            À la fin de mon master, je savais une chose avec certitude : je ne
            voulais pas rester à Paris. Peut-être même pas en France. Le
            problème, c&apos;est que savoir où on ne veut <em>pas</em> être, ça
            ne dit pas grand chose sur où on veut aller.
          </p>

          <p>
            L&apos;Espagne s&apos;est imposée assez naturellement — j&apos;avais fait
            espagnol en LV2, je me disais que je savais parler la langue{" "}
            <em>(spoiler : non)</em>, et ma destination c&apos;était Barcelone,
            sans hésitation. J&apos;avais passé quelques week-ends là-bas avec des
            amis, j&apos;aimais la ville, et surtout j&apos;avais ce fantasme de la mer
            accessible après le boulot — moi qui n&apos;avais jamais vécu au bord
            de la plage.
          </p>

          <p>
            Ce sont des proches qui m&apos;ont convaincue de regarder vers Madrid.
            Ils m&apos;ont parlé d&apos;une ville où la vie est plus douce, les gens
            plus chaleureux, le castillan plus accessible que le catalan, et
            les loyers encore raisonnables. J&apos;ai écouté, cherché un boulot
            depuis Paris, et décroché un contrat en VIE.
          </p>

          <p>
            Ce que j&apos;oublie souvent de mentionner : je n&apos;avais jamais mis les
            pieds à Madrid avant d&apos;y déménager. Pas un week-end, pas un
            passage. J&apos;ai posé mes valises dans une ville que je ne
            connaissais absolument pas.
          </p>

          <div className="py-8 px-8 bg-[#EDE0C8] rounded-2xl border-l-4 border-[#C8614A]">
            <p className="text-xl text-[#2C1810] leading-relaxed">
              &laquo;&nbsp;1er septembre 2020. Deux valises, une coloc de 6 à
              Malasaña — des Américaines, des Allemands, un Colombien, des
              Français. Et une sensation immédiate, inexplicable, d&apos;être
              exactement là où je devais être.&nbsp;&raquo;
            </p>
          </div>

          <p>
            J&apos;osais pas trop le dire — les gens auraient pensé que je
            m&apos;emballais, que c&apos;était le soleil de septembre, la nouveauté, la
            coloc internationale qui faussait tout. Peut-être. Mais la
            sensation était là, et elle ne s&apos;est pas dissipée.
          </p>

          <p>
            Six ans après, elle est toujours là. Madrid c&apos;est chez moi,
            pleinement, sans le &quot;pour l&apos;instant&quot; implicite que j&apos;ajoutais
            au début. Je n&apos;avais pas tort de m&apos;emballer.
          </p>

          <p>
            Madrid & Toi est né de tout ce que j&apos;aurais aimé trouver avant
            de faire ce saut — et que je n&apos;ai pas trouvé. Des infos concrètes,
            honnêtes, écrites par quelqu&apos;un qui est vraiment passé par là.
            Parce que bien préparer ce genre de déménagement, ça ne gâche
            rien. Ça libère.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] italic text-[#E8A838] text-2xl mb-4">
            Et toi, tu en es où ?
          </p>
          <p className="text-[#F5ECD7]/80 text-lg mb-8">
            Que tu sois encore en train de rêver ou que tu aies déjà réservé
            ton camion, les guides sont là pour t&apos;aider.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/se-decider"
              className="px-5 py-2.5 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
            >
              Je me pose encore des questions
            </Link>
            <Link
              href="/logement"
              className="px-5 py-2.5 rounded-full bg-transparent border border-[#F5ECD7]/30 text-[#F5ECD7] text-sm font-semibold hover:border-[#F5ECD7] transition-colors"
            >
              Je cherche un logement
            </Link>
            <Link
              href="/papiers"
              className="px-5 py-2.5 rounded-full bg-transparent border border-[#F5ECD7]/30 text-[#F5ECD7] text-sm font-semibold hover:border-[#F5ECD7] transition-colors"
            >
              Je veux comprendre les démarches
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
          <p className="text-[#F5ECD7]/90 text-lg mb-10 leading-relaxed">
            Logement, NIE, sécu, travail à Madrid — des guides pratiques écrits
            depuis l&apos;expérience. Laisse ton email pour ne rien rater.
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
