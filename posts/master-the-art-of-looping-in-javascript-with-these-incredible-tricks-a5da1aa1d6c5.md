---
card: "https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png"
tags: [JavaScript]
description: "by Yogi"
author: "Milad E. Fahmy"
title: "Master the art of looping in JavaScript with these incredible tricks"
created: "2021-08-16T10:09:04+02:00"
modified: "2021-08-16T10:09:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-coding tag-programming tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Master the art of looping in JavaScript with these incredible tricks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*oyfRe4XwyuFfhK41WJVMdw.png" alt="Master the art of looping in JavaScript with these incredible tricks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
for (var i = 0; i &lt; numbers.length; i++) {
console.log(numbers[i]);
}</code></pre><p>In the same way you can loop through arrays of string too.</p><h4 id="b-looping-through-dom-elements">b. Looping through DOM elements</h4><p>Suppose you want to <strong>find and color all the anchors</strong> in the page red. Then here too, you can use the <strong>For Loop</strong> like this:</p><pre><code class="language-js">var elements = document.querySelectorAll("a");
for (var i= 0; i &lt; elements.length; i++) {
elements[i].style.color = "red";
for (var x in person) {
console.log(x + ": " + person[x])
one: [11, 12, 13, 14, 15],
two: [21, 22, 23],
three: [31, 32]
}</code></pre><p>The JSON has a root node called ‘<em>jsonData</em>’, and this contains 3 nodes — ‘<em>one</em>’, ‘<em>two</em>’, ‘<em>three</em>’. The nodes are also called keys.</p><p>The below code shows how to extract information from JSON using the <em>For In</em> loop:</p><pre><code class="language-js">var json = {
jsonData: {
one: [11, 12, 13, 14, 15],
two: [21, 22, 23],
three: [31, 32]
}
};
for (var key in json.jsonData) {
for (var key1 in json.jsonData[key]) {
console.log(json.jsonData[key][key1])
}
one: [11, 12, 13, 14, 15]
}, {
two: [21, 22, 23]
}, {
three: [31, 32]
}]</code></pre><p>Now I will use a combination of <strong>For &amp; For In</strong> loops to extract all information from this JSON. The below code does this work for me:</p><pre><code class="language-js">var json = {
jsonData: [{
one: [11, 12, 13, 14, 15]
}, {
two: [21, 22, 23]
}, {
three: [31, 32]
}]
};
for (var i = 0; i &lt; json.jsonData.length; i++) {
for (var key in json.jsonData[i]) {
for (var j = 0; j &lt; json.jsonData[i][key].length; j++) {
console.log(json.jsonData[i][key][j])
}
}
&lt;tr&gt;
&lt;th&gt;Id&lt;/th&gt;
&lt;th&gt;Product Name&lt;/th&gt;
&lt;th&gt;Product Price&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;1&lt;/td&gt;
&lt;td&gt;Shirts&lt;/td&gt;
&lt;td&gt;49.99&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;2&lt;/td&gt;
&lt;td&gt;Pants&lt;/td&gt;
&lt;td&gt;55.50&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;3&lt;/td&gt;
&lt;td&gt;Socks&lt;/td&gt;
&lt;td&gt;20&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;4&lt;/td&gt;
&lt;td&gt;Shoes&lt;/td&gt;
&lt;td&gt;99&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;5&lt;/td&gt;
&lt;td&gt;Jackets&lt;/td&gt;
&lt;td&gt;88.90&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</code></pre><p>Next, add the CSS for giving proper design to this html table:</p><pre><code class="language-css">&lt;style&gt;
#priceTable {
font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
}
#priceTable td, #priceTable th {
border: 1px solid #ddd;
padding: 8px;
}
#priceTable tr {
background-color: #f2f2f2;
}
#priceTable th {
padding-top: 12px;
padding-bottom: 12px;
text-align: left;
background-color: #4CAF50;
color: white;
}
&lt;/style&gt;</code></pre><p>Now loop through the table with the <strong>While loop </strong>and calculate the sum of all products. So add the below JavaScript code to your web page that does this work:</p><pre><code class="language-js">var table = document.getElementById("priceTable");
var i = 1;
var sum = 0;
while (i &lt; table.rows.length) {
sum += parseFloat(table.rows[i].cells[2].innerHTML)
i++;
}
var row = table.insertRow(i);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell2.innerHTML = "Total Price";
cell3.innerHTML = sum;</code></pre><p><em>Explanation</em>: First I get the reference of the table by using <code><strong>var table = document.getElementById("priceTable")</strong></code>. Then I added 2 variables called ‘i’ and ‘sum’. The variable ‘i’ is the conditional variable of the while loop, while ‘sum’ will keep adding the price of every product into it.</p><p>So I ran the <strong>while loop</strong> for the variable ‘i’ value from 1 to the (total rows -1). I got the total rows in the table by <strong>table.rows.length</strong> and added it to the condition of the while loop:</p><pre><code class="language-js">while (i &lt; table.rows.length) {
//…
}</code></pre><p><em>Note</em>: The table has 6 rows from index 0 to 5, and each row has 3 columns from index 0 to 2. I specifically ran the loop from ‘i’ variable value of 1 and not 0. This is because in the 0th index of the table’s row there is the column’s name (which I don’t need).</p><p>Inside the while loop I kept on adding the values of each product’s price to the sum variable like this:<code><strong>sum += parseFloat(table.rows[i].cells[2].innerHTML)</strong></code> and at the end increased the value of ‘i’ by 1.</p><p>For example, when ‘i’ value is 1 then <code><strong>table.rows[1]</strong></code> gives me the first row (first ‘tr’ element). Similarly <code><strong>table.rows[1].cells[2]</strong></code> will give the value of price column (price ‘td’ element) of the first row.</p><p>After the loop completes, I am adding a <strong>new row to the table</strong> at the very end. Inside this row I am adding the 3 columns — 0th index, 1st index, and 2nd index. Finally I am showing the string ‘total’ in the 1st column and total price contained in the ‘sum’ variable in the <strong>2nd column</strong>.</p><p>The code which does the addition of this new row is:</p><pre><code class="language-js">var row = table.insertRow(i);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell2.innerHTML = "Total Price";
cell3.innerHTML = sum;</code></pre><p>The <code><strong>table.insertRow(i)</strong></code> will add a 6th row because variable ‘i’ value is 6 at the time the <strong>While Loop</strong> ends.</p><p>Columns (‘td’ element) are added to this new row by <code><strong>row.insertCell(0), row.insertCell(1), row.insertCell(2)</strong></code>.</p><p>I show a value inside the column by:</p><pre><code class="language-js">cell2.innerHTML = "Total Price";
while (infiVal) {
// your code
}</code></pre><p>Note: Infinite loops can hang the browser so it is required to run the loop at a gap of a few milliseconds. You can use the <strong>JavaScript setInterval method</strong> to run a given function every 1000 milliseconds. See the below code:</p><pre><code class="language-js">var myVar = setInterval(myTimer, 1000);
function myTimer() {
// your code
}</code></pre><blockquote>Reference Tutorial — <a href="http://www.yogihosting.com/settimeout-setinterval-functions/" rel="noopener"><strong>Understanding “setTimeout()” and “setInterval()” timer methods in jQuery/JavaScript</strong></a></blockquote><h3 id="4-the-do-while-loop"><strong>4. The “Do While” loop</strong></h3><p>In <strong>Do While loop</strong> the condition to be <strong>checked is given at the end, </strong>and so the loop executes at least once even if the condition is not true. Check the below code that will give a ‘Hello’ message on the alert box, even if the condition is false right from the beginning (as variable ‘i’ value is always greater than 1).</p><pre><code class="language-js">var i = 2;
do {
alert("Hello");
i++;
}
while (i &lt; 1);</code></pre><h4 id="a-looping-through-xml">a. Looping through XML</h4><p>Now I will use the <strong>Do While loop</strong> for how to <strong>loop through XML</strong> and extract data from it. I have an XML file called ‘XMLFile1.xml’ whose content is:</p><pre><code class="language-xml">&lt;?xml version="1.0" encoding="utf-8" ?&gt;
&lt;cities&gt;
&lt;city&gt;Washington DC&lt;/city&gt;
&lt;city&gt;Islamabad&lt;/city&gt;
&lt;city&gt;Beijing&lt;/city&gt;
&lt;city&gt;Tokyo&lt;/city&gt;
&lt;/cities&gt;</code></pre><p>I will use <strong>AJAX to read this XML file</strong> and then loop through it with Do While loop. The below code prints all the names of the cities (given in the XML file) in the console window.</p><pre><code class="language-js">var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
if (this.readyState == 4 &amp;&amp; this.status == 200) {
myFunction(this);
}
};
xhttp.open("GET", "XMLFile1.xml", true);
xhttp.send();
function myFunction(xml) {
var xmlDoc = xml.responseXML;
var cityNames = Array.from(xmlDoc.getElementsByTagName("city"));
var i = 0;
do {
console.log(cityNames[i].innerHTML);
i++;
}
while (i &lt; cityNames.length);
}</code></pre><p><em>Explanation</em>: I created an <strong>XMLHttpRequest</strong> object for making the AJAX call. When the XML file is read then the event called <strong>onreadystatechange</strong> is raised, see below code:</p><pre><code class="language-js">xhttp.onreadystatechange = function () {
if (this.readyState == 4 &amp;&amp; this.status == 200) {
myFunction(this);
}
};</code></pre><p>In this event I am calling my custom function called <strong>myFunction()</strong>. Here, I store the XML contents inside a variable called <strong>xmlDoc</strong>:</p><p><code>var xmlDoc = xml.responseXML;</code></p><p>Then I converted all the city names into an <strong>array</strong>:</p><p><code>var cityNames = Array.from(xmlDoc.getElementsByTagName("city"));</code></p><p>Finally I loop through this array of cities using <strong>Do While loop</strong> and print each city name in the console window:</p><pre><code class="language-js">var i = 0;
do {
console.log(cityNames[i].innerHTML);
i++;
}
names.forEach(Function1);
function Function1(currentValue, index) {
console.log("Array Current Index is: " + index + " :: Value is: " + currentValue);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
