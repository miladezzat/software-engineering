---
card: "https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png"
tags: [Gatsbyjs]
description: by Dimitri Ivashchuk
author: "Milad E. Fahmy"
title: "How to animate page transitions in Gatsby.js"
created: "2021-08-15T19:38:26+02:00"
modified: "2021-08-15T19:38:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-gatsbyjs tag-javascript tag-animation tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to animate page transitions in Gatsby.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Bb4qv_rhVEVz3JRtHD2zOg.png" alt="How to animate page transitions in Gatsby.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Dimitri Ivashchuk</p>
<h1 id="how-to-animate-page-transitions-in-gatsby-js">How to animate page transitions in Gatsby.js</h1>
<figcaption>banner by <a href="undefined" rel="noopener" target="_blank" title="">Artur Didenko</a></figcaption>
</figure>
<p>I’m totally enjoying Gatsby for various reasons, and in this post I want to share how easy it is to add customized page transitions to your website to make it more <em>lively </em>and <em>smooth.</em></p>
<p>We will be using <a href="https://www.gatsbyjs.org/" rel="noopener">Gatsby</a> default starter to make this example as isolated as possible, but you can be sure that it will also work for more complex starters and projects created by you from scratch.</p>
<p>As a teaser, we will build something similar to what you see when you follow links on this site. ?</p>
<h3 id="getting-started-">Getting started ?️</h3>
<p>If you are new to Gatsby and want to follow along with this tutorial, be sure to install Gatsby’s command line interface (<a href="https://www.gatsbyjs.org/docs/" rel="noopener">Gatsby CLI</a>) so you can quickly bootstrap new projects in the future.</p>
<p><code>npm install --global gatsby-cli</code></p>
<p>Navigate to your project folder and create a new Gatsby project inside of it by running the following command in the terminal:</p>
<p><code>gatsby new .</code></p>
<p>It will create a project with the simplest possible setup and it should look like this: (it may vary due to further iterations on starter’s design)</p>
<figcaption>Gatsby-default-starter</figcaption>
</figure>
<h3 id="installing-necessary-dependencies-">Installing necessary dependencies ⚙️</h3>
<p>First of all we need to install <a href="https://github.com/reactjs/react-transition-group" rel="noopener">react-transition-group</a> which is responsible for watching out for elements entering and leaving the DOM and applying animations to them.</p>
<p><code>npm install react-transition-group</code></p>
<p>We will also install <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-layout/" rel="noopener">gatsby-plugin-layout</a> that, in our case, provides the location property required for transitions to work and injects our layout to every page.</p>
<p><code>npm install gatsby-plugin-layout</code></p>
<p>To make the plugin work as expected, we need to move our layout component into the layouts folder at the root of our project and rename it to <code>index.js</code>. Let's also add <code>transition.js</code> to our components folder where we will supply all the transition logic. For now leave it empty as we have a little more to configure.</p>
<p>The last step is adding our <code>gatsby-plugin-layout</code> to our <code>gatsby-config.js</code> file that is located in the root of our project</p>
<h3 id="transition-component">Transition component ?</h3>
<p>This holds the full logic for transition that will be applied when a user decides to follow a link to another page on our site.</p>
<p>Inside <code>transition.js</code> add the following code which I will explain in the comments:</p>
<p>Now we can import the <code>Transition</code> component into the Layout component and wrap the children which represent our pages inside of it.</p>
<p>At this point you may experience a bug when some of your page elements are rendered twice. To solve that, just go trough the files in the <code>pages</code> folder and make sure that they don't import the <code>&lt;Layo</code>ut&gt; component and use it in the return statement.</p>
<figcaption>Jerky animation that we want to fix</figcaption>
</figure>
<p>Now that everything is working as expected and you are enjoying your newly added page transitions, you may notice a slight jerky bug that appears when your page is being scrolled down and animation starts. Note that it happens when there is more content on the page and you can scroll.</p>
<p>We can easily fix this with the help of including the below code in our <code>gatsby-browser.js</code> which you can find in the root of our project. What we do here is actually setting a time out for animation and waiting for it to be executed until the page scrolls to the top.</p>
<p>On your website it should look like this</p>
<p>I hope you’ve enjoyed this small post and will use your new knowledge whenever you need it. Here you can find a <a href="https://github.com/d-ivashchuk/animating-gatsby-pt" rel="noopener">link to GitHub repo</a> with the working code for this tutorial. Subscribe to <a href="https://twitter.com/DivDev_" rel="noopener">me on twitter</a> not to miss a next post about Gatsby.js and fun things you can do with it!</p>
<p><em>Originally published at </em><a href="https://divdev.io" rel="noopener">https://divdev.io</a> which btw uses the animation technique we have learned in this post!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
