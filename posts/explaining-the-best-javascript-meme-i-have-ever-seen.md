---
card: "/images/default.jpg"
tags: [JavaScript]
description: "I unintentionally found this JavaScript meme on Reddit, and i"
author: "Milad E. Fahmy"
title: "The Best JavaScript Meme I ve Ever Seen, Explained in detail"
created: "2021-08-16T11:28:49+02:00"
modified: "2021-08-16T11:28:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-react tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">The Best JavaScript Meme I've Ever Seen, Explained in detail</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/cover-photo.png 300w,
/news/content/images/size/w600/2019/07/cover-photo.png 600w,
/news/content/images/size/w1000/2019/07/cover-photo.png 1000w,
/news/content/images/size/w2000/2019/07/cover-photo.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/cover-photo.png" alt="The Best JavaScript Meme I've Ever Seen, Explained in detail">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I unintentionally found this JavaScript meme on Reddit, and it's the best one I've ever seen.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png" alt="best-js-meme-to-date-2"></p>
<p>You can verify this meme's accuracy by running each code snippet in Developer Tools. The result isn't surprising, but still kind of disappointing.</p>
<p>Of course this little experiment lead me to wonder...</p>
<h2 id="whydoesthishappen">Why Does This Happen?</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/why-does-this-happen.png" alt="why-does-this-happen"></p>
<p>With experience, I've learned to embrace JavaScript's smooth sides while bewaring its prickly pines. Nonetheless, this corner case's details still nicked me.</p>
<p>It's just as Kyle Simpson says...</p>
<blockquote>
<p>"I don’t think anyone ever really knows JS, not completely anyway."</p>
</blockquote>
<p>When these cases pop up, it's best to consult the source–the <a href="http://ecma-international.org/ecma-262/">official ECMAScript specification</a> that JavaScript is built from.</p>
<p>With the spec in hand, let's deeply understand what's going on here.</p>
<h2 id="panel1introducingcoercion">Panel 1 - Introducing Coercion</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png" alt="panel-1-1"></p>
<p>If you run <code>0 == "0"</code> in your developer console, why does it return <code>true</code>?</p>
<p><code>0</code> is a number, and <code>"0"</code> is a string, they should never be the same! Most programming languages respect that. <code>0 == "0"</code> in Java, for example, returns this:</p>
<pre><code>error: incomparable types: int and String
</code></pre>
<p>This makes perfect sense. If you want to compare an int and String in Java, you must first convert them to the same type.</p>
<p>But this is JavaScript, y'all!<br>
<img src="https://www.freecodecamp.org/news/content/images/2019/07/this-is-javascript.jpeg" alt="this-is-javascript"></p>
<p>When you compare two values via <code>==</code>, one of the values may undergo <em>coercion</em>.</p>
<blockquote>
<p>Coercion–<strong>Automatically</strong> changing a value from one type to another.</p>
</blockquote>
<p><em><strong>Automatically</strong></em> is the key word here. Instead of you <em>explicitly</em> converting your types, JavaScript does it for you behind the scenes.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/scumbag-javascript.jpeg" alt="scumbag-javascript"></p>
<p>This is convenient if you're purposely exploiting it, but potentially harmful if you're unaware of its implications.</p>
<p>Here's the official <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">ECMAScript Language Specification</a> on that. I'll paraphrase the relevant part:</p>
<blockquote>
<p>If x is Number and y is String, return x == ToNumber(y)</p>
</blockquote>
<p>So for our case of <code>0 == "0"</code>:</p>
<blockquote>
<p>Since 0 is Number and "0" is String, return 0 == ToNumber("0")</p>
</blockquote>
<p>Our string <code>"0"</code> has been secretly converted to <code>0</code>, and now we have a match!</p>
<pre><code class="language-js">0 == "0" // true
// The second 0 became a number!
// so 0 equals 0 is true....
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/that-string-secretly-became-a-number.jpeg" alt="that-string-secretly-became-a-number"></p>
<p>Weird right? Well get used to it, we're not even halfway done.</p>
<h2 id="panel2arraysgetcoercedtoo">Panel 2 - Arrays Get Coerced Too</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/panel-2.png" alt="panel-2"></p>
<p>This nonsense isn't limited to primitives like strings, numbers, or booleans. Here's our next comparison:</p>
<pre><code class="language-js">0 == [] // true
// What happened...?
</code></pre>
<p>Coercion again! I'll paraphrase the spec's relevant part:</p>
<blockquote>
<p>If x is String or Number and y is Object, return x == ToPrimitive(y)</p>
</blockquote>
<p>Three things here:</p>
<h3 id="1yesarraysareobjects">1. Yes, arrays are objects</h3>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/arrays-are-objects.jpg" alt="arrays-are-objects"></p>
<p>Sorry to break it you.</p>
<h3 id="2emptyarraybecomesemptystring">2. Empty array becomes empty string</h3>
<p>Again <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-8.12.8">according to the spec</a>, JS first looks for an object's <code>toString</code> method to coerce it.</p>
<p>In the case of arrays, <code>toString</code> joins all of its elements and returns them as a string.</p>
<pre><code class="language-js">[1, 2, 3].toString() // "1,2,3"
['hello', 'world'].toString() // "hello,world"
</code></pre>
<p>Since our array's empty, we have nothing to join! Therefore...</p>
<pre><code class="language-js">[].toString() // ""
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/empty-array-coerces-to-empty-string-1.jpeg" alt="empty-array-coerces-to-empty-string-1"></p>
<p>The spec's <code>ToPrimitive</code> turns this empty array into an empty string. References are <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-9.1">here</a> and <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-8.12.8">here</a> for your convenience (or confusion).</p>
<h3 id="3emptystringthenbecomes0">3. Empty string then becomes 0</h3>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/empty-strings-become-0.jpeg" alt="empty-strings-become-0"></p>
<p>You can't make this stuff up. Now that we've coerced the array to <code>""</code>, we're back to the first algorithm...</p>
<blockquote>
<p>If x is Number and y is String, return x == ToNumber(y)</p>
</blockquote>
<p>So for <code>0 == ""</code></p>
<blockquote>
<p>Since 0 is Number and "" is String, return 0 == ToNumber("")</p>
</blockquote>
<p><code>ToNumber("")</code> returns 0.</p>
<p>Therefore, <code>0 == 0</code> once again...</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/coercion-every-time-2.jpeg" alt="coercion-every-time-2"></p>
<h2 id="panel3quickrecap">Panel 3 - Quick Recap</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/panel-3-1.png" alt="panel-3-1"></p>
<h3 id="thisistrue">This is true</h3>
<pre><code class="language-js">0 == "0" // true
</code></pre>
<p>Because coercion turns this into <code>0 == ToNumber("0")</code>.</p>
<h3 id="thisistrue">This is true</h3>
<pre><code class="language-js">0 == [] // true
</code></pre>
<p>Because coercion runs twice:</p>
<ol>
<li><code>ToPrimitive([])</code> gives empty string</li>
<li>Then <code>ToNumber("")</code> gives 0.</li>
</ol>
<p>So then tell me...according to the above rules, what should this return?</p>
<pre><code class="language-js">"0" == []
</code></pre>
<h2 id="panel4false">Panel 4 - FALSE!</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/panel-4-1.png" alt="panel-4-1"></p>
<p>FALSE! Correct.</p>
<p>This part makes sense if you understood the rules.</p>
<p>Here's our comparison:</p>
<pre><code class="language-js">"0" == [] // false
</code></pre>
<p>Referencing the spec once again:</p>
<blockquote>
<p>If x is String or Number and y is Object, return x == ToPrimitive(y)</p>
</blockquote>
<p>That means...</p>
<blockquote>
<p>Since "0" is String and [] is Object, return x == ToPrimitive([])</p>
</blockquote>
<p><code>ToPrimitive([])</code> returns empty string. The comparison has now become</p>
<pre><code class="language-js">"0" == ""
</code></pre>
<p><code>"0"</code> and <code>""</code> are both strings, so JavaScript says <em>no more coercion needed</em>. This is why we get <code>false</code>.</p>
<h2 id="conclusion">Conclusion</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/just-use-triple-equals.jpeg" alt="just-use-triple-equals"></p>
<p>Use triple equals and sleep soundly at night.</p>
<pre><code class="language-js">0 === "0" // false
0 === [] // false
"0" === [] // false
</code></pre>
<p>It avoids coercion entirely, so I guess it's more efficient too!</p>
<p>But the performance increase is almost meaningless. The real win is the increased confidence you'll have in your code, making that extra keystroke totally worth it.</p>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a <strong>free</strong> 15-30 minute call to discuss Front-End development questions regarding code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss an ongoing coaching relationship that'll help you reach your Front-End development goals!</p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
