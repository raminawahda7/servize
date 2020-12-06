from django.db import models

class Category(models.Model):
    catName = models.CharField(max_length=20,default='najwan')
    catImage = models.URLField(max_length=256,default='fdjkgvkd')
    DESCROPTION = models.CharField(max_length=300,default='mbn;kdhgoisjfo;isjf')
    def __str__(self):
        return self

     

