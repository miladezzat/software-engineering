---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg"
tags: [JavaScript]
description: typeof is a JavaScript keyword that will return the type of a
author: "Milad E. Fahmy"
title: "JavaScript Data Types: Typeof Explained"
created: "2021-08-15T19:31:37+02:00"
modified: "2021-08-15T19:31:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Data Types: Typeof Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e80740569d1a4ca3d75.jpg" alt="JavaScript Data Types: Typeof Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p><code>typeof</code> is a JavaScript keyword that will return the type of a variable when you call it. You can use this to validate function parameters or check if variables are defined. There are other uses as well.</p>
<p>The <code>typeof</code> operator is useful because it is an easy way to check the type of a variable in your code. This is important because JavaScript is a is a <a href="https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed" rel="nofollow">dynamically typed language</a>. This means that you aren’t required to assign types to variables when you create them. Because a variable is not restricted in this way, its type can change during the runtime of a program.</p>
<p>For example:</p><pre><code class="language-javascript">var x = 12345; // number
x = 'string'; // string
x = { key: 'value' }; // object</code></pre>
<p>As you can see from the above example, a variable in JavaScript can change types throughout the execution of a program. This can be hard to keep track of as a programmer, and this is where the <code>typeof</code> operator is useful.</p>
<p>The <code>typeof</code> operator returns a string that represents the current type of a variable. You use it by typing <code>typeof(variable)</code> or <code>typeof variable</code>. Going back to the previous example, you can use it to check the type of the variable <code>x</code> at each stage:</p><pre><code class="language-javascript">var x = 12345;
console.log(typeof x) // number
x = 'string';
console.log(typeof x) // string
x = { key: 'value' };
console.log(typeof x) // object</code></pre>
<p>This can be useful for checking the type of a variable in a function and continuing as appropriate.</p>
<p>Here’s an example of a function that can take a variable that is a string or a number:</p><pre><code class="language-javascript">function doSomething(x) {
if(typeof(x) === 'string') {
alert('x is a string')
} else if(typeof(x) === 'number') {
alert('x is a number')
}
}</code></pre>
<p>Another way the <code>typeof</code> operator can be useful is by ensuring that a variable is defined before you try to access it in your code. This can help prevent errors in a program that may occur if you try to access a variable that is not defined.</p><pre><code class="language-javascript">function(x){
if (typeof(x) === 'undefined') {
console.log('variable x is not defined');
return;
}
// continue with function here...
}</code></pre>
<p>The output of the <code>typeof</code> operator might not always be what you expect when you check for a number.<br>Numbers can turn in to the value <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN (Not A Number)</a> for multiple reasons.</p><pre><code class="language-javascript">console.log(typeof NaN); //"number"</code></pre>
<p>Maybe you tried to multiply a number with an object because you forgot to access the number inside the object.</p><pre><code class="language-javascript">var x = 1;
var y = { number: 2 };
console.log(x * y); // NaN
console.log(typeof (x * y)); // number</code></pre>
<p>When checking for a number, it is not sufficient to check the output of <code>typeof</code> for a number, since <code>NaN</code> also<br>passes this test.<br>This function check for numbers, and also doesn’t allow the <code>NaN</code> value to pass.</p><pre><code class="language-javascript">function isNumber(data) {
return (typeof data === 'number' &amp;&amp; !isNan(data));
}</code></pre>
<p>Even thought this is a useful validation method, we have to be careful because javascript has some weird parts and one of them is the result of <code>typeof</code> over particular instructions. For example, in javascript many things are just <code>objects</code> so you’ll find.</p><pre><code class="language-javascript">var x = [1,2,3,4];
console.log(typeof x)  // object
console.log(typeof null)  // object</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
