---
card: "https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg"
tags: [JavaScript]
description: by Moshe Vilner
author: "Milad E. Fahmy"
title: "The best ways to connect to the server using Angular CLI"
created: "2021-08-15T19:47:06+02:00"
modified: "2021-08-15T19:47:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-front-end-development tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">The best ways to connect to the server using Angular CLI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s64f5zH_kuv8HAoSCLYYhA.jpeg" alt="The best ways to connect to the server using Angular CLI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Moshe Vilner</p>
<h1 id="the-best-ways-to-connect-to-the-server-using-angular-cli">The best ways to connect to the server using Angular CLI</h1>
<p>Everybody who has used <a href="https://cli.angular.io/" rel="noopener">Angular CLI</a> knows that it is a powerful tool which can take a front-end development job to a completely different level. It has all the common tasks like live reload, typescript transpiling, minification, and more. And it’s all preconfigured and ready to use with one simple command:</p><pre><code>ng build, ng serve, ng test.</code></pre>
<p>But there is one (and a very important one) task that needs to be configured once the application is ready to start showing some data from the server…</p>
<p>Yes, no matter how great the Angular framework is, and how quickly and performant its components — at the end the purpose of SPA (single page application) is to interact with the server through HTTP requests.</p>
<p>And here is the first obstacle that appears before every Angular CLI newbie: the Angular project runs on its own server (which runs by default at <a href="http://localhost:4200)" rel="noopener">http://localhost:4200</a>). Therefore, the requests to the API server are <strong>cross-domain</strong>, and, as you might know, the security of the web browser disallows the making of cross domain requests.</p>
<h3 id="approach-1-proxy">Approach #1: proxy</h3>
<p>Of course, the people at Angular CLI foresaw this issue and even built a special option for running an Angular project using a proxy configuration:</p><pre><code>ng serve  —-proxy-config proxy.conf.json</code></pre>
<p>What is a proxy, you might ask? Well, browsers don’t allow you to make cross domain requests, but servers do. Using the proxy option means that you’re telling Angular CLI’s server to handle the request sent from Angular and resend it from the development server. This way, the one who “talks” with the API’s server is Angular CLI’s server.</p>
<p>The proxy configuration requires the <strong><em>proxy.conf.json</em></strong><em> </em>file to be added to the project. This is a JSON file with some basic settings. Here is an example of the contents of <strong><em>proxy.conf</em></strong>:</p><pre><code>{  "/api/*": {    "target": "http://localhost:3000",    "secure": false,    "pathRewrite": {"^/api" : ""}  }}</code></pre>
<p>This code means that all requests that start with <strong>api/ </strong>will be resent to <a href="http://localhost:3000" rel="noopener"><strong>http://localhost:3000</strong></a><strong> </strong>(which is the API server’s address)</p>
<h3 id="approach-2-cors">Approach #2: CORS</h3>
<p>Browser security doesn’t allow you to make cross domain requests unless the <code>Control-Allow-Origin</code> header exists at the server’s response. Once you configured your API server to ‘‘answer’’ with this header, you can fetch and post data from a different domain.</p>
<p>This technique is called Cross Origin Resource Sharing, or CORS. Most of the common servers and server frameworks like Node.js’ <a href="https://expressjs.com/" rel="noopener">Express</a>, or <a href="https://projects.spring.io/spring-boot/" rel="noopener">Java Spring Boot</a> can be easily configured to make CORS available.</p>
<p>Here is some example code which sets the Node.js Express server to use CORS:</p><pre><code>const cors = require('cors'); //&lt;-- required installing 'cors' (npm i cors --save)const express = require('express');const app = express();app.use(cors()); //&lt;-- That`s it, no more code needed!</code></pre>
<p>Note that when using CORS, before each of the HTTP requests are sent, it will follow after the OPTIONS request (at the same URL) that checks to see if the <strong>CORS</strong> protocol is understood. This “double request” may affect your performance.</p>
<h3 id="production-approach">Production Approach</h3>
<p>Ok, your Angular project is “talking” smoothly with server, getting and sending data in the developer environment. But the time of deployment has finally come, and you need your beautiful and preformant Angular app to be hosted somewhere (far away from Papa Angular CLI). So again you face the same problem: how to make it to connect to server.</p>
<p>Only now there is a big difference: in the production environment (after running <code>ng build</code> command), the Angular app is no more than a bunch of HTML and JavaScript files.</p>
<p>Actually the decision on how to host the application on the production server is an architectural decision, and architecture is far beyond the scope of this article. But there is one option I recommend that you consider.</p>
<h3 id="serve-static-files-from-the-api-s-server">Serve Static Files From the API’s Server</h3>
<p>Yes, you can host your Angular project (once it has only HTML and JavaScript files) on the same server where data (APIs) is served from.</p>
<p>One of the advantages of this strategy is that now you do not face any “cross-domain” issues, since the client and API are actually on the same server!</p>
<p>Of course, this approach requires the API’s server to be configured properly.</p>
<p>Here is the code that exposes the “public” directory where Angular files can be hosted when using the Node Express server:</p><pre><code>app.use(express.static('public'));  //&lt;-- public directory that contains all angular files</code></pre>
<p>Note that in this case, the way your app accesses the API in the development environment will be different from the way the API accessed it at production. Thus you may need to use different HTTP URLs in different environments (Like <strong>api/users/1</strong> at dev and <strong>users/1</strong> at production). You can use Angular CLI’s environment option to achieve this:</p><pre><code>// users.service.ts</code></pre><pre><code>const URL = 'users';return this.http.get(`${environment.baseUrl}/${URL}`);...</code></pre><pre><code>// example of environment.ts file:export const environment = {  production: false,  baseUrl: 'api',//&lt;-- 'API/' prefix needed for proxy configuration };</code></pre><pre><code>// example of environment.prod.ts file:export const environment = {  production: true,  baseUrl: '', //&lt;-- no 'API/' prefix needed};</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>Angular CLI is without doubt a very powerful and robust tool . It makes our lives as front end developers easier in many ways. But it also requires you to make an architectural decision about the connection to the API’s server. Therefore, you need a clear understanding of the various ways client-server communication may be established.</p>
<p>This article lists two approaches of handling this issue in the developer environment and also one recommendation about production architecture.<br>Try to play with various compilations and see which one feels more convenient for you and your team.</p>
<p>Have fun and let me know how it goes!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
