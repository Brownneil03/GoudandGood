import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ComparisonTable, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur smartphone 4000-5000 DH au Maroc (2026)",
  description:
    "Comparatif des meilleurs smartphones entre 4000 et 5000 DH au Maroc. Samsung Galaxy A55, Xiaomi 13 Lite, POCO X6 Pro : lequel choisir ?",
  keywords: [
    "meilleur smartphone 4000 dh maroc",
    "meilleur smartphone 5000 dh maroc",
    "smartphone milieu de gamme maroc",
    "samsung a55 maroc prix",
    "poco x6 pro maroc",
    "xiaomi 13 lite maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-smartphone-4000-5000-dh-maroc",
  },
};

const products = [
  {
    name: "Samsung Galaxy A55",
    price: 4599,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+a55",
    badge: "Meilleur choix",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.6" Super AMOLED 120Hz',
      processeur: "Exynos 1480",
      ram: "8 Go",
      stockage: "256 Go",
      batterie: "5000 mAh",
      camera: "50 MP OIS",
    },
    pros: ["Écran AMOLED sublime", "5 ans de mises à jour", "Étanche IP67", "Stabilisation optique"],
    cons: ["Charge lente 25W", "Pas de chargeur inclus"],
  },
  {
    name: "Xiaomi POCO X6 Pro",
    price: 4299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=poco+x6+pro",
    badge: "Meilleur pour gaming",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.67" AMOLED 120Hz',
      processeur: "Dimensity 8300 Ultra",
      ram: "12 Go",
      stockage: "256 Go",
      batterie: "5000 mAh",
      camera: "64 MP",
    },
    pros: ["12 Go RAM monstrueux", "Processeur très puissant", "Charge 67W ultra-rapide"],
    cons: ["Marque moins premium", "Pas d'étanchéité"],
  },
  {
    name: "Xiaomi 13 Lite",
    price: 4199,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+13+lite",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.55" AMOLED 120Hz',
      processeur: "Snapdragon 7 Gen 1",
      ram: "8 Go",
      stockage: "256 Go",
      batterie: "4500 mAh",
      camera: "50 MP",
    },
    pros: ["Design ultra-fin", "Très léger (171g)", "Bon appareil photo"],
    cons: ["Batterie 4500 mAh (moins)", "Pas de jack 3.5mm"],
  },
  {
    name: "Realme GT 2 Pro",
    price: 4799,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=realme+gt+2+pro",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.7" AMOLED 2K 120Hz',
      processeur: "Snapdragon 8 Gen 1",
      ram: "12 Go",
      stockage: "256 Go",
      batterie: "5000 mAh",
      camera: "50 MP",
    },
    pros: ["Écran 2K magnifique", "Snapdragon 8 Gen 1 flagship", "Charge 65W rapide"],
    cons: ["Chauffe en gaming intensif", "Design polarisant"],
  },
  {
    name: "OnePlus Nord 3",
    price: 4499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=oneplus+nord+3",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
    specs: {
      ecran: '6.74" Fluid AMOLED 120Hz',
      processeur: "Dimensity 9000",
      ram: "8 Go",
      stockage: "128 Go",
      batterie: "5000 mAh",
      camera: "50 MP",
    },
    pros: ["OxygenOS très fluide", "Performances flagship", "Charge 80W très rapide"],
    cons: ["128 Go seulement", "Moins disponible au Maroc"],
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
    question: "Quel est le meilleur smartphone entre 4000 et 5000 DH au Maroc ?",
    answer:
      "Le Samsung Galaxy A55 est notre recommandation pour son équilibre parfait : écran AMOLED 120Hz, 5 ans de mises à jour garanties, étanchéité IP67, et stabilisation optique. Pour le gaming, le POCO X6 Pro avec 12 Go de RAM est imbattable.",
  },
  {
    question: "POCO X6 Pro vs Samsung A55 : lequel choisir ?",
    answer:
      "Le POCO X6 Pro (4299 DH) est meilleur pour le gaming avec 12 Go de RAM et un processeur plus puissant. Le Samsung A55 (4599 DH) est préférable pour les photos, la durabilité (étanche) et les mises à jour garanties 5 ans. Choisissez selon votre priorité.",
  },
  {
    question: "Est-ce que ces smartphones sont compatibles 5G au Maroc ?",
    answer:
      "Oui, tous les modèles de cette liste sont compatibles 5G. Cependant, la 5G n'est pas encore déployée commercialement au Maroc. Ces téléphones fonctionnent parfaitement en 4G+ avec tous les opérateurs (IAM, Orange, inwi).",
  },
  {
    question: "Combien de temps durera un smartphone à 4500 DH ?",
    answer:
      "À ce budget, comptez 4-5 ans d'utilisation confortable. Le Samsung A55 garantit même 5 ans de mises à jour de sécurité, ce qui en fait un excellent investissement long terme.",
  },
  {
    question: "Quel smartphone choisir pour la photo à ce budget ?",
    answer:
      "Le Samsung Galaxy A55 offre la meilleure expérience photo grâce à sa stabilisation optique (OIS) et ses modes nuit performants. Le Xiaomi 13 Lite est également excellent pour les portraits et les selfies.",
  },
];

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur smartphone 4000-5000 DH au Maroc (2026)",
    description:
      "Comparatif des meilleurs smartphones milieu de gamme entre 4000 et 5000 DH au Maroc.",
    url: "/comparatifs/meilleur-smartphone-4000-5000-dh-maroc",
    datePublished: "2026-02-21T12:00:00+01:00",
    dateModified: "2026-02-21T12:00:00+01:00",
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
          <span className="text-gray-900">4000-5000 DH</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              Comparatif
            </span>
            <time dateTime="2026-02-21">Mis à jour le 21 février 2026</time>
            <span>•</span>
            <span>10 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meilleur smartphone 4000-5000 DH au Maroc (2026)
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Avec un budget de 4000 à 5000 DH, vous accédez au <strong>milieu de gamme premium</strong> : 
            écrans AMOLED 120Hz, processeurs puissants, et appareils photo de qualité. 
            Découvrez les 5 meilleurs choix disponibles au Maroc, testés et approuvés.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-4">
            📋 Dans cet article
          </h2>
          <ul className="space-y-2 text-emerald-600">
            <li>
              <a href="#top5" className="hover:underline">
                1. Top 5 des smartphones 4000-5000 DH
              </a>
            </li>
            <li>
              <a href="#comparatif" className="hover:underline">
                2. Tableau comparatif complet
              </a>
            </li>
            <li>
              <a href="#versus" className="hover:underline">
                3. Samsung vs POCO : le match
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:underline">
                4. Guide : comment choisir ?
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. Questions fréquentes
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
                Samsung Galaxy A55
              </h2>
              <p className="text-gray-600 mt-2">
                Le meilleur smartphone milieu de gamme au Maroc. Écran Super AMOLED 120Hz, 
                étanchéité IP67, <strong>5 ans de mises à jour</strong>, et stabilisation optique 
                pour des photos nettes même en mouvement.
              </p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-700 mb-3">
                  4 599 DH
                </p>
                <MultiStoreButtons 
                  productName="Samsung Galaxy A55" 
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top 5 Section */}
        <section id="top5" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top 5 des smartphones entre 4000 et 5000 DH
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
                        <span>⚡ {product.specs.processeur}</span>
                        <span>💾 {product.specs.ram} RAM</span>
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
            title="Comparatif smartphones 4000-5000 DH"
          />
        </section>

        {/* Versus Section */}
        <section id="versus" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🥊 Samsung Galaxy A55 vs POCO X6 Pro : le match
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Samsung Galaxy A55</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">4 599 DH</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ <strong>Étanche IP67</strong> - utilisable sous la pluie</li>
                  <li>✓ <strong>5 ans de mises à jour</strong> - longévité garantie</li>
                  <li>✓ <strong>Stabilisation optique</strong> - meilleures photos</li>
                  <li>✓ Design premium et SAV accessible</li>
                  <li className="text-gray-400">✗ Charge lente 25W (1h45 pour charger)</li>
                  <li className="text-gray-400">✗ 8 Go RAM (correct mais pas exceptionnel)</li>
                </ul>
                <p className="mt-4 text-blue-700 font-medium">
                  👉 Idéal pour : usage quotidien, photo, durabilité
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">POCO X6 Pro</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">4 299 DH</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ <strong>12 Go RAM</strong> - multitâche extrême</li>
                  <li>✓ <strong>Dimensity 8300</strong> - performances gaming</li>
                  <li>✓ <strong>Charge 67W</strong> - 100% en 45 min</li>
                  <li>✓ 300 DH moins cher</li>
                  <li className="text-gray-400">✗ Pas d&apos;étanchéité</li>
                  <li className="text-gray-400">✗ 2-3 ans de mises à jour seulement</li>
                </ul>
                <p className="mt-4 text-orange-700 font-medium">
                  👉 Idéal pour : gaming, multitâche intensif, budget
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg text-center">
              <p className="text-gray-700">
                <strong>🎯 Verdict :</strong> Choisissez le <strong>Samsung A55</strong> si vous 
                gardez votre téléphone 4+ ans et voulez les meilleures photos. Prenez le 
                <strong> POCO X6 Pro</strong> si le gaming et le multitâche sont votre priorité.
              </p>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Guide : comment choisir à ce budget ?
          </h2>

          <div className="prose prose-emerald max-w-none">
            <h3>📱 L&apos;écran : tous excellents</h3>
            <p>
              À ce prix, tous les modèles ont des écrans AMOLED 120Hz de qualité. 
              Le <strong>Realme GT 2 Pro</strong> se démarque avec sa résolution 2K, 
              mais la différence n&apos;est pas flagrante au quotidien.
            </p>

            <h3>⚡ La performance : gaming et multitâche</h3>
            <p>
              Pour le gaming intensif (Genshin Impact, PUBG en haute qualité), 
              le <strong>POCO X6 Pro</strong> et le <strong>Realme GT 2 Pro</strong> 
              sont les plus performants. Le Samsung A55 est très fluide au quotidien 
              mais légèrement en dessous pour les jeux exigeants.
            </p>

            <h3>📸 La photo : Samsung en tête</h3>
            <p>
              Grâce à sa <strong>stabilisation optique (OIS)</strong>, le Samsung Galaxy A55 
              prend les meilleures photos, surtout en basse lumière et en vidéo. 
              Le Xiaomi 13 Lite excelle en selfies.
            </p>

            <h3>🔋 La charge : POCO imbattable</h3>
            <p>
              Le POCO X6 Pro charge de 0 à 100% en 45 minutes (67W). Le Samsung A55 
              prend presque 2h avec sa charge 25W. Si vous êtes toujours pressé, 
              c&apos;est un critère important.
            </p>

            <h3>🛡️ La durabilité : Samsung champion</h3>
            <p>
              Le Samsung Galaxy A55 est <strong>étanche IP67</strong> (survit à 30min sous l&apos;eau) 
              et garantit <strong>5 ans de mises à jour</strong>. C&apos;est le choix le plus 
              durable de cette liste.
            </p>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quel smartphone pour quel profil ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2">📸 Photographes</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Samsung Galaxy A55</strong> - Stabilisation optique, 
                modes nuit, vidéo 4K stabilisée.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-2">🎮 Gamers</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>POCO X6 Pro</strong> - 12 Go RAM, Dimensity 8300, 
                refroidissement LiquidCool.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">💼 Professionnels</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>OnePlus Nord 3</strong> - OxygenOS fluide, charge 80W, 
                performances stables.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-800 mb-2">🎨 Design lovers</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Xiaomi 13 Lite</strong> - Ultra-fin, léger (171g), 
                finition premium.
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">📺 Cinéphiles</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Realme GT 2 Pro</strong> - Écran 2K AMOLED, 
                le plus beau de la liste.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-2">🤔 Indécis</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Samsung Galaxy A55</strong> - Le plus équilibré, 
                vous ne regretterez pas.
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
            Entre 4000 et 5000 DH, le <strong>Samsung Galaxy A55</strong> est notre 
            recommandation principale grâce à ses 5 ans de mises à jour, son étanchéité 
            et ses excellentes photos. Pour les gamers, le <strong>POCO X6 Pro</strong> 
            offre des performances imbattables à 4299 DH. Et si le budget le permet, 
            le <strong>Realme GT 2 Pro</strong> offre un écran 2K spectaculaire.
          </p>
          <MultiStoreButtons 
            productName="Samsung Galaxy A55" 
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
              href="/comparatifs/meilleur-telephone-3000-dh-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Budget inférieur →</span>
              <p className="text-gray-900 font-semibold">Meilleur smartphone moins de 3000 DH</p>
            </Link>
            <Link 
              href="/comparatifs/samsung-vs-xiaomi-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Comparatif marques →</span>
              <p className="text-gray-900 font-semibold">Samsung vs Xiaomi au Maroc</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
