---
card: "https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg"
tags: [JavaScript]
description: "by Ryan Yurkanin"
author: "Milad E. Fahmy"
title: "Syntactic Sugar and JavaScript Diabetes"
created: "2021-08-16T11:47:16+02:00"
modified: "2021-08-16T11:47:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-technology tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">Syntactic Sugar and JavaScript Diabetes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*54CJtxnsBXiO8Vlt-edX7w.jpeg" alt="Syntactic Sugar and JavaScript Diabetes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const DEFAULT_CONFIG = {
removeSpaces: false,
allowHighlighting: true,
priority: "high",
}
const config = { ...DEFAULT_CONFIG, ...userConfig };
const dinnerForTonight = amILazy ? "spaghetti" : "chicken";</code></pre><p><strong>Problem: </strong>I have a variable that depends on some condition being true or false.</p><p><strong>Diet Solution: </strong>This is basically just a really shorthand way to do an <code>if/else</code>!</p><pre><code class="language-js">const amILazy = true;
let dinnerForTonight = null;
if(amILazy) { dinnerForTonight = "spaghetti"; }
else { dinnerForTonight = "chicken"; }</code></pre><p><strong>When not to use it: </strong>Ternaries are a very simple way to express branching paths. In my subjective opinion, the worst thing about them is that they are infinitely nestable. So, if you’re a fan of job security, you could potentially write this brain melter.</p><pre><code class="language-js">const canYouFireMe = someCondition1 ?
(someCondition2 ? false : true) : false</code></pre><p>Classic example of JavaScript Diabetes. <strong>Less code does not mean more concise code.</strong></p><h3 id="object-spread">Object Spread</h3><p>Ah, the example from the beginning that broke my heart. In Javascript, when you see <code>...</code>, <strong>depending on context</strong> it’s going to be Object/Array Spread, or Object/Array Rest. We are going to cover Rest in a bit, so let’s put that on the back burner.</p><p>Spreading is basically taking a single object, pulling all of its key/value pairs out, and putting them into another object. Here’s a basic example of spreading two objects into a new object:</p><pre><code class="language-js">const DEFAULT_CONFIG = {
preserveWhitespace: true,
noBreaks: false,
foo: "bar",
};
const USER_CONFIG = {
noBreaks: true,
}
const config = { ...DEFAULT_CONFIG, ...USER_CONFIG };
// console.log(config) =&gt; {
//   preserveWhitespace: true,
//   noBreaks: true,
//   foo: "bar",
// }</code></pre><p><strong>Problem: </strong>I have an object, and I want to make another object that has all the same keys, with all the same values. Perhaps I want to do that with multiple objects, and if there are duplicate keys, choose which object’s keys win out.</p><p><strong>Diet solution: </strong>You could use <code>Object.assign()</code> to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">achieve a similar effect</a>. It takes any number of objects as arguments, gives priority to the right-most objects when it comes to keys, and ends up mutating the very first object given. A common error is not passing in an empty object as the first argument and accidentally mutating an argument you didn’t mean to.</p><p>If that’s hard to follow, you’ll be happy to know that Object Spread makes that impossible. Here’s an example that replicates the syntactic sugar version.</p><pre><code class="language-js">const DEFAULT_CONFIG = {
preserveWhitespace: true,
noBreaks: false,
foo: "bar",
};
const USER_CONFIG = {
noBreaks: true,
}
// if we didn't pass in an empty object here, config
// would point to DEFAULT_CONFIG, and default config would be
// mutated
const config = Object.assign({}, DEFAULT_CONFIG, USER_CONFIG);</code></pre><p>Object spread removes the chance for an accidental mutation. So you could do things, like update Redux State, without the fear of accidentally keeping a reference causing shallow comparison to fail.</p><p><strong>? Bonus ? Ar</strong>ray spread works very similarly! But since there aren’t any keys in arrays, it just kind of adds it to the new array like a <code>Array.Prototype.concat</code> call.</p><pre><code class="language-js">const arr1 = ['a', 'b', 'c'];
const arr2 = ['c', 'd', 'e'];
const arr3 = [...arr1, ...arr2];
// console.log(arr3) =&gt; ['a', 'b', 'c', 'c', 'd', 'e']</code></pre><h3 id="object-destructuring">Object Destructuring</h3><p>This one I see pretty commonly out in the wild. Now, we have our new config object from the previous example, and want to use it in our code. You may see something like this scattered about the codebase.</p><pre><code class="language-js">const { preserveWhiteSpace, noBreaks } = config;
// Now we have two new variables to play around with!
if (preservedWhitespace &amp;&amp; noBreaks) { doSomething(); };</code></pre><p><strong>Problem: </strong>Having to write out the whole path to a key in an object can get pretty heavy, and clog up a lot of the code. To be more concise, it would be better to make a variable out of the value to keep the code neat.</p><p><strong>Diet Solution: </strong>You can always do it the old fashioned way! That would look something like this.</p><pre><code class="language-js">const preserveWhitespace = config.preserveWhitepsace;
const noBreaks = config.noBreaks;
// Repeat forever until you have all the variables you need
if (preservedWhitespace &amp;&amp; noBreaks) { doSomething(); };</code></pre><p><strong>When not to use it: </strong>You can actually destructure an object out of an object, and continue to destructure deeper and deeper! Destructuring isn’t the only way to get a key out of an Object. If you find yourself only using destructuring for keys two or three layers deep, chances are you are doing more harm than good to the project.</p><p><strong><strong>? Bonus ? </strong></strong>Arrays also have destructuring, but they work based off index.</p><pre><code class="language-js">const arr1 = ['a', 'b']
const [x, y] = arr1
// console.log(y) =&gt; 'b'</code></pre><h3 id="object-rest">Object Rest</h3><p>Object Rest goes hand in hand with Object Destructuring, and is very easy to confuse with Object Spread. Once again we use the <code>...</code> operator, however the context is <strong>different</strong>. This time, it shows up while destructuring and is intended to gather leftover keys into one object. ?</p><pre><code class="language-js">const { preserveWhiteSpace, noBreaks, ...restOfKeys } = config;
// restOfKeys, is an object containing all the keys from config
// besides preserveWhiteSpace and noBreaks
// console.log(restOfKeys) =&gt; { foo: "bar" }</code></pre><p><strong>Problem: </strong>You want an object that has a subset of keys from another object.</p><p><strong>Diet Solution: </strong>You could use our old pal <code>Object.assign</code> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" rel="noopener">delete</a> any of the keys that you don’t need! ?</p><p><strong>When not to use it: </strong>Using it to create a new object with omitted keys is a common use case. Just be aware that the keys you are omitting in the destructure are still floating around and potentially taking up memory. If you’re not careful, this could cause a bug. ?</p><pre><code class="language-js">const restOfKeys = Object.assign({}, config);
delete restOfKeys.preserveWhiteSpace
delete restOfKeys.noBreaks</code></pre><p><strong><strong>? Bonus ? </strong></strong>Guess what? Arrays can do something similar and it works exactly the same!</p><pre><code class="language-js">const array = ['a', 'b', 'c', 'c', 'd', 'e'];
const [x, y, ...z] = array;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
