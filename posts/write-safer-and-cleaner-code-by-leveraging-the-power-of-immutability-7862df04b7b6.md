---
card: "https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg"
tags: [JavaScript]
description: by Guido Schmitz
author: "Milad E. Fahmy"
title: "Write safer and cleaner code by leveraging the power of “Immutability”"
created: "2021-08-15T19:52:10+02:00"
modified: "2021-08-15T19:52:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-computer-science tag-functional-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Write safer and cleaner code by leveraging the power of “Immutability”</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eO8-0-GT5ht8CR7TdK9knA.jpeg" alt="Write safer and cleaner code by leveraging the power of “Immutability”">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Guido Schmitz</p>
<h1 id="write-safer-and-cleaner-code-by-leveraging-the-power-of-immutability-">Write safer and cleaner code by leveraging the power of “Immutability”</h1>
<figcaption>Photo from <a href="https://unsplash.com" rel="noopener" target="_blank" title="">https://unsplash.com</a></figcaption>
</figure>
<p>Immutability is one of the building blocks of functional programming. It allows you to write safer and cleaner code. I’ll show you how you can achieve immutability through some JavaScript examples.</p>
<p><strong>According to Wikipedia (<a href="https://en.wikipedia.org/wiki/Immutable_object" rel="noopener">source</a>):</strong></p>
<blockquote>An immutable object (unchangeable object) is an object whose state cannot be modified after it is created. This is in contrast to a mutable object (changeable object), which can be modified after it is created. In some cases, an object is considered immutable even if some internally used attributes change but the object’s state appears to be unchanging from an external point of view.</blockquote>
<h3 id="immutable-arrays">Immutable Arrays</h3>
<p>Arrays are a good starting point to get a grasp of how immutability actually works. Lets take a look.</p><pre><code>const arrayA = [1, 2, 3];arrayA.push(4); const arrayB = arrayA;arrayB.push(5); console.log(arrayA); // [1, 2, 3, 4, 5]console.log(arrayB); // [1, 2, 3, 4, 5]</code></pre>
<p>This example assigns <strong>arrayB</strong> to a reference of <strong>arrayA</strong>, so the push method adds the value 5 into both variables. Our code mutates other values indirectly, which is not what we want to do. This violates the principle of immutability.</p>
<p>We can improve our example to be immutable by using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" rel="noopener">slice</a> function, and the behavior of the code is different.</p><pre><code>const arrayA = [1, 2, 3];arrayA.push(4); const arrayB = arrayA.slice(0);arrayB.push(5); console.log(arrayA); // [1, 2, 3, 4]console.log(arrayB); // [1, 2, 3, 4, 5]</code></pre>
<p>This is exactly what we want. The code doesn’t mutate the other values.</p>
<p>Remember: When using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" rel="noopener">push</a> to add a value to an array, you are <strong>mutating</strong> the array. You want to avoid mutating variables because it can cause side effects in your code. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" rel="noopener">slice</a> function returns a copy of the array.</p>
<h3 id="functions">Functions</h3>
<p>Now you know how to avoid mutating other values. How would you write functions to be “pure”? Pure is another word to call a function that doesn’t have any side effects and will not change state.</p>
<p>Let’s look at a function that leverages the same principle from the arrays example. First we create a function that mutates another value, then we improve the function to be “pure”.</p><pre><code>const add = (arrayInput, value) =&gt; {  arrayInput.push(value);   return arrayInput;};</code></pre><pre><code>const array = [1, 2, 3]; console.log(add(array, 4)); // [1, 2, 3, 4]console.log(add(array, 5)); // [1, 2, 3, 4, 5]</code></pre>
<p>So again, we are <strong>mutating</strong> our input which creates an unpredictable function. In the functional programming world, there is a golden rule around functions: <strong>a function with the same input should always return the same result</strong>.</p>
<p>The function above violates the golden rule. Every time our <strong>add</strong> function is called, it mutates the <strong>array</strong> variable and the result is different.</p>
<p>Let’s see how we can change the implementation of our <strong>add </strong>function so it’s immutable.</p><pre><code>const add = (arrayInput, value) =&gt; {  const copiedArray = arrayInput.slice(0);  copiedArray.push(value);   return copiedArray;}; const array = [1, 2, 3];</code></pre><pre><code>const resultA = add(array, 4);console.log(resultA); // [1, 2, 3, 4]</code></pre><pre><code>const resultB = add(array, 5);console.log(resultB); // [1, 2, 3, 5]</code></pre>
<p>Now we can call our function multiple times, and expect the output to be the same, based on the input. This is because we are no longer mutating the <strong>array</strong> variable. We can call this function a “pure function”.</p>
<blockquote><strong>Note:</strong> You can also use <strong>concat</strong>, instead of <strong>slice</strong> and <strong>push</strong>.<br>So: arrayInput.concat(value);</blockquote>
<p>We can use the <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noopener">spread syntax</a>, available in ES6, to shorten this function.</p><pre><code>const add = (arrayInput, value) =&gt; […arrayInput, value];</code></pre>
<h3 id="concurrency">Concurrency</h3>
<p>NodeJS applications use a concept called concurrency. A concurrent operation means that two computations can both make progress regardless of the other. If there are two threads, the second computation doesn’t need to wait for the completion of the first one in order to advance.</p>
<figcaption>Visualization of a concurrent operation</figcaption>
</figure>
<p>NodeJS makes concurrency possible with the event-loop. The event-loop repeatedly takes an event and fires any event handlers listening to that event one at a time. This model allows a NodeJS application to process a huge amount of requests. If you want to learn more, read <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick" rel="noopener">this article about the event-loop</a>.</p>
<p>What does immutability have to do with concurrency? Since multiple operations can change a value outside of the function’s scope in a concurrent way, this creates unreliable output and causes unexpected results. Be aware of a function that mutates variables outside of its scope, as this can be really dangerous.</p>
<h3 id="next-steps">Next steps</h3>
<p>Immutability is an important concept to understand on your journey to learn functional programming. You might want to take a look at <a href="https://facebook.github.io/immutable-js" rel="noopener">ImmutableJS</a>, written by developers at Facebook. The library provides certain immutable data structures like <strong>Map</strong>, <strong>Set</strong>, and <strong>List</strong>.</p>
<p><a href="https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2" rel="noopener"><strong>Immutable.js, persistent data structures and structural sharing</strong></a><br><a href="https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2" rel="noopener"><em>Why use Immutable.js instead of normal JavaScript object?</em>medium.com</a><a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" rel="noopener"><strong>Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code</strong></a><br><a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" rel="noopener"><em>Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is…</em>medium.freecodecamp.org</a></p>
<p><em>Click the ? below so other people will see this article here on Medium. Thanks for reading.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
