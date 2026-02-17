import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Où acheter son smartphone au Maroc ? Jumia, Marjane, boutiques",
  description:
    "Comparatif des différents vendeurs de smartphones au Maroc : Jumia, Marjane, Virgin, boutiques. Avantages, inconvénients, garantie, SAV.",
};

export default function GuideOuAcheterSmartphone() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-400">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-blue-400">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Où acheter son smartphone</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            Conseils • 8 min de lecture
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Où acheter son smartphone au Maroc ?
          </h1>
          
          <p className="text-lg text-slate-300">
            Jumia, Marjane, Virgin, boutiques locales... Quel est le meilleur endroit ?
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop"
              alt="Shopping"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Jumia Maroc</h2>
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛒</span>
                <h3 className="text-xl font-bold text-orange-700 m-0">Jumia</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Large choix de modèles</li>
                    <li>Livraison à domicile partout au Maroc</li>
                    <li>Paiement à la livraison possible</li>
                    <li>Promotions régulières (Black Friday, etc.)</li>
                    <li>Retour sous 7 jours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">❌ Inconvénients</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Délai de livraison variable (2-7 jours)</li>
                    <li>Attention aux vendeurs tiers</li>
                    <li>SAV parfois compliqué</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Marjane / Electroplanet</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏬</span>
                <h3 className="text-xl font-bold text-blue-700 m-0">Grandes surfaces</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Produit en main immédiatement</li>
                    <li>Garantie officielle</li>
                    <li>Facilités de paiement</li>
                    <li>SAV en magasin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">❌ Inconvénients</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Prix parfois plus élevés</li>
                    <li>Choix limité</li>
                    <li>Stock pas toujours disponible</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Virgin Megastore</h2>
            <div className="bg-red-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎵</span>
                <h3 className="text-xl font-bold text-red-700 m-0">Virgin</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Produits officiels garantis</li>
                    <li>Bons conseils des vendeurs</li>
                    <li>Environnement premium</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">❌ Inconvénients</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Prix plus élevés</li>
                    <li>Présent seulement dans les grandes villes</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Boutiques locales (Derb Ghallef, etc.)</h2>
            <div className="bg-yellow-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏪</span>
                <h3 className="text-xl font-bold text-yellow-700 m-0">Boutiques indépendantes</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">✅ Avantages</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Prix souvent les plus bas</li>
                    <li>Négociation possible</li>
                    <li>Produit en main de suite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">❌ Inconvénients</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Pas de garantie officielle</li>
                    <li>Risque de contrefaçon</li>
                    <li>Pas de SAV</li>
                    <li>Accessoires parfois manquants</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Notre recommandation</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
              <p className="text-slate-700 m-0">
                <strong>Pour la plupart des gens :</strong> Jumia reste le meilleur compromis entre prix et garantie. 
                Assurez-vous d'acheter auprès de "Jumia" directement (pas un vendeur tiers) pour bénéficier de la garantie complète.
                Pour les produits premium (iPhone, Samsung Galaxy S), préférez Marjane ou Virgin pour le SAV officiel.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Trouvez le meilleur prix</h3>
              <p className="mb-4 opacity-90">Nos comparatifs incluent les liens vers Jumia avec les meilleurs prix</p>
              <Link
                href="/comparatifs/smartphones"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Voir les comparatifs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
