

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catName', models.CharField(default='put your name ', max_length=20)),
                ('catImage', models.URLField(default='put ypur image ', max_length=256)),
            ],
        ),
    ]
