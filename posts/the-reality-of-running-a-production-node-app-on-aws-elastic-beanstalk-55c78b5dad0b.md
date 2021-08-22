---
card: "https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg"
tags: [AWS]
description: by Jared Nutt
author: "Milad E. Fahmy"
title: "The reality of running a production Node app on AWS Elastic Beanstalk"
created: "2021-08-15T19:33:53+02:00"
modified: "2021-08-15T19:33:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-javascript tag-nodejs tag-programming tag-devops ">
<header class="post-full-header">
<h1 class="post-full-title">The reality of running a production Node app on AWS Elastic Beanstalk</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*sUif8A5X81bOpkLssOTbcg.jpeg" alt="The reality of running a production Node app on AWS Elastic Beanstalk">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jared Nutt</p>
<h1 id="the-reality-of-running-a-production-node-app-on-aws-elastic-beanstalk">The reality of running a production Node app on AWS Elastic Beanstalk</h1>
<h4 id="lessons-learned-from-2-years-of-running-a-production-node-app-on-aws-elb-platform">Lessons learned from 2 years of running a production Node app on AWS’ ELB platform</h4>
<figcaption>Photo by <a href="https://unsplash.com/photos/1ZZ96uESRJQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Shane Rounce</a> on <a href="https://unsplash.com/search/photos/technology?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="front-matter">Front-Matter</h3>
<p>Let’s be honest, the <a href="https://calculator.s3.amazonaws.com/index.html" rel="noopener">AWS pricing calculator</a> is confusing. Part of that is because of the <em>a la carte</em> method of payments AWS offers. This makes trying to give a good quote to a client difficult. Hopefully this article can provide some light on how much it costs to run an app, as well as some ways to reduce cost.</p>
<h3 id="the-real-cost-of-running-an-app">The Real Cost of Running an App</h3>
<p>I’ve been managing a node web-app on ELB for about two years now. The first year was great, they gave you everything for free (mostly)! After that, you have to start paying for stuff, like EC2 instances.</p>
<p>This article will focus on my specific app requirements, which is a node based express app that is hosted on Elastic Beanstalk.</p>
<p>For full details about the build, see my previous article <a href="https://medium.freecodecamp.org/how-to-deploy-a-node-js-app-to-the-aws-elastic-beanstalk-f150899ed977" rel="noopener">here</a>.</p>
<h4 id="breakdown">Breakdown</h4>
<p>This is what I’m currently running on AWS:</p>
<p>Single EBS Environment (U.S. West Region):</p>
<ul>
<li>1 Classic Load Balancer</li>
<li>1 t2.micro EC2 instance</li>
<li>S3 Bucket that holds images (7 GB at time of writing)</li>
<li>1 Route 53 Hosted Zone</li>
</ul>
<p><strong>$18 </strong>(Load Balancer) +<strong> $5</strong> (EC2 with an RI) + <strong>$0.50</strong> (Route 53) + <strong>$0.17 </strong>(S3) +<strong> $0.21</strong> (Data Transfer) = Roughly <strong>$25 </strong>a month.</p>
<p>Additionally, I host a MongoDB elsewhere, so if you plan on hosting a DB on AWS, that will incur additional costs. Let’s break down the various costs.</p>
<h4 id="load-balancer">Load Balancer</h4>
<p>This is the most expensive part of the stack. It costs:</p>
<ul>
<li>$0.025 per Classic Load Balancer-hour (or partial hour)</li>
<li>$0.008 per GB of data processed by a Classic Load Balancer</li>
</ul>
<p>That means, if you run your app 24 hours a day, it will cost roughly $18 + data charges, every month.</p>
<h4 id="ec2-instance">EC2 Instance</h4>
<p>On-Demand EC2 instances are more expensive than they should be. To save some money here, refer to the section below about Reserved EC2 Instances. In case you were wondering, it would cost $8.40 to run the same type of EC2 instance as mentioned above, on-demand.</p>
<h4 id="s3">S3</h4>
<p>I have a couple S3 buckets. One for my static home page, one for holding images and one for holding the application version. As far as I know, ELB automatically creates the one for managing the application versions.</p>
<p>The S3 is pretty cheap, so I’m not too worried about trying to nickel and dime it, but there are ways to save money via their <a href="https://aws.amazon.com/glacier/" rel="noopener">Glacier</a> system.</p>
<h4 id="database">Database</h4>
<p>I host my MongoDB DB at mLab, which is going away soon. So I’ll update this when I sort out how much that is actually gonna cost once I’m forced to move over to Mongo’s Atlas.</p>
<h3 id="reserved-ec2-instances">Reserved EC2 Instances</h3>
<p>Let’s talk about Reserved Instances (RI). Amazon’s convoluted billing system is the most confusing part about managing anything on AWS. Reserved Instances can alleviate some of the cost, but are way too confusing.</p>
<p>After a lot of reading and talking with the AWS customer service, this is what I sorta figured out.</p>
<p>First, there are two different ways you can reserve where the RI is: Regional and Availability Zone. Regional means, it is specific to one of the main regions, eg. us-west-2 (Oregon). The availability zone (AZ) is specific to a zone within that region, e.g. us-west-2<strong>a </strong>(Oregon).</p>
<p>I bought an RI within us-west-2 and it was automatically applied to my instance running in that area. If you buy one within the AZ, it will only apply to the specific AZ, e.g. us-west-2a, so if ELB spins up an EC2 instance in us-west2b, you’re out of luck.</p>
<p>Additionally, there are “standard” and “convertible” types of RIs. I’m not 100% on what that means, but from what I understand convertible is more flexible on what you can swap it to, but more expensive.</p>
<p>Finally, there are three types of payment types: No Up-front, partial Up-front, All Up-Front. This is pretty straightforward, you either pay nothing, some or all when you reserve the instance. There is no cost benefit, that I can see. However, as a new account, you most likely can’t do no up-front.</p>
<p>Per AWS Support:</p>
<blockquote>No Upfront Reserved Instances (RIs) can pose a significant billing risk to new accounts, as they’re a contractual obligation to pay monthly for the entire term of the RI. For this reason, new accounts and lightly used accounts are unable to sign up for No Upfront RIs until a successful billing history is built with us.</blockquote>
<p>You may run into this error if you try and buy a no up-front.</p>
<blockquote>Error : Your current quota does not allow you to purchase the required number of reserved instances (Service: AmazonEC2; Status Code: 400; Error Code: ReservedInstancesLimitExceeded;)</blockquote>
<p>Caveat: For whatever reason, it takes a bit for the the reserved instance to “kick-in” which means the first day of the month always costs more. I’m not sure why this is, but if I figure it out, I’ll update this. See graph below:</p>
<h3 id="pain-points">Pain Points</h3>
<p>These are just some minor complaints about the overall EBS, which I figured I’d include as an addendum to my original article, in case you’re curious.</p>
<h4 id="automatic-updates-aren-t-really-that-automatic">Automatic updates aren’t really that automatic</h4>
<p>Node versions don’t line up from version to version.</p>
<p>Refer to the step below on how I manage changing Linux versions when Node doesn’t work.</p>
<h4 id="running-more-than-one-environment">Running more than one environment</h4>
<p>Having a development environment and a production running at the same time is easy, but it’s expensive. It doubles it, in fact. Therefore, I usually destroy the dev environment as soon as I’m done with it.</p>
<h4 id="documentation-is-horrendous">Documentation is horrendous</h4>
<p>AWS is too big for its own good. That is part of why I’m writing this. It was really hard to find answers to my specific needs.</p>
<h3 id="how-i-manage-updates">How I manage Updates</h3>
<p>I have two separate instances of my Git repo installed on my laptop. I have one for dev, and one for production.</p>
<p>I use the dev environment to, well, develop! Pretty straightforward. I use the production folder solely for the purpose of pulling updates from Git master branch, running my webpack configuration and deploying to the production server.</p>
<p>The reason they are separate is because I can maintain separate elastic beanstalk configurations and not have to worry about deploying to the wrong place.</p>
<h4 id="updates-not-requiring-a-linux-environment-change">Updates not requiring a Linux Environment change</h4>
<p>For updates not requiring any changes to the linux environment, it’s as simple as running <code>eb deploy</code> in the terminal. It’s amazing and takes about 10 minutes to propagate.</p>
<h4 id="updates-requiring-a-linux-environment-change">Updates requiring a Linux Environment change</h4>
<p>Occasionally, you will want to update the Linux environment but will be unable too because AWS is freaking dumb (I’m sure there’s a reason) and only allows certain versions of Node on each Linux build. For this, it’s a bit more complicated, but manageable.</p>
<ol>
<li>Push to production config under new env. The last time I did this, I just created a new instance via <code>eb create prod-1</code> . It’ll do what it needs to and deploy your app to a new environment.</li>
<li>Make sure all your updates work. Seems pretty obvious, but this is a good time to make sure there weren’t any hiccups with the new build.</li>
<li>Make sure your env vars are setup correctly. This is sorta part of the previous version, but make sure you’re pulling from the right DB, or whatever.</li>
<li>Make sure your load balancer has the same SSL cert (if applicable). Fun fact, if you try to access an ELB instance in https without a certificate, it will fail!</li>
<li>Swap the instances. Finally, after everything looks good to go, there’s a button in the console to swap the instance urls. EASY PEASY. You don’t have to change anything in the Route 53, it does it all for you.</li>
</ol>
<p>So, there you have it. How to manage your updates. Pretty easy.</p>
<h3 id="final-thoughts">Final Thoughts</h3>
<p>If you have any suggestions to make it cheaper/easier, I would love to hear them. I like the discussion about tools and options just as much as the next developer!</p>
<p>With that, I’ll leave with this: Happy coding!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
