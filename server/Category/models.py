from django.db import models
# from Location.models import City
class Category(models.Model):
    catName = models.CharField(max_length=20,default='put your name ', unique=True)
    catImage = models.CharField(max_length=256,default='put ypur image ')
<<<<<<< HEAD
   
=======
>>>>>>> 49d6be485e352b20a5080644536b23003738db95

    def __str__(self):
        return self.catName

     

