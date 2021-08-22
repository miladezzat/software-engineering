---
card: "https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png"
tags: [AWS]
description: "AWS Lambdas are brilliant! They simplify deploying serverless"
author: "Milad E. Fahmy"
title: "How to build and use a Layer for your AWS Lambdas"
created: "2021-08-15T23:46:00+02:00"
modified: "2021-08-15T23:46:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-serverless tag-coding tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to build and use a Layer for your AWS Lambdas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kQDtO4sMgdnizh7DLdBE2g.png" alt="How to build and use a Layer for your AWS Lambdas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
npm init</code></pre><p>Accept all the default values in the NPM setup, and you’ll have the <em>package.json</em> file generated in your folder.</p><p>For our first layer, we are going to import the <em>moment </em>library. This is the same process as you would use to add any NPM package to the layer.</p><pre><code class="language-bash">npm install --save moment</code></pre><h4 id="deploying-our-layer">Deploying our Layer</h4><p>Now that we have the common code in our folder we need to deploy it. To do this, we need to zip up the whole folder and then upload it as a Lambda Layer. To zip up the folder content you can navigate into the <em>DemoLayer </em>folder and run a <em>zip</em> command on the content of the folder.</p><pre><code class="language-bash">cd ../
exports.handler = async (event) =&gt; {
let momentNow = moment.now();
const response = {
statusCode: 200,
body: JSON.stringify({momentNow}),
};
return response;
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
