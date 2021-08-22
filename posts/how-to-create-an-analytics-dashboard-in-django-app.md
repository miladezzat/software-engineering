---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg"
tags: [Python]
description: "Hi folks!"
author: "Milad E. Fahmy"
title: "How to create an analytics dashboard in a Django app"
created: "2021-08-16T15:37:17+02:00"
modified: "2021-08-16T15:37:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-django tag-data-visualization tag-data-analytics tag-business-intelligence tag-web-development tag-programming tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">How to create an analytics dashboard in a Django app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c9e740569d1a4ca3336.jpg" alt="How to create an analytics dashboard in a Django app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
'dashboard',
]</code></pre><p>Now our project is aware of the app’s existence.</p><h2 id="views">Views</h2><p><br>In the <code>dashboard/views.py</code>, we’ll create a function that directs a user to the specific templates defined in the <code>dashboard/templates</code> folder. Views can contain classes as well.</p><p>Here’s how we define it:</p><pre><code class="language-Python">from django.http import JsonResponse
from django.shortcuts import render
from dashboard.models import Order
from django.core import serializers
def dashboard_with_pivot(request):
return render(request, 'dashboard_with_pivot.html', {})</code></pre><p>Once called, this function will render <code>dashboard_with_pivot.html</code> - a template we'll define soon. It will contain the pivot table and pivot charts components.</p><p>A few more words about this function. Its <code>request</code> argument, an instance of <code>HttpRequestObject</code>, contains information about the request, e.g., the used HTTP method (GET or POST). The method <code>render</code> searches for HTML templates in a <code>templates</code> directory located inside the app’s directory.</p><p>We also need to create an auxiliary method that sends the response with data to the pivot table on the app's front-end. Let's call it <code>pivot_data</code>:</p><pre><code class="language-Python">def pivot_data(request):
dataset = Order.objects.all()
data = serializers.serialize('json', dataset)
return JsonResponse(data, safe=False)</code></pre><p>Likely, your IDE is telling you that it can’t find a reference <code>Order</code> in <code>models.py</code>. No problem - we’ll deal with it later.</p><h2 id="templates">Templates</h2><p>For now, we’ll take advantage of the Django template system.</p><p>Let's create a new directory <code>templates</code> inside <code>dashboard</code> and create the first HTML template called <strong><code>dashboard_with_pivot.html</code></strong>. It will be displayed to the user upon request. Here we also add the scripts and containers for data visualization components:</p><pre><code class="language-HTML">&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Dashboard with Flexmonster&lt;/title&gt;
&lt;script src="https://cdn.flexmonster.com/flexmonster.js"&gt;&lt;/script&gt;
&lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="https://cdn.flexmonster.com/demo.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="pivot-table-container" data-url="{% url 'pivot_data' %}"&gt;&lt;/div&gt;
&lt;div id="pivot-chart-container"&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre><h2 id="mapping-views-functions-to-urls">Mapping views functions to URLs<br></h2><p>To call the views and display rendered HTML templates to the user, we need to map the views to the corresponding URLs. </p><blockquote>Here's a tip: <a href="https://docs.djangoproject.com/en/2.1/misc/design-philosophies/#id8">one of Django's URL design principles says about loose coupling</a>, we shouldn't make URLs with the same names as Python functions.</blockquote><p>Go to <code>analytics_app/urls.py</code> and add relevant configurations for the <code>dashboard</code> app at the project's level.</p><pre><code class="language-Python">from django.contrib import admin
from django.urls import path, include
urlpatterns = [
path('admin/', admin.site.urls),
path('dashboard/', include('dashboard.urls')),
]
</code></pre><p>Now the URLs from the <code>dashboard</code> app can be accessed but only if they are prefixed by <code>dashboard</code>.</p><p>After, go to <code>dashboard/urls.py</code> (create this file if it doesn’t exist) and add a list of URL patterns that are mapped to the view functions:</p><pre><code class="language-Python">from django.urls import path
from . import views
urlpatterns = [
path('', views.dashboard_with_pivot, name='dashboard_with_pivot'),
path('data', views.pivot_data, name='pivot_data'),
]</code></pre><h2 id="model">Model</h2><p><br>And, at last, we've gotten to <strong>data modeling</strong>. This is my favorite part.</p><p>As you might know, a data model is a conceptual representation of the data stored in a database. </p><p>Since the purpose of this tutorial is to show how to build interactive data visualization inside the app, we won’t be worrying much about the database choice. We’ll be using <strong>SQLite</strong> - a lightweight database that ships with the Django web development server. </p><p>But keep in mind that this database is not the appropriate choice for production development. With the Django ORM, you can use other databases that use the SQL language, such as PostgreSQL or MySQL.</p><p>For the sake of simplicity, our model will consist of one class. You can create more classes and define relationships between them, complex or simple ones.</p><p>Imagine we're designing a <strong>dashboard for the sales department</strong>. So, let's create an <strong>Order </strong>class and define its attributes in <code>dashboard/models.py</code>: </p><pre><code class="language-Python">from django.db import models
class Order(models.Model):
product_category = models.CharField(max_length=20)
payment_method = models.CharField(max_length=50)
shipping_cost = models.CharField(max_length=50)
unit_price = models.DecimalField(max_digits=5, decimal_places=2)</code></pre><h2 id="working-with-a-database">Working with a database</h2><p><br>Now we need to create a database and populate it with records.</p><p><em>But how can we translate our model class into a database table?</em></p><p>This is where the concept of <strong>migration </strong>comes in handy. <strong>Migration </strong>is simply a file that describes which changes must be applied to the database. Every time we need to create a database based on the model described by Python classes, we use migration.</p><p>The data may come as Python objects, dictionaries, or lists. This time we'll represent the entities from the database using Python classes that are located in the <code>models</code> directory.</p><p>Create migration for the app with one command:</p><p><code>python manage.py makemigrations dashboard</code></p><p>Here we specified that the app should tell Django to apply migrations for the <code>dashboard</code> app's models.</p><p>After creating a migration file, apply migrations described in it and create a database:</p><p><code>python manage.py migrate dashboard</code></p><p>If you see a new file <code>db.sqlite3</code> in the project's directory, we are ready to work with the database.</p><p>Let's create instances of our Order class. For this, we'll use the Django shell - it's similar to the Python shell but allows accessing the database and creating new entries.</p><p>So, start the Django shell:</p><p><code>python manage.py shell</code></p><p>And write the following code in the interactive console:</p><pre><code class="language-Python">from dashboard.models import Order
&gt;&gt;&gt; o1 = Order(
... product_category='Books',
... payment_method='Credit Card',
... shipping_cost=39,
... unit_price=59
... )
&gt;&gt;&gt; o1.save()</code></pre><p>Similarly, you can create and save as many objects as you need.</p><h2 id="connecting-data-to-flexmonster">Connecting data to Flexmonster</h2><p> <br>And here's what I promised to explain.</p><p>Let's figure out how to pass the data from your model to the data visualization tool on the front end.</p><p>To make the back end and Flexmonster communicate, we can follow two different approaches:</p><ul><li><em>Using the request-response cycle.</em> We can use Python and the Django template engine to write JavaScript code directly in the template.</li><li><em>Using an async request (AJAX)</em> that returns the data in JSON.</li></ul><p>In my mind, the second one is the most convenient because of a number of reasons. First of all, Flexmonster understands JSON. To be precise, it can accept an array of JSON objects as input data. Another benefit of using async requests is the better page loading speed and more maintainable code.</p><p>Let's see how it works.</p><p>Go to the <code>templates/dashboard_pivot.html</code>.</p><p>Here we've created two <code>div</code> containers where the pivot grid and pivot charts will be rendered.</p><p>Within the ajax call, we make a request based on the URL contained in the <code>data-URL</code> property. Then we tell the ajax request that we expect a JSON object to be returned (defined by <code>dataType</code>).</p><p>Once the request is completed, the JSON response returned by our server is set to the <code>data</code> parameter, and the pivot table, filled with this data, is rendered.</p><p>The query result (the instance of <code>JSONResponse</code>) returns a string that contains an array object with extra meta information, so we should add a tiny function for data processing on the front end. It will extract only those nested objects we need and put them into a single array. This is because Flexmonster accepts an array of JSON objects without nested levels.</p><pre><code class="language-JavaScript">function processData(dataset) {
var result = []
dataset = JSON.parse(dataset);
dataset.forEach(item =&gt; result.push(item.fields));
return result;
}</code></pre><p>After processing the data, the component receives it in the right format and performs all the hard work of data visualization. A huge plus is that there’s no need to group or aggregate the values of objects manually.</p><p>Here's how the entire script in the template looks:</p><pre><code class="language-JavaScript">function processData(dataset) {
var result = []
dataset = JSON.parse(dataset);
dataset.forEach(item =&gt; result.push(item.fields));
return result;
}
$.ajax({
url: $("#pivot-table-container").attr("data-url"),
dataType: 'json',
success: function(data) {
new Flexmonster({
container: "#pivot-table-container",
componentFolder: "https://cdn.flexmonster.com/",
width: "100%",
height: 430,
toolbar: true,
report: {
dataSource: {
type: "json",
data: processData(data)
},
slice: {}
}
});
new Flexmonster({
container: "#pivot-chart-container",
componentFolder: "https://cdn.flexmonster.com/",
width: "100%",
height: 430,
//toolbar: true,
report: {
dataSource: {
type: "json",
data: processData(data)
},
slice: {},
"options": {
"viewType": "charts",
"chart": {
"type": "pie"
}
}
}
});
}
});</code></pre><p>Don't forget to enclose this JavaScript code in <code>&lt;script&gt;</code> tags. </p><p><em>Phew! We’re nearly there with this app.</em></p><h2 id="fields-customization">Fields customization</h2><p><br>Flexmonster provides a special property of the data source that allows setting field data types, custom captions, and defining multi-level hierarchies.</p><p>This is a nice feature to have - we can elegantly separate data and its presentation right in the report's configuration.</p><p>Add it to the <code>dataSource</code> property of the report:</p><pre><code class="language-JavaScript">mapping: {
"product_category": {
"caption": "Product Category",
"type": "string"
},
"payment_method": {
"caption": "Payment Method",
"type": "string"
},
"shipping_cost": {
"caption": "Shipping Cost",
"type": "number"
},
"unit_price": {
"caption": "Unit Price",
"type": "number"
}
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
