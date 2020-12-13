from rest_framework import serializers
from Location.models import City
from ServiceProvider.serialize import ServiceProviderSerializer

class  CitySerializer(serializers.ModelSerializer):
    serviceProvider = ServiceProviderSerializer(many=True, read_only=True)
    class Meta:
        model=City
        fields=['name','pk','serviceProvider']
         

# class  AreaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Area
#         fields=('name','City','pk')

