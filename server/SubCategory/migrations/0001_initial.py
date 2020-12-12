
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subName', models.CharField(default='sub category name ', max_length=50)),
                ('subImage', models.CharField(default='you should put url for your image', max_length=256)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subCategories', to='Category.category')),
            ],
        ),
    ]
