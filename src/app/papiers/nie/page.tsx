import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "NIE en Espagne : le guide complet pour les Français — Madrid & Toi",
  description:
    "C'est quoi le NIE, faut-il l'avoir avant d'arriver, comment prendre la cita previa, quels formulaires, NIE ou TIE — tout ce qu'il faut savoir avant de déménager à Madrid.",
};

const delaisStats = [
  { value: "2 – 6 sem.", label: "d'attente pour un créneau à Madrid" },
  { value: "15 – 30 min", label: "pour la démarche le jour J" },
  { value: "Sept – Oct", label: "la période la plus chargée, évite si possible" },
  { value: "J+0", label: "tu repars avec le Certificado le jour même" },
];

const erreursFrequentes = [
  "Confondre NIE simple et Certificado de Registro — si tu t'installes durablement, c'est le Certificado qu'il te faut",
  "Arriver sans photocopie — les guichets ne font pas de copies sur place",
  "Oublier de payer la Tasa 790 avant le rendez-vous — sans le reçu, tu seras refusé(e)",
  "Ne pas apporter de justificatif de motif (bail, contrat de travail, promesse d'embauche)",
  "Arriver en retard — les créneaux sont stricts, 10 minutes de retard et c'est perdu",
];

const checklist = [
  { doc: "Passeport ou carte d'identité", detail: "Original + photocopie" },
  { doc: "Formulaire EX-15", detail: "Pour le NIE simple — à télécharger, remplir et imprimer avant" },
  { doc: "Formulaire EX-18", detail: "Pour le Certificado de Registro (résidence longue durée)" },
  { doc: "Tasa 790 código 012", detail: "~12 € — à payer en banque avant le RDV, pas sur place" },
  { doc: "Justificatif du motif", detail: "Bail, contrat de travail, promesse d'embauche..." },
  { doc: "Cita previa confirmée", detail: "Le rendez-vous en ligne — sans ça, rien ne démarre" },
];

const tips = [
  { emoji: "⏰", tip: "Les créneaux s'ouvrent le lundi à 8h pile — sois connecté(e) à 7h58" },
  { emoji: "🌙", tip: "Les annulations apparaissent parfois la nuit — ça vaut le coup de vérifier" },
  { emoji: "🚇", tip: "Les commissariats hors Madrid (Alcalá, Getafe) ont bien moins d'attente" },
  { emoji: "💼", tip: "Une gestoría peut tout gérer pour toi : 50 à 150 €" },
];

export default function NiePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
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
              Le NIE, tout le monde en parle dès qu&apos;on évoque un
              déménagement en Espagne. C&apos;est quoi exactement, NIE ou
              Certificado de Registro, comment prendre un rendez-vous sans
              devenir fou — on démêle tout.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-none lg:w-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/documents.svg"
              alt="Illustration documents administratifs"
              width={360}
              height={360}
            />
          </div>
        </div>
      </section>

      {/* C'est quoi le NIE */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            C&apos;est quoi le NIE ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Le NIE (<em>Número de Identificación de Extranjero</em>) est ton
            numéro d&apos;identification en Espagne. Il est indispensable pour
            presque tout :{" "}
            <Link
              href="/logement/appartement"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              signer un bail
            </Link>
            , ouvrir un compte bancaire, acheter une voiture, travailler
            légalement, ou s&apos;inscrire à la sécu.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Bonne nouvelle : tu n&apos;en as pas besoin avant d&apos;arriver en
            Espagne. Mais tu en auras besoin rapidement une fois sur place.
            C&apos;est donc la première démarche à lancer dès ton arrivée.
          </p>
        </div>
      </section>

      {/* NIE ou Certificado */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            NIE simple ou Certificado de Registro ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">
                NIE simple — formulaire EX-15
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Pour une démarche ponctuelle : signer un bail, ouvrir un
                compte. Tu en as besoin une seule fois, pour un acte précis.
                C&apos;est plus rapide à obtenir mais moins complet.
              </p>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-6">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">
                Certificado de Registro — formulaire EX-18
              </p>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                Obligatoire si tu t&apos;installes durablement en Espagne (plus
                de 3 mois). Il te donne un NIE définitif et prouve ta résidence
                légale. <strong>Si tu déménages à Madrid pour vivre, c&apos;est
                lui qu&apos;il te faut.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 étapes — vraie procédure séquentielle */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Comment l&apos;obtenir : les 4 étapes
          </h2>
          <div className="space-y-8">

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Prends ta cita previa en ligne
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  Tout commence par le rendez-vous officiel. Il se prend en
                  ligne sur le portail de la Police nationale espagnole. Les
                  créneaux à Madrid sont très demandés — les nouveaux
                  s&apos;ouvrent le <strong className="text-[#F5ECD7]">lundi à 8h pile</strong>.
                </p>
                <a
                  href="https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus/language/es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
                >
                  Prendre la cita previa ↗
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Télécharge et remplis le bon formulaire
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  EX-15 pour un NIE simple, EX-18 pour le Certificado de
                  Registro. Les deux sont à remplir avant le rendez-vous —
                  pas sur place. Ils sont en espagnol mais simples : nom,
                  prénom, nationalité, adresse, motif de la demande.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5ECD7] text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    Formulaire EX-15 ↗
                  </a>
                  <a
                    href="https://www.inclusion.gob.es/documents/410169/2156469/18-Certificado_residencia_comunitaria.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F5ECD7] text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    Formulaire EX-18 ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Paye la Tasa 790 código 012
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  C&apos;est la taxe administrative, environ <strong className="text-[#F5ECD7]">12 €</strong>. Elle se paie en banque
                  (ou dans certains bureaux de tabac) <em>avant</em> le
                  rendez-vous. Sans le reçu de paiement, tu seras refusé(e)
                  au guichet — c&apos;est l&apos;erreur la plus fréquente.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Présente-toi au guichet à l&apos;heure
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  Les créneaux sont stricts. 10 minutes de retard et
                  c&apos;est perdu — tu devras reprendre un rendez-vous.
                  La démarche en elle-même prend 15 à 30 minutes. Pour
                  le Certificado de Registro, tu repars avec le document
                  le jour même.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist + Tips */}
      <section className="py-24 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Checklist
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Ce qu&apos;il faut préparer
          </h2>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-8">
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

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
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

      {/* Délais */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Les délais réels
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {delaisStats.map((stat) => (
              <div key={stat.value} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C8614A] mb-2">{stat.value}</p>
                <p className="text-[#5a3e35] text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5a3e35] text-sm leading-relaxed">
            Si tu es pressé(e), les commissariats hors Madrid (Alcalá de
            Henares, Getafe) ont souvent des créneaux bien plus disponibles
            — ça vaut le déplacement.
          </p>
        </div>
      </section>

      {/* Erreurs fréquentes */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les erreurs fréquentes
          </h2>
          <ul className="text-[#5a3e35] leading-relaxed space-y-3">
            {erreursFrequentes.map((erreur) => (
              <li key={erreur} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
                <span>{erreur}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Faut-il parler espagnol */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Faut-il parler espagnol ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Pas indispensable, mais clairement utile. Les agents aux guichets
            ne parlent généralement ni français ni anglais. Les formulaires
            sont en espagnol, mais simples à remplir avec un peu de vocabulaire
            de base — une dizaine de phrases suffisent pour tenir le rendez-vous.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Si vraiment tu n&apos;es pas à l&apos;aise, une{" "}
            <em>gestoría</em> gère tout pour 50 à 150 € : rendez-vous,
            documents, et parfois accompagnement le jour J.
          </p>
        </div>
      </section>

      {/* Conseil */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl leading-relaxed">
              Ne bloque pas ton départ parce que tu n&apos;as pas encore le NIE
              — mais prends ta cita previa dès le premier jour à Madrid, un
              lundi matin à 8h. C&apos;est la démarche la plus urgente une fois
              arrivé(e).
            </p>
          </blockquote>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
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
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
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
        <p className="text-[#F5ECD7]/20 text-xs mt-2">
          <a
            href="https://storyset.com/work"
            className="hover:text-[#F5ECD7]/40 transition-colors"
          >
            Work illustrations by Storyset
          </a>
        </p>
      </footer>
    </div>
  );
}
