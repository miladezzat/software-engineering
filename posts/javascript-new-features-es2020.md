---
card: "/images/default.jpg"
tags: [JavaScript]
description: Good news – the new ES2020 features are now finalised! This m
author: "Milad E. Fahmy"
title: "10 New JavaScript Features in ES2020 That You Should Know"
created: "2021-08-15T19:30:14+02:00"
modified: "2021-08-15T19:30:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ecmascript ">
<header class="post-full-header">
<h1 class="post-full-title">10 New JavaScript Features in ES2020 That You Should Know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/es2020logo.jpg 300w,
/news/content/images/size/w600/2020/04/es2020logo.jpg 600w,
/news/content/images/size/w1000/2020/04/es2020logo.jpg 1000w,
/news/content/images/size/w2000/2020/04/es2020logo.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/es2020logo.jpg" alt="10 New JavaScript Features in ES2020 That You Should Know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Good news – the new ES2020 features are now finalised! This means we now have a complete idea of the changes happening in ES2020, the new and improved specification of JavaScript. So let's see what those changes are.</p>
<h1 id="-1-bigint">#1: BigInt</h1>
<p>BigInt, one of the most anticipated features in JavaScript, is finally here. It actually allows developers to have much greater integer representation in their JS code for data processing for data handling. </p>
<p>At the moment the maximum number you can store as an integer in JavaScript is <code>pow(2, 53) - 1</code> . But BigInt actually allows you to go even beyond that. &nbsp;</p>
<p>However, you need to have an <code>n</code> appended at the very end of the number, as you can see above. This <code>n</code> denotes that this is a BigInt and should be treated differently by the JavaScript engine (by the v8 engine or whatever engine it is using). </p>
<p>This improvement is not backwards compatible because the traditional number system is IEEE754 (which just cannot support numbers of this size).</p>
<h1 id="-2-dynamic-import">#2: Dynamic import</h1>
<p>Dynamic imports in JavaScript give you the option to import JS files dynamically as modules in your application natively. This is just like how you do it with Webpack and Babel at the moment.</p>
<p>This feature will help you ship on-demand-request code, better known as code splitting, without the overhead of webpack or other module bundlers. You can also conditionally load code in an if-else block if you like. </p>
<p>The good thing is that you actually import a module, and so it never pollutes the global namespace.</p>
<h1 id="-3-nullish-coalescing">#3: Nullish Coalescing</h1>
<p>Nullish coalescing adds the ability to truly check <code>nullish</code> values instead of <code>falsey</code> values. What is the difference between <code>nullish</code> and <code>falsey</code> values, you might ask?</p>
<p>In JavaScript, a lot of values are <code>falsey</code>, like empty strings, the number 0, <code>undefined</code>, <code>null</code>, <code>false</code>, <code>NaN</code>, and so on. </p>
<p>However, a lot of times you might want to check if a variable is nullish – that is if it is either <code>undefined</code> or <code>null</code>, like when it's okay for a variable to have an empty string, or even a false value.</p>
<p>In that case, you'll use the new nullish coalescing operator, <code>??</code></p>
<p>You can clearly see how the OR operator always returns a truthy value, whereas the nullish operator returns a non-nulllish value.</p>
<h1 id="-4-optional-chaining">#4: Optional Chaining</h1>
<p>Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not. If it exists, great! If not, <code>undefined</code> will be returned. </p>
<p>This not only works on object properties, but also on function calls and arrays. Super convenient! Here's an example:</p>
<h1 id="-5-promise-allsettled">#5: Promise.allSettled</h1>
<p>The <code>Promise.allSettled</code> method accepts an array of Promises and only resolves when all of them are settled – either resolved or rejected. </p>
<p>This was not available natively before, even though some close implementations like <code>race</code> and <code>all</code> were available. This brings "Just run all promises – I don't care about the results" natively to JavaScript.</p>
<h1 id="-6-string-matchall">#6: String#matchAll</h1>
<p><code>matchAll</code> is a new method added to the <code>String</code> prototype which is related to Regular Expressions. This returns an iterator which returns all matched groups one after another. Let's have a look at a quick example:</p>
<h1 id="-7-globalthis">#7: globalThis</h1>
<p>If you wrote some cross-platform JS code which could run on Node, in the browser environment, and also inside web-workers, you'd have a hard time getting hold of the global object. </p>
<p>This is because it is <code>window</code> for browsers, <code>global</code> for Node, and <code>self</code> for web workers. If there are more runtimes, the global object will be different for them as well. </p>
<p>So you would have had to have your own implementation of detecting runtime and then using the correct global – that is, until now.</p>
<p>ES2020 brings us <code>globalThis</code> which always refers to the global object, no matter where you are executing your code:</p>
<h1 id="-8-module-namespace-exports">#8: Module Namespace Exports</h1>
<p>In JavaScript modules, it was already possible to use the following syntax:</p><pre><code class="language-js">import * as utils from './utils.mjs'</code></pre>
<p>However, no symmetric <code>export</code> syntax existed, until now:</p><pre><code class="language-js">export * as utils from './utils.mjs'</code></pre>
<p>This is equivalent to the following:</p><pre><code class="language-js">import * as utils from './utils.mjs'
export { utils }</code></pre>
<h1 id="-9-well-defined-for-in-order">#9: Well defined for-in order</h1>
<p>The ECMA specification did not specify in which order <code>for (x in y)</code> &nbsp;should run. Even though browsers implemented a consistent order on their own before now, this has been officially standardized in ES2020.</p>
<h1 id="-10-import-meta">#10: import.meta</h1>
<p>The <code>import.meta</code> object was created by the ECMAScript implementation, with a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> prototype. </p>
<p>Consider a module, <code>module.js</code>:</p><pre><code class="language-html">&lt;script type="module" src="module.js"&gt;&lt;/script&gt;
</code></pre>
<p>You can access meta information about the module using the <code>import.meta</code> object:</p><pre><code class="language-js">console.log(import.meta); // { url: "file:///home/user/module.js" }</code></pre>
<p>It returns an object with a <code>url</code> property indicating the base URL of the module. This will either be the URL from which the script was obtained (for external scripts), or the document base URL of the containing document (for inline scripts).</p>
<h1 id="conclusion">Conclusion</h1>
<p>I love the consistency and speed with which the JavaScript community has evolved and is evolving. It is amazing and truly wonderful to see how JavaScript came from a language which was booed on, 10 years go, to one of the strongest, most flexible and versatile language of all time today. </p>
<p>Do you wish to learn JavaScript and other programming languages in a completely new way? Head on to a <a href="https://codedamn.com">new platform for developers</a> I'm working on to try it out today! </p>
<p>What's your favorite feature of ES2020? Tell me about it by tweeting and connecting with me on <a href="https://twitter.com/mehulmpt">Twitter</a> and <a href="https://instagram.com/mehulmpt">Instagram</a>!</p>
<p>This is a blog post composed from my video which is on the same topic. It would mean the world to me if you could show it some love!</p>
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
