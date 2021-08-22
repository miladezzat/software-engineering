---
card: "https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg"
tags: [JavaScript]
description: "This is Part 2 of Javascript mastery — and probably the most "
author: "Milad E. Fahmy"
title: "How not to be afraid of the fun parts of JavaScript"
created: "2021-08-16T11:31:46+02:00"
modified: "2021-08-16T11:31:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-productivity tag-technology tag-learning-to-code tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How not to be afraid of the fun parts of JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*q6gPdqvGh9U6wkAg.jpg" alt="How not to be afraid of the fun parts of JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
next() {
const value = Math.random();
if ( value &lt; this.threshold ) {
return { done: false, value};
}
return { done: true};
},
[Symbol.iterator]: function() {
return this;
},
threshold: 0.7
}</code></pre><p>The beauty lies in the <code>[Symbol.iterator]</code> part of the iterator. By defining this, we allow our iterator to be exposed to a variety of functions and syntaxes that need an iterable protocol, not just an iterator protocol. What can you do with this?</p><p>Remember the spread operator? — That accepts an iterable protocol as well!</p><pre><code>&gt;[...iteratorObject]
[0.03085962239970308, 0.20649861146804716]</code></pre><p>And of course, works with <code>for...of</code>, where this story began.</p><pre><code>&gt;for (let val of iteratorObject) {
console.log(val);
}
0.6234680935767514
0.525812241023621</code></pre><p>Under the hood, we can now understand what is happening: All these methods are using the <code>[Symbol.iterator]</code> to generate an iterator, and iterating over that using <code>next</code>!</p><pre><code class="language-js">&gt;const iter = iteratorObject[Symbol.iterator]()
undefined
&gt;iter.next();
{done: false, value: 0.04474940944875905}
&gt;iter.next();
{done: true}</code></pre><p>Sure makes things easier when you don’t have to do that yourself. There’s one bit we haven’t touched on, that goes hand in hand with <code>for...of</code> loops, which is: <code>for...in</code>. What’s the difference? Let’s dive in, starting with our example!</p><h3 id="for-in-loops">For…In Loops</h3><pre><code class="language-js">&gt;for (const val in iteratorObject) {
console.log(val);
}
next
threshold</code></pre><p>On a simple glance, the difference seems obvious: <code>for...in</code> gets the properties, while <code>for...of</code> gets the values! Why is [Symbol.iterator] missing then? Well, there are 2 reasons.</p><p>There exists an enumerable property descriptor over properties. This determines whether the given property is enumerable, configurable or writable.</p><pre><code class="language-js">&gt; Object.getOwnPropertyDescriptors(iteratorObject)
{ next:
{ value: [Function: next],
writable: true,
enumerable: true,
configurable: true },
threshold:
{ value: 0.7,
writable: true,
enumerable: true,
configurable: true },
[Symbol(Symbol.iterator)]:
{ value: [Function: [Symbol.iterator]],
writable: true,
enumerable: true,
configurable: true } }</code></pre><p>The <code>for...in</code> loop loops over properties whose enumerable descriptor is set to true, as well as non-symbol properties. That explains it, right? Just to confirm, you could add a new property to the object, with enumerable set to false, and it wouldn’t show up in the <code>for...in</code> loop.</p><pre><code class="language-js">Object.defineProperty(iteratorObject, "newHiddenProperty", {
enumerable: false,
value: "hidden",
})</code></pre><p>Sure enough, it still isn’t there. <code>Object.keys()</code> uses the exact same methodology.</p><pre><code class="language-js">&gt;for(const val in iteratorObject) {
console.log(val);
}
next
threshold</code></pre><p>Coming back to the question that made us go down this rabbit hole — Why doesn’t <code>for(let val of obj)</code> simply work? Now you know, right? Because there doesn’t exist an iterable protocol on the Object prototype!</p><p>Why not? The simple answer is — language design choice. Why did they choose this? Because a lot of objects inherit from the base Object. Having an iterable protocol on the base Object would mean making all those objects iterable. For example: Your date objects become iterable, which doesn’t make any sense.</p><h3 id="foreach-loop">ForEach Loop</h3><p>This brings us to the last kind of for loops: the forEach loop. I’ve seen people get confused over why doesn’t <code>forEach</code> work everywhere ( like on Objects) and I’ll answer that question here.</p><p>Simple answer — <code>Array.prototype.forEach()</code>.</p><p>The <code>forEach</code> loop is defined only for arrays! So, you can use them only with arrays. Now, <code>forEach</code> doesn’t care where that array comes from. It could be a simple native array, or an array generated by Objects, like Object.keys().</p><p>To end the loops section, one common gotcha.</p><p>When using objects in JS as maps (or dictionaries, hashmap), you can run into issues when some key coincides with a property up the prototype chain.</p><p>Consider this example:</p><p>You have an object with certain keys you want to loop over.</p><pre><code class="language-js">const baseObject = {
a: 1,
b: 2,
someProperty: function() {
return 4;
}
}
const myObjectMap = Object.create(baseObject);
myObjectMap.c = 3; // key set in map for some reason.
for(let val in myObjectMap) { // this iterates up the chain!
console.log(val);
}
&gt; c
a
b
someProperty</code></pre><p>You probably just wanted to see <code>c</code>, the key you set. You can fix this via:</p><pre><code class="language-js">for (let val in myObjectMap) {
if (myObjectMap.hasOwnProperty(val)) {
console.log(val);
}
}
&gt; c</code></pre><p>Thus, two rules to avoid this problem:</p><ol><li>Always use <code>hasOwnProperty()</code> to check if the key you’re looking for exists in the object ( and not up the proto chain)</li><li>Never use the <code>hasOwnProperty</code> as key in your dictionaries / maps.</li></ol><p>If you have overridden <code>hasOwnProperty</code>, there is still a way to use it, since it’s a method of the Object prototype.</p><pre><code>myObjectMap.hasOwnProperty = 4;
for(let val in myObjectMap) {
if (myObjectMap.hasOwnProperty(val)) {
console.log(val);
}
}
&gt; Uncaught TypeError: myObjectMap.hasOwnProperty is not a function
at &lt;anonymous&gt;:4:21
// instead, we can do:
for(let val in myObjectMap) {
if (Object.prototype.hasOwnProperty.call(myObjectMap, val)) {
console.log(val);
}
}
&gt; c
hasOwnProperty</code></pre><p><a href="https://neilkakkar.com/How-not-to-be-afraid-of-Javascript-anymore.html#the-new-keyword-and-apply" rel="noopener">Remember <code>call</code> and <code>apply</code> from the last part?</a> This is one awesome way to use them.</p><h3 id="generator-functions">Generator Functions</h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="noopener">Generator functions</a> allow on-demand entry and exit from a function. The entry and exit points are fixed. It’s like a multiple entry visa.</p><p>They are very powerful tools to get difficult things done.</p><p>The way I think of generator functions is this: They are useful to create a list of values on the fly, without the overhead of having an array.</p><p>Why not just iterate over an array of values? Well, generators save space. There is no array to begin with — just the computation (or I/O) necessary to get the next element from the “array”.</p><p>Let’s dive into the mechanics of it.</p><p>Calling a generator function doesn’t execute the body but returns an iterator object for the function. The body is executed when you call the iterator’s <code>next()</code> method. What about the fixed exit point? The entire body isn’t executed, but only until the next <code>yield</code> expression in the body.</p><p>This <code>yield</code> expression also specifies the value to be returned.</p><p>Let’s make this concept concrete with an example. Let’s do the tweet example from Part 1.</p><pre><code class="language-js">function * generateTweets(userID, numberOfTweets) {
for(let i=0; i&lt; numberOfTweets; i++) {
const tweet = randomTweetGenerator(); // assume this gives you a string of words &lt; 280 characters.
yield { tweet, userID, tweetID: i};
}
}
const tweetList = generateTweets('neilkakkar', 3);
for( let tweet of tweetList) {
console.log(tweet);
}
&gt; {tweet: "hi", userID: "neilkakkar", tweetID: 0}
{tweet: "how's it going?", userID: "neilkakkar", tweetID: 1}
{tweet: "I'm automagic", userID: "neilkakkar", tweetID: 2}
console.log(tweetList.next());
&gt;    {value: undefined, done: true}</code></pre><p>Okay, there’s a lot going on here. Let’s break it down.</p><p>First, we have the function generator, which generates tweets based on userID and number of tweets to generate. This function would return an iterator object. Thus, that’s what <code>tweetList</code> is.</p><pre><code class="language-js">&gt; tweetList
generateTweets {&lt;suspended&gt;}
__proto__: Generator
[[GeneratorLocation]]: VM2668:1
[[GeneratorStatus]]: "suspended"
[[GeneratorFunction]]: ƒ * generateTweets(userID, numberOfTweets)
[[GeneratorReceiver]]: Window
[[Scopes]]: Scopes[3]</code></pre><p>Suspended means the generator isn’t closed/finished yet. So, there are values it can provide. We can access these via <code>tweetList.next()</code> - which would give us an object with two keys, <code>value</code> and <code>done</code>.</p><p>On the flip side, <code>for...of</code> loops understand the iteration protocol so they can iterate over the entire generator on their own!</p><p>That’s precisely why we can do the <code>for...of</code> on <code>tweetList</code> and get our tweets.</p><p>At this point, the generator is finished. The <code>for...of</code> loop consumes all values.</p><blockquote>Common gotcha: If there is a break statement inside the <code>for...of</code> loop, the generator closes too. So, you can’t reuse it again. See: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#Iterating_over_generators" rel="noopener">Don’t reuse generators in for..of loops</a>.</blockquote><p>We have here</p><pre><code class="language-js">&gt; tweetList
generateTweets {&lt;closed&gt;}
__proto__: Generator
[[GeneratorLocation]]: VM2668:1
[[GeneratorStatus]]: "closed"
[[GeneratorFunction]]: ƒ * generateTweets(userID, numberOfTweets)
[[GeneratorReceiver]]: Window</code></pre><p>Thus, when we log the next value in the next line, we get <code>done: true</code> as we’d expect - and no values.</p><p>That’s all for the example.</p><p>But, the story doesn’t end here. You can have generators yielding to generators as well! You do this via <code>yield *</code>.</p><pre><code>function * generateTweetsForSomeUsers(users, numberOfTweets) {
for(let user of users) {
yield * generateTweets(user, numberOfTweets)
}
}</code></pre><p>Generators can also <code>return</code> instead of <code>yield</code>. This causes the generator to finish.</p><p>Well, this has gone on long enough, I think I’ll save the other cool bits for the next parts. Fun fact? We will get rid of for loops altogether. Welcome to the world of Map, Filter and Reduce.</p><p>Read more of my blog posts on <a href="https://neilkakkar.com/js-part-2.html" rel="noopener">neilkakkar.com</a>.</p>
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
