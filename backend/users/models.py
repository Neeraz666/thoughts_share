from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class UserAccountManager(BaseUserManager):
    
    def create_user(self, email, username, password=None, **extra_fields):
        
        """
            A function named create_user is created which takes arguments such as email, usernam and password which then checks if the email is valid or not. If email is not valid it raises a ValueError saying Users must have an email address.
        """

        if not email:
            raise ValueError("Users must have an email adress.")
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields) 

        user.set_password(password)
        user.save()

        """
            The email is then normalized using normalize_email method so that the email address is all converted to lowercase that helps in differentiating the email. then user object is created by passing email and username and then a password is set and after that user is saved.
        """
        return user
    
    def create_superuser(self, email, username, password):

        user = self.create_user(email, username, password)
        
        """
            Another function is created so that a superuser can be created. The function create_user is used to create a user at first and then the superuser is created by validating 'is_superuser =True' and 'is_staff = True'
        """

        user.is_superuser = True
        user.is_staff = True

        user.save()

        return user





class UserAccount(AbstractBaseUser, PermissionsMixin):

    """
        User accounts would have different fields such as email, username, firstname, lastname and etc.

        is_active and is_staff, Username_field and Required_field is required since we have used AbstractBaseUser
    """
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length = 255)
    firstname = models.CharField(max_length = 255)
    lastname = models.CharField(max_length = 255)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_full_name(self):
        return str(self.firstname) + str(self.lastname)
    
    def get_short_name(self):
        return self.username
    
    def __str__(self):
        return self.email