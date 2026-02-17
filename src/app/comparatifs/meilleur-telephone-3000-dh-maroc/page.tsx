import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meilleur téléphone à 3000 DH au Maroc – Comparatif 2025",
  description:
    "Le budget idéal pour un bon smartphone. Découvrez nos recommandations des meilleurs téléphones autour de 3000 DH disponibles au Maroc : Xiaomi, Samsung, Realme.",
  keywords: [
    "meilleur téléphone 3000 dh maroc",
    "smartphone 3000 dh",
    "xiaomi redmi note 13 pro maroc",
    "samsung galaxy a35 maroc",
    "realme 12 pro maroc",
    "meilleur smartphone milieu de gamme maroc",
  ],
  alternates: {
    canonical: "/comparatifs/meilleur-telephone-3000-dh-maroc",
  },
};

const faqs = [
  {
    question: "Quel est le meilleur téléphone à 3000 DH au Maroc ?",
    answer: "Le Xiaomi Redmi Note 13 Pro offre le meilleur rapport qualité/prix avec son écran AMOLED 120Hz, sa caméra 200MP et sa charge rapide 67W, pour environ 2899 DH."
  },
  {
    question: "Samsung ou Xiaomi à 3000 DH ?",
    answer: "Pour ce budget, Xiaomi offre de meilleures specs (écran, caméra, charge). Samsung propose une meilleure fiabilité logicielle avec 5 ans de mises à jour via le Galaxy A35."
  },
  {
    question: "Où acheter un smartphone à 3000 DH au Maroc ?",
    answer: "Jumia Maroc, Amazon et AliExpress proposent les meilleurs prix. Comparez les offres sur les trois plateformes pour trouver le meilleur deal."
  },
];

const products = [
  {
    name: "Xiaomi Redmi Note 13 Pro",
    price: "2899 DH",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    pros: ["Écran AMOLED 120Hz", "Caméra 200MP", "Charge 67W", "Design premium"],
    cons: ["Pas de prise jack", "MIUI avec pubs"],
    verdict: "Meilleur choix",
    affiliateUrl: "https://www.jumia.ma/catalog/?q=xiaomi+redmi+note+13+pro"
  },
  {
    name: "Samsung Galaxy A35",
    price: "3199 DH",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    pros: ["One UI fluide", "5 ans de mises à jour", "Étanche IP67", "SAV Samsung Maroc"],
    cons: ["Charge lente 25W", "Plastic au dos"],
    verdict: "Fiabilité Samsung",
    affiliateUrl: "https://www.jumia.ma/catalog/?q=samsung+galaxy+a35"
  },
  {
    name: "Realme 12 Pro",
    price: "2799 DH",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    pros: ["Design luxueux", "Écran incurvé", "Charge 67W", "Bonnes performances"],
    cons: ["Marque moins connue", "MAJ moins fréquentes"],
    verdict: "Meilleur rapport qualité/prix",
    affiliateUrl: "https://www.jumia.ma/catalog/?q=realme+12+pro"
  },
];

export default function ComparatifPage() {
  const articleSchema = generateArticleSchema({
    title: "Meilleur téléphone à 3000 DH au Maroc – Comparatif 2025",
    description: "Le budget idéal pour un bon smartphone. Découvrez nos recommandations des meilleurs téléphones autour de 3000 DH disponibles au Maroc.",
    url: "/comparatifs/meilleur-telephone-3000-dh-maroc",
    datePublished: "2025-01-15",
    dateModified: "2025-02-17",
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-slate-50">
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
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/comparatifs/smartphones" className="hover:text-emerald-400">Smartphones</Link>
            <span className="mx-2">/</span>
            <span className="text-white">3000 DH</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Comparatif • Mis à jour janvier 2025
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meilleur téléphone à 3000 DH au Maroc
          </h1>
          
          <p className="text-lg text-slate-300">
            Le budget idéal pour un excellent smartphone. Voici nos recommandations.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          
          <p className="text-lg text-slate-600 mb-8">
            Avec un budget de 3000 DH, vous pouvez obtenir un smartphone milieu de gamme offrant 
            d'excellentes performances, un bel écran et une bonne autonomie. Voici notre sélection.
          </p>

          {/* Products */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <div key={product.name} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                    {index === 0 && (
                      <div className="absolute top-2 left-2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        #1 Recommandé
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                      <span className="text-xl font-bold text-emerald-600">{product.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-slate-500">{product.rating}/5</span>
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">{product.verdict}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-green-600 mb-2">✅ Points forts</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {product.pros.map(pro => <li key={pro}>• {pro}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-red-600 mb-2">❌ Points faibles</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {product.cons.map(con => <li key={con}>• {con}</li>)}
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

          {/* Verdict */}
          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">Notre verdict</h3>
            <p className="text-slate-700">
              Pour 3000 DH au Maroc, le <strong>Xiaomi Redmi Note 13 Pro</strong> est notre recommandation 
              principale grâce à son écran AMOLED, sa caméra 200MP et sa charge rapide. Si vous préférez 
              la fiabilité Samsung avec 5 ans de mises à jour, le <strong>Galaxy A35</strong> est excellent.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-xl">
                  <summary className="cursor-pointer p-4 font-medium text-slate-900 flex items-center justify-between">
                    {faq.question}
                    <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
