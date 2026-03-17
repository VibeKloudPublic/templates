import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .firebase import db


def index(request):
    return render(request, 'index.html')


def products(request):
    if request.method == 'GET':
        docs = db.collection('products').stream()
        data = [{'id': d.id, **d.to_dict()} for d in docs]
        return JsonResponse(data, safe=False)
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def create_product(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Method not allowed'}, status=405)

    body = json.loads(request.body)
    name = body.get('name')
    price = body.get('price')
    if not name or price is None:
        return JsonResponse({'error': 'name and price required'}, status=400)

    ref = db.collection('products').document()
    ref.set({'name': name, 'price': float(price)})
    return JsonResponse({'id': ref.id, 'name': name, 'price': float(price)}, status=201)
