# Madrid & Toi — Bibliothèque d'éléments visuels

Charte graphique : **paprika & crème** — base crème neutre, accent paprika, typographie display chunky sur les gros titres uniquement.

Page de prévisualisation : `/ui` (non indexée)

---

## 00 — Tokens

| Rôle | Hex | Usage |
|---|---|---|
| `bg` | `#fbfaf6` | fond de page, sections claires |
| `alt` / `card` | `#f2f0e9` | sections alternées, cartes/surfaces |
| `ink` | `#171712` | titres, corps de texte, fond sombre (rôle unique, pas de second ton dark) |
| `accent` (paprika) | `#d6442a` | CTA, liens, pastilles, mot accentué du titre — jamais en aplat massif |
| `accent-hover` / `accent profond` | `#af3722` | hover sur accent, libellés secondaires |
| `accent pâle` | `#fbe8e4` | badges, fonds de section alternatifs (ex. newsletter), teinte de fond |
| `dark-hover` | `#0f0f0c` | hover sur bouton fond sombre |

Ratio cible : ~70% neutres (crème/beige), 20% encre, 10% paprika. Le paprika guide l'œil vers l'action — jamais en grand aplat de section (voir newsletter, §13).

Typographie — 2 familles :
- **Titres d'accroche** (h1, gros chiffres uniquement) : **Darker Grotesque 800** (`font-[family-name:var(--font-display)]`) — display très chunky, condensé, expressif.
- **Tout le reste** (h2/h3, corps de texte, boutons, nav, labels) : **Hanken Grotesk** (`font-[family-name:var(--font-body)]`), poids 400/600/700/800.

Pas de police mono — les petits détails techniques (rubriques, crédits) utilisent Hanken Grotesk en majuscules espacées (`font-bold uppercase tracking-wide`).

---

## 01 — Hero

Gradient `from-[#fbfaf6] to-[#f2f0e9]`, padding `pt-32 pb-20 px-6`, contenu `max-w-3xl mx-auto`.

```tsx
<section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
  <div className="max-w-3xl mx-auto">
    <Link href="/parent" className="inline-flex items-center gap-2 text-[#d6442a] text-sm font-semibold mb-8 hover:gap-3 transition-all">
      ← Retour à [Section]
    </Link>
    <p className="text-[#af3722] font-semibold tracking-widest uppercase text-sm mb-4">Label catégorie</p>
    <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171712] leading-tight mb-6">
      Titre <span className="not-italic font-extrabold text-[#d6442a]">avec accent</span>
    </h1>
    <p className="text-lg text-[#171712] leading-relaxed">Description intro.</p>
  </div>
</section>
```

Seul le H1 (et les gros chiffres, §03) utilise `--font-display`. Tout le reste du hero est en `--font-body`.

---

## 02 — Sections de contenu

Fonds alternés : `bg-[#fbfaf6]` / `bg-[#f2f0e9]`. Padding : `py-20 px-6`. Contenu : `max-w-3xl mx-auto`.

- H2 : `font-[family-name:var(--font-body)] text-3xl font-bold text-[#171712] mb-6`
- H3 : `font-semibold text-[#171712] text-lg mb-2`
- Corps : `text-[#171712] leading-relaxed text-lg`

---

## 03 — Stat cards

Grille 2, 3 ou 4 colonnes. Fond blanc/beige, ombre légère. **Les gros chiffres utilisent `--font-display`** (seul autre usage avec le H1).

```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
    <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[#d6442a] mb-2">Valeur</p>
    <p className="text-[#171712] text-sm">Label explicatif</p>
  </div>
</div>
```

---

## 04 — Blockquote / Citation

Toujours sur fond sombre `bg-[#171712]`. Termine la section sombre. Texte en `--font-body`, non-italique.

```tsx
<blockquote className="border-l-4 border-[#d6442a] pl-6">
  <p className="text-[#fbe8e4] font-[family-name:var(--font-body)] not-italic text-xl leading-relaxed">
    Texte de la citation.
  </p>
</blockquote>
```

Version enrichie (guillemet ornemental + attribution) :
```tsx
<div className="mt-2">
  <span className="block font-[family-name:var(--font-display)] font-extrabold text-[#d6442a] text-6xl leading-none mb-2">&ldquo;</span>
  <p className="font-[family-name:var(--font-body)] font-medium not-italic text-[#fbe8e4] text-2xl sm:text-3xl leading-snug">
    Texte de la citation.
  </p>
  <div className="flex items-center gap-3 mt-5">
    <span className="w-6 h-0.5 bg-[#d6442a]" />
    <span className="font-[family-name:var(--font-body)] font-semibold text-xs uppercase tracking-widest text-[#fbe8e4]/60">
      Chloé
    </span>
  </div>
</div>
```

Bloc interne dans une section sombre (avant la blockquote) :
```tsx
<div className="bg-white/10 rounded-2xl p-5">
  <p className="text-[#d6442a] font-semibold text-sm uppercase tracking-widest mb-2">Titre</p>
  <p className="text-[#fbe8e4]/80 text-sm leading-relaxed">Contenu.</p>
</div>
```

---

## 05 — Étapes numérotées

**Uniquement pour processus séquentiels où l'ordre est obligatoire.**

Variante fond clair :
```tsx
<div className="flex gap-5">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center text-white font-bold text-sm">1</div>
  <div>
    <h3 className="font-semibold text-[#171712] text-lg mb-2">Titre étape</h3>
    <p className="text-[#171712] leading-relaxed">Contenu.</p>
  </div>
</div>
```

Variante fond sombre (section `bg-[#171712]`) :
```tsx
<div className="flex gap-6">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d6442a] flex items-center justify-center">
    <span className="font-[family-name:var(--font-body)] text-white font-bold text-sm">1</span>
  </div>
  <div>
    <h3 className="font-[family-name:var(--font-body)] text-xl font-bold text-white mb-2">Titre</h3>
    <p className="text-[#fbe8e4]/80 leading-relaxed text-sm">Contenu.</p>
  </div>
</div>
```

---

## 06 — Cards

Card contenu simple :
```tsx
<div className="bg-white rounded-2xl p-5 shadow-sm">
  <p className="text-[#d6442a] font-semibold uppercase tracking-widest text-sm mb-2">Label</p>
  <p className="font-semibold text-[#171712] mb-1">Titre</p>
  <p className="text-[#171712] text-sm leading-relaxed">Contenu.</p>
</div>
```

Card index (page /travailler, /papiers…) — état actif :
```tsx
<Link href="/path" className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
  <div className="flex justify-between items-start mb-6">
    <div className="w-12 h-12 rounded-2xl bg-[#fbfaf6] flex items-center justify-center text-2xl">emoji</div>
    <span className="text-[#d6442a] text-xs font-semibold">Lire le guide →</span>
  </div>
  <h2 className="font-[family-name:var(--font-body)] text-xl font-bold text-[#171712] mb-3 group-hover:text-[#d6442a] transition-colors">Titre</h2>
  <p className="text-[#171712]/70 text-sm leading-relaxed">Description.</p>
</Link>
```

État désactivé "Bientôt" : `opacity-50`, pas de Link, badge `bg-[#d6442a]/20 text-[#d6442a] px-3 py-1 rounded-full`.

---

## 07 — Checklist & Tips

Checklist (header accent) :
```tsx
<div className="bg-white rounded-3xl shadow-md overflow-hidden">
  <div className="px-6 py-4 bg-[#d6442a]">
    <p className="text-white font-semibold">📋 Titre</p>
  </div>
  <div className="divide-y divide-[#f2f0e9]">
    <div className="px-6 py-4 flex items-start gap-4">
      <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#d6442a] mt-0.5" />
      <div>
        <p className="font-semibold text-[#171712] text-sm">Document</p>
        <p className="text-[#171712]/70 text-xs mt-0.5">Détail</p>
      </div>
    </div>
  </div>
</div>
```

Tips list (header sombre) : même structure, header `bg-[#171712]`, titre `text-[#d6442a]`, items `emoji + texte text-sm`.

---

## 08 — Tableaux de données

Tableau simple :
```tsx
<table className="w-full text-sm">
  <thead>
    <tr className="bg-[#f2f0e9]">
      <th className="text-left px-4 py-3 rounded-tl-xl text-[#171712] font-semibold">Col A</th>
      <th className="text-right px-4 py-3 rounded-tr-xl text-[#171712] font-semibold">Col B</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-[#f2f0e9]">
    <tr className="bg-white">
      <td className="px-4 py-3 text-[#171712]">Valeur</td>
      <td className="px-4 py-3 text-right text-[#171712] font-medium">Valeur</td>
    </tr>
  </tbody>
</table>
<p className="text-[#171712]/50 text-xs mt-3">Note de source.</p>
```

---

## 09 — Pills liens connexes

Section récurrente en fin de page, avant la newsletter.

```tsx
<section className="py-16 px-6 bg-[#fbfaf6]">
  <div className="max-w-3xl mx-auto">
    <p className="text-[#171712] font-semibold uppercase tracking-widest text-sm mb-6">
      Ça pourrait aussi t'aider
    </p>
    <div className="flex flex-wrap gap-3">
      <Link href="/path" className="px-4 py-2 rounded-full bg-white shadow-md text-[#171712] text-sm hover:text-[#d6442a] transition-colors">
        Libellé du lien
      </Link>
    </div>
  </div>
</section>
```

---

## 10 — Liens inline

Sur fond clair :
```tsx
<Link href="/path" className="text-[#d6442a] underline underline-offset-2 hover:text-[#af3722] transition-colors">texte</Link>
```

Sur fond sombre :
```tsx
<Link href="/path" className="text-[#d6442a] underline underline-offset-2 hover:opacity-80 transition-opacity">texte</Link>
```

Bouton CTA externe (dans une étape) :
```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer"
   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d6442a] text-white text-sm font-semibold hover:bg-[#af3722] transition-colors">
  Lien officiel ↗
</a>
```

---

## 11 — Tags & badges

```tsx
<span className="px-3 py-1.5 rounded-full bg-[#d6442a]/10 text-[#d6442a] text-sm font-semibold">Tag</span>
<span className="px-3 py-1.5 rounded-full bg-[#fbe8e4] text-[#af3722] text-sm font-semibold">Tag secondaire</span>
<span className="text-xs bg-[#d6442a]/20 text-[#d6442a] px-3 py-1 rounded-full font-semibold">Bientôt</span>
```

---

## 12 — Listes

Points négatifs (✕) :
```tsx
<li className="flex items-start gap-3">
  <span className="flex-shrink-0 text-[#d6442a] mt-0.5 font-bold">✕</span>
  <span>Texte de l'erreur</span>
</li>
```

Points bullet (—) :
```tsx
<li className="flex gap-2 items-start">
  <span className="text-[#d6442a] font-bold flex-shrink-0">—</span>
  <span className="text-sm">Texte de l'item</span>
</li>
```

---

## 13 — Newsletter

Identique sur toutes les pages. Seule la `description` change.

⚠️ **Le paprika ne doit jamais couvrir la section entière** (règle du design system). Fond en teinte pâle, texte en ink, bouton seul en paprika (voir `EmailForm`).

```tsx
<section id="newsletter" className="py-24 px-6 bg-[#fbe8e4]">
  <div className="max-w-2xl mx-auto text-center">
    <p className="text-[#af3722] text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
    <h2 className="font-[family-name:var(--font-body)] text-4xl font-bold text-[#171712] mb-6">
      Reçois nos guides dès qu'ils sortent
    </h2>
    <p className="text-[#171712]/80 text-lg mb-10">[Description contextuelle]</p>
    <div className="flex justify-center"><EmailForm /></div>
    <p className="text-[#171712]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
  </div>
</section>
```

---

## 14 — Footer

Identique sur toutes les pages.

```tsx
<footer className="py-10 px-6 bg-[#171712] text-center">
  <Link href="/" className="font-[family-name:var(--font-body)] text-xl text-[#fbe8e4] mb-2 block hover:text-[#d6442a] transition-colors">
    Madrid & Toi
  </Link>
  <p className="text-[#fbe8e4]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
</footer>
```
