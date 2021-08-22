---
card: "/images/default.jpg"
tags: [Sass]
description: "Next.js gives us CSS Modules by default, providing benefits l"
author: "Milad E. Fahmy"
title: "How to Use Sass with CSS Modules in Next.js"
created: "2021-08-16T10:04:16+02:00"
modified: "2021-08-16T10:04:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-sass tag-nextjs tag-css-modules tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Sass with CSS Modules in Next.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/Article.jpg 300w,
/news/content/images/size/w600/2021/01/Article.jpg 600w,
/news/content/images/size/w1000/2021/01/Article.jpg 1000w,
/news/content/images/size/w2000/2021/01/Article.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/Article.jpg" alt="How to Use Sass with CSS Modules in Next.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
color: blueviolet;
}</code></pre><p>And I import that into my React project:</p><pre><code class="language-js">import styles from './my-styles.css'</code></pre><p>I can then apply that title right to an element as if it were a string:</p><pre><code class="language-jsx">&lt;h1 className={styles.title}&gt;My Title&lt;/h1&gt;</code></pre><p>By scoping styles, you no longer have to worry about breaking other parts of the application with cascading styles. It’s also easier to manage smaller chunks of code that pertain to a specific piece of the application.</p><h2 id="what-is-sass">What is Sass?</h2><p><a href="https://sass-lang.com/">Sass</a> is an extension of the CSS language that provides powerful features like variables, functions, and other operations that allow you to more easily build complex features into your project.</p><p>As an example, if I wanted to store my color above in a variable so I can easily change it later, I can add:</p><pre><code class="language-scss">$color-primary: blueviolet;
.title {
color: $color-primary;
}</code></pre><p>If I wanted to change that color but only in one spot, I can use built-in color functions to change the shade:</p><pre><code class="language-scss">$color-primary: blueviolet;
.title {
color: $color-primary;
border-bottom: solid 2px darken($color-primary, 10);
}</code></pre><p>One additional benefit is the ability to nest styles. This allows for easier, more logical organization of your CSS.</p><p>For instance, if I wanted to change only a <code>&lt;strong&gt;</code> element nested in a title, I can add:</p><pre><code>$color-primary: blueviolet;
$color-secondary: cyan;
.title {
color: $color-primary;
border-bottom: solid 2px darken($color-primary, 10);
strong {
color: $color-secondary;
}
color: #0070f3;</code></pre><p>to</p><pre><code class="language-scss">.title a {
@media (max-width: 600px) {
@content;
}
}</code></pre><p><em>Note: while we probably can come up with a better name for this mixin than desktop, we’ll use that as the basis of our example.</em></p><p>The <code>@content</code> means that any time we use our desktop mixin, it will include the nested content in that location.</p><p>To test this out, back in our <code>Home.module.css</code> file, let’s update our <code>.grid</code> snippet:</p><pre><code class="language-scss">@include desktop() {
.grid {
width: 100%;
flex-direction: column;
}
// Styles
}
.footer img {
margin-left: 0.5rem;
}</code></pre><p>We can include that <code>img</code> definition right inside of the original <code>.footer</code> definition:</p><pre><code class="language-scss">.footer {
// Styles
img {
margin-left: 0.5rem;
}
}</code></pre><p>That img definition will compile to <code>.footer img</code>, just the same as if it was written in standard CSS.</p><p>So with that in mind, we can use the same concept and move our desktop mixin into our original <code>.grid</code> class:</p><pre><code class="language-scss">.grid {
@include desktop() {
width: 100%;
flex-direction: column;
}
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">🐦 Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">📺 Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">📫 Sign Up For My Newsletter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://github.com/sponsors/colbyfayock" style="text-decoration: none;">💝 Sponsor Me</a>
</li>
</ul>
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
