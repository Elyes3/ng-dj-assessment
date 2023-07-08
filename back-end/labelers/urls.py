from django.urls import path
from .views import LabelListCreateAPIView,LabelListAPIView

urlpatterns = [
    path('labels/', LabelListCreateAPIView.as_view(), name='label-list-create'),
        path('labels/', LabelListAPIView.as_view(), name='label-list'),

]
