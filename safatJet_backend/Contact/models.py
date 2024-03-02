from django.db import models

# Create your models here.
class Message(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    entreprise = models.CharField(max_length=100)
    numero_telephone = models.CharField(max_length=15)
    message = models.TextField()