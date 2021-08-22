---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg"
tags: [JavaScript]
description: If you're like me then you probably didn't understood recursi
author: "Milad E. Fahmy"
title: "How to Understand Recursion in JavaScript"
created: "2021-08-15T19:28:32+02:00"
modified: "2021-08-15T19:28:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-beginner tag-recursion tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to Understand Recursion in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c98be740569d1a4ca1bcc.jpg" alt="How to Understand Recursion in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>"To understand recursion, one must first understand recursion" - Unknown</blockquote>
<p>If you're like me then you probably didn't understood recursion the first time you read about it. </p>
<p>For me, it was because</p>
<ol>
<li>recursion is a hard concept in itself, and </li>
<li>some of the tutorials and articles I read weren't super clear. </li>
</ol>
<p>For some reason, most articles that explained recursion used the example of factorial numbers and the Fibonacci sequence. That meant I had to understand how Fibonacci numbers worked then connect that to recursion. </p>
<p>But we are taking a different route in this article.</p>
<h2 id="what-is-recursion">What Is Recursion?</h2>
<p>In the most basic of terms, recursion is when a function keeps calling itself until it doesn't have to anymore. </p>
<p>What? Yeah, the function keeps calling itself but with a smaller input every single time.</p>
<p>Think of recursion as a circuit race. It's like running the same track over and over again but the laps keep getting smaller every time. Eventually, you're going to run the last, smallest lap and the race will be over.</p>
<p>Same with recursion: the function keeps calling itself with smaller input and eventually it stops. </p>
<p>But, the function doesn't decide for itself when to stop. We tell it when to stop. We give the function a condition known as a <strong>base case</strong>. </p>
<p>The base case is the condition that tells the function when to stop calling itself. It like telling the function what the last lap in the race will be so it stops running after that lap.</p>
<h2 id="examples-of-recursion">Examples of Recursion</h2>
<p>Alright that's recursion. Let's look at some examples to understand how recursion works.</p>
<p>Remember the first time you learned about loops? The first example you probably did was a countdown program. Let's do that.</p>
<p>First, let's understand what we want our program to do. Count down from a given number to the smallest number, subtracting 1 every time. </p>
<p>Given the number 5, we expect the output to be something like:</p><pre><code class="language-javascript">// 5
// 4
// 3
// 2
// 1
</code></pre>
<p>Alright, how can we code this program with recursion?</p><pre><code class="language-javascript">let countDown = number =&gt; {
//base case
if (number === 0) {
return;
}
console.log(number);
return countDown(number - 1);
};
console.log(countDown(5)) // 5, 4, 3, 2, 1
</code></pre>
<p>So what exactly is going on here?</p>
<p>If you noticed, the first thing we did was to define the base case. Why? Because the function first of all needs to know when it's going to stop calling itself. </p>
<p>You'd never run a race without first knowing how long the race is, would you?</p>
<p>If you don't tell the function when to stop, then something called stackoverflow is going to happen. The stack is going to get filled with functions that are being called but not returning or being taken off the stack.</p>
<p>The recursive bit of it actually happens on line 7. There we tell the function to keep returning itself but reducing the input by one every time.</p>
<p>So, effectively, this is what is going on:</p><pre><code class="language-javascript">// The current input is 5
// Is 5 equal to 0 ?
// No, Ok so lets log 5 to the console.
// Its calls Itself again with number - 1 OR 5 - 1;
// The current input is 4
// Is 4 equal to 0 ?
// No, Ok so lets log 4 to the console
// Repeats until input is 0 so then function stops calling itself.
</code></pre>
<p>Alright, that made sense. Let's try another example.</p>
<p>You know how we can tell that a number is even by using the remainder (%) operator? So if any number % 2 == 0 then that number is even or if any number % 3 == 0 then that number is odd. </p>
<p>Well, it turns out there's another method. </p>
<p>If we continuously subtract two from a number until the smallest number is either 0 or 1 then we can tell whether the number is even or odd.</p>
<p>Let's try that with recursion. So, given then number 6 our program should return <strong>'Even'</strong> because 6-2-2-2 = 0. Given 7, our program should return <strong>'odd'</strong> because 7-2-2-2 = 1. </p>
<p>Let's see it in code.</p><pre><code class="language-javascript">let oddOrEven = (number) =&gt; {
if (number === 0) {
return 'Even';
} else if (number === 1) {
return 'Odd';
} else {
return oddOrEven(number - 2);
}
};
console.log(oddOrEven(20)) // Even
console.log(oddOrEven(75)) // Odd
console.log(oddOrEven(98)) // Even
console.log(oddOrEven(113)) // Odd
</code></pre>
<p>Again, the first step was to tell the function when to stop calling it self. Then we told it what to do when it calls itself. </p>
<p>Recursion is basically divide and conquer. We keep dividing the problem making it smaller every time.</p>
<h2 id="recursion-vs-loops">Recursion vs Loops</h2>
<p>When it comes to speed, a loop runs way faster than a recursive function. It's also easier to write a loop than a recursive function. And when it comes to readability, it's easier to know what's going on with a loop than a recursive function. </p>
<p>But, recursive functions are very elegant. </p>
<p>So what is the best choice? Efficiency or speed? </p>
<p>Here's a quote from the book eloquent JavaScript.</p>
<blockquote>Worrying about efficiency can be a distraction. It’s yet another factor that<br>complicates program design, and when you’re doing something that’s already<br>difficult, that extra thing to worry about can be paralyzing.<br>Therefore, always start by writing something that’s correct and easy to understand.<br>If you’re worried that it’s too slow—which it usually isn’t since<br>most code simply isn’t executed often enough to take any significant amount<br>of time—you can measure afterward and improve it if necessary.</blockquote>
<p>At this point you might be wondering why in the world you would ever choose to write a recursive function over a loop. I mean loops are way easier right?</p>
<p>Well, that is true – but there are some problems which are easier to solve with recursion. If you would like to explore one such problem, then considering reading <a href="https://eloquentjavascript.net/03_functions.html">chapter 3</a> of Eloquent JavaScript.</p>
<p>Now that you have discovered a new super power, let's put it to some use. </p>
<p>Carry out the following exercises using recursion. If you feel you can take on more, then you can solve the famous factorial and Fibonacci sequence problems.</p>
<h2 id="exercises">Exercises</h2>
<p>If you would like to further challenge yourself, then consider solving these recursive problems.</p>
<ol>
<li>Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".</li>
<li>Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string. <br>Given the string "JavaScript" and a character "a", your program should return 2.<br><br><strong>Hint</strong>: Try to figure out when you want the function to stop calling itself and how to return a smaller version of the problem every time the function calls itself.</li>
</ol>
<p>That's all for this article. I hope it has helped you to further understand recursion.</p>
<p><em> If you liked this article, you can connect with me on <a href="https://twitter.com/joeepm">Twitter</a>.</em></p>
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
