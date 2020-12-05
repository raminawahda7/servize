from django.db import models

# Create your models here.
class Category(models.Model):
    catName = models.CharField(max_length=20)
    imageCat = models.URLField()
    
class SubCategory(models.Model):
    subCatName =  models.CharField(max_length=20)
    imageCat = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    # cat = models.ForeignKey(Category, on_delete=models.CASCADE)
class ServiceProvider(models.Model):
    name  = models.CharField(max_length=20)
    phoneNum=models.CharField(max_length=20)
    email = models.EmailField()
    status = models.BooleanField(default=False)
    locationID = models.IntegerField() 
    imageServ = models.URLField()

class CategoryProvider(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE)


class Image (models.Model):
    images = models.URLField()
    servicProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.


class Location(models.Model):
    name =  models.CharField(max_length=20)

class Admin(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()

class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()

class Reviews(models.Model):
    stars = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    servicProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.


