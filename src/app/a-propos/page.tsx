import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Goud&Good – Qui sommes-nous ?",
  description:
    "Goud&Good est le guide d'achat tech #1 au Maroc. Découvrez notre mission : aider les Marocains à faire les meilleurs choix tech selon leur budget.",
};

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-emerald-600">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">À propos</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        À propos de Goud&Good
      </h1>

      <div className="prose prose-lg prose-emerald max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          <strong>Goud&Good</strong> est le guide d'achat tech #1 au Maroc. Notre
          mission : vous aider à trouver les meilleurs produits tech selon votre
          budget, avec des prix en Dirhams et une disponibilité vérifiée
          localement.
        </p>

        <h2>Notre mission</h2>
        <p>
          Nous croyons que chaque Marocain mérite de faire des achats tech
          éclairés. C'est pourquoi nous testons, comparons et analysons les
          produits disponibles au Maroc pour vous donner des recommandations
          honnêtes et adaptées à vos besoins.
        </p>

        <h2>Ce qui nous différencie</h2>
        <ul>
          <li>
            <strong>100% Maroc</strong> – Tous nos prix sont en Dirhams et les
            produits sont disponibles localement
          </li>
          <li>
            <strong>Avis honnêtes</strong> – On vous dit aussi les points
            négatifs, pas juste les avantages
          </li>
          <li>
            <strong>Tous budgets</strong> – De 500 DH à 10 000 DH, on a des
            recommandations pour vous
          </li>
          <li>
            <strong>Mis à jour régulièrement</strong> – Les prix et disponibilités
            sont vérifiés chaque semaine
          </li>
        </ul>

        <h2>Comment fonctionne notre site ?</h2>
        <p>
          Nous gagnons une petite commission lorsque vous achetez via nos liens
          affiliés (principalement Jumia Maroc). Cela ne change pas le prix pour
          vous et nous permet de maintenir ce site gratuit.
        </p>
        <p>
          <strong>Important :</strong> Nos recommandations ne sont jamais
          influencées par les commissions. Nous recommandons toujours les
          meilleurs produits, même si la commission est plus faible.
        </p>

        <h2>Contact</h2>
        <p>
          Une question ? Une suggestion ? Contactez-nous sur nos réseaux sociaux
          ou par email.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://facebook.com/goudandgood"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/goudandgood"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
