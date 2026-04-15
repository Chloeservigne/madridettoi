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

## Bibliothèque d'éléments visuels

**Avant de coder une nouvelle page**, consulter `DESIGN.md` à la racine du projet.
Il contient le code exact de chaque élément réutilisable : hero, stat cards, blockquote, étapes, checklist, tableau, pills, liens, newsletter, footer.
Page de prévisualisation (non indexée) : `/ui`

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
- `/logement/quartiers/tetuan` — éditorial, quartier abordable et multiculturel au nord
- `/logement/quartiers/moncloa-arguelles` — éditorial, quartier estudiantin et vert
- `/logement/colocation` — éditorial + tableau prix par quartier, plateformes, documents
- `/logement/prix` — éditorial + tableau prix au m² et fourchettes T1/T2/T3 par quartier, comparaison Paris–Madrid

### `/papiers`
- `/papiers/nie` — mixte : contexte éditorial + 4 vraies étapes numérotées + liens formulaires officiels
- `/papiers/secu` — éditorial
- `/papiers/padron` — mixte : éditorial + 3 étapes numérotées
- `/papiers/compte-bancaire` — mixte : éditorial + 3 étapes numérotées
- `/papiers/impots` — éditorial : règle des 183 jours, tranches IRPF 2026, Renta, convention France-Espagne, Modelo 720
- `/papiers/permis-de-conduire` — éditorial : échange volontaire vs obligatoire (4 cas), procédure DGT, documents, coût (28,87 €), délai

### `/travailler`
- `/travailler/remote` — éditorial
- `/travailler/emploi` — éditorial : secteurs qui recrutent, salaires 2026, plateformes (Infojobs, LinkedIn), conseils pratiques
- `/travailler/freelance` — mixte : éditorial + 3 étapes numérotées (NIE, Hacienda, RETA), tableau cotisations RETA 2026, Tarifa Plana, IVA/IRPF
- `/travailler/entreprises-francaises` — éditorial : grands groupes (Airbus Getafe, Decathlon, L'Oréal, Thales, Renault…), adresses bureaux, liens carrières ES, French Tech Madrid, CCIFE, section VIE
- `/travailler/vie` — mixte : éditorial + 4 étapes (Business France, cibler les groupes, dossier, installation), conditions, avantages/limites, lien mon-vie-via.businessfrance.fr

### `/demenagement`
- `/demenagement/paris-madrid` — éditorial
- `/demenagement/checklist` — étapes numérotées : timeline complète J-6 mois → J+3 mois, toutes les actions dans l'ordre

### `/vivre`
- `/vivre/transports` — éditorial : Abono (tarifs 2026), métro, EMT+búhos, Cercanías, aéroport, BiciMAD, taxi, VTC
- `/vivre/sante` — éditorial : médico de cabecera, PAC vs Urgencias, mutuelles privées (Sanitas, Adeslas, Asisa), CEAM
- `/vivre/courses` — éditorial : supermarchés, marchés municipaux, El Rastro, menu del día
- `/vivre/espagnol` — éditorial : EOI, académies, intercambios, apps, DELE
- `/vivre/sortir` — éditorial : musées gratuits (horaires), parcs, El Rastro, vie nocturne par quartier
- `/vivre/ecoles` — éditorial : LFM, école publique espagnole, sections bilingues, bourses AEFE, procédure inscription

### `/communaute`
- `/communaute/francais-madrid` — éditorial : 35 000 Français, Madrid Accueil, Institut français, groupes Facebook, intercambios, CCIFE

### Autres
- `/mon-histoire` — prose éditorial, pas de structure imposée

## Créer une nouvelle page — protocole obligatoire

### Avant de coder
1. Lire `DESIGN.md` — identifier les éléments à utiliser, ne rien inventer
2. Vérifier qu'aucune page existante ne couvre déjà cette intention (SEO, pas de cannibalisation)
3. **Cartographier le maillage** : quelles pages existantes doivent pointer vers cette nouvelle page ? Lesquelles doit-elle citer ?

### Pendant le codage
4. Intégrer les liens internes dans le corps du texte dès la rédaction (pas en ajout après)
5. Construire la section "Ça pourrait aussi t'aider" avec 4–5 pills vers des pages réellement liées
6. Metadata `title` et `description` optimisés pour l'intention de recherche cible

### Après avoir codé
7. **Mettre à jour les pages existantes** qui devraient pointer vers la nouvelle page (maillage bidirectionnel)
8. Mettre à jour `CLAUDE.md` : ajouter la page dans "Pages existantes"
9. Commit + push

---

## Maillage interne — règles

### Liens inline dans le corps du texte
Chaque fois qu'une notion est citée et qu'une page lui est dédiée, la lier. **Ne pas attendre la section "liens connexes".**

- Quartiers cités → `/logement/quartiers/[slug]`
- NIE mentionné → `/papiers/nie`
- Padron mentionné → `/papiers/padron`
- Compte bancaire mentionné → `/papiers/compte-bancaire`
- Sécu / Seguridad Social mentionné → `/papiers/secu`
- Appartement / logement / bail mentionné → `/logement/appartement`
- Colocation / chambre en coloc mentionnée → `/logement/colocation`
- Budget / coût de la vie mentionné → `/se-decider/budget`
- Salaire mentionné → `/se-decider/salaire-madrid`
- Remote / télétravail mentionné → `/travailler/remote`
- Autónomo / freelance mentionné → `/travailler/freelance`
- Emploi local mentionné → `/travailler/emploi`
- Entreprises françaises mentionnées → `/travailler/entreprises-francaises`
- VIE mentionné → `/travailler/vie`
- Transports / Abono mentionné → `/vivre/transports`
- Déménagement Paris–Madrid mentionné → `/demenagement/paris-madrid`
- Checklist déménagement mentionnée → `/demenagement/checklist`
- Santé / médecin / mutuelle mentionné → `/vivre/sante`
- Courses / supermarché mentionné → `/vivre/courses`
- Espagnol / intercambio mentionné → `/vivre/espagnol`
- Sortir / musées / vie nocturne mentionné → `/vivre/sortir`
- Impôts / fiscalité / IRPF mentionné → `/papiers/impots`
- Permis de conduire / DGT / échange mentionné → `/papiers/permis-de-conduire`
- École / lycée français / scolarité / enfants à Madrid mentionné → `/vivre/ecoles`
- Prix au m² / loyers par quartier / tableau loyers mentionné → `/logement/prix`
- Communauté française mentionnée → `/communaute/francais-madrid`

### Styles de liens
- Fond clair : `className="text-[#C8614A] underline underline-offset-2 hover:text-[#A84D3A] transition-colors"`
- Fond sombre : `className="text-[#E8A838] underline underline-offset-2 hover:opacity-80 transition-opacity"`
- Pills "liens connexes" : `className="px-4 py-2 rounded-full bg-white shadow-md text-[#2C1810] text-sm hover:text-[#C8614A] transition-colors"`

### Section "Ça pourrait aussi t'aider"
- Toujours présente avant la newsletter
- 4 à 6 pills maximum
- Choisir des pages complémentaires (pas juste les voisines dans l'arborescence)
- Penser au parcours utilisateur : que va-t-il chercher ensuite ?

### Maillage bidirectionnel
Quand on crée une nouvelle page, identifier les pages existantes qui devraient la mentionner et les mettre à jour. Exemples :
- Nouvelle page `/travailler/vie` → `/travailler/entreprises-francaises` devrait y faire référence (déjà fait)
- Nouvelle page `/vivre/sante` → `/papiers/secu` devrait la mentionner
- Nouvelle page `/logement/prix` → `/se-decider/budget` devrait la mentionner

## Liens externes importants (vérifiés)

- Cita previa NIE : `https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus/language/es_ES`
- Formulaire EX-15 : `https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf`
- Formulaire EX-18 : `https://www.inclusion.gob.es/documents/410169/2156469/18-Certificado_residencia_comunitaria.pdf`

## SEO — règles

- Pas de cannibalisation : une intention = une page
- Metadata `title` et `description` optimisés par page
- Ne pas créer de nouvelle page si une existante peut être optimisée

## Pages futures identifiées (mots-clés Ahrefs)

- `/logement/longue-duree`
