---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this tutorial, we’ll learn how to find the number of vowel
author: "Milad E. Fahmy"
title: "How to Find the Number of Vowels in a String with JavaScript"
created: "2021-08-15T19:27:36+02:00"
modified: "2021-08-15T19:27:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-problem-solving tag-interview-questions ">
<header class="post-full-header">
<h1 class="post-full-title">How to Find the Number of Vowels in a String with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/Screen-Shot-2021-01-17-at-6.16.19-PM.png 300w,
/news/content/images/size/w600/2021/01/Screen-Shot-2021-01-17-at-6.16.19-PM.png 600w,
/news/content/images/size/w1000/2021/01/Screen-Shot-2021-01-17-at-6.16.19-PM.png 1000w,
/news/content/images/size/w2000/2021/01/Screen-Shot-2021-01-17-at-6.16.19-PM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/Screen-Shot-2021-01-17-at-6.16.19-PM.png" alt="How to Find the Number of Vowels in a String with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we’ll learn how to find the number of vowels in a string with JavaScript. This is a problem you might be asked in junior developer job interviews, and it’s also a <a href="https://www.codewars.com/kata/54ff3102c1bad923760001f3">CodeWars</a> problem. </p>
<p>Before we get started coding, let’s read over the problem description in full:</p>
<p><strong>Return the number (count) of vowels in a given string. We will consider a, e, i, o and u as vowels, but not y. The input string will only consist of lower case letters and/or spaces.</strong></p>
<h2 id="step-1-make-a-plan-to-solve-the-problem">Step 1: Make a plan to solve the problem</h2>
<p>For this problem, we’ll create a function, called <code>getCount</code>, which takes as input a string and returns as output the count of how many vowels are in that string.<br><br>Let’s go over some examples.</p>
<p>With the first example, we see that our function returns 5, which is how many times a vowel appears in the string <code>abracadabra</code>. With the string <code>abc</code>, only 1 is returned, as only one vowel (a) appears.</p>
<p>To solve this problem, we’ll create a <code>vowelsCount</code> variable that will keep track of how many vowels are in the string. </p>
<p>We’ll also create an array, vowels, that holds all of our vowels. We’ll go through each character in our string. If the character is a vowel, we’ll increase our <code>vowelsCount</code> variable.</p>
<p>Finally, we’ll return the <code>vowelsCount</code> variable.<br><br>Let’s get started!</p>
<h2 id="step-2-write-the-code-to-solve-the-problem">Step 2: Write the code to solve the problem</h2>
<p>First we write our function, <code>getCount</code>. Next we’ll create a variable, <code>vowelsCount</code>, and set it to <code>0</code>.</p>
<p><br>We’ll create our vowels array next. This allows us to have every vowel in one place, and we can use this array later.</p>
<p><br>Now we need to go through every character in our input string, <code>str</code>. We need to go through or look at every character in our string so that we can determine whether or not it is a vowel.</p>
<p>To do this, we can use the <code>for...of</code> statement that works on strings. You can read more on it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">here</a>.</p>
<p><br>Now inside our for loop, we have the ability to look at and go over each character in our string. <br><br>Next, we want to check whether or not each character is a vowel. </p>
<p>To do this, we can use the <code>includes</code> method. The <code>includes()</code> method determines whether an array includes a certain value among its entries. It returns true if so, and false if not. </p>
<p>Using <code>includes</code>, we’ll check if our vowels array contains the character we’re currently iterating over in our loop.</p>
<p>We’ve created our <code>if statement</code> to check whether the current character is a vowel. If the character is a vowel, then we want to increase our <code>vowelsCount</code> variable. To do this, we can use the increment operator in JavaScript:</p>
<p><br>At this point in our code, we’ve looked at each character in the string, determined whether it was a vowel or not, and increased the number we stored in <code>vowelsCount</code> if it was.</p>
<p>Lastly, all we need to do is have our function return our <code>vowelsCount</code> variable. We can do this by returning the variable outside of our loop.</p>
<p><br>There we have it.</p>
<h2 id="that-s-it-">That's it!</h2>
<p>We’ve now written a function that will take as input a string and return as output the number of times a vowel appeared in the string. </p>
<h3 id="if-you-enjoyed-this-post-join-my-coding-club-where-we-tackle-coding-challenges-together-every-sunday-if-you-have-feedback-or-questions-on-this-post-feel-free-to-tweet-me-madisonkanna-">If you enjoyed this post, join my <a href="https://madisonkanna.us14.list-manage.com/subscribe/post?u=323fd92759e9e0b8d4083d008&amp;id=033dfeb98f">coding club</a>, where we tackle coding challenges together every Sunday.<br><br>If you have feedback or questions on this post, feel free to Tweet me @madisonkanna.</h3>
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
