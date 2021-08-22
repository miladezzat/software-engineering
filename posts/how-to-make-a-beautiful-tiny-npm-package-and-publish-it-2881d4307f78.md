---
card: "https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm"
tags: [JavaScript]
description: "You won’t believe how easy it is!"
author: "Milad E. Fahmy"
title: "How to make a beautiful, tiny npm package and publish it"
created: "2021-08-16T11:39:42+02:00"
modified: "2021-08-16T11:39:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-npm tag-nodejs tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to make a beautiful, tiny npm package and publish it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm 300w,
https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm 600w,
https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm 1000w,
https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*7m8mTkj_Fp916sdm" alt="How to make a beautiful, tiny npm package and publish it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You won’t believe how easy it is!</p><p>If you’ve created lots of npm modules, you can skip ahead. Otherwise, we’ll go through a quick intro.</p><h4 id="tl-dr">TL;DR</h4><p>An npm module <strong>only</strong> requires a package.json file with <strong>name</strong> and <strong>version</strong> properties.</p><h3 id="hey-">Hey!</h3><p>There you are.</p><p>Just a tiny elephant with your whole life ahead of you.</p><p>You’re no expert in making npm packages, but you’d love to learn how.</p><p>All the big elephants stomp around with their giant feet, making package after package, and you’re all like:</p><blockquote>“I can’t compete with that.”</blockquote><p>Well I’m here to tell that you you can!</p><p>No more self doubt.</p><p>Let’s begin!</p><h4 id="you-re-not-an-elephant">You’re not an Elephant</h4><p>I meant that <a href="https://www.merriam-webster.com/dictionary/metaphorical" rel="noopener">metaphorically</a>.</p><p>Ever wondered what baby elephants are called?</p><p><em>Of course you have. </em>A baby elephant is called a <a href="https://www.reference.com/pets-animals/baby-elephant-called-a3893188e0a63095" rel="noopener">calf</a>.</p><h4 id="i-believe-in-you">I believe in you</h4><p><a href="https://en.wikipedia.org/wiki/Impostor_syndrome" rel="noopener">Self doubt</a> is real.</p><p>That’s why no one ever does anything cool.</p><p>You think you won’t succeed, so instead you do nothing. But then you glorify the people doing all the awesome stuff.</p><p>Super ironic.</p><p>That’s why I’m going to show you the tiniest possible npm module.</p><p>Soon you’ll have hoards of npm modules flying out of your finger tips. Reusable code as far as the eye can see. No tricks — no complex instructions.</p><h3 id="the-complex-instructions">The Complex Instructions</h3><p>I promised I wouldn’t…</p><p>…but I totally did.</p><p>They’re not that bad. You’ll forgive me one day.</p><h4 id="step-1-npm-account"><strong>Step 1: npm account</strong></h4><p>You need one. It’s just part of the deal.</p><p><a href="https://www.npmjs.com/signup" rel="noopener">Signup here</a>.</p><h4 id="step-2-login">Step 2: login</h4><p>Did you make an npm account?</p><p>Yeah you did.</p><p>Cool.</p><p>I’m also assuming you can use the <a href="https://www.davidbaumgold.com/tutorials/command-line/" rel="noopener">command line / console</a> etc. I’m going to be calling it the terminal from now on. There’s a difference <a href="https://superuser.com/questions/144666/what-is-the-difference-between-shell-console-and-terminal" rel="noopener">apparently</a>.</p><p>Go to your terminal and type:</p><pre><code class="language-bash">npm adduser</code></pre><p>You can also use the command:</p><pre><code class="language-bash">npm login</code></pre><p>Pick whichever command jives with you.</p><p>You’ll get a prompt for your <strong>username</strong>, <strong>password</strong> and <strong>email</strong>. Stick them in there!</p><p>You should get a message akin to this one:</p><pre><code>Logged in as bamblehorse to scope @username on https://registry.npmjs.org/.</code></pre><p>Nice!</p><h3 id="let-s-make-a-package">Let’s make a package</h3><p>First we need a folder to hold our code. Create one in whichever way is comfortable for you. I’m calling my package <strong>tiny</strong> because it really is very small. I’ve added some terminal commands for those who aren’t familiar with them.</p><pre><code class="language-bash">md tiny</code></pre><p>In that folder we need a <a href="https://docs.npmjs.com/files/package.json" rel="noopener"><strong>package.json</strong></a> file. If you already use <a href="https://en.wikipedia.org/wiki/Node.js" rel="noopener">Node.js</a> — you’ve met this file before. It’s a <a href="https://en.wikipedia.org/wiki/JSON" rel="noopener">JSON</a> file which includes information about your project and has a plethora of different options. In this tutorial, we are only going to focus on two of them.</p><pre><code class="language-bash">cd tiny &amp;&amp; touch package.json</code></pre><h4 id="how-small-can-it-really-be-though">How small can it really be, though?</h4><p>Really small.</p><p>All tutorials about making an npm package, including the official documentation, tell you to enter certain fields in your package.json. We’re going to keep trying to publish our package with as little as possible until it works. It’s a kind of <a href="https://en.wikipedia.org/wiki/Test-driven_development" rel="noopener">TDD</a> for a minimal npm package.</p><p><strong>Please note: </strong>I’m showing you this to demonstrate that making an npm package doesn’t have to be complicated. To be useful to the community at large, a package needs a few extras, and we’ll cover that later in the article.</p><h4 id="publishing-first-attempt">Publishing: First attempt</h4><p>To publish your npm package, you run the well-named command: <strong>npm publish.</strong></p><p>So we have an empty package.json in our folder and we’ll give it a try:</p><pre><code class="language-bash">npm publish</code></pre><p>Whoops!</p><p>We got an error:</p><pre><code>npm ERR! file package.json
npm ERR! code EJSONPARSE
npm ERR! Failed to parse json
npm ERR! Unexpected end of JSON input while parsing near ''
npm ERR! File: package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
npm ERR!
npm ERR! Tell the package author to fix their package.json file. JSON.parse</code></pre><p>npm doesn’t like that much.</p><p>Fair enough.</p><h4 id="publishing-strike-two">Publishing: Strike two</h4><p>Let’s give our package a name in the package.json file:</p><pre><code class="language-json">{
"name": "@bamlehorse/tiny"
}</code></pre><p>You might have noticed that I added my npm username onto the beginning.</p><p>What’s that about?</p><p>By using the name <strong>@bamblehorse/tiny </strong>instead of just <strong>tiny</strong>, we create a package under the <strong>scope</strong> of our username. It’s called a <a href="https://docs.npmjs.com/misc/scope" rel="noopener"><strong>scoped package</strong></a>. It allows us to use short names that might already be taken, for example the <a href="https://www.npmjs.com/package/tiny" rel="noopener"><strong>tiny</strong> package</a> already exists in npm.</p><p>You might have seen this with popular libraries such as the <a href="https://angular.io/" rel="noopener">Angular framework</a> from Google. They have a few scoped packages such as <a href="https://www.npmjs.com/package/@angular/core" rel="noopener">@angular/core</a> and <a href="https://www.npmjs.com/package/@angular/http" rel="noopener">@angular/http</a>.</p><p>Pretty cool, huh?</p><p>We’ll try and publish a second time:</p><pre><code class="language-bash">npm publish</code></pre><p>The error is smaller this time — progress.</p><pre><code>npm ERR! package.json requires a valid “version” field</code></pre><p>Each npm package needs a version so that developers know if they can safely update to a new release of your package without breaking the rest of their code. The versioning system npm using is called <a href="https://semver.org/" rel="noopener"><strong>SemVer</strong></a>, which stands for <strong>Semantic Versioning</strong>.</p><p>Dont worry too much about understanding the more complex version names but here’s their summary of how the basic ones work:</p><blockquote>Given a version number MAJOR.MINOR.PATCH, increment the:</blockquote><blockquote>1. MAJOR version when you make incompatible API changes,</blockquote><blockquote>2. MINOR version when you add functionality in a backwards-compatible manner, and</blockquote><blockquote>3. PATCH version when you make backwards-compatible bug fixes.</blockquote><blockquote>Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.</blockquote><blockquote><a href="https://semver.org/" rel="noopener">https://semver.org</a></blockquote><h4 id="publishing-the-third-try"><strong>Publishing: The third try</strong></h4><p>We’ll give our package.json the version: <strong>1.0.0</strong> — the first major release.</p><pre><code class="language-json">{
"name": "@bamblehorse/tiny",
"version": "1.0.0"
if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
return string.replace(/\s/g, "");
"name": "@bamblehorse/tiny",
"version": "1.0.0",
"description": "Removes all spaces from a string",
"license": "MIT",
"repository": "bamblehorse/tiny",
"main": "index.js",
"keywords": [
"tiny",
"npm",
"package",
"bamblehorse"
]
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
