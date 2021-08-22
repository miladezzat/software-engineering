---
card: "https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg"
tags: [JavaScript]
description: "In this article, I’ll explain how to solve freeCodeCamp’s “Re"
author: "Milad E. Fahmy"
title: "Three ways to repeat a string in JavaScript"
created: "2021-08-16T11:53:09+02:00"
modified: "2021-08-16T11:53:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-technology tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Three ways to repeat a string in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5xZaBnyrMAe9JkgajD3NbA.jpeg" alt="Three ways to repeat a string in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I’ll explain how to solve freeCodeCamp’s “<a href="https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string" rel="noopener">Repeat a string repeat a string</a><em>” </em>challenge. This involves repeating a string a certain number of times.</p><p>There are the three approaches I’ll cover:</p><ol><li>using a while loop</li><li>using recursion</li><li>using ES6 repeat() method</li></ol><h3 id="the-algorithm-challenge-description">The Algorithm Challenge Description</h3><blockquote><em>Repeat a given string (first argument) <code>num</code> times (second argument). Return an empty string if <code>num</code> is not a positive number.</em></blockquote><pre><code class="language-js">function repeatStringNumTimes(str, num) {
return str;
}
repeatStringNumTimes("abc", 3);</code></pre><h3 id="provided-test-cases">Provided test cases</h3><pre><code class="language-js">repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".</code></pre><h3 id="approach-1-repeat-a-string-with-a-while-loop">Approach #1: Repeat a String with a While Loop</h3><p>A while statement executes its statement as long as a specified condition evaluates to true.</p><p>A while statement looks like this:</p><pre><code class="language-js">while (condition)
statement</code></pre><p>with a condition which is evaluated before each pass through the loop. If the condition is true, the statement is executed. If the condition is false, the execution continues with any statement after the while loop.</p><p>The statement is executed as long as the condition is true. Here’s the solution:</p><pre><code class="language-js">
function repeatStringNumTimes(string, times) {
// Step 1. Create an empty string that will host the repeated string
var repeatedString = "";
// Step 2. Set the While loop with (times &gt; 0) as the condition to check
while (times &gt; 0) { // As long as times is greater than 0, the statement is executed
// The statement
repeatedString += string; // Same as repeatedString = repeatedString + string;
times--; // Same as times = times - 1;
}
/* While loop logic
Condition       T/F       repeatedString += string      repeatedString        times
First iteration    (3 &gt; 0)  true            "" + "abc"                  "abc"               2
Second iteration   (2 &gt; 0)  true           "abc" + "abc"               "abcabc"             1
Third iteration    (1 &gt; 0)  true          "abcabc" + "abc"            "abcabcabc"           0
Fourth iteration   (0 &gt; 0)  false
}
*/
// Step 3. Return the repeated string
return repeatedString; // "abcabcabc"
}
repeatStringNumTimes("abc", 3);</code></pre><p>And again, without comments:</p><pre><code class="language-js">function repeatStringNumTimes(string, times) {
var repeatedString = "";
while (times &gt; 0) {
repeatedString += string;
times--;
}
return repeatedString;
}
repeatStringNumTimes("abc", 3);</code></pre><h3 id="approach-2-repeat-a-string-using-a-conditional-and-recursion">Approach #2: Repeat a String using a Conditional and Recursion</h3><p>Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. There are a few key features of recursion that must be included in order for it to work properly.</p><ul><li>The first is a <strong><em>base case</em></strong>: this is a statement, usually within a conditional clause like <code>if</code>, that stops the recursion.</li><li>The second is a <strong><em>recursive case</em></strong>: this is the statement where the recursive function is called on itself.</li></ul><p>Here’s the solution:</p><pre><code class="language-js">function repeatStringNumTimes(string, times) {
// Step 1. Check if times is negative and return an empty string if true
if (times &lt; 0) {
return "";
}
// Step 2. Check if times equals to 1 and return the string itself if it's the case.
if (times === 1) {
return string;
}
// Step 3. Use recursion
else {
return string + repeatStringNumTimes(string, times - 1); // return "abcabcabc";
}
/*
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
times       string + repeatStringNumTimes(string, times - 1)
1st call         3                 "abc" + ("abc", 3 - 1)
2nd call         2                 "abc" + ("abc", 2 - 1)
3rd call         1                 "abc" =&gt; if (times === 1) return string;
4th call         0                  ""   =&gt; if (times &lt;= 0) return "";
Second part of the recursion method
4th call will return      ""
3rd call will return     "abc"
2nd call will return     "abc"
1st call will return     "abc"
The final call is a concatenation of all the strings
return "abc" + "abc" + "abc"; // return "abcabcabc";
*/
}
repeatStringNumTimes("abc", 3);</code></pre><p>And again, without comments:</p><pre><code class="language-js">function repeatStringNumTimes(string, times) {
if(times &lt; 0)
return "";
if(times === 1)
return string;
else
return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumTimes("abc", 3);</code></pre><h3 id="approach-3-repeat-a-string-using-es6-repeat-method">Approach #3: Repeat a String using ES6 repeat() method</h3><p>For this solution, you’ll use the String.prototype.repeat() method:</p><ul><li>The <code><strong>repeat()</strong></code> method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.</li></ul><p>Here’s the solution:</p><pre><code class="language-js">
function repeatStringNumTimes(string, times) {
//Step 1. If times is positive, return the repeated string
if (times &gt; 0) { // (3 &gt; 0) =&gt; true
return string.repeat(times); // return "abc".repeat(3); =&gt; return "abcabcabc";
}
//Step 2. Else if times is negative, return an empty string if true
else {
return "";
}
}
repeatStringNumTimes("abc", 3);</code></pre><p>And again, without comments:</p><pre><code class="language-js">function repeatStringNumTimes(string, times) {
if (times &gt; 0)
return string.repeat(times);
else
return "";
}
repeatStringNumTimes("abc", 3);</code></pre><p>You can use a <strong>ternary operator</strong> as a shortcut for the if/else statement, like this:</p><pre><code class="language-js">times &gt; 0 ? string.repeat(times) : "";</code></pre><p>This can be read as:</p><pre><code class="language-js">if (times &gt; 0) {
return string.repeat(times);
} else {
return "";
}</code></pre><p>You can then return the ternary operator in your function:</p><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the freeCodeCamp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac" rel="noopener"><strong>Two ways to confirm the ending of a String in JavaScript</strong></a><br><em><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/">In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</a></em></p><p><a href="https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb" rel="noopener"><strong>Three Ways to Reverse a String in JavaScript</strong></a><br><em><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/">This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</a></em></p><p><a href="https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38" rel="noopener"><strong>Three Ways to Factorialize a Number in JavaScript</strong></a><br><em><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/">This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</a></em></p><p><strong><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/">Two Ways to Check for Palindromes in JavaScript</a></strong><br><em><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/">This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</a></em></p><p><strong><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/">Three Ways to Find the Longest Word in a String in JavaScript</a></strong><br><em><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/">This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</a></em></p><p><strong><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/">Three Ways to Title Case a Sentence in JavaScript</a></strong><br><em><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/">This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</a></em></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="additional-resources">Additional Resources</h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" rel="noopener">while loop — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" rel="noopener">repeat() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion" rel="noopener">recursion — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">Ternary Operator — MDN</a></li></ul>
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
