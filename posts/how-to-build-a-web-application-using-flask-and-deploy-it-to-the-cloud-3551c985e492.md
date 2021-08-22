---
card: "https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png"
tags: [Python]
description: "by Salvador Villalon"
author: "Milad E. Fahmy"
title: "How to build a web application using Flask and deploy it to the cloud"
created: "2021-08-16T15:40:37+02:00"
modified: "2021-08-16T15:40:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tech tag-technology tag-startup tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a web application using Flask and deploy it to the cloud</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OrCZB4PxwGqppjkoIMzCaA.png" alt="How to build a web application using Flask and deploy it to the cloud">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
app = Flask(__name__)
@app.route("/")
def home():
return "Hello, World!"
if __name__ == "__main__":
app = Flask(__name__)
@app.route("/")
def home():
return "Hello, World!"
@app.route("/salvador")
def salvador():
return "Hello, Salvador"
if __name__ == "__main__":
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Flask Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt; My First Try Using Flask &lt;/h1&gt;
&lt;p&gt; Flask is Fun &lt;/p&gt;
&lt;/body&gt;
app = Flask(__name__)
@app.route("/")
def home():
return render_template("home.html")
@app.route("/salvador")
def salvador():
return "Hello, Salvador"
if __name__ == "__main__":
app.run(debug=True)
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;About Flask&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt; About Flask &lt;/h1&gt;
&lt;p&gt; Flask is a micro web framework written in Python.&lt;/p&gt;
&lt;p&gt; Applications that use the Flask framework include Pinterest,
LinkedIn, and the community web page for Flask itself.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Let’s make a change similar to what we did before to our main.py.</p><pre><code class="language-py">from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def home():
return render_template("home.html")
@app.route("/about)
def about():
return render_template("about.html")
if __name__ == "__main__":
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Flask Parent Template&lt;/title&gt;
&lt;link rel="stylesheet" href="{{ url_for('static',     filename='css/template.css') }}"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;div class="container"&gt;
&lt;h1 class="logo"&gt;First Web App&lt;/h1&gt;
&lt;strong&gt;&lt;nav&gt;
&lt;ul class="menu"&gt;
&lt;li&gt;&lt;a href="{{ url_for('home') }}"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="{{ url_for('about') }}"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;&lt;/strong&gt;
&lt;/div&gt;
&lt;/header&gt;
{% block content %}
{% endblock %}
&lt;/body&gt;
&lt;/html&gt;</code></pre><p><strong>Line 13–14: </strong>We use the function called<strong> </strong><code>url_for()</code><strong>. </strong>It accepts the name of the function as an argument. Right now we gave it the name of the function. More information on <a href="http://flask.pocoo.org/docs/0.12/quickstart/#url-building" rel="noopener"><strong>url_for() function</strong></a><strong>.</strong></p><p>The two lines with the curly brackets will be <strong>replaced by the content of home.html and about.html. </strong>This will<strong> </strong>depend on the URL in which the user is browsing.</p><p>These changes allow the child pages (home.html and about.html) to connect to the parent (template.html). This allows us to not have to <strong>copy the code for the navigation menu in the about.html and home.html.</strong></p><p>Content of about.html:</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;About Flask&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
{% extends "template.html" %}
{% block content %}
&lt;h1&gt; About Flask &lt;/h1&gt;
&lt;p&gt; Flask is a micro web framework written in Python.&lt;/p&gt;
&lt;p&gt; Applications that use the Flask framework include Pinterest,
LinkedIn, and the community web page for Flask itself.&lt;/p&gt;
{% endblock %}
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Content of home.html:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Flask Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
{% extends "template.html" %}
{% block content %}
&lt;h1&gt; My First Try Using Flask &lt;/h1&gt;
&lt;p&gt; Flask is Fun &lt;/p&gt;
{% endblock %}
&lt;/body&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Flask Parent Template&lt;/title&gt;
&lt;link rel="stylesheet" href="{{ url_for('static',    filename='css/template.css') }}"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;div class="container"&gt;
&lt;h1 class="logo"&gt;First Web App&lt;/h1&gt;
&lt;strong&gt;&lt;nav&gt;
&lt;ul class="menu"&gt;
&lt;li&gt;&lt;a href="{{ url_for('home') }}"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="{{ url_for('about') }}"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;&lt;/strong&gt;
&lt;/div&gt;
&lt;/header&gt;
{% block content %}
{% endblock %}
&lt;/body&gt;
api_version: 1
threadsafe: true
handlers:
- url: /static
static_dir: static
- url: /.*
script: main.app
libraries:
- name: ssl
version: latest</code></pre><p>If you were to check <a href="https://cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env" rel="noopener">Google’s Tutorial</a> in the part where they <strong>talk about content of the app.yaml</strong>, it does not include the section where I wrote about libraries.</p><p>When I first attempted to deploy my simple web app, my deployment never worked. After many attempts, I learned that we needed to include the SSL library.</p><p>The SSL Library allows us to <a href="https://wiki.python.org/moin/SSL" rel="noopener">create secure connections between the client and server</a>. Every time the user goes to our website they will need to connect to a server run by Google App Engine. We need to create a secure connection for this. (I recently learned this, so if you have a suggestions for this let me know!)</p><p>Content of appengine_config.py:</p><pre><code class="language-py">from google.appengine.ext import vendor
# Add any libraries installed in the "lib" folder.
vendor.add('lib')</code></pre><p>Content of requirements.txt:</p><pre><code>Flask
Werkzeug</code></pre><p>Now inside our virtual environment <strong>(make sure your virtualenv is activated)</strong>,<strong> </strong>we are going to install the new dependencies we have in requirements.txt. Run this command:</p><pre><code class="language-bash">pip install -t lib -r requirements.txt</code></pre><p><strong>-t lib: </strong>This flag copies the libraries into a lib folder, which uploads to App Engine during deployment.</p><p><strong>-r requirements.txt: </strong>Tells pip to install everything from requirements.txt.</p><h3 id="deploying-the-application">Deploying the Application</h3><p>To deploy the application to Google App Engine, use this command.</p><pre><code class="language-bash">gcloud app deploy</code></pre><p>I usually include — <strong>project [ID of Project]</strong></p><p>This specifies what project you are deploying. The command will look like this:</p><pre><code class="language-bash">gcloud app deploy --project [ID of Project]</code></pre><h3 id="the-application">The Application</h3><p>Now check the URL of your application. The application will be store in the following way:</p><pre><code class="language-bash">"your project id".appspot.com</code></pre><p>My application is here: <a href="http://sal-flask-tutorial.appspot.com" rel="noopener">http://sal-flask-tutorial.appspot.com</a></p><h2 id="conclusion">Conclusion</h2><p>From this tutorial, you all learned how to:</p><ul><li>Use the framework called Flask to use Python as a Server Side Language.</li><li>Learned how to use HTML, CSS, and Flask to make a website.</li><li>Learned how to create Virtual Environments using virtualenv.</li><li>Use Google App Engine Standard Environment to deploy an application to the cloud.</li></ul><h4 id="what-i-learned"><strong>What I learned</strong></h4><p>I learned three important things from this small project.</p><p><strong>First, I learned about the difference between a static website and a web application</strong></p><p><strong>Static Websites:</strong></p><ul><li>Means that the server is serving HTML, CSS, and JavaScript files to the client. The content of the site does not change when the user interacts with it.</li></ul><p><strong>Web Applications:</strong></p><ul><li>A web application or dynamic website generates content based on retrieved data (most of the time is a database) that changes based on a user’s interaction with the site. In a web application, the server is responsible for querying, retrieving, and updating data. This causes web applications to be slower and more difficult to deploy than static websites for simple applications (<a href="https://www.reddit.com/r/Python/comments/1iewqt/deploying_static_flask_sites_for_free_on_github/" rel="noopener">Reddit</a>).</li></ul><p><strong>Server Side and Client Side:</strong></p><ul><li>I learned that a web application has two sides. The client side and the server side. The client side is what the user interacts with and the server side is where the all the information that the user inputted is processed.</li></ul><p><strong>Second, I learned about Cloud Services</strong></p><p>Most of my previous projects were static websites, and to deploy them I used <a href="https://pages.github.com/" rel="noopener">GitHub Pages</a>. GitHub Pages is a free static site hosting service designed to host projects from a GitHub Repository.</p><p>When working with web applications, I could not use GitHub Pages to host them. GitHub Pages is only meant for static websites not for something dynamic like a web application that requires a server and a database. I had to use Cloud Services such as <a href="https://aws.amazon.com/" rel="noopener">Amazon Web Services</a> or <a href="https://www.heroku.com/" rel="noopener">Heroku</a></p><p><strong>Third, I learned how to use Python as a Server Side Language</strong></p><p>To create the server side of the web application we had to use a server side language. I learned that I could use the framework called Flask to use Python as the Server Side Language.</p><h4 id="next-steps-"><strong>Next Steps:</strong></h4><p>You can build all sorts of things with Flask. I realized that Flask helps make the code behind the website easier to read. I have made the following applications during this summer of 2018 and I hope to make more.</p><p>Personal Projects</p><ul><li><a href="http://twilio-pokedex.appspot.com/" rel="noopener">A Twilio SMS App</a></li><li><a href="http://salvador-villalon.appspot.com/" rel="noopener">My Personal Website</a></li></ul><p>During my internship</p><ul><li><a href="http://spgi2018-container-project.appspot.com/" rel="noopener">Part of a project where I learned about Docker and Containers</a></li></ul><p>Here is the list of resources that helped me create this tutorial:</p><ul><li>“App Engine — Build Scalable Web &amp; Mobile Backends in Any Language | App Engine | Google Cloud.” <em>Google</em>, Google, <a href="https://cloud.google.com/appengine/" rel="noopener">cloud.google.com/appengine/</a>.</li><li>“Building a Website with Python Flask.” <em>PythonHow</em>, <a href="https://pythonhow.com/building-a-website-with-python-flask/" rel="noopener">pythonhow.com/building-a-website-with-python-flask/</a>.</li><li>“Flask — Lecture 2 — CS50’s Web Programming with Python and JavaScript.” <em>YouTube</em>, 6 Feb. 2018, <a href="https://youtu.be/j5wysXqaIV8" rel="noopener">youtu.be/j5wysXqaIV8</a>.</li><li>“Getting Started with Flask on App Engine Standard Environment | App Engine Standard Environment for Python | Google Cloud.” <em>Google</em>, Google, <a href="https://cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env" rel="noopener">cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env</a>.</li><li>“Installation.” <em>Welcome | Flask (A Python Microframework)</em>, <a href="http://flask.pocoo.org/docs/0.12/installation/" rel="noopener">flask.pocoo.org/docs/0.12/installation/</a>.</li><li>“Python — Deploying Static Flask Sites for Free on Github Pages.” <em>Reddit</em>, <a href="http://www.reddit.com/r/Python/comments/1iewqt/deploying_static_flask_sites_for_free_on_github/." rel="noopener">www.reddit.com/r/Python/comments/1iewqt/deploying_static_flask_sites_for_free_on_github/.</a></li><li>Real Python. “Python Virtual Environments: A Primer — Real Python.” <em>Real Python</em>, Real Python, 7 Aug. 2018, <a href="https://realpython.com/python-virtual-environments-a-primer/" rel="noopener">realpython.com/python-virtual-environments-a-primer/</a>.</li><li>“What Is Cloud Services? — Definition from WhatIs.com.” <em>SearchITChannel</em>, <a href="https://searchitchannel.techtarget.com/definition/cloud-services" rel="noopener">searchitchannel.techtarget.com/definition/cloud-services</a>.</li><li>“What Is Google App Engine (GAE)? — Definition from Techopedia.” <em>Techopedia.com</em>, <a href="http://www.techopedia.com/definition/31267/google-app-engine-gae." rel="noopener">www.techopedia.com/definition/31267/google-app-engine-gae.</a></li></ul><p>If you have any suggestions or questions, feel free to leave a comment.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
