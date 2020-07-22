from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from .forms import UploadFileForm

def index(request):
	context = {
		'title' : 'Kanker Kulit Melanoma',
		'heading' : 'KLASIFIKASI KANKER MELANOMA',
		'subheading' : 'MENGGUNAKAN METODE SUPPORT VECTOR MACHINE (SVM)',
	}
	return render(request,'index.html',context)

def get_image(request):
	if request.method == 'POST':
		form = UploadFileForm(request.POST, request.FILES)
		if form.is_valid():
			return HttpResponse("file masuk")
		else:
			return HttpResponse("file gamasuk")
	else:
		return "error request"
	return render(request,'upload.html',{'form':form})