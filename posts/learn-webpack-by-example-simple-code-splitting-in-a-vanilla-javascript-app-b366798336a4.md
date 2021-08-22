---
card: "https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg"
tags: [JavaScript]
description: by Kalalau Cantrell
author: "Milad E. Fahmy"
title: "Learn Webpack by example: simple code-splitting in a vanilla JavaScript app"
created: "2021-08-15T19:42:06+02:00"
modified: "2021-08-15T19:42:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-tech tag-programming tag-ux ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Webpack by example: simple code-splitting in a vanilla JavaScript app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*omrsDb09E3ZcHc9lQmTCJw.jpeg" alt="Learn Webpack by example: simple code-splitting in a vanilla JavaScript app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kalalau Cantrell</p>
<h1 id="learn-webpack-by-example-simple-code-splitting-in-a-vanilla-javascript-app">Learn Webpack by example: simple code-splitting in a vanilla JavaScript app</h1>
<h4 id="using-webpack-4-and-dynamic-imports">Using webpack 4 and dynamic imports</h4>
<figcaption>A tasty split</figcaption>
</figure>
<p>This article is part of an episodic guide for learning Webpack through various examples. If you need a refresher on what <strong>loaders</strong> and <strong>plugins</strong> are as far as Webpack goes, or what a basic <code>webpack.config.js</code> file looks like, check out <a href="https://medium.freecodecamp.org/learn-webpack-by-example-blurred-placeholder-images-4ad8b1751709" rel="noopener">this article</a> I wrote that focuses on those basics.</p>
<p>If you are like I was, you have heard the term code-splitting before and have <a href="https://webpack.js.org/guides/code-splitting/" rel="noopener">read some</a> about it. But perhaps you kept running into posts about how to do it with this or that framework, rather than explanations of what is it for, and a basic example showing that purpose.</p>
<p>Although I highly value frameworks and the speed and structure they bring to coding, especially within teams, I also value understanding programming concepts as deeply as is practically possible.</p>
<p>This often means that if I’m trying to learn a new concept, I will try to decompose that concept into smaller sub-concepts and then study each in isolation before integrating them all together.</p>
<p>To use a non-programming example, if wanted to learn how to longboard, I’d want to focus heavily on just keeping my balance while standing on the longboard before I worry about going fast, doing tricks, or customizing my longboard setup.</p>
<p>So, to learn about code-splitting, I decided that I wanted to make as small and easy of an app as possible, which for me meant no frameworks and nothing fancy.</p>
<h3 id="app-overview">App overview</h3>
<p>I want to share the little app that I made to help me explore code-splitting with Webpack. My hope is that it may help you better understand the topic as well. All we’re going to do is make the single page app depicted in the below gif.</p>
<figcaption>A tasty route</figcaption>
</figure>
<p>If you want to follow along in your code editor, check out the code in the <code>code-split</code> branch of <a href="https://github.com/klcantrell/webpack-through-example-blog" rel="noopener">this repo</a>. Once you install the packages, <code>npm start</code> will run a development server for you if you want to see the code-splitting in action.</p>
<p>Our app has two routes — a <strong>home</strong> route, which the user starts off on, and a <strong>tasty</strong> route. The view for the <strong>home</strong> route is very basic — just a header and a link to the <strong>tasty</strong> route.</p>
<p>The view for the <strong>tasty</strong> route, however, has much more going on. It features a delightful donut animation made with SVG and all the markup and CSS that goes along with that kind of thing. That is a lot of code compared to our <strong>home</strong> route. P.S. thanks <a href="https://codepen.io/benvisser/" rel="noopener">Ben Visser</a> for creating the animation.</p>
<p>Does it make sense to have the user download <em>all</em> the code for this app right away, including the code for the <strong>tasty </strong>route and its animation? Only if you were interested in causing slow initial load times and frustration, not to mention fear of missing out on what could have happened if the user stuck around for your app to load ;). So, let’s figure out how to code-split this thing.</p>
<p>First, however, is a high-level overview of the code behind the app. The app is written in vanilla JS. I only used one external library, <code><a href="https://www.npmjs.com/package/navigo" rel="noopener">navigo</a></code>, to handle our client-side routing. Let’s look at the <code>index.js</code> file:</p>
<p>And here’s what the <code>App</code> module does:</p>
<p>And here’s an example of a UI component, our <code>Home</code> component:</p>
<h3 id="no-code-splitting">No code-splitting</h3>
<p>Without code-splitting, you would be sending your user one big bundle of code when they initially load your app. Let’s establish a baseline by looking at the size of our bundle here with no code-splitting.</p>
<p>You can see in the image below that the size of our bundle is <strong>22.8K</strong>. Although that’s not very big compared to real apps in the world, let’s pretend it is for the sake of learning.</p>
<h3 id="code-splitting-with-dynamic-imports">Code-splitting with dynamic imports</h3>
<p>Now let’s bring in the code-splitting! Remember, what we want to do is keep the user from having to download the code needed to render the <strong>tasty</strong> route until it is needed.</p>
<p>To accomplish this, we our going to use a feature that is coming to JavaScript called <strong>dynamic imports</strong>. Even though the feature hasn’t landed in the ECMAScript spec yet, Webpack and Babel allow us to use it now.</p>
<p>A dynamic import allows us to asynchronously fetch a module. It returns a promise. Within the promise callback, we can specify what to do with the module once it’s loaded. The syntax for a dynamic import looks like this:</p><pre><code>import('./path/to/module')</code></pre>
<p>When Webpack sees a dynamic import like this, it does not bundle up the imported module into the current bundle. Instead, it splits the bundle into two smaller chunks.</p>
<p>The current chunk may be synchronously loaded (like our initial page load), but the module that is imported by our dynamic import is asynchronously loaded. In our case, the module for the <strong>tasty</strong> route is loaded when the user vists that route.</p>
<p>In order to access the dynamic import feature, we’ll need to <code>npm install</code> a few Babel packages into our build process: <code>babel-core</code>, <code>babel-loader</code> and <code>babel-plugin-syntax-dynamic-import</code> are definitely needed.</p>
<p>Depending on the browser you’re using, you may not need <code>babel-preset-env</code> (i.e. the current version of Chrome supports all the other JavaScript syntax we’re using) but let’s get it anyway just for good measure.</p>
<p>Then, we configure Webpack for Babel:</p>
<p>So finally, we can write our dynamic import:</p>
<p>Here’s what this code says to do: when the <strong>tasty</strong> route is triggered, first fetch the <code>Tasty</code> component. Then, once it finishes loading, render it to the page.</p>
<p>Let’s see what this does for us. In the image below, you can see that the initial page load now downloads a bundle that’s <strong>10.8K</strong> instead of <strong>22.8K</strong> — much better! Then, when the user clicks to go to the <strong>tasty</strong> route, another bundle chunk of <strong>13.6K</strong> is downloaded.</p>
<p>Webpack automatically names these chunks — if you want control over that, check out <a href="https://webpack.js.org/api/module-methods/#import-" rel="noopener">this section</a> of the webpack docs.</p>
<h3 id="ux-improvements">UX improvements</h3>
<p>It’s great that we’ve saved the user from having to wait extra time for the page to initially load. But, can you guess what would happen if the user was on a super slow connection and tried to load the <strong>tasty</strong> route?</p>
<p>With the way we currently have things setup, the page would just hang there until the <code>Tasty</code> module fully loaded. These few moments of hanging might leave the user wondering if our app was even working.</p>
<p>Let’s improve this experience by giving the user some signal that our app is doing something while they wait:</p>
<p>Now, our app will show a loading spinner while the <code>Tasty</code> component loads. While this may increase the size of our initial bundle some, it gives the user an indication that something is going on while they wait.</p>
<p>This trade off exchanges some performance for a better user experience — finding that balance is what it’s all about!</p>
<h3 id="conclusion-and-further-reading">Conclusion and further reading</h3>
<p>I hope this example served as a simple portrayal of the benefit of code-splitting as well as how to use a tool like Webpack to help you do it.</p>
<p>I also hope it showed that code-splitting is not a technique that’s useful just for certain frameworks. In fact, vanilla JS apps can make use of code-splitting, and even apps that are mostly server-rendered but have interactive widgets embedded here and there can make use of the technique.</p>
<p>If you want to dive deeper into some granular code-splitting that webpack lets you do, look into the <code><a href="https://webpack.js.org/plugins/split-chunks-plugin/" rel="noopener">optimization.splitChunks</a></code> plugin that comes with webpack 4.</p>
<p><strong>Please clap if this helped you learn something, comment below with any questions, and feel free to say hi to <a href="https://twitter.com/kalalaucantrell" rel="noopener">me</a> on Twitter.</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
