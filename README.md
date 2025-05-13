# Shopopti+ v6.5.3

**Shopopti+** est une plateforme SaaS ultra complète de gestion e-commerce, spécialement conçue pour les utilisateurs Shopify, WooCommerce et marketplaces. Elle combine des outils d'importation produits, d'optimisation SEO, d’automatisation IA, de gestion fournisseurs et bien plus encore.

---

## 🚀 Fonctionnalités clés

### 🔄 Importation produits
- Sources : AliExpress, Amazon, Temu, TikTok, eBay, fichiers CSV/XML/API
- Scraping intelligent (images, titres, descriptions)
- Optimisation IA avant import Shopify

### ⚡ IA intégrée
- Optimisation automatique des fiches produits
- Génération de blogs, tags, titres SEO
- Détection de produits gagnants multicanal

### 🛒 Connecteurs
- Shopify multi-boutiques
- WooCommerce
- Google Shopping, TikTok Shop, Facebook Shop

### ✍️ Module Avis clients
- Import AliExpress, Amazon, Google
- IA pour générer ou modérer les avis
- Widgets personnalisables

### ⚙️ Modules SaaS avancés
- Stripe Billing (Freemium, Pro, Agence)
- Abonnement, gestion client, page "Mon abonnement"
- Marketplace + >400 fournisseurs dropshipping (filtrage pays/catégories)

---

## 🛠️ Configuration

### Variables d’environnement `.env`
Copier le fichier `.env.example` et renommer en `.env`, puis compléter avec vos clés :
```bash
cp .env.example .env
```

---

## ⚙️ Installation locale

```bash
git clone https://github.com/adil95400/shopopti-plus.git
cd shopopti-plus
npm install
npm run dev
```

---

## 🧪 Tests & déploiement

- Déploiement automatisé via **Vercel**
- Environnement `.env` géré dans Vercel Dashboard
- Backend géré via Supabase (authentification + base)

---

## 📦 Technologies utilisées

- React + Vite
- TailwindCSS + i18n
- Supabase
- Stripe
- OpenAI API
- Shopify Admin API
- Vercel Hosting

---

## 🧑‍💻 Auteur

Développé avec passion par [adil95400](https://github.com/adil95400)

---

## ⚠️ Licence

Projet privé réservé à un usage personnel ou commercial sous licence avec accord.
