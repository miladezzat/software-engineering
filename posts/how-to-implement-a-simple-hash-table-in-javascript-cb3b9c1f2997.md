---
card: "https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png"
tags: [Data Structures]
description: by Alex Nadalin
author: "Milad E. Fahmy"
title: "How to implement a simple hash table in JavaScript"
created: "2021-08-15T19:46:16+02:00"
modified: "2021-08-15T19:46:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-structures tag-computer-science tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement a simple hash table in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png" alt="How to implement a simple hash table in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Alex Nadalin</p>
<p>How beautiful is <code>{}</code>?</p>
<p>It lets you store values by key, and retrieve them in a very cost-efficient manner (<code>O(1)</code>, more on this later).</p>
<p>In this post I want to implement a very basic hash table, and have a look at its inner workings to explain one of the most ingenious ideas in computer science.</p>
<h3 id="the-problem">The problem</h3>
<p>Imagine you’re building a new programming language: you start by having pretty simple types (strings, integers, floats, …) and then proceed to implement very basic data structures. First you come up with the array (<code>[]</code>), then comes the hash table (otherwise known as dictionary, associative array, hashmap, map, and…the list goes on).</p>
<p>Ever wondered how they work? How they’re so damn fast?</p>
<p>Well, let’s say that JavaScript did not have have <code>{}</code> or <code>new Map()</code>, and let’s implement our very own <code>DumbMap</code>!</p>
<h3 id="a-note-on-complexity">A note on complexity</h3>
<p>Before we get the ball rolling, we need to understand how complexity of a function works: Wikipedia has a good refresher on <a href="https://en.wikipedia.org/wiki/Computational_complexity_theory" rel="noopener">computational complexity</a>, but I’ll add a brief explanation for the lazy ones.</p>
<p>Complexity measures how many steps are required by our function — the fewer steps, the faster the execution (also known as “running time”).</p>
<p>Let’s take a look at the following snippet:</p><pre><code>function fn(n, m) {  return n * m}</code></pre>
<p>The computational complexity (from now simply “complexity”) of <code>fn</code> is <code>O(1)</code>, meaning that it’s constant (you can read <code>O(1)</code> as “<em>the cost is one</em>”): no matter what arguments you pass, the platform that runs this code only has to do one operation (multiply <code>n</code> into <code>m</code>). Again, since it’s one operation, the cost is referred as <code>O(1)</code>.</p>
<p>Complexity is measured by assuming arguments of your function could have very large values. Let’s look at this example:</p><pre><code>function fn(n, m) {  let s = 0</code></pre><pre><code>  for (i = 0; i &lt; 3; i++) {    s += n * m  }</code></pre><pre><code>  return s}</code></pre>
<p>You would think its complexity is <code>O(3)</code>, right?</p>
<p>Again, since complexity is measured in the context of very large arguments, we tend to “drop” constants and consider <code>O(3)</code> the same as <code>O(1)</code>. So, even in this case, we would say that the complexity of <code>fn</code> is <code>O(1)</code>. No matter what the value of <code>n</code> and <code>m</code> are, you always end up doing three operations — which, again, is a constant cost (therefore <code>O(1)</code>).</p>
<p>Now this example is a little bit different:</p><pre><code>function fn(n, m) {  let s = []</code></pre><pre><code>  for (i = 0; i &lt; n; i++) {    s.push(m)  }</code></pre><pre><code>  return s}</code></pre>
<p>As you see, we’re looping as many times as the value of <code>n</code>, which could be in the millions. In this case, we define the complexity of this function as <code>O(n)</code>, as you will need to do as many operations as the value of one of your arguments.</p>
<p>Other examples?</p><pre><code>function fn(n, m) {  let s = []</code></pre><pre><code>  for (i = 0; i &lt; 2 * n; i++) {    s.push(m)  }</code></pre><pre><code>  return s}</code></pre>
<p>This examples loops <code>2 * n</code> times, meaning the complexity should be <code>O(2n)</code>. Since we mentioned that constants are “ignored” when calculating the complexity of a function, this example is also classified as <code>O(n)</code>.</p>
<p>One more?</p><pre><code>function fn(n, m) {  let s = []</code></pre><pre><code>  for (i = 0; i &lt; n; i++) {    for (i = 0; i &lt; n; i++) {      s.push(m)    }  }</code></pre><pre><code>  return s}</code></pre>
<p>Here we are looping over <code>n</code> and looping again inside the main loop, meaning the complexity is “squared” (<code>n * n</code>): if <code>n</code> is 2, we will run <code>s.push(m)</code> 4 times, if 3 we will run it 9 times, and so on.</p>
<p>In this case, the complexity of the function is referred as <code>O(n²)</code>.</p>
<p>One last example?</p><pre><code>function fn(n, m) {  let s = []</code></pre><pre><code>  for (i = 0; i &lt; n; i++) {    s.push(n)  }</code></pre><pre><code>  for (i = 0; i &lt; m; i++) {    s.push(m)  }</code></pre><pre><code>  return s}</code></pre>
<p>In this case we don’t have nested loops, but we loop twice over two different arguments: the complexity is defined as <code>O(n+m)</code>. Crystal clear.</p>
<p>Now that you’ve just gotten a brief introduction (or refresher) on complexity, it’s very easy to understand that a function with complexity <code>O(1)</code> is going to perform much better than one with <code>O(n)</code>.</p>
<p>Hash tables have a <code>O(1)</code> complexity: in layman’s terms, they’re <strong>superfast</strong>. Let’s move on.</p>
<p><em>(I’m kinda lying on hash tables always having <code>O(1)</code>complexity, but just read on ;))</em></p>
<h3 id="let-s-build-a-dumb-hash-table">Let’s build a (dumb) hash table</h3>
<p>Our hash table has 2 simple methods — <code>set(x, y)</code> and <code>get(x)</code>. Let’s start writing some code:</p>
<p>And let’s implement a very simple, inefficient way to store these key-value pairs and retrieve them later on. We first start by storing them in an internal array (remember, we can’t use <code>{}</code> since we are implementing <code>{}</code> — mind blown!):</p>
<p>Then it’s simply a matter of getting the right element from the list:</p>
<p>Our full example:</p>
<p>Our <code>DumbMap </code>is amazing! It works right out of the box, but how will it perform when we add a large amount of key-value pairs?</p>
<p>Let’s try a simple benchmark. We will first try to find a non-existing element in a hash table with very few elements, and then try the same in one with a large quantity of elements:</p>
<p>The results? Not so encouraging:</p><pre><code>with very few records in the map: 0.118mswith lots of records in the map: 14.412ms</code></pre>
<p>In our implementation, we need to loop through all the elements inside <code>this.list</code> in order to find one with the matching key. The cost is <code>O(n)</code>, and it’s quite terrible.</p>
<h3 id="make-it-fast-er-">Make it fast(er)</h3>
<p>We need to find a way to avoid looping through our list: time to put <em>hash</em> back into the <em>hash table</em>.</p>
<p>Ever wondered why this data structure is called a <strong>hash</strong> table? That’s because a hashing function is used on the keys that you set and get. We will use this function to turn our key into an integer <code>i</code>, and store our value at index <code>i</code> of our internal list. Since accessing an element, by its index, from a list has a constant cost (<code>O(1)</code>), then the hash table will also have a cost of <code>O(1)</code>.</p>
<p>Let’s try this out:</p>
<p>Here we are using the <a href="https://www.npmjs.com/package/string-hash" rel="noopener">string-hash</a> module, which simply converts a string to a numeric hash. We use it to store and fetch elements at index <code>hash(key)</code> of our list. The results?</p><pre><code>with lots of records in the map: 0.013ms</code></pre>
<p>W — O — W. This is what I’m talking about!</p>
<p>We don’t have to loop through all elements in the list, and retrieving elements from <code>DumbMap</code> is super fast!</p>
<p>Let me put this as straightforwardly as possible: <strong>hashing is what makes hash tables extremely efficient</strong>. No magic. Nothing more. Nada. Just a simple, clever, ingenious idea.</p>
<h3 id="the-cost-of-picking-the-right-hashing-function">The cost of picking the right hashing function</h3>
<p>Of course, <strong>picking a fast hashing function is very important.</strong> If our <code>hash(key)</code> runs in a few seconds, our function will be quite slow regardless of its complexity.</p>
<p>At the same time, <strong>it’s very important to make sure that our hashing function doesn’t produce a lot of collisions</strong>, as they would be detrimental to the complexity of our hash table.</p>
<p>Confused? Let’s take a closer look at collisions.</p>
<h3 id="collisions">Collisions</h3>
<p>You might think “<em>Ah, a good hashing function never generates collisions!</em>”: well, come back to the real world and think again. <a href="https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html" rel="noopener">Google was able to produce collisions for the SHA-1 hashing algorithm</a>, and it’s just a matter of time, or computational power, before a hashing function cracks and returns the same hash for 2 different inputs. Always assume your hashing function generates collisions, and implement the right defense against such cases.</p>
<p>Case in point, let’s try to use a <code>hash()</code> function that generates a lot of collisions:</p>
<p>This function uses an array of 10 elements to store values, meaning that elements are likely to be replaced — a nasty bug in our <code>DumbMap</code>:</p>
<p>In order to resolve the issue, we can simply store multiple key-value pairs at the same index. So let’s amend our hash table:</p>
<p>As you might notice, here we fall back to our original implementation: store a list of key-value pairs and loop through each of them. This is going to be quite slow when there are a lot of collisions for a particular index of the list.</p>
<p>Let’s benchmark this using our own <code>hash()</code> function that generates indexes from 1 to 10:</p><pre><code>with lots of records in the map: 11.919ms</code></pre>
<p>and by using the hash function from <code>string-hash</code>, which generates random indexes:</p><pre><code>with lots of records in the map: 0.014ms</code></pre>
<p>Whoa! There’s the cost of picking the right hashing function — fast enough that it doesn’t slow our execution down on its own, and good enough that it doesn’t produce a lot of collisions.</p>
<h3 id="generally-o-1-">Generally O(1)</h3>
<p>Remember my words?</p>
<blockquote>Hashtables have a <code>O(1)</code> complexity</blockquote>
<p>Well, I lied: the complexity of a hash table depends on the hashing function you pick. The more collisions you generate, the more the complexity tends toward <code>O(n)</code>.</p>
<p>A hashing function such as:</p><pre><code>function hash(key) {  return 0}</code></pre>
<p>would mean that our hash table has a complexity of <code>O(n)</code>.</p>
<p>This is why, in general, computational complexity has three measures: best, average, and worst-case scenarios. Hashtables have a <code>O(1)</code> complexity in best and average case scenarios, but fall to <code>O(n)</code>in their worst-case scenario.</p>
<p>Remember: <strong>a good hashing function is the key to an efficient hash table</strong> — nothing more, nothing less.</p>
<h3 id="more-on-collisions-">More on collisions…</h3>
<p>The technique we used to fix <code>DumbMap</code> in case of collisions is called <a href="https://xlinux.nist.gov/dads/HTML/separateChaining.html" rel="noopener">separate chaining</a>: we store all the key-pairs that generate collisions in a list and loop through them.</p>
<p>Another popular technique is <a href="https://en.wikipedia.org/wiki/Open_addressing" rel="noopener">open addressing</a>:</p>
<ul>
<li>at each index of our list we store <strong>one and one only key-value pair</strong></li>
<li>when trying to store a pair at index <code>x</code>, if there’s already a key-value pair, try to store our new pair at <code>x + 1</code></li>
<li>if <code>x + 1</code> is taken, try <code>x + 2</code> and so on…</li>
<li>when retrieving an element, hash the key and see if the element at that position (<code>x</code>) matches our key</li>
<li>if not, try to access the element at position <code>x + 1</code></li>
<li>rinse and repeat until you get to the end of the list, or when you find an empty index — that means our element is not in the hash table</li>
</ul>
<p>Smart, simple, elegant and <a href="http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-28.html" rel="noopener">usually very efficient</a>!</p>
<h3 id="faqs-or-tl-dr-">FAQs (or TL;DR)</h3>
<h4 id="does-a-hash-table-hash-the-values-we-re-storing">Does a hash table hash the values we’re storing?</h4>
<p>No, keys are hashed so that they can be turned into an integer <code>i</code>, and both keys and values are stored at position <code>i</code> in a list.</p>
<h4 id="do-the-hashing-functions-used-by-hash-tables-generate-collisions">Do the hashing functions used by hash tables generate collisions?</h4>
<p>Absolutely — so hash tables are implemented with <a href="https://en.wikipedia.org/wiki/Hash_table#Collision_resolution" rel="noopener">defense strategies</a> to avoid nasty bugs.</p>
<h4 id="do-hash-tables-use-a-list-or-a-linked-list-internally">Do hash tables use a list or a linked list internally?</h4>
<p>It depends, <a href="https://stackoverflow.com/questions/13595767/why-do-hash%20tables-use-a-linked-list-over-an-array-for-the-bucket" rel="noopener">both can work</a>. In our examples, we use the JavaScript array (<code>[]</code>) that can be <a href="https://www.quora.com/Do-arrays-in-JavaScript-grow-dynamically" rel="noopener">dynamically resized</a>:</p><pre><code>&gt; a = []</code></pre><pre><code>&gt; a[3] = 1</code></pre><pre><code>&gt; a[ &lt;3 empty items&gt;, 1 ]</code></pre>
<h4 id="why-did-you-pick-javascript-for-the-examples-js-arrays-are-hash-tables-">Why did you pick JavaScript for the examples? JS arrays ARE hash tables!</h4>
<p>For example:</p><pre><code>&gt;  a = [][]</code></pre><pre><code>&gt; a["some"] = "thing"'thing'</code></pre><pre><code>&gt; a[ some: 'thing' ]</code></pre><pre><code>&gt; typeof a'object'</code></pre>
<p>I know, damn JavaScript.</p>
<p>JavaScript is “universal” and probably the easiest language to understand when looking at some sample code. JS might not be the best language, but I hope these examples are clear enough.</p>
<h4 id="is-your-example-a-really-good-implementation-of-a-hash-table-is-it-really-that-simple">Is your example a really good implementation of a hash table? Is it really THAT simple?</h4>
<p>No, not at all.</p>
<p>Have a look at “<a href="http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html" rel="noopener">implementing a hash table in JavaScript</a>” by <a href="http://www.mattzeunert.com/" rel="noopener">Matt Zeunert</a>, as it will give you a bit more context. There’s a lot more to learn, so I would also suggest that you check out:</p>
<ul>
<li><a href="http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16.html" rel="noopener">Paul Kube’s course on hash tables</a></li>
<li><a href="https://www.geeksforgeeks.org/implementing-our-own-hash-table-with-separate-chaining-in-java/" rel="noopener">Implementing our Own Hash Table with Separate Chaining in Java</a></li>
<li><a href="https://algs4.cs.princeton.edu/34hash/" rel="noopener">Algorithms, 4th Edition — Hash tables</a></li>
<li><a href="http://www.ilikebigbits.com/blog/2016/8/28/designing-a-fast-hash-table" rel="noopener">Designing a fast hash table</a></li>
</ul>
<h3 id="in-the-end-">In the end…</h3>
<p>Hash tables are a very clever idea we use on a regular basis: no matter whether you create a <a href="https://stackoverflow.com/questions/114830/is-a-python-dictionary-an-example-of-a-hash-table" rel="noopener">dictionary in Python</a>, an <a href="https://stackoverflow.com/a/3134315/934439" rel="noopener">associative array in PHP</a> or a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noopener">Map in JavaScript</a>. They all share the same concepts and beautifully work to let us store and retrieve element by an identifier, at a (most likely) constant cost.</p>
<p>Hope you enjoyed this article, and feel free to share your feedback with me.</p>
<p><em>A special thanks goes to <a href="https://github.com/joejean" rel="noopener">Joe</a> who helped me by reviewing this article.</em></p>
<p>Adios!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
