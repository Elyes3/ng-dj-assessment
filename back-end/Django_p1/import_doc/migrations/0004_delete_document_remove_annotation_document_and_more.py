# Generated by Django 4.2.3 on 2023-07-07 22:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('import_doc', '0003_annotation_selected'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Document',
        ),
        migrations.RemoveField(
            model_name='annotation',
            name='document',
        ),
        migrations.RemoveField(
            model_name='annotation',
            name='selected',
        ),
    ]
