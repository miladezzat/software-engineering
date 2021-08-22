---
card: "/images/default.jpg"
tags: [JavaScript]
description: Recursion is a technique used to solve computer problems by c
author: "Milad E. Fahmy"
title: "What is Recursion? A Recursive Function Explained with JavaScript Code Examples"
created: "2021-08-15T19:27:19+02:00"
modified: "2021-08-15T19:27:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-recursion ">
<header class="post-full-header">
<h1 class="post-full-title">What is Recursion? A Recursive Function Explained with JavaScript Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/recursion-1.png 300w,
/news/content/images/size/w600/2021/02/recursion-1.png 600w,
/news/content/images/size/w1000/2021/02/recursion-1.png 1000w,
/news/content/images/size/w2000/2021/02/recursion-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/recursion-1.png" alt="What is Recursion? A Recursive Function Explained with JavaScript Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recursion is a technique used to solve computer problems by creating a function that calls itself until your program achieves the desired result. </p>
<p>This tutorial will help you to learn about recursion and how it compares to the more common loop.</p>
<h2 id="what-is-recursion">What is recursion?</h2>
<p>Let's say you have a function that logs numbers 1 to 5. Here's how you write it using recursion:</p>
if(num &gt; 5){
return;
}
console.log(num);
log(num + 1);
}
log(1);</code></pre>
<figcaption>A recursive function example</figcaption>
</figure>
<p>When you run the code above, the <code>log</code> function will simply call itself as long as the value of the <code>num</code> variable is smaller than <code>5</code>. </p>
<p>A recursive function must have at least one condition where it will stop calling itself, or the function will call itself indefinitely until JavaScript throws an error.</p>
<p>The condition that stops a recursive function from calling itself is known as <strong>the base case</strong>. In the <code>log</code> function above, the base case is when <code>num</code> is larger than <code>5</code>.</p>
<h2 id="why-don-t-you-just-use-loop">Why don't you just use loop?</h2>
<p>Any problems that you can solve using a recursive function will always have an alternative looping solution. The example above can be replaced with the following code:</p>
console.log(i);
}</code></pre>
<figcaption>A for loop alternative to the recursive function</figcaption>
</figure>
<p>Modern programming languages like JavaScript already have the <code>for</code> and <code>while</code> statements as alternatives to recursive functions. But some languages like Clojure do not have any looping statements, so you need to use recursion to repeatedly execute a piece of code.</p>
<p>Also, a <code>for</code> loop requires you to know how many times you will repeat the code execution. But a recursive function and a <code>while</code> loop can be used to execute a piece of code without knowing how many times you need to repeat it. You just need to know the condition that stops the execution.</p>
<p>For example, suppose you have a task as follows:</p>
<ul>
<li>Randomly select a number between 1 to 10 until you get the number 5. </li>
<li>Log how many times you need to execute the code until the random method returns 5.</li>
</ul>
<p>Here's how you do it with a recursive function:</p>
if(result === 5){
console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);
return;
}
result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
count++;
randomUntilFive(result, count);
}
randomUntilFive();</code></pre>
<figcaption>Recursively random a number until it returns 5</figcaption>
</figure>
<p>You can't replace the code above with the <code>for</code> loop, but you can replace it with a <code>while</code> loop:</p>
let count = 0;
while (result !== 5) {
result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
count++;
}
console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);</code></pre>
<figcaption>Replacing recursive function with the while loop</figcaption>
</figure>
<p>Aside from coding interview questions where you are required to solve the problem using recursion, you can always find an alternative solution that uses either the <code>for</code> or <code>while</code> loop statement.</p>
<h2 id="how-to-read-a-recursive-function">How to read a recursive function</h2>
<p>A recursive function is not intuitive or easy to understand at first glance. The following steps will help you to read and understand a recursive function more quickly:</p>
<ul>
<li>Always identify <strong>the base case </strong>of the function before anything else.</li>
<li>Pass arguments to the function that will immediately reach the base case.</li>
<li>Identify the arguments that will at least execute the recursive function call once.</li>
</ul>
<p>Let's try these steps using the <code>randomUntilFive()</code> example above. You can identify the base case for this function inside the <code>if</code> statement above:</p>
if(result === 5){
// base case is triggered
}
// recursively call the function
}
randomUntilFive();</code></pre>
<figcaption>Identifying the base case of the recursive function</figcaption>
</figure>
<p>This means you can reach the base case by passing the number <code>5</code> into the <code>result</code> parameter as follows:</p>
if(result === 5){
console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);
return;
}
}
randomUntilFive(5);</code></pre>
<figcaption>Getting to the base case of the recursive function</figcaption>
</figure>
<p>While the <code>count</code> parameter shouldn't be zero, passing the number <code>5</code> as an argument to the function call above fulfills the requirement of step two.</p>
<p>Finally, you need to find an argument that will at least execute the recursive function call once. In the case above, you can pass any number other than <code>5</code> or nothing at all:</p><pre><code class="language-js">function randomUntilFive(result = 0, count = 0){
if(result === 5){
console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);
return;
}
result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
count++;
randomUntilFive(result, count);
}
randomUntilFive(4);
// any number other than five
// will execute the recursive call</code></pre>
<p>And you're done. Now you understand that the function <code>randomUntilFive()</code> will recursively call itself until the value of <code>result</code> equals five. </p>
<h2 id="how-to-write-a-recursive-function">How to write a recursive function</h2>
<p>Writing a recursive function is almost the same as reading one:</p>
<ul>
<li>Create a regular function with a base case that can be reached with its parameters</li>
<li>Pass arguments into the function that immediately trigger the base case</li>
<li>Pass the next arguments that trigger the recursive call just once.</li>
</ul>
<p>Let's say you are writing a function to calculate <a href="https://en.wikipedia.org/wiki/Factorial">factorials</a>. Here's the factorial of five:</p>
<p><strong>5*4*3*2*1 = 120</strong></p>
<p>First, the base case for this function is one, so let's create a <code>factorial</code> function that returns one:</p>
if(num === 1){
return num;
}
}
console.log(factorial(1));</code></pre>
<figcaption>The base case for factorial</figcaption>
</figure>
<p>Now on to step three. We need to get a recursive call in the function and call it at least once. Since the factorial calculation decreases the number by one on each multiplication, you can simulate it by passing <code>num-1</code> into the recursive call:</p>
if(num === 1){
return num;
}
return num * factorial(num-1)
}
console.log(factorial(2));</code></pre>
<figcaption>The recursive factorial completed</figcaption>
</figure>
<p>And now you're done. You can test the function by passing five to the call:</p>
<figcaption>Testing the factorial function</figcaption>
</figure>
<h2 id="conclusion">Conclusion</h2>
<p>You've just learned what a recursive function is and how it compares to the common <code>for</code> and <code>while</code> loop statements. A recursive function must always have at least one base case to make it stop calling itself or it will cause an error. </p>
<p>When reading a recursive function, you need to simulate a situation where the base case is immediately executed without executing the recursive call. </p>
<p>Once you have the base case covered, go back one step and try to execute the recursive call at least once. This way, you brain will walk through the recursive code and understand intuitively what it does.</p>
<p>The same goes for writing a recursive function. Always create the base case first and then write an argument that runs the recursive call at least once. The rest will be easier from there.</p>
<h2 id="thanks-for-reading-this-tutorial">Thanks for reading this tutorial</h2>
<p>If you want to learn more, I wrote about <a href="https://sebhastian.com/fibonacci-recursion-javascript/">how to find Fibonacci sequence number using recursion</a>, which is one of the most common recursion problems.</p>
<p>I also have a <a href="https://sebhastian.com/newsletter/">free weekly newsletter</a> about web development tutorials (mostly JavaScript related).</p>
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
