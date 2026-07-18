import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import EtapeSuivante from "@/components/EtapeSuivante";

export const metadata: Metadata = {
  alternates: {
    canonical: '/vivre',
  },
  title: "Vivre à Madrid au quotidien — Madrid & Toi",
  description:
    "Transports, santé, courses, langue, sorties — tout ce qu'il faut savoir pour vivre à Madrid une fois installé(e).",
};

const cards = [
  {
    emoji: "🚇",
    title: "Transports : métro, bus, EMT",
    description:
      "L'Abono Transporte, les zones, le métro de nuit, le bus de banlieue (Cercanías) — se déplacer à Madrid sans voiture, c'est très faisable.",
    href: "/vivre/transports",
  },
  {
    emoji: "🩺",
    title: "Santé : médecins, urgences, pharmacies",
    description:
      "Trouver un médecin de ville (médico de cabecera), les urgences (Urgencias), les pharmacies ouvertes la nuit, et si une mutuelle privée vaut le coup.",
    href: "/vivre/sante",
  },
  {
    emoji: "🛒",
    title: "Faire ses courses à Madrid",
    description:
      "Mercadona, Carrefour, Lidl, marchés de quartier — les supermarchés, les marchés, et comment manger bien sans se ruiner.",
    href: "/vivre/courses",
  },
  {
    emoji: "🗣️",
    title: "Apprendre l'espagnol sur place",
    description:
      "Intercambios, cours en ligne, applications, immersion par quartier — les meilleures façons de progresser rapidement une fois à Madrid.",
    href: "/vivre/espagnol",
  },
  {
    emoji: "🎉",
    title: "Sortir à Madrid",
    description:
      "Musées (souvent gratuits le soir), parcs, tapas, vie nocturne, cinéma en VO — la vie culturelle de Madrid pour les nouveaux arrivants.",
    href: "/vivre/sortir",
  },
];

export default function VivrePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-xs font-semibold mb-4">
            Phase 4 — Je vis à Madrid
          </span>
          <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">
            La vie quotidienne
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
            Vivre à Madrid{" "}
            <span className="not-italic font-bold text-[#d6442a]">au quotidien</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed">
            Une fois le logement trouvé et les papiers faits, la vraie vie
            commence. Transports, santé, courses, langue, sorties — tout ce
            qu&apos;il faut savoir pour être vraiment à l&apos;aise dans ta nouvelle ville.
          </p>
        </div>
      </section>

      {/* Éditorial */}
      <section className="py-20 px-6 bg-[#f2f0e9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6">
            Les premiers réflexes une fois installé(e)
          </h2>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            La première chose à faire après avoir posé tes valises : prendre
            l&apos;
            <Link href="/vivre/transports" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Abono Transporte
            </Link>{" "}
            mensuel. À partir de 20,40 €/mois pour les moins de 26 ans (zone A),
            c&apos;est l&apos;une des meilleures affaires de Madrid — métro, bus, cercanías
            illimités dans la zone choisie. Pas besoin de voiture en centre-ville.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg mb-4">
            Côté santé, il faut s&apos;inscrire au centro de salud de ton quartier
            pour avoir un médecin de famille (médico de cabecera) — gratuit une
            fois affilié à la{" "}
            <Link href="/papiers/secu" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              Seguridad Social
            </Link>
            . En attendant, les pharmacies espagnoles (reconnaissables à la croix
            verte clignotante) dispensent de nombreux médicaments sans ordonnance
            et constituent le premier recours pour les petits bobos. Notre{" "}
            <Link href="/vivre/sante" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              guide santé
            </Link>{" "}
            détaille tout le système.
          </p>
          <p className="text-[#171712] leading-relaxed text-lg">
            Pour le reste : Mercadona pour les{" "}
            <Link href="/vivre/courses" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              courses du quotidien
            </Link>
            , les intercambios de Malasaña et Chueca pour{" "}
            <Link href="/vivre/espagnol" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              progresser en espagnol
            </Link>{" "}
            gratuitement, et les musées — le Prado est gratuit dès 18h, le Reina
            Sofía aussi. Madrid est une ville incroyablement généreuse pour qui
            sait{" "}
            <Link href="/vivre/sortir" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">
              où regarder
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-28 px-6 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-[#d6442a] text-xs font-semibold">
                    Lire le guide →
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-3 group-hover:text-[#d6442a] transition-colors duration-200">
                  {card.title}
                </h2>
                <p className="text-[#171712]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-white shadow-sm opacity-50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">{card.emoji}</div>
                  <span className="text-xs bg-[#d6442a]/20 text-[#d6442a] px-3 py-1 rounded-full font-semibold">
                    Bientôt
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-2">
                  {card.title}
                </h2>
                <p className="text-[#171712]/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <EtapeSuivante label="La communauté française à Madrid" href="/communaute" />

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
            Reçois nos guides dès qu&apos;ils sortent
          </h2>
          <p className="text-[#171712]/80 text-lg mb-10 leading-relaxed">
            Transports, santé, courses, espagnol, sorties — tous nos guides
            pratiques pour vivre au mieux à Madrid.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-[#171712]/60 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#171712] text-center">
        <Link href="/" className="inline-block mb-2 hover:opacity-80 transition-opacity">
          <Logo variant="cream" height={24} className="mx-auto" />
        </Link>
        <p className="text-[#fbe8e4]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
