import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Vivre à Lavapiés, Madrid — Le guide pour les expats français",
  description:
    "Lavapiés est le quartier le plus multiculturel de Madrid. Abordable, alternatif, artistique — pour ceux qui veulent Madrid sans les prix du centre.",
};

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
          <Link href="/logement/quartiers" className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all">
            ← Tous les quartiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">🌍 Quartier Lavapiés</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Lavapiés —{" "}
            <span className="italic text-[#C8614A]">multiculturel, alternatif, abordable</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Le quartier le plus cosmopolite de Madrid. Brut, créatif, avec les
            loyers les plus bas du centre — et une énergie qu&apos;on ne trouve
            nulle part ailleurs.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Multiculturel & alternatif</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 800 – 1 100 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Profils créatifs · Budget serré</span>
          </div>
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">L&apos;ambiance</h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Lavapiés est le quartier le plus cosmopolite de Madrid : communautés
            indienne, africaine, asiatique, latino-américaine et espagnole
            cohabitent dans un espace dense et vivant. Street art partout,
            collectifs culturels, programmation alternative. Une énergie unique,
            brute et authentique.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le Museo Reina Sofía est à deux pas — et c&apos;est peut-être ce qui
            dit le mieux ce qu&apos;est ce quartier : de l&apos;art partout, du bouillonnement
            permanent, une créativité qui déborde dans la rue.
          </p>
        </div>
      </section>

      {/* Les loyers */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">Les loyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">700 – 900 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">800 – 1 100 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">400 – 580 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            Les loyers les plus bas du centre de Madrid — et ça monte. La
            gentrification avance lentement mais sûrement. Si tu veux le
            Lavapiés abordable, c&apos;est maintenant.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">Culture et vie alternative</h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            Lavapiés abrite une concentration exceptionnelle de lieux culturels
            alternatifs : salles de concert indépendantes, galeries d&apos;art,
            cinémas d&apos;auteur, espaces de coworking associatifs. Ici, personne
            ne te répondra en anglais — c&apos;est aussi ce qui en fait le meilleur
            quartier pour apprendre l&apos;espagnol en immersion totale.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Dans cinq ans, Lavapiés ressemblera peut-être à{" "}
              <Link href="/logement/quartiers/malasana" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Malasaña</Link>.
              Ce n&apos;est pas une raison pour ne pas y aller — c&apos;est une raison
              pour ne pas attendre.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">Pour qui c&apos;est fait ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#7A8C5E]/10 rounded-2xl p-5">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">Idéal si tu es…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✓ Profil créatif, artiste, curieux</li>
                <li>✓ Budget serré mais refus de s&apos;exiler loin du centre</li>
                <li>✓ Quelqu&apos;un qui veut apprendre l&apos;espagnol vite</li>
                <li>✓ Esprit ouvert, voire militant</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu cherches le calme et la sécurité absolue</li>
                <li>✗ Tu as des enfants en bas âge</li>
                <li>✗ Tu veux une communauté française proche</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Autres quartiers */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">Les autres quartiers</p>
          <div className="flex flex-wrap gap-3">
            {autresQuartiers.map((q) => (
              <Link key={q.href} href={q.href} className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
                {q.emoji} {q.name}
              </Link>
            ))}
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">Reçois nos guides dès qu&apos;ils sortent</h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10">Logement, NIE, sécu, travail à Madrid — on prépare des guides complets sur chaque étape de ton installation.</p>
          <div className="flex justify-center"><EmailForm /></div>
          <p className="text-[#F5ECD7]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
        </div>
      </section>

      <footer className="py-10 px-6 bg-[#2C1810] text-center">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors">Madrid & Toi</Link>
        <p className="text-[#F5ECD7]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
      </footer>
    </div>
  );
}
