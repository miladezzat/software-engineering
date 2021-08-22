---
card: "https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h"
tags: [Programming]
description: "As a language, C++ has evolved a lot."
author: "Milad E. Fahmy"
title: "Some awesome modern C++ features that every developer should know"
created: "2021-08-16T11:29:26+02:00"
modified: "2021-08-16T11:29:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-coding tag-tech tag-software-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Some awesome modern C++ features that every developer should know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h 300w,
https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h 600w,
https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h 1000w,
https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*IttEgAi22EwkjY2h" alt="Some awesome modern C++ features that every developer should know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// do some stuff here
} else {
// else has the scope of x
// do some other stuff
std::pair user = {"M", 25}; // C++17</code></pre><p>The type of deduction is done implicitly. This becomes even more convenient for <code><strong>tuple</strong></code>.</p><pre><code class="language-c++">// previous
std::tuple&lt;std::string, std::string, int&gt; user ("M", "Chy", 25);
// deduction in action!
std::tuple user2("M", "Chy", 25);</code></pre><p>This feature above won’t make any sense if you are not quite familiar with C++ templates.</p><h4 id="smart-pointers">Smart pointers</h4><p>Pointers can be hellish.</p><p>Due to the freedom that languages like C++ provide to programmers, it sometimes becomes very easy to shoot yourself in the foot. And in many cases, pointers are responsible for the harm.</p><p>Luckily, C++11 introduced smart pointers, pointers that are far more convenient than raw pointers. They help programmers to prevent memory-leaks by freeing it when possible. They also provide exception safety.</p><p>I thought of writing about the smart pointers in C++ in this post. But apparently, there are lots of important details about them. They deserve their own post and I am certainly willing to write one about them in near future.</p><p>That’s all for today. Remember that C++ actually added a lot more newer features in the latest versions of the language. You should check them out if you feel interested. Here is an awesome repository on modern C++ which is literally named <a href="https://github.com/rigtorp/awesome-modern-cpp" rel="noopener">Awesome Modern C++</a>!</p><p>Adios!</p>
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
