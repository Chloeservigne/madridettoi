import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Colocation à Madrid — Trouver une chambre en coloc pour les Français",
  description:
    "Tout savoir sur la colocation à Madrid : prix par quartier, plateformes (Idealista, Badi, SpainHouses), documents requis et pièges à éviter pour les expatriés français.",
};

export default function ColocationPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Colocation à Madrid : le guide pour les Français",
      description:
        "Prix par quartier, plateformes, documents requis et pièges à éviter pour trouver une colocation à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-03-30",
      dateModified: "2026-03-30",
      url: "https://madrid-et-toi.com/logement/colocation",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/logement/colocation" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Logement", item: "https://madrid-et-toi.com/logement" },
        { "@type": "ListItem", position: 3, name: "Colocation", item: "https://madrid-et-toi.com/logement/colocation" },
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
            href="/logement/appartement"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Logement
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Logement
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            La colocation à Madrid —{" "}
            <span className="italic text-[#C8614A]">la solution pour bien démarrer</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Arriver seul à Madrid avec un petit budget ? La colocation est souvent
            la meilleure option pour les premières semaines ou les premiers mois.
            Moins engageant, plus abordable, et souvent un bon moyen de
            rencontrer des gens.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">350 – 650 € / chambre</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Charges souvent incluses</span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Idéal pour commencer</span>
          </div>
          <AuthorBadge date="mars 2026" />
        </div>
      </section>

      {/* Pourquoi la coloc */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Pourquoi choisir la colocation à Madrid ?
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Le marché immobilier madrilène est tendu. Les{" "}
            <Link href="/logement/appartement" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              appartements
            </Link>{" "}
            partent vite, les propriétaires demandent souvent des mois de garantie,
            un contrat de travail espagnol ou un garant local. Quand on arrive
            sans tout ça, la colocation est souvent le seul accès réaliste au
            marché du centre.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Autre avantage : les charges (eau, internet, électricité) sont
            généralement incluses dans le loyer. Tu sais exactement ce que tu
            paies chaque mois — et c&apos;est souvent 200 à 400 € de moins qu&apos;un
            studio équivalent.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            Enfin, pour quelqu&apos;un qui ne connaît personne à Madrid, vivre avec
            des colocataires — espagnols, latinos, européens — est un raccourci
            vers une vie sociale et vers la pratique de l&apos;
            <Link href="/vivre/espagnol" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              espagnol au quotidien
            </Link>.
          </p>
        </div>
      </section>

      {/* Prix par quartier */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Prix par quartier
          </h2>
          <p className="text-[#5a3e35] mb-6 leading-relaxed">
            Le prix d&apos;une chambre en coloc varie beaucoup selon le quartier. Voici
            les fourchettes observées début 2026, charges comprises.
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EDE0C8]">
                  <th className="text-left px-4 py-3 rounded-tl-xl text-[#2C1810] font-semibold">Quartier</th>
                  <th className="text-right px-4 py-3 text-[#2C1810] font-semibold">Chambre seule</th>
                  <th className="text-right px-4 py-3 rounded-tr-xl text-[#2C1810] font-semibold">Chambre double</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE0C8]">
                {[
                  { quartier: "Malasaña / Chueca", lien: "/logement/quartiers/malasana", seule: "500 – 650 €", double: "350 – 450 €" },
                  { quartier: "Chamberí", lien: "/logement/quartiers/chamberi", seule: "500 – 600 €", double: "350 – 430 €" },
                  { quartier: "La Latina / Lavapiés", lien: "/logement/quartiers/la-latina", seule: "450 – 580 €", double: "300 – 400 €" },
                  { quartier: "Moncloa-Argüelles", lien: "/logement/quartiers/moncloa-arguelles", seule: "450 – 600 €", double: "320 – 420 €" },
                  { quartier: "Tetuán", lien: "/logement/quartiers/tetuan", seule: "400 – 550 €", double: "280 – 380 €" },
                  { quartier: "Salamanca", lien: "/logement/quartiers/salamanca", seule: "550 – 750 €", double: "400 – 550 €" },
                ].map((row) => (
                  <tr key={row.quartier} className="bg-white">
                    <td className="px-4 py-3">
                      <Link href={row.lien} className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
                        {row.quartier}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right text-[#5a3e35] font-medium">{row.seule}</td>
                    <td className="px-4 py-3 text-right text-[#5a3e35] font-medium">{row.double}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#5a3e35]/50 text-xs px-4 py-3">Fourchettes indicatives, charges incluses. Source : Idealista, Badi, début 2026.</p>
          </div>
        </div>
      </section>

      {/* Où chercher */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Où chercher ?
          </h2>
          <div className="space-y-5">
            {[
              {
                nom: "Idealista",
                desc: "La référence du marché immobilier espagnol. La section « habitaciones » est très fournie. Filtre par quartier, prix et type de contrat. Attention : beaucoup d'annonces pour des appartements entiers, pense à cocher « habitación en piso compartido ».",
              },
              {
                nom: "Badi",
                desc: "Application mobile dédiée à la colocation. Interface en anglais et espagnol, profils vérifiés, paiement en ligne. Très utilisé par les internationaux — tu tomberas sur beaucoup d'Européens et d'Américains du Sud. Idéal si tu veux des colocataires anglophones ou si ton espagnol est encore limité.",
              },
              {
                nom: "SpainHouses",
                desc: "Moins connu mais utile, notamment pour les appartements meublés en colocation longue durée.",
              },
              {
                nom: "Groupes Facebook",
                desc: "« Appartements / Colocation Madrid Français » et « Logement Madrid Francophones » sont actifs. Tu trouveras des annonces publiées par des Français qui partent et cherchent à se faire remplacer — souvent des conditions déjà négociées et un contrat en place.",
              },
            ].map((plateforme) => (
              <div key={plateforme.nom} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-2">{plateforme.nom}</p>
                <p className="text-[#5a3e35] text-sm leading-relaxed">{plateforme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Documents demandés
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg mb-6">
            Les exigences varient selon le propriétaire, mais prépare en général :
          </p>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">Documents habituellement requis</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              {[
                { doc: "Passeport ou carte d'identité", detail: "Obligatoire dans tous les cas" },
                { doc: "NIE", detail: "Pas toujours exigé pour une colocation, mais très souvent demandé. Voir le guide du NIE." },
                { doc: "Preuve de revenus", detail: "Contrat de travail, extraits de compte, ou tout justificatif de rentrée d'argent régulière" },
                { doc: "Mois de caution", detail: "En général 1 mois, parfois 2. Récupérable à la fin si l'appartement est rendu en bon état" },
                { doc: "Photo d'identité", detail: "Pour certains formulaires ou dossiers en ligne" },
              ].map((item) => (
                <div key={item.doc} className="px-6 py-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2C1810] text-sm">{item.doc}</p>
                    <p className="text-[#5a3e35]/70 text-xs mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#5a3e35] leading-relaxed mt-6">
            Si tu n&apos;as pas encore ton{" "}
            <Link href="/papiers/nie" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              NIE
            </Link>
            , certains propriétaires acceptent de commencer sans — surtout en
            colocation entre particuliers. Mais il vaut mieux l&apos;obtenir rapidement :
            tu en auras besoin pour ouvrir un{" "}
            <Link href="/papiers/compte-bancaire" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">
              compte bancaire
            </Link>{" "}
            et signer un bail à ton nom.
          </p>
        </div>
      </section>

      {/* Dark section */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
            Les pièges à éviter
          </h2>
          <ul className="space-y-4 mb-10">
            {[
              {
                titre: "Payer avant de visiter",
                desc: "Jamais. Les arnaques à la colocation existent à Madrid — annonce attrayante, propriétaire à l'étranger, virement demandé avant la visite. Si tu ne peux pas visiter en personne, demande une vidéo en direct.",
              },
              {
                titre: "Coloc sans contrat",
                desc: "Exige toujours un contrat écrit, même simple. Il précise la durée, le loyer, les charges incluses et les conditions de départ. Sans contrat, tu n'as aucun recours.",
              },
              {
                titre: "Charges « à régler en plus »",
                desc: "Certaines annonces affichent un prix bas mais ajoutent ensuite l'électricité, l'eau, internet. Clarifie ce qui est inclus avant de signer.",
              },
              {
                titre: "Durée minimale trop longue",
                desc: "Beaucoup de propriétaires demandent 3 ou 6 mois minimum. Si tu n'es pas sûr(e) de rester, négocie ou cherche des offres explicitement « court séjour ».",
              },
            ].map((item) => (
              <li key={item.titre} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold text-lg">✕</span>
                <div>
                  <p className="text-white font-semibold mb-1">{item.titre}</p>
                  <p className="text-[#F5ECD7]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#E8A838] pl-6">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              La coloc, c&apos;est rarement l&apos;endroit où tu vas rester longtemps. Mais
              c&apos;est souvent là que tu vas vraiment commencer à vivre à Madrid.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            La coloc, c&apos;est fait pour toi ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#7A8C5E]/10 rounded-2xl p-5">
              <p className="text-[#7A8C5E] font-semibold text-sm uppercase tracking-widest mb-3">Oui si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✓ Tu arrives sans emploi ni garanties</li>
                <li>✓ Tu veux tester Madrid avant de t&apos;engager</li>
                <li>✓ Ton budget est sous 700 € / mois pour le logement</li>
                <li>✓ Tu cherches à rencontrer des gens rapidement</li>
              </ul>
            </div>
            <div className="bg-[#C8614A]/10 rounded-2xl p-5">
              <p className="text-[#C8614A] font-semibold text-sm uppercase tracking-widest mb-3">Plutôt non si…</p>
              <ul className="space-y-2 text-[#5a3e35] text-sm">
                <li>✗ Tu as besoin d&apos;un espace de travail calme chez toi</li>
                <li>✗ Tu vis en couple ou arrives avec des affaires</li>
                <li>✗ Tu veux t&apos;installer durablement dès le départ</li>
                <li>✗ Tu as un budget suffisant pour un appartement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/logement/appartement" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Trouver un appartement depuis la France
            </Link>
            <Link href="/logement/quartiers" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Choisir son quartier à Madrid
            </Link>
            <Link href="/papiers/nie" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Obtenir son NIE
            </Link>
            <Link href="/papiers/compte-bancaire" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Ouvrir un compte bancaire espagnol
            </Link>
            <Link href="/se-decider/budget" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
              Budget pour vivre à Madrid
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
