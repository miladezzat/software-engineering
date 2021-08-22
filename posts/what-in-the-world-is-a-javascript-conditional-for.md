---
card: "/images/default.jpg"
tags: [JavaScript]
description: This article is a beginner's introduction to JavaScript condi
author: "Milad E. Fahmy"
title: "What in the world is a JavaScript conditional?"
created: "2021-08-15T19:32:30+02:00"
modified: "2021-08-15T19:32:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-conditionals tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">What in the world is a JavaScript conditional?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/scott-webb-GQD3Av_9A88-unsplash.jpg 300w,
/news/content/images/size/w600/2019/09/scott-webb-GQD3Av_9A88-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/09/scott-webb-GQD3Av_9A88-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/09/scott-webb-GQD3Av_9A88-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/scott-webb-GQD3Av_9A88-unsplash.jpg" alt="What in the world is a JavaScript conditional?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is a beginner's introduction to JavaScript conditionals. It covers why we need them, and how they fit into the front-end context. And why you will end up using them regularly.</p>
<h2 id="introduction">Introduction</h2>
<p>I came into development from a non-traditional path. One thing was always particularly hard – to be able to go beyond the syntax of a new concept and place it in a context that made sense.</p>
<p>Conditionals are a little more intuitive than other concepts, but I want to show you the big picture. In this article, I'll explain why we need conditionals and how we can use them as front-end developers.</p>
<p>With the help of a beginner-friendly practical example, you'll see how you can use conditionals to process data in different ways and why they're a fundamental tool in development. Feel free to follow along while reading through this article.</p>
<p>The only prerequisite is a basic understanding of arrays and loops. I've covered those in two previous articles: </p>
<p><strong>Arrays</strong>: <a href="/news/what-in-the-world-is-a-javascript-array/">https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-array/</a></p>
<p><strong>Loops</strong>: <a href="/news/what-in-the-world-is-a-javascript-loop-for/">https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-loop-for/</a><strong> </strong></p>
<h3 id="the-setup">The setup</h3>
<p>Let’s imagine that we are working on an online platform that allows us to do our grocery shopping from a website. That's a real-world application of the things we want to talk about here.</p>
<p>Take a look at <a href="https://lolamarket.com/tienda" rel="noopener">Lola Market</a>, which is where I work, for an example of what this would look like.</p>
<p>In the example we set up in the previous articles, we took a bunch of products (mushrooms, steak, fish, aubergines, and lentils) and organised them inside an array. We then stored that array as a variable and used a <code>forEach</code> loop to iterate over the list.</p>
<p>We are assuming that this list of products is now displayed on our website. Our task is to add a "(v)" next to vegetarian items on this list. This is just the kind of thing we regularly do on the front end.</p>
<h2 id="conditionals">Conditionals</h2>
<p>Conditionals are essential building blocks of programming. They are a way to do something only <strong>if</strong> certain <strong>conditions </strong>are met. The simplest and most common conditional in JavaScript is the <code>if</code> statement. Take a look at an example:</p>
<p>
</p><pre><code class="language-js">if (product === 'steak') {
// do stuff
}</code></pre>
<p>Let’s start by translating this to English: “If the variable called <code>product</code> is exactly the string of characters 'steak' then execute the code within.”</p>
<p>Here’s a closer look</p>
<ul>
<li><code>if</code>: This is the conditional.</li>
<li><code>(product === ‘steak’)</code>: This is our condition. There are a lot of ways you can construct conditions. We don’t need to worry about this yet. For now, bear in mind that whatever we put here will always be evaluated to either <code>true</code> or <code>false</code>.</li>
<li><code>// do stuff</code>: The statement. This is where the code we want to run goes. It will be executed <strong>only </strong>if the result of the evaluation of the condition is <code>true</code>. Otherwise, it will be ignored.</li>
</ul>
<p>This bit of code will work on its own just fine, but we can have much more detailed control by using its friends &nbsp;<code>else if</code> and <code>else</code>. <code>else if</code> adds another condition to check and executes another separate block of code, while <code>else</code> becomes the default action to take if none of the conditions are met.</p>
<figcaption>Photo by <a href="https://unsplash.com/@jckbck?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Jakub Dziubak</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<h3 id="vegetarian-friendly">Vegetarian Friendly</h3>
<p>Let’s focus back on our original objective, which is to log a “(v)” next to the name of vegetarian items. This is a prime example of when we need to use a conditional. We want code that, <strong>if</strong> the <code>product</code> in the array <strong>is</strong> vegetarian, to print its name and add to it the “(v)”. And if it’s not vegetarian, to only print the name of the <code>product</code>.</p>
<p>First, we need to identify vegetarian items. Normally this information will be included with the data we requested from our database. But since we are using a simplified example, we will do it manually. We know that steak and fish are not vegetarian.</p>
<p>Notice, the condition I’m testing is if a product <strong>is not</strong> vegetarian. This is only because there are more vegetarian products on this list and I want the condition to be simple and the conditional to do the least amount of work. I could have just as easily tested for vegetarian items instead.</p>
<p>There are often many conditions that can be used to achieve the same goal. Writing good conditions that are efficient and readable is a useful skill that comes with practice.</p>
<p>So let’s write the condition that separates vegetarian from non-vegetarian.</p><pre><code class="language-js">if (product === 'steak' || product === 'fish') {
console.log(product)
} else {
console.log(product + '(v)')
}</code></pre>
<p>Following on from the example in my previous articles (linked above) we want to place the conditional inside the loop. The loop gives us each product in the list to process individually. This conditional block is the code that we are executing for each product in our array of products now.</p>
<p>Refresh the browser to start with a fresh console, then enter the following:</p>
<ul>
<li>The variable <code>product</code> storing our array of products.</li>
<li>The <code>forEach</code> loop iterating over the array.</li>
<li>And our conditional block inside.</li>
</ul>
<figcaption>The conditional block running inside of a loop</figcaption>
</figure>
<h3 id="execution">Execution</h3>
<p>If we read the conditional code in <strong>plain English</strong> it says: “<strong>If</strong> the currently selected <code>product</code> <strong>is</strong> exactly ‘steak’ <strong>or</strong> ‘fish’ then log <code>product</code> to the console. Otherwise, in all other cases log <code>product</code> to the console but also add a string “(v)” to the end of it.”</p>
<p>Quick note, the <code>===</code> operator checks that the left and right expressions are <strong>exactly </strong>the same. and the <code>||</code> operator means <strong>or. </strong>We have two conditions to check here (steak or fish)<strong>. </strong>If <strong>either </strong>of the two conditions is true it will execute the code within.</p>
<p>Hit enter to run the code and see the results.</p>
<figcaption>The result of the loop with the conditionals</figcaption>
</figure>
<p>And there it is. Every time the loop runs, it checks the currently selected element <code>product</code> and goes through the conditionals.</p>
<ul>
<li>Is <code>product</code> exactly the string ‘steak’?</li>
<li>No. Check the following condition.</li>
<li>Is <code>product</code> exactly the string ‘fish’?</li>
<li>No. This condition is not met, the code inside will not execute. Go to the default code specified in the <code>else</code> block.</li>
<li>Print <code>product</code> and add <code>(v)</code> to it.</li>
<li>This iteration is finished. Start the next iteration.</li>
</ul>
<p>If it finds ‘steak’ or ‘fish’ it will execute the code within that condition logging the <code>product</code> name without the "(v)". Then the loop finishes that iteration and starts the next, and so on. This process repeats for each element in the array until it’s all completed and the loop has logged the correct message for each one.</p>
<h2 id="conclusion">Conclusion</h2>
<p>To recap, a <strong>conditional statement</strong> sets certain <strong>conditions. </strong>When met (which means when the condition evaluates to <code>true</code>) the code specified inside the conditional block <strong>executes</strong>. Otherwise, it is ignored and not executed.</p>
<p>In our example, we have only logged messages to the console. But we can use the same idea to manipulate the DOM to display and modify content on a website.</p>
<p>Here are a few things you will need to further expand your knowledge and understand these concepts more in-depth:</p>
<ul>
<li><strong>Conditionals:</strong> The <code>if</code> statement is one of the most commonly-used conditionals. But you will need to learn about others like the <code>while</code> statement, the <code>switch</code> statement, or the very useful <strong>ternary operator</strong>.</li>
<li><strong>Conditions:</strong> Understand how to create conditions and how they are evaluated. For that, you need to become familiar with the concepts of “<strong>truthy</strong>” and “<strong>falsy</strong>”. This is when values that are not explicitly <code>true</code> or <code>false</code> are evaluated as such. &nbsp;For example, a string like <code>'mushrooms'</code> is considered true whereas an empty string <code>''</code> is always considered false.</li>
<li><strong>Logical operators and comparison operators:</strong> We saw those in our conditions. Logical operators like “<em>and”</em> and “<em>or”</em>, written <code>&amp;&amp;</code> and <code>||</code>. Comparison operators like <em>“equals”</em> and <em>“greater than”</em>, written <code>===</code> and <code>&gt;</code>. These are simple concepts that are the bread and butter of writing code.</li>
</ul>
<h3 id="closure">Closure</h3>
<p>Thanks for reading. I hope you found this useful. And if you enjoyed it, sharing it around would be greatly appreciated. If you have any questions or comments I’m on <a href="https://twitter.com/Syknapse" rel="noopener">Twitter</a> <a href="https://twitter.com/Syknapse" rel="noopener">@Syknapse</a> and I would love to hear from you.</p>
<figcaption>Photo by <a href="https://twitter.com/__Santaella">Claudia</a></figcaption>
</figure>
<p>My name is Syk and I’m a front-end developer at <a href="https://twitter.com/Tech_LolaMarket" rel="noopener">Lola Market</a> in Madrid. I career-changed into web dev from an unrelated field, so I try to create content for those on a similar journey. My DMs are always open for aspiring web developers in need of some support. You can also read about my transformation in <a href="/news/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b/">this article</a>.</p>
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
