from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def sample_api(request):
    return JsonResponse({"message": "Hello from Django!"})

# Allows us to see if the Django server is running
# by visiting http://localhost:8000/api/sample/ in a browser