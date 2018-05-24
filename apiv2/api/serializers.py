from .models import *
from rest_framework import serializers


class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ('name', 'background', 'role', 'group', 'image', 'mail', 'year')


class SponsorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sponsor
        fields = ('name', 'type', 'link', 'logo', 'logo_dark', 'short_text', 'year')


class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = ('date', 'title', 'content', 'post', 'tags', 'categories')


class QuoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quote
        fields = ('date', 'author', 'quote')

class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('layout', 'title', 'date', 'categories', 'author', 'blog_content')

