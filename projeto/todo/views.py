from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import SerializiadorTarefa, SerializadorUsuario
from .models import Tarefa


class ViewDaTarefa(viewsets.ModelViewSet):
    serializer_class=SerializiadorTarefa
    queryset =Tarefa.objects.all()

class CriacaoUsuario(generics.CreateAPIView):
    serializer_class=SerializadorUsuario