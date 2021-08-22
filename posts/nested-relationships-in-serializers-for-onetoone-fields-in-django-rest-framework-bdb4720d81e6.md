---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg"
tags: [Django]
description: "The Django Rest Framework (DRF) is one of the effectively wri"
author: "Milad E. Fahmy"
title: "Nested Relationships in Serializers for OneToOne fields in Django Rest Framework"
created: "2021-08-16T15:42:17+02:00"
modified: "2021-08-16T15:42:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-django tag-python tag-programming tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Nested Relationships in Serializers for OneToOne fields in Django Rest Framework</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb2fe740569d1a4cac5db.jpg" alt="Nested Relationships in Serializers for OneToOne fields in Django Rest Framework">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Django Rest Framework (<a href="http://www.django-rest-framework.org/" rel="noopener">DRF</a>) is one of the effectively written frameworks around Django and helps build REST APIs for an application back-end.</p><p>I was using it in one of my personal projects and stumbled upon this challenge of “serializing a model which is referencing another model via <a href="https://docs.djangoproject.com/en/1.11/ref/models/fields/#django.db.models.OneToOneField" rel="noopener">OneToOne field</a>.”</p><p>`I was using the <strong>User </strong>model from <code><a href="https://docs.djangoproject.com/en/2.0/ref/contrib/auth/" rel="noopener">django.contrib.auth.models</a></code>. I wanted to write an API to create and update a user object through a single API which also updates my model’s attributes. The solution was to use DRF’s <strong>Nested Relationships </strong>in serialization.</p><p>I shall assume you have a fair working knowledge of Python, virtualenv, pip, Django and DRF before proceeding. If not, please learn more and feel free to return if you are ever stuck on nested relationships in serialization.</p><p>The example I am considering here is a <strong>University Student</strong> model, referencing <strong>User </strong>model via the OneToOne field. My goal is a single API for creating and getting user details like name, username, and email along with a student attribute such as subject major.</p><p>Here is how my <code><strong>models.py</strong></code> looks:</p><pre><code class="language-py">from django.db import models
from django.contrib.auth.models import User
class UnivStudent(models.Model):
"""
A class based model for storing the records of a university student
Note: A OneToOne relation is established for each student with User model.
"""
user = models.OneToOneField(User)
subject_major = models.CharField(name="subject_major", max_length=60)</code></pre><p>Next, the serializer for the above model determines the attributes to manipulate. If you observe below, I have 2 serializer classes, <code><strong>UserSerializer</strong></code><strong> </strong>and <code>StudentSerializer</code>.<strong> </strong>This is our point of interest.</p><p>I have declared a <code>user</code> attribute which is a serializer field here. That <code>user</code> attribute will primarily hold the entire reference for the <code>UserSerializer</code> class. In the <strong>fields</strong> of <code>StudentSerializer</code> , we just see ‘<code>user</code>’ and ‘<code>subject_major</code>’. This allows us to enter the student (or user) attributes along with the subject_major.</p><p>A user entry is created which is referenced by the student entry. We override the create method of <code>StudentSerializer</code> to create a <code>user</code> object first, and use that to create the <code>student</code> object.</p><p>The <code><strong>serializer.py </strong></code>is as follows:</p><pre><code class="language-py">from rest_framework import serializers, status
from models import *
class UserSerializer(serializers.ModelSerializer):
class Meta:
model = User
fields = ('username', 'first_name', 'last_name', 'email')
class StudentSerializer(serializers.ModelSerializer):
"""
A student serializer to return the student details
"""
user = UserSerializer(required=True)
class Meta:
model = UnivStudent
fields = ('user', 'subject_major',)
def create(self, validated_data):
"""
Overriding the default create method of the Model serializer.
:param validated_data: data containing all the details of student
:return: returns a successfully created student record
"""
user_data = validated_data.pop('user')
user = UserSerializer.create(UserSerializer(), validated_data=user_data)
student, created = UnivStudent.objects.update_or_create(user=user,
subject_major=validated_data.pop('subject_major'))
return student</code></pre><p>The <code><strong>views.py</strong></code> should be quite straightforward if you are already familiar with the <a href="https://docs.djangoproject.com/en/1.11/topics/class-based-views/" rel="noopener">class-based views </a>of Django. We will be using the serializer to validate and create the model objects:</p><pre><code class="language-py">from serializers import *
from models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
class StudentRecordView(APIView):
"""
A class based view for creating and fetching student records
"""
def get(self, format=None):
"""
Get all the student records
:param format: Format of the student records to return to
:return: Returns a list of student records
"""
students = UnivStudent.objects.all()
serializer = StudentSerializer(students, many=True)
return Response(serializer.data)
def post(self, request):
"""
Create a student record
:param format: Format of the student records to return to
:param request: Request object for creating student
:return: Returns a student record
"""
serializer = StudentSerializer(data=request.data)
if serializer.is_valid(raise_exception=ValueError):
serializer.create(validated_data=request.data)
return Response(serializer.data, status=status.HTTP_201_CREATED)
return Response(serializer.error_messages,
status=status.HTTP_400_BAD_REQUEST)</code></pre><p>I have included <code>/univstud/</code> <code>url </code>for achieving <code>post</code> and <code>get</code> requests for university student.</p><pre><code class="language-py">from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from OneToOne import views
admin.autodiscover()
router = routers.DefaultRouter()
urlpatterns = patterns('',
url(r'^admin/', include(admin.site.urls)),
url(r'^api-auth/', include('rest_framework.urls',
namespace='rest_framework')),
)
urlpatterns += format_suffix_patterns([
# API to map the student record
url(r'^api/univstud/$',
views.StudentRecordView.as_view(),
name='students_list'),
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
