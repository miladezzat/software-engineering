---
card: "https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg"
tags: [JavaScript]
description: by Martin Olsansky (olso)
author: "Milad E. Fahmy"
title: "The world’s easiest introduction to WebAssembly?"
created: "2021-08-15T19:37:55+02:00"
modified: "2021-08-15T19:37:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-golang tag-tech tag-front-end-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The world’s easiest introduction to WebAssembly?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XLrgliUgUebeFCVrZ--o2g.jpeg" alt="The world’s easiest introduction to WebAssembly?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Martin Olsansky (olso)</p>
<h1 id="the-world-s-easiest-introduction-to-webassembly">The world’s easiest introduction to WebAssembly?</h1>
<h4 id="wasm-in-golang-for-javascript-developers-">WASM in Golang for JavaScript developers.</h4>
<figcaption>An interactive <em>&lt;canv</em>as&gt; laser game for cats ? on your phone ?written completely in Golang. Being inspected by Matsu ? </figcaption>
</figure>
<ul>
<li>Do you think that WebAssembly (WASM) is only used for image manipulation, hard math, or other niche use cases on the web?</li>
<li>Are you still confusing WASM with <code>Web Workers</code> and <code>Service Workers</code>?</li>
<li>Not interested because you think that JavaScript web apps being developed today will still need to be maintained for the next 10+ years?</li>
<li>Do you want to do frontend web development in non-JS languages?</li>
</ul>
<p><em>For the skimmers, here are the links to <a href="https://olso.space/go-wasm-cat-game-on-canvas/index.html" rel="noopener"><strong>demo</strong></a> or <strong>/<a href="https://github.com/olso/go-wasm-cat-game-on-canvas-with-docker" rel="noopener">src</a> </strong></em>?.<em> “<a href="http://www.perell.com/blog/coolest-things-2018#block-yui_3_17_2_1_1546345205921_226865" rel="noopener">Reading/writing is a transaction”,</a> I’ll try not to waste your time. There are g<code>ists </code>with explanatory comments in the code.</em></p>
<h3 id="storyline">Storyline ?</h3>
<p>Our goal is to create a simple game for cats ?: moving a red laser on mobile with some ? audio effects and vibrations. We will implement everything in Go<a href="https://golang.org" rel="noopener">lang (</a>Go), including DOM manipulation, logic, and state.</p>
<p><em>Aaaaaand since, cats cannot use a mouse, we’ll need touch interaction for those cat paws ?.</em></p>
<h4 id="intro-explained-">Intro explained!</h4>
<p>Think of WASM as the <a href="https://webassembly.org/docs/use-cases/" rel="noopener">Universal Virtual Machine</a> (sandbox), where you write ANY code once, and it runs everywhere.</p>
<p>WASM is a compile target, not a language. As if you were to compile for Windows, Mac OS, and Linux at once!</p>
<p>I don’t think that WASM is about dethroning JS, it’s about having alternatives without any sacrifices.</p>
<p>Imagine all the people that are developing in <em>Go, Swift, Rust, Ruby, C++, OCaml or others</em>. Now, they can use their preferred language to create an interactive, networked, fast, offline-capable websites and web apps.</p>
<p>Have you ever been part of a discussion about whether your project will be a mono-repo or a multi-repo?</p>
<p><strong>You’re now also going to have a discussion about whether your project is a mono-language or a multi-language.</strong></p>
<p>When people can work with the same tech stack, everything becomes easier. Especially communication between teams.</p>
<p>You can still use React, Vue but now you’re not forced to use JS anymore.</p>
<h4 id="how-is-wasm-different-from-the-service-and-web-workers">How is WASM different from the Service and Web Workers?</h4>
<p><code>Service &amp; Web Workers</code> allow you to run background, offline &amp; caching processes. They mimic threading, don’t have access to DOM and can’t share the data (only through messaging) and are running in a separate context. Heck, you could even run WASM instead of JS in them. To me, they only provide some abstraction layer with special privileges, nobody said that these layers have to execute JS.</p>
<blockquote><code><em>Service &amp; Web Workers</em></code> are a browser feature, they are not some exclusive JS feature.</blockquote>
<h3 id="setup-the-dev-env">Setup the dev env ?</h3>
<p>We’re going to use WASM, Go, JS and (optionally) Docker ?.</p>
<p>If you don’t know Go but know JS, <a href="https://nemethgergely.com/learning-go-as-a-nodejs-developer/" rel="noopener">learn Go</a> and then come back here. Let’s start by going to the <a href="https://github.com/golang/go/wiki/WebAssembly" rel="noopener">Go WASM wiki</a>.</p>
<p>Use your local <code>go</code>, I’m using <code>golang:1.12-rc</code> Docker image. Just set two WASM flags for the <code>go</code> compiler here. Create a simple <a href="https://gobyexample.com/hello-world" rel="noopener">hello world</a> within <code>main.go</code> to test it.</p><pre><code>$ GOOS=js GOARCH=wasm go build -o game.wasm main.go</code></pre>
<p>Now, grab the <code><a href="https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js" rel="noopener">wasm_exec.js</a></code> glue provided by the Go team. This <code>Go</code> global abstracts WASM initiation. We don’t have to craft any DOM abstraction from scratch ?. Finally, f<code>etch </code>the .<code>wasm </code>file and run our game.</p>
<p>All in all, it should look like this:</p>
<h3 id="show-me-the-go-code-already-">Show me the Go code already!</h3>
<p>To render our simple game, <code>&lt;canv</code>as&gt; should be sufficient. We can create the DOM structure and elements right from the Go code!<code><a href="https://github.com/golang/go/tree/master/src/syscall/js" rel="noopener"> That sysc</a></code>all/js (included as a standard Go package) handle<code>s t</code>he DOM interaction for us.</p>
<h4 id="main-">main()</h4>
<p>I bet you haven’t seen <code>main()</code> in a long time ?.</p>
<p>Looks pretty similar to JS, doesn’t it?</p>
<p>Yes, that’s all you need to interact with the <code>DOM</code>! Just a few <code>Get</code> and <code>Call</code> functions for now.</p>
<figcaption>Oh mama ? It’s there! </figcaption>
</figure>
<p>At this point, I was asking myself. I’m still kind of writing JS in some way… how is this an upgrade? Because we don’t have direct access to the DOM yet, we have to resort to calling the DOM (via JS) in order to do anything. Imagine how you could abstract this away with let’s say, JSX/React. <em>Actually, you already can, but let’s leave that for my next article </em>?.<em></em></p>
<h4 id="-rendering-and-the-event-handling">“Rendering” and the event handling</h4>
<p>Directly using the <code>syscall/js</code> lib reveals some ES5-like callbacks. We are able to listen for the DOM events. Looks very clean with those static types!</p>
<h4 id="logging-audio-and-async-">Logging, Audio and “async”</h4>
<p>In Go, there is a convention to write all the <code>func</code> in a sync way. It’s up to the caller to decide whether <code>func</code> is async. Making a <code>func</code> run asynchronously is really easy. Just prefix it with <code>go</code> and there you go! It creates a thread with its own context. You can still bind the parent context to it, don’t worry.</p>
<h4 id="running-our-game-forever-">Running our game forever! ♾</h4>
<p>That code creates an unbuffered channel, and attempts to receive from it. And since no-one ever sends anything on it, it’s essentially a blocking forever operation, allowing us to run our program forever.</p>
<h4 id="updating-the-game-state-and-moving-the-red-laser">Updating the game state and moving the red laser</h4>
<p>No state management to see here, just a simple typed <code>struct</code>, that doesn’t allow you to pass any incorrect values inside.</p>
<h3 id="conclusion">Conclusion</h3>
<p>The fact that WASM is still considered an <a href="https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/" rel="noopener">MVP</a> (MAP) and that you can create a game like this, without writing a single line of JS, is amazing! <a href="https://caniuse.com/#feat=wasm" rel="noopener">CanIUse</a> is already fully green, there is nothing stopping you from building WASM powered websites and apps.</p>
<p>Look, you can combine all the languages you want, event JS -&gt; WASM. In the end, they’ll all compile down to the WASM bytecode. If you need to share anything between them, you can, because they can share a raw memory.</p>
<p>What I’m afraid of is, in recent news, we learned that <a href="https://news.ycombinator.com/item?id=18595069" rel="noopener">Microsoft is building a Chromium browser</a> and <a href="https://news.ycombinator.com/item?id=18595025" rel="noopener">Firefox market share is below 9%</a>. This gives Google a kill switch power over WASM. If they don’t go with it, masses may never know.</p>
<figcaption>Gameplay ? </figcaption>
</figure>
<h4 id="who-is-using-wasm-already">Who is using WASM already?</h4>
<p>Agreed, my example just draws a full-page <code>canvas</code> . Here are more advanced examples that focus on the semantic web <a href="https://github.com/mbasso/awesome-wasm#web-frameworks-libraries" rel="noopener">awesome-wasm#web-frameworks-libraries</a>.</p>
<p>Quite a few projects have jumped on the WASM train already. Some of the more interesting to me are Spotify, Twitch, <a href="https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/" rel="noopener">Figma</a> &amp; <a href="https://github.com/ewasm" rel="noopener">EWASM</a>.</p>
<h4 id="wasm-in-the-web3-era">WASM in the Web3 era</h4>
<p>Nowadays, if you want to use some Ethereum wallet on the mobile web, you have to download a mobile wallet like Status.im from some centralized App Store and trust all the parties.</p>
<p>How about a Progressive Web App that would run <code>geth</code> (Go Ethereum client) with light sync over WebRTC? It could use <code>Service Worker</code> to update its WASM code and run in it the background, could be hosted on IPFS/Dat.</p>
<h3 id="useful-wasm-articles-resources-goodies">Useful WASM articles, resources &amp; goodies ?</h3>
<ul>
<li><a href="https://words.steveklabnik.com/webassembly-is-more-than-just-the-web" rel="noopener">WebAssembly is more than the web</a></li>
<li><a href="https://www.brianketelsen.com/web-assembly-and-go-a-look-to-the-future/" rel="noopener">WebAssembly and Go: A look at the future</a> and the <a href="https://news.ycombinator.com/item?id=17381816" rel="noopener">HN comments</a></li>
<li>posts by <a href="https://hacks.mozilla.org/category/webassembly" rel="noopener">Mozilla Hacks</a> &amp; <a href="https://hn.algolia.com/?query=wasm&amp;sort=byDate&amp;prefix&amp;page=0&amp;dateRange=all&amp;type=story" rel="noopener">Hacker News</a></li>
<li><a href="https://docs.google.com/document/d/131vjr4DH6JFnb-blm_uRdaC0_Nv3OUwjEY5qVCxCup4/edit" rel="noopener">WebAssembly architecture for Go</a></li>
</ul>
<p><a href="https://github.com/mbasso/awesome-wasm" rel="noopener"><strong>awesome-wasm</strong></a>,<strong> </strong><a href="https://github.com/appcypher/awesome-wasm-langs" rel="noopener">awesome-wasm-langs</a>, <a href="https://github.com/stdiopt/gowasm-experiments" rel="noopener">gowasm-experiments</a>, <a href="https://twitter.com/wasmweekly" rel="noopener"><strong>WasmWeekly</strong></a>,<strong> </strong><a href="http://www.wasmrocks.com/" rel="noopener">WasmRocks</a>, <a href="https://github.com/mbasso/asm-dom#examples" rel="noopener">SPA with C++</a>, <a href="https://github.com/dennwc/dom" rel="noopener">better DOM bindings for Go</a></p>
<p>Thanks to <a href="https://github.com/twifkak" rel="noopener">https://github.com/twifkak</a> for optimizing Go on the Chrome for Android!</p>
<h3 id="next-article-">Next article? ✍️</h3>
<p>We will take a look at interoperability with JS modules &amp; React. Stay tuned!</p>
<p><em>If you liked it and would like to see more content, don’t forget to follow and keep pressing that clap button </em>?.</p>
<h3 id="about-me-">About me ⚡️</h3>
<p>Hi, I’m <strong>Martin Olsansky</strong> <em>(olso)</em>.<strong> </strong>If you have any questions/suggestions, feel free to contact me at <a href="https://olso.space" rel="noopener"><strong>https://olso.space</strong></a> or @<a href="https://twitter.com/olso_uznebolo" rel="noopener">olso_uznebolo</a></p>
<p>I’m also interested in <a href="http://sphere.diybio.org" rel="noopener">DIYBio</a>, <a href="https://terra0.org/" rel="noopener">Tech-augmented ecosystems/plants</a>, <a href="https://events.ccc.de/congress/2018/wiki/index.php/Session:Digital_Health_and_Patient_Data" rel="noopener">Open Patient Data &amp; Digital Health</a>, Cryptocurrencies, Web3, P2P.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
