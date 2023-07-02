# Generated by Django 4.1.9 on 2023-07-02 04:19

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Puppy",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                ("is_adoptable", models.BooleanField()),
                ("breed", models.CharField(max_length=30)),
                ("color", models.CharField(max_length=30)),
                ("weight", models.IntegerField()),
            ],
        ),
    ]
