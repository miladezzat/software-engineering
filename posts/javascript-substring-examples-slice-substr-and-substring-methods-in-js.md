---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg"
tags: [JavaScript]
description: In daily programming, we often need to work with strings. For
author: "Milad E. Fahmy"
title: "JavaScript Substring Examples - Slice, Substr, and Substring Methods in JS"
created: "2021-08-15T19:30:22+02:00"
modified: "2021-08-15T19:30:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Substring Examples - Slice, Substr, and Substring Methods in&nbsp;JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c0d740569d1a4ca2fa6.jpg" alt="JavaScript Substring Examples - Slice, Substr, and Substring Methods in&nbsp;JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In daily programming, we often need to work with strings. Fortunately, there are many built-in methods in JavaScript that help us while working with arrays, strings and other data types. We can use these methods for various operations like searching, replacing, concatenating strings, and so on.</p>
<p>Getting a substring from a string is one of the most common operations in JavaScript. In this article, you’re going to learn how to get a substring by using 3 different built-in methods. But first, let me explain briefly what a substring is.</p>
<h3 id="what-is-a-substring">What is a Substring?</h3>
<p>A substring is a subset of another string:</p><pre><code class="language-javascript">"I am learning JavaScript and it is cool!"  --&gt;  Original String
"I am learning JavaScript"  --&gt;  Substring
"JavaScript is cool!"  --&gt;  Another Substring</code></pre>
<p>Like in the example above, in some cases we need to get one or more substrings from a complete sentence or a paragraph. Now let’s see how to do that in JavaScript in 3 different ways.</p>
<p><strong>You can also watch the video version of the example usages here:</strong></p>
<h2 id="1-the-substring-method">1. The substring( ) Method</h2>
<p>Let’s start with the substring( ) method. This method basically gets a part of the original string and returns it as a new string. The substring method expects two parameters:</p><pre><code class="language-javascript">string.substring(startIndex, endIndex);</code></pre>
<ul>
<li><strong>startIndex</strong>: represents the starting point of the substring</li>
<li><strong>endIndex</strong>: represents the ending point of the substring (optional)</li>
</ul>
<p>Let’s see the usage in an example. Suppose that we have the example string below:</p><pre><code class="language-javascript">const myString = "I am learning JavaScript and it is cool!";</code></pre>
<p>Now if we set the startIndex as 0 and the endIndex as 10, then we will get the first 10 characters of the original string:</p>
<figcaption><strong>The first character's index is always 0</strong></figcaption>
</figure>
<p>However, if we set only a starting index and no ending index for this example:</p>
<p>Then we get a substring starting from the 6th character until the end of the original string.</p>
<p><strong>Some additional points:</strong></p>
<ul>
<li>If startIndex = endIndex, the substring method returns an empty string</li>
<li>If startIndex and endIndex are both greater than the length of the string, it returns an empty string</li>
<li>If startIndex &gt; endIndex, then the substring method swaps the arguments and returns a substring, assuming as the endIndex &gt; startIndex</li>
</ul>
<h2 id="2-the-slice-method">2. The slice( ) Method</h2>
<p>The slice( ) method is similar to the substring( ) method and it also returns a substring of the original string. The slice method also expects the same two parameters:</p><pre><code class="language-javascript">string.slice(startIndex, endIndex);</code></pre>
<ul>
<li><strong>startIndex</strong>: represents the starting point of the substring</li>
<li><strong>endIndex</strong>: represents the ending point of the substring (optional)</li>
</ul>
<h4 id="the-common-points-of-substring-and-slice-methods-"><strong>The common points of substring( ) and slice( ) methods:</strong></h4>
<ul>
<li>If we don’t set an ending index, then we get a substring starting from the given index number until the end of the original string:</li>
</ul>
<ul>
<li>If we set both the startIndex and the endIndex, then we will get the characters between the given index numbers of the original string:</li>
</ul>
<ul>
<li>If startIndex and endIndex are greater than the length of the string, it returns an empty string</li>
</ul>
<h4 id="differences-of-the-slice-method-"><strong>Differences of the slice( ) method:</strong></h4>
<ul>
<li>If startIndex &gt; endIndex, the slice( ) method returns an empty string</li>
<li>If startIndex is a negative number, then the first character begins from the end of the string (reverse):</li>
</ul>
<blockquote><strong>Note:</strong> We can use the slice( ) method also for JavaScript arrays. You can find <a href="/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/">here my other article</a> about the slice method to see the usage for arrays.</blockquote>
<h2 id="3-the-substr-method">3. The substr( ) Method</h2>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="noopener">According to the Mozilla documents</a>, the substr( ) method is considered a legacy function and its use should be avoided. But I will still briefly explain what it does because you might see it in older projects.</p>
<p>The substr( ) method also returns a substring of the original string and expects two parameters as:</p><pre><code class="language-javascript">string.substring(startIndex, length);</code></pre>
<ul>
<li><strong>startIndex</strong>: represents the starting point of the substring</li>
<li><strong>length</strong>: number of characters to be included (optional)</li>
</ul>
<p>You can see the difference here: the substr( ) method expects the second parameter as a length instead of an endIndex:</p>
<p>In this example, it basically counts 5 characters starting with the given startIndex and returns them as a substring.</p>
<p>However, if we don’t define the second parameter, it returns up to the end of the original string (like the previous two methods do):</p>
<blockquote><strong>Note: </strong>All 3 methods return the substring as a new string and they don’t change the original string.</blockquote>
<h2 id="wrap-up">Wrap up</h2>
<p>So these are the 3 different methods to get a substring in JavaScript. There are many other built-in methods in JS which really help us a lot when dealing with various things in programming. If you find this post helpful, please share it on social media.</p>
<p><strong>If you want to learn more about web development, feel free to </strong><a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q" rel="noopener"><strong>follow me on Youtube</strong></a><strong>!</strong></p>
<p>Thank you for reading!</p>
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
