import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comment choisir son smartphone au Maroc – Guide complet 2025",
  description:
    "Tous les critères à considérer avant d'acheter un smartphone au Maroc : écran, processeur, RAM, batterie, appareil photo. Guide complet pour faire le bon choix.",
};

export default function GuideChoisirSmartphone() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-emerald-400">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Comment choisir son smartphone</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Guide complet • 15 min de lecture
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comment choisir son smartphone au Maroc
          </h1>
          
          <p className="text-lg text-slate-300">
            Tous les critères à considérer avant d'acheter : écran, processeur, RAM, batterie, appareil photo...
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop"
              alt="Smartphones"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Définissez votre budget</h2>
            <p className="text-slate-600 mb-6">
              Avant tout, fixez-vous un budget réaliste. Au Maroc, on peut distinguer plusieurs gammes :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-50 rounded-xl p-4">
                <h4 className="font-bold text-emerald-700">Moins de 1500 DH</h4>
                <p className="text-sm text-slate-600">Entrée de gamme, usage basique</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-bold text-blue-700">1500 - 2500 DH</h4>
                <p className="text-sm text-slate-600">Milieu de gamme, bon rapport qualité/prix</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-bold text-purple-700">2500 - 4000 DH</h4>
                <p className="text-sm text-slate-600">Haut de gamme accessible</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <h4 className="font-bold text-orange-700">Plus de 4000 DH</h4>
                <p className="text-sm text-slate-600">Premium et flagship</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. L'écran : taille et qualité</h2>
            <p className="text-slate-600 mb-4">
              L'écran est ce que vous regardez le plus. Privilégiez :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li><strong>AMOLED</strong> pour des noirs profonds et des couleurs vives</li>
              <li><strong>90Hz ou 120Hz</strong> pour une navigation fluide</li>
              <li><strong>6,4" à 6,7"</strong> est le standard actuel</li>
              <li><strong>Full HD+ (1080p)</strong> minimum pour une bonne netteté</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Le processeur (SoC)</h2>
            <p className="text-slate-600 mb-4">
              Le processeur détermine la puissance de votre smartphone :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li><strong>Snapdragon série 6/7</strong> ou <strong>MediaTek Dimensity</strong> : excellent milieu de gamme</li>
              <li><strong>Snapdragon série 8</strong> : haut de gamme, pour les gamers</li>
              <li>Évitez les processeurs trop anciens (Helio G80, Snapdragon 4xx)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. La RAM et le stockage</h2>
            <p className="text-slate-600 mb-4">
              Pour une utilisation fluide en 2025 :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li><strong>6 Go de RAM minimum</strong>, 8 Go recommandé</li>
              <li><strong>128 Go de stockage minimum</strong></li>
              <li>Vérifiez si le téléphone a un slot microSD pour extension</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. La batterie</h2>
            <p className="text-slate-600 mb-4">
              Une bonne autonomie est essentielle :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li><strong>4500 mAh minimum</strong> pour tenir une journée</li>
              <li><strong>Charge rapide 33W+</strong> très appréciable</li>
              <li>La charge sans fil est un bonus agréable</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. L'appareil photo</h2>
            <p className="text-slate-600 mb-4">
              Ne vous fiez pas qu'aux mégapixels :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Un bon <strong>capteur principal 50MP</strong> suffit largement</li>
              <li>L'<strong>ultra grand-angle</strong> est très utile</li>
              <li>Regardez les <strong>tests photos en conditions réelles</strong></li>
              <li>Le mode nuit fait souvent la différence</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Les marques recommandées au Maroc</h2>
            <p className="text-slate-600 mb-6">
              Voici les marques avec un bon SAV au Maroc :
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl mb-2">🇰🇷</div>
                <h4 className="font-bold">Samsung</h4>
                <p className="text-sm text-slate-500">SAV officiel, large gamme</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl mb-2">🇨🇳</div>
                <h4 className="font-bold">Xiaomi/Redmi</h4>
                <p className="text-sm text-slate-500">Excellent rapport qualité/prix</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl mb-2">🇨🇳</div>
                <h4 className="font-bold">Realme</h4>
                <p className="text-sm text-slate-500">Design jeune, bon prix</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Prêt à choisir ?</h3>
              <p className="mb-4 opacity-90">Consultez nos comparatifs pour trouver le smartphone idéal</p>
              <Link
                href="/comparatifs/smartphones"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Voir les comparatifs smartphones
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
