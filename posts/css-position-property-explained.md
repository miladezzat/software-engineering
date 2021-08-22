---
card: "/images/default.jpg"
tags: [CSS]
description: "Today we re gonna learn everything you need to know about the"
author: "Milad E. Fahmy"
title: "How the CSS Position Property Works – Explained with Code Examples"
created: "2021-08-16T10:03:33+02:00"
modified: "2021-08-16T10:03:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-design tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How the CSS Position Property Works – Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/FCC-Thumbnail--4-.png 300w,
/news/content/images/size/w600/2021/06/FCC-Thumbnail--4-.png 600w,
/news/content/images/size/w1000/2021/06/FCC-Thumbnail--4-.png 1000w,
/news/content/images/size/w2000/2021/06/FCC-Thumbnail--4-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/FCC-Thumbnail--4-.png" alt="How the CSS Position Property Works – Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
margin: 0px;
padding: 0px;
box-sizing: border-box;
}</code></pre><p>Style the box-1 class like this:👇</p><pre><code class="language-CSS">.box-1{
width: 120px;
height: 120px;
background-color: skyblue;
border: 2px solid black;
/* Other codes are here*/
position: relative;
left: 100px;
/* Other codes are here*/
position: absolute;
left: 100px;
&lt;div class="box-1"&gt;
&lt;div class="box-2"&gt; &lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;</code></pre><h3 id="css-1">CSS</h3><p>Style the boxes with the following CSS:👇</p><pre><code class="language-CSS">.box-1{
width: 300px;
height: 300px;
background-color: skyblue;
border: 2px solid black;
margin: auto;
}
.box-2{
width: 100px;
height:100px;
background-color: pink;
border: 2px solid black;
.box-1{ }
.box-2{ }</code></pre><p>Now, write this code in your CSS: 👇</p><pre><code class="language-CSS">body{
}
.box-1{
/* This is the  👇 parent */
position: relative;
}
.box-2{
/* This is the  👇 child */
position: absolute;
left: 100px;
/* This is the  👇 parent */
position: relative;
}
.box-1{
}
.box-2{
/* This is the  👇 child */
position: absolute;
left: 100px;
&lt;p&gt;lorem200&lt;/p&gt;
&lt;div class="box-1"&gt; fixed &lt;/div&gt;
&lt;p&gt;lorem200&lt;/p&gt;
&lt;/div&gt;</code></pre><p>And here's the CSS:</p><pre><code class="language-CSS">.container{
height: 3000px;
}
.box-1{
height: 120px;
width: 120px;
background-color: skyblue;
border: 2px solid black;
display: grid;
place-content: center;
}</code></pre><p>Then add this CSS at the bottom:</p><pre><code class="language-CSS">.box-1{
position: fixed;
top: 100px;
left: 200px;
}
/*  Play with  👇 this value */
position: sticky;
top: 30px;
left: 200px;
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
