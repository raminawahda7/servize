from django.db import models

class Category(models.Model):
    catName = models.CharField(max_length=20)
    catImage = models.URLField()
    def __str__(self):
        return self.catName

     

