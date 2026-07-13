# Madrid & Toi — Bibliothèque d'éléments visuels

Charte graphique : **6a « Sol de Madrid »** — base crème chaude, accent coral-orange, typographie sans-serif nette.

Page de prévisualisation : `/ui` (non indexée)

---

## 00 — Tokens

| Rôle | Hex | Usage |
|---|---|---|
| `bg` | `#FFFBF5` | fond de page, sections claires |
| `alt` | `#FBEBDD` | sections alternées |
| `card` | `#FFFFFF` | cartes, pills |
| `ink` | `#33251E` | titres, corps de texte |
| `muted` | `#7C6A5C` | texte secondaire (peu utilisé pour l'instant, ink à opacité réduite en pratique) |
| `accent` | `#F0552F` | CTA, liens, pastilles, mot accentué du titre |
| `accent-hover` | `#CC4828` | hover sur accent |
| `secondary` | `#F2A65A` | labels/badges secondaires (ex-vert olive) |
| `gold` | `#FFC24B` | accents sur fond sombre, détails, footer |
| `dark` | `#241813` | fond sombre (footer, section citation) |
| `dark-hover` | `#1D130F` | hover sur bouton fond sombre |
| `dark-text` | `#F6E7D9` | texte crème sur fond sombre/accent |

Typographie :
- Titres : **Schibsted Grotesk** (`font-[family-name:var(--font-heading)]`), poids 700/800
- Corps : **Figtree** (`font-[family-name:var(--font-body)]`), poids 400

---

## 01 — Hero

Gradient `from-[#FFFBF5] to-[#FBEBDD]`, padding `pt-32 pb-20 px-6`, contenu `max-w-3xl mx-auto`.

```tsx
<section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
  <div className="max-w-3xl mx-auto">
    <Link href="/parent" className="inline-flex items-center gap-2 text-[#F0552F] text-sm font-semibold mb-8 hover:gap-3 transition-all">
      ← Retour à [Section]
    </Link>
    <p className="text-[#F2A65A] font-semibold tracking-widest uppercase text-sm mb-4">Label catégorie</p>
    <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#33251E] leading-tight mb-6">
      Titre <span className="not-italic font-bold text-[#F0552F]">avec accent</span>
    </h1>
    <p className="text-lg text-[#33251E] leading-relaxed">Description intro.</p>
  </div>
</section>
```

Variante avec tags dessous le texte intro :
```tsx
<div className="flex flex-wrap gap-3 mt-8">
  <span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Tag</span>
</div>
```

---

## 02 — Sections de contenu

Fonds alternés : `bg-[#FFFBF5]` / `bg-[#FBEBDD]`. Padding : `py-20 px-6`. Contenu : `max-w-3xl mx-auto`.

- H2 : `font-[family-name:var(--font-heading)] text-3xl font-bold text-[#33251E] mb-6`
- H3 : `font-semibold text-[#33251E] text-lg mb-2`
- Corps : `text-[#33251E] leading-relaxed text-lg`

---

## 03 — Stat cards

Grille 2, 3 ou 4 colonnes. Fond blanc, ombre légère.

```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
    <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#F0552F] mb-2">Valeur</p>
    <p className="text-[#33251E] text-sm">Label explicatif</p>
  </div>
</div>
```

---

## 04 — Blockquote / Citation

Toujours sur fond sombre `bg-[#241813]`. Termine la section sombre. Texte **non-italique** (changement important vs l'ancienne charte serif italique).

Version actuelle (déployée sur les 45 pages, bordure + texte recolorés) :
```tsx
<blockquote className="border-l-4 border-[#F0552F] pl-6">
  <p className="text-[#F6E7D9] font-[family-name:var(--font-heading)] not-italic text-xl leading-relaxed">
    Texte de la citation.
  </p>
</blockquote>
```

Version enrichie (guillemet ornemental + attribution — à utiliser sur les pages phares, pas encore généralisée) :
```tsx
<div className="mt-2">
  <span className="block font-[family-name:var(--font-heading)] font-extrabold text-[#F0552F] text-6xl leading-none mb-2">&ldquo;</span>
  <p className="font-[family-name:var(--font-heading)] font-medium not-italic text-[#F6E7D9] text-2xl sm:text-3xl leading-snug">
    Texte de la citation.
  </p>
  <div className="flex items-center gap-3 mt-5">
    <span className="w-6 h-0.5 bg-[#F0552F]" />
    <span className="font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-widest text-[#F6E7D9]/60">
      Chloé
    </span>
  </div>
</div>
```

Bloc interne dans une section sombre (avant la blockquote) :
```tsx
<div className="bg-white/10 rounded-2xl p-5">
  <p className="text-[#FFC24B] font-semibold text-sm uppercase tracking-widest mb-2">Titre</p>
  <p className="text-[#F6E7D9]/80 text-sm leading-relaxed">Contenu.</p>
</div>
```

---

## 05 — Étapes numérotées

**Uniquement pour processus séquentiels où l'ordre est obligatoire.**

Variante fond clair :
```tsx
<div className="flex gap-5">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center text-white font-bold text-sm">1</div>
  <div>
    <h3 className="font-semibold text-[#33251E] text-lg mb-2">Titre étape</h3>
    <p className="text-[#33251E] leading-relaxed">Contenu.</p>
  </div>
</div>
```

Variante fond sombre (section `bg-[#241813]`) :
```tsx
<div className="flex gap-6">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0552F] flex items-center justify-center">
    <span className="font-[family-name:var(--font-heading)] text-white font-bold text-sm">1</span>
  </div>
  <div>
    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">Titre</h3>
    <p className="text-[#F6E7D9]/80 leading-relaxed text-sm">Contenu.</p>
  </div>
</div>
```

---

## 06 — Cards

Card contenu simple :
```tsx
<div className="bg-white rounded-2xl p-5 shadow-sm">
  <p className="text-[#F0552F] font-semibold uppercase tracking-widest text-sm mb-2">Label</p>
  <p className="font-semibold text-[#33251E] mb-1">Titre</p>
  <p className="text-[#33251E] text-sm leading-relaxed">Contenu.</p>
</div>
```

Card index (page /travailler, /papiers…) — état actif :
```tsx
<Link href="/path" className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
  <div className="flex justify-between items-start mb-6">
    <div className="w-12 h-12 rounded-2xl bg-[#FFFBF5] flex items-center justify-center text-2xl">emoji</div>
    <span className="text-[#F0552F] text-xs font-semibold">Lire le guide →</span>
  </div>
  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#33251E] mb-3 group-hover:text-[#F0552F] transition-colors">Titre</h2>
  <p className="text-[#33251E]/70 text-sm leading-relaxed">Description.</p>
</Link>
```

État désactivé "Bientôt" : `opacity-50`, pas de Link, badge `bg-[#FFC24B]/20 text-[#FFC24B] px-3 py-1 rounded-full`.

---

## 07 — Checklist & Tips

Checklist (header accent) :
```tsx
<div className="bg-white rounded-3xl shadow-md overflow-hidden">
  <div className="px-6 py-4 bg-[#F0552F]">
    <p className="text-white font-semibold">📋 Titre</p>
  </div>
  <div className="divide-y divide-[#FBEBDD]">
    <div className="px-6 py-4 flex items-start gap-4">
      <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#F0552F] mt-0.5" />
      <div>
        <p className="font-semibold text-[#33251E] text-sm">Document</p>
        <p className="text-[#33251E]/70 text-xs mt-0.5">Détail</p>
      </div>
    </div>
  </div>
</div>
```

Tips list (header sombre) : même structure, header `bg-[#241813]`, titre `text-[#FFC24B]`, items `emoji + texte text-sm`.

---

## 08 — Tableaux de données

Tableau simple :
```tsx
<table className="w-full text-sm">
  <thead>
    <tr className="bg-[#FBEBDD]">
      <th className="text-left px-4 py-3 rounded-tl-xl text-[#33251E] font-semibold">Col A</th>
      <th className="text-right px-4 py-3 rounded-tr-xl text-[#33251E] font-semibold">Col B</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-[#FBEBDD]">
    <tr className="bg-white">
      <td className="px-4 py-3 text-[#33251E]">Valeur</td>
      <td className="px-4 py-3 text-right text-[#33251E] font-medium">Valeur</td>
    </tr>
  </tbody>
</table>
<p className="text-[#33251E]/50 text-xs mt-3">Note de source.</p>
```

---

## 09 — Pills liens connexes

Section récurrente en fin de page, avant la newsletter.

```tsx
<section className="py-16 px-6 bg-[#FFFBF5]">
  <div className="max-w-3xl mx-auto">
    <p className="text-[#33251E] font-semibold uppercase tracking-widest text-sm mb-6">
      Ça pourrait aussi t'aider
    </p>
    <div className="flex flex-wrap gap-3">
      <Link href="/path" className="px-4 py-2 rounded-full bg-white shadow-md text-[#33251E] text-sm hover:text-[#F0552F] transition-colors">
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
<Link href="/path" className="text-[#F0552F] underline underline-offset-2 hover:text-[#CC4828] transition-colors">texte</Link>
```

Sur fond sombre :
```tsx
<Link href="/path" className="text-[#FFC24B] underline underline-offset-2 hover:opacity-80 transition-opacity">texte</Link>
```

Bouton CTA externe (dans une étape) :
```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer"
   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0552F] text-white text-sm font-semibold hover:bg-[#CC4828] transition-colors">
  Lien officiel ↗
</a>
```

---

## 11 — Tags & badges

```tsx
<span className="px-3 py-1.5 rounded-full bg-[#F0552F]/10 text-[#F0552F] text-sm font-semibold">Tag</span>
<span className="px-3 py-1.5 rounded-full bg-[#F2A65A]/10 text-[#F2A65A] text-sm font-semibold">Tag secondaire</span>
<span className="text-xs bg-[#FFC24B]/20 text-[#FFC24B] px-3 py-1 rounded-full font-semibold">Bientôt</span>
```

---

## 12 — Listes

Points négatifs (✕) :
```tsx
<li className="flex items-start gap-3">
  <span className="flex-shrink-0 text-[#F0552F] mt-0.5 font-bold">✕</span>
  <span>Texte de l'erreur</span>
</li>
```

Points bullet (—) :
```tsx
<li className="flex gap-2 items-start">
  <span className="text-[#F0552F] font-bold flex-shrink-0">—</span>
  <span className="text-sm">Texte de l'item</span>
</li>
```

---

## 13 — Newsletter

Identique sur toutes les pages. Seule la `description` change.

```tsx
<section id="newsletter" className="py-24 px-6 bg-[#F0552F]">
  <div className="max-w-2xl mx-auto text-center">
    <p className="text-[#F6E7D9]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
    <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mb-6">
      Reçois nos guides dès qu'ils sortent
    </h2>
    <p className="text-[#F6E7D9]/90 text-lg mb-10">[Description contextuelle]</p>
    <div className="flex justify-center"><EmailForm /></div>
    <p className="text-[#F6E7D9]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
  </div>
</section>
```

---

## 14 — Footer

Identique sur toutes les pages.

```tsx
<footer className="py-10 px-6 bg-[#241813] text-center">
  <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#F6E7D9] mb-2 block hover:text-[#FFC24B] transition-colors">
    Madrid & Toi
  </Link>
  <p className="text-[#F6E7D9]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
</footer>
```
