from django.db import models


class Puppy(models.Model):
    name = models.CharField(max_length=30)
    is_adoptable = models.BooleanField()
    breed = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    weight = models.IntegerField()

    def __str__(self):
        return self.name
