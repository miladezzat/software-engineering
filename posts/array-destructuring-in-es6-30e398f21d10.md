---
card: "https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png"
tags: [JavaScript]
description: by Kevwe Ochuko
author: "Milad E. Fahmy"
title: "A brief introduction to array destructuring in ES6"
created: "2021-08-15T19:40:41+02:00"
modified: "2021-08-15T19:40:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-es6 tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A brief introduction to array destructuring in ES6</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5TN-55RU-eTfNlcDL2RR1g.png" alt="A brief introduction to array destructuring in ES6">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kevwe Ochuko</p>
<p><strong>Destructuring</strong> in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.</p>
<p>It creates a pattern that describes the kind of value you are expecting and makes the assignment. Array destructuring uses position.</p>
<p>See the below code snippet.</p><pre><code class="language-js">var [first, second, third] = ["Laide", "Gabriel", "Jets"];</code></pre>
<p><em>The Syntax with Destructuring.</em></p><pre><code class="language-js">var first = "laide",
second = "Gabriel",
third = "Jets";</code></pre>
<p><em>The Syntax Without Destructuring.</em></p>
<blockquote><em>You cannot use Numbers for destructuring. Numbers will throw an error because numbers cannot be variable names.</em></blockquote><pre><code class="language-js">var [1, 2, 3] = ["Laide", "Ola", "Jets"];</code></pre>
<p><em>This syntax throws an error.</em></p>
<p><strong>Destructuring</strong> has made extracting data from an array very simple and readable. Imagine trying to extract data from a nested array with 5 or 6 levels. That would be very tedious. You use an array literal on the left-hand side of the assignment.</p><pre><code class="language-js">var thing = ["Table", "Chair", "Fan"];
var [a, b, c] = thing;</code></pre>
<p>It takes each variable on the array literal on the left-hand side and maps it to the same element at the same index in the array.</p><pre><code class="language-js">console.log(a); // Output: Table
console.log(b); //Output: Chair
console.log(c); //Output: Fan</code></pre>
<p>Declaration and assignment can be done separately in destructuring.</p><pre><code class="language-js">var first, second;
[first, second] = ["Male", "Female"];</code></pre>
<p>If the number of variables passed to the destructuring array literals are more than the elements in the array, then the variables which aren’t mapped to any element in the array return<em> </em><code>undefined</code><em>.</em></p><pre><code class="language-js">var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c, d, e] = things;
console.log(c); //Output: Fan
console.log(d); //Output: Rug
console.log(e); //Output: undefined</code></pre>
<p>If the number of variables passed to the destructuring array literals are lesser than the elements in the array, the elements without variables to be mapped to are just left. There are no errors whatsoever.</p><pre><code class="language-js">var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c] = things;
console.log(c); // Output: Fan</code></pre>
<h3 id="destructuring-returned-arrays"><strong>Destructuring Returned Arrays</strong></h3>
<p>Destructuring makes working with a function that returns an array as a value more precise. It works for all iterables.</p><pre><code class="language-js">function runners(){
return ["Sandra", "Ola", "Chi"];
}
var [a, b, c] = runners();
console.log(a); //Output: Sandra
console.log(b); //Output: Ola
console.log(c); //Output: Chi</code></pre>
<h3 id="default-value"><strong>Default Value</strong></h3>
<p>Destructuring allows a default value to be assigned to a variable if no value or <code><em>undefined</em></code><em> </em>is passed. It is like providing a fallback when nothing is found.</p><pre><code class="language-js">var a, b;
[a = 40, b = 4] = [];
console.log(a); //Output: 40
console.log(b); //Output: 4
[a = 40, b = 4] = [1, 23];
console.log(a); //Output: 1
console.log(b); //Output: 23</code></pre>
<p>Default values can also refer to other variables including the one in the same array literal.</p><pre><code class="language-js">var [first = "Cotlin", second = first] = [];
console.log(first); //Output: Cotlin
console.log(second); //Output: Cotlin
var [first = "Cotlin", second = first] = ["Koku"];
console.log(first); //Output: Koku
console.log(second); //Output: Koku
var [first = "Cotlin", second = first] = ["Koku", "Lydia"];
console.log(first); //Output: Koku
console.log(second); //Output: Lydia</code></pre>
<h3 id="ignoring-some-values">Ignoring Some Values</h3>
<p>Destructuring lets you map a variable to the elements you are interested in. You can ignore or skip the other elements in the array by using trailing commas.</p><pre><code class="language-js">var a, b;
[a, , b] = ["Lordy", "Crown", "Roses"];
console.log(a); //Output: Lordy
console.log(b); //Output: Roses</code></pre>
<h3 id="the-rest-parameter-and-spread-syntax"><strong>The Rest Parameter And Spread Syntax</strong></h3>
<p>The new <em><em>(…)</em> </em><em><em>operator</em></em> that was added in ES6 can be used in destructuring. If the <em><em>(…) operator</em></em> appear on the left-hand side in destructuring then it is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" rel="noopener nofollow"><strong><strong>REST PARAMETER</strong></strong></a><strong><strong>.</strong></strong> A Rest parameter is used to map all the remaining elements in the array that have not been mapped to the rest variable itself. It is like gathering what is left behind<strong><strong>.</strong></strong> The Rest variable must always be the last otherwise a <code>SyntaxError</code> is thrown.</p><pre><code class="language-js">var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, , third, ...others] = planets;
console.log(first); //Output: Mercury
console.log(third); //Output: Venus
console.log(others); //Output: ["Mars", "Pluto", "Saturn"]</code></pre>
<p>If the (…) operator appears on the right-hand in destructuring then it is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener"><strong>SPREAD SYNTAX</strong></a><strong>. </strong>It<strong> </strong>takes all the other elements in the array which have no variable mapped to them and then maps it to the rest variable.</p><pre><code class="language-js">var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];
console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]</code></pre>
<p>When you can have more variables on the left-hand side, it maps the single elements in the array equally to the variables.</p><pre><code class="language-js">var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", ...planets];
console.log(first); //Output: Mercury
console.log(second); //Output: Mercury
console.log(rest); //Output: ["Earth", "Venus", "Mars", "Pluto", "Saturn"]
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, third, fourth ...rest] = ["Mercury", "Earth", ...planets];
console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(third); //Output: Mercury
console.log(fourth); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]</code></pre>
<h3 id="interchanging-or-swapping-variables"><strong>Interchanging Or Swapping Variables</strong></h3>
<p>One destructuring expression can be used in swapping the values of two variables.</p><pre><code class="language-js">var a, b;
[a, b] = ["Male", "Female"];
[a, b] = [b, a];
console.log(a); //Output: Female
console.log(b); //Output: Male</code></pre>
<h3 id="nested-array-destructuring"><strong>Nested Array Destructuring</strong></h3>
<p>You can also do nested destructuring with arrays. The corresponding item must be an array in order to use a nested destructuring array literal to assign items in it to local variables.</p><pre><code class="language-js">var numbers = [8, [1, 2, 3], 10, 12];
var  [a, [d, e, f]] = numbers;
console.log(a); // Output: 8
console.log(d); // Output: 1
console.log(e); // Output: 2</code></pre>
<h3 id="multiple-array-destructuring">Multiple Array Destructuring</h3>
<p>You can destructure an array more than once in the same code snippet.</p><pre><code class="language-js">var places = ["first", "second", "third", "fourth"];
var [a, b, , d] = [f, ...rest] = places;
console.log(a); //Output: first
console.log(d); //Output: fourth
console.log(f); //Output: first
console.log(rest); //Output: ["second", "third", "fourth"]</code></pre>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>You can copy and paste the code on <a href="https://babeljs.io/en/repl.html#?babili=false&amp;browsers=&amp;build=&amp;builtIns=false&amp;spec=false&amp;loose=false&amp;code_lz=Q&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=false&amp;fileSize=false&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=true&amp;presets=es2015%2Ces2016%2Creact%2Cstage-2&amp;prettier=false&amp;targets=&amp;version=6.26.0&amp;envVersion=" rel="noopener">Babel’s website</a> to see what the code would look like if destructuring did not exist. You would have written more lines of code, but destructuring simplifies it all.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
