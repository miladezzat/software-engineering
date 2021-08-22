---
card: "https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg"
tags: [Web Development]
description: "by Muna Mohamed"
author: "Milad E. Fahmy"
title: "How to tackle CSS specificity issues and when to use the !important keyword"
created: "2021-08-16T11:35:51+02:00"
modified: "2021-08-16T11:35:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-css tag-productivity tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to tackle CSS specificity issues and when to use the&nbsp;!important keyword</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*O8s-GnxQPCyWNVc2WJyB5g.jpeg" alt="How to tackle CSS specificity issues and when to use the&nbsp;!important keyword">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
color: green;
}
a {
color: red;
body {
margin: 0;
padding: 0;
overflow-x: hidden;
}
.wrapper {
width: 100%;
}
.wrapper #header {
position: fixed;
z-index: 300;
padding: 15px;
width: calc(100% - 30px);
display: flex;
justify-content: space-between;
align-items: center;
background: linear-gradient(to bottom, black 0%, transparent 100%);
}
.wrapper #header #brand-logo {
color: #d32f2f;
text-shadow: 1px 1px 2px black;
letter-spacing: 5px;
text-transform: uppercase;
font-family: Montserrat;
font-weight: bold;
font-size: 22px;
}
.wrapper #header #menu-icon {
display: none;
}
.wrapper #header .nav-link,
.wrapper #header .icon {
color: #bdbdbd;
cursor: pointer;
}
.wrapper #header .nav-menu {
width: 400px;
display: flex;
justify-content: space-around;
align-items: center;
}
.wrapper #header .nav-link {
padding: 5px 10px;
font-size: 15px;
font-family: century gothic;
text-decoration: none;
transition: background-color 0.2s ease-in;
}
.wrapper #header .nav-link:hover {
color: #c62828;
background-color: rgba(0, 0, 0, 0.7);
}
.wrapper #header .icon {
font-size: 16px;
}
.wrapper #header .icon:hover {
color: #c62828;
}
.wrapper #site-banner,
.wrapper #categories {
width: 100%;
}
.wrapper #site-banner {
height: 550px;
background-image: url("https://s1.gifyu.com/images/rampage_2018-1024x576.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
}
.wrapper #site-banner .main-movie-title,
.wrapper #site-banner .watch-btn,
.wrapper #site-banner .main-overview {
position: absolute;
z-index: 3;
}
.wrapper #site-banner .main-movie-title, .wrapper #site-banner .watch-btn {
text-transform: uppercase;
}
.wrapper #site-banner .main-movie-title {
top: 120px;
left: 20px;
background: -webkit-linear-gradient(#ff9100, #dd2c00);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 55px;
font-family: Montserrat;
font-weight: bold;
}
.wrapper #site-banner .main-overview {
width: 400px;
top: 230px;
left: 25px;
color: #fafafa;
line-height: 25px;
font-family: helvetica;
}
.wrapper #site-banner .watch-btn {
width: 150px;
height: 35px;
top: 350px;
left: 25px;
border: none;
border-radius: 20px;
color: #fafafa;
cursor: pointer;
transition: all 0.2s ease-in;
background-color: #ff0000;
box-shadow: 1px 5px 15px #940000;
}
.wrapper #site-banner .watch-btn:hover {
color: #F5F5F5;
background-color: #940000;
}
.wrapper .after {
position: relative;
top: 0;
left: 0;
z-index: 2;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
}
.wrapper #categories {
padding: 30px 0;
display: flex;
flex-direction: column;
background: linear-gradient(to top, #090909 0%, #000000 100%);
overflow: hidden;
}
.wrapper #categories .category {
margin: 30px 0;
}
.wrapper #categories .category-header, .wrapper #categories .content {
margin-left: 20px;
color: #B0BEC5;
font-family: helvetica;
}
.wrapper #categories .category-header {
margin-bottom: 50px;
font-weight: normal;
letter-spacing: 5px;
}
.wrapper #categories .content {
position: relative;
right: 0;
display: flex;
justify-content: flex-start;
transition: all 3s ease-in-out;
}
.wrapper #categories .movie {
margin-right: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
}
.wrapper #categories .movie-img {
transition: all 0.2s ease-in;
}
.wrapper #categories .movie-img:hover {
-webkit-filter: contrast(1.1);
filter: contrast(1.1);
-webkit-transform: scale(1.05);
transform: scale(1.05);
cursor: pointer;
}
.wrapper #footer {
width: 100%;
height: 120px;
background-color: #090909;
display: flex;
align-items: flex-end;
justify-content: flex-start;
}
.wrapper #footer #copyright-label {
margin-left: 20px;
padding: 10px;
color: rgba(255, 255, 255, 0.3);
opacity: 0.7;
letter-spacing: 2px;
font-family: helvetica;
font-size: 12px;
}
//Media Query
@media (max-width: 750px) {
.nav-menu {
visibility: hidden;
}
#menu-icon {
display: block !important;
font-size: 22px;
}
.main-movie-title {
font-size: 45px !important;
}
.main-overview {
width: 350px !important;
font-size: 14px !important;
}
.watch-btn {
width: 130px !important;
height: 25px !important;
font-size: 13px;
}
.movie-img {
width: 170px;
}
display: none;
}
.wrapper #site-banner .main-movie-title {
...
font-size: 55px;
...
}
.wrapper #site-banner .main-overview {
width: 400px;
...
}
.wrapper #site-banner .watch-btn {
width: 150px;
height: 35px;
...
}
@media (max-width: 750px) {
#menu-icon {
display: block !important;
...
}
.main-movie-title {
font-size: 45px !important;
}
.main-overview {
width: 350px !important;
font-size: 14px !important;
}
.watch-btn {
width: 130px !important;
height: 25px !important;
...
}
}</code></pre><p>We can see that the CSS selectors in the main part of the stylesheet have higher specificity than the corresponding CSS selectors in the media query. Despite the CSS selectors in the media query appearing later on in the stylesheet, because of specificity rules (which take precedence over source order rules), the browser will apply the CSS rules of the CSS selectors that come before it.</p><p>To fix this, we must increase the specificity values of the CSS selectors in the media query. If we make it so that the CSS selectors that target the same HTML elements have equal specificity, then the browser will follow the source order rule. The CSS rules outlined in the media query (that’s located lower down in the stylesheet) will be applied when the screen-width is less than 750 pixels.</p><p>The end result will look like this:</p><pre><code class="language-css">.wrapper #header #menu-icon {
display: none;
}
.wrapper #site-banner .main-movie-title {
...
font-size: 55px;
...
}
.wrapper #site-banner .main-overview {
width: 400px;
...
}
.wrapper #site-banner .watch-btn {
width: 150px;
height: 35px;
...
}
@media (max-width: 750px) {
.wrapper #header #menu-icon {
display: block;
...
}
.wrapper #site-banner .main-movie-title {
font-size: 45px;
}
.wrapper #site-banner .main-overview {
width: 350px;
font-size: 14px;
}
.wrapper #site-banner .watch-btn {
width: 130px;
height: 25px;
font-size: 13px;
}
}</code></pre><p>And that’s it! We have removed all traces of the <em>!important</em> keyword from the stylesheet. Already we can see that the stylesheet is easier to read, and you can imagine that our refactored stylesheet would be a lot easier to work with and maintain (particularly if others will be working on it too).</p><h3 id="conclusion">Conclusion</h3><p>So, what have we learned?</p><p>We have learned about how browsers determine which CSS styles to apply by using the source order, specificity and origin of selectors. We have also learned about the problems which can arise by using <em>!important </em>in your CSS and why its use should be kept to a bare minimum.</p><p>We do not have to resort to using <em>!important</em> in order to fix things — there are much better solutions out there.</p><p>The concept of specificity is one that can take a while to get your head around, but I hope that by documenting the process and using a real project, it helps you better understand the concept of specificity and how to apply it in your own CSS.</p><p><strong>Additional Resources</strong></p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" rel="noopener">MDN Web Docs</a></li><li><a href="http://batificity.com/" rel="noopener">Batficity </a>by <a href="https://twitter.com/Mandy_Kerr" rel="noopener">Mandy Michael</a></li><li><a href="https://stuffandnonsense.co.uk/archives/css_specificity_wars.html" rel="noopener">CSS Specificity Wars</a> by <a href="https://twitter.com/malarkey" rel="noopener">Andy Clarke</a></li><li><a href="https://isellsoap.github.io/specificity-visualizer/" rel="noopener">Specificity Visualizer</a> by <a href="https://twitter.com/isellsoap" rel="noopener">Francesco Schwarz</a>.</li><li><a href="https://css-tricks.com/when-using-important-is-the-right-choice/" rel="noopener">When using !important is the right choice</a> by <a href="https://twitter.com/chriscoyier" rel="noopener">Chris Coyier</a></li></ul><p>You can find the project we’ve been working on <a href="https://codepen.io/Munamohamed94/pen/LJWzGr" rel="noopener">here</a>.</p><h4 id="i-hope-you-enjoyed-this-post-if-you-did-and-share-till-next-time-">I hope you enjoyed this post! If you did, ❤️, ? and share! Till next time! ✌️</h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
