from rest_framework import serializers
from SubCategory.models import SubCategory

className  SubCategorySerializer(serializers.ModelSerializer):
    className Meta:
        model=SubCategory
        fields=('subName','subImage','category')


