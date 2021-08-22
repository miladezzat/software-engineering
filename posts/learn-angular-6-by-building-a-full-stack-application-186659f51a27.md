---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg"
tags: [Angular]
description: "Angular 6 is out! The new features include better performance"
author: "Milad E. Fahmy"
title: "Learn Angular 6 by building a full-stack application"
created: "2021-08-15T23:46:50+02:00"
modified: "2021-08-15T23:46:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-tech tag-programming tag-coding tag-apps-tag ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Angular 6 by building a full-stack application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca8b7740569d1a4ca7fcc.jpg" alt="Learn Angular 6 by building a full-stack application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Angular 6 is out! The new features include better performance, new powerful CLI additions and a new way to inject services.</p><p>This tutorial is for beginners. You’ll learn Angular by example by building a full-stack CRUD — Create, Read, Update and Delete — web application. We will use the latest version of the most popular framework and platform for building mobile and desktop client-side applications. The name for these applications is SPAs or Single Page Applications.</p><p>In the back-end, we’ll use Python with Django. Django is the most popular pythonic web framework designed for perfectionists with deadlines.</p><p>In nutshell, you’ll learn to generate Angular 6 apps, generate components and services, and add routing. You’ll also learn to use various features such as <strong>HttpClient</strong> for sending AJAX requests and HTTP calls and subscribing to RxJS 6 observables and so on.</p><p>By the end of this Angular <em>6</em> tutorial, you’ll learn by building a real-world example application:</p><ul><li>how to install the latest version of Angular CLI,</li><li>how to use the Angular 6 CLI to generate a new Angular <em>6</em> project,</li><li>how to use Angular 6 to build a simple CRM application,</li><li>what’s a component and component-based architecture</li><li>how to use RxJS 6 Observables and operators (<code>map()</code> and <code>filter()</code> etc.)</li><li>how to create Angular 6 components,</li><li>how to add component routing and navigation,</li><li>how to use <strong>HttpClient</strong> to consume a REST API etc.</li></ul><h3 id="the-django-example-crud-back-end">The Django Example CRUD Back-End</h3><p>We’ll make use of a simple CRUD API built with Django and Django REST framework. Since this is an Angular tutorial we’ll not focus on building the API. That will be the subject of a separate tutorial. You can grab the source code of the back-end API from this <a href="https://github.com/techiediaries/django-crm" rel="noopener">repository</a>.</p><p>You can use the following commands to start the development server:</p><pre><code class="language-bash"># Clone the project and navigate into it
$ git clone https://github.com/techiediaries/django-crm
$ cd django-crm
# Create a virtual environment and install packages
$ pipenv install
# Activate the virtual environment
$ pipenv shell
# Create and migrate the database then run the local development server
$ python manage.py migrate
$ cd crmapp
# Serve your application
ng generate component AccountCreate
ng generate component ContactList
ng generate component ContactCreate
ng generate component LeadList
ng generate component LeadCreate
ng generate component OpportunityList
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
