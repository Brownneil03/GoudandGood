"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-3X508DPPZ4";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// Fonction pour tracker les clics sur les liens affiliés
export function trackAffiliateClick(productName: string, store: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "affiliate_click", {
      event_category: "Affiliate",
      event_label: `${productName} - ${store}`,
      product_name: productName,
      store: store,
    });
  }
}
