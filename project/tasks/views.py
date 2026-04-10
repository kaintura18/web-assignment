from django.shortcuts import render

# Create your views here.
# tasks/views.py

# tasks/views.py

from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from django.http import HttpResponse

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer