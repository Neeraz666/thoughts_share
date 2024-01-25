from django.contrib import admin
from django.urls import path, include, re_path

# Settings and all the other required things are imported here
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # api-auth, token, tokenrefresh are included in urls by the help of rest_framework

    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh_pair'),
    path('api/users/', include('users.urls')),
    path('api/home/', include('home.urls')),
    path('admin/', admin.site.urls),
] 

# MEDIA settings is set so that all medias will be saved in MEDIA folder
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)