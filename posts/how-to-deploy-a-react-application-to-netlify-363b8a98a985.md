---
card: "https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png"
tags: [JavaScript]
description: by Abhishek Jakhar
author: "Milad E. Fahmy"
title: "How to deploy a React application to Netlify"
created: "2021-08-15T19:37:42+02:00"
modified: "2021-08-15T19:37:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-software-development tag-design tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a React application to Netlify</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hxXLMsJtGQCg2RNAdXd3bQ.png" alt="How to deploy a React application to Netlify">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Abhishek Jakhar</p>
<h1 id="how-to-deploy-a-react-application-to-netlify">How to deploy a React application to Netlify</h1>
<p>I’m going to teach you how to deploy and host your React app with Netlify.<br><strong>Netlify</strong> is a service that automates builds, deployments and manages your websites. It’s one of the fastest and easiest deployment solutions these days.</p>
<p><a href="https://www.netlify.com/" rel="noopener"><strong>Netlify</strong></a> offers a free plan. So first, we will log in to <a href="https://www.netlify.com/" rel="noopener"><strong>Netlify</strong></a> using any one of the options(Github, Gitlab, Bitbucket, Email) given on the login page.</p>
<figcaption><strong>Left</strong>(Login Page) <strong>Center</strong>(Authorization) <strong>Right</strong>(Netlify Online App)</figcaption>
</figure>
<p>We will start by creating a build of our application by running this command:</p><pre><code>npm run build</code></pre>
<p>So, now our build folder will get generated which will contain all the production-ready files.</p>
<p>Now, there are <strong>two ways</strong> to deploy our application to Netlify.</p>
<h4 id="drag-drop"><strong>Drag &amp; Drop</strong></h4>
<p>Netifly has made it so easy that we have to just <strong>drag and drop</strong> our <strong>build folder</strong> into their <strong>online app </strong>(Rightmost image above), and our application will get deployed to a live URL.</p>
<blockquote><strong>Note: </strong>Netlify online app is the screen which appears after you have logged into your netlify account.</blockquote>
<figcaption><strong>Drag &amp; Drop build</strong> folder to <strong>Netlify Online Application</strong> to Deploy</figcaption>
</figure>
<h4 id="netlify-cli"><strong>Netlify CLI</strong></h4>
<p>Netifly also provides a command line interface that lets you deploy your app straight from the command line. That’s what we will do now.</p>
<p>So first, we’ll install the CLI using the following command:</p><pre><code>npm install netlify-cli -g</code></pre>
<p>Now, we’re ready to deploy it. To deploy the application we have to make sure that we’re in the project folder and then we will run this command:</p><pre><code>netlify deploy</code></pre>
<p>We might get a pop-up window which will ask us to log in with Netlify and grant access to the <strong>Netlify CLI</strong>.</p>
<figcaption>Pop-Up window asking you to log in with Netlify and grant access to the Netlify CLI</figcaption>
</figure>
<p>Now, we’ll click Authorize. Now that we’re authorized, we can follow the command line prompts to deploy the app.</p>
<h4 id="command-line-prompts">Command Line Prompts</h4>
<ol>
<li>In the console, it says that “<strong>This folder isn’t linked to a site yet. What would you like to do?” </strong>It wants to know if we want to link this directory to an existing site or create and configure a new site. Since this is a new site, we’ll select <strong>Create &amp; configure a new site.</strong></li>
</ol>
<p>2. It gives us the option to give our site a name. I’ll type <strong>portfolio on netlify </strong>(You can type any available name which you like).</p>
<p>3. Now it will ask for the Netlify account which you want to use, so I will select <strong>my account (Abhishek Jakhar)</strong>, you can select yours.</p>
<p>4. Now, as deploy path, we need to specify our project's build directory which contains the assets for deployment. So, we will type <strong>build</strong> there and press enter.</p>
<p>5. Now, our site will get created and will be deployed to a draft URL first, which we can view by copying and pasting the URL in the browser.</p>
<p>Now, back in the console, it says <strong>“If everything looks good on your draft URL, take it to live with the --prod flag”</strong>.</p>
<p>So to make our app live, we’ll run the command shown on the command line</p><pre><code>netlify deploy --prod</code></pre>
<p>It will ask us one more time to specify the deploy path for the live build which again is our build folder.</p>
<p>Now, in the console output, we get two URLs. A <strong>Unique Deploy URL, </strong>which represents the unique URL for each individual deployment, and a <strong>Live URL </strong>which always displays your latest deployment.</p>
<p>So each time you update your website and deploy it, you’re going to get a unique URL for that deployment. Basically, if we deploy multiple times we will be having <strong>multiple unique URLs</strong> so that you can point users to a <strong>specific version</strong> of your application. But the <strong>live URL</strong> always displays your <strong>latest changes</strong> at the same URL.</p>
<blockquote><strong>Note: </strong>Netlify automatically secures your site over <strong>HTTPS</strong> for <strong>free</strong>.</blockquote>
<h4 id="page-not-found-error">Page Not Found Error</h4>
<figcaption><strong>404 Error</strong> when we refresh application after navigating to a different route</figcaption>
</figure>
<p>If you’re publishing an app that uses a router like React Router you’ll need to configure redirects and rewrite rules for your URLs. Because when we click on any navigation item to change the page (route) and refresh the browser, we get a 404 error page.</p>
<p>So Netlify makes configuring redirects and rewrite rules for your URLs really easy. We’ll need to add a file inside the build folder of our app named _redirects. Inside the file, we need to include the following rewrite rule.</p><pre><code>/*    /index.html  200</code></pre>
<p>This rewrite rule is going to serve index.html file instead of giving a 404, no matter what URL the browser requests.</p>
<figcaption>The <strong>_redirects</strong> file inside the build folder containing <strong>redirect rule</strong></figcaption>
</figure>
<p>So now, to view the latest changes in the live URL, we need to deploy with <code>netlify deploy</code>. Again, we’ll specify build as the deploy path. Now, when we see the live URL and refresh the app after changing the route we will no longer see the 404 error page.</p>
<p>That's all there is to it. On netlify.com you can see your site settings. There you can do stuff like set up a custom domain or connect the site to a GitHub repository.</p>
<p><a href="https://www.netlify.com/" rel="noopener"><strong>Netlify: All-in-one platform for automating modern web projects</strong></a><br><a href="https://www.netlify.com/" rel="noopener"><em>Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you…</em>www.netlify.com</a></p>
<p>I hope you’ve found this post informative and helpful. I would love to hear your feedback!</p>
<p><strong>Thank you for reading!</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
