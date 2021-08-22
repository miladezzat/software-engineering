---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg"
tags: [JavaScript]
description: To capitalize the first letter of a random string, you should
author: "Milad E. Fahmy"
title: "How to Capitalize the First Letter of a String in JavaScript"
created: "2021-08-15T19:31:39+02:00"
modified: "2021-08-15T19:31:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Capitalize the First Letter of a String in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e8e740569d1a4ca3dc0.jpg" alt="How to Capitalize the First Letter of a String in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>To capitalize the first letter of a random string, you should follow these steps:</p>
<ol>
<li>Get the first letter of the string;</li>
<li>Convert the first letter to uppercase;</li>
<li>Get the remainder of the string;</li>
<li>Concatenate the first letter capitalized with the remainder of the string and return the result;</li>
</ol>
<h2 id="1-get-the-first-letter-of-the-string"><strong>1. Get the First Letter of the String</strong></h2>
<p>You should use the <a href="http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932">charAt()</a> method, at <em>index 0</em>, to select the first character of the string.</p><pre><code class="language-javascript">var string = "freeCodecamp";
string.charAt(0); // Returns "f"</code></pre>
<p>NOTE: <code>charAt</code> is preferable than using <code>[ ]</code> (<a href="http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950">bracket notation</a>) as <code>str.charAt(0)</code> returns an empty string (<em><code>''</code></em>) for <code>str = ''</code> instead of <code>undefined</code> in case of <code>''[0]</code>.</p>
<h2 id="2-convert-the-first-letter-to-uppercase"><strong>2. Convert the First Letter to uppercase</strong></h2>
<p>You may use <a href="http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950">toUpperCase()</a> method and convert the calling string to upper case.</p><pre><code class="language-javascript">var string = "freeCodecamp";
string.charAt(0).toUpperCase(); // Returns "F"</code></pre>
<h2 id="3-get-the-remainder-of-the-string"><strong>3. Get the Remainder of the String</strong></h2>
<p>You may use <a href="https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice">slice()</a> method and get the remainder of the string (from the second character, <em>index 1</em>, to the end of the string).</p><pre><code class="language-javascript">var string = "freeCodecamp";
string.slice(1); // Returns "reeCodecamp"</code></pre>
<h2 id="4-return-the-result-adding-the-first-letter-and-the-remainder-of-the-string"><strong>4. Return the result adding the first letter and the remainder of the string</strong></h2>
<p>You should create a function that accepts a string as only argument and returns the concatenation of the first letter capitalized <code>string.charAt(0).toUpperCase()</code> and the remainder of the string <code>string.slice(1)</code>.</p><pre><code class="language-javascript">var string = "freeCodecamp";
function capitalizeFirstLetter(str) {
return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalizeFirstLetter(string); // Returns "FreeCodecamp"</code></pre>
<p>Or you may add that function to the <code>String.prototype</code> for using it directly on a string using the following code (<em>so that the method is not enumerable but can be overwritten or deleted later</em>):</p><pre><code class="language-javascript">var string = "freeCodecamp";
/* this is how methods are defined in prototype of any built-in Object */
Object.defineProperty(String.prototype, 'capitalizeFirstLetter', {
value: function () {
return this.charAt(0).toUpperCase() + this.slice(1);
},
writable: true, // so that one can overwrite it later
configurable: true // so that it can be deleted later
});
string.capitalizeFirstLetter(); // Returns "FreeCodecamp"</code></pre>
<h3 id="source"><strong>Source</strong></h3>
<p><a href="http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087">stackoverflow - Capitalize the first letter of string in JavaScript</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
