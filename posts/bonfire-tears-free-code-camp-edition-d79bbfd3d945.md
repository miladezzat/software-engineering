---
card: "https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg"
tags: [JavaScript]
description: by Tiffany White
author: "Milad E. Fahmy"
title: "Crying Algorithm Tears"
created: "2021-08-15T19:56:07+02:00"
modified: "2021-08-15T19:56:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-learning-to-code tag-programming tag-women-in-tech tag-women ">
<header class="post-full-header">
<h1 class="post-full-title">Crying Algorithm Tears</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*reQ5pMmpwq1G06h-.jpg" alt="Crying Algorithm Tears">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tiffany White</p>
<h1 id="crying-algorithm-tears">Crying Algorithm Tears</h1>
<blockquote>“Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning to do afterward.” ― Kurt Vonnegut</blockquote>
<p>There comes a point in every new programmers life when they hit a barrier, a wall, a threshold between understanding and not understanding the material at hand.</p>
<p>I hit that threshold yesterday.</p>
<p>And the day before yesterday.</p>
<p>In retrospect, the solution was so simple. I had the right idea several times. I got encouraged, and explained to, and guided, but it was like their words just bounced off of my skull instead of being absorbed into my grey matter.</p>
<p>The algorithm challenge was:</p>
<blockquote>Check if a string (first argument) ends with the given target string (second argument).</blockquote>
<blockquote>Remember to use Read-Search-Ask if you get stuck. Write your own code.</blockquote>
<blockquote>Here are some helpful links:</blockquote>
<blockquote>String.substr()</blockquote>
<p>The code Free Code Camp started me off with:</p><pre><code>function end(str, target) { </code></pre><pre><code>// “Never give up and good luck will find you.” </code></pre><pre><code>// — Falcor </code></pre><pre><code>return str; </code></pre><pre><code>}</code></pre><pre><code>end(“Bastian”, “n”); </code></pre>
<h4 id="what-the-hell-substrings">What the Hell? Substrings?</h4>
<blockquote>You’ve done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. –Ralph Marston</blockquote>
<p>I knew from looking at the failing tests that my algorithm had to handle strings of different lengths. But I kept hardcoding for just one of the test’s strings.</p>
<p>How do I code this thing for different string lengths? How do I get the length of a string? .length() right? YES. But <em>how</em>. Where do I put the .length()?</p>
<p>I had this code:</p><pre><code>function end(str, target) { </code></pre><pre><code>     //”Never give up and good luck will find you.” </code></pre><pre><code>    // — Falcor</code></pre><pre><code>   //’abcdefghijklmn’.substr(0, 3)</code></pre><pre><code>  // ‘abc’</code></pre><pre><code> //”grab 3 characters starting with the character at address number 0" ​ </code></pre><pre><code>    var isEqual = str.substr(6, 1) === target.substr(0, 1); </code></pre><pre><code>    return isEqual;</code></pre><pre><code>} ​ end(“Bastian”, “n”);</code></pre>
<p>I found out in one of Free Code Camp’s help chat rooms that you can get to the end of a string by using a negative number. No need to keep popping off all those letters before the “n” on Bastian.</p>
<p>But I continued to hard code for “Bastian” and “n”.</p>
<p>I needed a broader approach.</p>
<p>I tried:</p><pre><code>function end(str, target) {</code></pre><pre><code>​   var isEqual = str.substr(-1) === target.substr(-1); return isEqual;</code></pre><pre><code>} ​ end(“Bastian”, “n”);</code></pre>
<p>But I wasn’t really making any progress. All but one of the tests were passing, and I still wasn’t really utilizing .length() to address the variance in string length.</p>
<p>So I tried this:</p><pre><code>function end(str, target) {</code></pre><pre><code>    var n = target.length;     var z = str.length;     var isEqual = str.substr(-1) === target.substr(-1); return isEqual;</code></pre><pre><code>} ​ end(“Bastian”, “n”);</code></pre>
<p>Same result. I knew I needed to have .length() up there. But where to go after that?</p>
<h4 id="aha-">Aha!</h4>
<p>Finally, I had to be guided to the answer. The woman was in Britain and I am pretty sure I was keeping her awake. But together we came up with this solution:</p><pre><code>// You didn't think I'd give it away, did you?</code></pre>
<p>And finally I understood it. It took a while to get there, but when we reached the solution, I felt like a complete idiot. How could I have not understood this earlier?</p>
<p>I cried. I literally cried. Part of that was just me already being emotional.</p>
<p>The other part was me not wanting to put my fist through my MacBook Pro’s screen.</p>
<p>Strings are characters. Not words. And I was totally getting stuck on that.</p>
<p>Algorithm tears indeed.</p>
<p><em>Originally published at <a href="http://helloburgh.me/2015/11/26/bonfire-tears-free-code-camp-edition/" rel="noopener">Code Newbie in Pittsburgh</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
