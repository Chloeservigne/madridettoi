"use client";
import { useState } from "react";

type BarrioKey =
  | "malasana"
  | "chueca"
  | "la-latina"
  | "lavapies"
  | "salamanca"
  | "chamberi"
  | "hortaleza"
  | "carabanchel";

const questions: { question: string; answers: { label: string; scores: Record<string, number> }[] }[] = [
  {
    question: "Samedi matin à Madrid, t'es plutôt...",
    answers: [
      { label: "Brunch dans un café vintage avec tes potes", scores: { malasana: 2, chueca: 1 } },
      { label: "Marché du Rastro puis tapas en terrasse", scores: { "la-latina": 2, chamberi: 1 } },
      { label: "Grasse mat' puis explorer un resto du monde", scores: { lavapies: 2, carabanchel: 1 } },
      { label: "Café calme, journal et shopping qualitatif", scores: { salamanca: 2, chamberi: 1 } },
    ],
  },
  {
    question: "Par rapport à la communauté française...",
    answers: [
      { label: "Je veux couper le cordon et parler espagnol", scores: { "la-latina": 2, lavapies: 1 } },
      { label: "Un peu de France ça rassure au début", scores: { malasana: 2, hortaleza: 1 } },
      { label: "J'ai des enfants, le lycée français c'est clé", scores: { hortaleza: 2, salamanca: 1 } },
      { label: "Peu importe, je veux juste une bonne vie", scores: { chamberi: 2, chueca: 1 } },
    ],
  },
  {
    question: "Ton appart idéal, c'est...",
    answers: [
      { label: "Petit mais bien situé, vie de quartier intense", scores: { malasana: 2, "la-latina": 1 } },
      { label: "Spacieux et calme, même un peu loin du centre", scores: { hortaleza: 2, chamberi: 1 } },
      { label: "Abordable, pas parfait mais authentique", scores: { lavapies: 2, carabanchel: 1 } },
      { label: "Élégant, bien fini, dans un bel immeuble", scores: { salamanca: 2, chamberi: 1 } },
    ],
  },
  {
    question: "Après le boulot, tu...",
    answers: [
      { label: "Retrouves des gens en terrasse, c'est sacré", scores: { malasana: 2, chueca: 1 } },
      { label: "Rentres dans ton quartier que tu adores", scores: { chamberi: 2, hortaleza: 1 } },
      { label: "Explores un bar ou un resto inconnu", scores: { lavapies: 2, "la-latina": 1 } },
      { label: "Travailles encore un peu, puis bonne table", scores: { salamanca: 2, chamberi: 1 } },
    ],
  },
  {
    question: "Dans 6 mois à Madrid, tu te vois...",
    answers: [
      { label: "Avoir une bande de potes et sortir tout le temps", scores: { malasana: 2, chueca: 1 } },
      { label: "Parler espagnol et faire vraiment partie du quartier", scores: { "la-latina": 2, lavapies: 1 } },
      { label: "Avoir ton rythme, ta boulangerie, ton café à toi", scores: { chamberi: 2, hortaleza: 1 } },
      { label: "Un réseau pro solide et une belle qualité de vie", scores: { salamanca: 2, chamberi: 1 } },
    ],
  },
];

const barrioResults: Record<
  BarrioKey,
  { name: string; emoji: string; vibe: string; result: string; budget: string }
> = {
  malasana: {
    name: "Malasaña",
    emoji: "🎨",
    vibe: "Bohème & branché",
    result:
      "Tu es une Malasaña person. Cafés vintages, sorties spontanées, vie de quartier intense — c'est exactement ton rythme. Tu vas adorer.",
    budget: "1 100 – 1 500 €/mois",
  },
  chueca: {
    name: "Chueca",
    emoji: "🏳️‍🌈",
    vibe: "Cosmopolite & vibrant",
    result:
      "Chueca te tend les bras. Tu veux de l'animation, de la diversité, et une vie sociale intense ? C'est exactement ça.",
    budget: "1 100 – 1 600 €/mois",
  },
  "la-latina": {
    name: "La Latina",
    emoji: "🍷",
    vibe: "Traditionnel & authentique",
    result:
      "Tu es fait·e pour La Latina. Ruelles pavées, tavernes centenaires, vraie immersion espagnole. Bienvenue chez toi.",
    budget: "900 – 1 300 €/mois",
  },
  lavapies: {
    name: "Lavapiés",
    emoji: "🌍",
    vibe: "Multiculturel & alternatif",
    result:
      "Lavapiés, c'est pour toi. Le Madrid le plus cosmopolite, le plus vivant, le plus inattendu. Tu vas t'y sentir libre.",
    budget: "750 – 1 100 €/mois",
  },
  salamanca: {
    name: "Salamanca",
    emoji: "💎",
    vibe: "Élégant & tranquille",
    result:
      "Tu es Salamanca. Confort, qualité de vie, belles adresses — tu ne fais pas de compromis, et c'est très bien comme ça.",
    budget: "1 500 – 2 500 €/mois",
  },
  chamberi: {
    name: "Chamberí",
    emoji: "☕",
    vibe: "Résidentiel chic & authentique",
    result:
      "Chamberí t'attend. La pépite méconnue des expats malins : chic sans être snob, calme sans être ennuyeux. Tu vas t'y poser pour de bon.",
    budget: "1 200 – 1 700 €/mois",
  },
  hortaleza: {
    name: "Hortaleza",
    emoji: "🇫🇷",
    vibe: "Familial & francophone",
    result:
      "Tu es un·e Hortaleza. La communauté française, le lycée, de vrais espaces verts — tout ce qu'il faut pour poser les valises en famille.",
    budget: "900 – 1 400 €/mois",
  },
  carabanchel: {
    name: "Carabanchel",
    emoji: "🌱",
    vibe: "Populaire & en mouvement",
    result:
      "Carabanchel, c'est ton terrain. Tu arrives avant tout le monde, tu aimes les endroits bruts et authentiques. Esprit pionnier.",
    budget: "700 – 1 000 €/mois",
  },
};

export default function BarrioQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<BarrioKey | null>(null);

  const handleAnswer = (answerScores: Record<string, number>) => {
    const newScores = { ...scores };
    for (const [barrio, points] of Object.entries(answerScores)) {
      newScores[barrio] = (newScores[barrio] || 0) + points;
    }

    if (currentQ < questions.length - 1) {
      setScores(newScores);
      setCurrentQ(currentQ + 1);
    } else {
      const winner = Object.entries(newScores).sort(
        ([, a], [, b]) => b - a
      )[0][0] as BarrioKey;
      setResult(winner);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScores({});
    setResult(null);
  };

  if (result) {
    const barrio = barrioResults[result];
    return (
      <div className="bg-white rounded-3xl p-8 shadow-md text-center max-w-xl mx-auto">
        <p className="text-[#7A8C5E] text-sm font-semibold uppercase tracking-widest mb-4">
          Ton barrio, c&apos;est...
        </p>
        <div className="text-6xl mb-4">{barrio.emoji}</div>
        <h3 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#2C1810] mb-2">
          {barrio.name}
        </h3>
        <p className="text-[#C8614A] font-semibold mb-5">{barrio.vibe}</p>
        <p className="text-[#5a3e35] leading-relaxed mb-4">{barrio.result}</p>
        <p className="text-[#7A8C5E] text-sm mb-8">💶 {barrio.budget}</p>
        <button
          onClick={reset}
          className="text-sm text-[#2C1810]/40 hover:text-[#C8614A] transition-colors underline underline-offset-4 cursor-pointer"
        >
          Recommencer le quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-md max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i <= currentQ ? "bg-[#C8614A]" : "bg-[#EDE0C8]"
            }`}
          />
        ))}
      </div>
      <p className="text-[#7A8C5E] text-xs font-semibold uppercase tracking-widest mb-3">
        Question {currentQ + 1} / {questions.length}
      </p>
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C1810] mb-6">
        {q.question}
      </h3>
      <div className="flex flex-col gap-3">
        {q.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(answer.scores)}
            className="text-left px-5 py-4 rounded-2xl border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:bg-[#F5ECD7] transition-all cursor-pointer"
          >
            {answer.label}
          </button>
        ))}
      </div>
    </div>
  );
}
