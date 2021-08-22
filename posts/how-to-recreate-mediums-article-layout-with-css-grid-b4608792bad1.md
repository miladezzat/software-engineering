---
card: "https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png"
tags: [CSS]
description: "When people think of CSS Grid they normally envision image gr"
author: "Milad E. Fahmy"
title: "How to recreate Medium’s article layout with CSS Grid"
created: "2021-08-15T23:49:33+02:00"
modified: "2021-08-15T23:49:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-design tag-responsive-design tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to recreate Medium’s article layout with CSS Grid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*YgYXxuC1tzrUdurfhirtww.png" alt="How to recreate Medium’s article layout with CSS Grid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;h1&gt;Running any NPM package in the browser locally&lt;/h1&gt;
&lt;p&gt;JavaScript has never had any official solution for distributing packages, and every web platform (Rails, Django etc) has their own idea of how to structure and package JavaScript. In the last few years, NPM has started becoming the canonical way of distribution, with Webpack as the build system, but there’s no way to load NPM packages in the browser without a server-side component.&lt;/p&gt;
&lt;blockquote&gt;
&lt;p&gt;Scrimba is a platform for interactive coding screencast where
you can run the code at any moment in time.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;figure&gt;
&lt;img src="https://mave.me/img/projects/full\_placeholder.png"&gt;
&lt;/figure&gt;
display: grid;
grid-template-columns: 1fr 740px 1fr;
}
</code></pre><p>The first and last columns are responsive and act as margins. They’ll contain white space in most cases. The middle column is fixed at 740 pixels and will hold the content of the article.</p><p>Notice that we’re not defining the rows as they’ll simply be as tall as they need to be in order to fit their content. Each content block in the article (paragraph, image, title) will get its own row.</p><p>The next step is to make sure all the content in the grid starts at the second column line by default.</p><pre><code class="language-css">article &gt; \* {
grid-column: 2;
}
grid-column: 1 / -1;
margin: 20px 0;
}
display: grid;
**grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr;**
}
grid-column: 4;
}
</code></pre><p>Then we can create the <em>mid-sized</em> image by doing:</p><pre><code class="language-css">article &gt; figure {
grid-column: 2 / -2;
margin: 20px 0;
}
grid-column: 3 / 5;
padding-left: 10px;
color: #666;
border-left: 3px solid black;
}
grid-column: 5;
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
