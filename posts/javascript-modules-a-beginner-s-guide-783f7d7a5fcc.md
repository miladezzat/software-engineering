---
card: "https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg"
tags: [JavaScript]
description: "by Preethi Kasireddy"
author: "Milad E. Fahmy"
title: "JavaScript Modules: A Beginner’s Guide"
created: "2021-08-16T10:30:21+02:00"
modified: "2021-08-16T10:30:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-web-development tag-education tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Modules: A Beginner’s Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg" alt="JavaScript Modules: A Beginner’s Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
// We keep these variables private inside this closure scope
var myGrades = [93, 95, 88, 0, 55, 91];
var average = function() {
var total = myGrades.reduce(function(accumulator, item) {
return accumulator + item}, 0);
return 'Your average grade is ' + total / myGrades.length + '.';
}
var failing = function(){
var failingGrades = myGrades.filter(function(item) {
return item &lt; 70;});
return 'You failed ' + failingGrades.length + ' times.';
}
console.log(failing());
}());
// ‘You failed 2 times.’</code></pre><p>With this construct, our anonymous function has its own evaluation environment or “closure”, and then we immediately evaluate it. This lets us hide variables from the parent (global) namespace.</p><p>What’s nice about this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables, like so:</p><pre><code class="language-js">var global = 'Hello, I am a global variable :)';
(function () {
// We keep these variables private inside this closure scope
var myGrades = [93, 95, 88, 0, 55, 91];
var average = function() {
var total = myGrades.reduce(function(accumulator, item) {
return accumulator + item}, 0);
return 'Your average grade is ' + total / myGrades.length + '.';
}
var failing = function(){
var failingGrades = myGrades.filter(function(item) {
return item &lt; 70;});
return 'You failed ' + failingGrades.length + ' times.';
}
console.log(failing());
console.log(global);
}());
// 'You failed 2 times.'
// 'Hello, I am a global variable :)'</code></pre><p>Note that the parenthesis around the anonymous function are required, because statements that begin with the keyword <em>function</em> are always considered to be function declarations (remember, you can’t have unnamed function declarations in JavaScript.) Consequently, the surrounding parentheses create a function expression instead. If you’re curious, you can <a href="http://stackoverflow.com/questions/1634268/explain-javascripts-encapsulated-anonymous-function-syntax" rel="noopener">read more here</a>.</p><p><strong>Example 2: Global import </strong><br>Another popular approach used by libraries like <a href="https://github.com/jquery/jquery/tree/master/src" rel="noopener">jQuery</a> is global import. It’s similar to the anonymous closure we just saw, except now we pass in globals as parameters:</p><pre><code class="language-js">(function (globalVariable) {
// Keep this variables private inside this closure scope
var privateFunction = function() {
console.log('Shhhh, this is private!');
}
// Expose the below methods via the globalVariable interface while
// hiding the implementation of the method within the
// function() block
globalVariable.each = function(collection, iterator) {
if (Array.isArray(collection)) {
for (var i = 0; i &lt; collection.length; i++) {
iterator(collection[i], i, collection);
}
} else {
for (var key in collection) {
iterator(collection[key], key, collection);
}
}
};
globalVariable.filter = function(collection, test) {
var filtered = [];
globalVariable.each(collection, function(item) {
if (test(item)) {
filtered.push(item);
}
});
return filtered;
};
globalVariable.map = function(collection, iterator) {
var mapped = [];
globalUtils.each(collection, function(value, key, collection) {
mapped.push(iterator(value));
});
return mapped;
};
globalVariable.reduce = function(collection, iterator, accumulator) {
var startingValueMissing = accumulator === undefined;
globalVariable.each(collection, function(item) {
if(startingValueMissing) {
accumulator = item;
startingValueMissing = false;
} else {
accumulator = iterator(accumulator, item);
}
});
return accumulator;
};
}(globalVariable));
</code></pre><p>In this example, <strong><em>globalVariable</em></strong> is the only variable that’s global. The benefit of this approach over anonymous closures is that you declare the global variables upfront, making it crystal clear to people reading your code.</p><p><strong>Example 3: Object interface</strong><br>Yet another approach is to create modules using a self-contained object interface, like so:</p><pre><code class="language-js">var myGradesCalculate = (function () {
// Keep this variable private inside this closure scope
var myGrades = [93, 95, 88, 0, 55, 91];
// Expose these functions via an interface while hiding
// the implementation of the module within the function() block
return {
average: function() {
var total = myGrades.reduce(function(accumulator, item) {
return accumulator + item;
}, 0);
return'Your average grade is ' + total / myGrades.length + '.';
},
failing: function() {
var failingGrades = myGrades.filter(function(item) {
return item &lt; 70;
});
return 'You failed ' + failingGrades.length + ' times.';
}
}
})();
myGradesCalculate.failing(); // 'You failed 2 times.'
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'</code></pre><p>As you can see, this approach lets us decide what variables/methods we want to keep private (e.g. <strong><em>myGrades</em></strong>) and what variables/methods we want to expose by putting them in the return statement (e.g. <strong><em>average</em></strong> &amp; <strong><em>failing</em></strong>).</p><p><strong>Example 4: Revealing module pattern</strong><br>This is very similar to the above approach, except that it ensures all methods and variables are kept private until explicitly exposed:</p><pre><code class="language-js">var myGradesCalculate = (function () {
// Keep this variable private inside this closure scope
var myGrades = [93, 95, 88, 0, 55, 91];
var average = function() {
var total = myGrades.reduce(function(accumulator, item) {
return accumulator + item;
}, 0);
return'Your average grade is ' + total / myGrades.length + '.';
};
var failing = function() {
var failingGrades = myGrades.filter(function(item) {
return item &lt; 70;
});
return 'You failed ' + failingGrades.length + ' times.';
};
// Explicitly reveal public pointers to the private functions
// that we want to reveal publicly
return {
average: average,
failing: failing
}
})();
myGradesCalculate.failing(); // 'You failed 2 times.'
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'</code></pre><p>That may seem like a lot to take in, but it’s just the tip of the iceberg when it comes to module patterns. Here are a few of the resources I found useful in my own explorations:</p><ul><li><a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript" rel="noopener">Learning JavaScript Design Patterns</a> by Addy Osmani: a treasure trove of details in an impressively succinct read</li><li><a href="http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html" rel="noopener">Adequately Good by Ben Cherry</a>: a useful overview with examples of advanced usage of the module pattern</li><li><a href="https://carldanley.com/js-module-pattern/" rel="noopener">Blog of Carl Danley</a>: module pattern overview and resources for other JavaScript patterns.</li></ul><h3 id="commonjs-and-amd">CommonJS and AMD</h3><p>The approaches above all have one thing in common: the use of a single global variable to wrap its code in a function, thereby creating a private namespace for itself using a closure scope.</p><p>While each approach is effective in its own way, they have their downsides.</p><p>For one, as a developer, you need to know the right dependency order to load your files in. For instance, let’s say you’re using Backbone in your project, so you include the script tag for Backbone’s source code in your file.</p><p>However, since Backbone has a hard dependency on Underscore.js, the script tag for the Backbone file can’t be placed before the Underscore.js file.</p><p>As a developer, managing dependencies and getting these things right can sometimes be a headache.</p><p>Another downside is that they can still lead to namespace collisions. For example, what if two of your modules have the same name? Or what if you have two versions of a module, and you need both?</p><p>So you’re probably wondering: can we design a way to ask for a module’s interface without going through the global scope?</p><p>Fortunately, the answer is yes.</p><p>There are two popular and well-implemented approaches: CommonJS and AMD.</p><h4 id="commonjs">CommonJS</h4><p>CommonJS is a volunteer working group that designs and implements JavaScript APIs for declaring modules.</p><p>A CommonJS module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to <em>require</em> in their programs. If you’ve programmed in Node.js, you’ll be very familiar with this format.</p><p>With CommonJS, each JavaScript file stores modules in its own unique module context (just like wrapping it in a closure). In this scope, we use the <em>module.exports</em> object to expose modules, and <em>require</em> to import them.</p><p>When you’re defining a CommonJS module, it might look something like this:</p><pre><code class="language-js">function myModule() {
this.hello = function() {
return 'hello!';
}
this.goodbye = function() {
return 'goodbye!';
}
}
module.exports = myModule;</code></pre><p>We use the special object module and place a reference of our function into <em>module.exports</em>. This lets the CommonJS module system know what we want to expose so that other files can consume it.</p><p>Then when someone wants to use <em>myModule</em>, they can require it in their file, like so:</p><pre><code class="language-js">var myModule = require('myModule');
var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'</code></pre><p>There are two obvious benefits to this approach over the module patterns we discussed before:</p><p>1. Avoiding global namespace pollution<br>2. Making our dependencies explicit</p><p>Moreover, the syntax is very compact, which I personally love.</p><p>Another thing to note is that CommonJS takes a server-first approach and synchronously loads modules. This matters because if we have three other modules we need to <em>require</em>, it’ll load them one by one.</p><p>Now, that works great on the server but, unfortunately, makes it harder to use when writing JavaScript for the browser. Suffice it to say that reading a module from the web takes a <em>lot</em> longer than reading from disk. For as long as the script to load a module is running, it blocks the browser from running anything else until it finishes loading. It behaves this way because the JavaScript thread stops until the code has been loaded. (I’ll cover how we can work around this issue in Part 2 when we discuss module bundling. For now, that’s all we need to know).</p><h4 id="amd">AMD</h4><p>CommonJS is all well and good, but what if we want to load modules asynchronously? The answer is called Asynchronous Module Definition, or AMD for short.</p><p>Loading modules using AMD looks something like this:</p><pre><code class="language-js">define(['myModule', 'myOtherModule'], function(myModule, myOtherModule) {
console.log(myModule.hello());
});</code></pre><p>What’s happening here is that the <strong><em>define</em></strong> function takes as its first argument an array of each of the module’s dependencies. These dependencies are loaded in the background (in a non-blocking manner), and once loaded <strong><em>define</em></strong> calls the callback function it was given.</p><p>Next, the callback function takes, as arguments, the dependencies that were loaded — in our case, <strong><em>myModule</em></strong> and <strong><em>myOtherModule — </em></strong>allowing the function to use these dependencies. Finally, the dependencies themselves must also be defined using the <strong><em>define</em></strong> keyword.</p><p>For example, <strong><em>myModule</em></strong> might look like this:</p><pre><code class="language-js">define([], function() {
return {
hello: function() {
console.log('hello');
},
goodbye: function() {
console.log('goodbye');
}
};
});</code></pre><p>So again, unlike CommonJS, AMD takes a browser-first approach alongside asynchronous behavior to get the job done. (Note, there are a lot of people who strongly believe that dynamically loading files piecemeal as you start to run code isn’t favorable, which we’ll explore more when in the next section on module-building).</p><p>Aside from asynchronicity, another benefit of AMD is that your modules can be objects, functions, constructors, strings, JSON and many other types, while CommonJS only supports objects as modules.</p><p>That being said, AMD isn’t compatible with io, filesystem, and other server-oriented features available via CommonJS, and the function wrapping syntax is a bit more verbose compared to a simple <em>require</em> statement.</p><h4 id="umd">UMD</h4><p>For projects that require you to support both AMD and CommonJS features, there’s yet another format: Universal Module Definition (UMD).</p><p>UMD essentially creates a way to use either of the two, while also supporting the global variable definition. As a result, UMD modules are capable of working on both client and server.</p><p>Here’s a quick taste of how UMD goes about its business:</p><pre><code class="language-js">(function (root, factory) {
if (typeof define === 'function' &amp;&amp; define.amd) {
// AMD
define(['myModule', 'myOtherModule'], factory);
} else if (typeof exports === 'object') {
// CommonJS
module.exports = factory(require('myModule'), require('myOtherModule'));
} else {
// Browser globals (Note: root is window)
root.returnExports = factory(root.myModule, root.myOtherModule);
}
}(this, function (myModule, myOtherModule) {
// Methods
function notHelloOrGoodbye(){}; // A private method
function hello(){}; // A public method because it's returned (see below)
function goodbye(){}; // A public method because it's returned (see below)
// Exposed public methods
return {
hello: hello,
goodbye: goodbye
}
}));</code></pre><p>For more examples of UMD formats, check out this <a href="https://github.com/umdjs/umd" rel="noopener">enlightening repo</a> on GitHub.</p><h3 id="native-js">Native JS</h3><p>Phew! Are you still around? I haven’t lost you in the woods here? Good! Because we have *one more* type of module to define before we’re done.</p><p>As you probably noticed, none of the modules above were native to JavaScript. Instead, we’ve created ways to <em>emulate</em> a modules system by using either the module pattern, CommonJS or AMD.</p><p>Fortunately, the smart folks at TC39 (the standards body that defines the syntax and semantics of ECMAScript) have introduced built-in modules with ECMAScript 6 (ES6).</p><p>ES6 offers up a variety of possibilities for importing and exporting modules which others have done a great job explaining — here are a few of those resources:</p><ul><li><a href="http://jsmodules.io/cjs.html" rel="noopener">jsmodules.io</a></li><li><a href="http://exploringjs.com/es6/ch_modules.html" rel="noopener">exploringjs.com</a></li></ul><p>What’s great about ES6 modules relative to CommonJS or AMD is how it manages to offer the best of both worlds: compact and declarative syntax <em>and</em> asynchronous loading, plus added benefits like better support for cyclic dependencies.</p><p>Probably my favorite feature of ES6 modules is that imports are <em>live</em> read-only views of the exports. (Compare this to CommonJS, where imports are copies of exports and consequently not alive).</p><p>Here’s an example of how that works:</p><pre><code class="language-js">// lib/counter.js
var counter = 1;
function increment() {
counter++;
}
function decrement() {
counter--;
}
module.exports = {
counter: counter,
increment: increment,
decrement: decrement
};
// src/main.js
var counter = require('../../lib/counter');
counter.increment();
console.log(counter.counter); // 1</code></pre><p>In this example, we basically make two copies of the module: one when we export it, and one when we require it.</p><p>Moreover, the copy in main.js is now disconnected from the original module. That’s why even when we increment our counter it still returns 1 — because the counter variable that we imported is a disconnected copy of the counter variable from the module.</p><p>So, incrementing the counter will increment it in the module, but won’t increment your copied version. The only way to modify the copied version of the counter variable is to do so manually:</p><pre><code class="language-js">counter.counter++;
console.log(counter.counter); // 2</code></pre><p>On the other hand, ES6 creates a live read-only view of the modules we import:</p><pre><code class="language-js">// lib/counter.js
export let counter = 1;
export function increment() {
counter++;
}
export function decrement() {
counter--;
}
// src/main.js
import * as counter from '../../counter';
console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2</code></pre><p>Cool stuff, huh? What I find really compelling about live read-only views is how they allow you to split your modules into smaller pieces without losing functionality.</p><p>Then you can turn around and merge them again, no problem. It just “works.”</p><h3 id="looking-forward-bundling-modules">Looking forward: bundling modules</h3><p>Wow! Where does the time go? That was a wild ride, but I sincerely hope it gave you a better understanding of modules in JavaScript.</p><p>In the next section I’ll walk through module bundling, covering core topics including:</p><ul><li>Why we bundle modules</li><li>Different approaches to bundling</li><li>ECMAScript’s module loader API</li><li>…and more. :)</li></ul><p><em>NOTE: To keep things simple, I skipped over some of the nitty-gritty details (think: cyclic dependencies) in this post. If I left out anything important and/or fascinating, please let me know in the comments!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
