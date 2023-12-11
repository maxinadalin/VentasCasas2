from django.db import models


def Categorias_imagen(instance, filename):
    return 'Categorias/{0}/{1}'.format(instance.title, filename)



class Categoria(models.Model):

    class Meta:
        verbose_name =("Categoria")
        verbose_name_plural =("Categorias")

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    imagen = models.ImageField(upload_to = 'media/users', null=True)
    
    views = models.IntegerField(default=0,blank=True) #aca podremos verlo en pantalla
    
    parent = models.ForeignKey('self',related_name='children',on_delete=models.CASCADE, blank=True,null=True)
    

    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views= viewcount.objects.filter(categoria=self).count()

  
class viewcount(models.Model):#con este codigo podemos ver que es lo que mas se busca para poder tener datos estadisticos
    categoria = models.ForeignKey(Categoria,related_name='categoria_view_count',on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.ip_address}"