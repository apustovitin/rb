from django.shortcuts import render, get_object_or_404
from .models import Recipe, Category
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import RecipeSerializer, CategorySerializer
import django_filters


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['category']
    # def get_queryset(self):
    #     queryset = Recipe.objects.all()
    #     category = self.request.query_params.get('category', None)
    #     if category is not None:
    #         queryset = queryset.filter(category=category)
    #     return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer