from django.contrib import admin
from django.conf.urls import url, include
from api.views import *

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^apiv2/admin/', admin.site.urls),
    url(r'^apiv2/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^apiv2/', include('api.urls'))
]
