---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg"
tags: [Form validations]
description: In the past, form validation would occur on the server, after
author: "Milad E. Fahmy"
title: "Basic Form Validation in JavaScript"
created: "2021-08-15T19:30:52+02:00"
modified: "2021-08-15T19:30:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-form-validations tag-forms tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Basic Form Validation in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d33740569d1a4ca3673.jpg" alt="Basic Form Validation in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In the past, form validation would occur on the server, after a person had already entered in all of their information and pressed the submit button. </p>
<p>If the information was incorrect or missing, the server would have to send everything back with a message telling the person to correct the form before submitting it again.</p>
<p>This was a lengthy process and would put a lot of the burden on the server.</p>
<p>These days, JavaScript provides a number of ways to validate a form's data right in the browser before sending it to the server.</p>
<p>Here's the HTML code we'll use in the following examples:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Form Validation&lt;/title&gt;
&lt;script type="text/javascript"&gt;
// Form validation will go here
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form id="form"&gt;
&lt;table cellspacing="2" cellpadding="2" border="1"&gt;
&lt;tr&gt;
&lt;td align="right"&gt;Username&lt;/td&gt;
&lt;td&gt;&lt;input type="text" id="username" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="right"&gt;Email Address&lt;/td&gt;
&lt;td&gt;&lt;input type="text" id="email-address" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;/td&gt;
&lt;td&gt;&lt;input type="submit" value="Submit" id="submit-btn" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h2 id="basic-validation">Basic Validation</h2>
<p>This type of validation involves checking all the mandatory fields and making sure they're properly filled in.</p>
<p>Here's a basic example of a function <code>validate</code> that shows an alert if the username and email address inputs are blank, otherwise it returns true:</p><pre><code class="language-js">const submitBtn = document.getElementById('submit-btn');
const validate = (e) =&gt; {
e.preventDefault();
const username = document.getElementById('username');
const emailAddress = document.getElementById('email-address');
if (username.value === "") {
alert("Please enter your username.");
username.focus();
return false;
}
if (emailAddress.value === "") {
alert("Please enter your email address.");
emailAddress.focus();
return false;
}
return true;
}
submitBtn.addEventListener('click', validate);
</code></pre>
<p>But what if someone enters in random text as their email address? Currently the <code>validate</code> function will still return true. As you can imagine, sending bad data to the server can lead to problems.</p>
<p>That's where data format validation comes in.</p>
<h2 id="data-format-validation">Data Format Validation</h2>
<p>This type of validation actually looks at the values in the form and verifies that they are correct.</p>
<p>Validating email addresses is notoriously difficult – there are a vast number of legitimate email addresses and hosts, and it's impossible to guess all the valid combinations of characters.</p>
<p>That said, there are a few key factors that are common in all valid email addresses: </p>
<ul>
<li>An address must contain one @ and at least one dot (.) character</li>
<li>The @ character cannot be the first character in the address</li>
<li>The . must come at least one character after the @ character</li>
</ul>
<p>With this in mind, maybe developers use regex to determine if an email address is valid or not. Here's a function that <a href="https://tylermcginnis.com/validate-email-address-javascript/">Tyler McGinnis recommends on his blog</a>:</p><pre><code class="language-js">const emailIsValid = email =&gt; {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
emailIsValid('free@code@camp.org') // false
emailIsValid('quincy@freecodecamp.org') // true</code></pre>
<p>Added to the code from the last example, it will look like this:</p><pre><code class="language-js">const submitBtn = document.getElementById('submit-btn');
const validate = (e) =&gt; {
e.preventDefault();
const username = document.getElementById('username');
const emailAddress = document.getElementById('email-address');
if (username.value === "") {
alert("Please enter your username.");
username.focus();
return false;
}
if (emailAddress.value === "") {
alert("Please enter your email address.");
emailAddress.focus();
return false;
}
if (!emailIsValid(emailAddress.value)) {
alert("Please enter a valid email address.");
emailAddress.focus();
return false;
}
return true; // Can submit the form data to the server
}
const emailIsValid = email =&gt; {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
submitBtn.addEventListener('click', validate);
</code></pre>
<h2 id="html5-form-constraints">HTML5 Form Constraints</h2>
<p>Some of commonly used HTML5 constraints for <code>&lt;input&gt;</code> are the <code>type</code> attribute (e.g. <code>type="password"</code>), <code>maxlength</code>, <code>required</code> and <code>disabled</code>. </p>
<p>A less commonly used constraint is the <code>pattern</code> attribute that takes a JavaScript regular expression.</p>
<h2 id="more-information">More Information</h2>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">Form Data Validation | MDN</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation">Constraint validation | MDN</a></li>
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
