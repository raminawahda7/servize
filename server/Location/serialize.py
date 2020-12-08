from rest_framework import serializers
from Location.models import City,Area

className  CitySerializer(serializers.ModelSerializer):
    className Meta:
        model=City
        fields=('name','pk')

className  AreaSerializer(serializers.ModelSerializer):
    className Meta:
        model=Area
        fields=('name','City','pk')

