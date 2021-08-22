---
card: "https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg"
tags: [JavaScript]
description: by JS
author: "Milad E. Fahmy"
title: "A practical guide to fetch(), reduce() and formatting data from an external API"
created: "2021-08-15T19:52:12+02:00"
modified: "2021-08-15T19:52:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-tech tag-api tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A practical guide to fetch(), reduce() and formatting data from an external API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nROAmzDLiFCLQ9z7pMx8Wg.jpeg" alt="A practical guide to fetch(), reduce() and formatting data from an external API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by JS</p>
<h1 id="a-practical-guide-to-fetch-reduce-and-formatting-data-from-an-external-api">A practical guide to fetch(), reduce() and formatting data from an external API</h1>
<figcaption>Photo credit — Alexander Dummer</figcaption>
</figure>
<p>JavaScript has built-in methods that make it easy to get and manipulate data from an external API. I’ll walk through a practical example from one of my current projects that you can use as a template when starting something of your own.</p>
<p>For this exercise, we will look at current job posting data for New York City agencies. New York City is great about publishing <a href="https://opendata.cityofnewyork.us/" rel="noopener">all sorts of datasets</a>, but I chose this particular one because it doesn’t require dealing with API keys — the endpoint is a publicly accessible URL.</p>
<p>First, we’ll get the data from New York City’s servers by using JavaScript’s Fetch API. It’s is a good way to start working with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noopener">promises</a>. I’ll go over the very bare basics here, but I recommend Mariko Kosaka’s excellent illustrated blog <a href="http://kosamari.com/notes/the-promise-of-a-burger-party" rel="noopener"><em>The Promise of a Burger Party</em></a> for a more thorough (and delicious) primer.</p>
<p>If you’ve ever used <code>$.getJSON()</code> in jQuery, you’re mostly there conceptually. Take a look at the code below:</p><pre><code>const cityJobsData =   fetch('https://data.cityofnewyork.us/resource/swhp-yxa4.json');</code></pre>
<p>We declare a variable, <code>cityJobsData,</code> and set its value to <code>fetch(the URL that contains the data we want)</code> which returns something called a promise. For now, just think of a promise as the the data we will <em>eventually</em> get back from the URL when the request is complete. We can access and manipulate this data once it loads by subsequently calling <code>then()</code> on <code>cityJobsData</code>. To perform multiple operations, we can keep chaining <code>then()</code> together, making sure we 1) always pass in our data as an argument to the callback, and 2) return a value.</p><pre><code>const cityJobsData = fetch('https://data.cityofnewyork.us/resource/swhp-yxa4.json');</code></pre><pre><code>cityJobsData  .then(data =&gt; data.json())</code></pre>
<p>In the above snippet, we’re telling the computer to execute everything contained inside <code>then()</code> <em>once the data is retrieved from the URL</em>. This is what we call ‘asynchronous’ code. In this case,<code>.then(data =&gt; data.json</code>()) returns the data in JSON format, which will allow us to operate on it.</p>
<p>A quick aside for wrangling huge amounts of JSON: If you go in your web browser to the <a href="https://data.cityofnewyork.us/resource/swhp-yxa4.json" rel="noopener">URL that contains the data we want</a>, you’ll see an enormous, unformatted block of text that is very hard to read. However, you can copy and paste that text into something like <a href="http://jsonviewer.stack.hu/" rel="noopener">jsonviewer.stack.hu</a>. It will show you an organized and hierarchical overview of the contents.</p>
<p>Let’s say we want to see how many postings there are for each city agency. If we look at our JSON schema in this viewer, we can see that it’s an array of objects. Each object contains all the data that makes up a single job posting.</p>
<figcaption>screenshot of formatted JSON from jsonviewer.stack.hu</figcaption>
</figure>
<p>Note that each object contains a key, <code>agency</code>, whose value is the name of the city agency that has a job available.</p>
<p>Therefore, if we can somehow keep track of how many times each agency is mentioned throughout this array of objects, we’ll be able to know how many jobs are currently available per agency.</p>
<p>One way to count the jobs per agency is to use <code>reduce()</code>. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example" rel="noopener">From MDN</a>, “The <code>reduce()</code> method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.” If this sounds like a bunch of nonsense to you, don’t worry! It’s more clear with an example.</p>
<p>Most introductions to <code>reduce()</code> involve simple addition, which is a fine starting point. Let’s walk through this example together:</p><pre><code>const arr = [1, 2, 4, 6];const added = arr.reduce((accumulator, item) =&gt; { return accumulator + item;}, 0);</code></pre><pre><code>console.log(added); // 13</code></pre>
<p>Here’s how it works: the <code>reduce()</code> function loops through the array, <code>arr</code>, and adds each <code>item</code> to an accumulator. The accumulator has an initial value of <code>0</code> that’s set with <code>reduce()</code>'s second argument, after the callback function. The accumulator’s current value is returned at the end of every loop, which is how the adding happens. Thus, the final value of <code>added</code> is 13.</p>
<p>If you’re having trouble visualizing this, try adding a <code>console.log()</code> statement before your return that outputs the current values of the accumulator and the item. This way, you’ll be able to see the looping that’s happening behind the scenes. Here’s a set of log statements for the above example:</p><pre><code>adding 1 to accumulator: 0adding 2 to accumulator: 1adding 4 to accumulator: 3adding 6 to accumulator: 7</code></pre>
<p>This is all well and good, and it’s fun to do some addition with *~`*functional programming*`~*, but did you know <code>reduce()</code> can do more than simply count things? And that the accumulator can be something other than a number?</p>
<p>You can do all sorts of cool stuff with <code>reduce()</code> — it’s like a Swiss Army Knife. In our case, we’ll use it to find out how many current job postings there are per New York City agency. This might seem like a big leap from simply adding numbers together, but the core concepts of looping and accumulating are the same.</p>
<p>This time, instead of reducing an array of four numbers, we want to reduce our JSON blob of job posting data. And instead of reducing to a single number, we’re going to reduce to a single <em>object</em>. Yes, an object! Once the function is completed, the accumulator object’s keys will be the names of the city agencies and the keys’ values will be the number of postings they have, like this: <code>{"name of agency": number of job postings}</code>. Here’s the whole program:</p>
<p>How does this work, exactly? Let’s break it down. Each time around the loop, we’re looking at a specific <code>value</code>, i.e., one object in <code>data</code>, our aforementioned array of objects. We’re checking to see if a key with the name of the current agency (<code>value.agency</code>) already exists within our accumulator object. If not, we add it to the accumulator object and set its value to 1. If a key with the name of the current agency <em>already exists within the accumulator object</em>, we add 1 to its existing value. We return the accumulator object when we’re done and get this nice set of data:</p><pre><code>{ 'FIRE DEPARTMENT': 17,  'DEPT OF ENVIRONMENT PROTECTION': 134,  'DEPARTMENT OF INVESTIGATION': 22,  'DEPARTMENT OF SANITATION': 14,  'DEPT OF HEALTH/MENTAL HYGIENE': 247,  'OFFICE OF THE COMPTROLLER': 14,  'ADMIN FOR CHILDREN\'S SVCS': 43,  'DEPT OF DESIGN &amp; CONSTRUCTION': 48,  'ADMIN TRIALS AND HEARINGS': 16,  'DEPT OF PARKS &amp; RECREATION': 34,  'HUMAN RIGHTS COMMISSION': 4,  'POLICE DEPARTMENT': 36,  'DEPT OF INFO TECH &amp; TELECOMM': 50,  'DISTRICT ATTORNEY KINGS COUNTY': 4,  'TAXI &amp; LIMOUSINE COMMISSION': 11,  'HOUSING PRESERVATION &amp; DVLPMNT': 21,  'DEPARTMENT OF BUSINESS SERV.': 18,  'HRA/DEPT OF SOCIAL SERVICES': 31,  'DEPARTMENT OF PROBATION': 3,  'TAX COMMISSION': 4,  'NYC EMPLOYEES RETIREMENT SYS': 6,  'OFFICE OF COLLECTIVE BARGAININ': 2,  'DEPARTMENT OF BUILDINGS': 9,  'DEPARTMENT OF FINANCE': 29,  'LAW DEPARTMENT': 21,  'DEPARTMENT OF CORRECTION': 12,  'DEPARTMENT OF TRANSPORTATION': 67,  'DEPT OF YOUTH &amp; COMM DEV SRVS': 5,  'FINANCIAL INFO SVCS AGENCY': 7,  'CULTURAL AFFAIRS': 1,  'OFFICE OF EMERGENCY MANAGEMENT': 12,  'DEPARTMENT OF CITY PLANNING': 5,  'DEPT OF CITYWIDE ADMIN SVCS': 15,  'DEPT. OF HOMELESS SERVICES': 3,  'DEPARTMENT FOR THE AGING': 2,  'CONSUMER AFFAIRS': 7,  'MAYORS OFFICE OF CONTRACT SVCS': 7,  'DISTRICT ATTORNEY RICHMOND COU': 3,  'NYC HOUSING AUTHORITY': 9,  'CIVILIAN COMPLAINT REVIEW BD': 5,  'OFF OF PAYROLL ADMINISTRATION': 1,  'EQUAL EMPLOY PRACTICES COMM': 1 }</code></pre>
<p><em>Et Voila</em>! We now know that if we want to work for New York City’s government, we should check out the Department of Health and Mental Hygiene’s 247 openings!</p>
<p>We can do a bunch of useful things with this data — personally, I want to dip my toes into data visualization, so I’ll be using it to make a simple chart. I hope you’ll be able to use this example as a jumping-off point for your own projects.</p>
<p>If you enjoyed this article, please reach out to me on <a href="http://twitter.com/j_speda" rel="noopener">Twitter</a>!</p>
<p>Thanks to <a href="http://twitter.com/jimcodes" rel="noopener">Jim O’Brien</a> for editing.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
