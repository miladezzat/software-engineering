---
card: "https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg"
tags: [JavaScript]
description: "Let’s suppose there is a service that has the following featu"
author: "Milad E. Fahmy"
title: "An Express service for parallel SOAP invocation in under 25 lines of code"
created: "2021-08-16T11:39:09+02:00"
modified: "2021-08-16T11:39:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-express tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An Express service for parallel SOAP invocation in under 25 lines of code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gnvtnZJe9Ejl8x0oEE_Ufw.jpeg" alt="An Express service for parallel SOAP invocation in under 25 lines of code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="overview">Overview</h3><p>Let’s suppose there is a service that has the following features:</p><ol><li>It exposes a REST endpoint receiving a list of requests.</li><li>It in parallel invokes a SOAP service, once per element in the requests list.</li><li>It returns the converted result from XML to JSON.</li></ol><p>That service’s source code could look something like this using Node.js, Express, and the <a href="https://github.com/airbnb/javascript#airbnb-javascript-style-guide-" rel="noopener">Airbnb JavaScript Style Guide</a>:</p><pre><code class="language-js">'use strict';
const { soap } = require('strong-soap');
const expressApp = require('express')();
const bodyParser = require('body-parser');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const clientPromise = new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; err ? reject(err) : resolve(client))
));
expressApp.use(bodyParser.json())
.post('/parallel-soap-invoke', (req, res) =&gt; (clientPromise.then(client =&gt; ({ client, requests: req.body }))
.then(invokeOperations)
.then(results =&gt; res.status(200).send(results))
.catch(({ message: error }) =&gt; res.status(500).send({ error }))
))
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));
const invokeOperations = ({ client, requests }) =&gt; (Promise.all(requests.map(request =&gt; (
new Promise((resolve, reject) =&gt; client.Add(request, (err, result) =&gt; (
err ? reject(err) : resolve(result))
))
))));</code></pre><p>Sample request:</p><pre><code>POST /parallel-soap-invoke
[
{
"intA": 1,
"intB": 2
},
{
"intA": 3,
"intB": 4
},
{
"intA": 5,
"intB": 6
}
]</code></pre><p>Sample response:</p><pre><code>HTTP/1.1 200
[
{
"AddResult": 3
},
{
"AddResult": 7
},
{
"AddResult": 11
}
]</code></pre><p>Tests show that a single direct request to the SOAP service using SOAPUI takes ~430 ms (from where I’m located, in Chile). Sending three requests (as shown above) takes ~400 ms for calls to the Express service (other than the first one, which gets the WSDL and builds the client).</p><p>Why do more requests take less time? Mostly because the XML is not heavily validated as it is in regular SOAP, so if this soft validation doesn’t match your expectations, you should consider additional features or solutions.</p><p>Wondering how would it look using <code>async/await</code>? Here you go (results are the same):</p><pre><code class="language-js">'use strict';
const { soap } = require('strong-soap');
const expressApp = require('express')();
const bodyParser = require('body-parser');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const clientPromise = new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; err ? reject(err) : resolve(client))
));
expressApp.use(bodyParser.json())
.post('/parallel-soap-invoke', async (req, res) =&gt; {
try {
res.status(200).send(await invokeOperations(await clientPromise, req.body));
} catch ({message: error}) {
res.status(500).send({ error });
}
})
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));
const invokeOperations = (client, requests) =&gt; (Promise.all(requests.map(request =&gt; (
new Promise((resolve, reject) =&gt; client.Add(request, (err, result) =&gt; (
err ? reject(err) : resolve(result))
))
// Express framework.
const express = require('express');
// Creates an Express application.
const app = express();
/**
* Creates a GET (which is defined by the method invoked on 'app') endpoint,
* having 'parallel-soap-invoke' as entry point.
* Each time a GET request arrives at '/parallel-soap-invoke', the function passed
* as the second parameter from app.get will be invoked.
* The signature is fixed: the request and response objects.
*/
app.get('/parallel-soap-invoke', (_, res) =&gt; {
// HTTP status of the response is set first and then the result to be sent.
res.status(200).send('Hello!');
});
// Starts 'app' and sends a message when it's ready.
app.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));</code></pre><p>Result:</p><pre><code>GET /parallel-soap-invoke
HTTP/1.1 200
Hello!</code></pre><p>Now we’ll need to handle an object sent through POST. Express <code>body-parser</code> allows easy access to the body of the request:</p><pre><code class="language-js">
'use strict';
const expressApp = require('express')(); // Compressing two lines into one.
const bodyParser = require('body-parser'); // Several parsers for HTTP requests.
expressApp.use(bodyParser.json()) // States that 'expressApp' will use JSON parser.
// Since each Express method returns the updated object, methods can be chained.
.post('/parallel-soap-invoke', (req, res) =&gt; {
/**
* As an example, the same request body will be sent as response with
* a different HTTP status code.
*/
res.status(202).send(req.body); // req.body will have the parsed object
})
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));</code></pre><pre><code>POST /parallel-soap-invoke
content-type: application/json
[
{
"intA": 1,
"intB": 2
},
{
"intA": 3,
"intB": 4
},
{
"intA": 5,
"intB": 6
}
]
HTTP/1.1 202
[
{
"intA": 1,
"intB": 2
},
{
"intA": 3,
"intB": 4
},
{
"intA": 5,
"intB": 6
}
]
</code></pre><p>So, long story short: setup the Express app, and as soon as you have the result, send it via <code>res</code> and voilà.</p><h3 id="2-the-soap-section">2. The SOAP section</h3><p>This will have some more steps than the previous section. The main idea is that, for making SOAP invocations in parallel, I’ll use <code>Promise.all</code>. In able to use <code>Promise.all</code>, the invocation to the SOAP services needs to be handled within a Promise, which is not the case for <code>strong-soap</code>. This section will show how to convert the regular callbacks from <code>strong-soap</code> into Promises and then putting a <code>Promise.all</code> on top of that.</p><p>The following code will use the most basic example from <code>strong-soap</code>’s <a href="https://github.com/strongloop/strong-soap#client" rel="noopener">documentation</a>. I’ll just simplify it a bit and use the same WSDL we’ve been seeing (I didn’t use the same WSDL stated in <code>strong-soap</code>’s documentation, since that WSDL is not working anymore):</p><pre><code class="language-js">'use strict';
// The SOAP client library.
var { soap } = require('strong-soap');
// WSDL we'll be using through the article.
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
// Hardcoded request
var requestArgs = {
"intA": 1,
"intB": 2,
};
// Creates the client which is returned in the callback.
soap.createClient(url, {}, (_, client) =&gt; (
// Callback delivers the result of the SOAP invokation.
client.Add(requestArgs, (_, result) =&gt; (
console.log(`Result: ${"\n" + JSON.stringify(result)}`)
))
));</code></pre><pre><code>$ node index.js
Result:
{"AddResult":3}</code></pre><p>I’ll convert this into Promises and I’ll go through all callbacks, one by one, for the sake of the example. That way the translation process will be crystal clear for you:</p><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var requestArgs = {
"intA": 1,
"intB": 2,
};
/**
* A function that will return a Promise which will return the SOAP client.
* The Promise receives as parameter a function having two functions as parameters:
* resolve &amp; reject.
* So, as soon as you got a result, call resolve with the result,
* or call reject with some error otherwise.
*/
const createClient = () =&gt; (new Promise((resolve, reject) =&gt; (
// Same call as before, but I'm naming the error parameter since I'll use it.
soap.createClient(url, {}, (err, client) =&gt; (
/**
* Did any error happen? Let's call reject and send the error.
* No? OK, let's call resolve sending the result.
*/
err ? reject(err) : resolve(client)
))))
);
/**
* The above function is invoked.
* The Promise could have been inlined here, but it's more understandable this way.
*/
createClient().then(
/**
* If at runtime resolve is invoked, the value sent through resolve
* will be passed as parameter for this function.
*/
client =&gt; (client.Add(requestArgs, (_, result) =&gt; (
console.log(`Result: ${"\n" + JSON.stringify(result)}`)
))),
// Same as above, but in this case reject was called at runtime.
err =&gt; console.log(err),
);</code></pre><p>Calling <code>node index.js</code>gets the same result as before. Next callback:</p><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var requestArgs = {
"intA": 1,
"intB": 2,
};
const createClient = () =&gt; (new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; (
err ? reject(err) : resolve(client)
))))
);
/**
* Same as before: do everything you need to do; once you have a result,
* resolve it, or reject some error otherwise.
* invokeOperation will replace the first function of .then from the former example,
* so the signatures must match.
*/
const invokeOperation = client =&gt; (new Promise((resolve, reject) =&gt; (
client.Add(requestArgs, (err, result) =&gt; (
err ? reject(err) : resolve(result)
))
)));
/**
* .then also returns a Promise, having as result the value resolved or rejected
* by the functions that were passed as parameters to it. In this case, the second .then
* will receive the value resolved/rejected by invokeOperation.
*/
createClient().then(
invokeOperation,
err =&gt; console.log(err),
).then(
result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`),
err =&gt; console.log(err),
);</code></pre><p><code>node index.js</code>? Still the same. Let’s wrap those Promises in a function, in order to prepare the code for calling it inside the Express endpoint. It also simplifies the error handling a bit:</p><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var requestArgs = {
"intA": 1,
"intB": 2,
};
const createClient = () =&gt; (new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; (
err ? reject(err) : resolve(client)
))))
);
const invokeOperation = client =&gt; (new Promise((resolve, reject) =&gt; (
client.Add(requestArgs, (err, result) =&gt; (
err ? reject(err) : resolve(result)
))
)));
const processRequest = () =&gt; createClient().then(invokeOperation);
/**
* .catch() will handle any reject not handled by a .then. In this case,
* it will handle any reject called by createClient or invokeOperation.
*/
processRequest().then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));</code></pre><p>I bet you can guess the result of <code>node index.js</code>.</p><p>What happens if several subsequent calls are made? We’ll find out with the following code:</p><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var requestArgs = {
"intA": 1,
"intB": 2,
};
const createClient = () =&gt; (new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; {
if (err) {
reject(err);
} else {
// A message is displayed each time a client is created.
console.log('A new client is being created.');
resolve(client);
}
})))
);
const invokeOperation = client =&gt; (new Promise((resolve, reject) =&gt; (
client.Add(requestArgs, (err, result) =&gt; (
err ? reject(err) : resolve(result)
))
)));
const processRequest = () =&gt; createClient().then(invokeOperation)
processRequest().then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));
processRequest().then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));
processRequest().then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));</code></pre><pre><code>$ node index.js
A new client is being created.
A new client is being created.
Result:
{"AddResult":3}
A new client is being created.
Result:
{"AddResult":3}
Result:
{"AddResult":3}</code></pre><p>Not good, as several clients are being created. Ideally, the client should be cached and reused. There are two main ways to achieve this:</p><ol><li>You can create a variable outside the Promise and cache the client as soon as you have it (just before resolving it). Let’s call this <code>cachedClient</code>. But, in that case, you’d have to manually deal with calls to <code>createClient()</code> made between the first time it is called and before the first client is resolved. You’d have to inspect if <code>cachedClient</code> is the expected value, or you’d have to check if the Promise is resolved or not, or you’d have to put some kind of event emitter to know when the <code>cachedClient</code> is ready. The first time I wrote code for this, I used this approach and I ended up living with the fact that every single call made before the first <code>createClient().resolve</code> overwrote <code>cachedClient</code>. If the problem is not that clear, let me know and I’ll write the code and the examples.</li><li>Promises have a very cool feature (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" rel="noopener">see MDN documentation, “Return value” section</a>): if you call <code>.then()</code> on a resolved/rejected Promise, it will return the very same value that was resolved/rejected, without processing again. In fact, very technically, it will be the very same object reference.</li></ol><p>The second approach is much simpler to implement, so the related code is the following:</p><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var requestArgs = {
"intA": 1,
"intB": 2,
};
// createClient function is removed.
const clientPromise = (new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; {
if (err) {
reject(err);
} else {
console.log('A new client is being created.');
resolve(client);
}
})))
);
const invokeOperation = client =&gt; (new Promise((resolve, reject) =&gt; (
client.Add(requestArgs, (err, result) =&gt; (
err ? reject(err) : resolve(result)
))
)));
// clientPromise is called instead getClient().
clientPromise.then(invokeOperation)
.then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));
clientPromise.then(invokeOperation)
.then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));
clientPromise.then(invokeOperation)
.then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));</code></pre><pre><code>$ node index.js
A new client is being created.
Result:
{"AddResult":3}
Result:
{"AddResult":3}
Result:
{"AddResult":3}</code></pre><p>Finally for this section, let’s make the code handle several parallel calls. This will be easy:</p><ol><li>For handling several parallel calls, we’ll need <code>Promise.all</code>.</li><li><code>Promise.all</code> has a single parameter: an array of Promises. So we’ll be converting the list of requests into a list of Promises. The code currently converts a single request into a single Promise (<code>invokeOperation</code>), so the code just needs a <code>.map</code> to achieve this.</li></ol><pre><code class="language-js">'use strict';
var { soap } = require('strong-soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
// Hardcoded list of requests.
var requestsArgs = [
{
"intA": 1,
"intB": 2,
},
{
"intA": 3,
"intB": 4,
},
{
"intA": 5,
"intB": 6,
},
];
const clientPromise = (new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; err ? reject(error) : resolve(client))
)));
// Promise.all on top of everything.
const invokeOperation = client =&gt; (Promise.all(
// For each request, a Promise is returned.
requestsArgs.map(requestArgs =&gt; new Promise((resolve, reject) =&gt; (
// Everything remains the same here.
client.Add(requestArgs, (err, result) =&gt; (
err ? reject(err) : resolve(result)
))
)))
));
clientPromise.then(invokeOperation)
.then(result =&gt; console.log(`Result: ${"\n" + JSON.stringify(result)}`))
.catch(({ message }) =&gt; console.log(message));</code></pre><pre><code>$ node index.js
Result:
[{"AddResult":3},{"AddResult":7},{"AddResult":11}]</code></pre><h3 id="3-putting-it-all-together">3. Putting it all together</h3><p>This is fairly easy — it’s just assembling the last code from each previous section:</p><pre><code class="language-js">'use strict';
const { soap } = require('strong-soap');
const expressApp = require('express')();
const bodyParser = require('body-parser');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const clientPromise = new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; err ? reject(err) : resolve(client))
));
expressApp.use(bodyParser.json())
.post('/parallel-soap-invoke', (req, res) =&gt; (clientPromise.then(invokeOperations)
.then(results =&gt; res.status(200).send(results))
.catch(({ message: error }) =&gt; res.status(500).send({ error }))
))
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));
// Adding req.body instead of hardcoded requests.
const invokeOperations = client =&gt; Promise.all(req.body.map(request =&gt; (
new Promise((resolve, reject) =&gt; client.Add(request, (err, result) =&gt; (
err ? reject(err) : resolve(result))
))
)));</code></pre><pre><code>POST /parallel-soap-invoke
[
{
"intA": 1,
"intB": 2
},
{
"intA": 3,
"intB": 4
},
{
"intA": 5,
"intB": 6
}
]
HTTP/1.1 500
{
"error": "req is not defined"
}</code></pre><p>Hmmm… Not a good result, since I did not expect an error at all. The problem is that <code>invokeOperations</code> doesn’t have <code>req</code> in its scope. The first thought could be “Just add it to the signature.” But that’s not possible, as that signature matches the result from the previous Promise, and that promise doesn’t return <code>req</code>, it only returns <code>client</code>. But, what if we add an intermediate Promise whose only purpose is injecting this value?</p><pre><code class="language-js">'use strict';
const { soap } = require('strong-soap');
const expressApp = require('express')();
const bodyParser = require('body-parser');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const clientPromise = new Promise((resolve, reject) =&gt; (
soap.createClient(url, {}, (err, client) =&gt; err ? reject(err) : resolve(client))
));
expressApp.use(bodyParser.json())
.post('/parallel-soap-invoke', (req, res) =&gt; (
/**
* After clientPromise.then, where client is received, a new Promise is
* created, and that Promise will resolve an object having two properties:
* client and requests.
*/
clientPromise.then(client =&gt; ({ client, requests: req.body }))
.then(invokeOperations)
.then(results =&gt; res.status(200).send(results))
.catch(({ message: error }) =&gt; res.status(500).send({ error }))
))
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));
/**
* Since the shape of the object passed to invokeOperations changed, the signature has
* to change to reflect the shape of the new object.
*/
const invokeOperations = ({ client, requests }) =&gt; Promise.all(requests.map(request =&gt; (
new Promise((resolve, reject) =&gt; client.Add(request, (err, result) =&gt; (
err ? reject(err) : resolve(result))
))
)));</code></pre><p>The results are exactly the same as the ones at the summary.</p><h3 id="4-bonus-track">4. Bonus track</h3><p>A generic SOAP to JSON converter for parallel SOAP invoking. The code is familiar, based on what you saw in the former sections. How about that?</p><pre><code class="language-js">'use strict';
const { soap } = require('strong-soap');
const expressApp = require('express')();
const bodyParser = require('body-parser');
const clientPromises = new Map();
expressApp.use(bodyParser.json())
.post('/parallel-soap-invoke', ({ body: { wsdlUrl, operation, requests } }, res) =&gt; (
getClient(wsdlUrl).then(client =&gt; ({ client, operation, requests }))
.then(invokeOperations)
.then(results =&gt; res.status(200).send(results))
.catch(({ message: error }) =&gt; res.status(500).send({ error }))
))
.listen(3000, () =&gt; console.log('Waiting for incoming requests.'));
const getClient = wsdlUrl =&gt; clientPromises.get(wsdlUrl)
|| (clientPromises.set(wsdlUrl, new Promise((resolve, reject) =&gt; (
soap.createClient(wsdlUrl, {}, (err, client) =&gt; err ? reject(err) : resolve(client))
))).get(wsdlUrl));
const invokeOperations = ({ client, operation, requests }) =&gt; (Promise.all(requests.map(request =&gt; (
new Promise((resolve, reject) =&gt; client[operation](request, (err, result) =&gt; (
err ? reject(err) : resolve(result))
))
))));</code></pre><p>First use example:</p><pre><code>POST /parallel-soap-invoke
content-type: application/json
{
"wsdlUrl": "http://www.dneonline.com/calculator.asmx?WSDL",
"operation": "Add",
"requests": [
{
"intA": 1,
"intB": 2
},
{
"intA": 3,
"intB": 4
},
{
"intA": 5,
"intB": 6
}
]
}
HTTP/1.1 200
[
{
"AddResult": 3
},
{
"AddResult": 7
},
{
"AddResult": 11
}
]
</code></pre><p>Second use example:</p><pre><code>POST /parallel-soap-invoke
content-type: application/json
{
"wsdlUrl": "http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl",
"operation": "ResolveIP",
"requests": [
{
"ipAddress": "8.8.8.8",
"licenseKey": ""
},
{
"ipAddress": "8.8.4.4",
"licenseKey": ""
}
]
}
HTTP/1.1 200
[
{
"ResolveIPResult": {
"Country": "United States",
"Latitude": 37.75101,
"Longitude": -97.822,
"AreaCode": "0",
"HasDaylightSavings": false,
"Certainty": 90,
"CountryCode": "US"
}
},
{
"ResolveIPResult": {
"Country": "United States",
"Latitude": 37.75101,
"Longitude": -97.822,
"AreaCode": "0",
"HasDaylightSavings": false,
"Certainty": 90,
"CountryCode": "US"
}
}
]</code></pre><p>Are you going through <a href="https://www.accenture.com/t00010101T000000__w__/nz-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Documents/Global/PDF/Digital_2/Accenture-Digital-Decoupling.pdf" rel="noopener">Digital Decoupling</a>? In a JavaScript full-stack architecture on top of the old services, this artifact could help you encapsulate all SOAP services, extend them, and expose only JSON. You could even modify this code a bit to call several different SOAP services at the same time (that should be just an additional <code>.map</code> and <code>.reduce</code>, as I see it right now). Or you could encapsulate your enterprise’s WSDLs in a database and invoke them based on a code or some identifier. That would be just one or two additional promises to the chain.</p>
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
