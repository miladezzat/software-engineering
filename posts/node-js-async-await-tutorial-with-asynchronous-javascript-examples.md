---
card: "/images/default.jpg"
tags: [node.js]
description: One of the hardest concepts to wrap your head around when you
author: "Milad E. Fahmy"
title: "Node.js Async Await Tutorial – With Asynchronous JavaScript Examples"
created: "2021-08-15T19:26:26+02:00"
modified: "2021-08-15T19:26:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-node-js tag-javascript tag-asynchronous tag-asyncawait ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js Async Await Tutorial – With Asynchronous JavaScript Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/yoda.jpeg 300w,
/news/content/images/size/w600/2021/05/yoda.jpeg 600w,
/news/content/images/size/w1000/2021/05/yoda.jpeg 1000w,
/news/content/images/size/w2000/2021/05/yoda.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/yoda.jpeg" alt="Node.js Async Await Tutorial – With Asynchronous JavaScript Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the hardest concepts to wrap your head around when you're first learning JavaScript is the asynchronous processing model of the language. For the majority of us, learning asynchronous programming looks pretty much like this</p>
<figcaption>If your first time working with async wasn't like this, please consider yourself a genius</figcaption>
</figure>
<p>As hard as it is to pick up, async programming is critical to learn if you want to use JavaScript and Node.js to build web applications and servers – because JS code is <strong>asynchronous by default</strong>.</p>
<h2 id="asynchronous-programming-fundamentals">Asynchronous Programming Fundamentals</h2>
<p>So what exactly is the asynchronous processing model, or the <code>non-blocking I/O</code> model (which you've likely heard of if you're a Node.js user)? </p>
<p>Here's a TL;DR description: in an async processing model, when your application engine interacts with external parties (like a file system or network), it doesn't wait until getting a result from those parties. Instead, it continues on to subsequent tasks and only comes back to those previous external parties once it's gotten a signal of a result.</p>
<p>To understand the default async processing model of Node.js, let's have a look at a hypothetical Santa's workshop. Before any work can begin, Santa will have to read each of the lovely letters from kids around the world.</p>
<p>He will then figure out the requested gift, translate the item name into <a href="https://en.wikipedia.org/wiki/Elvish_languages">the Elvish language</a>, and then pass the instruction to each of our hard working elves who have different specialisations: wooden toys for Red, stuffed toys for Blue, and robotic toys for Green.</p>
<p>This year, due to <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic">the COVID-19 pandemic</a>, only half Santa's elves can come to his workshop to help. Still, because he's wise, Santa decides that instead of waiting for each elf to finish preparing a gift (that is, working synchronously), he will continue translating and passing out instructions from his pile of letters.</p>
<p>So on and so forth...</p>
<p>As he is just about to read another letter, Red informs Santa that he has completed<br>preparing the first gift. Santa then receives the present from Red, and puts it to one side.</p>
<p>And then he continues translating and passing instructions from the next letter.</p>
<p>As he only needs to wrap a pre-made flying robot, Green can quickly finish preparation and pass the present to Santa.</p>
<p>After a whole day of hard and asynchronous work, Santa and the elves manage to complete all present preparation. With his improved asynchronous model of working, Santa's workshop is finished in record time despite being hard-hit by the pandemic.</p>
<p>So that's the basic idea of an asynchronous or non-blocking I/O processing model. Now let's see how it's done in Node.js specifically.</p>
<h2 id="the-node-js-event-loop">The Node.js Event Loop</h2>
<p>You might have heard that Node.js is single-threaded. However, to be exact, only the event loop in Node.js, which interacts with a pool of background C++ worker threads, is single-threaded. There are four important components to the Node.js processing model:</p>
<ul>
<li>Event Queue: Tasks that are declared in a program, or returned from the processing thread pool via <a href="https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/">callbacks</a>. (The equivalent of this in our Santa's workshop is the pile of letters for Santa.)</li>
<li>Event Loop: The main Node.js thread that facilitates event queues and worker thread pools to carry out operations – both async and synchronous. (This is Santa. 🎅)</li>
<li>Background thread pool: These threads do the actual processing of tasks, which<br>might be I/O blocking (for example calling and waiting for a response from an external API). (These are the hardworking elves 🧝🧝‍♀️🧝‍♂️ from our workshop.)</li>
</ul>
<p>You can visualize this processing model as below:</p>
<figcaption>Diagram courtesy of c-sharpcorner.com</figcaption>
</figure>
<p>Let's look at an actual snippet of code to see these in action:</p><pre><code class="language-js">console.log("Hello");
https.get("https://httpstat.us/200", (res) =&gt; {
console.log(`API returned status: ${res.statusCode}`);
});
console.log("from the other side");
</code></pre>
<p>If we execute the above piece of code, we would get this in our standard output:</p><pre><code class="language-bash">Hello
from the other side
API returned status: 200
</code></pre>
<p>So how does the Node.js engine carry out the above snippet of code? It starts with three functions in the call stack:</p>
<p>"Hello" is then printed to the console with the corresponding function call removed from the stack.</p>
<p>The function call to <code>https.get</code> (that is, making a get request to the corresponding URL) is then executed and delegated to the worker thread pool with a callback attached.</p>
<p>The next function call to <code>console.log</code> gets executed, and "from the other side" is printed to the console.</p>
<p>Now that the network call has returned a response, the callback function call will then get queued inside the callback queue. Note that this step could happen before the immediate previous step (that is, "from the other side" getting printed), though normally that's not the case.</p>
<p>The callback then gets put inside our call stack:</p>
<p>and then we will see "API returned status: 200" in our console, like this:</p>
<p>By facilitating the callback queue and call stack, the event loop in Node.js efficiently executes our JavaScript code in an asynchronous way.</p>
<h2 id="a-synchronous-history-of-javascript-node-js-async-await">A synchronous history of JavaScript &amp; Node.js async/await</h2>
<p>Now that you have good understanding of asynchronous execution and the inner-workings of the Node.js event loop, let's dive into async/await in JavaScript. We'll look at how it's worked through time, from the original callback-driven implementation to the latest shiny async/await keywords.</p>
<h3 id="callbacks-in-javascript">Callbacks in JavaScript</h3>
<p>The OG way of handling the asynchronous nature of JavaScript engines was through callbacks. Callbacks are basically functions which will be executed, <strong>usually</strong>, at the end of synchronous or I/O blocking operations. </p>
<p>A straightforward example of this pattern is the built-in <code>setTimeout</code> function that will wait for a certain number of milliseconds before executing the callback.</p><pre><code class="language-js">setTimeout(2000, () =&gt; {
console.log("Hello");
});
</code></pre>
<p>While it's convenient to just attach callbacks to blocking operations, this pattern also introduces a couple of problems:</p>
<ul>
<li>Callback hell</li>
<li>Inversion of control (not the good kind!)</li>
</ul>
<h4 id="what-is-callback-hell">What is callback hell?</h4>
<p>Let's look at an example with Santa and his elves again. To prepare a present, Santa's workshop would have to carry out a few different steps (with each taking different amounts of time simulated using <code>setTimeout</code>):</p><pre><code class="language-js">function translateLetter(letter, callback) {
return setTimeout(2000, () =&gt; {
callback(letter.split("").reverse().join(""));
});
}
function assembleToy(instruction, callback) {
return setTimeout(3000, () =&gt; {
const toy = instruction.split("").reverse().join("");
if (toy.includes("wooden")) {
return callback(`polished ${toy}`);
} else if (toy.includes("stuffed")) {
return callback(`colorful ${toy}`);
} else if (toy.includes("robotic")) {
return callback(`flying ${toy}`);
}
callback(toy);
});
}
function wrapPresent(toy, callback) {
return setTimeout(1000, () =&gt; {
callback(`wrapped ${toy}`);
});
}
</code></pre>
<p>These steps need to be carried out in a specific order:</p><pre><code class="language-js">translateLetter("wooden truck", (instruction) =&gt; {
assembleToy(instruction, (toy) =&gt; {
wrapPresent(toy, console.log);
});
});
// This will produced a "wrapped polished wooden truck" as the final result
</code></pre>
<p>As we do things this way, adding more steps to the process would mean pushing the inner callbacks to the right and ending up in callback hell like this:</p>
<p>Callbacks look sequential, but at times the execution order doesn't follow what is shown on your screen. With multiple layers of nested callbacks, you can easily lose track of the big picture of the whole program flow and produce more bugs or just become slower when writing your code.</p>
<p>So how do you solve this problem? Simply modularise the nested callbacks into named functions and you will have a nicely left-aligned program that's easy to read.</p><pre><code class="language-js">function assembleCb(toy) {
wrapPresent(toy, console.log);
}
function translateCb(instruction) {
assembleToy(instruction, assembleCb);
}
translateLetter("wooden truck", translateCb);
</code></pre>
<h4 id="inversion-of-control">Inversion of Control</h4>
<p>Another problem with the callback pattern is that you don't decide how the higher-order functions will execute your callbacks. They might execute it at the end of the function, which is conventional, but they could also execute it at the start of the function or execute it multiple times. </p>
<p>Basically, you are at the mercy of your dependency owners, and you might never know when they will break your code.</p>
<p>To solve this problem, as a dependency user, there's not much you can do about it. However, if you're ever a dependency owner yourself, please always:</p>
<ul>
<li>Stick to the conventional callback signature with error as the first argument</li>
<li>Execute a callback only once at the end of your higher-order function</li>
<li>Document anything out-of-convention that is absolutely required and always aim for backward compatibility</li>
</ul>
<h3 id="promises-in-javascript">Promises in JavaScript</h3>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a> were created to solve these above mentioned problems with callbacks. Promises make sure that JavaScript users:</p>
<ul>
<li>Stick to a specific convention with their signature <code>resolve</code> and <code>reject</code> functions.</li>
<li>Chain the callback functions to a well-aligned and top-down flow.</li>
</ul>
<p>Our previous example with Santa's workshop preparing presents can be rewritten with promises like so:</p><pre><code class="language-js">function translateLetter(letter) {
return new Promise((resolve, reject) =&gt; {
setTimeout(2000, () =&gt; {
resolve(letter.split("").reverse().join(""));
});
});
}
function assembleToy(instruction) {
return new Promise((resolve, reject) =&gt; {
setTimeout(3000, () =&gt; {
const toy = instruction.split("").reverse().join("");
if (toy.includes("wooden")) {
return resolve(`polished ${toy}`);
} else if (toy.includes("stuffed")) {
return resolve(`colorful ${toy}`);
} else if (toy.includes("robotic")) {
return resolve(`flying ${toy}`);
}
resolve(toy);
});
});
}
function wrapPresent(toy) {
return new Promise((resolve, reject) =&gt; {
setTimeout(1000, () =&gt; {
resolve(`wrapped ${toy}`);
});
});
}
</code></pre>
<p>with the steps being carried out nicely in a chain:</p><pre><code class="language-js">translateLetter("wooden truck")
.then((instruction) =&gt; {
return assembleToy(instruction);
})
.then((toy) =&gt; {
return wrapPresent(toy);
})
.then(console.log);
// This would produce the exact same present: wrapped polished wooden truck
</code></pre>
<p>However, promises are not without problems either. Data in each eye of our chain have a different scope and only have access data passed from the immediate previous step or parent scope. </p>
<p>For example, our gift-wrapping step might want to use data from the translation step:</p><pre><code class="language-js">function wrapPresent(toy, instruction) {
return Promise((resolve, reject) =&gt; {
setTimeout(1000, () =&gt; {
resolve(`wrapped ${toy} with instruction: "${instruction}`);
});
});
}
</code></pre>
<p>This is rather <a href="https://livebook.manning.com/book/c-plus-plus-concurrency-in-action/chapter-3/1">a classic "memory sharing" problem with threading</a>. To solve this, instead of using variables in the parent's scope, we should use <code>Promise.all</code> and <a href="https://blog.golang.org/codelab-share">"share data by communicating, rather than communicate by sharing data"</a>.</p><pre><code class="language-js">translateLetter("wooden truck")
.then((instruction) =&gt; {
return Promise.all([assembleToy(instruction), instruction]);
})
.then((toy, instruction) =&gt; {
return wrapPresent(toy, instruction);
})
.then(console.log);
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
</code></pre>
<h3 id="async-await-in-javascript">Async/Await in JavaScript</h3>
<p>Last but definitely not least, the shiniest kid around the block is async/await. It is very easy to use but it also has some risks.</p>
<p>Async/await solves the memory sharing problems of promises by having everything under the same scope. Our previous example can be rewritten easily like so:</p><pre><code class="language-js">(async function main() {
const instruction = await translateLetter("wooden truck");
const toy = await assembleToy(instruction);
const present = await wrapPresent(toy, instruction);
console.log(present);
})();
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
</code></pre>
<p>However, as much as it's easy to write asynchronous code with async/await, it's also easy to make mistakes that create performance loopholes. </p>
<p>Let's now localise our example Santa's workshop scenario to wrapping presents and loading them on the sleigh.</p><pre><code class="language-js">function wrapPresent(toy) {
return Promise((resolve, reject) =&gt; {
setTimeout(5000 * Math.random(), () =&gt; {
resolve(`wrapped ${toy}`);
});
});
}
function loadPresents(presents) {
return Promise((resolve, reject) =&gt; {
setTimeout(5000, () =&gt; {
let itemList = "";
for (let i = 0; i &lt; presents.length; i++) {
itemList += `${i}. ${presents[i]}\n`;
}
});
});
}
</code></pre>
<p>A common mistake you might make is carrying out the steps this way:</p><pre><code class="language-js">(async function main() {
const presents = [];
presents.push(await wrapPresent("wooden truck"));
presents.push(await wrapPresent("flying robot"));
presents.push(await wrapPresent("stuffed elephant"));
const itemList = await loadPresents(presents);
console.log(itemList);
})();
</code></pre>
<p>But does Santa need to <code>await</code> for each of the presents to be wrapped one by one before loading? Definitely not! The presents should be wrapped concurrently. You might make this mistake often as it's so easy to write <code>await</code> without thinking about the blocking nature of the keyword.</p>
<p>To solve this problem, we should bundle the gift wrapping steps together and execute them all at once:</p><pre><code class="language-js">(async function main() {
const presents = await Promise.all([
wrapPresent("wooden truck"),
wrapPresent("flying robot"),
wrapPresent("stuffed elephant"),
]);
const itemList = await loadPresents(presents);
console.log(itemList);
})();
</code></pre>
<p>Here are some recommended steps to tackle concurrency performance issue in your Node.js code:</p>
<ul>
<li>Identify hotspots with multiple consecutive awaits in your code</li>
<li>Check if they are dependent on each other (that is one function uses data returned from another)</li>
<li>Make independent function calls concurrent with <code>Promise.all</code></li>
</ul>
<h2 id="wrapping-up-the-article-not-christmas-presents-">Wrapping up (the article, not Christmas presents 😂)</h2>
<p>Congratulations on reaching the end of this article, I tried my best to make<br>this post shorter, but the async topic in JavaScript is just so broad. </p>
<p>Here are some key takeaways:</p>
<ul>
<li>Modularise your JavaScript callbacks to avoid callback hell</li>
<li>Stick to <a href="https://gist.github.com/sunnycmf/b2ad4f80a3b627f04ff2">the convention for JS callbacks</a></li>
<li>Share data by communicating through <code>Promise.all</code> when using promises</li>
<li>Be careful about the performance implication of async/await code</li>
</ul>
<p>We ❤️ JavaScript :)</p>
<h2 id="thank-you-for-reading-">Thank you for reading!</h2>
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
