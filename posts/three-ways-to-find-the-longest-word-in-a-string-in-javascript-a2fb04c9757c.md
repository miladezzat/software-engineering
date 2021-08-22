---
card: "https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg"
tags: [JavaScript]
description: "This article is based on Free Code Camp Basic Algorithm Scrip"
author: "Milad E. Fahmy"
title: "Three Ways to Find the Longest Word in a String in JavaScript"
created: "2021-08-16T10:29:55+02:00"
modified: "2021-08-16T10:29:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-design tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Three Ways to Find the Longest Word in a String in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*k2RZZ3j1e-_r9Av7SgzFDw.jpeg" alt="Three Ways to Find the Longest Word in a String in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>This article is based on Free Code Camp Basic Algorithm Scripting “</em><a href="https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string" rel="noopener">Find the Longest Word in a String</a><em>”.</em></p><p><strong>In this algorithm</strong>, we want to look at each individual word and count how many letters are in each. Then, compare the counts to determine which word has the most characters and return the length of the longest word.</p><p>In this article, I’m going to explain three approaches. First with a FOR loop, second using the sort() method, and third using the reduce() method.</p><h4 id="algorithm-challenge">Algorithm Challenge</h4><blockquote>Return the length of the longest word in the provided sentence.<br><br>Your response should be a number.</blockquote><h4 id="provided-test-cases"><strong><em>Provided test cases</em></strong></h4><ul><li><strong><em>findLongestWord(“The quick brown fox jumped over the lazy dog”)</em> </strong>should return a number</li><li><strong><em>findLongestWord(“The quick brown fox jumped over the lazy dog”)</em></strong> should return 6</li><li><strong><em>findLongestWord(“May the force be with you”)</em></strong> should return 5</li><li><strong><em>findLongestWord(“Google do a barrel roll”)</em></strong> should return 6</li><li><strong><em>findLongestWord(“What is the average airspeed velocity of an unladen swallow”)</em></strong> should return 8</li><li><strong><em>findLongestWord(“What if we try a super-long word such as otorhinolaryngology”)</em></strong><em> </em>should return 19</li></ul><pre><code class="language-js">function findLongestWord(str) {
return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h3 id="1-find-the-longest-word-with-a-for-loop">1. Find the Longest Word With a FOR Loop</h3><p>For this solution, we will use the String.prototype.split() method</p><ul><li>The <strong>split()</strong> method splits a String object into an array of strings by separating the string into sub strings.</li></ul><p>We will need to add an empty space between the parenthesis of the <strong>split()</strong> method,</p><pre><code>var strSplit = “The quick brown fox jumped over the lazy dog”.split(‘ ‘);</code></pre><p>which will output an array of separated words:</p><pre><code>var strSplit = [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”];</code></pre><p>If you don’t add the space in the parenthesis, you will have this output:</p><pre><code>var strSplit =
[“T”, “h”, “e”, “ “, “q”, “u”, “i”, “c”, “k”, “ “, “b”, “r”, “o”, “w”, “n”, “ “, “f”, “o”, “x”, “ “, “j”, “u”, “m”, “p”, “e”, “d”, “ “, “o”, “v”, “e”, “r”, “ “, “t”, “h”, “e”, “ “, “l”, “a”, “z”, “y”, “ “, “d”, “o”, “g”];</code></pre><pre><code class="language-js">function findLongestWord(str) {
// Step 1. Split the string into an array of strings
var strSplit = str.split(' ');
// var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
// var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
// Step 2. Initiate a variable that will hold the length of the longest word
var longestWord = 0;
// Step 3. Create the FOR loop
for(var i = 0; i &lt; strSplit.length; i++){
if(strSplit[i].length &gt; longestWord){ // If strSplit[i].length is greater than the word it is compared with...
longestWord = strSplit[i].length; // ...then longestWord takes this new value
}
}
/* Here strSplit.length = 9
For each iteration: i = ?   i &lt; strSplit.length?   i++  if(strSplit[i].length &gt; longestWord)?   longestWord = strSplit[i].length
1st iteration:  0             yes             1   if("The".length &gt; 0)? =&gt; if(3 &gt; 0)?     longestWord = 3
2nd iteration:  1             yes             2   if("quick".length &gt; 3)? =&gt; if(5 &gt; 3)?   longestWord = 5
3rd iteration:  2             yes             3   if("brown".length &gt; 5)? =&gt; if(5 &gt; 5)?   longestWord = 5
4th iteration:  3             yes             4   if("fox".length &gt; 5)? =&gt; if(3 &gt; 5)?     longestWord = 5
5th iteration:  4             yes             5   if("jumped".length &gt; 5)? =&gt; if(6 &gt; 5)?  longestWord = 6
6th iteration:  5             yes             6   if("over".length &gt; 6)? =&gt; if(4 &gt; 6)?    longestWord = 6
7th iteration:  6             yes             7   if("the".length &gt; 6)? =&gt; if(3 &gt; 6)?     longestWord = 6
8th iteration:  7             yes             8   if("lazy".length &gt; 6)? =&gt; if(4 &gt; 6)?    longestWord = 6
9th iteration:  8             yes             9   if("dog".length &gt; 6)? =&gt; if(3 &gt; 6)?     longestWord = 6
10th iteration: 9             no
End of the FOR Loop*/
//Step 4. Return the longest word
return longestWord; // 6
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h4 id="without-comments-">Without comments:</h4><pre><code class="language-js">function findLongestWord(str) {
var strSplit = str.split(' ');
var longestWord = 0;
for(var i = 0; i &lt; strSplit.length; i++){
if(strSplit[i].length &gt; longestWord){
longestWord = strSplit[i].length;
}
}
return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h3 id="2-find-the-longest-word-with-the-sort-method">2. Find the Longest Word With the sort() Method</h3><p>For this solution, we will use the Array.prototype.sort() method to sort the array by some ordering criterion and then return the length of the first element of this array.</p><ul><li>The <strong>sort()</strong> method sorts the elements of an array in place and returns the array.</li></ul><p>In our case, if we just sort the array</p><pre><code>var sortArray = [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”].sort();</code></pre><p>we will have this output:</p><pre><code>var sortArray = [“The”, “brown”, “dog”, “fox”, “jumped”, “lazy”, “over”, “quick”, “the”];</code></pre><p>In Unicode, numbers come before upper case letters, which come before lower case letters.</p><p>We need to sort the elements by some ordering criterion,</p><pre><code>[].sort(function(firstElement, secondElement) {     return secondElement.length — firstElement.length; })</code></pre><p>where the length of the second element is compared to the length of the first element in the array.</p><pre><code class="language-js">function findLongestWord(str) {
// Step 1. Split the string into an array of strings
var strSplit = str.split(' ');
// var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
// var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
// Step 2. Sort the elements in the array
var longestWord = strSplit.sort(function(a, b) {
return b.length - a.length;
});
/* Sorting process
a     b            b.length     a.length     var longestWord
"The""quick"            5            3         ["quick", "The"]
"quick"    "brown"      5            5         ["quick", "brown", "The"]
"brown"    "fox"        3            5         ["quick", "brown", "The", "fox"]
"fox""jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
"jumped"   "over"       4            6         ["jumped", quick", "brown", "over", "The", "fox"]
"over"     "the"        3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
"the""lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
"lazy"     "dog"        3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
*/
// Step 3. Return the length of the first element of the array
return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
// longestWord[0]="jumped" =&gt; jumped".length =&gt; 6
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h4 id="without-comments--1">Without comments:</h4><pre><code class="language-js">function findLongestWord(str) {
var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h3 id="3-find-the-longest-word-with-the-reduce-method">3. Find the Longest Word With the reduce() Method</h3><p>For this solution, we will use the Array.prototype.reduce().</p><ul><li>The <strong>reduce()</strong> method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.</li></ul><p>reduce() executes a callback function once for each element present in the array.</p><p>You can provide an initial value as the second argument to reduce, here we will add an empty string “”.</p><pre><code>[].reduce(function(previousValue, currentValue) {...}, “”);</code></pre><pre><code class="language-js">function findLongestWord(str) {
// Step 1. Split the string into an array of strings
var strSplit = str.split(' ');
// var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
// var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
// Step 2. Use the reduce method
var longestWord = strSplit.reduce(function(longest, currentWord) {
if(currentWord.length &gt; longest.length)
return currentWord;
else
return longest;
}, "");
/* Reduce process
currentWordlongest       currentWord.length     longest.length    if(currentWord.length &gt; longest.length)?   var longestWord
"The"       ""                  3                     0                              yes                          "The"
"quick"     "The"               5                     3                              yes                         "quick"
"brown"     "quick"             5                     5                              no                          "quick"
"fox"       "quick"             3                     5                              no                          "quick"
"jumped"    "quick"             6                     5                              yes                         "jumped"
"over"      "jumped"            4                     6                              no                          "jumped"
"the"       "jumped"            3                     6                              no                          "jumped"
"lazy"      "jumped"            4                     6                              no                          "jumped"
"dog"       "jumped"            3                     6                              no                          "jumped"
*/
// Step 3. Return the length of the longestWord
return longestWord.length; // var longestWord = "jumped"
// longestWord.length =&gt; "jumped".length =&gt; 6
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><h4 id="without-comments--2">Without comments:</h4><pre><code class="language-js">function findLongestWord(str) {
var longestWord = str.split(' ').reduce(function(longest, currentWord) {
return currentWord.length &gt; longest.length ? currentWord : longest;
}, "");
return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p><a href="/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/"><strong>Three ways you can find the largest number in an array using JavaScript</strong><br><em>In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="resources">Resources</h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" rel="noopener">split() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" rel="noopener">sort() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noopener">reduce() — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length" rel="noopener">String.length — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for" rel="noopener">for — MDN</a></li></ul>
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
