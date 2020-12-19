from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
from Category.models import Category




class  ProviderCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoryProvider
        fields=('serviceProvider')


class  ServiceProviderSerializer(serializers.ModelSerializer):
    Categories = CategoryProviderSerializer(many=True, read_only=True,default=1)
    class Meta:
        model=ServiceProvider
        fields=('name','email','phone','city','Category','Categories','UserAccount')


class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')




