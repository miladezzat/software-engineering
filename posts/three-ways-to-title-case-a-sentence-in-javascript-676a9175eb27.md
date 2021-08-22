---
card: "https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg"
tags: [JavaScript]
description: "This article is based on Free Code Camp Basic Algorithm Scrip"
author: "Milad E. Fahmy"
title: "Three Ways to Title Case a Sentence in JavaScript"
created: "2021-08-16T11:54:52+02:00"
modified: "2021-08-16T11:54:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-learning tag-algorithms tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Three Ways to Title Case a Sentence in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*YPdTg5Gx1FX66jSc_uwwlQ.jpeg" alt="Three Ways to Title Case a Sentence in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>This article is based on Free Code Camp Basic Algorithm Scripting “</em><a href="https://www.freecodecamp.com/challenges/title-case-a-sentence" rel="noopener">Title Case a Sentence</a><em>”.</em></p><p><strong>In this algorithm</strong>, we want to change a string of text so that it always has a capital letter at the start of every word.</p><p>In this article, I’m going to explain three approaches. First with a FOR loop, second using the map() method, and third using the replace() method.</p><h4 id="algorithm-challenge">Algorithm Challenge</h4><blockquote>Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br><br>For the purpose of this exercise, you should also capitalize connecting words like “the” and “of”.</blockquote><h4 id="provided-test-cases">Provided test cases</h4><ul><li><strong><em>titleCase(“I’m a little tea pot”)</em></strong> should return a string.</li><li><strong><em>titleCase(“I’m a little tea pot”)</em></strong> should return “I’m A Little Tea Pot”.</li><li><strong><em>titleCase(“sHoRt AnD sToUt”) </em></strong>should return “Short And Stout”.</li><li><strong><em>titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”)</em></strong> should return “Here Is My Handle Here Is My Spout”.</li></ul><h3 id="1-title-case-a-sentence-with-a-for-loop">1. Title Case a Sentence With a FOR Loop</h3><p>For this solution, we will use the String.prototype.toLowerCase() method, the String.prototype.split() method, the String.prototype.charAt() method, the String.prototype.slice() method and the Array.prototype.join() method.</p><ul><li>The <strong>toLowerCase()</strong> method returns the calling string value converted to lowercase</li><li>The <strong>split()</strong> method splits a String object into an array of strings by separating the string into substrings.</li><li>The <strong>charAt()</strong> method returns the specified character from a string.</li><li>The <strong>slice()</strong> method extracts a section of a string and returns a new string.</li><li>The <strong>join()</strong> method joins all elements of an array into a string.</li></ul><p>We will need to add an empty space between the parenthesis of the <strong>split()</strong>method,</p><pre><code>var strSplit = "I'm a little tea pot".split(' ');</code></pre><p>which will output an array of separated words:</p><pre><code>var strSplit = ["I'm", "a", "little", "tea", "pot"];</code></pre><p>If you don’t add the space in the parenthesis, you will have this output:</p><pre><code>var strSplit = ["I", "'", "m", " ", "a", " ", "l", "i", "t", "t", "l", "e", " ", "t", "e", "a", " ", "p", "o", "t"];</code></pre><p>We will concatenate</p><pre><code>str[i].charAt(0).toUpperCase()</code></pre><p>— which will uppercase the index 0 character of the current string in the FOR loop —</p><p>and</p><pre><code>str[i].slice(1)</code></pre><p>— which will extract from index 1 to the end of the string.</p><p>We will set the whole string to lower case for normalization purposes.</p><h4 id="with-comments-">With comments:</h4><pre><code class="language-js">
function titleCase(str) {
// Step 1. Lowercase the string
str = str.toLowerCase();
// str = "I'm a little tea pot".toLowerCase();
// str = "i'm a little tea pot";
// Step 2. Split the string into an array of strings
str = str.split(' ');
// str = "i'm a little tea pot".split(' ');
// str = ["i'm", "a", "little", "tea", "pot"];
// Step 3. Create the FOR loop
for (var i = 0; i &lt; str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
/* Here str.length = 5
1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
str[0] = "I"                            + "'m";
str[0] = "I'm";
2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
str[1] = "A"                            + "";
str[1] = "A";
3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
str[2] = "L"                              + "ittle";
str[2] = "Little";
4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
str[3] = "T"                            + "ea";
str[3] = "Tea";
5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
str[4] = "P"                           + "ot";
str[4] = "Pot";
End of the FOR Loop*/
}
// Step 4. Return the output
return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') =&gt; "I'm A Little Tea Pot"
}
titleCase("I'm a little tea pot");</code></pre><h4 id="without-comments-">Without comments:</h4><pre><code class="language-js">function titleCase(str) {
str = str.toLowerCase().split(' ');
for (var i = 0; i &lt; str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
return str.join(' ');
}
titleCase("I'm a little tea pot");</code></pre><h3 id="2-title-case-a-sentence-with-the-map-method">2. Title Case a Sentence With the map() Method</h3><p>For this solution, we will use the Array.prototype.map() method.</p><ul><li>The <strong>map()</strong> method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.</li></ul><p>We will lowercase and split the string as seen in the previous example before applying the map() method.</p><p>Instead of using a FOR loop, we will apply the map() method as the condition on the same concatenation from the previous example.</p><pre><code>(word.charAt(0).toUpperCase() + word.slice(1));</code></pre><h4 id="with-comments--1">With comments:</h4><pre><code class="language-js">
function titleCase(str) {
// Step 1. Lowercase the string
str = str.toLowerCase() // str = "i'm a little tea pot";
// Step 2. Split the string into an array of strings
.split(' ') // str = ["i'm", "a", "little", "tea", "pot"];
// Step 3. Map over the array
.map(function(word) {
return (word.charAt(0).toUpperCase() + word.slice(1));
/* Map process
1st word: "i'm"    =&gt; (word.charAt(0).toUpperCase() + word.slice(1));
"i'm".charAt(0).toUpperCase() + "i'm".slice(1);
"I"                     +     "'m";
return "I'm";
2nd word: "a"=&gt; (word.charAt(0).toUpperCase() + word.slice(1));
"a".charAt(0).toUpperCase()   + "".slice(1);
"A"                     +     "";
return "A";
3rd word: "little" =&gt; (word.charAt(0).toUpperCase()    + word.slice(1));
"little".charAt(0).toUpperCase() + "little".slice(1);
"L"                        +     "ittle";
return "Little";
4th word: "tea"    =&gt; (word.charAt(0).toUpperCase() + word.slice(1));
"tea".charAt(0).toUpperCase() + "tea".slice(1);
"T"                     +     "ea";
return "Tea";
5th word: "pot"    =&gt; (word.charAt(0).toUpperCase() + word.slice(1));
"pot".charAt(0).toUpperCase() + "pot".slice(1);
"P"                     +     "ot";
return "Pot";
End of the map() method */
});
// Step 4. Return the output
return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') =&gt; "I'm A Little Tea Pot"
}
titleCase("I'm a little tea pot");</code></pre><h4 id="without-comments--1">Without comments:</h4><pre><code class="language-js">function titleCase(str) {
return str.toLowerCase().split(' ').map(function(word) {
return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ');
}
titleCase("I'm a little tea pot");</code></pre><h3 id="3-title-case-a-sentence-with-the-map-and-the-replace-methods">3. Title Case a Sentence With the map() and the replace() Methods</h3><p>For this solution, we will keep using the Array.prototype.map() method and add the String.prototype.replace() method.</p><ul><li>The <strong>replace()</strong> method returns a new string with some or all matches of a pattern replaced by a replacement.</li></ul><p>In our case, the pattern for the replace() method will be a String to be replaced by a new replacement and will be treated as a verbatim string. We can also use a <strong>regular expression</strong> as the pattern to solve this algorithm.</p><p>We will lowercase and split the string as seen in the first example before applying the map() method.</p><h4 id="with-comments--2">With comments:</h4><pre><code class="language-js">
function titleCase(str) {
// Step 1. Lowercase the string
str = str.toLowerCase() // str = "i'm a little tea pot";
// Step 2. Split the string into an array of strings
.split(' ') // str = ["i'm", "a", "little", "tea", "pot"];
// Step 3. Map over the array
.map(function(word) {
return word.replace(word[0], word[0].toUpperCase());
/* Map process
1st word: "i'm" =&gt; word.replace(word[0], word[0].toUpperCase());
"i'm".replace("i", "I");
return word =&gt; "I'm"
2nd word: "a" =&gt; word.replace(word[0], word[0].toUpperCase());
"a".replace("a", "A");
return word =&gt; "A"
3rd word: "little" =&gt; word.replace(word[0], word[0].toUpperCase());
"little".replace("l", "L");
return word =&gt; "Little"
4th word: "tea" =&gt; word.replace(word[0], word[0].toUpperCase());
"tea".replace("t", "T");
return word =&gt; "Tea"
5th word: "pot" =&gt; word.replace(word[0], word[0].toUpperCase());
"pot".replace("p", "P");
return word =&gt; "Pot"
End of the map() method */
});
// Step 4. Return the output
return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') =&gt; "I'm A Little Tea Pot"
}
titleCase("I'm a little tea pot");</code></pre><h4 id="without-comments--2">Without comments:</h4><pre><code class="language-js">function titleCase(str) {
return str.toLowerCase().split(' ').map(function(word) {
return word.replace(word[0], word[0].toUpperCase());
}).join(' ');
}
titleCase("I'm a little tea pot");</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/"><strong>Three ways you can find the largest number in an array using JavaScript</strong><br><em>In this article, I’m going to explain how to solve Free Code Camp’s “Return Largest Numbers in Arrays” challenge. This…</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a><strong>.</strong></p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="resources">Resources</h3><ul><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" rel="noopener">toLowerCase() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase" rel="noopener">toUpperCase() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" rel="noopener">charAt() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noopener">slice() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" rel="noopener">split() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noopener">join() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for" rel="noopener">for — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener">map() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" rel="noopener">replace() method — MDN</a></li></ul>
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
