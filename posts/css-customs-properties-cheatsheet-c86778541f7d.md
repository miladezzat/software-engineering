---
card: "https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png"
tags: [CSS]
description: CSS custom properties, also known as CSS variables, represent
author: "Milad E. Fahmy"
title: "A cheatsheet to help you remember CSS custom properties"
created: "2021-08-15T19:36:56+02:00"
modified: "2021-08-15T19:36:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-front-end-development tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A cheatsheet to help you remember CSS custom properties</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OkasBr8SDeRPWhLGIGlqnw.png" alt="A cheatsheet to help you remember CSS custom properties">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>CSS custom properties, also known as CSS variables, represent custom properties that can be declared and be called in your CSS.</p>
<h3 id="declare-a-custom-property-in-css">Declare a custom property in CSS</h3>
<p>To declare a Custom property in your CSS, you need to use the <code>--</code> syntax:</p><pre><code class="language-css">:root { --colorPrimary: hsla(360, 100%, 74%, 0.6); }</code></pre>
<p>Notice the <code>:root</code> pseudo-class selector — we can declare our variables globally using it. We can also declare them using other selectors, and they will then be scoped in those.</p><pre><code class="language-css">.theme-dark { --colorPrimary: hsla(360, 100%, 24%, 0.6); }</code></pre>
<h3 id="use-a-custom-property-in-css">Use a custom property in CSS</h3>
<p>To use a CSS custom property in your CSS, you can use the <code>var()</code> function:</p><pre><code class="language-css">:root { --colorPrimary: tomato; }
.theme-dark { --colorPrimary: lime; } body { background-color: var(--colorPrimary); }</code></pre>
<p>In this case, <code>body</code> will have a background colour of <code>tomato</code>, but a <code>body.theme-dark</code> of <code>lime</code>.</p>
<h3 id="use-custom-properties-without-units">Use custom properties without units</h3>
<p>CSS custom properties can be declared without units if they are used with the <code>calc()</code> function.</p><pre><code class="language-css">:root { --spacing: 2; }
.container {
padding: var(--spacing) px; /*Doesn't Work ?*/
padding: calc(var(--spacing) * 1rem); /*Will output 2rem ?*/
}</code></pre>
<h2 id="use-custom-properties-with-javascript">Use custom properties with JavaScript</h2>
<p>To get a custom property, we can use the following:</p><pre><code class="language-js">getComputedStyle(element).getPropertyValue("--my-var");
// Or if inline
element.style.getPropertyValue("--my-var");</code></pre>
<p>To update the custom property value:</p><pre><code>element.style.setProperty("--my-var", newVal);</code></pre>
<p>Example of getting and replacing values:</p>
<p>In the following example, we use the <a href="https://workshop.chromeexperiments.com/examples/gui/" rel="noopener">dat.gui controller library</a> to change the value of --scenePerspective, --cubeRotateY, and --cubeRotateX custom properties. This method makes it easier to apply a new style, as you do not have to apply inline style on each DOM element.</p>
<p>Thanks for reading!</p>
<h3 id="resources">Resources</h3>
<p><a href="https://drafts.csswg.org/css-variables/#defining-variables" rel="noopener">Defining Custom Properties: the –* family of properties</a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" rel="noopener">Custom properties: CSS variables — MDN</a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/var" rel="noopener">var() — MDN</a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" rel="noopener">Using CSS custom properties (variables) — MDN</a></p>
<p>You can read more of my articles <a href="https://vinceumo.github.io/devNotes/css/2019/02/20/css-customs-properties.html" rel="noopener">on my blog</a>.</p>
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
