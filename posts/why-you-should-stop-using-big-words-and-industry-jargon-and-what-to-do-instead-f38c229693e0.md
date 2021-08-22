---
card: "https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg"
tags: [JavaScript]
description: Let’s say you want to teach a person something. Why does the
author: "Milad E. Fahmy"
title: "Why you should stop using big words and industry jargon (and what to do instead)"
created: "2021-08-15T19:42:21+02:00"
modified: "2021-08-15T19:42:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-teaching tag-programming tag-tech tag-communication ">
<header class="post-full-header">
<h1 class="post-full-title">Why you should stop using big words and industry jargon (and what to do instead)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg" alt="Why you should stop using big words and industry jargon (and what to do instead)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s say you want to teach a person something. Why does the person not understand what you’re saying?</p>
<p>One of the main reasons is likely because we like to use big words and industry jargon. This jargon may mean something to us, but it means nothing to the people we’re trying to teach.</p>
<p>The next time you try to teach programming, watch out for the words you use.</p>
<h3 id="three-types-of-big-words">Three types of big words</h3>
<p>We can divide jargon into three categories:</p>
<ol>
<li>That which can be explained in a few words</li>
<li>That which cannot be explained with simple words</li>
<li>That which can mean different things in different contexts.</li>
</ol>
<p>When you teach, you should always watch out for these three types of words.</p>
<h3 id="jargon-that-can-be-explained-in-a-few-words-">Jargon that can be explained in a few words.</h3>
<p>If the jargon can be explained in a few words, you want to <strong>use those words instead of the jargon.</strong></p>
<p>Interoperability is one example of a such a word.</p>
<p>It sounds scary and complicated, but it can be explained in a few simple words.</p>
<p>If you searched for the meaning of interoperability, you’ll come across definitions like these:</p>
<p>From Wikipedia:</p>
<blockquote>“<em>Interoperability is a characteristic of a product or system, whose interfaces are completely understood, to work with other products or systems, at present or in the future, in either implementation or access, without any restrictions.</em>“</blockquote>
<p>From Dictionary.com:</p>
<blockquote>“<em>Interoperability is the ability to share data between different computer systems, especially on different machines.</em>“</blockquote>
<p>If we put it in simple terms, “interoperability” means the “ability to share data”.</p>
<p>See how it makes the language barrier much lower?</p>
<p>If you can replace such jargon with simple words, why would you stick to the difficult word?</p>
<h3 id="jargon-that-means-different-things-in-different-contexts">Jargon that means different things in different contexts</h3>
<p>Some jargon has different meanings when it’s used in different contexts.</p>
<p>One example of such jargon is encapsulation.</p>
<p>To encapsulate something means to enclose that thing with something else. If you wrap a potato with a cloth, you can say the cloth encapsulates the potato.</p>
<p>Developers love the word encapsulation. They use it all the time.</p>
<p>The first way is to wrap variables and other code inside a function. In this case, the function encapsulates the code within.</p><pre><code>// This is JavaScriptfunction someFunction () {  const variableName = 'I am a variable!'}</code></pre>
<p>The second way is to contain an object’s individuality. For example, if you have a Human object, and you create two humans from the human object, these two humans should not be the same.</p>
<p>In this case, each object encapsulates its own data.</p><pre><code>// This is JavaScriptfunction Human (name) {  this.name = name}</code></pre><pre><code>const zell = new Human('Zell')const vincy = new Human('Vincy')</code></pre><pre><code>zell.name === vincy.name // false</code></pre>
<p>The third way is for information hiding. In JavaScript, we can create private variables. These private variables are enclosed by the object.</p>
<p>In this case, the object encapsulates the private variable. You cannot access the private variable. In this case, encapsulation is used to mean something different from the second case.</p><pre><code>// This is JavaScriptfunction Human () {  const privateVariable = 'private'  this.publicVariable = 'public'}</code></pre>
<p>So what do you understand by Encapsulation?</p>
<p>You can’t be sure.</p>
<p>There should be no ambiguity when you communicate. If there is ambiguity, communication breaks down, and students don’t learn.</p>
<p>It is best to <strong>ditch the jargon if the jargon means different things in different contexts.</strong></p>
<h3 id="jargon-that-cannot-be-explained-with-simple-words">Jargon that cannot be explained with simple words</h3>
<p>Some jargon cannot be explained with simple words. This jargon is often used to talk about abstract concepts, which is why simple words may not be enough.</p>
<p>One example of such a word is “mutation”.</p>
<p>Mutation comes from the word mutate. To mutate means to change in form or nature. In JavaScript, mutation happens underneath the hood without you noticing.</p>
<p>In this case, change is not enough to explain mutation. It lacks depth and detail. Plus, change is still too abstract.</p>
<p>You feel that a concept is abstract, because you cannot imagine it. You cannot see, hear, feel, touch, or taste it. To make an abstract concrete, we need to appeal to a human’s five senses.</p>
<p><strong>To explain an abstract concept, you can use analogies.</strong> When you use analogies, you can describe an object or a scenario in a way where people can see, hear, or feel what you mean.</p>
<p>For example, <a href="https://alistapart.com/article/why-mutation-can-be-scary" rel="noopener">I used X-men as my analogy when I explained mutation</a>.</p>
<p>I asked students to imagine a friend growing fur and turning blue in front of their eyes. Anyone can imagine what it means to grow fur and turn blue, even if they don’t know who Beast is.</p>
<p>If you want to expand the analogy to cater to more people, you can appeal to more senses. For example, to get blind people to imagine mutation, you can also tell them to imagine their friend growled like a beast.</p>
<p>The key here is a change that goes undetected. Nobody knows whether a person is a mutant until they show their powers. On the same front, nobody knows that a JavaScript object has changed until it, well, has changed.</p>
<p>I emphasized this point to draw a link back to mutation in JavaScript.</p>
<p>Mutation becomes more concrete once the link gets established. When I say mutation, students who read the article can picture their friend turning blue, growing fur, and growling like a beast.</p>
<p>Once you turn abstract jargon into a concrete concept, you can use that jargon as you usually would. Students will understand what you mean.</p>
<p>I wrote an article about <a href="https://zellwk.com/blog/creating-good-analogies" rel="noopener">creating good analogies</a> if you’re interested in learning this skill.</p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>Pay attention to the words you use when you teach programming. If you use difficult words that don’t mean anything to your student, they won’t be able to get what you mean.</p>
<p>Replace difficult words with words that are simpler and easier to understand if you can.</p>
<p>Avoid using jargon that can mean different things in different contexts. This jargon makes things ambiguous and confusing.</p>
<p>Finally, use analogies to turn abstract concepts into concrete concepts.</p>
<p>Thanks for reading. Did this article help you in any way? If you did, <a href="http://twitter.com/share?text=Stop%20using%20big%20words%20and%20industry%20jargons%20(and%20what%20to%20do%20instead)%20by%20@zellwk%20?%20&amp;url=https://zellwk.com/blog/big-words/&amp;hashtags=" rel="noopener">I hope you consider sharing it</a>. You might help someone out. Thank you!</p>
<p>This article was originally posted at<em> <a href="https://zellwk.com/blog/big-words" rel="noopener">zellwk.com.</a></em><br>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better front-end developer.</p>
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
