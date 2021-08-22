---
card: "https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png"
tags: [JavaScript]
description: by William Woodhead
author: "Milad E. Fahmy"
title: "Immutable.js is intimidating. Here’s how to get started."
created: "2021-08-15T19:46:32+02:00"
modified: "2021-08-15T19:46:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-redux tag-full-stack tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Immutable.js is intimidating. Here’s how to get started.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*INNhwAgxu9lkEdMBz0hp9Q.png" alt="Immutable.js is intimidating. Here’s how to get started.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by William Woodhead</p>
<h1 id="immutable-js-is-intimidating-here-s-how-to-get-started-">Immutable.js is intimidating. Here’s how to get started.</h1>
<figcaption>Image <a href="https://facebook.github.io/immutable-js/" rel="noopener" target="_blank" title="">source</a></figcaption>
</figure>
<p>You hear that you should be using <a href="https://facebook.github.io/immutable-js/" rel="noopener">Immutable</a>. You know you should, but you aren’t quite sure why. And when you go to the <a href="https://facebook.github.io/immutable-js/docs/#/" rel="noopener">docs</a>, the first snippet of code looks like this:</p><pre><code>identity&lt;T&gt;(value: T): T</code></pre>
<p>You think: Nah… maybe another time.</p>
<p>So, here’s a simple and fast introduction to get you started with Immutable. You won’t regret it:</p>
<p><em>At <a href="https://www.pilcro.com/?utm_source=medium&amp;utm_medium=immutable&amp;utm_campaign=awareness" rel="noopener">Pilcro</a>, we introduced <a href="https://facebook.github.io/immutable-js/" rel="noopener">Immutable</a> into our applications about 12 months ago. It has been one of the best decisions we have made. Our apps are now much more readable, robust, bug-free and predictable.</em></p>
<h3 id="the-basics"><strong>The basics</strong></h3>
<h4 id="converting-into-immutable">Converting into Immutable</h4>
<p>In normal JavaScript, we know two common data types: <strong>Object</strong> <code>{}</code> and <strong>Array</strong> <code>[]</code>.</p>
<p>To translate these into Immutable:</p>
<ul>
<li><strong>Object </strong><code>{}</code><strong> </strong>becomes <strong>Map </strong><code>Map({})</code></li>
<li><strong>Array</strong> <code>[]</code> becomes <strong>List</strong> <code>List([])</code></li>
</ul>
<p>To convert normal JavaScript into Immutable, we can use the <strong>Map</strong>, <strong>List,</strong> or <strong>fromJS</strong> functions that Immutable provides:</p><pre><code>import { Map, List, fromJS } from 'immutable';</code></pre><pre><code>// Normal Javascript</code></pre><pre><code>const person = {  name: 'Will',  pets: ['cat', 'dog']};</code></pre><pre><code>// To create the equivalent in Immutable:</code></pre><pre><code>const immutablePerson = Map({  name: 'Will',  pets: List(['cat', 'dog'])});</code></pre><pre><code>// Or ...</code></pre><pre><code>const immutablePerson = fromJS(person);</code></pre>
<p><code>fromJS</code> is a useful function that converts nested data into Immutable. It creates <code>Maps</code> and <code>Lists</code> in the conversion.</p>
<h4 id="converting-back-from-immutable-to-normal-javascript">Converting back from Immutable to normal JavaScript</h4>
<p>It is very simple to get your data back from Immutable to plain old JavaScript. You just call the <code>.toJS()</code> method on your Immutable object.</p><pre><code>import { Map } from 'immutable';</code></pre><pre><code>const immutablePerson = Map({ name: 'Will' });const person = immutablePerson.toJS();</code></pre><pre><code>console.log(person); // prints { name: 'Will' };</code></pre>
<blockquote><strong><em>Keynote:</em> <em>Data structures should be thought of as EITHER plain JavaScript OR Immutable.</em></strong></blockquote>
<h3 id="start-using-immutable">Start using Immutable</h3>
<p>Before explaining why Immutable is so useful, here are three simple examples of where Immutable can help you out right away.</p>
<h4 id="1-getting-a-nested-value-from-an-object-without-checking-if-it-exists">1. Getting a nested value from an object without checking if it exists</h4>
<p>First in normal JavaScript:</p><pre><code>const data = { my: { nested: { name: 'Will' } } };</code></pre><pre><code>const goodName = data.my.nested.name;console.log(goodName); // prints Will</code></pre><pre><code>const badName = data.my.lovely.name;// throws error: 'Cannot read name of undefined'</code></pre>
<p>And now in Immutable:</p><pre><code>const data = fromJS({ my: { nested: { name: 'Will' } } });</code></pre><pre><code>const goodName = data.getIn(['my', 'nested', 'name']);console.log(goodName); // prints Will</code></pre><pre><code>const badName = data.getIn(['my', 'lovely', 'name']);console.log(badName); // prints undefined - no error thrown</code></pre>
<p>In the above examples, the normal JavaScript code throws an error, whereas the Immutable one does not.</p>
<p>This is because we use the <code>getIn()</code> function to get a nested value. If the key path doesn’t exist (that is, the object isn’t structured as you thought), it returns undefined rather than throwing an error.</p>
<p>You don’t need to check for undefined values all the way down the nested structure like you would in normal JavaScript:</p><pre><code>if (data &amp;&amp; data.my &amp;&amp; data.my.nested &amp;&amp; data.my.nested.name) { ...</code></pre>
<p>This simple feature makes your code much more readable, less wordy, and much more robust.</p>
<h4 id="2-chaining-manipulations">2. Chaining manipulations</h4>
<p>First in normal JavaScript:</p><pre><code>const pets = ['cat', 'dog'];pets.push('goldfish');pets.push('tortoise');console.log(pets); // prints ['cat', 'dog', 'goldfish', 'tortoise'];</code></pre>
<p>Now in Immutable:</p><pre><code>const pets = List(['cat', 'dog']);const finalPets = pets.push('goldfish').push('tortoise');</code></pre><pre><code>console.log(pets.toJS()); // prints ['cat', 'dog'];</code></pre><pre><code>console.log(finalPets.toJS());// prints ['cat', 'dog', 'goldfish', 'tortoise'];</code></pre>
<p>Because <code>List.push()</code> returns the result of the operation, we can “chain” the next operation right onto it. In normal JavaScript, the <code>push</code> function returns the length of the new array.</p>
<p>This is a very simple example of chaining, but it illustrates the real power of Immutable.</p>
<p>This frees you up to do all sorts of data manipulation in a manner that is more functional and more concise.</p>
<blockquote><strong><em>Keynote: Operations on an Immutable object return the result of the operation.</em></strong></blockquote>
<h4 id="3-immutable-data">3. Immutable data</h4>
<p>It’s called Immutable after all, so we need to talk about why this is important!</p>
<p>Let’s say you create an Immutable object and you update it — with Immutable, the initial data structure is not changed. It is immutable. (lower case here!)</p><pre><code>const data = fromJS({ name: 'Will' });const newNameData = data.set('name', 'Susie');</code></pre><pre><code>console.log(data.get('name')); // prints 'Will'console.log(newNameData.get('name')); // prints 'Susie'</code></pre>
<p>In this example we can see how the original “data” object is not changed. This means that you will not get any unpredictable behaviour when you update the name to “Susie.”</p>
<p>This simple feature is really powerful, particularly when you are building complex applications. It is the backbone of what Immutable is all about.</p>
<blockquote><strong><em>Keynote</em>:<em> Operations on an Immutable object do not change the object, but instead create a new object.</em></strong></blockquote>
<h3 id="why-immutable-is-useful">Why Immutable is useful</h3>
<p>The developers at <a href="https://www.facebook.com" rel="noopener">Facebook</a> sum up the benefits on the <a href="https://facebook.github.io/immutable-js/" rel="noopener">homepage</a> of the docs, but it’s quite tricky to read. Here is my take on why you should start using Immutable:</p>
<h4 id="your-data-structures-change-predictably">Your data structures change predictably</h4>
<p>Because your data structures are immutable, you are in charge of how your data structures are operated upon. In complex web applications, this means you don’t get funny re-rendering issues when you change a bit of data that is being accessed for the UI.</p>
<h4 id="robust-data-manipulation"><strong>Robust data manipulation</strong></h4>
<p>By using Immutable to manipulate data structures, your manipulations themselves are much less error-prone. Immutable does a lot of the hard work for you — it catches errors, offers default values, and builds nested data structures out-of-the-box.</p>
<h4 id="concise-readable-code">Concise readable code</h4>
<p>The functional design of Immutable can be confusing at first, but once you get used to it, function chaining makes your code much shorter and more readable. This is great for teams working on the same code base.</p>
<h3 id="next-steps">Next steps</h3>
<p>The learning curve is undeniably tricky with Immutable, but really worth it. Get started just having a play around.</p>
<p>Here are the keynotes that were noted as we went through. If you can keep these in your mind, you will take to Immutable like a duck to water!</p>
<ol>
<li>Data structures should be thought of as EITHER plain JavaScript OR Immutable.</li>
<li>Operations on an Immutable object return the result of the operation.</li>
<li>Operations on an Immutable object do not change the object itself, but instead create a new object.</li>
</ol>
<p>Good luck!</p>
<p><em>If you liked this story, please ? and please share with others. Also please check out my company p<a href="https://www.pilcro.com/?utm_source=medium&amp;utm_medium=immutable&amp;utm_campaign=awareness" rel="noopener">ilcro.com.</a> Pilcro is brand software for G-Suite — for marketers and brand agencies.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
