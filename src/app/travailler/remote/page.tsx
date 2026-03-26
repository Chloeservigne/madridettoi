import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  title: "Travailler en remote depuis Madrid — Madrid & Toi",
  description:
    "C'est légal ? Quel visa ? Quelles implications fiscales ? Tout ce qu'il faut savoir pour travailler à distance depuis Madrid.",
};

export default function RemotePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/travailler"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Travailler
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide travail
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Peut-on travailler{" "}
            <span className="italic text-[#C8614A]">en remote depuis Madrid&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            La question que tout le monde se pose — et dont la réponse
            n&apos;est pas aussi simple qu&apos;on le voudrait. On te dit ce
            qui est légal, ce qui est courant, et comment le faire proprement.
          </p>
        </div>
      </section>

      {/* Légalité */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            C&apos;est légal de travailler en remote depuis Madrid ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Oui — mais c&apos;est plus complexe qu&apos;il n&apos;y paraît. En
            tant que citoyen européen, tu as le droit de t&apos;installer
            librement en Espagne. Mais travailler pour une entreprise française
            depuis l&apos;Espagne crée des questions fiscales et sociales : à
            partir de combien de jours tu deviens résident fiscal espagnol ?
            Ton contrat français est-il toujours valide ?
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            La réponse courte : chaque situation est différente, et
            l&apos;improvisation coûte cher. La bonne nouvelle, c&apos;est
            qu&apos;il existe des solutions propres pour chaque profil.
          </p>
        </div>
      </section>

      {/* Règle des 183 jours */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La règle des 183 jours
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Si tu passes plus de 183 jours par an en Espagne, tu deviens
            officiellement résident fiscal espagnol. Tu dois alors déclarer tes
            revenus en Espagne — et non en France. Les deux pays ont une
            convention fiscale qui évite la double imposition, mais il faut
            quand même faire les démarches : te désinscrire des impôts français,
            t&apos;inscrire au <em>censo</em> en Espagne.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Ne pas le faire, c&apos;est risquer des problèmes avec les deux
            administrations. Ce n&apos;est pas une zone grise qu&apos;on
            conseille d&apos;habiter trop longtemps.
          </p>
        </div>
      </section>

      {/* Options selon le profil */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Les options selon ton profil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">
                Salarié en remote
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Idéalement, ton entreprise doit être enregistrée en Espagne ou
                tu passes en portage salarial / autónomo. Beaucoup restent en
                situation grise quelques mois — c&apos;est un risque.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">
                Freelance
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Le statut d&apos;
                <Link href="/travailler/freelance" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">
                  autónomo
                </Link>{" "}
                est la solution la plus propre. Tu factures tes clients (y
                compris français) depuis l&apos;Espagne et tu cotises
                localement. Cotisation minimale ~230 €/mois, impôt sur le
                revenu (IRPF) en Espagne.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">
                Entrepreneur
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Créer une SL (SARL espagnole) est une option si ton activité
                est importante. Plus de structure, plus de contraintes — mais
                une situation claire et pérenne.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-10">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Consulte une <em>gestoría</em> (comptable espagnol) dès ton
              arrivée — un rendez-vous de 50 à 100 € peut t&apos;éviter des
              années de complications fiscales.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Visa digital nomad */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le visa digital nomad espagnol
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Depuis 2023, l&apos;Espagne propose un visa spécifique pour les
            digital nomads. Il s&apos;adresse principalement aux non-européens,
            mais il a contribué à clarifier le cadre pour tous. Pour les
            Français, l&apos;alternative la plus courante reste le statut
            d&apos;autónomo — tu t&apos;installes, tu te régularises, tu
            factures.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Ce qui compte, c&apos;est d&apos;avoir un statut clair dès le
            départ. Les zones grises prolongées finissent toujours par coûter
            plus cher que les démarches évitées.
          </p>
        </div>
      </section>

      {/* Infra et qualité de vie */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Coworking, infra et qualité de vie
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Madrid est une excellente ville pour le remote : fibre très
            développée, nombreux espaces de coworking (Aticco, Utopicus,
            WeWork, Impact Hub), cafés avec bon wifi dans tous les quartiers.
            La connexion 4G/5G est fiable partout.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Et le décalage horaire avec Paris est nul — tu travailles
            exactement aux mêmes heures. Mais tu déjeunes dehors toute
            l&apos;année, tu pars à la montagne le week-end, et tu finis le
            boulot à 18h avec encore du soleil. C&apos;est souvent ça,
            la vraie raison du déménagement.
          </p>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement depuis la France
            </Link>
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link
              href="/logement/quartiers"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Les quartiers les plus sympa pour les expats
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Comment fonctionne la sécu en Espagne ?
            </Link>
            <Link
              href="/travailler/freelance"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Devenir autónomo à Madrid
            </Link>
            <Link
              href="/papiers/impots"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Fiscalité & impôts en Espagne
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="Trouver un appartement depuis la France" href="/logement/appartement" />

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
            Logement, NIE, sécu, travail à Madrid — on prépare des guides
            complets sur chaque étape de ton installation.
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
