from django.shortcuts import render

# Create your views here.
import json
import os
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
#from .models import Annotation
#from .serializers import  AnnotationSerializer
from django.http import HttpResponse


#create document in db
#class DocumentAPIView(generics.RetrieveAPIView):
#  queryset = Document.objects.all()
#  serializer_class = DocumentSerializer
#  lookup_field = 'pk'


#create annotation in db
#class AnnotationCreateAPIView(generics.CreateAPIView):
#    queryset = Annotation.objects.all()
#    serializer_class = AnnotationSerializer

class AnnotationExportAPIView(APIView):
    def post(self, request):
        data = request.data

        document_text = data.get('document')
        annotations = data.get('annotations')

        response_data = {
            'document': document_text,
            'annotations': annotations,
        }

        json_data = json.dumps(response_data, indent=4)

        upload_folder = 'uploads'
        os.makedirs(upload_folder, exist_ok=True)

        file_path = os.path.join(upload_folder, 'annotations.json')
        with open(file_path, 'w') as file:
            file.write(json_data)

        response = HttpResponse(json_data, content_type='application/json')
        response['Content-Disposition'] = f'attachment; filename="{file_path}"'
        return response
#upload a document    
class FileUploadAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')

        if file_obj is None:
            return Response({'success': False, 'message': 'No file uploaded.'}, status=400)

        try:
            file_content = file_obj.read().decode('utf-8')
            return Response({'success': True, 'file_content': file_content})
        except Exception as e:
            return Response({'success': False, 'message': 'Error reading file.'}, status=500)