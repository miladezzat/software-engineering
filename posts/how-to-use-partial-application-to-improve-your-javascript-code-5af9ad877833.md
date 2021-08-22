---
card: "https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg"
tags: [Functional Programming]
description: by Rick Henry
author: "Milad E. Fahmy"
title: "How to use partial application to improve your JavaScript code"
created: "2021-08-15T19:36:11+02:00"
modified: "2021-08-15T19:36:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-tech tag-javascript tag-software-development tag-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to use partial application to improve your JavaScript code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wj-ZuazaL-hq_6keyoVbGA.jpeg" alt="How to use partial application to improve your JavaScript code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rick Henry</p>
<h1 id="how-to-use-partial-application-to-improve-your-javascript-code">How to use partial application to improve your JavaScript code</h1>
<h4 id="making-use-of-this-functional-technique-can-make-your-code-more-elegant">Making use of this functional technique can make your code more elegant</h4>
<p>Functional programming gives us techniques to solve problems in our code. One of these, partial application, is a little tricky to understand but it can allow us to write less of it (sounds interesting, right?).</p>
<h4 id="what-is-it">What is it?</h4>
<p>Partial application starts with a function. We take this function and create a new one with one or more of its arguments already “set” or <em>partially applied</em>. This sounds odd, but it will reduce the number of parameters needed for our functions.</p>
<p>Let’s give some context around when we could use partial application:</p><pre><code>const list = (lastJoin, ...items) =&gt; {  const commaSeparated = items.slice(0,-1).join(", ");  const lastItem = items.pop();  return `${commaSeparated} ${lastJoin} ${lastItem}`;}</code></pre>
<p>This little function takes in a single word, <code>lastJoin</code>, and an arbitrary number of <code>items</code>. Initially, <code>list</code> declares a <code>commaSeparated</code> variable. This variable stores a comma separated joined array of all the elements except the last. On the next line we store the last item in <code>items</code> in a <code>lastItem</code> variable. The function then returns using a string template.</p>
<p>The function then returns the <code>items</code>, as a string, in list format. For example:</p><pre><code>list("and", "red", "green", "blue");     // "red, green and blue"list("with", "red", "green", "blue");    // "red, green with blue"list("or", "red", "green", "blue");      // "red, green or blue"</code></pre>
<p>Our <code>list</code> function allows us to create lists when we want. Each type of list we create, “and”, “with”, “or” is a specialisation of the general <code>list</code> function. Wouldn’t it be nice if they could be functions of their own?!</p>
<h4 id="how-to-use-partial-application">How to use partial application</h4>
<p>This is where partial application can help. For example, to make a <code>listAnd</code> function, we “set” (or <em>partially apply</em>) the <code>lastJoin</code> argument to be “and”. The result of doing this means we can invoke our partially applied function like this:</p><pre><code>listAnd("red", "green", "blue");    // "red, green and blue"</code></pre>
<p>It doesn’t need to stop there either. We can make many specialised functions by <em>partially applying</em> an argument to our list function:</p><pre><code>listOr("red", "green", "blue");      // "red, green or blue"listWith("red", "green", "blue");    // "red, green with blue"</code></pre>
<p>To do this, we need to create a <code>partial</code> utility function:</p><pre><code>const partial = (fn, firstArg) =&gt; {  return (...lastArgs) =&gt; {    return fn(firstArg, ...lastArgs);  }}</code></pre>
<p>This function takes a function <code>fn</code> as it’s first parameter and <code>firstArg</code> as its second. It returns a brand new function with one parameter, <code>lastArgs</code>. This gathers up the passed in arguments.</p>
<p>Now to make our <code>listAnd</code> function we invoke <code>partial</code> passing in our <code>list</code> function and our last join word:</p><pre><code>const listAnd = partial(list, "and");</code></pre>
<p>Our <code>listAnd</code> function now only takes an arbitrary list of items. This function when invoked will, in turn, invoke the passed in <code>list</code> function. We can see that it will be passed “and” as the first argument and the gathered <code>lastArgs</code> thereafter.</p>
<p>We’ve now created a partially applied function. We can use this specialised function over and over again in our program:</p><pre><code>listAnd("red", "green", "blue");    // "red, green and blue"</code></pre>
<h4 id="taking-it-further"><strong>Taking it further</strong></h4>
<p>The <code>partial</code> function we created is to illustrate how partial application works. There are some great functional JavaScript libraries available which have this utility built in, such as <a href="https://ramdajs.com/docs/#partial" rel="noopener">Ramda JS</a>.</p>
<p>It’s worth noting that even if you are new to partial application as a concept there is every chance you have been using it. If you have ever used the <code>.bind()</code> method on a function this is an example of partial application. It’s common practice to pass <code>this</code> into bind to set its context. Under the hood it’s partially applying <code>this</code> and returning a new function.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
