#agarra todo lo que esta en el models del proyecto y lo convierte en un archivo json
from rest_framework import serializers
from .models import *

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields=[
            'id',
            'name',
            'slug',
            'imagen'
            'views',
        ]