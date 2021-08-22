---
card: "/images/default.jpg"
tags: [Internet]
description: Can you use JavaScript to check if your app is connected to t
author: "Milad E. Fahmy"
title: "How to Check Internet Connection Status Using Async JavaScript"
created: "2021-08-15T19:28:50+02:00"
modified: "2021-08-15T19:28:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-internet tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Check Internet Connection Status Using Async JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/js_online_offline.png 300w,
/news/content/images/size/w600/2020/07/js_online_offline.png 600w,
/news/content/images/size/w1000/2020/07/js_online_offline.png 1000w,
/news/content/images/size/w2000/2020/07/js_online_offline.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/js_online_offline.png" alt="How to Check Internet Connection Status Using Async JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Can you use JavaScript to check if your app is connected to the internet?</p>
<p>In this article, I'll provide an updated answer to this Internet connection detection question. (Whew! Say that fast five times!) </p>
<p>The solution will use JavaScript's Fetch API and asynchronous code with Async &amp; Await. But first, let's look at an accepted solution and discuss why it may not be the best choice for your application.</p>
<h2 id="navigatoronline">navigator.onLine</h2>
<p>The online property of the navigator interface, <code>navigator.onLine</code>, is frequently used to detect the online and offline status of the browser. </p>
<p>Combined with listeners for online and offline events, it appears to provide a simple solution for developers that is easy to implement. </p>
<h3 id="letslookathowwedimplementnavigatoronline">Let's look at how we'd implement navigator.onLine</h3>
<p>Start by adding a load event listener. When the load event fires, the listener will check the online property of the navigator interface and then display the online status. </p>
<p>The online property of navigator provides a boolean (true or false) response. To finish the action of the listener, we’ll use a ternary statement to set the status display value.</p><pre><code class="language-JavaScript">window.addEventListener("load", (event) =&gt; {
const statusDisplay = document.getElementById("status");
statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
});</code></pre>
<p><em>So why the word navigator? Well, it’s a reference to the Netscape Navigator browser from the 90s.</em></p>
<p>Center an h1 element in your HTML page with the id of “status”. If you apply the JavaScript code above to your page, you should see it display “Online”. </p>
<p>But this only updates the h1 element when the page loads. Let’s add offline and online event listeners to update the status display any time either of those events fires.</p><pre><code class="language-JavaScript">window.addEventListener("offline", (event) =&gt; {
const statusDisplay = document.getElementById("status");
statusDisplay.textContent = "OFFline";
});
window.addEventListener("online", (event) =&gt; {
const statusDisplay = document.getElementById("status");
statusDisplay.textContent = "Online";
});</code></pre>
<p>We can go to the Application tab of Chrome Dev Tools and click on ServiceWorker to set the browser to respond as if it is offline. </p>
<p>Check and uncheck the Offline checkbox a few times. You should see the status display respond immediately to the offline and online events that are fired.</p>
<figcaption>Chrome Dev Tools &gt; Application Tab &gt; Service Workers &gt; Offline Checkbox</figcaption>
</figure>
<h2 id="letsdigalittledeeper">Let's dig a little deeper</h2>
<p>At first impression, the above seems like a good solution which is fairly simple. Unfortunately, as we read more about the online property of navigator and the online and offline events, we find there is a problem. </p>
<p><a href="https://caniuse.com/#search=navigator.onLine">Searching for navigator.onLine on CanIUse.com</a> shows widespread support for the online | offline status the property provides. However, looking at the notes below the support table, we see that </p>
<blockquote>“Online does not always mean connection to the Internet. It can also just mean connection to some network”. </blockquote>
<p>Hmm, that throws a wrench in the works a bit.</p>
<p>So if you really want to determine the online status of the browser, you should develop additional means for checking.</p>
<p>Let’s also take a look at the <a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine">MDN docs reference for navigator.onLine</a>. MDN web docs backs up the CanIUse.com information and adds additional notes. </p>
<blockquote><em>“Browsers implement this property differently...you cannot assume that a true value necessarily means that the browser can access the internet. You could be getting false positives...” </em></blockquote>
<p>And that confirms our fears about using the online property of navigator as our solution for detecting an Internet connection. It is a solution that can wreak havoc in our applications that depend on knowing when outside data sources are available. </p>
<p>One such example is when we are trying to determine if a Progressive Web App is online or not. MDN even recommends, </p>
<blockquote><em>“...if you really want to determine the online status of the browser, you should develop additional means for checking.”</em> </blockquote>
<p>A quick web search for <em>“navigator online not working”</em> reveals various forum posts where those depending on this property have run into problems.</p>
<h2 id="sowhatsthesolution">So what’s the solution?</h2>
<p>We need to know when our application is truly connected to the Internet and not just a router or local network. Let’s go back to our JavaScript file and start over.</p>
<p>The idea is to make a request and handle it gracefully with error catching if it fails. If the request succeeds, we’re online, and if it fails, we’re not. </p>
<p>We’re going to request a small image at an interval to determine the online status. Modern JavaScript provides the Fetch API and asynchronous code with Async &amp; Await. We will use these tools to accomplish our goal.</p>
<h3 id="checkonlinestatus">checkOnlineStatus()</h3>
<p>Let’s start by creating an async arrow function named checkOnlineStatus. The function will return true or false like the online property of navigator does. </p>
<p>Inside the function, we’ll set up a try block where we await a fetch request for a one pixel image. Ensure your service worker is not caching this image. </p>
<p>HTTP response codes between 200 and 299 indicate success, and we’ll return the result of the status code comparison. This will be true if the response status is from 200 to 299 and false otherwise. </p>
<p>We also have to provide a catch block that catches the error if the request fails. We’ll return false in the catch block to indicate we are definitely offline if this happens.</p><pre><code class="language-JavaScript">const checkOnlineStatus = async () =&gt; {
try {
const online = await fetch("/1pixel.png");
return online.status &gt;= 200 &amp;&amp; online.status &lt; 300; // either true or false
} catch (err) {
return false; // definitely offline
}
};</code></pre>
<p>Next, we’ll use the setInterval method and pass it an anonymous async function. The async function will await the result of our checkOnlineStatus function. We will then use a ternary statement with the result to display the current online status. </p>
<p>For testing this example, set the interval delay to every 3 seconds (3000 milliseconds). This is really too often, though. Checking every 30 seconds (30000 milliseconds) may be enough for your actual needs.</p><pre><code class="language-JavaScript">setInterval(async () =&gt; {
const result = await checkOnlineStatus();
const statusDisplay = document.getElementById("status");
statusDisplay.textContent = result ? "Online" : "OFFline";
}, 3000); // probably too often, try 30000 for every 30 seconds</code></pre>
<p>With our new code saved, let’s revisit the Application tab in Chrome Dev Tools to test the offline response.</p>
<figcaption>Chrome Dev Tools &gt; Application Tab &gt; Service Workers &gt; Offline Checkbox</figcaption>
</figure>
<p>I almost forgot to include the load event listener with async functionality! The load event detection is probably only important if you have a Progressive Web App utilizing a service worker for offline availability. Otherwise, your web page or app simply won't load without a connection. </p>
<p>Here's the new load event listener: </p><pre><code>window.addEventListener("load", async (event) =&gt; {
const statusDisplay = document.getElementById("status");
statusDisplay.textContent = (await checkOnlineStatus())
? "Online"
: "OFFline";
});</code></pre>
<h2 id="afinalthought">A Final Thought</h2>
<p>The above interval code is good for displaying a connection status in your app. That said, I don't suggest relying on a connection status that was checked 20 or 30 seconds prior to making a critical data request in your application. </p>
<p>Therefore, you should call the checkOnlineStatus function directly prior to the request and evaluate the response before requesting data.</p><pre><code class="language-JavaScript">const yourDataRequestFunction = async () =&gt; {
const online = await checkOnlineStatus();
if (online) {
// make data request
}
}</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>While navigator.onLine is widely supported, it provides unreliable results when determining if our applications are truly connected to the Internet. Utilizing the Fetch API and asynchronous JavaScript, we can quickly code a more reliable solution. </p>
<p><a href="https://gist.github.com/gitdagray/f310be81be217750fc9d2b233e2ae70c">Here’s a link to the code gist</a> on GitHub, and here's a video tutorial I put together: </p>
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
