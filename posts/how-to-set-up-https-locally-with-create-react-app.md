---
card: "/news/content/images/size/w2000/2020/07/react-https.png"
tags: [React]
description: Running HTTPS in development is helpful when you need to cons
author: "Milad E. Fahmy"
title: "How to Setup HTTPS Locally with create-react-app"
created: "2021-08-15T19:28:54+02:00"
modified: "2021-08-15T19:28:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-https tag-http tag-create-react-app tag-how-to ">
<header class="post-full-header">
<h1 class="post-full-title">How to Setup HTTPS Locally with create-react-app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/react-https.png 300w,
/news/content/images/size/w600/2020/07/react-https.png 600w,
/news/content/images/size/w1000/2020/07/react-https.png 1000w,
/news/content/images/size/w2000/2020/07/react-https.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/react-https.png" alt="How to Setup HTTPS Locally with create-react-app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Running HTTPS in development is helpful when you need to consume an API that is also serving requests via HTTPS. </p>
<p>In this article, we will be setting up HTTPS in development for our create-react-app with our own SSL certificate. </p>
<p>This guide is for macOS users and requires that you have <code><a href="https://brew.sh/">brew</a></code> installed. </p>
<h2 id="adding-https">Adding HTTPS</h2>
<p>In your <code>package.json</code>, update the <strong>start</strong> script to include https: </p><pre><code class="language-json">"scripts": {
"start": "HTTPS=true react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},</code></pre>
<p>Running <code>yarn start</code> after this step will show you this screen in your browser:</p>
<p>At this stage, you're already set to go with <code>https</code>. But you don't have a valid certificate, so your connection is assumed to be insecure. </p>
<h2 id="creating-a-ssl-certificate">Creating a SSL Certificate</h2>
<p>The easiest way to obtain a certificate is via <code><a href="https://github.com/FiloSottile/mkcert">mkcert</a></code>.</p><pre><code class="language-bash"># Install mkcert tool
brew install mkcert
# Install nss (only needed if you use Firefox)
brew install nss
# Setup mkcert on your machine (creates a CA)
mkcert -install</code></pre>
<p>After running the above commands, you'll have created a <strong><a href="https://en.wikipedia.org/wiki/Certificate_authority">certificate authority</a> </strong>on your machine which enables you to generate certificates for all of your future projects. </p>
<p>From the root of your <code>create-react-app</code> project, you should now run:</p><pre><code class="language-bash"># Create .cert directory if it doesn't exist
mkdir -p .cert
# Generate the certificate (ran from the root of this project)
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"</code></pre>
<p>We'll be storing our generated certificates in the <code>.cert</code> directory. These should not be committed to version control, so you should update your <code>.gitignore</code> to include the <code>.cert</code> directory. </p>
<p>Next, we need to update the <code>start</code> script again to include our newly created certificate:</p><pre><code class="language-json">  "scripts": {
"start": "HTTPS=true SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},</code></pre>
<p>When you run <code>yarn start</code> again, you should now see that your connection is secure. </p>
<p>Don't be a stranger! Feel free to write if you have any questions - <a href="https://www.linkedin.com/in/braedon-gough-ba92a048/">connect with me on Linkedin</a> or <a href="https://twitter.com/bbbraedddon">follow me on Twitter</a>.</p>
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
