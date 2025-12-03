# Nizar Digital Canvas 🎨

> **Portfolio personnel de Nizar Benakkadou - Architecte Full Stack Laravel & React**



## 📋 À propos du projet

Ce portfolio moderne présente mes compétences, projets et expériences en tant que développeur Full Stack.  Conçu avec une attention particulière aux détails, ce site utilise les dernières technologies web pour offrir une expérience utilisateur fluide et performante.


## 🛠️ Technologies utilisées

Ce projet est construit avec un stack technologique moderne :

- **⚡ Vite** - Build tool ultra-rapide
- **⚛️ React 18. 3** - Bibliothèque UI avec React Hooks
- **📘 TypeScript** - Pour un code type-safe et maintenable
- **🎨 Tailwind CSS** - Framework CSS utility-first
- **🧩 shadcn/ui** - Composants UI réutilisables et accessibles
- **🔄 React Router** - Navigation côté client
- **📊 TanStack Query** - Gestion d'état et cache
- **🗄️ Supabase** - Backend as a Service
- **📈 Recharts** - Bibliothèque de graphiques

## 📁 Structure du projet

```
nizar-digital-canvas/
├── src/                    # Code source principal
│   ├── components/         # Composants React réutilisables
│   ├── pages/             # Pages de l'application
│   ├── lib/               # Utilitaires et helpers
│   ├── hooks/             # Custom React hooks
│   └── main.tsx           # Point d'entrée de l'application
├── public/                # Assets statiques
├── index.html            # Template HTML principal
├── tailwind.config.ts    # Configuration Tailwind CSS
├── vite.config.ts        # Configuration Vite
├── tsconfig.json         # Configuration TypeScript
└── package.json          # Dépendances et scripts
```

## 🚀 Installation et développement local

### Prérequis

- **Node.js** (v18 ou supérieur) - [Installation avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** ou **yarn**

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/NIZAR-BENAKKADOU/nizar-digital-canvas.git

# 2.  Naviguer dans le dossier du projet
cd nizar-digital-canvas

# 3. Installer les dépendances
npm install

# 4. Créer un fichier .env (voir section Configuration)
cp .env.example .env

# 5. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080` 🎉

## ⚙️ Configuration

Le projet utilise des variables d'environnement pour la configuration.  Créez un fichier `.env` à la racine :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_PUBLISHABLE_KEY=votre_clé_publique
VITE_SUPABASE_PROJECT_ID=votre_project_id
```

## 📜 Scripts disponibles

```bash
# Développement avec hot-reload
npm run dev

# Build pour la production
npm run build

# Build en mode développement
npm run build:dev

# Linter le code
npm run lint

# Preview du build de production
npm run preview
```

## 🎨 Fonctionnalités principales

- ✨ **Design moderne et responsive** - Optimisé pour tous les appareils
- 🌓 **Mode sombre/clair** - Thème adaptatif avec next-themes
- 🎭 **Animations fluides** - Transitions et animations CSS personnalisées
- 🔍 **SEO optimisé** - Meta tags et Open Graph configurés
- ⚡ **Performance optimale** - Code splitting et lazy loading
- 📱 **PWA Ready** - Peut être installé comme application

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5.  Ouvrir une Pull Request

## 📝 Configuration ESLint

Le projet utilise ESLint avec TypeScript pour maintenir la qualité du code :

- Rules React Hooks
- TypeScript ESLint recommandé
- Configuration personnalisée pour la compatibilité du projet

## 🎯 Déploiement

Le projet peut être déployé facilement sur plusieurs plateformes :

- **Vercel** - Déploiement automatique depuis GitHub
- **Netlify** - Configuration zero-config
- **GitHub Pages** - Avec GitHub Actions
- **Lovable** - Plateforme de développement intégrée

## 👤 Auteur

**Nizar Benakkadou**
- Portfolio: [nizar-benakkadou.dev](https://nizar-benakkadou.dev)
- GitHub: [@NIZAR-BENAKKADOU](https://github.com/NIZAR-BENAKKADOU)

## 📄 Licence

Ce projet est sous licence privée - tous droits réservés.

---

⭐ **Star ce repo** si vous le trouvez utile ! 

💼 **Contactez-moi** pour des opportunités de collaboration ou des projets freelance. 
