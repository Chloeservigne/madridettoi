import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Travailler en remote depuis Madrid — Madrid & Toi",
  description:
    "C'est légal ? Quel visa ? Quelles implications fiscales ? Tout ce qu'il faut savoir pour travailler à distance depuis Madrid.",
};

const steps = [
  {
    number: "01",
    title: "C'est légal de travailler en remote depuis Madrid ?",
    content:
      "Oui, mais c'est plus complexe qu'il n'y paraît. En tant que citoyen européen (et donc français), tu as le droit de t'installer librement en Espagne. Mais travailler pour une entreprise française depuis l'Espagne crée des questions fiscales et sociales : à partir de combien de jours tu deviens résident fiscal espagnol ? Ton contrat français est-il toujours valide ? Ce n'est pas simple, et chaque situation est différente.",
  },
  {
    number: "02",
    title: "La règle des 183 jours",
    content:
      "Si tu passes plus de 183 jours par an en Espagne, tu deviens officiellement résident fiscal espagnol. Tu dois alors déclarer tes revenus en Espagne (et non en France). Les deux pays ont une convention fiscale qui évite la double imposition — mais il faut quand même faire les démarches : te désinscrire des impôts français, t'inscrire au censo en Espagne. Ne pas le faire, c'est risquer des problèmes avec les deux administrations.",
  },
  {
    number: "03",
    title: "Le visa digital nomad espagnol",
    content:
      "Depuis 2023, l'Espagne propose un visa spécifique pour les digital nomads (non-européens principalement, mais les Européens peuvent en bénéficier pour leur statut fiscal). Il permet de s'installer légalement et d'avoir un statut clair. Pour les Français, l'alternative est souvent le statut d'autónomo (indépendant espagnol) : tu facturas tes clients (y compris français) depuis l'Espagne et tu cotises localement.",
  },
  {
    number: "04",
    title: "Les options selon ton cas",
    content:
      "Salarié d'une boîte française en full remote : idéalement, ton entreprise doit être enregistrée en Espagne ou tu dois passer en portage salarial / autónomo. Beaucoup restent en situation grise pendant quelques mois — c'est un risque. Freelance / indépendant : le statut d'autónomo est la solution la plus propre. Cotisation minimale ~230 €/mois, impôt sur le revenu (IRPF) en Espagne. Entrepreneur : créer une SL (SARL espagnole) est une option si ton activité est importante.",
  },
  {
    number: "05",
    title: "Coworking et infrastructure",
    content:
      "Madrid est une excellente ville pour le remote : internet fibre très développé, nombreux espaces de coworking (Aticco, Utopicus, WeWork, Impact Hub), cafés avec bon wifi dans tous les quartiers. La connexion 4G/5G est aussi très fiable. Le décalage horaire avec Paris est nul — tu travailles exactement aux mêmes heures.",
  },
  {
    number: "06",
    title: "La qualité de vie pour les remote workers",
    content:
      "C'est souvent la raison principale du déménagement. Travailler en remote depuis Madrid, c'est : déjeuner dehors toute l'année, partir à la montagne le week-end (Sierra de Guadarrama à 1h), voyager facilement en Europe depuis Barajas, et finir le boulot à 18h avec encore du soleil. Sans oublier que les charges du quotidien restent inférieures à Paris.",
  },
];

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
            La question que tout le monde se pose — et dont la réponse n&apos;est
            pas aussi simple qu&apos;on le voudrait. On te dit ce qui est légal, ce
            qui est courant, et comment le faire proprement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8614A]/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C8614A] font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810] mb-3">
                  {step.title}
                </h2>
                <p className="text-[#5a3e35] leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip block */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Notre conseil en une phrase
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Consulte un gestora (comptable espagnol) dès ton arrivée si tu
            travailles en remote — un rendez-vous de 50 à 100 € peut t&apos;éviter
            des années de complications fiscales. Ne reste pas dans le flou
            administratif trop longtemps.
          </p>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Les quartiers les plus sympa pour les expats
            </Link>
            <Link href="/papiers/secu" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Comment fonctionne la sécu en Espagne ?
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
