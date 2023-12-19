#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'asset_optimze_x.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    
def subscription_expiry_check():
    from account.models import User
    from organization.models import Payment
    from django.utils import timezone

    today = timezone.now().date()

    subscriptions = Payment.objects.filter(end_date__lte=today)

    for subscription in subscriptions:
        subscription.organization.premiumUser = False
        subscription.save()

    print("Subscription expiry check completed successfully.")



if __name__ == '__main__':
    main()
    subscription_expiry_check()
