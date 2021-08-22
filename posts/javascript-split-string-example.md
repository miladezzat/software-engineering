---
card: "/images/default.jpg"
tags: [JavaScript]
description: A string is a data structure that represents a sequence of ch
author: "Milad E. Fahmy"
title: "JavaScript Split String Example – How to Split a String into an Array in JS"
created: "2021-08-15T19:28:09+02:00"
modified: "2021-08-15T19:28:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Split String Example – How to Split a String into an Array in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/jon-flobrant-rB7-LCa_diU-unsplash.jpg 300w,
/news/content/images/size/w600/2020/10/jon-flobrant-rB7-LCa_diU-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/10/jon-flobrant-rB7-LCa_diU-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/10/jon-flobrant-rB7-LCa_diU-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/jon-flobrant-rB7-LCa_diU-unsplash.jpg" alt="JavaScript Split String Example – How to Split a String into an Array in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A string is a data structure that represents a sequence of characters, and an array is a data structure that contains multiple values. </p>
<p>And did you know – a string can be broken apart into an array of multiple strings using the <code>split</code> method. Let's see how that works with some examples.</p>
<h2 id="tl-dr">TL;DR</h2>
<p>If you just want the code, here you go:</p><pre><code class="language-javascript">const publisher = 'free code camp'
publisher.split(' ') // [ 'free', 'code', 'camp' ]
</code></pre>
<h2 id="syntax">Syntax</h2>
<p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">MDN</a>, the syntax you'll need to split the string is <code>str.split([separator[, limit]])</code>. If we apply this to the above example:</p>
<ul>
<li><code>str</code> is <code>publisher</code></li>
<li><code>separator</code> is <code>' '</code></li>
<li>there is no <code>limit</code></li>
</ul>
<h2 id="when-do-you-need-to-split-a-string">When do you need to split a string?</h2>
<h3 id="example-1-getting-part-of-a-string">Example 1: getting part of a string</h3>
<p>Here is a common example which involves getting the token from an auth header that is part of a Token-based Authentication System. </p>
<p>If this doesn't mean anything to you that's ok. All you need to know for the following example is that there is a string with the value <code>bearer token</code>, but only <code>token</code> is needed (as this is the part that identifies the user):</p><pre><code class="language-javascript">const authHeader = 'bearer token'
const split = authHeader.split(' ') // (1) [ 'bearer', 'token' ]
const token = split[1] // (2) token</code></pre>
<p>Here's what's happening in the above code:</p>
<ol>
<li>The string is split with <code>' '</code> as the separator</li>
<li>The second entry in the array is accessed</li>
</ol>
<h3 id="example-2-apply-array-methods-to-a-string">Example 2: apply array methods to a string</h3>
<p>Often the input you are given is a string, but you want to apply array methods to it (eg. <code>map</code>, <code>filter</code>, or <code>reduce</code>). </p>
<p>For example, let's say you are given a string of morse code and you want to see what it reads in English:</p><pre><code class="language-javascript">const morse = '-.-. --- -.. .'
// (1)
const morseToChar = {
'-.-.': 'c',
'-..': 'd',
'.': 'e',
'---': 'o',
}
const morseArray = morse.split(' ') // (2) [ '-.-.', '---', '-..', '.' ]
const textArray = morseArray.map((char) =&gt; morseToChar[char]) // (3) [ 'c', 'o', 'd', 'e' ]
const text = textArray.join(") // (4)
</code></pre>
<p>Here's what's happening in the above code:</p>
<ol>
<li>An object literal is created to map morse chars to the English alphabet</li>
<li>The morse code is split into an array with a <code>' '</code> as the separator. (Without <code>' '</code> as an argument you would end up with an array that has separate entries for each <code>.</code> and <code>-</code>.)</li>
<li>The morse code array is mapped/transformed to a text array</li>
<li>A string is created from the array with <code>''</code> as the separator. (Without <code>''</code> as an argument the output would be <code>c,o,d,e</code>.)</li>
</ol>
<h2 id="how-to-add-a-limit-to-split">How to add a limit to split</h2>
<p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">MDN</a>, it is also possible to pass a <code>limit</code> as an argument to <code>split</code>. I have never needed to do this, but here is how you could apply it:</p><pre><code class="language-javascript">const publisher = 'free code camp'
publisher.split(' ', 1) // [ 'free' ]
</code></pre>
<p>In the above example, the array is limited to one entry. Without it the value of the array would be <code>[ 'free', 'code', 'camp' ]</code>.</p>
<h2 id="before-you-go-">Before you go…</h2>
<p>Thank you for reading this far! I write about my professional and educational experiences as a self-taught software developer, so feel free to check out <a href="https://learnitmyway.com/">my website</a> or subscribe to <a href="https://learnitmyway.com/newsletter">my newsletter</a> for more content.</p>
<p>You might also like:</p>
<ul>
<li><a href="https://learnitmyway.com/learn-javascript-with-these-resources/">Learn JavaScript with these resources</a></li>
<li><a href="https://www.learnitmyway.com/2016/11/11/learning-material-software-development/">Learning material - software development</a> (starting with Intro to CS)</li>
</ul>
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
