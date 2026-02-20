# Goud&Good - Guide Tech Maroc (Explication détaillée)

## 1. Objectif du projet
Goud&Good est un site web marocain qui permet de comparer les prix des smartphones, PC portables et accessoires tech sur plusieurs plateformes (Jumia, Amazon, AliExpress). L'objectif est d'aider les utilisateurs à trouver le meilleur prix et d'obtenir des revenus via l'affiliation.

## 2. Fonctionnement général
- L'utilisateur arrive sur le site et voit une liste de produits populaires.
- Pour chaque produit, il peut cliquer sur un lien qui le redirige vers Jumia, Amazon ou AliExpress.
- Les liens Amazon et AliExpress sont affiliés : si l'utilisateur achète, tu touches une commission.
- Les liens Amazon sont générés automatiquement avec ton tag (goudgood21-21).
- Les liens AliExpress sont générés manuellement (s.click.aliexpress.com) et intégrés dans le code.

## 3. Stack technique
- Next.js (React + TypeScript) : framework moderne pour créer des sites web dynamiques.
- Tailwind CSS : pour le design rapide et responsive.
- Déploiement sur Vercel : chaque push sur GitHub déclenche un déploiement automatique.
- Google Analytics : pour suivre le trafic et l'engagement.

## 4. Structure du code
- `src/lib/affiliates.ts` : fichier central qui contient tous les liens d'affiliation pour chaque produit.
- `src/components/Header.tsx` : logo, titre, sous-titre.
- `src/components/Footer.tsx` : liens réseaux sociaux (Instagram, Facebook, TikTok).
- `src/app/a-propos/page.tsx` : explication du projet.
- `src/app/contact/page.tsx` : infos de contact.
- `social-templates/` : modèles de posts pour Instagram/Facebook.

## 5. Ce que j'ai fait pour toi
- Intégration du logo personnalisé.
- Configuration et mise à jour des liens d'affiliation Amazon et AliExpress (30 produits).
- Ajout des liens réseaux sociaux (Instagram, Facebook, TikTok).
- Création de templates de posts pour les réseaux.
- Génération d'un fichier synthèse avec tous les liens importants.
- Génération d'un README pour expliquer le projet.
- Mise à jour du code à chaque demande (remplacement de liens, ajout de produits, etc.).
- Push sur GitHub à chaque modification, ce qui déclenche le déploiement automatique sur Vercel.

## 6. Comment continuer ou modifier le projet
- Pour ajouter/modifier un produit :
  1. Ouvre `src/lib/affiliates.ts`.
  2. Ajoute ou modifie les liens pour le produit (Jumia, Amazon, AliExpress).
  3. Enregistre le fichier.
  4. Fais un commit Git et push (ou demande à l'agent AI de le faire).
  5. Le site sera mis à jour automatiquement sur Vercel.

- Pour modifier le design :
  1. Modifie les fichiers dans `src/components/` ou `src/app/`.
  2. Commit & push.

- Pour mettre à jour les réseaux sociaux :
  1. Modifie les liens dans le footer ou les pages concernées.
  2. Commit & push.

- Pour publier sur Instagram/Facebook :
  1. Utilise les templates dans `social-templates/`.
  2. Adapte les visuels et les prix.

## 7. Déploiement automatique
- Dès que tu fais un push sur GitHub, Vercel détecte le changement et déploie la nouvelle version du site.
- Tu n'as rien à faire manuellement pour le déploiement.

## 8. Suivi du trafic et des ventes
- Utilise Google Analytics pour voir le trafic, l'engagement, les villes/pays des visiteurs.
- Surveille les dashboards Amazon et AliExpress pour voir les commissions.

## 9. Liens importants
- Site : https://goudand-good.vercel.app
- GitHub : https://github.com/Brownneil03/GoudandGood
- Instagram : https://www.instagram.com/goudandgood/
- Facebook : https://www.facebook.com/profile.php?id=61588100503182
- Portail Amazon : https://partenaires.amazon.fr/
- Portail AliExpress : https://portals.aliexpress.com/
- Google Analytics : https://analytics.google.com/

## 10. Conseils pour la suite
- Publie régulièrement sur les réseaux.
- Ajoute de nouveaux produits et bons plans.
- Surveille les commissions.
- Réponds aux messages des utilisateurs.
- Partage le site dans des groupes tech Maroc.

---
Ce fichier permet à n'importe quel agent AI ou développeur de comprendre le projet, le reprendre, le modifier et le déployer sans difficulté.