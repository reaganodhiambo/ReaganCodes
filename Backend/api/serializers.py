from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        extra_kwargs = {
            "slug": {"required": False},
            "author": {"required": False},
        }
