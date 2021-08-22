---
card: "https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png"
tags: [Django]
description: "by Mohammed Subhan Khan"
author: "Milad E. Fahmy"
title: "How to handle user authentication in Python Django"
created: "2021-08-16T15:42:50+02:00"
modified: "2021-08-16T15:42:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-django tag-python tag-web-development tag-learning-to-code tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to handle user authentication in Python Django</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SA3NDT1VMUBn9g0emx9TUg.png" alt="How to handle user authentication in Python Django">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
cd src
python manage.py startapp mysite
python manage.py migrate</code></pre><p>In a nutshell, these four commands create a new Django project named src, enter the project, create a new app, mysite, inside the src project, then create a SQLite database for the project named db.sqlite3. Also be sure to include the mysite app inside src/settings.py.</p><pre><code class="language-py">INSTALLED_APPS = [
'src',
'django.contrib.admin',
'django.contrib.auth',
...
]</code></pre><p>Create a directory named templates inside mysite app. Then create two other directories inside mysite/templates named “registration” and “mysite”.</p><p>Also, I will refer to the templates stored in these two directories, using registration/{template_name} and mysite/{template_name}.</p><p>Your project structure should ultimately look like this:</p><pre><code>.
|-- db.sqlite3
|-- manage.py
|-- mysite
|   |-- admin.py
|   |-- apps.py
|   |-- __init__.py
|   |-- migrations
|   |   `-- __init__.py
|   |-- models.py
|   |-- templates
|   |   |-- mysite
|   |   `-- registration
|   |-- tests.py
|   `-- views.py
`-- src
|-- __init__.py
|-- settings.py
|-- urls.py
`-- wsgi.py</code></pre><p>You may already be able to figure out what the templates in mysite may be used for (views defined in mysite for example). We’ll get to the importance of registration soon.</p><p>Also, we’ll need users to test our site. You can do this by creating a superuser (<code>python manage.py createsuperuser</code>). But don’t worry — everything this tutorial describes can be applied to normal users as well, without any changes. You can create normal users for the purpose of this tutorial by creating a superuser, running your development server (<code>python manage.py runserver</code>), navigating to localhost:8000/admin, navigating to Users, then creating a new user.</p><h3 id="handling-login">Handling login</h3><p>According to the documentation, Django provides <a href="https://docs.djangoproject.com/en/1.10/topics/auth/default/#all-authentication-views" rel="noopener">views</a> for handling user authentication methods like login, logout, and password recovery. This saves us the trouble of having to go through defining our own views for handling those things. Moreover, these views are quite configurable and are included in django.contrib.auth.views, which we will import as follows:</p><pre><code class="language-py">from django.contrib.auth import views as auth_views</code></pre><p>We want the login page to open when user goes to /login. To use the <a href="https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.login" rel="noopener">login</a> view append the following in src/urls.py</p><pre><code class="language-py">url(r'^login/$', auth_views.login),</code></pre><p>The view by default renders a template that is in registration/login.html.</p><p>Our registration/login.html includes the following simple HTML form:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Login&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method="POST"&gt;
{% csrf_token %}
&lt;p&gt;
&lt;label&gt;Username&lt;/label&gt;
&lt;input type="text" name="username"&gt;
&lt;/p&gt;
&lt;p&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input type="password" name="password"&gt;
&lt;/p&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Don’t want to use registration/login.html? You can specify what templates to use by giving a python dictionary as a third parameter in the urlpattern, with ‘template_name’ as key and the location of the template as the value. If you want to use mysite/login_user.html as the template:</p><pre><code class="language-py">url(r'^login/$', auth_views.login, {'template_name': 'mysite/login_user.html'})</code></pre><p>In addition, you can also use other arguments of the view, in pretty much the same way. For a full list of arguments, refer the <a href="https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.login" rel="noopener">docs</a>.</p><p>When user clicks on the submit button, the login view handles the login for us. After the user has logged in, we can define where the page should be redirected by specifying LOGIN_REDIRECT_URL in src/settings.py. By default, we will be redirected to /login if the login fails.</p><pre><code class="language-py">LOGIN_REDIRECT_URL = '/'</code></pre><p>Now run the development server (<code>python manage.py runserver</code>) and navigate to localhost:8000/login/. Enter the user credentials for your example superuser. You’ll be redirected to / if the login was successful. Otherwise you’ll be redirected to /login.</p><p>Even if your login was successful, you’ll be redirected to / and see an error. This will happen because we haven’t defined a <code>urlpattern</code> for it.</p><h3 id="handling-logout">Handling logout</h3><p>Next we want users to logout when they navigate to /logout. We can extend the same analogy as login to logout, accessing the view corresponding to <a href="https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.logout" rel="noopener">logout</a> by appending the following urlpattern to src/settings.py</p><pre><code class="language-py">url(r'^logout/$', auth_views.logout)</code></pre><p>The logout view renders the registration/logged_out.html template by default. Here is a simple logout template:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
You have successfully logged out.
&lt;a href="/"&gt;Home&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>As with login, you can change the template location by including an object with a ‘template_name’ key and the template’s location as the value.</p><h3 id="signup">Signup</h3><p>We want our users to register for our website by navigating to /register. Before doing that, let’s clean up the project a bit. First of all, we want a <code>urlpattern</code> for our home page /. We are going to use mysite app for this purpose, so append the following in src/urls.py</p><pre><code class="language-py">url(r'^', include('mysite.urls'))</code></pre><p>Now we need to include the <code>urlpattern</code> for / in mysite/urls.py, so include the following <code>urlpattern</code> in it (after importing the relevant libraries)</p><pre><code class="language-py">from django.conf.urls import url, include
from django.contrib import admin
from .views import home, register
urlpatterns = [
url(r'^$', home),
url(r'^register/', register),
]</code></pre><p>Here, <code>home</code> refers to the view for /, and <code>register</code> refers to the view for handling registration. For creating a user registration form, we will use Django’s in built forms. To do this, create a mysite/forms.py file and include the following:</p><pre><code class="language-py">from django import forms
class UserRegistrationForm(forms.Form):
username = forms.CharField(
required = True,
label = 'Username',
max_length = 32
)
email = forms.CharField(
required = True,
label = 'Email',
max_length = 32,
)
password = forms.CharField(
required = True,
label = 'Password',
max_length = 32,
widget = forms.PasswordInput()
)</code></pre><p>First, we import the forms library, we create <code>UserRegistrationForm</code>, which inherits from <code>forms.Form</code>. We want our forms to have 3 fields: <code>username</code>, <code>email</code>, <code>password</code> and the variable assignments do just that. <code>forms.CharField</code> represents a field composed of characters. The arguments — <code>required</code>, <code>max_length</code> and <code>label</code>— specify whether a field is required, it’s maximum length, and the field’s label. The widget parameter in <code>password</code> says that <code>password</code> is an input of type “password.”</p><p>We want users to be able to view the form if they go to /register, as well as fill it in and submit it. These correspond to GET and POST requests on /register. Thus, we include the following in mysite/views.py:</p><pre><code class="language-py">from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django import forms
from .forms import UserRegistrationForm
# Create your views here.
def home(request):
return render(request, 'mysite/home.html')
def register(request):
if request.method == 'POST':
form = UserRegistrationForm(request.POST)
if form.is_valid():
userObj = form.cleaned_data
username = userObj['username']
email =  userObj['email']
password =  userObj['password']
if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):
User.objects.create_user(username, email, password)
user = authenticate(username = username, password = password)
login(request, user)
return HttpResponseRedirect('/')
else:
raise forms.ValidationError('Looks like a username with that email or password already exists')
else:
form = UserRegistrationForm()
return render(request, 'mysite/register.html', {'form' : form})</code></pre><p>The home view is defined to render the src/home.html template, which is as follows:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Home&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
{% if user.is_authenticated %}
&lt;p&gt;hello&lt;/p&gt;
&lt;p&gt;welcome {{ user.username }}&lt;/p&gt;
&lt;p&gt;&lt;a href="/logout"&gt;Logout&lt;/a&gt;&lt;/p&gt;
{% else %}
&lt;p&gt;&lt;a href="/login"&gt;Login&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="/register"&gt;Register&lt;/a&gt;&lt;/p&gt;
{% endif %}
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>We check whether the user is logged in, using user.is_authenticated, and display our welcome text along with the username (using <code>user.username</code>) along with a link for logging out. If not, we will display links for logging in and registering.</p><p>For the register view, we check whether the request method is POST or not. If it isn’t, then we specify the form to be <code>UserRegistrationForm</code> and render, it by passing it as a parameter to mysite/register.html template:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method="POST"&gt;
{% csrf_token %} {{ form.as_p }}
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The form that is passed as input to the register view is then rendered using <code>form.as_p</code>. When the user clicks the submit button, a POST request is sent. We take the form data using the form variable.</p><p>Next we check if the form data is valid (through <code><a href="https://docs.djangoproject.com/en/1.10/ref/forms/api/#django.forms.Form.is_valid" rel="noopener">is_valid()</a></code>). If it is, we create a <code>userObj</code> dictionary which we get by applying <code><a href="https://docs.djangoproject.com/en/1.10/ref/forms/api/#django.forms.Form.cleaned_data" rel="noopener">cleaned_data</a></code> to the form and extract <code>username</code>, <code>email</code> and <code>password</code> from it.</p><p>The if condition checks whether it’s the case that a user with the same username and email exists in our database. If it is so, we create a new user, login using the same user and redirect to /. Otherwise, we raise an error saying that such a user already exists.</p><p>Here’s some relevant documentation in case you get stuck, or want to learn more:</p><ul><li><a href="https://docs.djangoproject.com/en/1.10/topics/auth/default/" rel="noopener">User Authentication</a></li><li><a href="https://docs.djangoproject.com/en/1.10/topics/forms/" rel="noopener">Forms</a></li></ul><p>If you would like to give me feedback about this tutorial, <a href="https://www.mohdsubhan.me/contact/" rel="noopener">contact me</a>.</p><p>If you liked this post, please ♡ it and share it :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
