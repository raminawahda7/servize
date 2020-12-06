from django.shortcuts import render
from rest_framework import generics   
from User.models import User
from User.serialize import UserSerializer


class UserSerializerList(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
