---
card: "https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg"
tags: [Python]
description: "In this quick guide to Python s datetime module, you ll learn"
author: "Milad E. Fahmy"
title: "Python s datetime Module – How to Handle Dates in Python"
created: "2021-08-16T15:34:44+02:00"
modified: "2021-08-16T15:34:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-modules ">
<header class="post-full-header">
<h1 class="post-full-title">Python's datetime Module – How to Handle Dates in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6022ad400a2838549dcc1f89.jpg" alt="Python's datetime Module – How to Handle Dates in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this quick guide to Python's <code>datetime</code> module, you'll learn how to parse dates, extract meaningful information from dates, handle <code>timedelta</code> objects and much more. </p><p>So without further ado let's start counting time with Python!</p><p>Most programming languages provide libraries for easy handling of dates. Python offers the powerful <code>datetime</code> module with its many functions and lucid documentation which makes parsing dates easy. </p><p>This article lists out some of the most important functions from this module, how it can be applied for real-world situations, and some tricky things to watch out for when using it. </p><h2 id="how-to-convert-timestamps-to-datetime-objects-using-strptime-">How to Convert Timestamps to <code>datetime</code> Objects Using <code>strptime()</code></h2><p>Dates can give us a lot of information like the month, year, day, weekday and whether it's a holiday or not. <code>strptime()</code> converts a timestamp in the form of a string to a <code>datetime</code> object which gives us a lot of extra functionalities. This function expects a string and the format of the timestamp. </p><pre><code>from datetime import datetime
d = datetime.strptime("21-02-2021 18:46:00", "%d-%m-%Y %H:%M:%S")</code></pre><p>The string 21-02-2021 18:46:00 is converted to a suitable <code>datetime</code> using the format specified. Some of the most useful directives are:</p><ul><li><code>%d</code> for day of month as a zero-padded decimal like 01, 02, 03 </li><li><code>%m</code> for month as a zero-padded decimal number</li><li><code>%Y</code> for year with century as a decimal number</li><li><code>%H</code> for 24 hour clock with a zero-padded hour value</li><li><code>%M</code> for zero-padded minutes, and </li><li><code>%S</code> for zero-padded seconds.</li></ul><p>This collection of format specifiers is enough to get you started. For more options, you can browse through the docs linked <a href="https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior">here</a>. </p><h3 id="how-to-get-the-current-timestamp-value">How to Get the Current Timestamp Value</h3><p>Suppose you want to store data to a database with the current timestamp as a key. To obtain the current timestamp, you just need 1 line of code:</p><pre><code class="language-python">#Obtain the current timestamp
from datetime import datetime
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
