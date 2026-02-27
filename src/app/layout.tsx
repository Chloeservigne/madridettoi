import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Madrid & Toi — S'installer à Madrid, on t'accompagne",
  description:
    "Tu penses à quitter la France pour Madrid ? Retrouve tous les conseils, ressources et guides pour t'installer à Madrid sans te perdre.",
  openGraph: {
    title: "Madrid & Toi — S'installer à Madrid, on t'accompagne",
    description:
      "Tu penses à quitter la France pour Madrid ? Retrouve tous les conseils, ressources et guides pour t'installer à Madrid sans te perdre.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
