from django.urls import path
from .views import HomeView, LogoutView, ContentPost, ListContents, DeleteContent

urlpatterns = [
    path('', HomeView.as_view(), name = "HomeView"),
    path('postthought/', ContentPost.as_view(), name = "ContentPost"),
    path('listcontents/', ListContents.as_view(), name = "ListContents"),
    path('deletecontent/<int:id>/', DeleteContent.as_view(), name = "DeleteContent"),
    path('logout/', LogoutView.as_view(), name = "LogoutView"),
]