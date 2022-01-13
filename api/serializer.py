from django.db.models import fields
from rest_framework import serializers
from .models import Task

class TaskSerialzers(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'