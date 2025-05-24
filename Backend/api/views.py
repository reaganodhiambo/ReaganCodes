from django.shortcuts import render
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Blog
from .serializers import BlogSerializer
from django.contrib.auth import get_user_model

# Create your views here.


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = "slug"
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["published", "author"]
    search_fields = ["title", "content", "tags"]
    ordering_fields = ["created_at", "title"]
    ordering = ["-created_at"]

    def perform_create(self, serializer):
        User = get_user_model()
        default_author = User.objects.get(pk=1)
        serializer.save(author=default_author)
