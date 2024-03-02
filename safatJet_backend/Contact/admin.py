from django.contrib import admin

# Register your models here.



from .models import Message
class MessageAdmin(admin.ModelAdmin):
    list_display = ('nom', 'email', 'entreprise', 'numero_telephone', 'message')
    search_fields = ('nom','email', 'entreprise')  # Ajoutez des champs pour la recherche

admin.site.register(Message, MessageAdmin)