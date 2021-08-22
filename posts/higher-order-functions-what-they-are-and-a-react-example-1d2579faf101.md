---
card: "https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg"
tags: [JavaScript]
description: "There are so many phrases that get thrown around at tech meet"
author: "Milad E. Fahmy"
title: "Higher-order functions: what they are, and a React example"
created: "2021-08-16T11:31:00+02:00"
modified: "2021-08-16T11:31:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-react tag-software-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Higher-order functions: what they are, and a React example</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*x4AH7NNM6KIASH0-9dOKOg.jpeg" alt="Higher-order functions: what they are, and a React example">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
`${name}, ${randomNum}`</code></pre><p>We have a function, called <code>details</code>, into which we pass <code>props</code>. We are deconstructing them as they come in and assigning them to local variables <code>name</code> and <code>randomNum</code>. This is ES6 syntax — if it looks unfamiliar give it a google (you’ll love it).</p><p>This is a <strong>first-order function</strong> — it takes one argument (a <code>props</code> object) and returns a template literal.</p><h4 id="higher-order-component">Higher-order component</h4><pre><code>const hoc = (component, props) =&gt; {
const randomNum = Math.floor(Math.random() * 100)
return component({ ...props, randomNum })
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
