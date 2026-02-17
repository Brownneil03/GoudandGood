import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Les erreurs à éviter avant d'acheter un PC au Maroc",
  description:
    "Ne vous faites pas avoir ! Découvrez les pièges courants lors de l'achat d'un PC portable au Maroc et comment les éviter.",
};

export default function GuideErreursPC() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-purple-400">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-purple-400">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Erreurs à éviter</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
            PC Portables • 10 min de lecture
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Les erreurs à éviter avant d'acheter un PC au Maroc
          </h1>
          
          <p className="text-lg text-slate-300">
            Ne vous faites pas avoir ! Voici les pièges courants et comment les éviter.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=600&fit=crop"
              alt="PC Portable"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-red-700 m-0 mb-2">⚠️ Attention</h3>
              <p className="text-slate-700 m-0">
                Ces erreurs peuvent vous coûter cher ! Lisez attentivement avant d'acheter.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #1 : Se fier uniquement au prix</h2>
            <p className="text-slate-600 mb-4">
              Un PC à 3000 DH peut être une bonne affaire... ou une très mauvaise. Le prix ne dit pas tout :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Vérifiez le processeur (évitez les Celeron et Pentium)</li>
              <li>4 Go de RAM en 2025, c'est insuffisant</li>
              <li>Un disque HDD de 500 Go est lent, préférez un SSD</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #2 : Ignorer le type de stockage</h2>
            <p className="text-slate-600 mb-4">
              <strong>La différence entre HDD et SSD est ÉNORME :</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 rounded-xl p-4">
                <h4 className="font-bold text-red-700">HDD (à éviter)</h4>
                <p className="text-sm text-slate-600">Lent, bruyant, fragile. Windows met 2-3 minutes à démarrer.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-bold text-green-700">SSD (recommandé)</h4>
                <p className="text-sm text-slate-600">Rapide, silencieux, fiable. Démarrage en 15-20 secondes.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #3 : Acheter sans garantie</h2>
            <p className="text-slate-600 mb-6">
              Les PC vendus sans garantie à Derb Ghallef peuvent sembler attractifs, mais :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Pas de recours en cas de panne</li>
              <li>Batterie souvent usée (laptops reconditionnés)</li>
              <li>Windows peut être piraté (risques de virus)</li>
              <li>Pièces parfois changées ou manquantes</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #4 : Ne pas vérifier l'écran</h2>
            <p className="text-slate-600 mb-6">
              Beaucoup de PC au Maroc ont des écrans de mauvaise qualité :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li><strong>Résolution HD (1366x768)</strong> : à éviter, très pixelisé</li>
              <li><strong>Résolution Full HD (1920x1080)</strong> : minimum recommandé</li>
              <li>Vérifiez la luminosité si vous travaillez dehors</li>
              <li>Les dalles TN ont des angles de vision limités (préférez IPS)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #5 : Oublier l'autonomie</h2>
            <p className="text-slate-600 mb-6">
              Si vous êtes étudiant ou mobile, l'autonomie est cruciale :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Visez minimum 6 heures d'autonomie réelle</li>
              <li>Les batteries de PC reconditionnés sont souvent faibles</li>
              <li>Les PC gamers ont généralement une mauvaise autonomie</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ Erreur #6 : Choisir un clavier QWERTY</h2>
            <p className="text-slate-600 mb-6">
              Si vous écrivez en français, un clavier AZERTY est indispensable pour les accents.
              Vérifiez avant d'acheter !
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">✅ Nos recommandations</h2>
            <div className="bg-emerald-50 rounded-xl p-6 mb-6">
              <p className="text-slate-700 mb-4">
                <strong>Le PC portable idéal en 2025 au Maroc :</strong>
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>✅ Processeur Intel Core i5 ou AMD Ryzen 5</li>
                <li>✅ 8 Go de RAM minimum</li>
                <li>✅ SSD 256 Go ou 512 Go</li>
                <li>✅ Écran Full HD (1920x1080)</li>
                <li>✅ Garantie 1 an minimum</li>
                <li>✅ Budget : 4500-7000 DH</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Trouvez le bon PC</h3>
              <p className="mb-4 opacity-90">Consultez nos comparatifs avec des PC vérifiés et garantis</p>
              <Link
                href="/comparatifs/pc-portables"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Voir les comparatifs PC
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
