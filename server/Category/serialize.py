from rest_framework import serializers
from Category.models import Category

className  CategorySerializer(serializers.ModelSerializer):
    className Meta:
        model=Category
        fields=('catName','catImage','pk')
