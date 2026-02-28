import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "300",
});

const fraunces = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${jost.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
