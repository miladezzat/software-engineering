---
card: "https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg"
tags: [JavaScript]
description: by Iain Nash
author: "Milad E. Fahmy"
title: "How to correctly mock Moment.js/dates in Jest"
created: "2021-08-15T19:35:59+02:00"
modified: "2021-08-15T19:35:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-jest tag-react tag-testing tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to correctly mock Moment.js/dates in Jest</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*W26Jdk8ZEo4QDC797b7smA.jpeg" alt="How to correctly mock Moment.js/dates in Jest">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Iain Nash</p>
<h1 id="how-to-correctly-mock-moment-js-dates-in-jest">How to correctly mock Moment.js/dates in Jest</h1>
<p>Times and dates <a href="https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time" rel="noopener">are infamously hard</a> to correctly implement in code. This makes testing date and time code correctly important. Testing allows for reasoning around logic in code and also to allow catching edge cases or errors before they impact users.</p>
<p>A common mistake when testing date and time code is to not set the current time to a static time. If code in the UI renders today’s date and is tested properly, that test that only works until the current time changes too much. Javascript exposes the built-in <code>Date</code> object which allows for retrieving the current time through construction with no arguments or a call to the <code>now() </code>property.</p>
<p><a href="https://momentjs.com/" rel="noopener">Moment.js</a> is a popular front-end date manipulation library that is commonly used to manipulate, load, format, and shift time. It uses an empty constructor to get the current time. Jest is often used in conjunction with Moment and React applications. Additionally, Jest snapshot testing introduces new dependencies on date and time that are important to consider. Below is an example problematic component that renders the current day:</p>
<p>An initial test for the <code>TodayIntro </code>component could look like:</p>
<p>However, this test will fail on any day that is not Jan 23rd. A solution to this is to override Javascript’s date function to return a known date to work against when writing tests.</p>
<p>This code overrides the Date constructor to set a static “current” date:</p>
<p>An ineffective solution is to do the date math yourself against the current time the test is run. This is an ineffective test because you’re running the same code you’re testing to test the return value. For instance, if testing by comparing formatted dates through moment, one would not catch if the moment formatting code changes <code>MMM</code> to <code>JAN</code> instead of <code>Jan</code> .</p>
<h4 id="ways-to-set-a-static-time-and-timezone-for-jest-js">Ways to set a static time and timezone for Jest/JS</h4>
<ol>
<li>Use a library to mock out Date object to return a static date and timezone (we’d recommend <a href="https://github.com/boblauer/MockDate" rel="noopener">MockDate</a> for simple cases, but read on for a breakdown of the alternatives)</li>
<li>Mock <code>moment().format()</code> to return a static string</li>
<li>Mock the <code>Date</code> constructor and <code>now()</code> function to return a static time</li>
</ol>
<p>Using a library in this case is preferable because these libraries are well tested, do not introduce boilerplate code and handle transparently both cases dates can be created (<code>Date.now()</code> vs <code>new Date()</code> etc.). Additionally, using a library allows for easily following test code and setting a specific time per test which allows for better testing practices.</p>
<ul>
<li><code><a href="https://github.com/boblauer/MockDate" rel="noopener">MockDate</a></code> provides further functionality for time zones and is easy to use</li>
<li><code><a href="https://sinonjs.org/releases/v7.2.4/fake-timers/" rel="noopener">sinon</a></code> provides Date and timer (<code>setTimeout</code> etc.) mocks</li>
<li>Manually setting the mock can be useful in limited environments, however, can become rather complicated</li>
<li><code><a href="https://jasmine.github.io/" rel="noopener">jasmine</a></code> (not included in jest), comes with a <a href="https://jasmine.github.io/api/2.6/Clock.html" rel="noopener">jasmine.clock()</a></li>
</ul>
<p>The examples below use <a href="https://github.com/boblauer/MockDate" rel="noopener">MockDate</a>, which only focuses on mocking the Date object simply and handles testing time zone offsets as well for testing local time zone conversion.</p>
<p>A <a href="https://jestjs.io/docs/en/snapshot-testing" rel="noopener">snapshot test</a>, as well, is simple to test with mocked dates:</p>
<p>Since <a href="https://airbnb.io/enzyme/" rel="noopener">enzyme</a> is an awesome library, an enzyme shallow example:</p>
<h3 id="how-to-better-test-date-logic">How to (better) test date logic</h3>
<p>Dates have a lot of edge cases and logic behind them. When testing dates, make sure to cover edge cases and not just set one specific date to test and move on. Dates can also vary according to locale and time zone.</p>
<p>Properly testing dates require reasoning around edge cases that could occur and writing tests to ensure those edge cases behave as expected and that future changes to code or libraries used in your application don’t break those assumptions. Additionally, adding code to set the current date and time to a static date and time across all test code may be easier, but prevents good reasoning around testing Dates and hides test assumptions in library code.</p>
<p>Here are a few incorrect and often implicit assumptions about dates:</p>
<ol>
<li>Clients all exist within one time zone and daylight saving time</li>
<li>All clients exist within the developer’s time zone</li>
<li>The length of a Month name is relatively similar</li>
<li>Server clocks are always correct</li>
<li>The server knows the client’s timezone/time settings</li>
</ol>
<p>This test assumes the server is always in the correct timezone and that timezone is set correctly. Instead, set the timezone and make sure the date matches the local timezone correctly.</p>
<p>It is important to ensure that when tests access the current time the “current time” is set to a static value. If the value is dynamic, either tests eventually break or a test is testing against dynamic values. Dynamic values are not effective at testing behavior since a bug will not be exposed by comparing the return value of two functions that are the same as compared to comparing to a static value that doesn’t change as the code is modified.</p>
<h3 id="looking-ahead-date-time-storage-and-design">Looking ahead: Date time storage and design</h3>
<p>Having a requirement to add tests to a code base doesn’t necessarily provide any value unless those tests are reviewed, run, and reasoned about just as strictly as running code.</p>
<p>Date and time logic introduces a large set of possibilities in terms of behavior and output, making a strong incentive to test effectively for date and time. Beyond testing, acknowledging and keeping relevant data along with a strategy to synchronize and store date times consistently across systems early on both helps testing and makes for a better user experience.</p>
<p>These tips and approaches apply to more than just Javascript &amp; Jest testing for dates and times. They also work in a NodeJS context and in a general sense around key things to test for in systems that handle date and time in general. In many cases, storing time on the server in UTC (Universal coordinated time) then converting to the local time zone based on client / browser settings is ideal. If the client is inaccessible, storing both the UTC time and user’s actual timezone is an effective way to consistently treat dates and times.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
