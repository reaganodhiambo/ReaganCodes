from django.shortcuts import render
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Blog
from .serializers import BlogSerializer
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from supabase import create_client
import uuid
from django.conf import settings
from .utils import upload_image_to_supabase

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


class BlogCreateView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        # 1. Handle image upload to Supabase
        image_url = ""
        # image_file = request.FILES.get("image")
        image_file =request.FILES["image"].read()
        if image_file:
            try:
                # image_bytes = image_file.read()
                image_url = upload_image_to_supabase(image_file)
            except Exception as e:
                return Response({"error": str(e)}, status=400)
        else:
            return Response({"error": "No image provided"}, status=400)

        # 2. Create the blog post
        data = request.data.copy()
        if image_url:
            data["image_url"] = image_url
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
