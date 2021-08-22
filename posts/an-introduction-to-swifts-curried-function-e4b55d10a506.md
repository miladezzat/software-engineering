---
card: "https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg"
tags: [Tech]
description: "When you hear the word “curry”, the very first thing that pro"
author: "Milad E. Fahmy"
title: "An introduction to function currying in Swift"
created: "2021-08-16T11:45:23+02:00"
modified: "2021-08-16T11:45:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-swift tag-technology tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to function currying in Swift</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kx8jzRIUN8lytiKmR8ALPA.jpeg" alt="An introduction to function currying in Swift">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When you hear the word “<strong>curry</strong>”, the very first thing that probably passes through your mind is a great part of Indian cuisine. Indian people use a very complex combination of spices to prepare the dish. They put all the ingredients in one by one to make a great curry.</p><p>So the main trick is to put all the ingredients one by one. Similarly, in programming, <strong>currying</strong> is the technique of converting a function that takes multiple arguments into a function that takes one argument at a time and then returns a function.</p><p>But in any programming language, we can easily declare a function that takes multiple arguments at a time, and most programmers are used to it. So why use currying?</p><p>Besides making your food exceptional, it is used to allow the chaining of operations on a particular dataset. So instead of writing complex algorithms with some nested loops, you can accomplish the same with some simple commands.</p><p>It makes use of code reusability, and the less code you have to write, the fewer errors you’ll have! You can present currying / un-currying as a way to state the elimination and introduction of rules for and in constructive logic. This provides a connection to a more elegant motivation for why it exists.</p><p>Programmers have the option to declare every function in two equivalent ways. In currying, a function takes just one argument and returns a function. Then the returned function takes one argument and returns the final result.</p><p>So in every programmer’s mind, there may be one question: why would we take the more complicated direction, that is, first writing a function that returns a function, and then again calling the second function?</p><p>Lets first look at the more popular style of defining a function:</p><pre><code class="language-swift">func multiply1(_ x: Int, _ y: Int) -&gt; Int {
return x*y
}</code></pre><p>The above function takes two arguments and returns their multiplication result.</p><p>Now we can define the same function in a different way:</p><pre><code>func multiply2(_ x: Int) -&gt; (Int) -&gt; Int {
return { $0 * x }
}</code></pre><p>The difference between these two functions is in their calling style:</p><pre><code>multiply1(3, 4) //returns 12</code></pre><pre><code>multiply2(3)(4) //returns 12</code></pre><p>In the first function, we pass both the arguments at the same time. In the second function, we pass the first argument (which itself returns a function), and then we pass the second argument.</p><p>Actually, both the functions are doing the same thing here. These two examples show how we can always transform a function that takes multiple arguments at a time into a series of functions that take one argument at a time. This is the process of <strong>currying</strong>. So <strong><em>multiply2</em></strong> function is the curried version of <strong><em>multiply1</em></strong>.</p><p>We can represent the second function as a chain of functions like this:</p><pre><code>//Benefit: 1</code></pre><pre><code>multiply2(3)(multiply2(4)(multiply2(5)(6))) //returns 360</code></pre><pre><code>//Benefit: 2</code></pre><pre><code>let multiplier = multiply2(2)</code></pre><pre><code>let integerList = 1...100</code></pre><pre><code>let x = integerList.map(multiplier) //returns [2, 4, 6, 8, 10, 12 ...]</code></pre><p>These are some of the benefits of the curried function. You can always chain up the operations with some simple steps. Awesome, right?</p><p>Let’s look at an another example:</p><p>Now let’s create a <strong>MorningWalk</strong> for Sunday and add 100 steps into it.</p><p>So basically here we are calling the <strong><em>addSteps()</em></strong> instance method on the instance itself.</p><p>But we can also do the same thing in the curried way like this:</p><p>This is doing the same thing as we did above. First, we are assigning the <strong><em>addSteps</em></strong> and <strong><em>minusSteps</em></strong> methods into two different variables. Here at this stage, we are not calling any functions. We have just made references to the functions, the same as function pointers. In the next step, we are actually calling the functions that are stored inside <strong><em>stepIncreaser</em></strong> and <strong><em>stepDecreaser</em></strong>.</p><p>Now, <strong><em>stepIncreaser</em></strong> takes a single argument which is the <strong>MorningWalk</strong> instance, and returns a function whose type is <strong><em>(Int) -&gt;</em></strong> (). So the returned function takes an argument of type Int and returns nothing. Here, the returned function a<strong><em>nd addStep</em></strong>s() function have the same type of method signature. The same concept applies to t<strong><em>he stepDecrea</em></strong>ser.</p><p>So, at last, we can say that an instance method in Swift is also a type method. It takes an instance of the class as an argument and returns a function, which will then take other arguments and return/update the final result.</p><p>We can call the above methods like this also:</p><h4 id="conclusion">Conclusion</h4><p>In this article, we had a function with more than one argument. We transformed it into a function which always took a single argument at a time, resulting in another function, until there was no argument left. This then gave us the final result. So we can say that functions are nothing more than ordinary values which can be produced and returned by other functions.</p><p>Now you have something new and interesting to try out on your daily programming tasks!</p>
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
