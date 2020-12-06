from django.db import models
from Category.models import Category

class ServiceProvider(models.Model):
    name  = models.CharField(max_length=20)
    phoneNum=models.CharField(max_length=20)
    email = models.EmailField()
    status = models.BooleanField(default=False)
    locationID = models.IntegerField() 
    imageServ = models.URLField()

    def __str__(self):
        return self.name

class CategoryProvider(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE)
    def __str__(self):
        return self.category

     


class Image (models.Model):
    images = models.URLField()
    servicProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self.images

     




