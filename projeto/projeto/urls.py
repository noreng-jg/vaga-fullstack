from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views
from rest_framework.documentation import include_docs_urls

router=routers.DefaultRouter()
router.register(r'tarefas', views.ViewDaTarefa, 'tarefa')


urlpatterns = [
    path('admin/', admin.site.urls),
    path("signup/", views.CriacaoUsuario.as_view(), name="registro"),
    path('', include(router.urls)),
    path('' ,include('rest_auth.urls')),
    path('docs/', include_docs_urls(title='Serviço de APi'), name='APi')
]
