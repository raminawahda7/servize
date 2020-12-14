from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
from Category.models import Category
from User.serialize import ProviderUserSerializer



class  CategoryProviderSerializer(serializers.ModelSerializer):
    providerName = serializers.CharField(source='serviceProviderId.provider.name', read_only=True)
    providerId=serializers.CharField(source='serviceProviderId.provider.id', read_only=True)
    cateName=serializers.CharField(source='categoryId.catName', read_only=True)
    cateId=serializers.CharField(source='categoryId.id', read_only=True)

    
    class Meta:
        model=CategoryProvider
        fields=['providerName','providerId','cateName']




class  ServiceProviderSerializer(serializers.ModelSerializer):
    users= ProviderUserSerializer(many=True, read_only=True)
    Categories=CategoryProviderSerializer(many=True, read_only=True)
    class Meta:
        model=ServiceProvider
        fields=('provider','phone','city','role','categoryId','picture','users','Categories')






class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')




