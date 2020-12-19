from django.shortcuts import render
from rest_framework import generics
from Location.models import City
from Location.serialize import CitySerializer
from Location.filter import CityFilter
from rest_framework.decorators import api_view  
from rest_framework.response import Response

class CityList(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

# class AreaList(generics.ListCreateAPIView):
#     queryset=Area.objects.all()
#     serializer_class=AreaSerializer

<<<<<<< HEAD


=======
@api_view(['POST'])
def ProvLoc(request):
    city = City.objects.all().filter(name=request.data['name'])
    seralizer = CitySerializer(city,many=True)

    return Response (seralizer.data)
# {"name":"Nablus","categories":"Electricians"}
>>>>>>> 76375ae9a8ba3168310b94373e8c0c443eeca22a
