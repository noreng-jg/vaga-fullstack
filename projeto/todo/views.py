from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, authentication
from .serializers import SerializiadorTarefa, SerializadorUsuario
from .models import Tarefa
from django.contrib.auth import authenticate
from rest_framework.exceptions import PermissionDenied
from .permissions import IsOwner

class ViewDaTarefa(viewsets.ModelViewSet):
    serializer_class=SerializiadorTarefa
    #precisa ser algo desse tipo: [i.descricao for i in Tarefa.objects.filter(criado_por=1)]
    permision_classes=[IsOwner]
    #authentication_classes=[authentication.TokenAuthentication]
    def get_queryset(self):
        user=self.request.user
        return Tarefa.objects.filter(criado_por=user)


class CriacaoUsuario(generics.CreateAPIView):
    serializer_class=SerializadorUsuario