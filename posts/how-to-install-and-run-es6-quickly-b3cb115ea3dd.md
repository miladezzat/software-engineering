---
card: "https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png"
tags: [JavaScript]
description: As you may know, browsers are starting to catch up with ES6.
author: "Milad E. Fahmy"
title: "How to setup your ES6 environment quickly"
created: "2021-08-15T19:47:24+02:00"
modified: "2021-08-15T19:47:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tutorial tag-tech tag-programming tag-web ">
<header class="post-full-header">
<h1 class="post-full-title">How to setup your ES6 environment quickly</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*seBGHx_gW4Kkeq3Yh66cFw.png" alt="How to setup your ES6 environment quickly">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As you may know, browsers are starting to catch up with ES6. However, not everything works as smooth as expected, and this can be a time-consuming and tedious problem to solve. If something goes wrong, trying to identify if the problem lies in the code or the browser is not an easy process.</p>
<p>But don’t worry, I’ll show you how you can quickly install and write ES6 code, and most importantly, make it compatible to all browsers that support ES5.</p>
<h4 id="es5-to-es6">ES5 to ES6</h4>
<p>In order to write ES6 code, we need to install something that can compile it to ES5. We will be using, <code>Rollup</code>. It compiles small pieces of code into something larger and more complex, such as a library or application. This allows you to use OOP (object-oriented-programming) which makes your code look cleaner, structured and modular, along with other useful functionalities. To clarify, JS is object-oriented, but is not a<strong> class-based</strong> object-oriented language like Java, C++, C#, etc, until the release of ES6.</p>
<p>Otherwise, the closest you can come to OOP in regards to <strong>include classes</strong> with ES5 is to use IIFE (Immediately Invoked Function Expression), or install external libraries. But why rely on external resources when you have a core-language that supports the OOP paradigm? Many of the most widely used programming languages already support it (like C++, Java, C# and PHP).</p>
<h4 id="why-es6">Why ES6?</h4>
<p>Personally, I use it because it allows me to organize my code into separate files, which makes it easier to scale and maintain the code.</p>
<p>For instance, in my HTML, I have one <code>script</code> that loads <code>main.js</code>, and inside <code>main.js</code>, I load multiple <code>JS</code> files using <code>import</code> and <code>export</code> statements. Instead of having multiple scripts in my HTML file, I only need one (less code).</p>
<h4 id="prerequisites">Prerequisites</h4>
<ul>
<li>Linux or macOS (Debian based)</li>
<li>NPM (package manager) installed</li>
<li>Basic CLI knowledge</li>
</ul>
<h3 id="step-one-install-rollup">Step one: Install Rollup</h3>
<p>In order to use <code>Rollup</code> we must install it globally. Remember to use <code>sudo</code>. This allows you to access <code>Rollup</code> commands in whatever project you work with.</p>
<h3 id="step-two-file-structure">Step two: File structure</h3>
<p>After you’ve installed <code>Rollup</code> globally, the next step is to setup up the folder structure and create two folders <code>src</code> and <code>dest</code> inside your project. In addition, create <code>index.html</code>.</p>
<ul>
<li><code>src</code> → ES6 files (Where you’ll write the code)</li>
<li><code>dest</code> → Generates an ES5 (Compiled versions of ES6)</li>
</ul>
<figcaption>Project ES6 folder structure</figcaption>
</figure>
<p>Keep in mind, the <code>bundle.js</code> file is auto-generated when the <code>Rollup</code> command is executed. We will talk about this later.</p>
<h3 id="step-three-create-a-configuration-file">Step three: Create a configuration file</h3>
<p>Create a new file and name it <code>rollup.config.js</code> . Then add this code:</p>
<figcaption>Configuration file for rollup.config.js</figcaption>
</figure>
<p>Make sure that the <code>input</code> and <code>output</code> source path is correct with your folder structure, and that this file is placed in the main folder.</p>
<h3 id="step-four-load-the-script-file-in-html">Step four: Load the script file in HTML</h3>
<p>We are almost ready, but first we need to link to the right source file in our HTML template. This will load the ES5 file which is compiled from ES6.</p>
<figcaption>HTML template loads ES6 script</figcaption>
</figure>
<h3 id="step-five-setup-js-files">Step five: Setup JS files</h3>
<p>In order to verify that the <code>Rollup</code> command works, we need to setup a simple OOP structure. We will create a <code>car.js</code> class, and <code>default export</code> it to <code>main.js</code>.</p>
<p>Keep in mind that this file exports a new instance of the <code>car.js</code> class, and this allows to access the methods directly rather than writing <code>const car = new Car()</code> in the <code>main.js</code> class.</p>
<p>Since I am a lazy software engineer, dealing with a few extra characters of code is time-consuming :)</p>
<figcaption>car.js class</figcaption>
</figure>
<p>Next, import the <code>car.js</code> class to <code>main.js</code> in order to access the method’s <code>type()</code>.</p>
<figcaption>main.js class</figcaption>
</figure>
<h3 id="step-six-compile-es6-to-es5">Step six: Compile ES6 to ES5</h3>
<p>To execute the configuration file we’ve created, run this command <code>$ rollup -c</code> or <code>$ rollup --config</code> — both are the same.</p>
<p>After running one of the commands, open <code>index.html</code> through a browser, then open inspect (<code>ctrl + shift + I</code>) on the browser, and go to <code>console</code>. If you see the text <code>"Tesla Model S"</code>, it means everything worked successfully.</p>
<p>Keep in mind that every time you make changes with ES6 files, you must update it by running the command.</p>
<h3 id="optional">Optional</h3>
<p>Since you have installed <code>Rollup</code> globally, you can compile ES6 without needing to have the file <code>rollup.config.js</code> . It does exactly the same thing:</p>
<p><code>$ rollup src/main.js — o dest/bundle.js — f iife</code></p>
<p>Personally, I would recommend running <code>$ rollup -c</code> as shown in step six since there is less code required. Remember that you must have the file <code>rollup.config.js </code>included when running this command.</p>
<p><em>If you found this short installation approach setup for ES6 useful, please comment and clap. It’s good karma.</em></p>
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
