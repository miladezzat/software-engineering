---
card: "/images/default.jpg"
tags: [Node]
author: "Milad E. Fahmy"
title: "Understanding setImmediate()"
created: "2021-08-20T13:40:42+02:00"
modified: "2021-08-20T13:40:42+02:00"
---
<div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><div class="layout-container"><main class="grid-container"><article class="article-reader"><h1 class="article-reader__headline">Understanding setImmediate()</h1><div><p>When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the <code class="language-text">setImmediate()</code> function provided by Node.js:</p><pre class="prism-code language-js"><div class="shell-box-top"><span>JS</span><button type="button">copy</button></div><div class="token-line"><span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token plain"> </span><span class="token arrow operator">=&gt;</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token comment">//run something</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">
</span></div></pre><p>Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.</p><p>How is <code class="language-text">setImmediate()</code> different from <code class="language-text">setTimeout(() =&gt; {}, 0)</code> (passing a 0ms timeout), and from <code class="language-text">process.nextTick()</code>?</p><p>A function passed to <code class="language-text">process.nextTick()</code> is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before <code class="language-text">setTimeout</code> and <code class="language-text">setImmediate</code>.</p><p>A <code class="language-text">setTimeout()</code> callback with a 0ms delay is very similar to <code class="language-text">setImmediate()</code>. The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.</p></div></article></main></div></div><div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div></div>