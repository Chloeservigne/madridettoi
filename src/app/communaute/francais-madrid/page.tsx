import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "La communauté française à Madrid — Madrid & Toi",
  description:
    "35 000 Français vivent à Madrid. Associations, groupes, événements — comment trouver ta communauté et ne pas te sentir seul(e).",
};

export default function FrancaisMadridPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/communaute"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Communauté
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Communauté
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            La communauté —{" "}
            <span className="italic text-[#C8614A]">les Français à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Environ 35 000 Français vivent à Madrid — l&apos;une des plus grandes
            communautés françaises d&apos;Europe. Des associations de quartier
            aux groupes WhatsApp, en passant par les intercambios et les apéros
            expats : tu n&apos;es pas seul à débarquer. Et les Madrilènes sont
            réputés pour leur accueil.
          </p>
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                ~35 000
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">Français</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">Inscrits au consulat</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                1ère
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">Communauté étrangère</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">À Madrid</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-1">
                1913
              </p>
              <p className="text-[#5a3e35] text-sm font-semibold">Institut français</p>
              <p className="text-[#5a3e35]/60 text-xs mt-1">Fondé cette année-là</p>
            </div>
          </div>
        </div>
      </section>

      {/* Madrid Accueil & Institut français */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Madrid Accueil et l&apos;Institut français
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Pour les premières semaines surtout, deux structures sont
            incontournables. L&apos;une est une association d&apos;entraide
            entre francophones, l&apos;autre un lieu culturel qui rayonne
            bien au-delà des cours de langue.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg">
                  Madrid Accueil
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#7A8C5E]/10 text-[#7A8C5E] text-xs font-semibold">
                  Incontournable
                </span>
              </div>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-4">
                L&apos;association principale pour les francophones nouvellement
                arrivés à Madrid. Des bénévoles eux-mêmes expatriés accueillent
                les nouveaux arrivants, répondent aux questions pratiques et
                organisent des événements tout au long de l&apos;année.
                Un filet de sécurité social très apprécié pour les premières
                semaines de solitude.
              </p>
              <div className="bg-[#EDE0C8] rounded-xl px-4 py-3">
                <p className="text-[#2C1810] font-semibold text-sm">
                  Permanences tous les jeudis de 11h à 13h
                </p>
                <p className="text-[#5a3e35] text-xs mt-1">
                  À l&apos;Institut français de Madrid — gratuit, sans
                  inscription.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg">
                  L&apos;Institut français de Madrid
                </p>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-xs font-semibold">
                  Bien plus que des cours
                </span>
              </div>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                L&apos;Institut français n&apos;est pas qu&apos;une école de
                langue pour Espagnols. C&apos;est un vrai lieu de vie franco-espagnol :
                cinéma en VO, expositions, conférences, bibliothèque, événements
                culturels bilingues. Une belle façon de rencontrer à la fois des
                Français et des Espagnols francophiles qui partagent les mêmes
                références culturelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes en ligne */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Groupes en ligne — où trouver des réponses et du lien
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            La communauté francophone de Madrid est très active en ligne.
            Avant même d&apos;arriver, on peut rejoindre ces espaces pour
            poser ses questions, trouver un coloc ou simplement briser la
            glace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-xs mb-2">
                Facebook
              </p>
              <p className="font-semibold text-[#2C1810] mb-2">
                &quot;Les Français à Madrid&quot;
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Groupe privé avec plusieurs milliers de membres. Très actif pour
                les questions pratiques : recommandations de médecin, apartements
                à sous-louer, bons plans, questions administratives. La première
                adresse pour obtenir un conseil d&apos;expérience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-xs mb-2">
                WhatsApp
              </p>
              <p className="font-semibold text-[#2C1810] mb-2">
                Groupes de quartier
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Les groupes WhatsApp de quartier ou d&apos;entraide circulent
                souvent via les groupes Facebook. Ils sont plus instantanés —
                idéal pour des urgences ou des questions logistiques du
                quotidien.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-xs mb-2">
                Discord
              </p>
              <p className="font-semibold text-[#2C1810] mb-2">
                Digital nomads &amp; jeunes expats
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Plusieurs serveurs Discord regroupent des jeunes expatriés et
                des travailleurs nomades à Madrid. Atmosphère plus décontractée
                que Facebook, davantage axée sur le mode de vie et les
                recommandations culturelles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-xs mb-2">
                InterNations
              </p>
              <p className="font-semibold text-[#2C1810] mb-2">
                Réseau expat international
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Réseau expat plus formel, avec des dîners thématiques, des
                excursions et des événements réguliers à Madrid. Utile pour
                élargir son réseau au-delà de la bulle française — on y
                rencontre des expatriés du monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intercambios */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les intercambios — rencontrer des Espagnols gratuitement
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            L&apos;intercambio linguistique (ou &quot;language exchange&quot;)
            est l&apos;une des meilleures façons de rencontrer des Madrilènes
            authentiquement. Le principe : un Français et un Espagnol se
            retrouvent autour d&apos;un verre, parlent français 30 minutes,
            espagnol 30 minutes. Gratuit, convivial, efficace.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Plusieurs bars de{" "}
            <Link
              href="/logement/quartiers/malasana"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              Malasaña
            </Link>
            ,{" "}
            <Link
              href="/logement/quartiers/chueca"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              Chueca
            </Link>{" "}
            et du quartier Huertas organisent des soirées intercambio
            hebdomadaires. Les trouver sur Meetup.com ou via l&apos;appli
            Tandem — qui permet aussi de faire des échanges en visio si on
            veut commencer avant même d&apos;arriver.
          </p>

          <div className="bg-[#EDE0C8] rounded-2xl p-6">
            <p className="font-semibold text-[#2C1810] mb-3">
              Pourquoi les intercambios sont les meilleurs pour s&apos;intégrer
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                <span className="text-[#5a3e35] text-sm leading-relaxed">
                  Gratuit ou presque — juste le prix de la consommation.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                <span className="text-[#5a3e35] text-sm leading-relaxed">
                  On rencontre des Espagnols et pas seulement des expats —
                  ce qui fait vraiment la différence pour s&apos;intégrer.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                <span className="text-[#5a3e35] text-sm leading-relaxed">
                  On progresse en{" "}
                  <Link
                    href="/vivre/espagnol"
                    className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                  >
                    espagnol
                  </Link>{" "}
                  beaucoup plus vite que dans une salle de cours.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                <span className="text-[#5a3e35] text-sm leading-relaxed">
                  Le format brise naturellement la glace — on a un objectif
                  commun dès le début.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meetup & CCIFE */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Meetup et réseau professionnel
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Pour ceux qui cherchent à rencontrer des gens autour d&apos;activités
            ou à développer un réseau professionnel franco-espagnol, deux
            autres options méritent le détour.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                Meetup Madrid
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                La plateforme Meetup regorge de groupes actifs à Madrid :
                randonnées en Sierra de Guadarrama, sorties vélo, photography
                walks, jeux de société, running, cours de cuisine. Le format
                est simple — on s&apos;inscrit en ligne, on vient, on rencontre
                des gens sans obligation d&apos;engagement. Un excellent moyen
                de sortir de chez soi les premières semaines.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">
                    Groupes mixtes (expats + Madrilènes) ou 100% francophones selon les événements.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">
                    Pas d&apos;engagement, fréquence à la carte — idéal pour
                    explorer sans pression.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                La CCIFE — Chambre Franco-Espagnole
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                La{" "}
                <Link
                  href="/travailler/entreprises-francaises"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  Chambre Franco-Espagnole (CCIFE)
                </Link>{" "}
                organise régulièrement des événements de networking
                professionnel, des déjeuners thématiques et des conférences
                sur les relations économiques franco-espagnoles. Si ton
                objectif est de développer un réseau professionnel à Madrid,
                c&apos;est un passage obligé — surtout si tu travailles avec
                des entreprises françaises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section sombre */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            S&apos;intégrer, pas juste &quot;survivre entre Français&quot;
          </h2>
          <div className="bg-white/10 rounded-2xl p-5 mb-8">
            <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">
              Le piège de la bulle française
            </p>
            <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
              La communauté française est précieuse pour les premières semaines — pour
              les questions pratiques, les conseils, ne pas se sentir seul. Mais rester
              exclusivement dans cette bulle empêche de profiter de ce qui rend Madrid
              unique : la culture espagnole, la langue, les amitiés avec des locaux.
              Les intercambios et Meetup sont les meilleures options parce qu&apos;ils
              mélangent toutes les nationalités.
            </p>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Arriver dans une nouvelle ville peut sembler intimidant. Mais Madrid est
              une ville particulièrement accueillante — les Madrilènes ont la réputation
              de faire facilement la fête avec des inconnus. La première sortie, la
              première conversation en espagnol, le premier intercambio — c&apos;est
              toujours après le premier pas que tout s&apos;accélère.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/vivre/espagnol"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Apprendre l&apos;espagnol à Madrid
            </Link>
            <Link
              href="/vivre/sortir"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Sortir à Madrid
            </Link>
            <Link
              href="/travailler/entreprises-francaises"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Travailler dans une entreprise française
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
            <Link
              href="/demenagement/checklist"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Checklist du déménagement
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
            Vie sociale, espagnol, sorties, logement — les prochains guides
            sur la vie à Madrid arrivent bientôt.
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
