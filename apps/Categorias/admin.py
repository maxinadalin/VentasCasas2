from django.contrib import admin
from .models import *

class AdminCategoria(admin.ModelAdmin):
    lista_desplegada=('id','name') #como quiero que aparezca en el administrador
    lista_desplegada_links =('name',) # como quiero acceder al darle click 
    lista_por_pagina=25 #cuantos queres que aparezcan
    
admin.site.register(Categoria,AdminCategoria)


