---
card: "/images/default.jpg"
tags: [Serverless]
description: Serverless is one of those terms that has been increasing in
author: "Milad E. Fahmy"
title: "Practical Serverless: How to Email Yourself Chuck Norris Jokes"
created: "2021-08-15T19:32:35+02:00"
modified: "2021-08-15T19:32:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-serverless tag-aws tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Practical Serverless: How to Email Yourself Chuck Norris Jokes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="front-matter">Front Matter</h2>
<p>Serverless is one of those terms that has been increasing in popularity lately. In fact, when I wrote an article about my AWS architecture, several people mentioned to go serverless.</p>
<p>Serverless doesn't <em>actually</em> mean there are no servers, but as <a href="https://thenewstack.io/dark-a-new-programming-language-for-deployless-deployments/">Paul Biggar put it</a>:</p>
<blockquote>"..there are servers in serverless...you just don’t have to think about it."</blockquote>
<p>Serverless is a buzzword that doesn't refer to a specific framework, however, I've found that the <a href="https://serverless.com/">Serverless Framework</a> is the easiest method to getting started.</p>
<p><em>Note: For the sake of brevity, "<strong>sls</strong>" is synonymous with the <a href="https://serverless.com/" rel="noopener">Serverless Framework</a>.</em></p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Honestly, the documentation for the Serverless Framework is so good, it would be a disservice to recreate them here. So, to keep this article super focused, I'm going to be focusing on stuff outside of the quick start guides. I've included the AWS specific ones below:</p>
<p><a href="https://serverless.com/framework/docs/providers/aws/guide/quick-start/">Serverless AWS Quickstart Guide</a></p>
<p><a href="https://serverless.com/framework/docs/providers/aws/guide/credentials/">Getting Started with the Serverless Framework and AWS</a></p>
<p>I'd suggest reading over those first, if you've never done anything with serverless.</p>
<p>Alternatively, you can code along with me in my Getting Started video below:</p>
<h2 id="vocabulary">Vocabulary</h2>
<p>There are a lot of terms that surround <strong>sls</strong> that can obfuscate what is being referred to. Here’s a couple key terms:</p>
<p><strong>Service:</strong> The way I think of a service is that it’s a collection of code that is all served from a single place. Can contain one or more functions.</p>
<p><strong>Stage: </strong>This is what "type" of the environment you are running. Usually it would be divided up into "dev" and "prod". The stage is a variable of service.</p>
<p><strong>Function: </strong>A piece of code that executes when called. Wow, what a great description. This isn’t new to anyone who has programmed anything, however it’s important to know the relationship between a function and a service. There can be one or more functions that are part of a Service.</p>
<p><strong>Provider: </strong>Simply put, the place where your service is deployed, e.g. AWS, GCP, etc.</p>
<h3 id="a-deeper-dive">A Deeper Dive</h3>
<p>I found this fantastic article that deeply explains what Serverless is, if you want more info:</p>
<p><a href="https://dev.to/sosnowski/anatomy-of-aws-lambda-1i1e">https://dev.to/sosnowski/anatomy-of-aws-lambda-1i1e</a></p>
<h2 id="what-we-re-building">What We’re Building</h2>
<p>We're going to make a function that grabs a joke from the internet, and e-mails it to ourselves.</p>
<h3 id="it-does-this">It does this</h3>
<ol>
<li>Pulls data from API.</li>
<li>Creates a e-mail template.</li>
<li>Sends e-mail template.</li>
<li>Profit.</li>
</ol>
<h3 id="tools">Tools</h3>
<ul>
<li>Serverless Framework</li>
<li>AWS Account (Optional)</li>
<li>AWS CLI</li>
<li>NPM</li>
<li>nodemailer</li>
</ul>
<p>If you like to learn via video, check out the video version of this article here:</p>
<h2 id="building-the-thing">Building the thing</h2>
<h3 id="tooling">Tooling</h3>
<p>The tooling for <strong>sls</strong> is pretty simple. All I used was the serverless and npm CLIs. If you don’t have npm installed, <a href="https://changelog.com/posts/install-node-js-with-homebrew-on-os-x" rel="noopener">install it first</a>. Then run:</p>
<p><code>npm i -g serverless</code></p>
<h3 id="init">Init</h3>
<p>It’s usually a good idea to start with a template. There are a bunch on the <a href="https://serverless.com/framework/docs/providers/aws/examples/" rel="noopener">serverless aws example</a> page.</p>
<p>For this project I used the aws-nodejs template by running the following command in the terminal:</p><pre><code>serverless create --template aws-nodejs --path my-service</code></pre>
<p><em>Note: if you don’t provide a path flag, it will init the project in whatever folder you are current in.</em></p>
<figcaption>ASCII Art is the Best Art</figcaption>
</figure>
<p>If you checkout the directory, there should be three files in it:</p>
<ul>
<li> <code>handler.js</code> </li>
<li> <code>serverless.yml</code></li>
<li> <code>.gitignore</code> </li>
</ul>
<p>If you run <code>sls invoke local -f hello</code> , you should get a response back with a success message.</p>
<h3 id="deployment">Deployment</h3>
<p>Usually deployment of an application is left for the end of the tutorial, but not for sls. In the case of the <a href="https://serverless.com/framework/docs/providers/aws/guide/quick-start/" rel="noopener">Serverless Quickstart guide</a>, it’s step 2.</p>
<p>I really appreciate this approach because I prefer to start the deployment portion as early into development as possible. Personally, I think it’s much easier to get a deployment working when you have a couple routes.</p>
<p><strong>Providers</strong></p>
<p>So, now comes the big question...where are we going to deploy this thing? For this tutorial, I'm going to be using AWS, but you can use whatever service you prefer. </p>
<p>Here is the quick-start for getting AWS setup as a provider: <a href="https://serverless.com/framework/docs/providers/aws/guide/quick-start/">Serverless AWS Quickstart Guide</a>.</p>
<p><strong><em>Serverless Enterprise</em></strong></p>
<p>It’s not immediately apparent on their website what the pricing is for their Enterprise edition. However, once you sign up they will send you an e-mail that says this:</p>
<blockquote>The Serverless Framework Free tier includes everything you need to develop and troubleshoot serverless applications more efficiently. You get full access to the Serverless Framework Enterprise console, but you are limited to 1,000 function invocations per month. If you are interested in expanding your usage of the Serverless Framework Enterprise beyond the free tier <a href="https://serverless-289f5d947191.intercom-mail.com/via/e?ob=cY7cHS%2BZj2VcQFfJ784nQVM8V6MMQueJzyEgtPxcKEcydcqbYBJd1OePOwyM01xR&amp;h=4c812da8d71e5f78f9ff82836acbf93df5fe7fb5-22378777535&amp;l=a31459550e6f3973d9146212384178952e265336-984217" rel="noopener">contact us</a> for details regarding available plans and pricing.</blockquote>
<p><strong>Deploy the thing</strong></p>
<p>After you've gotten your credentials setup, simply run the <code>sls deploy</code> command in the terminal. </p>
<figcaption>This screen gives a lot of info (much appreciated), but what does it mean?</figcaption>
</figure>
<p>The most confusing thing for me after typing that command was wondering…where did it go?</p>
<p>In the case of AWS, it creates a CloudFormation stack that manages this <strong>Service</strong> for you. AWS refers to it is as an <strong>Application</strong>. To see what just happened, check out your <a href="https://console.aws.amazon.com/lambda/">Lambda Console on AWS</a>. You should see the function you just deployed.</p>
<p>If not's showing up, check to make sure you are in the right region. The default region is us-east-1 (North Virginia). It can be changed via the dropdown in the upper right:</p>
<p><strong>Test it</strong></p>
<p>To make sure it worked, simply run <code>sls invoke -f hello</code> in your terminal. You should get the same response as before, but this time from the cloud!</p>
<h3 id="local-development">Local Development</h3>
<p><a href="https://nodemon.io/">W</a>e already tested locally once with <code>sls invoke local -f hello</code>. If you are doing something more complicated and would like a nodemon style code refresher, check out <a href="https://www.npmjs.com/package/serverless-offline">Serverless Offline</a>.</p>
<h2 id="start-writing-">Start Writing!</h2>
<p>Now that we have our project setup, let's start writing some actual code!</p>
<p>Open up the <code>serverless.yml</code> file again and let's make some changes.</p>
sendEmail:
handler:
emailHandler.sendEmail
hello:
handler: handler.hello</code></pre>
<figcaption>serverless.yml</figcaption>
</figure>
<p>First thing, we added a new function and a new handler. the handler is referring to a file in the root directory called emailHandler (which doesn't exist yet). Let's go create it!</p><pre><code class="language-js">// emailHandler.js
module.exports.sendEmail = async event =&gt; {
return {
statusCode: 400,
body: JSON.stringify(
{
message: 'Email sent!',
},
null,
2,
),
};
};</code></pre>
<p>If you invoke the function via <code>sls invoke local -f sendEmail</code> you should get this:</p><pre><code class="language-json">{
"statusCode": 400,
"body": "{\n  \"message\": \"Email sent!\"\n}"
}</code></pre>
<p>Alrighty, let's do something a bit more useful. I ran across <a href="https://api.chucknorris.io/">this</a> API that serves Chuck Norris jokes, which is a perfect fit for this little tutorial.</p><pre><code class="language-js">// emailHandler.js
module.exports.sendEmail = async event =&gt; {
// grab the joke from the API
const response = await fetch('https://api.chucknorris.io/jokes/random');
//  grab the JSON
const joke = await response.json();
return {
statusCode: 400,
body: JSON.stringify(
{
message: joke.value,
},
null,
2,
),
};
};</code></pre>
<p> Sweet! Now we're getting jokes! Let's build out the e-mail portion. </p>
<h3 id="environment-variables">Environment Variables</h3>
<p>Before we get too far into this thing, you probably realized we're going to need to pull in some secrets. Assuming we don't want the world to have our API Keys, that is.</p>
<p><strong>Stages</strong></p>
<p>Normally, whenever working with a node app, the Node environment will dictate wether it is “dev” or “production”. In sls, that is decided by the “stage” tag, that is attached to the provider.</p>
<p>A great explanation from <a href="https://serverless-stack.com/chapters/stages-in-serverless-framework.html" rel="noopener">Serverless Stack</a>:</p>
<blockquote>Serverless Framework allows you to create stages for your project to deploy to. Stages are useful for creating environments for testing and development. Typically you create a staging environment that is an independent clone of your production environment. This allows you to test and ensure that the version of code that you are about to deploy is good to go.</blockquote>
<h3 id="queue-up-the-secrets">Queue Up the Secrets</h3>
<p>Create <code>env.yml</code> in the root directory.</p>
<p>Make sure to add it to .gitignore</p>
<p>Add our variables.</p><pre><code class="language-yaml"># Add the environment variables for the various stages
prod:
MAIL_HOST: ""
MAIL_PORT: 2525
MAIL_USER: ""
MAIL_PASS: ""
dev:
MAIL_HOST: ""
MAIL_PORT: 2525
MAIL_USER: ""
MAIL_PASS: ""
</code></pre>
<p>Reference the variables in <code>serverless.yml</code></p><pre><code class="language-yaml">provider:
name: aws
runtime: nodejs10.x
stage: dev
environment:
MAIL_HOST: ${file(env.yml):${self:provider.stage}.MAIL_HOST}
MAIL_PORT: ${file(env.yml):${self:provider.stage}.MAIL_PORT}
MAIL_USER: ${file(env.yml):${self:provider.stage}.MAIL_USER}
MAIL_PASS: ${file(env.yml):${self:provider.stage}.MAIL_PASS}
</code></pre>
<p>Yeah, that is a pretty crazy long line, but basically its just saying:</p>
<p>Read file (env.yml) -&gt;Use the stage we are running (dev) -&gt; Use the variable associated with that stage</p>
<p>For further reading on the subject of loading in secrets: check out this article: <a href="https://serverless-stack.com/chapters/load-secrets-from-env-yml.html"><strong>Load Secrets from env.yml</strong></a></p>
<h3 id="send-the-e-mail">Send the E-mail</h3>
<p>To make it simple, I am going to use <a href="https://mailtrap.io/">Mailtrap</a>. It's a fantastic tool for testing e-mails, that doesn't require you to setup an e-mail server.</p>
<p><strong>Install nodemailer</strong></p>
<p>In order to install nodemailer, you need to init an npm project. Go ahead and do that via the command line:</p><pre><code class="language-bash">npm init -y</code></pre>
<p>Then install nodemailer</p><pre><code class="language-bash">npm i nodemailer</code></pre>
<p><strong>Add your API keys</strong></p>
<p>Grab your API keys from the Demo inbox of Mailtrap and add to your <code>env.yml</code></p>
<p>To send the mail, we are going to use nodemailer. Here's the code for Mailtrap + nodemailer:</p><pre><code class="language-js">const nodemailer = require('nodemailer');
// grab the variables from the process
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
// create the transport
const transport = nodemailer.createTransport({
host: MAIL_HOST,
port: MAIL_PORT,
auth: {
user: MAIL_USER,
pass: MAIL_PASS,
},
});
module.exports.sendEmail = async event =&gt; {
// grab the joke from the API
const response = await fetch('https://api.chucknorris.io/jokes/random');
//  grab the JSON
const joke = await response.json();
// create HTML template
const html = `
&lt;h1&gt;Joke of the Day&lt;/h1&gt;
&lt;p&gt;${joke.value}&lt;/p&gt;
`;
// send mail with our transport object
let info = await transport.sendMail({
from: '"Chuck Norris" &lt;noreply@chuck.com&gt;', // sender address
to: 'name@email.com', // list of receivers
subject: 'Daily Joke', // Subject line
html, // html body
});
return {
statusCode: 400,
body: JSON.stringify(
{
message: joke.value,
},
null,
2,
),
};
};
</code></pre>
<p>If all went well, invoke local and check your mailtrap.</p>
<p><code>sls invoke local -f sendEmail</code></p>
"statusCode": 400,
"body": "{\n  \"message\": \"Chuck Norris' favorite chewing gum are bullets.\"\n}"
}</code></pre>
<figcaption>Message from Command Line</figcaption>
</figure>
<figcaption>View in Mailtrap</figcaption>
</figure>
<h2 id="what-s-next">What's Next</h2>
<p>This article has gotten a bit long, so I'm going to stop here. However, in the next edition of <em>Practical Serverless</em>, I'm going to include connecting to a DB (not as easy as it should be) and setting up automatic function runs via a cron (much easier than it sounds!).</p>
<h2 id="final-thoughts">Final Thoughts</h2>
<p>I'll let you decide on the practicality of sending yourself jokes, but I think it's use extends beyond Mr. Norris. This is part 1 of a series called<em> Practical Serverless.</em> If you have suggestions you'd like to add, please do!</p>
<p>As always, happy coding!</p>
<h2 id="code-repo">Code Repo</h2>
<p><a href="https://github.com/DarthOstrich/sls-part1-sendemail">https://github.com/DarthOstrich/sls-part1-sendemail</a></p>
<h2 id="resources">Resources</h2>
<p><br><a href="https://serverless.com/learn/use-cases/">https://serverless.com/learn/use-cases/</a></p>
<p><a href="https://serverless.com/framework/docs/getting-started/" rel="noopener">https://serverless.com/framework/docs/getting-started/</a></p>
<p><a href="https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772">https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772</a></p>
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
