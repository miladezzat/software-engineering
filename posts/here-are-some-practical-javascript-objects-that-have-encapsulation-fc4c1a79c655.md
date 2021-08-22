---
card: "https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Here are some practical JavaScript objects that have encapsulation"
created: "2021-08-16T11:43:13+02:00"
modified: "2021-08-16T11:43:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-coding tag-technology tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Here are some practical JavaScript objects that have encapsulation</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*lMkY1zO_hMbQURoXEMuLgA.png" alt="Here are some practical JavaScript objects that have encapsulation">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Encapsulation means information hiding. It’s about hiding as much as possible of the object’s internal parts and exposing a minimal public interface.</p><p>The simplest and most elegant way to create encapsulation in JavaScript is using closures. A closure can be created as a function with private state. When creating many closures sharing the same private state, we create an object.</p><p>I’m going to build a few objects that can be useful in an application: Stack, Queue, Event Emitter, and Timer. All will be built using factory functions.</p><p>Let’s start.</p><h3 id="stack">Stack</h3><p>Stack is a data structure with two principal operation: <code>push</code> for adding an element to the collection, and <code>pop</code> for removing the most recent element added. It adds and removes elements according to the Last In First Out (LIFO) principle.</p><p>Look at the next example:</p><pre><code>let stack = Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); //3
stack.pop(); //2</code></pre><p><a href="https://jsfiddle.net/cristi_salcescu/6a1btczx/" rel="noopener">Let’s implement the stack</a> using a factory function.</p><pre><code>function Stack(){
let list = [];
function push(value){ list.push(value); }
function pop(){ return list.pop(); }
return Object.freeze({
push,
pop
});
}</code></pre><p>The stack object has two public methods <code>push()</code> and <code>pop()</code>. The internal state can only be changed through these methods.</p><pre><code>stack.list; //undefined</code></pre><p>I can’t modify directly the internal state:</p><pre><code>stack.list = 0;//Cannot add property list, object is not extensible</code></pre><p>You can find more in the <a href="https://www.amazon.com/dp/B07PBQJYYG">Discover Functional JavaScript</a> book.</p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
