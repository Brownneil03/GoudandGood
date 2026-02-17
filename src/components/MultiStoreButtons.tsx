"use client";

import Link from "next/link";

interface Store {
  name: string;
  slug: string;
  color: string;
  hoverColor: string;
  icon: React.ReactNode;
}

interface MultiStoreButtonsProps {
  productName: string;
  className?: string;
  layout?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

// Configuration des stores disponibles
const stores: Store[] = [
  {
    name: "Jumia",
    slug: "jumia",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    slug: "amazon",
    color: "bg-[#FF9900]",
    hoverColor: "hover:bg-[#E88B00]",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    name: "AliExpress",
    slug: "aliexpress",
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

// Génère un slug pour le produit + store
function generateSlug(productName: string, storeName: string): string {
  const productSlug = productName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  
  return `${productSlug}-${storeName.toLowerCase()}`;
}

/**
 * Composant pour afficher plusieurs boutons d'achat (Jumia, Amazon, AliExpress)
 * Maximise les chances de conversion en offrant plusieurs options
 */
export default function MultiStoreButtons({
  productName,
  className = "",
  layout = "horizontal",
  size = "md",
}: MultiStoreButtonsProps) {
  const sizeClasses = {
    sm: "py-1.5 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  const layoutClasses = {
    horizontal: "flex flex-wrap gap-2",
    vertical: "flex flex-col gap-2",
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {stores.map((store) => {
        const slug = generateSlug(productName, store.name);
        
        return (
          <Link
            key={store.slug}
            href={`/go/${slug}`}
            target="_blank"
            rel="nofollow sponsored noopener"
            className={`
              inline-flex items-center justify-center gap-2 
              ${store.color} ${store.hoverColor}
              text-white font-medium rounded-lg
              transition-all duration-200 transform hover:scale-105
              ${sizeClasses[size]}
            `}
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "affiliate_click", {
                  event_category: "Affiliate",
                  event_label: productName,
                  event_action: store.name,
                  value: 1,
                });
              }
            }}
          >
            {store.icon}
            <span>{store.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

// Export pour générer les slugs depuis d'autres fichiers
export { generateSlug, stores };
