---
card: "/images/default.jpg"
tags: [JavaScript]
description: You might think that encodeURI and encodeURIComponent do the
author: "Milad E. Fahmy"
title: "JavaScript URL Encode Example – How to Use encodeURIcomponent() and encodeURI()"
created: "2021-08-15T19:28:47+02:00"
modified: "2021-08-15T19:28:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-browser ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript URL Encode Example – How to Use encodeURIcomponent() and encodeURI()</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/richy-great-MAYEkmn7G6E-unsplash.jpg 300w,
/news/content/images/size/w600/2020/08/richy-great-MAYEkmn7G6E-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/08/richy-great-MAYEkmn7G6E-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/08/richy-great-MAYEkmn7G6E-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/richy-great-MAYEkmn7G6E-unsplash.jpg" alt="JavaScript URL Encode Example – How to Use encodeURIcomponent() and encodeURI()">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You might think that <code>encodeURI</code> and <code>encodeURIComponent</code> do the same thing, at least from their names. And you might be confused which one to use and when.</p>
<p>In this article, I will demystify the difference between <code>encodeURI</code> and <code>encodeURIComponent</code>.</p>
<h3 id="whatisauriandhowisitdifferentfromaurl">What is a URI and how is it different from a URL?</h3>
<p><strong>URI</strong> stands for Uniform Resource Identifier.<br>
<strong>URL</strong> stands for Uniform Resource Locator.
</p>
<p>Anything that uniquely identifies a resource is its URI, such as id, name, or ISBN number. A URL specifies a resource and how it can be accessed (the protocol). All URLs are URIs, but not all URIs are URLs.</p>
<h3 id="whydoweneedtoencode">Why do we need to encode?</h3>
<p>URLs can only have certain characters from the standard 128 character ASCII set. Reserved characters that do not belong to this set must be encoded.</p>
<p>This means that we need to encode these characters when passing into a URL. Special characters such as <code>&amp;</code>, <code>space</code>, <code>!</code> when entered in a url need to be escaped, otherwise they may cause unpredictable situations.</p>
<p>Use cases:</p>
<ol>
<li>User has submitted values in a form that may be in a string format and need to be passed in, such as URL fields.</li>
<li>Need to accept query string parameters in order to make GET requests.</li>
</ol>
<h3 id="whatisthedifferencebetweenencodeuriandencodeuricomponent">What is the difference between encodeURI and encodeURIComponent?</h3>
<p><code>encodeURI</code> and <code>encodeURIComponent</code> are used to encode Uniform Resource Identifiers (URIs) by replacing certain characters by one, two, three or four escape sequences representing the UTF-8 encoding of the character.</p>
<p><code>encodeURIComponent</code> should be used to encode a <strong>URI</strong> <strong>Component</strong> - a string that is supposed to be part of a URL.</p>
<p><code>encodeURI</code> should be used to encode a <strong>URI</strong> or an existing URL.</p>
<p><a href="https://stackoverflow.com/a/23842171">Here's a handy table of the difference in encoding of characters</a></p>
<h3 id="whichcharactersareencoded">Which characters are encoded?</h3>
<p><code>encodeURI()</code> will not encode: <code>~!@#$&amp;*()=:/,;?+'</code></p>
<p><code>encodeURIComponent()</code> will not encode: <code>~!*()'</code></p>
<p>The characters <code>A-Z a-z 0-9 - _ . ! ~ * ' ( )</code> are not escaped.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-JS">const url = 'https://www.twitter.com'
console.log(encodeURI(url))             //https://www.twitter.com
console.log(encodeURIComponent(url))    //https%3A%2F%2Fwww.twitter.com
const paramComponent = '?q=search'
console.log(encodeURIComponent(paramComponent)) //"%3Fq%3Dsearch"
console.log(url + encodeURIComponent(paramComponent)) //https://www.twitter.com%3Fq%3Dsearch
</code></pre>
<h3 id="whentoencode">When to encode</h3>
<ol>
<li>
<p>When accepting an input that may have spaces.</p>
<pre><code class="language-JS">encodeURI("http://www.mysite.com/a file with spaces.html") //http://www.mysite.com/a%20file%20with%20spaces.html
</code></pre>
</li>
<li>
<p>When building a URL from query string parameters.</p>
<pre><code class="language-JS"> let param = encodeURIComponent('mango')
let url = "http://mysite.com/?search=" + param + "&amp;length=99"; //http://mysite.com/?search=mango&amp;length=99
</code></pre>
</li>
<li>
<p>When accepting query parameters that may have reserved characters.</p>
</li>
</ol>
<pre><code class="language-JS">   let params = encodeURIComponent('mango &amp; pineapple')
let url = "http://mysite.com/?search=" + params; //http://mysite.com/?search=mango%20%26%20pineapple
</code></pre>
<h3 id="summary">Summary</h3>
<p>If you have a complete URL, use <code>encodeURI</code>. But if you have a part of a URL, use <code>encodeURIComponent</code>.</p>
<hr>
<p>Interested in more tutorials and JSBytes from me? <a href="https://tinyletter.com/shrutikapoor">Sign up for my newsletter.</a> or <a href="https://twitter.com/shrutikapoor08">follow me on Twitter</a></p>
<h3></h3>
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
