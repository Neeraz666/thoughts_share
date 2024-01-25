from django.db import models
from users.models import UserAccount
from datetime import datetime

# Create your models here.
class Content(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    thoughts = models.TextField()
    postdate = models.DateTimeField(default=datetime.now, blank=True)


    def __str__(self):
        return self.title
    