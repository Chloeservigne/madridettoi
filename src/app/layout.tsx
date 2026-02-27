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
  metadataBase: new URL("https://madridettoi.vercel.app"),
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
    url: "https://madridettoi.vercel.app",
    siteName: "Madrid & Toi",
    locale: "fr_FR",
    type: "website",
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
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
