from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = "__all__"
        extra_kwargs = {
            "slug": {"required": False},
            "author": {"required": False},
        }

    def get_author_name(self, obj):
        if obj.author:
            return f"{obj.author.first_name} {obj.author.last_name}".strip()
        return None
