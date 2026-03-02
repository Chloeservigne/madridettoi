import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Lavapiés, Madrid — Le guide pour les expats français",
  description:
    "Lavapiés est le quartier le plus multiculturel de Madrid. Abordable, alternatif, artistique — pour ceux qui veulent Madrid sans les prix du centre.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "Lavapiés est le quartier le plus cosmopolite de Madrid : communautés indienne, africaine, asiatique, latino-américaine et espagnole cohabitent dans un espace dense et vivant. C'est aussi le quartier le plus militant de Madrid — street art partout, collectifs culturels, programmation alternative. Une énergie unique, brute et authentique.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "Lavapiés reste l'un des quartiers les plus abordables du centre de Madrid. Compte 700 à 950 € pour un studio, 800 à 1 100 € pour un appartement d'une chambre. L'accessibilité des prix attire de plus en plus de monde, et les loyers augmentent — mais le quartier reste nettement moins cher que Malasaña pour un emplacement central similaire.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "La station de métro Lavapiés (ligne 3) est au cœur du quartier. Tout est accessible à pied depuis le centre. Le quartier est dense et les commerces sont nombreux, souvent tenus par des communautés étrangères : épiceries asiatiques, restaurants indiens, boucheries halal. Le Mercado de San Fernando est une bonne option pour les produits frais.",
  },
  {
    number: "04",
    title: "Culture et vie alternative",
    content:
      "Lavapiés abrite une concentration exceptionnelle de lieux culturels alternatifs : salles de concert indépendantes, galeries d'art, cinémas d'auteur, espaces de coworking associatifs. Le Museo Reina Sofía est à deux pas. C'est le quartier où Madrid est le plus créatif et le moins commercial.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "Lavapiés convient parfaitement aux profils créatifs, aux esprits curieux, et à ceux qui ont un budget limité mais refusent de s'exiler loin du centre. C'est aussi un excellent choix si tu veux apprendre l'espagnol au contact de vrais Madrilènes — ici, personne ne te répondra en anglais.",
  },
];

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function LavapiesPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/logement/quartiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Tous les quartiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            🌍 Quartier Lavapiés
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à Lavapiés —{" "}
            <span className="italic text-[#C8614A]">multiculturel, alternatif, abordable</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le quartier le plus cosmopolite de Madrid. Brut, créatif, avec les
            loyers les plus bas du centre — et une énergie qu&apos;on ne trouve nulle
            part ailleurs.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Multiculturel & alternatif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 800 – 1 100 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Profils créatifs · Budget serré</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8614A]/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C8614A] font-bold text-sm">
                  {section.number}
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810] mb-3">
                  {section.title}
                </h2>
                <p className="text-[#5a3e35] leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-2xl mb-4">
            Notre avis honnête
          </p>
          <p className="text-[#F5ECD7] text-lg leading-relaxed">
            Lavapiés est en train de se gentrifier, lentement mais sûrement. Les
            prix montent, les bobos arrivent, les anciens habitants partent. Si
            tu veux le Lavapiés authentique, c&apos;est maintenant. Dans cinq ans,
            il ressemblera peut-être déjà à Malasaña. Ce n&apos;est pas une raison pour
            ne pas y aller — c&apos;est une raison pour ne pas attendre.
          </p>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Les autres quartiers
          </p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
              >
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link
              href="/logement/appartement"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement depuis la France
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
