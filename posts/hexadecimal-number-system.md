---
card: "/images/default.jpg"
tags: [CSS]
description: Hexadecimal numbers, often shortened to “hex numbers” or “hex
author: "Milad E. Fahmy"
title: "The Hexadecimal Number System Explained"
created: "2021-08-15T19:30:45+02:00"
modified: "2021-08-15T19:30:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">The Hexadecimal Number System Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/malte-bickel-rGYdVCMQBCY-unsplash.jpg 300w,
/news/content/images/size/w600/2020/03/malte-bickel-rGYdVCMQBCY-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/03/malte-bickel-rGYdVCMQBCY-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/03/malte-bickel-rGYdVCMQBCY-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/malte-bickel-rGYdVCMQBCY-unsplash.jpg" alt="The Hexadecimal Number System Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Hexadecimal numbers, often shortened to “hex numbers” or “hex”, are numbers represented in base 16 as opposed to base 10 that we use for everyday arithmetic and counting.</p>
<p>In practical terms, this means that each column of a number written in hexadecimal can represent up to 16 values.</p>
<p>Digits in hexadecimal use the standard symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 to represent the corresponding value, and use the first six letters of the alphabet to represent the values 10 through 15 (E.G: A, B, C, D, E, F).</p>
<p>In programming, we prefix hexadecimal constants with <code>0x</code>, with some exceptions.</p>
<h3 id="examples-and-explanation"><strong>Examples and explanation</strong></h3><pre><code class="language-text">0x1        ==        1
0xF        ==        15
0xFF       ==        255
0xFFF      ==        4095
0x1000     ==        4096</code></pre>
<p>In the standard base 10 system, each column represents increasing powers of 10, while in base 16 each column represents increasing powers of 16.</p>
<p>As seen in the table example above, with one hex digit we can represent numbers up to and including 15. Add another column and we can represent numbers up to 255, 4095 with another column, and so on.</p>
<h2 id="uses-of-hexadecimal-in-low-level-programming"><strong>Uses of Hexadecimal in Low Level Programming</strong></h2>
<p>Hexadecimal first found its use in Computer Science as a convenience feature.</p>
<p>Data in our computers has a lowest common storage unit, the Byte. Each byte contains 8 bits, and is able to store a number between 0 and 255 inclusive.</p>
<p>Hexadecimal has the advantage of being terse and having well defined boundaries.</p>
<p>A single byte is always represented by two hexadecimal digits from 0x00 to 0xFF, the latter being the largest per-byte value of 255.</p>
<p>The terseness and byte-aligned nature of hexadecimal numbers make them a popular choice for software engineers working on low-level code-bases or embedded software.</p>
<h2 id="uses-of-hexadecimal-numbers-in-javascript"><strong>Uses of Hexadecimal Numbers in JavaScript</strong></h2>
<p>JavaScript supports the use of hexadecimal notation in place of any integer, but not decimals.</p>
<p>As an example, the number 2514 in hex is 0x9D2, but there is no language-supported way of representing 25.14 as a hex number.</p>
<p>Using hexadecimal in your code is a personal and stylistic choice, and has no effect on the underlying logic your code implements.</p>
<h2 id="uses-of-hexadecimal-numbers-in-css"><strong>Uses of Hexadecimal Numbers in CSS</strong></h2>
<p>CSS has for a long time used hexadecimal notation to represent color values. Consider the following selector:</p><pre><code class="language-css">.my-container {
background-color: #112233;
color: #FFFFFF;
}</code></pre>
<p>The <code>background-color</code>’s value is in fact three hex bytes.</p>
<p>The CSS processor treats these as three individual bytes, representing Red, Green, and Blue.</p>
<p>In our example, 11 corresponds to the Red color component, 22 corresponds to the Green color component, and 33 to the Blue color component.</p>
<p>There is currently no way as of CSS3 to define a color with an alpha component using hex. The proposed CSS4 Draft<sup>1</sup> includes a proposal to allow for an extra byte to specify alpha values.</p>
<p>For now, use of the standard <code>rgba()</code> function is the recommended way to add an alpha value to your colors.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
