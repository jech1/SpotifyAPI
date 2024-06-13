from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from jose import jwt

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
#Recheck this import for the future
from transfer.models import Playlist

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