import Image from "next/image";
import Link from "next/link";

// Données de démonstration avec vraies images
const featuredComparatifs = [
  {
    title: "Meilleur smartphone moins de 2000 DH au Maroc (2026)",
    slug: "meilleur-smartphone-moins-2000-dh-maroc",
    excerpt:
      "Découvrez notre sélection des meilleurs smartphones à moins de 2000 DH. Xiaomi, Samsung, Realme : on vous dit tout !",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    date: "15 février 2026",
    readTime: "8 min",
  },
  {
    title: "Meilleur PC portable pour étudiant au Maroc",
    slug: "meilleur-pc-portable-etudiant-maroc",
    excerpt:
      "Guide complet pour choisir le PC portable idéal pour vos études sans vous ruiner.",
    category: "PC Portables",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    date: "12 février 2026",
    readTime: "10 min",
  },
  {
    title: "Meilleurs écouteurs sans fil au Maroc",
    slug: "meilleurs-ecouteurs-sans-fil-maroc",
    excerpt:
      "Comparatif des meilleurs écouteurs Bluetooth disponibles au Maroc à tous les prix.",
    category: "Accessoires",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    date: "10 février 2026",
    readTime: "7 min",
  },
];

const categories = [
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Trouvez le smartphone parfait selon votre budget",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
    count: 15,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "PC Portables",
    slug: "pc-portables",
    description: "Étudiants, pros ou gamers : le laptop qu'il vous faut",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80",
    count: 10,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Accessoires",
    slug: "accessoires",
    description: "Écouteurs, chargeurs, coques et bien plus",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    count: 8,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  { value: "50+", label: "Produits testés" },
  { value: "30+", label: "Comparatifs" },
  { value: "100%", label: "Prix en DH" },
  { value: "0", label: "Pub mensongère" },
];

const trustFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tests réels",
    description: "Chaque produit est analysé en détail avec ses vrais points forts et faibles",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Prix en Dirhams",
    description: "Tous les prix sont en DH avec des liens vers les vendeurs marocains",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Mis à jour",
    description: "Prix et disponibilité vérifiés chaque semaine pour vous",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "100% transparent",
    description: "On vous dit quand on gagne une commission, jamais d'arnaque",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Modern with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-[128px] opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500 rounded-full filter blur-[128px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-sm font-medium">Guide d'achat #1 au Maroc</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Trouvez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">meilleur produit tech</span> au Maroc
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Comparatifs honnêtes, prix en Dirhams, recommandations personnalisées. 
                <span className="text-white font-semibold"> Goud&Good</span> vous aide à faire le bon choix.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/comparatifs/smartphones"
                  className="btn-primary text-lg"
                >
                  Voir les comparatifs
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  Guides d'achat
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Phone mockup */}
                <div className="relative z-10 mx-auto w-72 animate-float">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80"
                        alt="Smartphone"
                        width={280}
                        height={560}
                        className="w-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -left-8 top-20 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-lg">📱</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Xiaomi Redmi Note 13</div>
                      <div className="text-xs text-emerald-400">1 899 DH</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-4 bottom-32 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white text-sm font-medium">4.8/5</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">Meilleur rapport qualité/prix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge badge-primary mb-4">Catégories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explorez nos guides
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Des comparatifs détaillés pour chaque catégorie de produits tech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/comparatifs/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`} />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-sm font-medium opacity-90 mb-2">
                    {category.count} articles
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                    Voir les comparatifs
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <span className="badge badge-accent mb-4">Populaires</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Comparatifs récents
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Les guides les plus consultés par nos lecteurs ce mois-ci
              </p>
            </div>
            <Link
              href="/comparatifs"
              className="mt-6 sm:mt-0 text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-2"
            >
              Voir tous les articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredComparatifs.map((article, index) => (
              <article
                key={article.slug}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-primary">{article.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-slate-400 rounded-full" />
                    <span>{article.readTime} de lecture</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    <Link href={`/comparatifs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/comparatifs/${article.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Lire le comparatif
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge !bg-emerald-500/20 !text-emerald-400 mb-4">Notre engagement</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Goud&Good, c'est le guide tech 100% honnête pour les Marocains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Vous ne savez pas quoi choisir ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Consultez nos guides d'achat pour comprendre quel produit correspond 
            à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Voir les guides d'achat
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/comparatifs"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Parcourir les comparatifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
