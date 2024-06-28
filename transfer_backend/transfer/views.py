from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from transfer.models import Playlist
import requests
import urllib.parse
from jose import jwt

def home(request):
    return render(request, 'home.html')

@csrf_exempt
def sample_api(request):
    return JsonResponse({"message": "Hello from Django!"})

def get_playlists(request):
    auth_header = request.headers.get('Authorization', None)
    if auth_header:
        token = auth_header.split(" ")[1]
        try:
            playlists = Playlist.objects.all().values()
            return JsonResponse(list(playlists), safe=False)
        except jwt.ExpiredSignatureError:
            return JsonResponse({"error": "Incorrect claims, please check the audience and issuer"}, status=401)
        except jwt.JWTClaimsError:
            return JsonResponse({"error": "Incorrect claims."}, status=401)
        except Exception:
            return JsonResponse({"error": "Unable to parse authentication token."}, status=401)
    return JsonResponse({"message": "Authorization header is expected"}, status=401)

import urllib.parse

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
    access_token = response_data.get('access_token', '')

    return JsonResponse(response_data)