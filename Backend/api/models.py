from django.db import models
from django.conf import settings
from django.utils.text import slugify

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=255)
    content = models.TextField()
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blogs"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)
    image_url = models.URLField(blank=True, null=True)
    tags = models.CharField(
        max_length=255, blank=True, help_text="Comma-separated tags"
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Blog"
        verbose_name_plural = "Blogs"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
