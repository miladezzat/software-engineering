---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg"
tags: [JavaScript]
description: "Regular Expressions (also called RegEx or RegExp) are a power"
author: "Milad E. Fahmy"
title: "JavaScript String.Replace() Example with RegEx"
created: "2021-08-16T10:04:29+02:00"
modified: "2021-08-16T10:04:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-regex tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript String.Replace() Example with RegEx</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c982a740569d1a4ca1884.jpg" alt="JavaScript String.Replace() Example with RegEx">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The <code>.replace</code> method is used on strings in JavaScript to replace parts of string with characters. It is often used like so:</p>
<pre><code class="language-js">const str = 'JavaScript';
const newStr = str.replace("ava", "-");
console.log(newStr);
// J-Script
</code></pre>
<p>As you can see above, the replace method accepts two arguments: the string to be replaced, and what the string would be replaced with.</p>
<p>Here is where <strong>Regex</strong> comes in.</p>
<p>The use of <code>.replace</code> above is limited: the characters to be replaced are known - "ava". What if we're concerned with a pattern instead? Maybe, a number, two letters, and the word "foo" or three symbols used together?</p>
<p>The <code>.replace</code> method used with <code>RegEx</code> can achieve this. <code>RegEx</code> can be effectively used to recreate patterns. So combining this with <code>.replace</code> means we can replace patterns and not just exact characters.</p>
<h2 id="howtouseregexwithreplaceinjavascript">How to use <code>RegEx</code> with <code>.replace</code> in JavaScript</h2>
<p>To use RegEx, the first argument of <code>replace</code> will be replaced with regex syntax, for example <code>/regex/</code>. This syntax serves as a pattern where any parts of the string that match it will be replaced with the new substring.</p>
<p>Here's an example:</p>
<pre><code class="language-js">// matches a number, some characters and another number
const reg = /\d.*\d/
const str = "Java3foobar4Script"
const newStr = str.replace(reg, "-");
console.log(newStr);
// "Java-Script"
</code></pre>
<p>The string <code>3foobar4</code> matches the regex <code>/\d.*\d/</code>, so it is replaced.</p>
<p>What if we wanted to perform replacements at multiple places?</p>
<p><code>Regex</code> already offers that with the <code>g</code> (global) flag, and the same can be used with <code>replace</code>. Here's how:</p>
<pre><code class="language-js">const reg = /\d{3}/g
const str = "Java323Scr995ip4894545t";
const newStr = str.replace(reg, "");
console.log(newStr);
// JavaScrip5t
// 5 didn't pass the test :(
</code></pre>
<p>The regex matches parts of the string that are exactly 3 consecutive numbers. <code>323</code> matches it, <code>995</code> matches it, <code>489</code> matches it, and <code>454</code> matches it. But the last <code>5</code> does not match the pattern.</p>
<p>The result is that <code>JavaScrip5t</code> shows how the patterns are correctly matched and replaces with the new substring (an empty string).</p>
<p>The case flag - <code>i</code> can also be used. This means you can replace case-insensitive patterns. Here's how it is used:</p>
<pre><code class="language-js">const reg1 = /\dA/
const reg2 = /\dA/i
const str = "Jav5ascript"
const newStr1 = str.replace(reg1, "--");
const newStr2 = str.replace(reg2, "--");
console.log(newStr1) // Jav5ascript
console.log(newStr2) // Jav--script
</code></pre>
<p><code>..5a..</code> does not match the first syntax because RegEx is by default case-sensitive. But with the usage of the <code>i</code> flag, as seen in the second syntax, the string is as expected - replaced.</p>
<h2 id="howtousesplitwithregularexpressions">How to use Split with Regular Expressions</h2>
<p><code>split</code> also uses <code>RegEx</code>. Which means you can split a string not just at substrings that match exact characters, but also patterns.</p>
<p>Here's a quick look:</p>
<pre><code class="language-js">const regex = /\d{2}a/;
const str = "Hello54 How 64aare you";
console.log(str.split(regex))
// ["Hello54 How ", "are you"]
</code></pre>
<p>The string was <code>split</code> at <code>64a</code> because that substring matches the regex specified.</p>
<p><strong>Note that</strong> the global flag - <code>g</code> - in <code>split</code> is irrelevant, unlike the <code>i</code> flag and other flags. This is because <code>split</code> splits the string at the several points the regex matches.</p>
<h2 id="wrappingup">Wrapping up</h2>
<p><code>RegEx</code> makes <code>replace</code>ing strings in JavaScript more effective, powerful, and fun.</p>
<p>You're not only restricted to exact characters but patterns and multiple replacements at once. In this article, we've seen how they work together using a few examples.</p>
<p>Cheers to RegEx ?</p>
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
