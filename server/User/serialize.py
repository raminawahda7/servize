from rest_framework import serializers
from User.models import User

className  UserSerializer(serializers.ModelSerializer):
    className Meta:
        model=User
        fields=('name','email','image','phone','pk')


