---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png"
tags: [JavaScript]
description: "There are times when it’s desirable to break up your styleshe"
author: "Milad E. Fahmy"
title: "Ember QuickTips: How to breakup and import SASS/CSS files separately"
created: "2021-08-16T11:33:40+02:00"
modified: "2021-08-16T11:33:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ember tag-sass tag-css tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Ember QuickTips: How to breakup and import SASS/CSS files separately</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZVmLA6aPZFWbG6UDK5nEfw.png" alt="Ember QuickTips: How to breakup and import SASS/CSS files separately">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are times when it’s desirable to <strong>break up your stylesheets into multiple files and import them into your project separately</strong>. This came up in a side project I started recently, and I thought y’all might benefit from what I came up with as a solution. It’s a quick and easy method, so let’s get started ?</p><p>When you begin a new EmberJS app you’ll notice that the <code>index.html</code> file imports the main stylesheet into the app like so:</p><pre><code class="language-html">&lt;head&gt;
...
&lt;link
integrity=""
rel="stylesheet"
href="{{rootURL}}assets/test-app.css"
&gt;
...
&lt;/head&gt;</code></pre><p><code>test-app.css</code> is compiled directly from your project. When we write our custom styles in <code>app/styles/app.css</code> they get put into this file.</p><p>Now, what if we don’t want to import all of our styles into the app as a single stylesheet? <strong>How can we breakup our styles and import multiple stylesheets into the app?</strong> Something like this:</p><pre><code class="language-html">&lt;head&gt;
...
&lt;link
integrity=""
rel="stylesheet"
href="{{rootURL}}assets/test-app.css"
&gt;
&lt;link
integrity=""
rel="stylesheet"
href="{{rootURL}}assets/second-stylesheet.css"
&gt;
...
width: 100vw;
height: 100vh;
background-color: red;
}</code></pre><p>A glaring red background would be very obvious, yet when you run the server you see nothing but a sea of white. Why is this?</p><p>If your instinct was to import it into the project as specified above, you would be correct:</p><pre><code class="language-html">&lt;head&gt;
...
&lt;link
integrity=""
rel="stylesheet"
href="{{rootURL}}assets/second-stylesheet.css"
&gt;
...
&lt;/head&gt;</code></pre><p>Yet, it still doesn’t show up. Why? ? That’s because the build pipeline hasn’t been configured to build this file in the correct folder just yet.</p><h3 id="step-three-configure-ember-cli-build">Step Three: Configure Ember-CLI-Build</h3><p>The final step is to tell the Ember app that you have a <code>css</code> file to include in its build pipeline.</p><p>In <code>ember-cli-build.js</code> add the following:</p><pre><code class="language-js">...
module.exports = function(defaults) {
let app = new EmberApp(defaults, {
// Add options here
outputPaths: {
app: {
css: {
'second-stylesheet': '/assets/second-stylesheet.css'
}
}
}
});
...
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
