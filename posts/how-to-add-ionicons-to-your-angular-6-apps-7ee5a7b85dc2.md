---
card: "https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg"
tags: [JavaScript]
description: by Adedoja Adedamola
author: "Milad E. Fahmy"
title: "How to add Ionicons to your Angular 6 apps"
created: "2021-08-15T19:40:35+02:00"
modified: "2021-08-15T19:40:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-ionicons tag-tutorial tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to add Ionicons to your Angular 6 apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*I_tQfo1PrAT_kum--QcNGw.jpeg" alt="How to add Ionicons to your Angular 6 apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Adedoja Adedamola</p>
<h1 id="how-to-add-ionicons-to-your-angular-6-apps">How to add Ionicons to your Angular 6 apps</h1>
<figcaption>Ionicons and Angular</figcaption>
</figure>
<p>I have had to work on a lot of <a href="https://angular.io/" rel="noopener"><strong>Angular</strong></a> apps recently and Font Awesome has literally tired me out. So I decided to use <a href="http://ionicons.com/" rel="noopener"><strong>Ionicons</strong></a> off the popular Ionic framework.</p>
<p>This post shows how to set up <a href="http://ionicons.com/" rel="noopener"><strong>Ionicons</strong></a> on your Angular project. We will take the following steps:</p>
<ul>
<li>Install Angular CLI v6</li>
<li>Create a new Angular v6 app</li>
<li>Install Ionicons</li>
<li>Setup Ionicons for use on your Angular v6 app</li>
</ul>
<h4 id="install-angular-cli-v6">Install Angular CLI v6</h4>
<p>This is pretty simple — you just install the latest Angular version via npm.</p><pre><code>npm install -g @angular/cli@latest</code></pre>
<p>After that has been done, you then run a <code>ng --version</code> to check for the version of Angular you have installed. Make sure it is Angular CLI version of 6.0.0 and above, like below.</p>
<figcaption>Angular version check using ng — version</figcaption>
</figure>
<h4 id="create-a-new-angular-v6-app">Create a new Angular v6 app</h4>
<p>At this point, you have installed the Angular CLI globally on your PC. Now you get to create a new Angular app. We use the <code>ng new name-of-my-incredible-app</code> command, it allows us to create an Angular application.</p><pre><code>ng new my-ionicons-angular-app --style=scss</code></pre>
<p>The SCSS bit is there to allow us to use SCSS. This takes a bit. When it is done, we then navigate to the newly created app.</p><pre><code>cd my-ionicons-angular-app</code></pre>
<p>As soon as we are in the project directory, we can then start the development server.</p><pre><code>ng serve</code></pre>
<p>This returns the following:</p><pre><code>** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **</code></pre>
<p>Running the URL <a href="http://localhost:4200/" rel="noopener">http://localhost:4200/</a> shows you your brand new app. If you see the screen below. You are good to go.</p>
<figcaption>Default Angular Homepage</figcaption>
</figure>
<h4 id="install-ionicons">Install Ionicons</h4>
<p>Like we did earlier, we use npm again to install Ionicons.</p><pre><code>npm install ionicons</code></pre>
<h4 id="setup-ionicons-for-use-on-your-angular-v6-app">Setup Ionicons for use on your Angular v6 app</h4>
<p>As soon as it installs, we need to tell angular where and how to load it. Best way to do it is inside our styles.scss file and you do this by adding the following lines:</p><pre><code>$ionicons-font-path: "~ionicons/dist/fonts";@import "~ionicons/dist/scss/ionicons.scss";</code></pre>
<p>It should be set up correctly at this point. You can edit your homepage file — app.component.html and using the font icon to add a new icon there like this: <code>&lt;i class="icon ion-md-heart"&amp;g</code>t;&lt;/i&gt; . You can also have a <a href="https://ionicons.com/" rel="noopener"><strong>look at </strong></a>the Ionicons page for a list of icons there. Below is what my homepage looks like along with my app.component.html file.</p>
<figcaption>Angular 6 homepage with an Ionicon</figcaption>
</figure>
<h4 id="that-s-that-">That’s that!!</h4>
<p>Pretty easy. I hope you made it to the end. If you have any questions or you see something wrong or something that can be done better, please leave a comment below or you can message me on twitter <a href="https://twitter.com/TrussDamola" rel="noopener"><strong>@TrussDamola</strong></a><strong>.</strong></p>
<p>Cheers!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
