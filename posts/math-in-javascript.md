---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg"
tags: [Math]
description: Math is one of JavaScript's global or standard built-in objec
author: "Milad E. Fahmy"
title: "JavaScript Math Functions Explained"
created: "2021-08-15T19:31:17+02:00"
modified: "2021-08-15T19:31:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-math tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Math Functions Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc6740569d1a4ca398d.jpg" alt="JavaScript Math Functions Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="math"><strong>Math</strong></h2>
<p><code>Math</code> is one of JavaScript's global or standard built-in objects, and can be used anywhere you can use JavaScript. It contains useful constants like π and Euler’s constant and functions such as <code>floor()</code>, <code>round()</code>, and <code>ceil()</code>.</p>
<p>In this article, we'll look at examples of many of those functions. But first, let's learn more about the <code>Math</code> object.</p>
<h3 id="example"><strong>Example</strong></h3>
<p>The following example shows how to use the <code>Math</code> object to write a function that calculates the area of a circle:</p><pre><code class="language-javascript">function calculateCircleArea(radius) {
return Math.PI * Math.pow(radius, 2);
}
calculateCircleArea(1); // 3.141592653589793</code></pre>
<h2 id="math-max"><strong>Math Max</strong></h2>
<p><code>Math.max()</code> is a function that returns the largest value from a list of numeric values passed as parameters. If a non-numeric value is passed as a parameter, <code>Math.max()</code> will return <code>NaN</code>.</p>
<p>An array of numeric values can be passed as a single parameter to <code>Math.max()</code> using either <code>spread (...)</code> or <code>apply</code>. Either of these methods can, however, fail when the amount of array values gets too high.</p>
<h3 id="syntax"><strong>Syntax</strong></h3><pre><code class="language-js">Math.max(value1, value2, value3, ...);</code></pre>
<h3 id="parameters"><strong>Parameters</strong></h3>
<p>Numbers, or limited array of numbers.</p>
<h3 id="return-value"><strong>Return Value</strong></h3>
<p>The greatest of given numeric values, or <code>NaN</code> if any given value is non-numeric.</p>
<h3 id="examples"><strong>Examples</strong></h3>
<p><em>Numbers As Parameters</em></p><pre><code class="language-js">Math.max(4, 13, 27, 0, -5); // returns 27</code></pre>
<p><em>Invalid Parameter</em></p><pre><code class="language-js">Math.max(4, 13, 27, 'eight', -5); // returns NaN</code></pre>
<p><em>Array As Parameter, Using Spread(…)</em></p><pre><code class="language-js">let numbers = [4, 13, 27, 0, -5];
Math.max(...numbers); // returns 27</code></pre>
<p><em>Array As Parameter, Using Apply</em></p><pre><code class="language-js">let numbers = [4, 13, 27, 0, -5];
Math.max.apply(null, numbers); // returns 27</code></pre>
<h2 id="math-min">Math Min</h2>
<p>The Math.min() function returns the smallest of zero or more numbers.</p>
<p>You can pass it any number of arguments.</p><pre><code class="language-javascript">Math.min(7, 2, 9, -6);
// returns -6</code></pre>
<h2 id="math-pi">Math PI</h2>
<p><code>Math.PI</code> is a static property of the Math object and is defined as the ratio of a circle’s circumference to its diameter. Pi is approximately 3.14149, and is often represented by the Greek letter π.</p>
<h2 id="examples-1"><strong>Examples</strong></h2><pre><code class="language-js">Math.PI \\ 3.141592653589793</code></pre>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" rel="nofollow">MDN</a></p>
<h2 id="math-pow"><strong>Math Pow</strong></h2>
<p><code>Math.pow()</code> returns the value of a number to the power of another number.</p>
<h4 id="syntax-1"><strong>Syntax</strong></h4>
<p><code>Math.pow(base, exponent)</code>, where <code>base</code> is the base number and <code>exponent</code> is the number by which to raise the <code>base</code>.</p>
<p><code>pow()</code> is a static method of <code>Math</code>, therefore it is always called as <code>Math.pow()</code> rather than as a method on another object.</p>
<h4 id="examples-2"><strong>Examples</strong></h4><pre><code class="language-js">Math.pow(5, 2); // 25
Math.pow(7, 4); // 2401
Math.pow(9, 0.5); // 3
Math.pow(-8, 2); // 64
Math.pow(-4, 3); // -64</code></pre>
<h4></h4>
<h2 id="math-sqrt"><strong>Math Sqrt</strong></h2>
<p>The function <code>Math.sqrt()</code> returns the square root of a number.</p>
<p>If a negative number is entered, <code>NaN</code> is returned.</p>
<p><code>sqrt()</code> is a static method of <code>Math</code>, therefore it is always called as <code>Math.sqrt()</code> rather than as a method on another object.</p>
<h4 id="syntax-2"><strong>Syntax</strong></h4>
<p><code>Math.sqrt(x)</code>, where <code>x</code> is a number.</p>
<h4 id="examples-3"><strong>Examples</strong></h4><pre><code class="language-js">Math.sqrt(25); // 5
Math.sqrt(169); // 13
Math.sqrt(3); // 1.732050807568
Math.sqrt(1); // 1
Math.sqrt(-5); // NaN</code></pre>
<h4></h4>
<h2 id="math-trunc"><strong>Math Trunc</strong></h2>
<p><code>Math.trunc()</code> is a method of the Math standard object that returns only the integer part of a given number by simply removing fractional units. This results in an overall rounding towards zero. Any input that is not a number will result in an output of NaN.</p>
<p>Careful: This method is an ECMAScript 2015 (ES6) feature and thus is not supported by older browsers.</p>
<h3 id="examples-4"><strong>Examples</strong></h3><pre><code class="language-javascript">Math.trunc(0.1)   //  0
Math.trunc(1.3)   //  1
Math.trunc(-0.9)  // -0
Math.trunc(-1.5)  // -1
Math.trunc('foo') // NaN</code></pre>
<h2 id="math-ceil">Math Ceil</h2>
<p>The <code>Math.ceil()</code> is a method of the Math standard object that rounds a given number upwards to the next integer. Take note that for negative numbers this means that the number will get rounded “towards 0” instead of the number of greater absolute value (see examples).</p>
<h3 id="examples-5"><strong>Examples</strong></h3><pre><code class="language-javascript">Math.ceil(0.1)  //  1
Math.ceil(1.3)  //  2
Math.ceil(-0.9) // -0
Math.ceil(-1.5) // -1</code></pre>
<h2 id="math-floor">Math Floor</h2>
<p><code>Math.floor()</code> is a method of the Math standard object that rounds a given number downwards to the next integer. Take note that for negative numbers this means that the number will get rounded “away from 0” instead of to the number of smaller absolute value since <code>Math.floor()</code> returns the largest integer less than or equal to the given number.</p>
<h3 id="examples-6"><strong>Examples</strong></h3><pre><code class="language-javascript">Math.floor(0.9)  //  0
Math.floor(1.3)  //  1
Math.floor(0.5)  //  0
Math.floor(-0.9) // -1
Math.floor(-1.3) // -2</code></pre>
<h3 id="an-application-of-math-floor-how-to-create-a-javascript-slot-machine">An application of math.floor: How to Create a JavaScript Slot Machine</h3>
<p>For this exercise, we have to generate three random numbers using a specific formula and not the general one. <code>Math.floor(Math.random() * (3 - 1 + 1)) + 1;</code></p><pre><code class="language-text">slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;</code></pre>
<h3 id="another-example-finding-the-remainder">Another example: Finding the remainder</h3>
<h3 id="example-1">Example</h3><pre><code class="language-text">5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)</code></pre>
<h3 id="usage">Usage</h3>
<p>In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by 2.</p><pre><code class="language-text">17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)</code></pre>
<p><strong><strong>Note</strong></strong> Do not confuse it with <em>modulus</em> <code>%</code> does not work well with negative numbers.</p>
<h2 id="more-math-related-articles-">More math-related articles:</h2>
<ul>
<li><a href="https://guide.freecodecamp.org/mathematics/converting-am-pm-to-24-hour-clock/">Converting an am/pm clock to 24 hour time</a></li>
<li><a href="/news/simpsons-rule/">Simpson's rule</a></li>
<li><a href="https://guide.freecodecamp.org/mathematics/hexagon/">What is a Hexagon?</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
