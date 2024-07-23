from django.contrib import admin
from django.urls import path, pattern
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
] +static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
