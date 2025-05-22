from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import Blog
# Register your models here.

class BlogAdmin(ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'published')
    list_filter = ('published', 'created_at')
    search_fields = ('title', 'content')
    list_per_page = 10


admin.site.register(Blog, BlogAdmin)
