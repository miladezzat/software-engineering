---
card: "/images/default.jpg"
tags: [Job Interview]
description: As many of you know, I landed my first developer job at the e
author: "Milad E. Fahmy"
title: "How to conquer job interview code challenges v2.0: creating a front-end web app"
created: "2021-08-15T19:32:59+02:00"
modified: "2021-08-15T19:32:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-job-interview tag-job-hunting tag-learning-to-code tag-learn-to-code tag-javascript tag-challenge tag-code-challenge tag-coding-interview tag-interview tag-coding-challenge ">
<header class="post-full-header">
<h1 class="post-full-title">How to conquer job interview code challenges v2.0: creating a front-end web app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/lou-levit-B4op5oZ4x5Q-unsplash.jpg 300w,
/news/content/images/size/w600/2019/08/lou-levit-B4op5oZ4x5Q-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/08/lou-levit-B4op5oZ4x5Q-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/08/lou-levit-B4op5oZ4x5Q-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/lou-levit-B4op5oZ4x5Q-unsplash.jpg" alt="How to conquer job interview code challenges v2.0: creating a front-end web app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As many of you know, I <a href="https://jonathansexton.me/blog/landing-my-first-development-job-what-a-crazy-journey/">landed my first developer job</a> at the end of June and I thought it would be great to use the challenge I was given as the subject of today's article.</p>
<p>It is important to note that I used React to build my project, but this could have been completed with any front end framework or 'vanilla JavaScript'.</p>
<p>Below is a list of topics we'll go over:</p>
<ul>
<li>Accessing the <a href="https://quip.com/dev/automation/documentation#token-endpoint">Quip Automation API</a></li>
<li>Creating spreadsheets/documents with the Quip API</li>
<li>Installing and using the <a href="https://github.com/axios/axios">Axios</a> library (this is optional and you can make API requests without it but I like the syntax)</li>
<li>Using <a href="https://www.npmjs.com/package/qs">qs package</a> to stringify requests (this is not a requirement but I wanted to try something new and if it didn't work I always had the fallback of knowing Axios will stringify my requests by default)</li>
<li>Making <a href="https://en.wikipedia.org/wiki/POST_(HTTP)">POST</a> and <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods">GET</a> requests</li>
</ul>
<p>For context, here is a snippet of the requirements as I received them:</p>
<p>"<em>Create a front-end web app that interacts with the Quip API in the following ways:</em></p>
<ul>
<li><em>Create a spreadsheet (bonus points to import data into the newly created spreadsheet).</em></li>
<li><em>By import data, I mean upload an Excel spreadsheet, or copy and paste data into Quip spreadsheet.</em></li>
<li><em>Export a Quip spreadsheet to .xlsx</em></li>
<li><em>Download (backup) a folder/multiple documents.</em></li>
</ul>
<p><em>Create the UI for the page in whatever way you see fit (buttons, dialog boxes, etc).</em>"</p>
<p>I was a little worried when I read the requirements as I wasn't exactly sure where to begin. So, I dug into the API docs and started soaking up information. Thankfully, no time limit was given to me but I wanted to be done with this as soon as possible to see where I stood in the interview process.</p>
<p>To start, I designed a prototype of the finished product in Figma so I'd have a road map to go off of. This is not a required step, but it does make your project building experience run much smoother.</p>
<p>Alright, let's dig in!</p>
<h2 id="getting-started">Getting Started</h2>
<p>I built my Nav, Footer, and Content components so I'd have a solid foundation for my app.</p>
<p>Each of these components return some basic JSX and there isn't much to them (If you'd like to see the code for each you can check out the project's <a href="https://github.com/JS-goose/gibson-code-challenge">GitHub repo</a>).</p>
<p>I decided the majority of the requests would be split between the <em><code>App.js</code></em> and <em><code>CenterContent.js</code></em> files.</p>
<p>For reference, here is my project structure:</p>
<figcaption>My project structure</figcaption>
</figure>
<p>You'll see me reference POST and GET requests throughout this post. &nbsp;If you aren't familiar with those now is a good time to do some research on those. &nbsp;I'll be honest in that I wasn't 100% on them when starting this project and had to go through some resources myself.</p>
<p>In a nutshell, a POST request is when we ask the server to <strong><em>accept</em></strong> some incoming data (that we are sending) - in our case that data comes in the form of creating a new spreadsheet file.</p>
<p>A GET request is when we ask the server to <strong><em>send</em></strong> us data from a specified resource on the server.</p>
<p>I used the <a href="https://insomnia.rest/">Insomnia REST Client</a> to help debug issues with my requests. I'm working on a beginner's guide for it so stay tuned for that!</p>
<h2 id="using-the-quip-api">Using the Quip API</h2>
<p>If you're like me, you've never heard of the Quip API and had no idea what it does. At its core, Quip is an automation tool that allows you to integrate with tools like <a href="https://www.salesforce.com/">SalesForce</a> to make your sales team more collaborative.</p>
<p>For our purposes, we will be using it to create Excel spreadsheets on my Quip account (if you want to replicate this project you'll need to create a Quip account - it is free to do so).</p>
<p>You'll also need to create a personal developer token in order to make requests. You can do that <a href="https://quip.com/dev/token">here</a> (requires an account). Once you have your token, keep it in a safe spot because we'll be making use of it soon.</p>
<p>To start, I installed Axios into my project by running <code>npm install axios</code> and then I import it into the files where I need to make my requests with <code>import axios from "axios";</code></p>
<figcaption>My import statements for required packages</figcaption>
</figure>
<h2 id="authentication">Authentication</h2>
<p>Before making any kind of requests to the server, I needed to authenticate with my credentials. I decided to put this in the <code>App.js</code> file inside a <code>componentDidMount</code> <a href="https://reactjs.org/docs/state-and-lifecycle.html">lifecycle method</a> so it would load every time the page loads:</p>
<figcaption>My authentication function</figcaption>
</figure>
<p>So I built my function, I called my function and for a moment thought all is well, until I ran into this dreaded error:</p><pre><code>"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $websiteName"</code></pre>
<p>Noooooooo!!! The dreaded <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors">CORS</a> monster rears it's mighty head! &nbsp;(CORS is actually a useful intermediary between me and the server but can be annoying to deal with if you've never seen this error before). &nbsp;</p>
<p><em>*Side note - if you've never seen this error before don't worry! &nbsp;I still don't fully understand it but I know enough to debug it. If you get stuck, check out the link above for some helpful info or look below for a quick work around.*</em></p>
<p>An easy way to get around this is to use a proxy like the <a href="https://cors-anywhere.herokuapp.com/">CORS Anywhere</a> free resource. Essentially, place this link <code>https://cors-anywhere.herokuapp.com/</code> in front of your end point URL and it'll resolve the problem, for now.</p>
<p>This handy tool will allow you to make your requests <strong><em>while developing on localhost</em></strong>. If I were you, I would do some research before using this approach in production. Full disclaimer, I don't know enough about this little trick to tell you if it's safe to use in production or not.</p>
<p>So, after some tweaking of the authentication function I got the desired result to log to the console. Time to move on to making requests!</p>
<h2 id="making-requests">Making Requests</h2>
<p>Now that my authentication is working, we're ready to make some requests. I knew I was going to make a POST request whenever I wanted to create a new document and that I also wanted to tie that action to the click of a button. So, below is my POST function:</p>
<figcaption>My POST function</figcaption>
</figure>
<p>You'll notice this is where our <code>qs</code> package I mentioned at the beginning of this article comes into play. I'm not an expert but from what I gleaned after reading the docs on it, this package turns my request into a string to be sent to the server. If you prefer not to use this package that's no problem as <code>Axios</code> will do this by default. I know that &nbsp;<code>qs</code> offers more than just stringifying data but I'm unfamiliar with the full range of its capabilities.</p>
<p>Now, I want this function to fire when clicking a button. Thus, a basic button came to life!</p>
<figcaption>A simple React button with an on click method</figcaption>
</figure>
<p>My POST function has been built, my button has been built, and the method tied to it. &nbsp;It's time to cross my fingers and see what my function spat out into the console:</p>
<figcaption>The result of my server request - it works!</figcaption>
</figure>
<p>At this point I'm over the moon! I'm beyond excited that I've gotten this API call to not only work but to return something as well. Now the real test...does this show up as a new spreadsheet on my Quip account?</p>
<p>I have the console statement and the confirmation from my Quip account showing that I have successfully created a new spreadsheet - this is awesome! &nbsp;I'm ecstatic and I literally jumped out of my chair and yelled "YEEEEEEESSSSSS!!!" once I got both of these.</p>
<p>That feeling of getting something to work after struggling with it is like nothing else I've experienced in my professional life. &nbsp;I tell myself that I have to keep riding this wave of enthusiasm and elation so I push on to the next item on the list.</p>
<h2 id="import-data-into-the-newly-created-spreadsheet">Import Data Into the Newly Created Spreadsheet</h2>
<p>I had some great ideas for this section of the "assignment" but at this point it has been almost two weeks since I started this project and I'm anxious that the interviewer will have forgotten about it (i.e. me) or is getting impatient with me.</p>
<p>So, I scrap those grand plans and opt for something of a more simple nature so I can get this project turned in ASAP.</p>
<p>I built a small function to at least attach to the upload button so that I would have some type of functionality for it. At it's core, this function waits until a file has been uploaded, sets the state to the first element in the event target array, then creates headers based off of that information, with the eventual goal being it posts to my Quip account with that information.</p>
<p>However, you can tell by the comment at the top of this function block that I was unable to get it to work properly. However, I did not have time (at least I thought I didn't) to dig deep into this problem and get it fixed.</p>
<figcaption>My import function that never quite worked properly :)</figcaption>
</figure>
<p>At this point, I've been working on this project after work and at night for over two weeks. I decide that it's time to turn it in without the other parts working (import, export, and downloading data).</p>
<h2 id="the-final-touches">The Final Touches</h2>
<p>I know my project is unfinished and I'm beating myself up pretty hard about it. But, as an added bonus I decide that I'm going to design something in <a href="https://www.figma.com/">Figma</a> as an added touch to help my chances of getting a call back.</p>
<p>Here is the finished product modeled off of their current colors/font/theme:</p>
<h2 id="and-that-s-a-wrap">And That's A Wrap</h2>
<p>With my project not finished but at a stopping point, I'm feeling not so good about my progress and my timing but I package everything up and throw it on GitHub. I throw in the above image and schedule an e-mail to go out the next morning at 9AM to the interviewer.<br><br>I waited nearly 2 days with bated breath hoping to get some type of call back - something. It finally came as I was driving into work. The interviewer had gotten my project and wanted me to come in for another meeting with his lead developer.</p>
<p>I was terrified and excited all at the same time because I was thinking they wanted to bring me in to make fun of my code or to ask me what the hell I was thinking when I built this monstrosity. But that wasn't the case at all. I ended up getting a job offer from this project!</p>
<p>If you'd like the whole story about that, it can be found in my previous blog <a href="https://jonathansexton.me/blog/landing-my-first-development-job-what-a-crazy-journey/">post about landing my first developer job.</a></p>
<p>I hope you've found some value out of this post. If you have let me know on <a href="https://twitter.com/jj_goose">Twitter</a> or any of the other platforms I post on :D</p>
<p>Also, I cross post most of my articles on great platforms like <a href="https://dev.to/jsgoose">Dev.to</a> and <a href="https://medium.com/@joncsexton">Medium</a> so you can find my work there as well!</p>
<p>While you’re here why not sign up for my <strong>Newsletter</strong> – &nbsp;you can do that at the top right of the page on my <a href="https://jonathansexton.me/blog">blog</a>. I promise I’ll never &nbsp;spam your inbox and your information will not be shared with &nbsp;anyone/site. I like to occasionally send out interesting resources I find, articles about web development, and a list of my newest posts.</p>
<p>Have an awesome day filled with love, joy, and coding!</p>
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
