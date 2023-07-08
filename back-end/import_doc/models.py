from django.db import models

# Create your models here.


class Annotation(models.Model):
    start_position = models.IntegerField()
    end_position = models.IntegerField()
    label = models.CharField(max_length=100)
    text = models.TextField()
