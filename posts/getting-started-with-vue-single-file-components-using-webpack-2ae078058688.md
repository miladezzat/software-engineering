---
card: "https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg"
tags: [JavaScript]
description: by Dushyant Sabharwal
author: "Milad E. Fahmy"
title: "How to get started with Vue single file components using Webpack"
created: "2021-08-15T19:44:49+02:00"
modified: "2021-08-15T19:44:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-vuejs tag-tech tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with Vue single file components using Webpack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tag8gBfSQ9I4dxLJOAg3QQ@2x.jpeg" alt="How to get started with Vue single file components using Webpack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Dushyant Sabharwal</p>
<h1 id="how-to-get-started-with-vue-single-file-components-using-webpack">How to get started with Vue single file components using Webpack</h1>
<figcaption>Picture from my trip to Iceland in May, 2018</figcaption>
</figure>
<p><em>This guide assumes that you have some idea about <code>vue</code>. It aims to save you time, trying to help you understand the <code>webpack</code> config for starting with <code>vue</code> and its single file components. You can use <code>vue-cli</code> for creating the project template but this is for people who want to dig in further.</em></p>
<p>You are probably a developer who knows the front-end. You have decided to take your app to the next level by adopting <code>vue</code> as the front-end framework. You jump into the documentation and start reading about how to develop components, all while drawing parallels in your head with use-cases for the first component in your project. The framework and documentation turns out to be awesome and you cannot wait to start using <code>vue</code>.</p>
<p>If this sounds familiar, then that’s great!</p>
<p>TL;DR you can clone or fork the repository <a href="https://github.com/dushyant89/vue-webpack" rel="noopener">here</a> and get started.</p>
<h3 id="let-s-get-started">Let’s get started</h3>
<p>Our goal is to write our first component, but <strong>not the way it’s done below</strong>. Though there is nothing wrong with loading the script file like this, it gets messier when you end up loading multiple script files this way.</p>
<p>We will be using <code><a href="https://webpack.js.org/configuration/devtool/" rel="noopener">webpack</a></code> for bundling our app. If you haven’t looked into <code>webpack</code>, then now is the time to configure your first app. It looks daunting at first, but the latest version (v4) is super easy and intuitive to use.</p>
<h3 id="installing-packages">Installing packages</h3>
<p>In order to get to that point, let’s install some basic packages which we’ll need. We will be using <code>npm</code> for managing the packages. If you are not confident using <code>npm</code>, don’t worry! Just follow along. Make sure you have installed <code>node</code> and <code>npm</code> on your machine.</p>
<p><strong>Note</strong>: If you have time on your hands, then <a href="https://hackernoon.com/things-which-every-developer-should-know-when-starting-with-modern-front-end-development-7030486bf092" rel="noopener">do read up</a> on how npm works and what it means for the security of your app.</p>
<p>Moving along…</p><pre><code>npm install vue</code></pre><pre><code>npm install webpack --save-dev</code></pre>
<p>Since we will be writing our code in <code>ES6</code> and above, we need something to transpile or transform our code. We will be using <code>babel</code> with <code>webpack</code> to help us come up with a version of code which will run in browsers which still do not support full spec of <code>ES6</code> .</p>
<p><a href="https://www.fullstackreact.com/articles/what-are-babel-plugins-and-presets/" rel="noopener">This</a> article gives a nice overview on babel, and will explain in more detail why we need the below packages.</p><pre><code>npm install babel-core --save-dev</code></pre><pre><code>npm install babel-loader --save-dev</code></pre><pre><code>npm install babel-preset-env --save-dev</code></pre><pre><code>npm install babel-preset-stage-2 --save-dev</code></pre>
<p>Your <code>package.json</code> should look something like the below. Your versions might be different when you install the below packages, which is fine as long as the app doesn’t break.</p>
<p>If you want to install the specific versions as you see above, then simply do</p><pre><code>npm install webpack-cli@^3.0.2 --save-dev</code></pre>
<p>Now that our basic toolset is setup, lets focus our attention on the idea of how are we gonna write the<code>template</code> or <code>html</code> part of our first component. Will it be in a separate <code>.html</code> file ? Or will it include an existing file like <code>index.html</code>? Or will it be in a <code>string</code> which is then further compiled using some library? I have been through this train of thought, as well.</p>
<p><code>Vue</code> solves this problem by providing a way to write components where you can associate the <code>template</code> part and the <code>script</code> part of the component in a single file. How awesome is that?</p>
<p>For example, if you are building a simple <code>table</code> component, then you can name the file as <code>table.vue</code> which has everything the component needs. What if I tell you that you can have <code>styles</code> also in the same <code>.vue</code>file which are specific to that component? I know! Sounds crazy!</p>
<p>Let’s install the below packages so we can have single file components, or <code>SFCs</code>:</p><pre><code>npm install vue-template-compiler --save-dev</code></pre><pre><code>npm install vue-loader --save-dev</code></pre><pre><code>npm install css-loader --save-dev</code></pre><pre><code>npm install vue-style-loader --save-dev</code></pre>
<p><code>vue-template-compiler</code> is for making sense of the <code>template</code> section of the component.</p>
<p><code>vue-loader</code> enables <code>webpack</code> to load single file components.</p>
<p><code>css-loader</code> and <code>vue-style-loader</code> allow us to author styles in the component.</p>
<p>Your <code>package.json</code> should look something like the below now:</p>
<h3 id="webpack">Webpack</h3>
<p>Now that we have every package we need in our arsenal, all we need is a way to instruct <code>webpack</code>. If you are trying to deal with<code>webpack</code> and how it works, it’s best to understand the intuition of why that tool exists in the first place. It doesn’t matter if we use <code>webpack</code> or not, we just need some tool which can do things like:</p>
<ul>
<li>Process entry points in our app for starting the process</li>
<li>Name the output/processed files and specify their location</li>
<li>Process different types of files like <code>.css</code> , <code>.js</code> or <code>.vue</code></li>
<li>Hot reloading the changed files in order to rebuild the whole thing</li>
</ul>
<p>Webpack does all these things (and much more) if you just specify what needs to be done via a config object.</p>
<p>We will be using <code>webpack-dev-server</code> for serving static and dynamic assets in our project, because why not.</p>
<h3 id="looking-at-the-code">Looking at the code</h3>
<p>Let’s clone or fork (if you want to improve) <a href="https://github.com/dushyant89/vue-webpack" rel="noopener">this project</a>.</p>
<p>You will see that the project has the same <code>package.json</code> as mentioned above. Let’s install and run the project based on the instructions in the repo.</p>
<p><code>index.html</code> has our first component called <code>main-content</code>:</p><pre><code>&lt;div id="mainContent"&gt;    &lt;main-content&gt;&lt;/main-content&gt;&lt;/div&gt;</code></pre>
<p>Our <code>main-content.vue</code>, which is a <code>SFC</code>, looks like the below. As you can see, it has three sections: <code>template</code> , <code>script</code> and <code>style</code> . Everything is tied to our component neatly and <code>webpack</code> takes care of the rest.</p>
<p>Head to <a href="http://localhost:8010/" rel="noopener">http://localhost:8010/</a> in your browser and you’ll notice our <code>main-content</code> component. Now change something in the component like below:</p><pre><code>&lt;template&gt;    &lt;div class="main-content"&gt;        &lt;h1&gt; This is my first modified component in Vue &lt;/h1&gt;        &lt;h3&gt; {{ webpack }} &lt;/h3&gt;    &lt;/div&gt;&lt;/template&gt;</code></pre>
<p>and notice how the heading changes in the browser. To understand how it works, have a look at <code>webpack.config.js</code>. Each section in the config has comments explaining why we need it.</p>
<p>Let’s divide the <code>webpack</code> config into three main parts.</p>
<h4 id="the-input-output-to-webpack"><strong>The input/output to Webpack</strong></h4>
<h4 id="processing-vue-single-file-components-and-other-js-modules"><strong>Processing Vue single file components and other JS modules</strong></h4>
<h4 id="configuring-the-webpack-dev-server"><strong>Configuring the Webpack dev server</strong></h4>
<p>Each of the options in the config are pretty self-explanatory, and you can tweak them to understand them better. For example, you can remove one of the properties and notice the error(s).</p>
<p><strong>Note</strong>: every time you change the config, you have to stop (cmd + C) and run <code>npm run start</code> for the changes to reflect.</p>
<p>You can add more options to the app by reading through the <a href="https://webpack.js.org/configuration/devtool/" rel="noopener">docs</a>, and feel free to fork the <a href="https://github.com/dushyant89/vue-webpack" rel="noopener">project</a> for improvements.</p>
<p>If you think this article helped you, then you can <a href="https://www.buymeacoffee.com/dushyant" rel="noopener">buy me a coffee</a> or just share with others. Cheers ?</p>
<p><a href="https://www.buymeacoffee.com/dushyant" rel="noopener"><strong>Buy Dushyant Sabharwal a Coffee - BuyMeACoffee.com</strong></a><br><a href="https://www.buymeacoffee.com/dushyant" rel="noopener"><em>I am a full stack developer who loves writing stuff which can help other developers save time</em>www.buymeacoffee.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
