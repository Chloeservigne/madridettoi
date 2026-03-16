# Madrid & Toi — Bibliothèque d'éléments visuels

Page de prévisualisation : `/ui` (non indexée)

---

## 01 — Hero

Gradient `from-[#F5ECD7] to-[#EDE0C8]`, padding `pt-32 pb-20 px-6`, contenu `max-w-3xl mx-auto`.

```tsx
<section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
  <div className="max-w-3xl mx-auto">
    <Link href="/parent" className="inline-flex items-center gap-2 text-[#C8614A] text-sm font-semibold mb-8 hover:gap-3 transition-all">
      ← Retour à [Section]
    </Link>
    <p className="text-[#7A8C5E] font-semibold tracking-widest uppercase text-sm mb-4">Label catégorie</p>
    <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
      Titre <span className="italic text-[#C8614A]">avec accent</span>
    </h1>
    <p className="text-lg text-[#5a3e35] leading-relaxed">Description intro.</p>
  </div>
</section>
```

Variante avec tags dessous le texte intro :
```tsx
<div className="flex flex-wrap gap-3 mt-8">
  <span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag</span>
</div>
```

---

## 02 — Sections de contenu

Fonds alternés : `bg-[#F5ECD7]` / `bg-[#EDE0C8]`. Padding : `py-20 px-6`. Contenu : `max-w-3xl mx-auto`.

- H2 : `font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2C1810] mb-6`
- H3 : `font-semibold text-[#2C1810] text-lg mb-2`
- Corps : `text-[#5a3e35] leading-relaxed text-lg`

---

## 03 — Stat cards

Grille 2, 3 ou 4 colonnes. Fond blanc, ombre légère.

```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C8614A] mb-2">Valeur</p>
    <p className="text-[#5a3e35] text-sm">Label explicatif</p>
  </div>
</div>
```

---

## 04 — Blockquote / Citation

Toujours sur fond sombre `bg-[#2C1810]`. Termine la section sombre. Jamais de guillemets.

```tsx
<blockquote className="border-l-4 border-[#E8A838] pl-6">
  <p className="text-[#E8A838] font-[family-name:var(--font-playfair)] italic text-xl leading-relaxed">
    Texte de la citation.
  </p>
</blockquote>
```

Bloc interne dans une section sombre (avant la blockquote) :
```tsx
<div className="bg-white/10 rounded-2xl p-5">
  <p className="text-[#E8A838] font-semibold text-sm uppercase tracking-widest mb-2">Titre</p>
  <p className="text-[#F5ECD7]/80 text-sm leading-relaxed">Contenu.</p>
</div>
```

---

## 05 — Étapes numérotées

**Uniquement pour processus séquentiels où l'ordre est obligatoire.**

Variante fond clair :
```tsx
<div className="flex gap-5">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center text-white font-bold text-sm">1</div>
  <div>
    <h3 className="font-semibold text-[#2C1810] text-lg mb-2">Titre étape</h3>
    <p className="text-[#5a3e35] leading-relaxed">Contenu.</p>
  </div>
</div>
```

Variante fond sombre (section `bg-[#2C1810]`) :
```tsx
<div className="flex gap-6">
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8614A] flex items-center justify-center">
    <span className="font-[family-name:var(--font-playfair)] text-white font-bold text-sm">1</span>
  </div>
  <div>
    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">Titre</h3>
    <p className="text-[#F5ECD7]/80 leading-relaxed text-sm">Contenu.</p>
  </div>
</div>
```

---

## 06 — Cards

Card contenu simple :
```tsx
<div className="bg-white rounded-2xl p-5 shadow-sm">
  <p className="text-[#C8614A] font-semibold uppercase tracking-widest text-sm mb-2">Label</p>
  <p className="font-semibold text-[#2C1810] mb-1">Titre</p>
  <p className="text-[#5a3e35] text-sm leading-relaxed">Contenu.</p>
</div>
```

Card index (page /travailler, /papiers…) — état actif :
```tsx
<Link href="/path" className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
  <div className="flex justify-between items-start mb-6">
    <div className="w-12 h-12 rounded-2xl bg-[#F5ECD7] flex items-center justify-center text-2xl">emoji</div>
    <span className="text-[#C8614A] text-xs font-semibold">Lire le guide →</span>
  </div>
  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#C8614A] transition-colors">Titre</h2>
  <p className="text-[#5a3e35]/70 text-sm leading-relaxed">Description.</p>
</Link>
```

État désactivé "Bientôt" : `opacity-50`, pas de Link, badge `bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full`.

---

## 07 — Checklist & Tips

Checklist (header terracotta) :
```tsx
<div className="bg-white rounded-3xl shadow-md overflow-hidden">
  <div className="px-6 py-4 bg-[#C8614A]">
    <p className="text-white font-semibold">📋 Titre</p>
  </div>
  <div className="divide-y divide-[#EDE0C8]">
    <div className="px-6 py-4 flex items-start gap-4">
      <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#C8614A] mt-0.5" />
      <div>
        <p className="font-semibold text-[#2C1810] text-sm">Document</p>
        <p className="text-[#5a3e35]/70 text-xs mt-0.5">Détail</p>
      </div>
    </div>
  </div>
</div>
```

Tips list (header sombre) : même structure, header `bg-[#2C1810]`, titre `text-[#E8A838]`, items `emoji + texte text-sm`.

---

## 08 — Tableaux de données

Tableau simple :
```tsx
<table className="w-full text-sm">
  <thead>
    <tr className="bg-[#EDE0C8]">
      <th className="text-left px-4 py-3 rounded-tl-xl text-[#2C1810] font-semibold">Col A</th>
      <th className="text-right px-4 py-3 rounded-tr-xl text-[#2C1810] font-semibold">Col B</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-[#EDE0C8]">
    <tr className="bg-white">
      <td className="px-4 py-3 text-[#5a3e35]">Valeur</td>
      <td className="px-4 py-3 text-right text-[#5a3e35] font-medium">Valeur</td>
    </tr>
  </tbody>
</table>
<p className="text-[#5a3e35]/50 text-xs mt-3">Note de source.</p>
```

---

## 09 — Pills liens connexes

Section récurrente en fin de page, avant la newsletter.

```tsx
<section className="py-16 px-6 bg-[#F5ECD7]">
  <div className="max-w-3xl mx-auto">
    <p className="text-[#5a3e35] font-semibold uppercase tracking-widest text-sm mb-6">
      Ça pourrait aussi t'aider
    </p>
    <div className="flex flex-wrap gap-3">
      <Link href="/path" className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors">
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
<Link href="/path" className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors">texte</Link>
```

Sur fond sombre :
```tsx
<Link href="/path" className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity">texte</Link>
```

Bouton CTA externe (dans une étape) :
```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer"
   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors">
  Lien officiel ↗
</a>
```

---

## 11 — Tags & badges

```tsx
<span className="px-3 py-1.5 rounded-full bg-[#C8614A]/10 text-[#C8614A] text-sm font-semibold">Tag</span>
<span className="px-3 py-1.5 rounded-full bg-[#7A8C5E]/10 text-[#7A8C5E] text-sm font-semibold">Tag vert</span>
<span className="text-xs bg-[#E8A838]/20 text-[#E8A838] px-3 py-1 rounded-full font-semibold">Bientôt</span>
```

---

## 12 — Listes

Points négatifs (✕) :
```tsx
<li className="flex items-start gap-3">
  <span className="flex-shrink-0 text-[#C8614A] mt-0.5 font-bold">✕</span>
  <span>Texte de l'erreur</span>
</li>
```

Points bullet (—) :
```tsx
<li className="flex gap-2 items-start">
  <span className="text-[#C8614A] font-bold flex-shrink-0">—</span>
  <span className="text-sm">Texte de l'item</span>
</li>
```

---

## 13 — Newsletter

Identique sur toutes les pages. Seule la `description` change.

```tsx
<section id="newsletter" className="py-24 px-6 bg-[#C8614A]">
  <div className="max-w-2xl mx-auto text-center">
    <p className="text-[#F5ECD7]/70 text-sm uppercase tracking-widest mb-4">Sois parmi les premiers</p>
    <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-6">
      Reçois nos guides dès qu'ils sortent
    </h2>
    <p className="text-[#F5ECD7]/90 text-lg mb-10">[Description contextuelle]</p>
    <div className="flex justify-center"><EmailForm /></div>
    <p className="text-[#F5ECD7]/60 text-xs mt-4">Pas de spam. Juste du contenu utile. Désabonnement en un clic.</p>
  </div>
</section>
```

---

## 14 — Footer

Identique sur toutes les pages.

```tsx
<footer className="py-10 px-6 bg-[#2C1810] text-center">
  <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl text-[#F5ECD7] mb-2 block hover:text-[#E8A838] transition-colors">
    Madrid & Toi
  </Link>
  <p className="text-[#F5ECD7]/40 text-sm">© {new Date().getFullYear()} — Fait avec ☀️ depuis Madrid</p>
</footer>
```
