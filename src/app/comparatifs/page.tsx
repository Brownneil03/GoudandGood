import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tous les comparatifs Tech au Maroc – Goud&Good",
  description:
    "Parcourez tous nos comparatifs tech : smartphones, PC portables, accessoires. Trouvez le meilleur produit selon votre budget au Maroc.",
};

const categories = [
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Comparatifs et guides d'achat smartphones. Trouvez le téléphone parfait selon votre budget.",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop",
    count: 5,
    color: "from-emerald-500 to-teal-600",
    hoverColor: "hover:border-emerald-300",
  },
  {
    name: "PC Portables",
    slug: "pc-portables",
    description: "Laptops pour étudiants, professionnels et gamers. Des recommandations pour tous les budgets.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    count: 3,
    color: "from-blue-500 to-cyan-600",
    hoverColor: "hover:border-blue-300",
  },
  {
    name: "Accessoires",
    slug: "accessoires",
    description: "Écouteurs, chargeurs, power banks et plus. Les meilleurs accessoires pour votre tech.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop",
    count: 3,
    color: "from-purple-500 to-pink-600",
    hoverColor: "hover:border-purple-300",
  },
];

export default function ComparatifsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Comparatifs</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              11+ comparatifs disponibles
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tous nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Comparatifs
              </span>
            </h1>
            
            <p className="text-xl text-slate-300">
              Explorez nos comparatifs détaillés pour trouver le meilleur produit
              tech selon votre budget au Maroc.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/comparatifs/${category.slug}`}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 ${category.hoverColor} hover:shadow-2xl transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full">
                    {category.count} articles
                  </span>
                </div>
                
                {/* Title on image */}
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-4 line-clamp-2">{category.description}</p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white font-medium rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                  Explorer
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">11+</div>
              <div className="text-slate-400">Comparatifs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-400">Produits testés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-400">Indépendant</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">🇲🇦</div>
              <div className="text-slate-400">Prix en DH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
