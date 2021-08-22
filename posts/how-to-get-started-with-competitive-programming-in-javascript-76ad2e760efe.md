---
card: "https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg"
tags: [JavaScript]
description: by Priyabrata Biswas
author: "Milad E. Fahmy"
title: "How to get started with Competitive Programming in JavaScript"
created: "2021-08-15T19:38:34+02:00"
modified: "2021-08-15T19:38:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-tech tag-software-development tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with Competitive Programming in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SPx_5yXieH6SA9dpkyosOw.jpeg" alt="How to get started with Competitive Programming in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Priyabrata Biswas</p>
<h1 id="how-to-get-started-with-competitive-programming-in-javascript">How to get started with Competitive Programming in JavaScript</h1>
<figcaption>let U = ? =&gt; ? ; U(M); /* M → <strong>‘mathbal</strong>l’ */ </figcaption>
</figure>
<p>If you’re not familiar with <a href="https://en.wikipedia.org/wiki/Competitive_programming" rel="noopener">competitive programming</a>, basically it is a mind sport with the aim of writing code to solve given problems. I was introduced to it in my freshman year by my seniors. As of this writing, I’m still not really great at it! Maybe it is due to the fact that I don’t like to code in C++, or maybe I am a lazy person who won’t take the time to actually learn it well enough. But, I like algorithms and data-structures as much as I like JavaScript!</p>
<p>So, the preposterous thought crossed my mind over and over again. ‘What if we start using JavaScript in the competitive arena?’ Turns out, this doesn’t seem like the uncharted territory that I thought it would be. Many platforms like <a href="https://www.hackerrank.com/" rel="noopener">HackerRank</a>, <a href="https://www.codechef.com/" rel="noopener">CodeChef</a>, and <a href="https://codeforces.com/" rel="noopener">Codeforces</a> support JavaScript.</p>
<p>I know C++ is a lot faster compared to JavaScript and can dynamically allocate memory. C and C++ are quite similar in terms of performance, but competitive programmers mostly use C++ because of its <a href="https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" rel="noopener">Standard Template Library</a> (or STL). It provides common programming data structures like list, stack, array along with container classes, algorithms, and iterators out of the box.</p>
<p>But, JavaScript offers something C++ lacks:</p>
<blockquote>Freedom!</blockquote>
<p>Being a scripting language, JavaScript is inherently slow. But still, it is the most popular language out there. According to 2018’s <a href="https://insights.stackoverflow.com/survey/2018/" rel="noopener">Stack Overflow Developer Survey</a>, 69.8% of respondents use JavaScript for their development purposes. But, at the same time, it doesn’t shine so well in the case of competitive programming. The reason is that it was simply not built for it!</p>
<p>Back in 1995, <a href="https://en.wikipedia.org/wiki/Brendan_Eich" rel="noopener">Brendan Eich</a> developed JavaScript only for adding interactivity to web pages like handling a mouse click.</p>
<p>Today, we can build servers, games, mobile applications, IoT applications and even machine learning in the browser is possible with JavaScript. So, why feel ashamed while using it in competitive programming?</p>
<blockquote>“Any application that can be written in JavaScript, will eventually be written in JavaScript.” — <a href="https://en.wikipedia.org/wiki/Jeff_Atwood" rel="noopener">Jeff Atwood</a></blockquote>
<p>Remember what I told you about STL and the toolkit it provides for competitive programming? I thought to myself why doesn’t <a href="https://www.ecma-international.org/memento/tc39.htm" rel="noopener">TC 39</a> come up with something similar for JavaScript!</p>
<figcaption>Eventually, I had an idea! ? </figcaption>
</figure>
<p>Have you heard of ‘Node Package Manager’ also known as ‘<strong>npm</strong>’?</p>
<p>Well, it’s the world’s <a href="https://www.npmjs.com/" rel="noopener">largest software registry</a> with over 874,285 packages (as of this writing) and is the default package manager for Node.js.</p>
<blockquote>The idea is to develop an npm package much like C++’s STL</blockquote>
<h3 id="introducing-mathball">Introducing Mathball</h3>
<p>Mathball is an npm package for competitive programming in JavaScript implementing optimized algorithms for faster execution. Okay, now I’m exaggerating! The truth is, it only supports 16 utility functions implementing <a href="https://discuss.codechef.com/questions/281/brute-force-approach" rel="noopener">brute-force approaches</a> so far. I put together this tiny helper library for assisting people in competitive programming.</p>
<figcaption>how’s the logo! ? </figcaption>
</figure>
<p>You can get the package quite easily if you have Node.js and npm installed on your machine by typing the following command in your terminal:</p><pre><code>npm install mathball</code></pre>
<p>You can access all the utilities via a <code>mathball </code>object, <code>M</code>, like so:</p>
<p>Again, just getting an individual function is as easy as this:</p>
<p>Oh, now you must be thinking —</p>
<blockquote>How am I supposed to use a third-party library inside a platform like HackerRank or CodeChef?</blockquote>
<p>The answer is simple, just <strong>bundle</strong> it! ?</p>
<p>Let me explain what I mean! Let’s say you are trying to solve this particular problem on HackerRank —</p>
<p><a href="https://www.hackerrank.com/challenges/simple-array-sum/problem" rel="noopener"><strong>Simple Array Sum | HackerRank</strong></a><br><a href="https://www.hackerrank.com/challenges/simple-array-sum/problem" rel="noopener"><em>Calculate the sum of integers in an array.</em>www.hackerrank.com</a></p>
<p>Don’t be overwhelmed by all those lines of code. If you’ve used HackerRank before then you already know that it’s just for handling I/O.</p>
<p>First, copy and paste the above contents in a file, <code>index.js</code>. Then, in the same directory, open up the terminal and type:</p><pre><code>npm install mathball</code></pre>
<p>Next, inside the <code>index.js</code> file, modify the following:</p>
<p>Lastly, in order to bundle everything into a single file, I’m using Webpack but you’re free to choose any CommonJS module bundler!</p>
<p>So, let’s create a <code>webpack.config.js</code> file in the same directory with the following code in it:</p>
<p>If you don’t already have Webpack installed, please install it like so:</p><pre><code>npm install -g webpack webpack-cli</code></pre>
<p>Finally, type the following:</p><pre><code>webpack --config ./webpack.config.js --mode=development</code></pre>
<p>Now, the above command will create a file named <code>bundle.js</code><strong> </strong>in the same directory. So, copy and paste its content on HackerRank and hit *<strong>Submit Code</strong>*. That’s it!</p>
<figcaption>Bazinga! ? </figcaption>
</figure>
<h3 id="epilogue">Epilogue</h3>
<p>It doesn’t make sense to go through all that nonsense just so you can compute the sum of an array…right? So I must confess that problems on competitive programming tend to be far more complicated than this.</p>
<blockquote>I believe competitive programming is more about figuring out ways to solve a problem than just solving them!</blockquote>
<p>Once you figure out what algorithm or data structure your problem needs, coding becomes quite easy if you have a library like Mathball at your disposal. Also, you don’t have to go through all those steps for bundling every time you code something. It’s basically a one-time setup process. Just code along, and bundle your files with the last command.</p>
<p><strong>Fun fact </strong>— you can use Mathball in your project too!</p>
<p>I will be constantly improving Mathball and I sincerely welcome your contribution. Together, we can make Mathball do so much more! Here’s the <a href="https://github.com/pbiswas101/Mathball" rel="noopener">link</a> for the repo.</p>
<p>The purpose of this article was to evangelize the importance of competitive programming in the JavaScript community. I think learning algorithms and data structures prepares us to care more about the efficiency and complexity of our codebase. It makes us look twice for any memory leaks, and helps us to become better developers, in general.</p>
<p>Here’s a list of resources that inspired me to embark on my journey of supporting JavaScript in competitive programming:</p>
<ol>
<li><a href="https://www.youtube.com/watch?v=2OUw6jRYSKA" rel="noopener">Pranay Dubey — JavaScript for Competitive Programming</a></li>
<li><a href="https://hackernoon.com/javascript-for-algorithms-competitive-programming-45cf723cd16f" rel="noopener">JavaScript for Algorithmic Competitive Programming</a></li>
</ol>
<p>Thank you for your time! ✌️</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
