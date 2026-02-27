import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Comment fonctionne la sécu en Espagne ? — Madrid & Toi",
  description:
    "Santé publique, tarjeta sanitaria, médecin généraliste, mutuelle privée... Comment accéder aux soins en Espagne quand on arrive de France ?",
};

const steps = [
  {
    number: "01",
    title: "Le système de santé espagnol en bref",
    content:
      "L'Espagne dispose d'un système de santé public universel (Sistema Nacional de Salud) financé par les cotisations sociales et l'impôt. La qualité des soins est bonne — l'Espagne est régulièrement classée parmi les meilleurs systèmes de santé en Europe. Mais contrairement à la France, tout ne passe pas par la Sécu : l'accès aux soins dépend beaucoup de ta situation (salarié, indépendant, sans emploi, étudiant).",
  },
  {
    number: "02",
    title: "La tarjeta sanitaria : le sésame",
    content:
      "C'est l'équivalent de ta carte vitale. Elle s'appelle tarjeta sanitaria individual (TSI) et te permet d'accéder aux soins publics gratuitement ou à coût réduit. Pour l'obtenir, il faut être inscrit à la sécurité sociale espagnole (Seguridad Social) — via un contrat de travail, le statut d'autónomo (indépendant), ou l'inscription sur les listes de chômage. Elle est délivrée par le centre de santé de ton quartier (centro de salud).",
  },
  {
    number: "03",
    title: "Si tu arrives avec un contrat de travail",
    content:
      "C'est le cas le plus simple. Ton employeur t'inscrit automatiquement à la Seguridad Social. Dès que tu es affilié, tu peux aller dans le centro de salud de ton quartier avec ton NIE et ton numéro de sécurité sociale pour obtenir ta tarjeta sanitaria. Délai : quelques jours à 2 semaines.",
  },
  {
    number: "04",
    title: "Si tu es indépendant (autónomo) ou sans emploi",
    content:
      "En tant qu'autónomo, tu cotises toi-même à la Seguridad Social (cotisation minimale d'environ 230-290 €/mois en 2024) et tu as accès aux soins publics. Si tu arrives sans emploi et sans statut, l'accès au système public peut être limité — c'est une zone grise. Dans ce cas, beaucoup d'expats optent pour une mutuelle privée (Adeslas, Sanitas, Asisa) le temps de régulariser leur situation, à partir de 40-80 €/mois.",
  },
  {
    number: "05",
    title: "Le médecin généraliste (médico de cabecera)",
    content:
      "Une fois ta tarjeta obtenue, tu es rattaché à un centro de salud et un médecin généraliste. Pour consulter un spécialiste, il faut passer par le généraliste (système de référence). Les délais peuvent être longs pour certaines spécialités. Beaucoup d'expats choisissent une mutuelle privée en complément pour accéder aux spécialistes directement et sans attente.",
  },
  {
    number: "06",
    title: "Les médicaments",
    content:
      "Les médicaments sur ordonnance sont remboursés partiellement par la Seguridad Social (entre 40 et 90 % selon ta situation et tes revenus). Les ordonnances françaises ne sont généralement pas acceptées en Espagne — il faut un médecin espagnol. Pour les médicaments courants, les pharmacies espagnoles sont nombreuses et souvent plus accessibles qu'en France pour l'automédication.",
  },
];

export default function SecuPage() {
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
            Guide santé
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Comment fonctionne{" "}
            <span className="italic text-[#C8614A]">la sécu en Espagne&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Accéder aux soins quand on arrive dans un nouveau pays, c&apos;est
            souvent la grande inconnue. On t&apos;explique le système espagnol pas à
            pas, pour que tu ne sois pas pris au dépourvu.
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
            Prends une mutuelle privée le temps de te régulariser si tu arrives
            sans statut clair — c&apos;est 50 à 80 €/mois pour avoir accès à un
            médecin sans attendre. Une fois inscrit à la Seguridad Social, tu
            pourras décider si tu la gardes en complément.
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
            <Link href="/travailler/remote" className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors">
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
