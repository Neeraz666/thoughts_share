from rest_framework import serializers
from .models import Content
from users.models import UserAccount

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('email', 'firstname', 'lastname', 'profilephoto', 'profilebio')

class ContentViewSerializer(serializers.ModelSerializer):
    user = UserAccountSerializer()

    class Meta:
        model = Content
        fields = '__all__'