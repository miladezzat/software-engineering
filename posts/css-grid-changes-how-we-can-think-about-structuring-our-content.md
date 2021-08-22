---
card: "/images/default.jpg"
tags: [CSS Grid]
description: "Anyone who has even dabbled a little in creating websites kno"
author: "Milad E. Fahmy"
title: "How CSS Grid Changes the Way We Think About Structuring Our Content"
created: "2021-08-15T22:50:13+02:00"
modified: "2021-08-15T22:50:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css-grid tag-html tag-grid-layout tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How CSS Grid Changes the Way We Think About Structuring Our Content</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/marmoset-1567019547013.png 300w,
/news/content/images/size/w600/2019/08/marmoset-1567019547013.png 600w,
/news/content/images/size/w1000/2019/08/marmoset-1567019547013.png 1000w,
/news/content/images/size/w2000/2019/08/marmoset-1567019547013.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/marmoset-1567019547013.png" alt="How CSS Grid Changes the Way We Think About Structuring Our Content">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="profile-sidebar"&gt;
&lt;!-- profile image and social list here --&gt;
&lt;/div&gt;
&lt;div class="profile-body"&gt;
&lt;!-- name, position, description here --&gt;
&lt;/div&gt;
&lt;ul class="social-list"&gt; ... &lt;/ul&gt;
&lt;h2 class="profile-name"&gt;Ramsey Harper&lt;/h2&gt;
&lt;p class="profile-position"&gt;Graphic Designer&lt;/p&gt;
&lt;p class="profile-info"&gt;Lorem ipsum ...&lt;/p&gt;
display: grid;
grid-template-columns: 1fr 3fr;
...
display: grid;
grid-template-columns: 1fr 3fr;
grid-column-gap: 2em;
grid-template-areas:
"image name"
"image position"
"social description";
}
.profile-name     { grid-area: name; }
.profile-position { grid-area: position; }
.profile-info     { grid-area: description; }
.profile-img{ grid-area: image; }
/* old layout
grid-template-areas:
"image name"
"image position"
"social description"; */
/* updated layout */
grid-template-areas:
"image name"
"image position"
"image social"
". description";
/* setup for small screens */
display: grid;
grid-template-columns: 1fr;
grid-column-gap: 2em;
grid-template-areas:
"name"
"image"
"social"
"position"
"description";
}
.profile-name     {  grid-area: name;}
.profile-position {  grid-area: position; }
.profile-info     {  grid-area: description; }
.profile-img{  grid-area: image; }
.social-list{  grid-area: social; }
/* rearanging the layout for large screens */
@media (min-width: 600px) {
text-align: left;
grid-template-columns: 1fr 3fr;
grid-template-areas:
"image name"
"image position"
"social description";
}
.profile-name::after {
margin-left: 0;
}
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
