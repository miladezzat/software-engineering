---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Hopefully this reduces the confusion."
author: "Milad E. Fahmy"
title: "Learn Reduce in 10 Minutes"
created: "2021-08-16T11:28:20+02:00"
modified: "2021-08-16T11:28:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-redux tag-functional-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Reduce in 10 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/cover-image.png 300w,
/news/content/images/size/w600/2019/10/cover-image.png 600w,
/news/content/images/size/w1000/2019/10/cover-image.png 1000w,
/news/content/images/size/w2000/2019/10/cover-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/cover-image.png" alt="Learn Reduce in 10 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In my experience learning and teaching JavaScript, <code>reduce</code> is one of the toughest concepts to crack. In this article I'll try to address one core question...</p>
<blockquote>
<p>What is <code>reduce</code> and why is it called that?</p>
</blockquote>
<h2 id="reducehasmanynames">Reduce Has Many Names</h2>
<p>Some of them, <a href="https://en.wikipedia.org/wiki/Fold_(higher-order_function)">according to Wikipedia</a>, are</p>
<ul>
<li>Reduce</li>
<li>Fold</li>
<li>Accumulate</li>
<li>Aggregate</li>
<li>Compress</li>
</ul>
<p>They all hint at the core idea. It's all about <strong>breaking a structure down into a single value</strong>.</p>
<blockquote>
<p>Reduce - A function that folds a list into any data type.</p>
</blockquote>
<p>It's like folding a box! With <code>reduce</code> you can turn an array <code>[1,2,3,4,5]</code> into the number <code>15</code> by adding them all up.</p>
<img src="https://www.freecodecamp.org/news/content/images/2019/10/folding-box.gif" alt="folding-box">
<h3 id="theoldfashionedway">The Old Fashioned Way</h3>
<p>Normally you'd need a loop to "fold" a list into a number.</p>
<pre><code class="language-js">const add = (x, y) =&gt; x + y;
const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i &lt; numbers.length; i++) {
total = add(total, numbers[i]);
}
console.log(total); // 15
</code></pre>
<h3 id="thecoolkidsway">The Cool Kids Way</h3>
<p>But with <code>reduce</code> you can plug in your <code>add</code> function and the loop is handled for you!</p>
<pre><code class="language-js">const add = (x, y) =&gt; x + y;
const numbers = [1, 2, 3, 4, 5];
numbers.reduce(add);
// 15
</code></pre>
<p>You're literally folding 1-5 to get 15.</p>
<img src="https://www.freecodecamp.org/news/content/images/2019/10/folding-box.gif" alt="folding-box">
<h2 id="thebigthree">The Big Three</h2>
<p>Before diving deeper I think it's important to analyze <code>reduce</code> alongside its famous companions–<code>map</code> and <code>filter</code>. They heavily overshadow <code>reduce</code>, making it look like the weirdo of the bunch.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/creepy-reduce.jpeg" alt="creepy-reduce"></p>
<p>Despite their respective popularities, combining these three titans allows you to manipulate lists however you want!</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/the-big-three.jpeg" alt="the-big-three"></p>
<p>For a moment humor me and pretend JavaScript can't use loops, recursion, or array methods like <code>forEach</code>, <code>some</code>, <code>find</code>, etc. The only three left are <code>map</code>, <code>filter</code>, and <code>reduce</code>.</p>
<p>Our job as programmers hasn't changed, however. We still need three types of functionality in our applications.</p>
<ol>
<li>Transforming lists</li>
<li>Filtering lists</li>
<li>Turning lists into other data types (number, string, boolean, object, etc).</li>
</ol>
<p>Let's see how our only tools–<code>map</code>, <code>filter</code>, <code>reduce</code>–handle this challenge.</p>
<h3 id="arraymaptransformslists">✅ Array.map transforms lists</h3>
<p>Turning lists into other lists is Front-End development in a nutshell. Therefore <code>map</code> covers much of your list work.</p>
<p>Let's say our application calls an API for the list of users, and we need every user's name displayed on the screen. Simply create a function that returns <em>one</em> user's name.</p>
<pre><code class="language-js">const getUserName = (user) =&gt; user.name;
</code></pre>
<p>And plug it into <code>map</code> to run that against an entire list of users.</p>
<pre><code class="language-js">users.map(getUserName)
// ['Marie', 'Ken', 'Sara', 'Geoff', ...]
</code></pre>
<h3 id="arrayfilterjudgeslists">✅ Array.filter judges lists</h3>
<p>What if you want a new list with some items removed, like when the user searches their contact list? Simply create a function that returns <code>true</code> or <code>false</code> based on its input (a predicate).</p>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
</code></pre>
<p>And plug it into <code>filter</code> to apply that against an entire list.</p>
<pre><code class="language-js">const numbers = [1, 2, 3, 4, 5];
numbers.filter(isEven);
// [2, 4]
</code></pre>
<h3 id="arrayreducedoesallthatandmore">✅ Array.reduce does all that, and more</h3>
<p>When <code>map</code> and <code>filter</code> aren't enough, you bring in the big guns. The <code>reduce</code> method can do what <code>map</code>/<code>filter</code> do, and anything else that involves looping over an array.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/reduce-will-take-this.png" alt="reduce-will-take-this"></p>
<p>For example how would you calculate the total age of your users? Our users' ages are 25, 22, 29, and 30.</p>
<pre><code class="language-js">const users = [
{ name: 'Marie', age: 25 },
{ name: 'Ken', age: 22 },
{ name: 'Sara', age: 29 },
{ name: 'Geoff', age: 30 },
];
</code></pre>
<p><code>map</code> and <code>filter</code> can only return arrays, but we need a <code>number</code>!</p>
<pre><code class="language-js">users.map(?);
users.filter(?);
// Nope! I need a number, not arrays.
</code></pre>
<p>If we had loops we'd just go through <code>users</code> and tally their ages in a counter! Well what if I told you it's even easier with <code>reduce</code>?</p>
<pre><code class="language-js">users.reduce((total, currentUser) =&gt; total + currentUser.age, 0);
// 106
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/fallout-hold-up-1.jpeg" alt="fallout-hold-up"></p>
<h2 id="logitout">Log it out</h2>
<p>I think the easiest way to digest this is to <code>console.log</code> at each step.</p>
<pre><code class="language-js">const users = [
{ name: 'Marie', age: 25 },
{ name: 'Ken', age: 22 },
{ name: 'Sara', age: 29 },
{ name: 'Geoff', age: 30 },
];
const reducer = (total, currentUser) =&gt; {
console.log('current total:', total);
console.log('currentUser:', currentUser);
// just for spacing
console.log('\n');
return total + currentUser.age;
}
users.reduce(reducer, 0);
</code></pre>
<p>Here's a screenshot from Chrome DevTools.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/reduce-screenshot-1.png" alt="reduce-screenshot-1"></p>
<h2 id="breakitdown">Break It Down</h2>
<p>As you just saw, <code>Array.reduce</code> takes two parameters.</p>
<ol>
<li>The reducer</li>
<li>An initial value (optional)</li>
</ol>
<p>The reducer is the function doing all the work. As <code>reduce</code> loops over your list, it feeds two parameters to your reducer.</p>
<ol>
<li>An accumulator</li>
<li>The current value</li>
</ol>
<p>The current value is self-explanatory, just like when you use <code>array[i]</code> in a regular loop. The accumulator, though, is a scary-sounding computer science term that's actually simple.</p>
<h3 id="accumulatoristheeventualreturnvalue">Accumulator is the eventual return value</h3>
<p>When you're looping through the <code>users</code>,  how are you keeping track of their total age? You need some <em>counter</em> variable to hold it. <strong>That's the accumulator.</strong> It's the eventual value <code>reduce</code> will spit out when it's done.</p>
<p>At every step in the loop, it feeds the last accumulator and the current item to your reducer. Whatever the reducer returns becomes the next accumulator. The cycle ends when the list is finished and you have a single reduced value.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/reduce-screenshot-1.png" alt="reduce-screenshot-1"></p>
<h3 id="initialvalueisoptional">Initial value is optional</h3>
<p>The second parameter to <code>reduce</code> is the initial value. If you don't supply it, <code>reduce</code> defaults to the list's first element.</p>
<p>This is fine if you're summing plain numbers.</p>
<pre><code class="language-js">[1, 2, 3].reduce((total, current) =&gt; total + current);
// 6
</code></pre>
<p>But breaks if you use an object or array because you shouldn't be adding those things up.</p>
<pre><code class="language-js">[{ age: 1 }, { age: 2 }, { age: 3 }]
.reduce((total, obj) =&gt; total + obj.age);
// [object Object]23
// Broken result, use an initial value.
</code></pre>
<p>In this case you should give the initial value of <code>0</code>.</p>
<pre><code class="language-js">[{ age: 1 }, { age: 2 }, { age: 3 }]
.reduce((total, obj) =&gt; total + obj.age, 0);
// 6
// Initial value fixes it.
// 0 + 1 + 2 + 3 = 6
</code></pre>
<h2 id="letsrecreatereduce">Let's Recreate Reduce</h2>
<blockquote>
<p>What I cannot create, I do not understand - Richard Feynman</p>
</blockquote>
<p>Hopefully I've helped you so far. Now it's time to write your own <code>reduce</code> function to really hammer this home.</p>
<p>It'll be a function that takes three parameters.</p>
<ol>
<li>A reducer</li>
<li>An initial value</li>
<li>An array to operate on</li>
</ol>
<p>For this demo the initial value is not optional.</p>
<pre><code class="language-js">const reduce = (reducer, initialValue, array) =&gt; {
let accumulator = initialValue;
for (let i = 0; i &lt; array.length; i++) {
const currentItem = array[i];
accumulator = reducer(accumulator, currentItem);
}
return accumulator;
}
</code></pre>
<p>Amazing just 10 lines of code, 6 key steps. I'll go one by one.</p>
<ol>
<li>Define <code>reduce</code> and its three parameters.</li>
<li>Initialize the <code>accumulator</code> using the provided <code>initialValue</code>. This variable will change every loop.</li>
<li>Start looping over the array.</li>
<li>Capture the array's <code>currentItem</code> for that cycle.</li>
<li>Call <code>reducer</code> with the <code>accumulator</code> and <code>currentItem</code>, saving it as a new <code>accumulator</code>.</li>
<li>When the loop's finished and the <code>accumulator</code> is done changing, return it.</li>
</ol>
<h2 id="miscellaneoushistory">Miscellaneous History</h2>
<p>I wanted to talk more about the history of <code>reduce</code> and reducers, but wasn't quite sure where to fit it. Nonetheless it's very interesting!</p>
<h3 id="reducersareancient">Reducers are ancient</h3>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/redux-did-not-invent-reducers.jpeg" alt="redux-did-not-invent-reducers"></p>
<p><a href="https://redux.js.org">Redux</a> made reducers cool to JavaScript developers, but it didn't invent them. It's actually not clear who coined the term, but here's a few references I dug up.</p>
<h3 id="recursiontheory1952">Recursion Theory (1952)</h3>
<p><a href="https://www.amazon.com/Introduction-Metamathematics-Stephen-Cole-Kleene/dp/0923891579">This book</a> from 1952 discusses <code>reduce</code> from a metamathematical perspective, referring to it as <code>fold</code>.</p>
<h3 id="lispprogrammersmanual1960">Lisp Programmer's Manual (1960)</h3>
<p>The <a href="https://kyber.io/rawvids/LISP_I_Programmers_Manual_LISP_I_Programmers_Manual.pdf">Lisp Programmer's Manual</a> from 1960 has a section on the <code>reduce</code> function.</p>
<h3 id="introductiontofunctionalprogramming1988">Introduction to Functional Programming (1988)</h3>
<p><a href="https://usi-pl.github.io/lc/sp-2015/doc/Bird_Wadler.%20Introduction%20to%20Functional%20Programming.1ed.pdf">This book</a> from 1988 talks about using <code>reduce</code> to turn lists into other values.</p>
<p>Bottom line–it's an old topic. The more you study computer science the more you realize we're mostly re-wrapping concepts discovered decades ago.</p>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The more you study computer science the more you realize we're mostly re-wrapping concepts discovered decades ago.</p>— Yazeed Bzadough (@yazeedBee) <a href="https://twitter.com/yazeedBee/status/1183510524438437890?ref_src=twsrc%5Etfw">October 13, 2019</a></blockquote>
<h2 id="exercisesforyou">Exercises For You</h2>
<p>For the sake of time, we end here. However I hope I've at least hinted that <code>reduce</code> is incredibly powerful and useful way beyond just summing numbers.</p>
<p>If you're interested try these exercises and <a href="https://twitter.com/yazeedBee">message me about them later</a>. I may write a follow up article on them.</p>
<ol>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.map</a> function using <code>reduce</code>.</li>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.filter</a> function using <code>reduce</code>.</li>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some">Array.some</a> function using <code>reduce</code>.</li>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every">Array.every</a> function using <code>reduce</code>.</li>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">Array.find</a> function using <code>reduce</code>.</li>
<li>Reimplement the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">Array.forEach</a> function using <code>reduce</code>.</li>
<li>Turn an array into an object using <code>reduce</code>.</li>
<li>Turn a 2D array into a 1D (flat) array using <code>reduce</code>.</li>
</ol>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a free 15-30 minute call to discuss Front-End development questions regarding code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss an ongoing coaching relationship that'll help you reach your Front-End development goals!</p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
