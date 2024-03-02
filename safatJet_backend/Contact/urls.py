from django.urls import path
from .views import MessageListCreateView
from .views import ContactView

urlpatterns = [
    path('Messages/', MessageListCreateView.as_view(), name='Message-list-create'),
     path('contact/', ContactView.as_view(), name='contact'),
]