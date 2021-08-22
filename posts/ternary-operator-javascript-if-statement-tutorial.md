---
card: "/images/default.jpg"
tags: [JavaScript]
description: This tutorial will help you learn how to replace an if/else s
author: "Milad E. Fahmy"
title: "Ternary Operator JavaScript If Statement Tutorial"
created: "2021-08-15T19:27:28+02:00"
modified: "2021-08-15T19:27:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Ternary Operator JavaScript If Statement Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/js-ternary.png 300w,
/news/content/images/size/w600/2021/01/js-ternary.png 600w,
/news/content/images/size/w1000/2021/01/js-ternary.png 1000w,
/news/content/images/size/w2000/2021/01/js-ternary.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/js-ternary.png" alt="Ternary Operator JavaScript If Statement Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This tutorial will help you learn how to replace an <code>if/else</code> statement with a more concise shorthand syntax called the ternary operator.</p>
<p>The conditional operator – also known as the ternary operator – is an alternative form of the <code>if/else</code> statement that helps you to write conditional code blocks in a more concise way.</p>
<p>The syntax for the conditional operator looks like this:</p>
<figcaption>conditional operator basic syntax</figcaption>
</figure>
<p>First, you need to write a <em>conditional expression</em> that evaluates into either <code>true</code> or <code>false</code>. If the expression returns true, JavaScript will execute the code you write on the left side of the colon operator (<code>:</code>) when it returns false, the code on the right side of the colon operator is executed.</p>
<p>To understand how it works, let's compare it with a regular <code>if/else</code> statement. Let's say you have a small program that assigns different exam grades depending on your exam score:</p>
<ul>
<li>When you have a score higher than 80, you assign "A" as the grade.</li>
<li>Else, you assign "B" as the grade.</li>
</ul>
<p>Here's one way to write the program: </p>
let grade;
if(score &gt;= 80){
grade = "A";
} else {
grade = "B";
}
console.log(`Your exam grade is ${grade}`);</code></pre>
<figcaption>A regular if/else statement</figcaption>
</figure>
<p>Alternatively, you can write the above code using the ternary operator as follows:</p>
let grade = score &gt;= 80 ? "A" : "B";
console.log(`Your exam grade is ${grade}`);</code></pre>
<figcaption>A ternary operator replacing if/else statement</figcaption>
</figure>
<p>And there you go. The ternary operator shorthand looks way more concise and shorter than a regular <code>if/else</code> statement.</p>
<p>But what if your code requires multiple <code>if/else</code> statements? What if you add "C" and "D" grades into the evaluation?</p>
let grade;
if(score &gt;= 80){
grade = "A";
} else if (score &gt;= 70) {
grade = "B";
} else if (score &gt;= 60) {
grade = "C";
} else {
grade = "D";
}
console.log(`Your exam grade is ${grade}`);</code></pre>
<figcaption>Multiple if/else statements in a program</figcaption>
</figure>
<p>No worries! You can write multiple ternary operators to replace the code above like this:</p>
let grade = score &gt;= 80 ? "A"
: score &gt;= 70 ? "B"
: score &gt;= 60 ? "C"
: "D";
console.log(`Your exam grade is ${grade}`);</code></pre>
<figcaption>Multiple ternary operators in action</figcaption>
</figure>
<p>However, it's not recommended to replace multiple <code>if/else</code> statements with multiple ternary operators because it makes the code harder to read in the future. It's best to stick with either <code>if/else</code> or <code>switch</code> statements for such cases.</p>
<h2 id="thanks-for-reading-this-tutorial">Thanks for reading this tutorial</h2>
<p>I hope it has helped you to understand how the ternary operator works. If you enjoy this tutorial, you may want check out my website at <a href="https://sebhastian.com">sebhastian.com</a> for more JavaScript goodies.</p>
<p>Also, I have a <a href="https://sebhastian.com/newsletter/">free weekly newsletter</a> about web development tutorials (mostly JavaScript related).</p>
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
