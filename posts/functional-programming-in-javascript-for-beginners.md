---
card: "https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg"
tags: [JavaScript]
description: Functional programming is not a new approach to coding, but i
author: "Milad E. Fahmy"
title: "Functional Programming in JavaScript for Beginners"
created: "2021-08-15T19:26:48+02:00"
modified: "2021-08-15T19:26:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming in JavaScript for Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/60398767a675540a2292447c.jpg" alt="Functional Programming in JavaScript for Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Functional programming is not a new approach to coding, but it has grown in popularity in recent years.</p>
<p>This is because, once programmers understand the basics behind the technique (and are able to write clean and reliable code using it), applications written using a functional approach are much easier to work with.</p>
<p>Because of this, it’s worth gaining an understanding of functional programming once you’ve worked through this <a href="/news/the-complete-javascript-handbook-f26b2c71719c/">JavaScript beginners’ handbook</a>. </p>
<p>If you are frequently working with JavaScript, using this approach can save you time, and can make your code easier to work with and potentially more secure.</p>
<p>In this article, we’ll look at the basic principles of functional programming, and then outline a few of the key tools for using this approach in JavaScript.</p>
<h2 id="imperative-vs-functional-programming">Imperative vs. functional programming</h2>
<p>The origins of functional programming go way back to the 1930’s with the invention of Lambda Calculus. </p>
<p>This was an approach to computation that <a href="https://en.wikipedia.org/wiki/Lambda_calculus">sought to define common tasks</a> and functions not as the structural manipulation of data structures (such as arrays and lists), but rather as mathematical functions performed on them. </p>
<figcaption><a href="https://android.jlelse.eu/how-to-wrap-your-imperative-brain-around-functional-reactive-programming-in-rxjava-91ac89a4eccf">Image Source</a></figcaption>
</figure>
<p>This may sound quite abstract, especially if you are new to programming. But in fact the difference between a functional and imperative approach can be expressed quite succinctly by using an example. Take a look at these:</p>
<h3 id="imperative-">Imperative:</h3><pre><code class="language-js">const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getOdds(arr) {
let odds = [];
for (let i = 0; i &lt; arr.length + 1; i++) {
if (i % 2 !== 0) {
odds.push(i);
}
}
return odds;
}
console.log(getOdds(arr)); // logs [1, 3, 5, 7, 9]
</code></pre>
<h3 id="functional-">Functional:</h3><pre><code class="language-js">function getOdds2(arr){
return arr.filter(num =&gt; num % 2 !== 0)
}console.log(getOdds2(arr))
// logs [ 1, 3, 5, 7, 9 ]
const getOdds3 = arr =&gt; arr.filter(num =&gt; num % 2 !== 0)console.log(getOdds3(arr))
// logs [ 1, 3, 5, 7, 9 ]</code></pre>
<p>As you can see, the way in which these programs work is quite different.</p>
<p>The imperative approach is to define a data structure, and then manipulate it in order to obtain the output we need. In a functional approach, we use filter functions to define a programmed function, and then invoke this as needed. </p>
<p>Of course, much of the complexity of <a href="/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/">how functional programming works</a> is hidden from the end user, and also from the programmer if they are using a front end development framework. </p>
<p>But the advantages of using a functional approach are clear even from this example – this paradigm results in shorter code that is more easily read, understood, and audited.</p>
<h2 id="why-use-functional-programming">Why use functional programming?</h2>
<p>In addition to this basic advantage, there are a number of other advantages to using functional programming. </p>
<p>Many of these stem from the simple fact that functional code is easier to read than imperatively defined code. Because a human can easily see how a functional program works, rather than having to pull apart the code in order to understand it, many aspects of testing are simplified. </p>
<h3 id="functional-programming-ensures-code-integrity-with-penetration-testing">Functional Programming ensures code integrity with penetration testing</h3>
<p>Penetration testing becomes more effective where code is human readable. This makes it easier to assess the integrity of functional code.</p>
<p>According to software developer Barbara Ericson of <a href="https://www.clouddefense.ai/blog/penetration-testing">Cloud Defense</a>, penetration testing should always be carried out on JavaScript applications, and a functional approach can help to make this more rigorous. </p>
<p>This ease of reading also simplifies many of the other managerial processes that apply to the development of new code and applications. </p>
<p>In functional approaches, compliance processes are much easier, because programmers shouldn’t worry as much about the execution of their code. This means that the parts of a program that deal with sensitive data can be isolated and evaluated separately from the rest of a program.</p>
<h3 id="functional-programming-makes-code-easier-to-read">Functional Programming makes code easier to read</h3>
<p>The advantages of functional approaches are not just limited to the assessment of code, though. They also extend to the process of developing it. </p>
<p>In fact, functional approaches build on and amplify the <a href="/news/the-advantages-and-disadvantages-of-javascript/">advantages and disadvantages</a> of JavaScript itself. </p>
<figcaption><a href="https://itnext.io/why-are-we-creating-a-javascript-only-world-wide-web-db8c3a340b9">Image Source</a></figcaption>
</figure>
<p>By making code easier to read, you can bring many more staff groups into the development process, even if they don't have an extensive understanding of JavaScript.</p>
<p>This is a key tenet of the DevOps approach, one that <a href="https://privacycanada.net/how-to-fight-common-java-security-vulnerabilities-from-devops/">can help mitigate vulnerabilities</a> in your JavaScript code. It's also one that is facilitated by taking a functional approach to your coding.</p>
<h2 id="key-tools-for-functional-programming">Key tools for functional programming</h2>
<p>There are a number of key tools and concepts that you should be aware of when it comes to actually putting functional approaches into action. Let’s take a look at them.</p>
<h3 id="1-pure-and-impure-functions">1. Pure and impure functions</h3>
<p>At the most basic level, a functional approach <a href="https://www.geeksforgeeks.org/functional-programming-paradigm/">seeks to manipulate data</a> without mutating them. This means that a “functional function” will take data, perform some calculations, and return a result (and all without re-writing any part of the data structure itself). </p>
<p>Functions that work in this way are called “pure” functions, and those that do not are called “impure”.</p><pre><code class="language-js">
function getSquare(items) {
var len = items.length;
for (var i = 0; i &lt; len; i++) {
items[i] = items[i] * items[i];
}
return items;
}</code></pre>
<p>The general idea here is to leave the data you are working with completely untouched. </p>
<p>If you want to merge two arrays, you should not utilize the <code>Array.prototype.push()</code> strategy (which will overwrite the original data). Instead, use the <code>Array.prototype.concat()</code> function, which will create a new, “working” array for you to work with.</p>
<h3 id="2-anonymous-functions">2. Anonymous functions</h3>
<p>Anonymous functions <a href="https://www.javascripttutorial.net/javascript-anonymous-functions/">are also an important part</a> of functional programming, and one that has its roots in Lambda Calculus. </p>
<p>Anonymous functions, as their name suggests, do not have an explicitly defined name. Instead, they are functions that are assigned to variables, and invoked via them. </p><pre><code class="language-js"> alert((function(x) {
return !(x &gt; 1)
? 1
: arguments.callee(x - 1) * x;
})(20));</code></pre>
<p>The advantage of doing this is that as long as you are able to keep track of which functions are assigned to which variables, they can be invoked very easily, and passed from one module to another with nothing more than a variable call. This gives you a powerful, flexible new way of working with functions.</p>
<h3 id="3-recursive-functions">3. Recursive functions</h3>
<p>The use of recursive functions is another mark of functional programming. Though the general idea of recursion will be familiar to even beginner programmers, functional programming takes the idea even further by defining functions that call themselves. </p><pre><code class="language-js">function countDown(fromNumber) {
console.log(fromNumber);
let nextNumber = fromNumber - 1;
if (nextNumber &gt; 0) {
countDown(nextNumber);
}
}
countDown(3);</code></pre>
<p>This makes the implementation of recursion much simpler – largely because programmers don’t need to use loops to do this. </p>
<p>However, it also comes with dangers. Specifically, having a function call itself makes it much easier for infinite loops to be accidentally created, and so take care to underpin every recursive function with a rigorous way of stopping execution.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Though these three concepts are typical of functional programming, in truth the range of ways in which the paradigm can be applied means that it is more of a philosophy than a set of well-designed tools and processes. </p>
<p>Take a few steps into the exciting world of functional programming, and you’ll start to see its influence everywhere. In fact, it informs many of the <a href="/news/what-is-javascript/">most common JavaScript practices</a> in use today.</p>
<p>In other words, although functional programming appears simple on the surface, it has profound consequences on the way that you code. This is why it’s worth learning, even if you don’t use it all the time.<br><br></p>
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
