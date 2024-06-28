from django.contrib import admin
from django.urls import path, include
from transfer.views import spotify_login, spotify_callback, sample_api, get_playlists, home

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
   # path('my-admin/', admin.site.urls),  # Rename the admin URL pattern
    path ('', home, name='home'), #root path for home template
    path('api/spotify-login/', spotify_login, name='spotify-login'),
    path('api/callback/', spotify_callback, name='spotify-callback'),
    path('api/sample/', sample_api, name='sample-api'),
    path('api/playlists/', get_playlists, name='get-playlists')
]
