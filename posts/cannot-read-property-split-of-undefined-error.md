---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg"
tags: [JavaScript]
description: If you've ever used JavaScript's split method, there's a good
author: "Milad E. Fahmy"
title: "Cannot Read Property 'split' of Undefined"
created: "2021-08-15T19:29:34+02:00"
modified: "2021-08-15T19:29:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-error tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Cannot Read Property 'split' of Undefined</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa5740569d1a4ca26db.jpg" alt="Cannot Read Property 'split' of Undefined">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>If you've ever used JavaScript's <code>split</code> method, there's a good chance that you've encountered the following error: <code>TypeError: Cannot read property 'split' of undefined</code>.</p>
<p>There are a few reasons why you would receive this error. Most likely it's just a basic misunderstanding of how <code>split</code> works and how to iterate through arrays.</p>
<p>For example, if you try to submit the following code for the <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string">Find the Longest Word in a String challenge</a>:</p><pre><code class="language-js">function findLongestWord(str) {
for(let i = 0; i &lt; str.length; i++) {
const array = str.split(" ");
array[i].split("");
}
}
findLongestWord("The quick brown fox jumped over the lazy dog");</code></pre>
<p>it will throw the <code>TypeError: Cannot read property 'split' of undefined</code> error.</p>
<h3 id="the-split-method">The <code>split</code> method</h3>
<p>When <code>split</code> is called on a string, it splits the string into substrings based on the separator passed in as an argument. If an empty string is passed as an argument, <code>split</code> treats each character as a substring. It then returns an array containing the substrings:</p><pre><code class="language-js">const testStr1 = "Test test 1 2";
const testStr2 = "cupcake pancake";
const testStr3 = "First,Second,Third";
testStr1.split(" "); // [ 'Test', 'test', '1', '2' ]
testStr2.split(""); // [ 'c', 'u', 'p', 'c', 'a', 'k', 'e', ' ', 'p', 'a', 'n', 'c', 'a', 'k', 'e' ]
testStr3.split(","); // [ 'First', 'Second', 'Third' ]
</code></pre>
<p>Check out <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">MDN</a> for more details about <code>split</code>.</p>
<h3 id="the-problem-explained-with-examples">The problem explained with examples</h3>
<p>Knowing what the <code>split</code> method returns and how many substrings you can expect is the key to solving <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string">this challenge</a>.</p>
<p>Let's take another look at the code above and see why it's not working as expected:</p><pre><code class="language-js">function findLongestWord(str) {
for(let i = 0; i &lt; str.length; i++) {
const array = str.split(" ");
array[i].split("");
}
}
findLongestWord("The quick brown fox jumped over the lazy dog");
</code></pre>
<p>Splitting <code>str</code> into an array like this (<code>const array = str.split(" ");</code>) works as expected and returns <code>[ 'The', &nbsp; 'quick', &nbsp; 'brown', &nbsp; 'fox', &nbsp; 'jumped', &nbsp; 'over', &nbsp; 'the', &nbsp; 'lazy', &nbsp; 'dog' ]</code>.</p>
<p>But take a closer look at the <code>for</code> loop. Rather than using the length of <code>array</code> as a condition to iterate <code>i</code>, <code>str.length</code> is used instead. </p>
<p><code>str</code> is "The quick brown fox jumped over the lazy dog", and if you log <code>str.length</code> to the console, you'll get 44.</p>
<p>The last statement in the body of the <code>for</code> loop is what's causing the error: <code>array[i].split("");</code>. The length of <code>array</code> is 9, so <code>i</code> would quickly go way over the maximum length of <code>array</code>:</p><pre><code class="language-js">function findLongestWord(str) {
for(let i = 0; i &lt; str.length; i++) {
const array = str.split(" ");
console.log(array[i]);
// array[0]: "The"
// array[1]: "quick"
// array[2]: "brown"
// ...
// array[9]: "dog"
// array[10]: undefined
// array[11]: undefined
}
}
findLongestWord("The quick brown fox jumped over the lazy dog");
</code></pre>
<p>Calling <code>array[i].split("");</code> to split each string into substrings of characters is a valid approach, but it will throw <code>TypeError: Cannot read property 'split' of undefined</code> when it's passed <code>undefined</code>.</p>
<h3 id="how-to-solve-find-the-longest-word-in-a-string-with-split">How to solve Find the Longest Word in a String with <code>split</code></h3>
<p>Let's quickly go over some pseudo code for how to solve this problem:</p>
<ol>
<li>Split <code>str</code> into an array of individual words</li>
<li>Create a variable to track the greatest word length</li>
<li>Iterate through the array of words and compare the length of each word to the variable mentioned above</li>
<li>If the length of the current word is greater than the one stored in the variable, replace that value with the current word length</li>
<li>Once the length of every word is compared with the maximum word length variable, return that number from the function</li>
</ol>
<p>First, split <code>str</code> into an array of individual words:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
}</code></pre>
<p>Create a variable to keep track of the longest word length and set it to zero:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
let maxWordLength = 0;
}</code></pre>
<p>Now that the value of <code>array</code> is <code>['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']</code>, you can use <code>array.length</code> in your <code>for</code> loop:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
let maxWordLength = 0;
for (let i = 0; i &lt; array.length; i++) {
}
}</code></pre>
<p>Iterate through the array of words and check the length of each word. Remember that strings also have a <code>length</code> method you can call to easily get the length of a string:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
let maxLength = 0;
for (let i = 0; i &lt; array.length; i++) {
array[i].length;
}
}</code></pre>
<p>Use an <code>if</code> statement check if the length of the current word (<code>array[i].length</code>) is greater than <code>maxLength</code>. If so, replace the value of <code>maxLength</code> with <code>array[i].length</code>:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
let maxLength = 0;
for (let i = 0; i &lt; array.length; i++) {
if (array[i].length &gt; maxLength) {
maxLength = array[i].length;
}
}
}</code></pre>
<p>Finally, return <code>maxLength</code> at the end of the function, after the <code>for</code> loop:</p><pre><code class="language-js">function findLongestWordLength(str) {
const array = str.split(" ");
let maxLength = 0;
for (let i = 0; i &lt; array.length; i++) {
if (array[i].length &gt; maxLength) {
maxLength = array[i].length;
}
}
return maxLength;
}</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
