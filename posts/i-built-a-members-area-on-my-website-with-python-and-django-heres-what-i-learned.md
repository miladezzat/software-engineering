---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg"
tags: [Python]
description: "I decided it was time to upgrade my personal website in order"
author: "Milad E. Fahmy"
title: "I Built a Members  Area on My Website with Python and Django. Here s What I Learned."
created: "2021-08-16T15:36:33+02:00"
modified: "2021-08-16T15:36:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-django ">
<header class="post-full-header">
<h1 class="post-full-title">I Built a Members' Area on My Website with Python and Django. Here's What I Learned.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b12740569d1a4ca2983.jpg" alt="I Built a Members' Area on My Website with Python and Django. Here's What I Learned.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
{% for course in courses_list %}
&lt;h1&gt;{{ course.course_title }} &lt;/h1&gt;
{% endfor %}</code></pre><p>Would create a heading for every course variable found in the <code>courses_list</code> object. This could would render an HTML file with an <code>&lt;h1&gt;</code> tag that contains the title of each course, like this:</p><pre><code class="language-html">&lt;h1&gt; Python Fundamentals &lt;/h1&gt;
&lt;h1&gt; Advanced Python for Finance and Data Science&lt;/h1&gt;
&lt;h1&gt; How to Run Python Scripts &lt;/h1&gt;
user = models.OneToOneField(User, on_delete=models.CASCADE)
enrolled_courses = models.ManyToManyField(Course)</code></pre><p>A Profile Model is a useful tool for extending the functionality of the existing user model in order to store information about the user, beyond just authentication data. In my case I created a <em>profile model</em> named Profile to store which courses the user is enrolled in.</p><p>Here's my Course Model:</p><pre><code class="language-python">class Course(models.Model):
course_title = models.CharField(max_length=200)
course_description = models.CharField(max_length=500)
course_price = models.DecimalField(max_digits=10, decimal_places=2)</code></pre><p>My Course model is fairly straightforward. I only needed to store 3 pieces of information about each course for logistics while the actual content of the course is handled by the Document model.</p><pre><code class="language-python">class Document(models.Model):
course = models.ForeignKey(Course,on_delete=models.PROTECT)
file = models.FileField (
upload_to=markdown_upload_location,
default='default.md'
src="https://checkout.stripe.com/checkout.js"
class="stripe-button"
data-key="{{ key }}"
data-description="Payment: {{ course.course_title }}"
data-amount="{% multiply course.course_price 100 %}"
data-locale="auto"&gt;
charge = stripe.Charge.create(
amount=amount,
currency=currency,
description=f"Payment for course: {courseTitle}",    source=self.request.POST['stripeToken']
WSGIProcessGroup courses.nickmccullum.com
WSGIDaemonProcess course python-path=/home/ubuntu/django/courses-website python-home=/home/ubuntu/django/courses-website-venv
WSGIProcessGroup course
WSGIScriptAlias / /home/ubuntu/django/courses-website/courses-website/wsgi.py
&lt;VirtualHost *:80&gt;
ServerName courses.nickmccullum.com
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
