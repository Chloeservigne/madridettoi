import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madrid-et-toi.com"),
  title: {
    default: "Madrid & Toi — S'installer à Madrid, on t'accompagne",
    template: "%s — Madrid & Toi",
  },
  description:
    "Tu penses à quitter la France pour Madrid ? Retrouve tous les conseils, ressources et guides pour t'installer à Madrid sans te perdre.",
  openGraph: {
    title: "Madrid & Toi — S'installer à Madrid, on t'accompagne",
    description:
      "Tu penses à quitter la France pour Madrid ? Retrouve tous les conseils, ressources et guides pour t'installer à Madrid sans te perdre.",
    url: "https://madrid-et-toi.com",
    siteName: "Madrid & Toi",
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: "fEYGrbj2sVhosMtMB_EnX1kqVIVAtNbpjetltw89jWE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrid & Toi — S'installer à Madrid, on t'accompagne",
    description:
      "Tu penses à quitter la France pour Madrid ? Retrouve tous les conseils, ressources et guides pour t'installer à Madrid sans te perdre.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Madrid & Toi",
  url: "https://madrid-et-toi.com",
  description:
    "Guides pratiques pour les Français qui s'installent à Madrid — logement, NIE, travail, déménagement.",
  inLanguage: "fr-FR",
  author: {
    "@type": "Person",
    name: "Chloé",
    url: "https://madrid-et-toi.com/mon-histoire",
    description:
      "Française installée à Madrid, auteure de Madrid & Toi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${hankenGrotesk.variable} ${darkerGrotesque.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
