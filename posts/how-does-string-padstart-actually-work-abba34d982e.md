---
card: "https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif"
tags: [JavaScript]
description: Previously, I shared my usage of padStart to elegantly replac
author: "Milad E. Fahmy"
title: "How does String.padStart actually work?"
created: "2021-08-15T19:49:19+02:00"
modified: "2021-08-15T19:49:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-bitwise tag-binary tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How does String.padStart actually work?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif" alt="How does String.padStart actually work?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://medium.com/@yazeedb/youtube-durations-in-4-lines-of-javascript-e9a92cea67a4">Previously</a>, I shared my usage of <code>padStart</code> to elegantly replace what would’ve been loads of <code>if</code> statements. This magical method threw me off my rocker. I simply couldn’t believe it existed.</p>
<h3 id="whatitdoes">What it does</h3>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart">Mozilla Developer Network (MDN) Docs</a>:</p>
<blockquote>
<p>The <code>padStart()</code> method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length. The padding is applied from the start (left) of the current string.</p>
</blockquote>
<p>Keep <strong>prepending a string</strong> to <strong>another string</strong> until the <strong>target length</strong> is met.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*XgjBHs6faLKurpx6WOxmaQ.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*kvWWV9-Le3akATlMGLFIUA.png" alt=""></p>
<p>If the length is already less than the original string’s length, nothing happens.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*tmVv1tdy9Ye099ca2YBD4w.png" alt=""></p>
<p>And since <code>padStart</code> returns a string, we can chain its methods.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*LhQzpSiSSlvTDkcHyL8HtA.png" alt=""></p>
<p>See? 1, 2, 3, 4, and 5 are all less than or equal to <code>world</code>'s length of 5, so <code>padStart</code> doesn’t do anything.</p>
<h3 id="browsersupport">Browser support</h3>
<p>Unfortunately, support’s currently “meh”</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*OsJkuMt7gxC407zlxv1Imw.png" alt="">Desktop support<img src="https://cdn-media-1.freecodecamp.org/images/1*dtwqtBR1j9vDDi2AkpP61Q.png" alt="">Mobile support</p>
<p>You can either use <a href="http://babeljs.io/#polyfill">babel-polyfill</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#Polyfill">the polyfill by MDN</a>.</p>
<p>Here’s MDN’s polyfill.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Zf4kxLLpi3CsYN94Nl4axQ.png" alt=""></p>
<h3 id="somepointsofinterest">Some points of interest:</h3>
<ul>
<li><strong>Prototypes</strong> (lines 1 and 2)</li>
<li><strong>Bitwise operators</strong> (line 4)</li>
<li><code>padString.repeat</code> (line 14)</li>
<li><code>padString.slice</code> (line 17)</li>
</ul>
<p>I’m down to step through them if you are ?</p>
<p>Lines 1 and 2 aren’t that bad: “If <code>padStart</code> isn’t supported by the browser, let’s create our own <code>padStart</code> and add it” (that’s polyfill-ing in a nutshell).</p>
<p>A common way to check a method’s browser support is to inspect its object’s prototype. Since <code>padStart</code> is a string method, it should exist on <code>String.prototype</code>.</p>
<p>My old version of Safari doesn’t support <code>padStart</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*8zmT7mTVUn2Q4MqunHXicg.png" alt="">My Safari’s padStart support</p>
<p>But my Chrome and Firefox do.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*paNRJ_6YQ9ThHHxkwEpZwA.png" alt="">Chrome padStart support<img src="https://cdn-media-1.freecodecamp.org/images/1*jn3Exskqn_8EAQORGs_FKg.png" alt="">Firefox padStart support</p>
<p>Consider this safety check on line 1</p>
<pre><code class="language-js">if (!String.prototype.padStart) {
}
</code></pre>
<p>That <code>if</code> statement would only return <code>true</code> in my old Safari. It returns <code>false</code> in Chrome/Firefox, so no polyfill-ing happens.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Zf4kxLLpi3CsYN94Nl4axQ.png" alt=""></p>
<p>Moving on, line 2 creates a new function called <code>padStart</code> and assigns it to <code>String.prototype.padStart</code>. Because of JavaScript’s inheritance model, any string created afterwards can use <code>padStart</code>.</p>
<p>This function takes two parameters</p>
<p>1. <code>targetLength</code>: How long should the resulting string be?</p>
<p>2. <code>padString</code>: What are we padding it with?</p>
<p>Let’s shower this code with <code>debugger</code> statements.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*ttFL0luCSlQzdyOh-lpzOA.png" alt=""></p>
<p>I also removed that <code>if</code> statement from line 1, so even the native <code>String.prototype.padStart</code> will be overridden by this function–makes it useful if you want to debug in Chrome.</p>
<p><strong><em>Don’t override prototypes in production, kids!</em></strong></p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*srYXzRnU1Qt46J3x91vKjQ.png" alt=""></p>
<p>Using our initial example</p>
<pre><code class="language-js">'world'.padStart(11, 'hello ');
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*lFrlt-xxEwyByiesDNqHpw.png" alt=""></p>
<p>Check out line 2. We see that <code>targetLength</code> and <code>padString</code> made their way into our function. No craziness yet, but it’s coming. I’ve been avoiding line 5 long enough.</p>
<h3 id="bitwiseoperators">Bitwise operators</h3>
<p>The comment above line 5 briefly describes its purpose: “If <code>targetLength</code> is a number, round it down. If it’s not a number, make it 0”.</p>
<p><strong>Bitwise operators</strong> make this possible.</p>
<p><code>targetLength &gt;&gt; 0;</code></p>
<p>This operator <code>&gt;&gt;</code> is known as a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift">sign-propagating right shift</a> (LOLWUT?).<br>
You use it with two numbers</p>
<p><code>a &gt;&gt; b</code></p>
<p><strong>What this does:</strong></p>
<ol>
<li><code>a</code> is converted into binary (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers">details here</a>).</li>
<li>Binary <code>a</code> gets <em>right-shifted</em> <code>b</code> times.</li>
</ol>
<p>Our <code>targetLength</code> is 11–that’s 1011 in binary (here’s a <a href="https://www.binaryhexconverter.com/binary-to-decimal-converter">converter</a> if you don’t believe me ?).</p>
<p>A side effect of converting to binary is that numbers get rounded down and <em>most</em> non-numbers become 0.</p>
<p>Try the following examples</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*G9R342JuTLzAhZ3zXB5qYw.png" alt=""></p>
<p>See? Fractions become whole numbers. Non-numbers become 0, with one notable exception…</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*S5QRnVnjsJaP6LSR-f1yVg.png" alt=""></p>
<p>Binary is just 1’s and 0’s, right? Those 1’s and 0’s represent “on” and “off” switches–<code>true</code> and <code>false</code>. <code>true</code>'s binary form is 1, and <code>false</code>'s binary form is 0. Just keep that in mind.</p>
<p>So now that we’ve “sanitized” <code>targetLength</code>, we begin the right-shifting.</p>
<p>Right-shift means you move each bit to the right <code>n</code> times. That’s it.</p>
<p>Here’s a PowerPoint visualization of <code>11 &gt;&gt; 1</code> (I forgot how great PowerPoint actually is).</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jANUTARhf9DaSPo_FdobsQ.gif" alt=""></p>
<p>Turn 11 into 1011 and right-shift it 1 time. Your end result is 101, which is 5 in binary.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*hWhIMjgIzV8HsBHsoqaXkw.png" alt=""></p>
<p>But our code says <code>targetLength &gt;&gt; 0</code>.</p>
<h3 id="sowererightshifting0times">So we’re right-shifting 0 times…</h3>
<p>The whole point of right-shifting 0 times is to abuse that side effect of converting <code>targetLength</code> into binary. We don’t actually want to shift anything because that’ll change the value.</p>
<h3 id="movingon">Moving on</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*9fp5LQLp8M02XXNypggPAw.png" alt=""></p>
<p>Jump to line 7’s <code>debugger</code> now. <code>targetLength</code> has been sanitized. <strong>Next!</strong></p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*5olkuOlk90Alu9tVfbjS9Q.png" alt=""></p>
<p><strong>Line 11.</strong></p>
<pre><code class="language-js">padString = String(padString || ' ');
</code></pre>
<p>If we don’t provide a <code>padString</code> argument, it defaults to an empty space. I actually never noticed until now.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*esccGoVlxpemIBmMunjmXA.png" alt=""></p>
<p><strong>Line 17.</strong></p>
<p>Notice how line 13 had another safety check, “If the original string’s length is greater than <code>targetLength</code>, don’t do anything. Just return the original string”</p>
<p>That makes sense because if our <code>targetLength</code> is 1, but the string is already 10 characters, what’s the point? We demonstrated that earlier with</p>
<pre><code class="language-js">// just returns 'world'
'world'.padStart(0, 'hello ');
</code></pre>
<p>Line 18 determines how many <em>more</em> characters we need by subtracting <code>targetLength</code> from the original string’s length. We need 6, in this case.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*fNa4w2qk360VICQLqvp6jQ.png" alt=""></p>
<p><strong>Line 27.</strong></p>
<p>We skipped that <code>if</code> statement on line 20 because <code>targetLength</code> and <code>padString.length</code> just happened to be the same, but we’ll revisit that soon.</p>
<p>For now, we’re stopped right before line 29. Let’s break it up.</p>
<pre><code class="language-js">padString.slice(0, targetLength);
</code></pre>
<p>The good old <code>String.prototype.slice</code> method.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"><strong>MDN Docs</strong></a>:</p>
<blockquote>
<p>The <code>slice()</code> method extracts a section of a string and returns it as a new string.</p>
</blockquote>
<p>It’s index-based, so we’re starting at index 0 of <code>padString</code>, and grabbing the amount of characters equal to <code>targetLength</code>. It’s kind of like</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*5fgldncMrn1M42TDNexc5w.png" alt=""></p>
<p>Return that sliced <code>padString</code> combined with the original string, and you’re done!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*dPcP4geY5bM3H_Qu53rF3Q.png" alt=""></p>
<h3 id="almostdone"><em>Almost</em> done</h3>
<p>I’d normally conclude here, but we haven’t explored that <code>if</code> statement on line 20. To make sure we hit it this time, let’s try another earlier example</p>
<pre><code class="language-js">'yo'.padStart(20, 'yo');
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*xMe4-5cz9E4TcaxRV-OpCw.png" alt=""></p>
<p>I skipped to line 20 because we already know what happens up to this point.</p>
<p><code>if (targetLength &gt; padString.length)</code></p>
<p><code>targetLength</code> is 18, and <code>padString</code> is <code>'yo'</code>, with 2 as its length.<br>
18 &gt; 2, so what next?</p>
<pre><code class="language-js">padString += padString.repeat(targetLength / padString.length);
</code></pre>
<p>Remember, <code>padStart</code> returns a <em>sliced</em> <code>padString</code> + original string. If you want to pad <code>'yo'</code> with <code>'yo'</code> until it’s 20 characters long, you’ll have to repeat many times. This is where that logic happens, using <code>padString.repeat</code>.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"><strong>MDN Docs</strong></a>:</p>
<blockquote>
<p>The <code>repeat()</code> method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.</p>
</blockquote>
<p>So it copy/pastes the string <code>n</code> times.</p>
<p>In order to find out how many repeats we need, divide <code>targetLength</code> by <code>padString.length</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*8uNfkR56h7AhooHJILFSJQ.png" alt=""></p>
<p>Repeat <code>'yo'</code> 9 times and get a string of <code>'yo'</code>s that is 18 characters long. Add that to your original <code>'yo'</code>, and your final count is 20 characters.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*0A9siQbKWnKn6cFuidfNMQ.png" alt=""></p>
<p>Mission accomplished. Until next time!</p>
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
