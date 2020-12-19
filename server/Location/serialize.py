from rest_framework import serializers
from Location.models import City
from ServiceProvider.serialize import ServiceProviderSerializer
from Category.serialize import CategorySerializer

class  CitySerializer(serializers.ModelSerializer):
    serviceProviders = ServiceProviderSerializer(many=True, read_only=True)
    catProviders = CategorySerializer(many=True, read_only=True)
    class Meta:
        model=City
        fields=['name','pk','serviceProviders','catProviders']
         

# class  AreaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Area
#         fields=('name','City','pk')

