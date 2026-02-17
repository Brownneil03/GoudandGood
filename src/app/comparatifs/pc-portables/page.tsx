import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comparatifs PC Portables au Maroc – Meilleurs laptops 2025",
  description:
    "Trouvez le PC portable idéal au Maroc selon votre budget et vos besoins. Étudiants, professionnels, gamers : comparatifs et guides.",
};

const articles = [
  {
    title: "Meilleur PC portable pour étudiant au Maroc (2025)",
    slug: "meilleur-pc-portable-etudiant-maroc",
    excerpt:
      "Le guide complet pour choisir un laptop adapté à vos études sans exploser votre budget.",
    date: "2025-01-12",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    badge: "Étudiant",
  },
  {
    title: "Meilleur PC portable gamer pas cher au Maroc",
    slug: "meilleur-pc-portable-gamer-pas-cher-maroc",
    excerpt:
      "Jouer sans se ruiner : notre sélection des meilleurs laptops gaming à prix abordable.",
    date: "2025-01-08",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
    badge: "Gaming",
  },
  {
    title: "PC portable HP vs Lenovo – Lequel choisir au Maroc ?",
    slug: "hp-vs-lenovo-pc-portable-maroc",
    excerpt:
      "Comparatif des deux marques les plus vendues au Maroc. Prix, qualité, SAV...",
    date: "2025-01-01",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
    badge: "VS",
  },
];

export default function PCPortablesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            <span className="text-white">PC Portables</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {articles.length} comparatifs disponibles
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comparatifs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  PC Portables
                </span>{" "}
                au Maroc
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl">
                Que vous soyez étudiant, professionnel ou gamer, trouvez le PC
                portable parfait pour vos besoins et votre budget.
              </p>
            </div>
            
            <div className="relative w-64 h-64">
              <Image
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop"
                alt="PC Portables"
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
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300"
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
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
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

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/comparatifs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 mb-6">{article.excerpt}</p>

                  <Link
                    href={`/comparatifs/${article.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
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
