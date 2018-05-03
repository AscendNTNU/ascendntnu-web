from rest_framework import generics
from django.db.models import *
from .models import *
from .serializers import *
from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector, TrigramSimilarity
from django.db.models.functions import Greatest


class MemberList(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    http_method_names = ['get']


class SponsorList(generics.ListCreateAPIView):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    http_method_names = ['get']

class QuoteList(generics.ListCreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    http_method_names = ['get', 'post']


class HistoryList(generics.ListCreateAPIView):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    http_method_names = ['get']

class MemberListWithYear(generics.ListCreateAPIView):
    serializer_class = MemberSerializer
    http_method_names = ['get']

    def get_queryset(self):
        return Member.objects.filter(year=self.kwargs['year'])


class SponsorListWithYear(generics.ListCreateAPIView):
    serializer_class = SponsorSerializer
    http_method_names = ['get']

    def get_queryset(self):
        return Sponsor.objects.filter(year=self.kwargs['year'])


class HistoryListWithYear(generics.ListCreateAPIView):
    serializer_class = HistorySerializer
    http_method_names = ['get']

    def get_queryset(self):
        return History.objects.all()


class BlogListView(generics.ListCreateAPIView):
    serializer_class = BlogPostSerializer
    http_method_names = ['get']

    def get_queryset(self):
        return BlogPost.objects.all().order_by('-date')


'''class BlogSearchView(generics.ListCreateAPIView):
    serializer_class = BlogPostSerializer
    http_method_names = ['get']

    def get_queryset(self):
        qs = BlogPost.objects.all()

        q = self.request.GET.get('q')
        if q:
            query = SearchQuery(q)
            qs = qs.annotate(rank=SearchRank(F('search_vector'), query)) \
                .filter(search_vector=query) \
                .order_by('-rank')

        return qs

    def get_context_data(self, **kwargs):
        return super().get_context_data(
            q=self.request.GET.get('q', "")
        )


class MemberSearchView(generics.ListCreateAPIView):
    serializer_class = MemberSerializer
    http_method_names = ['get']

    def get_queryset(self):
        q = self.request.GET.get('q')

        return Member.objects.annotate(similarity=TrigramSimilarity('name', q),).filter(similarity__gt=0.3).order_by('-similarity')

    def get_context_data(self, **kwargs):
        return super().get_context_data(
            q=self.request.GET.get('q', "")
        )
'''
