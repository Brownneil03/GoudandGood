import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides d'achat Tech au Maroc – Conseils et astuces",
  description:
    "Guides pratiques pour vous aider à choisir vos produits tech au Maroc. Conseils d'experts, comparatifs et astuces pour faire le bon choix.",
};

const guides = [
  {
    title: "Comment choisir son smartphone au Maroc – Guide complet",
    slug: "comment-choisir-smartphone-maroc",
    excerpt:
      "Tous les critères à considérer avant d'acheter un smartphone : écran, processeur, RAM, batterie, appareil photo...",
    category: "Smartphones",
    icon: "📱",
    readTime: "15 min",
  },
  {
    title: "Où acheter son smartphone au Maroc ? (Jumia, Marjane, boutiques)",
    slug: "ou-acheter-smartphone-maroc",
    excerpt:
      "Comparatif des différents vendeurs au Maroc : avantages, inconvénients, garantie, SAV...",
    category: "Conseils",
    icon: "🛒",
    readTime: "8 min",
  },
  {
    title: "Les erreurs à éviter avant d'acheter un PC au Maroc",
    slug: "erreurs-eviter-achat-pc-maroc",
    excerpt:
      "Ne vous faites pas avoir ! Découvrez les pièges courants et comment les éviter.",
    category: "PC Portables",
    icon: "💻",
    readTime: "10 min",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-emerald-600">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Guides d'achat</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Guides d'achat Tech
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Vous ne savez pas quoi choisir ? Nos guides pratiques vous expliquent
          tout ce qu'il faut savoir avant d'acheter.
        </p>
      </header>

      {/* Guides Grid */}
      <div className="grid gap-8">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-full md:w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">{guide.icon}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">
                    Guide
                  </span>
                  <span>{guide.readTime} de lecture</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="hover:text-emerald-600"
                  >
                    {guide.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4">{guide.excerpt}</p>

                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Lire le guide
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
