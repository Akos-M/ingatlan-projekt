from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HirdetesViewSet

router = DefaultRouter()
router.register(r'hirdetesek', HirdetesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
