---
card: "https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png"
tags: [JavaScript]
description: Almost all software developers who have written even a few li
author: "Milad E. Fahmy"
title: "How you can step up your JavaScript debugging skills"
created: "2021-08-15T19:44:24+02:00"
modified: "2021-08-15T19:44:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-debugging tag-problem-solving tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How you can step up your JavaScript debugging skills</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png" alt="How you can step up your JavaScript debugging skills">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Almost all software developers who have written even a few lines of code for the Web have had at least a quick glance at JavaScript. After all, it is currently one of the most <a href="https://www.codingdojo.com/blog/7-most-in-demand-programming-languages-of-2018/" rel="noopener">in-demand</a> programming languages.</p>
<p>Some people <a href="https://dev.to/gentlemanoi/why-i-love-javascript-9bg" rel="noopener">love</a> it, some <a href="https://www.reddit.com/r/webdev/comments/4jf7m0/why_is_javascript_used_extensively_and_hated_at/" rel="noopener">hate</a> it. Regardless of your view, if you use it, you will need to debug it eventually.</p>
<figcaption>Credits to reddit</figcaption>
</figure>
<p>Below I will share some tips that have helped me in difficult moments.</p>
<h3 id="the-basic-well-known-ones">The basic / well-known ones</h3>
<h4 id="rubber-duck-debugging">Rubber duck debugging</h4>
<p><a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" rel="noopener">Rubber duck debugging</a> is a method where you explain your problem to anyone or anything (it doesn’t have to be a human). Then the solution magically stops playing with your goodwill and appears to you.</p>
<p>The ‘duck’ has no knowledge of your project, so you explain everything, questioning your assumptions at the same time. Ideally, you’ll suddenly have an enlightenment like, ‘Oh dear, it was in front of me, thanks bro, sorry for the interruption.’</p>
<p>Yet the duck was silent all this time, and that’s the magic part. :)</p>
<h4 id="the-good-ol-logging">The good ol’ logging</h4>
<p>When you have an issue to debug, you usually have a vague hypothesis of what might be wrong. It might be totally off from the actual cause, but this is another story. If you start putting logs in places where the error might occur, you may get to the point fast.</p>
<p>Even if you don’t, don’t remove the logs you added, as they might prove themselves helpful on a future issue.</p>
<p>I could argue why you should never reach this point, to add debug logs, as the logs should be there as part of the initial development. But <a href="http://vasir.net/blog/programming/how-logging-made-me-a-better-developer" rel="noopener">Erik Hazard</a> has already done the job.</p>
<p>More on logging later.</p>
<h4 id="breaking-the-points">Breaking the points</h4>
<p>A debugger is a great tool in your arsenal and a great help — if <strong>you know how to use it</strong>.</p>
<p>That means:</p>
<ul>
<li>First understand the problem</li>
<li>Then make a couple of hypotheses about the <strong>root cause (and not the symptom)</strong></li>
<li>Set the appropriate breakpoints to verify or disprove them.</li>
</ul>
<p>In JavaScript, you can either set in the browser’s dev tool or use the debugger keyword in the code to force pausing the execution.</p>
<p>So don’t just put random breakpoints here and there. Have a routine and an ‘end’ in your mind when using it.</p>
<h3 id="the-less-well-known-ones">The less well-known ones</h3>
<h4 id="console-table">console.table</h4>
<p>A few lines above, we spoke about the importance of logging. The command we usually use is <code>console.log('text')</code>. But what if the output is more complex? Yes, <code>console.log</code> handles arrays, too. And objects.</p>
<p>But what if I told you that you could spot the error faster because of some…beautification? That would be <code>console.table</code> method and is demonstrated below</p>
<figcaption>console.table at its best</figcaption>
</figure>
<p>See what a nice overview you can gain from the layout? I highly encourage you to use it more, especially with iterables.</p>
<h4 id="break-on-events-instead-of-lines">Break on events instead of lines</h4>
<p>Let’s imagine the following scenario. A DOM element is changing intermittently and with wrong values, and you have no clue why. Which of the 29 functions that mutate it is being naughty? (Side note: Mutating is <a href="https://slemgrim.com/mutate-or-not-to-mutate/" rel="noopener">bad</a> usually, but this is a topic for another blog post.)</p>
<p>Use the <strong>DOM change breakpoints</strong>. Every time the element is mutated, a stack track will be shown. Just like if you have put the correct breakpoints. You can find more details <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#dom" rel="noopener">here</a>.</p>
<h4 id="profiling">Profiling</h4>
<p>If the bug you are working on is not performance-oriented, maybe this is overkill. But I still have to mention it (well, it may be a performance issue after all :) ). In <a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution" rel="noopener">Chrome</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler" rel="noopener">Firefox</a> you can use the profiler’s built-in functionality to spot a bottleneck or just…see the functions that are executed. Boom :). Overengineering at its best. Please use this feature <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/" rel="noopener">wisely</a>. Killing a fly with a <a href="https://answers.yahoo.com/question/index?qid=20111106222906AAUSWkm" rel="noopener">bazooka</a> can have some weird side effects.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Thank you for reading this article. I hope you enjoyed it and learned something today. As always, I highly encourage to share your magic techniques in the comments.</p>
<h3 id="more-reading">More reading</h3>
<p>Apart from the links cited inside the main text of the article, here are some more things I think are worth reading about the topic of debugging:</p>
<ul>
<li><a href="https://nodejs.org/en/docs/guides/debugging-getting-started/" rel="noopener">Node debugging tutorial</a></li>
<li><a href="https://simpleprogrammer.com/effective-debugging/" rel="noopener">John Sonmez’s debugging guide</a></li>
<li><a href="https://amzn.to/2lC7kD3" rel="noopener">Debug it</a></li>
<li><a href="https://amzn.to/2IrgI5t" rel="noopener">Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems</a></li>
<li><a href="https://developers.google.com/web/tools/chrome-devtools/javascript/" rel="noopener">Chrome debug tools</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger" rel="noopener">Firefox debug tools</a></li>
<li>‘JSparty’ podcast and especially <a href="https://overcast.fm/+Id5XDQtKY" rel="noopener">episode 30</a> from where I got inspired about this post and learned about `console.table`</li>
</ul>
<p>Originally published <a href="http://perigk.github.io" rel="noopener">on my blog</a>.</p>
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
