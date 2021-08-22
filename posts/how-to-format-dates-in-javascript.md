---
card: "/images/default.jpg"
tags: [JavaScript]
description: For a long time, I've used libraries like Date-fns whenever I
author: "Milad E. Fahmy"
title: "How to Format Dates in JavaScript with One Line of Code"
created: "2021-08-15T19:23:39+02:00"
modified: "2021-08-15T19:23:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Format Dates in JavaScript with One Line of Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/Formatting-Date-in-JavaScript-with-1-line-of-code.jpg 300w,
/news/content/images/size/w600/2021/07/Formatting-Date-in-JavaScript-with-1-line-of-code.jpg 600w,
/news/content/images/size/w1000/2021/07/Formatting-Date-in-JavaScript-with-1-line-of-code.jpg 1000w,
/news/content/images/size/w2000/2021/07/Formatting-Date-in-JavaScript-with-1-line-of-code.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/Formatting-Date-in-JavaScript-with-1-line-of-code.jpg" alt="How to Format Dates in JavaScript with One Line of Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>For a long time, I've used libraries like <code>Date-fns</code> whenever I need to format dates in JavaScript. But it gets really weird whenever I do this in small projects that require simple date formats which JavaScript offers by default.</p>
<p>I discovered that most developers do this a lot. And I thought that this was the best way until I recently figured out that <strong>we don’t always need to use libraries </strong>to format dates in JavaScript<strong>.</strong></p>
<p>In case you are curious to try this out, here is the code:👇</p><pre><code class="language-javascript">new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
// "Friday, Jul 2, 2021"</code></pre>
<p>After trying this in your own code and seeing that it works, let's understand why it works and learn some other ways of formatting dates in JavaScript with just one line of code.</p>
<h1 id="how-to-format-dates-in-js">How to Format Dates in JS</h1>
<p>Getting the date in JavaScript isn't usually a problem, but formatting these dates to suit your project can be cumbersome for beginners. Because of this, most people eventually end up using libraries. </p>
<p>The most used method to get the date in JavaScript is the <code>new Date()</code> object. </p>
<p>By default, when you run <code>new Date()</code> in your terminal, it uses your browser's time zone and displays the date as a full text string, like <strong>Fri Jul 02 2021 12:44:45 GMT+0100 (British Summer Time). </strong></p>
<p>But having something like this in your web page or application is not professional and isn't easy to read. So this forces you to look for better ways to format these dates. </p>
<p>Let’s take a look at some methods that operate on a date object.</p>
<h1 id="date-methods-in-javascript">Date Methods in JavaScript</h1>
<p>There are so many methods that you can apply to the date object. You can use these methods to get information from a date object. Here are some of them:</p>
<ul>
<li><code>getFullYear()</code> – gets the year as a four digit number (yyyy)</li>
<li><code>getMonth()</code> – gets the month as a number (0-11)</li>
<li><code>getDate()</code> – gets the day as a number (1-31)</li>
<li><code>getHours()</code> – gets the hour (0-23)</li>
</ul>
<p>And lots more… </p>
<p>Unfortunately, most of these methods still needs a lot of code to convert the dates to the format we desire. </p>
<p>For example, <code>new Date().getMonth()</code> will output 6 which stands for <strong>July. </strong>For me to use July in my project, I will need to have long code like this which can really be cumbersome:</p><pre><code class="language-Javascript">const currentMonth = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[currentMonth.getMonth()]);</code></pre>
<p>Let’s take a look at two methods that you can use to format your dates in the best way so you can use them for your projects.</p>
<h2 id="the-todatestring-method-in-javascript">The toDateString() Method in JavaScript</h2>
<p>The JavaScript <code>toDateString()</code> method returns the date portion of a date object in the form of a string using the following format:</p>
<ol>
<li>First three letters of the week day name</li>
<li>First three letters of the month name</li>
<li>Two digit day of the month, padded on the left a zero if necessary</li>
<li>Four digit year (at least), padded on the left with zeros if necessary</li>
</ol><pre><code class="language-javascript">new Date().toDateString();
//"Fri Jul 02 2021"</code></pre>
<p>One major downside to this method is our inability to manipulate the date output the way we want it. &nbsp;</p>
<p>For example, it doesn’t give us the ability to show dates according to our language. Let’s take a look at another method which to me is still one of the best.</p>
<h2 id="the-tolocaledatestring-method-in-javascript">The toLocaleDateString() Method in JavaScript</h2>
<p>This method returns the date object as a string using local conventions. It also takes in options as arguments which lets you/your applications customize the behavior of the function.</p>
<p><strong>Syntax:</strong></p><pre><code class="language-javascript">toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)</code></pre>
<p>Let's take a look a some examples and their outputs:</p><pre><code class="language-javascript">const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
console.log(currentDate.toLocaleDateString('de-DE', options));
//Freitag, 2. Juli 2021
console.log(currentDate.toLocaleDateString('ar-EG', options))
// الجمعة، ٢ يوليو ٢٠٢١
console.log(currentDate.toLocaleDateString('en-us', options));
//Friday, Jul 2, 2021</code></pre>
<p><br>You can also decide not to use either locales or options:</p><pre><code class="language-javascript">new Date().toLocaleDateString()
// "7/2/2021"</code></pre>
<p>And you can also decide to only use locales. This will output the same information as the previous based on my browser's time zone.</p><pre><code class="language-javascript">new Date().toLocaleDateString('en-US')
"7/2/2021"</code></pre>
<p>You can also decide to twist the options as you wish. There are 4 basic options which are:</p>
<ul>
<li><code>weekday</code> – This outputs the day of the week depending on how you want it to appear (short or long).</li>
<li><code>year</code> – This outputs the year as a number</li>
<li><code>month</code> – This outputs the month of the year depending on how you want it to appear (short or long).</li>
<li><code>day</code> – Finally, this outputs the day as a number</li>
</ul><pre><code class="language-javascript">new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short"}) // "Jul 2021 Friday"
new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"})
// "Jul 2021"</code></pre>
<h1 id="conclusion">Conclusion</h1>
<p>The date object has about seven formatting methods. Each of these methods gives you a specific value:</p>
<ol>
<li><code>toString()</code> gives you <strong>Fri Jul 02 2021 14:03:54 GMT+0100 (British Summer Time)</strong></li>
<li><code>toDateString()</code> gives you <strong>Fri Jul 02 2021</strong></li>
<li><code>toLocaleString()</code> gives you <strong>7/2/2021, 2:05:07 PM</strong></li>
<li><code>toLocaleDateString()</code> gives you <strong>7/2/2021</strong></li>
<li><code>toGMTString()</code> gives you <strong>Fri, 02 Jul 2021 13:06:02 GMT</strong></li>
<li><code>toUTCString()</code> gives you <strong>Fri, 02 Jul 2021 13:06:28 GMT</strong></li>
<li><code>toISOString()</code> gives you <strong>2021-07-02T13:06:53.422Z</strong></li>
</ol>
<p>If you are looking for more advanced date formats, then you will need to create a custom format yourself. Check out the resources below to help you understand how to create custom date formats.</p>
<h2 id="useful-resources">Useful Resources</h2>
<ul>
<li><a href="https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/" rel="noreferrer nofollow noopener">Everything You Need to Know About Date in JavaScript</a></li>
<li><a href="https://www.tabnine.com/academy/javascript/how-to-format-date/" rel="noreferrer nofollow noopener">JavaScript - How to Format Date in JavaScript</a></li>
<li><a href="https://flaviocopes.com/how-to-format-date-javascript/" rel="noreferrer nofollow noopener">How to format a date in JavaScript</a></li>
<li><a href="https://www.toptal.com/software/definitive-guide-to-datetime-manipulation" rel="noreferrer nofollow noopener">The Definitive Guide to DateTime Manipulation</a></li>
</ul>
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
