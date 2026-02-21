import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur smartphone pour photos au Maroc – Comparatif 2025",
  description:
    "Découvrez les meilleurs smartphones photo au Maroc : iPhone 15, Samsung Galaxy S24, Google Pixel 8. Comparatif caméras, qualité d'image et prix Jumia.",
  keywords: [
    "meilleur smartphone photo maroc",
    "téléphone photo maroc",
    "iphone 15 maroc",
    "samsung galaxy s24 maroc",
    "pixel 8 maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-smartphone-photo-maroc",
  },
};

const products = [
  {
    name: "iPhone 15 Pro",
    price: 14999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=iphone+15+pro",
    badge: "Meilleure qualité vidéo",
    rating: 4.9,
    specs: {
      capteurPrincipal: "48 MP (f/1.78)",
      ultraGrandAngle: "12 MP (f/2.2)",
      telephoto: "12 MP (5x optique)",
      selfie: "12 MP TrueDepth",
      video: "4K 60fps, ProRes",
      stabilisation: "Capteur-shift OIS",
    },
    pros: [
      "Qualité vidéo professionnelle",
      "Mode portrait exceptionnel",
      "Traitement photo naturel",
      "ProRAW pour retouche avancée",
    ],
    cons: [
      "Prix très élevé",
      "Pas de zoom périscopique (sauf Pro Max)",
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 16499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+s24+ultra",
    badge: "Meilleur zoom",
    rating: 4.8,
    specs: {
      capteurPrincipal: "200 MP (f/1.7)",
      ultraGrandAngle: "12 MP (f/2.2)",
      telephoto: "50 MP (5x) + 10 MP (3x)",
      selfie: "12 MP (f/2.2)",
      video: "8K 30fps, 4K 60fps",
      stabilisation: "OIS + VDIS",
    },
    pros: [
      "Capteur 200 MP impressionnant",
      "Zoom 100x Space Zoom",
      "Mode nuit excellent",
      "IA photo avancée",
    ],
    cons: [
      "Traitement parfois artificiel",
      "Appareil volumineux",
    ],
  },
  {
    name: "Google Pixel 8 Pro",
    price: 11999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=google+pixel+8+pro",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.7,
    specs: {
      capteurPrincipal: "50 MP (f/1.68)",
      ultraGrandAngle: "48 MP (f/1.95)",
      telephoto: "48 MP (5x optique)",
      selfie: "10.5 MP (f/2.2)",
      video: "4K 60fps, 10-bit HDR",
      stabilisation: "OIS + EIS",
    },
    pros: [
      "Traitement IA Google exceptionnel",
      "Photos naturelles et détaillées",
      "Magic Eraser et Best Take",
      "Mode nuit leader du marché",
    ],
    cons: [
      "Disponibilité limitée au Maroc",
      "Prix importation élevé",
    ],
  },
];

const specLabels: Record<string, string> = {
  capteurPrincipal: "Capteur principal",
  ultraGrandAngle: "Ultra grand-angle",
  telephoto: "Téléobjectif",
  selfie: "Caméra selfie",
  video: "Vidéo",
  stabilisation: "Stabilisation",
};

const faqs = [
  {
    question: "Quel est le meilleur smartphone pour la photo au Maroc ?",
    answer:
      "En 2025, le Google Pixel 8 Pro offre le meilleur traitement photo grâce à l'IA Google. Pour la vidéo, l'iPhone 15 Pro est imbattable. Le Samsung Galaxy S24 Ultra excelle en zoom.",
  },
  {
    question: "iPhone ou Samsung pour la photographie ?",
    answer:
      "L'iPhone produit des photos plus naturelles et excelle en vidéo. Samsung offre plus de mégapixels et un zoom supérieur. Le choix dépend de votre style de photographie.",
  },
  {
    question: "Le Pixel 8 est-il disponible au Maroc ?",
    answer:
      "Le Pixel 8 n'est pas officiellement distribué au Maroc par Google. Vous pouvez le trouver chez des revendeurs importateurs ou sur des plateformes en ligne avec des prix majorés.",
  },
];

export default function MeilleurSmartphonePhotoPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur smartphone pour photos au Maroc – Comparatif 2025",
    description:
      "Découvrez les meilleurs smartphones photo au Maroc : iPhone 15, Samsung Galaxy S24, Google Pixel 8.",
    url: "/comparatifs/meilleur-smartphone-photo-maroc",
    datePublished: "2025-01-15T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-purple-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Smartphones Photo</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6">
                📸 Guide Photo 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur smartphone pour{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  photos
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Comparatif des meilleurs photophones disponibles au Maroc.
                iPhone, Samsung ou Pixel : trouvez l'appareil photo parfait.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Winner Highlight */}
          <section className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📸</span>
              <div>
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  Notre recommandation photo
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Google Pixel 8 Pro
                </h2>
                <p className="text-gray-600 mt-2">
                  Le roi de la photographie computationnelle. L'IA Google produit
                  les photos les plus naturelles et détaillées du marché, avec des
                  fonctions exclusives comme Magic Eraser et Best Take.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-purple-700 mb-3">
                    11 999 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Google Pixel 8 Pro" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 3 des meilleurs smartphones photo au Maroc
            </h2>

            <div className="grid gap-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl flex-shrink-0">
                      {index + 1}
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

                      <p className="text-2xl font-bold text-purple-600 mb-3">
                        {product.price.toLocaleString("fr-MA")} DH
                      </p>

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
              Tableau comparatif des caméras
            </h2>
            <ComparisonTable
              products={products}
              specLabels={specLabels}
              title="Comparatif smartphones photo"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comment choisir un smartphone pour la photo ?
            </h2>

            <div className="prose prose-purple max-w-none">
              <h3>Les mégapixels ne font pas tout</h3>
              <p>
                Un capteur 200 MP ne garantit pas de meilleures photos. La taille
                du capteur, l'ouverture et surtout le traitement logiciel sont
                plus importants. Le Pixel 8 avec ses 50 MP rivalise avec le S24
                Ultra et ses 200 MP.
              </p>

              <h3>L'importance du traitement IA</h3>
              <p>
                En 2025, la photographie computationnelle fait la différence.
                Google excelle avec ses algorithmes IA, Apple propose un
                traitement naturel, Samsung privilégie les couleurs vives.
              </p>

              <h3>Zoom optique vs numérique</h3>
              <p>
                Privilégiez un zoom optique (3x minimum) pour des photos
                détaillées de loin. Le zoom numérique dégrade la qualité. Le S24
                Ultra offre le meilleur zoom avec 5x optique et 100x hybride.
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
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              Pour la photo au Maroc, le <strong>Google Pixel 8 Pro</strong> offre
              le meilleur traitement d'image et les fonctions IA les plus avancées.
              Si vous préférez la vidéo, l'<strong>iPhone 15 Pro</strong> est
              imbattable. Pour le zoom et la polyvalence, le{" "}
              <strong>Samsung Galaxy S24 Ultra</strong> est le choix idéal.
            </p>
            <MultiStoreButtons 
              productName="Google Pixel 8 Pro" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
