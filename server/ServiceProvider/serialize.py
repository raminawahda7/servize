from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
from SubCategory.models import SubCategory


class  CategoryProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoryProvider
        fields=('subcategory')

class  ProviderCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoryProvider
        fields=('serviceProvider')


class  ServiceProviderSerializer(serializers.ModelSerializer):
    Categories = CategoryProviderSerializer(many=True, read_only=True)
    class Meta:
        model=ServiceProvider
        fields=('name','email','phone','status','city','Categories')


class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')





