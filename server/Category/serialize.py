from rest_framework import serializers
from Category.models import Category
from SubCategory.serialize import SubCategorySerializer

class  CategorySerializer(serializers.ModelSerializer):
    subCategories = SubCategorySerializer(many=True,read_only=True)
    class Meta:
        model=Category
        fields=('catName','catImage','pk' ,'subCategories')
