---
card: "https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png"
tags: [JavaScript]
description: by Yash Agrawal
author: "Milad E. Fahmy"
title: "How to use the JavaScript console: going beyond console.log()"
created: "2021-08-15T19:34:42+02:00"
modified: "2021-08-15T19:34:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-tech tag-programming tag-debugging ">
<header class="post-full-header">
<h1 class="post-full-title">How to use the JavaScript console: going beyond console.log()</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*98a_Z2uEDzLDmjPM4k37iQ.png" alt="How to use the JavaScript console: going beyond console.log()">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Yash Agrawal</p>
<h1 id="how-to-use-the-javascript-console-going-beyond-console-log-">How to use the JavaScript console: going beyond console.log()</h1>
<p>One of the easiest ways to debug anything in JavaScript is by logging stuff using <code>console.log</code>. But there are a lot of other methods provided by the console that can help you debug better.</p>
<p>Let’s get started.</p>
<p>The very basic use case is to log a string or a bunch of JavaScript objects. Quite simply,</p><pre><code>console.log('Is this working?');</code></pre>
<p>Now, imagine a scenario when you have a bunch of objects you need to log into the console.</p><pre><code>const foo = { id: 1, verified: true, color: 'green' };const bar = { id: 2, verified: false, color: 'red' };</code></pre>
<p>The most intuitive way to log this is to just <code>console.log(variable)</code> one after the other. The problem is more apparent when we see how it shows up on the console.</p>
<figcaption>No variable names visible</figcaption>
</figure>
<p>As you can see, no variable names are visible. It gets extremely annoying when you have a bunch of these and you have to expand the little arrow on the left to see what exactly the name of the variable is. Enter computed property names. This allows us to basically club all the variables together in a single <code>console.log({ foo, bar });</code> and the output is easily visible. This also reduces the number of <code>console.log</code> lines in our code.</p>
<h4 id="console-table-">console.table()</h4>
<p>We can take this a step further by putting all of these together in a table to make it more readable. Whenever you have objects with common properties or an array of objects use <code>console.table()</code> . Here we can use <code>console.table({ foo, bar})</code> and the console shows:</p>
<figcaption>console.table in action</figcaption>
</figure>
<h4 id="console-group-">console.group()</h4>
<p>This can be used when you want to group or nest relevant details together to be able to easily read the logs.</p>
<p>This can also be used when you have a few log statements within a function and you want to be able to clearly see the scope corresponding to each statement.</p>
<p>For example, if you’re logging a user’s details:</p><pre><code>console.group('User Details');console.log('name: John Doe');console.log('job: Software Developer');</code></pre><pre><code>// Nested Groupconsole.group('Address');console.log('Street: 123 Townsend Street');console.log('City: San Francisco');console.log('State: CA');console.groupEnd();</code></pre><pre><code>console.groupEnd();</code></pre>
<figcaption>Grouped logs</figcaption>
</figure>
<p>You can also use <code>console.groupCollapsed()</code> instead of <code>console.group()</code>if you want the groups to be collapsed by default. You would need to hit the descriptor button on the left to expand.</p>
<h4 id="console-warn-console-error-">console.warn() &amp; console.error()</h4>
<p>Depending on the situation, to make sure your console is more readable you can add logs using <code>console.warn()</code> or <code>console.error()</code> . There’s also <code>console.info()</code> which displays an ‘i’ icon in some browsers.</p>
<figcaption>warning and error logs</figcaption>
</figure>
<p>This can be taken a step further by adding custom styling. You can use a <code>%c</code> directive to add styling to any log statement. This can be used to differentiate between API calls, user events, etc by keeping a convention. Here’s an example:</p><pre><code>console.log('%c Auth ',             'color: white; background-color: #2274A5',             'Login page rendered');console.log('%c GraphQL ',             'color: white; background-color: #95B46A',             'Get user details');console.log('%c Error ',             'color: white; background-color: #D33F49',             'Error getting user details');</code></pre>
<p>You can also change the <code>font-size</code> , <code>font-style</code> and other CSS things.</p>
<figcaption>Styling console.log statements</figcaption>
</figure>
<h4 id="console-trace-">console.trace()</h4>
<p><code>console.trace()</code> outputs a stack trace to the console and displays how the code ended up at a certain point. There are certain methods you’d only like to call once, like deleting from a database. <code>console.trace()</code> can be used to make sure the code is behaving the way we want it to.</p>
<h4 id="console-time-">console.time()</h4>
<p>Another important thing when it comes to frontend development is that the code needs to be fast. <code>console.time()</code> allows timing of certain operations in the code for testing.</p><pre><code>let i = 0;</code></pre><pre><code>console.time("While loop");while (i &lt; 1000000) {  i++;}console.timeEnd("While loop");</code></pre><pre><code>console.time("For loop");for (i = 0; i &lt; 1000000; i++) {  // For Loop}console.timeEnd("For loop");</code></pre>
<figcaption>console.time() output for loops</figcaption>
</figure>
<p>Hopefully, the article provided some information on various ways to use the console. If you have any questions or want me to elaborate please leave me a note below or reach out to me on <a href="http://twitter.com/yagrawl" rel="noopener">twitter</a> or <a href="mailto:yagrawl2@gmail.com" rel="noopener">email</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
