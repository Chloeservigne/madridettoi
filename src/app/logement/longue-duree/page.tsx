import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/logement/longue-duree',
  },
  title: "Location longue durée à Madrid : ce que dit la loi (LAU) — Madrid & Toi",
  description:
    "Durée minimale du bail, prórroga automatique, dépôt de garantie, et le piège du contrat de temporada. Ce qu'il faut savoir avant de signer un bail longue durée à Madrid.",
};

export default function LongueDureePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Location longue durée à Madrid : ce que dit la loi (LAU)",
      description:
        "Durée minimale du bail, prórroga automatique, dépôt de garantie, et le piège du contrat de temporada. Ce qu'il faut savoir avant de signer un bail longue durée à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      url: "https://madrid-et-toi.com/logement/longue-duree",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/longue-duree" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Location longue durée", item: "https://madrid-et-toi.com/logement/longue-duree" },
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
            href="/logement"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide logement
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Location longue durée —{" "}
            <span className="not-italic font-extrabold text-[#d6442a]">ce que dit vraiment la loi</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            La loi espagnole protège fortement les locataires en longue durée
            (<em>larga duración</em>) — bien plus qu&apos;on ne le croit en
            arrivant de France. Mais un piège très répandu à Madrid fait perdre
            ces protections à beaucoup d&apos;expatriés sans qu&apos;ils s&apos;en
            rendent compte : le contrat de <em>temporada</em>.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Ce que garantit la LAU */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            La LAU : une durée minimale bien plus longue qu&apos;en France
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            En Espagne, les baux d&apos;habitation à usage de résidence
            principale sont encadrés par la <strong>LAU</strong> (
            <em>Ley de Arrendamientos Urbanos</em>). Même si le contrat que tu
            signes indique une durée plus courte (souvent 1 an, renouvelable),
            la loi impose une <strong>durée minimale garantie</strong> pour le
            locataire :
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">
                5 ans
              </p>
              <p className="text-[#171712] text-sm">
                Si le propriétaire est un <strong>particulier</strong> —
                le cas le plus fréquent à Madrid
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">
                7 ans
              </p>
              <p className="text-[#171712] text-sm">
                Si le propriétaire est une <strong>société</strong>{" "}
                (SL, fonds d&apos;investissement, etc.)
              </p>
            </div>
          </div>
          <p className="text-[#171712] leading-relaxed text-lg mt-8">
            Concrètement : si tu signes un contrat d&apos;un an avec un
            propriétaire particulier, il se <strong>prolonge automatiquement</strong>{" "}
            (<em>prórroga tácita</em>) année après année jusqu&apos;à atteindre
            5 ans, sauf si <strong>toi</strong>, le locataire, décides de
            partir. Le propriétaire ne peut pas te mettre dehors avant ce
            terme, sauf motifs très encadrés par la loi (besoin personnel du
            logement notifié dans les formes, impayés, etc.).
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Une fois ce palier de 5 (ou 7) ans atteint, si ni l&apos;un ni
            l&apos;autre ne signifie son intention de ne pas renouveler, le
            contrat entre dans une <strong>prolongation tacite annuelle</strong>{" "}
            de 3 années supplémentaires. Le propriétaire doit prévenir au moins{" "}
            <strong>4 mois</strong> à l&apos;avance s&apos;il ne souhaite pas
            renouveler ; le locataire, <strong>2 mois</strong>. Un locataire en
            situation de vulnérabilité justifiée peut aussi demander une
            prolongation supplémentaire de 12 mois en fin de contrat.
          </p>
          <div className="mt-8 bg-[#f2f0e9] rounded-2xl p-6">
            <p className="text-[#171712] text-sm leading-relaxed">
              <strong>En résumé :</strong> une fois le bail signé, c&apos;est
              le locataire qui a la main sur la durée, pas le propriétaire.
              C&apos;est l&apos;inverse de ce qu&apos;on imagine souvent en
              arrivant de France.
            </p>
          </div>
        </div>
      </section>

      {/* Le piège temporada */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Le piège du contrat de <em>temporada</em>
          </h2>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-6">
            Face à un marché tendu, beaucoup de propriétaires madrilènes
            proposent aujourd&apos;hui des <strong className="text-white">
              contratos de temporada
            </strong>{" "}
            (contrats saisonniers) plutôt que des baux classiques
            d&apos;habitation. Ce type de contrat existe légalement pour un
            besoin temporaire précis — une mission professionnelle, des
            études, des travaux dans son propre logement. Il ne bénéficie{" "}
            <strong className="text-white">d&apos;aucune des protections de la LAU</strong>{" "}
            : pas de durée minimale, pas de prórroga automatique, résiliation
            bien plus simple pour le propriétaire.
          </p>
          <p className="text-[#fbe8e4]/80 leading-relaxed text-lg mb-8">
            Le problème : à Madrid, ce format sert de plus en plus souvent à
            louer un logement qui sera en réalité occupé comme résidence
            principale sur plusieurs années — en contournant les protections
            que la loi est censée garantir. Si tu comptes t&apos;installer
            durablement, vérifie systématiquement quel type de contrat on te
            propose avant de signer.
          </p>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Si tu cherches à t&apos;installer pour plusieurs années, un{" "}
              <em>contrato de temporada</em> n&apos;est pas ta protection —
              c&apos;est celle du propriétaire. Demande explicitement un
              &laquo; contrato de arrendamiento de vivienda habitual &raquo;.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Dépôt et garanties */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Dépôt de garantie et garanties supplémentaires
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            La <strong>fianza légale</strong> obligatoire correspond à{" "}
            <strong>1 mois de loyer</strong> pour un bail d&apos;habitation, à
            déposer auprès de l&apos;organisme de la Communauté de Madrid
            (selon les régions). En pratique, à Madrid, les propriétaires
            demandent presque toujours des garanties supplémentaires
            (<em>garantías adicionales</em>) : 1 à 2 mois de loyer de plus, un{" "}
            <strong>aval bancario</strong> (caution bancaire), ou une assurance
            impayés de loyer (<em>seguro de impago</em>).
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Pour un Français fraîchement arrivé, sans bulletin de salaire
            espagnol ni historique bancaire local, ces garanties
            supplémentaires sont souvent la principale difficulté — plus que
            le loyer lui-même. Un{" "}
            <Link
              href="/logement/appartement"
              className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
            >
              contrat de travail espagnol
            </Link>{" "}
            ou une lettre d&apos;engagement employeur facilite beaucoup les
            choses. Prévoir 2 à 3 mois de loyer disponibles dès la signature
            n&apos;est pas rare.
          </p>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Longue durée, temporada, ou coloc courte durée ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f2f0e9]">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-[#171712] font-semibold">Format</th>
                  <th className="text-left px-4 py-3 text-[#171712] font-semibold">Protection légale</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl text-[#171712] font-semibold">Pour qui</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f0e9]">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#171712] font-medium">Bail longue durée (LAU)</td>
                  <td className="px-4 py-3 text-[#171712]">Forte — 5/7 ans garantis</td>
                  <td className="px-4 py-3 text-[#171712]">Installation stable, familles</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-4 py-3 text-[#171712] font-medium">Contrato de temporada</td>
                  <td className="px-4 py-3 text-[#171712]">Faible — durée libre</td>
                  <td className="px-4 py-3 text-[#171712]">Mission courte, étudiant, transition</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-[#171712] font-medium">
                    <Link href="/logement/colocation" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
                      Colocation
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-[#171712]">Variable selon le bail signé</td>
                  <td className="px-4 py-3 text-[#171712]">Premier logement, budget serré</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#171712]/50 text-xs mt-3">
            Cadre légal : Ley de Arrendamientos Urbanos (LAU). Vérifie toujours le texte exact du contrat avant signature.
          </p>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/logement/prix" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Prix au m² par quartier
            </Link>
            <Link href="/logement/colocation" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver une colocation
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Choisir son quartier
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Budget de vie réel à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Organiser son déménagement Paris → Madrid" href="/demenagement/paris-madrid" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            Agences, contrats de bail, quartiers par budget — les prochains
            guides logement arrivent bientôt.
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
