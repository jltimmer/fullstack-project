from django.contrib.auth.models import User, Group
from .models import Puppy
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class PuppySerializer(serializers.ModelSerializer):
    class Meta:
        model = Puppy
        fields = ["name", "is_adoptable", "breed", "color", "weight"]
