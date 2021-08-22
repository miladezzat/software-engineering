---
card: "https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg"
tags: [JavaScript]
description: by Anthony Ng
author: "Milad E. Fahmy"
title: "What I learned from reading defer-render-hoc and why it’s useful."
created: "2021-08-15T19:48:42+02:00"
modified: "2021-08-15T19:48:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-user-experience tag-computer-science tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">What I learned from reading defer-render-hoc and why it’s useful.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*lrJvFE4XDFi5TU6g9Qzumg.jpeg" alt="What I learned from reading defer-render-hoc and why it’s useful.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Anthony Ng</p>
<h1 id="what-i-learned-from-reading-defer-render-hoc-and-why-it-s-useful-">What I learned from reading defer-render-hoc and why it’s useful.</h1>
<blockquote>This is another article for my Deliberate Practice. Why am I doing this? <a href="https://medium.freecodecamp.org/deliberate-practice-becoming-an-open-sourcerer-27a4f7640940" rel="noopener">Read this article to learn more</a>.</blockquote>
<p>I was reading <a href="https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3" rel="noopener">through this article</a> about how Twitter Lite (a React PWA) removed performance bottlenecks.</p>
<figcaption>Image from <a href="https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3" rel="noopener" target="_blank" title="">Twitter Lite article</a></figcaption>
</figure>
<p>When the user taps the <code>Home</code> button, there is a delay until the tweets are shown. This delay was caused by a large number of components mounting and unmounting. <code>defer-render-hoc</code> is an Open Source project that implements the solution given in the article.</p>
<h3 id="let-s-look-at-the-code">Let’s look at the code</h3>
<p><code>defer-render-hoc</code> is a Higher Order Component (HOC). To learn more about it, read the <a href="https://reactjs.org/docs/higher-order-components.html" rel="noopener">documentation here</a>.</p>
<p>We use <code>defer-render-hoc</code> by wrapping your Expensive Component with it.</p>
<p><code>defer-render-hoc</code> renders <code>null</code> on the initial render.</p>
<p>So when will <code>defer-render-hoc</code> render your Expensive Component? It uses <code>requestAnimationFrame</code> to wait two frames. After two frames have passed, it will render your Expensive Component.</p>
<p><code>requestAnimationFrame</code> is usually used to create smooth animations (<a href="https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution" rel="noopener">read more about it in this article</a>).</p>
<p>Here, we are using <code>requestAnimationFrame</code> to allow other components to update and give control back to the user. After the two frames, our Expensive Component takes over.</p>
<h3 id="demo">Demo</h3>
<p>Check out this <a href="https://codesandbox.io/s/pjxkjjxv8m" rel="noopener">CodeSandbox for a demo</a> of <code>defer-render-hoc</code>.</p>
<p>Click from the <code>Cheap page</code> button to the <code>Expensive page</code> button. Notice how the button stays blue as the UI freezes.</p>
<figcaption>(without defer-render-hoc) 624.02 ms for the click event</figcaption>
</figure>
<p>Our click event takes 620ms. The click event does not finish until our Expensive Component mounts. Because of that, the screen is frozen for the user.</p>
<p>Now, click from the <code>Cheap page</code> button to the <code>Deferred Expensive page</code> button. Notice how the button does not stay blue, and the UI is not frozen.</p>
<figcaption>(with defer-render-hoc) 16.71 ms for the click event</figcaption>
</figure>
<p>Our click event takes 16ms. The click event doesn’t wait for our Expensive Component to mount; the work is deferred. The screen doesn’t freeze.</p>
<h3 id="how-does-this-help">How does this help?</h3>
<p>The same amount of work still happens. The Expensive Component still mounts; it just mounts later. The experience itself is not faster overall. It might even be slower with the overhead of the <code>defer-render-hoc</code>. But sometimes a faster perceived experience is more important than an actual faster experience. See the below links for more information about perceived performance.</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Perceived_performance" rel="noopener">https://en.wikipedia.org/wiki/Perceived_performance</a></li>
<li><a href="https://medium.com/@lukejones/a-designers-guide-to-the-perception-of-performance-fedb4bd102b" rel="noopener">https://medium.com/@lukejones/a-designers-guide-to-the-perception-of-performance-fedb4bd102b</a></li>
</ul>
<p>Depending on your project, <code>defer-render-hoc</code> might be right for you.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
