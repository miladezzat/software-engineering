---
card: "https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png"
tags: [JavaScript]
description: "I am in  Effective JavaScript  training at @PayPalEng by Doug"
author: "Milad E. Fahmy"
title: "Why explicit semicolons are important in JavaScript"
created: "2021-08-16T11:33:00+02:00"
modified: "2021-08-16T11:33:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-software-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Why explicit semicolons are important in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zX_jJO9HQX5r3WQzQe6xNQ.png" alt="Why explicit semicolons are important in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return
{
ok : true
}
}
console.log(test())</code></pre><p>You would expect the output of this to be an <code>object</code> with a property <code>ok</code> set to <code>true</code>. But instead, the output is <code>undefined</code>. This is so because since the curly brace starts on a new line, automatic semicolon completion changes the above code to this:</p><pre><code class="language-javascript">const test = () =&gt; {
return;
{
ok : true
}
}</code></pre><p><strong>Fix</strong>: Use curly braces on the right of return and explicit semicolons:</p><pre><code class="language-javascript">const test = () =&gt; {
return {
ok : true
}
};</code></pre><h3 id="example-2">Example 2</h3><pre><code class="language-javascript">const a = 1
const b = 2
(a+b).toString()</code></pre><p>What do you think happens in the above code? We get an error <code>Uncaught ReferenceError: b is not defined. </code>This is because the parenthesis on the third line is interpreted as a function argument. This code is converted to this:</p><pre><code class="language-javascript">const a = 1;
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
