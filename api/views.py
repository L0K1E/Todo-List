from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

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

def hello(request):
    return JsonResponse("hello world", safe=False)