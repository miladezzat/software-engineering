---
card: "https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png"
tags: [JavaScript]
description: Popular guides like YouMightNotNeedJQuery.com and You Don’t N
author: "Milad E. Fahmy"
title: "You might not need to transpile your JavaScript"
created: "2021-08-15T19:52:08+02:00"
modified: "2021-08-15T19:52:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ecmascript-6 tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">You might not need to transpile your JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dzbgLnjV6aUOoLKdJwsOBQ.png" alt="You might not need to transpile your JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Popular guides like <a href="http://youmightnotneedjquery.com/" rel="noopener">YouMightNotNeedJQuery.com</a> and <a href="https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore" rel="noopener">You Don’t Need Lodash/Underscore</a> have challenged common industry practices.</p>
<p>This post is not as wild as, say, <a href="http://youmightnotneedjs.com/" rel="noopener">YouMightNotNeedJS.com</a>, but it does elaborate on transpilation, and explains why it may not be as necessary in the near future.</p>
<p><a href="http://gs.statcounter.com/" rel="noopener">StatCounter</a> gathers data about 15+ billion page views every month from 2.5 million websites <a href="http://gs.statcounter.com/sample-size/StatCounterGlobalStatsSep15_SampleSizeCountryBreakdown.csv" rel="noopener">around the globe</a>. As of May 2017, this is the status quo:</p>
<figcaption>Browser market share as of May 2017 in %</figcaption>
</figure>
<p>The thing that makes this diagram interesting is that the top 3 browsers (Chrome, Safari and FireFox) are <a href="https://www.techopedia.com/definition/31094/evergreen-browser" rel="noopener">evergreen</a>,<em> </em>which means 74% of users get the latest version of their browser automatically.</p>
<p>Let’s see whether this assumption is correct.</p>
<p>Here are the top browser versions in the market:</p>
<figcaption>Browser version distributions according to <a href="http://gs.statcounter.com/browser-version-market-share/desktop-mobile-tablet/worldwide/#monthly-201705-201705-bar" rel="noopener" target="_blank" title="">StatCounter</a></figcaption>
</figure>
<p>Chrome 58 <a href="https://www.chromium.org/developers/calendar" rel="noopener">was released</a> less than a month ago and its desktop version holds 12.77% of the global browser market share. Chrome 57 was release just 42 days before that and its desktop version holds 9.96% of the global browser market. Unfortunately StatCounter doesn’t differentiate between chrome versions on mobile platforms but assuming the same ratio as desktop we end up with:</p>
<figcaption>All versions of chrome in the market (to</figcaption>
</figure>
<h3 id="what-does-it-mean-for-my-code">What does it mean for my code?</h3>
<p>According to <a href="http://kangax.github.io/compat-table/es6/" rel="noopener">ES Compatibility Table</a> the latest version of all major browsers have a very good support for ES6 features:</p>
<figcaption>All major browsers have a very good ES6 support</figcaption>
</figure>
<p>In other words if you’re transpiling your JavaScript to ES5, you’re making your code unnecessarily big and slow to support a minority of the users who will probably upgrade their system by the time you manage to configure your Webpack and Babel! ?</p>
<h3 id="why-would-you-still-transpile">Why would you still transpile?</h3>
<p>You may still want to transpile your code but hopefully after weighing cons and pros or possible alternatives:</p>
<ul>
<li>You’re using React JSX (which is pretty popular at the moment so I’m assuming lots of developers fit into this category). JSX at its core is a <strong>transformation</strong> of XHTML to JS code and doesn’t necessary need a full transpiler like Babel. Besides, if all you need is <a href="https://github.com/Matt-Esch/virtual-dom" rel="noopener">VirtualDom</a>, use that instead.</li>
<li>You want to try the latest features of the language. Unless you’re part of TC39 or have a burning desire for injecting unstable language features into your production code, you’re probably fine with ES6. Nowadays we have a decent language is the majority of the browsers and the need to transpile are fading away.</li>
<li>You’re using TypeScript and hopefully <a href="https://medium.freecodecamp.com/when-should-i-use-typescript-311cb5fe801b" rel="noopener">weighed the cons and pros</a>. TypeScript compiler, when targetting a modern version of ES6 mostly strips out the type information rather than transforming syntax.</li>
<li>You wanna reduce code size using <a href="http://www.engineyard.com/blog/tree-shaking" rel="noopener">tree shaking</a> (here’s is how to do it <a href="https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b" rel="noopener">in webpack</a> and <a href="https://rollupjs.org/#tree-shaking" rel="noopener">rollup</a>). You want to obfuscate your code or reduce its size by minification. You want to conditionally exclude part of the code. This requires static code analysis. You can use a smart bundler for size-sensitive production services like Mobile devices, but we’re gonna see more careful cost assessments when creating such alternative deployments. <em>These sorts of static code analysis will continue to be useful as “advanced optimization techniques” for production code.<strong> </strong></em>You don’t <strong>have to</strong> minify your files. UglifyJS can’t minify ES6 at the moment (though a harmoney branch exists) but <a href="https://github.com/babel/babili" rel="noopener">Babili</a> can deal with it. The compression algorithms do a pretty decent job (<a href="https://webmasters.stackexchange.com/questions/31750/what-is-recommended-minimum-object-size-for-gzip-performance-benefits" rel="noopener">not when the files are too little</a>) and unless you’re shipping an operating system in every page load, it should do fine without compression. These days images and multimedia content take much more bandwidth than the code.</li>
<li>You want the elephant in the room:</li>
</ul>
<p>NPM is <a href="https://www.linux.com/news/event/Nodejs/2016/state-union-npm" rel="noopener">the largest</a> package manager on the planet. Most non-trivial web applications use some code from NPM and that implies using a module bundler. That is soon gonna change! Chrome already supports ES6 modules in <a href="https://www.chromestatus.com/feature/5365692190687232" rel="noopener">Canary</a> (Chrome 60 will officially ship this feature this August) and Safari is <a href="https://bugs.webkit.org/show_bug.cgi?id=147340" rel="noopener">close to ship it</a> too while Firefox and Edge are working on it.</p>
<p>Besides <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noopener">HTTP/2</a> allows voluntarily pushing resources to the browser. That means if <strong>a.js</strong> is importing <strong>b.js </strong>and <strong>c.js</strong>, the server can push <strong>b.js</strong> and <strong>c.js</strong> every time <strong>a.js</strong> is fetched which minimizes the time between requests. This is of course a simplified view because in practice browser might already have <strong>b.js</strong> and <strong>c.js</strong> in its cache. HTTP/2 is <a href="http://caniuse.com/#search=http2" rel="noopener">supported in the majority of browsers</a>.</p>
<h3 id="the-future-without-transpilation">The future without Transpilation</h3>
<p>Considering the statistics above, this means 2018 will be the year the majority of the web apps can get rid of the module bundlers or transpilers.</p>
<p>Transpilation is a workaround. We might have done it for too long that we got used to it, but think about it. We are “compiling” an “interpreted” language to an “interpreted” language! Besides:</p>
<ul>
<li>Configuring Webpack/Browserify is an unnecessary tax in many cases</li>
<li>Debugging using sourcemaps is always harder than debugging the actual script being run (anyone had fun trying to debug <code>this</code> or variables when sourcemaps don’t work properly?)</li>
<li>It kills the DX when you have to wait a few seconds (sometimes half a minute) after each edit to see the latest code. Hot Module Reloading (HMR) is an answer to that but it’s not always smooth and quick to configure. Without transpilation, all you have to do is to refresh the page and in less than a second your latest page is there!</li>
</ul>
<p>This August when ES6 modules are shipped, some types of applications will not use transpilation at all:</p>
<ul>
<li>Chrome Extensions</li>
<li>Electron desktop applications</li>
<li>B2B web apps that are made to be run by business users who already have good gears provided by the company</li>
</ul>
<p>When transpilation becomes a thing of the past, <a href="https://mithril.js.org/hyperscript.html" rel="noopener">libraries with Hyperscript syntax</a> will bring the ideas of React to <em>POJS</em> (Plain Old JavaScript that is not transpiled and easily debuggable on the console).</p>
<h3 id="don-t-transpile-but-compile-for-real-">Don’t transpile, but compile for real!</h3>
<p><a href="http://webassembly.org/" rel="noopener">WASM</a> is the new kid in town and it’s the official compilation target that promises <a href="https://www.youtube.com/watch?v=HktWin_LPf4" rel="noopener">faster execution speed and smaller code size</a>. <a href="http://caniuse.com/#feat=wasm" rel="noopener">Currently</a> Chrome and Firefox support WASM but there’s a good consensus among the big browser vendors that WASM is going to be the common run-time of the future. If you got Chrome, you can <a href="http://webassembly.org/demo/" rel="noopener">give it a try</a>.</p>
<p>If you’re the kind of developer who itches for something new, take a look at <a href="https://doc.rust-lang.org/book/" rel="noopener">Rust</a>. It <a href="https://hackernoon.com/compiling-rust-to-webassembly-guide-411066a69fde" rel="noopener">compiles to WASM</a> but isn’t limited to web. People actually use it to write <a href="https://github.com/redox-os/redox" rel="noopener">operating system</a> or <a href="https://github.com/servo/servo" rel="noopener">browser engine</a>. Besides old time C/C++ developers <a href="https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust" rel="noopener">approve and like it</a> and it has a very welcoming community.</p>
<h3 id="a-few-notes">A few notes</h3>
<ul>
<li>According to former Mozilla CTO <a href="https://andreasgal.com/2017/05/25/chrome-won/" rel="noopener">Chrome won</a> and it’s unlikely that there’s going to be another browser war. The interesting thing is that <strong>Chrome won it with meritocracy</strong>. It’s open source and Google has clearly defined <a href="https://www.google.com/chrome/browser/privacy/whitepaper.html" rel="noopener">what information it is gathering</a> from the users. Chrome wins <a href="https://tech.slashdot.org/story/17/05/28/0243212/even-for-businesses-chrome-is-the-top-browser" rel="noopener">even the business users</a> which traditionally use Windows. Nevertheless, while the end users choose Chrome because of its speed, security and simplicity, programmers love its developer tools. Google have an active role in the TC39 which drives the future of JavaScript and in general is the strongest proponent of the web platform even though it may compete with its own mobile OS. Not only that, but Google also helps its competitors. Google has been one of the biggest financial supporters of Mozilla and its <a href="https://www.chromium.org/blink" rel="noopener">rendering engine</a> is used by Opera.</li>
<li><a href="https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust" rel="noopener">Microsoft officially </a>dropped support for IE about 17 months ago. IE 11 will continue to receive security updates until 2025, but it’s up to you to decide on spending <a href="http://kangax.github.io/compat-table/es6/#ie11" rel="noopener">significant resources</a> to support a browser that only 3.24% of the market uses. Also keep in mind that Edge is the default browser in Windows 10. If anyone doesn’t want to upgrade their Windows to the latest version, the recent <a href="https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/" rel="noopener">WannaCrypt attack</a> probably gives them a reason to reconsider! I’m personally interested to any market research on the revenue coming from this particular customer segment.</li>
<li>Apple put <a href="https://www.howtogeek.com/184283/why-third-party-browsers-will-always-be-inferior-to-safari-on-iphone-and-ipad/" rel="noopener">a set of unfair restrictions</a> to keep the other browser vendors out of their iOS platform. So for example Chrome on iOS is technically limited to parts of Safari engine! Safari <a href="https://www.safari-is-the-new-ie.com/" rel="noopener">used to be the new IE</a>, until back in 2016 they did a good job and became the browser with the best ES6 support:</li>
</ul>
<figcaption>Released 16 months ago, Safari 10 brought a good level of ES6 support to iOS platforms</figcaption>
</figure>
<p>Overall the global share of iOS/Safari is less than Android/Chrome. It varies by country, for example in richer countries iOS has a bit higher penetration while in the developing world Android is the absolute winner but globally here are the stats:</p>
<figcaption>Global browser share for Android and iOS</figcaption>
</figure>
<h3 id="call-to-action-">Call to Action!</h3>
<p>If you’re old enough, you probably may remember the annoying days when some websites forced (or politely suggested) their browser of choice (mostly IE):</p>
<p>We don’t wanna do that! No matter how excited we are about Chrome, we don’t want to ignore 46% of the web traffic not being rendered by Chrome.</p>
<blockquote>Just because we might have support for ES6 modules in browsers soon, it doesn’t mean that we can get rid of a build process and a proper “bundle strategy”. — <a href="https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/" rel="noopener">Stefan Judis</a></blockquote>
<p>We’ll always have people stuck with an old browser in their TV firmware or car infotainment system. We’ll always have that stubborn grandpa who doesn’t see the need to invest in upgrading his machine only to leave it as a legacy. Kids will continue using their parent’s old iPhone or tablet and <a href="http://one.laptop.org/about/hardware" rel="noopener">1 laptop per child</a> will not grow some processing power over night. We don’t want to lock anyone out.</p>
<p>This is not a new problem though. Despite ES6 being one of the biggest changes in the web, <a href="https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement" rel="noopener">graceful degradation</a> can still provide some use for the <strong>minority</strong> while keeping the development costs under control for the majority.</p>
<p>In a future post I’ll discuss the practical side of how to ship modern code while having a backup plan for graceful degradation. You can follow me on Twitter or Medium to stay tuned.</p>
<p><strong>BONUS:</strong> Take a look at <a href="https://github.com/facebook/jscodeshift" rel="noopener">JS Codeshift</a>. It is a CLI for converting old javascript code to new javascript code updating even old javascript library calls to their latest API. It tries to preserve as much as the original styling as possible. Workflow: after committing your changes to version control, run this and do a thorough comparison and run the automated &amp; manual tests. Done!</p>
<p><strong>Update 1 (2017–09–8):</strong> Chrome 61 landed a few days ago with full ES6 module support. It has 54% of global browser market. Safari (14% of global market) has supported ES6 modules for a while.</p>
<p><strong>Update 2 (2017–09–10):</strong> you can still support browsers which don’t support ES6 modules thanks to <a href="https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7" rel="noopener">this trick</a> <em>&lt;scri<strong>pt nomod</strong>ule src=”compiled.js”&gt;&lt;</em>;/scri<strong><em>pt&gt;. </em></strong>The nomodule attribute tells the browsers with ES6 module support not to load the script. On Safari there are some caveats that you can read in the page that talks about the <a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element" rel="noopener">trick. R</a>ead the spec.</p>
<p><strong>Update 3 (2017–09–12): </strong><a href="https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/" rel="noopener">ES6 modules support lands in browsers: is it time to rethink bundling?</a></p>
<p><strong>Update 4 (2017–09–12): </strong>module are <em>defer</em>red by default. If you want to bypass that, add an <em>async</em> attribute to the script tag to prevent <a href="https://www.stevesouders.com/blog/2010/06/01/frontend-spof/" rel="noopener">Single Point Of Failure (SPOF)</a>.</p>
<p><strong>Update 5 (2017–09–13):</strong> Node LTS 8.5 <a href="https://nodejs.org/en/blog/release/v8.5.0/" rel="noopener">supports ES6 Modules</a> (called ESM) behind a flag when the file has a <strong>*.msj</strong> extention. Here’s a <a href="http://2ality.com/2017/09/native-esm-node.html" rel="noopener">nice intro</a> about how they’re used.</p>
<p><strong>Update 6 (2017-09–22):</strong> <a href="https://philipwalton.com/articles/deploying-es2015-code-in-production-today/" rel="noopener">here</a> is some great practical advice for supporting both new and old browsers. The bandwidth savings for avoiding transpilation is great!</p>
<p><strong>Update 7 (2018–01–15):</strong> <a href="https://lebab.io/" rel="noopener">Lebab</a> (the reverse of Babel) is has a CLI for modernizing old-style Javascript. This is a bit similar to Facebook’s <a href="https://github.com/facebook/jscodeshift" rel="noopener">CodeShift</a> because they both modernize old code.</p>
<p>The most widely deployed bug in the history of computing opened up a great opportunity for us! Read <a href="https://medium.freecodecamp.org/should-we-demand-the-latest-browser-version-d5c72f8c9ffb" rel="noopener">Why we should convince our users to update their browsers?</a></p>
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
