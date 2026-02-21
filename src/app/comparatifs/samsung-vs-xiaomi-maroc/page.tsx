import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Samsung vs Xiaomi : Quelle marque choisir au Maroc ? (2025)",
  description:
    "Comparatif Samsung vs Xiaomi au Maroc. Découvrez quelle marque offre le meilleur rapport qualité-prix, SAV et fiabilité pour votre budget.",
  keywords: [
    "samsung vs xiaomi maroc",
    "samsung ou xiaomi",
    "meilleur marque smartphone maroc",
    "comparatif samsung xiaomi",
  ],
  alternates: {
    canonical: "/comparatifs/samsung-vs-xiaomi-maroc",
  },
};

const samsungPros = [
  "Mises à jour garanties 4-5 ans",
  "SAV accessible au Maroc (centres agréés)",
  "Écrans AMOLED de référence",
  "One UI fluide et polished",
  "Meilleure valeur de revente",
];

const samsungCons = [
  "Prix plus élevés à specs équivalentes",
  "Bloatware sur certains modèles",
  "Charge rapide moins performante",
];

const xiaomiPros = [
  "Excellent rapport qualité-prix",
  "Charge rapide supérieure (67W-120W)",
  "Plus de RAM et stockage au même prix",
  "MIUI riche en fonctionnalités",
  "Large gamme de prix",
];

const xiaomiCons = [
  "SAV moins accessible au Maroc",
  "Mises à jour sur 2-3 ans seulement",
  "Publicités dans MIUI (désactivables)",
  "Qualité de construction variable",
];

const comparisons = [
  {
    category: "Budget (moins de 2000 DH)",
    samsung: {
      model: "Samsung Galaxy A15",
      price: 1799,
      specs: "4 Go RAM, 128 Go, 50 MP",
    },
    xiaomi: {
      model: "Xiaomi Redmi Note 13",
      price: 1899,
      specs: "8 Go RAM, 128 Go, 108 MP",
    },
    winner: "xiaomi",
    verdict: "Xiaomi offre le double de RAM et une meilleure caméra pour un prix similaire.",
  },
  {
    category: "Milieu de gamme (3000-5000 DH)",
    samsung: {
      model: "Samsung Galaxy A54",
      price: 4499,
      specs: "8 Go RAM, 128 Go, 50 MP OIS",
    },
    xiaomi: {
      model: "Xiaomi 13 Lite",
      price: 3999,
      specs: "8 Go RAM, 256 Go, 50 MP",
    },
    winner: "xiaomi",
    verdict: "Xiaomi propose plus de stockage et un prix inférieur, mais Samsung garantit plus de mises à jour.",
  },
  {
    category: "Haut de gamme (10000+ DH)",
    samsung: {
      model: "Samsung Galaxy S24 Ultra",
      price: 16499,
      specs: "12 Go RAM, 256 Go, 200 MP",
    },
    xiaomi: {
      model: "Xiaomi 14 Ultra",
      price: 12999,
      specs: "16 Go RAM, 512 Go, Leica 50 MP",
    },
    winner: "draw",
    verdict: "Samsung excelle en polyvalence, Xiaomi en photographie Leica. Les deux sont excellents.",
  },
];

const faqs = [
  {
    question: "Samsung ou Xiaomi, quelle marque choisir au Maroc ?",
    answer:
      "Pour un budget serré, Xiaomi offre un meilleur rapport qualité-prix. Pour la durabilité, le SAV et les mises à jour, Samsung est préférable. Tout dépend de vos priorités.",
  },
  {
    question: "Xiaomi est-il fiable au Maroc ?",
    answer:
      "Oui, Xiaomi est fiable. Cependant, le SAV est moins accessible qu'avec Samsung. En cas de problème, vous devrez souvent passer par des revendeurs tiers.",
  },
  {
    question: "Les smartphones Xiaomi ont-ils des publicités ?",
    answer:
      "MIUI affiche parfois des publicités dans certaines apps système, mais elles sont facilement désactivables dans les paramètres. Les modèles européens en ont moins.",
  },
];

export default function SamsungVsXiaomiPage() {
  const articleSchema = generateArticleSchema({
    title: "Samsung vs Xiaomi : Quelle marque choisir au Maroc ?",
    description:
      "Comparatif complet Samsung vs Xiaomi pour vous aider à choisir la meilleure marque au Maroc.",
    url: "/comparatifs/samsung-vs-xiaomi-maroc",
    datePublished: "2025-01-10T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-orange-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-blue-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Samsung vs Xiaomi</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                ⚔️ Duel de marques
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-blue-400">Samsung</span> vs{" "}
                <span className="text-orange-400">Xiaomi</span>
              </h1>

              <p className="text-xl text-slate-300">
                Quelle marque choisir au Maroc ? Comparatif complet des deux géants
                du smartphone pour tous les budgets.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Samsung et Xiaomi dominent le marché des smartphones au Maroc.
              Samsung, le leader coréen, mise sur la qualité et le SAV. Xiaomi,
              le challenger chinois, propose des specs impressionnantes à prix
              cassé. Lequel choisir selon votre budget et vos besoins ?
            </p>
          </section>

          {/* Pros/Cons Cards */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Samsung Card */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-xl font-bold text-blue-700">Samsung</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-green-700 mb-2">✓ Avantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {samsungPros.map((pro) => (
                    <li key={pro}>+ {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-red-700 mb-2">✗ Inconvénients</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {samsungCons.map((con) => (
                    <li key={con}>- {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Xiaomi Card */}
            <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-xl font-bold text-orange-700">Xiaomi</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-green-700 mb-2">✓ Avantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {xiaomiPros.map((pro) => (
                    <li key={pro}>+ {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-red-700 mb-2">✗ Inconvénients</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {xiaomiCons.map((con) => (
                    <li key={con}>- {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Head to Head Comparisons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comparatifs par gamme de prix
            </h2>

            <div className="space-y-6">
              {comparisons.map((comp) => (
                <div
                  key={comp.category}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="bg-slate-100 px-6 py-3 border-b">
                    <h3 className="font-bold text-gray-900">{comp.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Samsung */}
                    <div className={`p-6 ${comp.winner === "samsung" ? "bg-blue-50" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-lg">S</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{comp.samsung.model}</p>
                          <p className="text-blue-600 font-bold">
                            {comp.samsung.price.toLocaleString("fr-MA")} DH
                          </p>
                          <p className="text-sm text-gray-500">{comp.samsung.specs}</p>
                        </div>
                      </div>
                      {comp.winner === "samsung" && (
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🏆 Gagnant
                        </span>
                      )}
                      {/* Multi-stores pour maximiser les conversions */}
                      <MultiStoreButtons 
                        productName={comp.samsung.model} 
                        size="md"
                      />
                    </div>

                    {/* Xiaomi */}
                    <div className={`p-6 ${comp.winner === "xiaomi" ? "bg-orange-50" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 font-bold text-lg">X</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{comp.xiaomi.model}</p>
                          <p className="text-orange-600 font-bold">
                            {comp.xiaomi.price.toLocaleString("fr-MA")} DH
                          </p>
                          <p className="text-sm text-gray-500">{comp.xiaomi.specs}</p>
                        </div>
                      </div>
                      {comp.winner === "xiaomi" && (
                        <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🏆 Gagnant
                        </span>
                      )}
                      {comp.winner === "draw" && (
                        <span className="inline-block bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🤝 Ex aequo
                        </span>
                      )}
                      {/* Multi-stores pour maximiser les conversions */}
                      <MultiStoreButtons 
                        productName={comp.xiaomi.model} 
                        size="md"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 px-6 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Verdict :</strong> {comp.verdict}
                    </p>
                  </div>
                </div>
              ))}
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
          <section className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict final
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Choisissez Samsung si :</strong> vous voulez des mises à
                jour longues, un SAV accessible au Maroc, et une bonne valeur de
                revente. Idéal si vous gardez votre téléphone 3-4 ans.
              </p>
              <p>
                <strong>Choisissez Xiaomi si :</strong> vous cherchez le meilleur
                rapport qualité-prix, la charge ultra-rapide, et que le SAV local
                est moins important pour vous.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">📱 Samsung Galaxy A35 :</p>
                <MultiStoreButtons 
                  productName="Samsung Galaxy A35" 
                  size="md"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">📱 Xiaomi Redmi Note 13 Pro :</p>
                <MultiStoreButtons 
                  productName="Xiaomi Redmi Note 13 Pro" 
                  size="md"
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
