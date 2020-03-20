from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SerializiadorTarefa
from .models import Tarefa

class ViewDaTarefa(viewsets.ModelViewSet):
    serializer_class=SerializiadorTarefa
    queryset =Tarefa.objects.all()
