import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Realme vs Xiaomi : Quelle marque choisir au Maroc ? (2026)",
  description:
    "Comparatif complet Realme vs Xiaomi au Maroc. Prix, qualité, SAV, performances : on vous aide à choisir la meilleure marque chinoise pour votre budget.",
  keywords: [
    "realme vs xiaomi",
    "realme maroc",
    "xiaomi maroc",
    "realme ou xiaomi",
    "meilleur smartphone chinois maroc",
    "redmi vs realme maroc",
    "poco vs realme maroc",
  ],
  alternates: {
    canonical: "/comparatifs/realme-vs-xiaomi-maroc",
  },
};

const faqs = [
  {
    question: "Realme ou Xiaomi : quelle marque est meilleure au Maroc ?",
    answer:
      "Xiaomi est meilleure grâce à sa présence plus établie au Maroc (SAV, boutiques), sa gamme plus large et ses mises à jour plus longues. Realme offre parfois un meilleur rapport specs/prix mais avec moins de support local.",
  },
  {
    question: "Realme est-il fiable au Maroc ?",
    answer:
      "Oui, Realme est une marque fiable (filiale de BBK Electronics, comme OPPO). Les smartphones sont de bonne qualité. Le seul inconvénient est le SAV limité au Maroc comparé à Xiaomi qui a des centres de service officiels.",
  },
  {
    question: "Où acheter Realme et Xiaomi au Maroc ?",
    answer:
      "Jumia Maroc est la meilleure option avec garantie officielle pour les deux marques. Xiaomi a aussi des Mi Stores officiels à Casablanca et Rabat. Pour Realme, préférez Jumia ou les revendeurs agréés.",
  },
  {
    question: "POCO fait partie de Xiaomi ?",
    answer:
      "Oui, POCO est une sous-marque de Xiaomi axée sur le rapport qualité-prix et le gaming. Les smartphones POCO utilisent l'écosystème Xiaomi (MIUI, mises à jour) avec des prix plus agressifs.",
  },
  {
    question: "Quelle marque a les meilleures photos : Realme ou Xiaomi ?",
    answer:
      "C'est très proche. Xiaomi excelle en vidéo et mode nuit (partenariat Leica sur les flagships). Realme est souvent meilleur en selfies grâce à ses algorithmes de beauté. Pour le même budget, les résultats sont similaires.",
  },
];

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: "Realme vs Xiaomi : Quelle marque choisir au Maroc ? (2026)",
    description:
      "Comparatif complet entre Realme et Xiaomi pour le marché marocain.",
    url: "/comparatifs/realme-vs-xiaomi-maroc",
    datePublished: "2026-02-21T15:00:00+01:00",
    dateModified: "2026-02-21T15:00:00+01:00",
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-emerald-600">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/comparatifs/smartphones" className="hover:text-emerald-600">
            Smartphones
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Realme vs Xiaomi</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
              Versus
            </span>
            <time dateTime="2026-02-21">Mis à jour le 21 février 2026</time>
            <span>•</span>
            <span>12 min de lecture</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Realme vs Xiaomi : Quelle marque choisir au Maroc ? (2026)
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            <strong>Realme</strong> et <strong>Xiaomi</strong> dominent le marché des smartphones 
            abordables au Maroc. Mais laquelle choisir ? On compare tout : prix, qualité, 
            performances, SAV, et disponibilité au Maroc pour vous aider à trancher.
          </p>
        </header>

        {/* Quick Verdict */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-orange-900 mb-4">🏆 Verdict rapide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-orange-800 mb-2">Choisissez Xiaomi si :</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Vous voulez un SAV accessible au Maroc</li>
                <li>✓ Vous préférez des mises à jour plus longues</li>
                <li>✓ Vous voulez une large gamme de produits</li>
                <li>✓ L&apos;écosystème (montres, écouteurs) vous intéresse</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-800 mb-2">Choisissez Realme si :</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Vous cherchez les meilleures specs au prix le plus bas</li>
                <li>✓ Vous privilégiez le design et les finitions</li>
                <li>✓ La charge rapide est prioritaire pour vous</li>
                <li>✓ Vous n&apos;avez pas besoin de SAV local</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-4">
            📋 Dans cet article
          </h2>
          <ul className="space-y-2 text-emerald-600">
            <li>
              <a href="#presentation" className="hover:underline">
                1. Présentation des marques
              </a>
            </li>
            <li>
              <a href="#comparatif-prix" className="hover:underline">
                2. Comparatif des prix au Maroc
              </a>
            </li>
            <li>
              <a href="#qualite" className="hover:underline">
                3. Qualité et performances
              </a>
            </li>
            <li>
              <a href="#sav" className="hover:underline">
                4. SAV et disponibilité au Maroc
              </a>
            </li>
            <li>
              <a href="#recommandations" className="hover:underline">
                5. Nos recommandations par budget
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. Questions fréquentes
              </a>
            </li>
          </ul>
        </nav>

        {/* Presentation Section */}
        <section id="presentation" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Présentation des marques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔶</span>
                <h3 className="text-xl font-bold text-orange-800">Xiaomi</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Fondée :</strong> 2010 à Pékin, Chine</li>
                <li><strong>Présence Maroc :</strong> Très établie (Mi Stores officiels)</li>
                <li><strong>Gammes :</strong> Xiaomi, Redmi, POCO</li>
                <li><strong>Position mondiale :</strong> #3 (après Apple et Samsung)</li>
                <li><strong>Philosophie :</strong> Innovation à prix maîtrisé</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-orange-700">
                  <strong>Fun fact :</strong> Xiaomi signifie &quot;petit riz&quot; en chinois. 
                  L&apos;entreprise fabrique aussi des trottinettes, aspirateurs et même du riz !
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🟡</span>
                <h3 className="text-xl font-bold text-yellow-800">Realme</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Fondée :</strong> 2018 (spin-off d&apos;OPPO)</li>
                <li><strong>Présence Maroc :</strong> Via distributeurs (pas de boutiques)</li>
                <li><strong>Gammes :</strong> Realme C, Realme Number, GT</li>
                <li><strong>Position mondiale :</strong> Top 6</li>
                <li><strong>Philosophie :</strong> &quot;Dare to Leap&quot; - oser innover</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-yellow-700">
                  <strong>Fun fact :</strong> Realme appartient à BBK Electronics, 
                  qui possède aussi OPPO, Vivo et OnePlus !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prix Section */}
        <section id="comparatif-prix" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comparatif des prix au Maroc (2026)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-900">Budget</th>
                  <th className="p-4 text-left font-semibold text-orange-700">Xiaomi</th>
                  <th className="p-4 text-left font-semibold text-yellow-700">Realme</th>
                  <th className="p-4 text-left font-semibold text-gray-700">Gagnant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-medium">1000-1500 DH</td>
                  <td className="p-4">Redmi 13C (1299 DH)</td>
                  <td className="p-4">Realme C67 (1449 DH)</td>
                  <td className="p-4"><span className="text-orange-600 font-bold">Xiaomi</span> - meilleur prix</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">1500-2000 DH</td>
                  <td className="p-4">Redmi Note 13 (1899 DH)</td>
                  <td className="p-4">Realme 11 (1799 DH)</td>
                  <td className="p-4"><span className="text-yellow-600 font-bold">Realme</span> - meilleur rapport Q/P</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">2000-3000 DH</td>
                  <td className="p-4">Redmi Note 13 Pro (2699 DH)</td>
                  <td className="p-4">Realme 11 Pro (2899 DH)</td>
                  <td className="p-4"><span className="text-orange-600 font-bold">Xiaomi</span> - AMOLED + 200MP</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">3000-4000 DH</td>
                  <td className="p-4">POCO X6 Pro (4299 DH)</td>
                  <td className="p-4">Realme GT Neo 5 (3799 DH)</td>
                  <td className="p-4"><span className="text-yellow-600 font-bold">Realme</span> - charge 240W !</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">4000+ DH</td>
                  <td className="p-4">Xiaomi 13T (5499 DH)</td>
                  <td className="p-4">Realme GT 2 Pro (4799 DH)</td>
                  <td className="p-4"><span className="text-yellow-600 font-bold">Realme</span> - Snapdragon 8 Gen 1 moins cher</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              <strong>📊 Analyse :</strong> Realme est généralement 5-10% moins cher pour des specs similaires. 
              Xiaomi compense par une meilleure disponibilité et un SAV local.
            </p>
          </div>
        </section>

        {/* Quality Section */}
        <section id="qualite" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Qualité et performances : le match
          </h2>

          <div className="space-y-6">
            {/* Build Quality */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔨 Qualité de fabrication</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Xiaomi</p>
                  <p className="text-sm text-gray-600">
                    Construction solide, finitions correctes. Les flagships (Xiaomi 13/14) 
                    ont un build premium avec gorilla glass et aluminium.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4/5)</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700 mb-2">Realme</p>
                  <p className="text-sm text-gray-600">
                    Design souvent plus audacieux avec dos texturés uniques. 
                    Qualité similaire à Xiaomi, parfois meilleure sur les finitions.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4/5)</p>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-4 font-medium">🤝 Égalité</p>
            </div>

            {/* Software */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📱 Logiciel et mises à jour</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Xiaomi (MIUI / HyperOS)</p>
                  <p className="text-sm text-gray-600">
                    MIUI est très personnalisé mais parfois lourd. HyperOS (depuis 2024) 
                    est plus fluide. <strong>3-4 ans de mises à jour</strong> sur les 
                    modèles récents. Quelques pubs dans l&apos;interface (désactivables).
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4/5)</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700 mb-2">Realme (Realme UI)</p>
                  <p className="text-sm text-gray-600">
                    Basé sur ColorOS (OPPO), très proche d&apos;Android stock. 
                    Interface propre et fluide. <strong>2-3 ans de mises à jour</strong> 
                    en moyenne. Moins de pubs que MIUI.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4/5)</p>
                </div>
              </div>
              <p className="text-center text-orange-600 mt-4 font-medium">🏆 Xiaomi gagne (mises à jour plus longues)</p>
            </div>

            {/* Camera */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📸 Appareil photo</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Xiaomi</p>
                  <p className="text-sm text-gray-600">
                    Partenariat avec Leica sur les flagships (Xiaomi 13/14). 
                    Excellent mode nuit et vidéo 8K. Les Redmi Note 13 Pro ont 
                    des capteurs 200MP impressionnants.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700 mb-2">Realme</p>
                  <p className="text-sm text-gray-600">
                    Très bon en selfies avec des algorithmes de beauté efficaces. 
                    Mode portrait réussi. Moins performant en basse lumière 
                    que Xiaomi sur les flagships.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4/5)</p>
                </div>
              </div>
              <p className="text-center text-orange-600 mt-4 font-medium">🏆 Xiaomi gagne (Leica + 200MP)</p>
            </div>

            {/* Charging */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Charge rapide</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Xiaomi</p>
                  <p className="text-sm text-gray-600">
                    Charge rapide 67W-120W selon les modèles. Le Xiaomi 14 Ultra 
                    supporte même la charge 90W sans fil ! Charge complète en 
                    30-50 minutes.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700 mb-2">Realme</p>
                  <p className="text-sm text-gray-600">
                    Realme est le roi de la charge ! <strong>240W sur le GT Neo 5</strong> = 
                    charge complète en 9 minutes ! Les modèles entrée de gamme 
                    ont déjà 33-67W.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
                </div>
              </div>
              <p className="text-center text-yellow-600 mt-4 font-medium">🏆 Realme gagne (240W imbattable)</p>
            </div>

            {/* Gaming */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎮 Gaming</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Xiaomi / POCO</p>
                  <p className="text-sm text-gray-600">
                    POCO est LA référence gaming chez Xiaomi. POCO X6 Pro avec 
                    Dimensity 8300 et 12 Go RAM. Refroidissement LiquidCool, 
                    Game Turbo optimisé. Parfait pour PUBG et Genshin.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-700 mb-2">Realme</p>
                  <p className="text-sm text-gray-600">
                    Gamme GT orientée gaming avec Snapdragon 8 Gen 1. 
                    GT Mode pour booster les performances. Bons résultats 
                    mais moins de marketing gaming que POCO.
                  </p>
                  <p className="text-sm mt-2"><strong>Note :</strong> ⭐⭐⭐⭐ (4.5/5)</p>
                </div>
              </div>
              <p className="text-center text-orange-600 mt-4 font-medium">🏆 Xiaomi/POCO gagne (spécialisation gaming)</p>
            </div>
          </div>
        </section>

        {/* SAV Section */}
        <section id="sav" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            SAV et disponibilité au Maroc
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-red-800 mb-3">⚠️ Point crucial pour les Marocains</h3>
            <p className="text-gray-700">
              Le SAV est souvent négligé mais c&apos;est essentiel ! Un téléphone en panne 
              sans possibilité de réparation locale = argent perdu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-4">🔶 Xiaomi au Maroc</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Mi Stores officiels</strong> à Casablanca (Morocco Mall, Anfa Place) et Rabat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Centres de service agréés</strong> dans plusieurs villes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Pièces détachées</strong> disponibles officiellement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Garantie</strong> respectée sur Jumia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Large gamme de <strong>produits écosystème</strong> (montres, écouteurs, robotiques)</span>
                </li>
              </ul>
              <p className="mt-4 text-center font-bold text-orange-700">Note SAV : ⭐⭐⭐⭐⭐ (5/5)</p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">🟡 Realme au Maroc</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Pas de boutiques officielles</strong> au Maroc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">~</span>
                  <span><strong>SAV via distributeurs</strong> (moins direct)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">~</span>
                  <span><strong>Pièces détachées</strong> plus difficiles à trouver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Garantie Jumia</strong> valide (1 an)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Écosystème limité</strong> au Maroc</span>
                </li>
              </ul>
              <p className="mt-4 text-center font-bold text-yellow-700">Note SAV : ⭐⭐⭐ (3/5)</p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section id="recommandations" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos recommandations par budget
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-emerald-800 mb-4">💰 Budget 1000-1500 DH</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">🏆 Notre choix : Xiaomi Redmi 13C</p>
                  <p className="text-sm text-gray-600 mb-3">1299 DH - 6 Go RAM, 128 Go, 50 MP</p>
                  <MultiStoreButtons productName="Xiaomi Redmi 13C" size="sm" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Alternative : Realme C67</p>
                  <p className="text-sm text-gray-600 mb-3">1449 DH - 108 MP, charge 33W</p>
                  <MultiStoreButtons productName="Realme C67" size="sm" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">💰 Budget 1500-2500 DH</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">🏆 Notre choix : Xiaomi Redmi Note 13</p>
                  <p className="text-sm text-gray-600 mb-3">1899 DH - AMOLED 120Hz, 8 Go RAM</p>
                  <MultiStoreButtons productName="Xiaomi Redmi Note 13" size="sm" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Alternative : Realme 11</p>
                  <p className="text-sm text-gray-600 mb-3">1799 DH - Design premium, 67W</p>
                  <MultiStoreButtons productName="Realme 11" size="sm" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">💰 Budget 2500-4000 DH</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">🏆 Notre choix : Xiaomi Redmi Note 13 Pro</p>
                  <p className="text-sm text-gray-600 mb-3">2699 DH - 200 MP, AMOLED curvo</p>
                  <MultiStoreButtons productName="Xiaomi Redmi Note 13 Pro" size="sm" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Alternative gaming : POCO X6 Pro</p>
                  <p className="text-sm text-gray-600 mb-3">4299 DH - 12 Go RAM, Dimensity 8300</p>
                  <MultiStoreButtons productName="POCO X6 Pro" size="sm" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">💰 Budget 4000+ DH (haut de gamme)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-orange-700 mb-2">🏆 Flagship : Xiaomi 13T</p>
                  <p className="text-sm text-gray-600 mb-3">5499 DH - Leica, Dimensity 8200 Ultra</p>
                  <MultiStoreButtons productName="Xiaomi 13T" size="sm" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Meilleur rapport Q/P : Realme GT 2 Pro</p>
                  <p className="text-sm text-gray-600 mb-3">4799 DH - Snapdragon 8 Gen 1, écran 2K</p>
                  <MultiStoreButtons productName="Realme GT 2 Pro" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white border border-gray-200 rounded-xl p-6 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Notre verdict final
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Xiaomi remporte ce duel</strong> grâce à sa présence établie au Maroc 
            (Mi Stores, SAV), ses mises à jour plus longues et son écosystème complet. 
            C&apos;est le choix le plus sûr pour un acheteur marocain.
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Realme reste excellent</strong> si vous cherchez les meilleures specs 
            au prix le plus bas et que le SAV local n&apos;est pas une priorité. 
            La charge 240W du GT Neo 5 est imbattable.
          </p>
          <div className="flex flex-wrap gap-4">
            <MultiStoreButtons productName="Xiaomi Redmi Note 13" size="md" />
          </div>
        </section>

        {/* Articles liés */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Articles similaires
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/comparatifs/samsung-vs-xiaomi-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Autre versus →</span>
              <p className="text-gray-900 font-semibold">Samsung vs Xiaomi au Maroc</p>
            </Link>
            <Link 
              href="/comparatifs/meilleur-xiaomi-maroc"
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <span className="text-emerald-600 font-medium">Focus Xiaomi →</span>
              <p className="text-gray-900 font-semibold">Meilleur Xiaomi au Maroc</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
