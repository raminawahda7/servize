from rest_framework import serializers
from Reviews.models import Reviews

className  ReviewsSerializer(serializers.ModelSerializer):
    className Meta:
        model=Reviews
        fields=('stars','user','servicProvider')


