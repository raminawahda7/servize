from django.db import models
from Category.models import Category


class SubCategory(models.Model):
    subName = models.CharField(max_length=20)
    subImage = models.URLField(max_length=256)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,default=1)
    def __str__(self):
        return self.subName
    
    
   
    

