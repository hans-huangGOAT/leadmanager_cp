from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Leads(models.Model):
    owner = models.ForeignKey(
        User, null=True, related_name='leads', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
