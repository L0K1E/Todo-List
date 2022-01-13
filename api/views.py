from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from api.models import Task
from  .serializer import TaskSerialzers

@api_view(['GET'])
def api(request):
    api_urls = {
        'List' : '/api/todos/all',
        'Detail' : '/api/todos/:id',
        'Create' : '/api/todos/new',
        'Update' : '/api/todos/update/:id',
        'Delete' : '/api/delete/:id/'
    }
    return Response(api_urls)

@api_view(['GET']) 
def list(request):
    task = Task.objects.all()
    serializer = TaskSerialzers(task, many=True)
    return Response(serializer.data) 

@api_view(['GET']) 
def detail(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerialzers(task, many=False)
    return Response(serializer.data) 

@api_view(['POST']) 
def create(request):
    serializer = TaskSerialzers(data= request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST']) 
def update(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerialzers(instance=task, data= request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(['DELETE']) 
def delete(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response("Record Deleted !") 