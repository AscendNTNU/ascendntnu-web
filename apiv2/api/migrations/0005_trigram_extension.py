from __future__ import unicode_literals
from django.contrib.postgres.operations import TrigramExtension
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20180107_0854'),
    ]

    operations = [
        TrigramExtension()

    ]