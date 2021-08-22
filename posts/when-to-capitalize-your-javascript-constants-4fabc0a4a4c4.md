---
card: "https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg"
tags: [JavaScript]
description: "Many JavaScript style guides suggest capitalizing constant na"
author: "Milad E. Fahmy"
title: "When to capitalize your JavaScript constants"
created: "2021-08-16T11:32:02+02:00"
modified: "2021-08-16T11:32:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-variables tag-programming tag-technology tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">When to capitalize your JavaScript constants</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XhNtWWMZPXU--QwrKShjpQ.jpeg" alt="When to capitalize your JavaScript constants">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Many JavaScript style guides suggest capitalizing constant names. Personally, I rarely see this convention used where I thought it should be. This was because my definition of a constant was a bit off. I decided to do a bit of digging and become a bit more familiar with this convention.</p><h4 id="how-do-we-define-the-term-constant-">How do we define the term “constant”?</h4><p>In programming, a constant it something that doesn’t change.</p><blockquote><a href="https://en.wikipedia.org/wiki/Constant_(computer_programming)" rel="noopener">It is a value that cannot be altered by the program during normal execution</a>.</blockquote><p>So, does JavaScript gives us a way to declare a value that can’t be changed? Before we answer this, let’s look at the roots of this convention.</p><h4 id="the-capitalization-convention-has-roots-in-c">The capitalization convention has roots in C</h4><p>C is a compiled language. This means that another program converts all of your code into machine code before it runs.</p><p>JavaScript, on the other hand, is an interpreted language. An interpreter reads your code, line-by-line, as it runs.</p><p>The difference between compilation and interpretation plays a role in how we declare constant values in C.</p><p>In C, I can declare a variable like this:</p><p><code>int hoursInDay = 24;</code></p><p>Or, a constant like this:</p><p><code>#define hoursInDay 24</code></p><p>The second example is called a <strong>symbolic constant</strong>. Symbolic constants can be a sequence of characters, a numeric constant, or a string. These are also called primitive values. The primitive values in JavaScript are strings, numbers, booleans, null, undefined, symbol (not to be confused with symbolic constants) and big int.</p><p>Now, let’s revisit compilation.</p><p>Before compilation, there is a pre-compilation phase. Here, the pre-compiler replaces all instances of symbolic constants with the respective value. The compiler never knows that the programmer wrote <code>hoursInDay</code>. It only sees the number <code>24</code>.</p><p>Capitalization helps the programmer see these truly constant values.</p><p><code>#define HOURS_IN_DAY 24</code></p><h4 id="javascript-constants-are-different-than-symbolic-constants">JavaScript constants are different than symbolic constants</h4><p>Before ES6, we stored most values in variables, even those values that you wanted to remain constant.</p><p>Capitalization helped us see values we wanted to remain constant.</p><pre><code class="language-js">var HOURS_IN_DAY = 24;
var hoursRemaining = currentHour - HOURS_IN_DAY;
var MY_NAME = 'Brandon';
MY_NAME = ... // oops don't want to do this.</code></pre><p>ES6 introduced the declaration <code>const </code>which isn’t a “constant” in the purest sense.</p><p>ES6 added the terms <code>const</code> and <code>let</code> as ways to create variables with different intentions.</p><p>With those two terms, you may think that we either:</p><ol><li>don’t need to capitalize anything since we can clearly see which variables are intended to remain the same, or</li><li>we should capitalize everything that we declare with <code>const</code>.</li></ol><p>By definition, <code>const</code> creates a constant that is a read-only reference to a value. This does not mean the value it holds is immutable. It only says that <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="noopener">the variable identifier cannot be reassigned</a>.</p><p>In other words, some <code>const</code> references can change.</p><pre><code class="language-js">const firstPerson = {
favoriteNumber: 10,
};
const secondPerson = firstPerson;
console.log(secondPerson.favoriteNumber); //10
firstPerson.favoriteNumber +=1;
console.log(secondPerson.favoriteNumber); //11</code></pre><p>The above example shows that the declaration <code>const</code> doesn’t ensure that the variable is immutable.</p><p><code>const</code> only prevents us from trying to reassign the variable name. It doesn’t stop the object property from changing. Remember: objects are pass-by-reference.</p><pre><code class="language-js">// "TypeError: Assignment to constant variable."secondPerson = 'something else';
const secondPerson = 'Me'
secondPerson = 'something else';</code></pre><p>So, for JavaScript, we have to go beyond merely looking for a <code>const</code> declaration. We need to ask two questions to determine if a variable is a constant:</p><ol><li>Is the value of the variable primitive?</li><li>Do we intend to keep the variable name pointing at the same value throughout our program?</li></ol><p>If the answer is yes to both, we should declare the variable with <code>const</code> and may capitalize the name.</p><p>Notice I said “may.” The spirit of this convention comes from different languages that had actual constants. JavaScript doesn’t. At least in the purest sense. This may be why you see this convention less often than you might expect. <a href="https://github.com/airbnb/javascript/#naming--uppercase" rel="noopener">Airbnb has a great section in their style guide with their take here.</a></p><p>The <strong>key takeaway</strong> is to recognize defining a constant in JavaScript has to include the programmer's intentions.</p><p>In addition, not every convention from one language makes sense in a different language. Finally, I can only imagine many conventions were used long before IDEs had the capabilities they have today. I’m convinced my IDE takes pleasure in telling me I’m wrong. It happens a lot.</p><p>Thanks for reading!</p><p>woz</p><p>Follow me on <a href="https://twitter.com/Brandonwoz" rel="noopener">Twitter.</a></p><h4 id="notes">Notes</h4><ul><li>You may wonder why I didn’t use <code>PI</code> in any of these examples. Acronyms– especially two-letter acronyms–tend to be either always capitalized or always lowercase by convention.</li></ul>
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
