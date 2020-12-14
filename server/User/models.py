from django.db import models
from accounts.models import UserAccount
from ServiceProvider import ServiceProvider

class User(models.Model):
    user = models.OneToOneField(UserAccount,on_delete=models.CASCADE, related_name="user")
    role = models.CharField(max_length=10,default='user')
    image = models.CharField(max_length=256)
    phone =models.IntegerField(default=00000)
   
   
    def __str__(self):
        return self.user.name
  


class ProviderUser(models.Model):
    userId = models.ForeignKey(User,on_delete=models.CASCADE, related_name='providers')
    providerId = models.ForeignKey(ServicProvider,on_delete=models.CASCADE, related_name='users')

    class Meta:
        together = ('userId','providerId')

    def __str__(self):
        return "%s %s" % (self.userId.user.name, self.providerId.provider.name)







    




 

   




