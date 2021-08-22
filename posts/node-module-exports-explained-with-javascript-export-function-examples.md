---
card: "/images/default.jpg"
tags: [Nodejs]
description: One of the most powerful things about software development is
author: "Milad E. Fahmy"
title: "Node Module Exports Explained – With JavaScript Export Function Examples"
created: "2021-08-15T19:27:13+02:00"
modified: "2021-08-15T19:27:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-modules ">
<header class="post-full-header">
<h1 class="post-full-title">Node Module Exports Explained – With JavaScript Export Function Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/cover-1.jpg 300w,
/news/content/images/size/w600/2021/02/cover-1.jpg 600w,
/news/content/images/size/w1000/2021/02/cover-1.jpg 1000w,
/news/content/images/size/w2000/2021/02/cover-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/cover-1.jpg" alt="Node Module Exports Explained – With JavaScript Export Function Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the most powerful things about software development is the ability to reuse and build upon the foundations of other people. This code sharing has helped software progress at an amazing rate.</p>
<p>Such a wonderful mechanism is critical on a micro-level for both individual projects and teams. </p>
<p>For Node.js, this process of code sharing – both within individual projects and in external npm dependencies – is facilitated using <code>module.exports</code> or <code>exports</code>.</p>
<h1 id="how-node-modules-work">How Node Modules Work</h1>
<p>How do we use module exports to plug an external module, or sensibly break our project down into multiple files (modules)?</p>
<p>The Node.js module system was created because its designers didn't want it to suffer from the same problem of broken global scope, like its browser counterpart. They implemented <a href="https://en.wikipedia.org/wiki/CommonJS">CommonJS specification</a> to achieve this.</p>
<p>The two important pieces of the puzzle are <code>module.exports</code> and the <code>require</code> function.</p>
<h2 id="how-module-exports-works">How module.exports works</h2>
<p><code>module.exports</code> is actually a property of the <code>module</code> object. This is how the <code>module</code> object looks like when we <code>console.log(module)</code>:</p><pre><code class="language-bash">Module {
id: '.',
path: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me',
exports: {},
parent: null,
filename: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/index.js',
loaded: false,
children: [],
paths: [
'/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/node_modules',
'/Users/stanleynguyen/Documents/Projects/node_modules',
'/Users/stanleynguyen/Documents/node_modules',
'/Users/stanleynguyen/node_modules',
'/Users/node_modules',
'/node_modules'
]
}
</code></pre>
<p>The above object basically describes an encapsulated module from a JS file with <code>module.exports</code> being the exported component of any types - object, function, string, and so on. Default exporting in a Node.js module is as simple as this:</p><pre><code class="language-js">module.exports = function anExportedFunc() {
return "yup simple as that";
};
</code></pre>
<p>There's another way of exporting from a Node.js module called "named export". Instead of assigning the whole <code>module.exports</code> to a value, we would assign individual properties of the default <code>module.exports</code> object to values. Something like this:</p><pre><code class="language-js">module.exports.anExportedFunc = () =&gt; {};
module.exports.anExportedString = "this string is exported";
// or bundled together in an object
module.exports = {
anExportedFunc,
anExportedString,
};
</code></pre>
<p>Named export can also be done more concisely with the module-scoped <code>exports</code> predefined variable, like this:</p><pre><code class="language-js">exports.anExportedFunc = () =&gt; {};
exports.anExportedString = "this string is exported";
</code></pre>
<p>However, assigning the whole <code>exports</code> variable to a new value won't work (we will discuss why in a later section), and often confuses Node.js developers.</p><pre><code class="language-js">// This wont work as we would expect
exports = {
anExportedFunc,
anExportedString,
};
</code></pre>
<p>Imagine that Node.js module exports are shipping containers, with <code>module.exports</code> and <code>exports</code> as port personnel whom we would tell which "ship" (that is, values) that we want to get to a "foreign port" (another module in the project). </p>
<p>Well, "default export" would be telling <code>module.exports</code> which "ship" to set sail while "named export" would be loading different containers onto the ship that <code>module.exports</code> is going to set sail.</p>
<figcaption>My "flagship" analogy for Node.js module.exports' role</figcaption>
</figure>
<p>Now that we have sent the ships sailing, how do our "foreign ports" reel in the exported ship?</p>
<h2 id="how-the-node-js-require-keyword-works">How the Node.js require keyword works</h2>
<p>On the receiving end, Node.js modules can import by <code>require</code>-ing the exported value.</p>
<p>Let's say this was written in <code>ship.js</code>:</p><pre><code class="language-js">...
module.exports = {
containerA,
containerB,
};
</code></pre>
<p>We can easily import the "ship" in our <code>receiving-port.js</code>:</p><pre><code class="language-js">// importing the whole ship as a single variable
const ship = require("./ship.js");
console.log(ship.containerA);
console.log(ship.containerB);
// or directly importing containers through object destructuring
const { containerA, containerB } = require("./ship.js");
console.log(containerA);
console.log(containerB);
</code></pre>
<p>An important point to note about this foreign port operator – <code>require</code> – is that the person is adamant about receiving ships that were <strong>sent by <code>module.exports</code> from the other side of the sea</strong>. This leads us to the next section where we will address a common point of confusion.</p>
<h2 id="module-exports-vs-exports-what-is-the-difference-and-which-do-you-use-when"><code>module.exports</code> vs <code>exports</code> – What is the difference and which do you use when?</h2>
<p>Now that we have gone through the basics of module exporting and requiring, it's time to address one of the common sources of confusion in Node.js modules.</p>
<p>This is a common module exports mistake that people who are starting out with Node.js often make. They assign <code>exports</code> to a new value, thinking that it's the same as "default exporting" through <code>module.exports</code>. </p>
<p>However, this will not work because:</p>
<ul>
<li><code>require</code> will only use the value from <code>module.exports</code></li>
<li><code>exports</code> is a module-scoped variable that refers to <code>module.exports</code> initially</li>
</ul>
<p>So by assigning <code>exports</code> to a new value, we're effectively pointing the value of <code>exports</code> to another reference away from the initial reference to the same object as <code>module.exports</code>. </p>
<p>If you want to learn more about this technical explanation, <a href="https://nodejs.org/api/modules.html#modules_exports_shortcut">the Node.js official documentation</a> is a good place to start.</p>
<p>Back to the analogy that we made previously using ships and operators: <code>exports</code> is another port personnel that we could inform about the outgoing ship. At the start, both <code>module.exports</code> and <code>exports</code> have the same piece of information about the outgoing "ship". </p>
<p>But what if we tell <code>exports</code> that the outgoing ship will be a different one (that is, assigning <code>exports</code> to a completely new value)? Then, whatever we tell them afterwards (like assigning properties of <code>exports</code> to values) won't be on the ship that <code>module.exports</code> is actually setting sail to be received by <code>require</code>.</p>
<p>On the other hand, if we only tell <code>exports</code> to "load some containers on the outgoing ship" (assigning properties of <code>exports</code> to value), we would actually end up loading "containers" (that is, property value) onto the ship that is actually being set sail.</p>
<p>Based on the common mistake explained above, we could definitely develop some good conventions around using CommonJS modules in Node.js.</p>
<h2 id="node-js-export-best-practices-a-sensible-strategy">Node.js export best practices – a sensible strategy</h2>
<p>Of course the convention offered below is entirely from my own assessments and reasonings. If you have a stronger case for an alternative, please don't hesitate to tweet me <a href="https://twitter.com/stanley_ngn">@stanley_ngn</a>.</p>
<p>The main things I want to achieve with this convention are:</p>
<ul>
<li>eliminating confusion around <code>exports</code> vs <code>module.exports</code></li>
<li>ease of reading and higher glanceability with regards to module exporting</li>
</ul>
<p>So I'm proposing that we consolidate exported values at the bottom of the file like this:</p><pre><code class="language-js">// default export
module.exports = function defaultExportedFunction() {};
// named export
module.exports = {
something,
anotherThing,
};
</code></pre>
<p>Doing so would eliminate any disadvantages in terms of conciseness that <code>module.exports</code> have versus shorthand <code>exports</code>. This would remove all incentives for us to use the confusing and potentially harmful <code>exports</code>. </p>
<p>This practice would also make it very easy for code readers to glance at and learn about exported values from a specific module.</p>
<h2 id="going-beyond-commonjs">Going beyond CommonJS</h2>
<p>There's a new, and better (of course!) standard that's recently been introduced to Node.js called <code>ECMAScript modules</code>. <a href="https://nodejs.org/api/esm.html">ECMAScript modules</a> used to only be available in code that would eventually need transpilation from <a href="https://babeljs.io/">Babel</a>, or as part of an experimental feature in Node.js version 12 or older. </p>
<p>It's a pretty simple and elegant way of handling module exporting. The gist of it can be summed up with the default export being:</p><pre><code class="language-js">export default function exportedFunction() {}
</code></pre>
<p>and the named export looking like this:</p><pre><code class="language-js">// named exports on separate LOC
export const constantString = "CONSTANT_STRING";
export const constantNumber = 5;
// consolidated named exports
export default {
constantString,
constantNumber,
};
</code></pre>
<p>These values can then easily be imported on the receiving end, like this:</p><pre><code class="language-js">// default exported value
import exportedFunction from "exporting-module.js";
// import named exported values through object destructuring
import { constantString, constantNumber } from "exporting-module.js";
</code></pre>
<p>This results in no more confusion from <code>module.exports</code> vs <code>exports</code> and a nice, human-sounding syntax! </p>
<p>There are definitely projects that are yet to be migrated to Node.js version 14 and above and so can't use this new syntax. </p>
<p>However, if you do have a chance (because you are starting a new project, or your project has successfully been migrated to Node.js 14 and above), there's no reason not to switch to this awesome futuristic way of doing things.</p>
<h3 id="thank-you-for-reading-">Thank you for reading!</h3>
<p>Last but not least, if you like my writings, please head over to <a href="https://blog.stanleynguyen.me/">my blog</a> for similar commentaries and follow <a href="https://twitter.com/stanley_ngn">me on Twitter</a>. 🎉</p>
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
