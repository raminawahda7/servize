from django.db import models
from Location.models import City

# from Location.models import City
class Category(models.Model):
    catName = models.CharField(max_length=20,default='put your name ', unique=True)
    catImage = models.CharField(max_length=256,default='put ypur image ')
    cityId = models.ForeignKey(City, on_delete=models.CASCADE,default=1,related_name='cities')

    def __str__(self):
        return self.catName

     

