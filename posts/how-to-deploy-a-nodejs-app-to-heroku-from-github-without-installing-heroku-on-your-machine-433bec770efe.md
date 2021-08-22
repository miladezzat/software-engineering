---
card: "https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9"
tags: [Git]
description: "by Rohit Ramname"
author: "Milad E. Fahmy"
title: "How to deploy a NodeJS app to Heroku from Github (without installing Heroku on your machine)"
created: "2021-08-16T11:37:57+02:00"
modified: "2021-08-16T11:37:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-nodejs tag-programming tag-github tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a NodeJS app to Heroku from Github (without installing Heroku on your machine)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9 300w,
https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9 600w,
https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9 1000w,
https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*6YaRlBgzJa17RRM9" alt="How to deploy a NodeJS app to Heroku from Github (without installing Heroku on your machine)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"name": "coolnodeapp",
"version": "1.0.0",
"description": "node app ",
"main": "app.js",
"scripts": {
"start": "node app.js"
},
"repository": {
"type": "git",
"url": ""
},
"author": "",
"license": "ISC",
"bugs": {
"url": ""
},
"homepage": ""
const port = process.env.PORT || 3000
const server = http.createServer((req, res) =&gt; {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});
server.listen(port,() =&gt; {
console.log(`Server running at port `+port);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
