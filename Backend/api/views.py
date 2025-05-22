from django.shortcuts import render
from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer
from django.contrib.auth import get_user_model

# Create your views here.


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        User = get_user_model()
        default_author = User.objects.get(pk=1)
        serializer.save(author=default_author)
