# main/serializers.py (ЭКИ СЕРИАЛАЙЗЕР МЕНЕН)

from rest_framework import serializers
from .models import Doctor, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

# 1. Дарыгерлердин ТИЗМЕСИ үчүн сериалайзер (бул жерде 'reviews' жок)
class DoctorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = [
            'id', 
            'name', 
            'specialty', 
            'image',
            'online_consultation_price',
            'ask_question_price',
            'whatsapp_number',
        ]

# 2. Бир даана дарыгердин ТОЛУК МААЛЫМАТЫ үчүн сериалайзер (бул жерде 'reviews' БАР)
class DoctorDetailSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    
    class Meta:
        model = Doctor
        fields = [
            'id', 
            'name', 
            'specialty', 
            'image', 
            'bio', 
            'reviews',
            'online_consultation_price',
            'ask_question_price',
            'whatsapp_number',
        ]