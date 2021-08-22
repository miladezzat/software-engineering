---
card: "https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png"
tags: [JavaScript]
description: It’s 2018 and I just wrote a title that contains the words “S
author: "Milad E. Fahmy"
title: "How to build a serverless report server with Azure Functions and SendGrid"
created: "2021-08-15T19:40:27+02:00"
modified: "2021-08-15T19:40:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-serverless tag-nodejs tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a serverless report server with Azure Functions and SendGrid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vQPIjM0f0bLivXDceow66w.png" alt="How to build a serverless report server with Azure Functions and SendGrid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>It’s 2018 and I just wrote a title that contains the words “Serverless server”. Life has no meaning.</p>
<p>Despite that utterly contradictory headline, in this article we’re going to explore a pretty nifty way to exploit SendGrid’s template functionality using Timer Triggers in <a href="https://azure.microsoft.com/en-us/services/functions/?WT.mc_id=serverlessreport-medium-buhollan" rel="noopener">Azure Functions</a> to send out scheduled tabular reports. We are doing this because that’s what everyone wants in their inbox. A report. With numbers in it. And preferably some acronyms.</p>
<h4 id="the-inventory-sku-report">The Inventory SKU Report</h4>
<p>First, let’s straw-man this project with a contrived application that looks sufficiently boring enough to warrant a report. I have just the thing. A site where we can adjust inventory levels. The word “inventory” is just begging for a report.</p>
<p>This application allows you to adjust the inventory quantity (last column). Let’s say that an executive somewhere has requested that we email them a report every night that contains a list of every SKU altered in the last 24 hours. Because of course, they would ask for that. In fact, I could swear I’ve built this report in real life in a past job. Or there’s a glitch in the matrix. Either way, we’re doing this.</p>
<p>Here is what we’re going to be building…</p>
<p>Normally the way you would build this is with some sort of report server. Something like SQL Server Reporting Services or Business Objects or whatever other report servers are out there. Honestly, I don’t want to know. But if you don’t have a report server, this gets kind of tedious.</p>
<p>Let’s go over what you have to do to make this happen…</p>
<ol>
<li>Run a job on some sort of timer (cron job)</li>
<li>Query a database</li>
<li>Iterate over records and format them for output to the screen</li>
<li>Email said report</li>
<li>Update your resume and contact recruiters</li>
</ol>
<p>This is the kind of thing that nobody wants to do. But <strong>I think</strong> this project can be a lot of fun, and we can use some interesting technology to pull it off. Starting with Serverless.</p>
<h4 id="serverless-timer-functions">Serverless timer functions</h4>
<p>Serverless is a really good use case for one-off requests like this. In this case, we can use Azure Functions to create a Timer Trigger function.</p>
<p>To do that, I’m going to use the Azure Functions extension for VS Code. I’m going to use it for everything in fact. Why? Because I don’t know you, but I do know it’s highly likely that you are using VS Code. VS Code is great because it’s like a movie that all developer’s can universally agree is completely awesome. Sort of the opposite of “Children of Men”. That movie was terrible and you know it.</p>
<p>Make sure you install the Azure Functions extension.</p>
<p><a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&amp;WT.mc_id=serverlessreport-medium-buhollan" rel="noopener"><strong>Azure Functions - Visual Studio Marketplace</strong></a><br><a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&amp;WT.mc_id=serverlessreport-medium-buhollan" rel="noopener"><em>Extension for Visual Studio Code - An Azure Functions extension for Visual Studio Code.</em>marketplace.visualstudio.com</a></p>
<p>Now create a new Function App from within VS Code.</p>
<p>Then create a new Timer Trigger function. Timer Trigger functions are scheduled using standard Cron Expressions. You have likely not ever seen before because I had not seen one until a few months ago. And I’ve been in this industry for a LONG time. I am old, father William.</p>
<p>Cron expressions look kind of scary cause they have asterisks in them. In the case below, I’m saying that when minutes is 0 and seconds is 0 and hours is evenly divisible by 24, fire the function. This would be midnight.</p>
<p>Now we can run this locally (F5). We’ll see in the embedded terminal the schedule on which our Function will be called; the next 5 occurrences.</p>
<p>It feels good, man.</p>
<p>OK, now we need to get some data. I’m not going to drag you into the specifics of me querying SQL Server from this function because that’s not what this article is about, but here’s the code anyway.</p><pre><code class="language-js">const { Connection, Request } = require('tedious');
const options = {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
};
const config = {
userName: process.env.SQL_USERNAME,
password: process.env.SQL_PASSWORD,
server: process.env.SQL_SERVER,
options: {
encrypt: true,
database: process.env.SQL_DATABASE
}
};
module.exports = function(context, myTimer) {
getChangedSkus()
.then(data =&gt; {
if (data.length &gt; 0) {
sendEmail(context, data);
} else {
context.done();
}
})
.catch(err =&gt; {
context.log(`ERROR: ${err}`);
});
};
/**
* Executes a query against the database for SKU's changed in the last 24 hours
* @returns {Promise} Promise object contains result of query
*/
function getChangedSkus() {
return new Promise((resolve, reject) =&gt; {
const connection = new Connection(config);
const query = `SELECT Sku, Quantity, CONVERT(varchar, Modified, 0) as Modified
FROM Inventory
WHERE Modified &gt;= dateadd(day, -1, getdate())`;
connection.on('connect', err =&gt; {
if (err) reject(err);
let request = new Request(query, err =&gt; {
if (err) {
reject(err);
}
});
const results = [];
request.on('row', columns =&gt; {
let result = {};
columns.forEach(column =&gt; {
result[column.metadata.colName] = column.value;
});
results.push(result);
});
request.on('doneProc', (rowCount, more) =&gt; {
resolve(results);
});
connection.execSql(request);
});
});
}</code></pre>
<p>I’m connecting to the database, doing a simple query and….wait a minute…did not I say I <strong>wasn’t </strong>going to get into specifics? You had me there for a minute, but I’m onto your game!</p>
<p>So this pulls in data and we get it in a JavaScript object that we can pass as JSON. If we were to <code>JSON.stringify</code> this, we will see the data set that we need to send in the report.</p><pre><code class="language-js">[
{ "Sku": "1", "Quantity": 65, "Modified": "Nov  6 2018 10:14PM" },
{ "Sku": "10", "Quantity": 89, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "11", "Quantity": 39, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "12", "Quantity": 2, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "13", "Quantity": 75, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "14", "Quantity": 85, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "15", "Quantity": 58, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "16", "Quantity": 2, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "17", "Quantity": 48, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "18", "Quantity": 68, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "19", "Quantity": 67, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "2", "Quantity": 5, "Modified": "Nov  6 2018 11:18PM" },
{ "Sku": "20", "Quantity": 37, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "21", "Quantity": 54, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "22", "Quantity": 21, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "23", "Quantity": 46, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "24", "Quantity": 55, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "25", "Quantity": 21, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "26", "Quantity": 42, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "27", "Quantity": 65, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "28", "Quantity": 74, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "29", "Quantity": 33, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "3", "Quantity": 51, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "4", "Quantity": 96, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "5", "Quantity": 27, "Modified": "Nov  6 2018 11:18PM" },
{ "Sku": "6", "Quantity": 13, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "7", "Quantity": 54, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "8", "Quantity": 89, "Modified": "Nov  2 2018  8:18PM" },
{ "Sku": "9", "Quantity": 56, "Modified": "Nov  2 2018  8:18PM" }
]</code></pre>
<p>OK! We’ve got data, now we just need to make it pretty and email it to someone we don’t like. How are we going to do that? With SendGrid!</p>
<h4 id="sendgrid-setup">SendGrid setup</h4>
<p>SendGrid is a nifty service with a really nice dashboard. You will like it. Or you won’t. Either way, you have to use it to get through this blog post.</p>
<p>You can create a free account if you don’t already have one. That’s plenty for what we’re doing here today.</p>
<p>Once you create a report, SendGrid is going to drop you into your “dashboard”. From this dashboard, you need to create a new API Application and get the key.</p>
<p>Make sure you copy your API key when it gives it to you. You can’t ever get back to it and you’ll have to do this all over again. Let’s face it: it was kinda boring the first time around.</p>
<p>Copy that key into your Azure Functions project. Put it in the <code>local.settings.json</code> file so you can access it as a Node.js environment variable later.</p><pre><code>{
"IsEncrypted": false,
"Values": {
"AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=reporttimerstorage;AccountKey=OJVYCHI0GhtIm5XZdsDzGZFraJD/v/rfPwMSu4B72Kf5/O7oCrOQKNAFkQ==",
"FUNCTIONS_WORKER_RUNTIME": "node",
"SENDGRID_API_KEY": "SG.rlpDOy3EQNOTChnzpa1COPYg.G4MYlEYhwHk0RyvuGcY_xKEYbhQoFTtPB9A9-5ZaYQ"
}
}</code></pre>
<p>Now we are going to create a template in SendGrid. That’s what we will use to design our report. SendGrid has something called “Transactional Templates”. I have no idea why they are called that, but we are going to be needing one.</p>
<p>Once you create a new one, you have to create a new “version”. I had a hilariously hard time figuring this out. But then again, my brain is tad on the smallish side of little.</p>
<p>Choose to design your template with the Code Editor. You don’t need no freakin’ Designer Editor!</p>
<p>SendGrid support handlebars, which is a template syntax that’s so easy, even I can do it. In the Code Editor, you can paste the JSON data into the “Test Data” tab…</p>
<p>Now iterate over the data using its key name from the JSON…</p>
<p>It’s BEAUTIFUL! I’m crying. Ship it.</p>
<p>ALRIGHT. Fine. We’ll make it a little nicer on the old eyeballs. Here is a style that I shamelessly ripped off of the gorgeous <a href="https://bulma.io/" rel="noopener">Bulma CSS framework</a>.</p><pre><code class="language-html">&lt;style&gt;
table {
border-collapse: collapse;
border-spacing: 0;
background-color: white;
color: #363636;
}
.table td,
.table th {
border: 1px solid #dbdbdb;
border-width: 0 0 1px;
padding: 0.5em 0.75em;
vertical-align: top;
}
.table th {
color: #363636;
text-align: left;
}
.table thead td,
.table thead th {
border-width: 0 0 2px;
color: #363636;
}
.table tbody tr:last-child td,
.table tbody tr:last-child th {
border-bottom-width: 0;
}
.table.is-bordered td,
.table.is-bordered th {
border-width: 1px;
}
.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
border-bottom-width: 1px;
}
.table.is-fullwidth {
width: 100%;
}
.container {
margin: 0 auto;
position: relative;
max-width: 960px;
padding-top: 20px;
font-family: helvetica, sans-serif;
}
&lt;/style&gt;
&lt;div class="container"&gt;
&lt;h1&gt;Modified SKUs&lt;/h1&gt;
&lt;p&gt;The following SKU's were modified in the last 24 hours&lt;/p&gt;
&lt;table class="table is-fullwidth"&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Sku&lt;/th&gt;
&lt;th&gt;Quantity&lt;/th&gt;
&lt;th&gt;Last Modified&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{{#each Skus}}
&lt;tr&gt;
&lt;td&gt;{{Sku}}&lt;/td&gt;
&lt;td&gt;{{Quantity}}&lt;/td&gt;
&lt;td&gt;{{Modified}}&lt;/td&gt;
&lt;/tr&gt;
{{/each}}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;/div&gt;</code></pre>
<p>It’s ok at this point for you to be audibly impressed.</p>
<p>Now you might have noticed that the Subject of the email is missing. How do we fill that in? Well, after another embarrassing period of failure followed by introspection, I figured out that it’s behind the “Settings” icon on the left. You just have to pass a value in your JSON for “Subject”.</p>
<p>Now we need to get the template ID and add it to our Azure Functions project. Save this template and select the ID from the main template screen.</p>
<p>Drop it in the trusty <code>local.settings.json</code> file right underneath your SendGrid API key.</p><pre><code>{
"IsEncrypted": false,
"Values": {
"AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=reporttimerstorage;AccountKey=OJVYCHI0GhtIm5XZdsDzGZFraJD/v/rfPwMSu4B72Kf5/O7oCrOQKNAFkQ==",
"FUNCTIONS_WORKER_RUNTIME": "node",
"SENDGRID_API_KEY": "SG.rlpDOy3EQNOTChnzpa1COPYg.G4MYlEYhwHk0RyvuGcY_xKEYbhQoFTtPB9A9-5ZaYQ"
"SENDGRID_TEMPLATE_ID": "d-3e33c1453cf7457fb06e6d30519bd422"
}
}</code></pre>
<p>Now we are ready to pass our data from our Azure Function to SendGrid and send out this incredible work of business art.</p>
<h4 id="sendgrid-bindings-for-azure-functions">SendGrid bindings for Azure Functions</h4>
<p>Azure Functions provides a binding for SendGrid. If you create a function through the Azure Portal, it will create this binding for you when you select the “SendGrid” template. If you are doing it locally like I am, you have to add it yourself.</p>
<p>First you need to open the <code>function.json</code> file for the <code>CreateReport</code> function and add in the SendGrid binding.</p><pre><code>{
"type": "sendGrid",
"name": "message",
"apiKey": "SENDGRID_API_KEY",
"to": "youremail@company.com",
"from": "hahabusiness@businesstime.com",
"direction": "out"
}</code></pre>
<p>The SendGrid binding comes as an extension for Azure Functions. Run the following command in the terminal to install it.</p><pre><code>Microsoft.Azure.WebJobs.Extensions.SendGrid -Version 3.0.0</code></pre>
<p>When you run this command, VS Code will ask you to restore some dependencies. You can click restore. Nothing bad will happen…OR WILL IT?!</p>
<p>One other thing you need to do is tweak your <code>extensions.csproj</code> file to reference the latest SendGrid library. This is required to use dynamic templates.</p><pre><code>&lt;PackageReference Include="Sendgrid" Version="9.10.0" /&gt;</code></pre>
<p>When you add that, VS Code will prompt you to restore again and yes, you definitely need to do it this time. VS Code needs to build these binaries and the restore does that.</p>
<p>OK! Now we’re ready to send an email via our SendGrid template. Here is the code to do it. It’s depressingly simple. I know after all this you were hoping for enough code to choke a cat (what? you’ve never heard that metaphor before?), but this is all it takes.</p><pre><code class="language-js">function sendEmail(context, data) {
context.done(null, {
message: {
/* you can override the to/from settings from function.json here if you would like
to: 'someone@someplace.com',
from: 'someone@anotherplace.com'
*/
personalizations: [
{
dynamic_template_data: {
Subject: `Tailwind SKU Report For ${new Date().toLocaleDateString(
'en-US',
options
)}`,
Skus: data
}
}
],
template_id: process.env.SENDGRID_TEMPLATE_ID
}
});
}</code></pre>
<p>The items of note are me passing in a Subject as part of the JSON. As well as the fact that you can override to/from addresses specified in the <code>function.json</code> file here.</p>
<p>Now you can run your function and wait 24 hours to test it!</p>
<p>No but seriously — how do you manually test a Timer Trigger without constantly modifying the damn Cron Job?</p>
<p>I’ll show you how I do it and then you can figure out a better way.</p>
<h4 id="testing-timer-triggers-with-http-triggers">Testing timer triggers with http triggers</h4>
<p>I create an Http Trigger in the same project and call it “RunCreateReport”. In that function, I just import and call the timer function.</p><pre><code class="language-js">const index = require('../CreateReport/index');
module.exports = function(context, req) {
// This is a tester function that manually executes the CreateReport timer function
index(context);
};</code></pre>
<p>The only drawback to this is that you have to repeat your SendGrid binding settings from <code>function.json</code> in the “CreateReport” over in the “RunCreateReport” <code>function.json</code>. But other than that, this works just fine. Now you can run this thing, fire up a browser and hit the URL which will call the timer function immediately. You can test without having to touch that icky old Cron expression.</p>
<h4 id="haha-business">HAHA business</h4>
<p>Now go check your email and bask in the glory of the report. Note that you don’t have to own an email address to send from SendGrid. You can literally send from any address. Seriously. Go ahead and try. JUST THINK OF WHAT YOU CAN DO WITH THIS POWER.</p>
<p>Here’s what my inbox looks like. Heads up, it does go to junk. Probably because I don’t own the sender email address.</p>
<p>WHAT? There’s a “Business Resilience Conference”? OMG so much business. I bet those people get a LOT of reports.</p>
<p>You can get this project from Github.</p>
<p><a href="https://github.com/burkeholland/serverless-sendgrid-report" rel="noopener"><strong>burkeholland/serverless-sendgrid-report</strong></a><br><a href="https://github.com/burkeholland/serverless-sendgrid-report" rel="noopener"><em>Contribute to burkeholland/serverless-sendgrid-report development by creating an account on GitHub.</em>github.com</a></p>
<p>Here are a few other Azure Functions resources to keep you busy.</p>
<ul>
<li><a href="https://code.visualstudio.com/tutorials/functions-extension/getting-started?WT.mc_id=serverlessreport-medium-buhollan" rel="noopener">Deploy to Azure using Azure Functions</a></li>
<li><a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?WT.mc_id=serverlessreport-medium-buhollan" rel="noopener">Azure Functions JavaScript developer guide</a></li>
<li><a href="https://www.youtube.com/watch?v=89WXgaY-NqY" rel="noopener">Migrating a Mongo DB API to Azure Functions</a></li>
</ul>
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
