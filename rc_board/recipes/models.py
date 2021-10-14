from django.db import models


class Category(models.Model):
   first_meal = 'FML'
   second_courses = 'SCS'
   salads = 'SLD'
   snacks = 'SNC'
   desserts = 'DSR'
   beverages = 'BVR'
   CATEGORIES = [
      (first_meal, 'Первые блюда'),
      (second_courses, 'Вторые блюда'),
      (salads, 'Салаты'),
      (snacks, 'Закуски'),
      (desserts, 'Десерты'),
      (beverages, 'Напитки'),
   ]
   category = models.CharField(max_length=3, choices=CATEGORIES, unique=True)

   def get_category_label_list(self):
      for category_label_list in self.CATEGORIES:
         if category_label_list[0] == self.category:
            return category_label_list

   def __str__(self):
      return self.get_category_label_list()[1]


class Recipe(models.Model):
   creation_datetime = models.DateTimeField(auto_now_add=True)
   category = models.ForeignKey(Category, on_delete=models.CASCADE)
   title = models.CharField(max_length=255)
   content = models.TextField()

   def get_absolute_url(self):
      return f'/recipes/{self.id}'