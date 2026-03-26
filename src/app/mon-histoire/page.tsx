import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Barcelone était le plan A — Madrid & Toi",
  description:
    "En 2020, je voulais Barcelone. J'ai atterri à Madrid, seule, sans jamais y avoir mis les pieds. Six ans plus tard, je ne suis toujours pas repartie.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Chloé",
    url: "https://madrid-et-toi.com/mon-histoire",
    description:
      "Française installée à Madrid depuis septembre 2020, auteure de Madrid & Toi — guides pratiques pour s'installer à Madrid.",
    knowsAbout: [
      "S'installer à Madrid",
      "NIE et démarches administratives en Espagne",
      "Logement à Madrid",
      "Travailler à Madrid",
      "Fiscalité franco-espagnole",
      "Seguridad Social",
      "Déménagement Paris–Madrid",
      "VIE à Madrid",
    ],
    homeLocation: {
      "@type": "City",
      name: "Madrid",
      addressCountry: "ES",
    },
    nationality: "French",
    sameAs: ["https://madrid-et-toi.com"],
  },
};

export default function MonHistoirePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
            Six ans que je vis à Madrid. Je ne l&apos;avais jamais visitée avant
            d&apos;y déménager. Le plan initial, c&apos;était Barcelone — la plage, le
            fantasme de finir le boulot et plonger dans la mer. Des proches
            m&apos;ont convaincue de regarder ailleurs. Madrid n&apos;a pas la mer. Mais
            il y a tout le reste. Et la plage est à moins de 2h.{" "}
            <span className="text-[#C8614A]">(Pas si mal, non&nbsp;?)</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-2xl mx-auto space-y-10 text-[#5a3e35] text-lg leading-relaxed">
          <p>
            À la fin de mon master, j&apos;avais une certitude : Paris, c&apos;était
            terminé pour moi. La vie à 100 à l&apos;heure, le métro bondé, cette
            impression de courir en permanence sans trop savoir vers quoi —
            j&apos;avais besoin d&apos;autre chose. D&apos;une ville où la vie ne ressemble
            pas à un sprint permanent. Le problème, c&apos;est que savoir ce
            qu&apos;on ne veut <em>plus</em>, ça ne dit pas forcément où aller.
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

          <div>
            <span className="block font-[family-name:var(--font-playfair)] text-8xl text-[#C8614A] leading-none mb-2 select-none">&ldquo;</span>
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/valise-depart.svg"
                alt="Illustration valise de départ"
                width={180}
                height={180}
                className="float-right ml-8 mb-2"
              />
              <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-[#2C1810] leading-relaxed">
                1er septembre 2020. Deux valises, une coloc de 6 à <Link href="/logement/quartiers/malasana" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">Malasaña</Link> —
                un mélange improbable de nationalités. Et une sensation
                immédiate, inexplicable, d&apos;être exactement là où je devais être.
              </p>
            </div>
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

      {/* Ce que j'ai traversé */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Ce que j&apos;ai traversé — et ce qui nourrit les guides
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-10">
            Madrid & Toi n&apos;est pas un site fait depuis un bureau parisien.
            Ce que j&apos;écris, je l&apos;ai vécu, souvent dans la confusion,
            parfois dans la galère — et c&apos;est précisément pour ça que
            je l&apos;écris.
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Arrivée via un VIE",
                detail: "Le Volontariat International en Entreprise, c'est comme ça que j'ai atterri à Madrid. Statut public, indemnité exonérée, couverture Business France — j'ai fait tout le parcours de A à Z.",
                href: "/travailler/vie",
                linkLabel: "Le guide VIE →",
              },
              {
                label: "NIE, padron, Seguridad Social",
                detail: "Les trois premières démarches en arrivant. La cita previa à trouver, les formulaires à imprimer, les files d'attente. Je sais ce qui coince et pourquoi.",
                href: "/papiers/nie",
                linkLabel: "Le guide NIE →",
              },
              {
                label: "Plusieurs appartements à Madrid",
                detail: "Colocation à Malasaña au départ, puis appartement en solo. J'ai cherché depuis la France, j'ai visité sur place, j'ai signé des baux en espagnol. Le marché a changé depuis, mais les galères sont les mêmes.",
                href: "/logement/appartement",
                linkLabel: "Le guide logement →",
              },
              {
                label: "Compte bancaire, impôts, résidence fiscale",
                detail: "Ouvrir un compte espagnol quand on n'a pas encore son NIE. Devenir résident fiscal en Espagne. Déclarer l'IRPF. Comprendre la convention France–Espagne. Tout ça, j'y ai été confrontée.",
                href: "/papiers/impots",
                linkLabel: "Le guide impôts →",
              },
              {
                label: "Emploi local après le VIE",
                detail: "Passer d'un statut VIE à un contrat de travail espagnol classique. Naviguer le marché du travail madrilène en tant qu'étrangère. Les spécificités du droit du travail espagnol.",
                href: "/travailler/emploi",
                linkLabel: "Le guide emploi →",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C8614A] flex-shrink-0 mt-2.5" />
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#5a3e35]/80 text-sm leading-relaxed mb-2">
                      {item.detail}
                    </p>
                    <Link
                      href={item.href}
                      className="text-[#C8614A] text-sm font-semibold underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                    >
                      {item.linkLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment je travaille */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            Comment les guides sont écrits
          </h2>
          <div className="space-y-5">
            <div className="border-l-4 border-[#E8A838] pl-6">
              <p className="text-[#F5ECD7] leading-relaxed text-lg">
                <strong className="text-[#E8A838]">Sources officielles uniquement</strong>{" "}
                pour tout ce qui touche à l&apos;administration, la fiscalité et la santé.
                Seg-social.es, aeat.es, comunidad.madrid, inclusion.gob.es — pas de
                comparateurs, pas de blogs anonymes, pas de forums non vérifiés.
                Si une info ne peut pas être sourcée officiellement, je ne l&apos;écris pas.
              </p>
            </div>
            <div className="border-l-4 border-[#E8A838] pl-6">
              <p className="text-[#F5ECD7] leading-relaxed text-lg">
                <strong className="text-[#E8A838]">Mises à jour régulières.</strong>{" "}
                Les tranches IRPF, les cotisations RETA, les tarifs de l&apos;Abono — ça change.
                Les guides reflètent les données en vigueur pour 2026. Une date de mise à jour
                figure sur chaque page.
              </p>
            </div>
            <div className="border-l-4 border-[#E8A838] pl-6">
              <p className="text-[#F5ECD7] leading-relaxed text-lg">
                <strong className="text-[#E8A838]">Ce que je ne suis pas :</strong>{" "}
                avocate, fiscaliste, notaire. Les guides sont là pour t&apos;informer et t&apos;aider
                à comprendre le système — pas pour remplacer un conseil juridique ou fiscal
                personnalisé. Pour les situations complexes (divorce, succession, création
                de société), consulte un professionnel.
              </p>
            </div>
          </div>
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
              href="/se-decider/pourquoi-madrid"
              className="px-5 py-2.5 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
            >
              Pourquoi Madrid ?
            </Link>
            <Link
              href="/se-decider"
              className="px-5 py-2.5 rounded-full bg-transparent border border-[#F5ECD7]/30 text-[#F5ECD7] text-sm font-semibold hover:border-[#F5ECD7] transition-colors"
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
        <p className="text-[#F5ECD7]/20 text-xs mt-2">
          <a href="https://storyset.com/transport" className="hover:text-[#F5ECD7]/40 transition-colors">Transport illustrations by Storyset</a>
        </p>
      </footer>
    </div>
  );
}
