---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg"
tags: [JavaScript]
description: The split() method separates an original string into an array
author: "Milad E. Fahmy"
title: "The Ultimate Guide to JavaScript String Methods - Split"
created: "2021-08-15T19:32:13+02:00"
modified: "2021-08-15T19:32:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to JavaScript String Methods - Split</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f74740569d1a4ca42ac.jpg" alt="The Ultimate Guide to JavaScript String Methods - Split">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>split()</code> method separates an original string into an array of substrings, based on a <code>separator</code> string that you pass as input. The original string is not altered by <code>split()</code>.</p>
<h2 id="syntax">Syntax</h2><pre><code class="language-js">const splitStr = str.split(separator, limit);</code></pre>
<ul>
<li><code>separator</code> - a string indicating where each split should occur</li>
<li><code>limit</code> - a number for the amount of splits to be found</li>
</ul>
<h2 id="examples-">Examples:</h2><pre><code class="language-js">const str = "Hello. I am a string. You can separate me.";
const splitStr = str.split("."); // Will separate str on each period character
console.log(splitStr); // [ "Hello", " I am a string", " You can separate me", "" ]
console.log(str); // "Hello. I am a string. You can separate me."</code></pre>
<p>Since we used the period (<code>.</code>) as the <code>separator</code> string, the strings in the output array do not contain the period in them – the output separated strings do not include the input <code>separator</code> itself.</p>
<p>You can operate on strings directly, without storing them as variables:</p><pre><code class="language-js">"Hello... I am another string... keep on learning!".split("..."); // [ "Hello", " I am another string", " keep on learning!" ]</code></pre>
<p>Also, string separator does not have to be a single character, it can be any combination of characters:</p><pre><code class="language-js">const names = "Kratos- Atreus- Freya- Hela- Thor- Odin";
const namesArr = names.split("- "); // Notice that the separator is a dash and a space
const firstThreeNames = names.split("- ", 3);
console.log(namesArr) // [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ]
console.log(firstThreeNames); // [ "Kratos", "Atreus", "Freya" ]</code></pre>
<h2 id="common-uses-of-split">Common Uses of <code>split</code></h2>
<p>The <code>split()</code> method is very useful once you grasp the basics. Here are a few common use cases for <code>split()</code>:</p>
<h3 id="create-an-array-of-words-from-a-sentence-">Create an array of words from a sentence:</h3><pre><code class="language-js">const sentence = "Ladies and gentlemen we are floating in space.";
const words = sentence.split(" "); // Split the sentence on each space between words
console.log(words); // [ "Ladies", "and", "gentlemen", "we", "are", "floating", "in", "space." ]</code></pre>
<h3 id="create-an-array-of-letters-in-a-word-">Create an array of letters in a word:</h3><pre><code class="language-js">const word = "space";
const letters = word.split("");
console.log(letters); // [ "s", "p", "a", "c", "e" ]</code></pre>
<h3 id="reversing-the-letters-in-a-word-">Reversing the letters in a word:</h3>
<p>Because the <code>split()</code> method returns an array, it can be combined with array methods like <code>reverse()</code> and <code>join()</code>:</p><pre><code class="language-js">const word = "float";
const reversedWord = word.split("").reverse().join("");
console.log(reversedWord); // "taolf"</code></pre>
<p>That's all you need to know to <code>split()</code> strings with the best of 'em!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
