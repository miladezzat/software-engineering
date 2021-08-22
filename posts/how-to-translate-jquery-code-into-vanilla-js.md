---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg"
tags: [Jquery]
description: jQuery was once one of the most popular JS libraries availabl
author: "Milad E. Fahmy"
title: "How to Translate jQuery Code Into Vanilla JS"
created: "2021-08-15T19:29:36+02:00"
modified: "2021-08-15T19:29:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jquery tag-javascript tag-js tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Translate jQuery Code Into Vanilla JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa7740569d1a4ca26e2.jpg" alt="How to Translate jQuery Code Into Vanilla JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>jQuery was once one of the most popular JS libraries available. It solved a lot of problems, like making DOM manipulation and Ajax calls standard across all the different browsers, which all handled JavaScript slightly differently.</p>
<p>A lot of jQuery's once cutting edge features have made it into vanilla JavaScript, so there's no need to load an entire library for just a few functionalities. Given this, it's not uncommon that one of your tasks on the job will be to rewrite jQuery into vanilla JavaScript.</p>
<h3 id="how-to-rewrite-jquery-into-vanilla-js">How to rewrite jQuery into vanilla JS</h3>
<p>Imagine you have the following code:</p><pre><code class="language-html">&lt;div class="m1 menu"&gt;
&lt;div id="menu-center"&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a class="active" href="#home"&gt;Home&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#portfolio"&gt;Portfolio&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div id="home"&gt;&lt;/div&gt;
&lt;div id="portfolio"&gt;&lt;/div&gt;
&lt;div id="about"&gt;&lt;/div&gt;
&lt;div id="contact"&gt;&lt;/div&gt;</code></pre><pre><code class="language-css">body, html {
margin: 0;
padding: 0;
height: 100%;
width: 100%;
}
.menu {
width: 100%;
height: 75px;
background-color: rgba(0, 0, 0, 1);
position: fixed;
background-color:rgba(4, 180, 49, 0.6);
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-o-transition: all 0.3s ease;
transition: all 0.3s ease;
}
.light-menu {
width: 100%;
height: 75px;
background-color: rgba(255, 255, 255, 1);
position: fixed;
background-color:rgba(4, 180, 49, 0.6);
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-o-transition: all 0.3s ease;
transition: all 0.3s ease;
}
#menu-center {
width: 980px;
height: 75px;
margin: 0 auto;
}
#menu-center ul {
margin: 15px 0 0 0;
}
#menu-center ul li {
list-style: none;
margin: 0 30px 0 0;
display: inline;
}
.active {
font-family:'Droid Sans', serif;
font-size: 14px;
color: #fff;
text-decoration: none;
line-height: 50px;
}
a {
font-family:'Droid Sans', serif;
font-size: 14px;
color: black;
text-decoration: none;
line-height: 50px;
}
#home {
background-color: grey;
height: 100%;
width: 100%;
overflow: hidden;
background-image: url(images/home-bg2.png);
}
#portfolio {
background-image: url(images/portfolio-bg.png);
height: 100%;
width: 100%;
}
#about {
background-color: blue;
height: 100%;
width: 100%;
}
#contact {
background-color: red;
height: 100%;
width: 100%;
}</code></pre><pre><code class="language-js">$(document).ready(function () {
$(document).on("scroll", onScroll);
//smoothscroll
$('a[href^="#"]').on('click', function (e) {
e.preventDefault();
$(document).off("scroll");
$('a').each(function () {
$(this).removeClass('active');
})
$(this).addClass('active');
var target = this.hash,
menu = target;
$target = $(target);
$('html, body').stop().animate({
'scrollTop': $target.offset().top+2
}, 500, 'swing', function () {
window.location.hash = target;
$(document).on("scroll", onScroll);
});
});
});
function onScroll(event){
var scrollPos = $(document).scrollTop();
$('#menu-center a').each(function () {
var currLink = $(this);
var refElement = $(currLink.attr("href"));
if (refElement.position().top &lt;= scrollPos &amp;&amp; refElement.position().top + refElement.height() &gt; scrollPos) {
$('#menu-center ul li a').removeClass("active");
currLink.addClass("active");
}
else{
currLink.removeClass("active");
}
});
}</code></pre>
<p>When you scroll down the page, the navbar should change colors as you get to different sections:</p>
<p>The function that handles this is <code>onScroll</code>:</p><pre><code class="language-js">function onScroll(event){
var scrollPos = $(document).scrollTop();
/* console.log(scrollPos); */
$('#menu-center a').each(function () {
var currLink = $(this);
var refElement = $(currLink.attr("href"));
if (refElement.position().top &lt;= scrollPos &amp;&amp; refElement.position().top + refElement.height() &gt; scrollPos) {
$('#menu-center ul li a').removeClass("active");
currLink.addClass("active");
}
else{
currLink.removeClass("active");
}
});
}</code></pre>
<p>To translate <code>onScroll</code> into vanilla JS, you have a few options.</p>
<h3 id="option-1-use-an-online-compiler">Option #1: Use an online compiler</h3>
<p>You can use an online tool like Google's <a href="https://closure-compiler.appspot.com/">Closure Compiler</a> to compress the code and strip out any unnecessary jQuery.</p>
<p>The problem is that you're still essentially left with jQuery code, so the browser would still need to load the library.</p>
<h3 id="option-2-manually-translate-the-code">Option #2: Manually translate the code</h3>
<p>The best option is to check out resources like <a href="https://github.com/nefe/You-Dont-Need-jQuery">You Don't Need jQuery</a> and <a href="http://youmightnotneedjquery.com/">You Might Not Need jQuery</a> before rewriting your jQuery code. You'll be able to find the native JS versions of the most popular jQuery methods, some of which you can use in your own code.</p>
<p>Here's the <code>onScroll</code> function in vanilla JS:</p><pre><code class="language-js">function onScroll(event) {
var sections = [...document.querySelectorAll('#menu-center a')];
var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
sections.forEach(function(currLink) {
var val = currLink.getAttribute('href');
var refElement = document.querySelector(val);
if (refElement.offsetTop &lt;= scrollPos &amp;&amp; (refElement.offsetTop + refElement.offsetHeight &gt; scrollPos)) {
//document.querySelector('#menu-center ul li a').classList.remove('active');
currLink.classList.add('active');
} else {
currLink.classList.remove('active');
}
});
}
document.addEventListener('scroll', onScroll);</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
