---
card: "https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png"
tags: [JavaScript]
description: "by Michael Ozoemena"
author: "Milad E. Fahmy"
title: "How to use Parcel to bundle your React.js application"
created: "2021-08-16T11:39:41+02:00"
modified: "2021-08-16T11:39:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-es6 tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Parcel to bundle your React.js application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QrpgyDDba-3XhpRIDiPx-Q.png" alt="How to use Parcel to bundle your React.js application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"parcel:dev": "./node_modules/.bin/parcel index.html",
"parcel:watch": "./node_modules/.bin/parcel watch index.html",
"parcel:build": "./node_modules/.bin/parcel build index.html"
}</code></pre><p>As you can see, I have created three <code>npm scripts</code>. Now, when we run <code>npm run parcel:watch</code> we will have our files built into the <code>dist/</code> folder. We’ll also have Parcel watching out for the changes we make as we edit our CSS, HTML, and JavaScript files so it’ll hot-reload the page for us.</p><h3 id="viewing-the-results-"><strong>Viewing the results.</strong></h3><p>In order to view our simple React.js app in the browser, we can run <code>npm start</code> (an already existing script) to start our <code>express</code> server, which should then be listening to <code>localhost:5000/</code>.</p><h4 id="key-things-to-take-away-"><strong>Key things to take away.</strong></h4><ol><li>You can get up and running with Parcel with absolutely zero configurations. All you have to do is install it and run the commands.</li><li>Parcel is suitable for both development and production modes.</li><li>Parcel has an in-built <code>dev-server</code> and <code>hot module replacement</code> to help you quickly get moving.</li><li>There’s more to Parcel than what’s in this article, so be sure to look at the <a href="https://parceljs.org/" rel="noopener">documentation</a> to get more in-depth.</li></ol><p>I hope you enjoyed it. If you did, don’t forget to leave a comment and a few claps.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
