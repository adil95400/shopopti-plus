# 📝 CHANGELOG – Shopopti+

Toutes les modifications par version.

---

## [v6.5.3] - 2025-05-11

### Ajouté
- ✅ Gestion complète des abonnements Stripe (Freemium, Pro, Agence)
- ✅ Redirection automatique si abonnement annulé
- ✅ Page "Mon abonnement" avec lien portail Stripe
- ✅ Page admin `/admin/subscriptions` avec :
  - Filtres dynamiques (plan, statut)
  - Export CSV des abonnements
  - Graphique camembert par plan
- ✅ IA réelle via OpenAI pour optimisation produit
- ✅ Import intelligent des produits dans Shopify après IA
- ✅ Création de la table `products` liée aux fournisseurs
- ✅ Création des pages `/products` et `/product/:id`
- ✅ Bouton "Importer vers Shopify"
- ✅ Multi-boutique Shopify (connexion, affichage, suppression, par défaut)
- ✅ Scripts automatisés :
  - `setup.sh`
  - `deploy-vercel.sh`

### Amélioré
- ♻️ Refactorisation des pages Settings et Import
- ♻️ Nettoyage du projet et structuration des composants

### Supprimé
- 🛑 Suppression des fichiers `.env` du projet pour sécurité GitHub

---

## [v6.5.2] - 2025-05-10
- Export CSV des abonnements
- Filtres + graphiques dans `/admin/subscriptions`

## [v6.5.1] - 2025-05-10
- Redirection automatique vers `/pricing` si abonnement inactif

## [v6.5.0] - 2025-05-09
- Page `/my-subscription` + composant SubscriptionGate

---

👉 Voir la [ROADMAP](./ROADMAP.md) pour les versions à venir.
