---
card: "https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png"
tags: [Programming]
description: "by Prajwal M"
author: "Milad E. Fahmy"
title: "Demystifying Dynamic Programming"
created: "2021-08-16T11:37:07+02:00"
modified: "2021-08-16T11:37:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-javascript tag-algorithms tag-interview tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Demystifying Dynamic Programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Tyqzs42Dpy2qPZHpcm2HoQ.png" alt="Demystifying Dynamic Programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Prajwal M</p><p>There are many quality articles on how to become a software developer. They teach you to program, develop, and use libraries. But little has been done to educate in <strong>Algorithms</strong> and <strong>DataStructures</strong><em>.</em> No matter how good you are at development, without knowledge of <strong>Algorithms</strong> and <strong>Data Structures</strong><em>,</em> you can’t get hired<em>.</em></p><p>Learning popular algorithms like <strong>Matrix Chain Multiplication, Knapsack or Travelling Salesman</strong><em> </em><strong>Algorithms </strong>is not sufficient. Interviewers ask problems like the ones you find on competitive programming sites. To solve such problems, you need to have a good and firm understanding of the concepts.</p><h4 id="what-is-dynamic-programming"><strong>What is Dynamic Programming?</strong></h4><p>According to <a href="https://en.wikipedia.org/wiki/Dynamic_programming" rel="noopener">Wikipedia</a>, dynamic programming is simplifying a complicated problem by breaking it down into simpler sub-problems in a <a href="https://en.wikipedia.org/wiki/Recursion" rel="noopener">recursive</a> manner. This article will teach you to:</p><pre><code>-&gt; Identify subproblems
-&gt; Learn how to solve subproblems
-&gt; Identify that subproblems are repetitive
-&gt; Identify that subproblems have optimal substructure property
-&gt; Learn to cache/store results of sub problems
-&gt; Develop a recursive relation to solve the problem
-&gt; Use top-down and bottom-up approach to solve the problem</code></pre><h4 id="which-language-will-i-use"><strong>Which language will I use?</strong></h4><p>I know that most people are proficient or have experience coding in JavaScript. Also, once you learn in JavaScript, it is very easy to transform it into Java code. The same can be said of Python or C++. The trick is to understand the problems in the language you like the most. Hence I have chosen to use JavaScript.</p><p><strong>This post is about algorithms and more specifically about dynamic programming. It is generally perceived as a tough topic. If you make it to the end of the post, I am sure you can tackle many dynamic programming problems on your own </strong>?.</p><h3 id="problem-statement"><strong>Problem Statement</strong></h3><pre><code>Problem: Given an integer n, find the minimum number of steps to reach integer 1.
At each step, you can:
Subtract 1,
Divide by 2, if it is divisible by 2
Divide by 3, if it is divisible by 3</code></pre><p>All Dynamic programming problems have a <strong>start state. Y</strong>ou have to reach the <strong>goal</strong> by <strong>transitioning</strong> through a <strong>number of intermediate states</strong>. In a typical textbook, you will often hear the term <strong>subproblem</strong>. It is the same as a <strong>state</strong>. The terms can be used interchangeably. In this article, I will use the term state instead of the term subproblem.</p><p><strong>What is a subproblem or state ? </strong>A subproblem/state is a smaller instance of the original problem. The methods used to solve the original problem and the subproblem are the same.</p><blockquote><em>Some problems will give you the rules that specify the state transitions. This is one such problem. This problem says you can move to n-1, n/2 or n/3 starting from n. On the flip side, there are problems that will not specify the state transitions. You will have to figure them out by yourself. I will talk about these types of problems in another post.</em></blockquote><p>Here,</p><pre><code>Start state -&gt; n
Goal -&gt; 1
Intermediate states -&gt; any integer number between 1 and n</code></pre><p>Given a state (either start or intermediate), <strong>you can always move to a fixed number of states.</strong></p><pre><code>from n you can move to :
n -&gt; n-1
if n % 2 == 0:
n -&gt; n/2
if n % 3 == 0:
n -&gt; n/3
example:
from 3 you can move to,
3 -&gt; 3-1 = 2
3 -&gt; 3/3 = 1
from 4 you can move to,
4 -&gt; 4-1 = 3
4 -&gt; 4/2 = 2</code></pre><p>In a dynamic programming optimization problem<em>, </em>you have to determine <strong>moving though which states from start to goal will give you an optimal solution.</strong></p><pre><code>For n = 4:
approach one:
4 -&gt; 3 -&gt; 2 -&gt; 1
approach two:
4 -&gt; 2 -&gt; 1
approach three:
4 -&gt; 3 -&gt; 1</code></pre><p>Here, of the three approaches, approaches two and three are optimal, as they require smallest amount of moves/transitions. Approach one is the worst, as it requires more moves.</p><h4 id="textbook-terminologies-explained"><strong>Textbook terminologies explained</strong></h4><pre><code>Repetitive subproblems : You will end up solving the same problem more than once.
for n = 5
example:
5 -&gt; 4 -&gt; 3 -&gt; 1
5 -&gt; 4 -&gt; 2 -&gt; 1
5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1
observe here that 2 -&gt; 1 occurs two times.
also observe that 5 -&gt; 4 occurs three times.
Optimal Substructure : Optimal solutions to subproblems give optimal solution to the entire problem
example:
2 -&gt; 1 is optimal
3 -&gt; 1 is optimal
when I am at 4,
4 -&gt; 3 -&gt; 2 -&gt; 1 and 4 -&gt; 3 -&gt; 1 is possible
but the optimal solution of 4 is 4 -&gt; 3 -&gt; 1. The optimal solution of four comes from optimal solution of three (3 -&gt; 1).
similarly,
4 -&gt; 3 -&gt; 2 -&gt; 1 and 4 -&gt; 2 -&gt; 1 is possible
but the optimal solution of 4 is 4 -&gt; 2 -&gt; 1. The optimal solution of four comes from optimal solution of two (2 -&gt; 1).
now 5,
The optimal solution of 5 depends on optimal solution to 4.
5 -&gt; 4 -&gt; 2 -&gt; 1 and 5 -&gt; 4 -&gt; 3 -&gt; 1 are optimal.</code></pre><p><strong>How should you use Repetitive subproblems and Optimal Substructure to our advantage ?</strong></p><blockquote><em>We will solve the subproblems only once and solve each subproblem optimally.</em></blockquote><pre><code>we will solve the subproblems 3 -&gt; 1 and 2 -&gt; 1 only once and optimally.
Now for 4 we will solve only once by 4 -&gt; 3 -&gt; 1 and optimally. You can also solve as 4 -&gt; 2 -&gt; 1 but that is left to you.
Finally for 5 we will solve only once by 5 - &gt; 4 -&gt; 3 -&gt; 1 and optimally.</code></pre><p>In practice you will use an array to store the optimal result of a subproblem. This way when you have to solve the subproblem again, you can get the value from the array rather than solving it again. Essentially you are now solving a subproblem only once.</p><h4 id="how-to-measure-optimality"><strong>How to measure Optimality</strong></h4><p>By using something called <strong>cost</strong>. There is always a cost associated with moving from one state to another state. Cost may be zero or a finite number. The set of moves/transitions that give the optimal cost is the optimal solution.</p><pre><code>In 5 -&gt; 4 -&gt; 3 -&gt; 1
for 5 -&gt; 4 cost is 1
for 4 -&gt; 3 cost is 1
for 3 -&gt; 1 cost is 1
The total cost of 5 -&gt; 4 -&gt; 3 -&gt; 1 is the total sum of 3.
In In 5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1
for 5 -&gt; 4 cost is 1
for 4 -&gt; 3 cost is 1
for 3 -&gt; 2 cost is 1
for 2 -&gt; 1 cost is 1
The total cost of 5 -&gt; 3 -&gt; 2 -&gt; 1 is the total sum of 4.
The optimal solution of 5 -&gt; 4 -&gt; 3 -&gt; 1 has a cost of three which is the minimum. Hence we can see that optimal solutions have optimal costs</code></pre><p><strong>Recursive Relation:</strong> All dynamic programming problems have recursive relations. <strong>Once you define a recursive relation, the solution is merely translating it into code.</strong></p><pre><code>For the above problem, let us define minOne as the function that we will use to solve the problem and the cost of moving from one state to another as 1.
if n = 5,
solution to 5 is cost + solution to 4
recursive formulae/relation is
minOne(5) = 1 + minOne(4)
Similarly,
if n = 6,
recursive formulae/relation is
minOne(6) = min(
1 + minOne(5),
1 + minOne(3),
1 + minOne(2) )</code></pre><h3 id="code"><strong>Code</strong></h3><p>Dynamic programming problems can be solved by a <strong>top down</strong> approach or a <strong>bottom up</strong> approach.</p><pre><code>Top Down : Solve problems recursively.
for n = 5, you will solve/start from 5, that is from the top of the problem.
It is a relatively easy approach provided you have a firm grasp on recursion. I say that this approach is easy as this method is as simple as transforming your recursive relation into code.
Bottom Up : Solve problems iteratively.
for n = 5, you will solve/start from 1, that is from the bottom of the problem.
This approach uses a for loop. It does not lead to stack overflow as in recursion. This approach is also slightly more optimal.</code></pre><h4 id="which-approach-is-better"><strong>Which approach is better?</strong></h4><p>It is up to your comfort. Both give the same solutions. In very large problems, bottom up is beneficial as it does not lead to stack overflow. If you choose a input of 10000, the top-down approach will give maximum call stack size exceeded, but a bottom-up approach will give you the solution.</p><p>But do remember that you cannot eliminate recursive thinking completely. You will always have to define a recursive relation irrespective of the approach you use.</p><h4 id="bottom-up-approach"><strong>Bottom-Up approach</strong></h4><pre><code class="language-js">/*
Problem: Given an integer n, find the minimum number of steps to reach integer 1.
At each step, you can:
Subtract 1,
Divide by 2, if it is divisible by 2
Divide by 3, if it is divisible by 2
*/
// bottom-up
function minOneBottomUp(n) {
const cache = [];
// base condition
cache[1] = 0;
for (i = 2; i &lt;= n; i++) {
// initialize a , b and c to some very large numbers
let a = 1000, b = 1000, c = 1000;
// one step from i -&gt; i-1
a = 1 + cache[i - 1];
// one step from i -&gt; i/2 if i is divisible by 2
if (i % 2 === 0) {
b = 1 + cache[i / 2];
}
// one step from i -&gt; i/3 if i is divisible by 3
if (i % 3 === 0) {
c = 1 + cache[i / 3];
}
// Store the minimum number of steps to reach i
cache[i] = Math.min(a, b, c);
}
// return the number minimum number of steps to reach n
return cache[n];
}
console.log(minOneBottomUp(1000));</code></pre><pre><code>Line 11 : The function that will solve the problem is named as minOneBottomUp. It takes n as the input.
Line 13 : The array that will be used to store results of every solved state so that there is no repeated computation is named cache. Some people like to call the array dp instead of cache. In general, cache[i] is interpreted as the minimum number of steps to reach 1 starting from i.
Line 15 : cache[1] = 0 This is the base condition. It says that minimum number of steps to reach 1 starting from 1 is 0.
Line 17 - 37 : For loop to fill up the cache with all states from 1 to n inclusive.
Line 20 : Initialize variables a, b and c to some large number. Here a represents minimum number of steps. If I did the operation n-1, b represents the minimum number of steps. If I did the operation n/2, c represents the minimum number of steps. If I did the operation n/3. The initial values of a, b and c depends upon the size of the problem.
Line 23 : a = 1 + cache[i-1]. This follows from the recursive relation we defined earlier.
Line 26 - 28: if(i % 2 == 0){
b = 1 + cache[i/2];
}
This follows from the recursive relation we defined earlier.
Line 31 - 33: if(i % 3== 0){
c= 1 + cache[i/3];
}
This follows from the recursive relation we defined earlier.
Line 36 : This the most important step.
cache[i] = Math.min(a, b, c). This essentially determines and stores which of a, b and c gave the minimum number of steps.
Line 40 : All the computations are completed. Minimum steps for all states from 1 to n is calculated. I return cache[n](minimum number of steps to reach 1 starting from n) which is the answer we wanted.
Line 43 : Testing code. It returns a value of 9</code></pre><h4 id="top-down-approach"><strong>Top-Down approach</strong></h4><pre><code class="language-js">/*
Problem: Given an integer n, find the minimum number of steps to reach integer 1.
At each step, you can:
Subtract 1,
Divide by 2, if it is divisible by 2
Divide by 3, if it is divisible by 2
*/
// top-down
function minOne(n, cache) {
// if the array value at n is not undefined, return the value at that index
// This is the heart of dynamic programming
if (typeof (cache[n]) !== 'undefined') {
return cache[n];
}
// if n has reached 1 return 0
// terminating/base condition
if (n &lt;= 1) {
return 0;
}
// initialize a , b and c to some very large numbers
let a = 1000, b = 1000, c = 1000;
// one step from n -&gt; n-1
a = 1 + minOne(n - 1, cache);
// one step from n -&gt; n/2 if n is divisible by 2
if (n % 2 === 0) {
b = 1 + minOne(n / 2, cache);
}
// one step from n -&gt; n/3 if n is divisible by 3
if (n % 3 === 0) {
c = 1 + minOne(n / 3, cache);
}
// Store the minimum number of steps to reach n
return cache[n] = Math.min(a, b, c);
}
const cache = [];
console.log(minOne(1000, cache));</code></pre><pre><code>Line 11 : The function that will solve the problem is named as minOne. It takes n and cache as the inputs.
Line 15 - 16 : It checks if for a particular state the solution has been computed or not. If it is computed it returns the previously computed value. This is the top-down way of not doing repeated computation.
Line 21 - 23 : It is the base condition. It says that if n is 1 , the minimum number of steps is 0.
Line 26 :  Initialize variables a, b and c to some large number. Here a represents minimum number of steps if I did the operation n-1, b represents the minimum number of steps if I did the operation n/2 and c represents the minimum number of steps if I did the operation n/3. The initial values of a, b and c depends upon the size of the problem.
Line 29 : a = 1 + minOne(n-1, cache). This follows from the recursive relation we defined earlier.
Line 32 - 34 : if(n % 2 == 0){
b = 1 + minOne(n/2, cache);
}
This follows from the recursive relation we defined earlier.
Line 37 - 39 : if(n % 3== 0){
c = 1 + minOne(n/3, cache);
}
This follows from the recursive relation we defined earlier.
Line 42 : return cache[n] = Math.min(a, b, c) . This essentially determines and stores which of a, b and c gave the minimum number of steps.
Line 48 - 49 : Testing code. It returns a value of 9</code></pre><h4 id="time-complexity"><strong>Time Complexity</strong></h4><p>In Dynamic programming problems, Time Complexity is<strong> the number of unique states/subproblems * time taken per state</strong>.</p><p>In this problem, for a given n, there are <strong>n</strong> unique states/subproblems. For convenience, each state is said to be solved in a constant time. Hence the time complexity is <strong>O(n * 1).</strong></p><p>This can be easily cross verified by the for loop we used in the bottom-up approach. We see that we use only one for loop to solve the problem. Hence the time complexity is <strong>O(n ) or linear.</strong></p><p>This is the power of dynamic programming. It allows such complex problems to be solved efficiently.</p><h4 id="space-complexity"><strong>Space Complexity</strong></h4><p>We use one array called cache to store the results of n states. Hence the size of the array is n. Therefore the space complexity is <strong>O(n)</strong>.</p><h4 id="dp-as-space-time-tradeoff"><strong>DP as Space-Time tradeoff</strong></h4><p>Dynamic programming makes use of space to solve a problem faster. In this problem, we are using <strong>O(n)</strong> space to solve the problem in <strong>O(n)</strong> time. Hence we trade space for speed/time. Therefore it’s aptly called the <strong>Space-Time tradeoff.</strong></p><h3 id="wrapping-up">Wrapping up</h3><p>I hope this post demystifies dynamic programming. I understand that reading through the entire post might’ve been painful and tough, but dynamic programming is a tough topic. Mastering it requires a lot of practice.</p><p>I will publish more articles on demystifying different types of dynamic programming problems. I will also publish a article on how to transform a backtracking solution into a dynamic programming solution.</p><p>If you like this post, please support by clapping ?(you could go up to 50) and follow me here on Medium ✌️. You can connect with me on <a href="https://www.linkedin.com/in/prajwalm/">LinkedIn</a> . You can also follow me on <a href="https://github.com/PrajwalM2212">Github</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
