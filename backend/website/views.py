"""
Vues API Django REST Framework pour BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from rest_framework import generics, viewsets, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.utils import timezone
from datetime import datetime, timedelta

from .models import (
    CompanyInfo, Value, Service, Project, ProjectImage, Event, Partner,
    JobPosition, ContactMessage, SupportTicket, FAQ, NewsletterSubscriber,
    BlogPost, Testimonial
)
from .serializers import (
    CompanyInfoSerializer, ValueSerializer, ServiceSerializer, ProjectSerializer,
    ProjectListSerializer, EventSerializer, PartnerSerializer, JobPositionSerializer,
    ContactMessageSerializer, SupportTicketSerializer, FAQSerializer,
    NewsletterSubscriberSerializer, BlogPostSerializer, BlogPostListSerializer,
    TestimonialSerializer, HomePageSerializer, AboutPageSerializer,
    ServicesPageSerializer, ProjectsPageSerializer, ContactFormSerializer,
    SupportFormSerializer, NewsletterSubscriptionSerializer
)


class CompanyInfoViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les informations de l'entreprise"""
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer


class ValueViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les valeurs de l'entreprise"""
    queryset = Value.objects.all()
    serializer_class = ValueSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les services"""
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les projets"""
    queryset = Project.objects.filter(is_active=True)
    
    def get_serializer_class(self):
        """Utiliser un serializer différent selon l'action"""
        if self.action == 'list':
            return ProjectListSerializer
        return ProjectSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupérer les projets vedettes"""
        featured_projects = self.queryset.filter(is_featured=True)
        serializer = ProjectListSerializer(featured_projects, many=True)
        return Response(serializer.data)


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les événements"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Récupérer les événements à venir"""
        upcoming_events = self.queryset.filter(date__gte=timezone.now())[:5]
        serializer = EventSerializer(upcoming_events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupérer les événements vedettes"""
        featured_events = self.queryset.filter(is_featured=True)
        serializer = EventSerializer(featured_events, many=True)
        return Response(serializer.data)


class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les partenaires"""
    queryset = Partner.objects.filter(is_active=True)
    serializer_class = PartnerSerializer


class JobPositionViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les postes à pourvoir"""
    queryset = JobPosition.objects.filter(is_active=True)
    serializer_class = JobPositionSerializer


class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les FAQ"""
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupérer les FAQ vedettes"""
        featured_faqs = self.queryset.filter(is_featured=True)
        serializer = FAQSerializer(featured_faqs, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Récupérer les FAQ par catégorie"""
        category = request.query_params.get('category')
        if category:
            faqs = self.queryset.filter(category=category)
            serializer = FAQSerializer(faqs, many=True)
            return Response(serializer.data)
        return Response({'error': 'Paramètre category requis'}, status=400)


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les articles de blog"""
    queryset = BlogPost.objects.filter(is_published=True)
    
    def get_serializer_class(self):
        """Utiliser un serializer différent selon l'action"""
        if self.action == 'list':
            return BlogPostListSerializer
        return BlogPostSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupérer les articles vedettes"""
        featured_posts = self.queryset.filter(is_featured=True)[:3]
        serializer = BlogPostListSerializer(featured_posts, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def recent(self, request):
        """Récupérer les articles récents"""
        recent_posts = self.queryset.order_by('-published_date')[:5]
        serializer = BlogPostListSerializer(recent_posts, many=True)
        return Response(serializer.data)


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet pour les témoignages"""
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupérer les témoignages vedettes"""
        featured_testimonials = self.queryset.filter(is_featured=True)
        serializer = TestimonialSerializer(featured_testimonials, many=True)
        return Response(serializer.data)


# Vues pour les pages spécifiques

@api_view(['GET'])
def home_page_data(request):
    """Données pour la page d'accueil"""
    try:
        company_info = CompanyInfo.objects.first()
        featured_projects = Project.objects.filter(is_featured=True, is_active=True)[:3]
        featured_services = Service.objects.filter(is_active=True)[:4]
        featured_testimonials = Testimonial.objects.filter(is_featured=True)[:3]
        recent_blog_posts = BlogPost.objects.filter(is_published=True)[:3]
        upcoming_events = Event.objects.filter(date__gte=timezone.now())[:3]

        data = {
            'company_info': CompanyInfoSerializer(company_info).data if company_info else None,
            'featured_projects': ProjectListSerializer(featured_projects, many=True).data,
            'featured_services': ServiceSerializer(featured_services, many=True).data,
            'featured_testimonials': TestimonialSerializer(featured_testimonials, many=True).data,
            'recent_blog_posts': BlogPostListSerializer(recent_blog_posts, many=True).data,
            'upcoming_events': EventSerializer(upcoming_events, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
def about_page_data(request):
    """Données pour la page À propos"""
    try:
        company_info = CompanyInfo.objects.first()
        values = Value.objects.all()
        testimonials = Testimonial.objects.all()[:6]

        data = {
            'company_info': CompanyInfoSerializer(company_info).data if company_info else None,
            'values': ValueSerializer(values, many=True).data,
            'testimonials': TestimonialSerializer(testimonials, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
def services_page_data(request):
    """Données pour la page Services"""
    try:
        services = Service.objects.filter(is_active=True)
        testimonials = Testimonial.objects.filter(is_featured=True)

        data = {
            'services': ServiceSerializer(services, many=True).data,
            'testimonials': TestimonialSerializer(testimonials, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
def projects_page_data(request):
    """Données pour la page Projets"""
    try:
        projects = Project.objects.filter(is_active=True)
        featured_projects = projects.filter(is_featured=True)

        data = {
            'projects': ProjectListSerializer(projects, many=True).data,
            'featured_projects': ProjectListSerializer(featured_projects, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)


# Vues pour les formulaires

@api_view(['POST'])
def contact_form(request):
    """Traiter le formulaire de contact"""
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def support_form(request):
    """Traiter le formulaire de support"""
    serializer = SupportFormSerializer(data=request.data)
    if serializer.is_valid():
        ticket = serializer.save()
        return Response({
            'message': f'Votre ticket de support #{ticket.id} a été créé avec succès.',
            'ticket_id': ticket.id
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def newsletter_subscription(request):
    """Traiter l'abonnement newsletter"""
    serializer = NewsletterSubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        subscriber = serializer.save()
        return Response({
            'message': 'Vous êtes maintenant abonné à notre newsletter !'
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Vues pour les statistiques

@api_view(['GET'])
def site_stats(request):
    """Statistiques générales du site"""
    try:
        stats = {
            'total_projects': Project.objects.filter(is_active=True).count(),
            'total_services': Service.objects.filter(is_active=True).count(),
            'total_partners': Partner.objects.filter(is_active=True).count(),
            'total_blog_posts': BlogPost.objects.filter(is_published=True).count(),
            'newsletter_subscribers': NewsletterSubscriber.objects.filter(is_active=True).count(),
            'open_positions': JobPosition.objects.filter(is_active=True).count(),
        }
        return Response(stats)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
