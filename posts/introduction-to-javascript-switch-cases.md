---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this short article, I will introduce you to JavaScript swi
author: "Milad E. Fahmy"
title: "Introduction to JavaScript Switch Cases"
created: "2021-08-15T19:33:37+02:00"
modified: "2021-08-15T19:33:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-100daysofcode tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">Introduction to JavaScript Switch Cases</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/0_f2yYmYJFuG3pH07G.jpg 300w,
/news/content/images/size/w600/2019/06/0_f2yYmYJFuG3pH07G.jpg 600w,
/news/content/images/size/w1000/2019/06/0_f2yYmYJFuG3pH07G.jpg 1000w,
/news/content/images/size/w2000/2019/06/0_f2yYmYJFuG3pH07G.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/0_f2yYmYJFuG3pH07G.jpg" alt="Introduction to JavaScript Switch Cases">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this short article, I will introduce you to JavaScript switch cases and how to use them with practical examples.</p>
<p>This article will explain better with more practical examples to help you understand switch cases in depth.</p>
<h3 id="prerequisites-">Prerequisites.</h3>
<ul>
<li>Basic JavaScript knowledge</li>
<li>Code editor</li>
<li>Web Browser</li>
<li>Your brain :)</li>
</ul>
<p>A <code>switch</code> statement can basically replace multiple <code>if</code> checks in JavaScript.</p>
<p>It gives a more descriptive way to compare a value with multiple variants.</p>
<h3 id="the-switch-syntax"><strong>The Switch Syntax</strong></h3>
<p>The <code>switch</code> has one or more <code>case</code> blocks and an optional default case.</p><pre><code class="language-javascript">switch(x) {
case 'value1':  // if (x === 'value1')
//code here
[break]
case 'value2':  // if (x === 'value2')
//code here
[break]
default:
//code here
[break]
}</code></pre>
<ul>
<li>The value of <code>x</code> is checked for strict equality to the value from the first <code>case</code> (that is, <code>value1</code>) then to the second (<code>value2</code>) and so on.</li>
<li>If the equality is found, <code>switch</code> starts to execute the code starting from the corresponding <code>case</code>, until the nearest <code>break</code>(or until the end of <code>switch</code>).</li>
<li>If no case is matched then the <code>default</code> code is executed (if it exists).</li>
</ul>
<h3 id="some-few-real-examples"><strong>Some few real examples</strong></h3>
<ul>
<li><strong><strong><em>Simple Play &amp; Pause Switch</em></strong></strong></li>
</ul>
<p>The <code>switch</code> statement can be used for multiple branches based on a number or string:</p><pre><code class="language-javascript">switch (movie) {
case 'play':
playMovie();
break;
case 'pause':
pauseMovie();
break;
default:
doNothing();
}</code></pre>
<p>If you don’t add a <code>break</code> statement, the execution will "fall through" to the next level. It's essential that you deliberately label the fall through with a comment if you really meant it to aid debugging:</p><pre><code class="language-javascript">switch (movie) {
case 'play': // fallthrough
case 'pause':
pauseMovie();
break;
default:
doNothing();
}</code></pre>
<p>The default clause is optional. You can have expressions in both the switch part and the cases if you like; comparisons take place between the two using the <code>===</code> operator:</p><pre><code class="language-javascript">switch (3 + 7) {
case 5 + 5:
correct();
break;
default:
neverhappens();
}</code></pre>
<ul>
<li><strong><strong><em>Simple Maths Calc Switch</em></strong></strong></li>
</ul><pre><code class="language-javascript">let average = 2 + 6;
switch (average) {
case 4:
alert( 'Too small' );
break;
case 8:
alert( 'Exactly!' );
break;
case 10:
alert( 'Too large' );
break;
default:
alert( "Incorrect values!" );
}</code></pre>
<p>Here the <code>switch</code> starts to compare <code>average </code>from the first <code>case</code> variant that is <code>4</code>. The match fails.</p>
<p>Then <code>8</code>. That’s a match, so the execution starts from <code>case 8</code>until the nearest <code>break</code>.</p>
<p>If <strong><strong>there is no </strong></strong><code><strong><strong>break</strong></strong></code><strong><strong> then the execution continues with the next </strong></strong><code><strong><strong>case</strong></strong></code><strong> <strong>without any checks.</strong></strong></p>
<p>Here is an example without <code>break</code>:</p><pre><code class="language-javascript">let average = 2 + 6;
switch (average) {
case 4:
alert( 'Too small' );
case 8:
alert( 'Exactly!' );
case 10:
alert( 'Too big' );
default:
alert( "Incorrect values!" );
}</code></pre>
<p>In the example above we’ll see sequential execution of three <code>alerts</code>:</p><pre><code class="language-javascript">alert( 'Exactly!' );
alert( 'Too big' );
alert( "Incorrect values!" );</code></pre>
<ul>
<li><strong><strong><em>getDay() method switch case</em></strong></strong></li>
</ul>
<p>The <code>getDay()</code> method returns the weekday as a number between 0 and 6.</p>
<blockquote><em>Sunday=0, Monday=1, Tuesday=2 , Wednesday=3, Thursday=4, Friday=5, Saturday=6</em></blockquote>
<p>This example uses the weekday number to calculate the weekday name:</p><pre><code class="language-javascript">switch (new Date().getDay()) {
case 0:
day = "Sunday";
break;
case 1:
day = "Monday";
break;
case 2:
day = "Tuesday";
break;
case 3:
day = "Wednesday";
break;
case 4:
day = "Thursday";
break;
case 5:
day = "Friday";
break;
case 6:
day = "Saturday";
}</code></pre>
<p>The result of day will be the current weekday in day format</p>
<p>PS: This would change according to when you’re reading this article</p>
<p>I wrote this artcle on 13/06/2019 which is a Thursday, so the result would be:</p><pre><code>Thursday</code></pre>
<h3 id="the-default-keyword">The default Keyword</h3>
<p>The <strong><strong>default</strong></strong> keyword specifies the code to run if there is no case match, more like an else statement:</p><pre><code class="language-javascript">switch (new Date().getDay()) {
case 6:
text = "Today is Saturday";
break;
case 0:
text = "Today is Sunday";
break;
default:
text = "Its not weekend yet!";
}</code></pre>
<p>The result of text will be:</p><pre><code>Its not weekend yet!</code></pre>
<p>The <strong><strong>default</strong></strong> case does not have to be the last case in a switch block:</p><pre><code class="language-javascript">switch (new Date().getDay()) {
default:
text = "Its not weekend yet!";
break;
case 6:
text = "Today is Saturday";
break;
case 0:
text = "Today is Sunday";
}</code></pre>
<blockquote><em><strong><strong>If default is not the last case in the switch block, remember to end the default case with a break.</strong></strong></em></blockquote>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>There are so many practical examples of switch cases, you can head over to <a href="https://google.com/" rel="noopener">google.com </a>and run a quick search for more switch cases examples.</p>
<p>If this article helped you, show it by sharing.</p>
<p>Thanks for reading!</p>
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
