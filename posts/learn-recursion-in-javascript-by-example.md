---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this article I will touch on a few important ideas to help
author: "Milad E. Fahmy"
title: "Recursion in JavaScript Explained Using a freeCodeCamp Challenge"
created: "2021-08-15T19:29:24+02:00"
modified: "2021-08-15T19:29:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-recursion tag-freecodecamp ">
<header class="post-full-header">
<h1 class="post-full-title">Recursion in JavaScript Explained Using a freeCodeCamp Challenge</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/Marketing-Business-Corporate-Start-up-Facebook-Cover--1--1.png 300w,
/news/content/images/size/w600/2020/06/Marketing-Business-Corporate-Start-up-Facebook-Cover--1--1.png 600w,
/news/content/images/size/w1000/2020/06/Marketing-Business-Corporate-Start-up-Facebook-Cover--1--1.png 1000w,
/news/content/images/size/w2000/2020/06/Marketing-Business-Corporate-Start-up-Facebook-Cover--1--1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/Marketing-Business-Corporate-Start-up-Facebook-Cover--1--1.png" alt="Recursion in JavaScript Explained Using a freeCodeCamp Challenge">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article I will touch on a few important ideas to help you understand Recursion in JavaScript. I’m not going to give a full definition here, but you can take a look at what Wikipedia <a href="https://en.wikipedia.org/wiki/Recursion_%28computer_science%29" rel="noopener">has to say</a>. </p>
<p>Let’s agree for the purpose of this article that we are trying to solve a problem by using a function that will then call itself.</p>
<h2 id="the-challenge">The Challenge</h2>
<p>At the end of the Javascript Algorithms and Data Structures — Basic Javascript section <a href="https://www.freecodecamp.org/learn/">on freeCodeCamp</a>, you run into an interesting problem: ‘Use Recursion to Create a Range of Numbers’, where the instructions are as follows:</p>
<blockquote>We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.</blockquote>
<p>Sounds simple enough – if you were to run rangeOfNumbers(1, 5) it should return [1, 2, 3, 4, 5].</p>
<p>If you’re like me, you can sort of intuit the answer based on the previous example in this section. But it might still be a bit unclear how this all works.</p>
<p><strong>Spoiler alert:</strong> you'll find an answer immediately below. But this isn’t much of a spoiler since the answer is easy enough to find on the internet.</p>
<h2 id="my-solution">My Solution</h2>
<p>It’s very probable that you can read through the code and understand that when it gets down to its <strong>base case</strong> it will return whatever the startNum is into the array. Then it will keep pushing the other values onto that array until it’s done with all of its recursive calls.</p><pre><code class="language-javascript">function rangeOfNumbers(startNum, endNum) {
if (startNum === endNum) {
return [startNum];
} else {
const numbers = rangeOfNumbers(startNum, endNum - 1);
numbers.push(endNum);
return numbers;
}
}</code></pre>
<p>What I found to be tricky was understanding exactly<strong> how</strong> the call stack was working and how my values were being returned.</p>
<p>So let's break down how this function will return its final value.</p>
<h3 id="the-call-stack">The Call Stack</h3>
<p>The first thing to understand is how the <strong>call stack</strong> works. I will refer you to Mozilla Developer Network's <a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" rel="noopener">explanation</a>:</p>
<blockquote>When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.<br><br>Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.<br><br>When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.</blockquote>
<p>Using this explanation, let’s run the code above using <em>rangeOfNumbers(1,5).</em></p>
<p>First the rangeOfNumbers — Execution Context is created and executed with the following values:</p>
<figcaption>Screenshot from <a href="http://www.pythontutor.com/javascript.html" data-href="http://www.pythontutor.com/javascript.html" class="markup--anchor markup--figure-anchor" rel="noopener" target="_blank">http://www.pythontutor.com/javascript.html</a></figcaption>
</figure>
<p>So we have added an unresolved <em>rangeOfNumbers(1,5)</em> function call to our stack. Then we move on to create the execution for <em>rangeOfNumbers(1,4)</em>, and so on and so forth, adding each one of these calls to our stack until we will finally <strong>resolve</strong> a function call. Then the interpreter will take that function off the stack and move on to the next one.</p>
<h3 id="examining-our-call-stack">Examining Our Call Stack</h3>
<p>So our stack will end up looking like this:</p><pre><code>rangeOfNumbers(1,1)
rangeOfNumbers(1,2)
rangeOfNumbers(1,3)
rangeOfNumbers(1,4)
rangeOfNumbers(1,5)</code></pre>
<p><em>rangeOfNumbers(1,1)</em> will be the last one in our stack because, finally, this call will <strong>RETURN</strong> a value allowing us to move on to our next function in the stack.</p>
<p><em>rangeOfNumbers(1,1)</em> return value is [1], as we had assumed it would be since it is our base case. Now we pop <em>rangeOfNumbers(1,1)</em> off our stack, and go back to where <em>rangeOfNumbers(1,2)</em> left off…</p><pre><code>var numbers = rangeOfNumbers(1,2) // returns an array of [1]</code></pre>
<p>Numbers is no longer <em>undefined</em> and the next step is to push the <em>endNum</em>, which is 2, into the numbers array. This gives us [1,2] in numbers, and now we return the value.</p><pre><code>numbers.push(endNum) //numbers now holds an array of [1,2]
return numbers; // ends our function and returns [1,2]</code></pre>
<h3 id="breaking-down-the-tricky-part">Breaking Down The Tricky Part</h3>
<p>So we pop off <em>rangeOfNumbers(1,2)</em> which had a return value of [1,2]. Let’s resume with the next call in our stack <em>rangeOfNumbers(1,3). </em>Numbers is currently [1,2] because that is the return value of <em>rangeOfNumbers(1,2). </em>This is what we had plugged in when we called <em>rangeOfNumbers(1,3)</em> because, again, the 3 is subtracted by 1, that is <em>rangeOfNumbers(1,2)</em>, which as we said returns [1,2]. </p>
<p>Got it? Great! If you don’t get it, reread this paragraph, because this is the trickiest part to understand.</p>
<p>If you’re up to speed let’s continue. If that part above clicked the rest should feel pretty easy.</p>
<p>Back to <em>rangeOfNumbers(1,3)</em>: the numbers array is currently [1,2], so we push the <em>endNum</em> which is 3. Now we have [1,2,3] and we return this value again. We remove <em>rangeOfNumbers(1,3)</em> from our stack which returned the value [1,2,3]. </p>
<p>How did we get rangeOfNumbers(1,3)? That’s right, from when we called <em>rangeOfNumbers(1,4)</em> and endNumb -1, that is → 3, and we know that <em>rangeOfNumbers(1,3)</em> gives us the return value of [1,2,3] which is exactly what we have in our array. </p>
<p>Now we push the <em>endNum (also known as 4) </em>onto the numbers array, giving us [1,2,3,4] and we return this value. Let’s again remove this function call from the stack since it gave us what we wanted.</p>
<h3 id="bringing-it-all-together">Bringing it all together </h3>
<p>Now for the call that started it all: <em>rangeOfNumbers(1,5)</em>. The first step we do is determine what value we have in numbers. When put in <em>rangeOfNumbers(1,4)</em> we get, as we said before, [1,2,3,4]. So we can now push our <em>endNum</em> 5 into the array and get [1,2,3,4,5] which we will return, and our stack is now empty with our last call.</p>
<p>So let’s quickly review which returned what value and in what order.</p><pre><code>rangeOfNumbers(1,1) → returns [1]
rangeOfNumbers(1,2) → returns [1,2]
rangeOfNumbers(1,3) → returns [1,2,3]
rangeOfNumbers(1,4) → returns [1,2,3,4]
rangeOfNumbers(1,5) → returns [1,2,3,4,5]</code></pre>
<p>If this is still confusing, firstly I understand – it’s a confusing topic. Next I would recommend typing in your code into this great tool: <a href="http://www.pythontutor.com/javascript.html" rel="noopener">http://www.pythontutor.com/javascript.html</a></p>
<p>This is all able to work because we started with a small base case and we essentially built our way back up. Each time our return value is a bit bigger than it was on its previous call, much like if you were to perform this same operation with a for loop.</p>
<p>Have any questions? Feel free to ask me on Twitter: <a href="https://twitter.com/NehemiahKiv">@NehemiahK</a>iv</p>
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
