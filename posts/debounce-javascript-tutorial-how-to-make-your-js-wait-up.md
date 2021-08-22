---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg"
tags: [JavaScript]
description: Debounce methods do not execute when invoked. Instead, they w
author: "Milad E. Fahmy"
title: "Debounce JavaScript – How to Make your JS Wait Up"
created: "2021-08-15T19:28:48+02:00"
modified: "2021-08-15T19:28:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Debounce JavaScript – How to Make your JS Wait Up</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c996c740569d1a4ca1fa3.jpg" alt="Debounce JavaScript – How to Make your JS Wait Up">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Debounce methods do not execute when invoked. Instead, they wait for a predetermined time before executing. If the same method is called again, the previous is cancelled and the timer restarts.</p>
<p>Here is a short video walk through in which I make a debounce method:</p>
<p>And here's the source code of the video tutorial:</p>
<p>Let's look at the code in more detail now.</p>
<p>Assume you have a button called like this:</p><pre><code class="language-html">&lt;button id="myBtn"&gt;Click me&lt;/button&gt;</code></pre>
<p>And in your JS file you have something like this:</p><pre><code class="language-js">document.getElementById('myBtn').addEventListener('click', () =&gt; {
console.log('clicked');
})</code></pre>
<p>Every time you click on your button, you would see a message in your console saying <code>clicked</code>.</p>
<p>Let's add a debounce method to our <code>click</code> event listener here:</p><pre><code class="language-js">document.getElementById('myBtn').addEventListener('click', debouce(() =&gt; {
console.log('click');
}, 2000))</code></pre>
<p>The debounce method here takes in two arguments, <code>callback</code> &amp; <code>wait</code>. <code>callback</code> is the function you want to execute, while <code>wait</code> is the configurable time period delay after which you want your <code>callback</code> to be executed.</p>
<p>Here our <code>callback</code> method simply is <code>console.log('click');</code> and the <code>wait</code> is <code>2000 milliseconds</code>.</p>
<p>So given this debounce method, which takes in two parameters <code>callback</code> &amp; <code>wait</code>, let's define <code>debounce</code>:</p><pre><code class="language-js">function debounce(callback, wait) {
let timerId;
return (...args) =&gt; {
clearTimeout(timerId);
timerId = setTimeout(() =&gt; {
callback(...args);
}, wait);
};
}</code></pre>
<p>Function <code>debounce</code> takes in two parameters: the callback (which is the function we want to execute) and the <code>wait</code> period (after how much delay we want to execute our callback).</p>
<p>Inside the function, we simply return a function, which is the following:</p><pre><code class="language-js">let timerId;
return (...args) =&gt; {
clearTimeout(timerId);
timerId = setTimeout(() =&gt; {
callback(...args);
}, wait);
};</code></pre>
<p>What this function does is invoke our <code>callback</code> method after a certain period of time. And if during that period of time the same method is invoked again, the previous function is cancelled and the timer is reset and starts again.</p>
<p>And that is it! All you need to know about what debounce is.</p>
<p>Here is another bonus video on closures, because I used a <code>closure</code> inside my <code>debounce</code> function. </p>
<p>Let me know on <a href="https://twitter.com/adeelibr">twitter</a> if you were able to find the use of closure inside the debounce method.</p>
<p>Happy coding, everyone. </p>
<p></p>
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
