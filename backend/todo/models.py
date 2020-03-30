from django.db import models
from django.contrib.auth.models import User

class Tarefa(models.Model):
    descricao=models.CharField(max_length=200)
    criado_por=models.ForeignKey(User, on_delete=models.CASCADE)
    concluida=models.BooleanField(default=False)


