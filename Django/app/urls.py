from django.urls import path
from .views import index, products, create_product

urlpatterns = [
    path('', index),
    path('api/products', products),
    path('api/products/create', create_product)
]
