from django.urls import path
from . import views

urlpatterns = [
    path('', views.kezdolap, name='kezdolap'),  # Alapértelmezett útvonal a kezdőlapra
    path('kedveles/<int:hirdetes_id>/', views.hirdetes_kedveles, name='hirdetes_kedveles'),
    path('kereses/', views.hirdetes_kereses, name='hirdetes_kereses'),
    path('hirdetesek/', views.hirdetesek_lista, name='hirdetesek_lista'),  # Új útvonal a hirdetésekhez
]
