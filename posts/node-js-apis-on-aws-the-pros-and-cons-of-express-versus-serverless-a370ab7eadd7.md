---
card: "https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png"
tags: [Serverless]
description: by William Woodhead
author: "Milad E. Fahmy"
title: "Node.js APIs on AWS — the pros and cons of Express versus Serverless"
created: "2021-08-15T19:46:35+02:00"
modified: "2021-08-15T19:46:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-serverless tag-nodejs tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js APIs on AWS — the pros and cons of Express versus Serverless</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tgtdC3Ks4buR3XfITJMxsQ.png" alt="Node.js APIs on AWS — the pros and cons of Express versus Serverless">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by William Woodhead</p>
<h1 id="node-js-apis-on-aws-the-pros-and-cons-of-express-versus-serverless">Node.js APIs on AWS — the pros and cons of Express versus Serverless</h1>
<p>Recently I have been playing around with <a href="https://serverless.com/" rel="noopener">Serverless</a> + AWS lambda and I have to say, I have been awestruck.</p>
<p>Over the past few years I have almost exclusively used <a href="http://expressjs.com/" rel="noopener">Express</a> and <a href="https://aws.amazon.com/ec2/" rel="noopener">AWS EC2 </a>(and more recently <a href="https://www.docker.com/" rel="noopener">Docker</a>) to build JavaScript REST APIs.</p>
<p>This piece outlines the pros and cons of <a href="http://expressjs.com/" rel="noopener">Express</a> and <a href="https://serverless.com/" rel="noopener">Serverless</a> and explains why it made sense for our team at <a href="https://www.pilcro.com/?utm_source=medium&amp;utm_medium=serverless&amp;utm_campaign=awareness" rel="noopener">Pilcro</a> to switchover. This piece is aimed at tech teams looking to deploy and manage Node.js APIs on AWS (or similar).</p>
<figcaption>Slightly aggressive collage of their logos. Apologies.</figcaption>
</figure>
<h4 id="tl-dr">TL;DR</h4>
<p>Switching from <a href="http://expressjs.com/" rel="noopener">Express</a> to <a href="https://serverless.com/" rel="noopener">Serverless</a> has completely transformed our delivery over the past 6 months.</p>
<p><strong>Pros: </strong>reduced cost | out-of-the-box deployment scalability and monitoring | lightning-fast development.</p>
<p><strong>Cons</strong>: loss of control | the enigmatic <a href="https://aws.amazon.com/lambda/" rel="noopener">Lambda</a> runtime | young ecosystem | no out-of-the-box zero-downtime deployment</p>
<h4 id="what-is-express-what-is-serverless">What is Express | What is Serverless?</h4>
<p>Express is a <a href="https://nodejs.org" rel="noopener">Node.js </a>package which, at its core, is a well-designed abstraction over the native Node.js http(s) module.</p>
<p>Serverless, on the other hand, is a toolkit that interacts with cloud platforms, such as AWS or <a href="https://cloud.google.com/" rel="noopener">GCP</a>, to deploy and manage APIs.</p>
<p>From these descriptions, we can see that Express and Serverless are really very different — maybe too different to be compared. However the reason I <em>am</em> comparing them is that both Express and Serverless can be used for writing Node.js APIs. So let’s jump into some comparisons:</p>
<h4 id="the-index-file">The index file</h4>
<p>In general, I prefer writing code to writing config. It means you can run, test, and debug your work.</p>
<p>With Express, your index file is JavaScript code. It is a really expressive declarative file. With Serverless, it’s yml config, I’m afraid.</p>
<p>Here’s the Express <em>Hello World</em> index.js file:</p><pre><code>const express = require('express');const handler = require('./handler');</code></pre><pre><code>const app = express();app.get('/hello-world', handler.helloWorld);app.listen(3000, () =&gt; console.log('Listening on port 3000'));</code></pre>
<p>Here’s the Serverless <em>Hello World</em> index.yml file:</p><pre><code>service: hello-worldprovider:    name: aws    runtime: nodejs6.10functions:  helloWorld:    handler: handler.helloWorld    events:      - http:        path: hello-world        method: get</code></pre>
<p>Pretty similar really, but I personally love the Express middleware-based approach. For me, it’s more readable and easier to test and debug.</p>
<h4 id="learning-curve">Learning Curve</h4>
<p>This is a tricky topic because it depends on what you are trying to achieve:</p>
<ul>
<li>If you are a Node.js hobbyist and you want to learn how to setup a localhost server on your own computer, Express is for you. Its a great package to experiment with, the “get started” documentation on the website is excellent, and you can easily start to play around with the intricacies of the Node.js event-based architecture.</li>
<li>If you are trying to deploy and manage robust, scalable Node.js APIs, the learning curve is definately easier with Serverless. This is because Serverless deals with many of your complex cloud-based issues out-of-the-box. These include Deployment, Monitoring, and Infrastructure Provisioning to name just a few.</li>
</ul>
<h4 id="operations-deploying-scaling-logging-monitoring-">Operations — deploying, scaling, logging, monitoring…</h4>
<figcaption>Cogs to represent Operations, obviously.</figcaption>
</figure>
<p>This is where Serverless really comes into its own. Express is not designed to deal with all the complexities of cloud-based architectures by itself. If you use Express, you will need help from other packages:</p>
<p>For Deployment and Scaling you might use <a href="https://www.docker.com/" rel="noopener">Docker</a>, <a href="https://kubernetes.io/" rel="noopener">Kubernetes</a>, <a href="https://aws.amazon.com/elasticbeanstalk/" rel="noopener">Elastic Beanstalk</a> or some other AWS services.</p>
<p>For Logging, Monitoring, and Error Handling, you might use <a href="https://newrelic.com/" rel="noopener">New Relic</a>, <a href="https://www.datadoghq.com/" rel="noopener">Datadog</a>, <a href="https://www.pingdom.com/" rel="noopener">Pingdom</a>, and so on.</p>
<p>You get the idea. Express is a great low-level tool for building APIs, but you need to learn a bunch of other packages for your API to thrive in the modern cloud-based world. This is great if you want to configure your own architectures and have complete control.</p>
<p>With Serverless, you get so much out-of-the-box. Not from the Serverless package itself, but because Serverless can automatically interact with all the services in your Cloud Platform. For instance, just with the <em>Hello World</em> index.yml example we saw above, you would get by default:</p>
<ul>
<li>Monitoring from AWS Lambda</li>
<li>Logging from <a href="https://aws.amazon.com/cloudwatch/" rel="noopener">AWS Cloudwatch</a></li>
<li>Autoscaling from AWS Lambda</li>
<li>Deployment from Serverless &amp; <a href="https://aws.amazon.com/cloudformation/" rel="noopener">AWS Cloudformation</a></li>
</ul>
<p>This is absolutely incredible for fast moving tech teams who want to focus on writing application code, not on managing infrastructure.</p>
<p><em>Please note: Currently with Serverless, we do not achieve zero-downtime deployment. I think it is possible to achieve with AWS CodeDeploy, but we currently just allow the API to go down for a second or so.</em></p>
<h4 id="cost">Cost</h4>
<p>For anyone building robust, highly-available APIs on the cloud, cost is a massive consideration. Serverless has reduced our costs by an unbelieveable amount:</p>
<p>One T2-Medium EC2 Linux Machine on AWS costs you about $33 per month to run. We were using 3 of these machines before switching over to Serverless.</p>
<p>With Serverless + AWS Lambda, you get<strong> </strong>1 million requests for free each month.</p>
<p>At Pilcro, we haven’t hit this benchmark yet so we have already saved ourselves over one hundred dollars a month. With Serverless and Lambda, <strong>we can now run our APIs for free</strong>.</p>
<h4 id="the-aws-lambda-runtime">The AWS Lambda runtime</h4>
<figcaption>AWS Lambda logo</figcaption>
</figure>
<p>One of the downsides of using Serverless is that your API functions are run in the AWS Lambda runtime. This means you are never quite sure what is going on.</p>
<p>You also have to deal with certain oddities of the AWS Lambda function, like the funky <em>event</em> and <em>context</em> objects that are injected into your handlers:</p><pre><code>function awsLambdaHandler(event, context, callback) {  ...}</code></pre><pre><code>function expressHandler(req, res, next) {  ...}</code></pre>
<p>I much prefer the <em>req, res, next</em> middleware pattern of Express. It seems more logical and understandable to me.</p>
<p>Another quirk is that for AWS Lambda to run your handlers, they need to be loaded into an execution context. This can take some time. Functions are cached in the execution context for a while, so often the first request to a Lambda will take more time than subsequent requests. This can be irritating if your API is used infrequently.</p>
<p><em>Side note</em>: One of the great things about the AWS Node.js Lambda runtime is that they have the <a href="https://www.imagemagick.org" rel="noopener">ImageMagick</a> binary installed. So you can do image manipulation in your Lambda functions out of the box!</p>
<h4 id="conclusion">Conclusion</h4>
<p>This isn’t really a comparison between Express and Serverless. It’s an acknowledgement that — in the pursuit of robust, scalable cloud APIs — packages like Serverless are offering so much out-of-the-box, that continuing to use Express (alongside other tools) feels like a lot of hard work and learning.</p>
<p>At <a href="https://www.pilcro.com/?utm_source=medium&amp;utm_medium=serverless&amp;utm_campaign=awareness" rel="noopener">Pilcro</a>, our APIs are pretty simple and standard. They are comprised of simple REST requests and a few complex image manipulation functions.</p>
<p>Because our APIs are so straightfoward, the decision to use Serverless and Lambda was simple — our main drivers were <strong>cost</strong>, <strong>scalability</strong>, and <strong>development speed.</strong></p>
<p><strong>Cost</strong> because … cost.</p>
<p><strong>Scalability</strong> because we are built on top of G-Suite, so we needed to be able to scale extremely quickly and effectively.</p>
<p><strong>Development speed</strong> because we needed to deliver Pilcro in 6 months with a small tech team.</p>
<p>Serverless has given us these three benefits, which has completely transformed our delivery over the past 6 months. The ecosystem of Serverless is still young, so there will likely be a lot of development in this space over the next 12 months.</p>
<h4 id="steps-to-help-you-decide-whether-to-use-serverless">Steps to help you decide whether to use Serverless</h4>
<ol>
<li>How complex are your APIs? Do you need the low-level configuration and closeness that you get from using Express?</li>
<li>How do you currently manage Deployment, Scaling, and Monitoring? Are you happy with your solution? How quickly could a newly hired developer learn all the different parts of your architecture?</li>
<li>Could you save any money by switching to Serverless?</li>
</ol>
<p><em>If you liked this story, please ? and please share with others. Also please check out my company p<a href="https://www.pilcro.com/?utm_source=medium&amp;utm_medium=serverless&amp;utm_campaign=awareness" rel="noopener">ilcro.com.</a> Pilcro is brand software for G-Suite — for marketers and brand agencies.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
