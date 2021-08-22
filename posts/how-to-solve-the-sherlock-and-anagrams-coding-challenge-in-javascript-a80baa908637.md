---
card: "https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg"
tags: [JavaScript]
description: This post is going to get you through my solution to a coding
author: "Milad E. Fahmy"
title: "How to solve the Sherlock and Anagrams coding challenge in JavaScript"
created: "2021-08-15T19:34:30+02:00"
modified: "2021-08-15T19:34:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-algorithms tag-coding-challenge tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to solve the Sherlock and Anagrams coding challenge in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*A_R6N6YK1HylRbzIi_0KPw.jpeg" alt="How to solve the Sherlock and Anagrams coding challenge in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This post is going to get you through my solution to a coding challenge called “Sherlock and Anagrams.” You may take a look at it in <a href="https://www.hackerrank.com/challenges/sherlock-and-anagrams" rel="noopener">HackerRank</a>.</p>
<p>I spent a lot of time trying to solve it, with JavaScript. When I tried to google it, I could not find a decent JS solution. I found just one, and it was not working correctly. Also, any explanations were completely out of the question. That’s why I decided to write an article about it and try to put some nice and easy to digest explanations along the way. Keep reading now!</p>
<p>⚠️CAUTION: <em>I will roll out my solution below with short explanations about each of the steps. If you want to give a try yourself, please stop here and go to HackerRank’s site.</em></p>
<h3 id="problem">Problem</h3>
<p>Two strings are <a href="http://en.wikipedia.org/wiki/Anagram" rel="noopener">anagrams</a> of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.</p>
<p>For example <em>s = mom</em>, the list of all anagrammatic pairs is [<em>m, m</em>], [<em>mo, om</em>] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.</p>
<p><strong>Constraints</strong><br>Length of the input string: 2 ≤ |s| ≤ 100<br>String <em>s</em> contains only lowercase letters from the range ascii[a-z].</p>
<h3 id="analysis">Analysis</h3>
<p>First thing first — we need to get a better understanding of the whole problem. What is an anagram? What is an anagrammatic pair? Can I see one? Also, what exactly does it mean <em>substrings</em>?</p>
<p><strong>In other words, we need to have a clear picture of what are we trying to solve, before solving it.</strong></p>
<p>From the description of the problem, we can deduct all we need. Keep walking! ?</p>
<p><em>I think this is a good moment to mention that the challenge in question is under the “Dictionaries and Hashmaps” section in the HackerRank website. You’ll probably think that you should use this kind of data structure when solving it.</em> ?</p>
<h4 id="anagrams">Anagrams</h4>
<p>Since we are going to look for anagrams, let’s start with them. As it is described above, an anagram of one word is another word that has the same length and is created with the same characters from the former word.</p>
<figcaption>Animation for the anagram “Listen = Silent”</figcaption>
</figure>
<p>So we will have to look for words and compare them with other words, in order to see if they are anagrammatic pairs. Once found, we will just count them.</p>
<h4 id="anagrammatic-pairs">Anagrammatic pairs</h4>
<p>Since we’ve seen what an anagram is, it should be relatively easy to conclude that an anagrammatic pair is just two strings that are anagrams. Such as “mo” and “om”, or “listen” and “silent”. We will have to count how many pairs like this can be found in a given string. In order to do that, we need to split this original string to substrings.</p>
<h4 id="substrings">Substrings</h4>
<p>Substrings, as the name infers, are parts of a string. These parts could be just a letter or a pair of letters, such as what have we seen in the example above — “<em>m</em>” or “<em>mo.</em>” In our solution, we will split the original string to such substrings and then we will go over them and do the comparison, which will tell us whether we have anagrammatic pairs among them.</p>
<h3 id="solution">Solution</h3>
<p>Now that we’ve done our analysis, it’s showtime! ?</p>
<p>Let’s summarize:</p>
<ol>
<li>We need to find all substrings of the given string — create a method for that.</li>
<li>We need to be able to check if two strings are anagrams — create a method for that.</li>
<li>We need to count all anagrammatic pairs in the given string — create a method for that.</li>
<li>Combine everything from above and spit the result — create a method for that.</li>
</ol>
<h4 id="get-all-substrings">Get all substrings</h4>
<p>This will be our helper method for finding all substrings of a given string:</p><pre><code class="language-js">function getAllSubstrings(str) {
let i, j, result = [];
for (i = 0; i &lt; str.length; i++) {
for (j = i + 1; j &lt; str.length + 1; j++) {
result.push(str.slice(i, j))
}
}
return result
}</code></pre>
<p>As you can see, it has O(n²) time complexity. For our case, it does the job, because we have limited length of the input string (up to 100 characters).</p>
<h4 id="check-for-anagrams">Check for anagrams</h4>
<p>This will be our helper method for checking if two strings are anagrammatic pairs:</p><pre><code class="language-js">function isAnagram(str1, str2) {
const hist = {}
for (let i = 0; i &lt; str1.length; i++) {
const char = str1[i]
if (hist[char]) {
hist[char]++
} else {
hist[char] = 1
}
}
for (let j = 0; j &lt; str2.length; j++) {
const char = str2[j]
if (hist[char]) {
hist[char]--
} else {
return false
}
}
return true
}</code></pre>
<p>Remember that we assumed we’d most probably have to use data structures such as hashmaps or dictionaries (given the section where this challenge is found on HackerRank).</p>
<p>We use a simple JavaScript object to play the role of a hashmap. We do two iterations — one per string. When we iterate over the first one, we add its characters as keys to the hashmap and count their appearances, which are going to be stored as their values. Then we do another iteration over the second string. Check if its characters are stored in our hashmap. If yes — decrement their value. If there are missing characters, which means the two strings are not an anagrammatic pair, we simply return false. If both loops complete, we return true, signifying that the strings being analyzed are an anagrammatic pair.</p>
<h4 id="do-the-counting">Do the counting</h4>
<p>This is the method, where we will use the helper for checking if a pair is anagrammatic and count it. We do that with the help of JavaScript arrays and the methods they provide. We iterate over an array containing all the substrings of the original string. Then we get the correct element and remove it from the array. And then we do another loop through that array and return 1 if we find that there is an anagram of the current element. If nothing is found, we return 0.</p><pre><code class="language-js">function countAnagrams(currentIndex, arr) {
const currentElement = arr[currentIndex]
const arrRest = arr.slice(currentIndex + 1)
let counter = 0
for (let i = 0; i &lt; arrRest.length; i++) {
if (currentElement.length === arrRest[i].length &amp;&amp; isAnagram(currentElement, arrRest[i])) {
counter++
}
}
return counter
}</code></pre>
<h4 id="and-in-the-end">And in the end</h4>
<p>The only thing left to be done now is to combine all of the above and spit the desired result. Here is how the final method looks like:</p><pre><code class="language-js">function sherlockAndAnagrams(s) {
const duplicatesCount = s.split('').filter((v, i) =&gt; s.indexOf(v) !== i).length
if (!duplicatesCount) return 0
let anagramsCount = 0
const arr = getAllSubstrings(s)
for (let i = 0; i &lt; arr.length; i++) {
anagramsCount += countAnagrams(i, arr)
}
return anagramsCount
}</code></pre>
<p><em>Maybe you have noticed, here I am checking first for duplicates in order to know if I should continue further. As if there are no duplicated letters, then it’s not possible to have an anagram.</em></p>
<p>And finally, we get all substrings into an array, iterate over it, count the anagrammatic pairs that are found and return this number.</p>
<p>You can find the full code <a href="https://github.com/mihailgaberov/misc/blob/master/coding-challenges/sherlock-and-anagrams.js" rel="noopener">here</a>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>These kind of exercises are very good for making you think algorithmically. Also they change your way of working in your day to day job. My recommendation would be to do the same I am trying to do — train your brain now and then with one of those. And if you can — share. I know sometimes you don’t have time for such challenges, but when you do — go for it.</p>
<p>My personal feeling after finishing this was total satisfaction, which is completely understandable, considering the time it took me to do it. But in the end, dear reader, I am even happier I can share this experience with you?!</p>
<p>Thanks for reading. Read more of my articles at <a href="https://mihail-gaberov.eu/sherlock-and-anagrams/" rel="noopener">mihail-gaberov.eu</a>.</p>
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
