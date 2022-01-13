from django.db import models
from django.db.models.base import Model

class Task(models.Model):
    Content = models.CharField(max_length=200)
    IsCompleted = models.BooleanField(default=False)

    def __str__(self):
        return self.Content



