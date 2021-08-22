---
card: "https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to make complex problems easier by decomposing and composing"
created: "2021-08-16T11:34:35+02:00"
modified: "2021-08-16T11:34:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-web-development tag-programming tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to make complex problems easier by decomposing and composing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx 300w,
https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx 600w,
https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx 1000w,
https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*4H9f_YZRxP-lUtYx" alt="How to make complex problems easier by decomposing and composing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Our natural way of dealing with complexity is to break it into smaller pieces and then put everything back together.</p><p>This is a two step process:</p><ul><li>decompose the problem into smaller parts</li><li>compose the small parts to solve the problem</li></ul><p>We decompose in smaller parts because they are easier to understand and implement. The smaller parts can be developed in parallel.</p><p>The process of decomposition is about assigning responsibilities and giving names. This makes it easy to talk and reason about. Once we identify a responsibility, we can reuse it.</p><p>Composition is about combining the small parts together and establishing a relationship between them. We decide the way these pieces communicate, the order in which they execute, and how data flows between them.</p><p>We find a system hard to understand even if it is split in smaller parts, if there is a high number of relations between these parts. In order to make a system easier to understand, we need to minimize the number of possible connections between its parts.</p><h3 id="object-decomposition">Object decomposition</h3><p>Objects are more than state and behavior working together. Objects are things with responsibilities.</p><h4 id="decompose">Decompose</h4><p>In <a href="https://medium.freecodecamp.org/how-to-create-a-three-layer-application-with-react-8621741baca0" rel="noopener">How to create a three layer application with React</a>, I take a to-do list application and split the responsibilities between the following objects :</p><ul><li><code>TodoDataService</code> : responsible for the communication with the server Todo API</li><li><code>UserDataService</code> : responsible for the communication with the server User API.</li><li><code>TodoStore</code> : the domain store for managing to-dos. It is the single source of truth regarding to-dos.</li><li><code>UserStore</code> : the domain store for managing users.</li><li><code>TodoListContainer</code> : the root container component displaying the list of to-dos.</li></ul><p>As you can see, when decomposing, I assign responsibilities and give names.</p><h4 id="compose">Compose</h4><p>Next, I compose them together in a single function. This is the place where all objects are created and dependencies injected. It is called Composition Root.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
