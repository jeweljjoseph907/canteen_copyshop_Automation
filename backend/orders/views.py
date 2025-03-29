from django.http import JsonResponse

def test_api(request):
    return JsonResponse({"message": "Django backend is working!"})
