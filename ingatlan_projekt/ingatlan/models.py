from django.db import models
from django.contrib.auth.models import User

class Hirdetes(models.Model):
    cim = models.CharField(max_length=255)
    leiras = models.TextField()
    ar = models.DecimalField(max_digits=10, decimal_places=2)
    kep = models.ImageField(upload_to='kepek/')
    felhasznalo = models.ForeignKey(User, on_delete=models.CASCADE)
    datum = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.cim

class Kedveles(models.Model):
    felhasznalo = models.ForeignKey(User, on_delete=models.CASCADE)
    hirdetes = models.ForeignKey(Hirdetes, on_delete=models.CASCADE)
    kedvelt = models.BooleanField(default=False)
