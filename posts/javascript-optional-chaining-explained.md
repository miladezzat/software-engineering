---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg"
tags: [JavaScript]
description: Optional chaining, represented by ?. in JavaScript, is a new
author: "Milad E. Fahmy"
title: "JavaScript Optional Chaining `?.` Explained - How it Works and When to Use it"
created: "2021-08-15T19:28:42+02:00"
modified: "2021-08-15T19:28:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-babel ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Optional Chaining `?.` Explained - How it Works and When to Use it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c990e740569d1a4ca1d97.jpg" alt="JavaScript Optional Chaining `?.` Explained - How it Works and When to Use it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="whatisoptionalchaining">What is optional chaining?</h2>
<p>Optional chaining, represented by <code>?.</code> in JavaScript, is a new feature introduced in ES2020.</p>
<p>Optional chaining changes the way properties are accessed from deeply nested objects. It fixes the problem of having to do multiple null checks when accessing a long chain of object properties in JavaScript.</p>
<p>Current Status: <code>ECMAScript proposal at stage 4 of the process.</code> : <a href="https://github.com/tc39/proposal-optional-chaining">https://github.com/tc39/proposal-optional-chaining</a></p>
<h2 id="usecases">Use cases</h2>
<ol>
<li>Accessing potentially <code>null</code> or <code>undefined</code> properties of an object.</li>
<li>Getting results from a variable that may not be available yet.</li>
<li>Getting default values.</li>
<li>Accessing long chains of properties.</li>
</ol>
<p>Imagine you are expecting an API to return an object of this sort:</p>
<pre><code class="language-javascript">obj = {
prop1: {
prop2: {
someProp: "value"
}
}
};
</code></pre>
<p>But you may not know if each of these fields are available ahead of time. Some of them may not have been sent back by the API, or they may have come back with null values.</p>
<p>Here is an example:</p>
<pre><code class="language-javascript">//expected
obj = {
id: 9216,
children: [
{ id: 123, children: null },
{ id: 124, children: [{ id: 1233, children: null }] }
]
};
//actual
obj = {
id: 9216,
children: null
};
</code></pre>
<p>This happens very often with functions that call APIs. You may have seen code in React that tries to safeguard against these issues like this:</p>
<pre><code class="language-jsx">render = () =&gt; {
const obj = {
prop1: {
prop2: {
someProp: "value",
},
},
};
return (
&lt;div&gt;
{obj &amp;&amp; obj.prop1 &amp;&amp; obj.prop1.prop2 &amp;&amp; obj.prop1.prop2.someProp &amp;&amp; (
&lt;div&gt;{obj.prop1.prop2.someProp}&lt;/div&gt;
)}
&lt;/div&gt;
);
};
</code></pre>
<p>In order to better prepare for this issue, often times in the past we have used <code>Lodash</code>, specifically the <code>_.get</code> method:</p>
<pre><code class="language-javascript">_.get(obj, prop1.prop2.someProp);
</code></pre>
<p>This outputs <code>undefined</code> if either of those properties are <code>undefined</code>. <strong>Optional chaining is exactly that</strong>! Now instead of using an external library, this functionality is built-in.</p>
<h2 id="howdoesoptionalchainingwork">How does optional chaining work?</h2>
<p><code>?.</code> can be used to chain properties that may be <code>null</code> or <code>undefined</code>.</p>
<pre><code>const propNeeded = obj?.prop1?.prop2?.someProp;
</code></pre>
<p>If either of those chained properties is <code>null</code> or <code>undefined</code>, JavaScript will return <code>undefined</code>.</p>
<p>What if we want to return something meaningful? Try this:</p>
<pre><code class="language-javascript">let familyTree = {
us: {
children: {}
}
}
// with _.get
const grandChildren = _.get(familyTree, 'us.children.theirChildren', 'got no kids' );
//with optional chaining and null coalescing
const nullCoalescing = familyTree?.us?.children?.theirChildren ?? 'got no kids'
console.log(nullCoalescing) //got no kids
</code></pre>
<p>It also works for objects that may be <code>null</code> or <code>undefined</code>:</p>
<pre><code>let user;
console.log(user?.id) // undefined
</code></pre>
<h2 id="howtogetthisnewestfeature">How to get this newest feature</h2>
<ol>
<li>
<p>Try it in your browser's console: This is a recent addition and old browsers may need polyfills. You can try it in Chrome or Firefox in the browser's console. If it doesn't work, try turning on JavaScript experimental features by visiting <code>chrome://flags/</code> and enabling "Experimental JavaScript".</p>
</li>
<li>
<p>Try it in your Node app by using Babel:</p>
</li>
</ol>
<pre><code>{
"plugins": ["@babel/plugin-proposal-optional-chaining"]
}
</code></pre>
<h2 id="resources">Resources</h2>
<ol>
<li><a href="https://dmitripavlutin.com/javascript-optional-chaining/">https://dmitripavlutin.com/javascript-optional-chaining/</a></li>
<li>Babel's doc: <a href="https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining">https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining</a></li>
</ol>
<h2 id="tldr">TL;DR</h2>
<p>Use optional chaining <code>?.</code> for objects or long chain properties that may be <code>null</code> or <code>undefined</code>. The syntax is as follows:</p>
<pre><code class="language-javascript">let user = {};
console.log(user?.id?.name)
</code></pre>
<hr>
<p>Interested in more tutorials and JSBytes from me? <a href="https://tinyletter.com/shrutikapoor">Sign up for my newsletter.</a> or <a href="https://twitter.com/shrutikapoor08">follow me on Twitter</a></p>
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
