from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from jose import jwt
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
#Recheck this import for the future
from transfer.models import Playlist
import requests
from django.shortcuts import redirect
from django.urls import path
from .views import spotify_login, spotify_callback

@csrf_exempt
def sample_api(request):
    return JsonResponse({"message": "Hello from Django!"})

# Allows us to see if the Django server is running
# by visiting http://localhost:8000/api/sample/ in a browser

#AUTH0_DOMAIN = 'dev-7v8z1v7v.us.auth0.com'
#API_IDENTIFIER = 'https://transfer-backend'
#ALGORITHMS = ["RS256"]

def get_playlists(request):
    auth_header = request.headers.get('Authorization', None)
    if auth_header:
        token = auth_header.split(" ")[1]
        try:
            #jwt.decode(token, None, algorithms=["RS256"], audience=API_IDENTIFIER)
            playlists = Playlist.objects.all().values()
            return JsonResponse(list(playlists), safe=False)
        except jwt.ExpiredSignatureError:
            return JsonResponse({"error": "Incorrect claims, please check the audience and issuer"}, status=401)
        except jwt.JWTClaimsError:
            return JsonResponse({"error": "Incorrect claims."}, status=401)
        except Exception:
            return JsonResponse({"error": "Unable to parse authentication token."}, status=401)
    return JsonResponse({"message": "Authorization header is expected"}, status=401)

#adding spotify callback view to handle redirect after using authorization

def spotify_login(request):
    scopes = 'user-library-read playlist-read-private'
    query = {
        'client_id': settings.SPOTIFY_CLIENT_ID,
        'response_type': 'code',
        'redirect_uri': settings.SPOTIFY_REDIRECT_URI,
        'scope': scopes
    }   
    url = f"https://accounts.spotify.com/authorize?{urllib.parse.urlencode(query)}"
    return redirect(url)

def spotify_callback(request):
    code = request.GET.get('code')
    token_url = 'https://accounts.spotify.com/api/token'
    response = requests.post(token_url, data={
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': settings.SPOTIFY_REDIRECT_URI,
        'client_id': settings.SPOTIFY_CLIENT_ID,
        'client_secret': settings.SPOTIFY_CLIENT_SECRET
    })
    response_data = response.json()
    access_token = response_data['access_token']

    return JsonResponse(response_data)

urlpatterns = [
    path('spotify-login/', spotify_login, name='spotify-login'),
    path('callback/', spotify_callback, name='spotify-callback'),
]