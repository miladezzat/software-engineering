---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg"
tags: [JavaScript]
description: The try...catch..finally statement specifies a block of code
author: "Milad E. Fahmy"
title: "JavaScript Try Catch: Exception Handling Explained"
created: "2021-08-15T19:31:09+02:00"
modified: "2021-08-15T19:31:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-exception-handling ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Try Catch: Exception Handling Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d85740569d1a4ca3834.jpg" alt="JavaScript Try Catch: Exception Handling Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>try...catch..finally</code> statement specifies a block of code to try along with a response should an error occur. The <code>try</code> statement contains one or more <code>try</code> blocks, and ends with at least one <code>catch</code> and/or a <code>finally</code> clause.</p>
<h3 id="try-catch-"><code>try...catch</code>:</h3><pre><code class="language-javascript">try {
throw new Error('my error');
} catch (err) {
console.error(err.message);
}
// Output: my error</code></pre>
<h3 id="try-finally-"><code>try...finally</code>:</h3><pre><code class="language-javascript">try {
throw new Error('my error');
} finally {
console.error('finally');
}
// Output: finally</code></pre>
<p>When you don't use a <code>catch</code> statement, the error is not "caught", even though the code in the <code>finally</code> block is executed. Instead, the error will continue to the upper <code>try</code> block (or main block).</p>
<h3 id="try-catch-finally-"><code>try...catch...finally</code>:</h3><pre><code class="language-javascript">try {
throw new Error('my error');
} catch (err) {
console.error(err.message);
} finally {
console.error('finally');
}
// Output:
// my error
// finally</code></pre>
<p><strong>Typical usage:</strong></p><pre><code class="language-javascript">try {
openFile(file);
readFile(file)
} catch (err) {
console.error(err.message);
} finally {
closeFile(file);
}</code></pre>
<h3 id="nested-try-catch-">Nested <code>try...catch</code>:</h3>
<p>You can also:</p>
<ul>
<li>Nest a <code>try-catch</code> statement inside a <code>try</code> block.</li>
</ul>
<p>You can nest a <code>try...catch</code> statement within a <code>try</code> block. For example, to throw an error upwards:</p><pre><code class="language-javascript">try {
try {
throw new Error('my error');
} catch (err) {
console.error('inner', err.message);
throw err;
} finally {
console.log('inner finally');
}
} catch (err) {
console.error('outer', err.message);
}
// Output:
// inner my error
// inner finally
// outer my error</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
