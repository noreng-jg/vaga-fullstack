from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views

router=routers.DefaultRouter()
router.register(r'tarefas', views.ViewDaTarefa, 'tarefa')


urlpatterns = [
    path('admin/', admin.site.urls),
    path("signup/", views.CriacaoUsuario.as_view(), name="registro"),
    path('', include(router.urls))
]
