---
card: "https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK"
tags: [React]
description: by Sarah Sweat
author: "Milad E. Fahmy"
title: "How to build a React development playground using Storybook"
created: "2021-08-15T19:35:26+02:00"
modified: "2021-08-15T19:35:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-portfolio tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a React development playground using Storybook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK 300w,
https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK 600w,
https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK 1000w,
https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*7GPOPeGqBSteTFBK" alt="How to build a React development playground using Storybook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sarah Sweat</p>
<h1 id="how-to-build-a-react-development-playground-using-storybook">How to build a React development playground using Storybook</h1>
<figcaption>Photo by <a href="https://unsplash.com/@goshua13?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Joshua Aragon</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Lately, I have been wanting to try new things and test out new technologies or patterns in my React components. I needed a place where I could test these things out without launching a new app every time.</p>
<p>I recently started using React storybook at work in order to establish a new design system for future projects. I also used it to prototype several versions of a new content authoring tool our team is working on. Putting this tool together with my desire to create components and play around with new things in a low stakes way seemed perfect. A few examples of these new “things” are React Context, SlateJs, and React Hooks.</p>
<p>This could also be used as a portfolio and a great way to showcase your work. Since Storybook can be deployed as its own app, you can host a webpage where you have a variety of projects and components you can display to potential employers or clients. Once deployed, it’s as easy as sending them a link to your storybook!</p>
<p>This post will focus on creating the Storybook for React environment and I will aim to post in the future about what I create inside of it!</p>
<h3 id="sooo-what-is-storybook">Sooo… What is Storybook?</h3>
<p>Taken straight from the Storybook website because I couldn’t say it better myself:</p>
<blockquote>“Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.<br><br>Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.”</blockquote>
<p>That means… I can create and display/interact with components independently of actually running the React app! And since this project won’t be focused on a single app’s performance or DRYness, I can have multiple prototypes and versions of components so that I can perfect them, allow stakeholders to approve, etc. before bringing them into the app for which they were intended for. I can also use it to just practice making components and testing how to use the new tech I mentioned before.</p>
<p>Let’s get building now!</p>
<h3 id="create-a-base-react-app">Create a base React app</h3><pre><code class="language-bash">npx create-react-app my-playground</code></pre>
<p>You can ensure that your app was created successfully by running <code>yarn start</code> . A new window should appear on your browser to <code>localhost:3000</code> that looks like the picture above. Once confirmed you can stop it by pressing ⌘ + C.</p>
<h3 id="add-storybook">Add Storybook</h3>
<p>First, from the command line within your project, you will need to add storybook with the following command:</p><pre><code class="language-bash">npx -p @storybook/cli sb init</code></pre>
<p>Then, you can run storybook by using:</p><pre><code class="language-bash">yarn storybook</code></pre>
<p>Now you should be up and running, seeing a screen in your browser like the one below:</p>
<figcaption>browser view of storybook</figcaption>
</figure>
<p>If you look within your project folder, you will notice that some files have been added and others updated:</p>
<p>The <code>./storybook</code> folder is home to where you will configure a lot of the settings for your storybook. There are all sorts of add-ons you can apply to your project to add more features. The <code>config.js</code> file is generally where you will apply add-ons and also tell storybook where to find your stories. The config defaults to the following:</p><pre><code class="language-js">import { configure } from '@storybook/react';
function loadStories() {
require('../src/stories');
}
configure(loadStories, module);</code></pre>
<p>This is telling storybook to look in the <code>../src/stories</code> folder for the stories you have written. Right now, storybook has gone ahead and added a few default stories for you. You can take a look at those to get an idea of how to write the stories. You are ultimately just rendering your components within their own functions and you can pass them whatever props you like.</p>
<p>As you can see in the example it gives you below, you can create multiple versions of the same component by just rendering it with different props.</p>
<p>You can imagine though, once you start creating more components, this file could get very large and you don’t want to have to spell out in your config every file with stories in it that you want rendered… Instead, a handy way to to do this is to name any file in your <code>src</code> folder with <code>stories.js</code> and to let storybook dynamically find all files named with <code>stories.js</code> at the end, within your <code>src</code> folder you would put the following in your config file:</p><pre><code class="language-js">import { configure } from '@storybook/react'
function loadStories() {
const req = require.context('../src', true, /\.stories\.js$/)
req.keys().forEach(filename =&gt; req(filename))
}
configure(loadStories, module)</code></pre>
<p>This allows for a much cleaner file structure and you can organize your stories by project or even by component within your src folder.</p>
<h3 id="build-your-mini-projects">Build Your Mini Projects</h3>
<p>Let’s build a small component as an example to show how you could spin up a quick example project to start learning React’s Context API. Within my <code>src</code> folder I am going to create a ContextProject folder where I am going to add a file where I will define my component, and then another where I will define the story:</p>
<p>Now when I check my Storybook, I will see that I have a menu option for my Context API Project and below that, I can click to see my Home component I created:</p>
<p>And now I can start building out my context and other components within this folder in <code>src</code>. I will be able to play around and render the components I build, allowing me to quickly see my changes and not have to worry about launching a new React app every time I want to just test out a specific feature or new idea.</p>
<p>This also allows for a lot of flexibility when trying to quickly prototype a new idea. You already have an environment up and running and can have your favorite libraries like styled components already installed or have pre-defined themes that can just be easily imported into new projects. You can also pre-define some baseline components such as styled headings, divs, buttons etc that you can share across projects to make development go even faster.</p>
<p>Hope this helps and stay tuned for future posts about my favorite add-ons and details on the test projects I build in my Storybook.</p>
<p>Happy Coding!</p>
<p>References:</p>
<p><a href="https://storybook.js.org/" rel="noopener"><strong>Storybook: UI component workshop for frontend developers</strong></a><br><a href="https://storybook.js.org/" rel="noopener"><em>Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes…</em></a><br><a href="https://storybook.js.org/" rel="noopener">storybook.js.org</a></p>
<p>My github Repo:</p>
<p><a href="https://github.com/sarahsweat/my-playground" rel="noopener"><strong>sarahsweat/my-playground</strong></a><br><a href="https://github.com/sarahsweat/my-playground" rel="noopener"><em>Contribute to sarahsweat/my-playground development by creating an account on GitHub.</em></a><br><a href="https://github.com/sarahsweat/my-playground" rel="noopener">github.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
