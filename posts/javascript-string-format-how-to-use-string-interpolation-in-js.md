---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg"
tags: [JavaScript]
description: The addition of template literals in ECMAScript 6 (ES6) allow
author: "Milad E. Fahmy"
title: "JavaScript String Format – How to use String Interpolation in JS"
created: "2021-08-15T19:28:35+02:00"
modified: "2021-08-15T19:28:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript String Format – How to use String Interpolation in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c98d0740569d1a4ca1c2f.jpg" alt="JavaScript String Format – How to use String Interpolation in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The addition of template literals in ECMAScript 6 (ES6) allows us to interpolate strings in JavaScript. </p>
<p>In simpler words, we can use placeholders to inject variables into a string. You can see an example of string interpolation using template literals in the snippet below:</p><pre><code class="language-js">const age = 4.5;
const earthAge = `Earth is estimated to be ${age} billion years old.`;
console.log(earthAge);
</code></pre>
<p>First of all, you'll see that we are using backticks for template literals. Besides that, we also have the format of <code>${placeholder}</code>, which allows us to insert a dynamic value into the string. Anything inside <code>${}</code> is evaluated as JavaScript. </p>
<p>For instance, we could write <code>Earth is estimated to be ${age + 10} billion years old.</code>, and it would work as if we did <code>const age = 4.5 + 10;</code>.</p>
<h3 id="how-did-we-do-it-before">How did we do it before? </h3>
<p>Before template literals, we would have done it like this:</p><pre><code class="language-js">const earthAge = "Earth is estimated to be " + age + " billion years old.";
</code></pre>
<p>As you can see, we already have lots of quotes for a simple string. Imagine we have to insert a handful of variables. It can quickly transform into a complex string that is not very readable. Thus, template literals make strings cleaner and more readable.</p>
<p>However, this is just one case. Let's see more uses cases for template literals.</p>
<h2 id="multi-line-strings">Multi-line strings</h2>
<p>Another handy use of template strings is multi-line strings. Before template literals, we used <code>\n</code> for new lines, as in <code>console.log('line 1\n' + 'line 2')</code>. </p>
<p>For two lines, this might be fine. But imagine we want five lines. Again, the string becomes unnecessarily complex.</p><pre><code class="language-js">const earthAge = `Earth is estimated to be ${age} billion years old.
Scientists have scoured the Earth searching for the oldest rocks to radiometrically date.
In northwestern Canada, they discovered rocks about 4.03 billion years old.
`;
</code></pre>
<p>The above snippet demonstrates once again how straightforward and clean it becomes to write multi-line strings with template literals. </p>
<p>As an exercise, try to convert the above string to use concatenation, and new line <code>\n</code>.</p>
<h2 id="expressions">Expressions</h2>
<p>With template literals, we can also use expressions in the strings. What does that mean? </p>
<p>For instance, we could use mathematical expressions such as multiplying two numbers. The snippet below illustrates just that:</p><pre><code class="language-js">const firstNumber = 10;
const secondNumber = 39;
const result = `The result of multiplying ${firstNumber} by ${secondNumber} is ${firstNumber * secondNumber}.`;
console.log(result);
</code></pre>
<p>Without template literals, we would have to do something like this:</p><pre><code class="language-js">const result = "The result of multiplying " + firstNumber + " by " + secondNumber + " is " + firstNumber * secondNumber + ".";
</code></pre>
<p>Writing a string like the above can quickly get complex and confusing. As we keep seeing, template literals make it easier and more elegant to embed expressions in the string.</p>
<h2 id="ternary-operator">Ternary operator</h2>
<p>With the string interpolation, we can even use a ternary operator inside a string. This allows us to check the value of a variable, and display different things depending on that value. </p>
<p>Let's look at the example below:</p><pre><code class="language-js">const drinks = 4.99;
const food = 6.65;
const total = drinks + food;
console.log(result);
</code></pre>
<p>In the above example, we check if the total amount is more than ten dollars, for instance. </p>
<h1 id="conclusion">Conclusion</h1>
<p>The addition of template literals in ES6 allows us to write better, shorter, and clearer strings. It also gives us the ability to inject variables and expressions into any string. Essentially, whatever you write inside the curly brackets (<code>${}</code>) is treated as JavaScript.</p>
<p>Thus, we can use template literals to:</p>
<ul>
<li>write multi-line strings</li>
<li>embed expressions</li>
<li>write strings with the ternary operator</li>
</ul>
<p><em><em>If you like what I write, chances are you would love what I email. Consider subscribing to my <a href="https://landing.mailerlite.com/webforms/landing/i4b6v1">mailing list</a>. If you're <strong><strong>not a fan of newsletters</strong></strong>, we can always keep in touch on <strong><strong><a href="https://twitter.com/intent/follow?screen_name=catalinmpit">Twitter</a></strong></strong>.</em></em></p>
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
