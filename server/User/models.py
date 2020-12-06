from django.db import models

class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    image = models.CharField(max_length=256)
    phone =models.IntegerField(default=00000)
    # is_provider = models.BooleanField('provider status', default=False)
    def __str__(self):
        return self.name
   


    




    # class Admin(models.Model):
    # name = models.CharField(max_length=20)
    # email = models.EmailField()

   




