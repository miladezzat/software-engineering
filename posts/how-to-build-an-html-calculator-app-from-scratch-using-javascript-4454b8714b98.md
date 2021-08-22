---
card: "https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png"
tags: [JavaScript]
description: This is an epic article where you learn how to build a calcul
author: "Milad E. Fahmy"
title: "How to build an HTML calculator app from scratch using JavaScript"
created: "2021-08-15T19:46:05+02:00"
modified: "2021-08-15T19:46:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tutorial tag-tech tag-programming tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">How to build an HTML calculator app from scratch using JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png" alt="How to build an HTML calculator app from scratch using JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is an epic article where you learn how to build a calculator from scratch. We’ll focus on the JavaScript you need to write—how to think about building the calculator, how to write the code, and eventually, how to clean up your code.</p>
<p>By the end of the article, you should get a calculator that functions exactly like an iPhone calculator (without the <code>+/-</code> and percentage functionalities).</p>
<h3 id="the-prerequisites">The prerequisites</h3>
<p>Before you attempt follow through the lesson, please make sure you have a decent command of JavaScript. Minimally, you need to know these things:</p>
<ol>
<li><a href="https://zellwk.com/blog/js-if-else" rel="noopener">If/else statements</a></li>
<li><a href="https://zellwk.com/blog/js-for-loops" rel="noopener">For loops</a></li>
<li><a href="https://zellwk.com/blog/js-functions" rel="noopener">JavaScript functions</a></li>
<li><a href="https://zellwk.com/blog/es6/#arrow-functions" rel="noopener">Arrow functions</a></li>
<li><code>&amp;&amp;</code> and <code>||</code> operators</li>
<li>How to change the text with the <code>textContent</code> property</li>
<li>How to add event listeners with the event delegation pattern</li>
</ol>
<h3 id="before-you-begin">Before you begin</h3>
<p>I urge you to try and build the calculator yourself before following the lesson. It’s good practice, because you’ll train yourself to think like a developer.</p>
<p>Come back to this lesson once you’ve tried for one hour (doesn’t matter whether you succeed or fail. When you try, you think, and that’ll help you absorb the lesson in double quick time).</p>
<p>With that, let’s begin by understanding how a calculator works.</p>
<h3 id="building-the-calculator">Building the calculator</h3>
<p>First, we want to build the calculator.</p>
<p>The calculator consist of two parts: the display and the keys.</p>
&lt;div class=”calculator__display”&gt;0&lt;/div&gt;
&lt;div class=”calculator__keys”&gt; … &lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>We can use CSS Grid to make the keys, since they’re arranged in a grid-like format. This has already been done for you in the starter file. You can find the starter file at <a href="https://codepen.io/zellwk/pen/pLgmGL" rel="noopener">this pen</a>.</p><pre><code class="language-css">.calculator__keys {
display: grid;
/* other necessary CSS */
}</code></pre>
<p>To help us identify operator, decimal, clear, and equal keys, we’re going to supply a data-action attribute that describes what they do.</p><pre><code class="language-html">&lt;div class="calculator__keys"&gt;
&lt;button class="key--operator" data-action="add"&gt;+&lt;/button&gt;
&lt;button class="key--operator" data-action="subtract"&gt;-&lt;/button
&lt;button class="key--operator" data-action="multiply"&gt;&amp;times;&lt;/button&gt;
&lt;button class="key--operator" data-action="divide"&gt;÷&lt;/button
&lt;button&gt;7&lt;/button&gt;
&lt;button&gt;8&lt;/button&gt;
&lt;button&gt;9&lt;/button&gt;
&lt;button&gt;4&lt;/button&gt;
&lt;button&gt;5&lt;/button&gt;
&lt;button&gt;6&lt;/button&gt;
&lt;button&gt;1&lt;/button&gt;
&lt;button&gt;2&lt;/button&gt;
&lt;button&gt;3&lt;/button&gt;
&lt;button&gt;0&lt;/button&gt;
&lt;button data-action="decimal"&gt;.&lt;/button&gt;
&lt;button data-action="clear"&gt;AC&lt;/button&gt;
&lt;button class="key--equal" data-action="calculate"&gt;=&lt;/button&gt;
&lt;/div&gt;</code></pre>
<h3 id="listening-to-key-presses">Listening to key-presses</h3>
<p>Five things can happen when a person gets hold of a calculator. They can hit:</p>
<ol>
<li>a number key (0–9)</li>
<li>an operator key (+, -, ×, ÷)</li>
<li>the decimal key</li>
<li>the equals key</li>
<li>the clear key</li>
</ol>
<p>The first steps to building this calculator are to be able to (1) listen for all keypresses and (2) determine the type of key that is pressed. In this case, we can use an event delegation pattern to listen, since keys are all children of <code>.calculator__keys</code>.</p><pre><code class="language-js">const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)
keys.addEventListener(‘click’, e =&gt; {
if (e.target.matches(‘button’)) {
// Do something
}
})</code></pre>
<p>Next, we can use the <code>data-action</code> attribute to determine the type of key that is clicked.</p><pre><code class="language-js">const key = e.target
const action = key.dataset.action</code></pre>
<p>If the key does not have a <code>data-action</code> attribute, it must be a number key.</p><pre><code class="language-js">if (!action) {
console.log('number key!')
}</code></pre>
<p>If the key has a <code>data-action</code> that is either <code>add</code>, <code>subtract</code>, <code>multiply</code> or <code>divide</code>, we know the key is an operator.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
console.log('operator key!')
}</code></pre>
<p>If the key’s <code>data-action</code> is <code>decimal</code>, we know the user clicked on the decimal key.</p>
<p>Following the same thought process, if the key’s <code>data-action</code> is <code>clear</code>, we know the user clicked on the clear (the one that says AC) key. If the key’s <code>data-action</code> is <code>calculate</code>, we know the user clicked on the equals key.</p><pre><code class="language-js">if (action === 'decimal') {
console.log('decimal key!')
}
if (action === 'clear') {
console.log('clear key!')
}
if (action === 'calculate') {
console.log('equal key!')
}</code></pre>
<p>At this point, you should get a <code>console.log</code> response from every calculator key.</p>
<h3 id="building-the-happy-path">Building the happy path</h3>
<p>Let’s consider what the average person would do when they pick up a calculator. <strong>This “what the average person would do” is called the happy path</strong>.</p>
<p>Let’s call our average person Mary.</p>
<p>When Mary picks up a calculator, she could hit any of these keys:</p>
<ol>
<li>a number key (0–9)</li>
<li>an operator key (+, -, ×, ÷)</li>
<li>the decimal key</li>
<li>the equal key</li>
<li>the clear key</li>
</ol>
<p>It can be overwhelming to consider five types of keys at once, so let’s take it step by step.</p>
<h3 id="when-a-user-hits-a-number-key">When a user hits a number key</h3>
<p>At this point, if the calculator shows 0 (the default number), the target number should replace zero.</p>
<p>If the calculator shows a non-zero number, the target number should be appended to the displayed number.</p>
<p>Here, we need to know two things:</p>
<ol>
<li>The number of the key that was clicked</li>
<li>The current displayed number</li>
</ol>
<p>We can get these two values through the <code>textContent</code> property of the clicked key and <code>.calculator__display</code> , respectively.</p><pre><code class="language-js">const display = document.querySelector('.calculator__display')
keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) {
const key = e.target
const action = key.dataset.action
const keyContent = key.textContent
const displayedNum = display.textContent
// ...
}
})</code></pre>
<p><strong>If the calculator shows 0, we want to replace the calculator’s display with the clicked key.</strong> We can do so by replacing the display’s textContent property.</p><pre><code class="language-js">if (!action) {
if (displayedNum === '0') {
display.textContent = keyContent
}
}</code></pre>
<p><strong>If the calculator shows a non-zero number, we want to append the clicked key to the displayed number.</strong> To append a number, we concatenate a string.</p><pre><code class="language-js">if (!action) {
if (displayedNum === '0') {
display.textContent = keyContent
} else {
display.textContent = displayedNum + keyContent
}
}</code></pre>
<p>At this point, Mary may click either of these keys:</p>
<ol>
<li>A decimal key</li>
<li>An operator key</li>
</ol>
<p>Let’s say Mary hits the decimal key.</p>
<h3 id="when-a-user-hits-the-decimal-key">When a user hits the decimal key</h3>
<p>When Mary hits the decimal key, a decimal should appear on the display. If Mary hits any number after hitting a decimal key, the number should be appended on the display as well.</p>
<p>To create this effect, we can concatenate <code>.</code> to the displayed number.</p><pre><code class="language-js">if (action === 'decimal') {
display.textContent = displayedNum + '.'
}</code></pre>
<p>Next, let’s say Mary continues her calculation by hitting an operator key.</p>
<h3 id="when-a-user-hits-an-operator-key">When a user hits an operator key</h3>
<p>If Mary hits an operator key, the operator should be highlighted so Mary knows the operator is active.</p>
<p>To do so, we can add the <code>is-depressed</code> class to the operator key.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
key.classList.add('is-depressed')
}</code></pre>
<p>Once Mary has hit an operator key, she’ll hit another number key.</p>
<h3 id="when-a-user-hits-a-number-key-after-an-operator-key">When a user hits a number key after an operator key</h3>
<p>When Mary hits a number key again, the previous display should be replaced with the new number. The operator key should also release its pressed state.</p>
<p>To release the pressed state, we remove the <code>is-depressed</code> class from all keys through a <code>forEach</code> loop:</p><pre><code class="language-js">keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) {
const key = e.target
// ...
// Remove .is-depressed class from all keys
Array.from(key.parentNode.children)
.forEach(k =&gt; k.classList.remove('is-depressed'))
}
})</code></pre>
<p>Next, we want to update the display to the clicked key. Before we do this, we need a way to tell if the previous key is an operator key.</p>
<p>One way to do this is through a custom attribute. Let’s call this custom attribute <code>data-previous-key-type</code>.</p><pre><code class="language-js">const calculator = document.querySelector('.calculator')
// ...
keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) {
// ...
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
key.classList.add('is-depressed')
// Add custom attribute
calculator.dataset.previousKeyType = 'operator'
}
}
})</code></pre>
<p>If the <code>previousKeyType</code> is an operator, we want to replace the displayed number with clicked number.</p><pre><code class="language-js">const previousKeyType = calculator.dataset.previousKeyType
if (!action) {
if (displayedNum === '0' || previousKeyType === 'operator') {
display.textContent = keyContent
} else {
display.textContent = displayedNum + keyContent
}
}</code></pre>
<p>Next, let’s say Mary decides to complete her calculation by hitting the equals key.</p>
<h3 id="when-a-user-hits-the-equals-key">When a user hits the equals key</h3>
<p>When Mary hits the equals key, the calculator should calculate a result that depends on three values:</p>
<ol>
<li>The <strong>first number</strong> entered into the calculator</li>
<li>The <strong>operator</strong></li>
<li>The <strong>second number</strong> entered into the calculator</li>
</ol>
<p>After the calculation, the result should replace the displayed value.</p>
<p>At this point, we only know the <strong>second number</strong> — that is, the currently displayed number.</p><pre><code class="language-js">if (action === 'calculate') {
const secondValue = displayedNum
// ...
}</code></pre>
<p>To get the <strong>first number</strong>, we need to store the calculator’s displayed value before we wipe it clean. One way to save this first number is to add it to a custom attribute when the operator button gets clicked.</p>
<p>To get the <strong>operator</strong>, we can also use the same technique.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
// ...
calculator.dataset.firstValue = displayedNum
calculator.dataset.operator = action
}</code></pre>
<p>Once we have the three values we need, we can perform a calculation. Eventually, we want the code to look something like this:</p><pre><code class="language-js">if (action === 'calculate') {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
display.textContent = calculate(firstValue, operator, secondValue)
}</code></pre>
<p>That means we need to create a <code>calculate</code> function. It should take in three parameters: the first number, the operator, and the second number.</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
// Perform calculation and return calculated value
}</code></pre>
<p>If the operator is <code>add</code>, we want to add values together. If the operator is <code>subtract</code>, we want to subtract the values, and so on.</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
let result = ''
if (operator === 'add') {
result = n1 + n2
} else if (operator === 'subtract') {
result = n1 - n2
} else if (operator === 'multiply') {
result = n1 * n2
} else if (operator === 'divide') {
result = n1 / n2
}
return result
}</code></pre>
<p>Remember that <code>firstValue</code> and <code>secondValue</code> are strings at this point. If you add strings together, you’ll concatenate them (<code>1 + 1 = 11</code>).</p>
<p>So, before calculating the result, we want to convert strings to numbers. We can do so with the two functions <code>parseInt</code> and <code>parseFloat</code>.</p>
<ul>
<li><code>parseInt</code> converts a string into an <strong>integer</strong>.</li>
<li><code>parseFloat</code> converts a string into a <strong>float</strong> (this means a number with decimal places).</li>
</ul>
<p>For a calculator, we need a float.</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
let result = ''
if (operator === 'add') {
result = parseFloat(n1) + parseFloat(n2)
} else if (operator === 'subtract') {
result = parseFloat(n1) - parseFloat(n2)
} else if (operator === 'multiply') {
result = parseFloat(n1) * parseFloat(n2)
} else if (operator === 'divide') {
result = parseFloat(n1) / parseFloat(n2)
}
return result
}</code></pre>
<p>That’s it for the happy path!</p>
<p>You can grab the source code for the happy path through <a href="http://calculator-part-1" rel="noopener">this link</a> (scroll down and enter your email address in the box, and I’ll send the source codes right to your mailbox).</p>
<h3 id="the-edge-cases">The edge cases</h3>
<p>The hapy path isn’t enough. To build a calculator that’s robust, you need to make your calculator resilient to weird input patterns. To do so, you have to imagine a troublemaker who tries to break your calculator by hitting keys in the wrong order. Let’s call this troublemaker Tim.</p>
<p>Tim can hit these keys in any order:</p>
<ol>
<li>A number key (0–9)</li>
<li>An operator key (+, -, ×, ÷)</li>
<li>The decimal key</li>
<li>The equals key</li>
<li>The clear key</li>
</ol>
<h3 id="what-happens-if-tim-hits-the-decimal-key">What happens if Tim hits the decimal key</h3>
<p>If Tim hits a decimal key when the display already shows a decimal point, nothing should happen.</p>
<p>Here, we can check that the displayed number contains a <code>.</code> with the <code>includes</code> method.</p>
<p><code>includes</code> checks strings for a given match. If a string is found, it returns <code>true</code>; if not, it returns <code>false</code>.</p>
<p><strong>Note</strong>: <code>includes</code> is case sensitive.</p><pre><code class="language-js">// Example of how includes work.
const string = 'The hamburgers taste pretty good!'
const hasExclaimation = string.includes('!')
console.log(hasExclaimation) // true</code></pre>
<p>To check if the string already has a dot, we do this:</p><pre><code class="language-js">// Do nothing if string has a dot
if (!displayedNum.includes('.')) {
display.textContent = displayedNum + '.'
}</code></pre>
<p>Next, if Tim hits the decimal key after hitting an operator key, the display should show <code>0.</code>.</p>
<p>Here we need to know if the previous key is an operator. We can tell by checking the the custom attribute, <code>data-previous-key-type</code>, we set in the previous lesson.</p>
<p><code>data-previous-key-type</code> is not complete yet. To correctly identify if <code>previousKeyType</code> is an operator, we need to update <code>previousKeyType</code> for each clicked key.</p><pre><code class="language-js">if (!action) {
// ...
calculator.dataset.previousKey = 'number'
}
if (action === 'decimal') {
// ...
calculator.dataset.previousKey = 'decimal'
}
if (action === 'clear') {
// ...
calculator.dataset.previousKeyType = 'clear'
}
if (action === 'calculate') {
// ...
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>Once we have the correct <code>previousKeyType</code>, we can use it to check if the previous key is an operator.</p><pre><code class="language-js">if (action === 'decimal') {
if (!displayedNum.includes('.')) {
display.textContent = displayedNum + '.'
} else if (previousKeyType === 'operator') {
display.textContent = '0.'
}
calculator.dataset.previousKeyType = 'decimal'
}</code></pre>
<h3 id="what-happens-if-tim-hits-an-operator-key">What happens if Tim hits an operator key</h3>
<p>If Tim hits an operator key first, the operator key should light up. (We’ve already covered for this edge case, but how? See if you can identify what we did).</p>
<p>Second, nothing should happen if Tim hits the same operator key multiple times. (We’ve already covered for this edge case as well).</p>
<p><strong>Note:</strong> if you want to provide better UX, you can show the operator getting clicked on repeatedly with some CSS changes. We didn’t do it here, but see if you can program that yourself as an extra coding challenge.</p>
<p>Third, if Tim hits another operator key after hitting the first operator key, the first operator key should be released. Then, the second operator key should be depressed. (We covered for this edge case too — but how?).</p>
<p>Fourth, if Tim hits a number, an operator, a number and another operator, in that order, the display should be updated to a calculated value.</p>
<p>This means we need to use the <code>calculate</code> function when <code>firstValue</code>, <code>operator</code> and <code>secondValue</code> exist.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
// Note: It's sufficient to check for firstValue and operator because secondValue always exists
if (firstValue &amp;&amp; operator) {
display.textContent = calculate(firstValue, operator, secondValue)
}
key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.firstValue = displayedNum
calculator.dataset.operator = action
}</code></pre>
<p>Although we can calculate a value when the operator key is clicked for a second time, we have also introduced a bug at this point — additional clicks on the operator key calculates a value when it shouldn’t.</p>
<p>To prevent the calculator from performing a calculation on subsequent clicks on the operator key, we need to check if the <code>previousKeyType</code> is an operator. If it is, we don’t perform a calculation.</p><pre><code class="language-js">if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator'
) {
display.textContent = calculate(firstValue, operator, secondValue)
}</code></pre>
<p>Fifth, after the operator key calculates a number, if Tim hits on a number, followed by another operator, the operator should continue with the calculation, like this: <code>8 - 1 = 7</code>, <code>7 - 2 = 5</code>, <code>5 - 3 = 2</code>.</p>
<p>Right now, our calculator cannot make consecutive calculations. The second calculated value is wrong. Here’s what we have: <code>99 - 1 = 98</code>, <code>98 - 1 = 0</code>.</p>
<p>The second value is calculated wrongly, because we fed the wrong values into the <code>calculate</code> function. Let’s go through a few pictures to understand what our code does.</p>
<h3 id="understanding-our-calculate-function">Understanding our calculate function</h3>
<p>First, let’s say a user clicks on a number, 99. At this point, nothing is registered in the calculator yet.</p>
<p>Second, let’s say the user clicks the subtract operator. After they click the subtract operator, we set <code>firstValue</code> to 99. We set also <code>operator</code> to subtract.</p>
<p>Third, let’s say the user clicks on a second value — this time, it’s 1. At this point, the displayed number gets updated to 1, but our <code>firstValue</code>, <code>operator</code> and <code>secondValue</code> remain unchanged.</p>
<p>Fourth, the user clicks on subtract again. Right after they click subtract, before we calculate the result, we set <code>secondValue</code> as the displayed number.</p>
<p>Fifth, we perform the calculation with <code>firstValue</code> 99, <code>operator</code> subtract, and <code>secondValue</code> 1. The result is 98.</p>
<p>Once the result is calculated, we set the display to the result. Then, we set <code>operator</code> to subtract, and <code>firstValue</code> to the previous displayed number.</p>
<p>Well, that’s terribly wrong! If we want to continue with the calculation, we need to update <code>firstValue</code> with the calculated value.</p>
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator'
) {
const calcValue = calculate(firstValue, operator, secondValue)
display.textContent = calcValue
// Update calculated value as firstValue
calculator.dataset.firstValue = calcValue
} else {
// If there are no calculations, set displayedNum as the firstValue
calculator.dataset.firstValue = displayedNum
}
key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action</code></pre>
<p>With this fix, consecutive calculations done by operator keys should now be correct.</p>
<h3 id="what-happens-if-tim-hits-the-equals-key">What happens if Tim hits the equals key?</h3>
<p>First, nothing should happen if Tim hits the equals key before any operator keys.</p>
<p>We know that operator keys have not been clicked yet if <code>firstValue</code> is not set to a number. We can use this knowledge to prevent the equals from calculating.</p><pre><code class="language-js">if (action === 'calculate') {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (firstValue) {
display.textContent = calculate(firstValue, operator, secondValue)
}
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>Second, if Tim hits a number, followed by an operator, followed by a equals, the calculator should calculate the result such that:</p>
<ol>
<li><code>2 + =</code> —&gt; <code>2 + 2 = 4</code></li>
<li><code>2 - =</code> —&gt; <code>2 - 2 = 0</code></li>
<li><code>2 × =</code> —&gt; <code>2 × 2 = 4</code></li>
<li><code>2 ÷ =</code> —&gt; <code>2 ÷ 2 = 1</code></li>
</ol>
<p>We have already taken this weird input into account. Can you understand why? :)</p>
<p>Third, if Tim hits the equals key after a calculation is completed, another calculation should be performed again. Here’s how the calculation should read:</p>
<ol>
<li>Tim hits keys 5–1</li>
<li>Tim hits equal. Calculated value is <code>5 - 1 = 4</code></li>
<li>Tim hits equal. Calculated value is <code>4 - 1 = 3</code></li>
<li>Tim hits equal. Calculated value is <code>3 - 1 = 2</code></li>
<li>Tim hits equal. Calculated value is <code>2 - 1 = 1</code></li>
<li>Tim hits equal. Calculated value is <code>1 - 1 = 0</code></li>
</ol>
<p>Unfortunately, our calculator messes this calculation up. Here’s what our calculator shows:</p>
<ol>
<li>Tim hits key 5–1</li>
<li>Tim hits equal. Calculated value is <code>4</code></li>
<li>Tim hits equal. Calculated value is <code>1</code></li>
</ol>
<h3 id="correcting-the-calculation">Correcting the calculation</h3>
<p>First, let’s say our user clicks 5. At this point, nothing is registered in the calculator yet.</p>
<p>Second, let’s say the user clicks the subtract operator. After they click the subtract operator, we set <code>firstValue</code> to 5. We set also <code>operator</code> to subtract.</p>
<p>Third, the user clicks on a second value. Let’s say it’s 1. At this point, the displayed number gets updated to 1, but our <code>firstValue</code>, <code>operator</code> and <code>secondValue</code> remain unchanged.</p>
<p>Fourth, the user clicks the equals key. Right after they click equals, but before the calculation, we set <code>secondValue</code> as <code>displayedNum</code></p>
<p>Fifth, the calculator calculates the result of <code>5 - 1</code> and gives <code>4</code>. The result gets updated to the display. <code>firstValue</code> and <code>operator</code> get carried forward to the next calculation since we did not update them.</p>
<p>Sixth, when the user hits equals again, we set <code>secondValue</code> to <code>displayedNum</code> before the calculation.</p>
<p>You can tell what’s wrong here.</p>
<p>Instead of <code>secondValue</code>, we want the set <code>firstValue</code> to the displayed number.</p><pre><code class="language-js">if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
}
display.textContent = calculate(firstValue, operator, secondValue)
}
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>We also want to carry forward the previous <code>secondValue</code> into the new calculation. For <code>secondValue</code> to persist to the next calculation, we need to store it in another custom attribute. Let’s call this custom attribute <code>modValue</code> (stands for modifier value).</p><pre><code class="language-js">if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
}
display.textContent = calculate(firstValue, operator, secondValue)
}
// Set modValue attribute
calculator.dataset.modValue = secondValue
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>If the <code>previousKeyType</code> is <code>calculate</code>, we know we can use <code>calculator.dataset.modValue</code> as <code>secondValue</code>. Once we know this, we can perform the calculation.</p><pre><code class="language-js">if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
secondValue = calculator.dataset.modValue
}
display.textContent = calculate(firstValue, operator, secondValue)
}</code></pre>
<p>With that, we have the correct calculation when the equals key is clicked consecutively.</p>
<h3 id="back-to-the-equals-key">Back to the equals key</h3>
<p>Fourth, if Tim hits a decimal key or a number key after the calculator key, the display should be replaced with <code>0.</code> or the new number respectively.</p>
<p>Here, instead of just checking if the <code>previousKeyType</code> is <code>operator</code>, we also need to check if it’s <code>calculate</code>.</p><pre><code class="language-js">if (!action) {
if (
displayedNum === '0' ||
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
) {
display.textContent = keyContent
} else {
display.textContent = displayedNum + keyContent
}
calculator.dataset.previousKeyType = 'number'
}
if (action === 'decimal') {
if (!displayedNum.includes('.')) {
display.textContent = displayedNum + '.'
} else if (
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
) {
display.textContent = '0.'
}
calculator.dataset.previousKeyType = 'decimal'
}</code></pre>
<p>Fifth, if Tim hits an operator key right after the equals key, the calculator should <strong>not</strong> calculate.</p>
<p>To do this, we check if the <code>previousKeyType</code> is <code>calculate</code> before performing calculations with operator keys.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
// ...
if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
) {
const calcValue = calculate(firstValue, operator, secondValue)
display.textContent = calcValue
calculator.dataset.firstValue = calcValue
} else {
calculator.dataset.firstValue = displayedNum
}
// ...
}</code></pre>
<p>The clear key has two uses:</p>
<ol>
<li>All Clear (denoted by <code>AC</code>) clears everything and resets the calculator to its initial state.</li>
<li>Clear entry (denoted by <code>CE</code>) clears the current entry. It keeps previous numbers in memory.</li>
</ol>
<p>When the calculator is in its default state, <code>AC</code> should be shown.</p>
<p>First, if Tim hits a key (any key except clear), <code>AC</code> should be changed to <code>CE</code>.</p>
<p>We do this by checking if the <code>data-action</code> is <code>clear</code>. If it’s not <code>clear</code>, we look for the clear button and change its <code>textContent</code>.</p><pre><code class="language-js">if (action !== 'clear') {
const clearButton = calculator.querySelector('[data-action=clear]')
clearButton.textContent = 'CE'
}</code></pre>
<p>Second, if Tim hits <code>CE</code>, the display should read 0. At the same time, <code>CE</code> should be reverted to <code>AC</code> so Tim can reset the calculator to its initial state.**</p>
display.textContent = 0
key.textContent = 'AC'
calculator.dataset.previousKeyType = 'clear'
}</code></pre>
<p>Third, if Tim hits <code>AC</code>, reset the calculator to its initial state.</p>
<p>To reset the calculator to its initial state, we need to clear all custom attributes we’ve set.</p><pre><code class="language-js">if (action === 'clear') {
if (key.textContent === 'AC') {
calculator.dataset.firstValue = ''
calculator.dataset.modValue = ''
calculator.dataset.operator = ''
calculator.dataset.previousKeyType = ''
} else {
key.textContent = 'AC'
}
display.textContent = 0
calculator.dataset.previousKeyType = 'clear'
}</code></pre>
<p>That’s it — for the edge cases portion, anyway!</p>
<p>You can grab the source code for the edge cases part through <a href="http://calculator-part-2" rel="noopener">this link</a> (scroll down and enter your email address in the box, and I’ll send the source codes right to your mailbox).</p>
<p>At this point, the code we created together is quite confusing. You’ll probably get lost if you try to read the code on your own. Let’s refactor it to make it cleaner.</p>
<h3 id="refactoring-the-code">Refactoring the code</h3>
<p>When you refactor, you’ll often start with the most obvious improvements. In this case, let’s start with <code>calculate</code>.</p>
<p>Before continuing on, make sure you know these JavaScript practices/features. We’ll use them in the refactor.</p>
<ol>
<li><a href="http://blog.timoxley.com/post/47041269194/avoid-else-return-early" rel="noopener">Early returns</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">Ternary operators</a></li>
<li><a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" rel="noopener">Pure functions</a></li>
<li><a href="https://zellwk.com/blog/es6#destructuring" rel="noopener">ES6 Destructuring</a></li>
</ol>
<p>With that, let’s begin!</p>
<h3 id="refactoring-the-calculate-function">Refactoring the calculate function</h3>
<p>Here’s what we have so far.</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
let result = ''
if (operator === 'add') {
result = firstNum + parseFloat(n2)
} else if (operator === 'subtract') {
result = parseFloat(n1) - parseFloat(n2)
} else if (operator === 'multiply') {
result = parseFloat(n1) * parseFloat(n2)
} else if (operator === 'divide') {
result = parseFloat(n1) / parseFloat(n2)
}
return result
}</code></pre>
<p>You learned that we should reduce reassignments as much as possible. Here, we can remove assignments if we return the result of the calculation within the <code>if</code> and <code>else if</code> statements:</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
if (operator === 'add') {
return firstNum + parseFloat(n2)
} else if (operator === 'subtract') {
return parseFloat(n1) - parseFloat(n2)
} else if (operator === 'multiply') {
return parseFloat(n1) * parseFloat(n2)
} else if (operator === 'divide') {
return parseFloat(n1) / parseFloat(n2)
}
}</code></pre>
<p>Since we return all values, we can use <strong>early returns</strong>. If we do so, there’s no need for any <code>else if</code> conditions.</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
if (operator === 'add') {
return firstNum + parseFloat(n2)
}
if (operator === 'subtract') {
return parseFloat(n1) - parseFloat(n2)
}
if (operator === 'multiply') {
return parseFloat(n1) * parseFloat(n2)
}
if (operator === 'divide') {
return parseFloat(n1) / parseFloat(n2)
}
}</code></pre>
<p>And since we have one statement per <code>if</code> condition, we can remove the brackets. (Note: some developers swear by curly brackets, though). Here's what the code would look like:</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
}</code></pre>
<p>Finally, we called <code>parseFloat</code> eight times in the function. We can simplify it by creating two variables to contain float values:</p><pre><code class="language-js">const calculate = (n1, operator, n2) =&gt; {
const firstNum = parseFloat(n1)
const secondNum = parseFloat(n2)
if (operator === 'add') return firstNum + secondNum
if (operator === 'subtract') return firstNum - secondNum
if (operator === 'multiply') return firstNum * secondNum
if (operator === 'divide') return firstNum / secondNum
}</code></pre>
<p>We’re done with <code>calculate</code> now. Don't you think it's easier to read compared to before?</p>
<h3 id="refactoring-the-event-listener">Refactoring the event listener</h3>
<p>The code we created for the event listener is huge. Here’s what we have at the moment:</p><pre><code class="language-js">keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) {
if (!action) { /* ... */ }
if (action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide') {
/* ... */
}
if (action === 'clear') { /* ... */ }
if (action !== 'clear') { /* ... */ }
if (action === 'calculate') { /* ... */ }
}
})</code></pre>
<p>How do you begin refactoring this piece of code? If you don’t know any programming best practices, you may be tempted to refactor by splitting up each kind of action into a smaller function:</p><pre><code class="language-js">// Don't do this!
const handleNumberKeys = (/* ... */) =&gt; {/* ... */}
const handleOperatorKeys = (/* ... */) =&gt; {/* ... */}
const handleDecimalKey = (/* ... */) =&gt; {/* ... */}
const handleClearKey = (/* ... */) =&gt; {/* ... */}
const handleCalculateKey = (/* ... */) =&gt; {/* ... */}</code></pre>
<p>Don’t do this. It doesn’t help, because you’re merely splitting up blocks of code. When you do so, the function gets harder to read.</p>
<p>A better way is to split the code into pure and impure functions. If you do so, you’ll get code that looks like this:</p><pre><code class="language-js">keys.addEventListener('click', e =&gt; {
// Pure function
const resultString = createResultString(/* ... */)
// Impure stuff
display.textContent = resultString
updateCalculatorState(/* ... */)
})</code></pre>
<p>Here, <code>createResultString</code> is a pure function that returns what needs to be displayed on the calculator. <code>updateCalculatorState</code> is an impure function that changes the calculator's visual appearance and custom attributes.</p>
<h3 id="making-createresultstring">Making createResultString</h3>
<p>As mentioned before, <code>createResultString</code> should return the value that needs to be displayed on the calculator.<br>You can get these values through parts of the code that says <code>display.textContent = 'some value</code>.</p><pre><code class="language-js">display.textContent = 'some value'</code></pre>
<p>Instead of <code>display.textContent = 'some value'</code>, we want to return each value so we can use it later.</p><pre><code class="language-js">// replace the above with this
return 'some value'</code></pre>
<p>Let’s go through this together, step by step, starting with number keys.</p>
<h3 id="making-the-result-string-for-number-keys">Making the result string for number keys</h3>
<p>Here’s the code we have for number keys:</p><pre><code class="language-js">if (!action) {
if (
displayedNum === '0' ||
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
) {
display.textContent = keyContent
} else {
display.textContent = displayedNum + keyContent
}
calculator.dataset.previousKeyType = 'number'
}</code></pre>
<p>The first step is to copy parts that say <code>display.textContent = 'some value'</code> into <code>createResultString</code>. When you do this, make sure you change <code>display.textContent =</code> into <code>return</code>.</p><pre><code class="language-js">const createResultString = () =&gt; {
if (!action) {
if (
displayedNum === '0' ||
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
) {
return keyContent
} else {
return displayedNum + keyContent
}
}
}</code></pre>
<p>Next, we can convert the <code>if/else</code> statement to a ternary operator:</p><pre><code class="language-js">const createResultString = () =&gt; {
if (action!) {
return displayedNum === '0' ||
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
? keyContent
: displayedNum + keyContent
}
}</code></pre>
<p>When you refactor, remember to note down a list of variables you need. We’ll come back to the list later.</p><pre><code class="language-js">const createResultString = () =&gt; {
// Variables required are:
// 1. keyContent
// 2. displayedNum
// 3. previousKeyType
// 4. action
if (action!) {
return displayedNum === '0' ||
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
? keyContent
: displayedNum + keyContent
}
}</code></pre>
<h3 id="making-the-result-string-for-the-decimal-key">Making the result string for the decimal key</h3>
<p>Here’s the code we have for the decimal key:</p><pre><code class="language-js">if (action === 'decimal') {
if (!displayedNum.includes('.')) {
display.textContent = displayedNum + '.'
} else if (
previousKeyType === 'operator' ||
previousKeyType === 'calculate'
) {
display.textContent = '0.'
}
calculator.dataset.previousKeyType = 'decimal'
}</code></pre>
<p>As before, we want to move anything that changes <code>display.textContent</code>into <code>createResultString</code>.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'decimal') {
if (!displayedNum.includes('.')) {
return = displayedNum + '.'
} else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
return = '0.'
}
}
}</code></pre>
<p>Since we want to return all values, we can convert <code>else if</code> statements into early returns.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'decimal') {
if (!displayedNum.includes('.')) return displayedNum + '.'
if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
}
}</code></pre>
<p>A common mistake here is to forget to return the currently displayed number when neither condition is matched. We need this because we will replace the <code>display.textContent</code> with the value returned from <code>createResultString</code>. If we missed it, <code>createResultString</code> will return <code>undefined</code>, which is not what we desire.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'decimal') {
if (!displayedNum.includes('.')) return displayedNum + '.'
if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
return displayedNum
}
}</code></pre>
<p>As always, take note of the variables that are required. At this point, the required variables remain the same as before:</p><pre><code class="language-js">const createResultString = () =&gt; {
// Variables required are:
// 1. keyContent
// 2. displayedNum
// 3. previousKeyType
// 4. action
}</code></pre>
<h3 id="making-the-result-string-for-operator-keys">Making the result string for operator keys</h3>
<p>Here’s the code we wrote for operator keys.</p><pre><code class="language-js">if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
) {
const calcValue = calculate(firstValue, operator, secondValue)
display.textContent = calcValue
calculator.dataset.firstValue = calcValue
} else {
calculator.dataset.firstValue = displayedNum
}
key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action
}</code></pre>
<p>You know the drill by now: we want to move everything that changes <code>display.textContent</code> into <code>createResultString</code>. Here's what needs to be moved:</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
) {
return calculate(firstValue, operator, secondValue)
}
}
}</code></pre>
<p>Remember, <code>createResultString</code> needs to return the value to be displayed on the calculator. If the <code>if</code> condition did not match, we still want to return the displayed number.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (
firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
) {
return calculate(firstValue, operator, secondValue)
} else {
return displayedNum
}
}
}</code></pre>
<p>We can then refactor the <code>if/else</code> statement into a ternary operator:</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
return firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
? calculate(firstValue, operator, secondValue)
: displayedNum
}
}</code></pre>
<p>If you look closely, you’ll realize that there’s no need to store a <code>secondValue</code>variable. We can use <code>displayedNum</code> directly in the <code>calculate</code> function.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
return firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
? calculate(firstValue, operator, displayedNum)
: displayedNum
}
}</code></pre>
<p>Finally, take note of the variables and properties required. This time, we need <code>calculator.dataset.firstValue</code> and <code>calculator.dataset.operator</code>.</p><pre><code class="language-js">const createResultString = () =&gt; {
// Variables &amp; properties required are:
// 1. keyContent
// 2. displayedNum
// 3. previousKeyType
// 4. action
// 5. calculator.dataset.firstValue
// 6. calculator.dataset.operator
}</code></pre>
<h3 id="making-the-result-string-for-the-clear-key">Making the result string for the clear key</h3>
<p>We wrote the following code to handle the <code>clear</code> key.</p><pre><code class="language-js">if (action === 'clear') {
if (key.textContent === 'AC') {
calculator.dataset.firstValue = ''
calculator.dataset.modValue = ''
calculator.dataset.operator = ''
calculator.dataset.previousKeyType = ''
} else {
key.textContent = 'AC'
}
display.textContent = 0
calculator.dataset.previousKeyType = 'clear'
}</code></pre>
<p>As above, want to move everything that changes <code>display.textContent</code>into <code>createResultString</code>.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'clear') return 0
}</code></pre>
<h3 id="making-the-result-string-for-the-equals-key">Making the result string for the equals key</h3>
<p>Here’s the code we wrote for the equals key:</p><pre><code class="language-js">if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
let secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
secondValue = calculator.dataset.modValue
}
display.textContent = calculate(firstValue, operator, secondValue)
}
calculator.dataset.modValue = secondValue
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>As above, we want to copy everything that changes <code>display.textContent</code>into <code>createResultString</code>. Here's what needs to be copied:</p><pre><code class="language-js">if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
let secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
secondValue = calculator.dataset.modValue
}
display.textContent = calculate(firstValue, operator, secondValue)
}
}</code></pre>
<p>When copying the code into <code>createResultString</code>, make sure you return values for every possible scenario:</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
let secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
secondValue = calculator.dataset.modValue
}
return calculate(firstValue, operator, secondValue)
} else {
return displayedNum
}
}
}</code></pre>
<p>Next, we want to reduce reassignments. We can do so by passing in the correct values into <code>calculate</code> through a ternary operator.</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'calculate') {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const modValue = calculator.dataset.modValue
if (firstValue) {
return previousKeyType === 'calculate'
? calculate(displayedNum, operator, modValue)
: calculate(firstValue, operator, displayedNum)
} else {
return displayedNum
}
}
}</code></pre>
<p>You can further simplify the above code with another ternary operator if you feel comfortable with it:</p><pre><code class="language-js">const createResultString = () =&gt; {
// ...
if (action === 'calculate') {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const modValue = calculator.dataset.modValue
return firstValue
? previousKeyType === 'calculate'
? calculate(displayedNum, operator, modValue)
: calculate(firstValue, operator, displayedNum)
: displayedNum
}
}</code></pre>
<p>At this point, we want to take note of the properties and variables required again:</p><pre><code class="language-js">const createResultString = () =&gt; {
// Variables &amp; properties required are:
// 1. keyContent
// 2. displayedNum
// 3. previousKeyType
// 4. action
// 5. calculator.dataset.firstValue
// 6. calculator.dataset.operator
// 7. calculator.dataset.modValue
}</code></pre>
<h3 id="passing-in-necessary-variables">Passing in necessary variables</h3>
<p>We need seven properties/variables in <code>createResultString</code>:</p>
<ol>
<li><code>keyContent</code></li>
<li><code>displayedNum</code></li>
<li><code>previousKeyType</code></li>
<li><code>action</code></li>
<li><code>firstValue</code></li>
<li><code>modValue</code></li>
<li><code>operator</code></li>
</ol>
<p>We can get <code>keyContent</code> and <code>action</code> from <code>key</code>. We can also get <code>firstValue</code>, <code>modValue</code>, <code>operator</code> and <code>previousKeyType</code> from <code>calculator.dataset</code>.</p>
<p>That means the <code>createResultString</code> function needs three variables—<code>key</code>, <code>displayedNum</code> and <code>calculator.dataset</code>. Since <code>calculator.dataset</code>represents the state of the calculator, let's use a variable called <code>state</code>instead.</p><pre><code class="language-js">const createResultString = (key, displayedNum, state) =&gt; {
const keyContent = key.textContent
const action = key.dataset.action
const firstValue = state.firstValue
const modValue = state.modValue
const operator = state.operator
const previousKeyType = state.previousKeyType
// ... Refactor as necessary
}
// Using createResultString
keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) return
const displayedNum = display.textContent
const resultString = createResultString(e.target, displayedNum, calculator.dataset)
// ...
})</code></pre>
<p>Feel free to destructure variables if you desire:</p><pre><code class="language-js">const createResultString = (key, displayedNum, state) =&gt; {
const keyContent = key.textContent
const { action } = key.dataset
const {
firstValue,
modValue,
operator,
previousKeyType
} = state
// ...
}</code></pre>
<h3 id="consistency-within-if-statements">Consistency within if statements</h3>
<p>In <code>createResultString</code>, we used the following conditions to test for the type of keys that were clicked:</p><pre><code class="language-js">// If key is number
if (!action) { /* ... */ }
// If key is decimal
if (action === 'decimal') { /* ... */ }
// If key is operator
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) { /* ... */}
// If key is clear
if (action === 'clear') { /* ... */ }
// If key is calculate
if (action === 'calculate') { /* ... */ }</code></pre>
<p>They’re not consistent, so they’re hard to read. If possible, we want to make them consistent so we can write something like this:</p><pre><code class="language-js">if (keyType === 'number') { /* ... */ }
if (keyType === 'decimal') { /* ... */ }
if (keyType === 'operator') { /* ... */}
if (keyType === 'clear') { /* ... */ }
if (keyType === 'calculate') { /* ... */ }</code></pre>
<p>To do so, we can create a function called <code>getKeyType</code>. This function should return the type of key that was clicked.</p><pre><code class="language-js">const getKeyType = (key) =&gt; {
const { action } = key.dataset
if (!action) return 'number'
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) return 'operator'
// For everything else, return the action
return action
}</code></pre>
<p>Here’s how you’d use the function:</p><pre><code class="language-js">const createResultString = (key, displayedNum, state) =&gt; {
const keyType = getKeyType(key)
if (keyType === 'number') { /* ... */ }
if (keyType === 'decimal') { /* ... */ }
if (keyType === 'operator') { /* ... */}
if (keyType === 'clear') { /* ... */ }
if (keyType === 'calculate') { /* ... */ }
}</code></pre>
<p>We’re done with <code>createResultString</code>. Let's move on to <code>updateCalculatorState</code>.</p>
<h3 id="making-updatecalculatorstate">Making updateCalculatorState</h3>
<p><code>updateCalculatorState</code> is a function that changes the calculator's visual appearance and custom attributes.</p>
<p>As with <code>createResultString</code>, we need to check the type of key that was clicked. Here, we can reuse <code>getKeyType</code>.</p><pre><code class="language-js">const updateCalculatorState = (key) =&gt; {
const keyType = getKeyType(key)
if (keyType === 'number') { /* ... */ }
if (keyType === 'decimal') { /* ... */ }
if (keyType === 'operator') { /* ... */}
if (keyType === 'clear') { /* ... */ }
if (keyType === 'calculate') { /* ... */ }
}</code></pre>
<p>If you look at the leftover code, you may notice we change <code>data-previous-key-type</code> for every type of key. Here's what the code looks like:</p><pre><code class="language-js">const updateCalculatorState = (key, calculator) =&gt; {
const keyType = getKeyType(key)
if (!action) {
// ...
calculator.dataset.previousKeyType = 'number'
}
if (action === 'decimal') {
// ...
calculator.dataset.previousKeyType = 'decimal'
}
if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
// ...
calculator.dataset.previousKeyType = 'operator'
}
if (action === 'clear') {
// ...
calculator.dataset.previousKeyType = 'clear'
}
if (action === 'calculate') {
calculator.dataset.previousKeyType = 'calculate'
}
}</code></pre>
<p>This is redundant because we already know the key type with <code>getKeyType</code>. We can refactor the above to:</p><pre><code class="language-js">const updateCalculatorState = (key, calculator) =&gt; {
const keyType = getKeyType(key)
calculator.dataset.previousKeyType = keyType
if (keyType === 'number') { /* ... */ }
if (keyType === 'decimal') { /* ... */ }
if (keyType === 'operator') { /* ... */}
if (keyType === 'clear') { /* ... */ }
if (keyType === 'calculate') { /* ... */ }
}</code></pre>
<h3 id="making-updatecalculatorstate-for-operator-keys">Making <code>updateCalculatorState</code> for operator keys</h3>
<p>Visually, we need to make sure all keys release their depressed state. Here, we can copy and paste the code we had before:</p><pre><code class="language-js">const updateCalculatorState = (key, calculator) =&gt; {
const keyType = getKeyType(key)
calculator.dataset.previousKeyType = keyType
Array.from(key.parentNode.children).forEach(k =&gt; k.classList.remove('is-depressed'))
}</code></pre>
<p>Here’s what’s left from what we’ve written for operator keys, after moving pieces related to <code>display.textContent</code> into <code>createResultString</code>.</p><pre><code class="language-js">if (keyType === 'operator') {
if (firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
) {
calculator.dataset.firstValue = calculatedValue
} else {
calculator.dataset.firstValue = displayedNum
}
key.classList.add('is-depressed')
calculator.dataset.operator = key.dataset.action
}</code></pre>
<p>You may notice that we can shorten the code with a ternary operator:</p><pre><code class="language-js">if (keyType === 'operator') {
key.classList.add('is-depressed')
calculator.dataset.operator = key.dataset.action
calculator.dataset.firstValue = firstValue &amp;&amp;
operator &amp;&amp;
previousKeyType !== 'operator' &amp;&amp;
previousKeyType !== 'calculate'
? calculatedValue
: displayedNum
}</code></pre>
<p>As before, take note of the variables and properties you need. Here, we need <code>calculatedValue</code> and <code>displayedNum</code>.</p><pre><code class="language-js">const updateCalculatorState = (key, calculator) =&gt; {
// Variables and properties needed
// 1. key
// 2. calculator
// 3. calculatedValue
// 4. displayedNum
}</code></pre>
<h3 id="making-updatecalculatorstate-for-the-clear-key">Making <code>updateCalculatorState</code> for the clear key</h3>
<p>Here’s the leftover code for the clear key:</p><pre><code class="language-js">if (action === 'clear') {
if (key.textContent === 'AC') {
calculator.dataset.firstValue = ''
calculator.dataset.modValue = ''
calculator.dataset.operator = ''
calculator.dataset.previousKeyType = ''
} else {
key.textContent = 'AC'
}
}
if (action !== 'clear') {
const clearButton = calculator.querySelector('[data-action=clear]')
clearButton.textContent = 'CE'
}</code></pre>
<p>There’s nothing much we can refactor here. Feel free to copy/paste everything into <code>updateCalculatorState</code>.</p>
<h3 id="making-updatecalculatorstate-for-the-equals-key">Making <code>updateCalculatorState</code> for the equals key</h3>
<p>Here’s the code we wrote for the equals key:</p><pre><code class="language-js">if (action === 'calculate') {
let firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
let secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
firstValue = displayedNum
secondValue = calculator.dataset.modValue
}
display.textContent = calculate(firstValue, operator, secondValue)
}
calculator.dataset.modValue = secondValue
calculator.dataset.previousKeyType = 'calculate'
}</code></pre>
<p>Here’s what we’re left with if we remove everything that concerns <code>display.textContent</code>.</p><pre><code class="language-js">if (action === 'calculate') {
let secondValue = displayedNum
if (firstValue) {
if (previousKeyType === 'calculate') {
secondValue = calculator.dataset.modValue
}
}
calculator.dataset.modValue = secondValue
}</code></pre>
<p>We can refactor this into the following:</p><pre><code class="language-js">if (keyType === 'calculate') {
calculator.dataset.modValue = firstValue &amp;&amp; previousKeyType === 'calculate'
? modValue
: displayedNum
}</code></pre>
<p>As always, take note of the properties and variables used:</p><pre><code class="language-js">const updateCalculatorState = (key, calculator) =&gt; {
// Variables and properties needed
// 1. key
// 2. calculator
// 3. calculatedValue
// 4. displayedNum
// 5. modValue
}</code></pre>
<h3 id="passing-in-necessary-variables-1">Passing in necessary variables</h3>
<p>We know we need five variables/properties for <code>updateCalculatorState</code>:</p>
<ol>
<li><code>key</code></li>
<li><code>calculator</code></li>
<li><code>calculatedValue</code></li>
<li><code>displayedNum</code></li>
<li><code>modValue</code></li>
</ol>
<p>Since <code>modValue</code> can be retrieved from <code>calculator.dataset</code>, we only need to pass in four values:</p><pre><code class="language-js">const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) =&gt; {
// ...
}
keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) return
const key = e.target
const displayedNum = display.textContent
const resultString = createResultString(key, displayedNum, calculator.dataset)
display.textContent = resultString
// Pass in necessary values
updateCalculatorState(key, calculator, resultString, displayedNum)
})</code></pre>
<h3 id="refactoring-updatecalculatorstate-again">Refactoring updateCalculatorState again</h3>
<p>We changed three kinds of values in <code>updateCalculatorState</code>:</p>
<ol>
<li><code>calculator.dataset</code></li>
<li>The class for pressing/depressing operators</li>
<li><code>AC</code> vs <code>CE</code> text</li>
</ol>
<p>If you want to make it cleaner, you can split (2) and (3) into another function — <code>updateVisualState</code>. Here's what <code>updateVisualState</code> can look like:</p><pre><code class="language-js">const updateVisualState = (key, calculator) =&gt; {
const keyType = getKeyType(key)
Array.from(key.parentNode.children).forEach(k =&gt; k.classList.remove('is-depressed'))
if (keyType === 'operator') key.classList.add('is-depressed')
if (keyType === 'clear' &amp;&amp; key.textContent !== 'AC') {
key.textContent = 'AC'
}
if (keyType !== 'clear') {
const clearButton = calculator.querySelector('[data-action=clear]')
clearButton.textContent = 'CE'
}
}</code></pre>
<h3 id="wrapping-up">Wrapping up</h3>
<p>The code become much cleaner after the refactor. If you look into the event listener, you’ll know what each function does. Here’s what the event listener looks like at the end:</p><pre><code class="language-js">keys.addEventListener('click', e =&gt; {
if (e.target.matches('button')) return
const key = e.target
const displayedNum = display.textContent
// Pure functions
const resultString = createResultString(key, displayedNum, calculator.dataset)
// Update states
display.textContent = resultString
updateCalculatorState(key, calculator, resultString, displayedNum)
updateVisualState(key, calculator)
})</code></pre>
<p>You can grab the source code for the refactor part through <a href="https://zellwk.com/blog/calculator-part-3" rel="noopener">this link</a> (scroll down and enter your email address in the box, and I’ll send the source codes right to your mailbox).</p>
<p>I hope you enjoyed this article. If you did, you might love <a href="https://learnjavascript.today/" rel="noopener">Learn JavaScript</a>—a course where I show you how to build 20 components, step by step, like how we built this calculator today.</p>
<p>Note: we can improve the calculator further by adding keyboard support and accessibility features like Live regions. Want to find out how? Go check out Learn JavaScript :)</p>
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
