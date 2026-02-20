# Goud&Good - Guide Tech Maroc

## Objectif
Site web comparateur de prix pour smartphones, PC portables et accessoires tech au Maroc. Permet aux utilisateurs de trouver le meilleur prix entre Jumia, Amazon, AliExpress, etc. Génère des revenus via liens d'affiliation.

## Stack technique
- Next.js (React, TypeScript)
- Tailwind CSS
- Déployé sur Vercel
- GitHub : https://github.com/Brownneil03/GoudandGood

## Fonctionnalités principales
- Page d'accueil : liste des produits populaires, liens directs vers Jumia, Amazon, AliExpress
- Redirection automatique avec tag Amazon (goudgood21-21)
- Liens AliExpress manuels (s.click.aliexpress.com) pour chaque produit
- Logo personnalisé (public/logo.png)
- Google Analytics intégré
- Footer avec liens réseaux sociaux (Instagram, Facebook, TikTok)

## Affiliations
- Amazon : tag goudgood21-21 (automatique)
- AliExpress : liens courts manuels (goudgood)
- Jumia : recherche dynamique

## Liens importants
- Site : https://goudand-good.vercel.app
- Instagram : https://www.instagram.com/goudandgood/
- Facebook : https://www.facebook.com/profile.php?id=61588100503182
- Portail Amazon : https://partenaires.amazon.fr/
- Portail AliExpress : https://portals.aliexpress.com/

## Structure du code
- src/lib/affiliates.ts : configuration des liens d'affiliation
- src/components/Header.tsx : logo et titre
- src/components/Footer.tsx : liens réseaux sociaux
- src/app/a-propos/page.tsx : présentation du projet
- src/app/contact/page.tsx : contact

## Ce qu'il reste à faire
- Publier régulièrement sur Instagram/Facebook (posts, stories, reels)
- Ajouter de nouveaux produits ou bons plans
- Mettre à jour les prix
- Surveiller les commissions Amazon/AliExpress
- Répondre aux messages utilisateurs

## Comment continuer le projet
1. Récupérer les liens d'affiliation pour chaque nouveau produit
2. Ajouter le produit dans affiliates.ts avec les bons liens
3. Mettre à jour les templates de posts dans social-templates/
4. Publier sur les réseaux sociaux
5. Vérifier le trafic et les ventes sur Analytics et les portails affiliés

## Contact
Pour toute question ou évolution, contacter l'admin via Instagram ou Facebook.

---
Ce fichier permet à tout agent AI ou développeur de comprendre le projet, ses objectifs, sa structure et les prochaines étapes à suivre.