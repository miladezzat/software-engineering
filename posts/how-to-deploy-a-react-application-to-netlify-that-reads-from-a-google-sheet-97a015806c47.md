---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg"
tags: [Technology]
description: "In this tutorial, we’re going to cover how to connect to a sp"
author: "Milad E. Fahmy"
title: "How to deploy a React application to Netlify that reads from a Google Sheet"
created: "2021-08-16T11:44:05+02:00"
modified: "2021-08-16T11:44:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-startup tag-education tag-programming tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a React application to Netlify that reads from a Google Sheet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cad7b740569d1a4ca9fb9.jpg" alt="How to deploy a React application to Netlify that reads from a Google Sheet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cd doug-score
yarn start</code></pre><p>(Or <code>npm start</code>, whatever floats your boat but I'll be using yarn.)</p><p>Open up the folder in your editor of choice (VS Code for me) and head over to <code>App.js</code>. We’re going to create a separate component called <code>CarList</code> , putting it inside a <code>components</code> folder and adding it to <code>App</code> .</p><pre><code class="language-js">import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CarList from "./components/CarList";
class App extends Component {
render() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;h1 className="App-title"&gt;Welcome to React&lt;/h1&gt;
&lt;/header&gt;
&lt;CarList /&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre><p>For now, this is what CarList component will look like:</p><pre><code class="language-js">import React, { Component } from 'react';
class CarList extends Component {
render() {
return (
&lt;div&gt;
This will be the car list
&lt;/div&gt;
);
}
apiKey: "YOUR_API_KEY",
discoveryDocs:
["https://sheets.googleapis.com/$discovery/rest?version=v4"],
spreadsheetId: "1KTArYwDWrn52fnc7B12KvjRb6nmcEaU6gXYehWfsZSo"
};</code></pre><p>Now, we’ll need the Google API library, so we’ll use our <code>index.html</code> file inside the <code>public</code> library after our <code>&lt;div id="root"&gt;</code>&lt;/div&gt;</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;!-- Stuff --&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;noscript&gt;
You need to enable JavaScript to run this app.
&lt;/noscript&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script src="https://apis.google.com/js/api.js"&gt;&lt;/script&gt;
&lt;!-- Stuff --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>This will give us access to <code>window.gapi</code> which we’ll use to connect to the Sheets API. For more information on it, head over to <a href="https://developers.google.com/sheets/api/quickstart/js" rel="noopener">Google’s Docs</a>.</p><h3 id="the-data">The Data</h3><p>Now that we have access to the API, let’s establish the connection to it. The best place to do that would be inside the <code>componentDidMount</code> lifecycle of the <code>CarList</code> component we created earlier. Let’s head over there.</p><pre><code class="language-js">componentDidMount() {
// 1. Load the JavaScript client library.
window.gapi.load("client", this.initClient);
}</code></pre><p><code>window.gapi.load</code> accepts a callback so our <code>initClient</code> function looks like this:</p><pre><code class="language-js">initClient = () =&gt; {
// 2. Initialize the JavaScript client library.
window.gapi.client
.init({
apiKey: config.apiKey,
// Your API key will be automatically added to the Discovery Document URLs.
discoveryDocs: config.discoveryDocs
})
.then(() =&gt; {
// 3. Initialize and make the API request.
load(this.onLoad);
});
};</code></pre><p>A few things are introduced here. <code>config</code> is coming from the <code>config.js</code> file we created earlier, so don’t forget to do <code>import config from “../config”;</code> at the top of the <code>CarList.js</code> file.</p><p><code>load</code> is a function that we’ll be creating now. It will be in charge of connecting to the right spreadsheet, formatting the data correctly, and returning it to the component within the <code>this.onLoad</code> callback (or returning an error if we messed something up).</p><p>I wanted to separate that logic from the component to keep the files small and fairly readable. Let’s create a new folder called <code>helpers</code> inside <code>src</code> and put a <code>spreadsheet.js</code> file in there.</p><pre><code class="language-js">import config from "../config";
/**
* Load the cars from the spreadsheet
* Get the right values from it and assign.
*/
export function load(callback) {
window.gapi.client.load("sheets", "v4", () =&gt; {
window.gapi.client.sheets.spreadsheets.values
.get({
spreadsheetId: config.spreadsheetId,
range: "Sheet1!A4:T"
})
.then(
response =&gt; {
const data = response.result.values;
const cars = data.map(car =&gt; ({
year: car[0],
make: car[1],
model: car[2]
})) || [];
callback({
cars
});
},
response =&gt; {
callback(false, response.result.error);
}
);
});
}</code></pre><p>So here we’re invoking the sheets API and getting values from the spreadsheet by passing the <code>spreadsheetId</code> and the <code>range</code> . The promise returns two responses: one if there is data and one if there is an error. The response values are an array of arrays where each one is a row within the spreadsheet.</p><h3 id="the-display">The Display</h3><p>Now that we have data back inside the <code>CarList</code> component, we can start setting up the display for it. Inside the <code>initClient</code> function, we had the <code>load(this.onLoad)</code> function, so let’s pick up there.</p><pre><code class="language-js">onLoad = (data, error) =&gt; {
if (data) {
const cars = data.cars;
this.setState({ cars });
} else {
this.setState({ error });
}
};</code></pre><p>If the <code>load</code> function within <code>spreadsheet.js</code> returns data, we set the <code>cars</code> state to that data. Otherwise we set an <code>error</code> state to show to our users that something went wrong.</p><h4 id="default-state">Default state</h4><p>Since data won’t be available instantly, we need to set up a default state for our component.</p><pre><code class="language-js">state = {
cars: [],
error: null
}</code></pre><h4 id="render">Render</h4><p>Now inside the <code>render</code> function we can display the state:</p><pre><code class="language-js">render() {
const { cars, error } = this.state;
if (error) {
return &lt;div&gt;{this.state.error}&lt;/div&gt;;
}
return (
&lt;ul&gt;
{cars.map((car, i) =&gt; (
&lt;li key={i}&gt;
{car.year} {car.make} {car.model}
&lt;/li&gt;
))}
&lt;/ul&gt;
);
netlify deploy</code></pre><p>When it asks, make sure you put in <code>build</code> as the <code>Path to deploy? (current dir)</code> .</p><p>Netlify is going to do its thing and show you the final URL (mine is <a href="https://laughing-yonath-118f58.netlify.com/" rel="noopener">https://laughing-yonath-118f58.netlify.com</a> ?)</p><p>If you try to access the one you created, you’ll see an error in your console because your URL wasn’t added to the Google API console. Go ahead and add the URL you need, and after that everything should be working as expected.</p><h3 id="the-end">The End</h3><p>I hope all of this made sense. You can now work your magic on adding features to that list such as sorting, filtering, pagination, search, comparison, and so on. And when Doug adds another car to that list, the app will be automatically updated with the new information.</p><p>If this tutorial made sense, give it a ?? and share it with a friend. If you want to tell me it sucked or you have any more questions, comment below or yell at me<a href="https://twitter.com/416serg" rel="noopener"> on Twitter, </a>I really don’t mind. If Doug is reading this, hey Doug ??!</p>
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
