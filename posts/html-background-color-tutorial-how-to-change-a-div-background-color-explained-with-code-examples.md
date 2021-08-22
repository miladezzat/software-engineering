---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg"
tags: [CSS]
description: "One of the most common things you may have to do as a web dev"
author: "Milad E. Fahmy"
title: "HTML Background Color Tutorial – How to Change a Div Background Color, Explained with Code Examples"
created: "2021-08-15T22:49:25+02:00"
modified: "2021-08-15T22:49:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Background Color Tutorial – How to Change a Div Background Color, Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b32740569d1a4ca2a54.jpg" alt="HTML Background Color Tutorial – How to Change a Div Background Color, Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="div-2"&gt; I love CSS &lt;/div&gt;
&lt;div class="div-3"&gt; I love JavaScript &lt;/div&gt;
</code></pre>
.div-1 {
background-color: #EBEBEB;
}
.div-2 {
background-color: #ABBAEA;
}
.div-3 {
background-color: #FBD603;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="div-1"&gt; I love HTML &lt;/div&gt;
&lt;div class="div-2"&gt; I love CSS &lt;/div&gt;
&lt;div class="div-3"&gt; I love JavaScript &lt;/div&gt;
&lt;/body&gt;
</code></pre>
&lt;style&gt;
body {
background-color: #ABBAEA;
}
div {
height: 200px;
margin: 20px;
border: 5px solid;
background-color: #FBD603;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div&gt;
&lt;p&gt;This is the parent div which contains the div we are testing&lt;/p&gt;
&lt;div&gt;
&lt;p&gt;This example shows that changing the background color of a div does not affect the border and margin of the div.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
</code></pre>
/* Keyword value/name of color */
.div-1 {
background-color: red;
}
/* Hexadecimal value */
.div-2 {
background-color: #FF0000;
}
/* RGB value */
.div-3 {
background-color: rgb(255,0,0);
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="div-1"&gt;
&lt;p&gt;The background property can take six different values.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="div-2"&gt;
&lt;p&gt;The background property can take six different values.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="div-3"&gt;
&lt;p&gt;The background property can take six different values.&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
</code></pre>
background-color: hsl(0, 100%, 25%;
/* Special keyword values */
background-color: currentcolor;
background-color: transparent;
/* Global values */
background-color: inherit;
background-color: initial;
background-color: unset;
</code></pre>
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
