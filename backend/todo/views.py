from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from .serializers import SerializiadorTarefa, SerializadorUsuario
from .models import Tarefa
from .permissions import IsOwner

class ViewDaTarefa(viewsets.ModelViewSet):
    serializer_class=SerializiadorTarefa
    permision_classes=[IsOwner]
    def get_queryset(self):
        user=self.request.user
        return Tarefa.objects.filter(criado_por=user)


class CriacaoUsuario(generics.CreateAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class=SerializadorUsuario