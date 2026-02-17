import { MetadataRoute } from "next";

/**
 * Sitemap automatique pour SEO
 * 
 * Next.js génère automatiquement le sitemap.xml à partir de cette fonction
 * URL: /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goudand-good.vercel.app";

  // Pages statiques
  const staticPages = [
    "",
    "/comparatifs/smartphones",
    "/comparatifs/pc-portables",
    "/comparatifs/accessoires",
    "/guides",
    "/a-propos",
    "/contact",
  ];

  // Articles comparatifs smartphones
  const comparatifsSmartphones = [
    "/comparatifs/meilleur-smartphone-moins-2000-dh-maroc",
    "/comparatifs/meilleur-telephone-3000-dh-maroc",
    "/comparatifs/meilleur-smartphone-photo-maroc",
    "/comparatifs/meilleur-xiaomi-maroc",
    "/comparatifs/samsung-vs-xiaomi-maroc",
  ];

  // Articles comparatifs PC
  const comparatifsPC = [
    "/comparatifs/meilleur-pc-portable-etudiant-maroc",
    "/comparatifs/meilleur-pc-portable-gamer-pas-cher-maroc",
    "/comparatifs/hp-vs-lenovo-pc-portable-maroc",
  ];

  // Articles comparatifs accessoires
  const comparatifsAccessoires = [
    "/comparatifs/meilleurs-ecouteurs-sans-fil-maroc",
    "/comparatifs/meilleur-power-bank-maroc",
    "/comparatifs/meilleur-chargeur-rapide-maroc",
  ];

  // Guides d'achat
  const guides = [
    "/guides/comment-choisir-smartphone-maroc",
    "/guides/ou-acheter-smartphone-maroc",
    "/guides/erreurs-eviter-achat-pc-maroc",
  ];

  const comparatifs = [
    ...comparatifsSmartphones,
    ...comparatifsPC,
    ...comparatifsAccessoires,
  ];

  const allPages = [...staticPages, ...comparatifs, ...guides];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" 
      ? 1 
      : path.includes("/comparatifs/meilleur") || path.includes("/comparatifs/samsung") || path.includes("/comparatifs/hp")
        ? 0.9 
        : path.includes("/comparatifs/")
          ? 0.8 
          : path.includes("/guides/")
            ? 0.7
            : 0.6,
  }));
}
