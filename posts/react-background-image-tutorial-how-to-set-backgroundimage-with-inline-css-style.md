---
card: "/images/default.jpg"
tags: [React]
description: "There are four ways to set a backgroundImage style property u"
author: "Milad E. Fahmy"
title: "React Background Image Tutorial – How to Set backgroundImage with Inline CSS Style"
created: "2021-08-16T10:04:20+02:00"
modified: "2021-08-16T10:04:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">React Background Image Tutorial – How to Set backgroundImage with Inline CSS Style</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/fcc-bg-image-2.png 300w,
/news/content/images/size/w600/2020/12/fcc-bg-image-2.png 600w,
/news/content/images/size/w1000/2020/12/fcc-bg-image-2.png 1000w,
/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png" alt="React Background Image Tutorial – How to Set backgroundImage with Inline CSS Style">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return (
&lt;div style={{
backgroundImage: `url("https://via.placeholder.com/500")`
}}&gt;
Hello World
&lt;/div&gt;
);
import background from "./img/placeholder.png";
function App() {
return (
&lt;div style={{ backgroundImage: `url(${background})` }}&gt;
Hello World
&lt;/div&gt;
);
}
Hello World
backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`
}}&gt;
Hello World
&lt;div style={{
backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`,
backgroundRepeat: 'no-repeat',
width:'250px'
}}&gt;
Hello World
&lt;/div&gt;</code></pre><figcaption>Setting background-image with additional properties</figcaption></figure><p>The properties set above will add <code>background-repeat: no-repeat</code> and <code>width: 250px</code> together with the <code>background-image</code> style to the <code>&lt;div&gt;</code> element.</p><p>Thank you for reading, and I hope you found this article useful. If you have any questions, you can <a href="https://twitter.com/nsebhastian">find me on Twitter</a>. I will share some short developer tips from time to time as well. 🙂</p>
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
