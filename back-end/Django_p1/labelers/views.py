from rest_framework import generics, status
from .models import Label
from .serializers import LabelListSerializer, LabelSerializer
from rest_framework.response import Response

class LabelListCreateAPIView(generics.ListCreateAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelListSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        labels_data = serializer.validated_data.get('labels')
        label_instances = []

        for label_data in labels_data:
            label_serializer = LabelSerializer(data=label_data)
            label_serializer.is_valid(raise_exception=True)
            label = label_serializer.save()
            label_instances.append(label)

        labels_serializer = LabelSerializer(label_instances, many=True)
        return Response({'success': True, 'message': 'Labels created successfully.', 'labels': labels_serializer.data}, status=status.HTTP_201_CREATED)

class LabelListAPIView(generics.ListAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer