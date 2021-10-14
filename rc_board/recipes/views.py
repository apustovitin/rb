from django.shortcuts import render, get_object_or_404
from .models import Recipe, Category
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import RecipeSerializer, CategorySerializer
import django_filters


# class RecipeViewSet(viewsets.ViewSet):
#     serializer_class = RecipeSerializer
# 
#     def list(self, request,):
#         queryset = Recipe.objects.filter()
#         serializer = RecipeSerializer(queryset, many=True)
#         return Response(serializer.data)
# 
#     def retrieve(self, request, pk=None):
#         queryset = Recipe.objects.filter()
#         recipe = get_object_or_404(queryset, pk=pk)
#         serializer = RecipeSerializer(recipe)
#         return Response(serializer.data)
# 
#     def filter(self, request, category=None):
#         queryset = Recipe.objects.filter(category=category)
#         serializer = RecipeSerializer(queryset, many=True)
#         return Response(serializer.data)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    # def get_queryset(self):
    #     queryset = Recipe.objects.all()
    #     category = self.request.query_params.get('category', None)
    #     if category is not None:
    #         queryset = queryset.filter(category=category)
    #     return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer