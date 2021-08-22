---
card: "https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52"
tags: [JavaScript]
description: by artismarti
author: "Milad E. Fahmy"
title: "How to reverse a number in JavaScript"
created: "2021-08-15T19:37:33+02:00"
modified: "2021-08-15T19:37:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-algorithms tag-tech tag-women-who-code tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to reverse a number in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52 300w,
https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52 600w,
https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52 1000w,
https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*9bS6yWpHz8_tuY52" alt="How to reverse a number in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by artismarti</p>
<h1 id="how-to-reverse-a-number-in-javascript">How to reverse a number in JavaScript</h1>
<h4 id="examples-using-an-arrow-function-and-regular-js-function">Examples using an arrow function and regular JS function</h4>
<figcaption>Photo by <a href="https://unsplash.com/@chuttersnap?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">chuttersnap</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Reversing a string or reversing a number is one of the common questions asked at programming interviews. Let’s take a look at how this is done.</p>
<h4 id="rules-limitations-"><strong>Rules/Limitations</strong>:</h4>
<ul>
<li>Negative numbers should remain negative.</li>
</ul>
<p><strong><em>ex.</em></strong> <code>-12345</code><em>becomes</em> <code>-54321</code></p>
<ul>
<li>Any leading zeroes should be removed.</li>
</ul>
<p><strong><em>ex.</em></strong> <code>321000</code> <em>becomes</em> <code>123</code> <em>&amp; not </em><code>000123</code></p>
<ul>
<li>The function can accept floats or integers.</li>
</ul>
<p><strong><em>ex.</em></strong> <code>543.2100</code> <em>becomes</em> <code>12.345</code></p>
<ul>
<li>The function will return integers as integers.</li>
</ul>
<p><strong><em>ex.</em></strong> <code>54321</code> <em>becomes</em> <code>12345</code> <em>&amp; not </em><code>12345.00</code></p>
<h4 id="solving-with-an-arrow-function-"><strong>Solving with an Arrow Function:</strong></h4><pre><code class="language-js">const reversedNum = num =&gt; parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)</code></pre>
<h4 id="solving-with-a-regular-function-"><strong>Solving with a Regular Function:</strong></h4><pre><code class="language-js">function reversedNum(num) {
return (
parseFloat(
num
.toString()
.split('')
.reverse()
.join('')
) * Math.sign(num)
)
}</code></pre>
<h4 id="difference-between-an-arrow-function-regular-function-"><strong><em>Difference between an Arrow function &amp; Regular function:</em></strong></h4>
<p>In this example, the only difference between the Arrow Function and the Regular function is that the Regular function needs to provide an explicit <code>return</code> value.</p>
<p>Arrow functions have an implicit <code>return</code> value — if they can be written in one line, without the need for the<code>{}</code> braces.</p>
<h4 id="let-s-break-the-steps-down-"><strong>Let’s break the steps down:</strong></h4>
<ul>
<li><strong>Convert the number to a string</strong></li>
</ul>
<p><code>num.toString()</code> converts the given number into a String. We do this so we can use the <code>split</code> function on it next.</p><pre><code class="language-js">let num = -5432100
num.toString()
// num = '-5432100'</code></pre>
<ul>
<li><strong>Split the String into an Array</strong></li>
</ul>
<p><code>num.split('')</code> converts the String into an Array of characters. We do this so we can use the Array reverse function (<em>which does not work on a String</em>).</p><pre><code class="language-js">// num = '-5432100'
num.split('')
// num = [ '-', '5', '4', '3', '2', '1', '0', '0' ]</code></pre>
<ul>
<li><strong>Reverse the Array</strong></li>
</ul>
<p><code>num.reverse()</code> reverses the order of the items in the array.</p><pre><code class="language-js">// num = [ '-', '5', '4', '3', '2', '1', '0', '0' ]
num.reverse()
// num = [ '0', '0', '1', '2', '3', '4', '5', '-' ]</code></pre>
<ul>
<li><strong>Join it back into a string</strong></li>
</ul>
<p><code>num.join('')</code> reassembles the reversed characters into a String.</p><pre><code class="language-js">// num = [ '0', '0', '1', '2', '3', '4', '5', '-' ]
num.join('')
// num = '0012345-'</code></pre>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" rel="noopener"><strong>Parse</strong></a><strong> the input value into a floating point number:</strong></li>
</ul>
<p><code>parseFloat(num)</code> converts <code>num</code> into a float from a String.</p><pre><code class="language-js">// num = '0012345-'
parseFloat(num)
// num = 12345</code></pre>
<p><strong>Note</strong>:<em> </em><code>parseFloat</code><em> </em>runs in the end<em> (even though it is on the first line of the function) </em>on the reversed number and removes any leading zeroes.</p>
<ul>
<li><strong>Multiply it by the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign" rel="noopener">sign</a> of the original number — to maintain the negative value.</strong></li>
</ul>
<p><code>num * Math.sign(num)</code> multiplies the number with the sign of the original number provided.</p><pre><code class="language-js">// original value of num = -5432100
// num = 12345
num * Math.sign(-5432100)
// num = -12345</code></pre>
<p>And, there you have it!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
