from django.contrib import admin
from .models import Category, SubCategory,ServiceProvider, CategoryProvider, Image, Location, Admin, User
# Register your models here.
admin.site.register(Category)
admin.site.register(ServiceProvider)
admin.site.register(CategoryProvider)
admin.site.register(Image)
admin.site.register(Location)
admin.site.register(Admin)
admin.site.register(User)