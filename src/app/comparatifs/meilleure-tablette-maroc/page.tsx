import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ComparisonTable, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleure tablette au Maroc (2026) : Guide d'achat complet",
  description:
    "Découvrez les meilleures tablettes disponibles au Maroc en 2026. iPad, Samsung Tab, Xiaomi Pad : comparatif complet avec prix en DH et avis détaillés.",
  keywords: [
    "meilleure tablette maroc",
    "tablette pas cher maroc",
    "ipad maroc prix",
    "samsung tab maroc",
    "tablette pour etudiant maroc",
    "xiaomi pad maroc",
    "tablette 2000 dh maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleure-tablette-maroc",
  },
};

const products = [
  {
    name: "Apple iPad 10e génération",
    price: 4999,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=ipad+10",
    badge: "Meilleur choix",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    specs: {
      ecran: '10.9" Liquid Retina',
      processeur: "Apple A14 Bionic",
      ram: "4 Go",
      stockage: "64 Go",
      batterie: "10h autonomie",
      camera: "12 MP",
    },
    pros: ["Écosystème Apple parfait", "iPadOS très fluide", "Excellente pour études", "Support Apple Pencil"],
    cons: ["Stockage 64 Go limité", "Pas de Face ID"],
  },
  {
    name: "Samsung Galaxy Tab A9+",
    price: 2799,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+tab+a9+plus",
    badge: "Meilleur rapport qualité/prix",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
    specs: {
      ecran: '11" TFT LCD 90Hz',
      processeur: "Snapdragon 695",
      ram: "4 Go",
      stockage: "64 Go",
      batterie: "8h autonomie",
      camera: "8 MP",
    },
    pros: ["Prix accessible", "Écran 11 pouces", "Compatible DeX", "Slot microSD"],
    cons: ["Écran LCD basique", "4 Go RAM limite"],
  },
  {
    name: "Xiaomi Pad 6",
    price: 3499,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+pad+6",
    badge: "Meilleur écran",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop",
    specs: {
      ecran: '11" LCD 144Hz',
      processeur: "Snapdragon 870",
      ram: "6 Go",
      stockage: "128 Go",
      batterie: "12h autonomie",
      camera: "13 MP",
    },
    pros: ["Écran 144Hz ultra-fluide", "Snapdragon 870 puissant", "Autonomie excellente", "128 Go stockage"],
    cons: ["Pas de 4G/5G", "Stylet vendu séparément"],
  },
  {
    name: "Samsung Galaxy Tab S6 Lite (2024)",
    price: 3299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+tab+s6+lite",
    badge: "Stylus inclus",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=400&h=400&fit=crop",
    specs: {
      ecran: '10.4" TFT LCD',
      processeur: "Snapdragon 720G",
      ram: "4 Go",
      stockage: "64 Go",
      batterie: "10h autonomie",
      camera: "8 MP",
    },
    pros: ["S Pen inclus dans le prix", "Parfaite pour prise de notes", "Samsung One UI", "Légère (465g)"],
    cons: ["Écran 60Hz seulement", "Performances moyennes"],
  },
  {
    name: "Lenovo Tab P11 (2ème gen)",
    price: 2299,
    affiliateUrl: "https://www.jumia.ma/catalog/?q=lenovo+tab+p11",
    badge: "Budget ultra-serré",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=400&h=400&fit=crop",
    specs: {
      ecran: '11.5" 2K OLED',
      processeur: "Mediatek G99",
      ram: "4 Go",
      stockage: "128 Go",
      batterie: "10h autonomie",
      camera: "13 MP",
    },
    pros: ["Écran OLED rare à ce prix", "128 Go stockage", "Résolution 2K", "Prix imbattable"],
    cons: ["Processeur basique", "Marque moins connue au Maroc"],
  },
];

const specLabels: Record<string, string> = {
  ecran: "Écran",
  processeur: "Processeur",
  ram: "RAM",
  stockage: "Stockage",
  batterie: "Autonomie",
  camera: "Caméra",
};

const faqs = [
  {
    question: "Quelle est la meilleure tablette au Maroc en 2026 ?",
    answer:
      "L'iPad 10e génération est la meilleure tablette globale grâce à iPadOS et son écosystème. Pour un budget plus serré, la Xiaomi Pad 6 offre le meilleur rapport qualité-prix avec son écran 144Hz et Snapdragon 870.",
  },
  {
    question: "Quelle tablette choisir pour un étudiant au Maroc ?",
    answer:
      "La Samsung Galaxy Tab S6 Lite (3299 DH) est parfaite pour les étudiants car elle inclut le S Pen pour prendre des notes. Si le budget le permet, l'iPad avec Apple Pencil est encore meilleur pour les études.",
  },
  {
    question: "Tablette ou PC portable pour un étudiant ?",
    answer:
      "Pour la prise de notes et la lecture de PDF, une tablette suffit. Pour les logiciels lourds (programmation, architecture, design), un PC portable est nécessaire. L'idéal est souvent de combiner les deux : tablette légère + PC à la maison.",
  },
  {
    question: "Quelle tablette pour regarder des films et séries ?",
    answer:
      "La Lenovo Tab P11 (2ème gen) avec son écran OLED 2K offre la meilleure qualité d'image pour le streaming à un prix imbattable (2299 DH). La Xiaomi Pad 6 avec son écran 144Hz est aussi excellente.",
  },
  {
    question: "Les tablettes sont-elles disponibles au Maroc sur Jumia ?",
    answer:
      "Oui, toutes les tablettes de notre sélection sont disponibles sur Jumia Maroc avec garantie officielle et livraison partout au Maroc. Les prix peuvent varier, vérifiez les promos en cours.",
  },
];

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleure tablette au Maroc (2026) : Guide d'achat complet",
    description:
      "Comparatif des meilleures tablettes disponibles au Maroc avec prix en DH et avis détaillés.",
    url: "/comparatifs/meilleure-tablette-maroc",
    datePublished: "2026-02-21T14:00:00+01:00",
    dateModified: "2026-02-21T14:00:00+01:00",
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
          <Link href="/comparatifs" className="hover:text-emerald-600">
            Comparatifs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Tablettes</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              Comparatif
            </span>
            <time dateTime="2026-02-21">Mis à jour le 21 février 2026</time>
            <span>•</span>
            <span>9 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meilleure tablette au Maroc (2026) : Guide d&apos;achat complet
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Vous cherchez une tablette pour les études, le streaming ou le travail ? 
            Découvrez notre sélection des <strong>5 meilleures tablettes</strong> disponibles 
            au Maroc en 2026, avec des prix allant de 2299 DH à 4999 DH.
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
                1. Top 5 des meilleures tablettes au Maroc
              </a>
            </li>
            <li>
              <a href="#comparatif" className="hover:underline">
                2. Tableau comparatif complet
              </a>
            </li>
            <li>
              <a href="#usage" className="hover:underline">
                3. Quelle tablette pour quel usage ?
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:underline">
                4. Guide d&apos;achat : critères importants
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
                Apple iPad 10e génération
              </h2>
              <p className="text-gray-600 mt-2">
                La référence pour les études et la productivité. Écran Liquid Retina 10.9&quot;, 
                puce A14 Bionic ultra-rapide, iPadOS fluide et compatible Apple Pencil. 
                L&apos;investissement qui dure 5+ ans.
              </p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-emerald-700 mb-3">
                  4 999 DH
                </p>
                <MultiStoreButtons 
                  productName="Apple iPad 10" 
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-blue-900 mb-4">⚡ Résumé rapide</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>🏆 Meilleure globale :</strong> iPad 10 (4999 DH)</p>
              <p><strong>💰 Meilleur rapport Q/P :</strong> Xiaomi Pad 6 (3499 DH)</p>
            </div>
            <div>
              <p><strong>✏️ Meilleure pour notes :</strong> Tab S6 Lite (3299 DH)</p>
              <p><strong>🎬 Meilleure pour streaming :</strong> Lenovo Tab P11 OLED (2299 DH)</p>
            </div>
          </div>
        </section>

        {/* Top 5 Section */}
        <section id="top5" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top 5 des meilleures tablettes au Maroc
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
                        <span>🔋 {product.specs.batterie}</span>
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
            title="Comparatif tablettes Maroc 2026"
          />
        </section>

        {/* Usage Section */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quelle tablette pour quel usage ?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">📚 Pour les études</h3>
              <p className="text-gray-700 mb-4">
                La prise de notes, les PDF, les cours en ligne nécessitent une tablette 
                avec un bon stylet et une interface intuitive.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-blue-800">1er choix : iPad 10</p>
                  <p className="text-sm text-gray-600">
                    Avec Apple Pencil (vendu séparément), iPadOS est parfait pour les études. 
                    Apps comme Notability, GoodNotes sont excellentes.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-blue-800">Alternative : Tab S6 Lite</p>
                  <p className="text-sm text-gray-600">
                    Le S Pen est inclus dans le prix ! Samsung Notes est très bon pour 
                    prendre des notes manuscrites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🎬 Pour le streaming et divertissement</h3>
              <p className="text-gray-700 mb-4">
                Netflix, YouTube, films en famille : l&apos;écran et le son sont prioritaires.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-800">1er choix : Lenovo Tab P11 OLED</p>
                  <p className="text-sm text-gray-600">
                    Écran OLED 2K à 2299 DH ! Noirs parfaits, couleurs vibrantes. 
                    Le meilleur rapport qualité/prix pour le streaming.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-800">Alternative : Xiaomi Pad 6</p>
                  <p className="text-sm text-gray-600">
                    144Hz ultra-fluide, 4 haut-parleurs Dolby Atmos. Excellente pour 
                    les films et le gaming.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">👶 Pour les enfants</h3>
              <p className="text-gray-700 mb-4">
                Solidité, contrôle parental et prix accessible sont essentiels.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-green-800">Meilleur choix : Samsung Tab A9+</p>
                <p className="text-sm text-gray-600">
                  À 2799 DH, c&apos;est abordable si l&apos;enfant la casse. Samsung Kids Mode 
                  offre un contrôle parental complet. Compatible avec les coques 
                  renforcées pour enfants.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">💼 Pour le travail / productivité</h3>
              <p className="text-gray-700 mb-4">
                Multitâche, documents Office, réunions Zoom.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-800">1er choix : iPad 10</p>
                  <p className="text-sm text-gray-600">
                    iPadOS gère le multitâche mieux qu&apos;Android. Magic Keyboard Folio 
                    transforme l&apos;iPad en mini-laptop.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-800">Alternative : Xiaomi Pad 6</p>
                  <p className="text-sm text-gray-600">
                    Snapdragon 870 très puissant. Compatible avec clavier magnétique 
                    Xiaomi. Mode PC pour une vraie productivité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Guide d&apos;achat : les critères importants
          </h2>

          <div className="prose prose-emerald max-w-none">
            <h3>📱 La taille d&apos;écran</h3>
            <p>
              Toutes les tablettes de notre sélection ont un écran de 10-11 pouces, 
              idéal pour la lecture, les vidéos et la productivité. En dessous de 10&quot;, 
              c&apos;est trop petit pour être confortable.
            </p>

            <h3>🖥️ Le type d&apos;écran : LCD vs OLED</h3>
            <p>
              <strong>OLED</strong> (Lenovo Tab P11) : noirs parfaits, couleurs plus vives, 
              idéal pour les films. <strong>LCD</strong> (Samsung, Xiaomi) : moins cher, 
              très correct pour la plupart des usages. <strong>Liquid Retina</strong> (iPad) : 
              excellente qualité Apple, entre les deux.
            </p>

            <h3>⚡ Le processeur</h3>
            <p>
              Le <strong>Snapdragon 870</strong> (Xiaomi Pad 6) est le plus puissant. 
              L&apos;<strong>Apple A14</strong> (iPad) est très efficace malgré ses specs 
              sur le papier. Les processeurs Mediatek et Snapdragon 695/720G sont 
              corrects pour un usage standard.
            </p>

            <h3>✏️ Le stylet</h3>
            <p>
              Si la prise de notes est importante, choisissez :
            </p>
            <ul>
              <li><strong>Tab S6 Lite</strong> : S Pen inclus (économie de ~500 DH)</li>
              <li><strong>iPad 10</strong> : Apple Pencil 1 compatible (~900 DH en plus)</li>
              <li><strong>Xiaomi Pad 6</strong> : Xiaomi Smart Pen (~400 DH en plus)</li>
            </ul>

            <h3>💾 Le stockage</h3>
            <p>
              64 Go suffisent pour les études et le streaming. Si vous téléchargez 
              beaucoup de contenus ou jouez à des jeux, préférez 128 Go (Xiaomi Pad 6, 
              Lenovo Tab P11). Les tablettes Samsung et Lenovo ont un slot microSD 
              pour étendre le stockage.
            </p>

            <h3>🌐 WiFi ou 4G ?</h3>
            <p>
              La plupart des tablettes sont WiFi uniquement. Si vous avez besoin 
              d&apos;internet partout, vérifiez les versions 4G (généralement +500 DH). 
              Alternative : utilisez le partage de connexion de votre smartphone.
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
            Notre verdict final
          </h2>
          <p className="text-gray-600 mb-6">
            Pour la meilleure expérience globale, l&apos;<strong>iPad 10 à 4999 DH</strong> reste 
            la référence avec iPadOS et son écosystème. Budget plus serré ? La 
            <strong> Xiaomi Pad 6 à 3499 DH</strong> offre un rapport qualité-prix imbattable 
            avec son écran 144Hz et Snapdragon 870. Pour les étudiants qui prennent 
            des notes, la <strong>Tab S6 Lite avec S Pen inclus</strong> est parfaite.
          </p>
          <MultiStoreButtons 
            productName="Apple iPad 10" 
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
              href="/comparatifs/meilleur-pc-portable-etudiant-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Productivité →</span>
              <p className="text-gray-900 font-semibold">Meilleur PC portable pour étudiant</p>
            </Link>
            <Link 
              href="/comparatifs/meilleurs-ecouteurs-sans-fil-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Accessoires →</span>
              <p className="text-gray-900 font-semibold">Meilleurs écouteurs sans fil</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
