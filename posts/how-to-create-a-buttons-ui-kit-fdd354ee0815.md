---
card: "https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png"
tags: [Web Development]
description: "The theme for week #6 of the Weekly Coding Challenge is:"
author: "Milad E. Fahmy"
title: "How to create a Buttons UI Kit"
created: "2021-08-16T10:06:38+02:00"
modified: "2021-08-16T10:06:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-programming tag-ui tag-css tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Buttons UI Kit</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*eUqmaII3aMOcV9hw.png" alt="How to create a Buttons UI Kit">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;h4&gt;Primary&lt;/h4&gt;
&lt;button class="btn btn-primary"&gt;Default&lt;/button&gt;
&lt;button class="btn btn-primary btn-hover"&gt;Hover&lt;/button&gt;
&lt;button class="btn btn-primary" disabled&gt;Disabled&lt;/button&gt;
&lt;button class="btn btn-primary btn-large"&gt;Large&lt;/button&gt;
&lt;button class="btn btn-primary btn-small"&gt;Small&lt;/button&gt;
&lt;h4&gt;Secondary&lt;/h4&gt;
&lt;button class="btn btn-secondary"&gt;Default&lt;/button&gt;
&lt;button class="btn btn-secondary btn-hover"&gt;Hover&lt;/button&gt;
&lt;button class="btn btn-secondary" disabled&gt;Disabled&lt;/button&gt;
&lt;button class="btn btn-secondary btn-large"&gt;Large&lt;/button&gt;
&lt;button class="btn btn-secondary btn-small"&gt;Small&lt;/button&gt;
&lt;h4&gt;Tertiary&lt;/h4&gt;
&lt;button class="btn btn-tertiary"&gt;Default&lt;/button&gt;
&lt;button class="btn btn-tertiary btn-hover"&gt;Hover&lt;/button&gt;
&lt;button class="btn btn-tertiary" disabled&gt;Disabled&lt;/button&gt;
&lt;button class="btn btn-tertiary btn-large"&gt;Large&lt;/button&gt;
&lt;button class="btn btn-tertiary btn-small"&gt;Small&lt;/button&gt;
&lt;/div&gt;</code></pre><p>We are using classes to differentiate between the different types of buttons.</p><h3 id="the-css">The CSS</h3><p><code>.btn</code> is the main class used by all of our buttons:</p><pre><code class="language-css">.btn {
border-radius: 2px;
border: 1px solid;
color: #ffffff;
cursor: pointer;
font-family: 'Open Sans', sans-serif;
font-size: 14px;
padding: 8px 24px;
}</code></pre><p>☝️ Some general styling to make it look better than the default version. ?</p><p>Next, we have the different states:</p><pre><code class="language-css">.btn-hover,
.btn:hover {
opacity: 0.9;
}
.btn:disabled {
background-color: transparent;
cursor: not-allowed;
opacity: 0.7;
}
.btn:active {
opacity: 1;
}
.btn:focus {
outline: 0;
}</code></pre><p>In order to have some difference between the states, we can play with the <code>opacity</code> property.</p><p>Initially the button has <code>opacity: 1</code> and we reduce that <code>opacity</code> slightly when we hover over the button and then a little more when the button is <code>disabled</code>. When we click on the button though, we'll set the opacity back to 1 as it gives a nice effect.</p><p>For the <code>focus</code> state, we remove the default <code>outline</code> property and we'll add a <code>box-shadow</code> property instead, but we'll do this separately for each button type because the color is changing depending on the class (see below).</p><p>The individual colors are set to the <code>.btn-primary</code>, <code>.btn-secondary</code> and <code>.btn-tertiary</code> classes:</p><pre><code class="language-css">.btn-primary {
border-color: var(--primary-color);
background-color: var(--primary-color);
}
.btn-primary:disabled {
color: var(--primary-color);
}
.btn-primary:focus {
box-shadow: 0 0 5px var(--primary-color);
}
.btn-secondary {
border-color: var(--secondary-color);
background-color: var(--secondary-color);
}
.btn-secondary:disabled {
color: var(--secondary-color);
}
.btn-secondary:focus {
box-shadow: 0 0 5px var(--secondary-color);
}
.btn-tertiary {
border-color: var(--tertiary-color);
background-color: var(--tertiary-color);
}
.btn-tertiary:disabled {
color: var(--tertiary-color);
}
.btn-tertiary:focus {
box-shadow: 0 0 5px var(--tertiary-color);
}</code></pre><p>As you can see we use the <a href="https://www.w3schools.com/css/css3_variables.asp" rel="noopener">CSS variables</a> method to set the same color on different properties. But for this to work, we need to declare the color variables on <code>:root</code> as follows:</p><pre><code class="language-css">:root {
--primary-color: #3457dc;
--secondary-color: #ea4d67;
--tertiary-color: #ea674d;
}</code></pre><p>Note that it’s good practice to add the <code>:root</code> declaration in the top of the css file.</p><p>Lastly, let’s add the two extra sizes; <code>.btn-large</code> and <code>.btn-small</code> classes:</p><pre><code class="language-css">.btn-large {
font-size: 16px;
padding: 12px 36px;
}
.btn-small {
font-size: 12px;
padding: 4px 12px;
}</code></pre><h3 id="conclusion">Conclusion</h3><p>See how easy it is to create a <em>Buttons UI Kit</em>? ?</p><p>As a <strong>bonus features</strong> you can add a <code>ripple effect</code> to the buttons via <strong>JavaScript</strong>. I did this in a previous article - you can check it out by clicking <a href="https://www.florin-pop.com/blog/2017/09/button-ripple-effect" rel="noopener">here</a>!</p><p>I hope you liked this challenge and I can’t wait to see what you’re going to create!</p><p>Happy Coding! ?</p><p><em>Originally published at <a href="https://www.florin-pop.com/blog/2019/04/buttons-ui-kit/" rel="noopener">www.florin-pop.com</a>.</em></p>
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
