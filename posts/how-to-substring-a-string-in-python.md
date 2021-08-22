---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg"
tags: [Python]
description: "Python offers many ways to substring a string. It is often ca"
author: "Milad E. Fahmy"
title: "How to Substring a String in Python"
created: "2021-08-16T15:38:07+02:00"
modified: "2021-08-16T15:38:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Substring a String in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e45740569d1a4ca3c3e.jpg" alt="How to Substring a String in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Python offers many ways to substring a string. It is often called ‘slicing’.</p><p>It follows this template:</p><pre><code class="language-python">string[start: end: step]</code></pre><p>Where,</p><p><code>start</code>: The starting index of the substring. The character at this index is included in the substring. If <em>start</em> is not included, it is assumed to equal to 0.</p><p><code>end</code>: The terminating index of the substring. The character at this index is <em>NOT</em> included in the substring. If <em>end</em> is not included, or if the specified value exceeds the string length, it is assumed to be equal to the length of the string by default.</p><p><code>step</code>: Every ‘step’ character after the current character to be included. The default value is 1. If the <em>step</em> value is omitted, it is assumed to equal to 1.</p><h4 id="template"><strong>Template</strong></h4><p><code>string[start:end]</code>: Get all characters from index <em>start</em> to <em>end-1</em></p><p><code>string[:end]</code>: Get all characters from the beginning of the string to <em>end-1</em></p><p><code>string[start:]</code>: Get all characters from index <em>start</em> to the end of the string</p><p><code>string[start:end:step]</code>: Get all characters from <em>start</em> to <em>end-1</em> discounting every <em>step</em> character</p><h4 id="examples"><strong>Examples</strong></h4><ul><li><strong><strong>Get the first 5 characters of a string</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[0:5])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; freeC</code></pre><p>Note: <code>print(string[:5])</code> returns the same result as <code>print(string[0:5])</code></p><ul><li><strong><strong>Get a substring of length 4 from the 3rd character of the string</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[2:6])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; eeCo</code></pre><p>Please note that the start or end index may be a negative number. A negative index means that you start counting from the end of the string instead of the beginning (i.e from the right to left). Index -1 represents the last character of the string, -2 represents the second to last character and so on…</p><ul><li><strong><strong>Get the last character of the string</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[-1])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; p</code></pre><ul><li><strong><strong>Get the last 5 characters of a string</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[-5:])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; eCamp</code></pre><ul><li><strong><strong>Get a substring which contains all characters except the last 4 characters and the 1st character</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[1:-4])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; reeCode</code></pre><h4 id="more-examples"><strong>More examples</strong></h4><pre><code class="language-py">str = “freeCodeCamp”
print str[-5:-2] # prints ‘eCa’
print str[-1:-2] # prints ‘’ (empty string)</code></pre><ul><li><strong><strong>Get every other character from a string</strong></strong></li></ul><pre><code class="language-python">string = "freeCodeCamp"
print(string[::2])</code></pre><p>Output:</p><pre><code class="language-shell">&gt; feCdCm</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
