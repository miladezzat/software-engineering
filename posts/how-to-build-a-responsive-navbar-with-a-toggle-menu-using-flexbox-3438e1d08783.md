---
card: "https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO."
tags: [CSS]
description: by Charlie Waite
author: "Milad E. Fahmy"
title: "How to build a responsive navbar with a toggle menu using Flexbox"
created: "2021-08-15T19:47:27+02:00"
modified: "2021-08-15T19:47:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-design tag-tech tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a responsive navbar with a toggle menu using Flexbox</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO. 300w,
https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO. 600w,
https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*duHsALHgV9KMBanO." alt="How to build a responsive navbar with a toggle menu using Flexbox">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Charlie Waite</p>
<h1 id="how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox">How to build a responsive navbar with a toggle menu using Flexbox</h1>
<figcaption>Photo by <a href="https://unsplash.com/@mango_quan?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Harry Quan</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>During a recent project, my team had to remove all traces of Bootstrap. This meant the extremely useful responsive navbar was going to have to be created from scratch. I’m relatively new to CSS, and have always relied on Bootstrap navbars for their simplicity, so I volunteered to take on this task. Here’s what I learned and did throughout the process.</p>
<p>In this article, I will assume you have basic knowledge of HTML, CSS and JavaScript — you know how to link a stylesheet to your HTML or apply the styles in a <code>&lt;sty</code>le&gt;tag — and you know how to import a JavaScript file into your page.</p>
<p><em>I’ve had defensive elitists criticise my way of doing things, especially with the toggle menu being <code>position: absolute</code> — if you have better ways of doing this then please respond below and we can make this better for the thousands of people reading it!</em></p>
<h3 id="getting-started">Getting started</h3>
<p>Firstly, I started with some basic HTML for the layout:</p><pre><code class="language-html">&lt;div class="Navbar"&gt;
&lt;div class="Navbar__Link Navbar__Link-brand"&gt;
Website title
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>You can use any naming convention for the classes.</p>
<p>Now, this isn’t giving us much yet. This is just a plain list of items. But with just one line of CSS, we see the power of Flexbox.</p><pre><code class="language-css">.Navbar {
display: flex;
}</code></pre>
<figcaption>Navbar divs now aligned horizontally</figcaption>
</figure>
<p>One line of code, and we already have our navigation items aligned horizontally across the top of the page.</p>
<p>Now let’s add two <code>nav</code> elements to our HTML so we can have some items on the left and right of the navbar:</p><pre><code class="language-html">&lt;div class="Navbar"&gt;
&lt;nav class="Navbar__Items"&gt;
&lt;div class="Navbar__Link Navbar__Link-brand"&gt;
Website title
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;nav class="Navbar__Items Navbar__Items--right"&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;/div&gt;</code></pre>
<p>And some basic styling on our <code>Navbar</code> class which wraps all the other elements:</p><pre><code class="language-css">.Navbar {
background-color: #46ACC2;
display: flex;
padding: 16px;
font-family: sans-serif;
color: white;
}</code></pre>
<p>Of course you can choose your own color scheme, font, and padding.</p>
<p>Now our navbar will look like this:</p>
<p>Whoops, now it looks a bit better, but we can’t have our navigation items displayed vertically. Before you read on, try having a guess as to what we’re going to do next…</p>
<p>Now our <code>display:flex</code> in the <code>.Navbar</code> class is no longer responsible for these items. It is now responsible for their <code>&lt;n</code>av&gt; containers. We want both to be aligned horizontally.</p>
<p>So we change the <code>.Navbar__Items</code> class too:</p><pre><code class="language-css">.Navbar__Items {
display:flex;
}</code></pre>
<p>Now lets add some padding to our links to make this just a bit prettier:</p><pre><code class="language-css">.Navbar__Link {
padding-right: 8px;
}</code></pre>
<p>Now our nav bar looks like this:</p>
<p>We’re getting there. But we also want the second <code>&lt;n</code>av&gt; to be aligned to the right. As you may have noticed — I added an extra class to the s<code>econd</code> &lt;<code>nav&gt; tag .Navbar__</code>Items--right.</p>
<p>Let’s simply add a <code>margin-left:auto</code> to this class:</p><pre><code class="language-css">.Navbar__Items--right {
margin-left:auto;
}</code></pre>
<figcaption>After adding the margin-left to the second nav</figcaption>
</figure>
<figcaption>On mobile</figcaption>
</figure>
<p>As you can see, this is now much better. We already have a fully responsive navbar. But…</p>
<p>What if each navigation item had longer text? What if there were more items?</p>
<figcaption>Example of link names being longer</figcaption>
</figure>
<p>As you can see, this is not what we want. We either want to make all the navigation items single line for consistency, or we’d like them tucked away in a menu which the user can toggle.</p>
<p>We’ll go with the latter, as it’s much cleaner and we won’t have to worry about the user struggling to read the text on each navigation item.</p>
<h3 id="flex-direction"><code>flex-direction</code></h3>
<p>With an item whose display is flex, there is also a rule for the direction we want the items to flex. This defaults to row, which aligns all the items neatly across the x-axis.</p>
<p>In our case, we’d like a small vertical menu at the top of our page. Let’s try changing the <code>flex-direction</code> on both <code>.Navbar</code> and <code>.Navbar__Items</code> to column — this aligns all menu items across the y-axis — when the screen width is 768px or lower.</p>
<p>And let’s remove that <code>margin-left</code> from the second <code>&lt;n</code>av&gt;:</p><pre><code class="language-css">@media only screen and (max-width: 768px) {
.Navbar__Items,
.Navbar {
flex-direction: column;
}
.Navbar__Items--right {
margin-left: 0;
}
}</code></pre>
<figcaption>Navbar at 768px screen width or below</figcaption>
</figure>
<p>But now, the navigation items are always visible, which takes up a significant amount of screen real estate.</p>
<p>In our media query, lets add a second rule for <code>.Navbar__Items</code> so they are not visible:</p><pre><code class="language-css">@media only screen and (max-width: 768px) {
.Navbar__Items,
.Navbar {
flex-direction: column;
}
.Navbar__Items {
display:none;
}
.Navbar__Items--right {
margin-left:0;
}
}</code></pre>
<figcaption>What navbar now looks like on mobile</figcaption>
</figure>
<h3 id="the-toggle-button">The toggle button</h3>
<p>For the toggle button, I am going to use an icon provided by <a href="https://fontawesome.com/" rel="noopener">Font Awesome</a>. If you decide to follow suit, just follow the instructions on their site to get the icons integrated into your project. You can use any icon set you want, or you can use plain text if you desire.</p>
<p>Now let’s add this icon to our HTML:</p><pre><code class="language-html">&lt;div class="Navbar"&gt;
&lt;div class="Navbar__Link Navbar__Link-brand"&gt;
Website title
&lt;/div&gt;
&lt;div class="Navbar__Link Navbar__Link-toggle"&gt;
&lt;i class="fas fa-bars"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;nav class="Navbar__Items"&gt;
&lt;div class="Navbar__Link"&gt;
Longer Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Longer Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;nav class="Navbar__Items Navbar__Items--right"&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;/div&gt;</code></pre>
<p>I have bolded the new addition. You will notice that this toggle does not go within any of the <code>nav</code> tags but sits outside with the website title. Makes sense.</p>
<figcaption>Menu icon added</figcaption>
</figure>
<p>Of course, it’s not where we want it to be. And even worse, it’s visible on desktop resolutions.</p>
<p>Let’s fix this. Let’s do what we did with the <code>.Navbar__Items</code> on mobile to the menu icon on desktop:</p><pre><code class="language-css">.Navbar__Link-toggle {
display: none;
}</code></pre>
<p>Now let’s add some rules to the same class within our media query:</p><pre><code class="language-css">.Navbar__Link-toggle {
align-self: flex-end;
display: initial;
position: absolute;
cursor: pointer;
}</code></pre>
<figcaption>What the navbar now looks like on mobile with the toggle menu</figcaption>
</figure>
<p>Now, we are pretty much done here. We have our desired look. But we need to add toggle functionality to the menu icon.</p>
<p>In your JavaScript, add:</p><pre><code class="language-html">function classToggle() {
const navs = document.querySelectorAll('.Navbar__Items')
navs.forEach(nav =&gt; nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
.addEventListener('click', classToggle);</code></pre>
<p>Now lastly, add the <code>Navbar__ToggleShow</code> with the rule <code>display:flex</code>to your media query.</p>
<p>Now we have a fully responsive navbar with toggle menu. With Flexbox it really is that simple!</p>
<h3 id="the-final-code">The final code</h3>
<h4 id="html-">HTML:</h4><pre><code class="language-html">&lt;div class="Navbar"&gt;
&lt;div class="Navbar__Link Navbar__Link-brand"&gt;
Website title
&lt;/div&gt;
&lt;div class="Navbar__Link Navbar__Link-toggle"&gt;
&lt;i class="fas fa-bars"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;nav class="Navbar__Items"&gt;
&lt;div class="Navbar__Link"&gt;
Longer Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Longer Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;nav class="Navbar__Items Navbar__Items--right"&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;div class="Navbar__Link"&gt;
Link
&lt;/div&gt;
&lt;/nav&gt;
&lt;/div&gt;</code></pre>
<h4 id="css-">CSS:</h4><pre><code class="language-css">.Navbar {
background-color: #46ACC2;
display: flex;
padding: 16px;
font-family: sans-serif;
color: white;
}
.Navbar__Link {
padding-right: 8px;
}
.Navbar__Items {
display: flex;
}
.Navbar__Items--right {
margin-left:auto;
}
.Navbar__Link-toggle {
display: none;
}
@media only screen and (max-width: 768px) {
.Navbar__Items,
.Navbar {
flex-direction: column;
}
.Navbar__Items {
display:none;
}
.Navbar__Items--right {
margin-left:0;
}
.Navbar__ToggleShow {
display: flex;
}
.Navbar__Link-toggle {
align-self: flex-end;
display: initial;
position: absolute;
cursor: pointer;
}
}</code></pre>
<h4 id="js-">JS:</h4><pre><code class="language-js">function classToggle() {
const navs = document.querySelectorAll('.Navbar__Items')
navs.forEach(nav =&gt; nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
.addEventListener('click', classToggle);</code></pre>
<p>Read more about Flexbox at:</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" rel="noopener"><strong>Basic concepts of flexbox</strong></a><br><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" rel="noopener"><em>The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a…</em></a></p>
<p>And where I learned the basics of Flexbox myself:</p>
<p><a href="/news/i-just-launched-a-free-full-length-flexbox-course-where-you-can-build-projects-interactively-1860e3d3c4af/"><strong>I just launched a free full-length Flexbox course where you can build projects interactively</strong><br><em>After the success of the CSS Grid course I launched with freeCodeCamp in December (over 14,000 students so far!) I…</em></a></p>
<p>Follow me on <a href="https://twitter.com/CharlieCW90" rel="noopener">Twitter</a> or <a href="https://github.com/charliearlie" rel="noopener">GitHub</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
