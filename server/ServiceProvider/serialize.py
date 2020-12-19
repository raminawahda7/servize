from rest_framework import serializers
<<<<<<< HEAD
from ServiceProvider.models import ServiceProvider,Image,CategoryProvider
=======
from ServiceProvider.models import ServiceProvider,Image
>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e
from Category.models import Category
from User.serialize import ProviderUserSerializer


<<<<<<< HEAD

=======
>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e

# class  CategoryProviderSerializer(serializers.ModelSerializer):
#     providerName = serializers.CharField(source='serviceProviderId.provider.name', read_only=True)
#     providerId=serializers.CharField(source='serviceProviderId.provider.id', read_only=True)
#     cateName=serializers.CharField(source='categoryId.catName', read_only=True)
#     cateId=serializers.CharField(source='categoryId.id', read_only=True)
#     categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1)

    
#     class Meta:
#         model=CategoryProvider
#         fields=['categoryId','serviceProviderId']




class  ServiceProviderSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='provider.name',read_only=True )
    users= ProviderUserSerializer(many=True, read_only=True)
    catname= serializers.CharField(source='categoryId',read_only=True)

    # Categories=CategoryProviderSerializer(many=True, read_only=True)
    catname = serializers.CharField(source='categoryId',read_only=True )
    class Meta:
        model=ServiceProvider
<<<<<<< HEAD
        fields=('name','email','phone','city','Category','Categories','UserAccount')
=======
        fields=('provider','name','phone','city','role','picture','users','catname','categoryId')
        # fields=('name','phone','city','picture','users','categoryId')





>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e


class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')




