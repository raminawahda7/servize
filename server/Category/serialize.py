from rest_framework import serializers
from Category.models import Category
from SubCategory.serialize import SubCategorySerializer
from ServiceProvider.serialize import ServiceProviderSerializer

class  CategorySerializer(serializers.ModelSerializer):
    subCategories = SubCategorySerializer(many=True,read_only=True)
    serviceProviders = ServiceProviderSerializer(many=True,read_only=True)
    class Meta:
        model=Category
        fields=('catName','catImage','pk' ,'subCategories')
