---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg"
tags: [Rest]
description: Ever wondered how login/signup on a website works on the back
author: "Milad E. Fahmy"
title: "REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples"
created: "2021-08-15T19:30:03+02:00"
modified: "2021-08-15T19:30:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rest tag-rest-api tag-express-js tag-api tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b84740569d1a4ca2c3f.jpg" alt="REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Ever wondered how login/signup on a website works on the back-end? Or how when you search for "cute kitties" on YouTube, you get a bunch of results and are able to stream off of a remote machine?</p>
<p>In this beginner friendly guide, I will walk you through the process of setting up a RESTful API. We'll declassify some of the jargon and have a look at how we can code a server in NodeJS. Let's dive a bit deeper into JavaScript!</p>
<h2 id="get-that-jargon-away">Get that jargon away</h2>
<p>So, what is REST? According to Wikipedia:</p>
<blockquote><strong>Representational state transfer</strong> (<strong>REST</strong>) is a software architectural style that defines a set of constraints to be used for creating Web services. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations</blockquote>
<p>Let's demystify what that means (hopefully you got the full form). REST is basically a set of rules for communication between a client and server. There are a few constraints on the definition of REST:</p>
<ol>
<li><strong>Client-Server Architecture</strong>: the user interface of the website/app should be separated from the data request/storage, so each part can be scaled individually.</li>
<li><strong>Statelessness</strong>: the communication should have no client context stored on server. This means each request to the server should be made with all the required data and no assumptions should be made if the server has any data from previous requests.</li>
<li><strong>Layered system</strong>: client should not be able to tell if it is communicating directly with the server or some intermediary. These intermediary servers (be it proxy or load balancers) allow for scalability and security of the underlying server.</li>
</ol>
<p>Okay, so now that you know what RESTful services are, here are some of the terms used in the heading:</p>
<ol>
<li><strong>REST Client</strong>: code or an app that can access these REST services. You are using one right now! Yes, the browser can act as an uncontrolled REST client (the website handles the browser requests). The browser, for a long time, used an in-built function called XMLHttpRequest for all REST requests. But, this was succeeded by <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">FetchAPI</a>, a modern, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">promise </a>based approach to requests. Others examples are code libraries like <a href="https://github.com/axios/axios">axios</a>, <a href="https://github.com/visionmedia/superagent">superagent</a> and <a href="https://github.com/sindresorhus/got">got</a> or some dedicated apps like <a href="https://www.postman.com/">Postman</a> (or an online version, <a href="https://postwoman.io/">postwoman</a>!), or a command line tool like <a href="https://curl.haxx.se/">cURL</a>!.</li>
<li><strong>REST Service</strong>: the server. There are many popular libraries that make creation of these servers a breeze, like <a href="https://expressjs.com/">ExpressJS </a>for NodeJS and <a href="https://www.djangoproject.com/">Django </a>for Python.</li>
<li><strong>REST API</strong>: this defines the endpoint and methods allowed to access/submit data to the server. We will talk about this in great detail below. Other alternatives to this are: GraphQL, JSON-Pure and oData.</li>
</ol>
<h2 id="so-tell-me-now-how-does-rest-look">So tell me now, how does REST look?</h2>
<p>In very broad terms, you ask the server for a certain data or ask it to save some data, and the server responds to the requests.</p>
<p>In programming terms, there is an endpoint (a URL) that the server is waiting to get a request. We connect to that endpoint and send in some data about us (remember, REST is stateless, no data about the request is stored) and the server responds with the correct response.</p>
<p>Words are boring, let me give you a demonstration. I will be using Postman to show you the request and response:</p>
<figcaption>postman: setting up request</figcaption>
</figure>
<p>The returned data is in JSON (JavaScript Object Notation) and can be accessed directly.</p>
<p>Here, <code>https://official-joke-api.appspot.com/random_joke</code> is called an endpoint of an API. There will be a server listening on that endpoint for requests like the one we made.</p>
<h2 id="anatomy-of-rest-">Anatomy of REST:</h2>
<p>Alright, so now we know that data can be requested by the client and the server will respond appropriately. Let's look deeper into how a request is formed.</p>
<ol>
<li><strong>Endpoint</strong>: I have already told you about this. For a refresher, it is the URL where the REST Server is listening.</li>
<li><strong>Method</strong>: Earlier, I wrote that you can either request data or modify it, but how will the server know what kind of operation the client wants to perform? REST implements multiple 'methods' for different types of request, the following are most popular:<br>- <strong>GET</strong>: Get resource from the server.<br>- <strong>POST</strong>: Create resource to the server.<br>- <strong>PATCH </strong>or <strong>PUT</strong>: Update existing resource on the server.<br>- <strong>DELETE</strong>: Delete existing resource from the server.<br></li>
<li><strong>Headers</strong>: The additional details provided for communication between client and server (remember, REST is stateless). Some of the common headers are:<br><strong>Request:</strong><br>- <em>host</em>: the IP of client (or from where request originated)<br>- <em>accept-language</em>: language understandable by the client<br>- <em>user-agent</em>: data about client, operating system and vendor<br><strong>Response</strong>:<br>- <em>status</em>: the status of request or HTTP code.<br>- <em>content-type</em>: type of resource sent by server.<br>- <em>set-cookie</em>: sets cookies by server</li>
<li><strong>Data</strong>: (also called body or message) contains info you want to send to the server.</li>
</ol>
<h2 id="enough-with-the-details-show-me-the-code-">Enough with the details – show me the code.</h2>
<p>Let's begin coding a REST Service in Node. We will be implementing all the things we learnt above. We will also be using ES6+ to write our service in.</p>
<p>Make sure you have Node.JS installed and <code>node</code> and <code>npm</code> are available in your path. I will be using Node 12.16.2 and NPM 6.14.4.</p>
<p>Create a directory <code>rest-service-node</code> and cd into it:</p><pre><code class="language-shell">mkdir rest-service-node
cd rest-service-node</code></pre>
<p>Initialize the node project:</p><pre><code class="language-shell">npm init -y</code></pre>
<p>The <code>-y</code> flag skips all the questions. If you want to fill in the whole questionnaire, just run <code>npm init</code>.</p>
<p> Let's install some packages. We will be using the ExpressJS framework for developing the REST Server. Run the following command to install it:</p><pre><code class="language-shell">npm install --save express body-parser</code></pre>
<p>What's <code>body-parser</code> there for? Express, by default, is incapable of handling data sent via POST request as JSON. <code>body-parser</code> allows Express to overcome this.</p>
<p>Create a file called <code>server.js</code> and add the following code:</p><pre><code class="language-js">const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.listen(5000, () =&gt; {
console.log(`Server is running on port 5000.`);
});
</code></pre>
<p>The first two lines are importing Express and body-parser. </p>
<p>Third line initializes the Express server and sets it to a variable called <code>app</code>. </p>
<p>The line, <code>app.use(bodyParser.json());</code> initializes the body-parser plugin.</p>
<p>Finally, we are setting our server to listen on port <code>5000</code> for requests.</p>
<h3 id="getting-data-from-the-rest-server-">Getting data from the REST Server:</h3>
<p>To get data from a server, we need a <code>GET</code> request. Add the following code before <code>app.listen</code>:</p><pre><code class="language-js">const sayHi = (req, res) =&gt; {
res.send("Hi!");
};
app.get("/", sayHi);</code></pre>
<p> We have created a function <code>sayHi</code> which takes two parameters <code>req</code> and <code>res</code> (I will explain later) and sends a 'Hi!' as response. </p>
<p><code>app.get()</code> takes two parameters, the route path and function to call when the path is requested by the client. So, the last line translates to: Hey server, listen for requests on the '/' (think homepage) and call the <code>sayHi</code> function if a request is made.</p>
<p><code>app.get</code> also gives us a <code>request</code> object containing all the data sent by the client and a <code>response</code> object which contains all the methods with which we can respond to the client. Though these are accessible as function parameters, the general naming convention suggests we name them <code>res</code> for <code>response</code> and <code>req</code> for <code>request</code>.</p>
<p>Enough chatter. Let's fire up the server! Run the following server:</p><pre><code class="language-shell">node server.js</code></pre>
<p>If everything is successful, you should see a message on console saying: <em>Server is running on port 5000.</em></p>
<p><em>Note: You can change the port to whatever number you want.</em></p>
<p>Open up your browser and navigate to <code>http://localhost:5000/</code> and you should see something like this:</p>
<p>There you go! Your first <code>GET</code> request was successful!</p>
<h3 id="sending-data-to-rest-server-">Sending data to REST Server:</h3>
<p>As we have discussed earlier, let's setup how we can implement a <code>POST</code> request into our server. We will be sending in two numbers and the server will return the sum of the numbers. Add this new method below the <code>app.get</code> :</p><pre><code class="language-js">app.post("/add", (req, res) =&gt; {
const { a, b } = req.body;
res.send(`The sum is: ${a + b}`);
});</code></pre>
<p>Here, we will be sending the data in JSON format, like this:</p><pre><code class="language-json">{
"a":5,
"b":10
}</code></pre>
<p>Let's get over the code:</p>
<p>On line 1, we are invoking the .<code>post()</code> method of ExpressJS, which allows the server to listen for <code>POST</code> requests. This function takes in the same parameters as the <code>.get()</code> method. The route that we are passing is <code>/add</code>, so one can access the endpoint as <code>http://your-ip-address:port/add</code> or in our case <code>localhost:5000/add</code>. We are inlining our function instead of writing a function elsewhere. </p>
<p>On line 2, we have used a bit of ES6 syntax, namely, object destructuring. Whatever data we send via the request gets stored and is available in the <code>body</code> of the <code>req</code> object. So essentially, we could've replaced line 2 with something like:</p><pre><code class="language-js">const num1 = req.body.a;
const num2 = req.body.b;</code></pre>
<p>On line 3, we are using the <code>send()</code> function of the <code>res</code> object to send the result of the sum. Again, we are using template literals from ES6. Now to test it (using Postman):</p>
<p>So we have sent the data 5 and 10 as <code>a</code> and <code>b</code> using them as the body. Postman attaches this data to the request and sends it. When the server receives the request, it can parse the data from <code>req.body</code> , as we did in the code above. The result is shown below.</p>
<p>Alright, the final code:</p><pre><code class="language-js">const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const sayHi = (req, res) =&gt; {
res.send("Hi!");
};
app.get("/", sayHi);
app.post("/add", (req, res) =&gt; {
const { a, b } = req.body;
res.send(`The sum is: ${a + b}`);
});
app.listen(5000, () =&gt; {
console.log(`Server is running on port 5000.`);
});
</code></pre>
<h2 id="rest-client-">REST Client:</h2>
<p>Okay, we have created a server, but how do we access it from our website or webapp? Here the REST client libraries will come in handy. </p>
<p>We will be building a webpage which will contain a form, where you can enter two numbers and we will display the result. Let's start.</p>
<p>First, let's change the <code>server.js</code> a bit:</p><pre><code class="language-js">const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) =&gt; {
res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/add", (req, res) =&gt; {
const { a, b } = req.body;
res.send({
result: parseInt(a) + parseInt(b)
});
});
app.listen(5000, () =&gt; {
console.log(`Server is running on port 5000.`);
});
</code></pre>
<p>We imported a new package <code>path</code>, which is provided by Node, to manipulate path cross-platform. Next we changed the <code>GET</code> request on '/' and use another function available in <code>res</code>, ie. <code>sendFile</code>, which allows us to send any type of file as response. So, whenever a person tries to navigate to '/', they will get our <code>index.html</code> page.</p>
<p>Finally, we changed our <code>app.post</code> function to return the sum as JSON and convert both <code>a</code> and <code>b</code> to integers.</p>
<p>Let's create an html page, I will call it <code>index.html</code>, with some basic styling:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;title&gt;REST Client&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.container {
height: 100vh;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
form {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}
label,
input[type="submit"] {
margin-top: 20px;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;h1&gt;Simple POST Form&lt;/h1&gt;
&lt;/h1&gt;
&lt;form&gt;
&lt;label&gt;Number 1:&lt;/label&gt;
&lt;input id="num1" type="number" /&gt;
&lt;label&gt;Number 2:&lt;/label&gt;
&lt;input id="num2" type="number" /&gt;
&lt;input type="submit" value="Add"/&gt;
&lt;/form&gt;
&lt;div class="result"&gt;Click Add!&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Let's add a <code>script</code> tag just before the closing body tag, so we don't need to maintain a <code>.js</code> file. We will begin by listening for the <code>submit</code> event and call a function accordingly:</p><pre><code class="language-js">&lt;script&gt;
document.addEventListener("submit", sendData);
&lt;/script&gt;</code></pre>
<p>First we need to prevent page refresh when the 'Add' button is clicked. This can be done using the <code>preventDefault()</code> function. Then, we will get the value of the inputs at that instant:</p><pre><code class="language-js">function sendData(e) {
e.preventDefault();
const a = document.querySelector("#num1").value;
const b = document.querySelector("#num2").value;
}</code></pre>
<p>Now we will make the call to the server with both these values <code>a</code> and <code>b</code>. We will be using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>, built-in to every browser for this. </p>
<p>Fetch takes in two inputs, the URL endpoint and a JSON request object and returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>. Explaining them here will be out-of-bounds here, so I'll leave that for you.</p>
<p>Continue inside the <code>sendData()</code> function:</p><pre><code class="language-js">fetch("/add", {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
a: parseInt(a),
b: parseInt(b)
})
})
.then(res =&gt; res.json())
.then(data =&gt; {
const {
result
} = data;
document.querySelector(
".result"
).innerText = `The sum is: ${result}`;
})
.catch(err =&gt; console.log(err));</code></pre>
<p>First we are passing the relative URL of the endpoint as the first parameter to <code>fetch</code>. Next, we are passing an object which contains the method we want Fetch to use for the request, which is <code>POST</code> in this case.</p>
<p>We are also passing <code>headers</code>, which will provide information about the type of data we are sending (<code>content-type</code>) and the type of data we accept as response (<code>accept</code>).</p>
<p>Next we pass <code>body</code>. Remember we typed the data as JSON while using Postman? We're doing kind of a similar thing here. Since express deals with string as input and processes it according to content-type provided, we need to convert our JSON payload into string. We do that with <code>JSON.stringify()</code>. We're being a little extra cautious and parsing the input into integers, so it doesn't mess up our server (since we haven't implemented any data-type checking).</p>
<p>Finally, if the promise (returned by fetch) resolves, we will get that response and convert it into JSON. After that, we will get the result from the <code>data</code> key returned by the response. Then we are simply displaying the result on the screen.</p>
<p>At the end, if the promise is rejected, we will display the error message on the console.</p>
<p>Here's the final code for <code>index.html</code>:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;title&gt;REST Client&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.container {
height: 100vh;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
form {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}
label,
input[type="submit"] {
margin-top: 20px;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;h1&gt;Simple POST Form&lt;/h1&gt;
&lt;/h1&gt;
&lt;form&gt;
&lt;label&gt;Number 1:&lt;/label&gt;
&lt;input id="num1" type="number" /&gt;
&lt;label&gt;Number 2:&lt;/label&gt;
&lt;input id="num2" type="number" /&gt;
&lt;input type="submit" value="Add"/&gt;
&lt;/form&gt;
&lt;div class="result"&gt;Click Add!&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
document.addEventListener("submit", sendData);
function sendData(e) {
e.preventDefault();
const a = document.querySelector("#num1").value;
const b = document.querySelector("#num2").value;
fetch("/add", {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
a: parseInt(a),
b: parseInt(b)
})
})
.then(res =&gt; res.json())
.then(data =&gt; {
const { result } = data;
document.querySelector(
".result"
).innerText = `The sum is: ${result}`;
})
.catch(err =&gt; console.log(err));
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>I have spun up a <a href="https://habitual-serious-boater.glitch.me/">little app on glitch</a> for you to test.</p>
<h2 id="conclusion-">Conclusion:</h2>
<p>So in this post, we learnt about REST architecture and the anatomy of REST requests. We worked our way through by creating a simple REST Server that serves <code>GET</code> and <code>POST</code> requests and built a simple webpage that uses a REST Client to display the sum of two numbers. </p>
<p>You can extend this for the remaining types of requests and even implement a full featured <a href="/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/">back-end CRUD app</a>. </p>
<p>I hope you have learned something from this. If you have any questions, feel free to reach out to me over twitter! Happy Coding!</p>
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
