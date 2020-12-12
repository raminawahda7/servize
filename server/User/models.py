from django.db import models
from accounts.models import UserAccount

class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    image = models.CharField(max_length=256)
    phone =models.IntegerField(default=00000)
    UserAccount = models.OneToOneField(UserAccount,unique=True,on_delete=models.CASCADE)
   
   
   
    def __str__(self):
        return self.name
   








    




    # class Admin(models.Model):
    # name = models.CharField(max_length=20)
    # email = models.EmailField()

   




