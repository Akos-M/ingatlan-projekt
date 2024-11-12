from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('hirdetesek_api.urls')),  # API URL-ek beállítása
    path('', include('ingatlan.urls')),  # Alapértelmezett útvonal beállítása
]
