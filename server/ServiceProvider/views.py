from django.shortcuts import render
from rest_framework import generics 
from ServiceProvider.models import ServiceProvider,Image 
from ServiceProvider.serialize import ServiceProviderSerializer,ImageSerializer

class ServiceProviderList(generics.ListCreateAPIView):
    queryset=ServiceProvider.objects.all()
    serializer_class=ServiceProviderSerializer

class ImageList(generics.ListCreateAPIView):
    queryset=Image.objects.all()
    serializer_class=ImageSerializer


# class CategoryProviderList(generics.ListCreateAPIView):
#     queryset=CategoryProvider.objects.all()
#     serializer_class=CategoryProviderSerializer

