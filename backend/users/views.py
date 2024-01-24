from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError 


User = get_user_model()

# Create your views here.
class SignupView(APIView):
    """
        SignupView class is created for signup. Permission classes are used for what kind of permissions are allowed for different individuals.
    """
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        """
            from request.data, we get data about different fields.
        """

        email = data['email']
        username = data['username']
        firstname = data['firstname']
        lastname = data['lastname']
        password = data['password']
        password1 = data['password1']



        """
            Checks if the passwords matches or not at first and then if it matches, it checks the email (whether it exists or not). Then it checks the username. At last if all things are right, it saves the user. 
        """
        if password == password1:
            try:
                validate_password(password)
            except ValidationError as e:
                return Response({"Error": e.messages})

            if User.objects.filter(email=email).exists():
                return Response({'error': "Email already exists! Try another."})
            
            else:
                if len(username) < 6 or not username.isalnum():
                    return Response({"error": "The username should be at least 6 letters and should contain only numbers and letters."})
                
                else:
                    user = User.objects.create_user(email=email, username=username, firstname=firstname, lastname=lastname, password=password)
                    user.save()

                    return Response({"success": "User created successfully."})
                
        else:
            return Response({"error": "Passwords donot match!"})