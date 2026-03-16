import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  title: "Transports à Madrid : métro, bus, Cercanías, taxi — Madrid & Toi",
  description:
    "L'Abono Transportes à 32,70€/mois, le métro (303 stations, 6h–1h30), les búhos nocturnes, BiciMAD, le taxi et rejoindre l'aéroport. Tout pour se déplacer à Madrid sans voiture.",
};

export default function TransportsPage() {
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
            Guide transports
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Se déplacer à Madrid —{" "}
            <span className="italic text-[#C8614A]">sans voiture, sans galère</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Madrid a l&apos;un des réseaux de transport les plus denses
            d&apos;Europe. Métro, bus, trains de banlieue, vélos électriques —
            un seul abonnement suffit pour tout couvrir. On te détaille tout,
            tarifs officiels 2026 inclus.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Abono adulte : 32,70 €/mois
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Metro 6h – 1h30
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              303 stations
            </span>
          </div>
        </div>
      </section>

      {/* L'Abono Transportes */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;Abono Transportes — un abonnement pour tout
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            L&apos;Abono Transportes est l&apos;abonnement mensuel illimité du
            réseau madrilène. Il couvre en zone A le <strong>métro</strong>,
            les <strong>bus EMT</strong>, les <strong>Cercanías RENFE</strong>{" "}
            et le <strong>Metro Ligero</strong> — le tout avec une seule carte.
            Valable sur l&apos;ensemble de Madrid intra-muros et ses environs
            proches.
          </p>

          {/* Tableau tarifs */}
          <div className="mt-8 bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">
                Tarifs zone A — avec bonification extraordinaire (jusqu&apos;au 31 déc. 2026)
              </p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Abono Joven (15–25 ans)</p>
                  <p className="text-[#5a3e35]/60 text-xs mt-0.5">Avec justificatif d&apos;âge</p>
                </div>
                <span className="font-bold text-[#C8614A] text-lg">10,00 €/mois</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Abono General (26–64 ans)</p>
                  <p className="text-[#5a3e35]/60 text-xs mt-0.5">
                    Prix subventionné (-40%) · tarif plein ~54 €/mois
                  </p>
                </div>
                <span className="font-bold text-[#2C1810] text-lg">32,70 €/mois</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Abono +65 ans</p>
                  <p className="text-[#5a3e35]/60 text-xs mt-0.5">Sur présentation de la tarjeta</p>
                </div>
                <span className="font-bold text-[#7A8C5E] text-lg">Gratuit</span>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#E8A838]/10 border border-[#E8A838]/30 rounded-2xl px-5 py-4">
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              <strong>Comment en bénéficier :</strong> c&apos;est automatique
              — aucune démarche à faire. Le prix affiché à l&apos;achat inclut
              déjà la réduction. Cette bonification de 40% est une mesure
              temporaire financée par le Ministère des Transports et la
              Communauté de Madrid, en vigueur depuis 2022 et renouvelée
              jusqu&apos;au 31 décembre 2026. Le tarif plein sans subvention
              est d&apos;environ 54 €/mois — au-delà de cette date, le prix
              pourrait revenir à son niveau normal.
            </p>
          </div>

          {/* Comment s'abonner */}
          <div className="mt-8 bg-[#EDE0C8] rounded-2xl p-6">
            <p className="font-semibold text-[#2C1810] mb-3">
              Comment obtenir son Abono ?
            </p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              Il faut d&apos;abord obtenir la{" "}
              <strong>Tarjeta Transporte Público Personal (TTP)</strong> — une
              carte à puce nominative à 4 €. Elle s&apos;obtient en ligne sur
              le portail de la Communauté de Madrid (envoi postal sous une
              semaine) ou immédiatement aux automates dans les stations de
              métro. Documents : une photo d&apos;identité + NIE ou passeport.
              Tu recharges ensuite l&apos;Abono mensuel aux automates, en
              estanco ou via l&apos;appli <strong>Mi Tarjeta Transporte</strong>.
            </p>
            <a
              href="https://www.comunidad.madrid/servicios/transporte/tarjeta-transporte-publico-personal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
            >
              Demander sa TTP ↗
            </a>
          </div>
        </div>
      </section>

      {/* Le Metro */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le métro de Madrid
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Avec <strong>12 lignes</strong>, environ <strong>300 km</strong> de
            réseau et <strong>303 stations</strong>, le métro de Madrid est
            l&apos;un des plus grands d&apos;Europe. La zone A couvre
            l&apos;intégralité de Madrid intra-muros — pour un habitant du
            centre, elle suffit largement.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Horaires</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Ouverture à <strong>6h00</strong> tous les jours, fermeture à{" "}
                <strong>1h30</strong> — y compris le vendredi et le samedi. Pas
                de service nuit prolongé le week-end (contrairement au métro
                parisien). Pour rentrer après 1h30, il faudra les búhos ou un
                taxi.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Tarifs à l&apos;unité</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                <strong>1,50 €</strong> le ticket simple (zone A).{" "}
                <strong>7,30 €</strong> le bono de 10 voyages (0,73 €/trajet),
                valable aussi sur les bus EMT. Avec l&apos;Abono, tous les
                trajets sont illimités.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Supplément aéroport</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                La ligne L8 dessert les terminaux T1-T2-T3 de Barajas. Un{" "}
                <strong>supplément de 3 €</strong> s&apos;ajoute au ticket
                simple ou au bono. L&apos;Abono Transportes en exempte
                totalement.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-[#2C1810] text-sm mb-2">Application</p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                L&apos;appli officielle <strong>Metro de Madrid</strong>{" "}
                donne accès aux plans, horaires en temps réel et calcul
                d&apos;itinéraires. Disponible sur iOS et Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMT + Cercanías */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Bus EMT et Cercanías — les deux compléments du métro
          </h2>

          <div className="space-y-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#E8A838] font-semibold mb-3">
                EMT — les bus municipaux
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                L&apos;EMT exploite <strong className="text-white">229 lignes de bus</strong>{" "}
                qui maillent l&apos;ensemble de la ville. Le ticket à l&apos;unité
                coûte 1,50 € (payable à bord en espèces ou par carte). Avec
                l&apos;Abono, les bus sont inclus sans surcoût.
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed mt-3">
                La nuit, ce sont les <strong className="text-white">búhos</strong> qui
                prennent le relais — un réseau de lignes nocturnes (N1 à N32)
                rayonnant depuis la <em>Plaza de Cibeles</em>, toutes les nuits
                jusqu&apos;à l&apos;ouverture du métro. Fréquence toutes les
                15 minutes le week-end. Tarif identique au bus de jour.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-[#E8A838] font-semibold mb-3">
                Cercanías RENFE — les trains de banlieue
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Le réseau Cercanías compte <strong className="text-white">9 lignes</strong>{" "}
                et 92 stations sur 391 km. Indispensables pour rejoindre
                l&apos;aéroport T4 (lignes C-1 et C-10) ou traverser Madrid
                rapidement entre les grandes gares (Atocha, Chamartín, Sol,
                Príncipe Pío).
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed mt-3">
                Bonne nouvelle : les Cercanías en zone A sont{" "}
                <strong className="text-white">intégralement inclus dans l&apos;Abono
                Transportes zone A</strong>. Un seul abonnement pour le métro,
                les bus et les trains de banlieue.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              La voiture à Madrid ? Vraiment inutile en ville. L&apos;Abono
              à 32,70 €/mois couvre métro, bus et Cercanías sans limite.
              Ajoute BiciMAD pour les courtes distances et tu couvres 99 %
              des déplacements.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Aéroport */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Rejoindre l&apos;aéroport Barajas (Adolfo Suárez)
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-8">
            Madrid-Barajas compte 4 terminaux. T4 est le plus grand et le plus
            utilisé — il a sa propre gare Cercanías en sous-sol. Voici les
            options pour rejoindre le centre depuis l&apos;aéroport.
          </p>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#2C1810]">
              <p className="text-[#E8A838] font-semibold">Comparatif centre-ville ↔ aéroport</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              <div className="px-6 py-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Cercanías C-1 / C-10</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1">T4 uniquement (gare en sous-sol)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#7A8C5E]">Inclus Abono</p>
                  <p className="text-[#5a3e35]/60 text-xs">ou ~2,60 € sans</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5a3e35] text-sm">~25–30 min</p>
                  <p className="text-[#5a3e35]/60 text-xs">depuis Chamartín</p>
                </div>
              </div>
              <div className="px-6 py-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Métro L8</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1">T1–T2–T3 (pas T4)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#2C1810]">4,50 €</p>
                  <p className="text-[#5a3e35]/60 text-xs">1,50 € + suppl. 3 € (gratuit Abono)</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5a3e35] text-sm">~30–40 min</p>
                  <p className="text-[#5a3e35]/60 text-xs">depuis Nuevos Ministerios</p>
                </div>
              </div>
              <div className="px-6 py-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Bus Exprés 203 (EMT)</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1">T1, T2, T4 — 24h/24</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#2C1810]">5,00 €</p>
                  <p className="text-[#5a3e35]/60 text-xs">à bord (carte ou espèces)</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5a3e35] text-sm">~30–40 min</p>
                  <p className="text-[#5a3e35]/60 text-xs">Atocha — Cibeles</p>
                </div>
              </div>
              <div className="px-6 py-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">Taxi</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1">Tarif fixe officiel</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#2C1810]">33 €</p>
                  <p className="text-[#5a3e35]/60 text-xs">forfait aéroport–M-30, 24h/24</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5a3e35] text-sm">~20–40 min</p>
                  <p className="text-[#5a3e35]/60 text-xs">selon trafic</p>
                </div>
              </div>
              <div className="px-6 py-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">VTC (Uber / Cabify)</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1">Tarif dynamique</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#2C1810]">25–35 €</p>
                  <p className="text-[#5a3e35]/60 text-xs">variable selon demande</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5a3e35] text-sm">~20–40 min</p>
                  <p className="text-[#5a3e35]/60 text-xs">selon trafic</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[#5a3e35] text-sm mt-4 leading-relaxed">
            <strong>Recommandation :</strong> avec un Abono, la Cercanías C-1
            ou C-10 est la meilleure option pour T4 — rapide, gratuite et
            directe. Le bus 203 est idéal pour rentrer la nuit ou quand tu as
            des bagages encombrants (pas d&apos;escaliers comme dans le métro).
          </p>
        </div>
      </section>

      {/* BiciMAD, Taxi, VTC */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            BiciMAD, taxi et VTC
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-2xl mb-3">🚲</p>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                BiciMAD
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Vélos électriques en libre-service gérés par l&apos;EMT.{" "}
                <strong>634 stations</strong> dans les 21 arrondissements.
                Tarifa plana : <strong>10 €/mois</strong>, sans engagement,
                trajets de moins de 30 min inclus. Parfait pour le dernier
                kilomètre ou les petits trajets quotidiens.
              </p>
              <a
                href="https://www.bicimad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8614A] text-xs font-semibold mt-4 block hover:underline"
              >
                bicimad.com ↗
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-2xl mb-3">🚕</p>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                Taxi
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Tarifs officiels 2026 : prise en charge <strong>2,55 €</strong>{" "}
                (jour, lun-ven 7h–21h), <strong>1,40 €/km</strong>. Tarif nuit
                et week-end légèrement supérieur. Tarif fixe aéroport–M-30 :
                <strong> 33 € forfait</strong>, 24h/24, sans supplément.
                Application officielle : <strong>TXMAD</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-2xl mb-3">📱</p>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg mb-3">
                Uber, Cabify, Bolt
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Les VTC sont légaux à Madrid (licences réglementées). Tarif
                dynamique : une course de 5–8 km en ville coûte généralement
                <strong> 8 à 15 €</strong> hors heure de pointe. Cabify est
                le plus implanté localement, Bolt souvent le moins cher. Peut
                dépasser le taxi fixe pour l&apos;aéroport en heure de pointe.
              </p>
            </div>

          </div>
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
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Les quartiers de Madrid
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La sécu en Espagne
            </Link>
            <Link
              href="/demenagement/paris-madrid"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Déménagement Paris–Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Santé & mutuelles à Madrid" href="/vivre/sante" />

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
            Santé, courses, sorties, langue — les prochains guides sur la vie
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
