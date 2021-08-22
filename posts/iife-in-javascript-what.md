---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg"
tags: [JavaScript]
description: A function created with a function declaration is a Function
author: "Milad E. Fahmy"
title: "IIFE in JavaScript: What Are Immediately Invoked Function Expressions?"
created: "2021-08-15T19:30:50+02:00"
modified: "2021-08-15T19:30:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">IIFE in JavaScript: What Are Immediately Invoked Function Expressions?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc9740569d1a4ca3430.jpg" alt="IIFE in JavaScript: What Are Immediately Invoked Function Expressions?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="function-statement"><strong>Function Statement</strong></h2>
<p>A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function objects. Example:</p><pre><code class="language-javascript">  function statement(item){
console.log('Function statement example '+ item);
}</code></pre>
<h2 id="function-expression"><strong>Function Expression</strong></h2>
<p>A function expression is similar to function statement except that function name can be omitted to create anonymous functions. Example:</p><pre><code class="language-javascript">  var expression = function (item){
console.log('Function expression example '+ item);
}</code></pre>
<h2 id="immediately-invoked-functions-expressions"><strong>Immediately Invoked Functions Expressions</strong></h2>
<p>A soon as function is created it invokes itself doesn’t need to invoke explicitly. In the below example variable iife will store a string that is returned by the function execution.</p><pre><code class="language-javascript">  var iife = function (){
return 'Immediately Invoked Function Expressions(IIFEs) example ';
}();
console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example '</code></pre>
<p>The statement before IIFE should always end with a ; or it will throw an error.</p>
<p><strong><strong>Bad example</strong></strong>:</p><pre><code class="language-javascript">var x = 2 //no semicolon, will throw error
(function(y){
return x;
})(x); //Uncaught TypeError: 2 is not a function</code></pre>
<h2 id="why-use-immediately-invoked-functions-expressions"><strong>Why use Immediately Invoked Functions Expressions?</strong></h2><pre><code class="language-javascript">  (function(value){
var greet = 'Hello';
console.log(greet+ ' ' + value);
})('IIFEs');</code></pre>
<p>In above example when javascript engine execute above code it will create global execution context when it sees code and create function object in memory for IIFE. And when it reaches on line <code>46</code> due to which function is Invoked a new execution context is created on the fly and so greet variable goes into that function execution context not into the global this is what makes it unique. <code>This ensures that code inside IIFE does not interfere with other code or be interfered by another code</code> and so code is safe.</p>
<h4 id="more-information"><strong>More Information</strong></h4>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">Immediately-invoked function expression on Wikipedia</a> </li>
<li><a href="https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do">What does the leading semicolon in JavaScript libraries do?</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
