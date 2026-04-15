import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Vivre à Moncloa-Argüelles, Madrid — Le guide pour les expats",
  description:
    "Moncloa-Argüelles est le quartier estudiantin et familial de Madrid, entre grands espaces verts et bonne connexion au centre. Loyers, ambiance, pour qui c'est fait.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "La Latina", href: "/logement/quartiers/la-latina", emoji: "🍷" },
  { name: "Tetuán", href: "/logement/quartiers/tetuan", emoji: "🏙️" },
  { name: "Salamanca", href: "/logement/quartiers/salamanca", emoji: "💎" },
];

export default function MoncloaArguellesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Moncloa-Argüelles : le quartier estudiantin et vert de Madrid",
      description:
        "Moncloa-Argüelles est le quartier estudiantin et familial de Madrid, entre grands espaces verts et bonne connexion au centre.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-03-30",
      dateModified: "2026-03-30",
      url: "https://madrid-et-toi.com/logement/quartiers/moncloa-arguelles",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/moncloa-arguelles" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Moncloa-Argüelles", item: "https://madrid-et-toi.com/logement/quartiers/moncloa-arguelles" },
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
            href="/logement/quartiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Tous les quartiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            🎓 Quartier Moncloa-Argüelles
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Moncloa-Argüelles —{" "}
            <span className="italic text-[#C8614A]">le quartier vert et estudiantin</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Entre la Cité universitaire, le Parque del Oeste et la Casa de Campo,
            Moncloa-Argüelles offre quelque chose de rare dans une grande capitale :
            de l&apos;espace, du calme, et de la verdure — à deux stations de métro
            du centre.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Estudiantin & familial</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 1 000 – 1 400 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Espaces verts · Calme</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* L'ambiance */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;ambiance
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Moncloa-Argüelles regroupe en réalité deux sous-quartiers au caractère
            distinct. Argüelles — le plus central, autour du Paseo de Pintor Rosales
            — est résidentiel et bourgeois, avec des immeubles haussmanniens et des
            familles bien installées. Moncloa, plus au nord-ouest, est dominé par
            l&apos;Université Complutense et la Cité universitaire : une ambiance
            étudiante marquée, des bars étudiants, des résidences universitaires.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Les deux partagent une chose : la proximité immédiate d&apos;espaces verts
            exceptionnels. Le Parque del Oeste (rosaleda, Templo de Debod) et la
            Casa de Campo, le plus grand parc de Madrid, sont à portée de footing.
            Pour quelqu&apos;un qui vient de Paris, c&apos;est un vrai luxe.
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
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">800 – 1 100 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">1 000 – 1 400 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">450 – 600 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            Les prix sont légèrement inférieurs à ceux de Malasaña ou Chueca pour
            une qualité d&apos;appartement souvent meilleure — les immeubles sont plus
            récents et mieux entretenus côté Argüelles. La forte présence étudiante
            fait que la{" "}
            <Link href="/logement/colocation" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              colocation
            </Link>{" "}
            est très répandue dans ce quartier, avec une offre abondante.
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
            Le quartier est bien desservi par le métro : lignes 2, 3, 6 et 10
            convergent à Moncloa, qui est aussi un hub de bus urbains et interurbains
            majeur. Argüelles (ligne 4) et Islas Filipinas (ligne 9) couvrent
            le sud du quartier.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Les commerces du quotidien sont présents (Mercadona, Lidl, pharmacies),
            mais moins denses qu&apos;à Malasaña. La vie de quartier est agréable et
            sans excès. Si tu cherches la vie nocturne, il faudra prendre le métro
            — mais c&apos;est de toute façon vite fait avec l&apos;
            <Link href="/vivre/transports" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Abono Transporte
            </Link>.
          </p>
        </div>
      </section>

      {/* Dark section */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            Moncloa ou Argüelles ?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">Argüelles</p>
              <ul className="space-y-2">
                {[
                  "Plus résidentiel et calme",
                  "Familles et jeunes actifs",
                  "Proche de Malasaña et Chamberí",
                  "Paseo de Pintor Rosales pour l'apéro",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                    <span className="text-[#F5ECD7]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-3">Moncloa</p>
              <ul className="space-y-2">
                {[
                  "Ambiance étudiante marquée",
                  "Loyers encore plus accessibles",
                  "Accès direct à la Casa de Campo",
                  "Hub de transport vers toute la ville",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
                    <span className="text-[#F5ECD7]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Ce quartier-là, on ne vient pas le chercher — on le découvre, et
              souvent on regrette de ne pas y avoir pensé plus tôt.
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
                <li>✓ Étudiant(e) ou jeune en mobilité</li>
                <li>✓ En quête d&apos;espaces verts au quotidien</li>
                <li>✓ Famille avec enfants (parcs, calme)</li>
                <li>✓ Adepte du jogging ou du vélo</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu veux être au cœur de la vie nocturne</li>
                <li>✗ Tu n&apos;aimes pas la densité étudiante</li>
                <li>✗ Tu cherches une ambiance de village urbain</li>
                <li>✗ Les rues larges et rectilignes t&apos;ennuient</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
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
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
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
