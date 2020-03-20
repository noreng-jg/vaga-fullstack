from rest_framework import serializers
from .models import Tarefa

class SerializiadorTarefa(serializers.ModelSerializer):
    class Meta:
        model=Tarefa
        #pela descricao do modelo
        fields=('id','descricao', 'criado_por', 'concluida')