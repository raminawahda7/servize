from django.shortcuts import render
from rest_framework import generics  
from SubCategory.models import SubCategory
from SubCategory.serialize import SubCategorySerializer


className SubCategoryList(generics.ListCreateAPIView):
    queryset=SubCategory.objects.all()
    serializer_className=SubCategorySerializer


