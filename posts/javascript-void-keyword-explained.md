---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg"
tags: [JavaScript]
description: The word void means "completely empty space" according to the
author: "Milad E. Fahmy"
title: "JavaScript Void 0 – What Does javascript:void(0); Mean?"
created: "2021-08-15T19:28:10+02:00"
modified: "2021-08-15T19:28:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Void 0 – What Does javascript:void(0); Mean?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9811740569d1a4ca17fb.jpg" alt="JavaScript Void 0 – What Does javascript:void(0); Mean?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The word void means "completely empty space" according to the dictionary. This term, when used in programming, refers to a return of "nothing" - an "empty value" so to speak.</p>
<h2 id="whatisthevoidkeyword">What is the void keyword?</h2>
<p>When a function is void, it means that the function returns nothing. This is similar to functions in JavaScript which return <code>undefined</code> explicitly, like so:</p>
<pre><code class="language-js">function und() {
return undefined
}
und()
</code></pre>
<p>or implicitly, like so:</p>
<pre><code class="language-js">function und() {
}
und()
</code></pre>
<p>Regardless of the expressions and statements in the functions above (adds 2 numbers together, finds the average of 5 numbers, whatever), there is no result returned.</p>
<p>Now we know what the <code>void</code> keyword is all about. What about <code>javascript:void(0)</code>?</p>
<h2 id="whatisjavascriptvoid0">What is <code>javascript:void(0)</code>?</h2>
<p>If we split this up, we have <code>javascript:</code> and <code>void(0)</code>. Let's look at each part in more detail.</p>
<h3 id="javascript"><code>javascript:</code></h3>
<p>This is referred to as a <strong>Pseudo URL</strong>. When a browser receives this value as the value of <code>href</code> on an anchor tag, it interprets the JS code that follows the colon (:) rather than treating the value as a referenced path.</p>
<p>For example:</p>
<pre><code class="language-html">&lt;a href="javascript:console.log('javascript');alert('javascript')"&gt;Link&lt;/a&gt;
</code></pre>
<p>When "Link" is clicked, here is the result:</p>
<p>As seen above, the browser does not treat <code>href</code> as a referenced path. Instead, it treats it as some JavaScript code starting after "javascript:" and separated by semi-colons.</p>
<h3 id="void0"><code>void(0)</code></h3>
<p>The void operator evaluates given expressions and returns <code>undefined</code>.</p>
<p>For example:</p>
<pre><code class="language-js">const result = void(1 + 1);
console.log(result);
// undefined
</code></pre>
<p><code>1 + 1</code> is evaluated but <code>undefined</code> is returned. To confirm that, here's another example:</p>
<pre><code class="language-html">&lt;body&gt;
&lt;h1&gt;Heading&lt;/h1&gt;
&lt;script&gt;
void(document.body.style.backgroundColor = 'red',
document.body.style.color = 'white'
)
&lt;/script&gt;
&lt;/body&gt;
</code></pre>
<p>The result of the above code is:</p>
<p>Here's another example:</p>
<pre><code class="language-js">console.log(void(0) === undefined)
// true
</code></pre>
<h3 id="combiningjavascriptandvoid0">Combining <code>javascript:</code> and <code>void(0)</code></h3>
<p>Sometimes, you do not want a link to navigate to another page or reload a page. Using <code>javascript:</code>, you can run code that does not change the current page.</p>
<p>This, used with <code>void(0)</code> means, <strong>do nothing</strong> - don't reload, don't navigate, do not run any code.</p>
<p>For example:</p>
<pre><code class="language-html">&lt;a href="javascript:void(0)"&gt;Link&lt;/a&gt;
</code></pre>
<p>The "Link" word is treated as a link by the browser. For example, it's focusable, but it doesn't navigate to a new page.</p>
<p><code>0</code> is an argument passed to <code>void</code> that does nothing, and returns nothing.</p>
<p>JavaScript code (as seen above) can also be passed as arguments to the <code>void</code> method. This makes the link element run some code but it maintains the same page.</p>
<p>For example:</p>
<pre><code class="language-js">&lt;a id='link' href="javascript:void(
document.querySelector('#link').style.color = 'green'
)"&gt;Link&lt;/a&gt;
</code></pre>
<p>When the button is clicked, this is the result:</p>
<p>With <code>void</code>, it tells the browser not to return anything (or return <code>undefined</code>).</p>
<p>Another use case of links with the <code>javascript:void(0)</code> reference is that sometimes, a link may run some JavaScript code in the background, and navigating may be unnecessary. In this case, the expressions would be used as the arguments passed to <code>void</code>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>In this simplified article, we've learned what the <code>void</code> operator is, how it works, and how it is used with the <code>javascript:</code> pseudo URL for <code>href</code> attributes of links.</p>
<p>This ensures that a page does not navigate to another page or reload the current page when clicked.</p>
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
