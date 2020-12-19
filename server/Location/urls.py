from django.urls import path
from Location.views import CityList,ProvLoc

app_name='Location'


urlpatterns=[
    path('city/',CityList.as_view()),
    path('loc/',ProvLoc)
    # path('city/area/',Area    List.as_view())
 ]
