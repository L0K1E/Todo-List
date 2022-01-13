from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api(request):
    api_urls = {
        'List' : '/api/todos/all',
        'Detail' : '/api/todos/:id',
        'Create' : '/api/todos/new',
        'Update' : '/api/todos/delete/:id',
        'Delete' : '/delete/<str:pk>/'
    }
    return Response(api_urls)
