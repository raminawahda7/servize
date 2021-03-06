from django.db import models
from SubCategory.models import SubCategory
from Location.models import City
from Category.models import Category
from accounts.models import UserAccount

class ServiceProvider(models.Model):
    name  = models.CharField(max_length=20,default='put your name')
    phone =models.CharField(max_length=12,default='0000')
    email = models.EmailField(max_length=255, unique=True)
    status = models.BooleanField(default=False)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE,related_name='serviceProviders')
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE,default=1,related_name='subCatproviders')
    UserAccount = models.ForeignKey(UserAccount,on_delete=models.CASCADE)
    # area = models.ForeignKey(Area,on_delete=models.CASCADE)
    # //RGISTRATION AS AFORIGN KEY 
    def __str__(self):
        return self.name


class CategoryProvider(models.Model):
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE,default=1,related_name='providers')
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE,related_name='Categories')
    def __str__(self):
        return self

     
class Image(models.Model):
    images = models.URLField()
    servicProvider = models.OneToOneField(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self

     




