---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this tutorial, we'll go over how to solve the CodeWars inv
author: "Milad E. Fahmy"
title: "How to Find the Additive Inverse of Each Number in JavaScript [CodeWars Challenge Solved]"
created: "2021-08-15T19:27:37+02:00"
modified: "2021-08-15T19:27:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-math tag-interview-questions tag-coding-challenge ">
<header class="post-full-header">
<h1 class="post-full-title">How to Find the Additive Inverse of Each Number in JavaScript [CodeWars Challenge Solved]</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/volkan-olmez-aG-pvyMsbis-unsplash.jpg 300w,
/news/content/images/size/w600/2021/01/volkan-olmez-aG-pvyMsbis-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/01/volkan-olmez-aG-pvyMsbis-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/01/volkan-olmez-aG-pvyMsbis-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/volkan-olmez-aG-pvyMsbis-unsplash.jpg" alt="How to Find the Additive Inverse of Each Number in JavaScript [CodeWars Challenge Solved]">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we'll go over how to solve the CodeWars <a href="https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript">invert values </a>problem in JavaScript. </p>
<p>Instead of just diving into the code, we'll first read through the problem and make sure we understand it. Next we'll write pseudocode that we'll use as our guide to solve the problem. Lastly, we'll write the code itself. </p>
<p>Let's get started!</p>
<h2 id="first-read-through-the-problem">First, Read Through the Problem</h2>
<p>Here's the problem description:</p>
<p><strong>Given a set of numbers, return the additive inverse of each. Each positive becomes negative, and the negatives become positives.</strong></p>
<p><strong>You can assume that all values are integers. Do not mutate the input array/list.</strong></p>
<p>To solve this problem, first we need to make sure we understand it. Let's go over some questions we can ask ourselves to help us understand this problem.</p>
<h2 id="what-are-the-inputs">What are the inputs?</h2>
<p>What are the possible inputs to this problem? What will this function receive?</p>
<p>The problem description says, '<em>given a set of numbers.</em>' This tells us that our inputs are a set of numbers. </p>
<p>The problem also tells us to assume that all of these numbers will be integers. </p>
<p>Lastly, from the examples the problem gives, we can see that the set of numbers will be inside of an array:</p>
<p>Gathering this information, we can say that our input will be an array of integers.</p>
<h2 id="what-are-the-outputs">What are the outputs?</h2>
<p>Next we can ask ourselves, what are the outputs? &nbsp;What will this function return?</p>
<p>We can see from the problem's example that our output is an array with each number changed to its additive inverse. &nbsp;</p>
<p>Now we know the inputs and output. Next we'll go over a few examples of the problem.</p>
<h2 id="what-are-some-examples-of-the-inputs-and-outputs">What are some examples of the inputs and outputs?</h2>
<p>We already have examples of the inputs and outputs from the problem above, but sometimes it can be helpful to write out a few on your own to get a better grasp of what the problem is asking you to do. Here's one example output and input:</p><pre><code class="language-javascript">//input
[2, 3, -4]
//ouput
[-2, -3, 4]</code></pre>
<p>Now we know our inputs and outputs, and we have some examples of them.</p>
<p>Now we're ready to move on to writing our pseudocode, the final step before we code out our solution. pseudocode is a plain language description of the steps in an algorithm. Pseudocode will help us create a plan for how we’ll solve this challenge. </p>
<p>To write our pseudocode, let's first break the problem down step by step.</p>
<h2 id="how-to-break-the-problem-down">How to Break the Problem Down</h2>
<p>We need to be able to look at and do something to each number in the input array. We also want to return a new array with each number changed. </p>
<p>To do this, we can use the <code>map</code> method in JavaScript, which returns a new array populated with the results of calling a provided function on every element in the calling array.</p>
<p> We'll write this out in pseudocode as our step one: </p><pre><code class="language-javascript">//step one: go through each number in the array using map method</code></pre>
<p>For each number in the array, we want to change it to its additive inverse. We need to understand what this means, so we'll clarify the definition of an additive inverse:</p>
<p>In mathematics, the <strong>additive inverse</strong> of a number a is the number that, when added to a, yields zero. Here are a few examples:</p>
<p>The additive inverse of −10 is +10, because −10 + 10 = 0</p>
<p>The additive inverse of −2 is +2, because −2 + 2 = 0</p>
<p>To get the additive inverse of a number, we can multiply it by -1. We can test this with some examples:</p>
<p><code>10 * -1 = -10</code></p>
<p><code>-2 * -1 = 2</code></p>
<p>We now know that if we multiply each number by -1, we'll get that number's additive inverse. We can add this to our pseudocode:</p><pre><code>/*
step one: go through each number in the array using the map method
step two: multiply each number by -1
*/
</code></pre>
<p>Lastly, we need to return our new array. </p><pre><code>/*
step one: go through each number in the array using the map method
step two: multiply each number by -1
step three: return new array
*/
</code></pre>
<h2 id="how-to-code-the-solution">How to Code the Solution</h2>
<p>Now that we've written our pseudocode, we can code our solution using it as our guide.</p><pre><code>function invert(array) {
return array.map(num =&gt;   {
return num * -1
})
}</code></pre>
<p>When we test our solution on CodeWars, it works! We create our function, <code>invert</code>, that accepts an array of numbers. We map over our array, and for each number in it, we multiply it by -1. Then we return our new array.</p>
<p>We can see that it passes all tests. If we'd like to make our solution look a bit neater, we can do an implicit return and remove the inner curly brackets and inner <code>return</code> keyword. </p><pre><code>function invert(array) {
return array.map(num =&gt; num * -1)
}</code></pre>
<p>That's it! Now we've completed our invert values problem. We made sure we understood the problem first, wrote out our steps for completing the problem in pseudocode, and then coded the solution.</p>
<p>To check out the other solutions to this problem, you can see them <a href="https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript">here.</a> </p>
<h3 id="thank-you-for-reading-"><strong>Thank you for reading!</strong></h3>
<p>If you enjoyed this post, sign up for<a href="https://madisonkanna.us14.list-manage.com/subscribe/post?u=323fd92759e9e0b8d4083d008&amp;id=033dfeb98f"> my email list</a> where I send out my latest articles and announce meetings for my coding book club.</p>
<p>If you have feedback or questions on this post, feel free to Tweet me @<a href="https://twitter.com/Madisonkanna">madisonkanna.</a></p>
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
