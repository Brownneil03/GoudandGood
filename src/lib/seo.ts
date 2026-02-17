import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

const baseUrl = "https://goudand-good.vercel.app";
const siteName = "Goud&Good";

/**
 * Génère les metadata SEO pour une page
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  canonical,
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOConfig): Metadata {
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "maroc",
      "comparatif",
      "guide achat",
      "prix dh",
      "tech",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: type === "article" ? "article" : "website",
      locale: "fr_MA",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [siteName],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
    },
  };
}

/**
 * Génère le schema.org JSON-LD pour un article
 */
export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? `${baseUrl}${image}` : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: siteName,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${url}`,
    },
  };
}

/**
 * Génère le schema.org JSON-LD pour un produit
 */
export function generateProductSchema({
  name,
  description,
  image,
  price,
  currency = "MAD",
  rating,
  reviewCount,
  brand,
}: {
  name: string;
  description: string;
  image?: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  brand: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image ? `${baseUrl}${image}` : undefined,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Jumia Maroc",
      },
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: reviewCount || 1,
      },
    }),
  };
}

/**
 * Génère le schema.org JSON-LD pour une FAQ
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
