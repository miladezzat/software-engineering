---
card: "https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png"
tags: [JavaScript]
description: "Pure functions are the atomic building blocks in functional p"
author: "Milad E. Fahmy"
title: "What Is a Pure Function in JavaScript?"
created: "2021-08-16T11:34:09+02:00"
modified: "2021-08-16T11:34:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-tech tag-programming tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">What Is a Pure Function in JavaScript?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png" alt="What Is a Pure Function in JavaScript?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This post covers a quick checklist to tell if a function’s pure or not.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*a_yub2gTwY-1eK8j.png" alt=""></p>
<h3 id="thechecklist">The Checklist</h3>
<p>A function must pass two tests to be considered “pure”:</p>
<ol>
<li>Same inputs <em>always</em> return same outputs</li>
<li>No side-effects</li>
</ol>
<p>Let’s zoom in on each one.</p>
<h3 id="1sameinputsameoutput">1. Same Input =&gt; Same Output</h3>
<p>Compare this:</p>
<pre><code class="language-js">const add = (x, y) =&gt; x + y;
add(2, 4); // 6
</code></pre>
<p>To this:</p>
<pre><code class="language-js">let x = 2;
const add = (y) =&gt; {
x += y;
};
add(4); // x === 6 (the first time)
</code></pre>
<h4 id="purefunctionsconsistentresults">Pure Functions = Consistent Results</h4>
<p>The first example returns a value based on the given parameters, regardless of where/when you call it.</p>
<p>If you pass <code>2</code> and <code>4</code>, you’ll always get <code>6</code>.</p>
<p>Nothing else affects the output.</p>
<h4 id="impurefunctionsinconsistentresults">Impure Functions = Inconsistent Results</h4>
<p>The second example returns nothing. It relies on <strong>shared state</strong> to do its job by incrementing a variable outside of its own scope.</p>
<p>This pattern is a developer’s nightmare fuel.</p>
<p><strong>Shared state</strong> introduces a time dependency. You get different results depending on when you called the function. The first time results in <code>6</code>, next time is <code>10</code> and so on.</p>
<h4 id="whichversionseasiertoreasonabout">Which Version’s Easier to Reason About?</h4>
<p>Which one’s less likely to breed bugs that happen only under certain conditions?</p>
<p>Which one’s more likely to succeed in a multi-threaded environment where time dependencies can break the system?</p>
<p>Definitely the first one.</p>
<h3 id="2nosideeffects">2. No Side-Effects</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png" alt=""></p>
<p>This test itself is a checklist. A few examples of side-effects are</p>
<ol>
<li>Mutating your input</li>
<li><code>console.log</code></li>
<li>HTTP calls (AJAX/fetch)</li>
<li>Changing the filesystem (fs)</li>
<li>Querying the DOM</li>
</ol>
<p>Basically any work a function performs that isn’t related to calculating the final output.</p>
<p>Here’s an impure function with a side-effect.</p>
<h4 id="notsobad">Not So Bad</h4>
<pre><code class="language-js">const impureDouble = (x) =&gt; {
console.log('doubling', x);
return x * 2;
};
const result = impureDouble(4);
console.log({ result });
</code></pre>
<p><code>console.log</code> is the side-effect here but, in all practicality, it won’t harm us. We’ll still get the same outputs, given the same inputs.</p>
<p><em>This</em>, however, may cause a problem.</p>
<h4 id="impurelychanginganobject">“Impurely” Changing an Object</h4>
<pre><code class="language-js">const impureAssoc = (key, value, object) =&gt; {
object[key] = value;
};
const person = {
name: 'Bobo'
};
const result = impureAssoc('shoeSize', 400, person);
console.log({
person,
result
});
</code></pre>
<p>The variable, <code>person</code>, has been forever changed because our function introduced an assignment statement.</p>
<p>Shared state means <code>impureAssoc</code>'s impact isn’t fully obvious anymore. Understanding its effect on a system now involves tracking down every variable it’s ever touched and knowing their histories.</p>
<blockquote>
<p>Shared state = timing dependencies.</p>
</blockquote>
<p>We can purify <code>impureAssoc</code> by simply returning a new object with our desired properties.</p>
<h4 id="purifyingitup">Purifying It Up</h4>
<pre><code class="language-js">const pureAssoc = (key, value, object) =&gt; ({
...object,
[key]: value
});
const person = {
name: 'Bobo'
};
const result = pureAssoc('shoeSize', 400, person);
console.log({
person,
result
});
</code></pre>
<p>Now <code>pureAssoc</code> returns a testable result and we’ll never worry if it quietly mutated something elsewhere.</p>
<p>You could even do the following and remain pure:</p>
<h4 id="anotherpureway">Another Pure Way</h4>
<pre><code class="language-js">const pureAssoc = (key, value, object) =&gt; {
const newObject = { ...object };
newObject[key] = value;
return newObject;
};
const person = {
name: 'Bobo'
};
const result = pureAssoc('shoeSize', 400, person);
console.log({
person,
result
});
</code></pre>
<p>Mutating your input can be dangerous, but mutating a copy of it is no problem. Our end result is still a testable, predictable function that works no matter where/when you call it.</p>
<p>The mutation’s limited to that small scope and you’re still returning a value.</p>
<h3 id="deepcloningobjects">Deep-Cloning Objects</h3>
<p>Heads up! Using the spread operator <code>...</code> creates a <em>shallow</em> copy of an object. Shallow copies aren’t safe from nested mutations.</p>
<p>Thank you <a href="https://medium.com/@rodrigo_98972">Rodrigo Fernández Díaz</a> for bringing this to my attention!</p>
<h4 id="unsafenestedmutation">Unsafe Nested Mutation</h4>
<pre><code class="language-js">const person = {
name: 'Bobo',
address: { street: 'Main Street', number: 123 }
};
const shallowPersonClone = { ...person };
shallowPersonClone.address.number = 456;
console.log({ person, shallowPersonClone });
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*SQ9xC_YZWBtp6B0wzNojuA.png" alt=""></p>
<p>Both <code>person</code> and <code>shallowPersonClone</code> were mutated because their children share the same reference!</p>
<h4 id="safenestedmutation">Safe Nested Mutation</h4>
<p>To safely mutate nested properties, we need a <em>deep</em> clone.</p>
<pre><code class="language-js">const person = {
name: 'Bobo',
address: { street: 'Main Street', number: 123 }
};
const deepPersonClone = JSON.parse(JSON.stringify(person));
deepPersonClone.address.number = 456;
console.log({ person, deepPersonClone });
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jHvmu2WnepV_UbhIQw-9vQ.png" alt=""></p>
<p>Now you’re guaranteed safety because they’re truly two separate entities!</p>
<h3 id="summary">Summary</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*_FwSya9ut_O6gmfe.png" alt=""></p>
<ul>
<li>A function’s pure if it’s free from side-effects and returns the same output, given the same input.</li>
<li>Side-effects include: mutating input, HTTP calls, writing to disk, printing to the screen.</li>
<li>You can safely <em>clone</em>, <em>then</em> <em>mutate</em>, your input. Just leave the original one untouched.</li>
<li>Spread syntax (<code>…</code> syntax) is the easiest way to <em>shallowly</em> clone objects.</li>
<li><code>JSON.parse(JSON.stringify(object))</code> is the easiest way to <em>deeply</em> clone objects. Thanks again <a href="https://medium.com/@rodrigo_98972">Rodrigo Fernández Díaz</a>!</li>
</ul>
<h3 id="myfreecourse">My Free Course</h3>
<p>This tutorial was from <strong>my completely free course</strong> on Educative.io, <a href="https://www.educative.io/collection/5070627052453888/5738600293466112?authorName=Yazeed%20Bzadough">Functional Programming Patterns With RamdaJS</a>!</p>
<p>Please consider taking/sharing it if you enjoyed this content.</p>
<p>It’s full of lessons, graphics, exercises, and runnable code samples to teach you a basic functional programming style using RamdaJS.</p>
<p>Thanks for reading! Until next time.</p>
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
