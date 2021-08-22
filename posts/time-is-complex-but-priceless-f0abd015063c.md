---
card: "https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg"
tags: [Programming]
description: "by Michael Olorunnisola"
author: "Milad E. Fahmy"
title: "Algorithms in plain English: time complexity and Big-O notation"
created: "2021-08-16T10:27:52+02:00"
modified: "2021-08-16T10:27:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-web-development tag-javascript tag-tech tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Algorithms in plain English: time complexity and Big-O notation</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1-5hf_o6j3szhVe33L104A.jpeg" alt="Algorithms in plain English: time complexity and Big-O notation">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"
1. Heat Oven to 350 F
2. Mix flour, baking powder, salt
3. Beat butter and sugar until fluffy
4. Add eggs.
5. Mix in flour, baking powder, salt
6. Add milk and " + flavor + "
7. Mix further
8. Put in pan
9. Bake for 30 minutes
10." + if(icing === true) return 'add icing' + "
10. Stuff your face
"
}
BakeCake('vanilla', true) =&gt; deliciousness</code></pre><p>Algorithms are useful in our examination of time complexity because they come in all shapes and sizes.</p><p>In the same way you can slice a pie a 100 different ways, you can solve a single problem with many different algorithms. Some solutions are just more efficient, taking less time and requiring less space than others.</p><p>So the main question is: how do we go about analyzing which solutions are most efficient?</p><p>Math to the rescue! Time complexity analysis in programming is just an extremely simplified mathematical way of analyzing how long an algorithm with a given number of inputs (n) will take to complete it’s task. It’s usually defined using <strong>Big-O notation</strong>.</p><h3 id="what-s-big-o-notation-you-ask">What’s Big O notation, you ask?</h3><p>If you promise you won’t give up and stop reading, I will tell you.</p><p>Big-O notation is a way of converting the overall steps of an algorithm into algebraic terms, then excluding lower order constants and coefficients that don’t have that big an impact on the overall complexity of the problem.</p><p>Mathematicians will probably cringe a bit at my “overall impact” assumption there, but for developers to save time, it’s easier to simplify things this way:</p><pre><code>Regular Big-O
2       O(1)   --&gt; It's just a constant number
2n + 10 O(n)   --&gt; n has the largest effect
5n^2    O(n^2) --&gt; n^2 has the largest effect</code></pre><p>In short, all this example is saying is: we only look at the factor in our expression that has the potential greatest impact on the value that our expression will return. (This changes as the constant gets extremely large and n gets small, but let’s not worry about that for now).</p><p>Below are some common time complexities with simple definitions. Feel free to check out <a href="https://en.wikipedia.org/wiki/Time_complexity" rel="noopener">Wikipedia</a>, though, for more in-depth definitions.</p><ul><li>O(1) — Constant Time: Given an input of size n, it only takes a single step for the algorithm to accomplish the task.</li><li>O(log n) — Logarithmic time: given an input of size n, the number of steps it takes to accomplish the task are decreased by some factor with each step.</li><li>O(n) — Linear Time: Given an input of size n, the number of of steps required is directly related (1 to 1)</li><li>O(n²) — Quadratic Time: Given an input of size n, the number of steps it takes to accomplish a task is square of n.</li><li>O(C^n) — Exponential Time: Given an input of size n, the number of steps it takes to accomplish a task is a constant to the n power (pretty large number).</li></ul><p>With this knowledge in hand, lets see the number of steps that each of these time complexities entails:</p><pre><code class="language-js">let n = 16;
O (1) = 1 step "(awesome!)"
O (log n) = 4 steps  "(awesome!)" -- assumed base 2
O (n) = 16 steps "(pretty good!)"
O(n^2) = 256 steps "(uhh..we can work with this?)"
O(2^n) = 65,536 steps "(...)"</code></pre><p>As you can see, things can easily become orders of magnitude more complex depending on the complexity of your algorithm. Luckily, computers are powerful enough to still handle really large complexities relatively quickly.</p><p>So how do we go about analyzing our code with Big-O notation?</p><p>Well here are some quick and simple examples of how you can apply this knowledge to algorithms you might encounter in the wild or code up yourself.</p><p>We’ll use the data structures below for our examples:</p><pre><code class="language-js">var friends = {
'Mark' : true,
'Amy' : true,
'Carl' : false,
'Ray' :  true,
'Laura' : false,
}
var sortedAges = [22, 24, 27, 29, 31]</code></pre><h4 id="o-1-constant-time"><strong>O(1) — Constant Time</strong></h4><p>Value look ups when you know the key (objects) or the index (arrays) always take one step, and are thus constant time.</p><pre><code class="language-js">//If I know the persons name, I only have to take one step to check:
function isFriend(name){ //similar to knowing the index in an Array
return friends[name];
};
isFriend('Mark') // returns True and only took one step
function add(num1,num2){ // I have two numbers, takes one step to return the value
return num1 + num2
}</code></pre><h4 id="o-log-n-logarithmic-time"><strong>O(log n) — Logarithmic Time</strong></h4><p>If you know which side of the array to look on for an item, you save time by cutting out the other half.</p><pre><code class="language-js">//You decrease the amount of work you have to do with each step
function thisOld(num, array){
var midPoint = Math.floor( array.length /2 );
if( array[midPoint] === num) return true;
if( array[midPoint] &lt; num ) --&gt; only look at second half of the array
if( array[midpoint] &gt; num ) --&gt; only look at first half of the array
//recursively repeat until you arrive at your solution
}
thisOld(29, sortedAges) // returns true
//Notes
//There are a bunch of other checks that should go into this example for it to be truly functional, but not necessary for this explanation.
//This solution works because our Array is sorted
//Recursive solutions are often logarithmic
//We'll get into recursion in another post!</code></pre><h4 id="o-n-linear-time"><strong>O(n) — Linear Time</strong></h4><p>You have to look at every item in the array or list to accomplish the task. Single <strong>for loops</strong> are almost always linear time. Also array methods like <strong>indexOf</strong> are also linear time. You’re just abstracted away from the looping process.</p><pre><code class="language-js">//The number of steps you take is directly correlated to the your input size
function addAges(array){
var sum = 0;
for (let i=0 ; i &lt; array.length; i++){  //has to go through each value
sum += array[i]
}
return sum;
}
addAges(sortedAges) //133</code></pre><h4 id="o-n-quadratic-time"><strong>O(n²) — Quadratic Time</strong></h4><p>Nested <strong>for loops</strong> are quadratic time, because you’re running a linear operation within another linear operation (or n*n = n²).</p><pre><code class="language-js">//The number of steps you take is your input size squared
function addedAges(array){
var addedAge = [];
for (let i=0 ; i &lt; array.length; i++){ //has to go through each value
for(let j=i+1 ; j &lt; array.length ; j++){ //and go through them again
addedAge.push(array[i] + array[j]);
}
}
return addedAge;
}
addedAges(sortedAges); //[ 46, 49, 51, 53, 51, 53, 55, 56, 58, 60 ]
//Notes
//Nested for loops. If one for loop is linear time (n)
//Then two nested for loops are (n * n) or (n^2) Quadratic!</code></pre><h4 id="o-2-n-exponential-time"><strong>O(2^n) — Exponential Time</strong></h4><p>Exponential time is usually for situations where you don’t know that much, and you have to try every possible combination or permutation.</p><pre><code class="language-js">//The number of steps it takes to accomplish a task is a constant to the n power
//Thought example
//Trying to find every combination of letters for a password of length n</code></pre><p>You should do time complexity analysis anytime you write code that has to run fast.</p><p>When you have various routes to solve a problem, it is definitely wiser to create a solution that just works first. But in the long run, you’ll want a solution that runs as quickly and efficiently as possible.</p><p>To help you with the problem solving process, here are some simple questions to ask:</p><blockquote>1. Does this solve the problem? <strong>Yes</strong> =&gt;<br><br>2. Do you have time to work on this<br><br><strong>Yes</strong> =&gt; go to step 3<br><br><strong>No</strong> =&gt; Come back to it later and go to step 6 for now.<br><br>3. Does it cover all edge cases? <strong>Yes</strong> =&gt;<br><br>4. Are my complexities as low as possible ?<br><br><strong>No</strong> =&gt; rewrite or modify into a new solution –&gt;go back to step 1<br><br><strong>Yes</strong> =&gt; go to step 5<br><br>5. Is my code D.R.Y ?<strong> Yes</strong> =&gt;<br><br>6. Rejoice!<br><br><strong>No </strong>=&gt; Make it D.R.Y, then rejoice!</blockquote><p>Analyze time complexity any and all times you are trying to solve a problem. It’ll make you a better developer in the log run. Your teammates and users will love you for it.</p><p>Again, most problems you will face as programmer — whether algorithmic or programmatic — will have tens if not hundreds of ways of solving it. They may vary in how they solve the problem, but they all still solve that problem.</p><p>You could be making decisions between whether to use sets or graphs to store data. You could be deciding whether or not to use Angular, React, or Backbone for a team project. All of these solutions solve the same problem in a different way.</p><p>Given this, it’s hard to say there is a single “right” or “best” answer to these problems. But it is possible to say there are “better” or “worse” answers to a given problem.</p><p>Using one of our previous examples, it might be better to use React for a team project if half your team has experience with it, so it’ll take less time to get up and running.</p><p>The ability to describe a better solution usually springs from some semblance of time complexity analysis.</p><p>In short, if you’re going to solve a problem, solve it well. And use some Big-O to help you figure out how.</p><p>Here’s a final recap:</p><ul><li><strong>O(1) — </strong>Constant Time: it only takes a single step for the algorithm to accomplish the task.</li><li><strong>O(log n) — </strong>Logarithmic Time: The number of steps it takes to accomplish a task are decreased by some factor with each step.</li><li><strong>O(n) — </strong>Linear Time: The number of of steps required are directly related (1 to 1).</li><li><strong>O(n²) — </strong>Quadratic Time: The number of steps it takes to accomplish a task is square of n.</li><li><strong>O(C^n) — </strong>Exponential: The number of steps it takes to accomplish a task is a constant to the n power (pretty large number).</li></ul><p>And here are some helpful resources to learn more:</p><ul><li><a href="https://en.wikipedia.org/wiki/Time_complexity" rel="noopener">Wikipedia</a></li><li>The <a href="http://bigocheatsheet.com/" rel="noopener">Big O Cheat Sheet</a> is a great resource with common algorithmic time complexities and a graphical representation. Check it out!</li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
