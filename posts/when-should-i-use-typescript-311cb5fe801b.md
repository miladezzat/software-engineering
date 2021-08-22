---
card: "https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg"
tags: [JavaScript]
description: "Last summer we had to convert a huge code base (18,000+ lines"
author: "Milad E. Fahmy"
title: "When should I use TypeScript?"
created: "2021-08-16T10:29:57+02:00"
modified: "2021-08-16T10:29:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-angularjs tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">When should I use TypeScript?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*IkUwv_lceATY-tP7Pf5TeQ.jpeg" alt="When should I use TypeScript?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Last summer we had to convert a huge code base (18,000+ lines of code) from JavaScript to TypeScript. I learned a lot about the strengths and weaknesses of each, and when it makes sense to use one over the other.</p><p><em>This article is now available in <a href="http://postd.cc/when-should-i-use-typescript/" rel="noopener">Japanese</a> and <a href="http://www.luxingyun.xyz/2016/08/17/%E4%BD%95%E6%97%B6%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8typescript/" rel="noopener">Chinese</a>.</em></p><h3 id="when-it-makes-sense-to-use-typescript">When it makes sense to use TypeScript</h3><h4 id="when-you-have-a-large-codebase"><strong>When you have a large codebase</strong></h4><p>When your codebase is huge, and more than one person works on the project, a type system can help you avoid a lot of common errors. This is especially true for single-page applications.</p><p>Any time one developer could introduce breaking changes, it’s generally good to have some sort of safety mechanism.</p><p>The TypeScript <a href="https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/" rel="noopener">transpiler</a> reveals the most obvious mistakes — though it won’t magically eliminate the need for debugging.</p><p>If your codebase isn’t all that big, it probably doesn’t make sense to make it larger by adding type annotations. I’ve converted 180+ files from JavaScript to TypeScript, and in most cases it added roughly 30% to the total code size.</p><h4 id="when-your-team-s-developers-are-already-accustom-to-statically-typed-languages"><strong>When your team’s developers are already accustom to statically-typed languages</strong></h4><p>If you or the majority of the team come from a strongly typed language like C# or Java, and don’t want to go all-in on JavaScript, TypeScript is a good alternative.</p><p>Even though I recommend learning Javascript thoroughly, there’s nothing preventing you from using TypeScript without knowing JavaScript. In fact, TypeScript was created by the <a href="https://en.wikipedia.org/wiki/Anders_Hejlsberg" rel="noopener">same guy</a> who made C#, so the syntaxes are similar.</p><p>In my company, we had a team of C# developers who were coding a sophisticated desktop application in C# and <a href="https://en.wikipedia.org/wiki/Windows_Presentation_Foundation" rel="noopener">WPF</a> (which is basically a front end development tool for the desktop world). They were then asked to join a web project as full stack developers. So in short order, they were able to learn TypeScript for the front end, then leverage their C# knowledge for the back end.</p><h4 id="typescript-can-serve-as-a-replacement-for-babel"><strong>TypeScript can serve as a replacement for Babel</strong></h4><p>The old Microsoft used to take standard tools — Java for example — and add proprietary non-standard features to them — in this case resulting in J++. Then they would try to force developers to choose between the two.</p><p>TypeScript is exactly the same approach — this time for JavaScript. By the way, this isn’t Microsoft’s first fork of JavaScript. In 1996, they forked JavaScript to create <a href="https://en.wikipedia.org/wiki/JScript" rel="noopener">JScript</a>.</p><p>Though it’s is a less-common use case, it’s technically possible to transpile ES6 code into ES5 using the TypeScript transpiler. This is possible because ES6 is essentially a subset of TypeScript, and the TypeScript <a href="https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/" rel="noopener">transpiler</a> generates ES5 code.</p><p>Typescript’s transpiler generates pretty readable Javascript (EcmaScript 5) code as output. That was one of the reasons why the Angular 2 team chose TypeScript over Google’s own Dart language.</p><p>Also, TypeScript has some cool features that are not in ES6, like enums and the ability to initialize member variables in a constructor. I’m not a big fan of inheritance, but I find it useful to have the <em>public, private, protected, and abstract</em> keywords in classes. TypeScript has them and ES6 doesn’t.</p><p>Our C# developers thought it was super amazing to be able to write a lambda function as the body of a method — which eliminated the headaches associated with the <em>this</em> keyword.</p><h4 id="when-a-library-or-framework-recommends-typescript"><strong>When a library or framework recommends TypeScript</strong></h4><p>If you are using Angular 2 or another library that recommends TypeScript, go for it. Take a look at <a href="http://m12.io/blog/we-launched-angular-2-project" rel="noopener">what these developers have to say</a> after using Angular 2 for six months.</p><p>Just know that — even though TypeScript can use all JavaScript libraries out of the box — if you want good syntax errors, you’ll need to add the type definitions for those libraries externally. Fortunately the nice guys at <a href="http://definitelytyped.org/" rel="noopener">DefinitelyTyped</a> have built a community-driven repo with tooling for doing just that. But this is still one extra step when you’re setting up your project</p><p>(On a side note: for all you JSX fans, check out <a href="http://www.typescriptlang.org/docs/handbook/jsx.html" rel="noopener">TSX</a>.)</p><h4 id="when-you-really-feel-the-need-for-speed"><strong>When you really feel the need for speed</strong></h4><p>This may come as a shock to you, but the TypeScript code can in some situations perform better than JavaScript. Let me explain.</p><p>In our JavaScript code, we had a lot of type checks. It was a MedTech app, so even a small error could be literally fatal if it wasn’t dealt with properly. So a lot of functions had statements like:</p><pre><code>if(typeof name !== ‘string) throw ‘Name should be string’</code></pre><p>With TypeScript, we could eliminate a lot of these type checks all together.</p><p>This especially showed its effect in parts of the code where we previously had a performance bottleneck, because we were able to skip a lot of unnecessary runtime type checking.</p><h3 id="so-when-are-you-better-off-without-typescript">So when are you better off without Typescript?</h3><h4 id="when-you-can-t-afford-an-extra-transpilation-tax"><strong>When you can’t afford an extra transpilation tax</strong></h4><p>There are no plans to support TypeScript natively in the browsers. Chrome <a href="https://developers.google.com/v8/experiments#soundscript" rel="noopener">did some experiment</a>, but later <a href="https://groups.google.com/forum/embed/?place=forum/strengthen-js#!topic/strengthen-js/ojj3TDxbHpQ" rel="noopener">cancelled</a> support. I suspect this has something to do with unnecessary runtime overhead.</p><p>If someone wants training wheels, they can install them. But bikes shouldn’t come with permanent training wheels. This means that you will always have to transpile your TypeScript code before running it in a browser.</p><p>For standard ES6, it’s a whole different story. When <a href="https://kangax.github.io/compat-table/es6/" rel="noopener">ES6 is supported by most browsers</a>, the current ES6 to ES5 transpilation will become unnecessary (update: <a href="https://medium.freecodecamp.org/you-might-not-need-to-transpile-your-javascript-4d5e0a438ca" rel="noopener">yes indeed</a>!).</p><p>ES6 is the biggest change to the JavaScript language, and I believe most programmers will just settle with it. But those brave few who want to try the next version of JavaScript’s experimental features, or the features not yet implemented on all browsers — they will need to transpile anyway.</p><p>Without transpilation, you just modify the file and refresh your browser. That’s it. No <em>watching,</em> <em>transpiling on demand,</em> or <em>build system</em> are necessary.</p><p>If you choose TypeScript, you will end up doing some extra bookkeeping for the type definitions for your Javascript libraries and frameworks (by using DefinitelyTyped or writing your own type annotations). That’s something you wouldn’t need to do for a pure JavaScript projects.</p><h4 id="when-you-want-to-avoid-weird-debugging-edge-cases"><strong>When you want to avoid weird debugging edge cases</strong></h4><p>Sourcemaps make it easier to debug Typescript, but the status quo is not perfect. There are really annoying and confusing edge cases.</p><p>Also, there are some problems debugging the “this” keyword and properties attached to it (hint: “_this” works in most cases). That is because Sourcemaps currently don’t have a good support for variables — though this may change in the future.</p><h4 id="when-you-want-to-avoid-potential-performance-penalties"><strong>When you want to avoid potential performance penalties</strong></h4><p>In our project, we had 9,000+ lines of good old ES5 JavaScript that delivered pure horse power to a 3D WebGL canvas. We kept it that way.</p><p>The TypeScript transpiler (just like Babel) has features that require generating extra code (inheritance, enum, generics, async/await, etc). No matter how good your transpiler is, it can’t surpass the optimizations of a good programmer. So we decided to keep it in plain ES5 for ease of debug and deployment (no transpilation whatsoever).</p><p>That being said, the performance penalty is probably negligible compared to benefits of a type system and more modern syntax for most projects. But there are cases where milliseconds and even microseconds matter, and in those cases transpilation of any kind is not recommended (even with Babel, CoffeeScript, Dart, etc.).</p><p>Note that Typescript doesn’t add any extra code for runtime type checking. All the type checking happens at transpile time and the type annotations are removed from the generated Javascript code.</p><h4 id="when-you-want-to-maximize-your-team-s-agility"><strong>When you want to maximize your team’s agility</strong></h4><p>It’s quicker to set up something in JavaScript. The lack of a type system makes for agility and ease of changing stuff. It also makes it easier to break things, so make sure you know what you’re doing.</p><p>Javascript is more flexible. Remember one of the main use cases for a type system is to make it hard to break stuff. If Typescript is Windows, Javascript is Linux.</p><p>In JavaScript Land, you don’t get the training wheels of a type system, and the computer assumes you know what you’re doing, but allows you to ride much faster and maneuver easier.</p><p>This is particularly important to note if you’re still in the prototyping phase. If so, don’t waste your time with TypeScript. JavaScript is so much more flexible.</p><p>Remember that TypeScript is a superset of JavaScript. This means that you can easily convert JavaScript to TypeScript later if you need to.</p><h4 id="my-preference-on-javascript-vs-typescript">My preference on JavaScript VS TypeScript</h4><p>There is no one best language overall. But for each individual project, there is probably one objectively best language and library and framework and database and operating system and… you get the picture.</p><p>For our project it made sense to use TypeScript. I tried to refactor some of my hobby projects to TypeScript but it did not worth the effort.</p><p>I personally like 5things about TypeScript:</p><ol><li>It’s fully compatible with ES6. It is really nice seeing Microsoft playing fair with the other browsers. Our ecosystem can benefit from a strong rival to Google, Mozilla, and Apple. Microsoft is spending serious energy on it — such as writing <a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code</a> from scratch using TypeScript on Google Chrome, of all platforms.</li><li>The type system is optional. Coming from a C and Java background, I found the lack of type system in JavaScript liberating. But I hated losing time when I encountered stupid bugs during runtime. TypeScript allows me to avoid many common bugs so I can focus my time on fixing the real tricky ones. It’s a good balance. I like it. It’s my taste. I use types whenever I can because it gives me peace of mind. But that’s me. If I use TypeScript, I don’t want to limit myself to its ES6 features.</li><li>The JavaScript code that comes out of the TypeScript transpiler is very readable. I am not a fan of Sourcemaps, so I do most of my debugging on the generated JavaScript. It’s absolutely awesome. I can totally understand why Angular 2 <a href="https://jaxenter.com/angular-typescript-dart-115426.html" rel="noopener">chose TypeScript over Dart</a>.</li><li>TypeScript’s development experience is fantastic. <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a> is very smart when dealing with JavaScript (some may argue it’s the smartest JS IDE). But TypeScript pushes the limits to a whole new level. The autocompletion and refactoring features in VSCode work much more accurately, and it’s not because the IDE is super smart. That’s all thanks to TypeScript.</li><li>The type annotations are like a basic level documentation. They declare the type of data that each function expects, their results and various other hints like <code>readonly</code> , <code>public</code>or <code>private</code> attributes. In my experience, trying to refactor a JavaScript code to TypeScript, I usually end up with cleaner code with nicer structure. In fact writing TypeScript has improved how I write plain JavaScript.</li></ol><p>Typescript is not the answer for everything. You can still <a href="https://medium.com/@alexewerlof/what-is-shitty-code-handwriting-ae7c00708b" rel="noopener">write terrible code</a> in it.</p><p>TypeScript haters are gonna hate, either because of fear of change or because they know somebody who knows somebody who is afraid of it. Life goes on and TypeScript introduces <a href="https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript" rel="noopener">new features</a> to <a href="https://github.com/Microsoft/TypeScript" rel="noopener">its community</a> anyway.</p><p>But like React, TypeScript is one of those influential technologies that is pushing the boundaries of our web development.</p><p>Whether you use TypeScript or not, it doesn’t hurt to try it out in order to develop your own opinions on it. It has a learning curve, but if you already know JavaScript, it will be a smooth one.</p><p>Here is an <a href="http://www.typescriptlang.org/Playground" rel="noopener">online realtime TS transpiler</a> with some examples that let you compare TypeScript code with its equivalent JavaScript code.</p><p>Here is a quick <a href="http://www.typescriptlang.org/Tutorial" rel="noopener">tutorial</a>, and a <a href="http://www.typescriptlang.org/Handbook" rel="noopener">very nice guide</a>, but I’m more a <a href="https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md" rel="noopener">language-reference</a> kinda guy. If you like video, here’s <a href="https://www.udemy.com/typescript/" rel="noopener">a course from Udemy</a>.</p><p>John Papa has a <a href="http://johnpapa.net/es5-es2015-typescript/" rel="noopener">a short article</a> about ES5 and TypeScript.</p><p>There’s <a href="http://ttendency.cs.ucl.ac.uk/projects/type_study" rel="noopener">an interesting study</a> that shows all things equal, a type system reduces bugs by 15%.</p><p>Oh, and if you feel like going on a side mission, read <a href="https://medium.com/@alexewerlof/what-s-cool-about-being-a-programmer-5a1e58efeee6" rel="noopener">why programming is the best job ever</a>.</p>
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