---
card: "https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png"
tags: [Web Development]
description: "by Petr Gazarov"
author: "Milad E. Fahmy"
title: "What is an API? In English, please."
created: "2021-08-16T11:28:06+02:00"
modified: "2021-08-16T11:28:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-javascript tag-tech tag-life-lessons tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">What is an API? In English, please.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png" alt="What is an API? In English, please.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Petr Gazarov</p><p>Before I learned software development, API sounded like a kind of beer.</p><p>Today I use the term so often that I have in fact recently tried to order an API at a bar.</p><p>The bartender’s response was to throw a 404: resource not found.</p><p>I meet lots of people, both working in tech and elsewhere, who have a rather vague or incorrect idea about what this fairly common term means.</p><p>Technically, API stands for <strong>Application Programming Interface</strong>. At some point or another, most large companies have built APIs for their customers, or for internal use.</p><p>But how do you explain API in plain English? And is there a broader meaning than the one used in development and business? First, let’s pull back and look at how the web itself works.</p><h2 id="www-and-remote-servers">WWW and remote servers</h2><p>When I think about the Web, I imagine a large network of connected <em>servers.</em></p><p>Every page on the internet is stored somewhere on a remote server. A remote server is not so mystical after all — it’s just a part of a remotely located computer that is optimized to process requests.</p><p>To put things in perspective, you can spin up a server on your laptop capable of serving an entire website to the Web (in fact, a <em>local</em> server is what engineers use to develop websites before releasing them to the public).</p><p>When you type <a href="https://www.facebook.com/" rel="noopener">www.facebook.com</a> into your browser, a request goes out to Facebook’s remote server. Once your browser receives the response, it interprets the code and displays the page.</p><p>To the browser, also known as the <em>client</em>, Facebook’s server is an API. This means that every time you visit a page on the Web, you interact with some remote server’s API.</p><p>An API isn’t the same as the remote server — rather <strong>it is the part of the server that receives requests and sends responses</strong>.</p><h2 id="apis-as-a-way-to-serve-your-customers">APIs as a way to serve your customers</h2><p>You’ve probably heard of companies packaging APIs as products. For example, Weather Underground sells access to its <a href="https://www.wunderground.com/weather/api" rel="noopener">weather data API</a>.</p><p><strong>Example scenario:</strong> Your small business’s website has a form used to sign clients up for appointments. You want to give your clients the ability to automatically create a Google calendar event with the details for that appointment.</p><p><strong>API use:</strong> The idea is to have your website’s server talk directly to Google’s server with a request to create an event with the given details. Your server would then receive Google’s response, process it, and send back relevant information to the browser, such as a confirmation message to the user.</p><p>Alternatively, your browser can often send an API request directly to Google’s server bypassing your server.</p><p><strong>How is this Google Calendar’s API different from the API of any other remote server out there?</strong></p><p><strong>In technical terms</strong>, the difference is the format of the request and the response.</p><p>To render the whole web page, your browser expects a response in <em>HTML, </em>which contains presentational code, while Google Calendar’s API call would just return the data — likely in a format like <em>JSON</em>.</p><p>If your website’s server is making the API request, then your website’s server is the client (similar to your browser being the client when you use it to navigate to a website).</p><p><strong>From your users perspective,</strong> APIs allow them to complete the action without leaving your website.</p><p>Most modern websites consume at least some third-party APIs.</p><p>Many problems already have a third-party solution, be it in the form of a library or service. It’s often just easier and more reliable to use an existing solution.</p><p>It’s not uncommon for development teams to break up their application into multiple servers that talk to each other via APIs. The servers that perform helper functions for the main application server are commonly referred to as <a href="http://microservices.io/patterns/microservices.html" rel="noopener"><em>microservices</em></a><em>.</em></p><p>To summarize, when a company offers an API to their customers, it just means that they’ve built a set of dedicated URLs that return pure data responses — meaning <strong>the responses won’t contain the kind of presentational overhead that you would expect in a graphical user interface like a website</strong>.</p><p>Can you make these requests with your browser? Often, yes. Since the actual HTTP transmission happens in text, your browser will always do the best it can to display the response.</p><p>For example, you can access GitHub’s API directly with your browser without even needing an access token. Here’s the JSON response you get when you visit a GitHub user’s API route in your browser (<a href="https://api.github.com/users/petrgazarov" rel="noopener">https://api.github.com/users/petrgazarov</a>):</p><pre><code>{  "login": "petrgazarov",  "id": 5581195,  "avatar_url": "https://avatars.githubusercontent.com/u/5581195?v=3",  "gravatar_id": "",  "url": "https://api.github.com/users/petrgazarov",  "html_url": "https://github.com/petrgazarov",  "followers_url": "https://api.github.com/users/petrgazarov/followers",  "following_url": "https://api.github.com/users/petrgazarov/following{/other_user}",  "gists_url": "https://api.github.com/users/petrgazarov/gists{/gist_id}",  "starred_url": "https://api.github.com/users/petrgazarov/starred{/owner}{/repo}",  "subscriptions_url": "https://api.github.com/users/petrgazarov/subscriptions",  "organizations_url": "https://api.github.com/users/petrgazarov/orgs",  "repos_url": "https://api.github.com/users/petrgazarov/repos",  "events_url": "https://api.github.com/users/petrgazarov/events{/privacy}",  "received_events_url": "https://api.github.com/users/petrgazarov/received_events",  "type": "User",  "site_admin": false,  "name": "Petr Gazarov",  "company": "PolicyGenius",  "blog": "http://petrgazarov.com/",  "location": "NYC",  "email": "petrgazarov@gmail.com",  "hireable": null,  "bio": null,  "public_repos": 23,  "public_gists": 0,  "followers": 7,  "following": 14,  "created_at": "2013-10-01T00:33:23Z",  "updated_at": "2016-08-02T05:44:01Z"}</code></pre><p>The browser seems to have done just fine displaying a JSON response. A JSON response like this is ready for use in your code. It‘s easy to extract data from this text. Then you can do whatever you want with the data.</p><h2 id="a-is-for-application-">A is for “Application”</h2><p>To close off, let’s throw in a couple more examples of APIs.</p><p>“Application” can refer to many things. Here are some of them in the context of API:</p><ol><li>A piece of software with a distinct function.</li><li>The whole server, the whole app, or just a small part of an app.</li></ol><p>Basically any piece of software that can be distinctively separated from its environment, can be an “A” in API, and will probably also have some sort of API.</p><p>Let’s say you’re using a third-party library in your code. Once incorporated into your code, a library becomes part of your overall app. Being a distinct piece of software, the library would likely have an API which allows it to interact with the rest of your code.</p><p>Here’s another example: In <strong>Object Oriented Design</strong>, code is organized into objects. Your application may have hundreds of objects defined that can interact with one another.</p><p>Each object has an API — a set of <em>public</em> methods and properties that it uses to interact with other objects in your application.</p><p>An object may also have inner logic that is <em>private, </em>meaning that it’s<em> </em>hidden<em> </em>from the outside scope (and not an API).</p><p>From what we have covered, I hope you take away the broader meaning of API as well as the more common uses of the term today.</p><h3 id="interesting-resources-stuff-that-i-left-out-but-is-still-very-cool-">Interesting Resources (stuff that I left out but is still very cool):</h3><p><a href="https://www.youtube.com/watch?v=72snZctFFtA&amp;feature=youtu.be" rel="noopener">A great youtube video on DNS (Domain Name System)</a></p><p><a href="https://simple.wikipedia.org/wiki/Hypertext_Transfer_Protocol" rel="noopener">HTTP protocol basics</a></p><p><a href="https://www.khanacademy.org/computing/computer-programming/programming/object-oriented/p/object-types#" rel="noopener">An Awesome Khan Academy video on Object Oriented Design Principles</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->