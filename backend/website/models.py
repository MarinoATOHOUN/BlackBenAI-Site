"""
Modèles Django pour le site web BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from django.db import models
from django.utils import timezone


class CompanyInfo(models.Model):
    """Informations générales sur l'entreprise BlackBenAI"""
    name = models.CharField(max_length=100, default="BlackBenAI", verbose_name="Nom de l'entreprise")
    tagline = models.CharField(max_length=200, verbose_name="Slogan")
    description = models.TextField(verbose_name="Description")
    mission = models.TextField(verbose_name="Mission")
    vision = models.TextField(verbose_name="Vision")
    founded_date = models.DateField(verbose_name="Date de fondation")
    founder = models.CharField(max_length=100, default="Marino ATOHOUN", verbose_name="Fondateur")
    logo = models.ImageField(upload_to='company/', blank=True, null=True, verbose_name="Logo")
    hero_image = models.ImageField(upload_to='company/', blank=True, null=True, verbose_name="Image héro")
    
    class Meta:
        verbose_name = "Information Entreprise"
        verbose_name_plural = "Informations Entreprise"
    
    def __str__(self):
        return self.name


class Value(models.Model):
    """Valeurs de l'entreprise"""
    title = models.CharField(max_length=100, verbose_name="Titre")
    description = models.TextField(verbose_name="Description")
    icon = models.CharField(max_length=50, verbose_name="Icône (classe CSS)")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "Valeur"
        verbose_name_plural = "Valeurs"
        ordering = ['order']
    
    def __str__(self):
        return self.title


class Service(models.Model):
    """Services offerts par BlackBenAI"""
    name = models.CharField(max_length=100, verbose_name="Nom du service")
    description = models.TextField(verbose_name="Description")
    short_description = models.CharField(max_length=200, verbose_name="Description courte")
    icon = models.CharField(max_length=50, verbose_name="Icône (classe CSS)")
    image = models.ImageField(upload_to='services/', blank=True, null=True, verbose_name="Image")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"
        ordering = ['order']
    
    def __str__(self):
        return self.name


class Project(models.Model):
    """Projets développés par BlackBenAI"""
    name = models.CharField(max_length=100, verbose_name="Nom du projet")
    description = models.TextField(verbose_name="Description détaillée")
    short_description = models.CharField(max_length=200, verbose_name="Description courte")
    technology_stack = models.CharField(max_length=200, verbose_name="Technologies utilisées")
    features = models.TextField(verbose_name="Fonctionnalités principales")
    demo_url = models.URLField(blank=True, null=True, verbose_name="URL de démonstration")
    github_url = models.URLField(blank=True, null=True, verbose_name="URL GitHub")
    website_url = models.URLField(blank=True, null=True, verbose_name="URL du site web")
    image = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Image principale")
    logo = models.ImageField(upload_to='projects/logos/', blank=True, null=True, verbose_name="Logo du projet")
    is_featured = models.BooleanField(default=False, verbose_name="Projet vedette")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    created_date = models.DateField(verbose_name="Date de création")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "Projet"
        verbose_name_plural = "Projets"
        ordering = ['order']
    
    def __str__(self):
        return self.name


class ProjectImage(models.Model):
    """Images supplémentaires pour les projets"""
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images', verbose_name="Projet")
    image = models.ImageField(upload_to='projects/gallery/', verbose_name="Image")
    caption = models.CharField(max_length=200, blank=True, verbose_name="Légende")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre")
    
    class Meta:
        verbose_name = "Image de Projet"
        verbose_name_plural = "Images de Projets"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.project.name} - Image {self.order}"


class Event(models.Model):
    """Événements de l'entreprise"""
    title = models.CharField(max_length=200, verbose_name="Titre")
    description = models.TextField(verbose_name="Description")
    short_description = models.CharField(max_length=200, verbose_name="Description courte")
    date = models.DateTimeField(verbose_name="Date et heure")
    location = models.CharField(max_length=200, verbose_name="Lieu")
    event_type = models.CharField(max_length=50, choices=[
        ('conference', 'Conférence'),
        ('workshop', 'Atelier'),
        ('launch', 'Lancement'),
        ('partnership', 'Partenariat'),
        ('other', 'Autre')
    ], verbose_name="Type d'événement")
    image = models.ImageField(upload_to='events/', blank=True, null=True, verbose_name="Image")
    registration_url = models.URLField(blank=True, null=True, verbose_name="URL d'inscription")
    is_featured = models.BooleanField(default=False, verbose_name="Événement vedette")
    
    class Meta:
        verbose_name = "Événement"
        verbose_name_plural = "Événements"
        ordering = ['-date']
    
    def __str__(self):
        return self.title


class Partner(models.Model):
    """Partenaires de BlackBenAI"""
    name = models.CharField(max_length=100, verbose_name="Nom du partenaire")
    description = models.TextField(blank=True, verbose_name="Description")
    logo = models.ImageField(upload_to='partners/', verbose_name="Logo")
    website_url = models.URLField(blank=True, null=True, verbose_name="Site web")
    partnership_type = models.CharField(max_length=50, choices=[
        ('strategic', 'Stratégique'),
        ('technology', 'Technologique'),
        ('academic', 'Académique'),
        ('investor', 'Investisseur'),
        ('client', 'Client')
    ], verbose_name="Type de partenariat")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "Partenaire"
        verbose_name_plural = "Partenaires"
        ordering = ['order']
    
    def __str__(self):
        return self.name


class JobPosition(models.Model):
    """Postes à pourvoir chez BlackBenAI"""
    title = models.CharField(max_length=100, verbose_name="Titre du poste")
    department = models.CharField(max_length=50, choices=[
        ('tech', 'Technique'),
        ('management', 'Direction'),
        ('hr', 'Ressources Humaines'),
        ('marketing', 'Marketing'),
        ('sales', 'Ventes')
    ], verbose_name="Département")
    description = models.TextField(verbose_name="Description du poste")
    requirements = models.TextField(verbose_name="Exigences")
    benefits = models.TextField(verbose_name="Avantages")
    location = models.CharField(max_length=100, verbose_name="Lieu")
    employment_type = models.CharField(max_length=50, choices=[
        ('full_time', 'Temps plein'),
        ('part_time', 'Temps partiel'),
        ('contract', 'Contrat'),
        ('internship', 'Stage')
    ], verbose_name="Type d'emploi")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    
    class Meta:
        verbose_name = "Poste à Pourvoir"
        verbose_name_plural = "Postes à Pourvoir"
        ordering = ['-created_date']
    
    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    """Messages de contact"""
    name = models.CharField(max_length=100, verbose_name="Nom")
    email = models.EmailField(verbose_name="Email")
    subject = models.CharField(max_length=200, verbose_name="Sujet")
    message = models.TextField(verbose_name="Message")
    phone = models.CharField(max_length=20, blank=True, verbose_name="Téléphone")
    company = models.CharField(max_length=100, blank=True, verbose_name="Entreprise")
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    is_read = models.BooleanField(default=False, verbose_name="Lu")
    
    class Meta:
        verbose_name = "Message de Contact"
        verbose_name_plural = "Messages de Contact"
        ordering = ['-created_date']
    
    def __str__(self):
        return f"{self.name} - {self.subject}"


class SupportTicket(models.Model):
    """Tickets de support technique"""
    name = models.CharField(max_length=100, verbose_name="Nom")
    email = models.EmailField(verbose_name="Email")
    subject = models.CharField(max_length=200, verbose_name="Sujet")
    description = models.TextField(verbose_name="Description du problème")
    priority = models.CharField(max_length=20, choices=[
        ('low', 'Faible'),
        ('medium', 'Moyenne'),
        ('high', 'Élevée'),
        ('urgent', 'Urgente')
    ], default='medium', verbose_name="Priorité")
    status = models.CharField(max_length=20, choices=[
        ('open', 'Ouvert'),
        ('in_progress', 'En cours'),
        ('resolved', 'Résolu'),
        ('closed', 'Fermé')
    ], default='open', verbose_name="Statut")
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    updated_date = models.DateTimeField(auto_now=True, verbose_name="Dernière mise à jour")
    
    class Meta:
        verbose_name = "Ticket de Support"
        verbose_name_plural = "Tickets de Support"
        ordering = ['-created_date']
    
    def __str__(self):
        return f"#{self.id} - {self.subject}"


class FAQ(models.Model):
    """Questions fréquemment posées"""
    question = models.CharField(max_length=200, verbose_name="Question")
    answer = models.TextField(verbose_name="Réponse")
    category = models.CharField(max_length=50, choices=[
        ('general', 'Général'),
        ('services', 'Services'),
        ('projects', 'Projets'),
        ('technical', 'Technique'),
        ('billing', 'Facturation')
    ], verbose_name="Catégorie")
    is_featured = models.BooleanField(default=False, verbose_name="Question vedette")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQ"
        ordering = ['order']
    
    def __str__(self):
        return self.question


class NewsletterSubscriber(models.Model):
    """Abonnés à la newsletter"""
    email = models.EmailField(unique=True, verbose_name="Email")
    name = models.CharField(max_length=100, blank=True, verbose_name="Nom")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    subscribed_date = models.DateTimeField(auto_now_add=True, verbose_name="Date d'abonnement")
    
    class Meta:
        verbose_name = "Abonné Newsletter"
        verbose_name_plural = "Abonnés Newsletter"
        ordering = ['-subscribed_date']
    
    def __str__(self):
        return self.email


class BlogPost(models.Model):
    """Articles de blog"""
    title = models.CharField(max_length=200, verbose_name="Titre")
    slug = models.SlugField(unique=True, verbose_name="Slug URL")
    content = models.TextField(verbose_name="Contenu")
    excerpt = models.CharField(max_length=300, verbose_name="Extrait")
    featured_image = models.ImageField(upload_to='blog/', blank=True, null=True, verbose_name="Image vedette")
    author = models.CharField(max_length=100, default="Marino ATOHOUN", verbose_name="Auteur")
    category = models.CharField(max_length=50, choices=[
        ('ai', 'Intelligence Artificielle'),
        ('tech', 'Technologie'),
        ('company', 'Entreprise'),
        ('projects', 'Projets'),
        ('tutorials', 'Tutoriels')
    ], verbose_name="Catégorie")
    tags = models.CharField(max_length=200, blank=True, verbose_name="Tags (séparés par des virgules)")
    is_published = models.BooleanField(default=False, verbose_name="Publié")
    is_featured = models.BooleanField(default=False, verbose_name="Article vedette")
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    published_date = models.DateTimeField(blank=True, null=True, verbose_name="Date de publication")
    
    class Meta:
        verbose_name = "Article de Blog"
        verbose_name_plural = "Articles de Blog"
        ordering = ['-published_date']
    
    def __str__(self):
        return self.title


class Testimonial(models.Model):
    """Témoignages clients"""
    name = models.CharField(max_length=100, verbose_name="Nom")
    position = models.CharField(max_length=100, verbose_name="Poste")
    company = models.CharField(max_length=100, verbose_name="Entreprise")
    content = models.TextField(verbose_name="Témoignage")
    photo = models.ImageField(upload_to='testimonials/', blank=True, null=True, verbose_name="Photo")
    rating = models.PositiveIntegerField(choices=[(i, i) for i in range(1, 6)], default=5, verbose_name="Note")
    is_featured = models.BooleanField(default=False, verbose_name="Témoignage vedette")
    order = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    
    class Meta:
        verbose_name = "Témoignage"
        verbose_name_plural = "Témoignages"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.name} - {self.company}"
