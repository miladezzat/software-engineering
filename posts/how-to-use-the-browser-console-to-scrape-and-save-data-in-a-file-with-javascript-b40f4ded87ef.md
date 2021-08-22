---
card: "https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_"
tags: [JavaScript]
description: by Praveen Dubey
author: "Milad E. Fahmy"
title: "How to use the browser console to scrape and save data in a file with JavaScript"
created: "2021-08-15T19:39:41+02:00"
modified: "2021-08-15T19:39:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-browsers tag-json tag-tech tag-data ">
<header class="post-full-header">
<h1 class="post-full-title">How to use the browser console to scrape and save data in a file with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_ 300w,
https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_ 600w,
https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*5OIliU0XmrYf_hx_" alt="How to use the browser console to scrape and save data in a file with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Praveen Dubey</p>
<h1 id="how-to-use-the-browser-console-to-scrape-and-save-data-in-a-file-with-javascript">How to use the browser console to scrape and save data in a file with JavaScript</h1>
<figcaption>Photo by <a href="https://unsplash.com/@leecampbell" rel="noopener" target="_blank" title="">Lee </a>from <a href="https://unsplash.com" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>A while back I had to crawl a site for links, and further use those page links to crawl data using selenium or puppeteer. Setup for the content on the site was bit uncanny so I couldn’t start directly with selenium and node. Also, unfortunately, data was huge on the site. I had to quickly come up with an approach to first crawl all the links and pass those for details crawling of each page.</p>
<p>That’s where I learned this cool stuff with the browser Console API. You can use this on any website without much setup, as it’s just JavaScript.</p>
<p>Let’s jump into the technical details.</p>
<h3 id="high-level-overview">High Level Overview</h3>
<p>For crawling all the links on a page, I wrote a small piece of JS in the console. This JavaScript crawls all the links (takes 1–2 hours, as it does pagination also) and dumps a <code>json</code> file with all the crawled data. The thing to keep in mind is that you need to make sure the website works <em>similarly to a single page application. </em>Otherwise, it does not reload the page if you want to crawl more than one page<em>.</em> If it does not, your console code will be gone.</p>
<p>Medium does not refresh the page for some scenarios. For now, let’s crawl a story and save the scraped data in a file from the console automatically after scrapping.</p>
<p>But before we do that here’s a quick demo of the final execution.</p>
<figcaption>Demo</figcaption>
</figure>
<h3 id="1-get-the-console-object-instance-from-the-browser">1. Get the console object instance from the browser</h3><pre><code>// Console API to clear console before logging new data </code></pre><pre><code>console.API;</code></pre><pre><code>if (typeof console._commandLineAPI !== 'undefined') {    console.API = console._commandLineAPI; //chrome</code></pre><pre><code>} else if (typeof console._inspectorCommandLineAPI !== 'undefined'){    console.API = console._inspectorCommandLineAPI; //Safari</code></pre><pre><code>} else if (typeof console.clear !== 'undefined') {    console.API = console;</code></pre><pre><code>}</code></pre>
<p>The code is simply trying to get the console object instance based on the user’s current browser. You can ignore and directly assign the instance to your browser.</p>
<p>Example, if you using <em>Chrome</em>, the below code should be sufficient.</p><pre><code>if (typeof console._commandLineAPI !== 'undefined') {    console.API = console._commandLineAPI; //chrome</code></pre><pre><code>}</code></pre>
<h3 id="2-defining-the-junior-helper-function">2. Defining the Junior helper function</h3>
<p>I’ll assume that you have opened a Medium story as of now in your browser. Lines 6 to 12 define the DOM element attributes which can be used to extract <em>story title, clap count, user name, profile image URL, profile description and read time of the story,</em> respectively.</p>
<p>These are the basic things which I want to show for this story. You can add a few more elements like extracting links from the story, all images, or embed links.</p>
<h3 id="3-defining-our-senior-helper-function-the-beast">3. Defining our Senior helper function — the beast</h3>
<p>As we are crawling the page for different elements, we will save them in a collection. This collection will be passed to one of the main functions.</p>
<p>We have defined a function name, <code>console.save</code>. The task for this function is to dump a csv / json file with the data passed.</p>
<p>It creates a Blob Object with our data. A <code>Blob</code> object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format.</p>
<p>Create blob is attached to a link tag <code>&lt;</code>;a&gt; on which a click event is triggered.</p>
<p>Here is the quick demo of <code>console.save</code> with a small <code>array</code> passed as data.</p>
<p>Putting together all the pieces of the code, this is what we have:</p>
<ol>
<li>Console API Instance</li>
<li>Helper function to extract elements</li>
<li>Console Save function to create a file</li>
</ol>
<p>Let’s execute our console.save() in the browser to save the data in a file. For this, you can go to a<a href="https://medium.freecodecamp.org/an-introduction-to-plotly-js-an-open-source-graphing-library-c036a1876e2e" rel="noopener"> story on Medium</a> and execute this code in the browser console.</p>
<p>I have shown the demo with extracting data from a single page, but the same code can be tweaked to crawl multiple stories from a publisher’s home page. Take an example of <a href="https://medium.freecodecamp.org" rel="noopener">freeCodeCamp</a>: you can navigate from one story to another and come back <em>(using the browser’s back button)</em> to the <a href="https://medium.freecodecamp.org" rel="noopener">publisher home page</a> without the page being refreshed.</p>
<p>Below is the bare minimum code you need to extract multiple stories from a publisher’s home page.</p>
<p>Let’s see the code in action for getting the profile description from multiple stories.</p>
<p><strong>For any such type of application, once you have scrapped the data, you can pass it to our <em>console.save</em> function and store it in a file.</strong></p>
<p>The console save function can be quickly attached to your console code and can help you to dump the data in the file. I am not saying you <em>have</em> to use the console for scraping data, but sometimes this will be a way quicker approach since we all are very familiar working with the DOM using CSS selectors.</p>
<p>You can download the code from <a href="https://github.com/edubey/browser-console-crawl" rel="noopener">Github</a></p>
<blockquote>Thank you for reading this article! Hope it gave you cool idea to scrape some data quickly without much setup. Hit the clap button if it enjoyed it! If you have any questions, send me an email (praveend806 [at] gmail [dot] com).</blockquote>
<h4 id="resources-to-learn-more-about-the-console-"><em>Resources to learn more about the Console:</em></h4>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/console/" rel="noopener"><strong>Using the Console | Tools for Web Developers | Google Developers</strong></a><br><a href="https://developers.google.com/web/tools/chrome-devtools/console/" rel="noopener"><em>Learn how to navigate the Chrome DevTools JavaScript Console.</em>developers.google.com</a><a href="https://developer.mozilla.org/en-US/docs/Tools/Browser_Console" rel="noopener"><strong>Browser Console</strong></a><br><a href="https://developer.mozilla.org/en-US/docs/Tools/Browser_Console" rel="noopener"><em>The Browser Console is like the Web Console, but applied to the whole browser rather than a single content tab.</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" rel="noopener"><strong>Blob</strong></a><br><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" rel="noopener"><em>A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a…</em>developer.mozilla.org</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
