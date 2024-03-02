from django.shortcuts import render
from rest_framework import generics
from .models import Message
from .serializers import MessageSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ContactView(APIView):
    def post(self, request, *args, **kwargs):
        # Traitement des données reçues depuis le formulaire
        name = request.data.get('name')
        email = request.data.get('email')
        entreprise = request.data.get('entreprise')
        numero_telephone = request.data.get('numero_telephone')
        message = request.data.get('message')

        # Ajoutez ici tout traitement supplémentaire nécessaire

        # Exemple de réponse (vous pouvez personnaliser cela)
        return Response({'message': 'Data received successfully!'}, status=status.HTTP_201_CREATED)