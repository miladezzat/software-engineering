---
card: "https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg"
tags: [JavaScript]
description: "This article is based on Free Code Camp Basic Algorithm Scrip"
author: "Milad E. Fahmy"
title: "Three Ways to Reverse a String in JavaScript"
created: "2021-08-15T23:50:06+02:00"
modified: "2021-08-15T23:50:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-algorithms tag-coding tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Three Ways to Reverse a String in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg" alt="Three Ways to Reverse a String in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>This article is based on Free Code Camp Basic Algorithm Scripting “<a href="https://www.freecodecamp.com/challenges/reverse-a-string" rel="noopener">Reverse a String</a>”</em></p><p><strong>Reversing a string</strong> is one of the most frequently asked JavaScript question in the technical round of interview. Interviewers may ask you to write different ways to reverse a string, or they may ask you to reverse a string without using in-built methods, or they may even ask you to reverse a string using recursion.</p><p>There are potentially tens of different ways to do it, excluding the built-in <strong>reverse</strong> function, as JavaScript does not have one.</p><p>Below are my three most interesting ways to solve the problem of reversing a string in JavaScript.</p><h4 id="algorithm-challenge">Algorithm Challenge</h4><blockquote>Reverse the provided string.<br><em>You may need to turn the string into an array before you can reverse it.</em><br><em>Your result must be a string.</em></blockquote><pre><code class="language-js">function reverseString(str) {
return str;
}
reverseString("hello");</code></pre><h4 id="provided-test-cases">Provided test cases</h4><ul><li><strong><em>reverseString(“hello”)</em></strong> should become “olleh”</li><li><strong><em>reverseString(“Howdy”)</em></strong> should become “ydwoH”</li><li><strong><em>reverseString(“Greetings from Earth”)</em></strong> should return”htraE morf sgniteerG”</li></ul><h3 id="1-reverse-a-string-with-built-in-functions">1. Reverse a String With Built-In Functions</h3><p>For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.</p><ul><li>The split() method splits a String object into an array of string by separating the string into sub strings.</li><li>The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.</li><li>The join() method joins all elements of an array into a string.</li></ul><pre><code class="language-js">function reverseString(str) {
// Step 1. Use the split() method to return a new array
var splitString = str.split(""); // var splitString = "hello".split("");
// ["h", "e", "l", "l", "o"]
// Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
// ["o", "l", "l", "e", "h"]
// Step 3. Use the join() method to join all elements of the array into a string
var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
// "olleh"
//Step 4. Return the reversed string
return joinArray; // "olleh"
}
reverseString("hello");</code></pre><h4 id="chaining-the-three-methods-together-">Chaining the three methods together:</h4><pre><code>function reverseString(str) {
return str.split("").reverse().join("");
}
reverseString("hello");</code></pre><h3 id="2-reverse-a-string-with-a-decrementing-for-loop">2. Reverse a String With a Decrementing For Loop</h3><pre><code class="language-js">function reverseString(str) {
// Step 1. Create an empty string that will host the new created string
var newString = "";
// Step 2. Create the FOR loop
/* The starting point of the loop will be (str.length - 1) which corresponds to the
last character of the string, "o"
As long as i is greater than or equals 0, the loop will go on
We decrement i after each iteration */
for (var i = str.length - 1; i &gt;= 0; i--) {
newString += str[i]; // or newString = newString + str[i];
}
/* Here hello's length equals 5
For each iteration: i = str.length - 1 and newString = newString + str[i]
First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
End of the FOR Loop*/
// Step 3. Return the reversed string
return newString; // "olleh"
}
reverseString('hello');</code></pre><h4 id="without-comments-">Without comments:</h4><pre><code class="language-js">function reverseString(str) {
var newString = "";
for (var i = str.length - 1; i &gt;= 0; i--) {
newString += str[i];
}
return newString;
}
reverseString('hello');</code></pre><h3 id="3-reverse-a-string-with-recursion">3. Reverse a String With Recursion</h3><p>For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.</p><ul><li>The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.</li></ul><pre><code>"hello".substr(1); // "ello"</code></pre><ul><li>The charAt() method returns the specified character from a string.</li></ul><pre><code>"hello".charAt(0); // "h"</code></pre><p>The depth of the recursion is equal to the length of the String. This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.</p><pre><code class="language-js">function reverseString(str) {
if (str === "") // This is the terminal case that will end the recursion
return "";
else
return reverseString(str.substr(1)) + str.charAt(0);
/*
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"  	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")     + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")      + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")       + "l"
4th call – reverseString("lo")will return   reverseString("o")              + "l"
5th call – reverseString("o") will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/
}
reverseString("hello");</code></pre><h4 id="without-comments--1">Without comments:</h4><pre><code>function reverseString(str) {
if (str === "")
return "";
else
return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");</code></pre><h4 id="conditional-ternary-operator-">Conditional (Ternary) Operator:</h4><pre><code class="language-js">function reverseString(str) {
return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");</code></pre><p><strong>Reversing a String in JavaScript</strong> is a small and simple algorithm that can be asked on a technical phone screening or a technical interview. You could take the short route in solving this problem, or take the approach by solving it with recursion or even more complex solutions.</p><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="resources">Resources</h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" rel="noopener">split() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" rel="noopener">reverse() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noopener">join() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length" rel="noopener">String.length — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="noopener">substr() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" rel="noopener">charAt() method — MDN</a></li></ul>
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
