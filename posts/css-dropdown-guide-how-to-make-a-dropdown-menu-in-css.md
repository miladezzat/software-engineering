---
card: "/images/default.jpg"
tags: [CSS]
description: "Dropdown menus are used in CSS to hide a predefined list with"
author: "Milad E. Fahmy"
title: "CSS Dropdown Guide: How to Make a Dropdown Menu in CSS"
created: "2021-08-15T22:49:59+02:00"
modified: "2021-08-15T22:49:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Dropdown Guide: How to Make a Dropdown Menu in CSS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/99-films-t1tAOh-CaZ4-unsplash.jpg 300w,
/news/content/images/size/w600/2020/03/99-films-t1tAOh-CaZ4-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/03/99-films-t1tAOh-CaZ4-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/03/99-films-t1tAOh-CaZ4-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/99-films-t1tAOh-CaZ4-unsplash.jpg" alt="CSS Dropdown Guide: How to Make a Dropdown Menu in CSS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-are-dropdowns"><strong>What are Dropdowns?</strong></h2><p>Dropdown menus are used in CSS to hide a predefined list within a button.</p><p>Examples:</p><pre><code class="language-html">&lt;div class="dropdown"&gt;
&lt;button class="dropbtn"&gt;Name&lt;/button&gt;
&lt;div class="dropdownContent"&gt;
&lt;a href="#"&gt;One&lt;/a&gt;
&lt;a href="#"&gt;Two&lt;/a&gt;
&lt;a href="#"&gt;Three&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Then you should customise the classes in CSS like this:</p><pre><code class="language-css">.dropdown {
position: relative;
display: inline-block;
}
.dropbtn {
background-color: red;
padding: 10px;
}
.dropdown-content {
display: none;
position: absolute;
}
.dropdown:hover .dropdown-content {
display:block;
}</code></pre><p>You need the separate div classes to create the button, and another div to separate the list of what the button contains.</p><h3 id="an-example">An Example</h3><pre><code class="language-html">&lt;div id="container"&gt;
&lt;div id="myNav1" class="overlay"&gt;
&lt;div class="overlay-content" id="myNav1-content"&gt;
&lt;div&gt;
&lt;a href="#" id="list1_obj1" class="list1" &gt;Content 1&lt;/a&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="#" id="list1_obj2" class="list1" &gt;Content 2&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div id="myNav2" class="overlay"&gt;
&lt;a href="javascript:void(10)" class="closebtn" onclick="closeNav()"&gt;&amp;times&lt;/a&gt;
&lt;div class="overlay-content" id="myNav2-content"&gt;
&lt;div&gt;
&lt;a href="#" id="list2_obj1" class="list2" &gt;Content 3&lt;/a&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="#" id="list2_obj2" class="list2" &gt;Content 4&lt;/a&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="#" id="list2_obj3" class="list2" &gt;Content 5&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">#myNav1 {
height: 0;
width: 50%;
position: fixed;
z-index: 6;
top: 0;
left: 0;
background-color: #ffff;
overflow: hidden;
transition: 0.3s;
opacity: 0.85;
}
#myNav2 {
height: 0;
width: 50%;
position: fixed;
z-index: 6;
bottom: 0;
right: 0;
background-color: #ffff;
overflow: hidden;
transition: 0.3s;
opacity: 0.85;
}
.overlay-content {
position: relative;
width: 100%;
text-align: center;
margin-top: 30px;
}
#myNav1-content{
top: 12%;
left: 5%;
display: none;
}
#myNav2-content{
top: 12%;
right: 10%;
display: none;
}</code></pre><h2 id="more-info-on-css-dropdowns-">More info on CSS dropdowns:</h2><ul><li><a href="/news/how-to-create-a-dropdown-menu-with-css-and-javascript/">How to create a dropdown menu with CSS and JavaScript</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
