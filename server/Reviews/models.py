from django.db import models
from accounts.models import UserAccount,UserAccountManager
from ServiceProvider.models import ServiceProvider

class Reviews(models.Model):
    stars = models.IntegerField()
    user = models.ForeignKey(UserAccount,on_delete=models.CASCADE)
    servicProvider = models.ForeignKey(ServiceProvider,on_delete=models.CASCADE) 
    
      

     
 

