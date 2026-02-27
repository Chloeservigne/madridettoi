import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "Budget de vie réel à Madrid : loyer, courses, restos — Madrid & Toi",
  description:
    "Combien ça coûte vraiment de vivre à Madrid ? Loyer par quartier, courses (Mercadona, Carrefour, Alcampo), menu del día, transports, cigarettes et bière — le vrai budget chiffré.",
};

const loyers = [
  {
    quartier: "Centro / Malasaña / Chueca",
    prix: "1 300 – 1 400 €",
    pour: "En plein cœur de la fête, tout à pied",
    contre: "Bruyant, peu de verdure, cher",
  },
  {
    quartier: "Chamberí / Salamanca",
    prix: "1 200 – 1 350 €",
    pour: "Bobo chic, calme relatif, bien desservi",
    contre: "Moins animé le soir, prix en hausse",
  },
  {
    quartier: "Tetuán / Lavapiés",
    prix: "900 – 1 100 €",
    pour: "Jeune, cosmopolite, bon rapport qualité-prix",
    contre: "Gentrification rapide, peut surprendre au départ",
  },
  {
    quartier: "Carabanchel / Vallecas",
    prix: "750 – 950 €",
    pour: "Vrai Madrid populaire, loyers encore abordables",
    contre: "Plus loin du centre, moins de services en français",
  },
  {
    quartier: "Hortaleza / Arturo Soria",
    prix: "800 – 1 050 €",
    pour: "Calme, pavillonnaire, parfait en famille",
    contre: "Transports moins fréquents, voiture souvent utile",
  },
];

const supermarches = [
  {
    nom: "Mercadona",
    emoji: "🟠",
    verdict: "Le meilleur rapport qualité-prix",
    detail:
      "La référence espagnole. Qualité constante, produits frais excellents, marque propre (Hacendado) imbattable. C'est le Lidl espagnol mais en plus agréable. Tu y feras la majorité de tes courses.",
    exemples: [
      { produit: "Lait 1L", prix: "0,80 €" },
      { produit: "Pain de mie", prix: "0,85 €" },
      { produit: "Poulet entier", prix: "5,90 €" },
      { produit: "Oeufs x12", prix: "1,95 €" },
    ],
  },
  {
    nom: "Carrefour",
    emoji: "🔵",
    verdict: "Le repère des Français nostalgiques",
    detail:
      "Oui, Carrefour est bien présent en Espagne — et c'est souvent le premier endroit où vont les Français fraîchement débarqués, par réflexe. Légèrement plus cher que Mercadona mais tu trouveras des produits français (beurre, moutarde Dijon, Ricard...) que tu chercherais ailleurs.",
    exemples: [
      { produit: "Beurre 250g", prix: "1,89 €" },
      { produit: "Moutarde Dijon", prix: "2,15 €" },
      { produit: "Vin table 75cl", prix: "3,50 €" },
      { produit: "Fromage râpé 200g", prix: "1,95 €" },
    ],
  },
  {
    nom: "Alcampo",
    emoji: "🟢",
    verdict: "Spoiler : c'est Auchan",
    detail:
      "Fun fact : Alcampo, c'est littéralement la traduction espagnole d'Auchan — \"al campo\" = \"au champ\". C'est le même groupe, implanté en Espagne depuis les années 80. Grands espaces, prix compétitifs, bonne cave à vin. Pratique si t'as une voiture ou si t'es dans un quartier périphérique.",
    exemples: [
      { produit: "Vin espagnol Rioja", prix: "4,50 €" },
      { produit: "Eau 6x1.5L", prix: "2,20 €" },
      { produit: "Pâtes 500g", prix: "0,65 €" },
      { produit: "Huile d'olive 1L", prix: "5,80 €" },
    ],
  },
];

const restos = [
  {
    type: "Menu del día (midi)",
    prix: "10 – 15 €",
    inclus: "Entrée + plat + dessert + boisson + pain",
    note: "L'institution espagnole. La plupart des restaurants de quartier le proposent en semaine. Pour ce prix, tu manges mieux qu'à Paris pour 25€.",
  },
  {
    type: "Café solo (expresso)",
    prix: "1 – 1,50 €",
    inclus: "Serré, fort, parfait",
    note: "Le café espagnol est une religion. 1€ au bar du quartier, 1,50€ dans un café sympa. À Paris le même coûte 2,50€ minimum.",
  },
  {
    type: "Bière (caña) au bar",
    prix: "2 – 3,50 €",
    inclus: "Pression fraîche + souvent une tapa offerte",
    note: "La caña, c'est un demi espagnol (20cl environ). Et dans beaucoup de bars, elle vient avec une petite tapa gratuite.",
  },
  {
    type: "Dîner en terrasse",
    prix: "20 – 35 €",
    inclus: "Plat + boisson + dessert",
    note: "Pour un dîner dans un bon restaurant de quartier avec une bouteille de vin.",
  },
];

const vices = [
  {
    emoji: "🚬",
    nom: "Cigarettes",
    prixMadrid: "~6 €",
    prixFrance: "~12,50 €",
    detail:
      "Le paquet de clopes coûte environ deux fois moins cher qu'en France. Marlboro, Winston, Lucky Strike — tous aux alentours de 5,50 à 6,50 €. Pour les fumeurs, c'est un des premiers chocs culturels à l'arrivée.",
  },
  {
    emoji: "🍺",
    nom: "Bière en terrasse",
    prixMadrid: "2 – 3,50 €",
    prixFrance: "4 – 6 €",
    detail:
      "La caña (20cl) à 2€ dans un bar de quartier, la cerveza plus grande (33cl) à 3€ en terrasse. Et souvent une tapa offerte avec. Les happy hours existent mais sont moins nécessaires — les prix sont déjà bas.",
  },
];

const budgetMensuel = [
  { poste: "Loyer (T1, quartier intermédiaire)", montant: "900 – 1 100 €", note: "Tetuán, Hortaleza, Carabanchel" },
  { poste: "Courses alimentaires", montant: "180 – 250 €", note: "Pour une personne, Mercadona en base" },
  { poste: "Transports (Abono Transporte)", montant: "54,60 €", note: "Metro + bus illimité toutes zones" },
  { poste: "Restos / sorties", montant: "150 – 300 €", note: "Menus le midi + quelques dîners" },
  { poste: "Divers (téléphone, sport, imprévus)", montant: "80 – 150 €", note: "" },
];

export default function BudgetPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/se-decider"
            className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            ← Retour à Se décider
          </Link>
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">
            Avant de partir
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Combien ça coûte{" "}
            <span className="italic text-[#C8614A]">vraiment&nbsp;?</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed">
            Avant de prendre une décision, il faut des chiffres réels. Pas les
            moyennes nationales, pas les estimations optimistes. Le vrai coût de
            la vie à Madrid en 2025 — loyer par quartier, courses, restos,
            transports et le reste.
          </p>
        </div>
      </section>

      {/* Loyers */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Le poste principal
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Le loyer
          </h2>
          <p className="text-[#5a3e35] leading-relaxed mb-10">
            Madrid a beaucoup augmenté — +9,7% en 2025 selon les dernières
            données Idealista. Ça reste moins cher que Paris pour la plupart des
            quartiers, mais l&apos;écart se réduit. Voici les fourchettes
            réelles pour un T1 (studio ou une chambre).
          </p>

          <div className="space-y-4">
            {loyers.map((item) => (
              <div
                key={item.quartier}
                className="bg-white rounded-2xl border border-[#EDE0C8] p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2C1810]">
                    {item.quartier}
                  </h3>
                  <span className="font-bold text-[#C8614A] text-lg whitespace-nowrap">
                    {item.prix}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-sm">
                  <span className="flex items-start gap-2 text-[#7A8C5E]">
                    <span>✓</span>
                    {item.pour}
                  </span>
                  <span className="hidden sm:block text-[#EDE0C8]">·</span>
                  <span className="flex items-start gap-2 text-[#5a3e35]/60">
                    <span>✗</span>
                    {item.contre}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#2C1810] rounded-2xl">
            <p className="text-[#E8A838] font-semibold text-sm mb-1">
              💡 Le bon deal
            </p>
            <p className="text-[#F5ECD7]/90 text-sm leading-relaxed">
              Tetuán et Hortaleza offrent le meilleur rapport qualité-prix en ce
              moment. Bien desservis, appartements plus grands, et encore
              quelques offres sous les 1 000 €. Pas pour longtemps, probablement.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Faire ses courses
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Mercadona, Carrefour, Alcampo
          </h2>
          <p className="text-[#5a3e35] leading-relaxed mb-10">
            En moyenne, les courses coûtent environ 13% moins cher qu&apos;en
            France à Madrid. Le panier type pour une personne tourne autour de
            180 à 250 €/mois. Voici les trois enseignes que tu feras forcément.
          </p>

          <div className="space-y-6">
            {supermarches.map((s) => (
              <div
                key={s.nom}
                className="bg-white rounded-2xl border border-[#EDE0C8] overflow-hidden"
              >
                <div className="px-6 py-4 flex items-center justify-between bg-[#F5ECD7]">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.emoji}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810]">
                      {s.nom}
                    </h3>
                  </div>
                  <span className="text-[#C8614A] text-sm font-semibold hidden sm:block">
                    {s.verdict}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[#5a3e35] text-sm leading-relaxed mb-5">
                    {s.detail}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {s.exemples.map((ex) => (
                      <div
                        key={ex.produit}
                        className="bg-[#F5ECD7] rounded-xl p-3 text-center"
                      >
                        <p className="text-[#2C1810] font-bold text-sm">
                          {ex.prix}
                        </p>
                        <p className="text-[#5a3e35]/60 text-xs mt-0.5">
                          {ex.produit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restos */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Manger dehors
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Le menu del día et le reste
          </h2>
          <p className="text-[#5a3e35] leading-relaxed mb-10">
            C&apos;est probablement là que tu seras le plus agréablement
            surpris(e). La culture du bar-restaurant espagnol pousse les prix
            vers le bas — et la qualité vers le haut.
          </p>

          <div className="space-y-4">
            {restos.map((r) => (
              <div
                key={r.type}
                className="bg-white rounded-2xl border border-[#EDE0C8] p-6 flex gap-5"
              >
                <div className="flex-shrink-0">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C8614A]">
                    {r.prix}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C1810] mb-1">
                    {r.type}
                  </h3>
                  <p className="text-[#7A8C5E] text-xs font-semibold mb-2">
                    {r.inclus}
                  </p>
                  <p className="text-[#5a3e35]/80 text-sm leading-relaxed">
                    {r.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 py-8 px-8 bg-[#EDE0C8] rounded-2xl border-l-4 border-[#C8614A]">
            <p className="text-[#2C1810] text-lg leading-relaxed">
              Le menu del día est probablement la meilleure chose qui soit
              arrivée à mon budget depuis que je vis en Espagne. Entrée, plat,
              dessert, boisson et pain pour 12€ — au bureau, à midi, tous les
              jours si je veux.
            </p>
          </div>
        </div>
      </section>

      {/* Transports */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Se déplacer
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6">
            L&apos;Abono Transporte
          </h2>
          <div className="bg-white rounded-2xl border border-[#EDE0C8] p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center flex-shrink-0">
              <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#C8614A]">
                54,60€
              </p>
              <p className="text-[#5a3e35]/60 text-sm mt-1">par mois</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2C1810] mb-2">
                Métro + bus illimités sur toutes les zones
              </h3>
              <p className="text-[#5a3e35] text-sm leading-relaxed">
                L&apos;Abono mensuel couvre l&apos;intégralité du réseau de
                transport en commun de Madrid — métro, bus urbain, cercanías
                (RER madrilène). Pour 54,60€/mois, tu ne penses plus aux
                transports. À Paris, le même passe Navigo coûte 86,40€. La
                différence parle d&apos;elle-même.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vices */}
      <section className="py-20 px-6 bg-[#2C1810]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8A838] font-semibold tracking-widest uppercase text-sm mb-2">
            La section honnête
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Les vices
          </h2>
          <p className="text-[#F5ECD7]/70 leading-relaxed mb-10">
            On n&apos;allait pas faire un guide budget sans parler de
            l&apos;essentiel.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {vices.map((v) => (
              <div
                key={v.nom}
                className="bg-white/5 rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{v.emoji}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                    {v.nom}
                  </h3>
                </div>
                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="text-[#F5ECD7]/50 text-xs mb-1">À Madrid</p>
                    <p className="text-[#E8A838] font-bold text-xl">
                      {v.prixMadrid}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#F5ECD7]/50 text-xs mb-1">En France</p>
                    <p className="text-[#F5ECD7]/40 font-bold text-xl line-through">
                      {v.prixFrance}
                    </p>
                  </div>
                </div>
                <p className="text-[#F5ECD7]/70 text-sm leading-relaxed">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget récap */}
      <section className="py-20 px-6 bg-[#F5ECD7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-2">
            Récapitulatif
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-4">
            Budget mensuel d&apos;un expat à Madrid
          </h2>
          <p className="text-[#5a3e35] leading-relaxed mb-10">
            Pour une personne seule, avec un appartement dans un quartier bien
            situé mais pas au cœur touristique.
          </p>

          <div className="bg-white rounded-2xl border border-[#EDE0C8] overflow-hidden">
            <div className="px-6 py-4 bg-[#C8614A]">
              <p className="text-white font-semibold">
                💶 Estimation mensuelle — 1 personne
              </p>
            </div>
            <div className="divide-y divide-[#EDE0C8]">
              {budgetMensuel.map((ligne) => (
                <div
                  key={ligne.poste}
                  className="px-6 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold text-[#2C1810] text-sm">
                      {ligne.poste}
                    </p>
                    {ligne.note && (
                      <p className="text-[#5a3e35]/60 text-xs mt-0.5">
                        {ligne.note}
                      </p>
                    )}
                  </div>
                  <span className="font-bold text-[#C8614A] whitespace-nowrap text-sm">
                    {ligne.montant}
                  </span>
                </div>
              ))}
              <div className="px-6 py-4 bg-[#EDE0C8] flex items-center justify-between">
                <p className="font-bold text-[#2C1810]">Total estimé</p>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C8614A]">
                  1 400 – 1 900 €
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#5a3e35]/60 text-xs mt-4">
            Ces chiffres correspondent à un mode de vie normal — pas à la
            ceinture, pas dans l&apos;excès. Ils évoluent selon tes quartiers
            et tes habitudes.
          </p>
        </div>
      </section>

      {/* Liens */}
      <section className="py-16 px-6 bg-[#EDE0C8]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
            Ça pourrait aussi t&apos;aider
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/appartement"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Trouver un appartement depuis la France
            </Link>
            <Link
              href="/quartiers"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Quel quartier choisir ?
            </Link>
            <Link
              href="/nie"
              className="px-4 py-2 rounded-full bg-white border border-[#EDE0C8] text-[#2C1810] text-sm hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Le guide du NIE
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
            Banque, impôts, autónomo, déménagement — les prochains guides
            arrivent bientôt.
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
