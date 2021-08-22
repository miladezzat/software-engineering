---
card: "https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png"
tags: [JavaScript]
description: by Pramod Sripada
author: "Milad E. Fahmy"
title: "Infix Expressions VS Postfix Expressions, and How to Build a Better JavaScript Calculator"
created: "2021-08-15T19:56:00+02:00"
modified: "2021-08-15T19:56:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-mathematics tag-education tag-programming tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Infix Expressions VS Postfix Expressions, and How to Build a Better JavaScript Calculator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6YO8587U_vTxqVw-OUiqsA.png" alt="Infix Expressions VS Postfix Expressions, and How to Build a Better JavaScript Calculator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Pramod Sripada</p>
<h1 id="infix-expressions-vs-postfix-expressions-and-how-to-build-a-better-javascript-calculator">Infix Expressions VS Postfix Expressions, and How to Build a Better JavaScript Calculator</h1>
<p>If you want to make your Simple Calculator a lot smarter, this post is for you.</p>
<p>You might asking, “What’s wrong with my simple calculator.” Well, it may do all the operations correctly, but the sequence in which it does them is probably wrong.</p>
<p>The simple calculator contains just four operations: addition, subtraction, division and multiplication. Many of us might have studied in high school about the precedence of operators: division and multiplication have the same priority, and have higher priority than addition and subtraction, which have the same priority.</p>
<figcaption>“Please excuse my Dear Aunt Sally” is a common mnemonic for remembering the order of operations (image credit: <a href="http://www.oneyearlease.org/" rel="noopener" target="_blank" title="">oneyearlease.org</a>)</figcaption>
</figure>
<p>A quick recap of operator precedence can be found here: <a href="http://www.math.utah.edu/online/1010/precedence/" rel="noopener">http://www.math.utah.edu/online/1010/precedence/</a>.</p>
<p>The reason I am stressing operator precedence is because a simple calculator performs most of the calculations wrong. For example, 1+2x3 should be equal to 7 according to a normal calculator, but the simple calculator gives a result of 9.</p>
<p>The reason simple calculator does it all wrong is because it just multiplies the two operands, with the operator between them, and produces the result.</p>
<p>We just can’t blame the simple calculator. After all, it was meant to be simple. So now you might start thinking on how to rearrange the operators, so as to get the correct result. Yes, you are on the right track. For that, we need to know about two more concepts in computer science: Infix expressions and Postfix expressions.</p>
<p>In simple words, the arithmetic expressions that we understand are Infix expressions and the arithmetic expression that the computer understands are Postfix expressions.</p>
<p>Both the infix and postfix expressions create the same results. It’s just humans are used to solving infix expressions, and computers are used to solving postfix expressions.</p>
<p>Another key feature in the postfix expression is that it contains operators succeeding the operands according to precedence, which makes it easy for the computer to evaluate them using stacks, and produce the correct result.</p>
<p>By now you must be thinking about how to convert the infix expression entered by your user into a postfix expression. There is an algorithm that converts an infix expression into a postfix expression that can be found <a href="http://csis.pace.edu/~wolf/CS122/infix-postfix.htm" rel="noopener"><strong><em>here</em></strong></a>.</p>
<p>Here’s what this process looks like:</p>
<figcaption>Infix to Postfix conversion</figcaption>
</figure>
<p>The postfix expression should be evaluated by an algorithm, which can be found <a href="http://scriptasylum.com/tutorials/infix_postfix/algorithms/postfix-evaluation/" rel="noopener"><strong><em>here</em></strong></a>. It is similar to the evaluation done by a simple calculator, except that the operators succeed the operands in postfix expressions.</p>
<p>Eventually, the primary motive of converting an infix expression into a postfix expression is to preserve the precedence of the operators while the computer evaluates the expression.</p>
<p>Check out my fully functional calculator that incorporates these principles <a href="http://codepen.io/pramodvspk/full/RWzxgK/" rel="noopener"><strong><em>here</em></strong></a><strong><em>.</em></strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
