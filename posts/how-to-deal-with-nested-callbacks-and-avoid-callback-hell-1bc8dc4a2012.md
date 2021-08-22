---
card: "https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg"
tags: [JavaScript]
description: "JavaScript is a strange language. Once in a while, you have t"
author: "Milad E. Fahmy"
title: "How to deal with nested callbacks and avoid “callback hell”"
created: "2021-08-16T11:29:11+02:00"
modified: "2021-08-16T11:29:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-productivity tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to deal with nested callbacks and avoid “callback hell”</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*csqpgoE3UUyh-aUsqycOfw.jpeg" alt="How to deal with nested callbacks and avoid “callback hell”">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is a strange language. Once in a while, you have to deal with a callback that’s in another callback that’s in yet another callback.</p><p>People affectionately call this pattern the <em>callback hell</em>.</p><p>It kinda looks like this:</p><pre><code class="language-javascript">firstFunction(args, function() {
secondFunction(args, function() {
thirdFunction(args, function() {
// And so on…
});
});
});</code></pre><p>This is JavaScript for you. It’s mind-boggling to see nested callbacks, but I don’t think it’s a “hell”. The “hell” can be manageable if you know what to do with it.</p><h3 id="on-callbacks">On callbacks</h3><p>I assume you know what callbacks are if you’re reading this article. If you don’t, please read <a href="https://zellwk.com/blog/callbacks/" rel="noopener">this article</a> for an introduction to callbacks before continuing. There, we talk about what callbacks are and why you use them in JavaScript.</p><h3 id="solutions-to-callback-hell">Solutions to callback hell</h3><p>There are four solutions to callback hell:</p><ol><li>Write comments</li><li>Split functions into smaller functions</li><li>Using Promises</li><li>Using Async/await</li></ol><p>Before we dive into the solutions, let’s construct a callback hell together. Why? Because it’s too abstract to see <code>firstFunction</code>, <code>secondFunction</code>, and <code>thirdFunction</code>. We want to make it concrete.</p><h3 id="constructing-a-callback-hell">Constructing a callback hell</h3><p>Let’s imagine we’re trying to make a burger. To make a burger, we need to go through the following steps:</p><ol><li>Get ingredients (we’re gonna assume it’s a beef burger)</li><li>Cook the beef</li><li>Get burger buns</li><li>Put the cooked beef between the buns</li><li>Serve the burger</li></ol><p>If these steps are synchronous, you’ll be looking at a function that resembles this:</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
const beef = getBeef();
const patty = cookBeef(beef);
const buns = getBuns();
const burger = putBeefBetweenBuns(buns, beef);
return burger;
};
const burger = makeBurger();
serve(burger);</code></pre><p>However, in our scenario, let’s say we can’t make the burger ourselves. We have to instruct a helper on the steps to make the burger. After we instruct the helper, we have to <em>WAIT</em> for the helper to finish before we begin the next step.</p><p>If we want to wait for something in JavaScript, we need to use a callback. To make the burger, we have to get the beef first. We can only cook the beef after we get the beef.</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
getBeef(function(beef) {
// We can only cook beef after we get it.
});
};</code></pre><p>To cook the beef, we need to pass <code>beef</code> into the <code>cookBeef</code> function. Otherwise, there’s nothing to cook! Then, we have to wait for the beef to get cooked.</p><p>Once the beef gets cooked, we get buns.</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
getBeef(function(beef) {
cookBeef(beef, function(cookedBeef) {
getBuns(function(buns) {
// Put patty in bun
});
});
});
};</code></pre><p>After we get the buns, we need to put the patty between the buns. This is where a burger gets formed.</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
getBeef(function(beef) {
cookBeef(beef, function(cookedBeef) {
getBuns(function(buns) {
putBeefBetweenBuns(buns, beef, function(burger) {
// Serve the burger
});
});
});
});
};</code></pre><p>Finally, we can serve the burger! But we can’t return <code>burger</code> from <code>makeBurger</code> because it’s asynchronous. We need to accept a callback to serve the burger.</p><pre><code class="language-javascript">const makeBurger = nextStep =&gt; {
getBeef(function (beef) {
cookBeef(beef, function (cookedBeef) {
getBuns(function (buns) {
putBeefBetweenBuns(buns, beef, function(burger) {
nextStep(burger)
})
})
})
})
}
// Make and serve the burger
makeBurger(function (burger) =&gt; {
serve(burger)
})</code></pre><p>(I had fun making this callback hell example ?).</p><h3 id="first-solution-to-callback-hell-write-comments">First solution to callback hell: Write comments</h3><p>The <code>makeBurger</code> callback hell is simple to understand. We can read it. It just… doesn’t look nice.</p><p>If you’re reading <code>makeBurger</code> for the first time, you may think “Why the hell do we need so many callbacks to make a burger? It doesn’t make sense!”.</p><p>In such a case, you’d want to leave comments to explain your code.</p><pre><code class="language-javascript">// Makes a burger
// makeBurger contains four steps:
//   1. Get beef
//   2. Cook the beef
//   3. Get buns for the burger
//   4. Put the cooked beef between the buns
//   5. Serve the burger (from the callback)
// We use callbacks here because each step is asynchronous.
//   We have to wait for the helper to complete the one step
//   before we can start the next step
const makeBurger = nextStep =&gt; {
getBeef(function(beef) {
cookBeef(beef, function(cookedBeef) {
getBuns(function(buns) {
putBeefBetweenBuns(buns, beef, function(burger) {
nextStep(burger);
});
});
});
});
};</code></pre><p>Now, instead of thinking “wtf?!” when you see the callback hell, you get an understanding of why it has to be written this way.</p><h3 id="second-solution-to-callback-hell-split-the-callbacks-into-different-functions">Second solution to callback hell: Split the callbacks into different functions</h3><p>Our callback hell example is already an example of this. Let me show you the step-by-step imperative code and you’ll see why.</p><p>For <code>getBeef</code>, our first callback, we have to go to the fridge to get the beef. There are two fridges in the kitchen. We need to go to the right fridge.</p><pre><code class="language-javascript">const getBeef = nextStep =&gt; {
const fridge = leftFright;
const beef = getBeefFromFridge(fridge);
nextStep(beef);
};</code></pre><p>To cook beef, we need to put the beef into an oven; turn the oven to 200 degrees, and wait for twenty minutes.</p><pre><code class="language-javascript">const cookBeef = (beef, nextStep) =&gt; {
const workInProgress = putBeefinOven(beef);
setTimeout(function() {
nextStep(workInProgress);
}, 1000 * 60 * 20);
};</code></pre><p>Now imagine if you have to write each of these steps in <code>makeBurger</code>… you’ll probably faint from the sheer amount of code!</p><p>For a concrete example on splitting callbacks into smaller functions, you can read <a href="https://zellwk.com/blog/callbacks#callback-hell" rel="noopener">this small section</a> in my callback article.</p><h3 id="third-solution-to-callback-hell-use-promises">Third solution to callback hell: Use promises</h3><p>I’m going to assume you know what promises are. If you don’t, please <a href="https://zellwk.com/blog/js-promises/" rel="noopener">read this article</a>.</p><p>Promises can make callback hell much easier to manage. Instead of the nested code you see above, you’ll have this:</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
return getBeef()
.then(beef =&gt; cookBeef(beef))
.then(cookedBeef =&gt; getBuns(beef))
.then(bunsAndBeef =&gt; putBeefBetweenBuns(bunsAndBeef));
};
// Make and serve burger
makeBurger().then(burger =&gt; serve(burger));</code></pre><p>If you take advantage of the single-argument style with promises, you can tweak the above to this:</p><pre><code class="language-javascript">const makeBurger = () =&gt; {
return getBeef()
.then(cookBeef)
.then(getBuns)
.then(putBeefBetweenBuns);
};
// Make and serve burger
makeBurger().then(serve);</code></pre><p>Much easier to read and manage.</p><p>But the question is how do you convert callback-based code into promise-based code.</p><h4 id="converting-callbacks-to-promises">Converting callbacks to promises</h4><p>To convert callbacks into promises, we need to create a new promise for each callback. We can <code>resolve</code> the promise when the callback is successful. Or we can <code>reject</code> the promise if the callback fails.</p><pre><code class="language-javascript">const getBeefPromise = _ =&gt; {
const fridge = leftFright;
const beef = getBeefFromFridge(fridge);
return new Promise((resolve, reject) =&gt; {
if (beef) {
resolve(beef);
} else {
reject(new Error(“No more beef!”));
}
});
};
const cookBeefPromise = beef =&gt; {
const workInProgress = putBeefinOven(beef);
return new Promise((resolve, reject) =&gt; {
setTimeout(function() {
resolve(workInProgress);
}, 1000 * 60 * 20);
});
};</code></pre><p>In practice, callbacks would probably be written for you already. If you use Node, each function that contains a callback will have the same syntax:</p><ol><li>The callback would be the last argument</li><li>The callback will always have two arguments. And these arguments are in the same order. (Error first, followed by whatever you’re interested in).</li></ol><pre><code class="language-javascript">// The function that’s defined for you
const functionName = (arg1, arg2, callback) =&gt; {
// Do stuff here
callback(err, stuff);
};
// How you use the function
functionName(arg1, arg2, (err, stuff) =&gt; {
if (err) {
console.error(err);
}
// Do stuff
});</code></pre><p>If your callback has the same syntax, you can use libraries like <a href="https://www.npmjs.com/package/es6-promisify" rel="noopener">ES6 Promisify </a>or <a href="https://www.npmjs.com/package/denodeify" rel="noopener">Denodeify</a> (de-node-ify) that callback into a promise. If you use Node v8.0 and above, you can use <a href="https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original" rel="noopener">util.promisify</a>.</p><p>All three of them work. You can choose any library to work with. There are slight nuances between each method, though. I’ll leave you to check their documentation for how-tos.</p><h3 id="fourth-solution-to-callback-hell-use-asynchronous-functions">Fourth solution to callback hell: Use asynchronous functions</h3><p>To use asynchronous functions, you need to know two things first:</p><ol><li>How to convert callbacks into promises (read above)</li><li>How to use asynchronous functions (<a href="https://zellwk.com/blog/async-await" rel="noopener">read this</a> if you need help).</li></ol><p>With asynchronous functions, you can write <code>makeBurger</code> as if it’s synchronous again!</p><pre><code class="language-javascript">const makeBurger = async () =&gt; {
const beef = await getBeef();
const cookedBeef = await cookBeef(beef);
const buns = await getBuns();
const burger = await putBeefBetweenBuns(cookedBeef, buns);
return burger;
};
// Make and serve burger
makeBurger().then(serve);</code></pre><p>There’s one improvement we can make to the <code>makeBurger</code> here. You can probably get two helpers to <code>getBuns</code> and <code>getBeef</code> at the same time. This means you can <code>await</code> them both with <code>Promise.all</code>.</p><pre><code class="language-javascript">const makeBurger = async () =&gt; {
const [beef, buns] = await Promise.all(getBeef, getBuns);
const cookedBeef = await cookBeef(beef);
const burger = await putBeefBetweenBuns(cookedBeef, buns);
return burger;
};
// Make and serve burger
makeBurger().then(serve);</code></pre><p>(Note: You can do the same with Promises… but the syntax isn’t as nice and as clear as async/await functions).</p><h3 id="wrapping-up">Wrapping up</h3><p>Callback hell isn’t as hellish as you think. There are four easy ways to manage callback hell:</p><ol><li>Write comments</li><li>Split functions into smaller functions</li><li>Using Promises</li><li>Using Async/await</li></ol><p>This article was originally posted on<em> <a href="https://zellwk.com/blog/nested-callbacks" rel="noopener">my blog</a>.</em><br>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
