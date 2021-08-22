---
card: "https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png"
tags: [JavaScript]
description: by Jason Dreyzehner
author: "Milad E. Fahmy"
title: "It’s time to give TypeScript another chance"
created: "2021-08-15T19:53:05+02:00"
modified: "2021-08-15T19:53:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-es6 tag-startup tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">It’s time to give TypeScript another chance</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*i0qclSPNcjj8cWOPr3wLxg.png" alt="It’s time to give TypeScript another chance">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jason Dreyzehner</p>
<h1 id="it-s-time-to-give-typescript-another-chance">It’s time to give TypeScript another chance</h1>
<p>Since 2012, TypeScript has been a popular choice for programmers coming to JavaScript from more structured languages (like C++ or Java). But it’s also been largely dismissed by those native to the JavaScript world.</p>
<p>You may have heard that the Angular team recently <a href="https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8" rel="noopener">switched to TypeScript for Angular 2</a>. So have the teams behind <a href="https://github.com/ReactiveX/rxjs" rel="noopener">RxJS</a>, <a href="https://blog.ionic.io/announcing-ionic-2-0-0-final/" rel="noopener">Ionic</a>, <a href="https://cycle.js.org/" rel="noopener">Cycle.js</a>, <a href="https://github.com/palantir/blueprint" rel="noopener">Blueprint</a>, <a href="https://dojotoolkit.org/community/roadmap/vision.html" rel="noopener">Dojo</a>, <a href="https://github.com/NativeScript/NativeScript" rel="noopener">NativeScript</a>, <a href="https://github.com/palantir/plottable" rel="noopener">Plottable</a>, and others.</p>
<p>If you’ve been in JavaScript/Node.js land for a while, it’s easy to assume that the shot-callers for these projects have lost their minds. Or maybe that they were paid off by Microsoft. ?</p>
<p>And if you haven’t been watching closely, you may have missed TypeScript’s amazing progress over the past year (and even the past few months).</p>
<p><strong>If you’re still thinking “TypeScript is kinda like CoffeeScript, right?”—this article is for you.</strong></p>
<p>There are dozens of great resources and articles on the benefits of using TypeScript. I hope that after reading this, you’ll take another look.</p>
<h3 id="javascript-with-types">JavaScript — with Types?</h3>
<p>For those new to this discussion, it’s important to understand the aversion that much of the JavaScript world has to types. Besides its portability, much of JavaScript’s popularity could be attributed to its simplicity.</p>
<blockquote>“To be attractive to hackers, a language must be good for writing the kinds of programs they want to write. And that means, perhaps surprisingly, that it has to be good for writing throwaway programs.” — Paul Graham, <a href="http://paulgraham.com/popular.html" rel="noopener">Being Popular</a></blockquote>
<p>The kind of programmers who make JavaScript their tool of choice often do so for its flexibility. There’s no standard library, very little structure, and without types, JavaScript users don’t need to spend much time thinking about details when hacking on a new idea.</p>
<p>This is probably easiest to contrast to a language like C++, where programs tend to require a lot more structure and overhead. A lot of JavaScript programmers (particularly the above hacker-types) find the tedium of traditional classes, boilerplate, types, and typecasting slow them down.</p>
<blockquote><em>“Give me your tired, your poor, your huddled masses yearning to breathe free — of over-protective programming languages.” — JavaScript </em>?️ <em>(basically)</em></blockquote>
<p>With this perspective, it’s easy to see why a lot of JavaScript users are so averse to the idea of JavaScript with types.</p>
<p><strong>Here are some insights that might help to ease those fears.</strong></p>
<h3 id="typescript-is-javascript-with-better-linting">TypeScript is JavaScript with better linting</h3>
<p>Probably one of the most common concerns with the idea of using TypeScript is that it isn’t <em>pure</em> JavaScript. Because TypeScript is its own language, it’s assumed your code will be transpiled into a messy glob which you’ll someday be forced to debug.</p>
<figcaption>Too many people have this impression of Typescript.</figcaption>
</figure>
<p>Besides TypeScript being extremely well-tested and widely in use, it’s worth noting that depending on your configuration, very little “transpiling” is actually happening (if any). TypeScript is just Javascript with optional typings.</p>
<figcaption>Type a little extra now, get instant feedback when “add” is used incorrectly. You also get up-to-date documentation free (without JSDoc tags to maintain), and fantastic editor and tooling support.</figcaption>
</figure>
<p><strong>TypeScript is like a highly-advanced linter, able to check documentation and warn when code is not being used as intended.</strong></p>
<p>It provides immediate feedback and a better development experience for all future users of your code. This is also a good test for new projects—if your project is worth linting to enforce code style conventions, your project is probably long-lasting enough to benefit from TypeScript.</p>
<p>The TypeScript team has <a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals" rel="noopener">committed to tracking JavaScript</a> for the foreseeable future. So if/when additional features stabilize in JavaScript, TypeScript will match them and adapt.</p>
<h3 id="typescript-eliminates-runtime-overhead">TypeScript eliminates runtime overhead</h3>
<p>Another common misconception is that TypeScript’s type checking somehow persists into the runtime environment, adding complexity and overhead.</p>
<p>In fact, TypeScript is a good way to avoid runtime type checking overhead.</p>
<p><strong>TypeScript is a development-time/compile-time tool</strong> — it takes in standard JavaScript with optional type-hints and outputs JavaScript with those hints removed. (If enabled, it can also transpile ES6 and ES7 JavaScript features back to current standards.)</p>
<p>TypeScript’s type-hints give us all the benefits of types, and then they disappear.</p>
<p>The only clues left at runtime of an object’s <em>type</em> are the same clues provided by standard JavaScript features. (For example, when you create a new object from a prototype, you might check its type with <code>instanceof</code>.)</p>
<p>Ironically, because JavaScript doesn’t provide a standard means of development-time type checking, many of the most developed JavaScript libraries <strong>reimplement their own runtime type checking systems</strong>.</p>
<figcaption>Runtime type checking in the <a href="https://github.com/request/request" rel="noopener" target="_blank" title="">Request</a> library. This provides a much better debugging experience for users who use the method incorrectly. But it requires more code at runtime and more cases to unit test. <a href="https://github.com/request/request/blob/092e1e657326626da0b8ac4cfe8752751689313b/index.js#L43-L55" rel="noopener" target="_blank" title="">Snippet→</a></figcaption>
</figure>
<p>These libraries don’t intend to do this at the outset, but part of providing a good development experience is ensuring developers see clear and actionable errors when they’ve made a mistake.</p>
<p>In pursuit of this goal, many libraries extensively check the types of parameters passed to methods at runtime, throwing errors meant only for the eyes of the developer implementing the method.</p>
<p><strong>This is most certainly the worst of both worlds<em>.</em></strong> These cascades of runtime type checks add significant code bloat, make code less readable, and increase the difficulty of maintaining 100% unit test coverage.</p>
<p>Across large codebases, these runtime tests really add up. After a bit of refactoring, many largest codebases end up with <strong>whole type systems</strong>.</p>
<figcaption><a href="https://github.com/bcoin-org/bcoin/" rel="noopener" target="_blank" title="">Bcoin</a> provides a good development experience by failing fast (at runtime) and emitting helpful errors. But this comes at the cost of maintaining and testing an extensive, runtime type checking system. It would be more helpful and efficient to do this with Typescript. <a href="https://github.com/bcoin-org/bcoin/blob/4e7df6ef875e5936bea5139d922871498b4d9586/lib/primitives/tx.js#L84-L123" rel="noopener" target="_blank" title="">Snippet→</a></figcaption>
</figure>
<p>Without using Typescript, not only do you lose out on development-time type checking—you often shift it into runtime. (<em>I hope you have full test coverage.</em>)</p>
<p>When you use TypeScript, you provide your users with an even better development experience, reduce runtime type checking to only cases where it’s needed (sanitizing end-user input, for example), and make your code easier to fully unit test.</p>
<h3 id="typescript-has-come-a-long-way">TypeScript has come a long way</h3>
<p>Maybe for the reasons mentioned above, when I first heard of TypeScript, I ran the opposite direction as fast as I could. Besides being antithetical to the “best thing about JavaScript” (less structure), it was <em>made by Microsoft</em>.</p>
<p>But it’s not 2012 anymore. TypeScript is not a <a href="https://en.wikipedia.org/wiki/Leaky_abstraction" rel="noopener">leaky abstraction</a> of JavaScript, and the TypeScript project has some of the best hackers and engineers in this space. (And I’m impressed with how well Microsoft is managing it.)</p>
<p><strong>Since TypeScript tracks ECMAScript, using TypeScript doesn’t lock your project to a new language.</strong> A lot of people still don’t realize this, so it’s not uncommon to hear sentiments like:</p>
<blockquote>“It’s hard to maintain a TypeScript project.”</blockquote>
<p>Which, to me, sounds like:</p>
<blockquote>“It’s hard to maintain a project with linting.”</blockquote>
<p>If your project somehow stops benefitting from TypeScript, you can run your project through the compiler (one last time) to remove all types from your codebase.</p>
<p>Then you’re back to untyped JavaScript.</p>
<h3 id="tl-dr">TL;DR</h3>
<p>TypeScript has improved a lot recently. If you heard about TypeScript years ago, but haven’t really followed it since then, it’s worth another look.</p>
<h3 id="when-to-use-typescript">When to use TypeScript</h3>
<h4 id="angular-why-typescript"><a href="https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8" rel="noopener"><strong>Angular: Why TypeScript?</strong></a></h4>
<p>A short technical discussion of exactly why the Angular team chose TypeScript to build Angular 2.</p>
<h4 id="all-js-libraries-should-be-authored-in-typescript"><a href="http://staltz.com/all-js-libraries-should-be-authored-in-typescript.html" rel="noopener"><strong>All JS Libraries Should be Authored in TypeScript</strong></a></h4>
<p>A summary of why Typescript is a good idea for JS libraries, from the creator of Cycle.js and contributor to RxJS.</p>
<h4 id="typescript-deep-dive-why-typescript"><a href="https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html" rel="noopener"><strong>TypeScript Deep Dive — Why TypeScript</strong></a></h4>
<p>A good summary of the benefits of using TypeScript. (<a href="https://basarat.gitbooks.io/typescript/" rel="noopener">TypeScript Deep Dive</a> is a great general reference.)</p>
<h3 id="learn-about-typescript">Learn about TypeScript</h3>
<h4 id="the-typescript-tutorial"><a href="https://www.typescriptlang.org/docs/tutorial.html" rel="noopener"><strong>The TypeScript tutorial</strong></a></h4>
<p>A short tutorial maintained by the TypeScript team.</p>
<h4 id="typescript-design-goals"><a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals" rel="noopener"><strong>TypeScript Design Goals</strong></a></h4>
<p>A short wiki outlining the TypeScript team’s general design principles.</p>
<h3 id="typescript-starter"><a href="https://github.com/bitjson/typescript-starter" rel="noopener"><strong>typescript-starter</strong></a></h3>
<p>A boilerplate project for building JavaScript libraries. Includes proper unit testing, documentation generation, and both CommonJS and ES6 Module exports (for Node.js and the browser).</p>
<p>I wrote this with the hope of changing minds. If you have any ideas for how I could improve this article, please <a href="https://twitter.com/bitjson" rel="noopener">let me know</a>.</p>
<p>Please ♡ and <a href="https://twitter.com/bitjson/status/832497164467183616" rel="noopener">share this post</a> if you found it interesting. Thanks for reading!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
