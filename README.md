# BlackBenAI - Site Web Officiel

**Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI**

## 🚀 À Propos

BlackBenAI est une startup béninoise fondée en août 2024, spécialisée dans le développement de solutions d'intelligence artificielle innovantes. Notre mission est de devenir l'une des plus grandes startups d'IA en Afrique et de garantir l'autonomie technologique du continent.

## 🏗️ Architecture du Projet

### Backend - Django API
- **Framework** : Django 4.2+ avec Django REST Framework
- **Base de données** : SQLite (développement) / PostgreSQL (production)
- **API** : REST API complète avec sérialisation JSON
- **Admin** : Interface d'administration Django personnalisée
- **CORS** : Configuration pour le frontend React

### Frontend - React TypeScript
- **Framework** : React 18+ avec TypeScript
- **Styling** : Styled-components avec thème personnalisé
- **Animations** : Framer Motion pour les animations fluides
- **Routing** : React Router DOM
- **SEO** : React Helmet Async pour les métadonnées
- **Icons** : React Icons (Font Awesome)

## 🎨 Design & Thème

### Palette de Couleurs
- **Background** : Bleu nuit (#1a1a2e)
- **Primary** : Bleu foncé (#16213e)
- **Secondary** : Violet (#0f3460)
- **Accent** : Rose/Rouge (#ff6b6b)
- **Text** : Blanc (#ffffff)
- **Text Light** : Gris clair (#b8b8b8)

### Caractéristiques Visuelles
- Motifs de grille dynamiques en arrière-plan
- Effets de glassmorphism avec backdrop-filter
- Gradients et ombres élégantes
- Animations d'entrée et de survol
- Design responsive pour tous les écrans

## 📱 Pages Développées

### Pages Principales
1. **Accueil** - Hero section, services, projets, témoignages
2. **À Propos** - Histoire, valeurs, fondateur, mission
3. **Services** - Portfolio complet des 6 solutions IA
4. **Projets** - Showcase détaillé avec statistiques
5. **Contact** - Formulaire interactif et informations
6. **Carrières** - Postes ouverts et culture d'entreprise
7. **FAQ** - Questions fréquentes avec recherche

### Pages Utilitaires
- **404** - Page d'erreur personnalisée
- **Support** - Support technique (template)
- **Confidentialité** - Politique de confidentialité (template)
- **CGU** - Conditions générales d'utilisation (template)

## 🛠️ Projets BlackBenAI Présentés

1. **Edushare** - Plateforme de partage de documents éducatifs
2. **GuardClause** - Analyse automatique des termes et conditions
3. **SecurLog** - Système de surveillance préventive par IA
4. **WithSign** - Traduction automatique du langage des signes
5. **HowRoadCode** - Assistant intelligent pour la conduite
6. **MyCompanyGen** - IA générative pour rapports d'entreprise

## 🚀 Installation et Démarrage

### Prérequis
- Python 3.8+
- Node.js 16+
- npm ou yarn

### Backend Django
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8001
```

### Frontend React
```bash
cd frontend
npm install
REACT_APP_API_URL=http://0.0.0.0:8001 npm start
```

### Accès
- **Frontend** : http://localhost:12001
- **Backend API** : http://0.0.0.0:8001/api/
- **Admin Django** : http://0.0.0.0:8001/admin/

## 📊 Modèles de Données

### Modèles Principaux
- **Company** - Informations sur l'entreprise
- **Service** - Services et solutions
- **Project** - Projets et portfolio
- **TeamMember** - Membres de l'équipe
- **BlogPost** - Articles de blog
- **Event** - Événements et actualités
- **Partner** - Partenaires
- **Testimonial** - Témoignages clients
- **FAQ** - Questions fréquentes
- **Contact** - Messages de contact
- **Newsletter** - Abonnements newsletter
- **JobPosting** - Offres d'emploi

## 🎯 Fonctionnalités Clés

### Interactivité
- Formulaires de contact fonctionnels
- Recherche dans la FAQ
- Filtrage par catégories
- Animations au scroll
- Navigation responsive

### SEO & Performance
- Métadonnées optimisées pour chaque page
- Structure sémantique HTML5
- Images optimisées et lazy loading
- Code splitting automatique

### Administration
- Interface d'administration complète
- Gestion de contenu dynamique
- Upload d'images
- Système de permissions

## 🔧 Technologies Utilisées

### Backend
- Django 4.2+
- Django REST Framework
- django-cors-headers
- Pillow (gestion d'images)
- SQLite/PostgreSQL

### Frontend
- React 18+
- TypeScript
- Styled-components
- Framer Motion
- React Router DOM
- React Helmet Async
- React Icons

### Outils de Développement
- ESLint & Prettier
- TypeScript compiler
- Django Debug Toolbar
- Hot reloading

## 📈 Déploiement

### Production
1. Configurer les variables d'environnement
2. Utiliser PostgreSQL pour la base de données
3. Configurer un serveur web (Nginx)
4. Utiliser Gunicorn pour Django
5. Build de production React (`npm run build`)

### Variables d'Environnement
```env
DEBUG=False
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://...
ALLOWED_HOSTS=blackbenai.com
CORS_ALLOWED_ORIGINS=https://blackbenai.com
```

## 👥 Équipe

**Marino ATOHOUN**
- Président Directeur Général & Fondateur
- Développeur spécialisé en Intelligence Artificielle
- Visionnaire de l'autonomie technologique africaine

## 📞 Contact

- **Email** : mahouliatohoun502@gmail.com
- **Email PDG** : mahouliatohoun502@gmail.com
- **Localisation** : Cotonou, Bénin
- **Site Web** : https://blackbenai.com

## 📄 Licence

Ce projet est développé pour BlackBenAI.

---

**BlackBenAI** - L'Intelligence Artificielle au service de l'Afrique 🌍🚀