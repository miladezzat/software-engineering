---
card: "https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg"
tags: [JavaScript]
description: "Knowing one approach to web scraping may solve your problem i"
author: "Milad E. Fahmy"
title: "Web scraping for web developers: a concise summary"
created: "2021-08-16T10:08:04+02:00"
modified: "2021-08-16T10:08:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-web-scraping tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Web scraping for web developers: a concise summary</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QYXgeKvQq5M0lMGMRFXJvA.jpeg" alt="Web scraping for web developers: a concise summary">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Knowing one approach to web scraping may solve your problem in the short term, but all methods have their own strengths and weaknesses. Being aware of this can save you time and help you to solve a task more efficiently.</p><p>Numerous resources exist, which will show you a single technique for extracting data from a web page. The reality is that multiple solutions and tools can be used for that.</p><p>What are your options to programmatically extract data from a web page?</p><p>What are the pros and cons of each approach?</p><p>How to use cloud services to increase the degree of automation?</p><p><strong>This guide meant to answer these questions.</strong></p><p>I assume you have a basic understanding of browsers in general, <strong>HTTP</strong> requests, the <strong>DOM</strong> (Document Object Model), <strong>HTML</strong>, <strong>CSS selectors</strong>, and <strong>Async JavaScript</strong>.</p><p>If these phrases sound unfamiliar, I suggest checking out those topics before continue reading. Examples are implemented in Node.js, but hopefully you can transfer the theory into other languages if needed.</p><h3 id="static-content">Static content</h3><h4 id="html-source">HTML source</h4><p>Let’s start with the simplest approach.</p><p>If you are planning to scrape a web page, this is the first method to try. It requires a negligible amount of computing power and the least time to implement.</p><p>However, it <strong>only works if the HTML source code contains the data</strong> you are targeting. To check that in Chrome, right-click the page and choose <em>View page source</em>. Now you should see the HTML source code.</p><p>It’s important to note here, that you won’t see the same code by using Chrome’s inspect tool, because it shows the HTML structure related to the current state of the page, which is not necessarily the same as the source HTML document that you can get from the server.</p><p>Once you find the data here, write a <a href="https://www.w3schools.com/cssref/css_selectors.asp" rel="noopener">CSS selector</a> belonging to the wrapping element, to have a reference later on.</p><p>To implement, you can send an HTTP GET request to the URL of the page and will get back the HTML source code.</p><p>In <strong>Node</strong>, you can use a tool called <a href="https://github.com/cheeriojs/cheerio" rel="noopener">CheerioJS</a> to parse this raw HTML and extract the data using a selector. The code looks something like this:</p><pre><code class="language-js">const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = 'https://example.com/';
const selector = '.example';
fetch(url)
.then(res =&gt; res.text())
.then(html =&gt; {
const $ = cheerio.load(html);
const data = $(selector);
console.log(data.text());
});</code></pre><h3 id="dynamic-content">Dynamic content</h3><p>In many cases, you can’t access the information from the raw HTML code, because the DOM was manipulated by some JavaScript, executed in the background. A typical example of that is a SPA (Single Page Application), where the HTML document contains a minimal amount of information, and the JavaScript populates it at runtime.</p><p>In this situation, a solution is to build the DOM and execute the scripts located in the HTML source code, just like a browser does. After that, the data can be extracted from this object with selectors.</p><h4 id="headless-browsers">Headless browsers</h4><p>This can be achieved by using a headless browser. A headless browser is almost the same thing as the normal one you are probably using every day but without a user interface. It’s running in the background and you can programmatically control it instead of clicking with your mouse and typing with a keyboard.</p><p>A popular choice for a headless browser is <a href="https://github.com/GoogleChrome/puppeteer" rel="noopener">Puppeteer</a>. It is an easy to use Node library which provides a high-level API to control Chrome in headless mode. It can be configured to run non-headless, which comes in handy during development. The following code does the same thing as before, but it will work with dynamic pages as well:</p><pre><code class="language-js">const puppeteer = require('puppeteer');
async function getData(url, selector){
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);
const data = await page.evaluate(selector =&gt; {
return document.querySelector(selector).innerText;
}, selector);
await browser.close();
return data;
}
const url = 'https://example.com';
const selector = '.example';
getData(url,selector)
.then(result =&gt; console.log(result));</code></pre><p>Of course, you can do more interesting things with Puppeteer, so it is worth checking out the <a href="https://pptr.dev/" rel="noopener">documentation</a>. Here is a code snippet which navigates to a URL, takes a screenshot and saves it:</p><pre><code class="language-js">const puppeteer = require('puppeteer');
async function takeScreenshot(url,path){
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);
await page.screenshot({path: path});
await browser.close();
}
const url = 'https://example.com';
const path = 'example.png';
takeScreenshot(url, path);</code></pre><p>As you can imagine, running a browser requires much more computing power than sending a simple GET request and parsing the response. Therefore execution is relatively costly and slow. Not only that but including a browser as a dependency makes the deployment package massive.</p><p>On the upside, this method is highly flexible. You can use it for navigating around pages, simulating clicks, mouse moves, and keyboard events, filling out forms, taking screenshots or generating PDFs of pages, executing commands in the console, selecting elements to extract its text content. Basically, everything can be done that is possible manually in a browser.</p><h4 id="building-just-the-dom">Building just the DOM</h4><p>You may think it’s a little bit of overkill to simulate a whole browser just for building a DOM. Actually, it is, at least under certain circumstances.</p><p>There is a Node library, called <a href="https://github.com/jsdom/jsdom" rel="noopener">Jsdom</a>, which will parse the HTML you pass it, just like a browser does. However, it isn’t a browser, but <strong>a tool for building a DOM from a given HTML source code</strong>, while also executing the JavaScript code within that HTML.</p><p>Thanks to this abstraction, Jsdom is able to run faster than a headless browser. If it’s faster, why don’t use it instead of headless browsers all the time?</p><p>Quote from the documentation:</p><blockquote>People often have trouble with asynchronous script loading when using jsdom. Many pages load scripts asynchronously, but there is no way to tell when they’re done doing so, and thus when it’s a good time to run your code and inspect the resulting DOM structure. This is a fundamental limitation.</blockquote><blockquote>… This can be worked around by polling for the presence of a specific element.</blockquote><p>This solution is shown in the example. It checks every 100 ms if the element either appeared or timed out (after 2 seconds).</p><p>It also often throws nasty error messages when some browser feature in the page is not implemented by Jsdom, such as: “<em>Error: Not implemented: window.alert…” or “Error: Not implemented: window.scrollTo…”.</em> This issue also can be solved with some workarounds (<a href="https://github.com/jsdom/jsdom#virtual-consoles" rel="noopener">virtual consoles</a>).</p><p>Generally, it’s a lower level API than Puppeteer, so you need to implement certain things yourself.</p><p>These things make it a little messier to use, as you will see in the example. Puppeteer solves all these things for you behind the scenes and makes it extremely easy to use. Jsdom for this extra work will offer a fast and lean solution.</p><p>Let’s see the same example as previously, but with Jsdom:</p><pre><code class="language-js">const jsdom = require("jsdom");
const { JSDOM } = jsdom;
async function getData(url,selector,timeout) {
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console, { omitJSDOMErrors: true });
const dom = await JSDOM.fromURL(url, {
runScripts: "dangerously",
resources: "usable",
virtualConsole
});
const data = await new Promise((res,rej)=&gt;{
const started = Date.now();
const timer = setInterval(() =&gt; {
const element = dom.window.document.querySelector(selector)
if (element) {
res(element.textContent);
clearInterval(timer);
}
else if(Date.now()-started &gt; timeout){
rej("Timed out");
clearInterval(timer);
}
}, 100);
});
dom.window.close();
return data;
}
const url = "https://example.com/";
const selector = ".example";
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
