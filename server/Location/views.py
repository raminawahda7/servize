from django.shortcuts import render
from rest_framework import generics  
from Location.models import City
from Location.serialize import CitySerializer


class CityList(generics.ListCreateAPIView):
    queryset=City.objects.all()
    serializer_class=CitySerializer

# class AreaList(generics.ListCreateAPIView):
#     queryset=Area.objects.all()
#     serializer_class=AreaSerializer
