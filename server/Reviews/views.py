from django.shortcuts import render
from rest_framework import generics  
from Reviews.models import Reviews
from Reviews.serialize import ReviewsSerializer


className ReviewsList(generics.ListCreateAPIView):
    queryset=Reviews.objects.all()
    serializer_className=ReviewsSerializer

