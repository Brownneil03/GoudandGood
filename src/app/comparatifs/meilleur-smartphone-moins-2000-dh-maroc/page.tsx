import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur smartphone moins de 2000 DH au Maroc (2025)",
  description:
    "Découvrez notre sélection des 5 meilleurs smartphones à moins de 2000 DH disponibles au Maroc. Comparatif détaillé, prix Jumia, avis honnêtes.",
  keywords: [
    "meilleur smartphone 2000 dh",
    "smartphone pas cher maroc",
    "meilleur téléphone 2000 dh maroc",
    "smartphone moins de 2000 dh",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-smartphone-moins-2000-dh-maroc",
  },
};

// Données des produits comparés
const products = [
  {
    name: "Xiaomi Redmi Note 13",
    price: 1899,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+note+13",
    badge: "Meilleur choix",
    rating: 4.5,
    specs: {
      ecran: '6.67" AMOLED 120Hz',
      processeur: "Snapdragon 685",
      ram: "8 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "108 MP",
    },
    pros: ["Excellent écran AMOLED", "Autonomie 2 jours", "Charge rapide 33W"],
    cons: ["Pas de 5G", "Plastique au dos"],
  },
  {
    name: "Samsung Galaxy A15",
    price: 1799,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+a15",
    rating: 4.2,
    specs: {
      ecran: '6.5" Super AMOLED 90Hz',
      processeur: "Helio G99",
      ram: "4 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "50 MP",
    },
    pros: ["Marque fiable", "One UI fluide", "Mises à jour 4 ans"],
    cons: ["Seulement 4 Go RAM", "Charge lente 15W"],
  },
  {
    name: "Realme C55",
    price: 1699,
    affiliateUrl: "https://www.jumia.ma/telephones-smartphones/realme/",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.3,
    specs: {
      ecran: '6.72" IPS 90Hz',
      processeur: "Helio G88",
      ram: "6 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "64 MP",
    },
    pros: ["Prix imbattable", "6 Go RAM", "Design premium"],
    cons: ["Écran LCD (pas AMOLED)", "Marque moins connue"],
  },
];

const specLabels: Record<string, string> = {
  ecran: "Écran",
  processeur: "Processeur",
  ram: "RAM",
  stockage: "Stockage",
  batterie: "Batterie",
  camera: "Caméra principale",
};

const faqs = [
  {
    question: "Quel est le meilleur smartphone à moins de 2000 DH au Maroc ?",
    answer:
      "En 2026, le Xiaomi Redmi Note 13 offre le meilleur rapport qualité-prix avec son écran AMOLED 120Hz, 8 Go de RAM et une excellente autonomie. Il est disponible à 1899 DH sur Jumia Maroc.",
  },
  {
    question: "Samsung ou Xiaomi, lequel choisir à ce budget ?",
    answer:
      "Pour moins de 2000 DH, Xiaomi offre généralement de meilleures specs (plus de RAM, meilleur écran). Cependant, Samsung garantit 4 ans de mises à jour et un SAV plus accessible au Maroc.",
  },
  {
    question: "Ces smartphones sont-ils compatibles avec les réseaux marocains ?",
    answer:
      "Oui, tous les smartphones de notre sélection sont compatibles 4G avec les opérateurs marocains (Maroc Telecom, Orange, inwi). La 5G n'est pas encore déployée au Maroc.",
  },
];

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur smartphone moins de 2000 DH au Maroc (2026)",
    description:
      "Découvrez notre sélection des 5 meilleurs smartphones à moins de 2000 DH disponibles au Maroc.",
    url: "/comparatifs/meilleur-smartphone-moins-2000-dh-maroc",
    datePublished: "2026-02-15T10:00:00+01:00",
    dateModified: "2026-02-17T10:00:00+01:00",
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* Schema.org JSON-LD */}
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-emerald-600">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/comparatifs/smartphones" className="hover:text-emerald-600">
            Smartphones
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Moins de 2000 DH</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              Comparatif
            </span>
            <time dateTime="2026-02-15">Mis à jour le 15 février 2026</time>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meilleur smartphone moins de 2000 DH au Maroc (2026)
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Vous cherchez un bon smartphone sans vous ruiner ? Avec un budget de
            2000 DH, vous pouvez trouver d'excellents téléphones au Maroc.
            Découvrez notre sélection des meilleurs modèles disponibles sur
            Jumia avec leurs prix actuels.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-4">
            📋 Dans cet article
          </h2>
          <ul className="space-y-2 text-emerald-600">
            <li>
              <a href="#top3" className="hover:underline">
                1. Notre top 3 des smartphones à moins de 2000 DH
              </a>
            </li>
            <li>
              <a href="#comparatif" className="hover:underline">
                2. Tableau comparatif détaillé
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:underline">
                3. Comment choisir ?
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                4. Questions fréquentes
              </a>
            </li>
          </ul>
        </nav>

        {/* Winner Highlight */}
        <section className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🏆</span>
            <div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                Notre recommandation
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Xiaomi Redmi Note 13
              </h2>
              <p className="text-gray-600 mt-2">
                Le meilleur smartphone à moins de 2000 DH au Maroc en 2026.
                Écran AMOLED 120Hz, 8 Go de RAM, caméra 108 MP et batterie 5000
                mAh avec charge rapide 33W.
              </p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-700 mb-3">
                  1 899 DH
                </p>
                <MultiStoreButtons 
                  productName="Xiaomi Redmi Note 13" 
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Section */}
        <section id="top3" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Notre top 3 des smartphones à moins de 2000 DH
          </h2>

          <div className="space-y-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl flex-shrink-0">
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
                    <p className="text-2xl font-bold text-emerald-600 mb-3">
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
        <section id="comparatif" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tableau comparatif détaillé
          </h2>
          <ComparisonTable
            products={products}
            specLabels={specLabels}
            title="Comparatif smartphones moins de 2000 DH"
          />
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comment choisir son smartphone à moins de 2000 DH ?
          </h2>

          <div className="prose prose-emerald max-w-none">
            <h3>L'écran : AMOLED vs LCD</h3>
            <p>
              À ce budget, vous pouvez trouver des écrans AMOLED (meilleurs
              noirs, couleurs vibrantes) ou LCD (moins cher, moins qualitatif).
              Le Xiaomi Redmi Note 13 offre un excellent écran AMOLED 120Hz,
              rare à ce prix.
            </p>

            <h3>La RAM : minimum 6 Go recommandé</h3>
            <p>
              Pour une utilisation fluide en 2026, privilégiez au minimum 6 Go
              de RAM. Le Samsung Galaxy A15 avec ses 4 Go peut montrer des
              lenteurs en multitâche.
            </p>

            <h3>La batterie et la charge</h3>
            <p>
              Tous les modèles de notre sélection ont 5000 mAh, soit 1 à 2 jours
              d'autonomie. La différence se fait sur la charge : 33W pour
              Xiaomi (rapide) contre 15W pour Samsung (lent).
            </p>

            <h3>Les mises à jour</h3>
            <p>
              Samsung garantit 4 ans de mises à jour de sécurité, un avantage
              non négligeable. Xiaomi offre généralement 2-3 ans.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
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
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">
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
            Pour moins de 2000 DH au Maroc, le{" "}
            <strong>Xiaomi Redmi Note 13</strong> est notre recommandation
            principale grâce à son écran AMOLED, ses 8 Go de RAM et sa charge
            rapide. Si vous préférez la fiabilité Samsung et ses mises à jour
            garanties, le Galaxy A15 reste un bon choix malgré ses 4 Go de RAM.
          </p>
          <MultiStoreButtons 
            productName="Xiaomi Redmi Note 13" 
            size="lg"
          />
        </section>
      </article>
    </>
  );
}
