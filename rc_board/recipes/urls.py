from rest_framework_nested import routers
from .views import RecipeViewSet
from django.urls import path
from django.conf.urls import include


router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipes')

urlpatterns = [
    path(r'', include(router.urls)),
]