from django.urls import path
from .views import HomeView, LogoutView

urlpatterns = [
    path('', HomeView.as_view(), name = "HomeView"),
    path('logout/', LogoutView.as_view(), name = "LogoutView"),
]