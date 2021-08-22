---
card: "/images/default.jpg"
tags: [Web Development]
description: "This list is made up of the most common mistakes I ve witness"
author: "Milad E. Fahmy"
title: "5 Mistakes Beginner Web Developers Make – And How to Fix Them"
created: "2021-08-16T10:03:53+02:00"
modified: "2021-08-16T10:03:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-self-improvement tag-beginners-guide tag-lessons-learned tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">5 Mistakes Beginner Web Developers Make – And How to Fix Them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg 300w,
/news/content/images/size/w600/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg" alt="5 Mistakes Beginner Web Developers Make – And How to Fix Them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This list is made up of the most common mistakes I've witnessed during nearly a decade of teaching beginning web development students.</p><p>My idea for writing this article is not to make fun of beginner mistakes or embarrass anyone who is beginner.</p><p>Rather, my goal is to educate beginners and hopefully save them from some of these common mistakes.</p><h2 id="we-were-all-beginners">We Were All Beginners</h2><p>If you aren't a beginner, you may think the mistakes listed below are obvious... but remember, obviousness is relative to experience.</p><p>Once upon a time, those of us with experience struggled with some of these mistakes, too.</p><p>If you are a beginner, I hope this list saves you some time and anxiety in the near future.</p><p>Let the countdown begin!</p><h2 id="mistake-5-adding-spaces-in-file-names">Mistake #5: Adding Spaces in File Names</h2><p>You may save your HTML file with the name "my cool page.html", but those spaces between words are a mistake.</p><p>Web addresses (aka URLs) cannot have spaces.</p><p>If you load this file into your browser, you are going to see "my%20cool%20page.html" in the browser address bar. Spaces must be encoded because they are not allowed in URLs.</p><p>If you want to see separation between the words in your file names, use an underscore (my_cool_page.html) or a hyphen (my-cool-page.html).</p><p>As a beginner, you probably aren't too worried about search engine optimization (SEO), but <a href="https://developers.google.com/search/docs/advanced/guidelines/url-structure">Google has noted they prefer hyphens</a> in file names over underscores.</p><h2 id="mistake-4-ignoring-case-sensitivity">Mistake #4: Ignoring cAsE sEnSiTiViTy</h2><p>If you are using Windows for your development environment, you might not notice a problem when you inconsistently use lowercase and capital letters. This is a mistake.</p><p>Let's say you created a CSS folder named "Css" and a file within it named "Main.css". But in your code, you link to it like this:</p><pre><code>&lt;link rel="stylesheet" href="css/main.css"&gt;
</code></pre><p>While you're working on your project, there is no problem.</p><p>But when you load your project to a web server...<strong>Boom!</strong> No CSS is applied.</p><p>Many web servers have some version of Linux or Unix running instead of Windows. You may have heard of the LAMP stack. Linux is the L in LAMP.</p><p>These systems are case sensitive.</p><p>Therefore, it is best to use lowercase file names and directory names all the time unless there is a specific naming convention that uses a capital letter. At that point, the file names will still always be consistent. And consistency is what will prevent this mistake.</p><h2 id="mistake-3-not-understanding-file-paths">Mistake #3: Not Understanding File Paths</h2><p>Students that do not understand how to link files within different directories often dump all their files in the root directory in order to access them. This is a mistake that leads to an unorganized file tree.</p><p>Not long after you start learning HTML, you start learning how to link to other HTML and CSS files.</p><p>This is fairly straightforward when the files are in the same directory. Even in the example above, we just looked inside the CSS directory for the main.css file.</p><p>It starts to get more complicated when we need to go up a directory instead of (or before) going down into one.</p><p>In the example below, we are setting the background-image for a web page in our main.css file. The main.css file is in the CSS directory. We are linking to an image in the img directory.</p><pre><code>body {
background-image: url("../img/moon.png");
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
