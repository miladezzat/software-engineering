---
card: "https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg"
tags: [JavaScript]
description: by Prashant Yadav
author: "Milad E. Fahmy"
title: "How to form the smallest possible number from a given number in JavaScript"
created: "2021-08-15T19:38:58+02:00"
modified: "2021-08-15T19:38:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-algorithms tag-es6 tag-programming tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">How to form the smallest possible number from a given number in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XoEDgZmZ-IWBZivc4DJakg.jpeg" alt="How to form the smallest possible number from a given number in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Prashant Yadav</p>
<h1 id="how-to-form-the-smallest-possible-number-from-a-given-number-in-javascript">How to form the smallest possible number from a given number in JavaScript</h1>
<p>In this tutorial, we will implement an algorithm to form the smallest possible number with <a href="https://learnersbucket.com/tutorials/es6/es6-intro/" rel="noopener">ES6</a>.</p>
<figcaption>Source: Pixabay</figcaption>
</figure><pre><code>Input: 55010 7652634</code></pre><pre><code>Output: 10055 2345667</code></pre>
<p><strong>Note</strong>: The transformed number should not start with 0 if it has at least one non-zero character.</p>
<p>We are going to use two different approaches to solve this problem. Everything will be written in <a href="https://learnersbucket.com/tutorials/es6/es6-intro" rel="noopener">ES6</a>.</p>
<ul>
<li>In the first approach, we will assume that the provided number is in string format and solve it using sorting which will take O(nlogn).</li>
<li>In the Second approach, we will solve with numeric value with O(d) time, where d is the number of digits.</li>
</ul>
<h3 id="using-sorting-o-nlogn-">Using sorting O(nlogn).</h3>
<h4 id="implementation">Implementation</h4>
<ul>
<li>We will convert the number to the character array and then sort that array.</li>
<li>After sorting we will check if the first character in the array is 0.</li>
<li>If it is not 0 then we will join the array and return it.</li>
<li>If it is 0 then we will find the first non-zero number and swap it with 0 and return it.</li>
</ul><pre><code>function smallestPossibleNumber(num){</code></pre><pre><code>//Create a character array and sort it in ascending orderlet sorted = num.split('').sort();</code></pre><pre><code>//Check if first character is not 0 then join and return it if(sorted[0] != '0'){    return sorted.join('');}</code></pre><pre><code>//find the index of the first non - zero character let index = 0; for(let i = 0; i &lt; sorted.length; i++){  if(sorted[i] &gt; "0"){    index = i;    break;  } }</code></pre><pre><code>//Swap the indexes  let temp = sorted[0];  sorted[0] = sorted[index];  sorted[index] = temp;</code></pre><pre><code>//return the string after joining the characters of array return sorted.join(''); }</code></pre>
<p>Running the Program</p><pre><code>Input:console.log(smallestPossibleNumber('55010'));console.log(smallestPossibleNumber('7652634'));console.log(smallestPossibleNumber('000001'));console.log(smallestPossibleNumber('000000'));</code></pre><pre><code>Output:100552345667100000000000</code></pre><pre><code>/*How it works  let sorted = num.split('').sort();   = ['5','5','0','1','0'].sort() = ['0','0','1','5','5']  if(sorted[0] != '0'){   // '0' != '0' condition fails     return sorted.join('');  }    //Find the index of the first non - zero character  let index = 0;  for(let i = 0; i &lt; sorted.length; i++){     if(sorted[i] &gt; '0'){  // '1' &gt; '0'       index = i;      // index = 2;       break;          // break;     }  }    //swap the index  var temp = sorted[0];        sorted[0] = sorted[index];  sorted[index] = temp;    //return the string  return sorted.join('');*/</code></pre>
<h4 id="how-it-works">How it works</h4>
<p>We first created the array of characters like <code>['5', '5', '0', '1', 0]</code> . Then we sort this to<code>['0', '0', '1', '5', '5']</code> After this, we find the first non-zero element and swap it with first zero elements like <code>['1', '0', '0', '5', '5']</code> . Now we have our smallest number ready we just need to concatenate them together and return it.</p>
<p>Learn more about the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" rel="noopener">split()</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" rel="noopener">sort()</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noopener">join()</a>.</p>
<p>Time Complexity: O(nlogn).<br>Space Complexity: O(n).</p>
<h4 id="time-and-space-complexity-explanation">Time and Space complexity explanation</h4>
<p>We are creating a character array which will take O(n) time. Then sorting the array will take O(nlogn).</p>
<p>After that, we are finding the index of smallest non zero number which can take O(n) in the worst case and joining the array to create the string will take O(n). As these all operations are running one after other. So time complexity is O(n + nlogn + n + n) = O(nlogn).</p>
<p>We are creating an array of characters from the string, so space complexity is O(n).</p>
<h3 id="using-numeric-value-o-logn-">Using numeric value O(logn).</h3>
<p>There is a drawback in this approach: if the number only contains zeros then it will return a single zero.</p>
<h4 id="implementation-1">Implementation</h4>
<ul>
<li>We will create an array of numbers from 0 to 9.</li>
<li>Then we will keep track of the digits present in the number by increasing their count in the array.</li>
<li>After that, we will find the smallest non-zero digit and decrease its count by 1.</li>
<li>In the end, we will recreate the number by arranging them in ascending order and return the result.</li>
<li>This solution is based on the counting sort.</li>
</ul><pre><code>function smallestPossibleNumber(num) {    // initialize frequency of each digit to Zero   let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];          // count frequency of each digit in the number   while (num &gt; 0){      let d = parseInt(num % 10); // extract last digit     freq[d]++; // increment counting     num = parseInt(num / 10); //remove last digit   }</code></pre><pre><code>// Set the LEFTMOST digit to minimum expect 0   let result = 0;    for (let i = 1 ; i &lt;= 9 ; i++) {       if (freq[i] != 0) {          result = i;          freq[i]--;          break;      }    }           // arrange all remaining digits   // in ascending order   for (let i = 0 ; i &lt;= 9 ; i++) {      while (freq[i]-- != 0){          result = result * 10 + i;       }   }        return result; }</code></pre>
<p>Running the program</p><pre><code>Input:console.log(smallestPossibleNumber('55010'));console.log(smallestPossibleNumber('7652634'));console.log(smallestPossibleNumber('000001'));console.log(smallestPossibleNumber('000000'));</code></pre><pre><code>Output:10055234566710</code></pre><pre><code>/* How it works   // initialize frequency of each digit to Zero   let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      // count frequency of each digit in the number   while (num &gt; 0){      let d = parseInt(num % 10); // extract last digit     freq[d]++; // increment counting             num = parseInt(num / 10); //remove last digit   }    //After incrementing count   //freq = [2, 1, 0, 0, 0, 2, 0, 0, 0, 0]      // Set the LEFTMOST digit to minimum expect 0   let result = 0;    for (let i = 1 ; i &lt;= 9 ; i++) {       if (freq[i] != 0) {          result = i;          freq[i]--;          break;      }    }    // result = 1     // arrange all remaining digits   // in ascending order   for (let i = 0 ; i &lt;= 9 ; i++) {      while (freq[i]-- != 0){          result = result * 10 + i;       }   }</code></pre><pre><code>   //10   //100   //1005   //10055   //10055      return result*/</code></pre>
<p>Time Complexity: O(nlogn).<br>Space Complexity: O(1).</p>
<h4 id="time-and-space-complexity-explanation-1">Time and Space complexity explanation</h4>
<p>We are removing each digit from the number and incrementing its respective count in an array that will take O(logn). Then we find the smallest non-zero number from the array in O(10).</p>
<p>After that we are rearranging the digits to create the smallest number in O(10 * logn). Time complexity is O(logn + 10+ 10logn) = O(logn) or O(d), where d is the no of digits</p>
<p>We are using constant space (an array of 10 numbers), so space complexity is O(1).</p>
<p>If you liked this article, please give it some ?and share it! If you have any questions related to this feel free to ask me.</p>
<p><em>For more like this and algorithmic solutions in Javascript, follow me on </em><a href="https://twitter.com/LearnersBucket" rel="noopener"><strong>Twitter</strong></a><em>. </em>I write about <a href="https://learnersbucket.com/tutorials/es6/es6-intro/" rel="noopener">ES6</a>, React, Nodejs, <a href="https://learnersbucket.com/tutorials/topics/data-structures/" rel="noopener">Data structures</a>, and <a href="https://learnersbucket.com/examples/topics/algorithms/" rel="noopener">Algorithms</a> on <a href="https://learnersbucket.com/" rel="noopener"><em>learnersbucket.com</em></a><em>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
