---
card: "https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg"
tags: [Programming]
description: "In this article, I’ll explain how to solve freeCodeCamp’s “Co"
author: "Milad E. Fahmy"
title: "Two ways to confirm the ending of a String in JavaScript"
created: "2021-08-16T11:53:15+02:00"
modified: "2021-08-16T11:53:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-javascript tag-learning tag-algorithms tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Two ways to confirm the ending of a String in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bvdSF4jzFsH7foKJYEoNaA.jpeg" alt="Two ways to confirm the ending of a String in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I’ll explain how to solve freeCodeCamp’s “<a href="https://www.freecodecamp.com/challenges/confirm-the-ending" rel="noopener">Confirm the Ending</a><em>” </em>challenge. This involves checking whether a string ends with specific sequence of characters.</p><p>There are the two approaches I’ll cover:</p><ol><li>using the substr() method</li><li>using endsWith() method</li></ol><h3 id="the-algorithm-challenge-description">The Algorithm Challenge Description</h3><blockquote><em>Check if a string (first argument, <code>str</code>) ends with the given target string (second argument, <code>target</code>).</em><br><br><em>This challenge can be solved with the <code>.endsWith()</code> method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.</em></blockquote><pre><code class="language-js">function confirmEnding(string, target) {
return string;
}
confirmEnding("Bastian", "n");</code></pre><h3 id="provided-test-cases">Provided test cases</h3><pre><code class="language-js">confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
confirmEnding("He has to give me a new name", "name")should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.</code></pre><h3 id="approach-1-confirm-the-ending-of-a-string-with-built-in-functions-with-substr-">Approach #1: Confirm the Ending of a String With Built-In Functions — with substr()</h3><p>For this solution, you’ll use the String.prototype.substr() method:</p><ul><li>The <code><strong>substr()</strong></code> method returns the characters in a string beginning at the specified location through the specified number of characters.</li></ul><p>Why are you using <code>string.substr(-target.length)</code>?</p><p>If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge.</p><p>You don’t want to use <code>string.substr(-1)</code> to get the last element of the string, because if the target is longer than one letter:</p><pre><code>confirmEnding("Open sesame", "same")</code></pre><p>…the target won’t return at all.</p><p>So here <code>string.substr(-target.length)</code> will get the last index of the string ‘Bastian’ which is ‘n’.</p><p>Then you check whether <code>string.substr(-target.length)</code> equals the target (true or false).</p><pre><code class="language-js">
function confirmEnding(string, target) {
// Step 1. Use the substr method
if (string.substr(-target.length) === target) {
// What does "if (string.substr(-target.length) === target)" represents?
// The string is 'Bastian' and the target is 'n'
// target.length = 1 so -target.length = -1
// if ('Bastian'.substr(-1) === 'n')
// if ('n' === 'n')
// Step 2. Return a boolean (true or false)
return true;
} else {
return false;
}
}
confirmEnding('Bastian', 'n');</code></pre><p>Without comments:</p><pre><code class="language-js">
function confirmEnding(string, target) {
if (string.substr(-target.length) === target) {
return true;
} else {
return false;
}
}
confirmEnding('Bastian', 'n');</code></pre><p>You can use a <strong>ternary operator</strong> as a shortcut for the if statement:</p><pre><code>(string.substr(-target.length) === target) ? true : false;</code></pre><p>This can be read as:</p><pre><code>if (string.substr(-target.length) === target) {
return true;
} else {
return false;
}</code></pre><p>You then return the ternary operator in your function:</p><pre><code class="language-js">
function confirmEnding(string, target) {
return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');</code></pre><p>You can also refactor your code to make it more succinct by just returning the condition:</p><pre><code class="language-js">function confirmEnding(string, target) {
return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');</code></pre><h3 id="approach-2-confirm-the-ending-of-a-string-with-built-in-functions-with-endswith-">Approach #2: Confirm the Ending of a String With Built-In Functions — with endsWith()</h3><p>For this solution, you’ll use the String.prototype.endsWith() method:</p><ul><li>The <code>endsWith()</code> method determines whether a string ends with the characters of another string, returning <code>true</code> or <code>false</code> as appropriate. This method is case-sensitive.</li></ul><pre><code class="language-js">function confirmEnding(string, target) {
// We return the method with the target as a parameter
// The result will be a boolean (true/false)
return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the freeCodeCamp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="additional-resources">Additional Resources</h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="noopener">substr() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" rel="noopener">endsWith() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">Ternary Operator — MDN</a></li></ul>
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
