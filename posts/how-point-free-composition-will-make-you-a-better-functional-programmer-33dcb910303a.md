---
card: "https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How point-free composition will make you a better functional programmer"
created: "2021-08-16T11:44:21+02:00"
modified: "2021-08-16T11:44:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-functional-programming tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How point-free composition will make you a better functional programmer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*a5N4vokpfnlmUnnJMou9zw.jpeg" alt="How point-free composition will make you a better functional programmer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><blockquote>"Point-free style — aims to reduce some of the visual clutter by removing unnecessary parameter-argument mapping." - Kyle Simpson in <a href="https://www.amazon.com/Functional-Light-JavaScript-Pragmatic-Balanced-FP-ebook/dp/B0787DBFKH/ref=sr_1_1?ie=UTF8&amp;qid=1519405569&amp;sr=8-1&amp;keywords=kyle+simpson+functional&amp;dpID=41de4aNCSQL&amp;preST=_SX342_QL70_&amp;dpSrc=srch" rel="noopener">Functional-Light JavaScript</a></blockquote><p>Consider the flowing code:</p><pre><code>let newBooks = books.filter(point =&gt; isTechnology(point))</code></pre><p>Now look at the same code after eliminating points (parameters/arguments):</p><pre><code>let newBooks = books.filter(isTechnology)</code></pre><h3 id="point-free-in-list-operations">Point-free in List Operations</h3><p>Let’s do list operations in a point-free style.</p><p>Say we need to find the technology titles in a list of books, prepare the book object with all information for the view, and sort the books by the author’s name.</p><p><a href="https://jsfiddle.net/cristi_salcescu/j2mzyvau/" rel="noopener">Here</a> is how the code would look:</p><pre><code>function getBooks(){
return books.filter(isTechnology)
.map(toBookView)
.sort(ascByAuthor);
}
//Small functions with points
function isTechnology(book){
return book.type === "T";
}
function toBookView(book){
return Object.freeze({
title : book.title,
author : authors[book.authorID].name
});
}
function ascByAuthor(book1, book2){
if(book1.author &lt; book2.author) return -1;
if(book1.author &gt; book2.author) return 1;
return 0;
}</code></pre><p>The callbacks <code>isTechnology()</code>, <code>toBookView()</code>, <code>ascByAuthor()</code> are small functions with intention-revealing names. They are not built in a point-free style.</p><p>The code assembling all these functions in <code>getBooks()</code> is point-free.</p><h4 id="decomposition-and-composition">Decomposition and composition</h4><p>Our natural way of dealing with a problem is to break it into smaller pieces and then put everything back together.</p><p>We break the bigger task up into several functions doing smaller tasks. Then we re-combine these smaller functions to solve the initial problem.</p><p>Let’s read the requirements again:</p><blockquote>We need to find the technology titles in a list of books, prepare the book object with all information for the view, and sort the books by the author’s name.</blockquote><p>We created:</p><ul><li><code>isTechnology()</code> predicate to check if it’s a technology book</li><li><code>toViewBook()</code> to build an object with all the information for the view</li><li><code>ascByAuthorname()</code> to sort two books ascending by the author’s name</li><li><code>getBooks()</code> to combine all these small functions together in a point-free style</li></ul><pre><code>function getBooks(){
return books.filter(isTechnology)
.map(toBookView)
.sort(ascByAuthor);
}</code></pre><h3 id="steps-towards-point-free-composition">Steps towards point-free composition</h3><p>There is no additional anonymous callback when doing point-free composition. No <code>function</code> keyword, no arrow syntax <code>=&amp;</code>gt; . All we see are function names.</p><ul><li>In most cases, extract out the callbacks in named functions.</li><li>In simple cases, just use an utility function from the toolbox to create the callback on the fly. <a href="#2428" rel="noopener">Look at</a> the <code>prop()</code> function, for example.</li><li>Write the coordinator function in a point-free style.</li></ul><h4 id="small-functions">Small functions</h4><p>The consequence of writing code this way is a lot of small functions with intention revealing names. Naming these small functions requires time, but if it’s done well, it will make the code easier to read.</p><p>There will be two kinds of functions:</p><ul><li>Functions doing one task: they are pure or closure functions. Usually they are not built in a point-free style, but instead have good names.</li><li>Functions coordinating a lot of tasks: joining these small tasks in a point-free style makes it easier to read.</li></ul><h4 id="not-everything-is-point-free">Not everything is point-free</h4><p>I’m not aiming at having everything point-free. I’m aiming for point-free in specific places, especially when composing functions.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
