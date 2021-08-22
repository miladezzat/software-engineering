---
card: "/images/default.jpg"
tags: [JavaScript]
description: As a coding instructor, it’s my duty to send programmers out
author: "Milad E. Fahmy"
title: "Imperative vs Declarative Programming – the Difference Explained in Plain English"
created: "2021-08-15T19:28:19+02:00"
modified: "2021-08-15T19:28:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Imperative vs Declarative Programming – the Difference Explained in Plain English</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/imperative-vs-declarative-programming-difference.jpg 300w,
/news/content/images/size/w600/2020/10/imperative-vs-declarative-programming-difference.jpg 600w,
/news/content/images/size/w1000/2020/10/imperative-vs-declarative-programming-difference.jpg 1000w,
/news/content/images/size/w2000/2020/10/imperative-vs-declarative-programming-difference.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/imperative-vs-declarative-programming-difference.jpg" alt="Imperative vs Declarative Programming – the Difference Explained in Plain English">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As a coding instructor, it’s my duty to send programmers out into the world thinking in new ways. A major shift in thinking occurs when we switch from imperative to declarative programming.</p>
<p>Once my students have learned basic JavaScript, we go over functional programming and the array methods used in a declarative coding style. This is where their brains start to pop and sizzle and melt like marshmallows over a fire.</p>
<h2 id="what-is-imperative-programming">What is Imperative Programming?</h2>
<p>As a beginner, you've probably mostly coded in an imperative style: you give the computer a set of instructions to follow and the computer does what you want in an easy-to-follow sequence.</p>
<p>Imagine we have a list of the world’s most commonly-used passwords:</p><pre><code class="language-javascript">const passwords = [
"123456",
"password",
"admin",
"freecodecamp",
"mypassword123",
];</code></pre>
<p>Our app is going to check the user’s password on sign up and not allow them to create a password that is from this list.</p>
<p>But before we do that, we want to refine this list. We already have code that doesn’t allow the user to sign up with a password less than 9 characters long. So we can reduce this list to just passwords that are 9 characters or more to speed up our check.</p>
<p>Imperatively, we would write:</p><pre><code class="language-javascript">// using the passwords constant from above
let longPasswords = [];
for (let i = 0; i &lt; passwords.length; i++) {
const password = passwords[i];
if (password.length &gt;= 9) {
longPasswords.push(password);
}
}
console.log(longPasswords); // logs ["freecodecamp", "mypassword123"];</code></pre>
<ol>
<li>We create an empty list called <code>longPasswords</code>.</li>
<li>Then we write a loop that will run as many times as there are passwords in the original <code>passwords</code> list.</li>
<li>Then we get the password at the index of the loop iteration we are presently on.</li>
<li>Then we check if that password is greater than or equal to 9 characters long.</li>
<li>If it is, we put it into the <code>longPasswords</code> list.</li>
</ol>
<p>One of imperative programming’s strengths is the fact that it is easy to reason about. Like a computer, we can follow along step by step.</p>
<h2 id="what-is-declarative-programming">What is Declarative Programming?</h2>
<p>But there's another way of thinking about coding – as a process of constantly defining what things are. This is referred to as declarative programming.</p>
<p>Imperative and declarative programming achieve the same goals. They are just different ways of thinking about code. They have their benefits and drawbacks and there are times to use both.</p>
<p>Though imperative programming is easier to reason about for beginners, declarative programming allows us to write more readable code that reflects what exactly we want to see. Combined with <a href="https://github.com/10xcodecamp/javascript-conventions-and-code-style" rel="noopener">good variable names</a>, it can be a powerful tool.</p>
<p>So instead of giving the computer step by step instructions, we declare what it is we want and we assign this to the result of some process.</p><pre><code class="language-javascript">// using the passwords constant from above
const longPasswords = passwords.filter(password =&gt; password.length &gt;= 9);
console.log(longPasswords); // logs ["freecodecamp", "mypassword123"];</code></pre>
<p>The list of <code>longPasswords</code> is defined (or declared) as the list of <code>passwords</code> filtered for only passwords greater than or equal to 9 characters.</p>
<p>The functional programming methods in JavaScript enable us to cleanly declare things.</p>
<ul>
<li><strong>This is a list of passwords.</strong></li>
<li><strong>This is a list of only long passwords.</strong> (After running <code>filter</code>.)</li>
<li><strong>This is a list of passwords with ids.</strong> (After running <code>map</code>.)</li>
<li><strong>This is a single password.</strong> (After running <code>find</code>.)</li>
</ul>
<p>One of declarative programming’s strengths is that it forces us to ask what we want first. It is in the naming of these new things that our code becomes expressive and explicit. </p>
<p>And when our fellow developers come along and look at our code, they can find bugs more easily:</p>
<p>“You call this variable ‘index’ which makes me expect a number, but I see it is the result of <code>filter</code> which returns an array. What’s up with that?”</p>
<p>I encourage learners to write declarative code as often as possible, constantly defining (and refactoring to redefine) what things are. </p>
<p>Rather than hold an entire imperative process in your head, you can hold a more tangible <strong>thing</strong> in your head with a clear definition.</p>
<p><em>Mike Zetlow is the Lead Instructor at </em><a href="https://www.10xcodecamp.com/" rel="noopener"><em>10x Code Camp</em></a><em>.</em></p>
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
