from django.urls import path
from Location.views import CityList,CatLoc

app_name='Location'


urlpatterns=[
    path('city/',CityList.as_view()),
    path('loc/',CatLoc)
    # path('city/area/',Area    List.as_view())
 ]
