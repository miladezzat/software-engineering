---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg"
tags: [JavaScript]
description: Today we’ll look under the hood of JavaScript's V8 engine and
author: "Milad E. Fahmy"
title: "How JavaScript Works: Under the Hood of the V8 Engine"
created: "2021-08-15T19:28:38+02:00"
modified: "2021-08-15T19:28:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How JavaScript Works: Under the Hood of the V8 Engine</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9904740569d1a4ca1d5f.jpg" alt="How JavaScript Works: Under the Hood of the V8 Engine">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Today we’ll look under the hood of JavaScript's V8 engine and figure out how exactly JavaScript is executed.</p>
<p><a href="https://lyamkin.com/blog/what-are-web-standards-and-how-does-web-browser-work/" rel="noopener">In a previous article</a> we learned how the browser is structured and got a <a href="https://www.chromium.org/developers/how-tos/getting-around-the-chrome-source-code">high-level overview of Chromium</a>. Let's recap a bit so we're ready to dive in here.</p>
<h2 id="background">Background</h2>
<p><a href="https://www.w3.org/TR/">Web Standards</a> are a set of rules that the browser implements. They define and describe aspects of the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a>.</p>
<p><a href="https://www.w3.org/">W3C</a> is an international community that develops open standards for the Web. They make sure that everyone follows the same guidelines and doesn't have to support dozens of completely different environments.</p>
<p>A modern browser is quite a complicated piece of software with a codebase of <a href="https://www.openhub.net/p/chrome/analyses/latest/languages_summary">tens of millions of lines of code</a>. So it's split into a lot of modules responsible for different logic. </p>
<p>And two of the most important parts of a browser are the JavaScript engine and a rendering engine.</p>
<p><a href="https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.g60f92a5151_40_0">Blink</a> is a rendering engine that is responsible for the whole rendering pipeline including DOM trees, styles, events, and V8 integration. It parses the DOM tree, resolves styles, and determines the visual geometry of all the elements. </p>
<p>While continually monitoring dynamic changes via animation frames, Blink paints the content on your screen. The JS engine is a big part of the browser – but we haven't gotten into those details yet.</p>
<h3 id="javascript-engine-101">JavaScript Engine 101</h3>
<p>The JavaScript engine executes and compiles JavaScript into native machine code. Every major browser has developed its own JS engine: Google's Chrome uses V8, Safari uses JavaScriptCore, and Firefox  uses  SpiderMonkey. </p>
<p>We’ll work particularly with V8 because of its use in Node.js and Electron, but other engines are built in the same way.</p>
<p>Each step will include a link to the code responsible for it, so you can get familiar with the codebase and continue the research beyond this article. </p>
<p>We will work with <a href="https://github.com/v8/v8" rel="noopener">a mirror of V8 on GitHub</a> as it provides a convenient and well-known UI to navigate the codebase.</p>
<h2 id="preparing-the-source-code">Preparing the source code</h2>
<p>The first thing V8 needs to do is to download the source code. This can be done via a network, cache, or service workers.</p>
<p>Once the code is received, we need to change it in a way that the compiler can understand. This process is called parsing and consists of two parts: the scanner and the parser itself.</p>
<p><a href="https://github.com/v8/v8/blob/master/src/parsing/scanner.h" rel="noopener">The scanner</a> takes the JS file and converts it to the list of known tokens. There's a list of all JS tokens in <a href="https://github.com/v8/v8/blob/master/src/parsing/keywords.txt" rel="noopener">the keywords.txt file</a>.</p>
<p>The <a href="https://github.com/v8/v8/blob/master/src/parsing/parser.h" rel="noopener">parser</a> picks it up and creates an <a href="https://github.com/v8/v8/tree/master/src/ast" rel="noopener">Abstract Syntax Tree (AST)</a>: a tree representation of the source code. Each node of the tree denotes a construct occurring in the code. </p>
<p>Let’s have a look at a simple example:</p><pre><code class="language-javascript">function foo() {
let bar = 1;
return bar;
}</code></pre>
<p>This code will produce the following tree structure:</p>
<figcaption>Example of AST tree</figcaption>
</figure>
<p>You can execute this code by executing a preorder traversal (root, left, right):</p>
<ol>
<li>Define the <code>foo</code> function.</li>
<li>Declare the <code>bar</code> variable.</li>
<li>Assign <code>1</code> to <code>bar</code>.</li>
<li>Return <code>bar</code> out of the function.</li>
</ol>
<p>You will also see <code>VariableProxy</code> — an element that connects the abstract variable to a place in memory. The process of resolving <code>VariableProxy</code> is called <strong>Scope Analysis</strong>. </p>
<p>In our example, the result of the process would be all <code>VariableProxy</code>s pointing to the same <code>bar</code> variable.</p>
<h2 id="the-just-in-time-jit-paradigm">The Just-in-Time (JIT) paradigm</h2>
<p>Generally, for your code to execute, the programming language needs to be transformed into machine code. There are several approaches to how and when this transformation can happen.</p>
<p>The most common way of transforming the code is by performing ahead-of-time compilation. It works exactly as it sounds: the code is transformed into machine code before the execution of your program during the compilation stage. </p>
<p>This approach is used by many programming languages such as C++, Java, and others.</p>
<p>On the other side of the table, we have interpretation: each line of the code will be executed at runtime. This approach is usually taken by dynamically typed languages like JavaScript and Python because it’s impossible to know the exact type before execution.</p>
<p>Because ahead-of-time compilation can assess all the code together, it can provide better optimization and eventually produce more performant code. Interpretation, on the other side, is simpler to implement, but it’s usually slower than the compiled option.</p>
<p>To transform the code faster and more effectively for dynamic languages, a new approach was created called Just-in-Time (JIT) compilation. It combines the best from interpretation and compilation. </p>
<p>While using interpretation as a base method, V8 can detect functions that are used more frequently than others and compile them using type information from previous executions.</p>
<p>However, there is a chance that the type might change. We need to de-optimize compiled code and fallback to interpretation instead (after that, we can recompile the function after getting new type feedback). </p>
<p>Let's explore each part of JIT compilation in more detail.</p>
<h3 id="interpreter">Interpreter</h3>
<p>V8 uses an interpreter called <a href="https://github.com/v8/v8/blob/master/src/interpreter/interpreter.h" rel="noopener">Ignition</a>. Initially, it takes an abstract syntax tree and generates byte code. </p>
<p>Byte code instructions also have metadata, such as source line positions for future debugging. Generally, byte code instructions match the JS abstractions.</p>
<p>Now let's take our example and generate byte code for it manually:</p><pre><code class="language-bytecode">LdaSmi #1 // write 1 to accumulator
Star r0   // read to r0 (bar) from accumulator
Ldar r0   // write from r0 (bar) to accumulator
Return    // returns accumulator</code></pre>
<p>Ignition has something called an accumulator — a place where you can store/read values. </p>
<p>The accumulator avoids the need for pushing and popping the top of the stack. It’s also an implicit argument for many byte codes and typically holds the result of the operation. Return implicitly returns the accumulator.</p>
<p>You can check out all the available byte code <a href="https://github.com/v8/v8/blob/master/src/interpreter/bytecodes.h" rel="noopener">in the corresponding source code</a>. If you’re interested in how other JS concepts (like loops and async/await) are presented in byte code, I find it useful to read through these <a href="https://github.com/v8/v8/tree/master/test/cctest/interpreter/bytecode_expectations" rel="noopener">test expectations</a>.</p>
<h3 id="execution">Execution</h3>
<p>After the generation, Ignition will interpret the instructions using a table of handlers keyed by the byte code. For each byte code, Ignition can look up corresponding handler functions and execute them with the provided arguments.</p>
<p>As we mentioned before, the execution stage also provides the type feedback about the code. Let’s figure out how it’s collected and managed.</p>
<p>First, we should discuss how JavaScript objects can be represented in memory. In a naive approach, we can create a dictionary for each object and link it to the memory.</p>
<figcaption>The first approach for keeping the object</figcaption>
</figure>
<p>However, we usually have a lot of objects with the same structure, so it would not be efficient to store lots of duplicated dictionaries. </p>
<p>To solve this issue, V8 separates the object's structure from the values itself with <strong>Object Shapes</strong> (or Maps internally) and a vector of values in memory. </p>
<p>For example, we create an object literal:</p><pre><code class="language-javascript">let c = { x: 3 }
let d = { x: 5 }
c.y = 4</code></pre>
<p>In the first line, it will produce a shape <code>Map[c]</code> that has the property <code>x</code> with an offset 0. </p>
<p>In the second line, V8 will reuse the same shape for a new variable.</p>
<p>After the third line, it will create a new shape <code>Map[c1]</code> for property <code>y</code> with an offset 1 and create a link to the previous shape <code>Map[c]</code> .</p>
<figcaption>Example of object shapes</figcaption>
</figure>
<p>In the example above, you can see that each object can have a link to the object shape where for each property name, V8 can find an offset for the value in memory. </p>
<p>Object shapes are essentially linked lists. So if you write <code>c.x</code>, V8 will go to the head of the list, find <code>y</code> there, move to the connected shape, and finally it gets <code>x</code> and reads the offset from it. Then it’ll go to the memory vector and return the first element from it.</p>
<p>As you can imagine, in a big web app you’ll see a huge number of connected shapes. At the same time, it takes linear time to search through the linked list, making property lookups a really expensive operation. </p>
<p>To solve this problem in V8, you can use the <a href="https://github.com/v8/v8/tree/master/src/ic" rel="noopener"><strong>Inline Cache (IC)</strong></a>.<strong> </strong>It memorizes information on where to find properties on objects to reduce the number of lookups. </p>
<p>You can think about it as a listening site in your code: it tracks all <em>CALL</em>, <em>STORE</em>, and <em>LOAD</em> events within a function and records all shapes passing by. </p>
<p>The data structure for keeping IC is called <a href="https://github.com/v8/v8/blob/master/src/objects/feedback-vector.h" rel="noopener"><strong>Feedback Vector</strong></a><strong>. </strong>It’s just an array to keep all ICs for the function.</p><pre><code class="language-javascript">function load(a) {
return a.key;
}</code></pre>
<p>For the function above, the feedback vector will look like this:</p><pre><code class="language-javascript">[{ slot: 0, icType: LOAD, value: UNINIT }]</code></pre>
<p>It’s a simple function with only one IC that has a type of LOAD and value of <code>UNINIT</code>. This means it’s uninitialized, and we don’t know what will happen next. </p>
<p>Let’s call this function with different arguments and see how Inline Cache will change.</p><pre><code class="language-javascript">let first = { key: 'first' } // shape A
let fast = { key: 'fast' }   // the same shape A
let slow = { foo: 'slow' }   // new shape B
load(first)
load(fast)
load(slow)</code></pre>
<p>After the first call of the <code>load</code> function, our inline cache will get an updated value:</p><pre><code class="language-javascript">[{ slot: 0, icType: LOAD, value: MONO(A) }]</code></pre>
<p>That value now becomes monomorphic, which means this cache can only resolve to shape A.</p>
<p>After the second call, V8 will check the IC's value and it'll see that it’s monomorphic and has the same shape as the <code>fast</code> variable. So it will quickly return offset and resolve it.</p>
<p>The third time, the shape is different from the stored one. So V8 will manually resolve it and update the value to a polymorphic state with an array of two possible shapes.</p><pre><code class="language-javascript">[{ slot: 0, icType: LOAD, value: POLY[A,B] }]</code></pre>
<p>Now every time we call this function, V8 needs to check not only one shape but iterate over several possibilities. </p>
<p>For the faster code, you <em>can</em> initialize objects with the same type and not change their structure too much. </p>
<p><strong>Note: You can keep this in mind, but don’t do it if it leads to code duplication or less expressive code.</strong></p>
<p>Inline caches also keep track of how often they're called to decide if it’s a good candidate for optimizing the compiler — Turbofan.</p>
<h3 id="compiler">Compiler</h3>
<p>Ignition only gets us so far. If a function gets hot enough, it will be optimized in the compiler, <a href="https://github.com/v8/v8/tree/master/src/compiler" rel="noopener">Turbofan</a>, to make it faster.</p>
<p>Turbofan takes byte code from Ignition and type feedback (the Feedback Vector) for the function, applies a set of reductions based on it, and produces machine code.</p>
<p>As we saw before, type feedback doesn’t guarantee that it won’t change in the future. </p>
<p>For example, Turbofan optimized code based on the assumption that some addition always adds integers. </p>
<p>But what would happen if it received a string? This process is called <strong>deoptimization. </strong>We throw away optimized code, go back to interpreted code, resume execution, and update type feedback.</p>
<h2 id="summary">Summary</h2>
<p>In this article, we discussed JS engine implementation and the exact steps of how JavaScript is executed. </p>
<p>To summarize, let’s have a look at the compilation pipeline from the top.</p>
<figcaption>V8 overview</figcaption>
</figure>
<p>We’ll go over it step by step:</p>
<ol>
<li>It all starts with getting JavaScript code from the network.</li>
<li>V8 parses the source code and turns it into an Abstract Syntax Tree (AST).</li>
<li>Based on that AST, the Ignition interpreter can start to do its thing and produce bytecode.</li>
<li>At that point, the engine starts running the code and collecting type feedback.</li>
<li>To make it run faster, the byte code can be sent to the optimizing compiler along with feedback data. The optimizing compiler makes certain assumptions based on it and then produces highly-optimized machine code.</li>
<li>If, at some point, one of the assumptions turns out to be incorrect, the optimizing compiler de-optimizes and goes back to the interpreter.</li>
</ol>
<p>That’s it! If you have any questions about a specific stage or want to know more details about it, you can dive into source code or hit me up on <a href="https://twitter.com/ilyamkin" rel="noopener">Twitter</a>.</p>
<h3 id="further-reading">Further reading</h3>
<ul>
<li><a href="https://www.youtube.com/watch?v=voDhHPNMEzg" rel="noopener">“Life of a script</a>” video from Google</li>
<li><a href="https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/" rel="noopener">A crash course in JIT compilers</a> from Mozilla</li>
<li>Nice explanation of <a href="https://www.youtube.com/watch?v=u7zRSm8jzvA" rel="noopener">Inline Caches in V8</a></li>
<li>Great dive in <a href="https://mathiasbynens.be/notes/shapes-ics" rel="noopener">Object Shapes</a></li>
</ul>
<p><br></p>
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
