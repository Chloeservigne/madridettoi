import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Déménagement Paris–Madrid : le guide complet — Madrid & Toi",
  description:
    "Comment organiser son déménagement de Paris à Madrid ? Camion, affaires, résiliations, timing — le guide pratique étape par étape d'une Française qui l'a fait.",
};

const steps = [
  {
    number: "01",
    title: "Choisir son mode de transport",
    content:
      "Paris–Madrid, c'est environ 1 250 km. Trois options s'offrent à toi : le camion de déménagement (si tu pars avec beaucoup d'affaires), le transport par colis ou palette (si tu pars léger), ou la voiture personnelle avec une remorque. La plupart des gens qui font le saut seuls partent avec leur voiture chargée et font envoyer le reste par transporteur. Le trajet en voiture dure environ 12 à 13 heures — prévoir une nuit à Bordeaux ou Burgos.",
  },
  {
    number: "02",
    title: "Ce qu'il vaut mieux ne pas emporter",
    content:
      "Les meubles Ikea : inutile de les transporter, ils coûtent pareil en Espagne. Les gros électroménagers : les tensions électriques sont identiques mais les normes de prise peuvent différer, et les déménager ne vaut rarement le coup. Les livres : si tu as une bibliothèque, anticipe — envoyer des cartons de livres par La Poste / Colissimo international est souvent la solution la plus économique. Règle de base : si ça coûte moins de 200€ à racheter à Madrid, laisse-le en France.",
  },
  {
    number: "03",
    title: "Les résiliations à faire avant de partir",
    content:
      "Contrat EDF / Engie, contrat internet (prévoir 1 à 3 mois de préavis), abonnement téléphonique (si tu changes de numéro), mutuelle santé française, assurance habitation. Pense aussi à faire suivre ton courrier via La Poste (service Suivez Mon Courrier) et à prévenir ta banque de ton départ. Certaines banques ferment les comptes des non-résidents — anticipe en ouvrant un compte espagnol avant ou dès ton arrivée.",
  },
  {
    number: "04",
    title: "Les démarches côté France",
    content:
      "Signale ton départ à la CAF, à l'Assurance Maladie (CPAM), et aux impôts. Tu resteras imposable en France sur les revenus perçus avant ton départ. Si tu es propriétaire, c'est une autre affaire — consulte un notaire. Pour les allocations chômage : si tu pars chercher du travail en Espagne, tu peux sous conditions exporter tes droits ARE pendant 3 mois (formulaire U2). Renseigne-toi avant de partir.",
  },
  {
    number: "05",
    title: "Le timing idéal",
    content:
      "Septembre est le meilleur moment pour arriver à Madrid : la rentrée anime le marché du travail, les loyers sont légèrement plus bas qu'en été (où les propriétaires préfèrent les locations courte durée touristiques), et la météo est encore douce. Janvier fonctionne aussi : moins de concurrence sur les logements, les employeurs reprennent leur recrutement. Évite juillet–août : tout le monde est absent, les loyers saisonniers explosent, et rien n'avance administrativement.",
  },
  {
    number: "06",
    title: "Les premiers jours à Madrid",
    content:
      "Prévois un logement temporaire pour les 2 à 4 premières semaines — Airbnb, chambre en coloc ou sous-location. C'est le temps nécessaire pour visiter des appartements en vrai et signer. Dans les premiers jours : ouvre un compte bancaire (Revolut ou N26 pour commencer, puis une banque espagnole comme CaixaBank ou BBVA), demande ton NIE, et fais ton empadronamiento dès que tu as une adresse fixe — c'est la base de tout le reste.",
  },
];

export default function ParisMadridPage() {
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
            Guide déménagement
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Déménagement Paris–Madrid —{" "}
            <span className="italic text-[#C8614A]">le guide complet</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            1 250 km. Une frontière. Beaucoup de cartons et autant de questions.
            Voici tout ce qu&apos;on aurait voulu savoir avant de faire le trajet —
            de la logistique aux démarches, dans le bon ordre.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">~1 250 km</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">12–13h de route</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Guide étape par étape</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
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

      {/* Tip */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Ce qu&apos;on retient de l&apos;expérience
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Le déménagement Paris–Madrid est moins compliqué qu&apos;il n&apos;y paraît.
            Ce qui prend du temps, c&apos;est l&apos;administratif — pas la logistique.
            Commence les résiliations et démarches 2 à 3 mois avant le départ,
            et garde-toi une semaine tampon entre la remise des clés à Paris
            et l&apos;arrivée à Madrid. Ce tampon vaut de l&apos;or.
          </p>
        </div>
      </section>

      {/* Liens */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Les prochaines étapes
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Obtenir son NIE à Madrid
            </Link>
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Choisir son quartier à Madrid
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Coût de la vie à Madrid
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
