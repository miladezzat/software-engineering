---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg"
tags: [JavaScript]
description: "by Kevin Ennis"
author: "Milad E. Fahmy"
title: "Recursion in JavaScript"
created: "2021-08-16T11:55:36+02:00"
modified: "2021-08-16T11:55:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-programming tag-technology tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Recursion in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb9c2740569d1a4caf44e.jpg" alt="Recursion in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kevin Ennis</p><p>I’m just gonna get this out of the way right up front, because people get really angry otherwise:</p><p>Consider this post as a series of learning exercises. These examples are designed to make you think — and, if I’m doing it right, maybe expand your understanding of functional programming a little bit.</p><h3 id="hey-dawg-i-heard-you-like-recursion-so-i-put-a-hey-dawg-i-heard-you-like-recursion-so-i-put-a-hey-dawg-">Hey, dawg. I heard you like recursion, so I put a “Hey, dawg. I heard you like recursion, so I put a “Hey, dawg…</h3><p>Loosely defined, recursion is the process of taking a big problem and sub-dividing it into multiple, smaller instances of the same problem.</p><p>Put into practice, that generally means writing a function that calls <em>itself</em>. Probably the most classic example of this concept is the <strong>factorial</strong> function.</p><p>You may remember from math class that the factorial of a number <strong>n</strong> is the product of all positive integers less than or equal to <strong>n. </strong>In other words, the factorial of <strong>5</strong> is <strong>5 x 4 x 3 x 2 x 1</strong>. The mathematical notation for this is <strong>5!</strong>.</p><p>Something interesting you might have noticed about that pattern: <strong>5! </strong>is actually just <strong>5 x 4!</strong>. And <strong>4! </strong>is just <strong>4 x 3!</strong>. So on and so forth until you get down to <strong>1</strong>.</p><p>Here’s how we’d write that in JavaScript:</p><p>If this seems confusing, I’d encourage you to mentally walk through the code using the example of <strong>factorial( 3 )</strong>.</p><p>Here’s a bit of help, in case you need it:</p><ol><li><strong>factorial( 3 ) </strong>is <strong>3 x factorial( 2 )</strong>.</li><li><strong>factorial( 2 )</strong> is <strong>2 x factorial( 1 )</strong>.</li><li><strong>factorial( 1 )</strong> meets our <strong>if</strong> condition, so it’s just <strong>1.</strong></li></ol><p>So what’s really happening here is that you’re winding up the call stack, getting down to <strong>1</strong>, and then unwinding the stack. As you unwind the call stack, you multiply each result. <strong>1 x 2 x 3</strong> is <strong>6</strong>, and that’s your return value.</p><h3 id="reversing-a-string"><strong>Reversing A String</strong></h3><p>One of my co-workers recently told me about a whiteboard question that he’d been asked in an interview, and I thought it was kind of a fun problem.</p><blockquote>Write a function that accepts a string a reverses it. Recursively.</blockquote><p>If you’re the ambitious type, I’d encourage you to take a few minutes and try to solve this one on your own. Keep in mind the core principle of recursion, which is to take a big problem and break it down into smaller instances of itself.</p><p>If you got stuck (or you’re the decidedly <em>unambitious</em> type), here’s my solution:</p><p>Again, I’ll give a quick walk-through example in case you got stuck. We’ll use <strong>reverse(‘bar’)</strong> as a starting point.</p><ol><li><strong>reverse(‘bar’)</strong> is <strong>reverse(‘ar’) + ‘b’</strong></li><li><strong>reverse(‘ar’)</strong> is <strong>reverse(‘r’) + ‘a’</strong></li><li><strong>reverse(‘r’) </strong>meets our <strong>if</strong> condition, so it’s just <strong>‘r’</strong></li></ol><p>When the call stack unwinds, we end up with <strong>‘r’ + ‘a’ + ‘b’</strong>.</p><h3 id="writing-a-recursive-map-function">Writing a Recursive Map Function</h3><p>For our final example, we’re going to write a <strong>map()</strong> function. We want to be able to use it like this:</p><p>Again, I’d <em>strongly</em> encourage you to take a few minutes and try this one on your own. Here are a few hints and reminders:</p><ol><li><strong>map()</strong> should always return a <em>new</em> array.</li><li>Break the problem down into smaller chunks.</li><li>Remember the <strong>reverse()</strong> example.</li></ol><p>Oh, good. You’re back. How did it go?</p><p>j/k, this is a blog and I can’t hear you. lol.</p><p>Anyway, here’s how I did it:</p><p>So let’s go through this using the example I gave earlier:</p><ol><li>Call <strong>map() </strong>using the array <strong>[ ‘a’, ‘b’, ‘c’ ]</strong></li><li>Create a <em>new</em> array that holds the result of calling <strong>fn(‘a’)</strong></li><li>Return <strong>[ ‘A’ ].concat( map([ ‘b’, ‘c’ ]) )</strong></li><li>Repeat steps 1 through 3 with <strong>[ ‘b’, ‘c’ ]</strong></li><li>Repeat steps 1 through 3 for <strong>[ ‘c’ ]</strong></li><li>Eventually, we call <strong>map()</strong> with an empty array, which ends the recursion.</li></ol><p><strong>NOTE:</strong><br>You should never, ever, ever do this in a real application. You’ll blow out the stack on large arrays, and more importantly, you create a <strong>huge</strong> amount of garbage by instantiating so many new objects. Use <strong>Array#map</strong> in production code.</p><h3 id="wrap-up">Wrap Up</h3><p>Hopefully I did a decent job in explaining this stuff. If you’re still struggling a bit to wrap your head around recursion, the best advice I can give is to start with small examples and mentally trace the call stack. Try something like <strong>reverse(‘abc’) </strong>and walk through it, step-by-step. Eventually it’ll click.</p><p>— -</p><p>Follow me on <a href="http://twitter.com/kevincennis" rel="noopener">Twitter</a> or <a href="https://medium.com/@kevincennis/" rel="noopener">Medium</a> for more posts. I’m trying to write once a day for the next 30 days.</p><p>And if you’re in the Boston area and want to come work on crazy, interesting, hard problems with me at <a href="https://starry.com" rel="noopener">Starry</a>, shoot me an <a href="mailto:kennis84@gmail.com" rel="noopener">email</a>. I’m hiring.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
