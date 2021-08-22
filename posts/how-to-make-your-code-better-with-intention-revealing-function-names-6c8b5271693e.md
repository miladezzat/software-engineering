---
card: "https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to make your code better with intention-revealing function names"
created: "2021-08-16T11:44:53+02:00"
modified: "2021-08-16T11:44:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your code better with intention-revealing function names</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*C0YINGVSuF-kLTCynyBwCw.jpeg" alt="How to make your code better with intention-revealing function names">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Code is a way to communicate with developers reading it. Functions with intention-revealing names are easier to read. We read the function name and can understand its purpose. The function name is our tool for expressing intent on a piece of code.</p><p>Let’s look at a <a href="https://jsfiddle.net/cristi_salcescu/pujuve88/" rel="noopener">list of operations done in a functional style</a> with the use of anonymous functions.</p><pre><code>function getTodos(users){
return todos
.filter(todo =&gt; !todo.completed &amp;&amp; todo.type === "RE")
.map(todo =&gt; ({
title : todo.title,
userName : users[todo.userId].name
}))
.sort((todo1, todo2) =&gt;
todo1.userName.localeCompare(todo2.userName));
}</code></pre><p>Now check the same functionality refactored using functions with intention-revealing names.</p><pre><code>function isTopPriority(todo){
return !todo.completed &amp;&amp; todo.type === "RE";
}
function ascByUserName(todo1, todo2){
return todo1.userName.localeCompare(todo2.userName);
}
function getTodos(users){
function toViewModel(todo){
return {
title : todo.title,
userName : users[todo.userId].name
}
}
return todos.filter(isTopPriority)
.map(toViewModel).sort(ascByUserName);
}</code></pre><p>Function names give clarity to the code. With a good function name, you just have to read the name — you don’t need to analyze its code to understand what it does.</p><blockquote><em>It’s widely estimated that developers spend 70% of code maintenance time on reading to understand it.</em></blockquote><blockquote><em>Kyle Simpson in <a href="https://www.amazon.com/Functional-Light-JavaScript-Pragmatic-Balanced-FP-ebook/dp/B0787DBFKH/ref=sr_1_1?ie=UTF8&amp;qid=1519405569&amp;sr=8-1&amp;keywords=kyle+simpson+functional&amp;dpID=41de4aNCSQL&amp;preST=_SX342_QL70_&amp;dpSrc=srch" rel="noopener">Functional-Light JavaScript</a></em></blockquote><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
