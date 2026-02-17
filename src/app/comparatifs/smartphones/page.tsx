import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comparatifs Smartphones au Maroc – Meilleurs téléphones 2025",
  description:
    "Découvrez les meilleurs smartphones au Maroc selon votre budget. Comparatifs détaillés, prix en DH, disponibilité vérifiée.",
  keywords: [
    "smartphone maroc",
    "meilleur téléphone maroc",
    "comparatif smartphone",
    "prix smartphone maroc",
  ],
};

// Articles de la catégorie Smartphones
const articles = [
  {
    title: "Meilleur smartphone moins de 2000 DH au Maroc (2025)",
    slug: "meilleur-smartphone-moins-2000-dh-maroc",
    excerpt:
      "Notre sélection des meilleurs smartphones à petit prix. Xiaomi, Realme, Samsung : lequel choisir ?",
    date: "2025-01-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    badge: "Budget",
  },
  {
    title: "Meilleur téléphone à 3000 DH au Maroc – Comparatif 2025",
    slug: "meilleur-telephone-3000-dh-maroc",
    excerpt:
      "Le budget idéal pour un bon smartphone. Découvrez nos recommandations dans cette gamme de prix.",
    date: "2025-01-10",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
    badge: "Populaire",
  },
  {
    title: "Meilleur smartphone pour photos au Maroc",
    slug: "meilleur-smartphone-photo-maroc",
    excerpt:
      "Vous aimez la photo ? Voici les smartphones avec les meilleurs appareils photo disponibles au Maroc.",
    date: "2025-01-05",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    badge: "Photo",
  },
  {
    title: "Samsung vs Xiaomi : Quelle marque choisir au Maroc ?",
    slug: "samsung-vs-xiaomi-maroc",
    excerpt:
      "Comparatif complet des deux marques les plus populaires au Maroc. Prix, qualité, SAV...",
    date: "2025-01-01",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    badge: "VS",
  },
  {
    title: "Meilleur smartphone Xiaomi à acheter au Maroc (2025)",
    slug: "meilleur-xiaomi-maroc",
    excerpt:
      "Redmi, POCO, Xiaomi... Comment s'y retrouver ? Notre guide pour choisir le bon modèle.",
    date: "2024-12-25",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop",
    badge: "Xiaomi",
  },
];

const budgetRanges = [
  { label: "Moins de 1500 DH", color: "from-blue-500 to-blue-600" },
  { label: "1500-2000 DH", color: "from-emerald-500 to-teal-600" },
  { label: "2000-3000 DH", color: "from-purple-500 to-purple-600" },
  { label: "3000-5000 DH", color: "from-orange-500 to-orange-600" },
  { label: "Plus de 5000 DH", color: "from-rose-500 to-rose-600" },
];

export default function SmartphonesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/comparatifs" className="hover:text-emerald-400 transition-colors">
              Comparatifs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Smartphones</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {articles.length} comparatifs disponibles
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comparatifs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Smartphones
                </span>{" "}
                au Maroc
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl">
                Trouvez le smartphone idéal selon votre budget. Nos comparatifs
                détaillés vous aident à faire le bon choix avec des prix en Dirhams.
              </p>
            </div>
            
            <div className="relative w-64 h-64">
              <Image
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
                alt="Smartphones"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Budget Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Quel est votre budget ?
          </h2>
          <div className="flex flex-wrap gap-3">
            {budgetRanges.map((budget) => (
              <button
                key={budget.label}
                className={`px-5 py-3 bg-gradient-to-r ${budget.color} text-white rounded-xl font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                {budget.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                      {article.badge}
                    </span>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                        Nouveau
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <time dateTime={article.date} className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(article.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    <Link href={`/comparatifs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 mb-6 line-clamp-2">{article.excerpt}</p>

                  <Link
                    href={`/comparatifs/${article.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Lire le comparatif
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
