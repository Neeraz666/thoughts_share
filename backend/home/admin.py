from django.contrib import admin
from .models import Content

# Register your models here.
class ContentAdmin(admin.ModelAdmin):
    list_display = ("user", "title", "postdate")
    list_display_links = ("user", "title")
    search_fields = ("user", "title")
    list_per_page = 25
    readonly_fields = ("title", "thoughts")

admin.site.register(Content, ContentAdmin)