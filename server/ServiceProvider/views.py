from django.shortcuts import render
from rest_framework import generics 
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider  
from ServiceProvider.serialize import ServiceProviderSerializer,ImageSerializer,CategoryProviderSerializer

className ServiceProviderList(generics.ListCreateAPIView):
    queryset=ServiceProvider.objects.all()
    serializer_className=ServiceProviderSerializer

className ImageList(generics.ListCreateAPIView):
    queryset=Image.objects.all()
    serializer_className=ImageSerializer


className CategoryProviderList(generics.ListCreateAPIView):
    queryset=CategoryProvider.objects.all()
    serializer_className=CategoryProviderSerializer

