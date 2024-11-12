#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ingatlan_projekt.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()

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