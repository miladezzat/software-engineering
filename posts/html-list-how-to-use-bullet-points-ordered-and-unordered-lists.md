---
card: "/images/default.jpg"
tags: [HTML]
description: "Listing items on a web page is a common task you ll have to d"
author: "Milad E. Fahmy"
title: "HTML List – How to Use Bullet Points, Ordered, and Unordered Lists"
created: "2021-08-16T10:03:30+02:00"
modified: "2021-08-16T10:03:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-web-development tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">HTML List – How to Use Bullet Points, Ordered, and Unordered Lists</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/freeCodeCamp-Cover-1.png 300w,
/news/content/images/size/w600/2021/07/freeCodeCamp-Cover-1.png 600w,
/news/content/images/size/w1000/2021/07/freeCodeCamp-Cover-1.png 1000w,
/news/content/images/size/w2000/2021/07/freeCodeCamp-Cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/freeCodeCamp-Cover-1.png" alt="HTML List – How to Use Bullet Points, Ordered, and Unordered Lists">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;li&gt;Eat&lt;/li&gt;
&lt;li&gt;Code&lt;/li&gt;
&lt;li&gt;Sleep&lt;/li&gt;
&lt;li&gt;Eat&lt;/li&gt;
&lt;li&gt;Code&lt;/li&gt;
&lt;li&gt;Sleep&lt;/li&gt;
&lt;li&gt;Eat&lt;/li&gt;
&lt;li&gt;Code&lt;/li&gt;
&lt;li&gt;Sleep&lt;/li&gt;
&lt;li&gt;Eat&lt;/li&gt;
&lt;li&gt;Code&lt;/li&gt;
&lt;li&gt;Sleep&lt;/li&gt;
&lt;li&gt;Thirty&lt;/li&gt;
&lt;li&gt;Thirty One&lt;/li&gt;
&lt;li&gt;Thirty Two&lt;/li&gt;
</figure><h1 id="how-to-make-an-unordered-list-in-html">How to Make an Unordered List in HTML</h1><p>Let's move over to unordered lists now. We use the <code>&lt;ul&gt;</code> tag to create an unordered list. As usual, we need to use the <code>&lt;li&gt;</code> tags within <code>&lt;ul&gt;</code> and <code>&lt;ul/&gt;</code> to create the list items. </p><p>The list items (<code>li</code>) inside the unordered list (<code>ul</code>) come with the default style of bullet points – so each of the list items is preceded by a black dot.</p><p>Let's create a list of my favorite online resources to learn about web programming:</p><pre><code class="language-html">My Favorite Web Development Learning Sites
&lt;div&gt;
&lt;ul&gt;
&lt;li&gt;freeCodeCamp&lt;/li&gt;
&lt;li&gt;CSS-Tricks&lt;/li&gt;
&lt;li&gt;Traversy Media&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;a href="https://www.freecodecamp.org/" target="_blank"&gt;freeCodeCamp&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://css-tricks.com/" target="_blank"&gt;CSS-Tricks&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://www.traversymedia.com/" target="_blank"&gt;Traversy Media&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
<thead>
<tr>
<th>list-style</th>
<th style="text-align:right">Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td style="text-align:right">There will not be any bullets appearing in front of the list item</td>
</tr>
<tr>
<td>circle</td>
<td style="text-align:right">A circular (hollow) bullet appears in front of the list item</td>
</tr>
<tr>
<td>disc</td>
<td style="text-align:right">This is the default filled circular bullet</td>
</tr>
<tr>
<td>square</td>
<td style="text-align:right">A filled square bullet appears in front of the list item</td>
</tr>
</tbody>
</table>
&lt;dt&gt;Coding&lt;/dt&gt;
&lt;dd&gt;An activity to keep you happy, even in sleep.&lt;/dd&gt;
&lt;dt&gt;Gossiping&lt;/dt&gt;
&lt;dd&gt;Can't live without it.&lt;/dd&gt;
&lt;dt&gt;Sleeping&lt;/dt&gt;
&lt;dd&gt;My all time favorite.&lt;/dd&gt;
&lt;span class="logo"&gt;Logo&lt;/span&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#/home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#/products"&gt;Products&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#/about"&gt;About Us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
background-color: #273032;
color: #FFF;
padding: 10px;
display: flex;
}
.logo {
background-color: blue
}
ul {
margin: 0px;
}
li {
list-style: none;
display: inline;
margin-right: 0.2rem;
}
a {
color: pink;
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
