"""
Configuration des URLs pour BlackBenAI
Site web officiel de BlackBenAI - Startup béninoise d'intelligence artificielle
Développé par Marino ATOHOUN - Président Directeur Général de BlackBenAI
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Interface d'administration Django
    path('admin/', admin.site.urls),
    
    # URLs de l'application website (API)
    path('', include('website.urls')),
]

# Servir les fichiers media en développement
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
