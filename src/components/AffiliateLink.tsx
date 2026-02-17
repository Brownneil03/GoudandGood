"use client";

import Link from "next/link";

interface AffiliateLinkProps {
  href: string;
  productName: string;
  children: React.ReactNode;
  className?: string;
  showStore?: boolean; // Afficher le nom du magasin automatiquement
}

// Détecte le magasin basé sur la marque du produit
function getStoreName(productName: string): string {
  const name = productName.toLowerCase();
  // Marques disponibles sur Amazon (pas sur Jumia Maroc)
  if (name.includes("anker") || name.includes("soundcore")) return "Amazon";
  if (name.includes("ugreen")) return "Amazon";
  if (name.includes("jbl")) return "Amazon";
  if (name.includes("baseus")) return "Amazon";
  if (name.includes("romoss")) return "Amazon";
  if (name.includes("pixel")) return "Amazon"; // Google Pixel
  // Marques disponibles sur Jumia Maroc
  return "Jumia";
}

/**
 * Composant pour les liens d'affiliation
 * - Multi-plateforme: Jumia, Amazon, etc.
 * - Passe par /go/[slug] pour le tracking
 * - Ajoute les attributs SEO corrects (nofollow, sponsored)
 */
export default function AffiliateLink({
  href,
  productName,
  children,
  className = "",
  showStore = false,
}: AffiliateLinkProps) {
  // Créer un slug à partir du nom du produit
  const slug = productName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
    .replace(/[^a-z0-9]+/g, "-") // Remplacer les caractères spéciaux par des tirets
    .replace(/(^-|-$)/g, ""); // Supprimer les tirets au début et à la fin

  const storeName = getStoreName(productName);

  return (
    <Link
      href={`/go/${slug}`}
      className={className}
      rel="nofollow sponsored noopener"
      target="_blank"
      data-affiliate-url={href}
      data-store={storeName}
      onClick={() => {
        // Tracking côté client (optionnel, pour analytics)
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "affiliate_click", {
            event_category: "Affiliate",
            event_label: productName,
            event_action: storeName,
            value: 1,
          });
        }
      }}
    >
      {showStore ? `Voir sur ${storeName} →` : children}
    </Link>
  );
}

// Export pour utilisation externe
export { getStoreName };

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
