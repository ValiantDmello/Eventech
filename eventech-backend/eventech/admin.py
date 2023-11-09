from django.contrib import admin
from .models import EventechUser, EventRequest, Event, EventAttendee
# Register your models here.

admin.site.register(EventechUser)
admin.site.register(EventRequest)
admin.site.register(Event)
admin.site.register(EventAttendee)


