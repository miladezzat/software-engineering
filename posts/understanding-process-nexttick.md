---
card: "/images/default.jpg"
tags: [Node]
author: "Milad E. Fahmy"
title: "Understanding process.nextTick()"
created: "2021-08-20T13:40:41+02:00"
modified: "2021-08-20T13:40:41+02:00"
---
<div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><div class="layout-container"><main class="grid-container"><article class="article-reader"><h1 class="article-reader__headline">Understanding process.nextTick()</h1><div><p>As you try to understand the Node.js event loop, one important part of it is <code class="language-text">process.nextTick()</code>.</p><p>Every time the event loop takes a full trip, we call it a tick.</p><p>When we pass a function to <code class="language-text">process.nextTick()</code>, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:</p><pre class="prism-code language-js"><div class="shell-box-top"><span>JS</span><button type="button">copy</button></div><div class="token-line"><span class="token plain">process</span><span class="token punctuation">.</span><span class="token method function property-access">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token plain"> </span><span class="token arrow operator">=&gt;</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token comment">//do something</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">
</span></div></pre><p>The event loop is busy processing the current function code.</p><p>When this operation ends, the JS engine runs all the functions passed to <code class="language-text">nextTick</code> calls during that operation.</p><p>It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.</p><p>Calling <code class="language-text">setTimeout(() =&gt; {}, 0)</code> will execute the function at the end of next tick, much later than when using <code class="language-text">nextTick()</code> which prioritizes the call and executes it just before the beginning of the next tick.</p><p>Use <code class="language-text">nextTick()</code> when you want to make sure that in the next event loop iteration that code is already executed.</p></div></article></main></div></div><div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div></div>