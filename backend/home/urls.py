from django.urls import path
from .views import HomeView, LogoutView, ContentPost, ListContents

urlpatterns = [
    path('', HomeView.as_view(), name = "HomeView"),
    path('postthought/', ContentPost.as_view(), name = "ContentPost"),
    path('listcontents/', ListContents.as_view(), name = "ListContents"),
    path('logout/', LogoutView.as_view(), name = "LogoutView"),
]