from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from recipes.views import RecipeViewSet, CategoryViewSet
from rest_framework.schemas import get_schema_view

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'', include(router.urls)),
    path('openapi', get_schema_view(
        title="recipe app",
        description="API for all things …"
    ), name='openapi-schema'),
]
