import uuid
from supabase import create_client
from django.conf import settings


def upload_image_to_supabase(image, content_type="image/jpeg"):
    """
    Uploads an image to Supabase Storage and returns the public URL.
    :param image: The image file (bytes or file-like object)
    :param content_type: The MIME type of the image
    :return: The public URL of the uploaded image
    :raises: Exception if upload fails
    """
    supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_KEY)
    file_ext = content_type.split("/")[-1] if "/" in content_type else "jpg"
    file_path = f"blog-images/{uuid.uuid4()}.{file_ext}"
    res = supabase.storage.from_("reagancodes").upload(
        file_path, image, file_options={"content-type": content_type}
    )
    # Check for upload success (Key or path attribute)
    if not getattr(res, "Key", None) and not getattr(res, "path", None):
        raise Exception("Image upload failed")
    image_url = supabase.storage.from_("reagancodes").get_public_url(file_path)
    return image_url
