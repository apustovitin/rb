from .models import Recipe, Category
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from rest_framework.serializers import HyperlinkedModelSerializer

class RecipeSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'category')


class CategorySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'category')
