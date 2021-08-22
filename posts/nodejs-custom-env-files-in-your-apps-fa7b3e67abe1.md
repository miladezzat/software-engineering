---
card: "https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png"
tags: [Nodejs]
description: by Erisan Olasheni
author: "Milad E. Fahmy"
title: "How to customize Node.js .env files for different environment stages"
created: "2021-08-15T19:41:19+02:00"
modified: "2021-08-15T19:41:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-tech tag-productivity tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to customize Node.js .env files for different environment stages</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s20L9h0d1TmrZGrxLZAZ7Q.png" alt="How to customize Node.js .env files for different environment stages">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Erisan Olasheni</p>
<h1 id="how-to-customize-node-js-env-files-for-different-environment-stages">How to customize Node.js .env files for different environment stages</h1>
<blockquote><strong><em>Have you ever found yourself in a situation where you needed custom environment variables for different development stages of your app? Here is a one-line solution.</em></strong></blockquote>
<p>Development has been much easier since the invention of the <code>.env</code> file. You can easily set your environment variables and values with the syntax <code>ENV_VARIABLE=VALUE</code> and boom! These variables got loaded as your environment variables, making it possible to get quick access to them:</p><pre><code class="language-bash">console.log(process.env.ENV_VARIABLE)</code></pre>
<p>In case you are still wondering what all this means, well, you are probably new to the <code>.env</code> file. It’s actually a simple configuration text file that is used to define some variables you want to pass into your application’s environment.</p>
<p>This file needs a something like a <strong>parser</strong> to make it work. The parser reads the variable definitions <strong>one-by-one</strong> and parses them to the environment. It uses the format <strong>ENV_VARIABLE=VALUE </strong>(in the case of Node.js: <code>process.env[ENV_VARIABLE]=VALUE</code>).</p>
<p>Of course, this is not a built-in feature in Node.js. You have to engineer it with a popular module called <strong>dotenv</strong>.</p>
<p>It’s a nice workaround, as it has really made development easier between co-developers and across the dev community as a whole. I personally had been using the <strong>dotenv</strong> module, until I got stranded trying to get a solution that could make me use a different configuration file for a particular environment. That would be even cooler…right? Yes! But unfortunately, the <strong>dotenv</strong><em> </em>module doesn’t provide us with this goody.</p>
<p><strong>So what’s next? We need this thing to make development and testing easier across different development stages!</strong></p>
<h3 id="how-about-custom-env-files-for-different-environment-stages">How about custom .env files for different environment stages?</h3>
<p>Don’t you think that would be a good solution? Defining custom environment variables by just creating a <em>.env.envname</em> file? Cool! That is what <strong>custom-env</strong> has come to do.</p>
<p><strong>Custom env is a library built to make development easier by allowing multiple .env configuration for different environments. </strong>This is done by loading environment variables from a .env.envname file into the node’s <code>process.env</code> object.</p>
<h4 id="installation">Installation</h4>
<p>Just grab it with the following command:</p><pre><code class="language-bash">npm i custom-env</code></pre>
<h4 id="usage">Usage</h4><pre><code class="language-bash">require('custom-env').env()</code></pre>
<p>By default, <em>custom-env</em> picks the .env file for your dev stage. However, to customize for a different stage, add the name as a suffix as in <em>.env.envname.</em></p>
<p><strong>Example</strong></p>
<p>We can define a custom environment variable for a <strong>staging development.</strong></p>
<ul>
<li>Create a .env.staging file</li>
<li>Define your variables</li>
</ul><pre><code class="language-bash">APP_ENV=staging
APP_NAME=custom environment app
DB_HOST=localhost
DB_USER=user
DB_PASS=pass</code></pre>
<ul>
<li>Access your variables</li>
</ul><pre><code class="language-js">// Require custom-env and set your preferred env file
require ('custom-env').env('staging')
console.log(process.env.APP_ENV)
console.log(process.env.APP_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASS)</code></pre>
<p><strong>Expected Output</strong></p><pre><code class="language-bash">staging
custom environment app
localhost
user
pass</code></pre>
<p>That’s it, pretty easy. Feel free to define more variables for different stages you think you have, like:</p>
<p><em>.env.testing, .env.staging, .env.server1, .env.server2, .env.localhost</em></p>
<h3 id="set-to-the-current-environment">Set to the Current Environment</h3>
<p>You can tell <em>custom-env</em> to use a configuration that matches your current development stage by passing <strong>true</strong><em> </em>to the <code><em>env()</em></code><em> </em>method.</p>
<p><strong>Example</strong></p>
<p><strong>File: index.js</strong></p><pre><code class="language-js">// Pass true to env() to make it use the current environment stage.
require('custom-env').env(true)
console.log(process.env.APP_NAME)
console.log(process.env.USERNAME)
console.log(process.env.PASSKEY)</code></pre>
<p>Now let’s define a staging configuration file:</p>
<p><strong>File: .env.staging</strong></p><pre><code class="language-bash">APP_NAME=Staging Node App
USER_NAME=John
PASSKEY=J*h*</code></pre>
<p>Now let’s serve node with the staging environment:</p><pre><code class="language-bash">NODE_ENV=staging node index.js</code></pre>
<p><strong>Expected Output</strong></p>
<figcaption>Gets the variables according to the <strong>staging</strong> environment.</figcaption>
</figure>
<p><strong>There you go!</strong></p>
<h3 id="full-documentation">Full Documentation</h3>
<p>For the full documentation of <em>custom-env, </em>visit the <strong>npm page<em> </em></strong><a href="https://www.npmjs.com/package/custom-env" rel="noopener">https://www.npmjs.com/package/custom-env</a></p>
<h3 id="source-code">Source Code</h3>
<p>You can get or contribute to the <em>custom-env<strong> </strong></em>source code at <a href="https://github.com/erisanolasheni/custom-env" rel="noopener">https://github.com/erisanolasheni/custom-env</a></p>
<p><strong><em>Happy Coding!</em></strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
