from django.contrib import admin
from .models import Tarefa

class TarefaAdmin(admin.ModelAdmin):
    painel=('nome', 'id', 'status')

admin.site.register(Tarefa, TarefaAdmin)
