---
card: "https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to use Decorators with Factory Functions"
created: "2021-08-15T23:48:02+02:00"
modified: "2021-08-15T23:48:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-coding tag-programming tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Decorators with Factory Functions</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3ALgV0tL7sOWLtReXTVDJg.jpeg" alt="How to use Decorators with Factory Functions">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Method decorators are a tool for reusing common logic. They are complementary to Object Oriented Programming. Decorators encapsulate responsibility shared by different objects.</p><p><a href="https://jsfiddle.net/cristi_salcescu/0tv3y06p/" rel="noopener">Consider the following code</a>:</p><pre><code>function TodoStore(currentUser){
let todos = [];
function add(todo){
let start = Date.now();
if(currentUser.isAuthenticated()){
todos.push(todo);
} else {
throw "Not authorized to perform this operation";
}
let duration = Date.now() - start;
console.log("add() duration : " + duration);
}
return Object.freeze({
add
});
}</code></pre><p>The intent of the <code>add()</code> method is to add new to-dos to the internal state. Beside that, the method needs to check the user authorization and log the duration of execution. These two things are secondary concerns and can actually repeat in other methods.</p><p>Imagine we can encapsulate these secondary responsibilities in functions. Then we can write the code in the following way:</p><pre><code>function TodoStore(){
let todos = [];
function add(todo){
todos.push(todo);
}
return Object.freeze({
add:compose(logDuration,authorize)(add)
});
}</code></pre><p>Now the <code>add()</code> method just adds the <code>todo</code> to the list. The other responsibilities are implemented by decorating the method.</p><p><code>logDuration()</code> and <code>authorize()</code> are decorators.</p><blockquote>A <strong>function decorator</strong> is a higher-order function that takes one function as an argument and returns another function, and the returned function is a variation of the argument function.</blockquote><blockquote>Reginald Braithwaite in <a href="https://leanpub.com/javascript-allonge/read#decorators" rel="noopener">Javascript Allongé</a></blockquote><h3 id="log-duration">Log Duration</h3><p>A common scenario is logging the duration of a method call. <a href="https://jsfiddle.net/cristi_salcescu/z8hh356e/" rel="noopener">The following decorator</a> logs the duration of a synchronous call.</p><pre><code>function logDuration(fn){
return function decorator(...args){
let start = Date.now();
let result = fn.apply(this, args);
let duration = Date.now() - start;
console.log(fn.name + "() duration : " + duration);
return result;
}
}</code></pre><p>Notice how the original function was called — by passing in the current value of <code>this</code> and all arguments : <code>fn.apply(this, args)</code> .</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
