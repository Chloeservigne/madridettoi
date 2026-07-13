export interface SearchItem {
  title: string;
  href: string;
  category: string;
  keywords?: string[];
}

export const searchIndex: SearchItem[] = [
  { title: "Pourquoi partir à Madrid ?", href: "/se-decider/pourquoi-madrid", category: "Se décider" },
  { title: "Budget et coût de la vie à Madrid", href: "/se-decider/budget", category: "Se décider", keywords: ["prix", "argent"] },
  { title: "Salaire moyen à Madrid", href: "/se-decider/salaire-madrid", category: "Se décider", keywords: ["smi", "salaires"] },
  { title: "Madrid est fait pour toi ?", href: "/se-decider/pour-qui", category: "Se décider", keywords: ["profil"] },

  { title: "Trouver un appartement à Madrid", href: "/logement/appartement", category: "Logement", keywords: ["louer", "bail", "idealista"] },
  { title: "Les quartiers de Madrid", href: "/logement/quartiers", category: "Logement", keywords: ["barrio"] },
  { title: "Malasaña", href: "/logement/quartiers/malasana", category: "Quartier" },
  { title: "Chueca", href: "/logement/quartiers/chueca", category: "Quartier" },
  { title: "La Latina", href: "/logement/quartiers/la-latina", category: "Quartier" },
  { title: "Chamberí", href: "/logement/quartiers/chamberi", category: "Quartier" },
  { title: "Lavapiés", href: "/logement/quartiers/lavapies", category: "Quartier" },
  { title: "Salamanca", href: "/logement/quartiers/salamanca", category: "Quartier" },
  { title: "Tetuán", href: "/logement/quartiers/tetuan", category: "Quartier" },
  { title: "Moncloa-Argüelles", href: "/logement/quartiers/moncloa-arguelles", category: "Quartier" },
  { title: "Colocation à Madrid", href: "/logement/colocation", category: "Logement", keywords: ["coloc", "chambre"] },
  { title: "Prix au m² par quartier", href: "/logement/prix", category: "Logement", keywords: ["loyer", "achat"] },

  { title: "Le NIE, guide complet", href: "/papiers/nie", category: "Paperasses", keywords: ["numéro d'identification étranger", "cita previa"] },
  { title: "La sécurité sociale espagnole", href: "/papiers/secu", category: "Paperasses", keywords: ["seguridad social", "médecin"] },
  { title: "Le padrón municipal", href: "/papiers/padron", category: "Paperasses", keywords: ["empadronamiento", "mairie"] },
  { title: "Ouvrir un compte bancaire", href: "/papiers/compte-bancaire", category: "Paperasses", keywords: ["banque", "rib"] },
  { title: "Impôts et fiscalité en Espagne", href: "/papiers/impots", category: "Paperasses", keywords: ["irpf", "renta", "résident fiscal"] },
  { title: "Échanger son permis de conduire", href: "/papiers/permis-de-conduire", category: "Paperasses", keywords: ["dgt", "conduire"] },
  { title: "CNI, passeport, documents français", href: "/papiers/documents-francais", category: "Paperasses", keywords: ["consulat", "carte d'identité"] },

  { title: "Travailler en remote depuis Madrid", href: "/travailler/remote", category: "Travail", keywords: ["télétravail"] },
  { title: "Trouver un emploi à Madrid", href: "/travailler/emploi", category: "Travail", keywords: ["job", "infojobs"] },
  { title: "Devenir autónomo", href: "/travailler/freelance", category: "Travail", keywords: ["freelance", "reta", "indépendant"] },
  { title: "Entreprises françaises à Madrid", href: "/travailler/entreprises-francaises", category: "Travail" },
  { title: "Le VIE à Madrid", href: "/travailler/vie", category: "Travail", keywords: ["volontariat international"] },

  { title: "Déménager Paris–Madrid", href: "/demenagement/paris-madrid", category: "Déménagement" },
  { title: "Checklist déménagement", href: "/demenagement/checklist", category: "Déménagement", keywords: ["organisation", "timeline"] },

  { title: "Transports à Madrid", href: "/vivre/transports", category: "Vie quotidienne", keywords: ["abono", "metro", "bicimad"] },
  { title: "Santé et mutuelles", href: "/vivre/sante", category: "Vie quotidienne", keywords: ["médecin", "urgences", "sanitas"] },
  { title: "Courses et supermarchés", href: "/vivre/courses", category: "Vie quotidienne", keywords: ["marché", "mercadona"] },
  { title: "Apprendre l'espagnol", href: "/vivre/espagnol", category: "Vie quotidienne", keywords: ["eoi", "dele", "intercambio"] },
  { title: "Sortir à Madrid", href: "/vivre/sortir", category: "Vie quotidienne", keywords: ["musées", "vie nocturne"] },
  { title: "Écoles et scolarité", href: "/vivre/ecoles", category: "Vie quotidienne", keywords: ["enfants", "lycée français"] },

  { title: "La communauté française à Madrid", href: "/communaute/francais-madrid", category: "Communauté" },
  { title: "Mon histoire", href: "/mon-histoire", category: "Le site", keywords: ["chloé", "à propos"] },
];
