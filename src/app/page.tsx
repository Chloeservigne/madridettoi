import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

const phases = [
  {
    num: "1",
    titre: "Je rêve encore",
    desc: "Tu envisages Madrid, tu te demandes si c'est réalisable. Les réponses aux questions que tout le monde se pose avant de décider.",
    liens: [
      { label: "Pourquoi Madrid ?", href: "/se-decider/pourquoi-madrid" },
      { label: "Budget & coût de la vie", href: "/se-decider/budget" },
      { label: "Salaires à Madrid", href: "/se-decider/salaire-madrid" },
      { label: "Travailler en remote", href: "/travailler/remote" },
    ],
  },
  {
    num: "2",
    titre: "Je me prépare",
    desc: "La décision est prise. Il faut organiser le départ — boulot, logement, déménagement.",
    liens: [
      { label: "Trouver un appartement", href: "/logement/appartement" },
      { label: "Choisir son quartier", href: "/logement/quartiers" },
      { label: "Déménager Paris → Madrid", href: "/demenagement/paris-madrid" },
      { label: "Checklist départ", href: "/demenagement/checklist" },
      { label: "Trouver un emploi", href: "/travailler/emploi" },
      { label: "Devenir freelance", href: "/travailler/freelance" },
    ],
  },
  {
    num: "3",
    titre: "Je viens d'arriver",
    desc: "Tu es là. Les premières semaines sont denses — admin, banque, transports. Voilà dans quel ordre faire les choses.",
    liens: [
      { label: "Le NIE", href: "/papiers/nie" },
      { label: "Le padron municipal", href: "/papiers/padron" },
      { label: "Ouvrir un compte bancaire", href: "/papiers/compte-bancaire" },
      { label: "La sécu espagnole", href: "/papiers/secu" },
      { label: "Transports & Abono", href: "/vivre/transports" },
    ],
  },
  {
    num: "4",
    titre: "Je vis à Madrid",
    desc: "L'installation est faite. Maintenant il s'agit de vraiment vivre ici — se soigner, sortir, s'intégrer.",
    liens: [
      { label: "Santé & mutuelles", href: "/vivre/sante" },
      { label: "Courses & marchés", href: "/vivre/courses" },
      { label: "Apprendre l'espagnol", href: "/vivre/espagnol" },
      { label: "Sortir à Madrid", href: "/vivre/sortir" },
      { label: "Les impôts en Espagne", href: "/papiers/impots" },
      { label: "La communauté française", href: "/communaute/francais-madrid" },
    ],
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
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-in-up delay-1 text-[#C8614A] font-semibold tracking-widest uppercase text-sm mb-6">
              Pour les Français qui rêvent de Madrid
            </p>
            <h1 className="animate-fade-in-up delay-2 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2C1810] leading-tight mb-8">
              Et si tu sautais
              <br />
              <span className="italic text-[#C8614A]">le pas&nbsp;?</span>
            </h1>
            <p className="animate-fade-in-up delay-3 text-lg sm:text-xl text-[#5a3e35] mb-12 leading-relaxed">
              Madrid fait rêver. Mais entre l&apos;envie et le déménagement, il y a
              mille questions. <strong>Madrid & Toi</strong> est là pour t&apos;aider
              à franchir le cap, sans te perdre dans les démarches.
            </p>
            <div className="animate-fade-in-up delay-4 flex justify-center lg:justify-start">
              <a
                href="#parcours"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8614A] text-white font-semibold text-lg hover:bg-[#A84D3A] transition-all hover:scale-105 shadow-lg shadow-[#C8614A]/20"
              >
                Où en es-tu ?
                <span>→</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[440px]">
            <Image
              src="/images/madrid.svg"
              alt="Illustration d'une personne prête à partir s'installer à Madrid"
              width={440}
              height={440}
            />
          </div>
        </div>
      </section>

      {/* Questions section */}
      <section className="py-16 px-6 bg-[#2C1810]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#EDE0C8]/60 text-sm uppercase tracking-widest mb-8 text-center">
            Tu te poses ces questions ?
          </p>
          <div className="flex flex-col divide-y divide-[#F5ECD7]/10">
            {questions.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex items-center justify-between gap-4 py-4 text-[#F5ECD7]/80 hover:text-[#E8A838] transition-colors"
              >
                <span className="text-base">{q.label}</span>
                <span className="flex-shrink-0 text-[#C8614A] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
          <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl mt-10 text-center">
            On y répond, une par une.
          </p>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="py-24 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
              Ton parcours
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810]">
              Où en es-tu ?
            </h2>
          </div>

          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] text-white flex items-center justify-center font-[family-name:var(--font-playfair)] font-bold text-lg">
                    {phase.num}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] italic">
                      {phase.titre}
                    </p>
                    <p className="text-[#5a3e35]/70 text-sm mt-1 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.liens.map((lien) => (
                    <Link
                      key={lien.href}
                      href={lien.href}
                      className="px-3 py-1.5 rounded-full bg-[#F5ECD7] text-[#2C1810] text-sm font-medium hover:bg-[#EDE0C8] hover:text-[#C8614A] transition-colors"
                    >
                      {lien.label}
                    </Link>
                  ))}
                </div>
              </div>
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
        <p className="text-[#F5ECD7]/20 text-xs mt-2">
          <a href="https://storyset.com/people" className="hover:text-[#F5ECD7]/40 transition-colors">People illustrations by Storyset</a>
        </p>
      </footer>
    </div>
  );
}
