---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg"
tags: [JavaScript]
description: The window.location object can be used to get information on
author: "Milad E. Fahmy"
title: "JavaScript Window Methods Explained with Examples"
created: "2021-08-15T19:30:54+02:00"
modified: "2021-08-15T19:30:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Window Methods Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d1d740569d1a4ca35fa.jpg" alt="JavaScript Window Methods Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="window-location-method"><strong>Window location Method</strong></h2>
<p>The <code>window.location</code> object can be used to get information on the current page address (URL) and to redirect the browser to a new page.</p>
<p>The <code>window.location</code> object can be written without the <code>window</code> prefix, as just <code>location</code>.</p>
<h2 id="some-examples-">Some examples:</h2>
<ul>
<li><code>window.location.href</code> returns the href (URL) of the current page</li>
<li><code>window.location.hostname</code> returns the domain name of the web host</li>
<li><code>window.location.host</code> returns both the host name and any associated port</li>
<li><code>window.location.pathname</code> returns the path and filename of the current page</li>
<li><code>window.location.protocol</code> returns the web protocol used (http: or https:)</li>
<li><code>window.location.assign()</code> loads a new document</li>
</ul>
<h3 id="more-information-">More Information:</h3>
<p><a href="https://developer.mozilla.org/docs/Web/API/Window/location">MDN</a></p>
<h2 id="window-setinterval-method"><strong>Window setInterval Method</strong></h2>
<p>The <code>setInterval()</code> method calls a function or evaluates an expression at specified intervals (in milliseconds).</p><pre><code class="language-js">setInterval(function(){
alert("Hello");
}, 3000); </code></pre>
<p>The <code>setInterval()</code> method will continue calling the function until <code>clearInterval()</code> is called, or the window is closed.</p>
<p>The <code>setInterval()</code> method can pass additional parameters to the function, as shown in the example below.</p><pre><code class="language-js">setInterval(function, milliseconds, parameter1, parameter2, parameter3); </code></pre>
<p>The ID value returned by <code>setInterval()</code> is used as the parameter for the <code>clearInterval()</code> method.</p>
<p>Tips:</p>
<ul>
<li>1000 ms = 1 second.</li>
<li>To execute a function only once, after a specified number of milliseconds, use the <code>setTimeout()</code> method.</li>
</ul>
<h2 id="window-settimeout-method">Window setTimeout Method</h2>
<p>The <code>setTimeout()</code> method sets a timer in milliseconds, then calls a function or evaluates an expression when the timer runs out.</p>
<p>Notes:</p>
<ul>
<li><code>setTimeout()</code> uses milliseconds, and 1000 ms is equal to 1 second</li>
<li>This method only executes the function or expression you pass to it once. Use the <code>setInterval()</code> method if you need to repeat the execution multiple times</li>
<li>To stop the function or expression passed to it, use the <code>clearTimeout()</code> method</li>
</ul>
<p>The syntax of the <code>setTimout()</code> method is as follows:</p><pre><code class="language-js">setTimeout(function, milliseconds, param1, param2, ...);</code></pre>
<p>For example:</p><pre><code class="language-js">setTimeout(function() {
alert("Hello");
}, 3000);</code></pre>
<p>A very important thing to remember about <code>setTimeout()</code> is that it's executed asynchronously:</p><pre><code class="language-js">console.log("A");
setTimeout(function() { console.log("B"); }, 0);
console.log("C");
// The order in the console will be
// A
// C
// B</code></pre>
<p>The order of the console logs is probably not what you expected. To solve this problem and make sure that your code is executed synchronously, you just need to nest the last <code>console.log</code> statement in the function:</p><pre><code class="language-js">console.log("A");
setTimeout(function() {
console.log("B");
console.log("C");
}, 0);
// The order in the console will be
// A
// B
// C</code></pre>
<h2 id="window-cleartimeout-method"><strong>Window clearTimeout Method</strong></h2>
<p>The <code>clearTimeout()</code> method is used stop a timer set with the <code>setTimeout()</code> method.</p><pre><code class="language-js">    clearTimeout(setTimeout_ID); </code></pre>
<p>To be able to use the <code>clearTimeout()</code> method, you must use a global variable. See the example below</p>
<p>The <code>clearTimeout()</code> method works by using the id that's returned by <code>setTimeout()</code>. Because of this, it's often a good idea to use a global variable to store <code>setTimeout()</code>, then clear that when necessary:</p><pre><code class="language-js">const myTimeout = setTimeout(function, milliseconds);
...
// Later, to clear the timeout
clearTimeout(myTimeout);</code></pre>
<h2 id="window-clearinterval-method"><strong>Window clearInterval Method</strong></h2>
<p>The <code>clearInterval()</code> method is used to clear a timer set with the <code>setInterval()</code> method.</p><pre><code class="language-js">clearInterval(setInteval_ID); </code></pre>
<p>The <code>clearTimeout()</code> method works by using the id that's returned by <code>setInterval()</code>. Because of this, it's often a good idea to use a global variable to store <code>setInterval()</code>, then clear that when necessary:</p><pre><code class="language-js">const myInterval = setInterval(function, milliseconds);
...
// Later, to clear the timeout
clearInterval(myInterval);</code></pre>
<h2 id="window-localstorage-method">Window localStorage Method</h2>
<p><code>localStorage</code> provides a way for your web applications to store key/value pairs locally within the user’s browser.</p>
<p>Before HTML5 and <code>localStorage</code>, web app data had to be stored in cookies. Every HTTP request includes cookies, and these were once a legitimate method for storing application data locally on client devices. However, a lot of the same data was being transmitted with cookies, and since they were limited to around 4 KB of data, it was difficult to store everything your application needed.</p>
<p>The storage limit for <code>localStorage</code> is 10 MB of data per domain, and it is considered more efficient because the information stored in it is never transferred to the server with every request.</p>
<h3 id="types-of-web-storage"><strong>Types of Web Storage</strong></h3>
<p><code>localStorage</code> is one of two modern methods for browsers to store data locally:</p>
<ul>
<li><code>localStorage</code>: This stores data with no expiration date. The data in <code>localStorage</code> persists even when the user’s browser is closed and reopened.</li>
<li><code>sessionStorage</code>: This is similar to <code>localStorage</code>, except that it stores data for one session only. This data is removed once the user closes their browser.</li>
</ul>
<h3 id="html5-localstorage-methods"><strong>HTML5 localStorage Methods</strong></h3>
<p><code>localStorage</code> comes with a few different JavaScript methods that makes it very easy to work with.</p>
<p>To set data:</p><pre><code class="language-javascript">localStorage.setItem('Name', 'somevalue');</code></pre>
<p>To retrieve some data from storage:</p><pre><code class="language-javascript">localStorage.getItem('Name');</code></pre>
<p>To remove or delete some data:</p><pre><code class="language-javascript">localStorage.removeItem('Name');</code></pre>
<p>To clear everything in storage (not just an individual item):</p><pre><code class="language-javascript">localStorage.clear();</code></pre>
<p>To get the number of properties in storage:</p><pre><code class="language-javascript">localStorage.length;</code></pre>
<p>Note: All of the methods above also work with <code>sessionStorage</code>. Simply replace <code>localStorage</code> with <code>sessionStorage</code>.</p>
<h2 id="window-open-method">Window open Method</h2>
<p>The Window <code>open()</code> method is used to open a new browser window or tab, depending on the parameters and the user's browser settings. This method is typically used for popups, and is blocked by default in a lot of modern browsers.</p>
<p>The syntax of the <code>open()</code> method is:</p><pre><code class="language-js">const window =  window.open(url, windowName, windowFeatures);</code></pre>
<h3 id="parameters">Parameters</h3>
<ul>
<li><code>url</code>: A string for the resource you want to load.</li>
<li><code>windowName</code>: A string indicating the target name of the new window or tab. Note that this will not be used as the title for the new window/tab.</li>
<li><code>windowFeatures</code>: An optional comma-separated list of strings of features such as the size of the new window, its position, whether or not to display the menu bar, and so on.</li>
</ul>
<h3 id="example">Example</h3><pre><code class="language-javascript">let windowObjectReference;
const strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
function openRequestedPopup() {
windowObjectReference = window.open("https://www.freecodecamp.org/", "fCC_WindowName", strWindowFeatures);
}
openRequestedPopup();</code></pre>
<p>The above code will attempt to open a popup to the freeCodeCamp landing page. </p>
<h2 id="window-confirm-method"><strong>Window Confirm Method</strong></h2>
<p>You can use the <code>confirm</code> method to ask a user to double check a decision on a web page. When you call this method, the browser will display a dialog box with two choices along the lines of “OK” and “Cancel.”</p>
<p>For example, say someone has just clicked a Delete button. You could run the following code:</p><pre><code class="language-javascript">if (window.confirm("Are you sure you want to delete this item?")) {
// Delete the item
}</code></pre>
<p>The message “Are you sure you want to delete this item?” will appear in the dialog box. If the user clicks OK, the confirm method will return <code>true</code> and the browser will run the code inside the if statement. If he or she clicks Cancel, the method will return <code>false</code> and nothing else will happen. This provides some protection against someone accidentally clicking Delete.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
