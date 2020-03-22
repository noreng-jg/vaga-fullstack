from rest_framework import permissions

class UsuarioExiste(permissions.BasePermission):
    
    def permissao_objeto(self, request, view, obj):
        return obj==request.user or request.user.is_staff

class UsuarioAdm(permissions.BasePermission):

    def tem_permissao(self, request, view):
        return request.user and request.user.is_staff
    
    def tem_permissao_obj(self, request, view, obj):
        return request.user and request.is_staff

class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user==obj.owner