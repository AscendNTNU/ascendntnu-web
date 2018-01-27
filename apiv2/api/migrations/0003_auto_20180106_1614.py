# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-06 16:14
from __future__ import unicode_literals

import django.contrib.postgres.indexes
import django.contrib.postgres.search
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180105_1546'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='search_vector',
            field=django.contrib.postgres.search.SearchVectorField(null=True),
        ),
        migrations.AddIndex(
            model_name='blogpost',
            index=django.contrib.postgres.indexes.GinIndex(fields=['search_vector'], name='api_blogpos_search__ab2950_gin'),
        )

    ]