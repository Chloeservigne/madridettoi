import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Faut-il un NIE avant d'arriver à Madrid ? — Madrid & Toi",
  description:
    "Le NIE, c'est quoi ? Faut-il l'avoir avant de partir ? Comment l'obtenir depuis la France ou en Espagne ? Tout ce qu'il faut savoir.",
};

const steps = [
  {
    number: "01",
    title: "C'est quoi le NIE ?",
    content:
      "Le NIE (Número de Identificación de Extranjero) est ton numéro d'identification en Espagne. C'est l'équivalent de ton numéro de sécurité sociale ou de ta carte d'identité fiscale. Il est indispensable pour presque tout : signer un bail, ouvrir un compte bancaire, acheter une voiture, travailler légalement, ou s'inscrire à la sécu.",
  },
  {
    number: "02",
    title: "Faut-il l'avoir avant d'arriver ?",
    content:
      "Non, tu n'en as pas besoin avant d'arriver — mais tu en auras besoin rapidement une fois sur place. La plupart des gens le demandent dans les premières semaines. Si tu arrives pour signer un contrat de travail ou un bail immédiatement, anticipe : certaines démarches bloquent sans NIE.",
  },
  {
    number: "03",
    title: "L'obtenir depuis la France (consulat)",
    content:
      "Tu peux demander le NIE depuis la France au consulat espagnol de ton département. La démarche est possible mais les délais sont longs (plusieurs semaines) et les rendez-vous rares. C'est utile si tu veux déjà avoir ton NIE avant de partir. Renseigne-toi auprès du consulat espagnol le plus proche de chez toi.",
  },
  {
    number: "04",
    title: "L'obtenir en Espagne",
    content:
      "Une fois à Madrid, tu peux faire la demande à la Policía Nacional (Oficina de Extranjeros) ou dans certains commissariats. Il faut prendre rendez-vous en ligne sur le site du gouvernement espagnol (sede.sepe.es ou citacita). Tu auras besoin de : passeport ou carte d'identité, formulaire EX-15 rempli, justificatif du motif (contrat de travail, bail, etc.), et frais de timbre (Tasa 790 code 012, environ 12 €).",
  },
  {
    number: "05",
    title: "Les délais et pièges à connaître",
    content:
      "Les rendez-vous sont très demandés à Madrid — prends le tien le plus tôt possible après ton arrivée. Le délai entre la prise de rendez-vous et le rendez-vous lui-même peut aller de 2 à 6 semaines selon la période. Certains gestorías (cabinets administratifs) proposent de gérer la démarche à ta place, moyennant 50 à 150 €. Ça peut valoir le coup si tu n'es pas à l'aise en espagnol.",
  },
];

export default function NiePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/papiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Papiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide administratif
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Faut-il un NIE{" "}
            <span className="italic text-[#C8614A]">avant d&apos;arriver&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le NIE, tout le monde en parle dès qu&apos;on évoque un déménagement en
            Espagne. Mais c&apos;est quoi exactement, et est-ce qu&apos;il faut vraiment
            l&apos;avoir avant de partir ? On démêle tout.
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
            Ne bloque pas ton départ parce que tu n&apos;as pas encore le NIE — mais
            prends ton rendez-vous dès le premier jour à Madrid. C&apos;est la
            démarche la plus urgente une fois arrivé(e).
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
            <Link href="/appartement" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/quartiers" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Les quartiers les plus sympa pour les expats
            </Link>
            <Link href="/secu" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Comment fonctionne la sécu en Espagne ?
            </Link>
            <Link href="/remote" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Travailler en remote depuis Madrid
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
