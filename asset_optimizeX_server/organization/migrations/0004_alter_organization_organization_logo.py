# Generated by Django 4.2.6 on 2023-10-22 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0003_payment_organization'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='organization_logo',
            field=models.ImageField(blank=True, default='org_logo/org-logo.png', null=True, upload_to='images/company-logo/'),
        ),
    ]
