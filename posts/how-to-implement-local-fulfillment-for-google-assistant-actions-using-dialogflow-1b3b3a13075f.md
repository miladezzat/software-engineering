---
card: "https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png"
tags: [Nodejs]
description: "NB: this blog covers Actions on Google node.js deployments on"
author: "Milad E. Fahmy"
title: "How to implement local fulfillment for Google Assistant actions using Dialogflow"
created: "2021-08-15T23:45:14+02:00"
modified: "2021-08-15T23:45:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-google-assistant tag-programming tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement local fulfillment for Google Assistant actions using Dialogflow</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*7jmZNu-Wbc7Z4Ulo.png" alt="How to implement local fulfillment for Google Assistant actions using Dialogflow">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
dialogflow,
BasicCard
} = require("actions-on-google");
// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });
// Handlers go here..
app.intent("Default Welcome Intent", conv =&gt; {
// handler for this intent
});
app.intent("Say_Something_Silly", conv =&gt; {
// handler for this intent
});
module.exports = app;</code></pre><p>This is the app that ‘handles’ the intents. The above code is just scaffolding. Export the app, and import it in <code>functions/index.js</code>.</p><p><code>index.js</code> is the entry point in our <code>functions</code> folder, which contains the cloud functions we push up to Firebase Cloud Functions. In this file we create the Express App, and import the DialogflowApp object, and then pass it in to the Express route that will receive the HTTP POST requests from Dialogflow. <strong><strong>Note</strong></strong> that we need the body-parser npm package as the HTTP requests are JSON.</p><pre><code class="language-js">"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const functions = require("firebase-functions");
// clients
const dialogFlowApp = require("./DialogflowApp");
const expressApp = express().use(bodyParser.json());
// EXPRESS APP fulfillment route (POST). The entire dialogFlowApp object (incl its handlers) is the callback handler for this route.
expressApp.post("/", dialogFlowApp);
//  EXPRESS APP test route (GET)
expressApp.get("/", (req, res) =&gt; {
res.send("CONFIRMED RECEIPT OF GET.");
});
/*
*   LOCAL NGROK SERVER LOGIC. ENSURE that you "export IS_LOCAL_DEV=true" in terminal prior to start
*/
if (process.env.IS_LOCAL_DEV) {
const PORT = 8000;
expressApp.listen(PORT, () =&gt;
console.log(`*** SERVER RUNNING LOCALLY ON PORT ${PORT} ***`)
);
} else {
console.log("*** NOT LOCALLY SERVED - OR - LOCAL ENV VAR NOT SET  ****");
}
//EXPORT either of the following two endpoints:  one express app, one dialogflow app
exports.fulfillmentExpressServer = functions.https.onRequest(expressApp);
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(dialogFlowApp);</code></pre><p>The key parts of this code are that we create a POST route that takes, as the handler-callback, our DialogflowApp object. I created a GET route just to make quick browser GET requests to test the endpoint is working. But Dialogflow only uses the POST route.</p><p><strong><strong>Note</strong></strong> that I’ve made two exports here. One is the Express app and the other is the dialogflow App itself. This creates to Firebase functions with two endpoints which are identified by the property attached to the <code>exports</code>object. One endpoint will be &lt;……/fulfillmentExpressServer&gt; and the other will be &lt;……/dialogflowFirebaseFulfillment&gt;.</p><p>I can use either of these HTTP endpoints for fulfillment, once I’m done developing locally and have pushed the final code up to Firebase Cloud Functions.</p><h4 id="ngrok-for-the-local-development-server-tunneling"><strong>NGROK for the local development server tunneling</strong></h4><p>There is some funny looking code in there on line 26. On my Mac terminal, I use <code>export IS_LOCAL_DEV=true</code> before I start the server locally. That codeblock on line 26 basically starts the server listening locally, which is <strong><strong>not</strong></strong>needed when we push the code up to Cloud Functions — it is for the local server only.</p><pre><code class="language-js">"dependencies": {
"actions-on-google": "^2.0.0",
"body-parser": "^1.18.3",
"express": "^4.16.4",
"firebase-functions": "^2.2.0"
},
"devDependencies": {
"ngrok": "^3.1.1"
},
"scripts": {
"lint": "eslint .",
"serve": "firebase serve --only functions",
"shell": "firebase experimental:functions:shell",
"start": "npm run shell",
"deploy": "firebase deploy --only functions",
"logs": "firebase functions:log",
"tunnel": "ngrok http 8000",
"dev": "nodemon index.js"
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
