---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg"
tags: [React]
description: In this article, we will explore the react-hook-form library.
author: "Milad E. Fahmy"
title: "How to Build Forms in React with the react-hook-form Library"
created: "2021-08-15T19:28:09+02:00"
modified: "2021-08-15T19:28:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Forms in React with the react-hook-form Library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9d9bdd49c47664ed817585.jpg" alt="How to Build Forms in React with the react-hook-form Library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><br>In this article, we will explore the <a href="https://react-hook-form.com/">react-hook-form</a> library.</p>
<p>You will learn how to use and integrate this library with React. We'll also see why it's becoming a popular choice for building both simple and complex forms with added support for handling complex validations.</p>
<h3 id="let-s-get-started">Let's get started</h3>
<p>Working with forms in React is a complex task. And it just gets more complex when the number of input fields increases along with the validations.</p>
<p>Take a look at the below code:</p><pre><code class="language-js">
import React, { useState } from "react";
import "./styles.css";
export default function App() {
const [state, setState] = useState({
email: "",
password: ""
});
const handleInputChange = (event) =&gt; {
setState((prevProps) =&gt; ({
...prevProps,
[event.target.name]: event.target.value
}));
};
const handleSubmit = (event) =&gt; {
event.preventDefault();
console.log(state);
};
return (
&lt;div className="App"&gt;
&lt;form onSubmit={handleSubmit}&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Email&lt;/label&gt;
&lt;input
type="text"
name="email"
value={state.email}
onChange={handleInputChange}
/&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input
type="password"
name="password"
value={state.password}
onChange={handleInputChange}
/&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;&lt;/label&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/login-form-zjxs9" rel="noreferrer nofollow noopener">https://codesandbox.io/s/login-form-zjxs9</a>.</p>
<p>In the above code, we have only 2 input fields, namely <code>email</code> and <code>password</code>, and a submit button. </p>
<p>Each input field has a <code>value</code> and <code>onChange</code> handler added so we can update the state based on the user's input.</p>
<p>Also, we have added a <code>handleSubmit</code> method which displays the data entered in the form to the console.</p>
<p>This looks fine. But what if we need to add validations like required field validation, minimum length validation, password validation, email field validation and also display the corresponding error messages?</p>
<p>The code will become more complex and lengthy as the number of input fields and their validations increase.</p>
<p>This is a very common requirement in any application. So to easily work with Forms, there are various libraries available like <code>Formik</code>, <code>redux-form</code>, <code>react-final-form</code>, <code>react-hook-form</code> and so on.</p>
<p>But the one which is gaining lot of popularity is the <code>react-hook-form</code> library.</p>
<p>So let’s now learn why and how to use it. For that, we'll create a new React application.</p>
<p>Create a new React project by running the following command from the terminal:</p><pre><code class="language-js">npx create-react-app react-hook-form-demo</code></pre>
<p>Once the project is created, delete all files from the <code>src</code> folder and create new <code>index.js</code> and <code>styles.css</code> files inside the <code>src</code> folder.</p>
<p>To install the form library, execute the following command from the terminal:</p><pre><code class="language-js">yarn add react-hook-form</code></pre>
<h2 id="how-to-create-initial-pages">How to Create Initial Pages</h2>
<p><br>Open the <code>src/index.js</code> file and add the following content inside it:</p><pre><code class="language-js">
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));</code></pre>
<p>Open the <code>src/styles.css</code> file and add the content from <a href="https://github.com/myogeshchavan97/react-hook-form-demo/blob/master/src/styles.css">here</a> inside it.</p>
<p>Now, create a new file <code>App.js</code> inside the <code>src</code> folder with the following content:</p><pre><code class="language-js">
import React from "react";
import "./styles.css";
export default function App() {
return (
&lt;div className="App"&gt;
&lt;form&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Email&lt;/label&gt;
&lt;input type="text" name="email" /&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input type="password" name="password" /&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;&lt;/label&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Here, we have just added the email and password fields to the form.</p>
<h2 id="basic-form-creation-using-react-hook-form">Basic Form Creation Using react-hook-form</h2>
<p><br>The <code>react-hook-form</code> library provides a <code>useForm</code> hook which we can use to work with forms.</p>
<p>Import the <code>useForm</code> hook like this:</p><pre><code class="language-js">import { useForm } from 'react-hook-form';</code></pre>
<p>Use the <code>useForm</code> hook like this:</p><pre><code class="language-js">const { register, handleSubmit, errors } = useForm();</code></pre>
<p>Here,</p>
<ul>
<li>register is a function to be used as a ref provided by the <code>useForm</code> hook. We can assign it to each input field so that the <code>react-hook-form</code> can track the changes for the input field value.</li>
<li>handleSubmit is the function we can call when the form is submitted</li>
<li>errors will contain the validation errors, if any</li>
</ul>
<p>Now, replace the contents of the <code>App.js</code> file with the following content:</p><pre><code class="language-js">
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
export default function App() {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) =&gt; {
console.log(data);
};
return (
&lt;div className="App"&gt;
&lt;form onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Email&lt;/label&gt;
&lt;input type="text" name="email" ref={register} /&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input type="password" name="password" ref={register} /&gt;
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;&lt;/label&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}</code></pre>
<p>In the above code, we have given a ref to each input field that we got from the <code>useForm</code> hook.</p><pre><code class="language-js">ref={register}</code></pre>
<p>Also, we added the onSubmit function which is passed to the handleSubmit function.</p><pre><code class="language-js">&lt;form onSubmit={handleSubmit(onSubmit)}&gt;</code></pre>
<p>Note that for each input field, we have given a unique name which is mandatory so <code>react-hook-form</code> can track the changing data.</p>
<p>When we submit the form, the handleSubmit function will handle the form submission. It will send the user entered data to the onSubmit function which we’re logging to the console.</p><pre><code class="language-js">const onSubmit = (data) =&gt; {
console.log(data);
};</code></pre>
<p>Now, start the application by running the <code>yarn start</code> command.</p>
<p>As you can see, when we submit the form, the details entered by the user are displayed in the console.</p>
<p>Also, as compared to the code without <code>react-hook-form</code> (which we saw at the start of this article), this code is much simpler. This is because we don’t have to add the <code>value</code> and <code>onChange</code> handler for each input field and there is no need to manage the application state ourselves.</p>
<h2 id="how-to-add-validations-to-the-form">How to Add Validations to the Form</h2>
<p>Now, let’s add the required field and minimum length validation to the input fields.</p>
<p>To add validation we can pass it to the register function which is passed as a ref to each input field like this:</p><pre><code class="language-js">
&lt;input type="text" name="email" ref={register({ required: true})} /&gt;
&lt;input
type="password"
name="password"
ref={register({ required: true, minLength: 6 })}
/&gt;</code></pre>
<p>We also want to display the error message if the validation fails.</p>
<p>When the validation fails, the errors object coming from <code>useForm</code> will be populated with the fields for which the validation failed.</p>
<p>Open the <code>App.js</code> file and replace its contents with the following content:</p><pre><code class="language-js">
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
export default function App() {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) =&gt; {
console.log(data);
};
return (
&lt;div className="App"&gt;
&lt;form onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="form-control "&gt;
&lt;label&gt;Email&lt;/label&gt;
&lt;input
type="text"
name="email"
ref={register({
required: true,
pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
})}
/&gt;
{errors.email &amp;&amp; errors.email.type === "required" &amp;&amp; (
&lt;p className="errorMsg"&gt;Email is required.&lt;/p&gt;
)}
{errors.email &amp;&amp; errors.email.type === "pattern" &amp;&amp; (
&lt;p className="errorMsg"&gt;Email is not valid.&lt;/p&gt;
)}
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input
type="password"
name="password"
ref={register({ required: true, minLength: 6 })}
/&gt;
{errors.password &amp;&amp; errors.password.type === "required" &amp;&amp; (
&lt;p className="errorMsg"&gt;Password is required.&lt;/p&gt;
)}
{errors.password &amp;&amp; errors.password.type === "minLength" &amp;&amp; (
&lt;p className="errorMsg"&gt;
Password should be at-least 6 characters.
&lt;/p&gt;
)}
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;&lt;/label&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}</code></pre>
<p></p>
<p>Here, for the email input field, we have provided the required and pattern matching validations.</p><pre><code class="language-js">&lt;input
type="text"
name="email"
ref={register({
required: true,
pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
})}
/&gt;</code></pre>
<p>So as you type in the email input field, the validation will run once the form is submitted.</p>
<p>If the validation failed, then the <code>errors.email</code> field inside the errors object will be populated with the type field which we used to display the error message.</p><pre><code class="language-js">
{errors.email &amp;&amp; errors.email.type === "required" &amp;&amp; (
&lt;p className="errorMsg"&gt;Email is required.&lt;/p&gt;
)}</code></pre>
<p>In the similar way, we have added the password field validation.</p>
<p>So as you can see, each input field is automatically focused if there is any validation error for the that input field when we submit the form.</p>
<p>Also, the form is not submitted as long as there is a validation error. You can see that the <code>console.log</code> statement is only printed if the form is valid.</p>
<p>So using <code>react-hook-form</code> reduced the amount of code that we have to write. The validation is also responsive, so once the field becomes valid, the error message goes away instantly.</p>
<p>But as the number of validations for each field increases, the conditional checks and error message code will still increase. So we can further refactor the code to make it even simpler.</p>
<p>Take a look at the below code:</p><pre><code class="language-js">
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
export default function App() {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) =&gt; {
console.log(data);
};
return (
&lt;div className="App"&gt;
&lt;form onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="form-control "&gt;
&lt;label&gt;Email&lt;/label&gt;
&lt;input
type="text"
name="email"
ref={register({
required: 'Email is required.',
pattern: {
value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
message: 'Email is not valid.'
}
})}
/&gt;
{errors.email &amp;&amp; &lt;p className="errorMsg"&gt;{errors.email.message}&lt;/p&gt;}
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;Password&lt;/label&gt;
&lt;input
type="password"
name="password"
ref={register({
required: 'Password is required.',
minLength: {
value: 6,
message: 'Password should be at-least 6 characters.'
}
})}
/&gt;
{errors.password &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.password.message}&lt;/p&gt;
)}
&lt;/div&gt;
&lt;div className="form-control"&gt;
&lt;label&gt;&lt;/label&gt;
&lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}</code></pre>
<p>In the code above, we have changed the email and password validation code. &nbsp;</p>
<p>For the email input field, we changed this previous code:</p><pre><code class="language-js">
&lt;input
type="text"
name="email"
ref={register({
required: true,
pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
})}
/&gt;</code></pre>
<p>to the below new code:</p><pre><code class="language-js">
&lt;input
type="text"
name="email"
ref={register({
required: 'Email is required.',
pattern: {
value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
message: 'Email is not valid.'
}
})}
/&gt;</code></pre>
<p>Here, we’ve directly provided the error message we want to display while adding the validation itself.</p>
<p>So we no longer need to add extra checks for each validation. We are displaying the error message using the message property available inside the errors object for each input field.</p><pre><code class="language-js">{errors.email &amp;&amp; &lt;p className="errorMsg"&gt;{errors.email.message}&lt;/p&gt;}</code></pre>
<p>So by doing it this way, the code is further simplified which makes it easy to add extra validations in future.</p>
<p>Note that if there are validation errors, the onSubmit handler will not be executed and the corresponding input field will automatically be focused (which is a good thing).</p>
<h2 id="how-to-add-a-custom-validation-method">How to Add a Custom Validation Method</h2>
<p>You can even provide a custom validation for the input field by adding a <code>validate</code> method. This is useful if you need to perform complex validations like this:</p><pre><code class="language-js">// validation function
const validatePassword = (value) =&gt; {
if (value.length &lt; 6) {
return 'Password should be at-least 6 characters.';
} else if (
!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
) {
return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
}
return true;
};
// JSX
&lt;input
type="password"
name="password"
ref={register({
required: 'Password is required.',
validate: validatePassword
})}
/&gt;</code></pre>
<p>Now you know how to use <code>react-hook-form</code> to create forms in React along with complex validations. </p>
<h2 id="why-react-hook-form-is-better-than-the-alternatives">Why react-hook-form is better than the alternatives</h2>
<p>Let’s look at some additional reasons that <code>react-hook-form</code> should become your preferred choice for working with forms.</p>
<ul>
<li>Code complexity is less as compared to <code>formik</code>, <code>redux-form</code> and other alternatives.</li>
<li><code>react-hook-form</code> integrates well with the <code>yup</code> library for schema validation so you can combine your own validation schemas.</li>
<li>The number of re-renders in the application is small compared to the alternatives.</li>
<li>Mounting time is less as compared to the alternatives.</li>
</ul>
<p>For the actual comparison metrics, <a href="https://react-hook-form.com/">read more here.</a></p>
<h2 id="conclusion">Conclusion</h2>
<p><br>In this article, we have seen how to use <code>react-hook-form</code> and why it's many developers' preferred choice for building both simple and complex forms in React.</p>
<p>You can find the GitHub source code for this application <a href="https://github.com/myogeshchavan97/react-hook-form-demo">here</a>.</p>
<p>If you liked this article, then you'll also love my other articles.<br>Subscribe to my <a href="https://bit.ly/2HwVEA2">weekly newsletter</a> to join other 1000+ subscribers to get amazing tips, tricks, and articles directly in your inbox.</p>
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
