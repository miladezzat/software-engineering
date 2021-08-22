---
card: "https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg"
tags: [JavaScript]
description: "by Joanna Gaudyn"
author: "Milad E. Fahmy"
title: "An overview of JavaScript iterators"
created: "2021-08-16T11:34:47+02:00"
modified: "2021-08-16T11:34:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-education tag-programming tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">An overview of JavaScript iterators</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wEv6UnPpMocWKCoH2x1HSA.jpeg" alt="An overview of JavaScript iterators">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
do something;
}</code></pre><p>Let’s take an example:</p><pre><code class="language-js">const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i &lt; numbers.length; i++) {
console.log(numbers[i]);
for (const index in numbers) {
console.log(numbers[index]);
}</code></pre><p>Prints:</p><blockquote>0<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9</blockquote><p>The main disadvantage of this solution is that we still need to use an index to access the elements of the array.</p><p>Another thing that can be problematic is that <code>for ... in</code> loops loop over all enumerable properties. What does it mean in practice? If you need to add an additional method to your object (in our case: array), this method will also appear in your loop.</p><p>Have a look at this example:</p><pre><code class="language-js">Array.prototype.decimalfy = function() {
for (let i = 0; i &lt; this.length; i++) {
this[i] = this[i].toFixed(4);
}
};
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const index in numbers) {
console.log(numbers[index]);
for (const number of numbers) {
console.log(number);
}</code></pre><p>Prints:</p><blockquote>0<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9</blockquote><p>One big advantage is that we no longer need an index and can access elements or our array directly. It makes the <code>for ... of</code> loop the most compact of the whole family of for loops.</p><p>In addition, the <code>for ... of</code> loop mechanism allows for a loop break, depending on your condition. Have a look at this example:</p><pre><code class="language-js">const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
if (number % 2 !== 0) {
continue;
}
console.log(number);
}</code></pre><p>Prints:</p><blockquote>0<br> 2<br> 4<br> 6<br> 8</blockquote><p>Furthermore, adding new methods to objects doesn’t affect the <code>for ... of</code> loop:</p><pre><code class="language-js">Array.prototype.decimalfy = function() {
for (i = 0; i &lt; this.length; i++) {
this[i] = this[i].toFixed(4);
}
};
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
console.log(number);
}</code></pre><p>Prints:</p><blockquote>0<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9</blockquote><p>This makes the <code>for ... of</code> loop the most potent of all!</p><h4 id="side-note-the-foreach-loop">Side note: the forEach loop</h4><p>What might also be worth mentioning is a <code>forEach</code> loop. Note, however, that <code>forEach()</code> is an array method and therefore cannot be used on other JavaScript objects. This method can be useful if your case meets two conditions: you want to loop over an array and you don’t need to stop the loop before the end of that array:</p><pre><code class="language-js">const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(number) {
console.log(number);
});</code></pre><p>Prints:</p><blockquote>0<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9</blockquote><p>I hope these examples helped you wrap your head around all the different mechanics of iteration in JavaScript.</p><p>Are you just starting your journey with programming? Here’s some articles that might interest you as well:</p><ul><li><a href="https://medium.freecodecamp.org/is-a-coding-bootcamp-something-for-you-974c3b5bd3b2" rel="noopener">Is a coding bootcamp something for you?</a></li><li><a href="https://medium.com/datadriveninvestor/is-career-change-really-possible-c29c9a0d791c" rel="noopener">Is career change really possible?</a></li><li><a href="https://medium.com/@aska.gaudyn/why-ruby-is-a-great-language-to-start-programming-with-2f17e0c2907a" rel="noopener">Why Ruby is a great language to start programming with</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
