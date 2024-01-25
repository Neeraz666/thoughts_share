from rest_framework import serializers
from .models import Content

class ContentViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = '__all__'