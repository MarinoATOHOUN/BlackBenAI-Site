"""
Serializers Django REST Framework pour l'API BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from rest_framework import serializers
from .models import (
    CompanyInfo, Value, Service, Project, ProjectImage, Event, Partner,
    JobPosition, ContactMessage, SupportTicket, FAQ, NewsletterSubscriber,
    BlogPost, Testimonial
)


class CompanyInfoSerializer(serializers.ModelSerializer):
    """Serializer pour les informations de l'entreprise"""
    
    class Meta:
        model = CompanyInfo
        fields = '__all__'


class ValueSerializer(serializers.ModelSerializer):
    """Serializer pour les valeurs de l'entreprise"""
    
    class Meta:
        model = Value
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    """Serializer pour les services"""
    
    class Meta:
        model = Service
        fields = '__all__'


class ProjectImageSerializer(serializers.ModelSerializer):
    """Serializer pour les images de projets"""
    
    class Meta:
        model = ProjectImage
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    """Serializer pour les projets avec images associées"""
    images = ProjectImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'


class ProjectListSerializer(serializers.ModelSerializer):
    """Serializer simplifié pour la liste des projets"""
    
    class Meta:
        model = Project
        fields = [
            'id', 'name', 'short_description', 'image', 'logo',
            'is_featured', 'created_date', 'demo_url', 'website_url'
        ]


class EventSerializer(serializers.ModelSerializer):
    """Serializer pour les événements"""
    
    class Meta:
        model = Event
        fields = '__all__'


class PartnerSerializer(serializers.ModelSerializer):
    """Serializer pour les partenaires"""
    
    class Meta:
        model = Partner
        fields = '__all__'


class JobPositionSerializer(serializers.ModelSerializer):
    """Serializer pour les postes à pourvoir"""
    
    class Meta:
        model = JobPosition
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    """Serializer pour les messages de contact"""
    
    class Meta:
        model = ContactMessage
        fields = '__all__'
        read_only_fields = ('created_date', 'is_read')


class SupportTicketSerializer(serializers.ModelSerializer):
    """Serializer pour les tickets de support"""
    
    class Meta:
        model = SupportTicket
        fields = '__all__'
        read_only_fields = ('created_date', 'updated_date', 'status')


class FAQSerializer(serializers.ModelSerializer):
    """Serializer pour les FAQ"""
    
    class Meta:
        model = FAQ
        fields = '__all__'


class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    """Serializer pour les abonnés newsletter"""
    
    class Meta:
        model = NewsletterSubscriber
        fields = '__all__'
        read_only_fields = ('subscribed_date', 'is_active')


class BlogPostSerializer(serializers.ModelSerializer):
    """Serializer pour les articles de blog"""
    
    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogPostListSerializer(serializers.ModelSerializer):
    """Serializer simplifié pour la liste des articles"""
    
    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'excerpt', 'featured_image',
            'author', 'category', 'is_featured', 'published_date'
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    """Serializer pour les témoignages"""
    
    class Meta:
        model = Testimonial
        fields = '__all__'


# Serializers spéciaux pour les pages spécifiques

class HomePageSerializer(serializers.Serializer):
    """Serializer pour les données de la page d'accueil"""
    company_info = CompanyInfoSerializer()
    featured_projects = ProjectListSerializer(many=True)
    featured_services = ServiceSerializer(many=True)
    featured_testimonials = TestimonialSerializer(many=True)
    recent_blog_posts = BlogPostListSerializer(many=True)
    upcoming_events = EventSerializer(many=True)


class AboutPageSerializer(serializers.Serializer):
    """Serializer pour les données de la page À propos"""
    company_info = CompanyInfoSerializer()
    values = ValueSerializer(many=True)
    testimonials = TestimonialSerializer(many=True)


class ServicesPageSerializer(serializers.Serializer):
    """Serializer pour les données de la page Services"""
    services = ServiceSerializer(many=True)
    testimonials = TestimonialSerializer(many=True)


class ProjectsPageSerializer(serializers.Serializer):
    """Serializer pour les données de la page Projets"""
    projects = ProjectListSerializer(many=True)
    featured_projects = ProjectListSerializer(many=True)


class ContactFormSerializer(serializers.Serializer):
    """Serializer pour le formulaire de contact"""
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    subject = serializers.CharField(max_length=200)
    message = serializers.CharField()
    phone = serializers.CharField(max_length=20, required=False, allow_blank=True)
    company = serializers.CharField(max_length=100, required=False, allow_blank=True)

    def create(self, validated_data):
        """Créer un nouveau message de contact"""
        return ContactMessage.objects.create(**validated_data)


class SupportFormSerializer(serializers.Serializer):
    """Serializer pour le formulaire de support"""
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    subject = serializers.CharField(max_length=200)
    description = serializers.CharField()
    priority = serializers.ChoiceField(choices=[
        ('low', 'Faible'),
        ('medium', 'Moyenne'),
        ('high', 'Élevée'),
        ('urgent', 'Urgente')
    ], default='medium')

    def create(self, validated_data):
        """Créer un nouveau ticket de support"""
        return SupportTicket.objects.create(**validated_data)


class NewsletterSubscriptionSerializer(serializers.Serializer):
    """Serializer pour l'abonnement newsletter"""
    email = serializers.EmailField()
    name = serializers.CharField(max_length=100, required=False, allow_blank=True)

    def create(self, validated_data):
        """Créer un nouvel abonné newsletter"""
        subscriber, created = NewsletterSubscriber.objects.get_or_create(
            email=validated_data['email'],
            defaults={'name': validated_data.get('name', '')}
        )
        return subscriber

    def validate_email(self, value):
        """Valider que l'email n'est pas déjà abonné"""
        if NewsletterSubscriber.objects.filter(email=value, is_active=True).exists():
            raise serializers.ValidationError("Cet email est déjà abonné à notre newsletter.")
        return value