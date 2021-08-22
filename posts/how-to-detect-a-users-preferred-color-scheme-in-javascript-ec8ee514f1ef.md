---
card: "https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png"
tags: [CSS]
description: by Oskar Hane
author: "Milad E. Fahmy"
title: "How to detect a user’s preferred color scheme in JavaScript"
created: "2021-08-15T19:36:01+02:00"
modified: "2021-08-15T19:36:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-ux tag-neo4j tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to detect a user’s preferred color scheme in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QPIhIZte1bW0DKQoLoXwxw.png" alt="How to detect a user’s preferred color scheme in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Oskar Hane</p>
<h1 id="how-to-detect-a-user-s-preferred-color-scheme-in-javascript">How to detect a user’s preferred color scheme in JavaScript</h1>
<p>In recent versions of macOS (Mojave) and Windows 10, users have been able to enable a system level dark mode. This works well and is easy to detect for native applications.</p>
<p>Websites have been the odd apps where it’s up to the website publisher to decide what color scheme the users should use. Some websites do offer theme support. For the users to switch, they have to find the configuration for it and manually update the settings for each individual website.</p>
<p>Would it be possible to have this detection done automatically and have websites present a theme that respects the user’s preference?</p>
<figcaption>Light vs Dark theme in Neo4j Browser</figcaption>
</figure>
<h3 id="css-media-query-prefers-color-scheme-draft">CSS media query ‘<code>prefers-color-scheme'</code> draft</h3>
<p>There is a CSS media queries draft level 5 where <a href="https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme" rel="noopener">prefers-color-scheme</a> is specified. It is meant to detect if the user has requested the system to use a light or dark color theme.</p>
<p>This sounds like something we can work with! We need to stay up to date with any changes to the draft, though, as it might change at any time since it’s just a… draft. The <code>prefers-color-scheme</code> query can have three different values: <code>light</code>, <code>dark</code>, and <code>no-preference</code>.</p>
<h3 id="web-browser-support-as-of-march-2019">Web browser support as of March 2019</h3>
<p>The current browser support is <em>very</em> limited, and it’s not available in any of the stable releases of any vendor. We can only enjoy this in <a href="https://developer.apple.com/safari/technology-preview/" rel="noopener">Safari Technology Preview of version 12.1</a> and in <a href="https://www.mozilla.org/en-US/firefox/67.0a1/releasenotes/" rel="noopener">Firefox 67.0a1</a>. What’s great is that there are binaries that do support it, so we can work with it and try it out in web browsers. For current browser support, check out <a href="https://caniuse.com/#search=prefers-color-scheme" rel="noopener">https://caniuse.com/#search=prefers-color-scheme</a>.</p>
<h3 id="why-css-only-detection-isn-t-enough">Why CSS only detection isn’t enough</h3>
<p>The common approach I’ve seen so far is to use a CSS only approach and override CSS rules for certain classes when a media query is matched.<br>Something like this:</p><pre><code>/* global.css */</code></pre><pre><code>.themed {  display: block;  width: 10em;  height: 10em;  background: black;  color: white;}</code></pre><pre><code>@media (prefers-color-scheme: light) {  .themed {    background: white;    color: black;  }}</code></pre>
<p>As this works fine for many use cases, there are styling techniques that do not use CSS in a way like this. If <a href="https://www.styled-components.com" rel="noopener">styled-components</a> is used for theming, for example, then a JS object is replaced when the theme is changed.</p>
<p>Having access to the preferred scheme is also useful for analytics and more predictable CSS overrides as well as more fine-grained control over which elements should be themed and not.</p>
<h3 id="initial-js-approach">Initial JS approach</h3>
<p>I’ve learned in the past that you can do media query detection by setting the CSS <code>content</code> of an element to a value if a media query is matched. This is definitely a hack, but it works!</p>
<p>Something like this:</p>
<p>So when a user loads the CSS and the media query matches one of the above color schemes, the <code>content</code> property value of the <code>html</code> element is set to either ‘light’ or ‘dark’.</p>
<p>The question then is, how do we read the <code>content</code> value of the <code>html</code> element?</p>
<p>We can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle" rel="noopener">window.getComputedStyle</a>, like this:</p>
<p>And this works fine! This approach is fine for a <strong>one-time read</strong>, but it’s not reactive and automatically updates when the user changes their system color scheme. To be updated, a page reload is needed (or have the above read done at an interval).</p>
<h3 id="reactive-js-approach">Reactive JS approach</h3>
<p>How can we know when the user changes the system color scheme? Are there any events we can listen to?</p>
<p>Yes there are!</p>
<p>There is <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia" rel="noopener">window.matchMedia</a> available in <a href="https://caniuse.com/#feat=matchmedia" rel="noopener">modern web browsers</a>.</p>
<p>What’s great with <code>matchMedia</code> is that we can attach a listener to it that will be called anytime the match changes.</p>
<p>The listener will be called with an object containing the information if the media query started matching or if it stopped matching. With this info, we can skip the CSS altogether and just work with JS.</p>
<p>This approach works really well in the supported web browsers and just opts out if <code>window.matchMedia</code> isn't supported.</p>
<h3 id="react-hook">React hook</h3>
<p>Since we are using React in <a href="https://github.com/neo4j/neo4j-browser" rel="noopener">neo4j-browser</a>, I wrote this as a custom React hook to make it easy to re-use in all of our apps and fit into the React system.</p>
<p>It’s a bit more code than in the first short proof-of-concept. We have better error detection and we also remove the event listeners when the hook un-mounts.</p>
<p>In our use case, the users can choose to override the autodetected scheme with something else (we offer an outlined theme for example, often used when doing presentations).</p>
<p>And then use it like this in the application layer:</p>
<p>The last part depends on how theming is made in your application. In the example above, the theme data object is passed into a context provider that makes this object available throughout the whole React application.</p>
<h3 id="end-result">End result</h3>
<p>Here’s a gif with the end result, and as you can see, it’s instant.</p>
<h3 id="final-thoughts">Final thoughts</h3>
<p>This was a fun experiment made during a so-called “Lab Day” we have in the UX team at <a href="https://neo4j.com" rel="noopener">Neo4j</a>. The early stages of the spec and (therefore) the lack of browser support does not justify this to make it into any product yet. But support might come sooner than later.</p>
<p>And besides, we do ship some Electron-based products and there is an <code><a href="https://github.com/electron/electron/blob/master/docs/api/system-preferences.md#systempreferencesisdarkmode-macos" rel="noopener">electron.systemPreferences.isDarkMode()</a></code> available there...</p>
<h3 id="about-the-author">About the author</h3>
<p><a href="https://twitter.com/oskarhane" rel="noopener">Oskar Hane</a> is a team lead / senior engineer at <a href="https://neo4j.com" rel="noopener">Neo4j</a>.<br>He works on multiple of Neo4j:s end-user applications and code libraries and have authored two tech books.</p>
<p>Follow Oskar on twitter: <a href="https://twitter.com/oskarhane" rel="noopener">@oskarhane</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
