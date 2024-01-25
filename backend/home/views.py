from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class HomeView(APIView):

    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request):
        content = ({"message": "Welcome to Home page!"})
    
        return Response(content)
    

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
        
    