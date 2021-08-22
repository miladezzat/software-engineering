---
card: "https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png"
tags: [JavaScript]
description: by Timur (Tima) Zhiyentayev
author: "Milad E. Fahmy"
title: "How to integrate MailChimp in a JavaScript web app"
created: "2021-08-15T19:47:15+02:00"
modified: "2021-08-15T19:47:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-api tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to integrate MailChimp in a JavaScript web app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UqE_Yt-qrHAUkDR_ZR73-g.png" alt="How to integrate MailChimp in a JavaScript web app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Timur (Tima) Zhiyentayev</p>
<h1 id="how-to-integrate-mailchimp-in-a-javascript-web-app">How to integrate MailChimp in a JavaScript web app</h1>
<figcaption>Image <a href="https://mailchimp.com/about/brand-assets/" rel="noopener" target="_blank" title="">source</a>.</figcaption>
</figure>
<p>If you are a blogger, publisher, or business owner who does content marketing, having a newsletter is a must. In this tutorial, you will learn how to add Mailchimp integration to a simple JavaScript app. You’ll ultimately build a form for guest users to subscribe to a newsletter.</p>
<p>I wrote this tutorial for a junior/mid-career web developer. The tutorial <em>assumes some basic knowledge of React, JavaScript, and HTTP</em>.</p>
<p>You’ll start the tutorial with a boilerplate app, gradually add code to it, and finally test Mailchimp API integration.</p>
<p>The boilerplate app is built with React, Material-UI, Next, Express, Mongoose, and MongoDB. Here’s more about the <a href="https://github.com/builderbook/builderbook/tree/master/boilerplate" rel="noopener">boilerplate</a>.</p>
<p>As mentioned above, our goal is to create a feature that allows a guest user to subscribe to a MailChimp newsletter. The user subscribes by manually adding their email address to a form on your website. Here is an overview of the data exchange that will occur between the client (browser) and server:</p>
<ul>
<li>A user adds their email address to the form and clicks <code>submit</code></li>
<li>The click triggers a client-side API method that sends the email address from the user’s browser to your app server</li>
<li>The client-side API method sends a POST request to a unique Express route</li>
<li>The Express route passes the email address to a server-side API method that sends a POST request to Mailchimp’s server</li>
<li>The email address is successfully added to your Mailchimp list</li>
</ul>
<p>Specifically, you will achieve the following by the end of this tutorial:</p>
<ul>
<li>Create a <code>Subscribe</code> page with a subscription form</li>
<li>Define an API method called <code>subscribeToNewsletter()</code> using the <code>fetch()</code>method</li>
<li>Define an Express route <code>'/subscribe'</code></li>
<li>Define a <code>subscribe()</code> API method that sends a POST request to Mailchimp's API server</li>
<li>Test out this data exchange with Postman and as a guest user</li>
</ul>
<h3 id="getting-started">Getting started</h3>
<p>For this tutorial, we’ll use code located in the <a href="https://github.com/builderbook/builderbook/tree/master/tutorials/1-start" rel="noopener">1-start</a> folder of our <a href="https://github.com/builderbook/builderbook" rel="noopener">builderbook repo</a>. If you don’t have time to run the app locally, I deployed this example app at: <a href="https://mailchimp.builderbook.org/subscribe" rel="noopener">https://mailchimp.builderbook.org/subscribe</a></p>
<p>To run the app locally:</p>
<ul>
<li>Clone the builderbook repo to your local machine with:</li>
</ul><pre><code>git clone git@github.com:builderbook/builderbook.git</code></pre>
<ul>
<li>Inside the <code>1-start</code> folder, run <code>yarn</code> or <code>npm install</code> to install all packages listed in <code>package.json</code>.</li>
</ul>
<p>To add Mailchimp API to our app, we will install and learn about the following packages:</p>
<ul>
<li><a href="https://github.com/matthew-andrews/isomorphic-fetch" rel="noopener">isomorphic-fetch</a></li>
<li><a href="https://github.com/expressjs/body-parser" rel="noopener">body-parser</a></li>
<li><a href="https://github.com/request/request" rel="noopener">request</a></li>
</ul>
<p>Let’s start by putting together the <code>Subscribe</code> page. In addition to learning about the Mailchimp API, you will get familiar with <a href="https://github.com/zeit/next.js" rel="noopener">Next.js</a>, a framework for React apps.</p>
<p>A key feature of Next.js is server-side rendering for initial page load. Other features include routing, prefetching, hot code reload, code splitting, and preconfigured webpack.</p>
<h3 id="subscribe-page">Subscribe page</h3>
<p>We will define a <code>Subscribe</code> component as a child of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener">ES6 class</a> using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends" rel="noopener">extends</a>.</p>
<p>Instead of:</p><pre><code>const Subscribe = React.createClass({})</code></pre>
<p>We will use:</p><pre><code>class Subscribe extends React.Component {}</code></pre>
<p>We will not specify <code>ReactDOM.render()</code> or <code>ReactDOM.hydrate</code> explicitly, since Next.js implements both <a href="https://github.com/zeit/next.js/blob/802e879d337de0fe37317e21335c1ce8bbfa4ecf/client/index.js#L175" rel="noopener">internally</a>.</p>
<p>A high-level structure for our <code>Subscribe</code> page component is:</p><pre><code>import React from 'react';// other imports</code></pre><pre><code>class Subscribe extends React.Component {  onSubmit = (e) =&gt; {    // check if email is missing, return undefined    // if email exists, call subscribeToNewsletter() API method  };</code></pre><pre><code>render() {    return (      // form with input and button    );  }}</code></pre><pre><code>export default Subscribe;</code></pre>
<p>Create a <code>subscribe.js</code> file inside the <code>pages</code> folder of <code>1-start</code>. Add the above code to this file. We will fill the <code>// other imports</code> section as we go.</p>
<p>Our form will have only two elements: (1) an input element for email addresses and (2) a button. Since our boilerplate app is integrated with Material-UI, we’ll use <a href="https://material-ui-next.com/demos/text-fields/" rel="noopener">TextField</a> and <a href="https://material-ui-next.com/demos/buttons/" rel="noopener">Button</a> components from the Material-UI library. Add these two imports to your <code>subscribe.js</code> file:</p><pre><code>import TextField from 'material-ui/TextField';import Button from 'material-ui/Button';</code></pre>
<p>Put the <code>TextField</code> and <code>Button</code> components inside a <code>&lt;fo</code>rm&gt; element:</p><pre><code>&lt;form onSubmit={this.onSubmit}&gt;  &lt;p&gt;We will email you when a new tutorial is released:&lt;/p&gt;  &lt;TextField    type="email"    label="Your email"    style={styleTextField}    required  /&gt;  &lt;p /&gt;  &lt;Button variant="raised" color="primary" type="submit"&amp;gt;    Subscribe  &lt;/Button&gt;&lt;/form&gt;</code></pre>
<p>You can see that we passed some props to both <code>TextField</code> and <code>Button</code> components. For a complete list of props you can pass, check out the official docs for <a href="https://material-ui-next.com/api/text-field/" rel="noopener">TextField props</a> and <a href="https://material-ui-next.com/api/button" rel="noopener">Button props</a>.</p>
<p>We need to get an email address specified in <code>TextField</code>. To access the value of <code>TextField</code>, we add React's <a href="https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element" rel="noopener">ref attribute</a> to it:</p><pre><code>inputRef={(elm) =&gt; {  this.emailInput = elm;}}</code></pre>
<p>We access the value with:</p><pre><code>this.emailInput.value</code></pre>
<p>Two notes:</p>
<ul>
<li>We did not use <code>ref="emailInput"</code>, since React documentation recommends using the contextual object <code>this</code>. In JavaScript, <code>this</code> is used to access an object in the context. If you configure Eslint properly, you would see an Eslint warning for this <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md" rel="noopener">rule</a>.</li>
<li>Instead of <code>ref</code>, we used <code>inputRef</code> since the <code>TextField</code> component is not an <code>input</code> HTML element. <code>TextField</code> is a component of Material-UI and uses the <code>inputRef</code> prop instead of <code>ref</code>.</li>
</ul>
<p>Before we define our <code>onSubmit</code> function, let's run our app and take a look at our form. Your code at this point should look like: <code>pages/subscribe.js</code></p><pre><code>import React from 'react';import Head from 'next/head';import TextField from 'material-ui/TextField';import Button from 'material-ui/Button';</code></pre><pre><code>import { styleTextField } from '../components/SharedStyles';import withLayout from '../lib/withLayout';</code></pre><pre><code>class Subscribe extends React.Component {  onSubmit = (e) =&gt; {    // some code  };</code></pre><pre><code>render() {    return (      &lt;div style={{ padding: '10px 45px' }}&gt;        &lt;Head&gt;          &lt;title&gt;Subscribe&lt;/title&gt;          &lt;meta name="description" content="description for indexing bots" /&gt;        &lt;/Head&gt;        &lt;br /&gt;        &lt;form onSubmit={this.onSubmit}&gt;          &lt;p&gt;We will email you when a new tutorial is released:&lt;/p&gt;          &lt;TextField            inputRef={(elm) =&gt; {              this.emailInput = elm;            }}            type="email"            label="Your email"            style={styleTextField}            required          /&gt;          &lt;p /&gt;          &lt;Button variant="raised" color="primary" type="submit"&gt;            Subscribe          &lt;/Button&gt;        &lt;/form&gt;      &lt;/div&gt;    );  }}</code></pre><pre><code>export default withLayout(Subscribe);</code></pre>
<p>A few notes:</p>
<ul>
<li>In Next.js, you can specify page title and description using <code>Head</code>. See how we used it above.</li>
<li>We added a <code>styleTextField</code> style. We keep this style in <code>components/SharedStyles.js</code>, so that it's reusable and can be imported into any component or page.</li>
<li>We wrapped the <code>Subscribe</code> component with <code>withLayout</code>. The higher-order component <code>withLayout</code> ensures that a page gets a <code>Header</code> component and is server-side rendered on initial load.</li>
</ul>
<p>We access the <code>Subscribe</code> page at the <code>/subscribe</code> route, since Next.js creates the route for a page from the page's file name inside the <code>pages</code> folder.</p>
<p>Start your app with <code>yarn dev</code> and go to <code><a href="http://localhost:8000/subscribe:" rel="noopener">http://localhost:8000/subscribe</a></code></p>
<p>The form looks as expected. Try changing the values passed to different props of the <code>TextField</code> and <code>Button</code> components. For example, change text for the <code>label</code> prop to <code>Type your email</code> and change the Button <code>variant</code> prop to <code>flat</code>:</p>
<p>Before we continue, click the <code>Log in</code> link in the <code>Header</code>. Note the loading progress bar at the top of the page. We implemented this bar with <a href="https://github.com/rstacruz/nprogress" rel="noopener">Nprogress</a>, and we will show it while waiting for our code to send an email address to a Mailchimp list.</p>
<p>Our next step is to define the <code>onSubmit</code> function. The purpose of this function is to get the email address from <code>TextField</code>, pass that email address to an API method <code>subscribeToNewsletter</code>, and then call the method.</p>
<p>Before we call <code>subscribeToNewsletter(email)</code>, let's prevent a default behavior of our <code>&lt;fo</code>rm&gt; element and d<code>efine</code> email:</p>
<ul>
<li>Prevent the default behavior of <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data" rel="noopener">sending form data to a server</a> with:</li>
</ul><pre><code>e.preventDefault();</code></pre>
<ul>
<li>Let’s define a local variable <code>email</code> . It has the value <code>this.emailInput.value</code> if both <code>this.emailInput</code> and <code>this.emailInput.value</code> exist, otherwise it is null:</li>
</ul><pre><code>const email = (this.emailInput &amp;&amp; this.emailInput.value) || null;</code></pre>
<ul>
<li>If <code>email</code> is null, the function should return undefined:</li>
</ul><pre><code>if (this.emailInput &amp;&amp; !email) {  return;}</code></pre>
<p>So far we have:</p><pre><code>onSubmit = (e) =&gt; {  e.preventDefault();</code></pre><pre><code>const email = (this.emailInput &amp;&amp; this.emailInput.value) || null;</code></pre><pre><code>if (this.emailInput &amp;&amp; !email) {    return;  }</code></pre><pre><code>// call subscribeToNewsletter(email)};</code></pre>
<p>To call our API method <code>subscribeToNewsletter(email)</code>, let's use the <code>async/await</code> construct together with <code>try/catch</code>. We cover async callbacks, <code>Promise.then</code>, and <code>async/await</code> in detail in <a href="https://builderbook.org/books/builder-book/authentication-hoc-promise-async-await-static-method-for-user-model-google-oauth#async-await" rel="noopener">our book</a>.</p>
<p>To use <code>async/await</code>, prepend <code>async</code> to an anonymous arrow function like this:</p><pre><code>onSubmit = async (e) =&gt;</code></pre>
<p>Providing <code>subscribeToNewsletter(email)</code> should return a Promise (and it does — we define this method later in this tutorial using JavaScript's <code>fetch()</code>method that returns a Promise). You can prepend <code>await</code> to <code>subscribeToNewsletter(email)</code>:</p><pre><code>await subscribeToNewsletter({ email })</code></pre>
<p>You get:</p><pre><code>onSubmit = async (e) =&gt; {  e.preventDefault();</code></pre><pre><code>const email = (this.emailInput &amp;&amp; this.emailInput.value) || null;</code></pre><pre><code>if (this.emailInput &amp;&amp; !email) {    return;  }</code></pre><pre><code>try {    await subscribeToNewsletter({ email });</code></pre><pre><code>if (this.emailInput) {      this.emailInput.value = '';    }  } catch (err) {    console.log(err); //eslint-disable-line  }};</code></pre>
<p>JavaScript will pause at the line with <code>await subscribeToNewsletter({ email });</code> and continue only after <code>subscribeToNewsletter({ email })</code> returns a response with a success or error message.</p>
<p>In the case of success, let’s clear our form with:</p><pre><code>if (this.emailInput) {    this.emailInput.value = '';  }</code></pre>
<p>Before we define our <code>subscribeToNewsletter</code> API method, let's make a UX improvement. Use <code>NProgress.start();</code> to start bar loading and use <code>NProgress.done();</code> to complete bar loading:</p><pre><code>onSubmit = async (e) =&gt; {  e.preventDefault();</code></pre><pre><code>const email = (this.emailInput &amp;&amp; this.emailInput.value) || null;</code></pre><pre><code>if (this.emailInput &amp;&amp; !email) {    return;  }</code></pre><pre><code>NProgress.start();</code></pre><pre><code>try {    await subscribeToNewsletter({ email });</code></pre><pre><code>if (this.emailInput) {      this.emailInput.value = '';    }</code></pre><pre><code>NProgress.done();  } catch (err) {    console.log(err); //eslint-disable-line    NProgress.done();  }};</code></pre>
<p>With this change, a user who submits a form will see the progress bar.</p>
<p>Code for your <code>Subscribe</code> page should look like: <code>pages/subscribe.js</code></p><pre><code>import React from 'react';import Head from 'next/head';import TextField from 'material-ui/TextField';import Button from 'material-ui/Button';import NProgress from 'nprogress';</code></pre><pre><code>import { styleTextField } from '../components/SharedStyles';import withLayout from '../lib/withLayout';import { subscribeToNewsletter } from '../lib/api/public';</code></pre><pre><code>class Subscribe extends React.Component {  onSubmit = async (e) =&gt; {    e.preventDefault();</code></pre><pre><code>const email = (this.emailInput &amp;&amp; this.emailInput.value) || null;</code></pre><pre><code>if (this.emailInput &amp;&amp; !email) {      return;    }</code></pre><pre><code>NProgress.start();</code></pre><pre><code>try {      await subscribeToNewsletter({ email });</code></pre><pre><code>if (this.emailInput) {        this.emailInput.value = '';      }</code></pre><pre><code>NProgress.done();      console.log('non-error response is received');    } catch (err) {      console.log(err); //eslint-disable-line      NProgress.done();    }  };</code></pre><pre><code>render() {    return (      &lt;div style={{ padding: '10px 45px' }}&gt;        &lt;Head&gt;          &lt;title&gt;Subscribe&lt;/title&gt;          &lt;meta name="description" content="description for indexing bots" /&gt;        &lt;/Head&gt;        &lt;br /&gt;        &lt;form onSubmit={this.onSubmit}&gt;          &lt;p&gt;We will email you when a new tutorial is released:&lt;/p&gt;          &lt;TextField            inputRef={(elm) =&gt; {              this.emailInput = elm;            }}            type="email"            label="Your email"            style={styleTextField}            required          /&gt;          &lt;p /&gt;          &lt;Button variant="raised" color="primary" type="submit"&gt;            Subscribe          &lt;/Button&gt;        &lt;/form&gt;      &lt;/div&gt;    );  }}</code></pre><pre><code>export default withLayout(Subscribe);</code></pre>
<p>Start your app with <code>yarn dev</code> and make sure your page and form look as expected. Submitting a form won't work yet, since we haven't defined the API method <code>subscribeToNewsletter()</code>.</p>
<h3 id="subscribetonewsletter-api-method">subscribeToNewsletter API method</h3>
<p>As you may have noticed from the import section of <code>pages/subscribe.js</code>, we will define <code>subscribeToNewsletter()</code> at <code>lib/api/public.js</code>. We placed <code>subscribeToNewsletter()</code> to the <code>lib</code> folder to make it <em>universally</em> accessible, meaning this API method will be available on both client (browser) and server. We do so because in Next.js, page code is server-side rendered on initial load and client-side rendered on subsequent loads.</p>
<p>In our case, when a user <em>clicks a button</em> on the browser to call <code>subscribeToNewsletter()</code> , this method will run only on the client. But imagine that you have a <code>getPostList</code> API method that fetches a list of blog posts. To render a page with a list of posts <em>on the server, </em>you have to make <code>getPostList</code> universally available.</p>
<p>Back to our API method <code>subscribeToNewsletter()</code>. As we discussed in the introduction to this tutorial, our goal is to hook up a data exchange between client and server. In other words, our goal is to build an internal API for our app. That's why we call <code>subscribeToNewsletter()</code> an API method.</p>
<p>The purpose of <code>subscribeToNewsletter()</code> is to <em>send a request</em> to the server at a particular route called an API endpoint and then receive a response. We discuss HTTP and request/response in detail <a href="https://builderbook.org/books/builder-book/server-database-session-header-and-menudrop-components#http" rel="noopener">here</a>.</p>
<p>To understand this tutorial, you should know that a request that passes data to the server and does not require any data back is sent with the <code>POST</code> method. Usually, the request's <code>body</code> contains data (in our case, email address).</p>
<p>In addition to sending a request, our <code>subscribeToNewsletter()</code> method should wait for a response. The response does not have to contain any data — it could be a simple object with one parameter <code>{ subscribed: 1 }</code> or <code>{ done: 1 }</code> or <code>{ success: 1 }</code>.</p>
<p>To achieve both sending a request and receiving a response, we use the <code>fetch()</code> method. In JavaScript, <a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch" rel="noopener">fetch()</a> is a global method that is used for fetching data over a network by sending a request and receiving a response.</p>
<p>We use the <code>isomorphic-fetch</code> package that makes <code>fetch()</code> available in our Node environment. Install this package with:</p><pre><code>yarn add isomorphic-fetch</code></pre>
<p>Here’s an example of usage from the <a href="https://github.com/matthew-andrews/isomorphic-fetch#usage" rel="noopener">package’s README</a>:</p><pre><code>fetch('//offline-news-api.herokuapp.com/stories')	.then(function(response) {		if (response.status &gt;= 400) {			throw new Error("Bad response from server");		}		return response.json();	})	.then(function(stories) {		console.log(stories);	});</code></pre>
<p>Let’s use this example to write a reusable <code>sendRequest</code> method that takes <code>path</code> and some other <code>options</code>, passes a request object (object that has <code>method</code>, <code>credentials</code> and <code>options</code> properties), and calls the <code>fetch()</code>method. <code>fetch()</code> takes <code>path</code> and the request object as arguments:</p><pre><code>async function sendRequest(path, options = {}) {  const headers = {    'Content-type': 'application/json; charset=UTF-8',  };</code></pre><pre><code>const response = await fetch(    `${ROOT_URL}${path}`,    Object.assign({ method: 'POST', credentials: 'include' }, { headers }, options),  );</code></pre><pre><code>const data = await response.json();</code></pre><pre><code>if (data.error) {    throw new Error(data.error);  }</code></pre><pre><code>return data;}</code></pre>
<p>Unlike the example from <code>isomorphic-fetch</code>, we used our favorite <code>async/await</code> construct instead of <code>Promise.then</code> (for better code readability).</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">Object.assign()</a> is a method that <em>creates a new object</em> out of three smaller objects: <code>{ method: 'POST', credentials: 'include' }</code>, <code>{ headers }</code>, and <code>options</code>. The object <code>options</code> is empty by default, but it could be, for example, the request's <code>body</code> property. Since we need to pass an email address, our case indeed uses the <code>body</code> property.</p>
<p>As you may have noticed from the code, we need to define <code>ROOT_URL</code>. We can write conditional logic for <code>ROOT_URL</code> that takes into consideration <code>NODE_ENV</code> and <code>PORT</code>, but for simplicity’s sake, we define it as:</p><pre><code>const ROOT_URL = 'http://localhost:8000';</code></pre>
<p>It’s time to define our <code>subscribeToNewsletter</code> method with the help of the <code>sendRequest</code> method:</p><pre><code>export const subscribeToNewsletter = ({ email }) =&gt;  sendRequest('/api/v1/public/subscribe', {    body: JSON.stringify({ email }),  });</code></pre>
<p>As you can see, we pass <code>{ body: JSON.stringify({ email }), }</code> as an <code>options</code> object to add an email address to the body of the request object.</p>
<p>Also we chose <code>/api/v1/public/subscribe</code> as our <code>path</code>, that is the API endpoint for our internal API that adds a user email address to our Mailchimp list.</p>
<p>Put it all together and the content of the <code>lib/api/public.js</code> should be: <code>lib/api/public.js</code></p><pre><code>import 'isomorphic-fetch';</code></pre><pre><code>const ROOT_URL = 'http://localhost:8000';</code></pre><pre><code>async function sendRequest(path, options = {}) {  const headers = {    'Content-type': 'application/json; charset=UTF-8',  };</code></pre><pre><code>const response = await fetch(    `${ROOT_URL}${path}`,    Object.assign({ method: 'POST', credentials: 'include' }, { headers }, options),  );</code></pre><pre><code>const data = await response.json();</code></pre><pre><code>if (data.error) {    throw new Error(data.error);  }</code></pre><pre><code>return data;}</code></pre><pre><code>export const subscribeToNewsletter = ({ email }) =&gt;  sendRequest('/api/v1/public/subscribe', {    body: JSON.stringify({ email }),  });</code></pre>
<p>Good job reaching this point! We defined our <code>subscribeToNewsletter</code> API method that sends a request to the API endpoint <code>/api/v1/public/subscribe</code> and receives a response.</p>
<p>Start your app with <code>yarn dev</code>, add an email address, and submit the form. In your browser console (<code>Developer tools &gt; Cons</code>ole), you will see an expect<code>ed POST </code>404 error:</p>
<p>That error means that the request was successfully sent to the server, but the server did not find what was requested. This is expected behavior since we <em>did not</em> write any server code that sends a response to the client when a request is sent to corresponding API endpoint. In other words, we did not create the Express route <code>/api/v1/public/subscribe</code> that handles the POST request we sent using the <code>subscribeToNewsletter</code> API method.</p>
<h3 id="express-route-subscribe">Express route/subscribe</h3>
<p>An Express route specifies a function that gets executed when an API method sends a request from the client to the route’s API endpoint. In our case, when our API method sends a request to the API endpoint <code>/api/v1/public/subscribe</code>, we want the server to handle this request with an Express route that executes some function.</p>
<p>You can use the class <code>express.Router()</code> and syntax <code>router.METHOD()</code>to modularize Express routes into small groups based on user type:</p><pre><code>const router = express.Router();router.METHOD('API endpoint', ...);</code></pre>
<p>If you’d like to learn more, check out the official Express docs on <a href="https://expressjs.com/en/guide/routing.html#express-router" rel="noopener">express.Router()</a> and <a href="http://expressjs.com/en/api.html#router.METHOD" rel="noopener">router.METHOD()</a>.</p>
<p>However, in this tutorial, instead of modularizing, we will use:</p><pre><code>server.METHOD('API endpoint', ...);</code></pre>
<p>And place the above code directly into our main server code at <code>server/app.js</code>.</p>
<p>You already have enough information to put together a basic Express route:</p>
<ul>
<li>The method is POST</li>
<li>The API endpoint is <code>/api/v1/public/subscribe</code></li>
<li>From writing <code>onSubmit</code> and <code>subscribeToNewsletter</code>, you know about an anonymous arrow function</li>
<li>From writing <code>onSubmit</code>, you know about the <code>try/catch</code> construct</li>
</ul>
<p>Put all this knowledge together, and you get:</p><pre><code>server.post('/api/v1/public/subscribe', (req, res) =&gt; {  try {    res.json({ subscribed: 1 });    console.log('non-error response is sent');  } catch (err) {    res.json({ error: err.message || err.toString() });  }});</code></pre>
<p>A couple of notes:</p>
<ul>
<li>We wrote <code>error: err.message || err.toString()</code> to handle both situations: when the error is a type of string and when the error is an object.</li>
<li>To test out our Express route, we added the line:</li>
</ul><pre><code>console.log(‘non-error response is sent’);</code></pre>
<p>Add the above Express route to <code>server/app.js</code> after this line:</p><pre><code>const server = express();</code></pre>
<p>It’s time to test!</p>
<p>We recommend using the <a href="https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en" rel="noopener">Postman app</a> for testing out a request-response cycle.</p>
<p>Look at this snapshot of request properties in Postman:</p>
<p>You need to specify at least three properties (similar to when we wrote the <code>subscribeToNewsletter</code> API method):</p>
<ul>
<li>Select POST method</li>
<li>Specify the full path for the API endpoint: <code><a href="http://localhost:8000/api/v1/public/subscribe" rel="noopener">http://localhost:8000/api/v1/public/subscribe</a></code></li>
<li>Add a <code>Content-Type</code> header with the value <code>application/json</code></li>
</ul>
<p>Make sure your app is running. Start it with <code>yarn dev</code>. Now click the <code>Send</code> button on Postman.</p>
<p>If successful, you will see the following two outputs:</p>
<ol>
<li>On Postman, you see the response has code 200 and the following body:</li>
</ol>
<p>2. Your terminal prints:</p>
<p>Good job, you just wrote a working Express route!</p>
<p>At this point, you showed that two events happen successfully in your app: a request gets sent and a response is received. However, we <em>did not</em> pass an email address to a function inside our Express route. To do so, we need to access <code>req.body.email</code>, because this is where we saved the email address when defining the <code>subscribeToNewsletter</code> API method:</p><pre><code>const email = req.body.email;</code></pre>
<p>With ES6 object destructuring, it becomes shorter:</p><pre><code>const { email } = req.body;</code></pre>
<p>If the <code>email</code> local variable does not exist, then let's send a response with an error and return undefined (exit with blank <code>return</code>):</p><pre><code>if (!email) {  res.json({ error: 'Email is required' });  return;}</code></pre>
<p>Also, modify the <code>console.log</code> statement to print out <code>email</code>.</p>
<p>After these modifications, you get:</p><pre><code>server.post('/api/v1/public/subscribe', async (req, res) =&gt; {  const { email } = req.body;</code></pre><pre><code>if (!email) {    res.json({ error: 'Email is required' });    return;  }</code></pre><pre><code>try {    res.json({ subscribed: 1 });    console.log(email);  } catch (err) {    res.json({ error: err.message || err.toString() });  }});</code></pre>
<p>Let’s test it out. Open Postman, and add one more property to our request: <code>body</code> with value <code>team@builderbook.org</code>. Make sure that you selected the <code>raw &gt; J</code>SON data format:</p>
<p>Make sure that your app is running and then click the <code>Send</code> button.</p>
<p>Look at the response on Postman and the output of your terminal:</p>
<ol>
<li>Postman will display <code>Loading...</code> but never finish</li>
<li>Terminal outputs an error: <code>TypeError: Cannot read property 'email' of undefined</code></li>
</ol>
<p>Apparently, the <code>email</code> variable is undefined. To read the <code>email</code> property from <code>req.body</code>, you need a utility that decodes the <code>body</code> object of a request from Unicode to JSON format. This utility is called <code>bodyParser</code>, <a href="https://github.com/expressjs/body-parser#bodyparserjsonoptions" rel="noopener">read more about it here</a>.</p>
<p>Install <code>bodyParser</code>:</p><pre><code>yarn add body-parser</code></pre>
<p>Import it to <code>server/app.js</code> with:</p><pre><code>import bodyParser from 'body-parser';</code></pre>
<p>Mount JSON <code>bodyParser</code> on the server. Add the following line right after <code>const server = express();</code> and <em>before</em> your Express route:</p><pre><code>server.use(bodyParser.json());</code></pre>
<p>An alternative to using the external <code>bodyParser</code> package is to use internal Express middleware <a href="https://expressjs.com/en/4x/api.html#express.json" rel="noopener">express.json()</a>. To do so, remove the import code for <code>bodyParser</code> and replace the above line of code with:</p><pre><code>server.use(express.json());</code></pre>
<p>We are ready to test. Make sure your app is running and click the <code>Send</code> button on Postman.</p>
<p>Take a look at the response on Postman and your terminal:</p>
<ol>
<li>Postman successfully outputs: <code>"subscribed": 1</code></li>
<li>Terminal has no error this time, instead it prints: <code>team@builderbook.org</code></li>
</ol>
<p>Great, now the request’s <code>body</code> is decoded and available inside the Express route's function as <code>req.body</code>.</p>
<p>You successfully added the first internal API to this app! Data exchange between client and server works as expected.</p>
<p>Inside the Express route that we wrote earlier, we want to call and wait for a <code>subscribe</code> method that sends a POST request from our server to Mailchimp's. In the next and final section of this tutorial, we will discuss and write the <code>subscribe</code> method.</p>
<h3 id="method-subscribe-">Method subscribe()</h3>
<p>We wrote code for proper data exchange between our server and a user’s browser. However, to add a user’s email address to a Mailchimp list, we need to send a <em>server to server</em> POST request. POST request from <em>our server</em> to <em>Mailchimp’s server</em>.</p>
<p>To send a server to server request, we will use the <code>request</code> package. Install it:</p><pre><code>yarn add request</code></pre>
<p>As with any request, we need to figure out which API endpoint and what request properties to include (<code>headers</code>, <code>body</code> and so on):</p>
<ul>
<li>Create a <code>server/mailchimp.js</code> file.</li>
<li>Import <code>request</code>.</li>
<li>Define <code>request.post()</code> (POST request) with these properties: <code>uri</code>, <code>headers</code>, <code>json</code>, <code>body</code>, and callback.</li>
</ul>
<p><code>server/mailchimp.js</code> :</p><pre><code>import request from 'request';</code></pre><pre><code>export async function subscribe({ email }) {  const data = {    email_address: email,    status: 'subscribed',  };</code></pre><pre><code>await new Promise((resolve, reject) =&gt; {    request.post(      {        uri: // to be discussed        headers: {          Accept: 'application/json',          Authorization: // to be discussed,        },        json: true,        body: data,      },      (err, response, body) =&gt; {        if (err) {          reject(err);        } else {          resolve(body);        }      },    );  });}</code></pre>
<p>All properties are self-explanatory, but we should discuss <code>uri</code> (or API endpoint) and <code>Authorization</code> header:</p>
<p>1. <code>uri</code>. Earlier in this chapter, we picked <code>http://localhost:8000/api/v1/public/subscribe</code> as our API endpoint. We could've picked any route for our internal API. However, Mailchimp’s API is external. Thus we should check the official documentation to find the API endpoint that adds an email address to a list. Read more about the <a href="http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/" rel="noopener">API to add members to a list</a>. The API endpoint is:</p><pre><code>https://usX.api.mailchimp.com/3.0/lists/{LIST_ID}/members</code></pre>
<p>Region <code>usX</code> is a subdomain. Follow these steps to find the subdomain for an API endpoint:</p>
<ul>
<li>sign up or log in to Mailchimp</li>
<li>go to <code>Account &gt; Extras &gt; API keys &gt; Your</code> API keys</li>
<li>your API key may look like <code>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17</code></li>
</ul>
<p>That means the region is <code>us17</code> and your app will send requests to the Mailchimp subdomain:</p><pre><code>https://us17.api.mailchimp.com/3.0/lists/{LIST_ID}/members</code></pre>
<p>Variable <code>LIST_ID</code> is the List ID of a particular list in your Mailchimp account. To find <code>List ID</code>, follow these steps:</p>
<ul>
<li>On your Mailchimp dashboard, go to <code>Lists &gt; click the list name &gt; Settings &gt; List name and</code> defaults</li>
<li>Find the section <code>List ID</code></li>
<li>Get the <code>xxxxxxxxxx</code> value from this section, it's your <code>LIST_ID</code></li>
</ul>
<p>2. <code>Authorization</code> header. We need to send our <code>API_KEY</code> inside <code>Authorization</code>header to Mailchimp's server. This tells Mailchimp's server that our app is authorized to send a request. Read more about <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization" rel="noopener">Authorization header here</a> (<code>headers.Authorization</code>). Syntax for <code>Authorization</code> header:</p><pre><code>Authorization:</code></pre>
<ul>
<li>In our case:</li>
</ul><pre><code>Authorization: Basic apikey:API_KEY</code></pre>
<p>The <code>API_KEY</code> must be base64 encoded. Follow this <a href="https://stackoverflow.com/questions/14573001/nodejs-how-to-decode-base64-encoded-string-back-to-binary" rel="noopener">example</a>.</p>
<p>After encoding:</p><pre><code>Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString(‘base64’)}`</code></pre>
<p>To find <code>API_KEY</code>:</p>
<ul>
<li>On your Mailchimp dashboard, go to <code>Account &gt; Extras &gt; API keys &gt; Your</code> API keys</li>
<li>Your API key may look like <code>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17</code></li>
</ul>
<p>Where are we going to store <code>listId</code> and <code>API_KEY</code> values? You can store all environmental variable in a <code>.env</code> file and manage them with the <a href="https://github.com/motdotla/dotenv" rel="noopener">dotenv</a> package. However, to stay focused in this tutorial, we add values directly to our <code>server/mailchimp.js</code> file:</p><pre><code>const listId = 'xxxxxxxxxx';const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17';</code></pre>
<p>Plug in the above code snippets:</p><pre><code>import request from 'request';</code></pre><pre><code>export async function subscribe({ email }) {  const data = {    email_address: email,    status: 'subscribed',  };</code></pre><pre><code>const listId = 'xxxxxxxxxx';  const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17';</code></pre><pre><code>await new Promise((resolve, reject) =&gt; {    request.post(      {        uri: `https://us17.api.mailchimp.com/3.0/lists/${listId}/members/`,        headers: {          Accept: 'application/json',          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,        },        json: true,        body: data,      },      (err, response, body) =&gt; {        if (err) {          reject(err);        } else {          resolve(body);        }      },    );  });}</code></pre>
<p>Remember to add real values for <code>listId</code> and <code>API_KEY</code>.</p>
<h3 id="testing">Testing</h3>
<p>It’s time to test out the entire MailChimp subscription flow.</p>
<p>We exported our <code>subscribe</code> method from <code>server/mailchimp.js</code>, but we haven't imported/added this method to the Express route at <code>server/app.js</code>. To do so:</p>
<ul>
<li>Import to <code>server/app.js</code> with:</li>
</ul><pre><code>import { subscribe } from ‘./mailchimp’;</code></pre>
<ul>
<li>Add an <code>async/await</code> construct to the Express route, so we call <em>and wait</em> for the <code>subscribe</code> method. Modify the following snippet of code like this:</li>
</ul><pre><code>server.post('/api/v1/public/subscribe', async (req, res) =&gt; {  const { email } = req.body;  if (!email) {    res.json({ error: 'Email is required' });    return;  }</code></pre><pre><code>  try {    await subscribe({ email });    res.json({ subscribed: 1 });    console.log(email);  } catch (err) {    res.json({ error: err.message || err.toString() });  }});</code></pre>
<p>We were able to use <code>await</code> for <code>subscribe</code> because this method returns a Promise. Recall the definition of <code>subscribe</code> — it has a line with <code>new Promise()</code>.</p>
<p>Let’s add a <code>console.log</code> statement to the <code>onSubmit</code> function from <code>pages/subscribe.js</code>. Open your <code>pages/subscribe.js</code> file and add <code>console.log</code> like this:</p><pre><code>try {  await subscribeToNewsletter({ email });</code></pre><pre><code>if (this.emailInput) {    this.emailInput.value = '';  }    NProgress.done();  console.log('email was successfully added to Mailchimp list');} catch (err) {  console.log(err); //eslint-disable-line  NProgress.done();}</code></pre>
<p>At this point, we can skip testing with Postman. Instead, let’s start our app, fill out the form, submit the form, and check if the email was added to the Mailchimp list. Also, we will see the output of our browser console.</p>
<p>Start your app with <code>yarn dev</code>. Go to <code>http://localhost:8000/subscribe</code>. Take a look at the empty list on your Mailchimp dashboard:</p>
<p>Fill out the form and click <code>Subscribe</code>. Refresh the page with the Mailchimp list:</p>
<p>And the browser console prints:</p>
<p>In case you are not running the app locally, you can test on the app I deployed for this tutorial: <a href="https://mailchimp.builderbook.org/subscribe" rel="noopener">https://mailchimp.builderbook.org/subscribe</a>. You’ll get a test email to confirm that MailChimp API worked.</p>
<p>Boom! You just learned two powerful skills: building internal and external APIs for your JavaScript web application.</p>
<p>When you complete this tutorial, your code should match code in the <a href="https://github.com/builderbook/builderbook/tree/master/tutorials/1-end" rel="noopener">1-end</a> folder. This folder is located in the <code>tutorials</code> directory of our <a href="https://github.com/builderbook/builderbook" rel="noopener">builderbook repo</a>.</p>
<p>If you found this article useful, consider giving a star to our <a href="https://github.com/builderbook/builderbook" rel="noopener">Github repo</a> and checking out our <a href="https://builderbook.org/book" rel="noopener">book</a> where we cover this and many other topics in detail.</p>
<p>If you are building a software product, check out our <a href="https://github.com/async-labs/saas" rel="noopener">SaaS boilerplate</a> and <a href="https://async-await.com/" rel="noopener">Async</a> (team communication philosophy and tool for small teams of software engineers).</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
