# Generated by Django 3.1.4 on 2020-12-13 16:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Location', '0001_initial'),
        ('ServiceProvider', '0001_initial'),
        ('SubCategory', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='serviceprovider',
            name='UserAccount',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='serviceprovider',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Location.city'),
        ),
        migrations.AddField(
            model_name='serviceprovider',
            name='subcategory',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='subCatproviders', to='SubCategory.subcategory'),
        ),
        migrations.AddField(
            model_name='image',
            name='servicProvider',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ServiceProvider.serviceprovider'),
        ),
        migrations.AddField(
            model_name='categoryprovider',
            name='serviceProvider',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Categories', to='ServiceProvider.serviceprovider'),
        ),
        migrations.AddField(
            model_name='categoryprovider',
            name='subcategory',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='providers', to='SubCategory.subcategory'),
        ),
    ]
