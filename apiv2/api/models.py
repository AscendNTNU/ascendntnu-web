from django.db import models
from django.contrib.postgres.indexes import GinIndex
from django.contrib.postgres.search import SearchVectorField, SearchVector
from django.contrib.auth.models import User
from datetime import datetime

SPONSOR_TYPES = (
    ('main', 'main'),
    ('gold', 'gold'),
    ('silver', 'silver'),
    ('bronze', 'bronze'),
    ('regular', 'regular')
)


class MemberManager(models.Manager):
    def with_documents(self):
        vector = SearchVector('title', weight='A') + \
                 SearchVector('categories', weight='C') + \
                 SearchVector('author', weight='B') + \
                 SearchVector('blog_content', weight='C')
        return self.get_queryset().annotate(document=vector)


class BlogPostManager(models.Manager):
    def with_documents(self):
        vector = SearchVector('name', weight='A') + \
                 SearchVector('background', weight='B') + \
                 SearchVector('role', weight='C')
        return self.get_queryset().annotate(document=vector)


class Member(models.Model):
    year = models.IntegerField()
    name = models.CharField(max_length=50)
    background = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    group = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    mail = models.CharField(max_length=100)
    active_member = models.BooleanField()
    search_vector = SearchVectorField(null=True)

    objects = MemberManager()

    class Meta:
        indexes = [
            GinIndex(fields=['search_vector'])
        ]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if 'update_fields' not in kwargs or 'search_vector' not in kwargs['update_fields']:
            instance = self._meta.default_manager.with_documents().get(pk=self.pk)
            instance.search_vector = instance.document
            instance.save(update_fields=['search_vector'])


class Sponsor(models.Model):
    name = models.CharField(max_length=50)
    year = models.IntegerField()
    type = models.CharField(max_length=50, choices=SPONSOR_TYPES)
    link = models.CharField(max_length=100)
    logo = models.CharField(max_length=100)
    logo_dark = models.CharField(max_length=100)
    short_text = models.TextField()
    sign_year = models.DateField()


class History(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = models.CharField(max_length=150)
    tags = models.CharField(max_length=150)
    categories = models.CharField(max_length=50)


class BlogPost(models.Model):
    layout = models.CharField(max_length=50, default='post')
    title = models.CharField(max_length=50)
    date = models.DateTimeField(default=datetime.now)
    categories = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    blog_content = models.CharField(max_length=400)

    search_vector = SearchVectorField(null=True)

    objects = BlogPostManager()

    class Meta:
        indexes = [
            GinIndex(fields=['search_vector'])
        ]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if 'update_fields' not in kwargs or 'search_vector' not in kwargs['update_fields']:
            instance = self._meta.default_manager.with_documents().get(pk=self.pk)
            instance.search_vector = instance.document
            instance.save(update_fields=['search_vector'])


