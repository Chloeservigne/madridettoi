import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Ouvrir un compte bancaire en Espagne — Madrid & Toi",
  description:
    "BBVA, ING España, CaixaBank, Revolut — les meilleures options pour ouvrir un compte en Espagne, les documents requis, et ce qu'il faut savoir si tu n'as pas encore ton NIE.",
};

const banques = [
  {
    emoji: "🟠",
    nom: "ING España",
    type: "Banque en ligne",
    avantages: "100 % gratuit sans condition. IBAN espagnol. Inscription en 10 min. Carte Visa incluse. Service client en français parfois.",
    inconvenients: "Pas d'agences physiques. Dépôt espèces limité.",
    pour: "La valeur sûre pour commencer.",
  },
  {
    emoji: "🔵",
    nom: "BBVA",
    type: "Banque traditionnelle",
    avantages: "Présente dans tout Madrid. Appli très bien notée. Compte Cuenta Clara gratuit si salaire domicilié ≥ 600 €/mois.",
    inconvenients: "Sinon 3 €/mois. NIE obligatoire en agence.",
    pour: "Si tu es en CDI et que tu domicilies ton salaire.",
  },
  {
    emoji: "⭐",
    nom: "imaginBank",
    type: "Appli de CaixaBank",
    avantages: "Compte 100 % mobile, gratuit sans conditions. IBAN espagnol. Ouverture rapide en ligne.",
    inconvenients: "Appli uniquement. Peu adapté si tu as besoin d'un guichet.",
    pour: "Si tu veux quelque chose de simple et sans frais.",
  },
  {
    emoji: "⚡",
    nom: "Revolut",
    type: "Néo-banque européenne",
    avantages: "Carte gratuite, zéro frais de change, disponible avant même ton départ.",
    inconvenients: "IBAN lituanien — certains employeurs et propriétaires le refusent.",
    pour: "Idéal en transition. À remplacer dès que tu as un compte espagnol.",
  },
];

const checklist = [
  { doc: "NIE ou passeport valide", detail: "Le NIE est requis par toutes les banques traditionnelles. Certaines acceptent le passeport seul pour les premières semaines." },
  { doc: "Certificado de empadronamiento", detail: "Justificatif de domicile officiel à Madrid. Obtenu après inscription au padron municipal." },
  { doc: "Justificatif de revenus (souvent)", detail: "Contrat de travail, dernière fiche de paie, ou extrait de compte. Pas toujours obligatoire pour les banques en ligne." },
  { doc: "Numéro de téléphone espagnol", detail: "Nécessaire pour la validation 2FA et les virements. À obtenir dès l'arrivée." },
];

const tips = [
  { emoji: "📱", tip: "Pour ING et imaginBank, l'inscription se fait entièrement depuis l'appli, sans RDV en agence." },
  { emoji: "📅", tip: "Pour BBVA ou Santander, prends un RDV en ligne avant de te rendre en agence — ça évite les longues attentes." },
  { emoji: "💶", tip: "La plupart des banques espagnoles ont des frais cachés : vérifie les conditions de gratuité avant d'ouvrir." },
  { emoji: "🔄", tip: "Tu peux très bien avoir Revolut en transit et ING España comme compte principal — les deux sont complémentaires." },
];

export default function CompteBancairePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Ouvrir un compte bancaire en Espagne",
      description: "BBVA, ING España, CaixaBank, Revolut — les meilleures options pour ouvrir un compte en Espagne, les documents requis, et ce qu'il faut savoir si tu n'as pas encore ton NIE.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2025-01-01",
      dateModified: "2026-03-26",
      url: "https://madrid-et-toi.com/papiers/compte-bancaire",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/papiers/compte-bancaire" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Papiers", item: "https://madrid-et-toi.com/papiers" },
        { "@type": "ListItem", position: 3, name: "Compte bancaire", item: "https://madrid-et-toi.com/papiers/compte-bancaire" },
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
            Ouvrir un compte{" "}
            <span className="italic text-[#C8614A]">bancaire en Espagne</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            BBVA, ING, Revolut — on t&apos;explique quelle banque choisir selon
            ton profil, ce qu&apos;il faut comme documents, et comment s&apos;en
            sortir quand on n&apos;a pas encore son NIE.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Souvent gratuit
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              2 – 5 jours pour une banque physique
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              NIE recommandé mais pas toujours obligatoire
            </span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Pourquoi ouvrir un compte espagnol ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Ta banque française continue de fonctionner en Espagne — mais elle
            ne suffit pas longtemps. Le loyer se paie par virement depuis un
            compte local, les prélèvements automatiques (électricité, internet,
            abonnements) nécessitent un IBAN espagnol, et beaucoup
            d&apos;employeurs exigent un compte domicilié en Espagne pour
            verser le salaire.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            En pratique, la plupart des Français qui s&apos;installent gardent
            leurs deux comptes en parallèle pendant quelques mois —
            l&apos;espagnol pour le quotidien madrilène, le français pour les
            démarches encore liées à la France.
          </p>
        </div>
      </section>

      {/* Les banques */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Tour d&apos;horizon des options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {banques.map((b) => (
              <div key={b.nom} className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{b.emoji}</span>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-[#2C1810] text-lg">
                      {b.nom}
                    </p>
                    <p className="text-xs text-[#7A8C5E] font-semibold uppercase tracking-wide">
                      {b.type}
                    </p>
                  </div>
                </div>
                <p className="text-[#5a3e35] text-sm leading-relaxed mb-3">
                  {b.avantages}
                </p>
                <p className="text-[#5a3e35]/60 text-xs leading-relaxed mb-4">
                  ⚠️ {b.inconvenients}
                </p>
                <div className="border-t border-[#EDE0C8] pt-3">
                  <p className="text-[#C8614A] text-xs font-semibold">
                    → {b.pour}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selon ton profil */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
            Selon ton profil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-2">
                Tu arrives en CDI
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Ouvre un compte ING España ou BBVA dès que tu as ton NIE et ton
                empadronamiento. Domicilie ton salaire pour éviter les frais
                chez BBVA.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-2">
                Tu es freelance / autónomo
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Wise est très adapté pour recevoir des virements internationaux
                et gérer plusieurs devises. Complète avec un compte ING pour
                les dépenses quotidiennes.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm mb-2">
                Tu arrives sans NIE
              </p>
              <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">
                Ouvre Revolut avant le départ. Dès que tu as ton NIE, ouvre
                ton compte espagnol et transfère tes abonnements progressivement.
              </p>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le combo gagnant : Revolut avant le départ pour les premiers
              jours, puis ING España dès que tu as une adresse et un NIE.
              Simple, gratuit, et ça couvre 95 % des situations.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Les étapes */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-10">
            Ouvrir son compte : les 3 étapes
          </h2>
          <div className="space-y-8">

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Choisis ta banque et prépare ton dossier
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Pour les banques en ligne (ING, imaginBank), tout se fait
                  depuis l&apos;appli en moins de 15 minutes. Pour une banque
                  physique (BBVA, Santander), prends rendez-vous en agence
                  en ligne pour éviter les files d&apos;attente.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Transmets tes documents
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  NIE ou passeport, empadronamiento, et parfois un justificatif
                  de revenus. Pour les banques en ligne, tout se fait par photo
                  depuis l&apos;appli. La checklist complète est juste en
                  dessous.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-2">
                  Active ton compte et reçois ta carte
                </h3>
                <p className="text-[#5a3e35] leading-relaxed">
                  Pour ING et imaginBank, le compte est actif quasi
                  immédiatement, la carte arrive sous 5 à 7 jours ouvrés.
                  Pour les banques physiques, l&apos;activation est faite lors
                  du RDV en agence. La carte suit par courrier sous 10 jours.
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
            Les documents à préparer
          </h2>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">📋 Documents nécessaires</p>
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

      {/* Sans NIE */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Et si je n&apos;ai pas encore mon NIE ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Les banques traditionnelles espagnoles exigent presque toutes le
            NIE pour ouvrir un compte en agence. La solution : commence par
            Revolut ou Wise, qui n&apos;ont besoin que d&apos;un passeport et
            d&apos;une adresse email. Tu auras une carte fonctionnelle dès le
            lendemain.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Dès que tu obtiens ton NIE — en général dans les premières semaines
            après l&apos;arrivée — tu peux ouvrir ton vrai compte espagnol.
            Certaines banques (Santander notamment) acceptent parfois le
            passeport seul pour une ouverture en agence, mais c&apos;est à
            la discrétion du conseiller.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Tu n&apos;as pas encore ton NIE ?{" "}
            <Link
              href="/papiers/nie"
              className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"
            >
              Notre guide NIE complet
            </Link>{" "}
            t&apos;explique comment l&apos;obtenir rapidement.
          </p>
        </div>
      </section>

      {/* Liens connexes */}
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
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/papiers/secu"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La sécu en Espagne
            </Link>
            <Link
              href="/se-decider/budget"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Budget de vie réel à Madrid
            </Link>
          </div>
        </div>
      </section>

      <EtapeSuivante label="S'inscrire à la sécu espagnole" href="/papiers/secu" />

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
            Impôts, résidence fiscale, autónomo — les prochains guides
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
