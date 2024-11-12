from rest_framework import serializers
from ingatlan.models import Hirdetes

class HirdetesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hirdetes
        fields = '__all__'
