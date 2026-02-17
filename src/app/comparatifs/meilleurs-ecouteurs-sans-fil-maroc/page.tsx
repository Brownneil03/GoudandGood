import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleurs écouteurs sans fil au Maroc – Guide 2025",
  description:
    "Découvrez les meilleurs écouteurs Bluetooth au Maroc : alternatives AirPods, JBL, Xiaomi Buds. Comparatif, test et prix Jumia.",
  keywords: [
    "ecouteurs sans fil maroc",
    "airpods alternative maroc",
    "jbl ecouteurs maroc",
    "xiaomi buds maroc",
    "meilleurs ecouteurs bluetooth",
  ],
  alternates: {
    canonical: "/comparatifs/meilleurs-ecouteurs-sans-fil-maroc",
  },
};

const products = [
  {
    name: "Samsung Galaxy Buds FE",
    price: 899,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+buds+fe",
    badge: "Meilleur choix",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    specs: {
      type: "Intra-auriculaires",
      anc: "ANC actif",
      autonomie: "6h (30h avec boîtier)",
      codec: "AAC, SBC, SSC",
      resistance: "IPX2",
      microphone: "3 micros + IA",
    },
    pros: [
      "ANC efficace à ce prix",
      "Son équilibré Samsung",
      "Intégration Galaxy parfaite",
      "Confort longue durée",
    ],
    cons: [
      "Pas de multipoint",
      "Résistance eau limitée",
    ],
  },
  {
    name: "JBL Tune 230NC TWS",
    price: 799,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=jbl+tune+230nc",
    badge: "Meilleur son",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    specs: {
      type: "Intra-auriculaires",
      anc: "ANC actif",
      autonomie: "8h (40h avec boîtier)",
      codec: "AAC, SBC",
      resistance: "IPX4",
      microphone: "4 micros",
    },
    pros: [
      "Son JBL signature (basses)",
      "Excellente autonomie",
      "ANC correct",
      "Résistant à la sueur",
    ],
    cons: [
      "Boîtier volumineux",
      "Pas de charge sans fil",
    ],
  },
  {
    name: "Xiaomi Redmi Buds 5 Pro",
    price: 599,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+buds+5+pro",
    badge: "Meilleur budget ANC",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    specs: {
      type: "Intra-auriculaires",
      anc: "ANC 52dB",
      autonomie: "6.5h (28h avec boîtier)",
      codec: "AAC, SBC, LDAC",
      resistance: "IP54",
      microphone: "3 micros",
    },
    pros: [
      "ANC 52dB impressionnant",
      "Support LDAC Hi-Res",
      "Prix imbattable",
      "IP54 complet",
    ],
    cons: [
      "Qualité micro moyenne",
      "App Xiaomi nécessaire",
    ],
  },
  {
    name: "Anker Soundcore Life P3",
    price: 699,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=anker+soundcore+life+p3",
    badge: "Polyvalent",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    specs: {
      type: "Intra-auriculaires",
      anc: "ANC multi-modes",
      autonomie: "7h (35h avec boîtier)",
      codec: "AAC, SBC",
      resistance: "IPX5",
      microphone: "6 micros",
    },
    pros: [
      "6 micros pour les appels",
      "App Soundcore complète",
      "Gaming mode faible latence",
      "Bonne isolation passive",
    ],
    cons: [
      "Basses parfois excessives",
      "Design plastique",
    ],
  },
  {
    name: "Xiaomi Redmi Buds 4 Lite",
    price: 249,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+buds+4+lite",
    badge: "Ultra budget",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    specs: {
      type: "Semi-intra",
      anc: "Non",
      autonomie: "5h (20h avec boîtier)",
      codec: "AAC, SBC",
      resistance: "IP54",
      microphone: "1 micro",
    },
    pros: [
      "Prix ultra bas",
      "Confort semi-intra",
      "Légers et discrets",
      "Connexion stable",
    ],
    cons: [
      "Pas d'ANC",
      "Son basique",
    ],
  },
];

const specLabels: Record<string, string> = {
  type: "Type",
  anc: "Réduction de bruit",
  autonomie: "Autonomie",
  codec: "Codecs audio",
  resistance: "Résistance",
  microphone: "Microphones",
};

const faqs = [
  {
    question: "Quels sont les meilleurs écouteurs sans fil au Maroc ?",
    answer:
      "Les Samsung Galaxy Buds FE offrent le meilleur équilibre qualité-prix avec ANC. Pour le son, les JBL Tune 230NC excellent. Pour un budget serré avec ANC, les Xiaomi Redmi Buds 5 Pro sont imbattables.",
  },
  {
    question: "AirPods ou alternatives moins chères ?",
    answer:
      "Les AirPods restent excellents pour les utilisateurs Apple, mais les Samsung Buds FE ou Xiaomi Buds offrent des performances similaires pour 2 à 3 fois moins cher.",
  },
  {
    question: "L'ANC vaut-il le prix supplémentaire ?",
    answer:
      "Oui si vous utilisez vos écouteurs dans des environnements bruyants (transports, bureau). Sinon, des écouteurs intra-auriculaires sans ANC offrent une bonne isolation passive.",
  },
];

export default function MeilleursEcouteursSansFilPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleurs écouteurs sans fil au Maroc – Guide 2025",
    description:
      "Découvrez les meilleurs écouteurs Bluetooth au Maroc avec comparatif et prix.",
    url: "/comparatifs/meilleurs-ecouteurs-sans-fil-maroc",
    datePublished: "2025-02-05T10:00:00+01:00",
    dateModified: "2025-02-17T10:00:00+01:00",
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-indigo-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-indigo-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs/accessoires" className="hover:text-indigo-400 transition-colors">
                Accessoires
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Écouteurs sans fil</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium mb-6">
                🎧 Guide Audio 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleurs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  écouteurs sans fil
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Comparatif des meilleurs écouteurs Bluetooth au Maroc.
                JBL, Samsung, Xiaomi : trouvez les écouteurs parfaits.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Picks */}
          <section className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🏆</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur global</h3>
              <p className="text-indigo-700 font-semibold">Galaxy Buds FE</p>
              <p className="text-sm text-gray-600">899 DH</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🎵</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur son</h3>
              <p className="text-purple-700 font-semibold">JBL Tune 230NC</p>
              <p className="text-sm text-gray-600">799 DH</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <span className="text-2xl">💰</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur budget</h3>
              <p className="text-green-700 font-semibold">Redmi Buds 5 Pro</p>
              <p className="text-sm text-gray-600">599 DH</p>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎧</span>
              <div>
                <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                  Notre recommandation
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Samsung Galaxy Buds FE
                </h2>
                <p className="text-gray-600 mt-2">
                  Le meilleur équilibre entre qualité sonore, ANC et prix. Parfaits
                  pour les utilisateurs Samsung mais excellents avec tous les
                  smartphones. 6h d'autonomie avec ANC, confort optimal.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-indigo-700 mb-3">
                    899 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Samsung Galaxy Buds FE" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 5 des écouteurs sans fil au Maroc
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-40 h-40 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-indigo-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        {product.badge && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-2xl font-bold text-indigo-600 mb-3">
                        {product.price.toLocaleString("fr-MA")} DH
                      </p>

                      {/* Key Specs */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.anc}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.autonomie}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.resistance}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-green-700 mb-2">
                            ✓ Points forts
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.pros.map((pro) => (
                              <li key={pro}>+ {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-700 mb-2">
                            ✗ Points faibles
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.cons.map((con) => (
                              <li key={con}>- {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Boutons multi-stores pour maximiser les conversions */}
                      <MultiStoreButtons 
                        productName={product.name} 
                        size="md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tableau comparatif
            </h2>
            <ComparisonTable
              products={products}
              specLabels={specLabels}
              title="Comparatif écouteurs sans fil"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guide d'achat : écouteurs sans fil
            </h2>

            <div className="prose prose-indigo max-w-none">
              <h3>Intra-auriculaires vs semi-intra</h3>
              <p>
                Les intra-auriculaires (avec embouts silicone) isolent mieux et
                sont nécessaires pour l'ANC. Les semi-intra (style AirPods) sont
                plus confortables mais isolent moins.
              </p>

              <h3>ANC (Réduction de bruit active)</h3>
              <p>
                L'ANC utilise des micros pour annuler le bruit ambiant. Utile
                dans les transports ou bureaux bruyants. Les Xiaomi Buds 5 Pro
                offrent un ANC de 52dB, impressionnant à ce prix.
              </p>

              <h3>Autonomie</h3>
              <p>
                Visez minimum 5h d'écoute avec le boîtier offrant 20h+
                supplémentaires. Les JBL Tune 230NC offrent jusqu'à 40h totales.
              </p>

              <h3>Codecs audio</h3>
              <p>
                AAC pour iPhone, SBC (universel), LDAC pour Hi-Res (Xiaomi). Le
                codec influence la qualité audio en Bluetooth.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white border border-gray-200 rounded-xl p-6 group"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-indigo-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              Les <strong>Samsung Galaxy Buds FE</strong> sont notre choix numéro
              un pour leur équilibre parfait. Pour les audiophiles, les{" "}
              <strong>JBL Tune 230NC</strong> offrent le meilleur son. Budget
              serré ? Les <strong>Xiaomi Redmi Buds 5 Pro</strong> avec leur ANC
              52dB sont imbattables à 599 DH.
            </p>
            <MultiStoreButtons 
              productName="Samsung Galaxy Buds FE" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
