from .views import RegisterAPI, LoginAPI
from knox import views as knox_views
from django.urls import path

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
]