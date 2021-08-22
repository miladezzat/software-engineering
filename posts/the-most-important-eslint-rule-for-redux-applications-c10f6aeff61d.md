---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg"
tags: [JavaScript]
description: by Paul Matthew Jaworski
author: "Milad E. Fahmy"
title: "The Most Important ESLint Rule for Redux Applications"
created: "2021-08-15T19:54:13+02:00"
modified: "2021-08-15T19:54:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-redux tag-eslint tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">The Most Important ESLint Rule for Redux Applications</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb751740569d1a4cae3b5.jpg" alt="The Most Important ESLint Rule for Redux Applications">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Paul Matthew Jaworski</p>
<p><strong>tl;dr </strong>Run <code>yarn add --dev eslint-plugin-import</code> and add <code>"import/named": 2</code> to your <code>.eslintrc</code> rules to prevent accidentally importing constants that don’t exist to your reducers.</p>
<p>If you’re developing an application using <a href="https://facebook.github.io/react/" rel="noopener">React</a> and <a href="http://redux.js.org/" rel="noopener">Redux</a>, your reducers probably look something like this:</p>
<p>This example is pretty straight-forward. You’re only importing one constant up top.</p>
<p>Your file structure currently looks like this:</p><pre><code>.├── actions|   ├── constants.js|   └── index.js...omitted for brevity...├── reducers|   ├── accountReducer.js|   └── index.js...omitted for brevity...├── indes.js└── index.html</code></pre>
<p>But as your codebase grows, your reducers will become more complicated. Organizing your files by type may no longer makes sense. So you decide to start organizing things by feature or route instead:</p><pre><code>.├── actions|   ├── constants.js|   └── index.js...omitted for brevity...├── reducers|   └── index.js├── routes|   ├── accounts|   |   ├── components|   |   ├── containers|   |   ├── module|   |   |   ├── actions.js|   |   |   ├── constants.js|   |   |   └── index.js (exports our reducer)|   |   ├── styles|   |   └── index.js|   └── index.js...omitted for brevity...├── indes.js└── index.html</code></pre>
<p>Awesome! Now you don’t have 100 components in our main components folder anymore. Things are a bit neater, and easier to reason about.</p>
<p>There’s a problem with your refactor, though. Suddenly this <code>import</code> in your reducer is now referring to a non-existent path:</p><pre><code>import { RECEIVE_ACCOUNT_SUCCESS } from '../actions/constants';</code></pre>
<p>You get an error about that path being unresolved immediately, so you change it:</p><pre><code>import { RECEIVE_ACCOUNT_SUCCESS } from './constants';</code></pre>
<p>Cool. But what if you didn’t actually define that constant in your new file?</p>
<p>Now you’re about to experience one of the most frustrating bugs possible in a Redux app — importing an undefined constant into a reducer. Your tests will break, your app will break, and you’ll bash your head into your desk until you figure it out.</p>
<p>The problem is that this type of bug just fails silently. ES6 imports don’t care whether or not the variable you’re importing is defined. You’ll never see an error about it.</p>
<h3 id="eslint-to-the-rescue-"><strong>ESLint to the Rescue!</strong></h3>
<p>The key to avoiding this type of bug is to installing <code>eslint-plugin-import</code>, then set one simple little rule in your <code>.eslintrc</code>:</p><pre><code>"import/named": 2</code></pre>
<p>That’s it! Now you’ll get an error anytime you try to import an undefined constant into one of your reducers.</p>
<p>Edit: Unless you’re extending a base config that already includes it, you’ll also need to add <code>"import"</code> to the plugins section of your <code>.eslintrc</code>. Thanks to <a href="/news/the-most-important-eslint-rule-for-redux-applications-c10f6aeff61d/undefined" rel="noopener">Dave Mac</a> for pointing that out!</p>
<p>Happy coding!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
