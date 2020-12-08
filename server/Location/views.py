from django.shortcuts import render
from rest_framework import generics  
from Location.models import City,Area
from Location.serialize import CitySerializer,AreaSerializer


className CityList(generics.ListCreateAPIView):
    queryset=City.objects.all()
    serializer_className=CitySerializer

className AreaList(generics.ListCreateAPIView):
    queryset=Area.objects.all()
    serializer_className=AreaSerializer
