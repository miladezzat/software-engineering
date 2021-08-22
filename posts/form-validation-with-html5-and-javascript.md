---
card: "https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg"
tags: [Form validations]
description: Forms are ubiquitous in web applications. Some apps use forms
author: "Milad E. Fahmy"
title: "Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code"
created: "2021-08-15T19:27:35+02:00"
modified: "2021-08-15T19:27:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-form-validations tag-javascript tag-html5 ">
<header class="post-full-header">
<h1 class="post-full-title">Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6003768298be260817e4aadc.jpg" alt="Data Validation – How to Check User Input on HTML Forms with Example JavaScript Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Forms are ubiquitous in web applications. Some apps use forms to collect data to sign up users and provide an email address. Others use them to fulfill online transactions to facilitate a shopping experience.</p>
<p>You might use some web forms to apply for a new car loan, whereas you'll use others to order pizza for dinner. So it's important that the data collected from those forms is cleaned, formatted correctly, and devoid of any malicious code. This process is called form validation.</p>
<p>We need form validation anytime we are accepting user input. We must ensure that the data entered is in the correct format, lies within a valid range of data (such as for date fields), and does not contain malicious code that could lead to SQL injections. Malformed or missing data can also cause the API to throw errors.</p>
<h2 id="whatarethedifferenttypesofformvalidations">What are the different types of form validations?</h2>
<p>Form validation can happen on the client side and the server side.</p>
<p>Client side validation occurs using HTML5 attributes and client side JavaScript.</p>
<p>You may have noticed that in some forms, as soon as you enter an invalid email address, the form gives an error "Please enter a valid email". This immediate type of validation is usually done via client side JavaScript.</p>
<h2 id="whatdatashouldbevalidated">What data should be validated?</h2>
<p>Form validation is needed anytime you accept data from a user. This may include:</p>
<ol>
<li>Validating the format of fields such as email address, phone number, zip code, name, password.</li>
<li>Validating mandatory fields</li>
<li>Checking the type of data such as string vs number for fields such as social security number.</li>
<li>Ensuring that the value entered is a valid value such as country, date, and so on.</li>
</ol>
<h2 id="howtosetupclientsidevalidation">How to set up client side validation</h2>
<p>On the client side, validation can be done in two ways:</p>
<ol>
<li>Using HTML5 functionality</li>
<li>Using JavaScript</li>
</ol>
<h3 id="howtosetupvalidationwithhtml5functionality">How to set up validation with HTML5 functionality</h3>
<p>HTML5 provides a bunch of attributes to help validate data. Here are some common validation cases:</p>
<ul>
<li>Making fields required using <code>required</code></li>
<li>Constraining the length of data:
<ul>
<li><code>minlength</code>, <code>maxlength</code>: for text data</li>
<li><code>min</code> and <code>max</code> for max value of num type</li>
</ul>
</li>
<li>Restricting the type of data using <code>type</code>:
<ul>
<li><code>&lt;input type="email" name="multiple&gt;</code></li>
</ul>
</li>
<li>Specifying data patterns using <code>pattern</code>:
<ul>
<li>specifies a regex pattern that the entered form data needs to match</li>
</ul>
</li>
</ul>
<p>When the input value matches the above HTML5 validation, it gets assigned a psuedo-class <code>:valid</code>, and <code>:invalid</code> if it doesn't.</p>
<p>Let's try an example:</p>
<pre><code class="language-HTML">&lt;form&gt;
&lt;label for="firstname"&gt; First Name: &lt;/label&gt;
&lt;input type="text" name="firstname" id="firstname" required maxlength="45"&gt;
&lt;label for="lastname"&gt; Last Name: &lt;/label&gt;
&lt;input type="text" name="lastname" id="lastname" required maxlength="45"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/04/form-validation-required.png" alt="Client side form validation for required fields using HTML5 attributes"></p>
<p><a href="https://jsfiddle.net/58xc2qyj/">Link to JSFiddle</a></p>
<p>Here we have two required fields - First Name and Last Name. Try this example in JSFidle. If you skip either of these fields and press submit, you'll get a message, "Please fill out this field". This is validation using in-built HTML5.</p>
<h3 id="howtosetupvalidationusingjavascript">How to set up validation using JavaScript</h3>
<p>When implementing form validation, there are a few things to consider:</p>
<ol>
<li>What is defined as "valid" data? This helps you answer questions about the format, length, required fields, and type of data.</li>
<li>What happens when invalid data is entered? This will help you define the user experience of the validation - whether to show an error message inline or at the top of the form, how detailed should the error message be, should the form be sumitted anyways, should there be analytics to track invalid format of data? And so on.</li>
</ol>
<p>You can perform JavaScript validation in two ways:</p>
<ol>
<li>Inline validation using JavaScript</li>
<li>HTML5 Constraint validation API</li>
</ol>
<h4 id="inlinevalidationusingjavascript">Inline validation using JavaScript</h4>
<pre><code class="language-html">&lt;form id="form"&gt;
&lt;label for="firstname"&gt; First Name* &lt;/label&gt;
&lt;input type="text" name="firstname" id="firstname" /&gt;
&lt;button id="submit"&gt;Submit&lt;/button&gt;
&lt;span role="alert" id="nameError" aria-hidden="true"&gt;
Please enter First Name
&lt;/span&gt;
&lt;/form&gt;
</code></pre>
<pre><code class="language-javascript">const submit = document.getElementById("submit");
submit.addEventListener("click", validate);
function validate(e) {
e.preventDefault();
const firstNameField = document.getElementById("firstname");
let valid = true;
if (!firstNameField.value) {
const nameError = document.getElementById("nameError");
nameError.classList.add("visible");
firstNameField.classList.add("invalid");
nameError.setAttribute("aria-hidden", false);
nameError.setAttribute("aria-invalid", true);
}
return valid;
}
</code></pre>
<pre><code class="language-css">#nameError {
display: none;
font-size: 0.8em;
}
#nameError.visible {
display: block;
}
input.invalid {
border-color: red;
}
</code></pre>
<p><a href="https://jsfiddle.net/0tq3e49w/4/">Link to JSFiddle</a></p>
<p>In this example, we check for required fields using JavaScript. If a required field is not present, we use CSS to show the error message.</p>
<p>Aria labels are modified accordingly to signal an error. By using CSS to show / hide an error, we are reducing the number of DOM manipulations we need to make. The error message is provided in-context thereby making the user experience intuitive.</p>
<h4 id="html5constraintvalidationapi">HTML5 Constraint validation API</h4>
<p>The <code>required</code> and <code>pattern</code> HTML attributes can help perform basic validation. But if you want more complex validation or want to provide detailed error messaging, you can use the Constraint Validation API.</p>
<p>Some methods provided by this API are:</p>
<ol>
<li><code>checkValidity</code></li>
<li><code>setCustomValidity</code></li>
<li><code>reportValidity</code></li>
</ol>
<p>The following properties are useful:</p>
<ol>
<li><code>validity</code></li>
<li><code>validationMessage</code></li>
<li><code>willValidate</code></li>
</ol>
<p>In this example, we will validate using HTML5 inbuilt methods such as <code>required</code> and <code>length</code> in conjunction with the Constraint Validation API to provide detailed error messages.</p>
<pre><code class="language-HTML">&lt;form&gt;
&lt;label for="firstname"&gt; First Name: &lt;/label&gt;
&lt;input type="text" name="firstname" required id="firstname"&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<pre><code class="language-javascript">const nameField = document.querySelector("input");
nameField.addEventListener("input", () =&gt; {
nameField.setCustomValidity("");
nameField.checkValidity();
console.log(nameField.checkValidity());
});
nameField.addEventListener("invalid", () =&gt; {
nameField.setCustomValidity("Please fill in your First Name.");
});
</code></pre>
<p><a href="https://jsfiddle.net/xz2wjLck/1/">Link to JSFiddle</a></p>
<h2 id="dontforgetserversidevalidation">Don't forget server side validation</h2>
<p>Client side validation is not the only validation check you should do. You must also validate the data received from your client on the server side code to ensure that the data matches what you expect it to be.</p>
<p>You can also use server-side validation to perform business logic verifications that should not live on the client side.</p>
<h2 id="formvalidationbestpractices">Form Validation best practices</h2>
<ol>
<li>Always have server side validation, since malicious actors can bypass client side validation.</li>
<li>Provide detailed error messages in-context with the field that produced the error.</li>
<li>Provide an example of what the data should look like in case of an error message, such as - "Email did not match format - <a href="mailto:test@example.com">test@example.com</a>"</li>
<li>Avoid using single error pages that involve redirection. This is bad user experience and forces the user to go back to a previous page to fix the form and lose context.</li>
<li>Always mark required fields.</li>
</ol>
<h3 id="interestedinmoretutorialsandarticleslikethissignupformynewsletterorfollowmeontwitter">Interested in more tutorials and articles like this? <a href="https://tinyletter.com/shrutikapoor">Sign up for my newsletter.</a> or <a href="https://twitter.com/shrutikapoor08">follow me on Twitter</a></h3>
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
