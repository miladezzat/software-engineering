---
card: "/images/default.jpg"
tags: [JavaScript]
description: The toString() method is a built-in method of the JavaScript
author: "Milad E. Fahmy"
title: "JavaScript Number to String – How to Use toString to Convert an Int into a String"
created: "2021-08-15T19:26:53+02:00"
modified: "2021-08-15T19:26:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Number to String – How to Use toString to Convert an Int into a String</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/js-number-tostring.png 300w,
/news/content/images/size/w600/2021/03/js-number-tostring.png 600w,
/news/content/images/size/w1000/2021/03/js-number-tostring.png 1000w,
/news/content/images/size/w2000/2021/03/js-number-tostring.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/js-number-tostring.png" alt="JavaScript Number to String – How to Use toString to Convert an Int into a String">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The <code>toString()</code> method is a built-in method of the JavaScript <code>Number</code> object that allows you to convert any <code>number</code> type value into its <code>string</code> type representation.</p>
<h2 id="how-to-use-the-tostring-method-in-javascript">How to Use the toString Method in JavaScript</h2>
<p>To use the <code>toString()</code> method, you simply need to call the method on a <code>number</code> value. The following example shows how to convert the number value <code>24</code> into its string representation. Notice how the value of the <code>str</code> variable is enclosed in double quotation marks:</p>
var str = num.toString();
console.log(num); // 24
console.log(str); // "24"</code></pre>
<figcaption>Convert a number to string with toString() method</figcaption>
</figure>
<p>You can also call the <code>toString()</code> method immediately on a <code>number</code> value, but you need to add parentheses <code>()</code> to wrap the value or JavaScript will respond with an <code>Invalid or unexpected token</code> error.</p>
<p>The <code>toString()</code> method can also convert floating and negative numbers as shown below:</p>
(24).toString(); // "24"
(9.7).toString(); // "9.7"
(-20).toString(); // "-20"</code></pre>
<figcaption>Convert any type of numbers with toString() method</figcaption>
</figure>
<p>Finally, the <code>toString()</code> method also accepts the <code>radix</code> or <code>base</code> parameter. The <code>radix</code> allows you to convert a number from the decimal number system (base 10) to a string representing the number in other number systems.</p>
<p>Valid number systems for conversion include:</p>
<ul>
<li>Binary system (base 2) that has 2 digits, 0 and 1</li>
<li>Ternary system (base 3) that has 3 digits 0, 1, and 2</li>
<li>Quaternary system (base 4) that has 4 digits, 0, 1, 2 and 3</li>
<li>And so on up to the Hexatridecimal system (base 36) that has the combination of Arabic numerals 0 to 9 and Latin letters A to Z</li>
</ul>
<figcaption>The syntax for toString() method, accepting radix parameter</figcaption>
</figure>
<p>The <code>radix</code> parameters accept a <code>number</code> type data with values ranging from <code>2</code> to <code>36</code>. Here's an example of converting the decimal number <code>5</code> to its binary number (base 2) representation:</p>
console.log(str); // "101"</code></pre>
<figcaption>Converting decimal number to binary number with toString() method</figcaption>
</figure>
<p>The decimal number <code>5</code> from the code above is converted to its binary number equivalent of <code>101</code> and then converted to a string.</p>
<h2 id="how-to-use-other-data-types-with-the-tostring-method">How to Use Other Data Types with the toString() Method</h2>
<p>Aside from converting the <code>number</code> type, the <code>toString()</code> method is also available for converting other data types into their string representations.</p>
<p>For example, you can convert an <code>array</code> type into its <code>string</code> representation as follows:</p>
var str = arr.toString();
console.log(str); // "Nathan,Jack"</code></pre>
<figcaption>Convert an array to string with toString() method</figcaption>
</figure>
<p>Or a <code>boolean</code> type to <code>string</code> as shown below:</p><pre><code class="language-js">var bool = true;
var str = bool.toString();
console.log(str); // "true"</code></pre>
<p>But I think you will most often use the <code>toString()</code> method to convert a <code>number</code> to a <code>string</code> instead of the others. That's what I usually do, too :)</p>
<h2 id="thanks-for-reading-this-tutorial"><strong>Thanks for reading this tutorial</strong></h2>
<p>You may also be interested in other JavaScript tutorials that I've written, including <a href="https://sebhastian.com/javascript-tofixed/">Rounding Numbers with <code>toFixed()</code> Method</a> and <a href="https://sebhastian.com/javascript-absolute-value-math-abs/">Calculating Absolute Value with </a><code><a href="https://sebhastian.com/javascript-absolute-value-math-abs/">Math.abs</a>()</code>. They are two of the most commonly asked JavaScript problems.</p>
<p>I also have a <a href="https://sebhastian.com/newsletter/">free newsletter</a> about web development tutorials (mostly JavaScript-related).</p>
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
