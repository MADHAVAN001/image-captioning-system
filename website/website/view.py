from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json
from . import forms


def hello(request):
    context = {}
    context['content1'] = 'Hello World!'
    return render(request, 'index.html', context)


@csrf_exempt
def predict(request):
    json_response = dict()
    if request.method == 'POST':

        form = forms.ImageForm(request.POST, request.FILES)
        if form.is_valid():
            print("POST method")
            print(form.cleaned_data['image'])
            # json_response['image'] = form.cleaned_data['image']
            json_response['caption'] = "Hello World 122"

    return JsonResponse(json_response)
