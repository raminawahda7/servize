from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider

class  ServiceProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=ServiceProvider
        fields=('name','email','image','phone','status','city','area')


class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')


class  CategoryProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=CategoryProvider
        fields=('subcategory','serviceProvider')


