---
card: "https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg"
tags: [Tech]
description: "Semicolons in JavaScript divide the community. Some prefer to"
author: "Milad E. Fahmy"
title: "Let’s talk about semicolons in JavaScript"
created: "2021-08-16T11:40:17+02:00"
modified: "2021-08-16T11:40:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-technology tag-startup tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s talk about semicolons in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg" alt="Let’s talk about semicolons in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="to-use-them-or-not-to-use-them-">To use them, or not to use them…</h4><p>Semicolons in JavaScript divide the community. Some prefer to use them always, no matter what. Others like to avoid them.</p><p>I put out a poll on Twitter to test the waters, and I found lots of semicolon supporters:</p><p>After using semicolons for years, in the fall of 2017 I decided to try avoiding them when I could. I set up <a href="https://flaviocopes.com/prettier/" rel="noopener">Prettier</a> to automatically remove semicolons from my code, unless there was a particular code construct that required them.</p><p>Now I find it natural to avoid semicolons, and I think the code looks better and is cleaner to read.</p><p>This is all possible because JavaScript does not strictly require semicolons. When there is a place where a semicolon is needed, it adds it behind the scenes.</p><p>This is called <strong>Automatic Semicolon Insertion</strong>.</p><p>It’s important to know the rules that power semicolons. This will allow you to avoid writing code that will generate bugs before it does not behave like you expect.</p><h3 id="the-rules-of-javascript-automatic-semicolon-insertion">The rules of JavaScript Automatic Semicolon Insertion</h3><p>The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:</p><ol><li>when the next line starts with code that breaks the current one (code can spawn on multiple lines)</li><li>when the next line starts with a <code>}</code>, closing the current block</li><li>when the end of the source code file is reached</li><li>when there is a <code>return</code> statement on its own line</li><li>when there is a <code>break</code> statement on its own line</li><li>when there is a <code>throw</code> statement on its own line</li><li>when there is a <code>continue</code> statement on its own line</li></ol><h3 id="examples-of-code-that-does-not-do-what-you-think">Examples of code that does not do what you think</h3><p>Based on those rules, here are some examples.</p><p>Take this:</p><pre><code>const hey = 'hey'const you = 'hey'const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) =&gt; console.log(letter))</code></pre><p>You’ll get the error <code>Uncaught TypeError: Cannot read property 'forEach' of undefined</code> because based on rule <code>1</code>, JavaScript tries to interpret the code as</p><pre><code>const hey = 'hey';const you = 'hey';const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) =&gt; console.log(letter))</code></pre><p>This piece of code:</p><pre><code>(1 + 2).toString()</code></pre><p>prints <code>"3"</code>.</p><pre><code>const a = 1const b = 2const c = a + b(a + b).toString()</code></pre><p>Instead, it raises a <code>TypeError: b is not a function</code> exception, because JavaScript tries to interpret it as</p><pre><code>const a = 1 const b = 2 const c = a + b(a + b).toString()</code></pre><p>Another example based on rule 4:</p><pre><code>(() =&gt; {  return  {    color: 'white'  }})()</code></pre><p>You’d expect the return value of this immediately-invoked function to be an object that contains the <code>color</code> property, but it’s not. Instead, it’s <code>undefined</code>, because JavaScript inserts a semicolon after <code>return</code>.</p><p>Instead you should put the opening bracket right after <code>return</code>:</p><pre><code>(() =&gt; {  return {    color: 'white'  }})()</code></pre><p>You’d think this code shows ‘0’ in an alert:</p><pre><code>1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)</code></pre><p>but it shows 2 instead, because JavaScript (per rule 1) interprets it as:</p><pre><code>1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)</code></pre><h3 id="conclusion">Conclusion</h3><p>Be careful — some people are very opinionated about semicolons. I don’t care, honestly. The tool gives us the option not to use it, so we can avoid semicolons if we want.</p><p>I’m not suggesting anything on one side or the other. Just make your own decision based on what works for you.</p><p>Regardless, we just need to pay a bit of attention, even if most of the time those basic scenarios never show up in your code.</p><p>Pick some rules:</p><ul><li>Be careful with <code>return</code> statements. If you return something, add it on the same line as the return (same for <code>break</code>, <code>throw</code>, <code>continue</code>)</li><li>Never start a line with parentheses, as those might be concatenated with the previous line to form a function call, or an array element reference</li></ul><p>And ultimately, always test your code to make sure it does what you want.</p><blockquote>I publish 1 free programming tutorial per day on <a href="https://flaviocopes.com" rel="noopener">flaviocopes.com</a>, check it out!</blockquote><p><em>Originally published at <a href="https://flaviocopes.com/javascript-automatic-semicolon-insertion/" rel="noopener">flaviocopes.com</a>.</em></p>
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
