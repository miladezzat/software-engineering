---
card: "https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png"
tags: [CSS]
description: "CSS Grid and CSS Variables are both huge wins for front-end d"
author: "Milad E. Fahmy"
title: "How to quickly prototype apps with CSS Grid and CSS Variables"
created: "2021-08-16T11:41:33+02:00"
modified: "2021-08-16T11:41:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-technology tag-programming tag-apps-tag tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to quickly prototype apps with CSS Grid and CSS Variables</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*r7YvAzkhlZ2E8Yjfdh-SBw.png" alt="How to quickly prototype apps with CSS Grid and CSS Variables">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
display:          grid;
grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows:     1fr 1fr 1fr 1fr 1fr 60px;
}
</code></pre><p>First, we’re setting the container to be a grid. Then we’re saying that we want six columns and that each of them should be one fraction unit (<code>1fr</code>) wide. One fraction unit means <em>one part of the available space.</em> So here we’re splitting the width into six equally wide fractions and give each column one fraction.</p><p>As for the rows, we’re not splitting all of them into equal height, as the last row isn’t as tall as the rest of them. We’ve explicitly told it to be <code>60px</code> tall instead of <code>1fr</code> tall:</p><pre><code class="language-css">grid-template-rows: 1fr 1fr 1fr 1fr 1fr 60px;
display:          grid;
grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows:     1fr 1fr 1fr 1fr 1fr 60px;
grid-template-areas:
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"n s s s s s";
}
</code></pre><p>Each of the strings represents a row and each of the characters represents a cell in the grid. The characters have a semantical relation to the grid items they are representing (<em>room list</em>, <em>message list</em>, <em>new room form</em> and <em>send message form</em>).</p><p>Now in order to position our items according to our <code>grid-template-areas</code> we’ll need to use the characters as their <code>grid-area</code> value. Like this:</p><pre><code class="language-css">.new-room-form {
grid-area: n;
}
.rooms-list {
grid-area: r;
}
.message-list {
grid-area: m;
}
.send-message-form {
grid-area: s;
}
"n m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r s s s s s";
grid-template-areas:
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"r m m m m m"
"n s s s s s";
grid-template-areas:
"m m m m m r"
"m m m m m r"
"m m m m m r"
"m m m m m r"
"m m m m m r"
"s s s s s n";
grid-template-areas:
"m m m m m n"
"m m m m m r"
"m m m m m r"
"m m m m m r"
"m m m m m r"
"s s s s s r";
--main-color:      #5ea3d0;
--secondary-color: white;
--main-text-color: #3e5869;
--secondary-text-color:  #b0c7d6;
--new-room-form:   #d9e1e8;
--send-message-form:     #F5F5F5;
}
background: var(--main-color);}
.message-text {
background: var(--main-color);
}
</code></pre><p>The beauty of variables is that we now can change the declaration, and then that change will affect the entire app. Let’s for example do:</p><pre><code class="language-css">:root {
--main-color: red;
}
--main-color: #5ea3d0;
--secondary-color: white;
--main-text-color: #3e5869;
--secondary-text-color: #b0c7d6;
--new-room-form: #d9e1e8;
--send-message-form: #F5F5F5;
}
--main-color:     #ff66ff;
--secondary-color:#fbd8fb;
--main-text-color:#3e5869;
--secondary-text-color: #d8b2ff;
--new-room-form:  #ffb2ff;
--send-message-form:    #d8b2ff;
}
.app {
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 60px;
grid-template-areas:
"m m m m r r"
"m m m m r r"
"m m m m r r"
"m m m m r r"
"m m m m n n"
"f f f f f f";
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
