from django.test import TestCase

# Create your tests here.
import pytest
from .models import Task

@pytest.mark.django_db
def test_create_task():
    task = Task.objects.create(title="Test Task")
    assert task.title == "Test Task"
