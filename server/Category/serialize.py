from rest_framework import serializers
from Category.models import Category
from ServiceProvider.models import ServiceProvider
from SubCategory.serialize import SubCategorySerializer

class  CategorySerializer(serializers.ModelSerializer):
    # serviceProvider = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # subCategory = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model=Category
        fields=['catName','catImage']   #,'serviceProvider','subCategory'
         
    
