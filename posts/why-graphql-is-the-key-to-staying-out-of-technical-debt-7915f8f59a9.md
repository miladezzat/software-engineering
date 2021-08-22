---
card: "https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png"
tags: [GraphQL]
description: GraphQL (not to be confused with GraphDB or Open Graph or eve
author: "Milad E. Fahmy"
title: "Why GraphQL is the key to staying out of technical debt"
created: "2021-08-15T19:36:30+02:00"
modified: "2021-08-15T19:36:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-react tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Why GraphQL is the key to staying out of technical debt</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*MGM-mwrfaPHWZIr0JiTKfA.png" alt="Why GraphQL is the key to staying out of technical debt">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>GraphQL (not to be confused with GraphDB or Open Graph or even an <em>actual </em>graph) is a remarkably creative solution to a relatively common problem: <strong>How do you enable front end developers to access backend data in exactly the way they need it?</strong></p>
<p>Quick example: We want to display a list of products on a web page. So we write a service which returns a list of products. We make it super RESTful because that’s what someone on a podcast said we should do.</p><pre><code class="language-js">{
"items": [
{
"id": 2051,
"name": "Extension Cord",
"price": 15,
"productType": "Electrical",
"supplierName": "Northwind",
"shortDescription": "Outlet not where you need it? Extend your power to the right place at the right time",
},
{
"id": 2053,
"name": "LED Lamp",
"price": 14,
"productType": "Hardware",
"supplierName": "Northwind",
"shortDescription": "Low power battery operated light",
}
]
}</code></pre>
<p>Then we slap said products on the page. Go ahead and imagine a slapping sound. Or feel free to use this one here…</p>
<p>Now that we have everything done, someone decides we also need to display what quantity of each product we have in stock because of course they do.</p>
<p>Ok. I guess. I mean, you didn’t specify that in the original project document, but why not. Let’s just make the scope whatever <strong>you</strong> want it to be.</p>
<p>The product quantity information is a field in the database, but it’s not being returned by the service. In order to get to it from the front end, we have to modify the code of our service and then redeploy before we can even think about making changes on the front end. For one field.</p>
<p>Likewise, if this same someone (who can’t seem to decide what they really want in life) decides that we no longer need the SKU, we can ignore it on the front end, but it’s part of the API response so it ends up being junk data in the payload, and pointless bits that our users don’t need.</p>
<p><strong>Every project</strong> is just this back and forth of unforeseen changes. That’s literally the definition of “Software Development”. I mean it’s not, but my point sounds better if I reference a dictionary.</p>
<p>The point is that we end up making a lot of trade-offs on both the front and back ends just to make things work and keep up with the pace of change. And trade-offs equal technical debt.</p>
<p>This is the very essence of the problem that GraphQL is trying to solve.</p>
<p>I only recently put all the GraphQL pieces together in my own head. It wasn’t until my colleague <a href="https://twitter.com/simona_cotin" rel="noopener">Simona Cotin</a> volunteered to teach me GraphQL that I had the epiphany that it is, perhaps, the answer to a problem that I’ve been trying to work around the bulk of my professional career.</p>
<h4 id="learn-graphql-with-us">Learn GraphQL With Us</h4>
<p>Simona and I did three teaching sessions together and we recorded each one. In these three videos, you can learn with me as I go from zero knowledge about GraphQL, to implementing a GraphQL interface and then consuming it from a React application.</p>
<p>Each video comes with a Github repo that you can clone to get the fully working solution in case you get lost along the way.</p>
<p>We use Azure Functions a lot in this video series because it’s so much easier to build a Serverless API than it is to start from scratch. Grab a free Azure account if you don’t already have one.</p>
<p><a href="https://azure.microsoft.com/free/?WT.mc_id=video-youtube-sicotin" rel="noopener"><strong>Create your Azure free account today | Microsoft Azure</strong></a><br><a href="https://azure.microsoft.com/free/?WT.mc_id=video-youtube-sicotin" rel="noopener"><em>Get started with 12 months of free services and $200 USD in credit. Create your free account today with Microsoft…</em>azure.microsoft.com</a></p>
<h3 id="part-1-introducing-graphql">Part 1: Introducing GraphQL</h3>
<p>In the first video, Simona introduces me to the concepts of GraphQL and the quirky syntax that it uses. We also create the GraphQL API in this video and deploy it.</p>
<p><a href="https://github.com/simonaco/serverless-graphql-apis-part1" rel="noopener"><strong>simonaco/serverless-graphql-apis-part1</strong></a><br><a href="https://github.com/simonaco/serverless-graphql-apis-part1" rel="noopener"><em>Contribute to simonaco/serverless-graphql-apis-part1 development by creating an account on GitHub.</em>github.com</a></p>
<h3 id="part-2-installing-graphiql-locally-and-deploying">Part 2: Installing Graphiql locally and deploying</h3>
<p>In part 2, I get the <a href="https://github.com/graphql/graphiql" rel="noopener">Graphiql</a> visual GraphQL testing tool running locally on my own machine and then deploy it to <a href="https://code.visualstudio.com/tutorials/static-website/getting-started?WT.mc_id=freecodecamp-blog-sicotin" rel="noopener">Azure Storage</a> so I can easily test my GraphQL API without needing to wire up an application.</p>
<p><a href="https://github.com/simonaco/serverless-graphql-apis-part2" rel="noopener"><strong>simonaco/serverless-graphql-apis-part2</strong></a><br><a href="https://github.com/simonaco/serverless-graphql-apis-part2" rel="noopener"><em>Contribute to simonaco/serverless-graphql-apis-part2 development by creating an account on GitHub.</em>github.com</a></p>
<h3 id="part-3-using-the-api-in-a-react-app">Part 3: Using the API in a React App</h3>
<p>We round out this series by looking at how to actually call this API from an application. That’s kind of an important detail.</p>
<p><a href="https://github.com/simonaco/serverless-graphql-apis-part3" rel="noopener"><strong>simonaco/serverless-graphql-apis-part3</strong></a><br><a href="https://github.com/simonaco/serverless-graphql-apis-part3" rel="noopener"><em>Contribute to simonaco/serverless-graphql-apis-part3 development by creating an account on GitHub.</em>github.com</a></p>
<h4 id="learn-more-about-graphql">Learn more about GraphQL</h4>
<p>Once you understand the problem that GraphQL solves, you’ll start to see opportunities for it everywhere. And the best part is that you don’t have to start fresh to use it. In fact, it’s <em>recommended</em> that you use it on top of a typical REST API, so you’re likely in the perfect spot to use GraphQL today.</p>
<p>If you want to go further with GraphQL and React, check out <a href="https://twitter.com/wesbos" rel="noopener">Wes Bos’s</a> course. It’s paid, but it’s worth every penny. This is an investment you will be glad you made. Wes doesn’t pay me anything to say that. But maybe he should.</p>
<p><a href="https://advancedreact.com/" rel="noopener"><strong>Advanced React &amp; GraphQL</strong></a><br><a href="https://advancedreact.com/" rel="noopener"><em>Build Full Stack Applications with React and GraphQL</em>advancedreact.com</a></p>
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
