---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Any concept that we don t fully understand can be scary at fi"
author: "Milad E. Fahmy"
title: "Recursion Might Seem Scary – But it Doesn t Have to Be"
created: "2021-08-16T10:03:50+02:00"
modified: "2021-08-16T10:03:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-recursion tag-software-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Recursion Might Seem Scary – But it Doesn't Have to Be</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/recursion-image.jpeg 300w,
/news/content/images/size/w600/2021/05/recursion-image.jpeg 600w,
/news/content/images/size/w1000/2021/05/recursion-image.jpeg 1000w,
/news/content/images/size/w2000/2021/05/recursion-image.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/recursion-image.jpeg" alt="Recursion Might Seem Scary – But it Doesn't Have to Be">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Any concept that we don't fully understand can be scary at first.</p><p>Recursion is a topic that programming students don't learn right away. But that doesn't mean it needs to be scary or cause anxiety.</p><p>In fact, recursion is a concept that we can define rather simply.</p><p>According to <a href="https://en.wikipedia.org/wiki/Recursion_(computer_science)">Wikipedia</a>:</p><blockquote>In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.</blockquote><p>And you can apply recursion in your code by creating a function that calls itself.</p><h2 id="any-function-with-a-loop-can-be-recursive-instead">Any function with a loop can be recursive instead</h2><p>Here is a function called <code>countToTen</code> that uses a while loop to log every number from one to ten:</p><pre><code class="language-js">const countToTen = (num = 1) =&gt; {
while (num &lt;= 10) {
console.log(num);
num++;
}
}
countToTen();
</code></pre><p>We can write the same function with recursion instead of a loop.</p><p>Notice that recursive functions have two parts:</p><ol><li>The function calls itself (also known as the recursive call)</li><li>At least one condition to exit the recursion (also known as the base case)</li></ol><pre><code class="language-js">const countToTen = (num = 1) =&gt; {
if (num &gt; 10) return; //base case
console.log(num);
num++;
countToTen(num); //recursive call
}
countToTen();
</code></pre><p>That's not to say we <strong>should</strong> <strong>always</strong> replace loops with recursion.</p><p>There are instances where using recursion is the best choice – and likewise, there are instances where it is not the best choice.</p><h2 id="why-use-recursion">Why Use Recursion</h2><p>Let's look at some reasons to use recursion. We'll see some examples below.</p><h3 id="fewer-lines-of-code">Fewer Lines of Code</h3><p>Applying recursion usually results in a solution with fewer lines of code than a solution that does not utilize recursion.</p><h3 id="more-elegant-code">More Elegant Code</h3><p>In addition to fewer lines of code, recursive solutions are typically more pleasing to look at. In other words, recursive solutions are usually considered to be elegant.</p><h3 id="increased-readability">Increased Readability</h3><p>Reasons 1 and 2 typically combine to create reason 3 which is the increased readability of your code. Remember, we do not write code just for ourselves. We write code for the developers that follow us and must understand our code.</p><h2 id="reasons-not-to-use-recursion">Reasons NOT to Use Recursion</h2><h3 id="performance-losses">Performance losses</h3><p>Repeating function calls is not as efficient or performant as applying a loop. We do not want to simply choose recursion because we can.</p><h3 id="debugging-issues">Debugging Issues</h3><p>The logic of recursion is not always easy to follow. Utilizing recursion may make your code more difficult to debug.</p><h3 id="is-the-readability-improved">Is the Readability Improved?</h3><p>Increased readability is not guaranteed through the use of recursion. In fact, this may by opinionated and/or situational. You should evaluate the readability, and if it's not improved recursion may not be the best answer.</p><h2 id="recursion-examples">Recursion Examples</h2><p>Recursion problems are interview favorites.</p><p>One such problem asks for a function that returns <code>x</code> numbers of the Fibonacci sequence.</p><p>The Fibonacci sequence adds the two previous numbers of the sequence to create the next number in the sequence. Here are the first ten numbers of the sequence:<br><code>[0,1,1,2,3,5,8,13,21,34]</code></p><p>We can write this function without recursion:</p><pre><code class="language-js">const fibonacci = (num = 2, array = [0, 1]) =&gt; {
while (num &gt; 2) {
const [nextToLast, last] = array.slice(-2);
array.push(nextToLast + last);
num -= 1;
}
return array;
}
console.log(fibonacci(10));
</code></pre><p>And here is a recursive version of the same function:</p><pre><code class="language-js">const fibonacci = (num = 2, array = [0, 1]) =&gt; {
if (num &lt; 2) return array.slice(0, array.length - 1);
const [nextToLast, last] = array.slice(-2);
return fibonacci(num - 1, [...array, nextToLast + last]);
}
console.log(fibonacci(10));
</code></pre><p>The recursive function does have fewer lines of code. But I am not sure if we can confidently say it is has increased elegance or readability.</p><p>Let's look at another problem where recursion has a greater impact.</p><p>Another interview favorite is asking for a function that returns the nth number in the Fibonacci sequence. Therefore, if the function receives <code>10</code> as a parameter, it should return <code>34</code>.</p><p>Without the use of recursion, a possible solution looks like this:</p><pre><code class="language-js">const fibonacciPos = (pos = 1) =&gt; {
if (pos &lt; 2) return pos;
const seq = [0, 1];
for (let i = 2; i &lt;= pos; i++) {
const [nextToLast, last] = seq.slice(-2);
seq.push(nextToLast + last);
}
return seq[pos];
}
console.log(fibonacciPos(10));
</code></pre><p>However, with recursion, the solution is much smaller and arguably more elegant:</p><pre><code class="language-js">const fibonacciPos = (pos = 1) =&gt; {
if (pos &lt; 2) return pos;
return fibonacciPos(pos - 1) + fibonacciPos(pos - 2);
}
console.log(fibonacciPos(10));
</code></pre><p>Wow! That made a huge difference.</p><p>Notice how the return line actually calls the function twice.</p><p>Do you understand the logic in these recursive functions? If not, spend some time experimenting with them to understand how they work. After you do, you will likely agree that the readability is improved as well.</p><p>To highlight how improved readability is opinionated, let's look at the same recursive function from above written in one line (the line may wrap in your browser, but it is one line of code):</p><pre><code class="language-js">const fibonacciPos= pos =&gt; pos &lt; 2 ? pos : fibonacciPos(pos - 1) + fibonacciPos(pos - 2);
console.log(fibonacciPos(10));
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
