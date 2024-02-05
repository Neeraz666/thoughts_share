from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Content
from django.db import IntegrityError
from .serializers import ContentViewSerializer

# Create your views here.
class HomeView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request):
        content = ({"message": "Welcome to Home page!"})
    
        return Response(content)
    
class ContentPost(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    """
        This class helps to post the contents and save it in database. Users can only access this if the user is authenticated.
    """

    def post(self, request, format=None):
        try:
            contentdata = self.request.data

            currentuser = request.user

            title = contentdata['title']
            thoughts = contentdata['thoughts']

            content = Content( user=currentuser, title=title, thoughts=thoughts)
            content.save()

            return Response({"success": "Your Content has been saved."})
        
        except IntegrityError as e:
            # Handle IntegrityError specifically
            return Response({"Error": "IntegrityError occurred: {}".format(str(e))}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Handle other exceptions
            return Response({"Error": "An error occurred: {}".format(str(e))}, status=status.HTTP_400_BAD_REQUEST)


class ListContents(ListAPIView):

    """
        This class helps in listing all the contents that has been posted as per the postdate.
    """

    queryset = Content.objects.order_by('-postdate')
    permission_classes = (permissions.AllowAny,)
    serializer_class = ContentViewSerializer




class IsOwner(permissions.BasePermission):
    """
        This class gives permission to delete or update if only to the owner of the objects.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.user == request.user


class DeleteContent(DestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentViewSerializer
    lookup_field = 'id'
    permission_classes = (permissions.IsAuthenticated, IsOwner)

    def delete(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response({"success": "Content has been deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        
        except Exception as e:
            return Response({"Error": "An error occured: {}".format(str(e))}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    