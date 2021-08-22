---
card: "/images/default.jpg"
tags: [Serverless]
description: Serverless architecture is the industry's latest buzzword and
author: "Milad E. Fahmy"
title: "Learn Serverless by Building your own Slack App"
created: "2021-08-15T19:33:07+02:00"
modified: "2021-08-15T19:33:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-serverless tag-serverless-framework tag-aws-lambda tag-slack tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Serverless by Building your own Slack App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/serverless-1.jpg 300w,
/news/content/images/size/w600/2019/08/serverless-1.jpg 600w,
/news/content/images/size/w1000/2019/08/serverless-1.jpg 1000w,
/news/content/images/size/w2000/2019/08/serverless-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/serverless-1.jpg" alt="Learn Serverless by Building your own Slack App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Serverless architecture is the industry's latest buzzword and many of the largest tech companies have begun to embrace it. </p>
<p>In this article, we'll learn what it is and why you should use it. We'll also set up AWS, create our serverless app, and create a slack app!</p>
<h2 id="what-is-serverless">What is Serverless?</h2>
<p>Serverless is a cloud computing paradigm in which the developer no longer has to worry about maintaining a server – they just focus on the code. </p>
<p>Cloud providers, such as AWS or Azure, are now responsible for executing code and maintaining servers by dynamically allocating their resources. A variety of events can trigger code execution, including cron jobs, http requests, or database events. </p>
<p>The code that developers send to the cloud is usually just a function so, many times, serverless architecture is implemented using Functions-as-a-Service, or FaaS. The major cloud providers provide frameworks for FaaS, such as AWS Lambda and Azure Functions.</p>
<h2 id="why-serverless">Why Serverless?</h2>
<p>Not only does serverless allow developers to just focus on code, but it has many other benefits as well. </p>
<p>Since cloud providers are now responsible for executing code and dynamically allocate resources based on event triggers, you typically only pay per request, or when your code is being executed. </p>
<p>Additionally, since cloud providers are handling your servers, you don't have to worry about scaling up – the cloud provider will handle it. This makes serverless apps lower cost, easier to maintain, and easier to scale.</p>
<hr>
<h2 id="setting-up-aws-lambda">Setting up AWS Lambda</h2>
<p>For this tutorial, I will be using AWS Lambda, so first, we'll create an <a href="https://aws.amazon.com/">AWS account</a>. I find AWS's UI hard to understand and difficult to navigate, so I will be adding screenshots for each step.</p>
<p>Once you log in, you should see this:</p>
<figcaption>Main screen</figcaption>
</figure>
<p>Next, we'll set up an IAM user. An <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html">IAM</a> (Identity and Access Management) user interacts with AWS and its resources on your behalf. This allows you to create different IAM users with different permissions and purposes, without compromising the security of your root user account.</p>
<p>Click on the "services" tab at the top of the page, and type "IAM" into the bar:</p>
<p>Click on the first result, and you'll see, on the left-hand sidebar, that you're at the dashboard. Click on the "Users" option to get to create our new IAM user. </p>
<p>Click on the "Add user" button to create a new user. Fill in the details as follows:</p>
<p>You can name your user anything you'd like, but I went with <code>serverless-admin</code>. Be sure that your user has "Programmatic access" to AWS, <strong>not</strong> "AWS Management Console Access". You'd use the latter for teammates, or other <em>humans</em> who need access to AWS. We just need this user to interact with AWS Lambda, so we can just give them programmatic access. </p>
<p>For permissions, I've chosen to attach existing policies since I don't have any groups, and I don't have any existing users that I want to copy permissions for. In this example, I will create the user with Administrator access since it's just for a personal project; however, if you were to use a serverless app in an actual production environment, your IAM user should be scoped to only access Lambda-necessary parts of AWS. (Instructions can be found <a href="https://serverless.com/blog/abcs-of-iam-permissions/">here</a>).</p>
<p>I didn't add any tags and created the user. It's vital to save the information given to you on the next screen - the Access ID and Secret Access Key.</p>
<p>Don't leave this screen without copying down both! You won't be able to see the Secret access key again after this screen.</p>
<p>Finally, we'll add these credentials to command line AWS. Use this <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html">guide</a> to get aws cli setup.</p>
<p>Make sure you have it installed by running <code>aws --version</code>. You should see something like this:</p>
<p>Then run <code>aws configure</code> and fill in the prompts:</p>
<p>I have the default region as <code>us-east-2</code> already set up, but you can use <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">this</a> to determine what your region is.</p>
<p>To make sure that you have your credentials set up correctly, you can run <code>cat ~/.aws/credentials</code> in your terminal.</p>
<p>If you want to configure a profile other than your default, you can run the command as follows: <code>aws configure --profile [profile name]</code>.</p>
<p>If you had trouble following the steps, you can also check out <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">AWS's documentation</a>.</p>
<hr>
<h2 id="set-up-serverless">Set up serverless</h2>
<p>Go to your terminal and install the <code>serverless</code> package globally using <code>npm</code>: <code>npm i -g serverless</code>. (<a href="https://serverless.com/">More info on serverless here</a>)<br>and your terminal should look something like this:</p>
<p>Next, navigate to the directory where you want to create the app, then run <code>serverless</code> and follow the prompts:</p>
<p>For this application, we'll be using Node.js. You can name your app anything you want, but I've called mine <code>exampleSlackApp</code>.</p>
<p>Open your favorite code editor to the contents in <code>exampleSlackApp</code> (or whatever you've called your application).</p>
<p>First, we'll take a look at <code>serverless.yml</code>. You'll see there's a lot of commented code here describing the different options you can use in the file. Definitely give it a read, but I've deleted it down to just:</p>
provider:
name: aws
runtime: nodejs10.x
region: us-east-2
functions:
hello:
handler: handler.hello</code></pre>
<figcaption>serverless.yml</figcaption>
</figure>
<p> I've included <code>region</code> since the default is <code>us-east-1</code> but my aws profile is configured for <code>us-east-2</code>.</p>
<p>Let's deploy what we already have by running <code>serverless deploy</code> in the directory of the app that <code>serverless</code> just created for us. The output should look something like this:</p>
<p>And if you run <code>serverless invoke -f hello</code> in your terminal, it'll run the app, and you should see:</p><pre><code>{
"statusCode": 200,
"body": "{\n  \"message\": \"Go Serverless v1.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}</code></pre>
<p>For further proof that our slack app is live, you can head back to AWS console. Go to the services dropdown, search for "Lambda", and click on the first option ("Run code without thinking about servers").</p>
<p>And here's your app!</p>
<p>Next, we'll explore actually using serverless by building our slack app. Our slack app will post a random <a href="https://en.wikipedia.org/wiki/Ron_Swanson">Ron Swanson</a> quote to slack using a <a href="https://api.slack.com/slash-commands">slash command</a> like this:</p>
<p>The following steps don't necessarily have to be done in the order that I've done them, so if you want to skip around, feel free!</p>
<hr>
<h2 id="adding-the-api-to-our-code">Adding the API to our code</h2>
<p>I'm using <a href="https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api?ref=public-apis">this API</a> to generate Ron Swanson quotes since the docs are fairly simple (and of course, it's free). To see how requests are make and what gets returned, you can just put this URL in your browser:</p>
<p><a href="https://ron-swanson-quotes.herokuapp.com/v2/quotes"><code>https://ron-swanson-quotes.herokuapp.com/v2/quotes</code></a></p>
<p>You should see something like this:</p>
<p>So, we can take our initial function and modify it as such:</p>
getRon();
};</code></pre>
<figcaption>Note: I've removed the async portion</figcaption>
</figure>
<p>and <code>getRon</code> looks like:</p><pre><code>function getRon() {
request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
})
}</code></pre>
<p>Now, let's check if it works. To test this code locally, in your terminal: <code>serverless invoke local -f hello</code>. Your output should look something like:</p>
<figcaption>Spoiler: There was a wrong way to consume alcohol</figcaption>
</figure>
<p><code>serverless invoke -f hello</code> would run the code that you've deployed, as we saw in previous sections. <code>serverless invoke local -f hello</code>, however, runs your local code, so it's useful for testing. Go ahead and deploy using <code>serverless deploy</code>!</p>
<hr>
<h2 id="create-your-slack-app">Create your Slack App</h2>
<p>To create your slack app, follow this <a href="https://api.slack.com/apps?new_app=1">link</a>. It'll make you sign into a slack workspace first, so be sure you're a part of one that you can add this app to. I've created a testing one for my purposes. You'll be prompted with this modal. You can fill in whatever you want, but here's what I have as an example:</p>
<p>From there, you'll be taken to the homepage for your app. You should definitely explore these pages and the options. For example, I've added the following customization to my app:</p>
<figcaption>Display information can be found from the "Basic Information" tab on the app</figcaption>
</figure>
<p>Next, we need to add some permissions to the app:</p>
<p>To get an OAuth Access Token, you have to add some scope and permissions, which you can do by scrolling down:</p>
<p>I've added "Modify your public channels" so that the bot could write to a channel, "Send messages as Ron Swanson" so when the message gets posted, it looks like a user called Ron Swanson is posting the message, and slash commands so the user can "request" a quote as shown in the screenshot at the beginning of the article. After you save the changes, you should be able to scroll back up to OAuths &amp; Permissions to see:</p>
<p>Click the button to Install App to Workspace, and you'll have an OAuth Access Token! We'll come back to this in a second, so either copy it down or remember it's in this spot.</p>
<hr>
<h2 id="connect-code-and-slack-app">Connect Code and Slack App</h2>
<p>In AWS Lambda, find your slack app function. Your Function Code section should show our updated code with the call to our Ron Swanson API (if it does not, go back to your terminal and run <code>serverless deploy</code>). </p>
<p>Scroll below that to the section that says "<a href="https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html">Environment Variables</a>", and put your Slack OAuth Access Token here (you can name the key whatever you'd like):</p>
<p>Let's go back to our code and add Slack into our function. At the top of our file, we can declare a <code>const</code> with our new OAuth Token: </p>
<p><code>const SLACK_OAUTH_TOKEN = process.env.OAUTH_TOKEN</code>. </p>
<p><code>process.env</code> just grabs our environment variables (<a href="https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env">additional reading</a>). Next, let's take a look at the <a href="https://api.slack.com/methods/chat.postMessage">Slack API</a> to figure out how to post a message to a channel.</p>
<p>The two pictures above I've taken from the API are the most relevant to us. So, to make this API request, I'll use <code>request</code> by passing in an object called <code>options</code>:</p><pre><code>  let options = {
url: 'https://slack.com/api/chat.postMessage',
headers: {
'Accept': 'application/json',
},
method: 'POST',
form: {
token: SLACK_OAUTH_TOKEN,
channel: 'general', // hard coding for now
text: 'I am here',
}
}</code></pre>
<p>and we can make the request:</p><pre><code>  request(options, function(err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
})</code></pre>
<p>Finally, I'll wrap the whole thing in a function:</p><pre><code>function postRon(quote) {
let options = {
url: 'https://slack.com/api/chat.postMessage',
headers: {
'Accept': 'application/json',
},
method: 'POST',
form: {
token: SLACK_OAUTH_TOKEN,
channel: 'general',
text: quote,
}
}
request(options, function(err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
})
}</code></pre>
<p>and we can call it from <code>getRon</code> like this:</p><pre><code>function getRon() {
request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
postRon(body.substring(2, body.length - 2)) // here for parsing, remove if you want to see how/why I did it
})
}</code></pre>
<p>So our code should all in all look like this:</p><pre><code>'use strict';
let request = require('request');
const SLACK_OAUTH_TOKEN = process.env.OAUTH_TOKEN
module.exports.hello = (event) =&gt; {
getRon();
};
function getRon() {
request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
postRon(body.substring(2, body.length - 2))
})
}
function postRon(quote) {
let options = {
url: 'https://slack.com/api/chat.postMessage',
headers: {
'Accept': 'application/json',
},
method: 'POST',
form: {
token: SLACK_OAUTH_TOKEN,
channel: 'general',
text: quote,
}
}
request(options, function(err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
})
}</code></pre>
<p>Now let's test! Unfortunately, our environment variable in AWS Lambda isn't available to us when we run <code>serverless invoke local -f hello</code>. There are a few ways you can approach this, but for our purposes, you can just replace the value for <code>SLACK_OAUTH_TOKEN</code> with your actual OAuth Token (make sure it's a string). But be sure you switch it back before you push it up to version control! </p>
<p>Run <code>serverless invoke local -f hello</code>, and hopefully you should see a message like this in your #general channel:</p>
<p><em>Please note that I put down my channel name as 'general' since it's my test workspace; however, if you're in an actual workspace, you should create a separate channel for testing apps, and put the message there instead while you're testing.</em></p>
<p>And in your terminal, you should see something like:</p>
<p>If that works, go ahead and deploy it using <code>serverless deploy</code>. If it does not, the best way to debug this is to adjust code and run <code>serverless invoke local -f hello</code>.</p>
<hr>
<h2 id="adding-slash-command">Adding slash command</h2>
<p>The last and final part is adding a slash command! Go back to your function's home page in AWS Lambda and look for the button that says "Add trigger":</p>
<figcaption>We're going to add an API Gateway (as I already have).</figcaption>
</figure>
<p>Click on the button to get to the "Add trigger" page, and select "API Gateway" from the list:</p>
<p> I've filled in the information based on defaults mostly:</p>
<p>I've also left this API open for use – however, if you're using this in production, &nbsp;you should discuss what standard protocol would be with your team. "Add" the API, and you should receive an API endpoint. Hold on to this, because we'll need it for the next step. </p>
<p>Let's switch back over to our slack app and add a slash command:</p>
<p>Click on "Create New Command" and it should pop up with a new window to create a command. Here's how I filled mine out:</p>
<p>You can enter anything you want for "command" and "short description" but for "request URL", you should put your API endpoint.</p>
<p>Finally, we'll go back to our code to make some final adjustments. If you try to use the slash command, you should receive some kind of error back – this is because slack expects a response and AWS expects you to give a response when the endpoint is hit. So, we'll change our function to allow a <code>callback</code> (<a href="https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html">for reference</a>):</p><pre><code>module.exports.hello = (event,context,callback) =&gt; {
getRon(callback);
};</code></pre>
<p>and then we'll change <code>getRon</code> to do something with the <code>callback</code>:</p><pre><code>function getRon(callback) {
request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
callback(null, SUCCESS_RESPONSE)
postRon(body.substring(2, body.length - 2))
})
}</code></pre>
<p>where <code>SUCCESS_RESPONSE</code> is at the top of the file:</p><pre><code>const SUCCESS_RESPONSE = {
statusCode: 200,
body: null
}</code></pre>
<p>You can put the callback here or in <code>postRon</code> – it just depends on what your purposes are with the callback. </p>
<p>Our code at this point now looks something like:</p><pre><code>'use strict';
let request = require('request');
const SLACK_OAUTH_TOKEN = OAUTH_TOKEN
const SUCCESS_RESPONSE = {
statusCode: 200,
body: null
}
module.exports.hello = (event,context,callback) =&gt; {
getRon(callback);
};
function getRon(callback) {
request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
callback(null, SUCCESS_RESPONSE)
postRon(body.substring(2, body.length - 2))
})
}
function postRon(quote) {
let options = {
url: 'https://slack.com/api/chat.postMessage',
headers: {
'Accept': 'application/json',
},
method: 'POST',
form: {
token: SLACK_OAUTH_TOKEN,
channel: 'general',
text: quote,
}
}
request(options, function(err, resp, body) {
console.log('error:', err)
console.log('statusCode:', resp &amp;&amp; resp.statusCode)
console.log('body', body)
})
}</code></pre>
<p>You should be able to use the <code>/ron</code> command in slack now and get a Ron Swanson quote back. If you don't, you can use Cloudwatch logs to see what went wrong:</p>
<p>The way our code works now, we've hardcoded in the channel name. But, what we actually want is for the quote to get posted in the message where you used <code>/ron</code>. </p>
<p>So, we can now use the <code>event</code> portion of our function. </p><pre><code>module.exports.hello = (event,context,callback) =&gt; {
console.log(event)
getRon(callback);
};</code></pre>
<p>Use <code>/ron</code> to run the function, and then check your Cloudwatch logs to see what gets logged to the console (you may need to refresh). Check on the most recent logs and you should see something like this:</p>
<p>The first item in this list (where it says "resource", "path", etc.) is the event, so if you expand that, you'll see a long list of things, but what we're looking for is 'body' all the way down at the bottom:</p>
<figcaption>where's waldo: spot the param edition</figcaption>
</figure>
<p>Body is a string with some relevant information in it, one of them being "channel_id". We can use channel_id (or channel_name) and pass it into the function that creates our slack message. For your convenience, I've already parsed this string: <code>event.body.split("&amp;")[3].split("=")[1]</code> should give you the channel_id. I hardcoded in which entry (3) the channel_id was for simplicity.</p>
<p>Now, we can alter our code to save that string as a variable:</p>
<p><code>let channel = 'general'</code> (as our fallback)</p><pre><code>module.exports.hello = (event,context,callback) =&gt; {
console.log(event)
channel = event.body.split("&amp;")[3].split("=")[1]
console.log(context)
getGoat(callback);
};</code></pre>
<p>and in <code>postRon</code>:</p>
url: 'https://slack.com/api/chat.postMessage',
headers: {
'Accept': 'application/json',
},
method: 'POST',
form: {
token: SLACK_OAUTH_TOKEN,
channel: channel,
text: quote,
}
}</code></pre>
<figcaption>options var in postRon</figcaption>
</figure>
<p>Finally, if you use a slack command in any channel in your workspace, you should be able to see a Ron Swanson quote pop up! If not, as I mentioned before, the most common tools I use to debug serverless apps are <code>serverless invoke local -f &lt;function name&gt;</code> and Cloudwatch logs.</p>
<hr>
<p>Hopefully you were successfully able to create a functioning Slack application! I've included resources and background reading dispersed throughout the article and I'm happy to answer any questions you may have!</p>
<p><em>Final Repo with code: </em><a href="https://github.com/lsurasani/ron-swanson-slack-app/">https://github.com/lsurasani/ron-swanson-slack-app/</a></p>
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
