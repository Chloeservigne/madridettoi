import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Apprendre l'espagnol à Madrid : EOI, académies, intercambios — Madrid & Toi",
  description:
    "EOI à ~250€ le quadrimestre, académies privées (150–400€/mois), intercambios gratuits dans les bars de Malasaña et Chueca. Tout pour progresser vite en espagnol à Madrid.",
};

export default function EspagnolPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/vivre"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Vivre à Madrid
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide langue
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Apprendre l&apos;espagnol à Madrid —{" "}
            <span className="italic text-[#C8614A]">les vraies options</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Cours du soir à 250 €, échanges gratuits dans les bars, immersion
            totale dans la rue — Madrid est l&apos;une des meilleures villes au
            monde pour progresser en espagnol. On te détaille toutes les
            options, du plus accessible au plus intensif.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              EOI : ~250 €/quadrimestre
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Intercambios gratuits
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Diplôme DELE officiel
            </span>
          </div>
        </div>
      </section>

      {/* Les EOI */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les Escuelas Oficiales de Idiomas — la filière publique
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            Les EOI sont des écoles publiques de langues, reconnues par
            l&apos;État espagnol et sérieuses. Elles proposent des cours du
            soir pour adultes, de niveau A1 à C1, à des tarifs qui
            n&apos;ont aucun équivalent dans le privé : environ{" "}
            <strong>250 € par quadrimestre</strong>, soit moins de 50 € par
            mois.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Ce qui est bien</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Diplôme officiel reconnu à l&apos;issue de chaque niveau</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Cours du soir adaptés aux actifs</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Niveaux A1 à C1, progression structurée</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#7A8C5E] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Prix imbattable : ~250 €/quadrimestre</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Le point de vigilance</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
                  <span className="text-[#5a3e35] text-sm">Très demandées — liste d&apos;attente fréquente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
                  <span className="text-[#5a3e35] text-sm">Inscription en juin pour la rentrée de septembre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
                  <span className="text-[#5a3e35] text-sm">Pas de cours intensifs — rythme plus lent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#EDE0C8] rounded-2xl p-6">
            <p className="font-semibold text-[#2C1810] mb-2">Le conseil pratique</p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              Si tu arrives à Madrid au printemps, inscris-toi dès juin pour la
              rentrée de septembre. Si tu rates la fenêtre d&apos;inscription, tu
              peux te mettre sur liste d&apos;attente — des places se libèrent
              parfois en octobre. Madrid compte plusieurs EOI réparties dans la
              ville ; tente-les toutes pour maximiser tes chances.
            </p>
          </div>
        </div>
      </section>

      {/* Les académies privées */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les académies privées — flexibles et intensives
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Si tu veux commencer immédiatement, sans attendre la rentrée de
            septembre, les académies privées sont la solution. Plus chères, mais
            plus flexibles — et certaines ont une vraie réputation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Inhispania</p>
              <p className="font-semibold text-[#2C1810] mb-2">Cours intensifs en petits groupes</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Spécialisée dans les cours intensifs à 20h par semaine, en
                groupes de 5 à 6 personnes maximum. Format idéal pour progresser
                vite dès l&apos;arrivée à Madrid. Bonne réputation pour
                l&apos;encadrement pédagogique.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">TANDEM Madrid</p>
              <p className="font-semibold text-[#2C1810] mb-2">Reconnue par l&apos;Instituto Cervantes</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Académie accréditée par l&apos;Instituto Cervantes, la référence
                institutionnelle de la langue espagnole. TANDEM organise
                également des échanges linguistiques en interne — un bon point
                d&apos;entrée pour rencontrer des Madrilènes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Eureka Madrid</p>
              <p className="font-semibold text-[#2C1810] mb-2">Fondée en 1988 — spécialiste ELE</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                L&apos;une des académies les plus anciennes de Madrid, spécialisée
                en espagnol langue étrangère (ELE). Solide expérience
                pédagogique, différents formats de cours selon le rythme
                souhaité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Club de Español</p>
              <p className="font-semibold text-[#2C1810] mb-2">Cours du soir accessibles</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Format cours du soir à tarifs compétitifs pour le privé :{" "}
                <strong>~115 €</strong> pour 4 semaines,{" "}
                <strong>~320 €</strong> pour 12 semaines. Bonne option pour
                compléter une immersion au quotidien sans budget extensif.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="font-semibold text-[#2C1810] text-sm mb-2">Fourchette de prix académies privées</p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              Compte entre <strong>150 € et 400 € par mois</strong> selon
              l&apos;intensité et la formule choisie. Les cours intensifs (20h+
              par semaine) sont en haut de la fourchette ; les cours du soir 2 à
              3 fois par semaine, nettement moins.
            </p>
          </div>
        </div>
      </section>

      {/* Intercambios */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les intercambios — apprendre en échangeant, gratuitement
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            Madrid a une culture des intercambios linguistiques qui
            n&apos;existe nulle part ailleurs à ce niveau. Le principe : tu
            passes 30 minutes en espagnol avec un natif, puis 30 minutes en
            français — et tu rentres chez toi en ayant progressé, sans avoir
            dépensé plus que ta consommation au bar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-3">Où en trouver</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Meetup — groupes d&apos;intercambio actifs à Madrid</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Groupes Facebook dédiés aux expats francophones</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Application Tandem — format digital en parallèle</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                  <span className="text-[#5a3e35] text-sm">Application HelloTalk — même principe</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-3">Les quartiers les plus actifs</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Les bars organisant des soirées intercambios régulières se
                concentrent dans{" "}
                <Link href="/logement/quartiers/malasana" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                  Malasaña
                </Link>
                ,{" "}
                <Link href="/logement/quartiers/chueca" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                  Chueca
                </Link>{" "}
                et{" "}
                <Link href="/logement/quartiers/lavapies" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                  Lavapiés
                </Link>
                . Ce sont les quartiers les plus cosmopolites de Madrid — tu y
                trouves facilement des Madrilènes qui veulent pratiquer leur
                français.
              </p>
            </div>
          </div>

          <div className="bg-[#EDE0C8] rounded-2xl p-6">
            <p className="font-semibold text-[#2C1810] mb-2">Le format type d&apos;un intercambio</p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              On se retrouve dans un bar, souvent en semaine en soirée.
              30 minutes chacun dans sa langue — tu parles espagnol, l&apos;autre
              parle français. Pas de correction formelle, pas de cours : juste
              de la conversation vraie, dans un contexte détendu. C&apos;est là
              que la langue s&apos;ancre réellement.
            </p>
          </div>
        </div>
      </section>

      {/* Applications + Immersion */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Applications et immersion quotidienne
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Les applications peuvent compléter utilement un apprentissage, mais
            elles ne remplaceront jamais l&apos;immersion. À utiliser en
            renfort, pas comme unique méthode.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Duolingo</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Gamifié, facile à intégrer dans le quotidien. Bien pour débuter
                ou maintenir un rythme régulier. Insuffisant seul pour
                progresser vite.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Babbel</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Plus structuré que Duolingo, orienté situations réelles.
                Meilleure progression grammaticale. Payant (~7 €/mois).
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Pimsleur</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Excellent pour l&apos;oral et la prononciation. Méthode audio,
                à écouter pendant les trajets. Très efficace pour
                l&apos;oreille et les automatismes de parole.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-1">Anki</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Cartes de mémorisation par répétition espacée. La référence
                pour ancrer le vocabulaire sur le long terme. Gratuit,
                open source, très flexible.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#2C1810]">
              <p className="text-[#E8A838] font-semibold">Immersion quotidienne — les réflexes à prendre dès le premier jour</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Passer son téléphone en espagnol</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-0.5">Quelques minutes de friction, des centaines de mots vus chaque jour</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Regarder des séries en VO espagnole</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-0.5">Sous-titres en espagnol, pas en français — l&apos;oreille s&apos;adapte en quelques semaines</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Commander en espagnol dès le premier jour</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-0.5">Même si c&apos;est laborieux — les Madrilènes sont patients et encourageants</p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Écouter des podcasts en espagnol</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-0.5">Dans les transports, en faisant la cuisine — le cerveau travaille en arrière-plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section sombre — blockquote */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Le DELE — avoir un diplôme officiel
          </h2>

          <div className="bg-white/10 rounded-2xl p-5 mb-8">
            <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Diplôme de l&apos;Instituto Cervantes</p>
            <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
              Le <strong className="text-white">DELE (Diplomas de Español como Lengua Extranjera)</strong>{" "}
              est le diplôme officiel délivré par l&apos;Instituto Cervantes, la
              référence institutionnelle de la langue espagnole dans le monde.
              Reconnu internationalement, il couvre les niveaux A1 à C2 du
              Cadre européen commun. Utile pour valoriser son CV, accéder à
              certaines formations en Espagne ou dans des entreprises
              hispanophones. Les sessions d&apos;examen ont lieu plusieurs fois
              par an à Madrid et dans les instituts Cervantes du monde entier.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              L&apos;espagnol s&apos;apprend surtout dans la rue à Madrid. Les
              cours donnent la structure, les intercambios donnent
              l&apos;aisance — mais c&apos;est le bar du coin, le boulanger et
              le voisin qui font les vrais progrès.
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
              href="/vivre/sortir"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Sortir à Madrid
            </Link>
            <Link
              href="/communaute"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La communauté française à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
            <Link
              href="/travailler/emploi"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un emploi à Madrid
            </Link>
            <Link
              href="/se-decider/pourquoi-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Pourquoi s&apos;installer à Madrid
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
            Courses, sorties, vie pratique — les prochains guides sur
            Madrid arrivent bientôt.
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
