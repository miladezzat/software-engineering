---
card: "https://cdn-media-1.freecodecamp.org/images/1*FVSUmSQEEsagXaKa_ajtvA.png"
tags: [JavaScript]
description: "Recursion can be tough to understand — especially for new pro"
author: "Milad E. Fahmy"
title: "How Recursion Works — Explained with Flowcharts and a Video"
created: "2021-08-16T11:49:49+02:00"
modified: "2021-08-16T11:49:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-technology tag-startup no-image no-image">
<header class="post-full-header">
<h1 class="post-full-title">How Recursion Works — Explained with Flowcharts and a Video</h1>
</header>
<section class="post-full-content">
<div class="post-content">
let pile = main_box.make_a_pile_to_look_through();
while (pile is not empty) {
box = pile.grab_a_box();
for (item in box) {
if (item.is_a_box()) {
pile.append(item)
} else if (item.is_a_key()) {
console.log("found the key!")
}
}
}}</code></pre><p>The second way uses recursion. Remember, recursion is where a function calls itself. Here’s the second way in pseudocode.</p><pre><code class="language-javascript">function look_for_key(box) {
for (item in box) {
if (item.is_a_box()) {
look_for_key(item);
} else if (item.is_a_key()) {
console.log("found the key!")
}
}
}</code></pre><p>Both approaches accomplish the same thing. The main purpose for using the recursive approach is that once you understand it, it can be clearer to read. There is actually no performance benefit to using recursion. The iterative approach with loops can sometimes be faster. But mainly the simplicity of recursion is sometimes preferred.</p><p>Also, since a lot of algorithms use recursion, it’s important to understand how it works. If recursion still doesn’t seem simple to you, don’t worry: I’m going to go over a few more examples.</p><h3 id="base-case-and-recursive-case">Base case and recursive case</h3><p>Something you have to look out for when writing a recursive function is an infinite loop. This is when the function keeps calling itself… and never stops calling itself!</p><p>For instance, you may want to write a count down function. You could write it recursively in JavaScript like this:</p><pre><code class="language-javascript">// WARNING: This function contains an infinite loop!
function countdown(i) {  console.log(i)  countdown(i - 1)}
console.log(i)  if (i &lt;= 1) {  // base case
return;
} else {     // recursive case
countdown(i - 1);
}
}
if (x == 1) {
return 1;
} else {
return x * fact(x-1);
}
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
