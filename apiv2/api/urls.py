from django.conf.urls import include, url
from rest_framework import routers
from .views import *

from . import views

urlpatterns = [
    #url(r'^search/$', views.MemberSearchView.as_view(), name='blog_search_view'),
    url(r'^members/(?P<year>[0-9]{4})/$', views.MemberListWithYear.as_view(), name='member_list'),
    url(r'^team/(?P<year>[0-9]{4})/$', views.MemberListWithYear.as_view(), name='member_list'),
    url(r'^sponsors/(?P<year>[0-9]{4})/$', views.SponsorListWithYear.as_view(), name='sponsor_list'),
    url(r'^history/(?P<year>[0-9]{4})/$', views.HistoryListWithYear.as_view(), name='history_list'),
    url(r'^quotes/$', views.QuoteList.as_view(), name='quote_list'),
    url(r'^members/$', views.MemberList.as_view(), name='member_list'),
    url(r'^sponsors/$', views.SponsorList.as_view(), name='sponsor_list'),
    url(r'^history/$', views.HistoryList.as_view(), name='history_list'),
    url(r'^blog/$', views.BlogListView, name='blogpost_list')
]