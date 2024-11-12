from django.shortcuts import render

from rest_framework import viewsets
from ingatlan.models import Hirdetes
from .serializers import HirdetesSerializer

class HirdetesViewSet(viewsets.ModelViewSet):
    queryset = Hirdetes.objects.all()
    serializer_class = HirdetesSerializer
