from django.urls import path
from .views import  AnnotationExportAPIView,FileUploadAPIView
urlpatterns = [    #path('annotations/create/', AnnotationCreateAPIView.as_view(), name='annotation-create'),
    path('annotations/export/', AnnotationExportAPIView.as_view(), name='annotation-export'),
    path('upload/', FileUploadAPIView.as_view(), name='file-upload'),
]