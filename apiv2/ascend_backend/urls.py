from django.contrib import admin
from django.conf.urls import url, include
from api.views import *

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/v2/admin/', admin.site.urls),
    url(r'^api/v2/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v2/', include('api.urls'))
]
