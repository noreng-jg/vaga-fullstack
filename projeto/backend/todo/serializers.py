from rest_framework import serializers
from .models import Tarefa
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class SerializiadorTarefa(serializers.ModelSerializer):
    criado_por=serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    
    class Meta:
        model=Tarefa
        #pela descricao do modelo
        fields=('id','descricao', 'criado_por', 'concluida')
    

#Serializador de usuario para autentificacao
class SerializadorUsuario(serializers.ModelSerializer):
    
    password2=serializers.CharField(style={'input_type':'password'}, write_only=True)
    password=serializers.CharField(style={'input_type':'password'}, write_only=True)
    
    class Meta:
        model=User
        fields=('username', 'email', 'first_name','last_name','password', 'password2')
        

    def create(self, validated_data): #Cadastro de um novo usuario
        user=User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        
        if password!=password2:
            raise serializers.ValidationError({'password':'As senhas não conferem'})
        
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user