from django.db import models
from Location.models import City
from Category.models import Category
from accounts.models import UserAccount

class ServiceProvider(models.Model):
    provider = models.OneToOneField(UserAccount,on_delete=models.CASCADE, related_name='Provider')
    phone =models.CharField(max_length=12,default='0000')
<<<<<<< HEAD
    email = models.EmailField(max_length=255, unique=True)
    status = models.BooleanField(default=False)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE,related_name='serviceProviders')
    UserAccount = models.ForeignKey(UserAccount,on_delete=models.CASCADE)
    # area = models.ForeignKey(Area,on_delete=models.CASCADE)
    # //RGISTRATION AS AFORIGN KEY 
=======
    city = models.ForeignKey(City,on_delete=models.CASCADE,related_name='serviceProviders')
    role = models.CharField(max_length=20,default='ServiceProvider')
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1,related_name='providers')
    picture = models.CharField(max_length=256)
>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e
    def __str__(self):
        return self.provider.name


<<<<<<< HEAD
class CategoryProvider(models.Model):
     serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE,related_name='Categories')
    def __str__(self):
        return self
=======
# class CategoryProvider(models.Model):
#     categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1,related_name='providers')
#     serviceProviderId = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE,related_name='Categories')
#     class Meta:
#         unique_together = ('categoryId','serviceProviderId')

#     def __str__(self):
#         return "%s %s" % (self.categoryId.catName, self.serviceProviderId.provider.name)
    
>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e

     
class Image(models.Model):
    images = models.CharField(max_length=256)
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self

     




