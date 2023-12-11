
from django.contrib import admin
from django.urls import path,re_path,include
from django.views.generic import TemplateView #sirve para renderizar el archivo index de la carpeta build
from django.conf.urls.static import static
from django.conf import settings
from apps.Categorias.urls import urlpatterns as categorias_urls


urlpatterns = [
     path('api/Categorias/', include(categorias_urls)), #podemos probar el codigo desde el admin con postman
     path('api/Productos/', include('apps.Productos.urls')),
    
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(r'^.*',TemplateView.as_view(template_name='index.html'))
] #hace referencia al arcivho html de build
