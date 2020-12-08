
from django.contrib import admin
from django.urls import path,include,re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('category/',include('Category.urls')),
    path('location/',include('Location.urls')),
    path('subcategory/',include('SubCategory.urls')),
    path('user/',include('User.urls')),
    path('reviews/',include('Reviews.urls')),
    path('serviceprovider/',include('ServiceProvider.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),  # to handle token 
  

]
