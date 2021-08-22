---
card: "https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png"
tags: [Web Development]
description: "Material Design is a design language created by Google. Accor"
author: "Milad E. Fahmy"
title: "A quick introduction to Material Design using Materialize"
created: "2021-08-16T10:16:30+02:00"
modified: "2021-08-16T10:16:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-web-design tag-design tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to Material Design using Materialize</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Jie55HRpeCmZpmldgrL2eQ.png" alt="A quick introduction to Material Design using Materialize">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"&gt;
&lt;!--Compiled and minifed jQuery --&gt;
&lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"&gt;&lt;/script&gt;
&lt;!-- Compiled and minified JavaScript --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"&gt;&lt;/script&gt;</code></pre><h3 id="colors"><a href="http://materializecss.com/color.html" rel="noopener">Colors</a></h3><p>Using Materialize, you can change the color of any HTML element by simply giving it a class name of the color you want. For example, if you want to give your paragraph tag the color red, you do the following:</p><pre><code>&lt;p class=”red”&gt;Lorem Ipsum&lt;/p&gt;</code></pre><p>Additionally, you can also lighten or darken a color by giving it another class name <code>lighten-1</code> or <code>darken-1</code>. For example, <code>&lt;h1 class=”blue lighten-1”&gt;Sample Tex</code>t&lt;/h1&gt;. The 1 can be replaced with numbers up to 5 for lighten and up to 4 for darken. Higher numbers would apply lighter or darker shades of the color.</p><h3 id="buttons"><a href="http://materializecss.com/buttons.html" rel="noopener">Buttons</a></h3><p>To Materialize a button, just give it the class name <code>btn</code>. You can also add a cool animation to it by giving it another class <code>waves-effect</code>. If you need a larger button, <code>btn-large</code> class can be used. For example:</p><pre><code class="language-html">&lt;button class=”btn”&gt;
Click
&lt;/button&gt; &lt;!-- Materialized button without click animation --&gt;
&lt;button class="btn waves-effect"&gt;
Click
&lt;/button&gt; &lt;!-- Materialized button with click animation --&gt;
&lt;button class="btn-large"&gt;
Click
&lt;/button&gt; &lt;!-- Large Button --&gt;</code></pre><h3 id="shadow"><a href="http://materializecss.com/shadow.html" rel="noopener">Shadow</a></h3><blockquote>In material design, everything should have a certain z-depth that determines how far raised or close to the page the element is.</blockquote><p>To apply a shadow-effect to an element, the <code>z-depth-2</code> class can be used (2 can be replaced with numbers 1–5). For example:</p><pre><code class="language-html">&lt;div class="z-depth-2"&gt;&lt;!-- Really cool stuff --&gt;&lt;/div&gt;
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
