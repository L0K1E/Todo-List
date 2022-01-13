from  . import views
from django.urls import path

urlpatterns = [
    path('api/', views.api),
    path('api/todos/new/', views.create),
    path('api/todos/update/<str:pk>/', views.update),
    path('api/todos/delete/<str:pk>/', views.delete),
    path('api/todos/all/', views.list),
    path('api/todos/<str:pk>/', views.detail),
]
