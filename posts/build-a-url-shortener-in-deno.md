---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg"
tags: [deno]
description: In this article, we’re going to learn the basics of Deno, lik
author: "Milad E. Fahmy"
title: "How to Build a URL Shortener in Deno"
created: "2021-08-15T19:28:20+02:00"
modified: "2021-08-15T19:28:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deno tag-javascript tag-typescript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a URL Shortener in Deno</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg" alt="How to Build a URL Shortener in Deno">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we’re going to learn the basics of Deno, like how to run a program and embrace security. </p>
<p>Deno is the new JavaScript and TypeScript runtime written in Rust. It offers tight security, TypeScript support out-of-the-box, a single executable to run it, and a set of reviewed and audited standard modules.</p>
<p>Like <a href="https://npmjs.com">npm</a> in Node.js, packages in Deno are managed in a centralized package repository called <a href="https://deno.land/x/">X</a>. We'll be using one of these libraries, Oak, to build a REST API-based server in Deno. </p>
<p>After learning the basics by using the Express-like router package <a href="https://deno.land/x/oak@v6.3.0">Oak</a>, we will jump into the deep end of Deno and build a complete application.</p>
<p>Here's what we will set up in this application:</p>
<ol>
<li>Mapping URL shortcodes to endpoints using a JSON-based config file.</li>
<li>Have expiration dates attached to each URL so that these redirects are only valid for a limited period of time.</li>
</ol>
<h2 id="0-prerequisites">0. Prerequisites</h2>
<ol>
<li>Install Deno from <a href="https://deno.land/#installation">this link</a>.</li>
<li>Make sure you know the basics of JavaScript.</li>
</ol>
<p>Although not really required to follow along with this article, you can check out the YouTube video below to get an intro to Deno in video-format.</p>
<figcaption>A video tutorial for setting up Deno</figcaption>
</figure>
<p>So, let’s get started. ?</p>
<h2 id="1-how-to-build-the-router">1. How to Build the Router</h2>
<p>To write the server-side code for our application, we'll use the Oak module. It has an Express-like syntax for defining API routes. </p>
<p>If we look at its <a href="https://deno.land/x/oak">documentation here</a>, the "<a href="https://deno.land/x/oak#basic-usage">Basic Usage</a>" section pretty much covers all the use cases we will need in our router. So, we will expand on that code to build our application.</p>
<p>To test this code, you can create a file called <code>index.ts</code> in a folder, and copy the "Basic Usage" code into it. </p>
<p>To understand how to run TypeScript or JavaScript files in Deno, you first need to understand how Deno runs files. </p>
<p>You run a file by running the command <code>deno run file_name.ts</code> or <code>file_name.js</code>, followed by a set of flags providing certain system permissions to your application.</p>
<p>To test this, run the file we just created, containing the "Basic Usage" code, by using the command <code>deno run index.ts</code>. </p>
<p>You will see that Deno complains that you haven't given network access to your application. So, to do that, you add the <code>-allow-net</code> to the run command. The command will look like <code>deno run index.ts -allow-net</code>.</p>
<p>The router written down in the "Basic Usage” code looks like this:</p><pre><code class="language-jsx">router
.get("/", (context) =&gt; {
context.response.body = "Hello world!";
})
.get("/book", (context) =&gt; {
context.response.body = Array.from(books.values());
})
.get("/book/:id", (context) =&gt; {
if (context.params &amp;&amp; context.params.id &amp;&amp; books.has(context.params.id)) {
context.response.body = books.get(context.params.id);
}
});
</code></pre>
<p>To break down the above code, first a <code>router</code> object has been defined. Then the <code>get</code> function is called on the router, to define the various endpoints for our application. The respective logic is defined inside the callback functions.</p>
<p>For example, for the "/" endpoint, a callback function which returns "Hello World" in the response body has been defined. We can keep this endpoint unchanged to test whether our application server is running by receiving this response. </p>
<p>We don’t need the “/book” URL which has been defined, so its definition can be safely removed. At this point, your router should have the below structure:</p><pre><code>router
.get("/", (context) =&gt; {
context.response.body = "Hello world!";
})
.get("/book/:id", (context) =&gt; {
if (context.params &amp;&amp; context.params.id &amp;&amp; books.has(context.params.id)) {
context.response.body = books.get(context.params.id);
}
});</code></pre>
<p>In the next section, we'll be focussing on starting to build the actual application.</p>
<h2 id="2-how-to-build-the-url-shortener">2. How to Build the URL Shortener</h2>
<p>Now let's get started with building the actual URL shortener. </p>
<p>It should redirect to a destination (<code>dest</code>), based on a <code>shortcode</code>. The redirect should also only be valid up to an <code>expiryDate</code>, which can be provided in the Year-Month-Day format. </p>
<p>Based on these assumptions, let's create the config file, named <code>urls.json</code>. The format of the file will be:</p><pre><code class="language-jsx">{
"shortcode": {
"dest": "destination_url_string",
"expiryDate": "YYYY-MM-DD"
}
}
</code></pre>
<p>You can <a href="https://github.com/akash-joshi/deno-url-shortener/blob/master/urls.json">check out the JSON file here</a>.</p>
<p>To read this JSON file in your code, add the following to the top of your <code>index.ts</code>:</p><pre><code class="language-jsx">import { Application, Router } from "&lt;https://deno.land/x/oak/mod.ts&gt;";
const urls = JSON.parse(Deno.readTextFileSync("./urls.json"));
console.log(urls);
</code></pre>
<p>Now, to run your <code>index.ts</code>, you will need another flag <code>—allow-read</code>, otherwise Deno will throw a "read permissions not provided" error. Your final command becomes <code>deno run —allow-net —allow-read index.ts</code>. </p>
<p>After running this command, you'll see the JSON file being printed in your terminal window. This means that your program is able to read the JSON file correctly.</p>
<p>If we go back to the "Basic Usage" example that we saw above, the route “/book/:id” is exactly what we need. </p>
<p>Instead of "/book/:id", we can use "/shrt/:urlid", where we will get the individual URLs based on the URL ID (<code>:urlid</code>). </p>
<p>Replace the existing code present inside the "/book/:id" route with this:</p><pre><code class="language-jsx">.get("/shrt/:urlid", (context) =&gt; {
if (context.params &amp;&amp; context.params.urlid &amp;&amp; urls[context.params.urlid]) {
context.response.redirect(urls[context.params.urlid].dest);
} else {
context.response.body = "404";
}
});
</code></pre>
<p>The <code>if</code> condition in the route does the following:</p>
<ol>
<li>Checks if parameters are attached to the route</li>
<li>Checks if the parameter <code>urlid</code> is in the parameter list.</li>
<li>Checks whether the <code>urlid</code> matches with any URL in our JSON.</li>
</ol>
<p>If it matches with all these, the user is redirected to the correct URL. If it doesn't, a 404 response on the body is returned.</p>
<p>To test this, copy this route into <code>index.ts</code>. The router will now look like this:</p><pre><code class="language-jsx">router
.get("/", (context) =&gt; {
context.response.body = "Hello world!";
})
.get("/shrt/:urlid", (context) =&gt; {
if (context.params &amp;&amp; context.params.urlid &amp;&amp; urls[context.params.urlid]) {
context.response.redirect(urls[context.params.urlid].dest);
} else {
context.response.body = "404";
}
});
</code></pre>
<p>And run the file using <code>deno run —allow-net —allow-read index.ts</code>.</p>
<p>If you copied the JSON file from the example, and if you go to <code>http://localhost:8000/shrt/g</code>, you'll be redirected to Google's homepage. </p>
<p>On the other hand, if you use a random shortcode that doesn't work in our URL's config, it brings you to the 404 page. </p>
<p>However, you'll see that our shortener doesn't react live to changes in the JSON file. To test this, try adding a new redirect to <code>urls.json</code> in the same format as:</p><pre><code>"shortcode": {
"dest": "destination_url_string",
"expiryDate": "YYYY-MM-DD"
}</code></pre>
<p>The reason for this is that <code>urls.json</code> is only read once at that start. So, now we will add live-reloading to our server.</p>
<h2 id="3-how-to-add-live-reloading">3. How to Add Live-Reloading</h2>
<p>To make the <code>urls</code> object react live to changes in the JSON file, we simply move the read statement inside our route. This should look like the following:</p><pre><code class="language-jsx">.get("/shrt/:urlid", (context) =&gt; {
const urls = JSON.parse(Deno.readTextFileSync("./urls.json"));
if (context.params &amp;&amp; context.params.urlid &amp;&amp; urls[context.params.urlid]) {
context.response.redirect(urls[context.params.urlid].dest);
} else {
context.response.body = "404";
}
});
</code></pre>
<p>Note how we have moved the URLs object inside our router. Now in this case, the config file is read every time that route is called, so it can react live to any changes made in the <code>urls.json</code> file. So even if we add or remove other redirects on the fly, our code reacts to it.</p>
<h2 id="4-how-to-add-an-expiration-to-the-urls">4. How to Add an Expiration to the URLs</h2>
<p>To make our URLs expire at a certain date, we will be using the popular Moment.js library, which makes it easy to work with dates. </p>
<p>Luckily, it has also been <a href="https://deno.land/x/moment">ported for Deno</a>. To understand how it works, check out its documentation in the previous link.</p>
<p>To use it in our code, import it directly through its URL like this:</p><pre><code class="language-jsx">import { Application, Router } from "&lt;https://deno.land/x/oak/mod.ts&gt;";
import { moment } from "&lt;https://deno.land/x/moment/moment.ts&gt;";
const router = new Router();
</code></pre>
<p>To check the date for when the URL will expire, we check the <code>expiryDate</code> key on our <code>urls</code> object. This will make the code look like this:</p><pre><code class="language-jsx">if (context.params &amp;&amp; context.params.urlid &amp;&amp; urls[context.params.urlid]) {
if (
urls[context.params.urlid].expiryDate &gt; moment().format("YYYY-MM-DD")
) {
context.response.redirect(urls[context.params.urlid].dest);
} else {
context.response.body = "Link Expired";
}
} else {
context.response.body = "404";
}
</code></pre>
<p>In <code>moment().format("YYYY-MM-DD")</code>, we get the current date and time using <code>moment()</code>. We can convert it to the "YYYY-MM-DD" (Year-Month-Date) format using the function <code>.format("YYYY-MM-DD")</code>. </p>
<p>By comparing it against our <code>expiryDate</code> key, we can check whether the URL has expired or not.</p>
<p>That's it! You have built a fully functional URL shortener in Deno. You can find the final code <a href="https://github.com/akash-joshi/deno-url-shortener">in the GitHub repo here</a>.</p>
<p>Test it out by setting <code>expiryDate</code> as the current date and by making other changes to <code>urls.json</code> and our code.</p>
<h3 id="my-thoughts-on-deno">My Thoughts on Deno</h3>
<p>To wrap the article up, I'll put my forward final thoughts on deno.land. </p>
<p>While it's refreshing to see a server-side language which takes security into consideration and supports TypeScript out-of-the-box, Deno still has a long way to go before being ready for use in production systems. </p>
<p>For example, the TypeScript compilation is still very slow, with compilation times ~20 seconds, even for simple programs like the one we just developed.</p>
<p>On the error-reporting front, it still is pretty bad with describing the errors. For example, while embedding the code to read <code>urls.json</code> in the function itself, Deno isn't able to report that the <code>-allow-read</code> flag hasn't been set. Instead, it just throws an internal server error without a proper error printed on the terminal.</p>
<h3 id="what-next">What Next?</h3>
<p>You can improve your Deno or Typescript skills by building more complex applications like a <a href="https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/">Chatting Application</a> or a <a href="https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/">Wikipedia Clone</a>. </p>
<p>You can also go through the Deno documentation at <a href="http://deno.land/">deno.land</a> to get more familiar with the basics. </p>
<p>Thank you for reading this far and happy programming ? !!</p>
<h3 id="important-links">Important Links</h3>
<p>Deno - https://deno.land<br>Deno X (package repository) - https://deno.land/x/<br>Oak (REST framework) - <a href="https://deno.land/x/oak">https://deno.land/x/oak</a><br>Oak Basic Usage - <a href="https://deno.land/x/oak@v6.3.1#basic-usage">https://deno.land/x/oak@v6.3.1#basic-usage</a><br>Final GitHub Repo - <a href="https://github.com/akash-joshi/deno-url-shortener">https://github.com/akash-joshi/deno-url-shortener</a><br></p>
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
