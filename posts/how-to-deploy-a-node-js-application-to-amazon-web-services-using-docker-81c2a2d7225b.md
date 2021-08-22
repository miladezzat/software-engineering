---
card: "https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg"
tags: [Docker]
description: "by Emmanuel Yusufu"
author: "Milad E. Fahmy"
title: "How to deploy a Node.js application to Amazon Web Services using Docker"
created: "2021-08-16T11:43:21+02:00"
modified: "2021-08-16T11:43:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-aws tag-technology tag-programming tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a Node.js application to Amazon Web Services using Docker</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KqO5C0953HQzafpnBYaTSg.jpeg" alt="How to deploy a Node.js application to Amazon Web Services using Docker">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
mkdir sample-nodejs-app
// change to new directory
cd sample-nodejs-app
// Initialize npm
npm init -y
// install express
npm install express
// create an server.js file
touch server.js</code></pre><p>Open <code>server.js</code> and paste the code below into it:</p><pre><code class="language-js">// server.js
const express = require('express')
const app = express()
app.get('/', (req, res) =&gt; {
res.send('Hello world from a Node.js app!')
})
app.listen(3000, () =&gt; {
console.log('Server is up on 3000')
})</code></pre><p>Start the app with:</p><pre><code>node server.js</code></pre><p>Access it on <a href="http://localhost:3000" rel="noopener">http://localhost:3000</a>. You should get <code>Hello world from a Node.js app!</code> displayed in your browser. The complete code is available on GitHub.</p><p>Now let’s take our very important app to production ?.</p><h3 id="5-creating-a-dockerfile">5. Creating a Dockerfile</h3><p>We are going to start dockerizing the app by creating a single file called a <code>Dockerfile</code> in the base of our project directory.</p><p>The Dockerfile is the blueprint from which our images are built. And then images turn into containers, in which we run our apps.</p><p>Every Dockerfile starts with a base image as its foundation. There are two ways to approach creating your Dockerfile:</p><ol><li>Use a <strong>plain OS base image</strong> (For example, Ubuntu OS, Debian, CentOS etc.) and install an application environment in it such as Node.js OR</li><li>Use an <strong>environment-ready base image</strong> to get an OS image with an application environment already installed.</li></ol><p>We will proceed with the second approach. We can use the <a href="https://hub.docker.com/_/node/" rel="noopener">official Node.js image</a> hosted on Dockerhub which is based on Alpine Linux.</p><p>Write this in the Dockerfile:</p><pre><code>FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]</code></pre><p>Let’s walk through this line by line to see what is happening here, and why.</p><pre><code>FROM node:8-alpine</code></pre><p>Here, we are building our Docker image using the official Node.js image from <a href="https://hub.docker.com/_/node/" rel="noopener">Dockerhub</a> (a repository for base images).</p><ul><li>Start our Dockerfile with a <code><a href="https://docs.docker.com/reference/builder/#from" rel="noopener"><strong>FROM</strong></a></code> statement. This is where you specify your base image.</li><li>The <code><a href="https://docs.docker.com/reference/builder/#run" rel="noopener"><strong>RUN</strong></a></code> statement will allow us to execute a command for anything you want to do. We created a subdirectory <code>/usr/src/app</code> that will hold our application code within the docker image.</li><li><code><a href="https://docs.docker.com/engine/reference/builder/#workdir" rel="noopener"><strong>WORKDIR</strong></a></code> instruction establishes the subdirectory we created as the working directory for any <code>RUN</code>, <code>CMD</code>, <code>ENTRYPOINT</code>, <code>COPY</code> and <code>ADD</code> instructions that follow it in the <code>Dockerfile</code>. <code>/usr/src/app</code> is our working directory.</li><li><code><a href="https://docs.docker.com/engine/reference/builder/#copy" rel="noopener"><strong>COPY</strong></a></code> lets us copy files from a source to a destination. We copied the contents of our node application code ( <code>server.js</code> and <code>package.json</code>) from our current directory to the working directory in our docker image.</li><li>The <code><a href="https://docs.docker.com/engine/reference/builder/#expose" rel="noopener"><strong>EXPOSE</strong></a></code> instruction informs Docker that the container listens on the specified network ports at runtime. We specified port 3000.</li><li>Last but not least, the<code><a href="https://docs.docker.com/reference/builder/#cmd" rel="noopener"><strong>CMD</strong></a></code> statement specifies the command to start our application. This tells Docker how to run your application. Here we use <code>node server.js</code> which is typically how files are run in Node.js.</li></ul><p>With this completed file, we are now ready to build a new Docker image.</p><h3 id="6-building-a-docker-image">6. Building a docker image</h3><p>Make sure you have Docker up and running. Now that we have defined our Dockerfile, let’s build the image with a title using <code>-t</code>:</p><pre><code>docker build -t sample-nodejs-app .</code></pre><p>This will output hashes, and alphanumeric strings that identify containers and images saying “Successfully built” on the last line:</p><pre><code>Sending build context to Docker daemon  1.966MB
Step 1/7 : FROM node:6-alpine
---&gt; 998971a692ca
Step 2/7 : RUN mkdir -p /usr/src/app
---&gt; Using cache
---&gt; f1aa1c112188
Step 3/7 : WORKDIR /usr/src/app
---&gt; Using cache
---&gt; b4421b83357b
Step 4/7 : COPY . .
---&gt; 836112e1d526
Step 5/7 : RUN npm install
---&gt; Running in 1c6b36b5381c
npm WARN sample-nodejs-app@1.0.0 No description
npm WARN sample-nodejs-app@1.0.0 No repository field.
Removing intermediate container 1c6b36b5381c
---&gt; 93999e6c807f
Step 6/7 : EXPOSE 3000
---&gt; Running in 7419020927f1
Removing intermediate container 7419020927f1
---&gt; ed4ac8a31f83
Step 7/7 : CMD [ "node", "server.js" ]
---&gt; Running in c77d34f4c873
Removing intermediate container c77d34f4c873
---&gt; eaf97859f909
Successfully built eaf97859f909
AWS Access Key ID [None]: accesskey
AWS Secret Access Key [None]: secretkey
Default region name [None]: us-west-2
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
