---
card: "https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg"
tags: [JavaScript]
description: "In this article, I’m going to explain how to solve Free Code "
author: "Milad E. Fahmy"
title: "Three ways you can find the largest number in an array using JavaScript"
created: "2021-08-16T11:53:44+02:00"
modified: "2021-08-16T11:53:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-learning tag-algorithms tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Three ways you can find the largest number in an array using JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LSH8HhFM40_2KWWOzhqPhg.jpeg" alt="Three ways you can find the largest number in an array using JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I’m going to explain how to solve Free Code Camp’s “<a href="https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays" rel="noopener">Return Largest Numbers in Arrays</a><em>” </em>challenge. This involves returning an array with the largest numbers from each of the sub arrays.</p><p>There are the three approaches I’ll cover:</p><ol><li>with a FOR loop</li><li>using the reduce() method</li><li>using Math.max()</li></ol><h4 id="the-algorithm-challenge-description">The Algorithm Challenge Description</h4><blockquote>Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br><br>Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].</blockquote><pre><code class="language-js">function largestOfFour(arr) {
return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
</code></pre><h4 id="provided-test-cases">Provided test cases</h4><pre><code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].</code></pre><h3 id="approach-1-return-the-largest-numbers-in-a-array-with-a-for-loop"><strong>Approach #1: Return the Largest Numbers in a Array With a For Loop</strong></h3><p>Here’s my solution, with embedded comments to help you understand it:</p><pre><code class="language-js">
function largestOfFour(arr) {
// Step 1. Create an array that will host the result of the 4 sub-arrays
var largestNumber = [0,0,0,0];
// Step 2. Create the first FOR loop that will iterate through the arrays
for(var arrayIndex = 0; arrayIndex &lt; arr.length; arrayIndex++) {
/* The starting point, index 0, corresponds to the first array */
// Step 3. Create the second FOR loop that will iterate through the sub-arrays
for(var subArrayIndex = 0; subArrayIndex &lt; arr[arrayIndex].length; subArrayIndex++) {
/* The starting point, index 0, corresponds to the first sub-array */
if(arr[arrayIndex][subArrayIndex] &gt; largestNumber[arrayIndex]) {
largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
/* FOR loop cycles
arrayIndex =&gt; i
subArrayIndex =&gt; j
Iteration in the first array
For each iteration: arr[i][j]           largestNumber[i]          if arr[i][j] &gt; largestNumber[i]?     then largestNumber[i] = arr[i][j]
First iteration:    arr[0][0] =&gt; 4      largestNumber[0] =&gt; 0     4 &gt; 0? =&gt; TRUE                       then largestNumber[0] = 4
Second iteration:   arr[0][1] =&gt; 5      largestNumber[0] =&gt; 4     5 &gt; 4? =&gt; TRUE                       then largestNumber[0] = 5
Third iteration:    arr[0][2] =&gt; 1      largestNumber[0] =&gt; 5     1 &gt; 5? =&gt; FALSE                      then largestNumber[0] = 5
Fourth iteration:   arr[0][3] =&gt; 3      largestNumber[0] =&gt; 5     3 &gt; 5? =&gt; FALSE                      then largestNumber[0] = 5
Fifth iteration:    arr[0][4] =&gt; FALSE  largestNumber[0] =&gt; 5                                          largestNumber = [5,0,0,0]
Exit the first array and continue on the second one
Iteration in the second array
For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] &gt; largestNumber[i]?     then largestNumber[i] = arr[i][j]
First iteration:    arr[1][0] =&gt; 13      largestNumber[1] =&gt; 0      13 &gt; 0? =&gt; TRUE                      then largestNumber[1] = 13
Second iteration:   arr[1][1] =&gt; 27      largestNumber[1] =&gt; 13     27 &gt; 13? =&gt; TRUE                     then largestNumber[1] = 27
Third iteration:    arr[1][2] =&gt; 18      largestNumber[1] =&gt; 27     18 &gt; 27? =&gt; FALSE                    then largestNumber[1] = 27
Fourth iteration:   arr[1][3] =&gt; 26      largestNumber[1] =&gt; 27     26 &gt; 27? =&gt; FALSE                    then largestNumber[1] = 27
Fifth iteration:    arr[1][4] =&gt; FALSE   largestNumber[1] =&gt; 27                                          largestNumber = [5,27,0,0]
Exit the first array and continue on the third one
Iteration in the third array
For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] &gt; largestNumber[i]?     then largestNumber[i] = arr[i][j]
First iteration:    arr[2][0] =&gt; 32      largestNumber[2] =&gt; 0      32 &gt; 0? =&gt; TRUE                      then largestNumber[2] = 32
Second iteration:   arr[2][1] =&gt; 35      largestNumber[2] =&gt; 32     35 &gt; 32? =&gt; TRUE                     then largestNumber[2] = 35
Third iteration:    arr[2][2] =&gt; 37      largestNumber[2] =&gt; 35     37 &gt; 35? =&gt; TRUE                     then largestNumber[2] = 37
Fourth iteration:   arr[2][3] =&gt; 39      largestNumber[2] =&gt; 37     39 &gt; 37? =&gt; TRUE                     then largestNumber[2] = 39
Fifth iteration:    arr[2][4] =&gt; FALSE   largestNumber[2] =&gt; 39                                          largestNumber = [5,27,39,0]
Exit the first array and continue on the fourth one
Iteration in the fourth array
For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] &gt; largestNumber[i]?     then largestNumber[i] = arr[i][j]
First iteration:    arr[3][0] =&gt; 1000    largestNumber[3] =&gt; 0      1000 &gt; 0? =&gt; TRUE                    then largestNumber[3] = 1000
Second iteration:   arr[3][1] =&gt; 1001    largestNumber[3] =&gt; 1000   1001 &gt; 1000? =&gt; TRUE                 then largestNumber[3] = 1001
Third iteration:    arr[3][2] =&gt; 857     largestNumber[3] =&gt; 1001   857 &gt; 1001? =&gt; FALSE                 then largestNumber[3] = 1001
Fourth iteration:   arr[3][3] =&gt; 1       largestNumber[3] =&gt; 1001   1 &gt; 1001? =&gt; FALSE                   then largestNumber[3] = 1001
Fifth iteration:    arr[3][4] =&gt; FALSE   largestNumber[3] =&gt; 1001                                        largestNumber = [5,27,39,1001]
Exit the FOR loop */
}
}
}
// Step 4. Return the largest numbers of each sub-arrays
return largestNumber; // largestNumber = [5,27,39,1001];
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><p>And here it is without my comments:</p><pre><code class="language-js">
function largestOfFour(arr) {
var largestNumber = [0,0,0,0];
for(var arrayIndex = 0; arrayIndex &lt; arr.length; arrayIndex++) {
for(var subArrayIndex = 0; subArrayIndex &lt; arr[arrayIndex].length; subArrayIndex++) {
if(arr[arrayIndex][subArrayIndex] &gt; largestNumber[arrayIndex]) {
largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
}
}
}
return largestNumber;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><h3 id="approach-2-return-the-largest-numbers-in-a-array-with-built-in-functions-with-map-and-reduce-">Approach #2: Return the Largest Numbers in a Array With Built-In Functions — with map() and reduce()</h3><p>For this solution, you’ll use two methods: the Array.prototype.map() method and the Array.prototype.reduce() method.</p><ul><li>The <strong>map()</strong> method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.</li><li>The <strong>reduce()</strong> method applies a function against an accumulator and each value of the array to reduce it to a single value.</li></ul><p>The <strong>ternary operator</strong> is the only JavaScript operator that takes three operands. This operator is used as a shortcut for the if statement.</p><pre><code>(currentLargestNumber &gt; previousLargestNumber) ? currentLargestNumber : previousLargestNumber;</code></pre><p>This can also be read as:</p><pre><code>if (currentLargestNumber &gt; previousLargestNumber == true) {
return currentLargestNumber;
} else {
return previousLargestNumber;
}</code></pre><p>Here’s my solution, with embedded comments:</p><pre><code class="language-js">
function largestOfFour(mainArray) {
// Step 1. Map over the main arrays
return mainArray.map(function (subArray){ // Step 3. Return the largest numbers of each sub-arrays =&gt; returns [5,27,39,1001]
// Step 2. Grab the largest numbers for each sub-arrays with reduce() method
return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
return (currentLargestNumber &gt; previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
/* Map process and Reduce method cycles
currentLargestNumber =&gt; cLN
previousLargestNumber =&gt; pLN
Iteration in the first array
For each iteration:     cLN         pLN       if (cLN &gt; pLN) ?        then cLN        else pLN
First iteration:         4           0        4 &gt; 0? =&gt; TRUE              4             /
Second iteration:        5           4        5 &gt; 4? =&gt; TRUE              5             /
Third iteration:         1           5        1 &gt; 5? =&gt; FALSE             /             5
Fourth iteration:        3           5        3 &gt; 5? =&gt; FALSE             /             5
Fifth iteration:         /           5                                               returns 5
Exit the first array and continue on the second one
Iteration in the second array
For each iteration:     cLN         pLN       if (cLN &gt; pLN) ?        then cLN        else pLN
First iteration:        13           0        13 &gt; 0? =&gt; TRUE            13              /
Second iteration:       27          13        27 &gt; 13? =&gt; TRUE           27              /
Third iteration:        18          27        18 &gt; 27? =&gt; FALSE           /             27
Fourth iteration:       26          27        26 &gt; 27? =&gt; FALSE           /             27
Fifth iteration:         /          27                                                returns 27
Exit the first array and continue on the third one
Iteration in the third array
For each iteration:     cLN         pLN       if (cLN &gt; pLN) ?        then cLN        else pLN
First iteration:        32           0        32 &gt; 0? =&gt; TRUE            32              /
Second iteration:       35          32        35 &gt; 32? =&gt; TRUE           35              /
Third iteration:        37          35        37 &gt; 35? =&gt; TRUE           37              /
Fourth iteration:       39          37        39 &gt; 37? =&gt; TRUE           39              /
Fifth iteration:         /          39                                                returns 39
Exit the first array and continue on the fourth one
Iteration in the fourth array
For each iteration:     cLN         pLN       if (cLN &gt; pLN) ?        then cLN        else pLN
First iteration:        1000         0        1000 &gt; 0? =&gt; TRUE         1000             /
Second iteration:       1001       1000       1001 &gt; 1000? =&gt; TRUE      1001             /
Third iteration:        857        1001       857 &gt; 1001 =&gt; FALSE        /             1001
Fourth iteration:        1         1001       1 &gt; 1001? =&gt; FALSE         /             1001
Fifth iteration:         /         1001                                              returns 1001
Exit the first array and continue on the fourth one */
}, 0); // 0 serves as the context for the first pLN in each sub array
});
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><p>And here it is without comments:</p><pre><code class="language-js">
function largestOfFour(mainArray) {
return mainArray.map(function (subArray){
return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
return (currentLargestNumber &gt; previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
}, 0);
});
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><h3 id="approach-3-return-the-largest-numbers-in-a-array-with-built-in-functions-with-map-and-apply-">Approach #3: Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()</h3><p>For this solution, you’ll use two methods: the Array.prototype.map() method and the Function.prototype.apply() method.</p><ul><li>The <strong>apply()</strong> method calls a function with a given this value and arguments provided as an array (or an array-like object).</li></ul><p>You can pass an array of arguments to a function by using the <strong>apply() </strong>method and the function will execute the items in the array.</p><p>Such functions are known as <strong>variadic functions</strong>, and they can accept any number of arguments instead of a fixed one.</p><p>The <strong>Math.max()</strong> function returns the largest of zero or more numbers, and we can pass any number of arguments.</p><pre><code>console.log(Math.max(4,5,1,3)); // logs 5</code></pre><p>But you can’t pass an array of numbers to the method like this​:</p><pre><code>var num = [4,5,1,3];
console.log(Math.max(num)); // logs NaN</code></pre><p>This is where the <strong>apply() </strong>method turns out to be useful:</p><pre><code>var num = [4,5,1,3];
console.log(Math.max.apply(null, num)); // logs 5</code></pre><p>Note that the first argument to <strong>apply()</strong> sets the value of ‘<strong>this</strong>’, not used in this method, so you pass <strong>null</strong>.</p><p>Now that you have a method to return the largest number in a array, you can loop through each sub-arrays with the <strong>map()</strong> method and return all largest numbers.</p><p>Here’s my solution, with embedded comments:</p><pre><code class="language-js">
function largestOfFour(mainArray) {
// Step 1. Map over the main arrays
return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays =&gt; returns [5,27,39,1001]
// Step 2. Return the largest numbers for each sub-arrays with Math.max() method
return Math.max.apply(null, subArray);
});
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><p>And without comments:</p><pre><code class="language-js">
function largestOfFour(mainArray) {
return mainArray.map(function(subArray) {
return Math.max.apply(null, subArray);
});
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);</code></pre><p>I hope you found this helpful. This is part of my “How to Solve FCC Algorithms” series of articles on the Free Code Camp Algorithm Challenges, where I propose several solutions and explain step-by-step what happens under the hood.</p><p><a href="/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/"><strong>Three ways to repeat a string in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Repeat a string repeat a string” challenge. This involves…</em></a></p><p><a href="/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/"><strong>Two ways to confirm the ending of a String in JavaScript</strong><br><em>In this article, I’ll explain how to solve freeCodeCamp’s “Confirm the Ending” challenge.</em></a></p><p><a href="/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/"><strong>Three Ways to Reverse a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Reverse a String”</em></a></p><p><a href="/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/"><strong>Three Ways to Factorialize a Number in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Factorialize a Number”</em></a></p><p><a href="/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/"><strong>Two Ways to Check for Palindromes in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Check for Palindromes”.</em></a></p><p><a href="/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/"><strong>Three Ways to Find the Longest Word in a String in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Find the Longest Word in a String”.</em></a></p><p><a href="/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"><strong>Three Ways to Title Case a Sentence in JavaScript</strong><br><em>This article is based on Free Code Camp Basic Algorithm Scripting “Title Case a Sentence”.</em></a></p><p>If you have your own solution or any suggestions, share them below in the comments.</p><p>Or you can follow me on <a href="https://medium.com/@sonya.moisset" rel="noopener"><strong>Medium</strong></a><strong>, <a href="https://twitter.com/SonyaMoisset" rel="noopener">Twitter</a>, <a href="https://github.com/SonyaMoisset" rel="noopener">Github</a></strong> and <a href="https://www.linkedin.com/in/sonyamoisset" rel="noopener"><strong>LinkedIn</strong></a>, right after you click the green heart below ;-)</p><p>‪#‎StayCurious‬, ‪#‎KeepOnHacking‬ &amp; ‪#‎MakeItHappen‬!</p><h3 id="additional-resources">Additional Resources</h3><ul><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for" rel="noopener">for — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length" rel="noopener">array.length — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener">map() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" rel="noopener">reduce() method — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">Ternary Operator — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" rel="noopener">apply() method — MDN</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" rel="noopener">Math.max() — MDN</a></li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this" rel="noopener">this — MDN</a></li></ul>
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
