---
card: "https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png"
tags: [JavaScript]
description: "CSS Custom Properties (also known as Variables) is a big win "
author: "Milad E. Fahmy"
title: "Learn CSS Variables in 5 minutes - A tutorial for beginners"
created: "2021-08-15T23:48:58+02:00"
modified: "2021-08-15T23:48:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-css tag-design tag-front-end-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Learn CSS Variables in 5 minutes - A tutorial for beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*03NPOHNBLqOn5r22HrvlyQ.png" alt="Learn CSS Variables in 5 minutes - A tutorial for beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
--main-color: #ff6f69;
}
</code></pre><p>As you can see, you declare a variable just the same way you’d set any CSS property. However, the variable must start with two dashes.</p><p>To access a variable, you need to use the <code>var()</code> function, and pass in the name of the variable as the parameter.</p><pre><code class="language-css">#title {
color: var(--main-color);
}
--alert-color: #ff6f69;
}
</code></pre><p>This variable can now be used by its children:</p><pre><code class="language-css">.alert p {
color: var(--alert-color);
border: 1px solid var(--alert-color);
}
</code></pre><p>If you tried use the <code>alert-color</code> variable somewhere else in your application, for example in the navbar, it simply wouldn’t work. The browser would just ignore that line of CSS.</p><h3 id="easier-responsiveness-with-variables">Easier responsiveness with variables</h3><p>A big advantage of CSS Variables is that they have access to the DOM. This isn’t the case with LESS or SASS as their variables are compiled down to regular CSS.</p><p>In practice this means that you can, for example, change the variables based upon the width of the screen:</p><pre><code class="language-css">:root {
--main-font-size: 16px;
}
media all and (max-width: 600px) {
:root {
--main-font-size: 12px;
}
}
</code></pre><p>And with those simple four lines of code you have updated the main font size across your entire app when viewed on small screens. Pretty elegant, huh?</p><h3 id="how-to-access-variables-with-javascript">How to access variables with JavaScript</h3><p>Another advantage of living in the DOM is that you can access the variables with JavaScript, and even update them, for example, based upon user interactions. This is perfect if you want to give your users the ability to change your website (such as adjusting font size).</p><p>Let’s continue on the example from the beginning of this article. Grabbing a CSS Variable in JavaScript takes three lines of code.</p><pre><code class="language-js">var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);
\--&gt; '#ffeead'
</code></pre><p>To update the CSS Variable simply call the <code>setProperty</code> method on the element in which the variables have been declared on and pass in the variable name as the first parameter and the new value as the second.</p><pre><code class="language-js">root.style.setProperty('--main-color', '#88d8b0')
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
