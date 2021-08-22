---
card: "https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png"
tags: [CSS]
description: "One of the best use cases for CSS Variables is theme creation"
author: "Milad E. Fahmy"
title: "How to easily create themes with CSS Variables"
created: "2021-08-16T10:16:54+02:00"
modified: "2021-08-16T10:16:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-design tag-tech tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to easily create themes with CSS Variables</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*blhp0Jh_MceZD4hnTgX6qw.png" alt="How to easily create themes with CSS Variables">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
background: #ffeead;
color: #ff6f69;
}
h1, p {
color: #ff6f69;
}
#navbar a {
color: #ff6f69;
}
.item {
background: #ffcc5c;
}
button {
background: #ff6f69;
color: #ffcc5c;
}
</code></pre><p>As you can see, we’re only using three colours here: <code>#ffeead</code>, <code>#ff9f96</code> and <code>#ffcc5c</code>. However, we’re reusing them a lot. So this is a perfect use case for CSS Variables.</p><p>To start using it, we’ll first need to declare our variables. We’ll do that in the <code>:root</code> pseudo-class:</p><pre><code class="language-css">:root {
--red: #ff6f69;
--beige: #ffeead;
--yellow: #ffcc5c;
}
</code></pre><p>Then we’ll simply swap out our hexadecimal values with the variables:</p><pre><code class="language-css">html, body {
background: var(--beige);
color: var(--red);
}
h1, p {
color: var(--red);
}
#navbar a {
color: var(--red);
}
.item {
background: var(--yellow);
}
button {
background: var(--red);
color: var(--yellow);
}
</code></pre><p>Now we have the power of variables in our CSS, meaning we can simply change the <code>--red</code> to something else, and it’ll be updated throughout our entire site.</p><p>If you’re struggling to understand what’s going on here, please check out my <a href="https://medium.freecodecamp.org/learn-css-variables-in-5-minutes-80cf63b4025d">Learn CSS Variables in 5 minutes article</a>, or enrol in the <a href="https://scrimba.com/g/gcssvariables?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gcssvariables_create_themes">course.</a></p><h3 id="creating-a-theme">Creating a theme</h3><p>Now let’s create the theme. We want the ability to add a <code>.featured</code> class to one of our four project items, and thereby make that item stand out from the rest. Specifically, we’ll be changing red to <code>#ff5564</code> and yellow<code>#ffe55b</code>.</p><p>Here’s how it’ll look in the markup:</p><pre><code class="language-html">&lt;div class="item **featured**"&gt;
&lt;h1&gt;project d&lt;/h1&gt;
&lt;button&gt;learn more&lt;/button&gt;
&lt;/div&gt;
</code></pre><p>This change should affect the styling at four different places:</p><ul><li>background color of the <code>&lt;div&gt;</code></li><li>color of the<code>&lt;h1&gt;</code></li><li>background color of the <code>&lt;button&gt;</code></li><li>color of the <code>&lt;button&gt;</code></li></ul><h4 id="the-old-way">The old way</h4><p>The way we had to solve this previously was by creating a custom CSS selector for each element inside the <code>.featured</code> item, like this:</p><pre><code class="language-css">.featured {
background: #ffe55b;
}
.featured &gt; h1 {
color: #ff5564;
}
.featured &gt; button {
background: #ff5564;
color: #ffe55b;
}
</code></pre><p>This approach isn’t very flexible. If you were to add another element inside your portfolio items, you’d have to write specific selectors for them as well.</p><h4 id="the-new-way">The new way</h4><p>With CSS Variables, however, it becomes much easier. We’ll simply override the variables inside the <code>.featured</code> a class like this:</p><pre><code class="language-css">.featured {
--yellow: #ffe55b;
--red: #ff5564;
}
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
