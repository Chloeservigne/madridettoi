import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "Permis de conduire en Espagne : faut-il l'échanger ? — Madrid & Toi",
  description:
    "L'échange du permis français en Espagne est-il obligatoire ? Les 4 cas où ça le devient, la procédure DGT, les documents, le coût et le piège du vieux permis rose.",
};

const statCards = [
  { value: "Volontaire", label: "L'échange n'est pas obligatoire pour les citoyens UE" },
  { value: "28,87 €", label: "La tasa administrative — seul coût de l'échange" },
  { value: "~6 sem.", label: "Pour recevoir le permis espagnol définitif" },
  { value: "Sans examen", label: "Aucun test à repasser, échange direct" },
];

const casObligatoires = [
  {
    titre: "Ton permis expire",
    detail: "Le renouvellement se fait dans ton pays de résidence normale. En Espagne depuis plus d'un an, c'est la DGT qui gère.",
  },
  {
    titre: "Perte, vol ou détérioration",
    detail: "Le remplacement ou la délivrance d'un duplicata se fait auprès des autorités du pays de résidence — la DGT en Espagne.",
  },
  {
    titre: "Infraction grave en Espagne",
    detail: "Si une sanction entraîne un retrait de points ou une suspension, la DGT doit la gérer sur un permis espagnol. L'échange devient obligatoire.",
  },
  {
    titre: "Vieux permis rose valable à vie",
    detail: "Délivré avant 2013, à durée indéfinie. Obligatoire de l'échanger dans les 2 ans suivant ton installation officielle en Espagne.",
  },
];

const checklist = [
  { doc: "Formulaire de demande officiel", detail: "À compléter sur sede.dgt.gob.es ou sur place" },
  { doc: "Pièce d'identité en cours de validité", detail: "Passeport ou carte d'identité française" },
  { doc: "Certificado de Registro (NIE)", detail: "Indispensable — prouve ta résidence en Espagne" },
  { doc: "Permis de conduire original", detail: "Il te sera retiré le jour du rendez-vous" },
  { doc: "Tasa 28,87 €", detail: "Payable par carte bancaire sur place — pas d'espèces" },
];

export default function PermisPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Permis de conduire en Espagne : faut-il vraiment l'échanger ?",
      description: "Échange volontaire, 4 cas d'obligation, procédure DGT, documents et le cas du vieux permis rose — guide pour les Français installés à Madrid.",
      author: { "@type": "Person", name: "Chloé", url: "https://madrid-et-toi.com/mon-histoire" },
      publisher: { "@type": "Organization", name: "Madrid & Toi", url: "https://madrid-et-toi.com" },
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      url: "https://madrid-et-toi.com/papiers/permis-de-conduire",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://madrid-et-toi.com/papiers/permis-de-conduire" },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://madrid-et-toi.com" },
        { "@type": "ListItem", position: 2, name: "Papiers", item: "https://madrid-et-toi.com/papiers" },
        { "@type": "ListItem", position: 3, name: "Permis de conduire", item: "https://madrid-et-toi.com/papiers/permis-de-conduire" },
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
            href="/papiers"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Papiers
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Guide administratif
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Permis de conduire —{" "}
            <span className="italic text-[#C8614A]">faut-il vraiment l&apos;échanger ?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Bonne nouvelle : non, l&apos;échange du permis français n&apos;est pas
            obligatoire pour vivre en Espagne. Mais il y a 4 situations où ça
            le devient — et l&apos;une d&apos;elles piège beaucoup de Français
            sans qu&apos;ils le sachent.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Échange volontaire
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              Sans nouvel examen
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">
              28,87 €
            </span>
          </div>
          <AuthorBadge date="avril 2026" />
        </div>
      </section>

      {/* Stat cards */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statCards.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C8614A] mb-2">
                  {s.value}
                </p>
                <p className="text-[#5a3e35] text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La règle de base */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            La règle de base : l&apos;échange est volontaire
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            En tant que citoyen français — et donc européen — ton permis de
            conduire est pleinement reconnu en Espagne. Tu peux conduire
            légalement avec ton permis français tant qu&apos;il est en cours de
            validité, que tu sois résident depuis une semaine ou dix ans.
          </p>
          <p className="text-[#5a3e35] leading-relaxed text-lg mt-4">
            L&apos;échange auprès de la DGT (<em>Dirección General de Tráfico</em>)
            est possible à tout moment, mais il n&apos;y a aucune obligation ni
            délai imposé — sauf dans les 4 situations ci-dessous.
          </p>
        </div>
      </section>

      {/* 4 cas obligatoires */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Les 4 cas où l&apos;échange devient obligatoire
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {casObligatoires.map((cas, i) => (
              <div key={cas.titre} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-[#C8614A] font-bold text-xs uppercase tracking-widest mb-2">
                  Cas {i + 1}
                </p>
                <p className="font-semibold text-[#2C1810] mb-2">{cas.titre}</p>
                <p className="text-[#5a3e35]/80 text-sm leading-relaxed">{cas.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le vieux permis rose */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            Le piège du vieux permis rose
          </h2>
          <p className="text-[#5a3e35] leading-relaxed text-lg">
            Si tu as obtenu ton permis avant 2013 en France, tu as peut-être
            encore le format carton rose à validité indéfinie — théoriquement
            &ldquo;valable à vie&rdquo;. C&apos;est le cas le plus courant et le
            plus méconnu parmi les Français installés à Madrid.
          </p>
          <div className="mt-6 bg-[#C8614A]/10 border border-[#C8614A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#C8614A] mb-2">La règle qui s&apos;applique</p>
            <p className="text-[#5a3e35] text-sm leading-relaxed">
              Pour les permis à durée indéfinie ou valables plus de 15 ans,
              l&apos;échange est obligatoire dans les{" "}
              <strong>2 ans suivant l&apos;établissement de ta résidence normale
              en Espagne</strong> — définie comme 185 jours par an minimum.
              Passé ce délai, conduire avec ce permis n&apos;est plus couvert
              légalement.
            </p>
          </div>
          <p className="text-[#5a3e35] leading-relaxed text-sm mt-4">
            Si tu es dans ce cas et que tu t&apos;es installé(e) il y a plus de
            2 ans à Madrid, prends ta cita previa DGT rapidement.
          </p>
        </div>
      </section>

      {/* Procédure */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            La procédure : 3 étapes
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Prends la cita previa à la DGT
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  Tout se fait en ligne sur le portail de la DGT. Sélectionne{" "}
                  <strong className="text-[#F5ECD7]">&ldquo;Canje de permisos de conducción&rdquo;</strong>{" "}
                  et le pays France. Les créneaux dans les Jefaturas de Madrid
                  peuvent être chargés — anticipe quelques semaines.
                </p>
                <a
                  href="https://sede.dgt.gob.es/es/permisos-de-conducir/canjes-de-permisos/canjes-de-permisos-extranjeros/canjes-inscripcion-renovacion-y-sustitucion-de-permisos-de-la-ue-y-eee/canje-de-permisos-de-la-ue-y-eee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
                >
                  Prendre rendez-vous DGT ↗
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Prépare tes documents
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  Le document clé est ton{" "}
                  <Link
                    href="/papiers/nie"
                    className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    Certificado de Registro (NIE)
                  </Link>{" "}
                  — sans preuve de résidence en Espagne, la DGT ne peut pas
                  traiter ta demande. Pièce d&apos;identité et permis original
                  complètent le dossier.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Présente-toi au guichet
                </h3>
                <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">
                  Ton permis français est{" "}
                  <strong className="text-[#F5ECD7]">retiré immédiatement</strong> — tu
                  repars avec un permis provisoire le jour même. Le permis
                  espagnol définitif arrive par courrier sous environ 6 semaines.
                  La tasa de 28,87 € est payable par carte sur place.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#E8A838] pl-6 mt-10">
            <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
              Une fois l&apos;échange fait, ton permis espagnol est valable
              10 ans. Aucun code, aucune conduite à repasser — ton historique
              reste reconnu.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-8">
            Documents à apporter le jour J
          </h2>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">📋 Checklist pour le guichet DGT</p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              {checklist.map((item) => (
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
        </div>
      </section>

      {/* Liens connexes */}
      <section className="py-16 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/papiers/nie"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Obtenir son NIE à Madrid
            </Link>
            <Link
              href="/papiers/padron"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              L&apos;empadronamiento
            </Link>
            <Link
              href="/demenagement/checklist"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Checklist déménagement complète
            </Link>
            <Link
              href="/papiers/compte-bancaire"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Ouvrir un compte bancaire espagnol
            </Link>
            <Link
              href="/papiers/impots"
              className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"
            >
              Impôts et résidence fiscale
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
            NIE, padron, compte bancaire, impôts — tous les guides administratifs
            pour t&apos;installer sereinement à Madrid.
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
