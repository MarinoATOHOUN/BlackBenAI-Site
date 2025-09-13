"""
Script pour peupler la base de données avec des données de test pour BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

import os
import django
from datetime import datetime, timedelta
from django.utils import timezone

# Configuration Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blackbenai_site.settings')
django.setup()

from website.models import (
    CompanyInfo, Value, Service, Project, Event, Partner,
    JobPosition, FAQ, BlogPost, Testimonial
)


def create_company_info():
    """Créer les informations de l'entreprise"""
    company_info, created = CompanyInfo.objects.get_or_create(
        name="BlackBenAI",
        defaults={
            'tagline': "L'Intelligence Artificielle au service de l'Afrique",
            'description': """BlackBenAI est une startup béninoise fondée en août 2025 par Marino ATOHOUN, 
            spécialisée dans le développement de solutions d'intelligence artificielle innovantes. 
            Notre mission est de devenir l'une des plus grandes startups IA du continent africain 
            et de garantir l'autonomie technologique de l'Afrique.""",
            'mission': """Développer les plus grands modèles d'Intelligence Artificielle du continent 
            africain pour garantir l'autonomie de l'Afrique dans le domaine de la technologie 
            et de l'intelligence artificielle.""",
            'vision': """Être la référence africaine en matière d'intelligence artificielle et 
            contribuer au développement technologique du continent.""",
            'founded_date': datetime(2025, 8, 1).date(),
            'founder': "Marino ATOHOUN"
        }
    )
    print(f"✓ Informations de l'entreprise {'créées' if created else 'mises à jour'}")


def create_values():
    """Créer les valeurs de l'entreprise"""
    values_data = [
        {
            'title': 'Innovation',
            'description': 'Nous repoussons constamment les limites de la technologie pour créer des solutions révolutionnaires.',
            'icon': 'fas fa-lightbulb',
            'order': 1
        },
        {
            'title': 'Excellence',
            'description': 'Nous visons l\'excellence dans chaque projet, chaque ligne de code, chaque solution développée.',
            'icon': 'fas fa-star',
            'order': 2
        },
        {
            'title': 'Autonomie Africaine',
            'description': 'Nous œuvrons pour l\'indépendance technologique de l\'Afrique dans le domaine de l\'IA.',
            'icon': 'fas fa-globe-africa',
            'order': 3
        },
        {
            'title': 'Collaboration',
            'description': 'Nous croyons en la force du travail d\'équipe et de la collaboration pour atteindre nos objectifs.',
            'icon': 'fas fa-handshake',
            'order': 4
        }
    ]
    
    for value_data in values_data:
        value, created = Value.objects.get_or_create(
            title=value_data['title'],
            defaults=value_data
        )
        print(f"✓ Valeur '{value.title}' {'créée' if created else 'mise à jour'}")


def create_services():
    """Créer les services"""
    services_data = [
        {
            'name': 'Développement IA Personnalisé',
            'short_description': 'Solutions d\'IA sur mesure pour vos besoins spécifiques',
            'description': 'Nous développons des solutions d\'intelligence artificielle personnalisées adaptées aux besoins uniques de votre entreprise.',
            'icon': 'fas fa-brain',
            'order': 1
        },
        {
            'name': 'Vision par Ordinateur',
            'short_description': 'Systèmes de reconnaissance et d\'analyse d\'images avancés',
            'description': 'Nos solutions de vision par ordinateur permettent l\'analyse automatique d\'images et de vidéos pour diverses applications.',
            'icon': 'fas fa-eye',
            'order': 2
        },
        {
            'name': 'Traitement du Langage Naturel',
            'short_description': 'Analyse et compréhension automatique du langage',
            'description': 'Développement de systèmes capables de comprendre, analyser et générer du langage naturel.',
            'icon': 'fas fa-comments',
            'order': 3
        },
        {
            'name': 'Consultation IA',
            'short_description': 'Accompagnement stratégique dans vos projets IA',
            'description': 'Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie d\'intelligence artificielle.',
            'icon': 'fas fa-chart-line',
            'order': 4
        }
    ]
    
    for service_data in services_data:
        service, created = Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
        print(f"✓ Service '{service.name}' {'créé' if created else 'mis à jour'}")


def create_projects():
    """Créer les projets BlackBenAI"""
    projects_data = [
        {
            'name': 'Edushare',
            'short_description': 'Plateforme de partage de documents PDF éducatifs',
            'description': '''Edushare est une plateforme révolutionnaire de partage de documents PDF scolaires et éducatifs. 
            L'objectif premier est de favoriser le partage de connaissances entre élèves, professeurs et divers acteurs éducatifs 
            à travers les livres. Ce projet représente aussi une base de données gigantesque gratuite et opensource pour tout 
            développeur désirant utiliser ces données pour entraîner un modèle d'IA générative dans le domaine éducatif.''',
            'technology_stack': 'Django, React, PostgreSQL, Elasticsearch, Docker',
            'features': '''• Partage de documents PDF éducatifs
• Système de recherche avancé
• Catégorisation automatique des documents
• API ouverte pour les développeurs
• Interface utilisateur intuitive
• Système de notation et commentaires''',
            'is_featured': True,
            'created_date': datetime(2025, 8, 15).date(),
            'order': 1
        },
        {
            'name': 'GuardClause',
            'short_description': 'Analyse automatique des termes et conditions',
            'description': '''GuardClause est une plateforme d'analyse automatique des termes et conditions de sites web 
            pour identifier les points critiques et les clauses importantes. Elle utilise des techniques de traitement 
            de langage naturel (NLP) pour extraire et résumer les informations pertinentes. Son objectif principal 
            est d'aider les utilisateurs à comprendre rapidement les risques et obligations légales liés à l'utilisation 
            de services en ligne.''',
            'technology_stack': 'Python, NLP, BERT, FastAPI, React, MongoDB',
            'features': '''• Analyse automatique des CGU/CGV
• Détection des clauses critiques
• Résumé intelligent des documents
• Alertes sur les risques potentiels
• Interface web conviviale
• API REST pour intégration''',
            'is_featured': True,
            'created_date': datetime(2025, 8, 20).date(),
            'order': 2
        },
        {
            'name': 'SecurLog',
            'short_description': 'Système de surveillance préventive intelligent',
            'description': '''SecurLog est l'un des plus grands exploits de BlackBenAI dans le domaine de la vision par ordinateur. 
            C'est un système de surveillance préventive permettant la détection automatique d'intrusion ou de début d'incendie. 
            Ce système peut être intégré à une caméra de surveillance ou tout autre objet technologique de la même classe. 
            En cas d'intrusion ou de début d'incendie, une alarme est automatiquement déclenchée, la police ou les pompiers 
            sont immédiatement contactés selon l'urgence, et tout cela sans la moindre intervention d'un être humain.''',
            'technology_stack': 'Python, OpenCV, TensorFlow, YOLO, Raspberry Pi, IoT',
            'features': '''• Détection d'intrusion en temps réel
• Détection précoce d'incendie
• Alertes automatiques aux services d'urgence
• Interface de monitoring en temps réel
• Intégration IoT
• Système d'alarme intelligent''',
            'is_featured': True,
            'created_date': datetime(2025, 9, 1).date(),
            'order': 3
        },
        {
            'name': 'WithSign',
            'short_description': 'Traduction automatique du langage des signes',
            'description': '''WithSign est un projet révolutionnaire destiné aux malentendants. C'est un système qui effectue 
            automatiquement la traduction du langage des signes en se basant sur l'IA et la vision par ordinateur. 
            Un malentendant communiquant en langue des signes devant une caméra connectée à ce système voit automatiquement 
            ses propos traduits en texte écrit et facilement lisible par n'importe qui.''',
            'technology_stack': 'Python, MediaPipe, TensorFlow, OpenCV, React Native',
            'features': '''• Reconnaissance des gestes en temps réel
• Traduction instantanée en texte
• Support de multiples langues des signes
• Interface mobile et web
• Apprentissage continu
• Mode hors ligne disponible''',
            'is_featured': True,
            'created_date': datetime(2025, 9, 10).date(),
            'order': 4
        },
        {
            'name': 'HowRoadCode',
            'short_description': 'Assistant intelligent pour le code de la route',
            'description': '''HowRoadCode est la solution parfaite pour tous ceux qui se retrouvent sur la chaussée sans 
            permis de conduire. Imaginez-vous au volant de la nouvelle voiture de votre oncle, vous ne devez surtout pas 
            y laisser une seule égratignure, mais voilà cette chaussée est bondée de panneaux de signalisation, de feux 
            de signalisation et pleins d'autres indicateurs. Vous savez déplacer une voiture mais vous n'y connaissez 
            rien en panneaux de signalisation. Accédez à notre site, allumez votre caméra et laissez la magie s'opérer. 
            Désormais chacun de vos panneaux ou feux de signalisation sont expliqués et commentés en direct.''',
            'technology_stack': 'Python, YOLO, OpenCV, Flask, JavaScript, PWA',
            'features': '''• Détection de panneaux en temps réel
• Explication vocale et textuelle
• Interface web progressive (PWA)
• Mode caméra en direct
• Base de données complète des panneaux
• Support multilingue''',
            'is_featured': False,
            'created_date': datetime(2025, 9, 15).date(),
            'order': 5
        },
        {
            'name': 'MyCompanyGen',
            'short_description': 'IA générative pour rapports d\'entreprise',
            'description': '''MyCompanyGen est l'une des meilleures IA génératives jamais créées chez BlackBenAI. 
            Cette IA a été entraînée sur pleins de rapports d'entreprises. Sa principale utilité se trouve donc 
            au sein d'une entreprise : faire un rapport en entreprise devient donc un jeu d'enfant avec MyCompanyGen.''',
            'technology_stack': 'Python, GPT, Transformers, Django, React, PostgreSQL',
            'features': '''• Génération automatique de rapports
• Templates personnalisables
• Analyse de données intégrée
• Export multi-formats (PDF, Word, Excel)
• Interface intuitive
• API pour intégration''',
            'is_featured': False,
            'created_date': datetime(2025, 9, 20).date(),
            'order': 6
        }
    ]
    
    for project_data in projects_data:
        project, created = Project.objects.get_or_create(
            name=project_data['name'],
            defaults=project_data
        )
        print(f"✓ Projet '{project.name}' {'créé' if created else 'mis à jour'}")


def create_events():
    """Créer des événements"""
    events_data = [
        {
            'title': 'Lancement officiel de BlackBenAI',
            'short_description': 'Présentation officielle de la startup et de ses projets',
            'description': 'Événement de lancement officiel de BlackBenAI avec présentation des projets phares et de la vision de l\'entreprise.',
            'date': timezone.now() + timedelta(days=30),
            'location': 'Cotonou, Bénin',
            'event_type': 'launch',
            'is_featured': True
        },
        {
            'title': 'Conférence IA Afrique 2025',
            'short_description': 'Conférence sur l\'avenir de l\'IA en Afrique',
            'description': 'Grande conférence sur les enjeux et opportunités de l\'intelligence artificielle en Afrique.',
            'date': timezone.now() + timedelta(days=60),
            'location': 'Lagos, Nigeria',
            'event_type': 'conference',
            'is_featured': True
        },
        {
            'title': 'Atelier développement IA',
            'short_description': 'Formation pratique au développement d\'IA',
            'description': 'Atelier pratique de formation au développement de solutions d\'intelligence artificielle.',
            'date': timezone.now() + timedelta(days=45),
            'location': 'Abidjan, Côte d\'Ivoire',
            'event_type': 'workshop',
            'is_featured': False
        }
    ]
    
    for event_data in events_data:
        event, created = Event.objects.get_or_create(
            title=event_data['title'],
            defaults=event_data
        )
        print(f"✓ Événement '{event.title}' {'créé' if created else 'mis à jour'}")


def create_partners():
    """Créer des partenaires"""
    partners_data = [
        {
            'name': 'Université d\'Abomey-Calavi',
            'description': 'Partenariat académique pour la recherche en IA',
            'partnership_type': 'academic',
            'order': 1
        },
        {
            'name': 'Google for Startups',
            'description': 'Programme d\'accompagnement pour startups tech',
            'partnership_type': 'strategic',
            'order': 2
        },
        {
            'name': 'Microsoft AI for Good',
            'description': 'Initiative pour l\'IA au service du bien commun',
            'partnership_type': 'technology',
            'order': 3
        }
    ]
    
    for partner_data in partners_data:
        partner, created = Partner.objects.get_or_create(
            name=partner_data['name'],
            defaults=partner_data
        )
        print(f"✓ Partenaire '{partner.name}' {'créé' if created else 'mis à jour'}")


def create_job_positions():
    """Créer des postes à pourvoir"""
    jobs_data = [
        {
            'title': 'CTO (Chef Technique et Opérationnel)',
            'department': 'management',
            'description': 'Nous recherchons un CTO expérimenté pour diriger notre équipe technique et définir notre stratégie technologique.',
            'requirements': '''• Master en informatique ou équivalent
• 5+ années d'expérience en direction technique
• Expertise en IA et machine learning
• Leadership et management d'équipe
• Vision stratégique''',
            'benefits': '''• Salaire compétitif + equity
• Environnement de travail stimulant
• Opportunité de façonner l'avenir de l'IA en Afrique
• Formation continue
• Télétravail possible''',
            'location': 'Cotonou, Bénin',
            'employment_type': 'full_time'
        },
        {
            'title': 'Directeur Exécutif',
            'department': 'management',
            'description': 'Poste de direction pour superviser les opérations quotidiennes et la stratégie business.',
            'requirements': '''• MBA ou équivalent
• 7+ années d'expérience en direction
• Connaissance du secteur tech
• Compétences en stratégie business
• Excellent relationnel''',
            'benefits': '''• Package de rémunération attractif
• Participation aux décisions stratégiques
• Environnement entrepreneurial
• Opportunités de networking
• Avantages sociaux complets''',
            'location': 'Cotonou, Bénin',
            'employment_type': 'full_time'
        },
        {
            'title': 'RH en Chef',
            'department': 'hr',
            'description': 'Responsable des ressources humaines pour développer notre équipe et notre culture d\'entreprise.',
            'requirements': '''• Master en RH ou équivalent
• 5+ années d'expérience en RH
• Expérience en recrutement tech
• Connaissance du droit du travail
• Compétences en développement RH''',
            'benefits': '''• Salaire attractif
• Opportunité de construire une équipe
• Formation en management
• Environnement innovant
• Flexibilité horaire''',
            'location': 'Cotonou, Bénin',
            'employment_type': 'full_time'
        }
    ]
    
    for job_data in jobs_data:
        job, created = JobPosition.objects.get_or_create(
            title=job_data['title'],
            defaults=job_data
        )
        print(f"✓ Poste '{job.title}' {'créé' if created else 'mis à jour'}")


def create_faqs():
    """Créer des FAQ"""
    faqs_data = [
        {
            'question': 'Qu\'est-ce que BlackBenAI ?',
            'answer': 'BlackBenAI est une startup béninoise spécialisée dans le développement de solutions d\'intelligence artificielle innovantes pour l\'Afrique.',
            'category': 'general',
            'is_featured': True,
            'order': 1
        },
        {
            'question': 'Quels sont vos principaux projets ?',
            'answer': 'Nos projets phares incluent Edushare (partage éducatif), GuardClause (analyse de CGU), SecurLog (surveillance), WithSign (traduction langue des signes), HowRoadCode (code de la route) et MyCompanyGen (rapports d\'entreprise).',
            'category': 'projects',
            'is_featured': True,
            'order': 2
        },
        {
            'question': 'Comment puis-je rejoindre votre équipe ?',
            'answer': 'Consultez notre page Carrières pour voir les postes disponibles et postulez en ligne. Nous recherchons des talents passionnés par l\'IA.',
            'category': 'general',
            'is_featured': True,
            'order': 3
        },
        {
            'question': 'Proposez-vous des services de consultation ?',
            'answer': 'Oui, nous offrons des services de consultation en IA pour aider les entreprises à définir et mettre en œuvre leur stratégie d\'intelligence artificielle.',
            'category': 'services',
            'is_featured': False,
            'order': 4
        }
    ]
    
    for faq_data in faqs_data:
        faq, created = FAQ.objects.get_or_create(
            question=faq_data['question'],
            defaults=faq_data
        )
        print(f"✓ FAQ '{faq.question}' {'créée' if created else 'mise à jour'}")


def create_blog_posts():
    """Créer des articles de blog"""
    blog_posts_data = [
        {
            'title': 'L\'avenir de l\'Intelligence Artificielle en Afrique',
            'slug': 'avenir-ia-afrique',
            'excerpt': 'Découvrez comment l\'IA peut transformer le continent africain et les opportunités qu\'elle représente.',
            'content': '''L'intelligence artificielle représente une opportunité unique pour l'Afrique de leapfrog 
            certaines étapes de développement technologique. Chez BlackBenAI, nous croyons fermement que l'Afrique 
            peut devenir un leader mondial en IA...''',
            'author': 'Marino ATOHOUN',
            'category': 'ai',
            'tags': 'IA, Afrique, Innovation, Technologie',
            'is_published': True,
            'is_featured': True,
            'published_date': timezone.now() - timedelta(days=7)
        },
        {
            'title': 'Présentation de nos projets phares',
            'slug': 'projets-phares-blackbenai',
            'excerpt': 'Un aperçu détaillé de nos six projets principaux et leur impact sur la société.',
            'content': '''Depuis notre création, BlackBenAI a développé six projets majeurs qui illustrent notre 
            vision de l'IA au service de l'humanité. De Edushare à MyCompanyGen, chaque projet répond à un besoin 
            réel de la société...''',
            'author': 'Marino ATOHOUN',
            'category': 'projects',
            'tags': 'Projets, Innovation, Solutions',
            'is_published': True,
            'is_featured': True,
            'published_date': timezone.now() - timedelta(days=14)
        },
        {
            'title': 'Comment l\'IA peut révolutionner l\'éducation',
            'slug': 'ia-revolution-education',
            'excerpt': 'L\'impact de l\'intelligence artificielle sur l\'éducation et l\'apprentissage.',
            'content': '''L'éducation est l'un des secteurs où l'IA peut avoir l'impact le plus positif. 
            Notre projet Edushare en est un parfait exemple...''',
            'author': 'Marino ATOHOUN',
            'category': 'ai',
            'tags': 'IA, Éducation, Edushare',
            'is_published': True,
            'is_featured': False,
            'published_date': timezone.now() - timedelta(days=21)
        }
    ]
    
    for post_data in blog_posts_data:
        post, created = BlogPost.objects.get_or_create(
            slug=post_data['slug'],
            defaults=post_data
        )
        print(f"✓ Article '{post.title}' {'créé' if created else 'mis à jour'}")


def create_testimonials():
    """Créer des témoignages"""
    testimonials_data = [
        {
            'name': 'Dr. Adjovi BOCO',
            'position': 'Professeur d\'Informatique',
            'company': 'Université d\'Abomey-Calavi',
            'content': 'BlackBenAI représente l\'avenir de la technologie en Afrique. Leur approche innovante et leur vision claire font d\'eux des pionniers dans le domaine de l\'IA.',
            'rating': 5,
            'is_featured': True,
            'order': 1
        },
        {
            'name': 'Marie KONE',
            'position': 'Directrice Innovation',
            'company': 'TechHub Abidjan',
            'content': 'Les solutions développées par BlackBenAI sont impressionnantes. Leur projet SecurLog a révolutionné notre approche de la sécurité.',
            'rating': 5,
            'is_featured': True,
            'order': 2
        },
        {
            'name': 'Jean-Baptiste MENSAH',
            'position': 'CEO',
            'company': 'EduTech Solutions',
            'content': 'Edushare a transformé notre façon de partager les ressources éducatives. Une solution brillante et nécessaire.',
            'rating': 5,
            'is_featured': True,
            'order': 3
        }
    ]
    
    for testimonial_data in testimonials_data:
        testimonial, created = Testimonial.objects.get_or_create(
            name=testimonial_data['name'],
            company=testimonial_data['company'],
            defaults=testimonial_data
        )
        print(f"✓ Témoignage de '{testimonial.name}' {'créé' if created else 'mis à jour'}")


def main():
    """Fonction principale pour peupler la base de données"""
    print("🚀 Début du peuplement de la base de données BlackBenAI...")
    
    create_company_info()
    create_values()
    create_services()
    create_projects()
    create_events()
    create_partners()
    create_job_positions()
    create_faqs()
    create_blog_posts()
    create_testimonials()
    
    print("\n✅ Base de données peuplée avec succès !")
    print("🔗 Vous pouvez maintenant accéder à l'admin Django : http://localhost:8000/admin/")
    print("👤 Identifiants : admin / admin123")


if __name__ == '__main__':
    main()