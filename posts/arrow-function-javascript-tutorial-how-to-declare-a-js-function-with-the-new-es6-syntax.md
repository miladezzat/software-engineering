---
card: "/images/default.jpg"
tags: [Programing]
description: You’ve probably seen arrow functions written a few different
author: "Milad E. Fahmy"
title: "Arrow Function JavaScript Tutorial – How to Declare a JS Function with the New ES6 Syntax"
created: "2021-08-15T19:29:30+02:00"
modified: "2021-08-15T19:29:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programing tag-javascript tag-learn-to-code tag-js tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">Arrow Function JavaScript Tutorial – How to Declare a JS Function with the New ES6 Syntax</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/nick-fewings-zF_pTLx_Dkg-unsplash-1.jpg 300w,
/news/content/images/size/w600/2020/05/nick-fewings-zF_pTLx_Dkg-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2020/05/nick-fewings-zF_pTLx_Dkg-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2020/05/nick-fewings-zF_pTLx_Dkg-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/nick-fewings-zF_pTLx_Dkg-unsplash-1.jpg" alt="Arrow Function JavaScript Tutorial – How to Declare a JS Function with the New ES6 Syntax">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You’ve probably seen arrow functions written a few different ways.</p>
const addTwo = (num) =&gt; {return num + 2;};
//example 2
const addTwo = (num) =&gt; num + 2;
//example 3
const addTwo = num =&gt; num + 2;
//example 4
const addTwo = a =&gt; {
const newValue = a + 2;
return newValue;
};
</code></pre>
<p>Some have parentheses around the parameters, while others don’t. Some use curly brackets and the <code>return</code><strong> </strong>keyword, others don’t. One even spans multiple lines, while the others consist of a single line.</p>
<p>Interestingly, when we invoke the above arrow functions with the same argument we get the same result.</p>
//Result: 4
</code></pre>
<p>How do you know which arrow function syntax to use? That’s what this article will uncover: how to declare an arrow function.</p>
<h2 id="a-major-difference">A Major Difference</h2>
<p>Arrow functions are another—more concise—way to write function expressions. However, they don’t have their own binding to the <strong><code>this</code> </strong>keyword. </p>
const addNumbers = function(number1, number2) {
return number1 + number2;
};
//Arrow function expression
const addNumbers = (number1, number2) =&gt; number1 + number2;
</code></pre>
<p>When we invoke these functions with the same arguments we get the same result.</p>
//Result: 3
</code></pre>
<p>There's an important syntactical difference to note: arrow functions use the arrow <strong><code>=&gt;</code></strong> instead of the <strong><code>function</code></strong> keyword. There are other differences to be aware of when you write arrow functions, and that’s what we’ll explore next.</p>
<h2 id="parentheses">Parentheses</h2>
<p>Some arrow functions have parentheses around the parameters and others don't.</p>
const addNums = (num1, num2) =&gt; num1 + num2;
//Example without parentheses
const addTwo = num =&gt; num + 2;
</code></pre>
<p>As it turns out, the number of parameters an arrow function has determines whether or not we need to include parentheses.</p>
<p>An arrow function with <strong>zero parameters</strong> requires parentheses.</p>
console.log(hello());
//Result: "hello"
</code></pre>
<p>An arrow function with <strong>one parameter</strong> does <em>not</em> require parentheses. In other words, parentheses are optional. </p>
</code></pre>
<p>So we can add parentheses to the above example and the arrow function still works.</p>
console.log(addTwo(2));
//Result: 4
</code></pre>
<p>An arrow function with <strong>multiple parameters </strong>requires parentheses.</p>
console.log(addNums(1, 2));
//Result: 3
</code></pre>
<p>Arrow functions also support <strong>rest parameters </strong>and<strong> destructuring</strong>. Both features require parentheses.</p>
<p>This is an example of an arrow function with a <strong>rest parameter</strong>.</p>
console.log(nums(1, 2, 3, 4));
//Result: [ 2, 3, 4 ]
</code></pre>
<p>And here’s one that uses <strong>destructuring</strong>.</p>
country: "Greece",
city: "Athens"
};
const travel = ({city}) =&gt; city;
console.log(travel(location));
//Result: "Athens"
</code></pre>
<p>To summarize: if there’s only one parameter—and you’re not using rest parameters or destructuring—then parentheses are optional. Otherwise, be sure to include them.</p>
<h2 id="the-function-body">The Function Body</h2>
<p>Now that we’ve got the parentheses rules covered, let’s turn to the function body of an arrow function.</p>
<p>An arrow function body can either have a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#:~:text=An%20arrow%20function%20expression%20is,cannot%20be%20used%20as%20constructors.">“concise body” or “block body”</a>. The body type influences the syntax.</p>
<p>First, the “concise body” syntax.</p>
</code></pre>
<p>The “concise body” syntax is just that: it’s concise! We don’t use the <code>return</code><strong> </strong>keyword or curly brackets. </p>
<p>If you have a one-line arrow function (like the example above), then the value is implicitly returned. So you can omit the <code>return</code><strong> </strong>keyword and the curly brackets. </p>
<p>Now let’s look at “block body” syntax.</p>
const total = a + 2;
return total;
}
</code></pre>
<p>Notice that we use <em>both </em>curly brackets and the<strong> <code>return</code> </strong>keyword in the above example. </p>
<p>You normally see this syntax when the body of the function is more than one line. And that’s a key point: wrap the body of a multi-line arrow function in curly brackets and use the <code>return</code><strong> </strong>keyword.</p>
<h3 id="objects-and-arrow-functions">Objects and Arrow Functions</h3>
<p>There’s one more syntax nuance to know about: wrap the function body in parentheses when you want to return an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">object literal expression</a>.</p>
city:"Boston"
})
console.log(f().city)
</code></pre>
<p>Without the parentheses, we get an error.</p>
city:"Boston"
}
//Result: error
</code></pre>
<p>If you find the arrow function syntax a bit confusing, you’re not alone. It takes some time to get familiar with it. But being aware of your options and requirements are steps in that direction.</p>
<p><em><em>I write about learning to program and the best ways to go about it (</em></em><a href="https://amymhaddad.com/" rel="noopener nofollow">amymhaddad.com</a>).<br></p>
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
