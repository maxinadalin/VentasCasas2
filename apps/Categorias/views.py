from rest_framework.views import APIView #mejor manera para hacer vistas en django
from rest_framework.response import Response #hacer la respuesta
from rest_framework import status #un estatus de la respuesta
from rest_framework import permissions #quien puede acceder y si puede hacer cosas
from .models import Categoria

class ListCategoria(APIView):
    permission_classes=(permissions.AllowAny,)
    
    def get(self,request,format=None):
        if Categoria.objects.all().exists():
           
            categorias= Categoria.objects.all()#se traen todo los los modelos de models
           
            result = [] # creamos un array vacio para despues poder rellearlo y asi poder pasarlo como archivo json

            for categoria in categorias:# hacemos un for para recorrer cada modelo y asi poder traer los datos 
                if not categoria.parent: #si las categorias no tienen padres osea una categoria arriba
                    item = {} # en esta variable vamos a ir guardando los datos para que se vallan haciendo los json
                    item['id']=categoria.id
                    item['name']=categoria.name
                    item['slug']=categoria.slug
                    item['views']=categoria.views
 #lo que es encuentra arriba nos permite traer los datos que fueron creados para poder ustilizarlos y son una categoria               
                    item['sub_categorias'] = [] #se crea un array dentro del array items paa poder guardar en formato json las subcategorias
                    for sub_categoria in categorias:
                        sub_item = {}
                        if sub_categoria.parent and sub_categoria.parent.id == categoria.id: #si la subcategoria comparte esos datos de la categoria padre lo almacena dentro de esa categorias
                            sub_item['id']=sub_categoria.id
                            sub_item['name']=sub_categoria.name
                            sub_item['slug']=sub_categoria.slug
                            sub_item['views']=sub_categoria.views

                            item['sub_categorias'].append(sub_item)
#este codigo que se encuentra arriba lo que hace es poder traer las subcategorias de de las categorias que fueron creadas arriba                  
                    result.append(item)
            
                    return Response({'success': result}, status=status.HTTP_200_OK)
        else: return Response({'error': 'no se encontraron categorias'}, status=status.HTTP_404_NOT_FOUND)

#esta funcion es muy importante ya que con esta nosotros vamos a poder devolver ciertos datos para que los usuarios o quienes necesiten info
#de la pagina lo puedan utilizar
