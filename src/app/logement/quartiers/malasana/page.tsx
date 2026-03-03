import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Malasaña, Madrid — Le guide pour les expats français",
  description:
    "Malasaña est le quartier préféré des Français à Madrid. Ambiance, loyers, vie de quartier, pour qui c'est fait — tout ce qu'il faut savoir avant de s'y installer.",
};

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
            Malasaña —{" "}
            <span className="italic text-[#C8614A]">le quartier des Français à Madrid</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Bohème, animé, francophile. Malasaña est souvent le premier quartier
            où les expats français posent leurs valises. Voici pourquoi — et dans
            quels cas il vaut mieux regarder ailleurs.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Bohème & branché</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 100 – 1 500 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Jeunes actifs · Digital nomads</span>
          </div>
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;ambiance
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Malasaña, c&apos;est le quartier bohème de Madrid. Cafés indépendants,
            vintage shops, street art, terrasses animées jusqu&apos;au bout de la nuit.
            L&apos;atmosphère rappelle un peu le Marais ou Oberkampf — mais en plus
            détendu, moins cher, et avec du soleil.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            C&apos;est le quartier où beaucoup de Français atterrissent en premier, et
            souvent restent. La Plaza del Dos de Mayo en est le cœur battant :
            terrasses ouvertes toute l&apos;année, enfants qui jouent, voisins qui
            se retrouvent. Un vrai quartier de vie.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Les loyers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">900 – 1 200 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">1 100 – 1 500 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">500 – 700 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            C&apos;est l&apos;un des quartiers les plus recherchés du centre, et les prix
            s&apos;en ressentent. Ils ont fortement augmenté depuis 2020 et continuent
            de monter. La colocation reste une option populaire pour démarrer
            sans trop s&apos;engager financièrement.
          </p>
        </div>
      </section>

      {/* Vie pratique */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La vie pratique
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Malasaña est traversé par plusieurs lignes de métro — Tribunal,
            San Bernardo, Noviciado, Bilbao. Tout se fait à pied : supermarchés,
            pharmacies, marchés. Le Mercado de los Mostenses est proche pour
            les courses.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le quartier est dense et animé. Si tu cherches le calme et les espaces
            verts, c&apos;est peut-être trop central — regarde alors du côté de{" "}
            <Link href="/logement/quartiers/chamberi" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Chamberí
            </Link>{" "}
            ou{" "}
            <Link href="/logement/quartiers/la-latina" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              La Latina
            </Link>.
          </p>
        </div>
      </section>

      {/* Communauté française */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            La communauté française
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            C&apos;est ici que vit la grande majorité des Français fraîchement installés
            à Madrid. Tu croiseras des compatriotes dans les cafés, les bars, les
            coworkings. C&apos;est rassurant au début.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Après 6 mois, beaucoup de gens ont envie d&apos;autre chose — plus de
              calme, plus d&apos;espagnol autour d&apos;eux, moins de touristes. Ce n&apos;est pas
              un défaut, c&apos;est l&apos;évolution naturelle.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Pour qui c&apos;est fait ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#7A8C5E]/10 rounded-2xl p-5">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✓ Jeune actif qui arrive seul(e)</li>
                <li>✓ Digital nomad ou freelance</li>
                <li>✓ En recherche d&apos;une vie sociale rapide</li>
                <li>✓ Créatif, curieux, ouvert</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu as des enfants (peu d&apos;espaces verts)</li>
                <li>✗ Tu cherches le calme</li>
                <li>✗ Ton budget est serré</li>
                <li>✗ Tu veux fuir les Français</li>
              </ul>
            </div>
          </div>
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
