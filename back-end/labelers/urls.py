from django.urls import path
from .views import LabelListCreateAPIView,LabelListAPIView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('labels/', LabelListCreateAPIView.as_view(), name='label-list-create'),
        path('labels/', LabelListAPIView.as_view(), name='label-list'),

]
urlpatterns += staticfiles_urlpatterns();
