import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Malasaña, Madrid — Le guide pour les expats français",
  description:
    "Malasaña est le quartier préféré des Français à Madrid. Ambiance, loyers, vie de quartier, pour qui c'est fait — tout ce qu'il faut savoir avant de s'y installer.",
};

const sections = [
  {
    number: "01",
    title: "L'ambiance",
    content:
      "Malasaña, c'est le quartier bohème de Madrid. Cafés indépendants, vintage shops, street art, terrasses animées jusqu'au bout de la nuit. L'atmosphère rappelle un peu le Marais ou Oberkampf — mais en plus détendu, moins cher, et avec du soleil. C'est le quartier où beaucoup de Français atterrissent en premier, et souvent restent.",
  },
  {
    number: "02",
    title: "Les loyers",
    content:
      "C'est l'un des quartiers les plus recherchés du centre, et les prix s'en ressentent. Compte 900 à 1 200 € pour un studio, 1 100 à 1 500 € pour un appartement d'une chambre. Les colocations restent une option populaire, autour de 500 à 700 € par chambre. Les prix ont fortement augmenté depuis 2020 et continuent de monter.",
  },
  {
    number: "03",
    title: "La vie pratique",
    content:
      "Malasaña est traversé par plusieurs lignes de métro (Tribunal, San Bernardo, Noviciado, Bilbao). Tout se fait à pied : supermarchés, pharmacies, marchés. Le Mercado de los Mostenses est proche pour les courses. Le quartier est dense et animé — si tu cherches le calme, c'est peut-être trop central.",
  },
  {
    number: "04",
    title: "La communauté française",
    content:
      "C'est ici que vit la grande majorité des Français fraîchement installés à Madrid. Tu croiseras des compatriotes dans les cafés, les bars, les coworkings. C'est rassurant au début — mais certains expats finissent par partir vers des quartiers moins francophones pour s'immerger davantage dans la vie madrilène.",
  },
  {
    number: "05",
    title: "Pour qui c'est fait ?",
    content:
      "Malasaña convient parfaitement aux jeunes actifs, aux digital nomads, aux créatifs et à ceux qui veulent une vie sociale intense dès leur arrivée. C'est moins adapté aux familles avec enfants (peu d'espaces verts) ou à ceux qui recherchent le calme.",
  },
];

const autresQuartiers = [
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function MalasanaPage() {
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
            🎨 Quartier Malasaña
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Vivre à Malasaña —{" "}
            <span className="italic text-[#C8614A]">le quartier des Français à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Bohème, animé, francophile. Malasaña est souvent le premier quartier
            où les expats français posent leurs valises. Voici pourquoi — et dans
            quels cas il vaut mieux regarder ailleurs.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Bohème & branché</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 100 – 1 500 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Jeunes actifs · Digital nomads</span>
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
            Malasaña est un excellent point de chute pour démarrer. Mais après 6 mois,
            beaucoup de gens ont envie d&apos;autre chose — plus de calme, plus d&apos;espagnol
            autour d&apos;eux, moins de touristes. Ce n&apos;est pas un défaut, c&apos;est juste
            l&apos;évolution naturelle. Si tu arrives pour la première fois, c&apos;est
            probablement le bon endroit pour commencer.
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
