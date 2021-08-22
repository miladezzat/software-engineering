---
card: "/images/default.jpg"
tags: [JavaScript]
description: Have you wondered what happens when you freeze the prototype
author: "Milad E. Fahmy"
title: "What Happens When You Freeze a Prototype in JavaScript"
created: "2021-08-15T19:29:26+02:00"
modified: "2021-08-15T19:29:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What Happens When You Freeze a Prototype in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/DSC03702.JPG 300w,
/news/content/images/size/w600/2020/05/DSC03702.JPG 600w,
/news/content/images/size/w1000/2020/05/DSC03702.JPG 1000w,
/news/content/images/size/w2000/2020/05/DSC03702.JPG 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/DSC03702.JPG" alt="What Happens When You Freeze a Prototype in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you wondered what happens when you freeze the prototype of an object? Let's find out together.</p>
<h2 id="objects">Objects</h2>
<p>In JavaScript, objects are dynamic collections of properties with a “hidden” property. We start by creating such an object using the object literal syntax.</p><pre><code class="language-js">const counter = {
count: 0,
increment(){
this.count += 1;
return this.count;
},
decrement(){
this.count -= 1;
return this.count
}
}
console.log(counter.increment())</code></pre>
<p> <code>counter</code> is an object with a field and two methods operating on it.</p>
<h2 id="prototypes">Prototypes</h2>
<p>Objects can inherit properties from prototypes. As a matter of fact, the <code>counter</code> object already inherits from the <code>Object.prototype</code> object. </p>
<p>For example we can call the <code>toString()</code> method on the <code>counter</code> object even if we haven’t defined it.</p><pre><code class="language-js">counter.toString();</code></pre>
<p>The best way to work with prototypes is to extract out the methods in the prototype and then share them between all objects having the same behavior. Let’s do that using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" rel="noopener">Object.create()</a>.</p><pre><code class="language-js">const counterPrototype = {
increment(){
this.count += 1;
return this.count;
},
decrement(){
this.count -= 1;
return this.count
}
}
const counter = Object.create(counterPrototype);
counter.count = 0;
console.log(counter.increment())
//1</code></pre>
<p>The <code>Object.create()</code> creates a new object, using an existing object as the prototype of the new object. &nbsp;<code>counter</code> has &nbsp;<code>counterPrototype</code> as its prototype. </p>
<p>The prototype system is flexible but has some downfalls. All properties are public and can be changed. </p>
<p>For example, we can redefine the implementation of the <code>increment()</code> object in the <code>counter</code> object.</p><pre><code class="language-js">const counter = Object.create(counterPrototype);
counter.count = 0;
counter.increment = function(){
console.log('increment')
}
console.log(counter.increment());
//"increment"</code></pre>
<h2 id="freezing-prototypes">Freezing Prototypes</h2>
<p>Let’s see what happens if we freeze the prototype. Freezing an object doesn’t allow us to add, remove, or change its properties.</p><pre><code class="language-js">const counterPrototype = Object.freeze({
increment(){
this.count += 1;
return this.count;
},
decrement(){
this.count -= 1;
return this.count
}
});
counterPrototype.increment = function(){
console.log('increment')
}
//Cannot assign to read only property 'increment' of object '#'</code></pre>
<p>The <code>Object.freeze()</code> freezes an object. A frozen object can no longer be changed. We cannot add, edit, or remove properties from it.</p>
<p>Now take a look at what happens when trying to change the method in the <code>counter</code> object inheriting from <code>counterPrototype</code>.</p><pre><code class="language-js">const counter = Object.create(counterPrototype);
counter.count = 0;
counter.increment = function(){
console.log('increment')
}
//Cannot assign to read only property 'increment' of object
console.log(counter.increment());
//1</code></pre>
<p>As you can see now that the prototype is frozen we are not able to change the <code>increment()</code> method in the <code>counter</code> object. </p>
<h2 id="recap">Recap</h2>
<p>Objects have a hidden property referring their prototype.</p>
<p>The prototype is usually used to keep the methods that are shared between different objects.</p>
<p>Freezing the prototype does not allow us to change those properties in the objects inheriting from that prototype. The other properties can be changed.</p>
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="noopener nofollow"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/best-functional-programming-books" rel="noopener nofollow"><strong><strong>best Functional Programming books</strong></strong> by BookAuthority</a>!</p>
<p>For more on applying functional programming techniques to React take a look at <strong><strong><a href="https://www.amazon.com/dp/B088FZQ1XN">Functional React</a>.</strong></strong></p>
<p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p>
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
