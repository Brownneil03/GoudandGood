import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ComparisonTable, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur smartphone moins de 1500 DH au Maroc (2026)",
  description:
    "Découvrez les meilleurs smartphones à moins de 1500 DH disponibles au Maroc. Comparatif détaillé Redmi, Samsung, Realme avec prix Jumia et avis.",
  keywords: [
    "meilleur smartphone 1500 dh",
    "smartphone pas cher maroc",
    "meilleur téléphone 1500 dh maroc",
    "smartphone moins de 1500 dh",
    "téléphone étudiant maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-smartphone-moins-1500-dh-maroc",
  },
};

// Données des produits comparés
const products = [
  {
    name: "Xiaomi Redmi 13C",
    price: 1299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+13c",
    badge: "Meilleur choix",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.74" IPS 90Hz',
      processeur: "Helio G85",
      ram: "6 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "50 MP",
    },
    pros: ["Prix imbattable", "6 Go RAM suffisant", "Grand écran 90Hz"],
    cons: ["Écran LCD (pas AMOLED)", "Charge lente 18W"],
  },
  {
    name: "Samsung Galaxy A05s",
    price: 1399,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+a05s",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.7" PLS LCD 90Hz',
      processeur: "Snapdragon 680",
      ram: "4 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "50 MP",
    },
    pros: ["Marque Samsung fiable", "Snapdragon 680 performant", "3 ans de mises à jour"],
    cons: ["4 Go RAM limite", "Design basique"],
  },
  {
    name: "Realme C67",
    price: 1449,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=realme+c67",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.72" IPS 90Hz',
      processeur: "Snapdragon 685",
      ram: "6 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "108 MP",
    },
    pros: ["Caméra 108 MP impressionnante", "Snapdragon 685 puissant", "Charge 33W rapide"],
    cons: ["Marque moins connue au Maroc", "Pas de NFC"],
  },
  {
    name: "Infinix Hot 40i",
    price: 1199,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=infinix+hot+40i",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.56" IPS 90Hz',
      processeur: "Helio G36",
      ram: "8 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "13 MP",
    },
    pros: ["8 Go RAM excellent à ce prix", "Le moins cher", "Bon pour multitâche"],
    cons: ["Processeur basique", "Caméra 13 MP limitée"],
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
    question: "Quel est le meilleur smartphone à moins de 1500 DH au Maroc ?",
    answer:
      "En 2026, le Xiaomi Redmi 13C offre le meilleur équilibre entre prix (1299 DH), performance (6 Go RAM) et autonomie (5000 mAh). Pour les photos, le Realme C67 avec sa caméra 108 MP est imbattable à ce budget.",
  },
  {
    question: "Est-ce qu'un smartphone à 1500 DH peut faire tourner des jeux ?",
    answer:
      "Les smartphones de cette gamme peuvent faire tourner des jeux légers comme Candy Crush, Subway Surfers ou Free Fire en qualité moyenne. Pour PUBG ou Genshin Impact, il faudra un budget supérieur (2500+ DH).",
  },
  {
    question: "Samsung ou Xiaomi à moins de 1500 DH ?",
    answer:
      "À ce budget, Xiaomi offre généralement plus de RAM et de meilleures specs. Cependant, Samsung Galaxy A05s garantit 3 ans de mises à jour de sécurité, un avantage pour la longévité du téléphone.",
  },
  {
    question: "Combien de temps va durer un smartphone à 1500 DH ?",
    answer:
      "Avec une utilisation normale, comptez 2-3 ans. Pour maximiser la durée de vie : utilisez une coque de protection, évitez de charger à 100% régulièrement, et gardez le stockage libre à 20%.",
  },
  {
    question: "Où acheter un smartphone pas cher au Maroc ?",
    answer:
      "Jumia Maroc offre les meilleurs prix avec garantie officielle. Évitez les vendeurs non officiels qui proposent des téléphones sans garantie. Amazon livre aussi au Maroc sur certains modèles.",
  },
];

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur smartphone moins de 1500 DH au Maroc (2026)",
    description:
      "Découvrez les meilleurs smartphones à moins de 1500 DH disponibles au Maroc avec comparatif détaillé.",
    url: "/comparatifs/meilleur-smartphone-moins-1500-dh-maroc",
    datePublished: "2026-02-21T10:00:00+01:00",
    dateModified: "2026-02-21T10:00:00+01:00",
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
          <span className="text-gray-900">Moins de 1500 DH</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              Comparatif
            </span>
            <time dateTime="2026-02-21">Mis à jour le 21 février 2026</time>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meilleur smartphone moins de 1500 DH au Maroc (2026)
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Vous avez un budget serré de 1500 DH pour acheter un smartphone au Maroc ? 
            Bonne nouvelle : il existe d&apos;excellents téléphones à ce prix ! 
            Découvrez notre sélection des 4 meilleurs modèles disponibles sur Jumia, 
            parfaits pour les étudiants et utilisateurs qui veulent un bon rapport qualité-prix.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-4">
            📋 Dans cet article
          </h2>
          <ul className="space-y-2 text-emerald-600">
            <li>
              <a href="#top4" className="hover:underline">
                1. Top 4 des smartphones à moins de 1500 DH
              </a>
            </li>
            <li>
              <a href="#comparatif" className="hover:underline">
                2. Tableau comparatif complet
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:underline">
                3. Guide d&apos;achat : que choisir ?
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
                Xiaomi Redmi 13C
              </h2>
              <p className="text-gray-600 mt-2">
                Le meilleur choix à moins de 1500 DH au Maroc. Écran 6.74&quot; 90Hz, 
                6 Go de RAM pour une utilisation fluide, 128 Go de stockage et 
                batterie 5000 mAh pour 2 jours d&apos;autonomie.
              </p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-700 mb-3">
                  1 299 DH
                </p>
                <MultiStoreButtons 
                  productName="Xiaomi Redmi 13C" 
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top 4 Section */}
        <section id="top4" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top 4 des smartphones à moins de 1500 DH au Maroc
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
                    <div className="absolute top-2 left-2 bg-emerald-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-emerald-600 mb-3">
                      {product.price.toLocaleString("fr-MA")} DH
                    </p>
                    
                    {/* Specs rapides */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4 text-sm">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <span>📱 {product.specs.ecran}</span>
                        <span>💾 {product.specs.ram} RAM</span>
                        <span>📸 {product.specs.camera}</span>
                      </div>
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
            Tableau comparatif complet
          </h2>
          <ComparisonTable
            products={products}
            specLabels={specLabels}
            title="Comparatif smartphones moins de 1500 DH"
          />
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Guide d&apos;achat : comment choisir à moins de 1500 DH ?
          </h2>

          <div className="prose prose-emerald max-w-none">
            <h3>📱 La RAM : le critère le plus important</h3>
            <p>
              À ce budget, la RAM est cruciale. Avec 4 Go (Samsung A05s), 
              vous aurez des ralentissements en multitâche. <strong>Privilégiez 6 Go minimum</strong> 
              (Redmi 13C, Realme C67) ou même 8 Go (Infinix Hot 40i) pour une 
              expérience fluide sur WhatsApp, Facebook et YouTube.
            </p>

            <h3>🔋 L&apos;autonomie : tous au même niveau</h3>
            <p>
              Bonne nouvelle : tous les modèles ont une batterie de 5000 mAh, 
              soit 1 à 2 jours d&apos;utilisation normale. La différence se fait 
              sur la charge : le Realme C67 charge en 1h (33W) contre 2h pour 
              les autres (18W).
            </p>

            <h3>📸 La photo : pour les réseaux sociaux</h3>
            <p>
              Si Instagram et TikTok sont importants pour vous, le 
              <strong> Realme C67 avec son capteur 108 MP</strong> prend de meilleures photos. 
              Les autres modèles (50 MP) sont corrects pour des photos basiques 
              mais limités en basse lumière.
            </p>

            <h3>🎮 Pour le gaming léger</h3>
            <p>
              Free Fire, Subway Surfers ou Candy Crush tournent bien sur tous 
              ces téléphones. Pour des jeux plus exigeants (PUBG, Call of Duty), 
              le <strong>Realme C67 avec son Snapdragon 685</strong> offre les 
              meilleures performances.
            </p>

            <h3>🛡️ Les mises à jour et la durabilité</h3>
            <p>
              Samsung garantit 3 ans de mises à jour de sécurité sur le Galaxy A05s. 
              C&apos;est un avantage si vous gardez votre téléphone longtemps. Xiaomi 
              et Realme offrent généralement 2 ans.
            </p>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pour qui est chaque smartphone ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2">👨‍🎓 Étudiants</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Xiaomi Redmi 13C</strong> - Le meilleur équilibre prix/performance 
                pour prendre des notes, WhatsApp et regarder des cours en ligne.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-800 mb-2">📸 Fans de photo</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Realme C67</strong> - Caméra 108 MP pour de belles photos 
                Instagram et TikTok, même à ce prix.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">👴 Parents / Usage basique</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Samsung Galaxy A05s</strong> - Interface simple, marque connue, 
                SAV accessible partout au Maroc.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-2">🎮 Multitâche intensif</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Infinix Hot 40i</strong> - 8 Go de RAM à 1199 DH, imbattable 
                pour ouvrir plusieurs apps sans ralentissement.
              </p>
            </div>
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
            Notre verdict final
          </h2>
          <p className="text-gray-600 mb-6">
            À moins de 1500 DH au Maroc, le <strong>Xiaomi Redmi 13C à 1299 DH</strong> est 
            notre choix numéro 1 pour son excellent équilibre. Si les photos sont votre 
            priorité, optez pour le <strong>Realme C67</strong>. Et si vous cherchez le 
            maximum de RAM pour le multitâche, l&apos;<strong>Infinix Hot 40i avec 8 Go</strong> 
            est imbattable à 1199 DH.
          </p>
          <MultiStoreButtons 
            productName="Xiaomi Redmi 13C" 
            size="lg"
          />
        </section>

        {/* Articles liés */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Articles similaires
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/comparatifs/meilleur-smartphone-moins-2000-dh-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Budget supérieur →</span>
              <p className="text-gray-900 font-semibold">Meilleur smartphone moins de 2000 DH</p>
            </Link>
            <Link 
              href="/guides/comment-choisir-smartphone-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Guide complet →</span>
              <p className="text-gray-900 font-semibold">Comment choisir son smartphone au Maroc</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
