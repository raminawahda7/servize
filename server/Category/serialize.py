from rest_framework import serializers
from Category.models import Category
from ServiceProvider.serialize import ServiceProviderSerializer

class  CategorySerializer(serializers.ModelSerializer):
    providers = CategoryProviderSerializer(many=True,read_only=True)
    class Meta:
        model=Category
        fields=('catName','catImage','pk' ,'providers')
