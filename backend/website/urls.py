"""
URLs pour l'API BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Configuration du router pour les ViewSets
router = DefaultRouter()
router.register(r'company-info', views.CompanyInfoViewSet)
router.register(r'values', views.ValueViewSet)
router.register(r'services', views.ServiceViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'partners', views.PartnerViewSet)
router.register(r'jobs', views.JobPositionViewSet)
router.register(r'faqs', views.FAQViewSet)
router.register(r'blog', views.BlogPostViewSet)
router.register(r'testimonials', views.TestimonialViewSet)

urlpatterns = [
    # URLs du router
    path('api/', include(router.urls)),
    
    # URLs pour les pages spécifiques
    path('api/pages/home/', views.home_page_data, name='home-page-data'),
    path('api/pages/about/', views.about_page_data, name='about-page-data'),
    path('api/pages/services/', views.services_page_data, name='services-page-data'),
    path('api/pages/projects/', views.projects_page_data, name='projects-page-data'),
    
    # URLs pour les formulaires
    path('api/contact/', views.contact_form, name='contact-form'),
    path('api/support/', views.support_form, name='support-form'),
    path('api/newsletter/', views.newsletter_subscription, name='newsletter-subscription'),
    
    # URLs pour les statistiques
    path('api/stats/', views.site_stats, name='site-stats'),
]