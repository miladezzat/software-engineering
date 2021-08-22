---
card: "https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg"
tags: [JavaScript]
description: So what’s web scraping anyway? It involves automating away th
author: "Milad E. Fahmy"
title: "The Ultimate Guide to Web Scraping with Node.js"
created: "2021-08-15T19:43:02+02:00"
modified: "2021-08-15T19:43:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-scraping tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to Web Scraping with Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg" alt="The Ultimate Guide to Web Scraping with Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>So what’s web scraping anyway? It involves automating away the laborious task of collecting information from websites.</p>
<p>There are a lot of use cases for web scraping: you might want to collect prices from various e-commerce sites for a price comparison site. Or perhaps you need flight times and hotel/AirBNB listings for a travel site. Maybe you want to collect emails from various directories for sales leads, or use data from the internet to train machine learning/AI models. Or you could even be wanting to build a search engine like Google!</p>
<p>Getting started with web scraping is easy, and the process can be broken down into two main parts:</p>
<ul>
<li>acquiring the data using an HTML request library or a headless browser,</li>
<li>and parsing the data to get the exact information you want.</li>
</ul>
<p>This guide will walk you through the process with the popular Node.js <a href="https://github.com/request/request-promise" rel="noopener">request-promise</a> module, <a href="https://github.com/cheeriojs/cheerio" rel="noopener">CheerioJS</a>, and <a href="https://github.com/GoogleChrome/puppeteer" rel="noopener">Puppeteer</a>. Working through the examples in this guide, you will learn all the tips and tricks you need to become a pro at gathering any data you need with Node.js!</p>
<p>We will be gathering a list of all the names and birthdays of U.S. presidents from Wikipedia and the titles of all the posts on the front page of Reddit.</p>
<p>First things first: Let’s install the libraries we’ll be using in this guide (Puppeteer will take a while to install as it needs to download Chromium as well).</p>
<h3 id="making-your-first-request">Making your first request</h3>
<p>Next, let’s open a new text file (name the file potusScraper.js), and write a quick function to get the HTML of the Wikipedia “List of Presidents” page.</p>
<p>Output:</p>
<h3 id="using-chrome-devtools">Using Chrome DevTools</h3>
<p>Cool, we got the raw HTML from the web page! But now we need to make sense of this giant blob of text. To do that, we’ll need to use Chrome DevTools to allow us to easily search through the HTML of a web page.</p>
<p>Using Chrome DevTools is easy: simply open Google Chrome, and right click on the element you would like to scrape (in this case I am right clicking on George Washington, because we want to get links to all of the individual presidents’ Wikipedia pages):</p>
<p>Now, simply click inspect, and Chrome will bring up its DevTools pane, allowing you to easily inspect the page’s source HTML.</p>
<h3 id="parsing-html-with-cheerio-js">Parsing HTML with Cheerio.js</h3>
<p>Awesome, Chrome DevTools is now showing us the exact pattern we should be looking for in the code (a “big” tag with a hyperlink inside of it). Let’s use Cheerio.js to parse the HTML we received earlier to return a list of links to the individual Wikipedia pages of U.S. presidents.</p>
<p>Output:</p>
<p>We check to make sure there are exactly 45 elements returned (the number of U.S. presidents), meaning there aren’t any extra hidden “big” tags elsewhere on the page. Now, we can go through and grab a list of links to all 45 presidential Wikipedia pages by getting them from the “attribs” section of each element.</p>
<p>Output:</p>
<p>Now we have a list of all 45 presidential Wikipedia pages. Let’s create a new file (named potusParse.js), which will contain a function to take a presidential Wikipedia page and return the president’s name and birthday. First things first, let’s get the raw HTML from George Washington’s Wikipedia page.</p>
<p>Output:</p>
<p>Let’s once again use Chrome DevTools to find the syntax of the code we want to parse, so that we can extract the name and birthday with Cheerio.js.</p>
<p>So we see that the name is in a class called “firstHeading” and the birthday is in a class called “bday”. Let’s modify our code to use Cheerio.js to extract these two classes.</p>
<p>Output:</p>
<h3 id="putting-it-all-together">Putting it all together</h3>
<p>Perfect! Now let’s wrap this up into a function and export it from this module.</p>
<p>Now let’s return to our original file potusScraper.js and require the potusParse.js module. We’ll then apply it to the list of wikiUrls we gathered earlier.</p>
<p>Output:</p>
<h3 id="rendering-javascript-pages">Rendering JavaScript Pages</h3>
<p>Voilà! A list of the names and birthdays of all 45 U.S. presidents. Using just the request-promise module and Cheerio.js should allow you to scrape the vast majority of sites on the internet.</p>
<p>Recently, however, many sites have begun using JavaScript to generate dynamic content on their websites. This causes a problem for request-promise and other similar HTTP request libraries (such as axios and fetch), because they only get the response from the initial request, but they cannot execute the JavaScript the way a web browser can.</p>
<p>Thus, to scrape sites that require JavaScript execution, we need another solution. In our next example, we will get the titles for all of the posts on the front page of Reddit. Let’s see what happens when we try to use request-promise as we did in the previous example.</p>
<p>Output:</p>
<p>Here’s what the output looks like:</p>
<p>Hmmm…not quite what we want. That’s because getting the actual content requires you to run the JavaScript on the page! With Puppeteer, that’s no problem.</p>
<p>Puppeteer is an extremely popular new module brought to you by the Google Chrome team that allows you to control a headless browser. This is perfect for programmatically scraping pages that require JavaScript execution. Let’s get the HTML from the front page of Reddit using Puppeteer instead of request-promise.</p>
<p>Output:</p>
<p>Nice! The page is filled with the correct content!</p>
<p>Now we can use Chrome DevTools like we did in the previous example.</p>
<p>It looks like Reddit is putting the titles inside “h2” tags. Let’s use Cheerio.js to extract the h2 tags from the page.</p>
<p>Output:</p>
<style>
.gist {
width: 100% !important;
overflow: auto;
}
</style>
<h3 id="additional-resources">Additional Resources</h3>
<p>And there’s the list! At this point you should feel comfortable writing your first web scraper to gather data from any website. Here are a few additional resources that you may find helpful during your web scraping journey:</p>
<ul>
<li><a href="https://www.scraperapi.com/blog/the-10-best-rotating-proxy-services-for-web-scraping" rel="noopener">List of web scraping proxy services</a></li>
<li><a href="https://www.scraperapi.com/blog/the-10-best-web-scraping-tools" rel="noopener">List of handy web scraping tools</a></li>
<li><a href="https://www.scraperapi.com/blog/5-tips-for-web-scraping">List of web scraping tips</a></li>
<li><a href="https://www.scraperapi.com/blog/free-shared-dedicated-datacenter-residential-rotating-proxies-for-web-scraping">Comparison of web scraping proxies</a></li>
<li><a href="https://github.com/cheeriojs/cheerio" rel="noopener">Cheerio Documentation</a></li>
<li><a href="https://github.com/GoogleChrome/puppeteer" rel="noopener">Puppeteer Documentation</a></li>
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
