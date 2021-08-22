---
card: "/images/default.jpg"
tags: [JavaScript]
description: "There are times in JavaScript where you might consider using a switch statement instead of an if else statement."
author: "Milad E. Fahmy"
title: "JavaScript Switch Case – JS Switch Statement Example"
created: "2021-08-15T19:15:55+02:00"
modified: "2021-08-15T19:15:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Switch Case – JS Switch Statement Example</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/08/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg 300w,
/news/content/images/size/w600/2021/08/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/08/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/08/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg" alt="JavaScript Switch Case – JS Switch Statement Example">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are times in JavaScript where you might consider using a <code>switch</code> statement instead of an <code>if else</code> statement. &nbsp;</p>
<p><code>switch</code> statements can have a cleaner syntax over complicated <code>if else</code> statements. </p>
<p>Take a look at the example below – instead of using this long <code>if else</code> statement, you might choose to go with an easier to read <code>switch</code> statement. </p><pre><code class="language-js">const pet = "dog";
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
<p>In this article, I'll explain what switch statements are and how they work. I'll also help you figure out if they're a good option to use in your code.</p>
<h2 id="what-is-a-switch-statement">What is a Switch Statement? &nbsp;</h2>
<p>In programming, a <code>switch</code> statement is a control-flow statement that tests the value of an <code>expression</code> against multiple cases. </p>
<p>This is the basic syntax for a <code>switch</code> statement:</p><pre><code class="language-js">switch (expression) {
case 1:
//this code will execute if the case matches the expression
break;
case 2:
//this code will execute if the case matches the expression
break;
case 3:
//this code will execute if the case matches the expression
break;
default:
//this code will execute if none of the cases match the expression
break;
}</code></pre>
<p>The computer will go through &nbsp;the <code>switch</code> statement and check for strict equality <code>===</code> between the <code>case</code> and <code>expression</code>. &nbsp;If one of the cases matches the <code>expression</code>, then the code inside that <code>case</code> clause will execute. </p><pre><code class="language-js">switch (expression) {
case 1:
//this code will execute if the case matches the expression
break;
case 2:
//this code will execute if the case matches the expression
break;
}</code></pre>
<p>If none of the cases match the expression, then the <code>default</code> clause will be executed. </p><pre><code class="language-js">  default:
//this code will execute if none of the cases match the expression
break;</code></pre>
<p>If multiples cases match the <code>switch</code> statement, then the first <code>case</code> that matches the <code>expression</code> will be used. </p>
<p><code>break</code> statements will break out of the <code>switch</code> when the <code>case</code> is matched. If <code>break</code> statements are not present, then the computer will continue through the <code>switch</code> statement even if a match is found. </p>
<p>If <code>return</code> statements are present in the <code>switch</code>, then you don't need a <code>break</code> statement. </p>
<h2 id="example-of-switch-statements-in-javascript">Example of Switch Statements in JavaScript</h2>
<p>In this example, we are comparing <code>"oboe"</code> to the cases. <code>"oboe"</code> would match the third <code>case</code> clause and would print to the console "I play the oboe". </p><pre><code class="language-js">switch ("oboe") {
case "trumpet":
console.log("I play the trumpet");
break;
case "flute":
console.log("I play the flute");
break;
case "oboe":
console.log("I play the oboe");
break;
default:
console.log("I don't play an instrument. Sorry");
break;
}</code></pre>
<p>If I were to change the expression to <code>"no instrument"</code>, then the <code>default</code> clause would execute and the message printed to the console would be "I don't play an instrument. Sorry".</p><pre><code class="language-js">switch ("no instrument") {
case "trumpet":
console.log("I play the trumpet");
break;
case "flute":
console.log("I play the flute");
break;
case "oboe":
console.log("I play the oboe");
break;
default:
console.log("I don't play an instrument. Sorry");
break;
}</code></pre>
<h2 id="missing-break-statements">Missing Break Statements </h2>
<p>In this example, the match would be <code>case</code> 2. But without a <code>break</code> statement, the computer will continue onto <code>case</code> 3 and the <code>default</code> clause. </p>
<p>You should see three <code>console.log</code> statements because a <code>break</code> statement was not included. </p><pre><code class="language-js">switch (2) {
case 1:
console.log("Number 1 was chosen");
case 2:
console.log("Number 2 was chosen");
case 3:
console.log("Number 3 was chosen");
default:
console.log("No number was chosen");
}</code></pre>
<h2 id="where-to-place-the-default-clause">Where to Place the Default Clause</h2>
<p>Standard convention is to place the <code>default</code> as the last clause. But you can place it before other cases too.</p><pre><code class="language-js">const food = "nuts";
switch (food) {
case "cake":
console.log("I like cake");
break;
case "pizza":
console.log("I like pizza");
break;
default:
console.log("I like all foods");
break;
case "ice cream":
console.log("I like ice cream");
break;
}</code></pre>
<p>The computer will still go through each of the cases and find a match. Since the variable <code>food</code> does not match any of the cases, then the <code>default</code> case will be executed. </p>
<h2 id="multiple-cases-for-one-operation">Multiple Cases for One Operation</h2>
<p>There may be times where you have one operation that will be the same for multiple cases. </p>
<p>Instead of writing out the same <code>console.log</code> for each case, we can omit the <code>break</code> statements and place a singular operation after the group of cases. </p>
<p>The message, "This country is in Europe." will print to the console if <code>country</code> matches any of the cases of <code>"France"</code>, <code>"Spain"</code>, <code>"Ireland"</code> or <code>"Poland"</code>. </p><pre><code class="language-js">const country = "Ireland";
switch (country) {
case "France":
case "Spain":
case "Ireland":
case "Poland":
console.log("This country is in Europe.");
break;
case "United States":
default:
console.log("This country is not in Europe.");
}</code></pre>
<h2 id="block-scope-and-switch-statements">Block Scope and Switch Statements</h2>
<p>This example will produce an error message, because the <code>message</code> variable has already been declared and you cannot have the same variable name in the same block scope. </p><pre><code class="language-js">const errand = "Going Shopping";
switch (errand) {
case "Going to the Dentist":
let message = "I hate going to the dentist";
console.log(message);
break;
case "Going Shopping":
let message = "I love to shop";
console.log(message);
break;
default:
console.log("No errands");
break;
}</code></pre>
<p>In order to get rid of that error message, the cases need to be wrapped in a set of curly braces. </p><pre><code class="language-js">const errand = "Going Shopping";
switch (errand) {
case "Going to the Dentist": {
let message = "I hate going to the dentist";
console.log(message);
break;
}
case "Going Shopping": {
let message = "I love to shop";
console.log(message);
break;
}
default: {
console.log("No errand");
break;
}
}</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>Using a <code>switch</code> statement can be an alternative to an <code>if else</code> statement. A <code>switch</code> statement compares the value of an <code>expression</code> to multiple cases. </p>
<p><code>switch</code> statements will check for strict equality. In this example, since &nbsp;<code>"2"!== 2</code>, the <code>default</code> clause will execute.</p><pre><code class="language-js">switch (2) {
case "2":
console.log("Number 2 in a string");
break;
case "3":
console.log("Number 3 in a string");
break;
default:
console.log("Number not present");
break;
}</code></pre>
<p><code>break</code> statements will break out of the <code>switch</code> when the <code>case</code> is matched. If <code>break</code> statements are not present, then the computer will continue through the <code>switch</code> statement even if a match is found. </p>
<p>I hope you enjoyed this article on <code>switch</code> statements. </p>
<p></p>
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
