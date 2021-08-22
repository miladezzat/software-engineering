---
card: "https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png"
tags: [JavaScript]
description: by Jamie Kyle
author: "Milad E. Fahmy"
title: "Setting up Flow when you’ve already got Babel in place"
created: "2021-08-15T19:54:48+02:00"
modified: "2021-08-15T19:54:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-flowtype tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Setting up Flow when you’ve already got Babel in place</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*S3mUOCWvhWPralT0YbcdRA.png" alt="Setting up Flow when you’ve already got Babel in place">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jamie Kyle</p>
<h1 id="setting-up-flow-when-you-ve-already-got-babel-in-place">Setting up Flow when you’ve already got Babel in place</h1>
<p>Flow is a static type checker for JavaScript. It makes you more productive by providing feedback as you write code. Flow gives you warnings in real-time that point out when you’ve made a mistake. If you would like to know more, check out <a href="https://flowtype.org/" rel="noopener">flowtype.org</a>.</p>
<p>Rather than trying to build it’s own entirely separate ecosystem, Flow hooks into the existing JavaScript ecosystem. Using Babel to compile your code is one of the easiest ways to integrate Flow into a project.</p>
<p>After two years of hard work, Babel works pretty much everywhere, just take a look at the setup page with integrations for <a href="http://babeljs.io/docs/setup/" rel="noopener">every build tool you can imagine</a>.</p>
<p>If you don’t have Babel set up yet, you can use that guide to get set up. You also might want to checkout my <a href="https://github.com/thejameskyle/babel-handbook" rel="noopener">handbook on Babel</a>.</p>
<h3 id="setting-up-flow-on-top-of-babel">Setting up Flow on top of Babel</h3>
<p>Once you have Babel set up, it’s easy to get going with Flow. First lets install two dependencies:</p><pre><code>$ npm install --save-dev babel-plugin-transform-flow-strip-types$ npm install --global flow-bin</code></pre>
<p>The Babel plugin is there in order to strip Flow types away so that your program runs. <strong>flow-bin</strong> is how you use Flow from the command line.</p>
<p>Next, let’s add the Babel plugin to your <strong>.babelrc </strong>(or where-ever you are configuring Babel with options):</p><pre><code>{  presets: [...],  plugins: [..., "transform-flow-strip-types"]}</code></pre>
<blockquote><strong>Note:</strong> I’m assuming you are using Babel 6 for this tutorial. It is recommended that you <a href="http://babeljs.io/blog/2015/10/31/setting-up-babel-6" rel="noopener">upgrade</a> if you have not already.</blockquote>
<p>Finally we’ll run <strong>flow init</strong> in our directory, which will create a <strong>.flowconfig </strong>file that should look like this:</p><pre><code>[ignore]</code></pre><pre><code>[include]</code></pre><pre><code>[libs]</code></pre><pre><code>[options]</code></pre>
<p>Awesome! Now we have Flow all set up in your project. How about we start making it run on some files?</p>
<h3 id="getting-flow-running">Getting Flow running</h3>
<p>Flow is designed to be introduced to your repo incrementally. That means that you don’t have to add it to your whole codebase all at once. Instead, you can add it file-by-file as you go. Let’s start with something simple to get you going.</p>
<p>First, try to find a file that doesn’t have a lot of complexity or external dependencies. Something with just a handful of plain functions to get started with.</p><pre><code>import {getNumberFromString} from "string-math-lib";</code></pre><pre><code>export function multiplyStrings(a, b) {  return getNumberFromString(a) * getNumberFromString(b);}</code></pre>
<p>In order to get Flow running on this file, we need to add a “flow pragma” comment at the top like this:</p><pre><code>// @flow</code></pre><pre><code>import {getNumberFromString} from "string-math-lib";</code></pre><pre><code>export function multiplyStrings(a, b) {  return getNumberFromString(a) * getNumberFromString(b);}</code></pre>
<p>This little comment at the top of the file tells Flow “Okay, I want you to type-check this file”.</p>
<p>Now we need to actually run Flow for the first time. In order to do that, you’ll need to switch back to your terminal and run the following command:</p><pre><code>$ flow</code></pre>
<blockquote><strong>Note: </strong>This command is an alias of <strong>flow status</strong>.</blockquote>
<p>What this command does is start up a Flow server and asks it for the “status” of your repo, which will most likely return some errors for you to fix.</p>
<p>The most common errors that you’re gonna see in a new file are:</p>
<ul>
<li>“Missing annotation”</li>
<li>“Required module not found”</li>
</ul>
<p>These errors are related to imports and exports. The reason they come up is a result of how Flow works. In order to check types across files, Flow looks directly at the imports and exports of each file.</p>
<h4 id="-missing-annotation-"><strong>“Missing annotation”</strong></h4>
<p>You’ll see an error like this from Flow because it relates somehow to an export of your file. Other than that Flow won’t complain about missing type annotations.</p>
<p>So in order to fix that, we can start adding some types to your file. For a detailed guide on how to do that <a href="https://flowtype.org/docs/type-annotations.html" rel="noopener">see the user guide</a>. What you should end up is with some types like this:</p><pre><code>import {getNumberFromString} from "string-math-lib";</code></pre><pre><code>export function multiplyStrings(a: string, b: string): number {  return getNumberFromString(a) * getNumberFromString(b);}</code></pre>
<p>Keep running <strong>flow</strong> as you add your types to see the effects of what you are doing. Eventually you should be able to clear out all the “Missing annotation” errors.</p>
<h4 id="-required-module-not-found-">“Required module not found”</h4>
<p>You’ll get these errors whenever you an import/require that can’t be resolved using Node’s normal module algorithm or if you have ignored it with your <strong>.flowconfig</strong>.</p>
<p>This can be caused by a lot of things, maybe you’re using a special webpack resolver, maybe you forgot to install something. Whatever the reason, Flow needs to be able to find the module you are importing to do its job correctly. You have a couple options on how to solve this:</p>
<ol>
<li><strong>module.name_mapper — </strong>specify a regular expression to match against module names, and a replacement pattern.</li>
<li>Create a library definition for the missing module</li>
</ol>
<p>We’ll focus on creating a library definition for the module, if you need to use <strong>module.name_mapper </strong>you can see more about it <a href="https://flowtype.org/docs/advanced-configuration.html#options" rel="noopener">in the documentation</a>.</p>
<h4 id="creating-a-library-definition">Creating a library definition</h4>
<p>Having library definitions is useful for giving types to the packages you have installed that don’t have types. Let’s set one up for our <strong>string-math-lib </strong>library from the previous example.</p>
<p>First create a <strong>flow-typed </strong>directory in your root directory (the directory where you put your <strong>.flowconfig</strong>).</p>
<blockquote>You can use other directory names using the <strong>[lib]</strong> section of your <strong>.flowconfig</strong>. However, using <strong>flow-typed</strong> will work out of the box.</blockquote>
<p>Now we’ll create a <strong>flow-typed/string-math-lib.js</strong> file to hold our “libdef” and start it off like this:</p><pre><code>declare module "string-math-lib" {  // ...}</code></pre>
<p>Next we just need to write definitions for exports of that module.</p><pre><code>declare module "string-math-lib" {  declare function getNumberFromString(str: string): number}</code></pre>
<blockquote><strong>Note:</strong> If you need to document the “default” or primary export, you can do that with <strong>declare module.exports: </strong>or<strong> declare export default</strong></blockquote>
<p>There’s a lot more to library definitions so you should read through the <a href="https://flowtype.org/docs/declarations.html" rel="noopener">documentation</a> and read <a href="https://medium.com/@thejameskyle/flow-mapping-an-object-373d64c44592" rel="noopener">this blog post on how to create high-quality libdefs</a>.</p>
<h4 id="installing-a-libdef-from-flow-typed">Installing a libdef from flow-typed</h4>
<p>Because libdefs can consume a lot of time, we maintain an official repository of high-quality libdefs for all sorts of packages called <a href="https://github.com/flowtype/flow-typed" rel="noopener">flow-typed</a>.</p>
<p>To get started with flow-typed, install the command line interface (CLI) globally:</p><pre><code>$ npm install --global flow-typed</code></pre>
<p>Now you can look within <a href="https://github.com/flowtype/flow-typed/tree/master/definitions/npm" rel="noopener"><strong>flow-typed/definitions/npm</strong></a><strong> </strong>to see if there’s an existing libdef for a package you want to use, if there is you can install it like this:</p><pre><code>$ flow-typed install chalk@1.0.0 --flowVersion 0.30</code></pre>
<p>This tells flow-typed that you want to install the <strong>chalk</strong> package at the <strong>1.0.0</strong> version when you are running Flow <strong>0.30</strong>.</p>
<p>The <strong>flow-typed</strong> CLI is still in beta and there is a lot of improvements planned for it, so expect this to improve a lot in the near future.</p>
<p>Be sure to contribute back to the flow-typed libdefs. It’s a community effort, and the more people that contribute, the better it gets.</p>
<h4 id="other-errors-you-might-run-into-">Other errors you might run into:</h4>
<p>Hopefully, we’ve covered just about everything that you will run into while getting started with Flow. However, you also might run into some errors like this:</p>
<ul>
<li>Package inside of <strong>node_modules</strong> is reporting errors</li>
<li>Reading <strong>node_modules</strong> is taking a really long time</li>
<li>Malformed JSON inside <strong>node_modules</strong> is causing errors</li>
</ul>
<p>There’s a handful of reasons for these types of errors that I won’t get into in this post (I’m working on detailed documentation for each individual error). For now, in order to keep yourself moving, you can just <strong>[ignore] </strong>the files that are causing these errors.</p>
<p>This means adding file paths to your <strong>[ignore]</strong> section in your <strong>.flowconfig </strong>like this:</p><pre><code>[ignore]./node_modules/package-name/*./node_modules/other-package/tests/*.json</code></pre><pre><code>[include]</code></pre><pre><code>[libs]</code></pre><pre><code>[options]</code></pre>
<p>There is generally better options than this, but this should give you a good place to start.</p>
<blockquote>For some examples of how to better handle errors within node_modules see this <a href="http://stackoverflow.com/questions/38225538/flow-type-checker-errors-in-node-modules/38264353#38264353" rel="noopener">Stack Overflow answer about fbjs</a>.</blockquote>
<h4 id="pro-tip-checking-to-see-how-well-you-re-covered"><strong>Pro tip: Checking to see how well you’re covered</strong></h4>
<p>If you’re ever wondering how well a file is covered by Flow, you can use the following command to see a coverage report:</p><pre><code>$ flow coverage path/to/file.js --color</code></pre>
<h3 id="additional-resources-and-support">Additional Resources and Support</h3>
<p>There’s lots that was not covered by this article. So here are some links to resources that can help you out.</p>
<ul>
<li><a href="https://flowtype.org/" rel="noopener">Flow Website</a></li>
<li><a href="https://flowtype.org/try/" rel="noopener">Try Flow Online</a></li>
<li><a href="https://github.com/facebook/flow" rel="noopener">Flow GitHub</a></li>
<li><a href="http://stackoverflow.com/questions/tagged/flowtype" rel="noopener">Stack Overflow #flowtyped</a></li>
</ul>
<p>The Flow team is committed to making sure that everyone has an excellent experience using Flow. If that is ever not true, we’d love to hear from you about how to improve.</p>
<p>Follow <a href="https://twitter.com/thejameskyle" rel="noopener">James Kyle on twitter</a>. Follow <a href="https://twitter.com/flowtype" rel="noopener">Flow on twitter</a> too.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
