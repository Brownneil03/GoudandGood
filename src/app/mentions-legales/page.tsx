import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – Goud&Good",
  description: "Mentions légales du site Goud&Good, guide d'achat tech au Maroc.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Mentions légales</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>Goud&Good</strong> (goudand-good.vercel.app) est édité par un 
              particulier dans le cadre d'une activité de création de contenu.
            </p>
            <ul>
              <li><strong>Nom du site :</strong> Goud&Good</li>
              <li><strong>URL :</strong> goudand-good.vercel.app</li>
              <li><strong>Email :</strong> contact@goudandgood.ma</li>
            </ul>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul>
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              Le contenu du site (textes, images, graphismes, logo, etc.) est la propriété de 
              Goud&Good, sauf mention contraire. Toute reproduction, représentation, modification, 
              publication ou adaptation de tout ou partie des éléments du site est interdite sans 
              autorisation écrite préalable.
            </p>
            <p>
              Les images de produits utilisées sur ce site proviennent de sources libres de droits 
              (Unsplash) ou sont des captures d'écran à des fins d'illustration.
            </p>

            <h2>4. Liens d'affiliation</h2>
            <p>
              Ce site participe à des programmes d'affiliation, notamment avec Jumia Maroc. 
              Cela signifie que si vous cliquez sur certains liens et effectuez un achat, nous 
              pouvons recevoir une commission sans frais supplémentaires pour vous.
            </p>
            <p>
              Ces commissions nous permettent de maintenir le site et de continuer à créer du 
              contenu gratuit et de qualité. Nos recommandations restent objectives et basées 
              sur la qualité des produits.
            </p>

            <h2>5. Limitation de responsabilité</h2>
            <p>
              Les informations présentes sur ce site sont fournies à titre indicatif. Malgré 
              tout le soin apporté à la rédaction, des erreurs peuvent subsister. Goud&Good ne 
              peut être tenu responsable :
            </p>
            <ul>
              <li>Des variations de prix sur les sites marchands</li>
              <li>De la disponibilité des produits</li>
              <li>Des erreurs ou omissions dans les caractéristiques techniques</li>
              <li>Des décisions d'achat prises suite à la consultation du site</li>
            </ul>

            <h2>6. Données personnelles</h2>
            <p>
              Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
              veuillez consulter notre{" "}
              <Link href="/politique-confidentialite" className="text-emerald-600 hover:underline">
                Politique de confidentialité
              </Link>.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à 
              l'adresse : <a href="mailto:contact@goudandgood.ma" className="text-emerald-600">contact@goudandgood.ma</a>
            </p>

            <p className="text-sm text-slate-500 mt-8">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
