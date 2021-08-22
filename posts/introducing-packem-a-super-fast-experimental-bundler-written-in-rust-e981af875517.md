---
card: "https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png"
tags: [JavaScript]
description: by Bukhari Muhammad
author: "Milad E. Fahmy"
title: "Introducing Packem: a super fast experimental bundler written in Rust"
created: "2021-08-15T19:33:59+02:00"
modified: "2021-08-15T19:33:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-bundler tag-typescript tag-rust tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">Introducing Packem: a super fast experimental bundler written in Rust</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*AP72bMDkd2rDgR4txJreIQ.png" alt="Introducing Packem: a super fast experimental bundler written in Rust">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Bukhari Muhammad</p>
<h1 id="introducing-packem-a-super-fast-experimental-bundler-written-in-rust">Introducing Packem: a super fast experimental bundler written in Rust</h1>
<p>Packem is an experimental precompiled JavaScript module bundler primarily implemented in Rust. It can also handle a variety of other file types like YAML/TOML, fragment shader files and a lot more. Checkout the <a href="https://packem.github.io/" rel="noopener">website</a> or the <a href="https://github.com/packem/packem" rel="noopener">GitHub page</a> to quickly get started.</p>
<figcaption>Packem’s logo. Always soothes me.</figcaption>
</figure>
<p>Packem resolves a module’s dependencies and rehydrates them into a module graph, a flat list containing module interfaces which are essentially <strong>references to in-memory heap-based mutable data structures </strong>containing special metadata of a module in the module graph.</p>
<p>Most of the business logic is abstracted into Rust using FFI bindings to enable low level interactions between both ends. The Rusty binaries are available as precompiled Node C/C++ addons in <a href="https://github.com/packem/packem/tree/master/bin" rel="noopener">Packem’s repo</a>. A cloud-based CI is used to run a few scripts with pre-gyp installations, yielding OS-specific binaries with support for later Node versions (8, 9, 10).</p>
<p>This layer of Packem’s core is what is referred to as the <strong>Logical Context (LC)</strong>. All the other operations that are not <em>explicitly prioritized</em> are regressed into Node’s general runtime, which in Packem’s terms is the <strong>Runtime Context (RC)</strong>. Read more on contexts <a href="https://packem.github.io/docs/execution-contexts.html" rel="noopener">here</a>.</p>
<p>Theoretically, the module graph is kept flat to avoid common pitfalls that would lead to unnecessary traversals if a tree was used in place. This allows the RC to keep track of cases such as deep circular dependencies or heavily nested dynamic imports (code splitting), amongst others, appropriately with minimum performance implications or side effects as possible.</p>
<figcaption>An overview of the bundling cycle from contexts.</figcaption>
</figure>
<blockquote>More details can be found at Packem’s <a href="https://github.com/packem/packem" rel="noopener">README.md</a>.</blockquote>
<p>I’ve been having this idea in mind but never planned to execute it until I <em>joined forces</em> with <a href="undefined" rel="noopener">Saddam M</a>. It has really been in my interest to see module bundling as a concept safe for anyone to learn, understand and implement. Having people struggle with configurations, documentation and plugins was extremely horrendous and I’d like to take the chance to change that. With you. With Packem.</p>
<h3 id="quick-history">Quick history</h3>
<p>I took some time to exhaust most of the bundlers written in a non-JavaScript environment. I found out that most of them <em>forgot</em> that they’re supposed to be a bundler and not a C/C++ library from the dark ‘ol 19s.</p>
<p>What I wanted was a bundler that does most of the heavy-lifting in a <em>close-to-the-metal</em> language for the user without requiring any interaction with its internals. Then I found Rust. A smart and concise systems language that shows off some laudable features like a fearless concurrency model, type safety, and more! I would expect as much from using C/C++ but I’d rather stick with Rust since it’s pretty straightforward when it comes to memory management.</p>
<h3 id="why-another-bundler">Why another bundler?</h3>
<p>So what’s the take here? Why do we need another build tool since we already have amazing ones like webpack, Parcel, Rollup, etc? I’ll take you along with a few reasons why. Perhaps you might have your own interests in having your development and production build times reduced heavily.</p>
<h4 id="it-s-2019-we-don-t-need-slow-tools-no-more">It’s 2019, we don’t need slow tools no more</h4>
<p>Even though Packem is faster than webpack 4, <strong>it is more than twice as fast as Parcel (with multicore compilation)</strong>. In a benchmark test, we bundled <a href="https://lodash.com/docs/4.17.11" rel="noopener">Lodash v4.17.1</a> with both Packem and Parcel and this was the result:</p>
<blockquote>Never take any benches at face value. You can test it out for yourself <a href="https://github.com/bukharim96/packem-lodash-test" rel="noopener">here</a>.</blockquote>
<p>The reason why I didn’t bother benchmarking Parcel against webpack was because webpack 4 is profoundly faster than Parcel. I proved this fact by using <a href="undefined" rel="noopener">Sean T. Larkin</a>’s own benches and a thread to it on Twitter <a href="https://twitter.com/bukharim96/status/1099049693290680321?s=20" rel="noopener">can be found here</a>.</p>
<h4 id="because-we-can-anyone-can-right">Because we can. Anyone can, right?</h4>
<p>Of course, what will make the most sense, is because <em>we can</em>. We had the idea of having faster bundle times with a Rusty interface either with FFI or WASM (was still unsure by then). FFI was more reasonable as far as speed and DX was concerned, so we went with having Packem implemented in Rust FFI bindings.</p>
<p>We experienced a few thread-related issues so we didn’t make much use of the available resources. As a result we used multiple node child processes (with <a href="https://github.com/rvagg/node-worker-farm" rel="noopener"><em>node-worker-farm</em></a><em>)</em>, the same technique Parcel uses for multicore compilation, but for larger module graphs since it adds a significant startup time on top of Node’s uptime when used with smaller module graphs.</p>
<h3 id="configuration-style">Configuration style</h3>
<p>This was a tricky part. There were a lot of questions that needed a good answer to make up to picking the right configuration style. Static or dynamic? JSON/YAML/TOML? Our choice was based entirely on whether we <strong>needed</strong> Packem to:</p>
<ol>
<li>Have a neater configuration style, and</li>
<li>Be agnostic of other custom user configurations like <em>.babelrc</em> or <em>package.json</em>.</li>
</ol>
<p>Bottomline, we proceeded with a static configuration style since we found it to be exactly what we needed. Something that could <em>declaratively tell Packem how to manage the bundle cycle</em>. All the limits to having a static configuration were made clear.</p>
<p>Another aspect of interest was the type of file we should use for the configuration. JSON that is more common to an overwhelming majority of JavaScript developers or YAML/TOML/XML-style which are less common but have their own advantage(s). A suggestion was still made for JSON support (<a href="https://github.com/packem/packem/issues/5" rel="noopener">#5</a>).</p>
<p>JSON just didn’t cut out because of all the unnecessary string quotes, curly &amp; block braces, which makes sense since it’s a <strong>data interchanging format</strong>. An XML-ish approach deserves no respect with regards to being used as a configuration format since it makes things worse than JSON as far as unnecessary characters are concerned. TOML introduced a lot of new lines, and debugging nested options didn’t appear to be eye-appealing since we knew that Packem plugins could get really nesty.</p>
<p>The final winner was YAML! It was able to pass through all aspects of being a proper configuration format (for Packem at least). It:</p>
<ol>
<li>Makes configuration painless.</li>
<li>Uses an elegant approach.</li>
<li>Is still familiar to the JavaScript eye</li>
<li>Was designed specifically for this use-case (configurations)<em>.</em></li>
</ol>
<p>Here’s an example of a typical Packem configuration (<em>packem.config.yml)</em>. Check for yourself and think about writing the same content in a JSON/TOML/XML-ish style.</p>
<p>FYI, only the first two options are necessary! ?</p>
<h4 id="extending-packem">Extending Packem</h4>
<blockquote>This feature is not yet implemented.</blockquote>
<p>Sometimes we might need to use a feature that <strong>doesn’t yet exist</strong>, <strong>might not be implemented in Packem</strong> or is <strong>very specific to our project</strong>. For that case, you’d have two ways of solving your needs:</p>
<ol>
<li><a href="https://packem.github.io/docs/plugin-system.html" rel="noopener">Create a Packem plugin</a> for your use case (which is the recommended option).</li>
<li>Build a custom RC on top of Packem’s binaries.</li>
</ol>
<p>Using Rust gives us the chance to reform the LC into other binary formats, such as WebAssembly, which will enable Packem to exhibit multiple compile targets:</p>
<ol>
<li>A NAPI-based C/C++ addon with platform-specific binaries required by Packem’s default RC.</li>
<li>A WebAssembly-based binary that is cross-platform and injected into the RC.</li>
<li>Packem’s default standalone which uses WebAssembly with a browser-compatible implementation of the RC.</li>
</ol>
<blockquote>The last two are not yet on the radar since internal refactorings are still being sorted out.</blockquote>
<p>The advanced guide is soon expected to show you how to <strong>build a custom build tool using Packem’s binaries</strong> to fit your own needs in case you need to use Packem outside the browser and Node environments. These binaries complete the entire graph generation, and duplicate filtering and other graph-related aspects. This means you can use your custom serializer, file watcher, plugin system, etc. It is much like how you can build your custom renderer over OpenGL.</p>
<ol>
<li>You can still embrace <a href="https://packem.github.io/docs/plugin-system.html" rel="noopener">Packem’s plugin system</a> since it will allow you to integrate Packem’s ecosystem of plugins with your custom bundler.</li>
<li>If you’re uncertain whether or not you would need to build a custom bundler, know that you wouldn’t always need to. Please try filing an issue first.</li>
<li>It is a guarantee that these binaries will speed up your workflow depending on your specific use case(s).</li>
</ol>
<h4 id="current-state">Current state</h4>
<ul>
<li>✂ <a href="https://packem.github.io/docs/code-splitting.html" rel="noopener">Code Splitting</a> for development and production modes.</li>
<li>? Improved CLI (` — verbose`) for better information on bundling cycle.</li>
<li>? M<a href="https://packem.github.io/docs/advanced-plugin-apis.html#module-interfaces" rel="noopener">odule Interfaces </a>to allow easy manipulation of the module graph.</li>
<li>✔ Proper priority. Native functionalities fit perfectly into the LC. This means there is greater chances of speedy builds.</li>
<li>? Export N<code>ativeUtils </code>for external usage of native functionalities including g<code>enerateModuleGraph </code>which reruns the process of generating a module graph. It is heavy but still useful in cases where you’d need a clone of the current active module graph. Using it means doubling the build time, so use it with care.</li>
</ul>
<h4 id="what-s-next">What’s next?</h4>
<p>These are the features we’re hoping to have soon in the upcoming releases. With your efforts we could <strong>get bundling done the right way</strong>. When Packem is at <em>1.0</em>, we’re expecting to have full support for all the features listed below and the others mentioned in <a href="https://packem.github.io/docs/roadmap.html" rel="noopener">Packem’s roadmap</a>.</p>
<ul>
<li>A browser-compatible standalone of Packem with the LC in WebAssembly for closer integration with the underlying system. <a href="undefined" rel="noopener">Axel Rauschmayer</a> already <a href="https://github.com/packem/packem/issues/1" rel="noopener">made a feature request</a> to have a Node-compatible version in WASM. For the record, we’ll be working on both soon.</li>
<li>Treeshaking, but advanced. Resolving named/unnamed imports and stripping dead code should be a breeze. This means you can use libraries like <em>lodash</em> instead of <em>lodash-es</em> without worrying whether your code will be <strong>elided</strong> or not.</li>
<li>Auto Config. Like Zero Config, but defaults-oriented for extra flexibility.</li>
<li>Advanced CLI options to make development with Packem a second nature.</li>
<li>Better error reporting.</li>
<li>More environment targets. Packem can only bundle for the browser as of now. Eventually, we expect to support Node CJS and other formats as well.</li>
<li>More plugins. We need more plugins! Packem has a set of common plugins to get you started quicker. But to grow a community, we’ll need a great ecosystem of plugins. Check the <a href="https://packem.github.io/docs/common-plugins.html" rel="noopener">common plugins</a> available or the <a href="https://packem.github.io/docs/plugin-system.html" rel="noopener">plugins section</a> on the site to start developing a plugin right away.</li>
<li>And much more…</li>
</ul>
<h4 id="resources">Resources</h4>
<ul>
<li><a href="https://github.com/packem/packem/" rel="noopener">Packem on GitHub</a></li>
<li><a href="https://packem.github.io/docs/roadmap.html" rel="noopener">Roadmap and Feature Requests</a></li>
<li><a href="https://packem.github.io/" rel="noopener">Packem’s Official Site</a></li>
<li><a href="https://packem.github.io/docs/plugin-system.html" rel="noopener">Creating Plugins with Packem</a></li>
<li><a href="https://packem.github.io/docs/code-splitting.html" rel="noopener">Code Splitting with Packem</a></li>
<li><a href="https://packem.github.io/docs/the-module-graph.html" rel="noopener">The Module Graph</a></li>
</ul>
<p><strong>Packem hasn’t reach <em>1.0</em> yet</strong>. If you have found Packem to be interesting at all to you, try contributing to Packem itself by creating plugins, updating the documentation, supporting us financially, representing Packem at conferences or any other means. We appreciate your efforts!</p>
<p>Happy bundling! ???</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
