---
card: "https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Class vs Factory function: exploring the way forward"
created: "2021-08-16T11:45:42+02:00"
modified: "2021-08-16T11:45:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-tech tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Class vs Factory function: exploring the way forward</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*2g8eIVimndik43W_Jl_OCA.jpeg" alt="Class vs Factory function: exploring the way forward">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>ECMAScript 2015 (aka ES6) comes with the <code>class</code> syntax, so now we have two competing patterns for creating objects. In order to compare them, I’ll create the same object definition (TodoModel) as a class,<strong> </strong>and then as a factory function.</p><p><strong><a href="https://jsfiddle.net/cristi_salcescu/m9dhpzfx/" rel="noopener">TodoModel as a Class</a></strong></p><pre><code>class TodoModel {
constructor(){
this.todos = [];
this.lastChange = null;
}
addToPrivateList(){
console.log("addToPrivateList");
}
add() { console.log("add"); }
reload(){}
}</code></pre><p><strong><a href="https://jsfiddle.net/cristi_salcescu/bcta6yyv/" rel="noopener">TodoModel as a Factory Function</a></strong></p><pre><code>function TodoModel(){
var todos = [];
var lastChange = null;
function addToPrivateList(){
console.log("addToPrivateList");
}
function add() { console.log("add"); }
function reload(){}
return Object.freeze({
add,
reload
});
}</code></pre><h3 id="encapsulation">Encapsulation</h3><p>The first thing we notice is that all members, fields, and methods of a class object are public.</p><pre><code>var todoModel = new TodoModel();
console.log(todoModel.todos);     //[]
console.log(todoModel.lastChange) //null
todoModel.addToPrivateList();     //addToPrivateList</code></pre><p>The lack of encapsulation may create security problems. Take the example of a global object that can be modified directly from the Developer Console.</p><p>When using factory function, only the methods we expose are public, everything else is encapsulated.</p><pre><code>var todoModel = TodoModel();
console.log(todoModel.todos);     //undefined
console.log(todoModel.lastChange) //undefined
todoModel.addToPrivateList();     //taskModel.addToPrivateList
is not a function</code></pre><h3 id="this">this</h3><p><code>this</code> losing context problems are still there when using class. For example, <code>this</code> is losing context in nested functions. It is not only annoying during coding, but it’s also a constant source of bugs.</p><pre><code>class TodoModel {
constructor(){
this.todos = [];
}
reload(){
setTimeout(function log() {
console.log(this.todos);    //undefined
}, 0);
}
}
todoModel.reload();             //undefined</code></pre><p>or <code>this</code> is losing context when the method is used as a callback, like on a DOM event.</p><pre><code>$("#btn").click(todoModel.reload);    //undefined</code></pre><p>There are no such problems when using a factory function, as it doesn’t use <code>this</code> at all.</p><pre><code>function TodoModel(){
var todos = [];
function reload(){
setTimeout(function log() {
console.log(todos);        //[]
}, 0);
}
}
todoModel.reload();             //[]
$("#btn").click(todoModel.reload);    //[]</code></pre><h4 id="this-and-arrow-function">this and arrow function</h4><p>The arrow function partially solves the <code>this</code> loosing context issues in classes, but at the same time creates a new problem:</p><ul><li><code>this</code> is no longer loosing context in nested functions</li><li><code>this</code> is loosing context when the method is used as a callback</li><li>arrow function promotes the use of anonymous functions</li></ul><p><a href="https://jsfiddle.net/cristi_salcescu/y0k18og2/" rel="noopener">I refactored the <code>TodoModel</code> using the arrow function</a>. It’s important to note that in the process of refactoring to the arrow function we can loose something very important for readability, the function name. <a href="https://jsfiddle.net/cristi_salcescu/y0k18og2/" rel="noopener">Look for example</a> at:</p><pre><code>//using function name to express intent
setTimeout(function renderTodosForReview() {
/* code */
}, 0);
//versus using an anonymous function
setTimeout(() =&gt; {
/* code */
}, 0);</code></pre><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
