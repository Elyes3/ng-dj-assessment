from rest_framework import serializers
from .models import Label

class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = ['title']

class LabelListSerializer(serializers.Serializer):
    labels = LabelSerializer(many=True)

    def create(self, validated_data):
        labels_data = validated_data.get('labels')
        label_instances = []

        for label_data in labels_data:
            title = label_data.get('title')
            label = Label.objects.create(title=title)
            label_instances.append(label)

        return label_instances
