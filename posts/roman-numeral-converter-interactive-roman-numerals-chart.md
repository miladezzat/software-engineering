---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg"
tags: [Math]
description: The Roman numerals are no longer an essential part of our dai
author: "Milad E. Fahmy"
title: "How to Build a Roman Numeral Converter and an Interactive Roman Numerals Chart"
created: "2021-08-15T19:29:05+02:00"
modified: "2021-08-15T19:29:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-math tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Roman Numeral Converter and an Interactive Roman Numerals Chart</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99dd740569d1a4ca2223.jpg" alt="How to Build a Roman Numeral Converter and an Interactive Roman Numerals Chart">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Roman numerals are no longer an essential part of our daily lives. But we do use them when designing monuments, clocks, and even for sporting events.</p>
<h2 id="what-are-the-roman-numerals">What are the Roman Numerals?</h2>
<p>Roman numerals originated in ancient Rome and remained the common way of writing numbers throughout Europe for many centuries. Their use long outlived the Roman Empire itself. They were gradually replaced by the Hindu-Arabic system of numeration that we use today – the numbers zero through nine.</p>
<p>Roman numerals are represented by combinations of letters of the Latin alphabet, that serve as digits in this system. But unlike decimal base, with symbols <strong>0 through 9</strong>, the the Roman system employs seven capitalized Latin letters <strong>I, V, X, L, C, D, M</strong>.</p>
<p>Originally, there was no single letter designation for zero. Instead, they used the Latin word <strong>Nulla</strong>, which means "none". </p>
<h2 id="how-do-roman-numerals-work">How do Roman Numerals work?</h2>
<p>The Hindu-Arabic representation of these letters is as follows: <strong>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 and M = 1000</strong>.</p>
<p>Other numbers are formed by combining these letters per certain rules: A symbol placed <strong>after</strong> another of equal or greater value, adds its value. </p>
<p>For example, &nbsp; <strong>VI = V + I = 5 + 1 = 6 </strong>or<strong> LX = L + X = 50 + 10 = 60</strong>.<strong> </strong>The notations VI and LX are read as "one more than five" and "ten more than fifty". </p>
<p>A symbol placed <strong>before</strong> one of greater values subtracts its value. For example, <strong>IX = X - I = 10 - 1 = 9,</strong> and <strong>XC = C - X = 100 - 10 = 90</strong>. </p>
<p>The notations IX and XC are read as "one less than ten" and "ten less than a hundred." </p>
<p>Numbers greater than 1,000 are formed by placing a dash over the symbol. Thus <strong>V̅ = 5,000</strong>, <strong>X̅ = 10,000</strong>, <strong>L̅ = 50,000</strong>, <strong>C̅ = 100,000</strong>, <strong>D̅ = 500,000</strong> and <strong>M̅ = 1,000,000</strong>. </p>
<p>The so called "standard" form disallows using the same symbol more than three times in a row. But occasionally, exceptions can be seen. For example, IIII for number 4, VIIII for number 9, and LXXXX for 90.</p>
<h2 id="an-interactive-chart-of-roman-numerals-and-their-combinations">An Interactive Chart of Roman Numerals and Their Combinations</h2>
<p>Hover over each symbol to reveal its Hindu-Arabic equivalent:</p>
<!-- HTML utilizes Flexbox. Container is composed of buttons as basic
elements. Buttons are wired to functions that fire on mouseover and mouseout
events. Current button ids, arabic and roman numbers serve as arguments for event listener functions. -->
<div class="flex-container">
<div class="row1">
<button class="item" id="1" onmouseover="handleMouseOver(&quot;1&quot;)" onmouseout="handleMouseOut(&quot;1&quot;, &quot;I&quot;)">I</button>
<button class="item" id="2" onmouseover="handleMouseOver(&quot;2&quot;)" onmouseout="handleMouseOut(&quot;2&quot;, &quot;II&quot;)">II</button>
<button class="item" id="3" onmouseover="handleMouseOver(&quot;3&quot;)" onmouseout="handleMouseOut(&quot;3&quot;, &quot;III&quot;)">III</button>
<button class="item" id="4" onmouseover="handleMouseOver(&quot;4&quot;)" onmouseout="handleMouseOut(&quot;4&quot;, &quot;IV&quot;)">IV</button>
<button class="item" id="5" onmouseover="handleMouseOver(&quot;5&quot;)" onmouseout="handleMouseOut(&quot;5&quot;, &quot;V&quot;)">V</button>
<button class="item" id="6" onmouseover="handleMouseOver(&quot;6&quot;)" onmouseout="handleMouseOut(&quot;6&quot;, &quot;VI&quot;)">VI</button>
<button class="item" id="7" onmouseover="handleMouseOver(&quot;7&quot;)" onmouseout="handleMouseOut(&quot;7&quot;, &quot;VII&quot;)">VII</button>
<button class="item" id="8" onmouseover="handleMouseOver(&quot;8&quot;)" onmouseout="handleMouseOut(&quot;8&quot;, &quot;VIII&quot;)">VIII</button>
<button class="item" id="9" onmouseover="handleMouseOver(&quot;9&quot;)" onmouseout="handleMouseOut(&quot;9&quot;, &quot;IX&quot;)">IX</button>
</div>
<div class="row2">
<button class="item" id="10" onmouseover="handleMouseOver(&quot;10&quot;)" onmouseout="handleMouseOut(&quot;10&quot;, &quot;X&quot;)">X</button>
<button class="item" id="20" onmouseover="handleMouseOver(&quot;20&quot;)" onmouseout="handleMouseOut(&quot;20&quot;, &quot;XX&quot;)">XX</button>
<button class="item" id="30" onmouseover="handleMouseOver(&quot;30&quot;)" onmouseout="handleMouseOut(&quot;30&quot;, &quot;XXX&quot;)">XXX</button>
<button class="item" id="40" onmouseover="handleMouseOver(&quot;40&quot;)" onmouseout="handleMouseOut(&quot;40&quot;, &quot;XL&quot;)">XL</button>
<button class="item" id="50" onmouseover="handleMouseOver(&quot;50&quot;)" onmouseout="handleMouseOut(&quot;50&quot;, &quot;L&quot;)">L</button>
<button class="item" id="60" onmouseover="handleMouseOver(&quot;60&quot;)" onmouseout="handleMouseOut(&quot;60&quot;, &quot;LX&quot;)">LX</button>
<button class="item" id="70" onmouseover="handleMouseOver(&quot;70&quot;)" onmouseout="handleMouseOut(&quot;70&quot;, &quot;LXX&quot;)">LXX</button>
<button class="item" id="80" onmouseover="handleMouseOver(&quot;80&quot;)" onmouseout="handleMouseOut(&quot;80&quot;, &quot;LXXX&quot;)">LXXX</button>
<button class="item" id="90" onmouseover="handleMouseOver(&quot;90&quot;)" onmouseout="handleMouseOut(&quot;90&quot;, &quot;XC&quot;)">XC</button>
</div>
<div class="row3">
<button class="item" id="100" onmouseover="handleMouseOver(&quot;100&quot;)" onmouseout="handleMouseOut(&quot;100&quot;, &quot;C&quot;)">C</button>
<button class="item" id="200" onmouseover="handleMouseOver(&quot;200&quot;)" onmouseout="handleMouseOut(&quot;200&quot;, &quot;CC&quot;)">CC</button>
<button class="item" id="300" onmouseover="handleMouseOver(&quot;300&quot;)" onmouseout="handleMouseOut(&quot;300&quot;, &quot;CCC&quot;)">CCC</button>
<button class="item" id="400" onmouseover="handleMouseOver(&quot;400&quot;)" onmouseout="handleMouseOut(&quot;400&quot;, &quot;CD&quot;)">CD</button>
<button class="item" id="500" onmouseover="handleMouseOver(&quot;500&quot;)" onmouseout="handleMouseOut(&quot;500&quot;, &quot;D&quot;)">D</button>
<button class="item" id="600" onmouseover="handleMouseOver(&quot;600&quot;)" onmouseout="handleMouseOut(&quot;600&quot;, &quot;DC&quot;)">DC</button>
<button class="item" id="700" onmouseover="handleMouseOver(&quot;700&quot;)" onmouseout="handleMouseOut(&quot;700&quot;, &quot;DCC&quot;)">DCC</button>
<button class="item" id="800" onmouseover="handleMouseOver(&quot;800&quot;)" onmouseout="handleMouseOut(&quot;800&quot;, &quot;DCCC&quot;)">DCCC</button>
<button class="item" id="900" onmouseover="handleMouseOver(&quot;900&quot;)" onmouseout="handleMouseOut(&quot;900&quot;, &quot;CM&quot;)">CM</button>
</div>
<div class="row4">
<button class="item special" id="1000" onmouseover="handleMouseOver(&quot;1000&quot;)" onmouseout="handleMouseOut(&quot;1000&quot;, &quot;M&quot;)">M</button>
<button class="item special" id="5000" onmouseover="handleMouseOver(&quot;5000&quot;)" onmouseout="handleMouseOut(&quot;5000&quot;, &quot;V̅&quot;)">V̅</button>
<button class="item special" id="10000" onmouseover="handleMouseOver(&quot;10000&quot;)" onmouseout="handleMouseOut(&quot;10000&quot;, &quot;X̅&quot;)">X̅</button>
<button class="item special" id="50000" onmouseover="handleMouseOver(&quot;50000&quot;)" onmouseout="handleMouseOut(&quot;50000&quot;, &quot;L̅&quot;)">L̅</button>
<button class="item special" id="100000" onmouseover="handleMouseOver(&quot;100000&quot;)" onmouseout="handleMouseOut(&quot;100000&quot;, &quot;C̅&quot;)">C̅</button>
<button class="item special" id="500000" onmouseover="handleMouseOver(&quot;500000&quot;)" onmouseout="handleMouseOut(&quot;500000&quot;, &quot;D̅&quot;)">D̅</button>
<button class="item special" id="1000000" onmouseover="handleMouseOver(&quot;1000000&quot;)" onmouseout="handleMouseOut(&quot;1000000&quot;, &quot;M̅&quot;)">M̅</button>
</div>
</div>
<!-- CSS  -->
<style>
.flex-container {
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
margin: 0 auto;
align-items: center;
justify-content: center;
}
/* Mobile phones */
@media screen and (max-width: 767px) {
.flex-container {
transform: scale(0.6);
}
}
/* Tablets and iPads */
@media screen and (min-width: 768px) and (max-width: 1023px) {
.flex-container {
transform: scale(0.8);
}
}
.row1,
.row2,
.row3 {
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}
.row4 {
display: flex;
flex-direction: row nowrap;
align-items: center;
justify-content: space-evenly;
}
.item {
margin: 0.2rem 0.2rem;
width: 9rem;
height: 9rem;
background-color: #3F51B5;
color: white;
font-weight: 600;
border-radius: 0.2rem;
box-shadow: 0 0 1rem 0.25rem;
transition-duration: 0.2s;
}
.special {
margin: 0.2rem 0.3rem;
width: 11.5rem;
height: 9rem;
}
</style>
<!-- JavaScript consists of two functions. One is called on mouseover event, another on mouseout event. The arguments they take determine which node is currently active and change its appearance/content accordingly. -->
<p>I wrote the code for this interactive Roman numeral chart to embed here on freeCodeCamp News.</p>
<p>Given the fact that the HTML embed feature is not a full scale code editor, the given code is not structured and presented as separate HTML, CSS, and JavaScript files. Rather it is written as a single HTML file with <code>&lt;style&gt;</code> and <code>&lt;script&gt;</code> elements added for styling and functionality.</p>
<p>Here is <a href="https://github.com/sandroarobeli/RomanNumeralChart.git">the full code repository for my interactive Roman Numeral Chart</a>. </p>
<h2 id="roman-numeral-converter">Roman Numeral Converter</h2>
<p>Enter a non negative integer between 0 and 5,000. Then click Convert to reveal a Roman numeral equivalent. </p>
<!-- HTML elements
UI consists of an input element of type 'number' that ensures only numeric characters and decimal point can be entered. Handling of decimal points is
managed through javascript logic below. Also, a 'convert' button element clicking on which triggers conversion of arabic numerals into roman numerals and another button element that displays the result of conversion. In case one wanders why a button element displays the result, the answer has to do with manageability of styling given quite limited functionality of the platform.
-->
<div id="converter" style="box-sizing: border-box;
width: 90%;
margin: 0 auto;">
<label for="arabicNumeral" style="display:block;
text-align: center;
font-weight: 600;
color: #3F51B5;">Arabic to Roman
<input type="number" name="arabicNumeral" id="arabicNumeral" min="0" max="5000" step="1" placeholder="Enter an integer between 0 and 5000" style="padding: 10px;
margin: 0 auto;
border: 2px solid #eee;
box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
border-radius:10px;
width:100%;
font-size: inherit;">
</label>
<hr>
<button type="button" id="convert" onclick="convertToRoman()" style="padding:10px;
border:none;
margin: 0 auto;                                                                background-color:#3F51B5;
color:#fff;
font-weight:600;
border-radius:5px;
width:100%;">Convert
</button>
<button type="button" id="display" style="padding:10px;
border:none;
margin: 0 auto;                                                                background-color:#fff;
color:#3F51B5;
font-weight:600;
font-size: 3rem;
border-radius:5px;
width:100%; ">
</button>
</div>
<p>There is no programmatic limitation to the number 5,000 or beyond. The algorithm that governs the conversion would work all the same. </p>
<p>The space required to display Roman numeral equivalents of large numbers grows larger and larger without much added benefit of revealing something new. </p>
<p>The code itself consists of an HTML part describing the content with inline styles for ease of interaction and added JavaScript for functionality.</p>
<p>The is an input element of the type "number" to limit input data to numeric values and two buttons. The "Convert" button is wired to the function that performs the conversion, and the "Display" button outputs the Roman number equivalent. </p>
<p>Why output through a button element? Styling worked well when applied to both buttons together. And considering the limited functionality of the embed, it seemed like a time saver. </p>
<p>For clarity, these elements are assigned to variables:</p><pre><code class="language-js">const inputField = document.querySelector('input'); // input element
const convertButton = document.getElementById('convert'); // convert button
const outputField = document.getElementById('display'); // output element</code></pre>
<p>Function <code>convertToRoman()</code> contains the logic and renders the result:</p><pre><code class="language-js">function convertToRoman() {
let arabic = document.getElementById('arabicNumeral').value; // input value
let roman = '';  // variable that will hold the result
}</code></pre>
<p>The numerical value from input element is saved in a variable called "<strong>arabic</strong>" for further testing. The variable named "<strong>roman</strong>" will hold the string representing Roman equivalent of Arabic input.</p>
<p>Next, there are two arrays of equal lengths, one holding Arabic numerals and one holding their Roman counterparts. Both are in descending order to simplify subtraction:</p><pre><code class="language-js">// descending order simplifies subtraction while looping
const arabicArray = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanArray = ['V&amp;#773;', 'MV&amp;#773;','M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'] </code></pre>
<p>Unicode tables help with forming symbols greater than 1,000. </p>
<p>Finally, here is the logic that test the inputted number and converts it.</p><pre><code class="language-js">if (/^(0|[1-9]\d*)$/.test(arabic)) {
// Regular expression tests
if (arabic == 0) {
// for decimal points and negative
outputField.innerHTML = "Nulla"; // signs
} else if (arabic != 0) {
for (let i = 0; i &lt; arabicArray.length; i++) {
while (arabicArray[i] &lt;= arabic) {
roman += romanArray[i];
arabic -= arabicArray[i];
}
}
outputField.innerHTML = roman;
}
} else {
outputField.innerHTML =
"Please enter non negative integers only. No decimal points.";
}</code></pre>
<p>The first test checks for decimal points and negative signs. If found, the message asks to "enter non-negative integers only."</p>
<p>The next test checks whether the number entered equals zero. In such a case, the string "Nulla" is displayed. </p>
<p>Otherwise, the loops keep concatenating Roman strings while subtracting Arabic numbers until the latter satisfies the condition for the while loop. Then it displays the Roman equivalent of the user input.</p>
<p>Just like with the interactive chart, the code for the Roman Numeral Converter is all set for you to copy it and embed it into any article. Here's <a href="https://github.com/sandroarobeli/RomanNumeralConverter.git">the full code repository</a>.</p>
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
