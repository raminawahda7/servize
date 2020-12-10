from django.db import models
from SubCategory.models import SubCategory
from Location.models import City,Area
from Category.models import Category
from accounts.models import UserAccount

class ServiceProvider(models.Model):
    name  = models.CharField(max_length=20,default='put your name')
    phone =models.CharField(max_length=12,default='0000')
    email = models.EmailField(max_length=255, unique=True)
    status = models.BooleanField(default=False)
    city = models.ForeignKey(City,unique=True,on_delete=models.CASCADE)
    area = models.ForeignKey(Area,unique=True,on_delete=models.CASCADE)
    UserAccount = models.OneToOneField(UserAccount,unique=True,on_delete=models.CASCADE)
   
    def __str__(self):
        return self.name


class CategoryProvider(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE,default=1)
    subcategory = models.ForeignKey(SubCategory,unique=True,on_delete=models.CASCADE,default=1)
    serviceProvider = models.ForeignKey(ServiceProvider,unique=True,on_delete=models.CASCADE)
    def __str__(self):
        return self

     
class Image(models.Model):
    images = models.URLField()
    servicProvider = models.ForeignKey(ServiceProvider,unique=True, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self

     




