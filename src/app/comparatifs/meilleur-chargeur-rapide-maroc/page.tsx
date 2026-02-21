import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur chargeur rapide au Maroc – Comparatif 2025",
  description:
    "Guide d'achat des meilleurs chargeurs rapides au Maroc. Chargeurs 30W, 65W, 100W : USB-C PD, GaN. Comparatif et prix Jumia.",
  keywords: [
    "chargeur rapide maroc",
    "chargeur usb c maroc",
    "chargeur 65w maroc",
    "chargeur gan maroc",
    "meilleur chargeur iphone",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-chargeur-rapide-maroc",
  },
};

const products = [
  {
    name: "Anker 735 (Nano II 65W)",
    image: "https://m.media-amazon.com/images/I/61dYrjHgPLL._AC_SL1500_.jpg",
    price: 449,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=anker+735+65w",
    badge: "Meilleur choix",
    rating: 4.8,
    specs: {
      puissance: "65W",
      ports: "2x USB-C + 1x USB-A",
      technologie: "GaN II",
      compatibilite: "iPhone, Android, Laptop",
      taille: "Compact (66x38x29mm)",
      poids: "120g",
    },
    pros: [
      "65W pour charger un laptop",
      "3 ports polyvalents",
      "GaN ultra-compact",
      "Qualité Anker premium",
    ],
    cons: [
      "Prix élevé",
      "Puissance partagée multi-appareils",
    ],
  },
  {
    name: "Xiaomi 67W USB-C",
    image: "https://m.media-amazon.com/images/I/51xR8a8C44L._AC_SL1200_.jpg",
    price: 249,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+chargeur+67w",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.6,
    specs: {
      puissance: "67W",
      ports: "1x USB-C",
      technologie: "GaN",
      compatibilite: "Xiaomi, iPhone, Android",
      taille: "Compact",
      poids: "96g",
    },
    pros: [
      "67W puissance élevée",
      "Prix imbattable",
      "Ultra compact et léger",
      "Compatible tous smartphones",
    ],
    cons: [
      "1 seul port",
      "Optimisé Xiaomi",
    ],
  },
  {
    name: "Baseus 100W GaN3",
    image: "https://m.media-amazon.com/images/I/61hbUj55S3L._AC_SL1500_.jpg",
    price: 399,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=baseus+chargeur+100w",
    badge: "Le plus puissant",
    rating: 4.5,
    specs: {
      puissance: "100W",
      ports: "2x USB-C + 1x USB-A",
      technologie: "GaN3",
      compatibilite: "Laptop, MacBook, Smartphone",
      taille: "Compact pour 100W",
      poids: "180g",
    },
    pros: [
      "100W charge tout",
      "MacBook Pro compatible",
      "3 ports simultanés",
      "GaN3 dernière génération",
    ],
    cons: [
      "Plus gros que 65W",
      "Chauffe sous charge max",
    ],
  },
  {
    name: "Anker 511 (Nano 30W)",
    image: "https://m.media-amazon.com/images/I/51Uo7nb0GYL._AC_SL1500_.jpg",
    price: 199,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=anker+511+30w",
    badge: "Compact iPhone",
    rating: 4.7,
    specs: {
      puissance: "30W",
      ports: "1x USB-C",
      technologie: "GaN",
      compatibilite: "iPhone 15, Android",
      taille: "Ultra-compact",
      poids: "40g",
    },
    pros: [
      "Minuscule (taille AirPods)",
      "Parfait pour iPhone",
      "30W rapide",
      "Prix accessible",
    ],
    cons: [
      "1 seul port",
      "Pas assez pour laptop",
    ],
  },
  {
    name: "UGREEN 65W 2 Ports",
    image: "https://m.media-amazon.com/images/I/51KL2Mj7n8L._AC_SL1500_.jpg",
    price: 329,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=ugreen+chargeur+65w",
    badge: "Bon compromis",
    rating: 4.4,
    specs: {
      puissance: "65W",
      ports: "2x USB-C",
      technologie: "GaN",
      compatibilite: "Laptop, Smartphone, Tablet",
      taille: "Compact",
      poids: "130g",
    },
    pros: [
      "2 USB-C pour multi-charge",
      "Prix raisonnable",
      "Compatible laptop",
      "Design sobre",
    ],
    cons: [
      "Pas de USB-A",
      "Marque moins connue",
    ],
  },
];

const specLabels: Record<string, string> = {
  puissance: "Puissance max",
  ports: "Ports",
  technologie: "Technologie",
  compatibilite: "Compatibilité",
  taille: "Taille",
  poids: "Poids",
};

const faqs = [
  {
    question: "Quelle puissance de chargeur choisir ?",
    answer:
      "20-30W pour smartphones uniquement. 45-65W pour smartphone + laptop léger. 100W+ pour MacBook Pro ou laptops gaming. L'iPhone 15 charge à max 27W, les Xiaomi jusqu'à 120W.",
  },
  {
    question: "Qu'est-ce que la technologie GaN ?",
    answer:
      "GaN (Gallium Nitride) remplace le silicium pour des chargeurs plus compacts et efficaces. Un chargeur GaN 65W est 2x plus petit qu'un chargeur silicium équivalent.",
  },
  {
    question: "Un chargeur rapide abîme-t-il la batterie ?",
    answer:
      "Non, les smartphones modernes gèrent la charge intelligemment. Ils réduisent automatiquement la puissance à 80% pour préserver la batterie. La charge rapide est sûre.",
  },
];

export default function MeilleurChargeurRapidePage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur chargeur rapide au Maroc – Comparatif 2025",
    description:
      "Guide d'achat des meilleurs chargeurs rapides au Maroc avec comparatif et prix.",
    url: "/comparatifs/meilleur-chargeur-rapide-maroc",
    datePublished: "2025-02-10T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-yellow-900 via-slate-900 to-orange-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-yellow-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs/accessoires" className="hover:text-yellow-400 transition-colors">
                Accessoires
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Chargeur rapide</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-6">
                ⚡ Guide Charge 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  chargeur rapide
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Comparatif des meilleurs chargeurs USB-C rapides. 30W, 65W, 100W :
                trouvez le chargeur parfait pour tous vos appareils.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Power Guide */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-yellow-900 mb-4">
              ⚡ Quelle puissance pour quel usage ?
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">20-30W</p>
                <p className="text-gray-600">Smartphone</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">45W</p>
                <p className="text-gray-600">Smartphone + Tablette</p>
              </div>
              <div className="bg-white rounded-lg p-4 ring-2 ring-yellow-400">
                <p className="font-semibold text-gray-900">65W ⭐</p>
                <p className="text-gray-600">Laptop léger + Smartphone</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">100W+</p>
                <p className="text-gray-600">MacBook Pro / Gaming</p>
              </div>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                  Notre recommandation
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Anker 735 (Nano II 65W)
                </h2>
                <p className="text-gray-600 mt-2">
                  Le chargeur parfait pour tout faire. 65W pour laptop, 3 ports
                  pour charger plusieurs appareils, technologie GaN II pour un
                  format ultra-compact. La référence Anker.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-amber-700 mb-3">
                    449 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Anker 735 Nano II 65W" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 5 des chargeurs rapides au Maroc
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                      <div className="absolute -top-2 -left-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

                      <p className="text-2xl font-bold text-amber-600 mb-3">
                        {product.price.toLocaleString("fr-MA")} DH
                      </p>

                      {/* Key Specs */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.puissance}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.ports}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.technologie}
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

                      {/* Multi-stores pour maximiser les conversions */}
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
              title="Comparatif chargeurs rapides"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guide d'achat : chargeur rapide
            </h2>

            <div className="prose prose-amber max-w-none">
              <h3>USB-C PD : le standard universel</h3>
              <p>
                Power Delivery (PD) est le standard USB-C pour la charge rapide.
                Il permet de négocier la bonne puissance avec chaque appareil.
                Un chargeur 65W PD chargera votre iPhone à 27W max, votre laptop
                à 65W.
              </p>

              <h3>GaN vs Silicium</h3>
              <p>
                Les chargeurs GaN (Gallium Nitride) sont 40-50% plus compacts à
                puissance égale. Ils chauffent moins et sont plus efficaces.
                Tous les chargeurs de notre sélection utilisent le GaN.
              </p>

              <h3>Nombre de ports</h3>
              <p>
                Un seul port suffit pour un usage simple. 2-3 ports permettent
                de charger smartphone, tablette et laptop avec un seul chargeur.
                Attention : la puissance est partagée entre les ports.
              </p>

              <h3>Compatibilité smartphone</h3>
              <p>
                iPhone 15+ : USB-C jusqu'à 27W. Samsung : PD jusqu'à 45W.
                Xiaomi : jusqu'à 120W avec chargeur propriétaire. OnePlus :
                jusqu'à 100W avec SuperVOOC.
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
                    <span className="text-amber-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-amber-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              L'<strong>Anker 735 (65W)</strong> est notre choix numéro un pour
              sa polyvalence : 3 ports, charge laptop, format compact. Pour
              smartphone uniquement, le <strong>Xiaomi 67W</strong> offre un
              excellent rapport qualité-prix. Besoin de 100W ? Le{" "}
              <strong>Baseus 100W GaN3</strong> charge même un MacBook Pro.
            </p>
            <MultiStoreButtons 
              productName="Anker 735 65W" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
