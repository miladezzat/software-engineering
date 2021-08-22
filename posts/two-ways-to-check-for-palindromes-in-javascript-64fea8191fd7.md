---
card: "https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg"
tags: [JavaScript]
description: "This article is based on Free Code Camp Basic Algorithm Scrip"
author: "Milad E. Fahmy"
title: "Two Ways to Check for Palindromes in JavaScript"
created: "2021-08-16T10:29:59+02:00"
modified: "2021-08-16T10:29:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-algorithms tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Two Ways to Check for Palindromes in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gaAkSMf6J7cMTJCgQVX2Kg.jpeg" alt="Two Ways to Check for Palindromes in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>This article is based on Free Code Camp Basic Algorithm Scripting “<a href="https://www.freecodecamp.com/challenges/check-for-palindromes" rel="noopener">Check for Palindromes</a>”.</em></p><p><strong>A palindrome</strong> is a word, phrase, number, or other sequence of characters which reads the same backward or forward. The word “palindrome” was first coined by the English playwright <a href="https://en.wikipedia.org/wiki/Ben_Jonson" rel="noopener">Ben Jonson</a> in the 17th century, from the Greek roots <em>palin</em> (“again”) and <em>dromos</em> (“way, direction”). — <em>src. Wikipedia</em></p><p>In this article, I’m going to explain two approaches, first with built-in functions and second using a for loop.</p><h4 id="algorithm-challenge">Algorithm Challenge</h4><blockquote>Return true if the given string is a palindrome. Otherwise, return false.<br><br>A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.<br><br><strong>Note. </strong>You’ll need to remove <strong>all non-alphanumeric characters</strong> (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.<br><br>We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.</blockquote><pre><code class="language-js">function palindrome(str) {
return true;
}
palindrome("eye");</code></pre><h4 id="provided-test-cases"><em>Provided test cases</em></h4><ul><li><strong><em>palindrome(“race car”)</em></strong> should return true</li><li><strong><em>palindrome(“not a palindrome”)</em></strong><em> </em>should return false</li><li><strong><em>palindrome(“A man, a plan, a canal. Panama”)</em></strong> should return true</li><li><strong><em>palindrome(“never odd or even”)</em></strong> should return true</li><li><strong><em>palindrome(“nope”)</em></strong> should return false</li><li><strong><em>palindrome(“almostomla”)</em></strong> should return false</li><li><strong><em>palindrome(“My age is 0, 0 si ega ym.”)</em></strong> should return true</li><li><strong><em>palindrome(“1 eye for of 1 eye.”)</em></strong> should return false</li><li><strong><em>palindrome(“0_0 (: /-\ :) 0–0”)</em></strong> should return true</li></ul><h3 id="which-regular-expression-will-we-need-to-pass-the-last-test-case">Which <strong>Regular Expression</strong> will we need to pass the last test case?</h3><p>Regular expressions are patterns used to match character combinations in strings.</p><p>When the search for a match requires something more than a direct match, the pattern includes special characters.</p><pre><code>To pass the last test case, we can use two Regular Expressions:
/[^A-Za-z0–9]/g  or
/[\W_]/g</code></pre><p><strong>\W </strong>removes <strong>all non-alphanumeric characters</strong>:</p><ul><li><strong>\W</strong> matches any non-word character</li><li><strong>\W</strong> is equivalent to [^A-Za-z0–9_]</li><li><strong>\W</strong> matches anything that is not enclosed in the brackets</li></ul><p>What does that mean?</p><pre><code>[^A-Z] matches anything that is not enclosed between A and Z
[^a-z] matches anything that is not enclosed between a and z
[^0-9] matches anything that is not enclosed between 0 and 9
[^_] matches anything that does not enclose _</code></pre><p>But in our test case, we need palindrome(“<strong>0_0 (: /-\ :) 0–0</strong>”) to return <strong>true</strong>, which means “<strong>_(: /-\ :)–</strong>” has to be matched.</p><p>We will need to add “<strong>_</strong>” to pass this specific test case.</p><pre><code>We now have “\W_”</code></pre><p>We will also need to add the <strong>g</strong> flag for global search.</p><pre><code>We finally have “/[\W_]/g”</code></pre><blockquote><strong><em>/[\W_]/g </em></strong><em>was used for pure demonstrative purpose to show how RegExp works.<strong> /[^A-Za-z0–9]/g </strong>is the easiest RegExp to choose<strong>.</strong></em></blockquote><h3 id="1-check-for-palindromes-with-built-in-functions">1. Check for Palindromes With Built-In Functions</h3><p>For this solution, we will use several methods:</p><ul><li>The <strong>toLowerCase()</strong> method to return the calling string value converted to lowercase.</li><li>The <strong>replace()</strong> method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.</li><li>The <strong>split()</strong> method splits a String object into an array of strings by separating the string into sub strings.</li><li>The <strong>reverse()</strong> method reverses an array in place. The first array element becomes the last and the last becomes the first.</li><li>The <strong>join()</strong> method joins all elements of an array into a string.</li></ul><pre><code class="language-js">function palindrome(str) {
// Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
var lowRegStr = str.toLowerCase().replace(re, '');
// str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
// str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
// var lowRegStr = "amanaplanacanalpanama";
// Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
var reverseStr = lowRegStr.split('').reverse().join('');
// lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
// So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
// And, var reverseStr = "amanaplanacanalpanama";
// Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? =&gt; true
}
palindrome("A man, a plan, a canal. Panama");</code></pre><h4 id="without-comments-">Without comments:</h4><pre><code class="language-js">function palindrome(str) {
var re = /[\W_]/g;
var lowRegStr = str.toLowerCase().replace(re, '');
var reverseStr = lowRegStr.split('').reverse().join('');
return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");</code></pre><h3 id="2-check-for-palindromes-with-a-for-loop">2. Check for Palindromes With a FOR loop</h3><p>Half-indexing (len/2) has benefits when processing large strings. We check the end from each part and divide the number of iterations inside the FOR loop by two.</p><pre><code class="language-js">function palindrome(str) {
// Step 1. The first part is the same as earlier
var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
str = str.toLowerCase().replace(re, '');
// Step 2. Create the FOR loop
var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
for (var i = 0; i &lt; len/2; i++) {
if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
}
/* Here len/2 = 15
For each iteration: i = ?    i &lt; len/2    i++    if(str[i] !== str[len - 1 - i])?
1st iteration:        0        yes         1     if(str[0] !== str[15 - 1 - 0])? =&gt; if("a"  !==  "a")? // false
2nd iteration:        1        yes         2     if(str[1] !== str[15 - 1 - 1])? =&gt; if("m"  !==  "m")? // false
3rd iteration:        2        yes         3     if(str[2] !== str[15 - 1 - 2])? =&gt; if("a"  !==  "a")? // false
4th iteration:        3        yes         4     if(str[3] !== str[15 - 1 - 3])? =&gt; if("n"  !==  "n")? // false
5th iteration:        4        yes         5     if(str[4] !== str[15 - 1 - 4])? =&gt; if("a"  !==  "a")? // false
6th iteration:        5        yes         6     if(str[5] !== str[15 - 1 - 5])? =&gt; if("p"  !==  "p")? // false
7th iteration:        6        yes         7     if(str[6] !== str[15 - 1 - 6])? =&gt; if("l"  !==  "l")? // false
8th iteration:        7        yes         8     if(str[7] !== str[15 - 1 - 7])? =&gt; if("a"  !==  "a")? // false
9th iteration:        8        yes         9     if(str[8] !== str[15 - 1 - 8])? =&gt; if("n"  !==  "n")? // false
10th iteration:  9        yes        10     if(str[9] !== str[15 - 1 - 9])? =&gt; if("a"  !==  "a")? // false
11th iteration: 10        yes        11    if(str[10] !== str[15 - 1 - 10])? =&gt; if("c" !==  "c")? // false
12th iteration: 11        yes        12    if(str[11] !== str[15 - 1 - 11])? =&gt; if("a" !==  "a")? // false
13th iteration: 12        yes        13    if(str[12] !== str[15 - 1 - 12])? =&gt; if("n" !==  "n")? // false
14th iteration: 13        yes        14    if(str[13] !== str[15 - 1 - 13])? =&gt; if("a" !==  "a")? // false
15th iteration: 14        yes        15    if(str[14] !== str[15 - 1 - 14])? =&gt; if("l" !==  "l")? // false
16th iteration: 15        no
End of the FOR Loop*/
}
return true; // Both parts are strictly equal, it returns true =&gt; The string is a palindrome
}
palindrome("A man, a plan, a canal. Panama");</code></pre><h4 id="without-comments--1">Without comments:</h4><pre><code class="language-js">function palindrome(str) {
var re = /[^A-Za-z0-9]/g;
str = str.toLowerCase().replace(re, '');
var len = str.length;
for (var i = 0; i &lt; len/2; i++) {
if (str[i] !== str[len - 1 - i]) {
return false;
}
}
return true;
}
palindrome("A man, a plan, a canal. Panama");</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p><a href="/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/"><strong>Three ways you can find the largest number in an array using JavaScript</strong><br><em>In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="resources">Resources</h3><ul><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions" rel="noopener">Regular Expressions — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" rel="noopener">toLowerCase() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" rel="noopener">replace() — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" rel="noopener">split() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" rel="noopener">reverse() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noopener">join() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length" rel="noopener">String.length — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for" rel="noopener">for — MDN</a></li></ul>
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
