import re
from django.core.exceptions import ValidationError

def validate_kenyan_phone(value):
    # Remove spaces and dashes
    phone = re.sub(r"[\s-]", "", value)
    if phone.startswith("0"):
        phone = "+254" + phone[1:]
    elif phone.startswith("254"):
        phone = "+" + phone
    elif not phone.startswith("+254"):
        raise ValidationError(
            "Phone number must be in the format, e.g., +254712345678"
        )
    # Check length and digits
    if not re.match(r"^\+254[17][0-9]{8}$", phone):
        raise ValidationError(
            "Phone number must be a valid Kenyan number, e.g., +254712345678"
        )
    return phone
