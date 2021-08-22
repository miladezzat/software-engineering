---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg"
tags: [JavaScript]
description: This article will provide you with a solid understanding of e
author: "Milad E. Fahmy"
title: "JS For Loop Tutorial – How to Iterate Over an Array in JavaScript"
created: "2021-08-15T19:29:58+02:00"
modified: "2021-08-15T19:29:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-loops ">
<header class="post-full-header">
<h1 class="post-full-title">JS For Loop Tutorial – How to Iterate Over an Array in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b53740569d1a4ca2b1a.jpg" alt="JS For Loop Tutorial – How to Iterate Over an Array in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><br>This article will provide you with a solid understanding of exactly how to iterate over an Array data structure in JavaScript. </p>
<p>Whether you are just beginning to learn JavaScript or are here for a refresher, there will be value for you either way. This article will walk you through one of the most widely used JavaScript concepts.</p>
<h3 id="what-is-an-array">What is an array?</h3><pre><code class="language-js">let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi"];</code></pre>
<p>Above is a JavaScript array used to store multiple values. This is one of the simplest forms of an array. It contains 4 “elements” inside the array, all strings. And as you can see each element is separated by a comma. </p>
<p>This example array holds different makes of cars, and can be referred to with the <code>cars</code> variable.</p>
<p>There are a number of ways we can iterate over this array. JavaScript is incredibly feature-rich, so we have the luxury to choose the best way to solve our problem.</p>
<p>Here’s how we will tackle iterating over arrays in JavaScript:<br></p>
<ol>
<li>Highlight 5 common methods to iterate over an array</li>
<li>Show some insights into each iterative method</li>
<li>Provide some code you can use to test it out, too!</li>
</ol>
<h2 id="traditional-for-loop">Traditional For Loop</h2>
<h3 id="what-is-a-for-loop">What is a For Loop? </h3>
<p>Wikipedia defines a <a href="https://en.wikipedia.org/wiki/For_loop">For Loop</a> as:</p>
<blockquote>“In <a href="https://en.wikipedia.org/wiki/Computer_science">computer science</a>, a <strong>for-loop</strong> (or simply <strong>for loop</strong>) is a <a href="https://en.wikipedia.org/wiki/Control_flow">control flow</a> <a href="https://en.wikipedia.org/wiki/Statement_(programming)">statement</a> for specifying <a href="https://en.wikipedia.org/wiki/Iteration">iteration</a>, <strong>which allows code to be </strong><a href="https://en.wikipedia.org/wiki/Execution_(computers)"><strong>executed</strong></a><strong> repeatedly.”</strong></blockquote>
<p>A for loop is a way to execute code repeatedly. Instead of typing out <code>console.log(“hi”)</code> five times, you could wrap it inside a for loop.<br><br>In this first example, we will learn how to iterate over the cars array you have seen above, and print out every element. The iterator, or counter, will start at the first index “Tesla” and finish at the last “Audi”. It moves through the array and prints one element at a time.</p><pre><code class="language-js">let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi"];
for(let i = 0; i &lt; cars.length; i++) {
console.log(cars[i]);
}</code></pre>
<p><strong>Output:</strong></p><pre><code>Tesla
Ferrari
Lamborghini
Audi</code></pre>
<p>Diving into the code, we pass three options to the for loop</p>
<ul>
<li>the iterator variable - <code>let i = 0;</code></li>
<li>how much to increment the iterator each loop - <code>i++</code></li>
</ul>
<p>This loop starts us at <code>0</code>, increases the variable by one each loop, and stops when we hit the last element in the array.</p>
<p><em>The key benefit of the traditional for loop is that you have more control. </em><br><br>It’s possible to access different elements within the array, or iterate through the array in a sophisticated way to solve a complex problem. For example, skipping every other element in the array can be done quite easily with the traditional for loop.</p>
<h2 id="the-foreach-method">The forEach method</h2>
<h3 id="what-is-the-foreach-method">What is the forEach method? </h3>
<p>The <code>forEach</code> method is used to execute a function for each element of your array. This method is a great choice if the length of the array is “unknown”, or guaranteed to change. This method can be only used with Arrays, Sets, and Maps. </p><pre><code class="language-js">const amounts = [65, 44, 12, 4];
let doubledAmounts = [];
amounts.forEach(item =&gt; {
doubledAmounts.push(item * 2);
})
console.log(doubledAmounts);</code></pre>
<p>The greatest benefit of a <code>forEach</code> loop is being able to access each item, even if your array is likely to grow in size. It is a scalable solution for many use-cases and is easier to read and understand than a traditional for loop because we know we will iterate over each element exactly once.</p>
<h2 id="while-loop">While loop</h2>
<h3 id="what-is-a-while-loop">What is a While Loop? </h3>
<p>Wikipedia defines a While Loop as:</p>
<blockquote>“A <strong>while loop</strong> is a <a href="https://en.wikipedia.org/wiki/Control_flow">control flow</a> <a href="https://en.wikipedia.org/wiki/Statement_(programming)">statement</a> that allows code to be executed repeatedly based on a given <a href="https://en.wikipedia.org/wiki/Boolean_datatype">Boolean</a> condition. The <em>while</em> loop can be thought of as a repeating <a href="https://en.wikipedia.org/wiki/Conditional_(programming)">if statement</a>.<strong>”</strong></blockquote>
<p>A <code>while</code> loop is a way to execute code repeatedly to check if a condition is true or false. So, instead of using a for loop, with a nested if statement, we can use a while loop. Or, if we're not able to find the length of the array, while loops are an excellent choice.</p>
<p>The while loop is often controlled by a counter. In the example below we show a basic while loop iterating through an array. The key is to have control over the while loop you are creating. </p>
<p><strong>While Loop Example (Good):</strong></p><pre><code class="language-js">let i = 0
while (i &lt; 5) {
console.log(i);
i++;
}</code></pre>
<p><strong>Output</strong>: </p><pre><code>0
1
2
3
4</code></pre>
<p>The while loop's if statement is <code>i &lt; 5</code>, or spoken aloud, "i is less than 5". The variable <code>i</code> is incremented every time the loop runs.</p>
<p>In simple terms, this means that 1 is added to the variable <code>i</code> every time the loop performs a full iteration. On the first iteration, <code>i</code> is equal to 0, and we print “0” to the console. </p>
<p><em>The greatest risk of using a while loop is writing a condition which is never met. </em></p>
<p>This occurs frequently in real-world scenarios, where someone writes a while loop but forgets to test their loop, and it introduces an <a href="https://en.wikipedia.org/wiki/Infinite_loop">infinite loop</a> into the code-base. </p>
<p>An infinite loop occurs when the condition is never met, and the loop keeps running forever. This often results in breaking changes, which then causes the entire software application to break and stop working. </p>
<p><strong>Warning: Do not run this code. </strong><br><br><strong>Infinite Loop Example (Bad): </strong></p><pre><code class="language-js">let i = 0
while (i &lt; 5) {
console.log(i);
}</code></pre>
<p><strong>Output: </strong><br><br>Results may vary. </p>
<h2 id="the-do-while-loop">The Do While Loop</h2>
<h3 id="what-is-a-do-while-loop">What is a do while loop? </h3>
<p>Wikipedia defines a Do-While loop as:</p>
<blockquote>“a <strong>do while loop</strong> is a <a href="https://en.wikipedia.org/wiki/Control_flow">control flow</a> <a href="https://en.wikipedia.org/wiki/Statement_(computer_science)">statement</a> that executes a block of code <strong>at least once</strong>, and then repeatedly executes the block, or not, depending on a given <a href="https://en.wikipedia.org/wiki/Boolean_data_type">boolean</a> condition at the end of the block.”</blockquote>
<p>A do-while loop is almost identical to a while loop, however there is one key difference. The do-while loop will guarantee to always execute the block of code at least once before the if statement is checked. </p>
<p>I often think of it as a reverse while loop, and almost never use them. However, they do come in handy in some very specific scenarios. </p>
<p><strong>Do-Loop Example (Good):</strong></p><pre><code class="language-js">let i = 0;
do {
console.log(i);
i++;
} while (i &lt; 5);</code></pre>
<p><strong>Output</strong>:</p><pre><code>0
1
2
3
4</code></pre>
<p><em>The greatest risk of using a do-loop is writing a condition which is never met. (Same as with a While Loop.)</em></p>
<p><strong>Warning: Do not run this code. </strong><br><br><strong>Infinite Loop Example (Bad): </strong></p><pre><code class="language-js">let i = 0;
do {
console.log(i);
} while (i &lt; 5);</code></pre>
<p><strong>Output</strong>: <br><br>Results may vary.</p>
<p>Want to take your JavaScript knowledge to the next level? Learn about <code>map</code>, which is the same as <code>forEach</code>, but with a bonus!! ?</p>
<h2 id="bonus-example-iteration-with-map-">BONUS Example (Iteration with map)</h2>
<h3 id="what-is-map">What is map? </h3>
<p>Wikipedia defines a map as: </p>
<blockquote>“In many <a href="https://en.wikipedia.org/wiki/Programming_language">programming languages</a>, <strong>map</strong> is the name of a <a href="https://en.wikipedia.org/wiki/Higher-order_function">higher-order function</a> that applies a <a href="https://en.wikipedia.org/wiki/Procedural_parameter">given function</a> to each element of a <a href="https://en.wikipedia.org/wiki/Functor_(disambiguation)">functor</a>, e.g. a <a href="https://en.wikipedia.org/wiki/List_(computing)">list</a>, returning a list of results in the same order. It is often called <em>apply-to-all</em> when considered in <a href="https://en.wikipedia.org/wiki/Functional_form">functional form</a>.”</blockquote>
<p>How does it work? The <code>map</code> function in JavaScript applies a function to<em> every element</em> inside the array<em>.</em> Please take a moment to re-read that sentence. </p>
<p>Afterwards, the <code>map</code> function returns a new array with the results of applying a function to every element in the array. </p>
<p><strong>Map example:</strong></p><pre><code class="language-js">const array = [1, 1, 1, 1];
// pass a function to map
const results = array.map(x =&gt; x * 2);
console.log(results);</code></pre>
<p><strong>Output</strong>: </p><pre><code>[2,2,2,2]</code></pre>
<p>We have applied the <code>map</code> function to the array containing four 1's. The <code>map</code> function then multiplied each element by 2, i.e., <code>x * 2</code>, and returned a new array. The new array was then stored in the <code>results</code> variable.</p>
<p>By viewing our output, we can see this worked successfully. Every element in the array has been multiplied by 2. This method can be used as a replacement to a loop in some cases, and is incredibly powerful. </p>
<h2 id="conclusion">Conclusion </h2>
<p>Well done! You have learned five different ways to iterate over an array in JavaScript. These are the fundamental building blocks that will set you up for success in your JavaScript programming journey. </p>
<p>You have also been exposed to an advanced concept, <code>map</code>, which is used often in large-scale software applications. </p>
<p>So, I’ll leave you with this: how are you going to use arrays in your projects? And which iteration method did you find most exciting? &nbsp; </p>
<p><strong><em>Thanks for reading! </em></strong></p>
<p>If you liked my article, please follow me and/or send me a message! &nbsp;</p>
<p><strong><a href="https://twitter.com/MartyJacobsDev">Twitter</a> • <a href="https://medium.com/@majikarpp">Medium</a> • <a href="https://github.com/majikarp">Github</a></strong></p>
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
