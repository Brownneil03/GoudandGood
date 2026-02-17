import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité – Goud&Good",
  description: "Politique de confidentialité du site Goud&Good. Informations sur la collecte et l'utilisation de vos données.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Politique de confidentialité</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-white">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Chez Goud&Good, nous respectons votre vie privée. Cette politique explique quelles 
              informations nous collectons et comment nous les utilisons.
            </p>

            <h2>1. Données collectées</h2>
            <h3>Données de navigation</h3>
            <p>
              Comme la plupart des sites web, nous collectons automatiquement certaines informations 
              lorsque vous visitez notre site :
            </p>
            <ul>
              <li>Adresse IP (anonymisée)</li>
              <li>Type de navigateur et appareil</li>
              <li>Pages visitées et temps passé</li>
              <li>Source de trafic (d'où vous venez)</li>
            </ul>

            <h3>Données que vous fournissez</h3>
            <p>
              Si vous nous contactez par email, nous conservons votre adresse email et le contenu 
              de votre message pour pouvoir vous répondre.
            </p>

            <h2>2. Utilisation des données</h2>
            <p>Nous utilisons ces données pour :</p>
            <ul>
              <li>Améliorer le contenu et l'expérience utilisateur</li>
              <li>Analyser le trafic et les tendances (via Google Analytics)</li>
              <li>Répondre à vos questions</li>
              <li>Détecter et prévenir les problèmes techniques</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience :
            </p>
            <ul>
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment vous utilisez le site (Google Analytics)</li>
              <li><strong>Cookies d'affiliation :</strong> pour suivre les ventes via nos liens partenaires</li>
            </ul>
            <p>
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais 
              certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
            </p>

            <h2>4. Google Analytics</h2>
            <p>
              Nous utilisons Google Analytics pour analyser l'utilisation de notre site. Google 
              Analytics utilise des cookies pour collecter des informations anonymes sur vos 
              visites. Ces données sont transmises et stockées par Google.
            </p>
            <p>
              Vous pouvez refuser l'utilisation de Google Analytics en installant le{" "}
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                module de désactivation de Google Analytics
              </a>.
            </p>

            <h2>5. Liens d'affiliation</h2>
            <p>
              Lorsque vous cliquez sur un lien d'affiliation vers un site partenaire (comme Jumia), 
              ce site peut déposer ses propres cookies pour suivre votre visite. Nous n'avons pas 
              de contrôle sur ces cookies tiers.
            </p>

            <h2>6. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
              sauf dans les cas suivants :
            </p>
            <ul>
              <li>Avec des prestataires de services (hébergement, analytics)</li>
              <li>Si la loi l'exige</li>
            </ul>

            <h2>7. Sécurité</h2>
            <p>
              Nous prenons des mesures raisonnables pour protéger vos données. Notre site utilise 
              le protocole HTTPS pour sécuriser les communications.
            </p>

            <h2>8. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@goudandgood.ma" className="text-emerald-600">
                contact@goudandgood.ma
              </a>
            </p>

            <h2>9. Modifications</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité. La date de dernière 
              mise à jour sera indiquée en bas de page.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question concernant cette politique, contactez-nous :{" "}
              <a href="mailto:contact@goudandgood.ma" className="text-emerald-600">
                contact@goudandgood.ma
              </a>
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
