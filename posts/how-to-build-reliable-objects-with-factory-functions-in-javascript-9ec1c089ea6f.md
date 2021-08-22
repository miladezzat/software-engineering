---
card: "https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to build reliable objects with factory functions in JavaScript"
created: "2021-08-16T11:38:16+02:00"
modified: "2021-08-16T11:38:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-tutorial tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build reliable objects with factory functions in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LBX1CRHCljE9BkuxOZUhmg.jpeg" alt="How to build reliable objects with factory functions in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>I suggest to take into consideration these ideas for building reliable objects in JavaScript:</p><ul><li>Split objects in two: data objects and behavior objects</li><li>Make the data objects immutable</li><li>Expose behavior and hide data in behavior objects</li><li>Build testable behavior objects</li></ul><h3 id="data-vs-behavior-objects">Data vs Behavior Objects</h3><p>Essentially there are two kinds of objects in an application:</p><ul><li><strong>Data Objects — </strong>expose data</li><li><strong>Behavior Objects — </strong>expose behavior and hide data</li></ul><h4 id="data-objects">Data Objects</h4><p>Data objects expose data. They are used to structure and transfer data inside the application.</p><p>Let’s take the case of a to-do list application.</p><p>This is how the to-do data object, gotten from the server, may look:</p><pre><code class="language-js">{ id: 1, title: "This is a title", userId: 10, completed: false }</code></pre><p>And this is how a data object used to display information in the view may look:</p><pre><code class="language-js">{ id: 1, title: "This is a title", userName: "Cristi", completed: false };</code></pre><p>As you can see, both objects contain only data. There is a small difference between them: the data object for the view has <code>userName</code> instead of the <code>userId</code>.</p><p>Data objects are plain objects, usually built with object literals.</p><h4 id="behavior-objects">Behavior Objects</h4><p>Behavior objects expose methods and hide data.</p><p>Behavior objects act on data objects. They may take data objects as inputs or return data objects.</p><p>I’ll take the case of the <code>TodoStore</code> object. The responsibility of the object is to store and manage the list of to-dos. It makes the synchronization with the server using the <code>dataService</code> object.</p><p>Read <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a> and learn how to build apps in function style.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y&amp;source=post_page---------------------------"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>You can find me on <a href="https://medium.com/@cristiansalcescu">Medium</a> and <a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Twitter</a>.</p>
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
