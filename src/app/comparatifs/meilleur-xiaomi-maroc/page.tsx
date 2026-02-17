import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur smartphone Xiaomi à acheter au Maroc (2025)",
  description:
    "Guide d'achat Xiaomi au Maroc : Redmi Note 13, POCO X6, Xiaomi 14. Découvrez le meilleur smartphone Xiaomi selon votre budget avec prix Jumia.",
  keywords: [
    "meilleur xiaomi maroc",
    "xiaomi redmi note 13 maroc",
    "poco x6 maroc",
    "xiaomi 14 maroc",
    "smartphone xiaomi pas cher",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-xiaomi-maroc",
  },
};

const products = [
  {
    name: "Redmi Note 13 Pro+",
    price: 3499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=redmi+note+13+pro+plus",
    badge: "Meilleur choix",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    gamme: "Milieu de gamme",
    specs: {
      ecran: '6.67" AMOLED 120Hz',
      processeur: "Dimensity 7200 Ultra",
      ram: "12 Go",
      stockage: "256 Go",
      batterie: "5000 mAh",
      charge: "120W HyperCharge",
      camera: "200 MP OIS",
    },
    pros: [
      "Charge complète en 19 minutes",
      "Capteur 200 MP impressionnant",
      "Écran AMOLED 120Hz lumineux",
      "Excellent rapport qualité-prix",
    ],
    cons: [
      "Pas de 5G sur tous les modèles",
      "MIUI avec quelques pubs",
    ],
  },
  {
    name: "POCO X6 Pro",
    price: 3799,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=poco+x6+pro",
    badge: "Meilleur gaming",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    gamme: "Milieu de gamme",
    specs: {
      ecran: '6.67" AMOLED 120Hz',
      processeur: "Dimensity 8300 Ultra",
      ram: "12 Go",
      stockage: "512 Go",
      batterie: "5000 mAh",
      charge: "67W Turbo",
      camera: "64 MP OIS",
    },
    pros: [
      "Processeur très puissant",
      "512 Go de stockage",
      "Parfait pour les jeux",
      "Refroidissement LiquidCool",
    ],
    cons: [
      "Pas de charge sans fil",
      "Caméra correcte sans plus",
    ],
  },
  {
    name: "Redmi Note 13",
    price: 1899,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=redmi+note+13",
    badge: "Meilleur budget",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    gamme: "Entrée de gamme",
    specs: {
      ecran: '6.67" AMOLED 120Hz',
      processeur: "Snapdragon 685",
      ram: "8 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      charge: "33W Fast Charge",
      camera: "108 MP",
    },
    pros: [
      "Prix imbattable",
      "Écran AMOLED rare à ce prix",
      "8 Go de RAM fluide",
      "Autonomie 2 jours",
    ],
    cons: [
      "Processeur entrée de gamme",
      "Pas de 5G",
    ],
  },
  {
    name: "Xiaomi 14",
    price: 9999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+14",
    badge: "Premium",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    gamme: "Haut de gamme",
    specs: {
      ecran: '6.36" LTPO AMOLED 120Hz',
      processeur: "Snapdragon 8 Gen 3",
      ram: "12 Go",
      stockage: "256 Go",
      batterie: "4610 mAh",
      charge: "90W + sans fil 50W",
      camera: "Leica 50 MP",
    },
    pros: [
      "Caméra Leica exceptionnelle",
      "Processeur le plus puissant",
      "Design compact premium",
      "Charge sans fil rapide",
    ],
    cons: [
      "Prix élevé",
      "Batterie plus petite",
    ],
  },
];

const specLabels: Record<string, string> = {
  ecran: "Écran",
  processeur: "Processeur",
  ram: "RAM",
  stockage: "Stockage",
  batterie: "Batterie",
  charge: "Charge rapide",
  camera: "Caméra principale",
};

const faqs = [
  {
    question: "Quel est le meilleur smartphone Xiaomi au Maroc ?",
    answer:
      "Le Redmi Note 13 Pro+ offre le meilleur rapport qualité-prix avec sa charge 120W et son capteur 200 MP. Pour le gaming, le POCO X6 Pro est idéal. Pour un budget serré, le Redmi Note 13 standard reste imbattable.",
  },
  {
    question: "Quelle différence entre Xiaomi, Redmi et POCO ?",
    answer:
      "Xiaomi est la gamme premium, Redmi le rapport qualité-prix, et POCO les performances gaming. Les trois marques appartiennent au même groupe et partagent souvent les mêmes composants.",
  },
  {
    question: "Les Xiaomi vendus au Maroc sont-ils originaux ?",
    answer:
      "Sur Jumia et chez les revendeurs officiels, oui. Méfiez-vous des prix trop bas sur le marché informel. Vérifiez le numéro IMEI sur le site Xiaomi pour confirmer l'authenticité.",
  },
];

export default function MeilleurXiaomiPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur smartphone Xiaomi à acheter au Maroc (2025)",
    description:
      "Guide complet des meilleurs smartphones Xiaomi disponibles au Maroc avec prix et comparatif.",
    url: "/comparatifs/meilleur-xiaomi-maroc",
    datePublished: "2025-01-20T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-orange-900 via-slate-900 to-orange-800 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-orange-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-orange-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Meilleur Xiaomi</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
                🔥 Guide Xiaomi 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur smartphone{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Xiaomi
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Redmi, POCO ou Xiaomi premium ? Trouvez le meilleur smartphone
                Xiaomi selon votre budget au Maroc.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Picks */}
          <section className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <span className="text-2xl">💰</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur budget</h3>
              <p className="text-green-700 font-semibold">Redmi Note 13</p>
              <p className="text-sm text-gray-600">1 899 DH</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <span className="text-2xl">⭐</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur global</h3>
              <p className="text-orange-700 font-semibold">Redmi Note 13 Pro+</p>
              <p className="text-sm text-gray-600">3 499 DH</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🎮</span>
              <h3 className="font-bold text-gray-900 mt-2">Meilleur gaming</h3>
              <p className="text-purple-700 font-semibold">POCO X6 Pro</p>
              <p className="text-sm text-gray-600">3 799 DH</p>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Notre recommandation
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Redmi Note 13 Pro+
                </h2>
                <p className="text-gray-600 mt-2">
                  Le champion du rapport qualité-prix. Charge 120W (19 min pour
                  100%), capteur 200 MP, écran AMOLED 120Hz et 12 Go de RAM pour
                  moins de 3500 DH.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-orange-700 mb-3">
                    3 499 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Redmi Note 13 Pro Plus" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tous les meilleurs Xiaomi au Maroc
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-orange-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-slate-800 text-white text-xs px-2 py-1 rounded">
                        {product.gamme}
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

                      <p className="text-2xl font-bold text-orange-600 mb-3">
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
              Tableau comparatif Xiaomi
            </h2>
            <ComparisonTable
              products={products}
              specLabels={specLabels}
              title="Comparatif smartphones Xiaomi"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comment choisir son Xiaomi ?
            </h2>

            <div className="prose prose-orange max-w-none">
              <h3>Redmi = Rapport qualité/prix</h3>
              <p>
                La gamme Redmi offre les meilleures specs au meilleur prix. Le
                Redmi Note 13 Pro+ est le choix idéal pour la plupart des
                utilisateurs avec sa charge 120W unique à ce prix.
              </p>

              <h3>POCO = Performance gaming</h3>
              <p>
                POCO privilégie les processeurs puissants et le refroidissement.
                Le POCO X6 Pro avec son Dimensity 8300 est parfait pour les
                gamers exigeants sans casser la tirelire.
              </p>

              <h3>Xiaomi = Premium</h3>
              <p>
                Les Xiaomi 13 et 14 sont les flagships avec caméra Leica, design
                premium et les derniers processeurs Snapdragon. Pour ceux qui
                veulent le meilleur.
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
                    <span className="text-orange-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-orange-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              Le <strong>Redmi Note 13 Pro+</strong> est notre recommandation
              principale pour 2025. Sa charge 120W, son capteur 200 MP et son
              écran AMOLED en font le meilleur rapport qualité-prix du marché.
              Pour un budget plus serré, le <strong>Redmi Note 13</strong> reste
              imbattable sous 2000 DH.
            </p>
            <MultiStoreButtons 
              productName="Xiaomi Redmi Note 13 Pro Plus" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
