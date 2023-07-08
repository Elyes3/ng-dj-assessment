from django.db import models

class Label(models.Model):
    title = models.CharField(max_length=100)

    @classmethod
    def labels(cls):
        return cls.objects.all()

