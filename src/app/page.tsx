import EmailForm from "@/components/EmailForm";

const reasons = [
  {
    emoji: "☀️",
    title: "300 jours de soleil",
    description:
      "Madrid est l'une des capitales européennes les plus ensoleillées. Dis adieu à la grisaille.",
  },
  {
    emoji: "💶",
    title: "Coût de la vie accessible",
    description:
      "Loyers moins élevés qu'à Paris, restaurants abordables, transports en commun efficaces.",
  },
  {
    emoji: "🏥",
    title: "Système de santé solide",
    description:
      "Accès aux soins de qualité, et avec les bons papiers, couvert par la sécu espagnole.",
  },
  {
    emoji: "🤝",
    title: "Communauté française active",
    description:
      "Des milliers de Français vivent déjà à Madrid. Tu ne seras pas seul(e).",
  },
  {
    emoji: "✈️",
    title: "Paris à 2h15",
    description:
      "Les billets Madrid-Paris partent souvent à moins de 50€. La famille reste accessible.",
  },
  {
    emoji: "🎉",
    title: "Une ville qui vit la nuit",
    description:
      "Madrid ne dort jamais. Culture, tapas, musées gratuits le soir, parcs, vie de quartier.",
  },
];

const questions = [
  "Comment trouver un appartement depuis la France ?",
  "Faut-il un NIE avant d'arriver ?",
  "Quels sont les quartiers les plus sympa pour les expats ?",
  "Comment fonctionne la sécu en Espagne ?",
  "Peut-on travailler en remote depuis Madrid ?",
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-inter)]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf6]/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-800">
            Madrid & Toi
          </span>
          <a
            href="#newsletter"
            className="px-4 py-2 rounded-full bg-[#c4622d] text-white text-sm font-semibold hover:bg-[#a8521f] transition-colors"
          >
            Rester informé(e)
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-[#fffbf6] to-[#fef3e8]">
        <div className="max-w-3xl mx-auto">
          <p className="animate-fade-in-up delay-1 text-[#c4622d] font-semibold tracking-widest uppercase text-sm mb-6">
            Pour les Français qui rêvent de Madrid
          </p>
          <h1 className="animate-fade-in-up delay-2 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight mb-8">
            Et si tu sautais
            <br />
            <span className="italic text-[#c4622d]">le pas&nbsp;?</span>
          </h1>
          <p className="animate-fade-in-up delay-3 text-lg sm:text-xl text-stone-600 max-w-xl mx-auto mb-12 leading-relaxed">
            Madrid fait rêver. Mais entre l'envie et le déménagement, il y a
            mille questions. <strong>Madrid & Toi</strong> est là pour t'aider
            à franchir le cap, sans te perdre dans les démarches.
          </p>
          <div className="animate-fade-in-up delay-4 flex justify-center">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c4622d] text-white font-semibold text-lg hover:bg-[#a8521f] transition-all hover:scale-105 shadow-lg shadow-orange-200"
            >
              Je veux en savoir plus
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Questions section */}
      <section className="py-16 px-6 bg-[#1c1917]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">
            Tu te poses ces questions ?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {questions.map((q) => (
              <span
                key={q}
                className="px-4 py-2 rounded-full bg-stone-800 text-stone-300 text-sm border border-stone-700"
              >
                {q}
              </span>
            ))}
          </div>
          <p className="text-[#e8855a] font-[family-name:var(--font-playfair)] italic text-xl mt-10">
            On y répond, une par une.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-24 px-6 bg-[#fffbf6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c4622d] font-semibold tracking-widest uppercase text-sm mb-4">
              Pourquoi Madrid
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-stone-800">
              Ce que tu vas gagner
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-6 rounded-2xl bg-white border border-stone-100 hover:border-[#c4622d]/30 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl mb-4 block">{r.emoji}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-stone-800 mb-2 group-hover:text-[#c4622d] transition-colors">
                  {r.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#fef3e8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-stone-800 mb-6">
            C'est quoi,{" "}
            <span className="italic text-[#c4622d]">Madrid & Toi&nbsp;?</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Un projet né d'un déménagement — le nôtre. On a quitté la France
            pour Madrid avec des milliers de questions et peu de réponses
            claires. On a tout appris en faisant.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Aujourd'hui, on construit la ressource qu'on aurait aimé avoir :
            des guides pratiques, des témoignages, des contacts utiles. Pour
            que ton installation soit une aventure, pas un parcours du
            combattant.
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-stone-800">
            C'est en train de se construire — et tu peux en faire partie.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 px-6 bg-[#c4622d]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-orange-200 text-sm uppercase tracking-widest mb-4">
            Sois parmi les premiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-6">
            Reçois nos guides dès qu'ils sortent
          </h2>
          <p className="text-orange-100 text-lg mb-10 leading-relaxed">
            On prépare des guides pratiques sur le logement, les démarches
            administratives, les quartiers, le travail à Madrid et bien plus.
            Laisse ton email pour ne rien rater.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
          <p className="text-orange-200 text-xs mt-4">
            Pas de spam. Juste du contenu utile. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#1c1917] text-center">
        <p className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2">
          Madrid & Toi
        </p>
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid
        </p>
      </footer>
    </div>
  );
}
