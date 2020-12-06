from django.db import models


class SubCategory(models.Model):
    catName = models.CharField(max_length=20)
    CatImage = models.URLField()
    def __str__(self):
        return self.catName

