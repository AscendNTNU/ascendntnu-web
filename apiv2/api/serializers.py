from .models import *
from rest_framework import serializers


class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ('year', 'name', 'background', 'role', 'group', 'image', 'mail')


class SponsorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sponsor
        fields = ('name', 'type', 'link', 'logo', 'logo_dark', 'short_text')


class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = ('date', 'title', 'content', 'image', 'tags', 'categories')


class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('layout', 'title', 'date', 'categories', 'author', 'blog_content')

