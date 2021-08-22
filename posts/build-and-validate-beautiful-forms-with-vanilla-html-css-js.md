---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Forms are hard."
author: "Milad E. Fahmy"
title: "How to Build and Validate Beautiful Forms with Vanilla HTML, CSS, & JS"
created: "2021-08-16T10:04:36+02:00"
modified: "2021-08-16T10:04:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-html tag-css tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build and Validate Beautiful Forms with Vanilla HTML, CSS, &amp; JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/sign-up-form-desktop.png 300w,
/news/content/images/size/w600/2020/09/sign-up-form-desktop.png 600w,
/news/content/images/size/w1000/2020/09/sign-up-form-desktop.png 1000w,
/news/content/images/size/w2000/2020/09/sign-up-form-desktop.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/sign-up-form-desktop.png" alt="How to Build and Validate Beautiful Forms with Vanilla HTML, CSS, &amp; JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<li>Error State
<ul>
<li>What happens if I enter an email that already exists?</li>
</ul>
</li>
<li>Loading State
<ul>
<li>What happens when I submit the form?</li>
</ul>
</li>
</ul>
&lt;div class="dkh-form-header"&gt;
&lt;div&gt;
&lt;small&gt;Sign up with&lt;/small&gt;
&lt;div class="dkh-form-header__social-wrapper"&gt;
&lt;button type="button" class="dkh-btn dkh-btn-icon dkh-btn-github"&gt;
Github
&lt;/button&gt;
&lt;button type="button" class="dkh-btn dkh-btn-icon dkh-btn-twitter"&gt;
Twitter
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="dkh-form-body"&gt;
&lt;small&gt;Or sign in with email and password&lt;/small&gt;
&lt;div class="dkh-form-field"&gt;
&lt;fieldset&gt;
&lt;input autofocus class="dkh-form-field__input" name="email" type="email" id="email" required placeholder="Email"&gt;
&lt;/fieldset&gt;
&lt;div class="dkh-form-field__messages"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="dkh-form-field"&gt;
&lt;fieldset&gt;
&lt;input class="dkh-form-field__input" name="password" type="password" id="password" required minlength="10" placeholder="Password"&gt;
&lt;/fieldset&gt;
&lt;div class="dkh-form-field__messages"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="dkh-form-footer"&gt;
&lt;button class="dkh-btn dkh-btn-primary" type="submit"&gt;Sign Up&lt;/button&gt;
&lt;/div&gt;
// prevent default browser behaviour
e.preventDefault();
const formDataEntries = new FormData(signupForm).entries();
const { email, password } = Object.fromEntries(formDataEntries);
// submit email and password to an API
}</code></pre><h2 id="error-messages">Error messages</h2><p>The error messages that are rendered by the browser are helpful to start, but what if you want these messages to render below their respective form input? &nbsp;What if you want to control how they look?</p><p>Sadly, the browser doesn't give us any control over how the default error message are rendered. So this is where our <code>dkh-form-field__messages</code> div elements come into play. We can render our custom error messages inside these elements.</p><p>Let's write a couple custom validation functions to check that our user's password and email values meet the requirements. </p><pre><code class="language-javascript">
function validatePassword(password, minlength) {
if (!password) return 'Password is required';
if (password.length &lt; minlength) {
return `Please enter a password that's at least ${minlength} characters long`;
}
const hasCapitalLetter = /[A-Z]/g;
if (!hasCapitalLetter.test(password)) {
return 'Please use at least one capital letter.';
}
const hasNumber = /\d/g;
if (!hasNumber.test(password)) {
return 'Please use at least one number.';
}
return '';
}</code></pre><pre><code class="language-javascript">function validateEmail(email) {
if (!email) return 'Email is required';
const isValidEmail = /^\S+@\S+$/g
if (!isValidEmail.test(email)) {
return 'Please enter a valid email';
}
return '';
}</code></pre><p>The regex <code>/^\\S+@\\S+$/g</code> is far from bullet proof, but it at least checks to make sure there are characters before and after the <code>@</code> symbol. &nbsp;</p><p>The best way to validate an email is to send a confirmation email to any user that signs up. The user would then have to open that email and click a link to confirm that their email address is valid.</p><p>If you'd like to dig deeper into client side email validation, this is a great <a href="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript">thread</a>.</p><p>Now, let's figure out how to render the error messages to the page.</p><pre><code class="language-javascript">function handleSignupFormSubmit(e) {
// prevent default browser behaviour
e.preventDefault();
const formDataEntries = new FormData(signupForm).entries();
const { email, password } = Object.fromEntries(formDataEntries);
const emailErrorMessage = validateEmail(email);
const passowrdErrorMessage = validatePassword(password);
if (!emailErrorMessage) {
// select the email form field message element
const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
// show email error message to user
emailErrorMessageElement.innerText = emailErrorMessage;
}
if (passowrdErrorMessage) {
// select the email form field message element
const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
// show password error message to user
passwordErrorMessageElement.innerText = passowrdErrorMessage;
}
&lt;div&gt;
&lt;small&gt;Sign up with&lt;/small&gt;
&lt;div class="dkh-form-header__social-wrapper"&gt;
&lt;button type="button" class="dkh-btn dkh-btn-icon dkh-btn-github"&gt;
&lt;i class="fab fa-github fa-lg"&gt;&lt;/i&gt;
Github
&lt;/button&gt;
&lt;button type="button" class="dkh-btn dkh-btn-icon dkh-btn-twitter"&gt;
&lt;i class="fab fa-twitter fa-lg"&gt;&lt;/i&gt;
Twitter
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><h2 id="summary">Summary</h2><p>We have created the building blocks to build sign up and log in forms without 3rd party libraries. You can check out the final source code <a href="https://nolibs.io/dkh/motifs/2fnKSwMn/edit">here</a>. </p><p>If you're using a framework like React or Vue, there are a ton of awesome form and validation libraries. You can lean on them to get the job done quickly. </p><p>However, if you're new to software development, I would encourage you to focus on the fundamentals first before using these tools.</p><p>I got my first job as a developer five years ago and my journey into tech has forever changed my life for the better. I believe that it's important to focus on and master the fundamentals so that you can more easily grasp tools like React and Vue.</p><p>One of the problems I noticed when <a href="https://technical.ly/philly/2018/03/05/free-coding-camp-philly-study-hall/">running a meetup</a> myself for years was that people who were new to coding reached for libraries and frameworks too quickly. This ended up hurting them and many struggled during interviews.</p><p>If you are learning how to code and could use some help, feel free to reach out to me on <a href="https://twitter.com/danielkhunter">twitter</a>. Looking forward to helping however I can.</p>
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
