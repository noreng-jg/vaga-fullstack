from rest_framework import serializers
from .models import Tarefa
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class SerializiadorTarefa(serializers.ModelSerializer):
    class Meta:
        model=Tarefa
        #pela descricao do modelo
        fields=('id','descricao', 'criado_por', 'concluida')
    

#Serializador de usuario para autentificacao
class SerializadorUsuario(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username', 'email', 'password')
        extra_kwargs={'password': {'write_only': True}} #oculta caracteres digitados no form

    def create(self, validated_data): #Cadastro de um novo usuario
        user=User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user