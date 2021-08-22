---
card: "https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg"
tags: [Nodejs]
description: by Quinn Langille
author: "Milad E. Fahmy"
title: "How to Build A Simple Search Bot in 30 Minutes"
created: "2021-08-15T19:45:06+02:00"
modified: "2021-08-15T19:45:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-web-scraping tag-javascript tag-tutorial tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build A Simple Search Bot in 30 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*pMm3_L9RmFcb0KLJT1SirQ.jpeg" alt="How to Build A Simple Search Bot in 30 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Quinn Langille</p>
<h1 id="how-to-build-a-simple-search-bot-in-30-minutes">How to Build A Simple Search Bot in 30 Minutes</h1>
<p>Apartment hunting sucks, especially in Montreal. This guide will show you how to build a bot that stays on top of the hunt for you. This way, you’ll never have to endlessly refresh your searches again.</p>
<h3 id="context">Context</h3>
<p>Unlike other cities, most people who rent apartments in Montreal are on the same lease term. New leases start in July, last 12 months, and end on June 30th. While one could argue that this simplifies a lot of things — such as availability and expectations — it also means that competition is steep.</p>
<p>Every day I would wake up, refresh my 10 open <a href="https://www.kijiji.ca/" rel="noopener">Kijiji</a> pages, and send emails inquiring about all the new ads. I would do this again at lunch, dinner, and before bed. My reply rate was low — well below 10%. When someone did reply, their answer was usually grim.</p>
<p>My next step was to up the ante and actually pick up the phone. Calling made my chances a little better. Landlords were more responsive, and this time there were usually less than 10 people ahead of me. But definitely still more than 5. Back to the drawing board.</p>
<p>One day, while complaining to a coworker that all my time was getting eaten by this apartment hunt — it dawned on me. I could I solve this problem with my computer.</p>
<p>When I got home I wrote a small program that watches Kijiji searches for changes. When it sees them, it sends a Short Message Service (SMS) text to my phone with the relevant information. The rest of this article will explain how I did that.</p>
<p><strong>Note:</strong> for those who don’t care about the tutorial, I’ve put the Kijiji scraper up as an open source repo <a href="https://github.com/quinnlangille/pad-patrol" rel="noopener">here</a>: ?</p>
<h3 id="building-pad-patrol">Building Pad-Patrol</h3>
<p>When I arrived home from work, I got my laptop out and fired up my terminal. I knew the program should be lightweight, as I’ll be running it 24/7 — or at least until I find an apartment. I decided to just build a simple node script that I could execute from my terminal.</p>
<h4 id="setup">Setup</h4>
<p>Assuming that you have <code>node</code> and <code>npm</code> installed, the first step — of any node project — is to initialize npm inside the project directory.</p>
<p>Next, let’s create an <code>src</code> directory where our code will live.</p>
<p>Inside the<code>src</code> directory, make an <code>index.js</code> file where our script will go.</p>
<p>You can do that like so:</p><pre><code>$ npm init // this will ask a few questions$ mkdir src$ cd src &amp;&amp; touch index.js</code></pre>
<h4 id="writing-the-script">Writing the script</h4>
<p>When making a solo project I tend to freestyle — breaking stuff and then fixing it (arguably the best way to learn). I’m going to try to mimic my initial thought process with the following instructions, but let me know if they seem all over the place.</p>
<p>The very first thing we have to do is make a successful request to Kijiji. To ensure that we’re able to get a proper response, let’s make a very basic fetch.</p>
<p>To do that, we’ll need to install a request library:</p><pre><code>$ npm install request-promise</code></pre>
<p>and then add the following to <code>index.js</code>:</p>
<p>Once that’s saved, we can run <code>$ node src/index.js</code> and we should see some HTML markup in our console. Step one complete — Easy!</p>
<p>Because we only care when content changes, lets make a simple hash of the response. That way, we can compare the response and compare the hashes. In the event we need to log our results, this will be much less cumbersome than the raw markup.</p>
<p>To do this, we can use a hashing tool called <code>checksum</code>:</p><pre><code>$ yarn add checksum</code></pre>
<p>and then:</p>
<p>Ok cool, this worked! Our 1500 lines of HTML has been cut down to 32 digits. Now, let’s wrap it in a reusable function:</p>
<p>The above code will create a hash from the fetched value. Then on the following fetch, it will compare the original and new hashes.</p>
<p>If they’re different, it will return <code>true</code>. This worked great…like, a little too great. As you’ll see, it returns <code>true</code> every time ?</p>
<p>After further inspection of the response from the fetch, we can see that Kijiji has a timestamp in the header. This means that the hash will be different on every fetch. It’s important to note that this would have also happened due to rotating ads and a bunch of other dynamic content.</p>
<p>The takeaway from the above oversight is to always carefully inspect your response when dealing with an API you didn’t write.</p>
<p>This mean’s we’ll need to access granular bits of the markup, so let’s install a third party package to help parse the response. <a href="https://cheerio.js.org/" rel="noopener">Cheerio</a> is a library that can ingest HTML markup and turn it into an accessible JavaScript API. It’s intended purpose was to help <code>jQuery</code> developers not use <code>jQuery</code>, but intentions are overrated.</p>
<p>For us, it’s going to be a fake set of Chrome Developer Tools!</p>
<p>As a pre-requisite to using Cheerio in this way, we need to know what to look for in our markup. So let’s bust open Chrome and inspect our URL.</p>
<p>If we inspect at the ads, we can see all search responses have the classes <code>.search-item</code> and <code>.regular-ad</code>. Perfect!</p>
<p>We can select those with Cheerio like so:</p>
<p>Just like we had planned, this spits out an array of neatly organized objects. According to Cheerio’s documentation, all attributes of an element are nested in a key called <code>attribs</code>. If we go back to the Chrome Developer Tools, we can see that each ad has a unique data-attribute called ID. Let’s target that — replace the code inside your <code>checkURL</code> function with the following:</p><pre><code>rp(siteToCheck).then(response =&gt; {  const $ = co.load(HTMLresponse);  let apartmentString = "";</code></pre><pre><code>  // use cheerio to parse HTML response and find all search results  $(".search-item.regular-ad").each((i, element) =&gt; {    console.log(element.attribs["data-ad-id"]);  });});</code></pre>
<p>Ok great, we’re getting a list of unique ID numbers. These ID’s are the only information we care about on the page.</p>
<p>So let’s go back to our original plan of comparing hashes, except we’ll only hash the unique IDs:</p>
<p>Perfect! It’s working exactly as intended. When someone posts a new ad (or removes an old ad, a caveat of watching the order of IDs) we print <code>true</code> in our console. All that’s left to do it set up our SMS tool.</p>
<h4 id="sending-sms-from-the-terminal">Sending SMS from the Terminal</h4>
<p>This is actually much easier than it seems. To do this we’ll use a third party software called <a href="https://www.twilio.com/" rel="noopener">Twilio</a>. It does a lot, but one of it’s core features is to send SMS. As a bonus, it also has great JavaScript API! To finish the tutorial, you’ll need one of their <a href="https://www.twilio.com/try-twilio" rel="noopener">account</a>s — a free trial will be more than enough to play around — and maybe even get a new apartment.</p>
<p>Ok, so to start we need to run:</p><pre><code>$ yarn add twilio</code></pre>
<p>from there, in <code>index.js</code> lets add Twilio and define a new function called <code>SMS</code>:</p><pre><code>const twilio = require(twilio);</code></pre><pre><code>// you'll need to get your own credentials for this oneconst client = new Twilio("accountID", "authKey");</code></pre><pre><code>function SMS({ body, to, from }) {  client.messages    .create({      body,      to,      from    })    .then(() =&gt; {      console.log(`? Success! Message has been sent to ${to}`);    })    .catch(err =&gt; {      console.log(err);    });} </code></pre>
<p>This simple function takes two phone numbers (<code>to</code> and <code>from</code>) and a message (<code>body</code>). Instead of console logging the result of our <code>checkURL</code> function, we can call <code>SMS</code> with whatever message we want:</p>
<p>There you have it! Every time our script sees a change between the site hashes, it will send a text message with the URL right to your phone ?.</p>
<h3 id="happy-hunting-">Happy Hunting!</h3>
<p>The actual script that I’ve built is a little more complicated than the above example — I’ve put it up as an open source repo on <a href="https://github.com/quinnlangille/pad-patrol" rel="noopener">GitHub</a>.</p>
<p>Eventually, I’d like to make some additions to it — the first of which will be making it more generic and not just a Kijiji scraper. It’s pretty basic, so it will be a great first-time project for new contributors.</p>
<p>Feel free to contribute in any way you see fit ?</p>
<p>Also, in case anyone was wondering, I just signed a lease last Sunday. The apartment I ended up renting was from the very first update pad-patrol sent me — it was destiny ✨</p>
<p>I’m currently working as a software developer at luxury fashion company in Montreal. I’ve been doing that for about a year, after finishing a <a href="https://www.decodemtl.com" rel="noopener">web dev bootcamp</a> last summer. I spend my free time learning hot new tech and, up until a few days ago, hunting for apartments.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
