import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  alternates: {
    canonical: '/papiers/padron',
  },
  title: "Empadronamiento à Madrid : comment s'inscrire au padron — Madrid & Toi",
  description:
    "L'empadronamiento, c'est l'inscription au registre municipal de Madrid. Obligatoire pour accéder aux soins, scolariser ses enfants, obtenir son NIE définitif. Guide complet pour les Français.",
};

const checklist = [
  { doc: "Passeport ou carte d'identité", detail: "Original + photocopie recto-verso" },
  { doc: "Justificatif de domicile", detail: "Contrat de bail signé ou acte de propriété — à ton nom ou celui du propriétaire" },
  { doc: "Formulaire de alta en el padrón", detail: "Disponible sur place ou téléchargeable sur le site de la Mairie de Madrid" },
  { doc: "Pour les enfants", detail: "Acte de naissance + livret de famille traduit et apostillé si demandé" },
];

const ceQueDebloque = [
  { emoji: "🏥", label: "La tarjeta sanitaria", detail: "Accès au système de santé public" },
  { emoji: "🏫", label: "Scolarisation des enfants", detail: "Obligatoire pour inscrire tes enfants dans une école publique" },
  { emoji: "📋", label: "Le Certificado de Registro", detail: "Le NIE définitif pour les résidents EU de plus de 3 mois" },
  { emoji: "🏦", label: "Démarches administratives", detail: "Requis pour de nombreuses procédures à Madrid" },
  { emoji: "🗳️", label: "Vote aux élections locales", detail: "Une fois établi en résidence principale" },
];

const tips = [
  { emoji: "📅", tip: "Les rendez-vous en ligne s'obtiennent sur sede.madrid.es — souvent plus rapide qu'en se présentant sans rendez-vous" },
  { emoji: "📄", tip: "Si tu es en coloc et que le bail n'est pas à ton nom, demande une autorisation écrite au propriétaire ou au locataire principal" },
  { emoji: "🔄", tip: "Si tu déménages à Madrid, tu dois mettre à jour ton empadronamiento (cambio de domicilio) — même démarche, même bureau" },
  { emoji: "📬", tip: "Tu peux obtenir un certificado de empadronamiento à tout moment après l'inscription — utile pour les démarches futures" },
];

export default function PadronPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Empadronamiento à Madrid : comment s'inscrire au padron",
      description:
        "L'empadronamiento, c'est l'inscription au registre municipal de Madrid. Obligatoire pour accéder aux soins, scolariser ses enfants, obtenir son NIE définitif. Guide complet pour les Français.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/papiers/padron",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/papiers/padron" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Papiers", item: "https://madrid-et-toi.com/papiers" },
        { "@type": "ListItem", position: 3, name: "Padron municipal", item: "https://madrid-et-toi.com/papiers/padron" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
            L&apos;empadronamiento —{" "}
            <span className="italic text-[#C8614A]">la démarche que tout le monde oublie</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le padron municipal, c&apos;est l&apos;inscription au registre des
            habitants de Madrid. Peu connue des Français à l&apos;arrivée — et
            pourtant, elle débloque presque tout le reste.
          </p>
          <AuthorBadge date="mars 2026" />
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Gratuit</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">15 – 30 min sur place</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Dès que tu as une adresse fixe</span>
          </div>
        </div>
      </section>

      {/* C'est quoi */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            C&apos;est quoi l&apos;empadronamiento ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            C&apos;est l&apos;inscription sur le registre municipal des habitants
            (<em>padrón municipal</em>). En t&apos;inscrivant, tu déclares
            officiellement que tu résides à cette adresse à Madrid. La Mairie te
            remet ensuite un <strong>certificado de empadronamiento</strong> —
            une attestation de résidence qui sert de justificatif dans de très
            nombreuses démarches.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Ce n&apos;est pas un titre de séjour, ce n&apos;est pas un visa.
            C&apos;est simplement la preuve que tu vis à cette adresse, reconnue
            par les administrations espagnoles. Et c&apos;est souvent le premier
            document qu&apos;on te demande.
          </p>
        </div>
      </section>

      {/* Ce que ça débloque */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Ce que ça débloque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ceQueDebloque.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">{item.label}</p>
                  <p className="text-[#5a3e35]/70 text-xs mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quand le faire */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            Quand le faire ?
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            Dès que tu as une adresse fixe à Madrid. Pas besoin d&apos;attendre
            un certain délai — au contraire, plus tôt tu t&apos;empadrones,
            plus vite tu débloque le reste (tarjeta sanitaria,{" "}
            <Link href="/papiers/nie" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Certificado de Registro
            </Link>
            , école...).
          </p>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mt-4">
            Si tu arrives en logement temporaire (Airbnb, coloc de transition),
            attends d&apos;avoir ton adresse définitive. Le padron est lié à
            l&apos;adresse — et si tu déménages, il faudra le mettre à jour.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le jour où tu signes ton bail, note dans ton agenda : dans 48h,
              je vais m&apos;empadronar. C&apos;est la démarche la plus simple
              de toute ton installation — et la plus rentable.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Les étapes */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Comment s&apos;empadronar : les 3 étapes
          </h2>
          <div className="space-y-8">

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Prends un rendez-vous en ligne
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Le plus simple est de passer par le portail de la Mairie de
                  Madrid. Tu peux aussi te présenter directement dans l&apos;une
                  des <em>Oficinas de Atención al Ciudadano</em> (OAC) sans
                  rendez-vous — mais avec rendez-vous, tu attends bien moins.
                </p>
                <a
                  href="https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a5e5a60f6310a8a409a0/?vgnextoid=9e0199d5bd5ef410VgnVCM2000000c205a0aRCRD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
                >
                  Prendre rendez-vous en ligne ↗
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Prépare tes documents
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Il faut ton passeport ou carte d&apos;identité, et un
                  justificatif de domicile — le contrat de bail suffit. Voir la
                  checklist complète ci-dessous.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Présente-toi au guichet
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  La démarche prend 15 à 30 minutes. Le guichetier enregistre
                  ton inscription et te remet — ou t&apos;envoie par
                  courrier — le <strong>certificado de empadronamiento</strong>.
                  Certaines mairies le délivrent immédiatement, d&apos;autres
                  sous quelques jours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Checklist
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Ce qu&apos;il faut apporter
          </h2>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">📋 Documents à préparer</p>
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
              <p className="text-[#E8A838] font-semibold">💡 À savoir</p>
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

      {/* Si tu es en coloc */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Et si je suis en coloc ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            C&apos;est le cas le plus courant pour les Français qui arrivent.
            Si le bail n&apos;est pas à ton nom, tu as deux options : soit le
            propriétaire signe une autorisation (<em>autorización del
            propietario</em>) attestant que tu résides bien à cette adresse,
            soit le locataire principal fait de même.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            En pratique, la plupart des propriétaires acceptent sans problème —
            l&apos;empadronamiento ne crée aucun droit supplémentaire sur le
            logement. Si le tien hésite, rassure-le : ça n&apos;affecte en rien
            le contrat de bail ni ses droits de propriétaire.
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
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Comment fonctionne la sécu en Espagne ?
            </Link>
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement depuis la France
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

      <EtapeSuivante label="Ouvrir un compte bancaire en Espagne" href="/papiers/compte-bancaire" />

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
