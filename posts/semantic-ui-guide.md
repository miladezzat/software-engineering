---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg"
tags: [Front End Development]
description: "Semantic UI is a front-end development framework similar to b"
author: "Milad E. Fahmy"
title: "Semantic UI Guide"
created: "2021-08-15T22:50:00+02:00"
modified: "2021-08-15T22:50:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-front-end-development tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">Semantic UI Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e39740569d1a4ca3bfd.jpg" alt="Semantic UI Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-is-semantic-ui"><strong>What is Semantic UI? </strong></h2><p>Semantic UI is a front-end development framework similar to bootstrap designed for theming. It contains pre-built semantic components that helps create beautiful and responsive layouts using human-friendly HTML.</p><p>According to the Semantic UI website, the framework utilizes concise HTML, intuitive JavaScript, and simplified debugging to make a front-end development a fun and delightful experience. </p><p>And it integrates with React, Angular, Meteor, Ember and many other frameworks to help organize UI layer alongside application logic.</p><h3 id="semantic-ui-version-history">Semantic UI Version History</h3><p>The first pre-release appear on github on September 2013, created by <a href="https://github.com/jlukic">Jack Lukic</a>.</p><p>Semantic UI <code>1.x</code> was first released in November 2014 with breaking changes to previous pre-releases.</p><p>Semantic UI <code>2.x</code> was first released in June 2015 and introduced new ui, several bug fixes, enhancements, and default theme improvements.</p><h3 id="semantic-ui-browser-support">Semantic UI Browser Support</h3><p>The current version <code>2.2.x</code> support the following browsers</p><ul><li>Last 2 Versions FF, Chrome, Safari Mac</li><li>IE 11+</li><li>Android 4.4+, Chrome for Android 44+</li><li>iOS Safari 7+</li><li>Microsoft Edge 12+</li></ul><h2 id="how-to-install-semantic-ui">How to Install Semantic UI</h2><p>There are several ways of installing Semantic UI, some of the simplest ways are as follows:</p><h3 id="via-content-delivery-network-cdn-">Via Content Delivery Network (CDN)</h3><p>It is by far the easiest for beginners. Create an HTML file as below</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Semantic UI&lt;/title&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"&gt;
&lt;!-- Add custom stylesheet here --&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Write your html code here --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p><code>NOTE:</code> The above CDN link on line 5, will include all the available components in Semantic UI. If you want to install a specific component, <a href="https://cdnjs.com/libraries/semantic-ui">click here</a> to see its respective CDN link.</p><h3 id="using-build-tools">Using Build Tools</h3><p>This will assume you’re using Ubuntu Linux OS with <code>node</code> and <code>npm</code> installed, for other operating systems <a href="https://semantic-ui.com/introduction/getting-started.html">click here</a></p><p>In your project directory, install gulp globally using npm</p><pre><code class="language-text">npm install -g gulp</code></pre><p>Install Semantic UI</p><pre><code class="language-text">npm install semantic-ui --save
cd semantic/
gulp build</code></pre><p>Include in HTML</p><pre><code class="language-html">&lt;link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"&gt;
&lt;script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="semantic/dist/semantic.min.js"&gt;&lt;/script&gt;</code></pre><p>Update Via npm</p><pre><code class="language-text">npm update</code></pre><h3 id="integrating-with-other-frameworks">Integrating with other Frameworks</h3><p>You can integrate Semantic UI with other Front-end development frameworks like React, Angular, Ember or Meteor. <a href="https://semantic-ui.com/introduction/integrations.html">Click here</a> for more informations and integration instructions.</p><h3 id="more-information-about-semantic-ui-">More Information about Semantic UI:</h3><p>Semantic UI has thorough and very well organized documentation that will gets you up and running in no time. The following links will be helpful in your Semantic UI journey.</p><ul><li><a href="https://semantic-ui.com/">Semantic UI Website</a></li><li><a href="https://semantic-ui.com/introduction/getting-started.html">Getting Started with Semantic UI</a></li><li><a href="https://semantic-ui.com/usage/layout.html#pages">Sample Semantic UI Templates</a></li><li><a href="http://learnsemantic.com/">Customizing and Creating Semantic UI Themes</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
