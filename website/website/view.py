from django.shortcuts import render


def hello(request):
    context = {}
    context['content1'] = 'Hello World!'
    return render(request, 'index.html', context)
