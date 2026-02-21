import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur PC portable gamer pas cher au Maroc (2025)",
  description:
    "Les meilleurs PC portables gaming abordables au Maroc. Laptops avec GTX/RTX pour jouer sans se ruiner. Comparatif et prix Jumia.",
  keywords: [
    "pc portable gamer pas cher maroc",
    "laptop gaming maroc",
    "pc portable rtx maroc",
    "meilleur pc gamer budget",
    "asus tuf gaming maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-pc-portable-gamer-pas-cher-maroc",
  },
};

const products = [
  {
    name: "ASUS TUF Gaming F15",
    price: 8999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=asus+tuf+gaming+f15",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.6,
    specs: {
      ecran: '15.6" FHD 144Hz IPS',
      processeur: "Intel Core i5-12500H",
      ram: "16 Go DDR4",
      stockage: "512 Go SSD NVMe",
      graphique: "NVIDIA RTX 4050 6 Go",
      autonomie: "4h",
      refroidissement: "Double ventilateur",
    },
    pros: [
      "RTX 4050 pour le ray-tracing",
      "Écran 144Hz fluide",
      "Clavier RGB rétroéclairé",
      "Construction robuste MIL-STD",
    ],
    cons: [
      "Autonomie limitée en jeu",
      "Un peu lourd (2.2 kg)",
    ],
  },
  {
    name: "Lenovo IdeaPad Gaming 3",
    price: 7999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=lenovo+ideapad+gaming+3",
    badge: "Entrée de gamme gaming",
    rating: 4.4,
    specs: {
      ecran: '15.6" FHD 120Hz',
      processeur: "AMD Ryzen 5 6600H",
      ram: "8 Go DDR5",
      stockage: "512 Go SSD",
      graphique: "NVIDIA RTX 3050 4 Go",
      autonomie: "5h",
      refroidissement: "Coldfront 2.0",
    },
    pros: [
      "Prix attractif",
      "DDR5 moderne",
      "Ryzen 5 6600H efficace",
      "Design discret",
    ],
    cons: [
      "RTX 3050 limitée (4 Go)",
      "8 Go RAM justes",
    ],
  },
  {
    name: "HP Victus 15",
    price: 9499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=hp+victus+15",
    badge: "Polyvalent",
    rating: 4.5,
    specs: {
      ecran: '15.6" FHD 144Hz IPS',
      processeur: "Intel Core i5-12450H",
      ram: "16 Go DDR4",
      stockage: "512 Go SSD",
      graphique: "NVIDIA RTX 4050 6 Go",
      autonomie: "4h",
      refroidissement: "Ventilation améliorée",
    },
    pros: [
      "Marque HP fiable",
      "Design sobre pour pro",
      "Bons haut-parleurs",
      "Webcam 1080p",
    ],
    cons: [
      "Chauffe sous charge",
      "Trackpad moyen",
    ],
  },
  {
    name: "MSI GF63 Thin",
    price: 7499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=msi+gf63+thin",
    badge: "Le plus léger",
    rating: 4.3,
    specs: {
      ecran: '15.6" FHD 144Hz',
      processeur: "Intel Core i5-11400H",
      ram: "8 Go DDR4",
      stockage: "512 Go SSD",
      graphique: "NVIDIA GTX 1650 4 Go",
      autonomie: "5h",
      refroidissement: "Cooler Boost 5",
    },
    pros: [
      "Très léger (1.86 kg)",
      "Prix accessible",
      "Design fin élégant",
      "Silencieux",
    ],
    cons: [
      "GTX 1650 vieillissante",
      "8 Go RAM limitées",
    ],
  },
];

const specLabels: Record<string, string> = {
  ecran: "Écran",
  processeur: "Processeur",
  ram: "RAM",
  stockage: "Stockage",
  graphique: "Carte graphique",
  autonomie: "Autonomie",
  refroidissement: "Refroidissement",
};

const faqs = [
  {
    question: "Quel PC portable gamer pas cher choisir au Maroc ?",
    answer:
      "L'ASUS TUF Gaming F15 offre le meilleur rapport qualité-prix avec sa RTX 4050, son écran 144Hz et sa construction robuste. Pour un budget plus serré, le Lenovo IdeaPad Gaming 3 est une bonne entrée en matière.",
  },
  {
    question: "RTX 3050 ou RTX 4050, quelle différence ?",
    answer:
      "La RTX 4050 offre 15-20% de performances en plus et un meilleur ray-tracing grâce à l'architecture Ada Lovelace. La RTX 3050 reste correcte pour les jeux en FHD medium/high.",
  },
  {
    question: "Peut-on jouer en 1080p avec ces PC ?",
    answer:
      "Oui, tous ces laptops sont conçus pour le gaming en 1080p. Avec une RTX 4050, attendez-vous à 60+ fps en high/ultra sur la plupart des jeux. La GTX 1650 nécessitera des réglages medium.",
  },
];

export default function MeilleurPCGamerPasCherPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur PC portable gamer pas cher au Maroc (2025)",
    description:
      "Les meilleurs PC portables gaming abordables au Maroc avec prix et comparatif.",
    url: "/comparatifs/meilleur-pc-portable-gamer-pas-cher-maroc",
    datePublished: "2025-01-28T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-red-900 via-slate-900 to-purple-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-red-400 transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs" className="hover:text-red-400 transition-colors">
                Comparatifs
              </Link>
              <span className="mx-2">/</span>
              <Link href="/comparatifs/pc-portables" className="hover:text-red-400 transition-colors">
                PC Portables
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Gamer pas cher</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6">
                🎮 Gaming Budget 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur PC portable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                  gamer pas cher
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Jouez sans vous ruiner ! Les meilleurs laptops gaming entre
                7000 et 10000 DH avec carte graphique dédiée.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Performance Tiers */}
          <section className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🥉</span>
              <h3 className="font-bold text-gray-900 mt-2">GTX 1650</h3>
              <p className="text-sm text-gray-600">Jeux medium 1080p</p>
              <p className="text-sm text-gray-500">~7500 DH</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🥈</span>
              <h3 className="font-bold text-gray-900 mt-2">RTX 3050</h3>
              <p className="text-sm text-gray-600">Jeux high 1080p</p>
              <p className="text-sm text-gray-500">~8000 DH</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <span className="text-2xl">🥇</span>
              <h3 className="font-bold text-gray-900 mt-2">RTX 4050</h3>
              <p className="text-sm text-gray-600">Jeux ultra 1080p</p>
              <p className="text-sm text-gray-500">~9000 DH</p>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">
                  Notre recommandation gaming
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  ASUS TUF Gaming F15
                </h2>
                <p className="text-gray-600 mt-2">
                  Le choix idéal pour les gamers. RTX 4050 pour le ray-tracing,
                  écran 144Hz, 16 Go RAM et construction MIL-STD ultra-robuste.
                  Le meilleur rapport performance/prix au Maroc.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-red-700 mb-3">
                    8 999 DH
                  </p>
                  <MultiStoreButtons 
                    productName="ASUS TUF Gaming F15" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 4 des PC gaming abordables
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold text-xl flex-shrink-0">
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

                      <p className="text-2xl font-bold text-red-600 mb-3">
                        {product.price.toLocaleString("fr-MA")} DH
                      </p>

                      {/* Key Specs */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.graphique}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.ecran}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {product.specs.ram}
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
              Tableau comparatif gaming
            </h2>
            <ComparisonTable
              products={products}
              specLabels={specLabels}
              title="Comparatif PC portables gamers"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guide d'achat : PC gamer abordable
            </h2>

            <div className="prose prose-red max-w-none">
              <h3>La carte graphique : le cœur du gaming</h3>
              <p>
                C'est le composant le plus important pour les jeux. En 2025,
                visez au minimum une RTX 3050 pour jouer correctement. La RTX
                4050 offre le ray-tracing et le DLSS 3 pour plus de performance.
              </p>

              <h3>L'écran : 120Hz minimum</h3>
              <p>
                Un écran à taux de rafraîchissement élevé (120Hz ou 144Hz) rend
                les jeux plus fluides. C'est aussi important que la carte
                graphique pour le confort de jeu.
              </p>

              <h3>RAM et stockage</h3>
              <p>
                16 Go de RAM sont idéaux pour les jeux modernes. 8 Go peuvent
                suffire mais seront limités. Un SSD NVMe de 512 Go est le
                minimum pour installer plusieurs jeux.
              </p>

              <h3>Refroidissement</h3>
              <p>
                Un bon système de refroidissement maintient les performances
                dans la durée. Les marques gaming (ASUS TUF, HP Victus) ont des
                solutions thermiques optimisées.
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
                    <span className="text-red-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-red-100 to-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict
            </h2>
            <p className="text-gray-600 mb-6">
              Pour jouer sans se ruiner au Maroc, l'<strong>ASUS TUF Gaming F15</strong>
              {" "}est notre recommandation principale. Sa RTX 4050, son écran 144Hz
              et sa construction robuste en font le meilleur choix autour de 9000 DH.
              Pour un budget plus serré, le <strong>MSI GF63 Thin</strong> reste
              une option valable pour les jeux légers.
            </p>
            <MultiStoreButtons 
              productName="ASUS TUF Gaming F15" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
