---
card: "https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg"
tags: [JavaScript]
description: "This article is based on Free Code Camp Basic Algorithm Scrip"
author: "Milad E. Fahmy"
title: "Three Ways to Factorialize a Number in JavaScript"
created: "2021-08-16T11:55:03+02:00"
modified: "2021-08-16T11:55:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-technology tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Three Ways to Factorialize a Number in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uKMWUxeIBoqzbgBNRHiyjQ.jpeg" alt="Three Ways to Factorialize a Number in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>This article is based on Free Code Camp Basic Algorithm Scripting “<a href="https://www.freecodecamp.com/challenges/factorialize-a-number" rel="noopener">Factorialize a Number</a>”</em></p><p><strong>In mathematics</strong>, the factorial of a non-negative integer <em>n</em> can be a tricky algorithm. In this article, I’m going to explain three approaches, first with the recursive function, second using a while loop and third using a for loop.</p><p>We have already seen a recursion approach on a String in the previous article, <a href="https://medium.com/@sonya.moisset/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.ekpftot4d" rel="noopener"><strong>How to Reverse a String in JavaScript in 3 Different Ways ?</strong></a> This time we will apply the same concept on a number.</p><h4 id="algorithm-challenge">Algorithm Challenge</h4><blockquote>Return the factorial of the provided integer.<br><br>If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.<br><br>Factorials are often represented with the shorthand notation <strong>n!</strong><br><br>For example: <strong>5! = 1 * 2 * 3 * 4 * 5 = 120</strong></blockquote><pre><code class="language-js">
function factorialize(num) {
return num;
}
factorialize(5);</code></pre><h4 id="provided-test-cases"><em>Provided test cases</em></h4><ul><li><strong><em>factorialize(0)</em></strong> should return 1</li><li><strong><em>factorialize(5)</em></strong> should return 120</li><li><strong><em>factorialize(10)</em></strong> should return 3628800</li><li><strong><em>factorialize(20)</em></strong> should return 2432902008176640000</li></ul><h3 id="what-is-factorializing-a-number-all-about">What is factorializing a number all about?</h3><p>When you factorialize a number, you are multiplying that number by each consecutive number minus one.</p><p>If your number is 5, you would have:</p><pre><code>5! = 5 * 4 * 3 * 2 * 1</code></pre><p>The pattern would be:</p><pre><code>0! = 1
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1</code></pre><h3 id="1-factorialize-a-number-with-recursion">1. Factorialize a Number With Recursion</h3><pre><code class="language-js">function factorialize(num) {
// If the number is less than 0, reject it.
if (num &lt; 0)
return -1;
// If the number is 0, its factorial is 1.
else if (num == 0)
return 1;
// Otherwise, call the recursive procedure again
else {
return (num * factorialize(num - 1));
/*
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: num === "?"        	         num * factorialize(num - 1)
1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
Second part of the recursion method
The method hits the if condition, it returns 1 which num will multiply itself with
The function will exit with the total value
5th call will return (5 * (5 - 1))     // num = 5 * 4
4th call will return (20 * (4 - 1))    // num = 20 * 3
3rd call will return (60 * (3 - 1))    // num = 60 * 2
2nd call will return (120 * (2 - 1))   // num = 120 * 1
1st call will return (120)             // num = 120
If we sum up all the calls in one line, we have
(5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
*/
}
}
factorialize(5);</code></pre><h4 id="without-comments-">Without comments:</h4><pre><code class="language-js">function factorialize(num) {
if (num &lt; 0)
return -1;
else if (num == 0)
return 1;
else {
return (num * factorialize(num - 1));
}
}
factorialize(5);</code></pre><h3 id="2-factorialize-a-number-with-a-while-loop">2. Factorialize a Number with a WHILE loop</h3><pre><code class="language-js">function factorialize(num) {
// Step 1. Create a variable result to store num
var result = num;
// If num = 0 OR num = 1, the factorial will return 1
if (num === 0 || num === 1)
return 1;
// Step 2. Create the WHILE loop
while (num &gt; 1) {
num--; // decrementation by 1 at each iteration
result = result * num; // or result *= num;
/*
num           num--      var result      result *= num
1st iteration:   5       4            5             20 = 5 * 4
2nd iteration:   4       3           20             60 = 20 * 3
3rd iteration:   3       2           60            120 = 60 * 2
4th iteration:   2       1          120            120 = 120 * 1
5th iteration:   1       0          120
End of the WHILE loop
*/
}
// Step 3. Return the factorial of the provided integer
return result; // 120
}
factorialize(5);</code></pre><h4 id="without-comments--1">Without comments:</h4><pre><code class="language-js">function factorialize(num) {
var result = num;
if (num === 0 || num === 1)
return 1;
while (num &gt; 1) {
num--;
result *= num;
}
return result;
}
factorialize(5);</code></pre><h3 id="3-factorialize-a-number-with-a-for-loop">3. Factorialize a Number with a FOR loop</h3><pre><code class="language-js">function factorialize(num) {
// If num = 0 OR num = 1, the factorial will return 1
if (num === 0 || num === 1)
return 1;
// We start the FOR loop with i = 4
// We decrement i after each iteration
for (var i = num - 1; i &gt;= 1; i--) {
// We store the value of num at each iteration
num = num * i; // or num *= i;
/*
num      var i = num - 1       num *= i         i--       i &gt;= 1?
1st iteration:   5     4 = 5 - 1         20 = 5 * 4        3          yes
2nd iteration:  20     3 = 4 - 1         60 = 20 * 3       2          yes
3rd iteration:  60     2 = 3 - 1        120 = 60 * 2       1          yes
4th iteration: 120     1 = 2 - 1        120 = 120 * 1      0          no
5th iteration: 120         0                120
End of the FOR loop
*/
}
return num; //120
}
factorialize(5);</code></pre><h4 id="without-comments--2">Without comments:</h4><pre><code class="language-js">function factorialize(num) {
if (num === 0 || num === 1)
return 1;
for (var i = num - 1; i &gt;= 1; i--) {
num *= i;
}
return num;
}
factorialize(5);</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p><a href="https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1"><strong>Three ways you can find the largest number in an array using JavaScript</strong><br><em>In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p>
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
