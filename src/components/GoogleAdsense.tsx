"use client";

import Script from "next/script";

const ADSENSE_ID = "ca-pub-9916797543197027";

export default function GoogleAdsense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

// Composant pour afficher un bloc d'annonce
export function AdBanner({ slot, format = "auto", responsive = true }: { 
  slot: string; 
  format?: string; 
  responsive?: boolean;
}) {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={ADSENSE_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
