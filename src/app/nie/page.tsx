import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "NIE en Espagne : le guide complet pour les Français — Madrid & Toi",
  description:
    "C'est quoi le NIE, faut-il l'avoir avant d'arriver, comment prendre la cita previa, quels formulaires, NIE ou TIE — tout ce qu'il faut savoir avant de déménager à Madrid.",
};

const steps = [
  {
    number: "01",
    title: "C'est quoi le NIE ?",
    content:
      "Le NIE (Número de Identificación de Extranjero) est ton numéro d'identification en Espagne. Il est indispensable pour presque tout : signer un bail, ouvrir un compte bancaire, acheter une voiture, travailler légalement, ou s'inscrire à la sécu. C'est le premier document à obtenir après ton arrivée.",
  },
  {
    number: "02",
    title: "NIE ou Certificado de Registro — quelle différence ?",
    content:
      "Beaucoup de Français confondent les deux. Le NIE simple (formulaire EX-15) est pour une démarche ponctuelle — signer un bail, ouvrir un compte. Le Certificado de Registro de Ciudadano de la UE est lui obligatoire si tu t'installes durablement en Espagne (plus de 3 mois). Il te donne un numéro NIE définitif et te permet de prouver ta résidence légale. En pratique : si tu déménages à Madrid pour vivre, tu veux le Certificado de Registro, pas juste le NIE simple.",
  },
  {
    number: "03",
    title: "Faut-il l'avoir avant d'arriver ?",
    content:
      "Non — mais tu en auras besoin rapidement une fois sur place. La plupart des gens le demandent dans les premières semaines. Si tu arrives pour signer un contrat de travail ou un bail immédiatement, anticipe : certaines démarches bloquent sans NIE. Le mieux : prendre ton rendez-vous (cita previa) dès le premier jour à Madrid.",
  },
  {
    number: "04",
    title: "La cita previa : comment prendre rendez-vous",
    content:
      "C'est là que ça coince pour tout le monde. Les rendez-vous se prennent en ligne sur le site officiel de la Police nationale espagnole. Les créneaux sont très demandés à Madrid — la bonne astuce : les nouveaux créneaux sont mis en ligne le lundi matin à 8h pile. Connecte-toi quelques minutes avant et rafraîchis la page. Les annulations apparaissent aussi parfois la nuit. Si tu n'arrives vraiment pas à avoir un créneau à Madrid, certains commissariats en dehors de la ville ont beaucoup moins d'attente.",
  },
  {
    number: "05",
    title: "Les documents à préparer",
    content:
      "Pour le NIE simple (EX-15) : passeport ou carte d'identité (original + copie), formulaire EX-15 rempli, justificatif du motif (bail, contrat de travail, etc.), et la Tasa 790 código 012 (environ 12 €, à payer en banque avant le rendez-vous). Pour le Certificado de Registro : passeport ou carte d'identité, formulaire EX-18, justificatif de résidence (bail), justificatif de ressources ou de travail.",
  },
  {
    number: "06",
    title: "Les délais et l'alternative gestoria",
    content:
      "Le délai entre la prise de rendez-vous et le rendez-vous lui-même peut aller de 2 à 6 semaines à Madrid selon la période (septembre-octobre c'est le pire moment). Les gestorías — cabinets administratifs espagnols — proposent de gérer la démarche à ta place pour 50 à 150 €. Ça peut valoir le coup si tu n'es pas à l'aise en espagnol ou si tu es pressé(e).",
  },
];

const checklist = [
  { doc: "Passeport ou carte d'identité", detail: "Original + photocopie" },
  { doc: "Formulaire EX-15", detail: "Pour le NIE simple — à télécharger et remplir avant" },
  { doc: "Formulaire EX-18", detail: "Pour le Certificado de Registro (résidence longue durée)" },
  { doc: "Tasa 790 código 012", detail: "~12 € — à payer en banque avant le RDV" },
  { doc: "Justificatif du motif", detail: "Bail, contrat de travail, promesse d'embauche..." },
  { doc: "Cita previa confirmée", detail: "Le rendez-vous en ligne — sans ça, rien ne démarre" },
];

const tips = [
  { emoji: "⏰", tip: "Les créneaux s'ouvrent le lundi à 8h pile — sois connecté(e) à 7h58" },
  { emoji: "🌙", tip: "Les annulations apparaissent parfois la nuit — ça vaut le coup de vérifier" },
  { emoji: "🚇", tip: "Les commissariats hors Madrid ont moins d'attente" },
  { emoji: "💼", tip: "Une gestoría peut tout gérer pour toi : 50 à 150 €" },
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
            Le NIE,{" "}
            <span className="italic text-[#C8614A]">le guide complet</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le NIE, tout le monde en parle dès qu&apos;on évoque un déménagement en
            Espagne. C&apos;est quoi exactement, NIE ou Certificado de Registro,
            comment prendre un rendez-vous sans devenir fou — on démêle tout.
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

      {/* Checklist infographic */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Checklist
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Ce qu&apos;il faut préparer
          </h2>

          {/* Documents */}
          <div className="bg-white rounded-2xl border border-[#EDE0C8] overflow-hidden mb-8">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">📋 Documents à apporter le jour J</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              {checklist.map((item) => (
                <div key={item.doc} className="px-6 py-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2C1810] text-sm">{item.doc}</p>
                    <p className="text-[#5a3e35]/70 text-xs mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips cita previa */}
          <div className="bg-white rounded-2xl border border-[#EDE0C8] overflow-hidden">
            <div className="px-6 py-4 bg-[#2C1810]">
              <p className="text-[#E8A838] font-semibold">💡 Astuces pour la cita previa</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              {tips.map((item) => (
                <div key={item.tip} className="px-6 py-4 flex items-start gap-4">
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-[#5a3e35] text-sm leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
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
            prends ta cita previa dès le premier jour à Madrid, un lundi matin
            à 8h. C&apos;est la démarche la plus urgente une fois arrivé(e).
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
            <Link href="/budget" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Combien ça coûte vraiment de vivre à Madrid ?
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
            Banque, impôts, sécu, résidence fiscale — les prochains guides
            administratifs arrivent bientôt.
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
