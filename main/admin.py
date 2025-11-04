# main/admin.py

from django.contrib import admin
from .models import Doctor, Review

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    # Дарыгерлердин тизмесинде ушул талаалар көрүнүп турат
    list_display = (
        'name', 
        'specialty', 
        'online_consultation_price', 
        'whatsapp_number', 
        'is_active'
    )
    search_fields = ('name', 'specialty')
    list_filter = ('is_active',)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'text')
    search_fields = ('doctor__name',)