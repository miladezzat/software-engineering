---
card: "https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg"
tags: [JavaScript]
description: Discover Functional JavaScript was named one of the best new
author: "Milad E. Fahmy"
title: "How to create a store using pure functions"
created: "2021-08-15T19:37:51+02:00"
modified: "2021-08-15T19:37:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a store using pure functions</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1QLyoQuirofEmDT1nE7LeA.jpeg" alt="How to create a store using pure functions">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p>
<p>Pure functions produce the same output value, given the same input. They have no side-effects, and are easier to read, understand and test.</p>
<p>Given all this, I would like to create a store that hides the state but at the same time uses pure functions.</p>
<h3 id="immutability">Immutability</h3>
<p>Pure functions don’t modify their input. They treat the input values as immutable.</p>
<p>An immutable value is a value that, once created, cannot be changed.</p>
<p><a href="https://facebook.github.io/immutable-js/" rel="noopener">Immutable.js</a> provides immutable data structures like <code>List</code>. An immutable data structure will create a new data structure at each action.</p>
<p>Consider the next code:</p><pre><code>import { List } from "immutable";
const list = List();
const newList = list.push(1);</code></pre>
<p><code>push()</code> creates a new list that has the new element. It doesn’t modify the existing list.</p>
<p><code>delete()</code> returns a new <code>List</code> where the element at the specified index was removed.</p>
<p>The <code>List</code> data structure offers a nice interface for working with lists in an immutable way, so I will use it as the state value.</p>
<h3 id="the-store">The Store</h3>
<p>The store manages state.</p>
<p>State is data that can change. The store hides that state data and offers a public set of methods for working with it.</p>
<p>I would like to create a book store with the <code>add()</code>, <code>remove()</code> and <code>getBy()</code> methods.</p>
<p>I want all these functions to be pure functions.</p>
<p>There will be two kind of pure functions used by the store:</p>
<ul>
<li>functions that will read and filter the state. I will call them getters.</li>
<li>functions that will modify the state. I will call them setters.</li>
</ul>
<p>Both these kinds of functions will take the state as their first parameter.</p>
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p>
<p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p>
<p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p>
<p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
