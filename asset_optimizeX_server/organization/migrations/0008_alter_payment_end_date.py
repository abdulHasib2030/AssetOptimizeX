# Generated by Django 4.2.6 on 2023-11-19 17:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0007_payment_end_date_payment_start_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 20, 17, 52, 24, 123042, tzinfo=datetime.timezone.utc)),
        ),
    ]
