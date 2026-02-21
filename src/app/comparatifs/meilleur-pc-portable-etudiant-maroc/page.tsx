import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ComparisonTable, AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur PC portable pour étudiant au Maroc (2025)",
  description:
    "Guide d'achat des meilleurs PC portables pour étudiants au Maroc. HP, Lenovo, ASUS entre 4000 et 6000 DH. Comparatif et prix Jumia.",
  keywords: [
    "pc portable etudiant maroc",
    "meilleur laptop etudiant",
    "pc portable pas cher maroc",
    "hp laptop maroc",
    "lenovo ideapad maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-pc-portable-etudiant-maroc",
  },
};

const products = [
  {
    name: "Lenovo IdeaPad 3 15",
    image: "https://p1-ofp.static.pub/fes/cms/2022/08/05/xz2mfhb1dqzzcxdmj8v5kijlmrlw9r054665.png",
    price: 4999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=lenovo+ideapad+3",
    badge: "Meilleur choix",
    rating: 4.6,
    specs: {
      ecran: '15.6" FHD IPS',
      processeur: "AMD Ryzen 5 5500U",
      ram: "8 Go DDR4",
      stockage: "512 Go SSD NVMe",
      graphique: "AMD Radeon Vega 7",
      autonomie: "7h",
      poids: "1.65 kg",
    },
    pros: [
      "Excellent rapport qualité-prix",
      "Processeur Ryzen 5 performant",
      "SSD 512 Go rapide",
      "Léger et portable",
    ],
    cons: [
      "Écran pas très lumineux",
      "Plastique au toucher",
    ],
  },
  {
    name: "HP 15s-eq2xxx",
    image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07962448.png",
    price: 5299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=hp+15s",
    badge: "Fiabilité HP",
    rating: 4.5,
    specs: {
      ecran: '15.6" FHD SVA',
      processeur: "AMD Ryzen 5 5625U",
      ram: "8 Go DDR4",
      stockage: "512 Go SSD",
      graphique: "AMD Radeon Graphics",
      autonomie: "8h",
      poids: "1.69 kg",
    },
    pros: [
      "Marque fiable, SAV accessible",
      "Bonne autonomie",
      "Clavier confortable",
      "Webcam HD avec obturateur",
    ],
    cons: [
      "Design classique",
      "Pas de rétroéclairage clavier",
    ],
  },
  {
    name: "ASUS VivoBook 15",
    image: "https://dlcdnwebimgs.asus.com/gain/E5B42779-81D6-460D-978E-09A989E8501C/w717/h525",
    price: 5499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=asus+vivobook+15",
    badge: "Meilleur écran",
    rating: 4.4,
    specs: {
      ecran: '15.6" FHD IPS NanoEdge',
      processeur: "Intel Core i5-1235U",
      ram: "8 Go DDR4",
      stockage: "512 Go SSD",
      graphique: "Intel Iris Xe",
      autonomie: "6h",
      poids: "1.7 kg",
    },
    pros: [
      "Écran NanoEdge bords fins",
      "Design moderne",
      "Intel de dernière génération",
      "Clavier rétroéclairé",
    ],
    cons: [
      "Autonomie moyenne",
      "Ventilateur audible",
    ],
  },
  {
    name: "Acer Aspire 3",
    image: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/Images/20210701/Aspire-3-A315-59-wp-logo-01.png",
    price: 4499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=acer+aspire+3",
    badge: "Budget serré",
    rating: 4.2,
    specs: {
      ecran: '15.6" FHD',
      processeur: "AMD Ryzen 3 5300U",
      ram: "8 Go DDR4",
      stockage: "256 Go SSD",
      graphique: "AMD Radeon Graphics",
      autonomie: "8h",
      poids: "1.8 kg",
    },
    pros: [
      "Prix le plus bas",
      "8 Go RAM inclus",
      "Bonne autonomie",
      "Simple et efficace",
    ],
    cons: [
      "Stockage 256 Go limité",
      "Processeur entrée de gamme",
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
  poids: "Poids",
};

const faqs = [
  {
    question: "Quel PC portable choisir pour un étudiant au Maroc ?",
    answer:
      "Le Lenovo IdeaPad 3 avec Ryzen 5 est notre recommandation principale : performant, léger et abordable. Pour une marque plus connue, le HP 15s est excellent avec son SAV accessible.",
  },
  {
    question: "8 Go de RAM suffisent-ils pour un étudiant ?",
    answer:
      "Oui, 8 Go suffisent pour les études (Word, Excel, navigation, vidéos). Pour des usages intensifs (programmation, design), préférez 16 Go ou un modèle évolutif.",
  },
  {
    question: "SSD ou disque dur pour un PC étudiant ?",
    answer:
      "SSD obligatoire en 2025. Un SSD de 256 Go minimum accélère le démarrage et les applications. 512 Go est idéal pour ne pas manquer d'espace.",
  },
];

export default function MeilleurPCEtudiantPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur PC portable pour étudiant au Maroc (2025)",
    description:
      "Guide d'achat des meilleurs PC portables pour étudiants au Maroc entre 4000 et 6000 DH.",
    url: "/comparatifs/meilleur-pc-portable-etudiant-maroc",
    datePublished: "2025-01-25T10:00:00+01:00",
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
        <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
              <Link href="/comparatifs/pc-portables" className="hover:text-blue-400 transition-colors">
                PC Portables
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Étudiant</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                🎓 Guide Étudiant 2025
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meilleur PC portable pour{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  étudiant
                </span>{" "}
                au Maroc
              </h1>

              <p className="text-xl text-slate-300">
                Les meilleurs laptops entre 4000 et 6000 DH pour réussir vos études.
                Légers, performants et abordables.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Budget Guide */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-blue-900 mb-4">
              💡 Budget recommandé pour un PC étudiant
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">4000-4500 DH</p>
                <p className="text-gray-600">Basique mais fonctionnel</p>
              </div>
              <div className="bg-white rounded-lg p-4 ring-2 ring-blue-400">
                <p className="font-semibold text-blue-700">5000-5500 DH ⭐</p>
                <p className="text-gray-600">Idéal pour la plupart</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900">6000+ DH</p>
                <p className="text-gray-600">Plus de confort</p>
              </div>
            </div>
          </section>

          {/* Winner Highlight */}
          <section className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                  Notre recommandation
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Lenovo IdeaPad 3 15
                </h2>
                <p className="text-gray-600 mt-2">
                  Le meilleur compromis pour les étudiants. Ryzen 5 performant,
                  8 Go RAM, SSD 512 Go et seulement 1.65 kg. Parfait pour les
                  cours et le travail à domicile.
                </p>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-emerald-700 mb-3">
                    4 999 DH
                  </p>
                  <MultiStoreButtons 
                    productName="Lenovo IdeaPad 3" 
                    size="md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top 4 des PC portables pour étudiants
            </h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-28 h-24 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="112px"
                      />
                      <div className="absolute -top-2 -left-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

                      <p className="text-2xl font-bold text-blue-600 mb-3">
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
              Tableau comparatif
            </h2>
            <ComparisonTable
              products={products}
              specLabels={specLabels}
              title="Comparatif PC portables étudiants"
            />
          </section>

          {/* Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guide d'achat : PC portable pour étudiant
            </h2>

            <div className="prose prose-blue max-w-none">
              <h3>Critères essentiels</h3>
              <ul>
                <li><strong>Poids :</strong> Moins de 2 kg pour le transporter facilement</li>
                <li><strong>Autonomie :</strong> Minimum 6h pour tenir une journée de cours</li>
                <li><strong>SSD :</strong> Obligatoire pour la réactivité</li>
                <li><strong>RAM :</strong> 8 Go minimum en 2025</li>
              </ul>

              <h3>AMD Ryzen vs Intel Core</h3>
              <p>
                Les deux sont excellents. AMD Ryzen offre souvent un meilleur
                rapport qualité-prix. Intel Core de 12e/13e génération excelle
                en performances pures. Pour un étudiant, les deux conviennent.
              </p>

              <h3>Écran : attention à la qualité</h3>
              <p>
                Privilégiez un écran IPS pour de meilleurs angles de vision.
                Évitez les écrans TN bas de gamme. La résolution Full HD (1920x1080)
                est idéale pour le travail.
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
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
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
              Pour un étudiant au Maroc, le <strong>Lenovo IdeaPad 3</strong> avec
              Ryzen 5 offre le meilleur équilibre entre prix, performance et portabilité.
              Si vous préférez une marque avec SAV local solide, le{" "}
              <strong>HP 15s</strong> est une excellente alternative.
            </p>
            <MultiStoreButtons 
              productName="Lenovo IdeaPad 3" 
              size="lg"
            />
          </section>
        </article>
      </div>
    </>
  );
}
