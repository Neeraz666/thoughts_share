from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

# Create your views here.
class HomeView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request):
        content = ({"message": "Welcome to Home page!"})
    
        return Response(content)