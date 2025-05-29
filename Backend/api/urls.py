from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, BlogCreateView

router = DefaultRouter()
router.register(r"blogs", BlogViewSet)

urlpatterns = [
    path("blogs/create/", BlogCreateView.as_view(), name="blog-create"),
    path("", include(router.urls)),
]
