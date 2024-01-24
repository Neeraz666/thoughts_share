from django.contrib import admin
from .models import UserAccount

# Register your models here.

class UserAccountAdmin(admin.ModelAdmin):

    """
        This is used for creating different interface on Admin panel. So when i go to admin panel, the argumets given in list_display will only be shown with listdisplaylinks being the only links that can open the list and etc. readonly_fields is required to keep the password encrypted at admin panel too.
    """

    list_display = ('email', 'firstname', 'lastname')
    list_display_links =  ('email',)
    search_fields = ('email', 'username', 'firstname', 'lastname')
    list_per_page = 50
    readonly_fields = ('password',)

admin.site.register(UserAccount, UserAccountAdmin)