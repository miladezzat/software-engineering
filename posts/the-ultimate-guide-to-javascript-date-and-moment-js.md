---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg"
tags: [JavaScript]
description: Welcome to our ultimate guide on the JavaScript Date object a
author: "Milad E. Fahmy"
title: "The Ultimate Guide to JavaScript Date and Moment.js"
created: "2021-08-15T19:32:00+02:00"
modified: "2021-08-15T19:32:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to JavaScript Date and Moment.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ee7740569d1a4ca3fce.jpg" alt="The Ultimate Guide to JavaScript Date and Moment.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Welcome to our ultimate guide on the JavaScript <code>Date</code> object and Moment.js. This tutorial will teach you everything you need to know about working with dates and times in your projects.</p>
<h2 id="how-to-create-a-date-object">How to Create a <code>Date</code> Object</h2>
<h3 id="get-the-current-date-and-time">Get the current date and time</h3><pre><code class="language-js">const now = new Date();
// Mon Aug 10 2019 12:58:21 GMT-0400 (Eastern Daylight Time)</code></pre>
<h3 id="get-a-date-and-time-with-individual-values">Get a date and time with individual values</h3><pre><code class="language-js">const specifiedDate = new Date(2019, 4, 29, 15, 0, 0, 0);
// Wed May 29 2019 15:00:00 GMT-0400 (Eastern Daylight Time)</code></pre>
<p>The syntax is <code>Date(year, month, day, hour, minute, second, millisecond)</code>. </p>
<p>Note that the months are zero-indexed, beginning with January at 0 and ending with December at 11.</p>
<h3 id="get-a-date-and-time-from-a-timestamp">Get a date and time from a timestamp</h3><pre><code class="language-js">const unixEpoch = new Date(0);</code></pre>
<p>This represents the time at Thursday, January 1st, 1970 (UTC), or the Unix Epoch time. The Unix Epoch is important because it's what JavaScript, Python, PHP, and other languages and systems use internally to calculate the current time.</p>
<p><code>new Date(ms)</code> returns the date of the epoch plus the number of milliseconds you pass in. In a day there's 86,400,000 milliseconds so:</p><pre><code class="language-js">const dayAfterEpoch = new Date(86400000);</code></pre>
<p>will return Friday, January 2nd, 1970 (UTC).</p>
<h3 id="get-a-date-and-time-from-a-string">Get a date and time from a string</h3><pre><code class="language-js">const stringDate = new Date('May 29, 2019 15:00:00');
// Wed May 29 2019 15:00:00 GMT-0400 (Eastern Daylight Time)</code></pre>
<p>Getting the date this way is very flexible. All of the examples below return valid <code>Date</code> objects:</p><pre><code class="language-js">new Date('2019-06') // June 1st, 2019 00:00:00
new Date('2019-06-16') // June 16th, 2019
new Date('2019') // January 1st, 2019 00:00:00
new Date('JUNE 16, 2019')
new Date('6/23/2019')</code></pre>
<p>You can also use the <code>Date.parse()</code> method to return the number of milliseconds since the epoch (January 1st, 1970):</p><pre><code class="language-js">Date.parse('1970-01-02') // 86400000
Date.parse('6/16/2019') // 1560610800000</code></pre>
<h3 id="setting-a-time-zone">Setting a time zone</h3>
<p>When passing a date string without setting a time zone, JavaScript assumes the date/time are in UTC before converting it to your browser's time zone:</p><pre><code class="language-js">const exactBirthdate = new Date('6/13/2018 06:27:00');
console.log(exactBirthdate) // Wed Jun 13 2018 06:27:00 GMT+0900 (Korean Standard Time)</code></pre>
<p>This can lead to errors where the date returned is off by many hours. To avoid this, pass in a time zone along with the string:</p><pre><code class="language-js">const exactBirthdate = new Date('6/13/2018 06:27:00 GMT-1000');
console.log(exactBirthdate) // Thu Jun 14 2018 01:27:00 GMT+0900 (Korean Standard Time)
/*
These formats also work:
new Date('6/13/2018 06:27:00 GMT-10:00');
new Date('6/13/2018 06:27:00 -1000');
new Date('6/13/2018 06:27:00 -10:00');
*/</code></pre>
<p>You can also pass some, but not all, time zone codes:</p><pre><code class="language-js">const exactBirthdate = new Date('6/13/2018 06:27:00 PDT');
console.log(exactBirthdate) // Thu Jun 14 2018 01:27:00 GMT+0900 (Korean Standard Time)</code></pre>
<h2 id="date-object-methods"><code>Date</code> Object Methods</h2>
<p>Often you will not need the entire date, but just part of it like the day, week or month. Fortunately there are a number of methods to do just that:</p><pre><code class="language-js">const birthday = new Date('6/13/2018 06:27:39');
birthday.getMonth() // 5 (0 is January)
birthday.getDate() // 13
birthday.getDay() // 3 (0 is Sunday)
birthday.getFullYear() // 2018
birthday.getTime() // 1528838859000 (milliseconds since the Unix Epoch)
birthday.getHours() // 6
birthday.getMinutes() // 27
birthday.getSeconds() // 39
birthday.getTimezoneOffset() // -540 (time zone offset in minutes based on your browser's location)</code></pre>
<h2 id="make-working-with-dates-easier-with-moment-js">Make Working with Dates Easier with Moment.js</h2>
<p>Getting dates and times right is no small task. Every country seems to have a different way of formatting dates, and accounting for different time zones and daylight savings/summer time takes, well, a whole lot of time. That's where Moment.js shines – it makes parsing, formatting, and displaying dates a breeze.</p>
<p>To start using Moment.js, install it through a package manager like <code>npm</code>, or add it to your site through a CDN. See the <a href="https://momentjs.com/docs/">Moment.js documentation</a> for more details.</p>
<h3 id="get-the-current-date-and-time-with-moment-js">Get the current date and time with Moment.js</h3><pre><code class="language-js">const now = moment();</code></pre>
<p>This returns an object with the date and time based on your browser's location, along with other locale information. It's similar to native JavaScript's <code>new Date()</code>.</p>
<h3 id="get-a-date-and-time-from-a-timestamp-with-moment-js">Get a date and time from a timestamp with Moment.js</h3>
<p>Similar to <code>new Date(ms)</code>, you can pass the number of milliseconds since the epoch to <code>moment()</code>:</p><pre><code class="language-js">const dayAfterEpoch = moment(86400000);</code></pre>
<p>If you want to get a date using a Unix timestamp in seconds, you can use the <code>unix()</code> method:</p><pre><code class="language-js">const dayAfterEpoch = moment.unix(86400);</code></pre>
<h3 id="get-a-date-and-time-from-a-string-with-moment-js">Get a date and time from a string with Moment.js</h3>
<p>Parsing a date from a string with Moment.js is easy, and the library accepts strings in the ISO 8601 or RFC 2822 Date Time format, along with any string accepted by the JavaScript <code>Date</code> object.</p>
<p>ISO 8601 strings are recommended since it is a widely accepted format. Here are some examples:</p><pre><code class="language-js">moment('2019-04-21');
moment('2019-04-21T05:30');
moment('2019-04-21 05:30');
moment('20190421');
moment('20190421T0530');</code></pre>
<h3 id="setting-a-time-zone-with-moment-js">Setting a time zone with Moment.js</h3>
<p>Up until now, we have been using Moment.js in <em>local mode</em>, meaning that any input is assumed to be a local date or time. This is similar to how the native JavaScript <code>Date</code> object works:</p><pre><code class="language-js">const exactBirthMoment = moment('2018-06-13 06:27:00');
console.log(exactBirthMoment) // Wed Jun 13 2018 06:27:00 GMT+0900 (Korean Standard Time)</code></pre>
<p>However, to set a time zone, you must first get the Moment object in <em>UTC mode:</em></p><pre><code class="language-js">const exactBirthMoment = moment.utc('2018-06-13 06:27:00');
console.log(exactBirthMoment) // Wed Jun 13 2018 15:27:00 GMT+0900 (Korean Standard Time)</code></pre>
<p>Then you can adjust for the difference in time zones with the <code>utcOffset()</code> method:</p><pre><code class="language-js">const exactBirthMoment = moment.utc('2018-06-13 06:27:00').utcOffset('+10:00');
console.log(exactBirthMoment) // Wed Jun 13 2018 06:27:00 GMT+0900 (Korean Standard Time)</code></pre>
<p>You can also set the UTC offset as a number or a string:</p><pre><code class="language-js">moment.utc().utcOffset(10) // Number of hours offset
moment.utc().utcOffset(600) // Number of minutes offset
moment.utc().utcOffset('+10:00') // Number of hours offset as a string</code></pre>
<p>To use named time zones (<code>America/Los_Angeles</code>) or time zone codes (<code>PDT</code>) with Moment objects, check out the <a href="https://momentjs.com/timezone/">Moment Timezone</a> library.</p>
<h3 id="format-the-date-and-time-with-moment-js">Format the date and time with Moment.js</h3>
<p>One of the major strengths that Moment.js has over native JavaScript <code>Date</code> objects is how easy it is to format the output date and time. Just chain the &nbsp;<code>format()</code> method to a Moment date object and pass it a format string as a parameter:</p><pre><code class="language-js">moment().format('MM-DD-YY'); // "08-13-19"
moment().format('MM-DD-YYYY'); // "08-13-2019"
moment().format('MM/DD/YYYY'); // "08/13/2019"
moment().format('MMM Do, YYYY') // "Aug 13th, 2019"
moment().format('ddd MMMM Do, YYYY HH:mm:ss') // "Tues August 13th, 2019 19:29:20"
moment().format('dddd, MMMM Do, YYYY -- hh:mm:ss A') // "Tuesday, August 13th, 2019 -- 07:31:02 PM"</code></pre>
<p>Here's a table with some common formatting tokens:</p>
<style type="text/css">
.tg {
border-collapse: collapse;
border-spacing: 0;
}
.tg td {
font-family: Lato, sans-serif;
font-size: 2.2rem;
padding: 10px 5px;
border-style: solid;
border-width: 1px;
overflow: hidden;
word-break: normal;
border-color: black;
}
.tg th {
font-family: Lato, sans-serif;
font-size: 2.2rem;
font-weight: normal;
padding: 10px 5px;
border-style: solid;
border-width: 1px;
overflow: hidden;
word-break: normal;
border-color: black;
}
.tg .tg-v1p6 {
font-size: 2.2rem;
font-family: Lato !important;
;
text-align: right;
vertical-align: top
}
.tg .tg-nh17 {
font-size: 2.2rem;
font-family: Lato !important;
;
text-align: left;
vertical-align: top
}
.tg .tg-htb4 {
font-weight: bold;
font-size: 2.2rem;
font-family: Lato !important;
;
background-color: #efefef;
text-align: center;
vertical-align: top
}
</style>
<table class="tg">
<tbody>
<tr>
<th class="tg-htb4">Input</th>
<th class="tg-htb4">Output</th>
<th class="tg-htb4">Description</th>
</tr>
<tr>
<td class="tg-v1p6">YYYY</td>
<td class="tg-nh17">2019</td>
<td class="tg-nh17">4 digit year</td>
</tr>
<tr>
<td class="tg-v1p6">YY</td>
<td class="tg-nh17">19</td>
<td class="tg-nh17">2 digit year</td>
</tr>
<tr>
<td class="tg-v1p6">MMMM</td>
<td class="tg-nh17">August</td>
<td class="tg-nh17">Full month name</td>
</tr>
<tr>
<td class="tg-v1p6">MMM</td>
<td class="tg-nh17">Aug</td>
<td class="tg-nh17">Abbreviated month name</td>
</tr>
<tr>
<td class="tg-v1p6">MM</td>
<td class="tg-nh17">08</td>
<td class="tg-nh17">2 digit month</td>
</tr>
<tr>
<td class="tg-v1p6">M</td>
<td class="tg-nh17">8</td>
<td class="tg-nh17">1 digit month</td>
</tr>
<tr>
<td class="tg-v1p6">DDD</td>
<td class="tg-nh17">225</td>
<td class="tg-nh17">Day of the year</td>
</tr>
<tr>
<td class="tg-v1p6">DD</td>
<td class="tg-nh17">13</td>
<td class="tg-nh17">Day of the month</td>
</tr>
<tr>
<td class="tg-v1p6">Do</td>
<td class="tg-nh17">13th</td>
<td class="tg-nh17">Day of the month with ordinal</td>
</tr>
<tr>
<td class="tg-v1p6">dddd</td>
<td class="tg-nh17">Wednesday</td>
<td class="tg-nh17">Full day name</td>
</tr>
<tr>
<td class="tg-v1p6">ddd</td>
<td class="tg-nh17">Wed</td>
<td class="tg-nh17">Abbreviated day name</td>
</tr>
<tr>
<td class="tg-v1p6">HH</td>
<td class="tg-nh17">17</td>
<td class="tg-nh17">Hours in 24 hour time</td>
</tr>
<tr>
<td class="tg-v1p6">hh</td>
<td class="tg-nh17">05</td>
<td class="tg-nh17">Hours in 12 hour time</td>
</tr>
<tr>
<td class="tg-v1p6">mm</td>
<td class="tg-nh17">32</td>
<td class="tg-nh17">Minutes</td>
</tr>
<tr>
<td class="tg-v1p6">ss</td>
<td class="tg-nh17">19</td>
<td class="tg-nh17">Seconds</td>
</tr>
<tr>
<td class="tg-v1p6">a</td>
<td class="tg-nh17">am / pm</td>
<td class="tg-nh17">Ante or post meridiem</td>
</tr>
<tr>
<td class="tg-v1p6">A</td>
<td class="tg-nh17">AM / PM</td>
<td class="tg-nh17">Capitalized ante or post meridiem</td>
</tr>
<tr>
<td class="tg-v1p6">ZZ</td>
<td class="tg-nh17">+0900</td>
<td class="tg-nh17">Timezone offset from UTC</td>
</tr>
<tr>
<td class="tg-v1p6">X</td>
<td class="tg-nh17">1410715640.579</td>
<td class="tg-nh17">Unix timestamp in seconds</td>
</tr>
<tr>
<td class="tg-v1p6">XX</td>
<td class="tg-nh17">1410715640579</td>
<td class="tg-nh17">Unix timestamp in milliseconds</td>
</tr>
</tbody>
</table>
<p>See the <a href="https://momentjs.com/docs/">Moment.js docs</a> for more formatting tokens.</p>
<p>Working with JavaScript <code>Date</code> objects and Moment.js doesn't have to be time consuming. Now you should know more than enough to get started with both.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
