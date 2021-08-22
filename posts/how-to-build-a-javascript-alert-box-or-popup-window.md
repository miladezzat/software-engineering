---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg"
tags: [JavaScript]
description: Popup boxes (or dialog boxes) are modal windows used to notif
author: "Milad E. Fahmy"
title: "How to Build a JavaScript Alert Box or Popup Window"
created: "2021-08-15T19:31:11+02:00"
modified: "2021-08-15T19:31:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a JavaScript Alert Box or Popup Window</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8d740569d1a4ca385a.jpg" alt="How to Build a JavaScript Alert Box or Popup Window">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Popup boxes (or dialog boxes) are modal windows used to notify or warn the user, or to get input from the user.</p>
<p>Popup boxes prevent the user from accessing other aspects of a program until the popup is closed, so they should not be overused.</p>
<p>There are three different kinds of popup methods used in JavaScript: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" rel="nofollow">window.alert()</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" rel="nofollow">window.confirm()</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" rel="nofollow">window.prompt()</a>.</p>
<h3 id="alert"><strong>Alert</strong></h3>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" rel="nofollow">alert method</a> displays messages that don’t require the user to enter a response. Once this function is called, an alert dialog box will appear with the specified (optional) message. Users will be required to confirm the message before the alert goes away.</p>
<h3 id="example-"><strong>Example:</strong></h3>
<p><code>window.alert("Welcome to our website");</code></p>
<h3 id="confirm"><strong>Confirm</strong></h3>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" rel="nofollow">confirm method</a> is similar to <code>window.alert()</code>, but also displays a cancel button in the popup. The buttons return boolean values: true for OK and false for Cancel.</p>
<h3 id="example--1"><strong>Example:</strong></h3><pre><code class="language-javascript">var result = window.confirm('Are you sure?');
if (result === true) {
window.alert('Okay, if you're sure.');
} else {
window.alert('You seem uncertain.');
}</code></pre>
<h3 id="prompt"><strong>Prompt</strong></h3>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" rel="nofollow">prompt method</a> is typically used to get text input from the user. This function can take two arguments, both of which are optional: a message to display to the user and a default value to display in the text field.</p>
<h3 id="example--2"><strong>Example:</strong></h3>
<p><code>var age = prompt('How old are you?', '100');</code></p>
<h3 id="other-design-options-"><strong>Other Design Options:</strong></h3>
<p>If you are unhappy with the default JavaScript popups, you can substitute in various UI libraries. For example, SweetAlert provides a nice replacement for standard JavaScript modals. You can include it in your HTML via a CDN (content delivery network) and begin use.</p><pre><code class="language-html">&lt;script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"&gt;&lt;/script&gt;</code></pre>
<p>The syntax is as such: <code>swal(title, subtitle, messageType)</code></p><pre><code class="language-javascript">swal("Oops!", "Something went wrong on the page!", "error");</code></pre>
<p>The above code will produce the following popup:</p>
<p>SweetAlert is by no means the only substitute for standard modals, but it is clean and easy to implement.</p>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" rel="nofollow">MDN window.alert()</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm" rel="nofollow">MDN window.confirm()</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" rel="nofollow">MDN window.prompt()</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
