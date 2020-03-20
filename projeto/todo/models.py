from django.db import models

class Tarefa(models.Model):
    descricao=models.CharField(max_length=200)
    criado_por=models.IntegerField()#endereça pra um usuario unico
    concluida=models.BooleanField(default=False)


