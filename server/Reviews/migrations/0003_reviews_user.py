<<<<<<< HEAD:server/Reviews/migrations/0002_reviews_user.py
# Generated by Django 3.1.4 on 2020-12-12 13:34
=======
# Generated by Django 3.1.4 on 2020-12-12 13:02
>>>>>>> ed3321db849c312c25a9f88f4dc3f946dfb4c884:server/Reviews/migrations/0003_reviews_user.py

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
<<<<<<< HEAD:server/Reviews/migrations/0002_reviews_user.py
        ('Reviews', '0001_initial'),
=======
        ('Reviews', '0002_reviews_servicprovider'),
>>>>>>> ed3321db849c312c25a9f88f4dc3f946dfb4c884:server/Reviews/migrations/0003_reviews_user.py
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]