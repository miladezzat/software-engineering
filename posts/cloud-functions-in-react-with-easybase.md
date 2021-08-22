---
card: "https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg"
tags: [React]
description: Cloud functions are stateless, single-purpose code snippets t
author: "Milad E. Fahmy"
title: "How to Deploy Dynamic Cloud Functions in React and React Native with Easybase"
created: "2021-08-15T19:26:39+02:00"
modified: "2021-08-15T19:26:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-native tag-javascript tag-cloud-computing ">
<header class="post-full-header">
<h1 class="post-full-title">How to Deploy Dynamic Cloud Functions in React and React Native with Easybase</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/606b5c58d5756f080ba94a3a.jpg" alt="How to Deploy Dynamic Cloud Functions in React and React Native with Easybase">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Cloud functions are stateless, single-purpose code snippets that can be invoked programmatically or through other event-driven processes. </p>
<p>These code snippets are not built into your application, as a traditional function would be. Rather, they are <strong>stored in a cloud container</strong> that is maintained by a provider. They can be edited live and hide business logic from the locally available front-end code.</p>
<p>React and React Native can greatly benefit from this method of application development due to their declarative programming style. Events in the UI can predictably call your function in a React-friendly<strong> </strong>manner. Let's try it!</p>
<h2 id="setup"><strong>Setup</strong></h2>
<p>We'll start by creating a brand new React or React Native application. The easiest way to create one of these projects is to use <code>npx</code> which comes with a standard Node.js installation. If you don't have these modules installed, you can <a href="https://nodejs.org/en/">install them here</a>. </p>
<p>From there we can create a fresh project like so:</p>
<p>React: <code>npx create-react-app my-cloud-app</code></p>
<p>React Native: <code>npx create-react-native-app</code></p>
<p>After that finishes installing, move into your new project directory and run <code>npm run start</code>. Here's what my starting React project looks like:</p>
<h2 id="example-react-project"><strong>Example React Project</strong></h2>
<p>The example React project I will create is a <strong>simple cryptocurrency price fetcher</strong>. </p>
<p>The UI will feature a text box and button where users can submit a cryptocurrency's symbol like 'BTC' or 'ETH'. From there, the front end will call a serverless function, hosted by Easybase. The cloud function will call an API and return the specified price in USD.</p>
<p>First, let's add these interface elements to our React elements. Open up <code>src/App.js</code> and clear out the component under the root <code>header</code> tag. To start, we'll need four elements:</p>
<ol>
<li>A text box</li>
<li>A text element to tell the user to input a cryptocurrency symbol</li>
<li>A button to invoke the cloud function based on the text box input</li>
<li>Finally, we need another text element to display the outputted result</li>
</ol>
<p>Your <code>App</code> function may now look like the following:</p><pre><code class="language-jsx">function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;Enter Cryptocurrency symbol:&lt;/p&gt;
&lt;input placeholder="BTC, ETH, etc." type="text" /&gt;
&lt;button&gt;Go&lt;/button&gt;
&lt;p&gt;Result:&lt;/p&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Save this file and your new app will look something like this:</p>
<p><strong>Great!</strong> Now we need to make our application stateful, such that we save user input and have a callback for our button. </p>
<p>We will use React's <code>useState</code> hook to store and display user input. Also, create an asynchronous function called <code>buttonCallback</code> that gets triggered when a user clicks the 'Go' button. For now, this function will just print the text box input.</p>
<p>Here is my implementation of <code>src/App.js</code> for reference:</p><pre><code class="language-jsx">import { useState } from 'react';
import './App.css';
function App() {
const [inputVal, setInputVal] = useState("");
async function buttonCallback() {
console.log(inputVal);
}
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;Enter Cryptocurrency symbol:&lt;/p&gt;
&lt;input placeholder="BTC, ETH, etc." type="text" value={inputVal} onChange={e =&gt; setInputVal(e.target.value)} /&gt;
&lt;button onClick={buttonCallback}&gt;Go&lt;/button&gt;
&lt;p&gt;Result:&lt;/p&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<h2 id="how-to-deploy-your-cloud-function"><strong>How to Deploy Your Cloud Function</strong></h2>
<p>So far, <strong>everything works as expected</strong>. Time to deploy a code snippet in the cloud. <a href="https://easybase.io/">Make a free account at easybase.io</a> and click the <strong>'+'</strong> button on the bottom-left of the view.</p>
<p>Select the <em>Hello World</em> template and proceed through the stepper. This will bring up a function that simply returns whatever is passed in for the value of <em>message</em> in the request body.</p>
<p>The <a href="https://microsoft.github.io/monaco-editor/">Monaco code editor</a> is built right into the website, so we can code live in our web browser! </p>
<p>We are going to want a package from npm that helps us make requests to external APIs. Open up <code>package.json</code> and add the module <em><a href="https://www.npmjs.com/package/cross-fetch">cross-fetch</a></em> with the appropriate version (when we save our function, this module will automatically be installed):</p>
<p>Now reopen <code>handler.js</code> and bring in the newly installed module at the top of the file with <code>var fetch = require('cross-fetch');</code>.</p>
<p>When we make our request from the front end, we will pass an object with the key <code>cryptoSymbol</code> representing the input value of the text box. So, let's create a variable to save that. Remember, <code>event.body</code> will reference whatever is passed into the function via the request body.</p><pre><code class="language-js">const cryptoSymbol = event.body.cryptoSymbol;</code></pre>
<p>We are going to use the <a href="https://www.cryptonator.com/api/">Cryptonator API</a> to retrieve current prices. The route for getting prices is <code>https://api.cryptonator.com/api/ticker/<strong><em>pair_name</em></strong></code> where <code><strong><em>pair_name</em></strong></code> is the given symbol (three letters) followed by '-usd'. </p>
<p>The reason we follow the pair name with '-usd' is because we want to get the price of the given cryptocurrency in dollars, but you could use another symbol for different asset price conversion. Let's make a variable for this URL:</p><pre><code class="language-js">const nexchangeUrl = `https://api.cryptonator.com/api/ticker/${cryptoSymbol}-usd`;</code></pre>
<p>Here's the <strong>full template</strong> for our new function:</p><pre><code class="language-js">var fetch = require('cross-fetch');
module.exports = async (event, context) =&gt; {
const cryptoSymbol = event.body.cryptoSymbol;
const nexchangeUrl = `https://api.cryptonator.com/api/ticker/${cryptoSymbol}-usd`;
const res = await fetch(nexchangeUrl);
const resJson = await res.json();
if (resJson.success) {
return context.succeed(resJson.ticker.price);
} else {
return context.fail("Symbol does not exist");
}
}</code></pre>
<p>Note: <code>context.succeed</code> and <code>context.fail</code> both send whatever is passed to the requesting client.</p>
<p>Save the function:</p>
<p>We can expand the <strong>Deploy </strong>row and test the function. Add <code>cryptoSymbol</code> to the input body with the value of some crypto symbol (BTC, ETH, etc).</p>
<p><strong>Congrats, your cloud function is working!</strong> The first time you call your function it may take a few seconds, as it is performing a <em>cold start</em>. Cold starts occur when your function has not been invoked recently, so it gets offloaded from the provider's back end. It will be responsive when being actively called.</p>
<p>Now let's head over to our React/React Native app. Head to your project directory and install the <a href="https://github.com/easybase/easybase-react"><code>easybase-react</code></a> library.</p><pre><code class="language-bash">cd my-cloud-app
npm install easybase-react</code></pre>
<p>Now in our <code>src/App.js</code> file, we can import a function called <code><a href="https://easybase.io/docs/easybase-react/modules/_callfunction_.html#callfunction">callFunction</a></code> from this newly installed package with <code>import { callFunction } from 'easybase-react</code>.</p>
<p>This function takes two parameters:</p>
<ol>
<li>The function route (available under <strong>Deploy </strong>--&gt; Deploy)</li>
<li>Request body object, accessible in our cloud function's <code>event.body</code> (Optional)</li>
</ol>
<p>Here's where you can find your function route:</p>
<p>In our <code>buttonCallback</code> function, use the imported <code>callFunction</code> to invoke our cloud function as detailed. <strong>Note that <code>callFunction</code> is asynchronous –</strong> both programming methods will work:</p><pre><code class="language-js">const result = await callFunction('YOUR-CUSTOM-ROUTE', { cryptoSymbol: "BTC" });
console.log(result);
// OR
callFunction('YOUR-CUSTOM-ROUTE', { cryptoSymbol: "BTC" }).then(result =&gt; console.log(result));</code></pre>
<p>In our application, we want to display the result in the last <code>&lt;p&gt;</code> tag. We will do this with another <code>useState</code> instance, such that the tag will now look like <code>&lt;p&gt;Result: {resultVal}&lt;/p&gt;</code>. The <code>resultVal</code> variable will be set within our <code>buttonCallback</code> function as follows:</p><pre><code class="language-js">  async function buttonCallback() {
const result = await callFunction('YOUR-CUSTOM-ROUTE', { cryptoSymbol: inputVal });
setResultVal(`${inputVal} currently costs $${result}`);
}</code></pre>
<p>Input a crypto symbol in the text box and click 'Go' <em>—</em><strong><em> </em>it works! </strong>For reference, here's my entire implementation (feel free to take code this and give it some style for a unique look and feel):</p><pre><code class="language-jsx">import { useState } from 'react';
import './App.css';
import { callFunction } from 'easybase-react';
function App() {
const [inputVal, setInputVal] = useState("");
const [resultVal, setResultVal] = useState("");
async function buttonCallback() {
const result = await callFunction('YOUR-CUSTOM-ROUTE', { cryptoSymbol: inputVal });
setResultVal(`${inputVal} currently costs $${result}`);
}
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;Enter Cryptocurrency symbol:&lt;/p&gt;
&lt;input placeholder="BTC, ETH, etc." type="text" value={inputVal} onChange={e =&gt; setInputVal(e.target.value)} /&gt;
&lt;button onClick={buttonCallback}&gt;Go&lt;/button&gt;
&lt;p&gt;Result: {resultVal}&lt;/p&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;
</code></pre>
<h2 id="conclusion"><strong>Conclusion</strong></h2>
<p>I hope this brief walkthrough was helpful to those interested in cloud computing and serverless application development! <a href="https://easybase.io/best-javascript-framework-library-quiz/">There are many different frameworks/libraries available for developing UIs and applications</a>, but React and React Native have proven to be great, robust options with thriving communities.</p>
<p>For those interested, here's some <a href="https://easybase.io/react/">comprehensive information on using Easybase with React/React Native</a>. The <a href="https://github.com/easybase/easybase-react"><code>easybase-react</code> package</a> can handle other application modules such as user authentication.</p>
<p>Your serverless function will stay idle in the cloud when there's no traffic, <strong>avoiding any charges.</strong> If your application experiences a surge in usage, the cloud provider will be there to <em>elastically</em> deliver the required performance. </p>
<p><a href="https://easybase.io/about/2021/01/30/What-Is-a-Serverless-Application/">This infrastructure, known as serverless computing, puts the burden of management, scaling, and readiness on the host</a>. The best part is that there is no maintenance required on your end. Also, check out my other walkthrough on <a href="/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/">freeCodeCamp about serverless databases for React &amp; React Native</a>. </p>
<p><em>Thanks for reading and happy coding!</em></p>
<p></p>
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
