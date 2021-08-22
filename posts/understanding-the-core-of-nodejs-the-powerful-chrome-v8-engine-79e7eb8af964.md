---
card: "https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png"
tags: [JavaScript]
description: by Mayank Tripathi
author: "Milad E. Fahmy"
title: "Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code"
created: "2021-08-15T19:49:29+02:00"
modified: "2021-08-15T19:49:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-chromev8 tag-ecmascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*T2RkznzWBPFp3JM3L7zx5A.png" alt="Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Mayank Tripathi</p>
<h1 id="understanding-how-the-chrome-v8-engine-translates-javascript-into-machine-code">Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code</h1>
<p>Before diving deep into the core of Chrome’s V8, first, let’s get our fundamentals down. All of our systems consist of microprocessors, the thing that is sitting inside your computer right now and allowing you to read this.</p>
<p>Microprocessors are tiny machines that work with electrical signals and ultimately do the job. We give microprocessors the instructions. The instructions are in the language that microprocessors can interpret. Different microprocessors speak different languages. Some of the most common are IA-32, x86–64, MIPS, and ARM. These languages directly interact with the hardware so the code written in them is called machine code. Code that we write on our computers is converted or compiled into machine code.</p>
<p>That’s what machine code looks like:</p>
<figcaption>Source : Google</figcaption>
</figure>
<p>It consists of instructions that are performed at a particular piece of memory in your system at a low level. You must feel lucky for not having to write all this to run your program!</p>
<p>High-level languages are abstracted from machine language. In the level of abstraction below, you can see how far JavaScript is abstracted from the machine level. C/C++ are relatively much closer to the hardware and hence much faster than other high-level languages.</p>
<p>Now back to the V8 engine: V8 is a powerful open source Javascript engine provided by Google. So what actually is a Javascript Engine? It is a program that converts Javascript code into lower level or machine code that microprocessors can understand.</p>
<p>There are different JavaScript engines including <a href="https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)" rel="noopener">Rhino</a>, <a href="https://en.wikipedia.org/wiki/WebKit#JavaScriptCore" rel="noopener">JavaScriptCore</a>, and <a href="https://en.wikipedia.org/wiki/SpiderMonkey_(JavaScript_engine)" rel="noopener">SpiderMonkey</a>. These engines follow the ECMAScript Standards. ECMAScript defines the standard for the scripting language. JavaScript is based on ECMAScript standards. These standards define how the language should work and what features it should have. You can learn more about ECMAScript <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="noopener">here</a>.</p>
<figcaption>Source: Google</figcaption>
</figure>
<p>The Chrome V8 engine :</p>
<ul>
<li>The V8 engine is written in C++ and used in Chrome and Nodejs.</li>
<li>It implements ECMAScript as specified in ECMA-262.</li>
<li>The V8 engine can run standalone we can embed it with our own C++ program.</li>
</ul>
<p>Let us understand the last point a little better. V8 can run standalone and at the same time we can add our own function implementation in C++ to add new features to JavaScript.</p>
<p>So for example: <code>print('hello world')</code>is not a valid statement in Node.js. It will give error if we compile it. But we can add our own implementation of the print function in C++ on top of the V8 which is open source at <a href="https://github.com/v8/v8" rel="noopener">Github</a>, thus making the print function work natively. This allows the JavaScript to understand more than what the ECMAScript standard specifies the JavaScript should understand.</p>
<p>This is a powerful feature since C++ has more features as a programming language as compared to JavaScript, as it is much closer to hardware like dealing with files and folders on the hard drive.</p>
<p>Allowing us to write code in C++ and making it available to JavaScript makes it so we can add more features to JavaScript.</p>
<p>Node.js in itself is a C++ implementation of a V8 engine allowing server-side programming and networking applications.</p>
<p>Let’s now look at some of the open source code inside the engine. To do this, you need to go to the <a href="https://github.com/v8/v8/blob/master/samples/shell.cc" rel="noopener">v8/samples/shell.cc</a> folder.</p>
<p>Here you can see the implementation of different functions such as <code>Print</code> and <code>Read,</code> which are natively not available in Node.js.</p>
<p>Below, you can see the implementation of the <code>Print</code> function. Whenever the <code>print()</code> function is invoked in Node.js, it will create a callback and the function will be executed.</p>
<p>Similarly, we can add our own implementation of different new functions in C++ inside V8 allowing it to be understood by Node.js.</p>
<p>That is certainly too much to grab for a simple statement and that’s the amount of work V8 engine does under the hood.</p>
<p>Now you must have a clear understanding of how Node.js works and what actually is the Chrome V8 engine.</p>
<p>Thanks for reading this article. Let’s follow up on <a href="https://twitter.com/mayank_408" rel="noopener"><strong>Twitter</strong></a>, <a href="https://www.linkedin.com/in/mayank-tripathi-a49563126/" rel="noopener"><strong>Linkedin</strong></a>, <a href="https://github.com/mayank408" rel="noopener"><strong>Github</strong></a><strong>, </strong>and <a href="https://www.facebook.com/profile.php?id=100001106266064" rel="noopener"><strong>Facebook</strong></a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
