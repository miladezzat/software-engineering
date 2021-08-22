---
card: "/images/default.jpg"
tags: [JavaScript]
description: JavaScript’s void operator evaluates an expression and return
author: "Milad E. Fahmy"
title: "What Does JavaScript:Void(0) Mean?"
created: "2021-08-15T19:31:32+02:00"
modified: "2021-08-15T19:31:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What Does JavaScript:Void(0) Mean?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/02/jeremy-thomas-rMmibFe4czY-unsplash.jpg 300w,
/news/content/images/size/w600/2020/02/jeremy-thomas-rMmibFe4czY-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/02/jeremy-thomas-rMmibFe4czY-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/02/jeremy-thomas-rMmibFe4czY-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/02/jeremy-thomas-rMmibFe4czY-unsplash.jpg" alt="What Does JavaScript:Void(0) Mean?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>JavaScript’s void operator evaluates an expression and returns undefined.</p>
<p>You can use the console to verify the same:</p>
<p><strong><strong>Note</strong></strong>: <strong><strong>void</strong>,</strong> irrespective of any value passed along, *always returns <strong><strong>undefined</strong></strong> as shown above*. But, <strong><strong>void with </strong>the <strong>operand 0 is preferred</strong></strong>.</p>
<p>There are two ways of using operand 0: void(0) or void 0. Either of them is fine.</p>
<h2 id="when-to-use-javascript-void-0-">When to use Javascript void(0)</h2>
<p>Use javascript:void(0) if, when a link is clicked, you don’t want the browser to load a new page or refresh the same page (depending on the URL specified).</p>
<p>Instead it will just perform the JavaScript attached to that link.</p>
<h3 id="example-1-with-javascript-void-0-">Example 1 with Javascript void(0):</h3><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;a href="javascript:void(0);alert('Hello ! I am here')"&gt;Click Me&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="output-"><strong>Output:</strong></h4>
<p>When someone clicks on the ClickMe link, an alert pops up as below:</p>
<h3 id="example-2-with-javascript-void-0-">Example 2 with Javascript void(0):</h3><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )&gt;Click Me&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="output--1"><strong>Output:</strong></h4>
<p>When you double click the link, an alert will popup without any page refresh.</p>
<h3 id="example-3-with-javascript-void-0-">Example 3 with Javascript void(0):</h3><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;a href="javascript:void(0);https://www.google.co.in/"
ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')"&gt;Click Me&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="output--2"><strong>Output:</strong></h4>
<p>When you double click the link, an alert will popup. Closing it will also not redirect to google.com.</p>
<h3 id="example-without-javascript-void-0-">Example without Javascript void(0):</h3><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')"&gt;Click Me&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="output--3"><strong>Output:</strong></h4>
<p>When you double click the link, an alert will popup, but closing it will redirect to google.com.</p>
<h2 id="conclusion">Conclusion</h2>
<p>The<strong> <strong>void</strong></strong> operator is useful when you need to prevent any unwanted page refresh or redirection. Rather, it performs some JavaScript operation.</p>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<ol>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void" rel="nofollow">Mozilla Docs</a></li>
</ol>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
