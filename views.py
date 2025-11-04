from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from .models import Task
from .serializers import TaskSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# CRUD for tasks
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer

# Analytics view
@api_view(['GET'])
def analytics(request):
    status_data = Task.objects.values('status').annotate(count=Count('status'))
    category_data = Task.objects.values('category').annotate(count=Count('category'))
    return Response({
        'status': list(status_data),
        'categories': list(category_data)
    })

# Register user
@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password:
        return Response("Username and password required", status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response("User already exists", status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password, email=email)
    return Response("success", status=status.HTTP_201_CREATED)

# Login user
@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response("success", status=status.HTTP_200_OK)
    else:
        return Response("Invalid credentials", status=status.HTTP_401_UNAUTHORIZED)
