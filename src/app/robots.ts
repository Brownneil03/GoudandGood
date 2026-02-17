import { MetadataRoute } from "next";

/**
 * Configuration robots.txt pour SEO
 * 
 * Indique aux moteurs de recherche quoi indexer
 * URL: /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://guideachatmaroc.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/go/", // Ne pas indexer les redirections affiliées
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
