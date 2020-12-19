from rest_framework import serializers
from Category.models import Category
from ServiceProvider.serialize import ServiceProviderSerializer

class  CategorySerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    serviceProviders = ServiceProviderSerializer(many=True,read_only=True)
=======
    providers = ServiceProviderSerializer(many=True,read_only=True)
>>>>>>> da31cd6b6289b694fd41ee2a858fa70301b3ad7e
    class Meta:
        model=Category
        fields=('catName','catImage','pk' ,'providers')
