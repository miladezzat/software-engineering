---
card: "https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png"
tags: [JavaScript]
description: 30 Seconds of Code is a brilliant collection of JavaScript sn
author: "Milad E. Fahmy"
title: "30 Seconds of Code: How to rename multiple object keys in JavaScript"
created: "2021-08-15T19:46:36+02:00"
modified: "2021-08-15T19:46:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-functional-programming tag-immutability tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">30 Seconds of Code: How to rename multiple object keys in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qlRItHMmEVJGSEDRYJbGLA.png" alt="30 Seconds of Code: How to rename multiple object keys in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>30 Seconds of Code is a brilliant collection of JavaScript snippets, digestible in ≤ 30 seconds. <strong>Anyone looking to master JavaScript should go through the entire thing.</strong></p>
<p>The list didn’t contain a function to rename multiple object keys, however, so I created a <a href="https://github.com/Chalarangelo/30-seconds-of-code/pull/646">pull request</a> that thankfully got merged!</p>
<p>Here’s the official entry: <a href="https://30secondsofcode.org/object#renamekeys">https://30secondsofcode.org/object#renamekeys</a></p>
<p>I’ve previously written on <a href="https://medium.com/front-end-hacking/immutably-rename-object-keys-in-javascript-5f6353c7b6dd">renaming object keys</a>, but we only changed one key at a time.</p>
<p>Then <a href="https://medium.com/@adaminsley">Adam Rowe</a> kindly commented, asking how we might rename <em>multiple</em> object keys. I replied with this code sample after some thought and research.</p>
<pre><code class="language-js">renameKeys = (keysMap, obj) =&gt;
Object.keys(obj).reduce(
(acc, key) =&gt; ({
...acc,
...{ [keysMap[key] || key]: obj[key] }
}),
{}
);
</code></pre>
<p>This was inspired by <a href="https://char0n.github.io/ramda-adjunct/2.6.0/RA.html#.renameKeys">Ramda Adjunct</a>’s <code>renameKeys</code> function.</p>
<ul>
<li><code>keysMap</code> contains key/value pairs of your old/new object keys.</li>
<li><code>obj</code> is the object to be changed.</li>
</ul>
<p>You might use it like this:</p>
<pre><code class="language-js">keysMap = {
name: 'firstName',
job: 'passion'
};
obj = {
name: 'Bobo',
job: 'Front-End Master'
};
renameKeys(keysMap, obj);
// { firstName: 'Bobo', passion: 'Front-End Master' }
</code></pre>
<p>Let’s step through it! We can write an expanded, <code>debugger</code>-friendly version of this function:</p>
<pre><code class="language-js">renameKeys = (keysMap, obj) =&gt; {
debugger;
return Object.keys(obj).reduce((acc, key) =&gt; {
debugger;
const renamedObject = {
[keysMap[key] || key]: obj[key]
};
debugger;
return {
...acc,
...renamedObject
};
}, {});
};
</code></pre>
<p>And we’ll use it like this:</p>
<pre><code class="language-js">renameKeys(
{
name: 'firstName',
job: 'passion'
},
{
name: 'Bobo',
job: 'Front-End Master'
}
);
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*C9BI6jfACst-UcchX6wyyA.png" alt=""></p>
<p>Pausing on line 2, we see that <code>keysMap</code> and <code>obj</code> have been properly assigned.</p>
<p>Here’s where the fun begins. Move to the next <code>debugger</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*3HKJjlIj8tChHNlre9WV9Q.png" alt=""></p>
<p>Inspect our local variables on line 7:</p>
<ul>
<li><code>acc: {}</code> because that’s <code>Array.reduce()</code>’s initial value (line 19).</li>
<li><code>key: “name”</code> because it’s the first key from <code>Object.keys(obj)</code>.</li>
<li><code>renamedObject: undefined</code></li>
</ul>
<p>Also notice that we can access <code>keysMap</code> and <code>obj</code> from the parent function’s scope.</p>
<p>Guess what <code>renamedObject</code> will be. Like in my <a href="https://medium.com/front-end-hacking/immutably-rename-object-keys-in-javascript-5f6353c7b6dd">aforementioned post</a>, we’re using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer"><em>computed property names</em></a> to dynamically assign <code>renamedObject</code>'s key.</p>
<p>If <code>keysMap[key]</code> exists, use it. Otherwise, use the original object key. In this case, <code>keysMap[key]</code> is <code>“firstName”</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*aYI7ss4IOWIipNsC40r9rg.png" alt=""></p>
<p>That’s <code>renamedObject</code>'s key, what about its corresponding value?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*GEBIVtNMWIuosMVq4FLMQw.png" alt=""></p>
<p>It’s <code>obj[key]</code>: <code>"Bobo"</code>. Hit the next <code>debugger</code> and check it out.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*XMGM2FxuNscmq_imZf8Nmw.png" alt=""></p>
<p><code>renamedObject</code> is now <code>{ firstName: “Bobo” }</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*z8HEVhgr8-e5HFrtAK5lzg.png" alt=""></p>
<p>Now using the <em>spread</em> operator, we’ll merge <code>acc</code> and <code>renamedObject</code>. Remember that <code>acc</code> is currently <code>.reduce</code>'s initial value: an empty object.</p>
<p>So merging <code>acc</code> and <code>renamedObject</code> just results in a clone of <code>renamedObject</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Fw0QyV7VsU2UH-GtD-74WQ.png" alt=""></p>
<p>Since we’re returning this object, however, it becomes <code>acc</code> in <code>.reduce</code>’s next iteration. Move to the next <code>debugger</code> to see this.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*h0Lxhtw1trErPruUBKamfA.png" alt=""></p>
<p>We’re inside <code>.reduce</code>'s again, because there’s one more <code>key</code> to process. We see that <code>acc</code> is now <code>{ firstName: "Bobo" }</code>.</p>
<p>The same process runs again, and <code>renamedObject</code> is properly created.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*OfKamMrGJLBIvY2WgQrlaA.png" alt=""></p>
<p>This time, merging <code>acc</code> and <code>renamedObject</code> actually makes a difference.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*uMdN7mSsIhgvzJCceftUOw.png" alt=""></p>
<p>Run past this <code>debugger</code> to return that object, and you’re done!</p>
<p>Here’s the final output:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*TpcJHEG6MUxazCkNnCg6AQ.png" alt=""></p>
<p>Have fun renaming <strong>all the keys</strong>, until next time!</p>
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
