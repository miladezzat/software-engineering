---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg"
tags: [JavaScript]
description: "The ‘src’ attribute in a tag is the path to an external file "
author: "Milad E. Fahmy"
title: "Link JavaScript to HTML with the script src Attribute"
created: "2021-08-15T22:50:07+02:00"
modified: "2021-08-15T22:50:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">Link JavaScript to HTML with the script src Attribute</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e93740569d1a4ca3dd8.jpg" alt="Link JavaScript to HTML with the script src Attribute">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The ‘src’ attribute in a tag is the path to an external file or resource that you want to link to your HTML document.</p><p>For example, if you had your own custom JavaScript file named ‘script.js’ and wanted to add its functionality to your HTML page, you would add it like this:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Script Src Attribute Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src="./script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>This would point to a file named ‘script.js’ that is in the same directory as the .html file. You can also link to other directories by using ’..’ in the file path.</p><pre><code class="language-html">&lt;script src="../public/js/script.js"&gt;&lt;/script&gt;</code></pre><p>This jumps up one directory level then into a ‘public’ directory then to a ‘js’ directory and then to the ‘script.js’ file.</p><p>You can also use the ‘src’ attribute to link to external .js files hosted by a third party. This is used if you don’t want to download a local copy of the file. Just note that if the link changes or network access is down, then the external file you are linking to won’t work.</p><p>This example links to a jQuery file.</p><pre><code class="language-html">&lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"&gt;&lt;/script&gt;</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src" rel="nofollow">MDN Article on the HTML</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
