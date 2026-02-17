import { redirect } from "next/navigation";
import { affiliateLinks } from "@/lib/affiliates";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Route de tracking des liens affiliés
 * /go/[slug] redirige vers l'URL affiliate correspondante
 * 
 * Pourquoi cette approche ?
 * 1. Permet de tracker les clics (analytics)
 * 2. Possibilité de changer l'URL sans modifier les articles
 * 3. Liens internes propres (pas d'URL affilié visible)
 */
export default async function AffiliateRedirect({ params }: Props) {
  const { slug } = await params;
  
  // Chercher l'URL affiliée correspondante
  const affiliateUrl = affiliateLinks[slug];

  if (affiliateUrl) {
    // Redirection vers le lien affilié
    redirect(affiliateUrl);
  }

  // Si le slug n'existe pas, rediriger vers l'accueil
  redirect("/");
}

// Générer les pages statiques pour les liens connus
export async function generateStaticParams() {
  return Object.keys(affiliateLinks).map((slug) => ({
    slug,
  }));
}
