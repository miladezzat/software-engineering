---
card: "/images/default.jpg"
tags: [JavaScript]
description: This article is a beginner's introduction to JavaScript loops
author: "Milad E. Fahmy"
title: "What in the world is a JavaScript loop?"
created: "2021-08-15T19:32:33+02:00"
modified: "2021-08-15T19:32:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-loops tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">What in the world is a JavaScript loop?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/joanna-kosinska-1_CMoFsPfso-unsplash.jpg 300w,
/news/content/images/size/w600/2019/09/joanna-kosinska-1_CMoFsPfso-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/09/joanna-kosinska-1_CMoFsPfso-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/09/joanna-kosinska-1_CMoFsPfso-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/joanna-kosinska-1_CMoFsPfso-unsplash.jpg" alt="What in the world is a JavaScript loop?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is a beginner's introduction to JavaScript loops. We'll go over why we need them, and how they fit into the front-end context. It’s a bird's eye view of accessing data and doing things to it, covering fundamental every-day concepts for a front-end developer.</p>
<h2 id="introduction-">Introduction.</h2>
<p><em>“So we take this array, we iterate over it, we process the data and shazam!”</em><br>When I first started learning to program, phrases like this sounded like mystical incantations. A language that looks like English but was beyond my comprehension. Coming from a non-engineering background I couldn’t for the life of me understand where a loop fit into what I was trying to do. And why exactly I needed it.</p>
<p>Nowadays, as a front-end developer, I use a loop for something or another all the time. But I haven't forgotten how mysterious it all was. My aim here is to give a high-level overview designed for people who have no engineering background. We will go beyond the syntax and instead focus on a real context of why we use loops and how it all fits together.</p>
<p>In this article, we will talk about how we access data and then how we do things to it with <strong>loops.</strong> More importantly, we are gonna try to answer <strong>why </strong>we need to do this. And <strong>how is this relevant</strong> to you building websites and web apps.</p>
<p>There’s also going to be a beginner-friendly <strong>practical example.</strong> You can follow along to it to practice the concepts and see them in action for yourself.</p>
<h3 id="the-setup">The setup</h3>
<p>Let’s imagine that we are working on an online platform that allows us to do our supermarket shopping from a website. That's a real-world application of the things we want to talk about here.</p>
<p>Take a look at <a href="https://lolamarket.com/tienda" rel="noopener">Lola Market</a>, which is where I work, for an example of how this would look like.</p>
<p>Assume we have a bunch of products stored in our database. Our task is to take these and display them on the website as a list. It’s a simple task that mimics things we do every day in the front end.</p>
<h2 id="loops">Loops</h2>
<p>To talk about loops we are going to be working with arrays. If you would like a refresher on what is an array and why we need it you can check out my article about it that links up nicely to this one.</p>
<p><a href="/news/what-in-the-world-is-a-javascript-array/">https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-array/</a></p>
<p>In short, we have taken a bunch of products that are in our database. We have packaged them in an array and made a request to bring them into our front-end code. And this is what this array looks like.</p>
<figcaption>Our array of products</figcaption>
</figure>
<p>Once we have the array of products that’s where the loops come in. Simply put, a loop is a way to take our array, “open” it and take one element out. Hand it to us to do what we want to it. Then repeat with the next element all the way to the end of the array.</p>
<p>We use a loop when we need to repeat the same code for each one of the elements in our data.</p>
<h3 id="get-set">Get set</h3>
<p>What we want to do is to display this list of products on the website. imagine it like this. Most websites would look more complex we hope. But this is just our first step.</p>
<figcaption>Products list</figcaption>
</figure>
<p>To keep the example simple and accessible to beginners we are going to use <strong>dev tools</strong> to do all the work. This requires no setup apart from opening your browser's dev tools.</p>
<p>We need to take a few things into account.</p>
<ul>
<li> We will not be making a call to the database to get our list of products. Instead, we will type an array by hand and use it directly in our front-end code.</li>
<li>We will not be displaying the list of products on a website. Instead we are only going to log the list into the dev tools console.</li>
<li>In the real world, we wouldn't be using the <code>console.log()</code> statements you see here. Instead &nbsp;the logic we need to display our list on the website would be in its place.</li>
</ul>
<p>OK, we are all set. Let's go.</p>
<figcaption>Photo by <a href="https://unsplash.com/@vandateixeira?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Vanda Teixeira</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<h3 id="for-each-product">For each product</h3>
<p>First, let’s take our loop and store it in a <strong>variable</strong>. This is to make it easier to read and work with.</p><pre><code class="language-JS">const products = ['mushrooms', 'steak', 'fish', 'aubergines', 'lentils']</code></pre>
<p>Now every time we use <code>products</code> we are actually referring to our array. This is very handy because our array could easily contain hundreds of products. </p>
<p>So, on we go to the main course, let me introduce you to the <code>forEach()</code><br>loop. And here is what it looks like in action:</p><pre><code class="language-JS">products.forEach( product =&gt; {
// do stuff
})</code></pre>
<p>We will break this down piece by piece now. To begin with, let's convert this snippet of code into <strong>plain English</strong>. This literally reads: “Take the products array. For each element in this array, take that element, call it <code>product</code> and <em>do stuff</em> to it.”</p>
<p>Let’s take a closer look. </p><pre><code class="language-JS">⬇ARRAY⬇  ⬇LOOP⬇  ⬇CURRENT⬇ ⬇FUNCTION⬇
products.forEach( product =&gt; {
// do stuff
})</code></pre>
<ul>
<li><code>products</code>: This is our <strong>array </strong>that contains the data.</li>
<li><code>.forEach()</code> : This is our array method, the <strong>loop</strong>.</li>
<li><code>product</code> : This is the <strong>currently selected</strong> element. This is the item from the array that our loop has picked up and given to us to work with.</li>
<li><code>=&gt; { }</code> : This is a <strong>function </strong>declaration, an arrow function to be specific. It roughly says “execute the following code.”</li>
<li><code>// do stuff</code> : This is where the actual code goes. Do things for each of the elements in the array.</li>
</ul>
<p>It is important to remember two things here about the currently selected element. First, that <code>product</code> is a variable name. The name itself is ours to decide, we could have called it <code>food</code> or <code>x</code> or anything else. However, if we are dealing with an array of <code>products</code> it is customary to use the singular for an individual item of that array: <code>product</code>. If it was an array of <code>animals</code> then we would call it <code>animal</code>.</p>
<p>Second, <code>product</code> changes with every round the loop does. Each time the loop picks an item &nbsp;<code>product</code> becomes this new currently selected item.</p>
<p>Basically, the loop starts by picking up the first element in the array, “mushrooms” in this case. <code>product</code> now refers to “mushroom”. The loop then executes the function and runs the code that is there. Once it’s finished it goes back to the array and picks up the next element. <code>product</code> is no longer “mushrooms”, it is “steak” now. Once again the code executes. And this repeats <strong>for each</strong> one of the elements in the array.</p>
<p>Each one of those rounds the loop makes is called an <strong>iteration</strong>.</p>
<h3 id="try-it-yourself">Try it yourself</h3>
<p>So let’s try this out and see how it works. Go ahead and open the console in your browser’s dev tools. For example in Chrome it is Command + Option + J (Mac) or Control + Shift + J (Windows).</p>
<ul>
<li>Type out our array saved in a variable <code>const products = ['mushrooms', 'steak', 'fish', 'aubergines', 'lentils']</code>.</li>
<li>Hit enter. You’ll get an <code>undefined</code>. This is normal.</li>
<li>Then type out our loop and this time we will add a &nbsp;<code>console.log()</code> as the code to execute:</li>
</ul><pre><code class="language-JS">products.forEach( product =&gt; {
console.log(product)
})</code></pre>
<p>This is what it would look like:</p>
<figcaption>The Chrome dev tools&nbsp;console</figcaption>
</figure>
<p>What we want here is to print to the console the value that is <code>product</code> on each iteration. Try it for yourself. Hit enter.</p>
<p>Once you do, the loop will start. For each product, it will log the currently selected one to the console until it’s done with all the products in our array.</p>
<figcaption>The loop´s results in the&nbsp;console</figcaption>
</figure>
<p>And That's it. We have printed our entire array to the console. And we can use the same idea to manipulate the DOM to display and modify content on a website. Or do a myriad of other things with the data.</p>
<p>What about if we wanted to treat some of this data differently and not execute the same code for all the products? Say for example we want to show a "(v)" only next to vegetarian items.</p>
<p>In the following article, I explain just that. I take our example to the next step and talk about how <strong>conditionals </strong>allow us to do this - check it out!</p>
<p><a href="/news/what-in-the-world-is-a-javascript-conditional-for/">https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-conditional-for/</a></p>
<h2 id="conclusion">Conclusion</h2>
<p>To recap, a <strong>loop </strong>takes our data (an array in this case) and allows us to access it. It then <strong>iterates </strong>over each element in the array and <strong>executes </strong>some code for each element.</p>
<p>I’m hoping that the next time you encounter a loop you will find it easier to understand how it works. And that it’s clearer why you might need one in a front-end context.</p>
<p>In this article, we saw a <code>forEach()</code> loop. But apart from the <code>forEach()</code>, there are many more <strong>loops </strong>and <strong>array methods</strong> to learn. From the most basic <code>for</code> loop to more advanced methods like <code>map()</code> and <code>filter()</code>. These are extremely powerful tools for development that you should get familiar with. You'll find yourself using them while working on any kind of application.</p>
<h3 id="closure">Closure</h3>
<p>Thanks for reading. I hope you found this useful. And if you enjoyed it, sharing it around would be greatly appreciated. If you have any questions or comments I’m on <a href="https://twitter.com/Syknapse" rel="noopener">Twitter</a> <a href="https://twitter.com/Syknapse" rel="noopener">@Syknapse</a> and I would love to hear from you.</p>
<figcaption>Photo by <a href="https://twitter.com/__Santaella">Claudia</a></figcaption>
</figure>
<p>My name is Syk and I’m a front-end developer at <a href="https://twitter.com/Tech_LolaMarket" rel="noopener">Lola Market</a> in Madrid. I career-changed into web dev from an unrelated field, so I try to create content for those on a similar journey. My DMs are always open for aspiring web developers in need of some support. You can also read about my transformation in <a href="https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b">this article.</a></p>
<p><a href="/news/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b/">https://www.freecodecamp.org/news/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b/</a></p>
<hr>
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
