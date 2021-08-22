---
card: "https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png"
tags: [AWS]
description: "by Gareth Fuller"
author: "Milad E. Fahmy"
title: "Deploy a NUXT app to S3 in 5 minutes"
created: "2021-08-16T11:45:13+02:00"
modified: "2021-08-16T11:45:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-vuejs tag-technology tag-software-development tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Deploy a NUXT app to S3 in 5 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Xw6OooWmB0S-uAM6VpqyIA.png" alt="Deploy a NUXT app to S3 in 5 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Gareth Fuller</p><h1 id="deploy-a-nuxt-app-to-s3-in-5-minutes">Deploy a NUXT app to S3 in 5 minutes</h1><p>Step by step guide to deploy a NUXT app with Vue.js to an AWS S3 bucket with a custom domain and everything! ?</p><p>To start with, I’m assuming that you are somewhat familiar with <a href="https://vuejs.org/" rel="noopener">Vue.js</a>, <a href="https://nuxtjs.org/" rel="noopener">NUXT</a> and Amazon AWS S3 buckets.</p><p>We’ve only got 5 minutes so lets get started.</p><h4 id="1-install-the-vue-cli">1. Install the Vue CLI</h4><p>On the command line:</p><pre><code>npm install -g @vue/cli</code></pre><p>then</p><pre><code>npm install -g @vue/cli-init</code></pre><h4 id="2-create-your-nuxt-app">2. Create your NUXT app</h4><p>On the command line:</p><pre><code>vue init nuxt-community/starter-template exampleapp-frontend</code></pre><p>then</p><pre><code>cd exampleapp-frontend</code></pre><h4 id="3-test-the-development-environment">3. Test the development environment</h4><p>On the command line:</p><pre><code>npm install</code></pre><p>then</p><pre><code>npm run dev</code></pre><p>If you navigate to <a href="http://localhost:3000" rel="noopener">localhost:3000</a> in your browser you should see the default NUXT home page.</p><h4 id="4-generate-your-nuxt-app">4. Generate your NUXT app</h4><p>On the command line:</p><pre><code>npm run generate</code></pre><p>This generates a <code>/dist</code> folder with your production NUXT app build. This is the folder we’ll be deploying to S3.</p><h4 id="5-install-the-aws-cli">5. Install the AWS CLI</h4><p>We need the AWS CLI so that we can create and manipulate our S3 bucket quickly from the command line.</p><pre><code>pip install awscli --upgrade --user</code></pre><h4 id="6-configure-your-aws-cli">6. Configure your AWS CLI</h4><p>This step is so you have the authorization to create an S3 bucket in your AWS account from the command line.</p><pre><code>aws configure</code></pre><p>It will then ask for some credentials:</p><pre><code>AWS Access Key ID: [ENTER YOUR ACCESS KEY]
AWS Secret Access Key: [ENTER YOUR SECRET ACCESS KEY]
Default region name: [ENTER YOUR PREFERRED REGION NAME]
Default output format: json</code></pre><p>For your ‘Default region name’ choose which ever is most appropriate for you. Here is a list of <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region" rel="noopener">available regions</a> for the S3 service.</p><h4 id="7-create-your-s3-bucket">7. Create your S3 bucket</h4><p>On the command line:</p><pre><code>aws s3api create-bucket --bucket yourdomain.com --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1</code></pre><p>Note that we’ve named the bucket after the domain name we want to use. Replace ‘yourdomain.com’ with whatever domain you want to have your app at. Also, replace ‘eu-west-1’ with your own preferred region.</p><h4 id="8-enable-s3-bucket-static-website-hosting">8. Enable S3 bucket static website hosting</h4><p>On the command line:</p><pre><code>aws s3 website s3://yourdomain.com/ --index-document index.html --error-document index.html</code></pre><p>Note that here we are also setting the index and error documents of our S3 static hosting bucket. For this example we have set them both to the NUXT index page (index.html) but in the future you may want to change the <code>--error-document</code> to an actual error page.</p><h4 id="9-enable-s3-bucket-versioning">9. Enable S3 bucket versioning</h4><p>On the command line:</p><pre><code>aws s3api put-bucket-versioning --bucket yourdomain.com --versioning-configuration Status=Enabled</code></pre><h4 id="10-create-an-s3-policy-to-upload-to-s3-bucket">10. Create an S3 Policy to upload to S3 bucket</h4><p>This allows your S3 bucket to be accessed via a public URL.</p><p>In your local directory create a JSON file called <code>policy.json</code> and add the following:</p><pre><code class="language-json">{
"Statement": [
{
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::yourdomain.com/*"
}
]
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
