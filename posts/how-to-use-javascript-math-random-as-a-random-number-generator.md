---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg"
tags: [JavaScript]
description: Often while developing projects, you will find yourself looki
author: "Milad E. Fahmy"
title: "How to Use JavaScript Math.random() as a Random Number Generator"
created: "2021-08-15T19:28:43+02:00"
modified: "2021-08-15T19:28:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-math ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use JavaScript Math.random() as a Random Number Generator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c990f740569d1a4ca1d9d.jpg" alt="How to Use JavaScript Math.random() as a Random Number Generator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Often while developing projects, you will find yourself looking for ways to generate random numbers. </p>
<p>In this guide, you will learn how to generate a random number using the <code>Math.random()</code> method by building a mini dice game.</p>
<h2 id="the-math-random-method">The Math.random() method</h2>
<p>The <code>Math</code> object in JavaScript is a built-in object that has properties and methods for performing mathematical calculations. </p>
<p>A common use of the <code>Math</code> object is to create a random number using the <code>random()</code> method.</p><pre><code class="language-js">const randomValue = Math.random();</code></pre>
<p>But the <code>Math.random()</code> method doesn't actually return a whole number. Instead, it returns a floating-point value between 0 (inclusive) and 1 (exclusive). Also, note that the value returned from <code>Math.random()</code> is pseudo-random in nature. </p>
<p>Random numbers generated by <code>Math.random()</code> might seem random, but those numbers will repeat and eventually display a non-random pattern over a period of time. </p>
<p>This is because algorithmic random number generation can never be truly random in nature. This is why we call them pseudo-random number generators (PRNGs).</p>
<p>To learn more about the <code>Math.random()</code> method you can check out <a href="/news/javascript-math-random-method-explained/">this</a> guide.</p>
<h2 id="random-number-generator-function">Random Number Generator Function</h2>
<p>Now let's use the <code>Math.random()</code> method to create a function that will return a random integer between two values (inclusive).</p><pre><code class="language-js">const getRandomNumber = (min, max) =&gt; {
return Math.floor(Math.random() * (max - min + 1)) + min;
};</code></pre>
<p>Let's break down the logic here.</p>
<p>The <code>Math.random()</code> method will return a floating-point number between 0 and 1 (exclusive). </p>
<p>So the intervals would be as follows:</p><pre><code>[0 .................................... 1)
[min .................................... max)</code></pre>
<p>To factor the second interval, subtract min from both ends. So that would give you an interval between 0 and <code>max-min</code>.</p><pre><code>[0 .................................... 1)
[0 .................................... max - min)</code></pre>
<p>So now, to get a random value you would do the following:</p><pre><code>const x = Math.random() * (max - min)</code></pre>
<p>Here <code>x</code> is the random value.</p>
<p>Currently, <code>max</code> is excluded from the interval. To make it inclusive, add 1. Also, you need to add the <code>min</code> back that was subtracted earlier to get a value between <code>[min, max)</code>.</p><pre><code class="language-js">const x = Math.random() * (max - min + 1) + min</code></pre>
<p>Alright, so now the last step remaining is to make sure that <code>x</code> is always an integer.</p><pre><code class="language-js">const x = Math.floor(Math.random() * (max - min + 1)) + min</code></pre>
<p>You could use the <code>Math.round()</code> method instead of <code>floor()</code>, but that would give you a non-uniform distribution. This means that both <code>max</code> and <code>min</code> will have half a chance to come out as an outcome. Using <code>Math.floor()</code> will give you perfectly even distribution.</p>
<p>So now that you have a fair understanding of how a random generation works, let's use this function to simulate rolling dice.</p>
<h2 id="the-rolling-dice-game">The Rolling Dice Game</h2>
<p>In this section, we will create a really simple mini dice game. Two players enter their name and will roll the dice. The player whose dice has a higher number will win the round. </p>
<p>First, create a function <code>rollDice</code> that simulates the action for rolling the dice. </p>
<p>Inside the function body, call the <code>getRandomNumber()</code> function with <code>1</code> and <code>6</code> as the arguments. This will give you any random number between 1 and 6 (both inclusive) just like how real dice would work. </p><pre><code class="language-js">const rollDice = () =&gt; getRandomNumber(1, 6);</code></pre>
<p>Next, create two input fields and a button as shown below:</p><pre><code class="language-html">&lt;div id="app"&gt;
&lt;div&gt;
&lt;input id="player1" placeholder="Enter Player 1 Name" /&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;input id="player2" placeholder="Enter Player 2 Name" /&gt;
&lt;/div&gt;
&lt;button id="roll"&gt;Roll Dice&lt;/button&gt;
&lt;div id="results"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>When the 'Roll Dice' button is clicked, get the player names from the input fields and call the <code>rollDice()</code> function for each player.</p><pre><code class="language-js">const getRandomNumber = (min, max) =&gt; Math.floor(Math.random() * (max - min + 1)) + min;
const rollDice = () =&gt; getRandomNumber(1, 6);
document.getElementById("roll").addEventListener("click", function () {
// fetch player names from the input fields
const player1 = document.getElementById("player1").value;
const player2 = document.getElementById("player2").value;
// roll dice for both players
const player1Score = rollDice();
const player2Score = rollDice();
// initialize empty string to store result
let result = "";
// determine the result
if (player1Score &gt; player2Score) {
result = `${player1} won the round`;
} else if (player2Score &gt; player1Score) {
result = `${player2} won the round`;
} else {
result = "This round is tied";
}
// display the result on the page
document.getElementById("results").innerHTML = `
&lt;p&gt;${player1} =&gt; ${player1Score}&lt;/p&gt;
&lt;p&gt;${player2} =&gt; ${player2Score}&lt;/p&gt;
&lt;p&gt;${result}&lt;/p&gt;
`;
});
</code></pre>
<p>You can validate the players' name fields and prettify the markup with some CSS. For the purpose of brevity, I'm keeping it simple for this guide.</p>
<p>That is it. You can check out the demo <a href="https://5zmdd.csb.app/">here</a>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>So generating random numbers in JavaScript is not so random after all. All we are doing is taking in some input numbers, using some Math, and spitting out a pseudo-random number. </p>
<p>For most browser-based applications and games, this much randomness is enough and serves its purpose. </p>
<p>That's it for this guide. Stay safe and keep coding like a beast.</p>
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