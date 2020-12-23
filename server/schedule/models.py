from django.db import models
from django.urls import reverse
from User.models import User
from ServiceProvider.models import ServiceProvider


class Schedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    provider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE)
<<<<<<< HEAD
    StartTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    EndTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    Subject = models.CharField(max_length=2000, unique=True)
=======
    # StartTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    # EndTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    bookDate = models.DateField()
    Subject = models.CharField(max_length=20, unique=True)
>>>>>>> 49d6be485e352b20a5080644536b23003738db95
    def __str__(self):
        return self.Subject
    