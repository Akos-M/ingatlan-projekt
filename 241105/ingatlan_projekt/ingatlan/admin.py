from django.contrib import admin
from .models import Hirdetes, Kedveles

class HirdetesAdmin(admin.ModelAdmin):
    list_display = ('cim', 'ar', 'datum')
    search_fields = ('cim', 'leiras')

admin.site.register(Hirdetes, HirdetesAdmin)
admin.site.register(Kedveles)
