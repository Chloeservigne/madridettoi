import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Trouver un appartement à Madrid depuis la France — Madrid & Toi",
  description:
    "Comment trouver un appartement à Madrid avant d'arriver ? Plateformes, budget, documents, pièges à éviter — le guide complet.",
};

const steps = [
  {
    number: "01",
    title: "Les plateformes incontournables",
    content:
      "Idealista et Fotocasa sont les deux grands sites d'annonces immobilières en Espagne. Idealista est le plus utilisé, avec le plus grand volume d'annonces. Les groupes Facebook (\"Français à Madrid\", \"Logement Madrid expats\") sont aussi très actifs et permettent de trouver des colocations ou sous-locations.",
  },
  {
    number: "02",
    title: "Le budget à prévoir",
    content:
      "Le marché a évolué : un studio dans un quartier central comme Malasaña ou Chueca se loue aujourd'hui entre 900 et 1 200 €/mois. Un appartement d'une chambre entre 1 000 et 1 500 €. Lavapiés et Vallecas restent plus abordables. La caution représente généralement 1 à 2 mois de loyer.",
  },
  {
    number: "03",
    title: "Les documents demandés",
    content:
      "Les propriétaires demandent souvent : un contrat de travail espagnol ou une preuve de revenus, les 3 dernières fiches de paie, et parfois un garant. Si tu arrives sans emploi local, certains acceptent une garantie bancaire ou plusieurs mois de loyer d'avance. Le NIE est souvent demandé pour signer.",
  },
  {
    number: "04",
    title: "Chercher depuis la France : est-ce possible ?",
    content:
      "C'est compliqué mais pas impossible. Les propriétaires préfèrent rencontrer en personne. Une bonne stratégie : prévoir un séjour de 1 à 2 semaines à Madrid pour visiter, réserver un Airbnb ou une chambre en colocation temporaire, puis signer une fois sur place. Certaines agences proposent des visites virtuelles.",
  },
  {
    number: "05",
    title: "Les pièges à éviter",
    content:
      "Méfie-toi des annonces trop belles à des prix bas — les arnaques existent. Ne verse jamais d'argent sans avoir visité (au moins en vidéo). Lis le contrat de location attentivement : durée minimale (souvent 12 mois), conditions de résiliation, charges incluses ou non. Les charges (comunidad, agua, luz) peuvent ajouter 100 à 200 €/mois.",
  },
];

export default function AppartementPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide logement
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Comment trouver un appartement à Madrid{" "}
            <span className="italic text-[#C8614A]">depuis la France&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            C&apos;est la première question que tout le monde se pose. La réponse
            honnête : c&apos;est faisable, mais ça demande de l&apos;organisation. Voici
            tout ce qu&apos;on aurait voulu savoir avant de chercher.
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
            Prévois un séjour de reconnaissance de 10 à 14 jours avant ton
            déménagement définitif. Loge en Airbnb, visite des appartements en
            vrai, et signe sur place. C&apos;est la méthode qui marche le mieux.
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
            <Link href="/nie" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Faut-il un NIE avant d&apos;arriver ?
            </Link>
            <Link href="/quartiers" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Les quartiers les plus sympa pour les expats
            </Link>
            <Link href="/budget" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
              Combien ça coûte vraiment de vivre à Madrid ?
            </Link>
            <Link href="/secu" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
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
