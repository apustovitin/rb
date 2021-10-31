from .models import Recipe, Category
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from rest_framework import serializers

class RecipeSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'content', 'category', 'creation_datetime']


class CategorySerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='get_category_display')
    class Meta:
        model = Category
        fields = ('id', 'category')
