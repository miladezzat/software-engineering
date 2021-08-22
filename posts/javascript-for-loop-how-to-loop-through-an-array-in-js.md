---
card: "/images/default.jpg"
tags: [JavaScript]
description: "There are various types of loops in JavaScript, and all of them essentially do the same thing: they repeat an action again and again."
author: "Milad E. Fahmy"
title: "JavaScript For Loop – How to Loop Through an Array in JS"
created: "2021-08-15T19:15:56+02:00"
modified: "2021-08-15T19:15:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript For Loop – How to Loop Through an Array in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/08/srinivas-jd-PtpB2jiakOE-unsplash.jpg 300w,
/news/content/images/size/w600/2021/08/srinivas-jd-PtpB2jiakOE-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/08/srinivas-jd-PtpB2jiakOE-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/08/srinivas-jd-PtpB2jiakOE-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/srinivas-jd-PtpB2jiakOE-unsplash.jpg" alt="JavaScript For Loop – How to Loop Through an Array in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are various types of loops in JavaScript, and all of them essentially do the same thing: they repeat an action again and again.</p>
<p>Loops come in handy if you want to repeat the same block of code for a certain number of times. Basically, they are a fast and effective way to repeat something.</p>
<p>This article focuses on the <code>for</code> loop in the JavaScript programming language and goes over its basic syntax.</p>
<p>In addition, I'll explain how to loop through an array using a <code>for</code> loop, which is a fundamental programming concept.</p>
<h2 id="whatisaforloopabasicsyntaxbreakdown">What is a for loop? A basic syntax breakdown</h2>
<p>A <code>for</code> loop repeats an action while a specific condition is <code>true</code>. It stops repeating the action when the condition finally evaluates to <code>false</code>.</p>
<p>A <code>for</code> loop in JavaScript looks very similar to a <code>for</code> loop in C and Java.</p>
<p>There are many different types of <code>for</code> loops in JavaScript, but the most basic ones look like this:</p>
<pre><code>for( initialization of expression; condition; action for initialized expression ) {
instruction statement to be executed;
}
</code></pre>
<p>This type of loop starts with the <code>for</code> keyword, followed by a set of parentheses. Inside them, there are three <em>optional</em> expression statements separated by a semicolon,<code>;</code>. Lastly, there is a set of curly braces, <code>{}</code>, that enclose the code block statement to be executed.</p>
<p>Here's an example:</p>
<pre><code class="language-Javascript">for (let i = 0; i &lt; 10; i++) {
console.log('Counting numbers');
// runs and prints "Counting numbers" 10 times
// values of i range from 0 to 9
}
</code></pre>
<p>In more detail, when a <code>for</code> loop is executed:</p>
<ul>
<li>If there is any initial expression, it is run first and executed only one time before any code in the block is run and before the loop starts. In this step there is an initialization of one or more counters and declaration of one or more variables used in the loop, like <code>let i =0</code>. If there is more than one variable, they are separated by commas.</li>
<li>Next is the definition of the condition expression that has to be met in order for the loop to run, <code>i &lt; 10</code>. As mentioned earlier, the instruction statements in the code block will run only when this condition evaluates to <code>true</code>. If the value is <code>false</code> the loop stops running. If there is no condition it is always <code>true</code> which creates an <em>infinite loop</em>.</li>
<li>Then, the instruction statement inside the block with the curly braces, <code>{..}</code>, is executed. There can be more than one, on multiple lines.</li>
<li>After each time the code block has been executed, there can be an action for the initialized expression that takes place at the end, like an increment statement (<code> i++</code>) that updates the initial expression.</li>
<li>After that, the condition is checked again and if it evaluates to true the process is repeated.</li>
</ul>
<h2 id="whatisanarray">What is an array?</h2>
<p>An array is a data structure.</p>
<p>It is an ordered collection of multiple items, called elements, under the same name stored together in a list. This then allows them to be easily sorted or searched through.</p>
<p>Arrays in JavaScript can contain elements with values of different data types. An array can contain numbers, strings, another array, boolean values, and more – at the same time.</p>
<p>Indexing always starts at <code>0</code>. This means that the first item in an array is referenced with a zero index, the second item has a one index, and the last item is the <code>array length - 1</code>.</p>
<p>The easiest and most preferable way to create an array is with <em>array literal notation</em>, which you can do with square brackets with a comma separated list of elements, like the below array of strings:</p>
<pre><code class="language-Javascript">let programmingLanguages = ["JavaScript","Java","Python","Ruby"];
</code></pre>
<p>To access the first item we use the index number:</p>
<pre><code class="language-JavaScript">console.log(programmingLanguages[0]);
// prints JavaScript
</code></pre>
<h2 id="howtoiterateoveranarraywithaforloop">How to Iterate Over an Array with a for loop</h2>
<p>Each time the <code>for</code> loop runs, it has a different value – and this is the case with arrays.</p>
<p>A for loop examines and iterates over every element the array contains in a fast, effective, and more controllable way.</p>
<p>A basic example of looping through an array is:</p>
<pre><code class="language-JavaScript">
const  myNumbersArray = [ 1,2,3,4,5];
for(let i = 0; i &lt; myNumbersArray.length; i++) {
console.log(myNumbersArray[i]);
}
</code></pre>
<p>Output:</p>
<pre><code>1
2
3
4
5
</code></pre>
<p>This is much more effective than printing each value individually:</p>
<pre><code class="language-javascript">console.log(myNumbersArray[0]);
console.log(myNumbersArray[1]);
console.log(myNumbersArray[2]);
console.log(myNumbersArray[3]);
console.log(myNumbersArray[4]);
</code></pre>
<p>Let's break it down:</p>
<p>The iterator variable <code>i</code> is initialized to 0. <code>i</code> in this case refers to accessing the index of the array. This means that the loop will access the first array value when it runs for the first time.</p>
<p>The condition<code>i &lt; myNumbersArray.length</code> tells the loop when to stop, and the increment statement <code>i++</code> tells how much to increment the iterator variable for each loop.</p>
<p>In other words, the loop starts at <code>0 index</code>, checks the length of the array, prints out the value to the screen, and then increases the variable by 1. The loop prints out the contents of the array one at a time and when it reaches its length, it stops.</p>
<h2 id="conclusion">Conclusion</h2>
<p>This article covered the basics on how to get started with <code>for</code> loops in JavaScript. We learned how to loop through arrays using that method which is one of the most common ones you'll use when you're starting to learn the language.</p>
<p>If you want to learn about other JavaScript array methods, you can <a href="/news/complete-introduction-to-the-most-useful-javascript-array-methods/">read all about them here</a>.</p>
<p>Thanks for reading and happy coding!</p>
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
