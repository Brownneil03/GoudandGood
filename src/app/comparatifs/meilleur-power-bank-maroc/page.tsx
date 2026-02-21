import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur power bank au Maroc – Comparatif 2025",
  description:
    "Guide d'achat des meilleures batteries externes au Maroc. Anker, Xiaomi, Baseus : comparatif capacité, charge rapide et prix Jumia.",
  keywords: [
    "power bank maroc",
    "batterie externe maroc",
    "meilleur power bank",
    "anker maroc",
    "xiaomi power bank maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-power-bank-maroc",
  },
};

const products = [
  {
    name: "Anker PowerCore 20000",
    price: 399,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=anker+powercore+20000",
    badge: "Meilleur choix",
    rating: 4.7,
    specs: {
      capacite: "20 000 mAh",
      puissanceMax: "22.5W",
      entree: "USB-C 18W",
      ports: "2x USB-A + 1x USB-C",
      poids: "340g",
      techno: "PowerIQ 2.0",
    },
    pros: [
      "Marque fiable et garantie",
      "Charge rapide 22.5W",
      "Grande capacité",
      "Construction solide",
    ],
    cons: [
      "Prix plus élevé",
      "Un peu lourd",
    ],
  },
  {
    name: "Xiaomi Mi Power Bank 3",
    price: 299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+power+bank+20000",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.6,
    specs: {
      capacite: "20 000 mAh",
      puissanceMax: "22.5W",
      entree: "USB-C 18W / Micro-USB",
      ports: "2x USB-A + 1x USB-C",
      poids: "420g",
      techno: "Quick Charge 3.0",
    },
    pros: [
      "Excellent prix",
      "Charge bidirectionnelle USB-C",
      "Compatible QC 3.0",
      "Design aluminium premium",
    ],
    cons: [
      "Plus lourd que la concurrence",
      "Charge entrée 18W max",
    ],
  },
  {
    name: "Baseus 30000mAh 65W",
    price: 549,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=baseus+power+bank+30000",
    badge: "Charge laptop",
    rating: 4.5,
    specs: {
      capacite: "30 000 mAh",
      puissanceMax: "65W PD",
      entree: "USB-C 65W",
      ports: "2x USB-A + 2x USB-C",
      poids: "580g",
      techno: "PD 3.0 + QC 4.0",
    },
    pros: [
      "Peut charger un laptop",
      "65W ultra-rapide",
      "Énorme capacité",
      "4 ports simultanés",
    ],
    cons: [
      "Volumineux et lourd",
      "Prix élevé",
    ],
  },
  {
    name: "Xiaomi Redmi Power Bank 10000",
    price: 149,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+power+bank+10000",
    badge: "Budget compact",
    rating: 4.4,
    specs: {
      capacite: "10 000 mAh",
      puissanceMax: "10W",
      entree: "Micro-USB",
      ports: "2x USB-A",
      poids: "230g",
      techno: "Standard",
    },
    pros: [
      "Prix imbattable",
      "Compact et léger",
      "2 ports USB-A",
      "Idéal voyage",
    ],
    cons: [
      "Charge lente (10W)",
      "Entrée Micro-USB (pas USB-C)",
    ],
  },
  {
    name: "Anker 622 MagGo",
    price: 449,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=anker+622+magsafe",
    badge: "iPhone MagSafe",
    rating: 4.3,
    specs: {
      capacite: "5 000 mAh",
      puissanceMax: "7.5W sans fil",
      entree: "USB-C",
      ports: "Sans fil MagSafe",
      poids: "140g",
      techno: "MagSafe",
    },
    pros: [
      "Se clipse sur iPhone",
      "Ultra compact",
      "Béquille intégrée",
      "Charge sans fil",
    ],
    cons: [
      "Capacité limitée",
      "iPhone uniquement",
    ],
  },
];

const specLabels: Record<string, string> = {
  capacite: "Capacité",
  puissanceMax: "Puissance max",
  entree: "Entrée charge",
  ports: "Ports sortie",
  poids: "Poids",
  techno: "Technologie",
};

const faqs = [
  {
    question: "Quelle capacité de power bank choisir ?",
    answer:
      "Pour un smartphone : 10 000 mAh (2-3 charges). Pour une journée intensive : 20 000 mAh (5-6 charges). Pour charger un laptop : 30 000 mAh avec 65W PD.",
  },
  {
    question: "Anker ou Xiaomi, quelle marque choisir ?",
    answer:
      "Anker offre une meilleure garantie et fiabilité. Xiaomi propose un meilleur rapport qualité-prix. Les deux sont excellentes, mais Anker est légèrement supérieur en qualité.",
  },
  {
    question: "Peut-on emporter un power bank en avion ?",
    answer:
      "Oui, en cabine uniquement. Limite : 100Wh (environ 27 000 mAh). Un 20 000 mAh de 74Wh passe sans problème. Vérifiez l'étiquette de votre power bank.",
  },
];

export default function MeilleurPowerBankPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur power bank au Maroc – Comparatif 2025",
    description:
      "Guide d'achat des meilleures batteries externes au Maroc avec comparatif et prix.",
    url: "/comparatifs/meilleur-power-bank-maroc",
    datePublished: "2025-02-08T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-teal-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-teal-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs/accessoires" className="hover:text-teal-400 transition-colors">
                Accessoires
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Power Bank</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-6">
                🔋 Guide Batterie 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                  power bank
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Comparatif des meilleures batteries externes. Anker, Xiaomi,
                Baseus : trouvez le power bank idéal pour vos besoins.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Capacity Guide */}
          <section className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-teal-900 mb-4">
              💡 Quelle capacité choisir ?
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">10 000 mAh</p>
                <p className="text-gray-600">2-3 charges smartphone</p>
                <p className="text-teal-600 font-medium">Usage quotidien</p>
              </div>
              <div className="bg-white rounded-lg p-4 ring-2 ring-teal-400">
                <p className="font-semibold text-gray-900">20 000 mAh ⭐</p>
                <p className="text-gray-600">5-6 charges smartphone</p>
                <p className="text-teal-600 font-medium">Voyage / Intensif</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">30 000 mAh</p>
                <p className="text-gray-600">Charge laptop possible</p>
                <p className="text-teal-600 font-medium">Pro / Nomade</p>
              </div>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🔋</span>
              <div>
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                  Notre recommandation
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Anker PowerCore 20000
                </h2>
                <p className="text-gray-600 mt-2">
                  La référence des power banks. Fiabilité Anker légendaire,
                  charge rapide 22.5W, 20 000 mAh et construction premium. Le
                  choix sûr pour tous les usages.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-emerald-700 mb-3">
                    399 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Anker PowerCore 20000" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 5 des power banks au Maroc
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xl flex-shrink-0">
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

                      <p className="text-2xl font-bold text-teal-600 mb-3">
                        {product.price.toLocaleString("fr-MA")} DH
                      </p>

                      {/* Key Specs */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.capacite}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.puissanceMax}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.ports}
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
              title="Comparatif power banks"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guide d'achat : power bank
            </h2>

            <div className="prose prose-teal max-w-none">
              <h3>Capacité réelle vs annoncée</h3>
              <p>
                Un power bank de 20 000 mAh ne délivre pas 20 000 mAh réels.
                Comptez environ 60-70% de rendement (pertes de conversion).
                Un 20 000 mAh chargera environ 4-5 fois un smartphone de 4000 mAh.
              </p>

              <h3>Charge rapide : PD vs QC</h3>
              <p>
                Power Delivery (PD) : standard USB-C universel, jusqu'à 100W.
                Quick Charge (QC) : standard Qualcomm, surtout pour Android.
                Les meilleurs power banks supportent les deux.
              </p>

              <h3>Entrée de charge</h3>
              <p>
                Privilégiez une entrée USB-C rapide (18W+) pour recharger le
                power bank rapidement. Un 20 000 mAh avec entrée 18W se
                recharge en 6-8h contre 15h+ avec entrée 5W.
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
                    <span className="text-teal-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-teal-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              L'<strong>Anker PowerCore 20000</strong> est notre recommandation
              principale : fiable, rapide et avec une garantie solide. Pour un
              budget serré, le <strong>Xiaomi Mi Power Bank 3</strong> offre un
              excellent rapport qualité-prix. Besoin de charger un laptop ? Le{" "}
              <strong>Baseus 30000mAh 65W</strong> est fait pour ça.
            </p>
            <MultiStoreButtons 
              productName="Anker PowerCore 20000" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
