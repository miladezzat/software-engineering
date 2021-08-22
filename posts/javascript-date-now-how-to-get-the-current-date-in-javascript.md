---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg"
tags: [JavaScript]
description: Many applications you build will have some sort of a date com
author: "Milad E. Fahmy"
title: "JavaScript Date Now – How to Get the Current Date in JavaScript"
created: "2021-08-15T19:29:18+02:00"
modified: "2021-08-15T19:29:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Date Now – How to Get the Current Date in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4b740569d1a4ca24bd.jpg" alt="JavaScript Date Now – How to Get the Current Date in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Many applications you build will have some sort of a date component, whether it's the creation date of a resource, or the timestamp of an activity. </p>
<p>Dealing with date and timestamp formatting can be exhausting. In this guide, you will learn how to get the current date in various formats in JavaScript.</p>
<h2 id="javascript-s-date-object">JavaScript's Date Object</h2>
<p>JavaScript has a built-in <code>Date</code> object that stores the date and time and provides methods for handling them.</p>
<p>To create a new instance of the <code>Date</code> object, use the <code>new</code> keyword:</p><pre><code class="language-js">const date = new Date();</code></pre>
<p>The <code>Date</code> object contains a <code>Number</code> that represents milliseconds passed since the Epoch, that is 1 January 1970.</p>
<p>You can pass a date string to the <code>Date</code> constructor to create an object for the specified date:</p><pre><code class="language-js">const date = new Date('Jul 12 2011');</code></pre>
<p>To get the current year, use the <code>getFullYear()</code> instance method of the <code>Date</code> object. The <code>getFullYear()</code> method returns the year of the specified date in the <code>Date</code> constructor:</p><pre><code class="language-js">const currentYear = date.getFullYear();
console.log(currentYear); //2020</code></pre>
<p>Similarly, there are methods for getting the current day of the month and the current month:</p><pre><code class="language-js">const today = date.getDate();
const currentMonth = date.getMonth() + 1; </code></pre>
<p>The <code>getDate()</code> method returns the current day of the month (1-31). </p>
<p>The <code>getMonth()</code> method returns the month of the specified date. One point to note about the <code>getMonth()</code> method is that it returns 0-indexed values (0-11) where 0 is for January and 11 for December. Hence the addition of 1 to normalize the month's value.</p>
<h2 id="date-now">Date now</h2>
<p><code>now()</code> is a static method of the <code>Date</code> object. It returns the value in milliseconds that represents the time elapsed since the Epoch. You can pass in the milliseconds returned from the <code>now()</code> method into the <code>Date</code> constructor to instantiate a new <code>Date</code> object:</p><pre><code class="language-js">const timeElapsed = Date.now();
const today = new Date(timeElapsed);</code></pre>
<h2 id="formatting-the-date">Formatting The Date</h2>
<p>You can format the date into multiple formats (GMT, ISO, and so on) using the methods of the <code>Date</code> object.</p>
<p>The <code>toDateString()</code> method returns the date in a human readable format:</p><pre><code class="language-js">today.toDateString(); // "Sun Jun 14 2020"</code></pre>
<p>The <code>toISOString()</code> method returns the date which follows the ISO 8601 Extended Format:</p><pre><code class="language-js">today.toISOString(); // "2020-06-13T18:30:00.000Z"</code></pre>
<p>The <code>toUTCString()</code> method returns the date in UTC timezone format:</p><pre><code class="language-js">today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT"</code></pre>
<p>The <code>toLocaleDateString()</code> method returns the date in a locality-sensitive format:</p><pre><code class="language-js">today.toLocaleDateString(); // "6/14/2020"</code></pre>
<p>You can find the complete reference for the <code>Date</code> methods in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">MDN documentation</a>.</p>
<h2 id="custom-date-formatter-function">Custom Date Formatter Function</h2>
<p>Apart from the formats mentioned in the above section, your application might have a different format for data. It could be in <code>yy/dd/mm</code> or <code>yyyy-dd-mm</code> format, or something similar.</p>
<p>To tackle this problem, it would be better to create a reusable function so that it can be used across multiple projects.</p>
<p>So in this section, let's create a utility function that will return the date in the format specified in the function argument:</p><pre><code class="language-js">const today = new Date();
function formatDate(date, format) {
//
}
formatDate(today, 'mm/dd/yy');</code></pre>
<p>You need to replace the strings "mm", "dd", "yy" with the respective month, day and year values from the format string passed in the argument.</p>
<p>To do that you can use the <code>replace()</code> method like shown below:</p><pre><code class="language-js">format.replace('mm', date.getMonth() + 1);</code></pre>
<p>But this will lead to a lot of method chaining and make it difficult to maintain as you try to make the function more flexible:</p><pre><code class="language-js">format.replace('mm', date.getMonth() + 1)
.replace('yy', date.getFullYear())
.replace('dd', date.getDate());</code></pre>
<p>Instead of chaining methods, you can make use of regular expression with the <code>replace()</code> method.</p>
<p>First create an object that will represent a key-value pair of the substring and its respective value:</p><pre><code class="language-js">const formatMap = {
mm: date.getMonth() + 1,
dd: date.getDate(),
yy: date.getFullYear().toString().slice(-2),
yyyy: date.getFullYear()
};</code></pre>
<p>Next, use regular expression to match and replace the strings:</p><pre><code class="language-js">formattedDate = format.replace(/mm|dd|yy|yyy/gi, matched =&gt; map[matched]);</code></pre>
<p>The complete function looks like this:</p><pre><code class="language-js">function formatDate(date, format) {
const map = {
mm: date.getMonth() + 1,
dd: date.getDate(),
yy: date.getFullYear().toString().slice(-2),
yyyy: date.getFullYear()
}
return format.replace(/mm|dd|yy|yyy/gi, matched =&gt; map[matched])
}</code></pre>
<p>You can also add the ability to format timestamps in the function.</p>
<h2 id="conclusion">Conclusion</h2>
<p>I hope you now have a better understanding of the <code>Date</code> object in JavaScript. You can also use other third-party libraries like <code>datesj</code> and <code>moment</code> to handle dates in your application.</p>
<p>Until next time, stay safe and keep hustling.</p>
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
