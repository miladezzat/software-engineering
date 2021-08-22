---
card: "https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg"
tags: [JavaScript]
description: by Mohak Puri
author: "Milad E. Fahmy"
title: "How to use gRPC-web with React"
created: "2021-08-15T19:34:07+02:00"
modified: "2021-08-15T19:34:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-envoy-proxy tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use gRPC-web with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PJce89y7GZdBYsiHzmmUow.jpeg" alt="How to use gRPC-web with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Mohak Puri</p>
<h1 id="how-to-use-grpc-web-with-react">How to use gRPC-web with React</h1>
<p>For the past few months, my team has been working on a gRPC service. A few weeks back a new requirement came in: we needed a web portal to display some information. Since we already had a gRPC backend, the server side was sorted. But for the front-end, we had a few important choices to make.</p><pre><code>1. Vue or React (We choose react)2. REST or gRPC from the web portal </code></pre>
<p>If you don’t know what gRPC is you can read about it <a href="https://grpc.io/" rel="noopener">here</a>. Here are a few reasons that made us choose gRPC over REST.</p>
<ol>
<li>One major factor for choosing gRPC was the fact that we already had protos that we used in our backend service. We could use the same protos to generate client-side code in javascript<strong>.</strong></li>
<li>Using gRPC would mean that we would not have to write any code for creating the client. Adding new endpoints would mean making changes to the proto and generating client-side code.</li>
<li>We needed server-side streaming which is supported by gRPC-web.</li>
<li>We already had a setup of envoy for loading balancing our backend service (more on this later).</li>
</ol>
<h3 id="caveats">Caveats</h3>
<ol>
<li>gRPC web-client won’t send HTTP2 requests. Instead, you need a proxy between your web-client and gRPC backend service for converting that HTTP1 request to HTTP2. gRPC web client has built-in support for Envoy as a proxy. You can find more information about this <a href="https://grpc.io/blog/state-of-grpc-web#f2" rel="noopener">here</a>.</li>
<li>The teams at Google and Improbable both went on to implement the spec in two different repositories. We will be using gRPC web client provided by Google. You can find the implementation by Google <a href="https://github.com/grpc/grpc-web" rel="noopener">here</a> and by Improbable <a href="https://github.com/improbable-eng/grpc-web" rel="noopener">here</a>.</li>
<li>As of now, client-side streaming is not supported.</li>
</ol>
<figcaption>Credits: <a href="https://grpc.io/blog/state-of-grpc-web" rel="noopener" target="_blank" title="">https://grpc.io/blog/state-of-grpc-web</a></figcaption>
</figure>
<p>Now that we have some idea about gRPC web, below is a diagram depicting how the entire communication will take place. We are going to make a react web application that will send a <em>Ping</em> request and get a <em>Pong</em> response for it.</p>
<figcaption>Front-end + Proxy + Back-end</figcaption>
</figure>
<h4 id="before-starting-make-sure-you-have-the-following-installed-">Before starting make sure you have the following installed:</h4><pre><code>1. npm (Node package manager) - For generating react project2. Docker - For running envoy locally3. protoc - For generating code using protos</code></pre>
<p>There are 3 pieces to this puzzle. We are going to tackle each of them one by one.</p>
<h3 id="1-user-interface-website-using-react">1. User Interface — Website using react</h3>
<p>For creating a react project, we will use the <em>create-react-app</em> command.</p><pre><code>create-react-app learn-react-grpc</code></pre>
<p>Now that we have a sample project in place, let’s create a proto. This is what a ping pong proto looks like.</p>
<p>For subsequent commands to run, make sure that the proto is inside the src/ folder of the react project. For generating client-side code in javascript, run the following command:</p><pre><code>protoc -I=. src/ping_pong.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.</code></pre>
<p>This will generate two new files: <strong><em>ping_pong_pb.js </em></strong>and<strong><em> ping_pong_grpc_web_pb.js,</em></strong> with all the generated code in it. We will use this code to make requests to our gRPC service.</p>
<p>First, let’s update our package.json with a few gRPC and protobuf related dependencies and then run <strong><em>npm install</em></strong><em>.</em></p>
<p>Below is the entire logic for building our website. You can use this code in your App.js file. It is a really simple website which contains a button, clicking on which creates a ping pong request and gets a response.</p>
<p>Now if you run the node server using <strong>npm start, </strong>you are likely to face this compilation issue. This is apparently an issue when using gRPC-web with a project created using <em>create-react-app </em>command line interface<em>.</em></p>
<figcaption>compilation issues when using create-react-app</figcaption>
</figure>
<p>However, this issue can be fixed by adding <em>eslint-disable </em>to all of the proto generated files. Make sure that you do this for <em>all</em> the files. Now if you start the server, everything should be working.</p>
<figcaption>fixing compile issues</figcaption>
</figure>
<h3 id="2-backend-grpc-server-in-node">2. Backend — gRPC server in Node</h3>
<p>Let’s create a simple node server. We will be using the same proto that we used in our react app. Let’s create a node js application node-ping-pong-server. Here is our sample server.js file.</p>
<p>We can run the node server using the following command:</p><pre><code>node server.js</code></pre>
<h3 id="3-proxy-envoy">3. Proxy — Envoy</h3>
<p>As mentioned above, we will be using Docker for setting up envoy. Here is the docker file. As of writing, the latest tag points to Envoy<em> version 1.11. </em>Create a Dockerfile inside src/ folder of your react app.</p>
<p>Before running the Docker container, we need to make sure that we have a config file for envoy. Add this envoy.yml inside the src/ folder of your react app.</p>
<p>Let’s understand what this envoy configuration file does:</p>
<p>9901 is the port where envoy admin portal is running. You can use this portal to check envoy routes, health checks and a lot more.</p>
<p>9090 is the port where envoy is listening for incoming requests. Our website will make a request to envoy on this port.</p>
<p>Any request that matches the above prefix is routed to the ping_pong_service cluster. Since our node server (aka cluster) is running on the host machine (your laptop) and not the docker container, we need to route those request out of the container to the host. <strong><em>host.docker.internal</em></strong> does exactly this.</p>
<p>Now let’s build our docker image using the following command:</p><pre><code>docker build -t mohak1712/learn-grpc-web .</code></pre>
<p>Now let’s run the docker image:</p><pre><code>docker run -d -p 9090:9090 mohak1712/learn-grpc-web</code></pre>
<p>We need to forward host port 9090 to the containers port 9090 so that any request on port 9090 is forwarded to the docker container where envoy is running.</p>
<h3 id="final-output">Final Output</h3>
<p>Now that everything is set up, make sure that the website, node server and envoy container are running. You can run the following set of commands in case you still haven’t.</p><pre><code>npm start -&gt; start web server</code></pre><pre><code>node server.js -&gt; start node server</code></pre><pre><code>docker run -d -p 9090:9090 mohak1712/learn-grpc-web -&gt; start envoy</code></pre>
<p>Now when you click on the button, it sends a Ping request and gets a Pong response for it!</p>
<p>That’s about it! Thank you for reading, and I hope you enjoyed the article.</p>
<p>You can follow me on <a href="https://medium.com/@mohak1712" rel="noopener">Medium</a> and <a href="https://github.com/mohak1712" rel="noopener">Github</a> :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
