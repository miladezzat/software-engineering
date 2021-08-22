---
card: "/images/default.jpg"
tags: [JavaScript]
description: "There will be times where you will want to write commands that handle different decisions in your code."
author: "Milad E. Fahmy"
title: "JavaScript If-Else and If-Then – JS Conditional Statements"
created: "2021-08-15T19:15:54+02:00"
modified: "2021-08-15T19:15:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-conditionals tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript If-Else and If-Then – JS Conditional Statements</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/08/walling-e_MdMMKrgdY-unsplash.jpg 300w,
/news/content/images/size/w600/2021/08/walling-e_MdMMKrgdY-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/08/walling-e_MdMMKrgdY-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/08/walling-e_MdMMKrgdY-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/walling-e_MdMMKrgdY-unsplash.jpg" alt="JavaScript If-Else and If-Then – JS Conditional Statements">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There will be times where you will want to write commands that handle different decisions in your code. </p>
<p>For example, if you are coding a bot, you can have it respond with different messages based on a set of commands it receives. </p>
<p>In this article, I will explain what an <code>if...else</code> statement is and provide code examples. We will also look at the conditional (ternary) operator which you can use as a shorthand for the <code>if...else</code> statement. </p>
<h2 id="what-is-an-if-else-statement-in-javascript">What is an if...else statement in JavaScript?</h2>
<p>The <code>if...else</code> is a type of conditional statement that will execute a block of code when the condition in the <code>if</code> statement is <code>truthy</code>. If the condition is <code>falsy</code>, then the <code>else</code> block will be executed. </p>
<p><code>Truthy</code> and <code>falsy</code> values are converted to <code>true</code> or <code>false</code> in &nbsp;<code>if</code> statements.</p><pre><code class="language-js">if (condition is true) {
// code is executed
} else {
// code is executed
}</code></pre>
<p>Any value that is not defined as <code>falsy</code> would be considered <code>truthy</code> in JavaScript. </p>
<p>Here is a list of &nbsp;<code>falsy</code> values:</p>
<ul>
<li>false</li>
<li>0 (zero)</li>
<li>-0 (negative zero)</li>
<li>0n (BigInt zero)</li>
<li><code>""</code>, <code>''</code>, <code>``</code> (empty string)</li>
<li>null</li>
<li>undefined</li>
<li>NaN (not a number)</li>
</ul>
<h2 id="examples-of-if-else-statements-in-javascript">Examples of if...else statements in JavaScript</h2>
<p>In this example, the condition for the <code>if</code> statement is <code>true</code> so the message printed to the console would be "Nick is an adult."</p><pre><code class="language-js">const age = 18;
if (age &gt;= 18) {
console.log("Nick is an adult.");
} else {
console.log("Nick is a child.");
}</code></pre>
<p>But if I change the <code>age</code> variable to be less than 18, then the condition would be <code>false</code> and the code would execute the <code>else</code> block instead. </p><pre><code class="language-js">const age = 12;
if (age &gt;= 18) {
console.log("Nick is an adult.");
} else {
console.log("Nick is a child.");
}</code></pre>
<h2 id="examples-of-multiple-conditions-if-else-if-else-statements-in-javascript">Examples of multiple conditions (if...else if...else statements) in JavaScript</h2>
<p>There will be times where you want to test multiple conditions. That is where the <code>else if</code> block comes in. </p><pre><code class="language-js">if (condition 1 is true) {
// code is executed
} else if (condition 2 is true) {
// code is executed
} else {
// code is executed
}</code></pre>
<p>When the <code>if</code> statement is <code>false</code>, the computer will move onto the <code>else if</code> statement. If that is also <code>false</code>, then it will move onto the <code>else</code> block. </p>
<p>In this example, the <code>else if</code> block would be executed because Alice is between the ages of 18 and 21. </p><pre><code class="language-js">const age = 18;
if (age &lt; 18) {
console.log("Alice is under 18 years old.");
} else if (age &gt;= 18 &amp;&amp; age &lt;= 21) {
console.log("Alice is between the ages of 18 and 21.");
} else {
console.log("Alice is over 21 years old.");
}</code></pre>
<h2 id="when-to-use-switch-statements-over-if-else-statements">When to use switch statements over if...else statements? </h2>
<p>There are times in JavaScript where you <a href="/news/javascript-switch-case-js-switch-statement-example/">might consider using a <code>switch</code> statement</a> instead of an <code>if else</code> statement.</p>
<p><code>switch</code> statements can have a cleaner syntax over complicated <code>if else</code> statements.</p>
<p>Take a look at the example below – instead of using this long <code>if else</code> statement, you might choose to go with an easier to read <code>switch</code> statement.</p><pre><code class="language-js">const pet = "dog";
if (pet === "lizard") {
console.log("I own a lizard");
} else if (pet === "dog") {
console.log("I own a dog");
} else if (pet === "cat") {
console.log("I own a cat");
} else if (pet === "snake") {
console.log("I own a snake");
} else if (pet === "parrot") {
console.log("I own a parrot");
} else {
console.log("I don't own a pet");
}</code></pre><pre><code class="language-js">const pet = "dog";
switch (pet) {
case "lizard":
console.log("I own a lizard");
break;
case "dog":
console.log("I own a dog");
break;
case "cat":
console.log("I own a cat");
break;
case "snake":
console.log("I own a snake");
break;
case "parrot":
console.log("I own a parrot");
break;
default:
console.log("I don't own a pet");
break;
}</code></pre>
<p><code>switch</code> statements will not be appropriate to use in all situations. But if you feel like the <code>if else</code> statements are long and complicated, then a <code>switch</code> statement could be an alternative option. </p>
<h2 id="the-logical-and-operator-and-if-else-statements-in-javascript">The logical AND (&amp;&amp;) operator and if...else statements in JavaScript</h2>
<p>In the logical AND (<code>&amp;&amp;</code>) operator, if both conditions are <code>true</code>, then the <code>if</code> block will be executed. If one or both of the conditions are <code>false</code>, then the <code>else</code> block will be executed. </p>
<p>In this example, since age is greater than 16 and the <code>ownsCar</code> variable is <code>true</code>, the <code>if</code> block will run. The message printed to the console will be "Jerry is old enough to drive and has his own car."</p><pre><code class="language-js">const age = 17;
const ownsCar = true;
if (age &gt;= 16 &amp;&amp; ownsCar) {
console.log("Jerry is old enough to drive and has his own car.");
} else {
console.log("Jerry does not drive.");
}</code></pre>
<p>If I change the <code>age</code> variable to be less than 16, then both conditions are no longer <code>true</code> and the <code>else</code> block would be executed instead. </p><pre><code class="language-js">const age = 13;
const ownsCar = true;
if (age &gt;= 16 &amp;&amp; ownsCar) {
console.log("Jerry is old enough to drive and has his own car.");
} else {
console.log("Jerry does not drive.");
}</code></pre>
<h2 id="the-logical-or-operator-and-if-else-statements-in-javascript">The logical OR (||) operator and if...else statements in JavaScript</h2>
<p>In the logical OR (<code>||</code>) operator, if one or both of the conditions are <code>true</code>, then the code inside the <code>if</code> statement will execute. </p>
<p>In this example, even though the <code>isSale</code> variable is set to <code>false</code>, the code inside the <code>if</code> block will still execute because the <code>boyfriendIsPaying</code> variable is set to <code>true</code>. </p><pre><code class="language-js">const boyfriendIsPaying = true;
const isSale = false;
if (boyfriendIsPaying || isSale) {
console.log("Jesse will go shopping.");
} else {
console.log("Jesse will not go shopping.");
}</code></pre>
<p>If I were to change the value of the <code>boyfriendIsPaying</code> variable to <code>false</code>, then the <code>else</code> block would execute because both conditions are <code>false</code>. </p><pre><code class="language-js">const boyfriendIsPaying = false;
const isSale = false;
if (boyfriendIsPaying || isSale) {
console.log("Jesse will go shopping.");
} else {
console.log("Jesse will not go shopping.");
}</code></pre>
<h2 id="the-logical-not-operator-and-if-else-statements-in-javascript">The logical NOT (!) operator and if...else statements in JavaScript</h2>
<p>The logical NOT (<code>!</code>) operator will take something that is <code>true</code> and make it <code>false</code>. It will also take something that is <code>false</code> and make it <code>true</code>.</p>
<p>We can modify the example from earlier to use the <code>!</code> operator to make the <code>boyfriendIsPaying</code> variable &nbsp;<code>false</code>. Since both conditions are <code>false</code>, the <code>else</code> block would be executed. </p><pre><code class="language-js">const boyfriendIsPaying = true;
const isSale = false;
if (!boyfriendIsPaying || isSale) {
console.log("Jesse will go shopping.");
} else {
console.log("Jesse will not go shopping.");
}</code></pre>
<h2 id="conditional-ternary-operator-in-javascript">Conditional (ternary) operator in JavaScript</h2>
<p>If you have a short <code>if else</code> statement, then you might choose to go with the ternary operator. &nbsp;The word ternary means something composed of three parts.</p>
<p>This is the basic syntax for a ternary operator:</p><pre><code class="language-js">condition ? if condition is true : if condition is false
</code></pre>
<p>The condition goes before the <code>?</code> mark and if it is <code>true</code>, then the code between the <code>?</code> mark and <code>:</code> would execute. If the condition is <code>false</code>, then the code after the &nbsp;<code>:</code> would execute. </p>
<p>In this example, since age is greater than 18, then the message to the console would be "Can vote". </p><pre><code class="language-js">const age = 32;
const citizen = age &gt;= 18 ? "Can vote" : "Cannot vote";
console.log(citizen);
</code></pre>
<p>This is what the code would look like using an <code>if else</code> statement:</p><pre><code class="language-js">const age = 32;
let citizen;
if (age &gt;= 18) {
citizen = "Can vote";
} else {
citizen = "Cannot vote";
}
console.log(citizen);</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p><code>if else</code> statements will execute a block of code when the condition in the <code>if</code> statement is <code>truthy</code>. If the condition is <code>falsy</code>, then the <code>else</code> block will be executed. </p>
<p>There will be times where you want to test multiple conditions and you can use an <code>if...else if...else</code> statement. </p>
<p>If you feel like the <code>if else</code> statement is long and complicated, then a <code>switch</code> statement could be an alternative option. </p>
<p>Using logical operators to test multiple conditions can replace nested <code>if else</code> statements. </p>
<p>The ternary operator can be used to write shorter code for a simple <code>if else</code> statement. </p>
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
