---
card: "https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg"
tags: [JavaScript]
description: by Tiffany White
author: "Milad E. Fahmy"
title: "Putting Scope in Perspective"
created: "2021-08-15T19:56:10+02:00"
modified: "2021-08-15T19:56:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-women-in-tech tag-learning tag-self-improvement ">
<header class="post-full-header">
<h1 class="post-full-title">Putting Scope in Perspective</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bagtQodHCv1PGtuEX5fMNA.jpeg" alt="Putting Scope in Perspective">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tiffany White</p>
<h1 id="putting-scope-in-perspective">Putting Scope in Perspective</h1>
<p>In JavaScript, <em>lexical scope </em>deals with where your variables are defined, and how they will be accessible — or not accessible — to the rest of your code.</p>
<p>There are two terms to think about when talking about scope: local and global. These two terms are important to understand, because one can be more dangerous than the other when declaring variables and executing your code.</p>
<h4 id="global-scope">Global Scope</h4>
<p>A variable is globally scoped if you declare it outside of all of your functions. For example:</p><pre><code>//global variable, i.e. global scopevar a = "foo";</code></pre><pre><code>function myFunction() {  var b = "bar";  console.log(a+b);}</code></pre><pre><code>myFunction();</code></pre>
<p>When a variable is in the global scope, it can be accessed by all the code in the same JavaScript file. In this example, I’m accessing the variable <em>a</em> in my console.log statement, inside the <em>myFunction</em> function.</p>
<h4 id="local-scope">Local Scope</h4>
<p>Local variables only exist inside functions. They are scoped to that individual function.</p>
<p>You can think of local variables as as any variables that fall between an opening and closing curly brace.</p>
<p>These local variables can’t be accessed by code outside of the function to which they belong.</p>
<p>Take a look at this code:</p><pre><code>//global variable, i.e. global scopevar a = "foo";</code></pre><pre><code>function myFunction() {  //local variable, or local scope  var b = "bar";  console.log(a+b);}</code></pre><pre><code>function yourFunction() {  var c = "JavaScript is fun!";  return c;  console.log(c);}</code></pre><pre><code>myFunction();yourFunction();</code></pre>
<p>Notice how the variables are each declared inside separate functions. They are both local variables, in local scope, and can’t be accessed by one other.</p>
<p>For instance, I can’t return <em>b</em> in <em>yourFunction,</em> because <em>b</em> belongs to <em>myFunction.</em> <em>b</em> can’t be accessed by <em>yourFunction,</em> and vice versa.</p>
<p>If I were to try to return the value of <em>b</em> when calling <em>yourFunction</em>, I’d get “<em>error: b is not defined.</em>” Why? Because <em>b</em> doesn’t belong to <em>yourFunction. b </em>is outside of <em>yourFunction</em>’s scope.</p>
<p>When adding nested conditionals, scope gets even more hairy. But I’ll leave that for another time.</p>
<p>But for now, remember the difference between global scope and local scope. And the next time you get a “<em>is not defined</em>” error, check the variable’s scope.</p>
<p><em>This post also appears at <a href="https://twhite96.github.io" rel="noopener">https://twhite96.github.io</a></em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
