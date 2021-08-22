---
card: "/images/default.jpg"
tags: [signalR]
description: The other day, some fine developers at my company were gettin
author: "Milad E. Fahmy"
title: "How to get started with SignalR on Azure with JavaScript"
created: "2021-08-15T19:32:09+02:00"
modified: "2021-08-15T19:32:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-signalr tag-azure tag-javascript tag-cloud-computing tag-websocket ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with SignalR on Azure with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/travel14.jpg 300w,
/news/content/images/size/w600/2019/11/travel14.jpg 600w,
/news/content/images/size/w1000/2019/11/travel14.jpg 1000w,
/news/content/images/size/w2000/2019/11/travel14.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/travel14.jpg" alt="How to get started with SignalR on Azure with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The other day, some fine developers at my company were getting ready to roll out a status update page. We'd tested it extensively but now we were about to put it out at scale.</p>
<p>I was worried about its dependency on an API server that had been acting up recently. We haven't determined the root cause of our problems on the API side, and this application uses polling - that is, it constantly asks the API for new data. If that API goes down, it takes our app with it and the increased load from our app might exacerbate the problems we're seeing.</p>
<p><img src="https://wilkie-portfolio-images.s3.us-east-2.amazonaws.com/travel14.jpg" alt="Tourists in Ireland, perhaps waiting for a message"></p>
<p>One way to step away from polling is to integrate <a href="https://dotnet.microsoft.com/apps/aspnet/signalr">SignalR</a>, a persistent connection tool that uses websockets and related technologies to allow servers to <em>push</em> updates to clients.</p>
<p>The technology is written in .NET, and most of the documentation you will find around the web is using C#. This tutorial will cover a basic JavaScript implementation.</p>
<h1 id="whatdoesitdo">What does it do?</h1>
<p><a href="https://github.com/aspnet/AspNetCore/tree/master/src/SignalR">Open-sourced</a> SignalR creates a persistent connection between a client and server. It uses websockets first, then longpolling and other technologies when websockets are unavailable.</p>
<p>Once the client and server have created a connection, SignalR can be used to "broadcast" messages to the client. When the client receives those messages, it can perform functions like updating a store.</p>
<p>The most common example given for websockets is a chat app - new data must be shown to the user without her needing to refresh the page. But if your server gets any updates about changing data that you need to show to a client, this might be the service for you.</p>
<h1 id="signalrontheazureplatform">SignalR on the Azure platform</h1>
<p>Perhaps because it was developed by Microsoft, SignalR has a very clean integration on the Azure cloud platform. Like other function apps, you'll create an "in" trigger and an "out" binding for broadcasting messages.</p>
<h2 id="costs">Costs</h2>
<p>Because I was the first to look at this technology at scale at my company, I had to dig in a little about costs for this service. Azure charges about $50/month for one "unit" of SignalR service - 1000 simultaneous connections and one million messages a day. There is also a free service for those playing around or small businesses.</p>
<p>It was really good I dug into those numbers, as you'll see a little below.</p>
<h2 id="createasignalrhub">Create a SignalR hub</h2>
<p>Let's get started. We'll need a SignalR hub, two function apps, and client code to add to our web app.</p>
<p>Go to SignalR -&gt; Add and fill out your details. It takes a second for the worker to build your service. Make sure you give the service a decent resource name, as you'll be using it with the rest of your apps. Also grab Keys -&gt; Connection String for use in our binding.</p>
<p><img src="https://wilkie-portfolio-images.s3.us-east-2.amazonaws.com/setting-up-signalr-service.png" alt="Setting up SignalR on Azure"></p>
<h1 id="createyourfunctionappforsendingsignalrmessages">Create your function app for sending SignalR messages</h1>
<p>Because we're working with Azure, we're going to be creating function apps to interface with SignalR. I wrote a getting-started <a href="https://wilkie.tech/tech/azure-function-apps-101/">blog post</a> about Azure function apps a little while ago.</p>
<p>This tutorial assumes you already know how to work with function apps. Naturally you can work with these libraries without the binding magic, but you'll have to do your own translation of the .NET code!</p>
<h2 id="theconnectionapp">The connection app</h2>
<p>The first thing we need is a way for clients to request permission to connect to our SignalR service. The code for this function couldn't be more basic:</p>
<pre><code class="language-javascript">module.exports = function (context, _req, connectionInfo) {
context.res = { body: connectionInfo }
context.done()
}
</code></pre>
<p>The magic all happens in the bindings, where we pull in our SignalR service. The trigger is an HTTP request that our client can call.</p>
<pre><code class="language-javascript">{
"bindings": [
{
"authLevel": "function",
"type": "httpTrigger",
"direction": "in",
"name": "req",
"methods": ["get"]
},
{
"type": "signalRConnectionInfo",
"name": "connectionInfo",
"hubName": "your-signalr-service-name",
"connectionStringSetting": "connection-string",
"direction": "in"
}
]
}
</code></pre>
<h2 id="theclientcode">The client code</h2>
<p>To access this method, our client will call:</p>
<pre><code class="language-javascript">import * as signalR from '@microsoft/signalr'
const { url: connectionUrl, accessToken } = await axios
.get(url-to-your-connection-app)
.then(({ data }) =&gt; data)
.catch(console.error)
</code></pre>
<p>Our function app will return a <code>url</code> and <code>accessToken</code>, which we can then use to connect to our SignalR service. Note that we created the binding with the <code>hubName</code> of our SignalR service - that means you could have multiple connections to different hubs in one client.</p>
<h1 id="thebroadcastingservice">The broadcasting service</h1>
<p>Now we are ready to start sending messages. Again we'll start with the function app. It takes in a trigger and puts out a SignalR message.</p>
<p>A trigger could be another using posting a message, an event from an event hub, or any other trigger Azure supports. I need to trigger off database changes.</p>
<pre><code class="language-javascript">{
"bindings": [
{
"type": "cosmosDBTrigger",
"name": "documents",
"direction": "in",
[...]
},
{
"type": "signalR",
"name": "signalRMessages",
"hubName": "your-signalr-service-name",
"connectionStringSetting": "connection-string",
"direction": "out"
}
]
}
</code></pre>
<p>And the code. Again, dead simple.</p>
<pre><code class="language-javascript">module.exports = async function (context, documents) {
const messages = documents.map(update =&gt; {
return {
target: 'statusUpdates',
arguments: [update]
}
})
context.bindings.signalRMessages = messages
}
</code></pre>
<p>SignalR messages take a <code>target</code> and <code>arguments</code> object. Once your triggers start firing, that's everything you need to get started with SignalR on the server! Microsoft has made all of this very easy for us.</p>
<h2 id="theclientcode">The client code</h2>
<p>On the client side, things are a little more complex, but not unmanageable. Here's the rest of the client code:</p>
<pre><code class="language-javascript">const connection = new signalR.HubConnectionBuilder()
.withUrl(connectionUrl, { accessTokenFactory: () =&gt; accessToken })
// .configureLogging(signalR.LogLevel.Trace)
.withAutomaticReconnect()
.build()
connection.on('statusUpdates', data =&gt; {
// do something with the data you get from SignalR
})
connection.onclose(function() {
console.log('signalr disconnected')
})
connection.onreconnecting(err =&gt;
console.log('err reconnecting  ', err)
)
connection
.start()
.then(res =&gt; // Potential to do something on initial load)
.catch(console.error)
</code></pre>
<p>We consume the <code>connectionUrl</code> and <code>accessToken</code> we received from the connect function earlier, then build our connection using those values.</p>
<p>Then we listen to messages with the shared key (for me, it's <code>statusUpdates</code>), and provide handlers for close and reconnecting functions.</p>
<p>Finally, we start the connection. Here we can provide an initial load function. I needed one to fetch initial data to show current status. If you are building a chat app, you might need to fetch initial messages here.</p>
<p>This is (almost, maybe) everything you need to get started in JavaScript with SignalR on Azure!</p>
<h1 id="scopingbyuser">Scoping by user</h1>
<p>But maybe you, like me, need to send a lot of messages to a lot of users.</p>
<p>When I first put this into production, on a sub-set of users, I was blasting every connection with every single update. Because the client code can scope the messages it listens to, I used something like <code>statusUpdates-${userId}</code> so that the client would only see his own updates.</p>
<p>That could work just fine if you have very low volume, and the more general one is great if everybody in your system needs the same message. But the status I work with is particular to an individual.</p>
<p><img src="https://wilkie-portfolio-images.s3.us-east-2.amazonaws.com/800000signalrmessages.png" alt="800,000 SignalR messages sent from Azure platform"></p>
<p>Remember how Azure charges per "unit" and each unit has one million messages? I hit that during a few hours of testing this during a not-busy time.</p>
<p>Azure counts each message SignalR has to send as one message. That is, if five connections are hooked up to your hub and you send ten messages, that counts as 50, not 10. This was a surprise to me, and also required a couple more hours of research.</p>
<p>We can scope our SignalR function code to send only to certain users. First, we update the connection app to accept <code>userId</code> as a query param:</p>
<pre><code class="language-javascript">      {
"type": "signalRConnectionInfo",
"name": "connectionInfo",
"userId": "{userId}",
"hubName": "your-signalr-service-name",
"connectionStringSetting": "connection-string",
"direction": "in"
}
</code></pre>
<p>Then we update the broadcasting function to send only to that user:</p>
<pre><code class="language-javascript">const messages = documents.map(update =&gt; {
return {
target: 'statusUpdates',
userId: update.user.id,
arguments: [update]
}
})
</code></pre>
<p>The broadcasting service won't know who has connected, so you'll need to trigger it with something that has access to a unique ID that the client will also have access to.</p>
<p>The client code simply passes in the userId as a query param:</p>
<pre><code class="language-javascript">const { url: connectionUrl, accessToken } = await axios
.get(`${url-to-your-connection-app}&amp;userId=${userId}`)
.then(({ data }) =&gt; data)
.catch(console.error)
</code></pre>
<p>I swear to you, the only place on the entire internet I found to let me know how to request a connection using the <code>userId</code> was an answer on <a href="https://stackoverflow.com/questions/29509396/signalr-client-how-to-set-user-when-start-connection">this Stack Overflow question</a>.</p>
<p>The internet is amazing, and JavaScript Azure docs are hard to come by.</p>
<h1 id="resources">Resources</h1>
<ul>
<li><a href="https://docs.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-3.0">SignalR Javascript client docs from Microsoft</a></li>
<li><a href="https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/mapping-users-to-connections#IUserIdProvider">Configuring Users and Groups when sending SignalR messages</a> -<br>
examples in C# but you can maybe figure out how the JavaScript client is going to behave and make some educated guesses.</li>
<li><a href="https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-functions/functions-bindings-signalr-service.md">SignalR Service bindings for Azure Functions</a></li>
<li><a href="https://github.com/SignalR/SignalR/wiki/SignalR-JS-Client">Client API</a></li>
<li><a href="https://github.com/aspnet/AspNetDocs/blob/master/aspnet/signalr/overview/guide-to-the-api/working-with-groups.md">Working with Groups in SignalR</a></li>
<li><a href="https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-tutorial-authenticate-azure-functions">Tutorial: Azure SignalR Service authentication with Azure Functions</a></li>
</ul>
<p><em>This post originally appeared on <a href="https://wilkie.tech/tech/getting-started-with-signal-r-in-azure/">wilkie.tech</a>.</em></p>
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
