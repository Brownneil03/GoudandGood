import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { AffiliateLink, MultiStoreButtons } from "@/components";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PC portable HP vs Lenovo – Lequel choisir au Maroc ? (2025)",
  description:
    "Comparatif HP vs Lenovo au Maroc. Quelle marque offre le meilleur rapport qualité-prix, SAV et fiabilité ? Guide d'achat complet.",
  keywords: [
    "hp vs lenovo maroc",
    "hp ou lenovo",
    "meilleur pc portable maroc",
    "comparatif hp lenovo",
    "pc portable fiable maroc",
  ],
  alternates: {
    canonical: "/comparatifs/hp-vs-lenovo-pc-portable-maroc",
  },
};

const hpPros = [
  "SAV très accessible au Maroc",
  "Design élégant et premium",
  "Gamme complète (ProBook, Pavilion, Spectre, Omen)",
  "Webcams de qualité supérieure",
  "Bonne qualité audio Bang & Olufsen",
];

const hpCons = [
  "Prix parfois plus élevés",
  "Bloatware HP préinstallé",
  "Autonomie variable selon modèles",
];

const lenovoPros = [
  "Claviers exceptionnels (héritage ThinkPad)",
  "Excellent rapport qualité-prix",
  "TrackPoint unique (ThinkPad)",
  "Construction solide et durable",
  "Large choix de configurations",
];

const lenovoCons = [
  "SAV moins présent que HP au Maroc",
  "Design parfois austère (ThinkPad)",
  "Qualité webcam moyenne",
];

const comparisons = [
  {
    category: "Étudiant (Budget)",
    hp: {
      model: "HP 15s-eq2xxx",
      price: 5299,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Ryzen 5, 8 Go RAM, 512 Go SSD",
    },
    lenovo: {
      model: "Lenovo IdeaPad 3 15",
      price: 4999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Ryzen 5, 8 Go RAM, 512 Go SSD",
    },
    winner: "lenovo",
    verdict: "Lenovo offre des specs similaires pour 300 DH de moins.",
  },
  {
    category: "Professionnel",
    hp: {
      model: "HP ProBook 450 G10",
      price: 8999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Core i5-1335U, 16 Go RAM, 512 Go SSD",
    },
    lenovo: {
      model: "Lenovo ThinkPad E14 Gen 5",
      price: 8499,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Core i5-1335U, 16 Go RAM, 512 Go SSD",
    },
    winner: "lenovo",
    verdict: "ThinkPad offre un meilleur clavier et un prix plus doux.",
  },
  {
    category: "Gaming",
    hp: {
      model: "HP Victus 15",
      price: 9499,
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
      specs: "Core i5, RTX 4050, 16 Go RAM",
    },
    lenovo: {
      model: "Lenovo LOQ 15",
      price: 9299,
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
      specs: "Ryzen 5, RTX 4050, 16 Go RAM",
    },
    winner: "draw",
    verdict: "Les deux sont excellents. HP a un meilleur SAV, Lenovo un meilleur refroidissement.",
  },
  {
    category: "Premium / Ultrabook",
    hp: {
      model: "HP Spectre x360 14",
      price: 17999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Core i7, 16 Go RAM, OLED tactile",
    },
    lenovo: {
      model: "Lenovo Yoga 9i",
      price: 16999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      specs: "Core i7, 16 Go RAM, OLED tactile",
    },
    winner: "hp",
    verdict: "Le Spectre x360 offre un design plus premium et des finitions exceptionnelles.",
  },
];

const faqs = [
  {
    question: "HP ou Lenovo, quelle marque choisir au Maroc ?",
    answer:
      "HP si le SAV local est important pour vous et que vous appréciez le design. Lenovo si vous cherchez le meilleur rapport qualité-prix et un excellent clavier (ThinkPad).",
  },
  {
    question: "Quelle marque est la plus fiable ?",
    answer:
      "Les deux marques sont très fiables. Lenovo ThinkPad est réputé pour sa durabilité extrême (tests MIL-STD). HP ProBook et EliteBook sont également très robustes.",
  },
  {
    question: "Le SAV HP est-il vraiment meilleur au Maroc ?",
    answer:
      "HP a plus de centres de service agréés au Maroc. Lenovo a un réseau en croissance mais moins étendu. Pour les entreprises, les deux offrent des contrats de maintenance.",
  },
];

export default function HPvsLenovoPage() {
  const articleSchema = generateArticleSchema({
    title: "PC portable HP vs Lenovo – Lequel choisir au Maroc ?",
    description:
      "Comparatif complet HP vs Lenovo pour vous aider à choisir le meilleur PC portable au Maroc.",
    url: "/comparatifs/hp-vs-lenovo-pc-portable-maroc",
    datePublished: "2025-02-01T10:00:00+01:00",
    dateModified: "2025-02-17T10:00:00+01:00",
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

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-red-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
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
              <Link href="/comparatifs/pc-portables" className="hover:text-blue-400 transition-colors">
                PC Portables
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">HP vs Lenovo</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                ⚔️ Duel de marques
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-blue-400">HP</span> vs{" "}
                <span className="text-red-400">Lenovo</span>
              </h1>

              <p className="text-xl text-slate-300">
                Quel PC portable choisir au Maroc ? Comparatif des deux géants
                de l'informatique portable.
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              HP et Lenovo sont les deux marques les plus populaires au Maroc
              pour les PC portables. HP, l'américain, est connu pour son design
              et son SAV local. Lenovo, le chinois (ex-IBM), est réputé pour ses
              ThinkPad légendaires et son rapport qualité-prix. Comparons-les !
            </p>
          </section>

          {/* Pros/Cons Cards */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            {/* HP Card */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-700">HP</span>
                </div>
                <h2 className="text-xl font-bold text-blue-700">HP</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-green-700 mb-2">✓ Avantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {hpPros.map((pro) => (
                    <li key={pro}>+ {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-red-700 mb-2">✗ Inconvénients</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {hpCons.map((con) => (
                    <li key={con}>- {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lenovo Card */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-red-700">L</span>
                </div>
                <h2 className="text-xl font-bold text-red-700">Lenovo</h2>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-green-700 mb-2">✓ Avantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {lenovoPros.map((pro) => (
                    <li key={pro}>+ {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-red-700 mb-2">✗ Inconvénients</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {lenovoCons.map((con) => (
                    <li key={con}>- {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Gamme Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Les gammes expliquées
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4">Gammes HP</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>HP 15/17 :</strong> Entrée de gamme, basique</li>
                  <li><strong>Pavilion :</strong> Milieu de gamme polyvalent</li>
                  <li><strong>ProBook :</strong> Professionnel, robuste</li>
                  <li><strong>EliteBook :</strong> Business premium</li>
                  <li><strong>Spectre :</strong> Ultrabook luxe</li>
                  <li><strong>Omen/Victus :</strong> Gaming</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4">Gammes Lenovo</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>IdeaPad :</strong> Grand public, polyvalent</li>
                  <li><strong>ThinkPad E :</strong> Pro entrée de gamme</li>
                  <li><strong>ThinkPad T/X :</strong> Pro premium</li>
                  <li><strong>Yoga :</strong> Convertible 2-en-1</li>
                  <li><strong>Legion/LOQ :</strong> Gaming</li>
                  <li><strong>ThinkBook :</strong> PME moderne</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Head to Head Comparisons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comparatifs par usage
            </h2>

            <div className="space-y-6">
              {comparisons.map((comp) => (
                <div
                  key={comp.category}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="bg-slate-100 px-6 py-3 border-b">
                    <h3 className="font-bold text-gray-900">{comp.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* HP */}
                    <div className={`p-6 ${comp.winner === "hp" ? "bg-blue-50" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={comp.hp.image}
                            alt={comp.hp.model}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{comp.hp.model}</p>
                          <p className="text-blue-600 font-bold">
                            {comp.hp.price.toLocaleString("fr-MA")} DH
                          </p>
                          <p className="text-sm text-gray-500">{comp.hp.specs}</p>
                        </div>
                      </div>
                      {comp.winner === "hp" && (
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🏆 Gagnant
                        </span>
                      )}
                      {/* Multi-stores pour maximiser les conversions */}
                      <MultiStoreButtons 
                        productName={comp.hp.model} 
                        size="md"
                      />
                    </div>

                    {/* Lenovo */}
                    <div className={`p-6 ${comp.winner === "lenovo" ? "bg-red-50" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={comp.lenovo.image}
                            alt={comp.lenovo.model}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{comp.lenovo.model}</p>
                          <p className="text-red-600 font-bold">
                            {comp.lenovo.price.toLocaleString("fr-MA")} DH
                          </p>
                          <p className="text-sm text-gray-500">{comp.lenovo.specs}</p>
                        </div>
                      </div>
                      {comp.winner === "lenovo" && (
                        <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🏆 Gagnant
                        </span>
                      )}
                      {comp.winner === "draw" && (
                        <span className="inline-block bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🤝 Ex aequo
                        </span>
                      )}
                      {/* Multi-stores pour maximiser les conversions */}
                      <MultiStoreButtons 
                        productName={comp.lenovo.model} 
                        size="md"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 px-6 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Verdict :</strong> {comp.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
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
          <section className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre verdict final
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Choisissez HP si :</strong> le SAV local est crucial pour
                vous, vous aimez les designs élégants, ou vous cherchez un
                ultrabook premium (Spectre).
              </p>
              <p>
                <strong>Choisissez Lenovo si :</strong> vous tapez beaucoup
                (clavier ThinkPad exceptionnel), vous cherchez le meilleur rapport
                qualité-prix, ou vous êtes un professionnel exigeant.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">💻 HP Pavilion 15 :</p>
                <MultiStoreButtons 
                  productName="HP Pavilion 15" 
                  size="md"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">💻 Lenovo IdeaPad 3 :</p>
                <MultiStoreButtons 
                  productName="Lenovo IdeaPad 3" 
                  size="md"
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
