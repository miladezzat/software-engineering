---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Let s look at the name, and consider how we talk about things"
author: "Milad E. Fahmy"
title: "Higher Order Functions in JavaScript – Reach New Heights in Your JS Code"
created: "2021-08-16T10:04:00+02:00"
modified: "2021-08-16T10:04:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-software-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Higher Order Functions in JavaScript – Reach New Heights in Your JS Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/spacex-uj3hvdfQujI-unsplash.jpg 300w,
/news/content/images/size/w600/2021/03/spacex-uj3hvdfQujI-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/03/spacex-uj3hvdfQujI-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/03/spacex-uj3hvdfQujI-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/spacex-uj3hvdfQujI-unsplash.jpg" alt="Higher Order Functions in JavaScript – Reach New Heights in Your JS Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="what-is-a-higher-order-function">What is a Higher Order Function?</h2><p>Let's look at the name, and consider how we talk about things.</p><p>We dig <em>down</em> into the details, but sometimes we want a <em>high</em> level view of things.</p><p>This high level view indicates more abstraction. We go down into details, but we elevate into a more abstract viewpoint.</p><p>Higher Order Functions are exactly that: A higher level of abstraction than your typical functions.</p><h3 id="so-how-can-we-define-a-higher-order-function">So how can we define a Higher Order Function?</h3><p>Higher Orders Functions are functions that perform operations on other functions.</p><p>In this definition, <em>operations</em> can mean taking one or more functions as an argument OR returning a function as the result. It doesn't have to do both. Doing one or the other qualifies a function as a higher order function.</p><h2 id="let-s-look-at-an-example-of-a-higher-order-function">Let's look at an example of a higher order function</h2><p>Without a higher order function, if I want to add one to each number in an array and display it in the console, I can do the following:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
function addOne(array) {
for (let i = 0; i &lt; array.length; i++) {
console.log(array[i] + 1);
}
}
addOne(numbers);
</code></pre><p>The function <code>addOne()</code> accepts an array, adds one to each number in the array, and displays it in the console. The original values remain unchanged in the array, but the function is doing something for each value.</p><p>However, using what may be the most common higher order function, <code>forEach()</code>, we can simplify this process:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) =&gt; console.log(number + 1));
</code></pre><p><strong>Whoa.</strong></p><p>We've abstracted the function definition and call in the original code above to just one line!</p><p>We apply <code>forEach()</code> to the array named "numbers." There is an anonymous function at the beginning of <code>forEach()</code> that accepts each element of the array - one at a time. </p><p>With the array named numbers, it makes sense to name each element of the array "number" although we could have named it "element" or "el" or even "whatever".</p><p>The anonymous arrow function logs the value of the number + 1 to the console.</p><p>The higher order function <code>forEach()</code> applies a function to each element of an array.</p><h2 id="another-higher-order-function-example">Another higher order function example</h2><p>Without a higher order function, if I wanted to create a new array that only has the odd numbers from the numbers array, I could do the following:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
function isOdd(array, oddArr = []) {
for (let i = 0; i &lt; array.length; i++) {
if (array[i] % 2 !== 0) {
oddArr.push(array[i]);
}
}
return oddArr;
}
const oddArray = isOdd(numbers);
console.log(oddArray);
</code></pre><p>The function <code>isOdd()</code> accepts an array and has a second optional parameter for an array. If not provided, the array has a default value of an empty array. </p><p>The function checks each number in the array to see if it is an odd number. If the number is odd, it adds it to the array from the second parameter. After all numbers are checked, the array from the second parameter is returned.</p><p>So yeah, that's a lot to keep track of.</p><p>If we use the higher order function, <code>filter()</code>, we can abstract so much:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
const oddArray = numbers.filter((number) =&gt; number % 2 !== 0);
console.log(oddArray);
</code></pre><p><strong>YES!</strong></p><p>Pardon me for getting excited, but that is a big improvement.</p><p>We start by defining the new array <code>oddArray</code> because applying <code>filter()</code> will create a new array. The higher order function will return each element that meets the condition set within the anonymous function it receives. The anonymous function is once again applied to each element in the numbers array.</p><h2 id="since-we-re-on-a-roll-another-higher-order-function-example">Since We're On A Roll – Another Higher Order Function Example</h2><p>We've come this far, and I think you're starting to see why higher order functions are so good!</p><p>Let's look at another example...</p><p>Back in our <code>forEach()</code> example, we added one to each number in the array and logged each value to the console. But what about creating a new array with those new values instead? Without a higher order function, I could do the following:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
function addOneMore(array, newArr = []) {
for (let i = 0; i &lt; array.length; i++) {
newArr.push(array[i] + 1);
}
return newArr;
}
const newArray = addOneMore(numbers);
console.log(newArray);
</code></pre><p>The function <code>addOneMore()</code> once again accepts an array and has an array as a second parameter which has a default value of empty. One is added to each element of the existing numbers array and the result is pushed to the new array which is returned.</p><p>We abstract this away with the higher order function, <code>map()</code>:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map((number) =&gt; number + 1);
console.log(numbers);
</code></pre><p>We start by defining the newArray because <code>map()</code> creates a new array. Like <code>forEach()</code>, <code>map()</code> applies an anonymous function to each element of the numbers array. However, <code>map()</code> creates a new array in the process.</p><h2 id="just-one-more-example">Just One More Example</h2><p>What if we wanted to find the total of all values in the numbers array?</p><p>Without a higher order function, I could do this:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
function getTotalValue(array) {
let total = 0;
for (let i = 0; i &lt; array.length; i++) {
total += array[i];
}
return total;
}
const totalValue = getTotalValue(numbers);
console.log(totalValue);
</code></pre><p>The function <code>getTotalValue()</code> accepts an array, defines the total variable as equal to zero, and loops through the array while adding each element to the total variable. Finally, it returns the total.</p><p>With the higher order function <code>reduce()</code>, this process can yet again be abstracted away:</p><pre><code>const numbers = [1, 2, 3, 4, 5];
const totalValue = numbers.reduce((sum, number) =&gt; sum + number);
console.log(totalValue);
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
