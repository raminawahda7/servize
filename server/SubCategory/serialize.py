from rest_framework import serializers
from SubCategory.models import SubCategory
from ServiceProvider.serialize import ServiceProviderSerializer
class  SubCategorySerializer(serializers.ModelSerializer):
    # serviceProvider = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model=SubCategory
        fields=('subName','subImage','category','pk')   #,'serviceProvider'
        

     


