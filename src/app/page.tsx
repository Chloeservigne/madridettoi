import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

const guides = [
  {
    emoji: "🤔",
    title: "Se décider",
    description: "Tu hésites encore ? Budget, style de vie, les vraies questions avant de sauter le pas.",
    href: "/se-decider",
  },
  {
    emoji: "📦",
    title: "Déménagement",
    description: "Organiser son départ depuis la France, les étapes dans le bon ordre.",
    href: "/demenagement",
  },
  {
    emoji: "🏠",
    title: "Logement",
    description: "Trouver un appart depuis la France, choisir son quartier, éviter les pièges.",
    href: "/logement",
  },
  {
    emoji: "📄",
    title: "Papiers",
    description: "NIE, sécurité sociale, les démarches admin incontournables expliquées clairement.",
    href: "/papiers",
  },
  {
    emoji: "💼",
    title: "Travailler",
    description: "Remote, recherche d'emploi, freelance — comment gagner sa vie depuis Madrid.",
    href: "/travailler",
  },
  {
    emoji: "☀️",
    title: "Vivre à Madrid",
    description: "Transports, santé, culture, vie de quartier — se sentir vraiment chez soi.",
    href: "/vivre",
  },
  {
    emoji: "🤝",
    title: "Communauté",
    description: "Rencontrer des gens, s'intégrer, trouver sa tribu à Madrid.",
    href: "/communaute",
  },
];

const questions = [
  { label: "Comment trouver un appartement depuis la France ?", href: "/logement/appartement" },
  { label: "Faut-il un NIE avant d'arriver ?", href: "/papiers/nie" },
  { label: "Quels sont les quartiers les plus sympa pour les expats ?", href: "/logement/quartiers" },
  { label: "Comment fonctionne la sécu en Espagne ?", href: "/papiers/secu" },
  { label: "Peut-on travailler en remote depuis Madrid ?", href: "/travailler/remote" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="animate-fade-in-up delay-1 text-[#C8614A] font-semibold tracking-widest uppercase text-sm mb-6">
            Pour les Français qui rêvent de Madrid
          </p>
          <h1 className="animate-fade-in-up delay-2 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2C1810] leading-tight mb-8">
            Et si tu sautais
            <br />
            <span className="italic text-[#C8614A]">le pas&nbsp;?</span>
          </h1>
          <p className="animate-fade-in-up delay-3 text-lg sm:text-xl text-[#5a3e35] max-w-xl mx-auto mb-12 leading-relaxed">
            Madrid fait rêver. Mais entre l&apos;envie et le déménagement, il y a
            mille questions. <strong>Madrid & Toi</strong> est là pour t&apos;aider
            à franchir le cap, sans te perdre dans les démarches.
          </p>
          <div className="animate-fade-in-up delay-4 flex justify-center">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8614A] text-white font-semibold text-lg hover:bg-[#A84D3A] transition-all hover:scale-105 shadow-lg shadow-[#C8614A]/20"
            >
              Je veux en savoir plus
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Questions section */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#EDE0C8]/60 text-sm uppercase tracking-widest mb-8">
            Tu te poses ces questions ?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {questions.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="px-4 py-2 rounded-full bg-[#3D2418] text-[#F5ECD7] text-sm border border-[#7A8C5E]/40 hover:border-[#C8614A] hover:text-[#E8A838] transition-colors"
              >
                {q.label}
              </Link>
            ))}
          </div>
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl mt-10">
            On y répond, une par une.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
              Tous les guides
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810]">
              Par où commencer ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group p-6 rounded-3xl bg-white shadow-sm hover:shadow-md border border-transparent hover:border-[#C8614A]/20 transition-all flex flex-col gap-3"
              >
                <span className="text-3xl">{g.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-1 group-hover:text-[#C8614A] transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-[#5a3e35]/70 text-sm leading-relaxed">
                    {g.description}
                  </p>
                </div>
                <span className="text-[#C8614A] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Lire le guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810] mb-6">
            C'est quoi,{" "}
            <span className="italic text-[#C8614A]">Madrid & Toi&nbsp;?</span>
          </h2>
          <p className="text-[#5a3e35] text-lg leading-relaxed mb-6">
            Un projet né d'un déménagement — le mien. En 2020, j'ai quitté
            Paris pour Madrid, seule, avec une valise et beaucoup de questions
            sans réponses claires. J'ai tout appris en faisant.
          </p>
          <p className="text-[#5a3e35] text-lg leading-relaxed mb-6">
            Aujourd'hui je construis la ressource que j'aurais aimé avoir :
            des guides pratiques, des infos honnêtes, des contacts utiles.
            Pour que ton installation soit une aventure, pas un parcours du
            combattant.
          </p>
          <Link
            href="/mon-histoire"
            className="inline-flex items-center gap-2 text-[#C8614A] font-semibold hover:gap-3 transition-all mb-8"
          >
            Lire mon histoire →
          </Link>
          <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-[#2C1810]">
            C'est en train de se construire — et tu peux en faire partie.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-6">
            Reçois nos guides dès qu'ils sortent
          </h2>
          <p className="text-[#F5ECD7]/90 text-lg mb-10 leading-relaxed">
            On prépare des guides pratiques sur le logement, les démarches
            administratives, les quartiers, le travail à Madrid et bien plus.
            Laisse ton email pour ne rien rater.
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
        <p className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2">
          Madrid & Toi
        </p>
        <p className="text-[#F5ECD7]/40 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
