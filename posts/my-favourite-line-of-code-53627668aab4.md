---
card: "https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png"
tags: [JavaScript]
description: Every developer has their favourite patterns, functions or bi
author: "Milad E. Fahmy"
title: "My favourite line of code"
created: "2021-08-15T19:40:47+02:00"
modified: "2021-08-15T19:40:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-programming tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">My favourite line of code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CbW_xpWGV31N6TZM4zZH2w.png" alt="My favourite line of code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Every developer has their favourite patterns, functions or bits of code. This is mine and I use it every day.</p>
<h3 id="what-is-it">What is it?</h3>
<p>This little function takes a promise and returns an array of the error and the result of the promise. It’s super simple but can be used for some amazing things.</p>
<h3 id="what-can-it-do">What can it do?</h3>
<h4 id="clean-error-handling-with-async-await">Clean error handling with async / await</h4>
<p>This is the main reason that I use this method every day. At work, we are trying to write all code using <code>async</code> / <code>await</code> syntax for future readability and maintainability. The problem is that awaiting a promise doesn’t tell you if the promise has succeeded or failed.</p><pre><code class="language-js">let unimportantPromiseTask = () =&gt; {
Math.random() &gt; 0.5 ?
Promise.reject('random fail') :
Promise.resolve('random pass');
};
let data = await unimportantPromiseTask();</code></pre>
<p>If this promise passes then <code>data = ‘random pass'</code>, but if it fails then there is an unhandled promise rejection and data is never assigned a value. This may not be what you would expect to happen when reading through the code.</p>
<p>Passing the promise to this <code>handle</code> function returns a very explicit result which anyone can easily understand when reading it.</p><pre><code class="language-js">let [err, res] = await handle(unimportantPromiseTask());</code></pre>
<p>You can then do what you want with the error and result. Here is a common pattern that we often use next:</p><pre><code class="language-js">if (err
(res &amp;&amp; !res.data)) {
// error handling
return {err: 'there was an error’}
}
// continue with successful response</code></pre>
<p>The main reason we use this instead of wrapping the awaited promise in a <code>try / catch</code> block is that we find it easier to read.</p>
<h4 id="stop-unhandled-promise-rejections">Stop unhandled promise rejections</h4>
<p>This function can be used to handle promises (hence the name). Because the function chains <code>.catch</code> onto the promise, if it fails the error is caught. This means if there is a promise that you call and don’t care whether it passes or fails, just pass it into <code>handle</code>!</p><pre><code class="language-js">unimportantPromiseTask(); // 50% chance of erroring
handle(unimportantPromiseTask()); // never errors</code></pre>
<p>Without passing the promise into the <code>handle</code> function, there is going to be a chance that it fails. This is increasingly important as future versions of Node are going to terminate the process when an <em>unhandled promise rejection</em> is encountered.</p>
<p>The other ways to handle promise rejections are to wrap the function in a try catch, or just to chain a <code>.catch</code> onto the promise. Whilst these are both very valid, using <code>handle</code> where we can makes our code more consistent.</p>
<p>Thanks for reading this quick post on my favourite line of code. If you’ve got a favourite line of code, let me know in the comments what it is and why!</p>
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
