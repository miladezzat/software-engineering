---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg"
tags: [JavaScript]
description: The parseInt() function parses a string argument and returns
author: "Milad E. Fahmy"
title: "How to Convert a String to a Number in JavaScript (with Examples)"
created: "2021-08-15T19:30:47+02:00"
modified: "2021-08-15T19:30:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Convert a String to a Number in JavaScript (with Examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb1740569d1a4ca33a5.jpg" alt="How to Convert a String to a Number in JavaScript (with Examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="converting-strings-to-numbers"><strong>Converting Strings to Numbers</strong></h2>
<p>The <code>parseInt()</code> function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).</p><pre><code class="language-js">parseInt(string, radix);</code></pre>
<h3 id="parameters"><strong>Parameters</strong></h3><pre><code class="language-text">string</code></pre>
<p>The value to parse. If the <code>string</code> argument is not a string, then it is converted to a string (using the <code>ToString</code> abstract operation). Leading whitespace in the string argument is ignored.’= radix An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify <code>10</code> for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10. Return value An integer number parsed from the given string. If the first character cannot be converted to a number, <code>NaN</code> is returned.</p>
<h3 id="description"><strong>Description</strong></h3>
<p>The <code>parseInt</code> function converts its first argument to a string, parses it, and returns an integer or <code>NaN</code>. If not <code>NaN</code>, the returned value will be the integer that is the first argument taken as a number in the specified radix (base). For example, a radix of 10 indicates to convert from a decimal number, 8 octal, 16 hexadecimal, and so on. For radices above <code>10</code>, the letters of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16),<code>A</code> through <code>F</code> is used.</p>
<p>If <code>parseInt</code> encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. <code>parseInt</code> truncates numbers to integer values. Leading and trailing spaces are allowed.</p>
<p>Because some numbers include the <code>e</code> character in their string representation (e.g. <code>6.022e23</code>), using <code>parseInt</code> to truncate numeric values will produce unexpected results when used on very large or very small numbers. <code>parseInt</code> should not be used as a substitute for <code>Math.floor()</code>.</p>
<p>If radix is <code>undefined</code> or 0 (or absent), JavaScript assumes the following:</p>
<ul>
<li>If the input <code>string</code> begins with “0x” or “0X”, radix is 16 (hexadecimal) and the remainder of the string is parsed.</li>
<li>If the input <code>string</code> begins with “0”, radix is eight (octal) or 10 (decimal). Exactly which radix is chosen is implementation-dependent. ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet. For this reason, always specify a radix when using parseInt.</li>
<li>If the input <code>string</code> begins with any other value, the radix is 10 (decimal).</li>
<li>If the first character cannot be converted to a number, parseInt returns NaN.</li>
</ul>
<p>For arithmetic purposes, the NaN value is not a number in any radix. You can call the isNaN function to determine if the result of parseInt is NaN. If NaN is passed on to arithmetic operations, the operation results will also be NaN.</p>
<p>To convert the number to its string literal in a particular radix use intValue.toString(radix).</p>
<h3 id="examples"><strong>Examples</strong></h3>
<p>Using <code>parseInt</code> The following examples all return <code>15</code>:</p><pre><code class="language-js">parseInt(' 0xF', 16);
parseInt(' F', 16);
parseInt('17', 8);
parseInt(021, 8);
parseInt('015', 10);   // parseInt(015, 10); will return 15
parseInt(15.99, 10);
parseInt('15,123', 10);
parseInt('FXX123', 16);
parseInt('1111', 2);
parseInt('15 * 3', 10);
parseInt('15e2', 10);
parseInt('15px', 10);
parseInt('12', 13);</code></pre>
<p>The following examples all return <code>NaN</code>:</p><pre><code class="language-js">parseInt('Hello', 8); // Not a number at all
parseInt('546', 2);   // Digits are not valid for binary representations</code></pre>
<p>The following examples all return <code>-15</code>:</p><pre><code class="language-js">parseInt('-F', 16);
parseInt('-0F', 16);
parseInt('-0XF', 16);
parseInt(-15.1, 10)
parseInt(' -17', 8);
parseInt(' -15', 10);
parseInt('-1111', 2);
parseInt('-15e1', 10);
parseInt('-12', 13);</code></pre>
<p>The following examples all return <code>4</code>:</p><pre><code class="language-js">parseInt(4.7, 10);
parseInt(4.7 * 1e22, 10); // Very large number becomes 4
parseInt(0.00000000000434, 10); // Very small number becomes 4</code></pre>
<p>The following example returns <code>224</code>:</p><pre><code class="language-js">parseInt('0e0', 16);</code></pre>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">parseInt on MDN</a></p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt" rel="nofollow">parseInt()</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" rel="nofollow">parseFloat()</a> attempt to convert the string to a number if possible. For example, <code>var x = parseInt("100"); // x = 100</code></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number" rel="nofollow">Number()</a> will convert to a number the value can be represented by. This includes dates into the number of milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can’t be converted to a recognisable number will become NaN. That stands for Not a Number and is also technically a number!</li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
