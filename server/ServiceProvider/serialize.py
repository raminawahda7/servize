from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
from SubCategory.models import SubCategory
from Category.models import Category

class  ServiceProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=ServiceProvider
        fields=('name','email','phone','status','city','area','pk')


class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')


class  CategoryProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoryProvider
        fields=('subcategory','serviceProvider','category')


