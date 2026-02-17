import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comparatifs Accessoires Tech au Maroc – Écouteurs, chargeurs, coques",
  description:
    "Trouvez les meilleurs accessoires tech au Maroc : écouteurs sans fil, chargeurs rapides, coques, power banks. Comparatifs et avis.",
};

const articles = [
  {
    title: "Meilleurs écouteurs sans fil au Maroc – Guide 2025",
    slug: "meilleurs-ecouteurs-sans-fil-maroc",
    excerpt:
      "De 200 DH à 2000 DH, trouvez les écouteurs Bluetooth parfaits pour votre usage.",
    date: "2025-01-14",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    badge: "Audio",
  },
  {
    title: "Meilleur power bank au Maroc – Comparatif 2025",
    slug: "meilleur-power-bank-maroc",
    excerpt:
      "Ne tombez plus jamais en panne de batterie. Notre sélection des meilleures batteries externes.",
    date: "2025-01-05",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
    badge: "Batterie",
  },
  {
    title: "Meilleur chargeur rapide au Maroc",
    slug: "meilleur-chargeur-rapide-maroc",
    excerpt:
      "Chargez votre téléphone en moins d'une heure. Guide des chargeurs compatibles.",
    date: "2024-12-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop",
    badge: "Charge",
  },
];

export default function AccessoiresPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/comparatifs" className="hover:text-purple-400 transition-colors">
              Comparatifs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Accessoires</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                {articles.length} comparatifs disponibles
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comparatifs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Accessoires
                </span>{" "}
                Tech
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl">
                Écouteurs sans fil, chargeurs, power banks... Trouvez les
                meilleurs accessoires pour compléter vos appareils tech.
              </p>
            </div>
            
            <div className="relative w-64 h-64">
              <Image
                src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop"
                alt="Accessoires Tech"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
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

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    <Link href={`/comparatifs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 mb-6">{article.excerpt}</p>

                  <Link
                    href={`/comparatifs/${article.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
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
