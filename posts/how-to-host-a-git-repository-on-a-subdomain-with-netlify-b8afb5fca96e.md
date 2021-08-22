---
card: "https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb"
tags: [Technology]
description: "Let’s say you have your portfolio, like www.glynlewington.com"
author: "Milad E. Fahmy"
title: "How to host a Git repository on a subdomain with Netlify"
created: "2021-08-16T11:29:13+02:00"
modified: "2021-08-16T11:29:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-tech tag-netlify tag-programming tag-web-hosting ">
<header class="post-full-header">
<h1 class="post-full-title">How to host a Git repository on a subdomain with Netlify</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb 300w,
https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb 600w,
https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb 1000w,
https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*yd8PzBwBVOc98lXb" alt="How to host a Git repository on a subdomain with Netlify">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s say you have your portfolio, like <code><a href="http://www.glynlewington.com" rel="noopener">www.glynlewington.com</a></code>, hosted on Netlify and want to add your projects onto the same domain. They are all separate git repositories and Netlify is made for hosting from a single repository…but don’t fear! We can host them on subdomains like <code>project.glynlewington.com</code> with just a little work.</p><p>Netlify makes it super easy to host your static sites with them for free. I recently moved my portfolio from a VPS over to them, and it’s great that they automatically update your site every time you push to your git repository.</p><p>In the past, I had all my personal projects also hosted on subdirectories, e.g. <code>www.glynlewington.com/project</code>. This is either difficult or impossible with Netlify. Netlify is mostly set up for you to host everything in one site from one git repository.</p><p>The compromise I came to is hosting them on subdomains instead, like <code>project.glynlewington.com</code>. This also isn’t documented very well but it is possible.</p><ul><li>Go to <a href="http://www.netlify.com," rel="noopener">www.netlify.com</a> and login or signup.</li><li>Select “New site from git”.</li><li>Choose your provider (e.g. GitHub) — You may need to authenticate here.</li><li>Select the git repository you want to create a site from.</li><li>Select the branch you want to deploy from.</li><li>Choose any commands that need to be run. — <em>If it’s a React app you will need to run a build command.</em></li><li>Choose the directory that you will publish from. It will contain files such as index.html. — <em>If it’s a React app this will probably be the build folder.</em></li><li>Select “Build Site”.</li></ul><p>At this point, you should have a functioning app hosted on a Netlify free domain such as <code>https://hungry-bose-fb0e6d.netlfiy.com</code>. If this isn’t working, check that there are no errors with the build process and fix these if there are.</p><p>Now to set up a custom domain.</p><ul><li>Go into your app overview on Netlify.</li><li>It will say your site is deployed successfully and you can set up a custom domain.</li><li>Click on set up a custom domain, type in the domain you want, including the subdomain, and click verify. E.g. <code>project.glynlewington.com</code>.</li></ul><p>Next, login to your domain hosting provider. I use Cloudflare but it will be the same or similar using others.</p><ul><li>Go to DNS settings.</li><li>Select a new CNAME record.</li><li>Input a “Name” — this is the subdomain, it should be the same one you selected previously on Netlify. E.g. <code>project</code></li><li>Under “IPv4 Address” input the free domain for your Netlify site. E.g. <code>hungry-bose-fb0e6d.netlify.com</code>.</li><li>If you are also using Cloudflare, turn off the traffic routing through Cloudflare. This messes with Netlify.</li><li>Add record.</li></ul><p>Done! Once you’ve done this you can access your site on the subdomain.</p><p>Netlify will also automatically add https security to your site, no need to worry about this.</p>
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
