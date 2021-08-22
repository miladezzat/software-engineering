---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg"
tags: [JavaScript]
description: bind is a method on the prototype of all functions in JavaScr
author: "Milad E. Fahmy"
title: "function.prototype.bind and function.prototype.length in JavaScript Explained"
created: "2021-08-15T19:31:33+02:00"
modified: "2021-08-15T19:31:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">function.prototype.bind and function.prototype.length in JavaScript Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e57740569d1a4ca3c94.jpg" alt="function.prototype.bind and function.prototype.length in JavaScript Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="function-bind">Function Bind</h2>
<p><code>bind</code> is a method on the prototype of all functions in JavaScript. It allows you to create a new function from an existing function, change the new function’s <code>this</code> context, and provide any arguments you want the new function to be called with. The arguments provided to <code>bind</code> will precede any arguments that are passed to the new function when it is called.</p>
<h3 id="using-bind-to-change-this-in-a-function"><strong>Using <code>bind</code> to change <code>this</code> in a function</strong></h3>
<p>The first argument provided to <code>bind</code> is the <code>this</code> context the function will be bound to. If you do not want to change the value of <code>this</code> pass <code>null</code> as the first argument.</p>
<p>You are tasked with writing code to update the number of attendees as they arrive at a conference. You create a simple webpage that has a button that, when clicked, increments the <code>numOfAttendees</code> property on the confrence object. You use jQuery to add a click handler to your button, but after clicking the button the confrence object has not changed. Your code might look something like this.</p><pre><code class="language-javascript">var nodevember = {
numOfAttendees: 0,
incrementNumOfAttendees: function() {
this.numOfAttendees++;
}
// other properties
};
$('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees);</code></pre>
<p>This is a common problem when working with jQuery and JavaScript. When you click the button the <code>this</code> keyword in the method you passed to jQuery’s <code>on</code> method references the button and not the conference object. You can bind the <code>this</code> context of your method to solve the problem.</p><pre><code class="language-javascript">var nodevember = {
numOfAttendees: 0,
incrementNumOfAttendees: function() {
this.numOfAttendees++;
}
// other properties
};
$('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember));</code></pre>
<p>Now when the button is clicked <code>this</code> references the <code>nodevember</code> object.</p>
<h3 id="providing-arguments-to-a-function-with-bind"><strong>Providing arguments to a function with <code>bind</code></strong></h3>
<p>Each argument passed to <code>bind</code> after the first will precede any arguments passed when the function is called. This allows you to pre-apply arguments to a function. In the example below, <code>combineStrings</code> takes two strings and concatenates them together. <code>bind</code> is then used to create a function that always provides “Cool” as the first string.</p><pre><code class="language-javascript">function combineStrings(str1, str2) {
return str1 + " " + str2
}
var makeCool = combineStrings.bind(null, "Cool");
makeCool("trick"); // "Cool trick"</code></pre>
<p>The guide on <a href="https://guide.freecodecamp.org/javascript/this-reference" rel="nofollow">this reference</a> has more information about how what the <code>this</code> keyword references can change.</p>
<p>More details on the <code>bind</code> method can be found on Mozilla’s <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" rel="nofollow">MDN docs</a>.</p>
<h2 id="function-length"><strong>Function Length</strong></h2>
<p>The <code>length</code> property on the function object holds the number of arguments expected by the function when called.</p><pre><code class="language-javascript">function noArgs() { }
function oneArg(a) { }
console.log(noArgs.length); // 0
console.log(oneArg.length); // 1</code></pre>
<h3 id="es2015-syntax"><strong>ES2015 Syntax</strong></h3>
<p>ES2015, or ES6 as it is commonly called, introduced the rest operator and default function parameters. Both of these additions change the way the <code>length</code> property works.</p>
<p>If either the rest operator or default parameters are used in a function declaration the <code>length</code> property will only include the number of arguments before a rest operator or a default parameter.</p><pre><code class="language-javascript">function withRest(...args) { }
function withArgsAndRest(a, b, ...args) { }
function withDefaults(a, b = 'I am the default') { }
console.log(withRest.length); // 0
console.log(withArgsAndRest.length); // 2
console.log(withDefaults.length); // 1</code></pre>
<p>More Information on <code>Function.length</code> can be found on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length">Mozilla’s MDN Docs</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
