import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Checklist déménagement à Madrid : tout faire dans l'ordre — Madrid & Toi",
  description:
    "De la décision à l'installation : 6 mois avant, 3 mois avant, semaine 1 à Madrid. NIE, padron, sécu, compte bancaire — la checklist complète pour s'installer sans rien oublier.",
};

export default function ChecklistPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/demenagement"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Déménagement
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide pratique
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Checklist du déménagement —{" "}
            <span className="italic text-[#C8614A]">tout dans l&apos;ordre</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            De la décision jusqu&apos;à la carte d&apos;assurance maladie
            espagnole dans le portefeuille. Ce guide liste tout ce qu&apos;il
            faut faire, dans quel ordre, pour éviter les oublis et les faux
            départs. Chaque étape est surmontable — la clé, c&apos;est d&apos;y
            aller dans l&apos;ordre.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              6 mois de préparation
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              NIE + padron + sécu
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Rien d&apos;insurmontable
            </span>
          </div>
        </div>
      </section>

      {/* 6 mois avant */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#2C1810] text-[#E8A838] text-xs font-semibold uppercase tracking-widest mb-6">
            6 mois avant
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Poser les bases
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            C&apos;est la phase de décision et d&apos;exploration. L&apos;objectif
            à ce stade : valider que le projet tient la route et commencer les
            grandes démarches avec suffisamment de marge.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Visiter Madrid une semaine pour valider les quartiers et tester
                la ville au quotidien — ou faire une recherche approfondie en
                ligne si ce n&apos;est pas possible.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Définir son budget logement et son{" "}
                <Link
                  href="/logement/quartiers"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  quartier cible
                </Link>
                . Se référer au guide{" "}
                <Link
                  href="/se-decider/budget"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  budget de vie réel à Madrid
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Commencer les recherches d&apos;appartement en ligne :
                Idealista et Fotocasa sont les deux plateformes dominantes.
                S&apos;inscrire aux alertes pour son budget et son quartier.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Si salarié : négocier le télétravail complet ou commencer les
                recherches d&apos;emploi côté espagnol. Si{" "}
                <Link
                  href="/travailler/freelance"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  autónomo
                </Link>{" "}
                (freelance) : anticiper les démarches d&apos;enregistrement
                à l&apos;arrivée.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Prévenir son propriétaire français du départ. Le préavis est
                généralement de <strong>3 mois</strong> pour une location vide
                et 1 mois pour une meublée — vérifier son contrat.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3 mois avant */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#2C1810] text-[#E8A838] text-xs font-semibold uppercase tracking-widest mb-6">
            3 mois avant
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Sécuriser le logement et les démarches côté français
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Le cap des 3 mois, c&apos;est celui où les décisions abstraites
            deviennent concrètes. Signer un appartement à Madrid depuis la
            France reste difficile — mieux vaut prévoir une sous-location
            temporaire si on ne peut pas visiter sur place.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Signer un{" "}
                <Link
                  href="/logement/appartement"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  appartement à Madrid
                </Link>{" "}
                — ou, à défaut, une sous-location ou une colocation temporaire
                pour les premières semaines le temps de trouver quelque chose
                de permanent.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Organiser le déménagement : déménageurs professionnels,
                location de camion, ou déménagement en voiture selon le volume.
                Paris–Madrid = 1 200 km. Prévoir un devis comparatif si gros
                volume de meubles.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Commencer les démarches pour la cita previa{" "}
                <Link
                  href="/papiers/nie"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  NIE
                </Link>{" "}
                si possible depuis la France via le consulat espagnol de ta ville.
                Les délais peuvent être longs — anticiper.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Contacter la CPAM pour demander la{" "}
                <strong>Carte Européenne d&apos;Assurance Maladie (CEAM)</strong>.
                Elle couvre les soins d&apos;urgence en Espagne pendant la
                période de transition, avant l&apos;affiliation à la{" "}
                <Link
                  href="/papiers/secu"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  Seguridad Social
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Informer les organismes français du départ imminent : CAF,
                France Travail (Pôle Emploi), centre des impôts. Certaines
                prestations s&apos;arrêtent à la date de départ, d&apos;autres
                nécessitent un décompte final.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 1 mois avant */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#2C1810] text-[#E8A838] text-xs font-semibold uppercase tracking-widest mb-6">
            1 mois avant
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Clore les chapitres français
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Le mois avant le départ, c&apos;est l&apos;heure des résiliations
            et des transmissions. Mieux vaut traiter chaque point séparément
            plutôt que de tout laisser à la dernière semaine.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Résilier les contrats français : EDF (ou autre fournisseur
                d&apos;énergie), abonnement internet, téléphone fixe. Certains
                ont des préavis d&apos;un mois — s&apos;y prendre à temps.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Mettre en place la <strong>redirection de courrier</strong> via
                La Poste — minimum 12 mois pour ne rien rater. Penser aussi à
                changer d&apos;adresse auprès de la banque, des impôts, de la
                sécu et de tout organisme important.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Informer banque française, employeur (si départ définitif),
                médecin traitant, école des enfants. Récupérer les documents
                médicaux importants (carnets de santé, résultats d&apos;analyses).
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Vider et rendre le logement français à la date prévue. Faire
                l&apos;état des lieux de sortie, récupérer le dépôt de
                garantie (délai légal : 1 à 2 mois après remise des clés).
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Semaine 1 */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#C8614A] text-white text-xs font-semibold uppercase tracking-widest mb-6">
            Semaine 1 à Madrid
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Les priorités dès l&apos;arrivée
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            La première semaine, l&apos;objectif n&apos;est pas de tout régler —
            c&apos;est de poser les fondations. Quelques démarches urgentes,
            le reste peut attendre.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Prendre la cita previa pour le{" "}
                <Link
                  href="/papiers/nie"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  NIE
                </Link>{" "}
                si ce n&apos;est pas encore fait. Les créneaux partent vite —
                se connecter le lundi à 8h pile sur le site officiel pour
                trouver des disponibilités.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Ouvrir un{" "}
                <Link
                  href="/papiers/compte-bancaire"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  compte bancaire espagnol
                </Link>
                . C&apos;est souvent nécessaire avant même d&apos;obtenir le
                NIE — certaines banques (Revolut, Wise, N26) l&apos;acceptent
                avec un passeport.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Souscrire une <strong>assurance habitation</strong> — obligatoire
                contractuellement dans la plupart des baux espagnols. Mapfre,
                Mutua Madrileña, AXA et les offres bancaires couvrent bien
                l&apos;essentiel.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Acheter une carte SIM espagnole. Opérateurs classiques :
                Orange, Vodafone, Movistar. Moins chers et sur les mêmes réseaux :
                Simyo (Orange), Lebara (Vodafone), Yoigo. Un forfait data
                illimité tourne entre 15 et 25 €/mois.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Explorer le quartier à pied : repérer la pharmacie (farmacia),
                le supermarché le plus proche, et le Centre de Santé
                (PAC — Punto de Atención Continuada) pour les urgences non
                vitales.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Mois 1 à 3 */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#2C1810] text-[#E8A838] text-xs font-semibold uppercase tracking-widest mb-6">
            Mois 1 à 3
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Les démarches administratives espagnoles
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Une fois installé, il faut intégrer le système espagnol. Ces
            démarches ne sont pas urgentes à la minute, mais doivent être
            bouclées dans les trois premiers mois pour avoir accès aux services
            de base.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Obtenir le{" "}
                <Link
                  href="/papiers/nie"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  NIE / Certificado de Registro
                </Link>{" "}
                — le numéro d&apos;identité étranger, indispensable pour
                signer un bail, ouvrir un compte, travailler ou accéder aux
                services publics.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Faire le{" "}
                <Link
                  href="/papiers/padron"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  padron municipal
                </Link>{" "}
                — l&apos;inscription en mairie. Obligatoire pour accéder au
                médecin de quartier et à de nombreux services locaux. Se fait
                à la mairie d&apos;arrondissement avec un justificatif de
                domicile.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                S&apos;affilier à la{" "}
                <Link
                  href="/papiers/secu"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  Seguridad Social
                </Link>
                . Si salarié, l&apos;employeur s&apos;en charge. Si autónomo,
                les démarches sont à faire soi-même auprès de la Tesorería.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Trouver un médecin de famille (<em>médico de cabecera</em>) via
                le centre de{" "}
                <Link
                  href="/vivre/sante"
                  className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
                >
                  santé
                </Link>{" "}
                du quartier. Il faut être enregistré au padron et affilié à
                la sécu pour en obtenir un dans le secteur public.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#C8614A] font-bold flex-shrink-0 mt-0.5">—</span>
              <span className="text-[#5a3e35] text-sm leading-relaxed">
                Éventuellement : souscrire une <strong>mutuelle privée</strong>
                (seguro médico privado). Adeslas, Sanitas, DKV — les tarifs
                sont bien inférieurs à la mutuelle française pour une couverture
                équivalente. Utile pour éviter les délais d&apos;attente du
                public.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section sombre */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Le déménagement fait peur. C&apos;est normal.
          </h2>
          <div className="bg-white/10 rounded-2xl p-5 mb-8">
            <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">
              Ce qu&apos;on entend souvent
            </p>
            <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
              &quot;Je sais pas par où commencer.&quot; &quot;Et si j&apos;oublie quelque chose d&apos;important ?&quot;
              &quot;Comment je vais gérer les démarches en espagnol ?&quot; Ces inquiétudes sont légitimes.
              Mais elles s&apos;évanouissent dès qu&apos;on commence à découper le projet en petites
              étapes concrètes — exactement ce que cette page propose de faire.
            </p>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              S&apos;installer à Madrid n&apos;est pas plus compliqué que de s&apos;installer dans une autre
              ville française. C&apos;est juste différent — et chaque étape, prise une par une, est
              parfaitement surmontable.
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
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement
            </Link>
            <Link
              href="/papiers/compte-bancaire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Ouvrir un compte bancaire
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La sécu en Espagne
            </Link>
            <Link
              href="/vivre/sante"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Santé et médecin à Madrid
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
            Santé, travail, vie pratique — les prochains guides sur l&apos;installation
            à Madrid arrivent bientôt.
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
