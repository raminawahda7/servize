from django.shortcuts import render
from rest_framework import generics   
from User.models import User
from User.serialize import UserSerializer


className UserList(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_className=UserSerializer
