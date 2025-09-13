"""
Interface d'administration Django pour BlackBenAI
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from django.contrib import admin
from django.utils.html import format_html
from .models import (
    CompanyInfo, Value, Service, Project, ProjectImage, Event, Partner,
    JobPosition, ContactMessage, SupportTicket, FAQ, NewsletterSubscriber,
    BlogPost, Testimonial
)


@admin.register(CompanyInfo)
class CompanyInfoAdmin(admin.ModelAdmin):
    """Administration des informations de l'entreprise"""
    list_display = ('name', 'founder', 'founded_date')
    fields = (
        'name', 'tagline', 'description', 'mission', 'vision',
        'founded_date', 'founder', 'logo', 'hero_image'
    )
    
    def has_add_permission(self, request):
        """Limiter à une seule instance d'informations d'entreprise"""
        return not CompanyInfo.objects.exists()


@admin.register(Value)
class ValueAdmin(admin.ModelAdmin):
    """Administration des valeurs de l'entreprise"""
    list_display = ('title', 'icon', 'order')
    list_editable = ('order',)
    ordering = ('order',)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """Administration des services"""
    list_display = ('name', 'short_description', 'is_active', 'order')
    list_filter = ('is_active',)
    list_editable = ('is_active', 'order')
    search_fields = ('name', 'description')
    ordering = ('order',)


class ProjectImageInline(admin.TabularInline):
    """Inline pour les images de projets"""
    model = ProjectImage
    extra = 1


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    """Administration des projets"""
    list_display = ('name', 'short_description', 'is_featured', 'is_active', 'created_date', 'order')
    list_filter = ('is_featured', 'is_active', 'created_date')
    list_editable = ('is_featured', 'is_active', 'order')
    search_fields = ('name', 'description', 'technology_stack')
    date_hierarchy = 'created_date'
    ordering = ('order',)
    inlines = [ProjectImageInline]
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('name', 'short_description', 'description', 'created_date')
        }),
        ('Détails techniques', {
            'fields': ('technology_stack', 'features')
        }),
        ('Liens et médias', {
            'fields': ('demo_url', 'github_url', 'website_url', 'image', 'logo')
        }),
        ('Options', {
            'fields': ('is_featured', 'is_active', 'order')
        }),
    )


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    """Administration des événements"""
    list_display = ('title', 'event_type', 'date', 'location', 'is_featured')
    list_filter = ('event_type', 'is_featured', 'date')
    list_editable = ('is_featured',)
    search_fields = ('title', 'description', 'location')
    date_hierarchy = 'date'
    ordering = ('-date',)


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    """Administration des partenaires"""
    list_display = ('name', 'partnership_type', 'is_active', 'order')
    list_filter = ('partnership_type', 'is_active')
    list_editable = ('is_active', 'order')
    search_fields = ('name', 'description')
    ordering = ('order',)


@admin.register(JobPosition)
class JobPositionAdmin(admin.ModelAdmin):
    """Administration des postes à pourvoir"""
    list_display = ('title', 'department', 'employment_type', 'location', 'is_active', 'created_date')
    list_filter = ('department', 'employment_type', 'is_active', 'created_date')
    list_editable = ('is_active',)
    search_fields = ('title', 'description', 'requirements')
    date_hierarchy = 'created_date'
    ordering = ('-created_date',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    """Administration des messages de contact"""
    list_display = ('name', 'email', 'subject', 'created_date', 'is_read')
    list_filter = ('is_read', 'created_date')
    list_editable = ('is_read',)
    search_fields = ('name', 'email', 'subject', 'message')
    date_hierarchy = 'created_date'
    ordering = ('-created_date',)
    readonly_fields = ('created_date',)
    
    def get_queryset(self, request):
        """Marquer les messages non lus en gras"""
        return super().get_queryset(request)


@admin.register(SupportTicket)
class SupportTicketAdmin(admin.ModelAdmin):
    """Administration des tickets de support"""
    list_display = ('id', 'name', 'email', 'subject', 'priority', 'status', 'created_date')
    list_filter = ('priority', 'status', 'created_date')
    list_editable = ('status',)
    search_fields = ('name', 'email', 'subject', 'description')
    date_hierarchy = 'created_date'
    ordering = ('-created_date',)
    readonly_fields = ('created_date', 'updated_date')


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    """Administration des FAQ"""
    list_display = ('question', 'category', 'is_featured', 'order')
    list_filter = ('category', 'is_featured')
    list_editable = ('is_featured', 'order')
    search_fields = ('question', 'answer')
    ordering = ('order',)


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    """Administration des abonnés newsletter"""
    list_display = ('email', 'name', 'is_active', 'subscribed_date')
    list_filter = ('is_active', 'subscribed_date')
    list_editable = ('is_active',)
    search_fields = ('email', 'name')
    date_hierarchy = 'subscribed_date'
    ordering = ('-subscribed_date',)
    readonly_fields = ('subscribed_date',)


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    """Administration des articles de blog"""
    list_display = ('title', 'author', 'category', 'is_published', 'is_featured', 'published_date')
    list_filter = ('category', 'is_published', 'is_featured', 'published_date')
    list_editable = ('is_published', 'is_featured')
    search_fields = ('title', 'content', 'tags')
    date_hierarchy = 'published_date'
    ordering = ('-published_date',)
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_date',)
    
    fieldsets = (
        ('Contenu', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'featured_image')
        }),
        ('Métadonnées', {
            'fields': ('author', 'category', 'tags')
        }),
        ('Publication', {
            'fields': ('is_published', 'is_featured', 'published_date')
        }),
        ('Dates', {
            'fields': ('created_date',),
            'classes': ('collapse',)
        }),
    )


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    """Administration des témoignages"""
    list_display = ('name', 'company', 'position', 'rating', 'is_featured', 'order')
    list_filter = ('rating', 'is_featured')
    list_editable = ('is_featured', 'order')
    search_fields = ('name', 'company', 'content')
    ordering = ('order',)


# Personnalisation de l'interface d'administration
admin.site.site_header = "BlackBenAI - Administration"
admin.site.site_title = "BlackBenAI Admin"
admin.site.index_title = "Gestion du site BlackBenAI"
