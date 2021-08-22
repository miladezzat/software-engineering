---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg"
tags: [Rest Api]
description: "RESTful APIs are a major component of any well-architected st"
author: "Milad E. Fahmy"
title: "How to Build RESTful APIs with Falcon"
created: "2021-08-16T15:37:51+02:00"
modified: "2021-08-16T15:37:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rest-api tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build RESTful APIs with Falcon</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e23740569d1a4ca3b8d.jpg" alt="How to Build RESTful APIs with Falcon">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="introduction"><strong>Introduction</strong></h2><p>RESTful APIs are a major component of any well-architected stack, and Python happens to have some brilliant frameworks for quickly composing APIs. </p><p>One of these frameworks is called <a href="https://falconframework.org/">Falcon</a> - and it’s great! Essentially a microframework, it ships with a sizable number of advantages:</p><ol><li>It’s fast. Really fast. Check out the benchmarks <a href="https://falconframework.org/#sectionBenchmarks">here</a>.</li><li>HTTP Resources are defined as classes, with class methods being used for different REST operations on these resources. This helps maintaining a clean codebase.</li><li>It’s quite extensible - check out <a href="https://github.com/falconry/falcon/wiki/Complementary-Packages">this section</a> on their wiki, to get a feel for it.</li><li>It’s based on WSGI - the Pythonic standard for web apps - so it works with Python 2.6, 2.7, and 3.3+. And if you need more performance, run it using PyPy!</li></ol><h2 id="getting-started"><strong>Getting started</strong></h2><p>First, let’s prepare our environment. Personally, it’s always great to work in virtual environments - you can use <code>virtualenv</code>, <code>virtualenvwrapper</code> or <code>venv</code>. Next, install Falcon using <code>pip</code>: <code>pip install falcon</code>.</p><p>We’re going to develop a small sample API that does very basic time-zone manipulations for us. It will display the current time in UTC, as well as the corresponding epoch time. To that end, we’ll grab a nifty library called <code>arrow</code>: <code>pip install arrow</code>.</p><p>You can find the finished sample at <a href="https://github.com/rudimk/freecodecamp-guides-rest-api-falcon">https://github.com/rudimk/freecodecamp-guides-rest-api-falcon</a>.</p><h2 id="resources"><strong>Resources</strong></h2><p>Think of a resource as an entity that your API needs to manipulate. In our case, the best resource would be a <code>Timestamp</code>. Our routing would typically be something like this:</p><pre><code class="language-text">GET /timestamp</code></pre><p>Here, <code>GET</code> is the HTTP verb used to call this endpoint, and <code>/timestamp</code> is the URL itself. Now that we’ve gotten this bit out of the way, let’s create a module!</p><p><code>$ touch timestamp.py</code></p><p>Time to import the Falcon library:</p><pre><code class="language-python">import json
import falcon
import arrow</code></pre><p>Note we’ve also import the <code>json</code> package and the <code>arrow</code> library. Now, let’s define a class for our resource:</p><pre><code class="language-python">class Timestamp(object):
def on_get(self, req, resp):
payload = {}
payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS')
payload['unix'] = arrow.utcnow().timestamp
resp.body = json.dumps(payload)
resp.status = falcon.HTTP_200</code></pre><p>Let’s go through this snippet. We’ve defined a <code>Timestamp</code> class, and defined a class method called <code>on_get</code> - this function tells Falcon that when a <code>GET</code> request is issued to an endpoint for this resource, run the <code>on_get</code> function and provide the request and response objects as parameters. </p><p>After that, it’s smooth sailing - we create an empty dictionary, fill it up with the current UTC and UNIX timestamps, convert it to JSON and attach it to the response object.</p><p>Pretty simple, right? But sadly, that’s not all. We now need to create a Falcon server and hook up the resource class we’ve just defined to an actual endpoint.</p><p><code>$ touch app.py</code></p><p>Now, add the code below:</p><pre><code class="language-python">import falcon
from timestamp import Timestamp
api = application = falcon.API()
timestamp = Timestamp()
api.add_route('/timestamp', timestamp)</code></pre><p>Here, we’ve defined a Falcon API, and initialized an instance of the resource class we created earlier. Then, we’ve hooked up the <code>/timestamp</code> endpoint with the class instance - and now we’re good to go! To test this API install <code>gunicorn</code>(<code>pip install gunicorn</code>), and run <code>gunicorn app</code>. Use Postman or simple <code>cURL</code> to test this:</p><pre><code class="language-text">$ curl http://localhost:8000/timestamp
{"utc": "2017-10-20 06:03:14", "unix": 1508479437}</code></pre><p>And that does it!</p><h2 id="moving-on"><strong>Moving on</strong></h2><p>Once you’ve got the hang of Falcon, composing powerful RESTful APIs that interact with databases or messaging queues is very easy. Do check out the <a href="https://falcon.readthedocs.io/en/stable/index.html">Falcon docs</a>, as well as PyPI for interesting Falcon modules that keep popping up.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
