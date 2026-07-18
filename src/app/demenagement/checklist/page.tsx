import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/demenagement/checklist',
  },
  title: "Checklist déménagement Madrid — Madrid & Toi",
  description:
    "La checklist complète pour déménager à Madrid : de J-6 mois à J+3 mois, toutes les étapes pour ne rien oublier.",
};

export default function ChecklistPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Checklist déménagement Madrid — de J-6 mois à J+3 mois",
      description:
        "La checklist complète pour déménager à Madrid : de J-6 mois à J+3 mois, toutes les étapes pour ne rien oublier.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/demenagement/checklist",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/demenagement/checklist" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Déménagement", item: "https://madrid-et-toi.com/demenagement" },
        { "@type": "ListItem", position: 3, name: "Checklist", item: "https://madrid-et-toi.com/demenagement/checklist" },
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
            href="/demenagement"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour au déménagement
          </Link>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            Déménagement
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Déménager à Madrid —{" "}
            <span className="not-italic font-bold text-[#d6442a]">la checklist complète</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Du premier coup de fil au déménageur à ton premier café en terrasse
            à Madrid — toutes les étapes, dans l&apos;ordre.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">J-6 mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">J-1 mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">Jour J</span>
            <span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">J+3 mois</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Phase 1 — J-6 mois */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-10">
            6 mois avant le départ
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Décide de la date</h3>
                <p className="text-[#171712] leading-relaxed">
                  Fixe une deadline ferme. Sans date, le projet reste un rêve.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Commence à apprendre l&apos;espagnol</h3>
                <p className="text-[#171712] leading-relaxed">
                  15 min par jour sur Duolingo ou Babbel. Tu n&apos;as pas besoin d&apos;être
                  bilingue pour partir, mais les bases changent tout.{" "}
                  <Link
                    href="/vivre/espagnol"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Nos ressources pour apprendre l&apos;espagnol
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Explore le budget de vie à Madrid</h3>
                <p className="text-[#171712] leading-relaxed">
                  Loyer, courses, transports. Compare avec ton niveau de vie actuel.{" "}
                  <Link
                    href="/se-decider/budget"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le coût de la vie à Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Pense à ton statut professionnel</h3>
                <p className="text-[#171712] leading-relaxed">
                  Salarié en remote ? Autónomo ? Tu cherches un emploi local ? Chaque option a
                  ses contraintes et délais.{" "}
                  <Link
                    href="/travailler"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir nos guides sur le travail à Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 — J-3 mois */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-10">
            3 mois avant le départ
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Donne congé ou démissionne</h3>
                <p className="text-[#171712] leading-relaxed">
                  Le préavis est souvent de 1 à 3 mois selon le contrat et l&apos;ancienneté. Ne
                  tarde pas — c&apos;est souvent l&apos;étape qui fixe le calendrier de tout le reste.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">6</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Résilie ou transfère tes contrats français</h3>
                <p className="text-[#171712] leading-relaxed">
                  Assurance habitation, abonnements, banque française — garde-la pour la
                  transition. Tu en auras besoin les premières semaines.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">7</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Commence à chercher ton appartement à Madrid</h3>
                <p className="text-[#171712] leading-relaxed">
                  Idealista, Fotocasa, groupes Facebook. Prévois de venir visiter si possible —
                  signer à distance est faisable mais risqué.{" "}
                  <Link
                    href="/logement/appartement"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide pour trouver un appartement
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">8</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Prépare tes documents administratifs</h3>
                <p className="text-[#171712] leading-relaxed">
                  Photocopies passeport / CNI, acte de naissance, diplômes traduits (apostille),
                  relevés bancaires 3 mois. Prépare aussi un dossier numérique — tout en PDF.{" "}
                  <Link
                    href="/papiers/nie"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir ce qu&apos;il faut pour le NIE
                  </Link>
                  . Si ton passeport ou ta CNI expire bientôt,{" "}
                  <Link
                    href="/papiers/documents-francais"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    renouvelle-les depuis Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3 — J-1 mois */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-10">
            1 mois avant le départ
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">9</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Signe ou réserve ton logement</h3>
                <p className="text-[#171712] leading-relaxed">
                  Si possible avant d&apos;arriver pour éviter l&apos;hôtel. Une option : sous-louer
                  quelques semaines via Airbnb pour visiter au calme avant de signer.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">10</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Organise le déménagement</h3>
                <p className="text-[#171712] leading-relaxed">
                  Déménageur Paris–Madrid (Eurodemenagement, AGS), ou location camion pour petits
                  volumes.{" "}
                  <Link
                    href="/demenagement/paris-madrid"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide déménagement Paris–Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">11</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Ouvre un compte bancaire en Espagne</h3>
                <p className="text-[#171712] leading-relaxed">
                  Revolut ou N26 pour commencer, puis Sabadell, BBVA ou CaixaBank pour les
                  domiciliations.{" "}
                  <Link
                    href="/papiers/compte-bancaire"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide compte bancaire en Espagne
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">12</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Préviens ta CPAM</h3>
                <p className="text-[#171712] leading-relaxed">
                  Demande le formulaire S1 si tu restes affilié au système français
                  temporairement.{" "}
                  <Link
                    href="/papiers/secu"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide sécu à Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4 — Semaine 1 */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-10">
            Dès ton arrivée
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">13</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Inscris-toi au Padrón municipal</h3>
                <p className="text-[#171712] leading-relaxed">
                  Mairie de ton arrondissement, dans les 3 mois — mais idéalement dès
                  l&apos;arrivée. Nécessaire pour le NIE et tout le reste.{" "}
                  <Link
                    href="/papiers/padron"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide Padrón
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">14</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Prends rendez-vous pour le NIE</h3>
                <p className="text-[#171712] leading-relaxed">
                  Cita previa sur{" "}
                  <a
                    href="https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus/language/es_ES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    sede.administracionespublicas.gob.es
                  </a>
                  . Les créneaux partent vite — réserve dès que tu es inscrit au Padrón.{" "}
                  <Link
                    href="/papiers/nie"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide NIE
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">15</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Explore ton quartier</h3>
                <p className="text-[#171712] leading-relaxed">
                  Marchés, boulangeries, pharmacies. Le plus tôt tu trouves tes repères, le plus
                  vite tu te sens chez toi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 5 — Mois 1-3 */}
      <section className="py-20 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-10">
            Dans les 3 premiers mois
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">16</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Obtiens ton NIE</h3>
                <p className="text-[#171712] leading-relaxed">
                  Avec le rendez-vous pris à l&apos;étape 14.{" "}
                  <Link
                    href="/papiers/nie"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide NIE complet
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">17</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Inscris-toi à la Seguridad Social</h3>
                <p className="text-[#171712] leading-relaxed">
                  Une fois que tu travailles — que tu sois salarié ou autónomo.{" "}
                  <Link
                    href="/papiers/secu"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide sécu
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">18</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Rejoins la communauté française</h3>
                <p className="text-[#171712] leading-relaxed">
                  Madrid Accueil, groupes Facebook, intercambios. Le réseau se construit dès le
                  début — ne le laisse pas pour plus tard.{" "}
                  <Link
                    href="/communaute/francais-madrid"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir nos adresses pour la communauté française
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">19</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Prends ta carte Abono Transporte</h3>
                <p className="text-[#171712] leading-relaxed">
                  L&apos;abonnement mensuel métro + bus — indispensable pour se déplacer au
                  quotidien.{" "}
                  <Link
                    href="/vivre/transports"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide transports à Madrid
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">20</div>
              <div>
                <h3 className="font-semibold text-[#171712] text-lg mb-2">Commence à t&apos;occuper de ta situation fiscale</h3>
                <p className="text-[#171712] leading-relaxed">
                  Si tu passes 183 jours en Espagne, tu deviens résident fiscal espagnol.
                  Anticipe — c&apos;est mieux de le préparer que de le subir.{" "}
                  <Link
                    href="/papiers/impots"
                    className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors"
                  >
                    Voir le guide impôts en Espagne
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section sombre */}
      <section className="py-20 px-6 bg-[#171712]">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-[#d6442a] pl-6">
            <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
              Le secret d&apos;un déménagement réussi à Madrid, c&apos;est de ne pas essayer de
              tout régler avant de partir. Certaines choses ne peuvent se faire que sur place.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#fbfaf6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
            Les prochaines étapes
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Trouver un appartement depuis la France
            </Link>
            <Link
              href="/demenagement/paris-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Déménagement Paris–Madrid
            </Link>
            <Link
              href="/vivre/transports"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Transports à Madrid
            </Link>
            <Link
              href="/papiers/impots"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors"
            >
              Impôts en Espagne
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Obtenir son NIE à Madrid" href="/papiers/nie" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            La checklist dans ta boîte mail
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10">
            La checklist dans ta boîte mail + nos guides à chaque étape de ton installation.
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
