import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre/animaux',
  },
  title: "Déménager à Madrid avec son chien ou son chat — Madrid & Toi",
  description:
    "Passeport européen, puce électronique, vaccin antirabique, vétérinaire à Madrid — tout ce qu'il faut savoir pour emmener son animal de compagnie en Espagne.",
};

export default function AnimauxPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Déménager à Madrid avec son chien ou son chat",
      description:
        "Passeport européen, puce électronique, vaccin antirabique, vétérinaire à Madrid — tout ce qu'il faut savoir pour emmener son animal de compagnie en Espagne.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      url: "https://madrid-et-toi.com/vivre/animaux",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/vivre/animaux" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Vivre à Madrid", item: "https://madrid-et-toi.com/vivre" },
        { "@type": "ListItem", position: 3, name: "Déménager avec son animal", item: "https://madrid-et-toi.com/vivre/animaux" },
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
            Guide animaux
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Déménager à Madrid{" "}
            <span className="not-italic font-bold text-[#d6442a]">avec ton animal</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Emmener son chien ou son chat en Espagne depuis la France est
            simple entre deux pays de l&apos;UE — à condition d&apos;avoir les
            bons documents dans le bon ordre. Aucune quarantaine n&apos;est
            nécessaire, mais quelques étapes sont incontournables.
          </p>
          <AuthorBadge date="juillet 2026" />
        </div>
      </section>

      {/* Passeport européen */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Le passeport européen pour animaux de compagnie
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Pour voyager avec un chien, un chat ou un furet entre pays de
            l&apos;Union européenne, le document de référence est le{" "}
            <strong>passeport européen pour animaux de compagnie</strong>,
            délivré par n&apos;importe quel vétérinaire habilité en France. Il
            est valable à vie, tant que les informations de santé (notamment
            le rappel antirabique) restent à jour. Ce document — et non un
            simple carnet de santé — est ce qui te sera demandé en cas de
            contrôle en voyageant vers l&apos;Espagne.
          </p>
        </div>
      </section>

      {/* Checklist étapes */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-8">
            Les 3 conditions à respecter, dans l&apos;ordre
          </h2>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#d6442a]">
              <p className="text-white font-semibold">🐾 Avant de partir</p>
            </div>
            <div className="divide-y divide-[#f2f0e9]">
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">1. La puce électronique — avant tout le reste</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">
                    L&apos;identification par puce doit être posée{" "}
                    <strong>avant</strong> la vaccination antirabique, sinon
                    celle-ci n&apos;est pas reconnue comme valable.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">2. La vaccination antirabique</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">
                    Réalisée par un vétérinaire habilité, après la pose de la puce.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#171712] text-sm">3. Un délai d&apos;attente de 21 jours minimum</p>
                  <p className="text-[#171712]/70 text-xs mt-0.5">
                    Après la primo-vaccination, il faut attendre au moins 21
                    jours avant de voyager — le temps que l&apos;immunité se
                    développe. Un animal déjà vacciné avec un rappel à jour
                    n&apos;a pas besoin de ce délai.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#171712]/70 text-sm mt-4">
            Anticipe large : si ton animal n&apos;a jamais été vacciné ou
            identifié, prévois au moins un mois avant la date de départ prévue.
          </p>
        </div>
      </section>

      {/* Sur place */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-white mb-6">
            Une fois à Madrid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#d6442a] font-semibold mb-3">Trouver un vétérinaire</p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                Les <em>clínicas veterinarias</em> sont présentes dans
                pratiquement tous les quartiers. Beaucoup pratiquent des
                tarifs très proches de la France pour les consultations
                courantes, avec un bon niveau d&apos;équipement dans les
                grandes cliniques du centre.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#d6442a] font-semibold mb-3">Races soumises à licence</p>
              <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">
                Certaines races classées &laquo; potentiellement dangereuses
                &raquo; (<em>perro potencialmente peligroso</em>, PPP —
                notamment pitbull, rottweiler, staffordshire) exigent une{" "}
                <strong className="text-white">licence municipale</strong> et
                une assurance responsabilité civile spécifique auprès de la
                mairie de Madrid. À vérifier avant l&apos;arrivée si ton
                animal est concerné.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Madrid est une ville globalement très accueillante pour les
              animaux : parcs dédiés, terrasses qui les acceptent, et un
              métro qui autorise les chiens dans un sac de transport fermé.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Vie quotidienne */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Se loger et se déplacer avec un animal
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg">
            Beaucoup d&apos;annonces sur Idealista et Fotocasa précisent
            explicitement si les animaux sont acceptés (<em>se admiten
            mascotas</em>) — un critère à filtrer dès la recherche d&apos;
            <Link href="/logement/appartement" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              appartement
            </Link>
            . Certains propriétaires demandent une caution supplémentaire
            pour couvrir d&apos;éventuels dégâts.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mt-4">
            Côté{" "}
            <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              transports
            </Link>
            , les chiens de petite taille voyagent gratuitement dans le métro
            et le bus EMT dans un sac ou une cage de transport fermée. Les
            chiens de plus grande taille doivent être muselés et tenus en
            laisse courte, et sont acceptés uniquement en dehors des heures de
            forte affluence sur certaines lignes.
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
            <Link href="/demenagement/cout-demenagement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Budget du déménagement
            </Link>
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/vivre/transports" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              Transports à Madrid
            </Link>
            <Link href="/vivre/sante" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La santé à Madrid
            </Link>
            <Link href="/demenagement/checklist" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
              La checklist complète du déménagement
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Faire ses courses à Madrid" href="/vivre/courses" />

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
            Transports, santé, courses, espagnol, sorties — tous nos guides
            pratiques pour vivre au mieux à Madrid.
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
