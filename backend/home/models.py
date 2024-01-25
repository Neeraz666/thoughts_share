from django.db import models
from users.models import UserAccount
from datetime import datetime

# Create your models here.
class Content(models.Model):

    """
        Model for content that the user will post can be seen here. user is a foreign key that helps in connecting the content with the user. Title and thoughts are character and textfield respectively and data is for: when the content was posted.
    """

    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    thoughts = models.TextField()
    postdate = models.DateTimeField(default=datetime.now, blank=True)


    def __str__(self):
        return self.title
    