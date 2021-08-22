---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg"
tags: [CSS]
description: I made a terrible mistake when I tweeted about :empty and :bl
author: "Milad E. Fahmy"
title: "When to use the :empty and :blank CSS pseudo selectors"
created: "2021-08-15T19:41:46+02:00"
modified: "2021-08-15T19:41:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-learning tag-tech tag-javascript tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">When to use the :empty and :blank CSS pseudo selectors</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca9e4740569d1a4ca8771.jpg" alt="When to use the :empty and :blank CSS pseudo selectors">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>I made a terrible mistake when I tweeted about <code>:empty</code> and <code>:blank</code> a while ago. I said that <code>:empty</code> wasn’t useful, and <code>:blank</code> is much more useful than <code>:empty</code>.</p>
<p>I was wrong!</p>
<p><code>:empty</code> is actually good enough. We don’t even need <code>:blank</code>!</p>
<h4 id="a-quick-introduction">A quick introduction</h4>
<p>Okay, first off, what is <code>:empty</code> and what is <code>:blank</code>?</p>
<p><code>:empty</code> is a pseudo selector. It lets you select elements that are empty.</p><pre><code>/* This is CSS */</code></pre><pre><code>:empty { /* do something */}</code></pre>
<p>Empty elements are elements that have nothing in them. It cannot even have a whitespace.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;!-- Example of an empty element --&gt;&lt;div&gt;&lt;/div&gt;</code></pre>
<p>Empty elements can have comments though, as long as the comments fill up the entire element.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;!-- Empty elements can have comments --&gt;&lt;div&gt;&lt;!-- this is a comment --&gt;&lt;/div&gt;</code></pre>
<p><code>:blank</code> is a powered-up form of <code>:empty</code>. It lets you select elements that have whitespaces in them:</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;!-- Matched with :blank but not with :empty --&gt;&lt;div&gt; &lt;/div&gt;</code></pre>
<p>Both <code>:empty</code> and <code>:blank</code> are useful if need to:</p>
<ol>
<li>Style an empty element</li>
<li>Create empty states</li>
</ol>
<h4 id="an-example">An example</h4>
<p>Let’s say you have a <code>&lt;d</code>iv&gt;. You will only fill up<code> this</code> &lt;div&gt; with content when an error occurs.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;!-- Without errors --&gt;&lt;div class="error"&gt;&lt;/div&gt;</code></pre><pre><code>&lt;!-- With errors --&gt;&lt;div class="error"&gt;Whoops! Something went wrong!&lt;/div&gt;</code></pre>
<p>Here, you need to style the <code>.error</code> div. If you don’t use <code>:empty</code>, you need to rely on a class or attribute. This feels redundant.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;!-- With errors --&gt;&lt;div class="error" data-state="error"&gt;Whoops! Something went wrong!&lt;/div&gt;</code></pre><pre><code>/* This is CSS */</code></pre><pre><code>.error { display: none; background-color: hsl(0, 20%, 50%); padding: 0.5em 0.75em;}</code></pre><pre><code>.error[data-state="error"] { display: block;}</code></pre>
<p>But if you use <code>:empty</code>, you don’t need the extra class or attribute. You can style the .error class directly. You don’t even need <code>display: none;</code>!</p><pre><code>/* This is CSS */</code></pre><pre><code>.error { background-color: hsl(0, 20%, 50%); padding: 0.5em 0.75em;}</code></pre><pre><code>.error:empty { padding: 0;}</code></pre>
<p>Here’s a codepen <a href="https://codepen.io/zellwk/pen/JaPgdN/" rel="noopener">Empty Demo</a> I made for you to play with (try removing the <code>padding: 0;</code> from <code>.error:empty</code>, you’ll see a red background ?).</p>
<p>Let’s say you want to create a todo-list. When your users see the todo-list for the first time, they will probably see zero todo items.</p>
<p>What do you show when there are zero todos?</p>
<p>This zero todo state is what we call an empty state.</p>
<p>If you want to create an empty state for your todo-list, you can add an extra <code>&lt;d</code>iv&gt; after<code> you</code>r &lt;ul&gt;. When you do so, you can use a com<code>binati</code>on of :em<code>p</code>ty and the + (adjacent <code>s</code>ibling) or ~ (subsequent sibling) selector to style the empty state.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt; &lt;li&gt;Item 3&lt;/li&gt;&lt;/ul&gt;&lt;div class="empty-state"&gt;&lt;/div&gt;</code></pre><pre><code>/* This is CSS */</code></pre><pre><code>.empty-state { display: none;}</code></pre><pre><code>ul:empty + .empty-state { display: block;}</code></pre>
<p>I learned how to use <code>:empty</code> this way from Heydon Pickering. Check out <a href="https://inclusive-components.design/a-todo-list/" rel="noopener">Heydon’s article</a> on <a href="https://inclusive-components.design/" rel="noopener">Inclusive Components</a> if you want to see the todo-list example at work.</p>
<blockquote>Note: empty states are important. If you need some convincing, check out <a href="https://www.invisionapp.com/blog/why-empty-states-deserve-more-design-time/" rel="noopener">this article </a>on Invision.</blockquote>
<h4 id="taking-apart-my-reasoning">Taking apart my reasoning</h4>
<p><code>:empty</code> is often enough in practice. I felt <code>:empty</code> isn’t good enough because of two reasons:</p>
<ol>
<li>Poor developer experience</li>
<li>I’ll need to trim whitespaces manually with JavaScript</li>
</ol>
<p>The first reason is valid, but it isn’t a big deal.</p>
<p><strong>The second reason is not valid</strong>. I assumed I had to trim whitespaces, but I don’t need to.</p>
<p>I’ll walk you through both of them.</p>
<p>Let’s go back to the todo-list example. Say we created a todo-list and we have this markup.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt; &lt;li&gt;Item 3&lt;/li&gt;&lt;/ul&gt;&lt;div class="empty-state"&gt;&lt;/div&gt;</code></pre>
<p>How would you check if <code>:empty</code> was working?</p>
<p>Well, I would remove each <code>&lt;</code>li&gt;<code> wi</code>th <code>c</code>md + x. This command cuts the entire line. When I removed all <code>thre</code>e &lt;li&gt;, I’ll end up with this markup:</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt;&lt;/ul&gt;</code></pre>
<p>By now, you’ll know that the HTML above won’t trigger <code>:empty</code>. <code>:empty</code> only works when there are no whitespaces in the element.</p>
<p>I had to remove the whitespaces for <code>:empty</code> to work, which means a few more keystrokes. This was a chore I hoped I didn’t have to go through.</p>
<p>But then again, it’s a small problem for a big benefit.</p>
<p>I say it again. <strong>You don’t need to trim whitespaces manually in JavaScript</strong> if you use <code>:empty</code>. I made a wrong assumption.</p>
<p>Let’s go through an example and you’ll see what I mean. We’ll use the todo-list example one more time.</p>
<p>Say we have this HTML right now:</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt;&lt;/ul&gt;&lt;div class="empty-state"&gt;&lt;/div&gt;</code></pre>
<p>For the empty state to work, we need to remove the final <code>&lt;</code>li&gt; item<code> fro</code>m &lt;ul&gt;. If you use plain JavaScript, you can d<code>o this with</code> removeChild.</p><pre><code>// This is JavaScript</code></pre><pre><code>const ul = document.querySelector('ul')const li = ul.children[0]</code></pre><pre><code>ul.removeChild(li)</code></pre>
<p>I believed (erroneously) that <code>removeChild</code> will produce this HTML:</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt;&lt;/ul&gt;</code></pre>
<p>If it produces this HTML, I’ll have to trim any whitespace remaining in the list (which is extra JavaScript).</p><pre><code>// This is JavaScript</code></pre><pre><code>const ul = document.querySelector('ul')const li = ul.children[0]</code></pre><pre><code>ul.removeChild(li)</code></pre><pre><code>if (ul.children.length === 0) { ul.innerHTML = ''}</code></pre>
<p>Like I said, I was wrong. It didn’t produce the above HTML. Instead, this is what it produced:</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;ul&gt;&lt;/ul&gt;</code></pre>
<p>Which means we didn’t need the extra JavaScript to trim whitespace!</p>
<blockquote>Disclaimer: I checked the output on Safari, Chrome, and Firefox. I haven’t checked Edge yet though. I’ll be super grateful if you can help me test it out!</blockquote>
<p>Here’s the code for this example:</p>
<p>See the Pen <a href="https://codepen.io/zellwk/pen/ZMzgJp/" rel="noopener">Empty demo with todolist</a> I made (<a href="https://codepen.io/zellwk" rel="noopener">@zellwk</a>) on <a href="https://codepen.io/" rel="noopener">CodePen</a>.</p>
<p><code>:empty</code> is supported on all browsers, and <code>:blank</code> has poor browser support. This gives you plenty of reason to use <code>:empty</code> over <code>:blank</code> today!</p>
<p>I hope that browser support for <code>:blank</code> improves one day though.</p>
<h4 id="wrapping-up">Wrapping up</h4>
<p><code>:empty</code> and <code>:blank</code> let you style empty elements and produce empty states easily.</p>
<p><code>:blank</code> is better than <code>:empty</code> because it provides us with a better developer experience. But we can’t use <code>:blank</code> because <code>:blank</code> doesn’t have enough browser support.</p>
<p><code>:empty</code> is often good enough. You can use it already. Use it all you want! ?</p>
<p>Give <code>:empty</code> a go and let me know what you think!</p>
<p>Thanks for reading. Did this article help you in any way? If you did, <a href="http://twitter.com/share?text=%3Aempty%20and%20%3Ablank%20by%20@zellwk%20?%20&amp;url=https://zellwk.com/blog/empty-and-blank/&amp;hashtags=" rel="noopener">I hope you consider sharing it</a>. You might help someone out. Thank you!</p>
<p>This article was originally posted at <a href="https://zellwk.com/blog/empty-and-blank" rel="noopener"><em>my blog</em>.</a></p>
<p>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
