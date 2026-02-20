import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAdsense from "@/components/GoogleAdsense";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goudand-good.vercel.app"),
  title: {
    default: "Goud&Good | Comparatifs et Guides d'Achat Tech au Maroc",
    template: "%s | Goud&Good",
  },
  description:
    "Trouvez les meilleurs smartphones, PC portables et accessoires tech au Maroc. Comparatifs honnêtes, prix en DH sur Jumia, Amazon et AliExpress. Guide d'achat 2025.",
  keywords: [
    "comparatif smartphone maroc",
    "meilleur téléphone maroc",
    "guide achat tech maroc",
    "pc portable maroc",
    "prix smartphone maroc",
    "meilleur xiaomi maroc",
    "samsung vs xiaomi",
    "smartphone pas cher maroc",
    "pc portable étudiant maroc",
    "écouteurs sans fil maroc",
    "jumia maroc tech",
    "amazon maroc",
    "aliexpress maroc",
    "meilleur rapport qualité prix maroc",
    "comparateur prix maroc",
  ],
  authors: [{ name: "Goud&Good" }],
  creator: "Goud&Good",
  publisher: "Goud&Good",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://goudand-good.vercel.app",
    siteName: "Goud&Good",
    title: "Goud&Good | Comparatifs Tech au Maroc",
    description:
      "Trouvez les meilleurs smartphones, PC et accessoires tech au Maroc. Prix Jumia, Amazon, AliExpress.",
    // Image générée dynamiquement par opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Goud&Good | Comparatifs Tech au Maroc",
    description:
      "Trouvez les meilleurs smartphones, PC et accessoires tech au Maroc.",
    // Image générée dynamiquement par opengraph-image.tsx
  },
  alternates: {
    canonical: "https://goudand-good.vercel.app",
    languages: {
      "fr-MA": "https://goudand-good.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ULxzGBMxV02SIinN8uyLdiwav--13ljXgZhczXbySAY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <GoogleAnalytics />
        <GoogleAdsense />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
