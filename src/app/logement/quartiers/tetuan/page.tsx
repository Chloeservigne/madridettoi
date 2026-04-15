import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Vivre à Tetuán, Madrid — Le guide pour les expats français",
  description:
    "Tetuán est le quartier abordable et multiculturel du nord de Madrid. Loyers, ambiance, transports, pour qui c'est fait — tout ce qu'il faut savoir avant de s'y installer.",
};

const autresQuartiers = [
  { name: "Malasaña", href: "/logement/quartiers/malasana", emoji: "🎨" },
  { name: "Chueca", href: "/logement/quartiers/chueca", emoji: "🏳️‍🌈" },
  { name: "Chamberí", href: "/logement/quartiers/chamberi", emoji: "☕" },
  { name: "Lavapiés", href: "/logement/quartiers/lavapies", emoji: "🌍" },
  { name: "Moncloa", href: "/logement/quartiers/moncloa-arguelles", emoji: "🎓" },
];

export default function TetUanPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Tetuán : le quartier abordable et multiculturel de Madrid",
      description:
        "Tetuán est le quartier abordable et multiculturel du nord de Madrid. Loyers, ambiance, transports, pour qui c'est fait.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-03-30",
      dateModified: "2026-03-30",
      url: "https://madrid-et-toi.com/logement/quartiers/tetuan",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/quartiers/tetuan" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Quartiers", item: "https://madrid-et-toi.com/logement/quartiers" },
        { "@type": "ListItem", position: 4, name: "Tetuán", item: "https://madrid-et-toi.com/logement/quartiers/tetuan" },
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
            🏙️ Quartier Tetuán
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Tetuán —{" "}
            <span className="italic text-[#C8614A]">l&apos;alternative abordable au centre</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Tetuán est souvent le quartier qu&apos;on découvre après avoir regardé les
            prix à Malasaña. Multiculturel, bien connecté, authentiquement madrilène
            — et nettement moins cher que ses voisins du centre.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Multiculturel & authentique</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">💶 900 – 1 200 € / mois</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Budget maîtrisé · Immersion</span>
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
            Tetuán n&apos;est pas un quartier de carte postale. Ce n&apos;est pas là que tu
            trouveras des cafés instagrammables à 4 € le flat white. C&apos;est un
            quartier de vraie vie madrilène : épiceries du monde entier, boucheries
            halal côtoyant des bars centenaires, marchés animés, mamies qui
            discutent sur leur balcon.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le quartier est à dominante latino-américaine et nord-africaine, mais
            accueille aussi de plus en plus de jeunes Européens attirés par des
            loyers bien plus raisonnables que dans le centre historique. Cette
            gentrification douce en fait un endroit en mouvement — sans être encore
            défiguré.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Tetuán est juste au nord de{" "}
            <Link href="/logement/quartiers/chamberi" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Chamberí
            </Link>
            , séparé par la Calle Bravo Murillo — l&apos;une des artères les plus
            commerçantes de Madrid. Quinze minutes à pied, ou deux stations de métro,
            et tu es à Malasaña.
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
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">700 – 950 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Studio</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">900 – 1 200 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">1 chambre</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-[#C8614A] font-bold text-xl font-[family-name:var(--font-playfair)]">400 – 550 €</p>
              <p className="text-[#5a3e35]/70 text-sm mt-1">Coloc (par chambre)</p>
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed">
            C&apos;est l&apos;un des quartiers les plus accessibles de Madrid sans être
            excentré. Comptez 200 à 300 € de moins par mois qu&apos;à Malasaña pour
            une surface équivalente. Les appartements sont souvent plus grands,
            avec des immeubles des années 60-70 — moins de cachet, mais plus
            d&apos;espace. Voir aussi les possibilités de{" "}
            <Link href="/logement/colocation" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              colocation à Madrid
            </Link>{" "}
            pour diviser les frais.
          </p>
        </div>
      </section>

      {/* Transports */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Transports
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Tetuán est traversé par la ligne 1 du métro (la plus longue de Madrid),
            avec plusieurs stations : Tetuán, Valdeacederas, Estrecho, Alvarado.
            Cuatro Caminos, à la limite avec Chamberí, donne accès aux lignes 2 et 6
            pour rejoindre le reste de la ville en quelques minutes.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Le bus est aussi bien développé sur Bravo Murillo. En pratique, rejoindre
            Sol ou Gran Vía prend moins de 15 minutes en métro. L&apos;
            <Link href="/vivre/transports" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              Abono Transporte
            </Link>{" "}
            couvre bien l&apos;ensemble du quartier.
          </p>
        </div>
      </section>

      {/* Dark section */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            Ce que les guides ne te disent pas
          </h2>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg">
            Tetuán n&apos;est pas parfait. Certaines rues de la partie sud, proches de
            Cuatro Caminos, sont très animées et bruyantes la nuit. Les immeubles
            sont rarement rénovés — vérifier l&apos;isolation et l&apos;état des fenêtres
            avant de signer. Et la vie nocturne est inexistante comparée à Malasaña.
          </p>
          <p className="text-[#F5ECD7]/80 leading-relaxed text-lg mt-4">
            Mais si tu cherches à t&apos;immerger dans la vraie vie madrilène, à parler
            espagnol par nécessité et non par choix, et à économiser 200 € par mois
            sur ton loyer — Tetuán est une vraie option.
          </p>
          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-8">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Le quartier qu&apos;on choisit souvent par défaut de budget, et qu&apos;on
              finit par ne plus vouloir quitter.
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
                <li>✓ À budget serré (ou tu économises)</li>
                <li>✓ En recherche d&apos;immersion espagnole</li>
                <li>✓ Peu sensible au manque de cachet</li>
                <li>✓ Curieux des cultures du monde</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Moins adapté si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu cherches une vie de quartier animée</li>
                <li>✗ Tu veux être entouré(e) d&apos;expats français</li>
                <li>✗ Tu as des exigences sur la qualité du bâti</li>
                <li>✗ Tu veux sortir à pied le soir</li>
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
            <Link
              href="/logement/colocation"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              La colocation à Madrid
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
