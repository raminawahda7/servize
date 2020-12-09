from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
from SubCategory.models import SubCategory

className  ServiceProviderSerializer(serializers.ModelSerializer):
    className Meta:
        model=ServiceProvider
        fields=('name','email','phone','status','city','area')


className  ImageSerializer(serializers.ModelSerializer):
    className Meta:
        model=Image
        fields=('images','serviceProvider')


className  CategoryProviderSerializer(serializers.ModelSerializer):
    className Meta:
        model=CategoryProvider
        fields=('subcategory','serviceProvider')


