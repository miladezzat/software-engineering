---
card: "/images/default.jpg"
tags: [JavaScript]
description: This article is a beginner's introduction to JavaScript array
author: "Milad E. Fahmy"
title: "What in the world is a JavaScript array?"
created: "2021-08-15T19:32:40+02:00"
modified: "2021-08-15T19:32:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">What in the world is a JavaScript array?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/kimberly-farmer-lUaaKCUANVI-unsplash.jpg 300w,
/news/content/images/size/w600/2019/09/kimberly-farmer-lUaaKCUANVI-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/09/kimberly-farmer-lUaaKCUANVI-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/09/kimberly-farmer-lUaaKCUANVI-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/kimberly-farmer-lUaaKCUANVI-unsplash.jpg" alt="What in the world is a JavaScript array?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is a beginner's introduction to JavaScript arrays and data structures. It covers why we need them, and how they fit into the front-end context.</p>
<h2 id="introduction">Introduction</h2>
<p>When I first started learning to program, I would regularly encounter concepts that were hard to fit into the big picture. Coming from a non-traditional background I found words like "data structures" and "arrays" often difficult to place in a context that made sense. Or why they were needed for front-end development at all.</p>
<p>Nowadays data and arrays are part of my daily diet as a front-end developer. But I still remember all that early confusion. My aim here is to give a high-level overview designed for people who have no engineering background. And to place it all in a realistic context.</p>
<p>In this article, we will talk about what <strong>data is</strong> and how we <strong>organise</strong> it. We will examine data structures focusing only on <strong>arrays</strong> to keep things clear. And we will look at why we need it.</p>
<h3 id="the-setup">The setup</h3>
<p>Let’s imagine that we are working on an online platform that allows us to do our supermarket shopping from a website. That's a real-world application of the things we want to talk about here.</p>
<p>Take a look at <a href="https://lolamarket.com/tienda" rel="noopener">Lola Market</a>, which is where I work, for an example of how this would look like.</p>
<p>Our website is going to show a list of products. This is going to be our starting point to talk about data and organising it in a context that mimics things we do every day in the front end.</p>
<h2 id="what-even-is-data">What even is data?</h2>
<p>Before we start talking about how we organise data, let's try to understand what data means in our context. And where this data comes from.</p>
<p>When you are working in the digital domain it’s helpful to remember that everything is data. Everything is bits stored in binary. </p>
<p>Now while that might be interesting, it is so general that it is of no help to us. So for our purposes, we will focus on a narrow idea of what data is. The one which is most immediately relevant. Take a look at the following list:</p>
<figcaption>List of&nbsp;products</figcaption>
</figure>
<p>This reduced list is an example of the kind of products you can find on this website we are building. This list is our data: mushrooms, steak, fish, aubergines, and lentils.</p>
<h2 id="so-where-does-this-data-come-from">So where does this data come from?</h2>
<p>Data can live directly in your app, in your front-end code. But more commonly it comes from some outside source. Usually, this data is stored in a database. </p>
<p>The front end makes a request to the database and receives this data as a response. Once it has arrived into our front-end app, it is time for us to do what we need with it. For example, show the product name on the website, style it, and add any functionalities needed (such as an “add to cart” button).</p>
<p>Take a look at any of the popular shopping websites and you'll see the same pattern. It will have a list of products presented in a certain style with various functionalities and other information about it.</p>
<h2 id="how-do-we-organise-data">How do we organise data?</h2>
<p>So we have established that this list of products is our data. Now we have to package this data in some sort of a container. This will enable us to organise it, move it around, and later access it and do stuff to it.</p>
<p>One of the most common ways to organise data that you will work with frequently is called an <strong>array</strong>. Here’s what an array looks like:</p>
<figcaption>An array</figcaption>
</figure>
<p>The syntax looks simple enough. You create an array with the square brackets <code>[]</code>. And separate the individual elements with a comma <code>,</code>. If your data is made up of <strong>strings </strong>put each element inside quotes or double quotes <code>''</code>. <strong>String </strong>loosely means a bunch of characters representing text, like words and sentences.</p>
<p>And that’s it. You have just organised your data in a single package called an <strong>array</strong>. And we can do lots of things with this now. You can think of an array as merely a container that allows us to put data inside, organise it in a certain structure, and permits us to do things with it.</p>
<p>An array is one example of what we call <strong>data structures</strong>. These are the various ways we use to organise data. There are a lot of them, but the two most common ones in the front end are arrays and objects.</p>
<p>So now what do we do with this?</p>
<figcaption>Photo by <a href="https://unsplash.com/@impatrickt?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Patrick Tomasso</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<h2 id="why-do-we-need-arrays">Why do we need arrays?</h2>
<p>We need arrays and other data structures in the front end because almost everything we deal with is data. And that needs to be organised in a way that we can work with.</p>
<p>In our example, once we receive the products' array we can write the logic that takes each product and displays its name on our website. But how do we select each item from the array and do things to it?</p>
<p>In this article below, I explain just that. I take our example to the next step and talk about how <strong>loops </strong>come into play to start processing our data - check it out!</p>
<p><a href="/news/what-in-the-world-is-a-javascript-loop-for/">https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-loop-for/</a></p>
<h2 id="conclusion">Conclusion</h2>
<p>So, to recap. For our online supermarket, we have a bunch of products and that's our data. We saw how we organise this data into data structures like the array. This is usually stored in a database. We can then request this data. &nbsp;And once it “arrives” to our front-end app from the database we can start processing it and doing things with it. Hopefully, this has given you a better idea of why we need this in our front end.</p>
<p>Of course, there is more to data structures than arrays made up of strings. Below, I leave you with a little more information to expand your understanding. Things you may want to look at next to understand these concepts more comprehensively.</p>
<p>The first port of call to search for information for me is always <a href="https://developer.mozilla.org" rel="noopener">MDN</a>. It's one of the most reliable sources of information for developers.</p>
<ul>
<li><strong>Data structures:</strong> Apart from arrays you will quickly need to get familiar with <strong>objects</strong>. That’s an even more common data structure. In fact, understanding objects is essential to understanding JavaScript as a whole.</li>
<li><strong>Data types:</strong> The data we worked with here was made up of <code>strings</code>. But there are a few more types of data like <code>numbers</code> and <code>booleans</code> (true or false) that you will need to understand.</li>
<li><strong>Requests:</strong> We briefly mentioned how usually we would make a request to our database to get the data we need to use. Working with APIs, <code>fetch()</code>, making requests and handling the response is an advanced topic that you can safely leave for later. But one that’ll be essential by the time you are starting to interview for a developer job.</li>
</ul>
<h3 id="closure">Closure</h3>
<p>Thanks for reading. I hope you found this useful. And if you enjoyed it, sharing it around would be greatly appreciated. If you have any questions or comments I’m on <a href="https://twitter.com/Syknapse" rel="noopener">Twitter</a> <a href="https://twitter.com/Syknapse" rel="noopener">@Syknapse</a> and I would love to hear from you.</p>
<figcaption>Photo by <a href="https://twitter.com/__Santaella">Claudia</a></figcaption>
</figure>
<p>My name is Syk and I’m a front-end developer at <a href="https://twitter.com/Tech_LolaMarket" rel="noopener">Lola Market</a> in Madrid. I career-changed into web dev from an unrelated field, so I try to create content for those on a similar journey. My DMs are always open for aspiring web developers in need of some support. You can also read about my transformation in <a href="https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b">this article.</a></p>
<p><a href="/news/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b/">https://www.freecodecamp.org/news/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b/</a></p>
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
