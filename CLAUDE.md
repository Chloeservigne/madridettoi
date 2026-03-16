# Madrid & Toi — CLAUDE.md

Guide de développement pour claude code. À lire en début de session.

## Le projet

Site Next.js pour les Français qui veulent s'installer à Madrid. Contenu éditorial, guides pratiques, SEO. Déployé sur Vercel via GitHub (push = deploy automatique).

URL : madrid-et-toi.com
Stack : Next.js 16, TypeScript, Tailwind CSS, App Router

## Workflow

```bash
npm run dev        # développement local
git add [fichiers] # toujours stageur fichier par fichier, jamais git add -A
git commit         # avec message descriptif
git push           # déclenche le déploiement Vercel
```

## Couleurs (palette fixe, ne pas inventer)

| Nom | Hex | Usage |
|-----|-----|-------|
| Terracotta | `#C8614A` | Accent principal, CTA, liens |
| Crème | `#F5ECD7` | Fond clair |
| Beige chaud | `#EDE0C8` | Fond alternatif |
| Brun foncé | `#2C1810` | Fond dark, footer |
| Brun texte | `#5a3e35` | Corps de texte |
| Vert | `#7A8C5E` | Labels, badges secondaires |
| Or | `#E8A838` | Accents sur fond dark, blockquotes |

## Typographie

- `font-[family-name:var(--font-playfair)]` → titres (Fraunces)
- `font-[family-name:var(--font-dm-sans)]` → corps (Jost)

## Format des pages — règle fondamentale

**Numéros uniquement pour les vraies étapes séquentielles** (processus admin où l'ordre compte).
**Format éditorial pour tout le reste** (contenu descriptif, raisons, thématiques).

### Format éditorial (quartiers, pourquoi Madrid, sécu, remote, déménagement…)
- Sections avec H2 thématiques, fonds alternés `bg-[#F5ECD7]` / `bg-[#EDE0C8]`
- Une section sombre `bg-[#2C1810]` avec blockquote `border-[#E8A838]`
- Grille 2 colonnes pour "pour/contre" ou "selon ta situation"
- Pas de tableau `steps[]`, pas de cercles numérotés

### Format étapes numérotées (NIE, appartement…)
- Cercles `bg-[#C8614A]` avec chiffre blanc
- H3 (pas H2) pour les titres d'étape
- Seulement quand l'ordre est obligatoire

## Structure des pages

Toutes les pages suivent ce schéma :
```
Hero (gradient from-[#F5ECD7] to-[#EDE0C8])
→ Sections de contenu alternées
→ Section dark optionnelle avec blockquote
→ Section liens connexes (pills arrondies)
→ Newsletter (bg-[#C8614A])
→ Footer (bg-[#2C1810])
```

## Pages existantes

### `/se-decider`
- `/se-decider/pourquoi-madrid` — éditorial, 6 raisons
- `/se-decider/budget` — coût de la vie, tableau loyers par quartier
- `/se-decider/salaire-madrid` — SMI, salaire moyen, par secteur, brut/net, comparaison Paris–Madrid

### `/logement`
- `/logement/appartement` — processus (étapes numérotées, garder)
- `/logement/quartiers` — index des quartiers
- `/logement/quartiers/malasana` — éditorial
- `/logement/quartiers/chueca` — éditorial
- `/logement/quartiers/la-latina` — éditorial
- `/logement/quartiers/chamberi` — éditorial
- `/logement/quartiers/lavapies` — éditorial
- `/logement/quartiers/salamanca` — éditorial

### `/papiers`
- `/papiers/nie` — mixte : contexte éditorial + 4 vraies étapes numérotées + liens formulaires officiels
- `/papiers/secu` — éditorial
- `/papiers/padron` — mixte : éditorial + 3 étapes numérotées
- `/papiers/compte-bancaire` — mixte : éditorial + 3 étapes numérotées

### `/travailler`
- `/travailler/remote` — éditorial
- `/travailler/emploi` — éditorial : secteurs qui recrutent, salaires 2026, plateformes (Infojobs, LinkedIn), conseils pratiques
- `/travailler/freelance` — mixte : éditorial + 3 étapes numérotées (NIE, Hacienda, RETA), tableau cotisations RETA 2026, Tarifa Plana, IVA/IRPF

### `/demenagement`
- `/demenagement/paris-madrid` — éditorial

### `/vivre`
- `/vivre/transports` — éditorial : Abono (tarifs 2026), métro, EMT+búhos, Cercanías, aéroport, BiciMAD, taxi, VTC

### Autres
- `/mon-histoire` — prose éditorial, pas de structure imposée

## Linking interne — règles

- Toujours linker les noms de quartiers cités dans le corps du texte vers leur page `/logement/quartiers/[slug]`
- Style lien inline : `className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"`
- Style lien inline sur fond dark : `className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity"`
- Les sections "liens connexes" utilisent des pills : `className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"`

## Liens externes importants (vérifiés)

- Cita previa NIE : `https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus/language/es_ES`
- Formulaire EX-15 : `https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf`
- Formulaire EX-18 : `https://www.inclusion.gob.es/documents/410169/2156469/18-Certificado_residencia_comunitaria.pdf`

## SEO — règles

- Pas de cannibalisation : une intention = une page
- Metadata `title` et `description` optimisés par page
- Ne pas créer de nouvelle page si une existante peut être optimisée

## Pages futures identifiées (mots-clés Ahrefs)

- `/logement/prix`, `/logement/longue-duree`
- `/vivre/sante`
