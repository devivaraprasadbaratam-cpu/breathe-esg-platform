from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include
def home(request):
    return HttpResponse("Backend is Live 🚀")
urlpatterns = [

    path(
        "admin/",
        admin.site.urls
    ),

    path(
        "api/",
        include("api.urls")
    ),
]