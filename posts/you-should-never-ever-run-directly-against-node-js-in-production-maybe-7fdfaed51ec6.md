---
card: "https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png"
tags: [Nodejs]
description: "Sometimes I wonder if I know much of anything at all."
author: "Milad E. Fahmy"
title: "You should never ever run directly against Node.js in production. Maybe."
created: "2021-08-16T11:29:48+02:00"
modified: "2021-08-16T11:29:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-programming tag-javascript tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">You should never ever run directly against Node.js in production. Maybe.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png" alt="You should never ever run directly against Node.js in production. Maybe.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const app = express();
const port = process.env.PORT || 3000;
// viewed at http://localhost:3000
app.get("/", function(req, res) {
res.send("Again I Go Unnoticed");
});
app.listen(port, () =&gt; console.log(`Example app listening on port ${port}!`));</code></pre><p>We would run this with a start script in the <code>package.json</code> file.</p><pre><code>"scripts": {
"dev": "npx supervisor index.js",
"start": "node index.js"
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
// viewed at http://localhost:3000
app.get("/", function(req, res) {
res.send("Again I Go Unnoticed");
});
app.get("/read", function(req, res) {
// this does not exist
fs.createReadStream("my-self-esteem.txt");
});
"start": "pm2 start index.js",
"dev": "npx supervisor index.js"
"start": "pm2 start index.js --watch",
"dev": "npx supervisor index.js"
apps: [
{
name: "Express App",
script: "index.js",
instances: 4,
autorestart: true,
watch: true,
max_memory_restart: "1G",
env: {
NODE_ENV: "development"
},
env_production: {
NODE_ENV: "production"
}
}
]
};</code></pre><p>I’m going to ignore the “deploy” section in this article because I have no idea what it does.</p><p>The “apps” section is where you define the apps you want pm2 to run and monitor. You can run more than one. A lot of these configuration settings are probably self-explanatory. The one that I want to focus on here is the <strong>instances</strong> setting.</p><p>pm2 can run multiple instances of your application. You can pass in a number of instances that you want to run and pm2 will spin up that many. So if we wanted to run 4 instances, we could have the following configuration file.</p><pre><code class="language-js">module.exports = {
apps: [
{
name: "Express App",
script: "index.js",
instances: 4,
autorestart: true,
watch: true,
max_memory_restart: "1G",
env: {
NODE_ENV: "development"
},
env_production: {
NODE_ENV: "production"
}
}
]
...
instances: "max",
...
"start": "node index.js"
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
