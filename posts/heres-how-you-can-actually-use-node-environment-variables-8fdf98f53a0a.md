---
card: "https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png"
tags: [Nodejs]
description: Environment variables are a fundamental part of Node developm
author: "Milad E. Fahmy"
title: "Here’s how you can actually use Node environment variables"
created: "2021-08-15T19:47:54+02:00"
modified: "2021-08-15T19:47:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-tech tag-programming tag-javascript tag-humor ">
<header class="post-full-header">
<h1 class="post-full-title">Here’s how you can actually use Node environment variables</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*akTd5oP32aXargVxiCOB8g.png" alt="Here’s how you can actually use Node environment variables">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Environment variables are a fundamental part of Node development, but for some reason I never bothered with learning how to properly use them.</p>
<p>Maybe because they are called “Environment Variables.”</p>
<p>Just the words “Environment Variable” trigger a PTSD-laced flashback in which I am trying to add the correct path to the Java Home directory on Windows. Does it go in PATH or JAVA_HOME or both? Do I need to end it with a semicolon? WHY AM I USING JAVA?</p>
<figcaption>KILL_ME</figcaption>
</figure>
<p>In Node, environment variables can be global (like on Windows), but are often used with a specific process that you want to run. For instance, if you had a web application, you might have environment variables that define:</p>
<ul>
<li>The HTTP Port to listen on</li>
<li>The Database Connection String</li>
<li>The JAVA_HOME…wait…no — sorry. The healing process takes time.</li>
</ul>
<p>In this context, environment variables are really more like “Configuration Settings.” See how much nicer that sounds?</p>
<p>If you’ve done .NET before, you might be familiar with something like a <code>web.config</code> file. Node environment variables work much the same was as settings in a <code>web.config</code> — they’re a way for you to pass in information that you don’t want to hard code.</p>
<figcaption>Quoting yourself is the pinnacle of delusion</figcaption>
</figure>
<p>But how do you <strong>use</strong> these variables in your Node application? I had a hard time finding good resources on this with the requisite amount of Java jokes, so I decided to create one. Here are some of the different ways you can define and then read environment variables in your Node applications.</p>
<h4 id="pass-it-in-the-terminal">Pass it in the terminal</h4>
<p>You can pass environment variables on the terminal as part of your Node process. For instance, if you were running an Express app and wanted to pass in the port, you could do it like this…</p><pre><code class="language-bash">PORT=65534 node bin/www</code></pre>
<p>Fun fact: port 65535 is the largest TCP/IP network value available. How do I know that? <a href="https://stackoverflow.com/questions/113224/what-is-the-largest-tcp-ip-network-port-number-allowable-for-ipv4" rel="noopener">StackOverflow of course</a>. How does anybody know anything? But you can only go as high as port 65534 for a web app because that’s the highest port Chrome will connect to. How do I know <strong>that? </strong>Because <a href="undefined" rel="noopener">Liran Tal</a> told me in the comments. You should follow him. Between the two of us he’s the one who knows what he’s doing.</p>
<p>Now to use the variable in your code, you would use the <code>process.env</code> object.</p><pre><code class="language-js">var port = process.env.PORT;</code></pre>
<p>But this could get ugly. If you had a connection string, you probably wouldn’t want to start passing multiple variables on the terminal. It would look like you are hoarding configuration values, and someone who loves you could stage an intervention and that would be awkward for everyone involved.</p><pre><code>PORT=65534
DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&amp;replicaSet=globaldb"
SECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"</code></pre>
<p>This doesn’t scale, and everyone wants to scale. According to every architect I’ve ever sat in a meeting with, “scaling” is more important than the application even working.</p>
<p>So let’s look at another way: .env files.</p>
<h4 id="use-a-env-file">Use a .env file</h4>
<p>.env files allow you to put your environment variables inside a file. You just create a new file called <code>.env</code> in your project and slap your variables in there on different lines.</p><pre><code>PORT=65534
DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&amp;replicaSet=globaldb"
SECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"</code></pre>
<p>To read these values, there are a couple of options, but the easiest is to use the <code>dotenv</code> package from npm.</p><pre><code class="language-bash">npm install dotenv --save</code></pre>
<p>Then you just require that package in your project wherever you need to use environment variables. The <code>dotenv</code> package will pick up that file and load those settings into Node.</p><pre><code class="language-js">Use dotenv to read .env vars into Node
require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
// Reference .env vars off of the process.env object
MongoClient.connect(process.env.DB_CONN, function(err, db) {
if(!err) {
console.log("We are connected");
}
});</code></pre>
<p>PROTIP: Don’t check your <code>.env</code> file into Github. It has all you secrets in it and Github will email you and tell you so. Don’t be like me.</p>
<p>OK — Nice. But this is kind of a pain. You have to put this in every single file where you want to use environment variables AND you have to deploy the <code>dotenv</code> to production where you don’t actually need it. I’m not a huge fan of deploying pointless code, but I guess I just described my whole career.</p>
<p>Luckily, you are using <a href="https://code.visualstudio.com/?wt.mc_id=dotenv-medium-buhollan" rel="noopener">VS Code</a> (because <strong>of course you are</strong>), so you have some other options.</p>
<h4 id="working-with-env-files-in-vs-code">Working with .env files in VS Code</h4>
<p>First off, you can <a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&amp;wt.mc_id=dotenv-medium-buhollan" rel="noopener">install the DotENV extension</a> for code which will give you nice syntax highlighting in your .env files.</p>
<p><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener"><strong>DotENV - Visual Studio Marketplace</strong></a><br><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener"><em>Extension for Visual Studio Code - Support for dotenv file syntax</em></a><br><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener">marketplace.visualstudio.com</a></p>
<p>The VS Code Debugger also offers some more convenient options for loading values from .env files <strong>if</strong> you are using the VS Code Debugger.</p>
<h4 id="vs-code-launch-configurations">VS Code Launch Configurations</h4>
<p>The Node debugger for VS Code (already there, no need to install anything) supports loading in .env files via launch configurations. You can read more more about Launch Configurations <a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging?WT.mc_id=dotenv-medium-buhollan" rel="noopener">here</a>.</p>
<p>When you create a basic Node Launch Configuration (click on the gear and select Node), you can do one or both of two things.</p>
<p>The first is you can simply pass variables in on the launch config.</p>
<p>This is nice, but the fact that every value has to be a string bothers me a bit. It’s a number, not a string. JavaScript only has, like, 3 types. Don’t take one of them away from me.</p>
<p>There is a simpler way here. We’ve already learned to love <code>.env</code> files, so instead of passing them, we can just give VS Code the name of the .env file.</p>
<p>And as long as we are starting our process from VS Code, environment variables files are loaded in. We don’t have to mutilate numbers into strings and we aren’t deploying worthless code into production. Well, at least you aren’t.</p>
<h4 id="starting-with-npm-instead-of-node">Starting with NPM instead of Node</h4>
<p>You might have gotten this far and thought, “Burke, I never ever run <code>node</code> anything. It’s always an npm script like <code>npm start</code>”.</p>
<p>In this case you can still use VS Code Launch configs. Instead of using a standard Node Launch process, you add a config that is a “Launch Via NPM” task.</p>
<p>Now you can add back in your <code>envFile</code> line and tweak the <code>runtimeArgs</code> so that they launch the correct script. This is <em>usually </em>something like “start” or “debug”.</p>
<p><strong>Note that you have to add the <code>--inspect</code> flag to your npm script so that VS Code can attach the debugger</strong>. Otherwise the task will launch, but the VS Code debugger will time out like me trying to get a date in high school.</p>
<h3 id="production-environment-variables">Production environment variables</h3>
<p>So far we’ve looked at how to define variables for development. You likely won’t use .env files in production, and VS Code Launch Configurations aren’t going to be super helpful on a server.</p>
<p>In production, variables will be defined however your platform of choice allows you to do so. In the case of Azure, there are 3 different ways to define and manage environment variables.</p>
<p>The first way is to use the <a href="https://docs.microsoft.com/en-us/cli/azure/webapp/config/appsettings?view=azure-cli-latest&amp;wt.mc_id=dotenv-medium-buhollan" rel="noopener">Azure CLI</a>.</p><pre><code class="language-bash">az webapp config appsettings set -g MyResourceGroup -n MyApp --settings PORT=65534</code></pre>
<p>Which works, but, ew.</p>
<p>Another way is via the Azure web portal. I don’t always use a web portal, but when I do, it’s to set environment variables.</p>
<p>In the case of Azure, these are called “Application Settings”.</p>
<p>And since you are using VS Code, you can install the App Service extension and manage all the App Settings <a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener">right from the editor</a>.</p>
<p>I love not having to leave VS Code to do anything. I would write emails in VS Code if I could.</p>
<p>WAIT A MINUTE!</p>
<p><a href="https://marketplace.visualstudio.com/items?itemName=ccccly.markdown-mail&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener"><strong>markdown-mail - Visual Studio Marketplace</strong></a><br><a href="https://marketplace.visualstudio.com/items?itemName=ccccly.markdown-mail&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener"><em>Extension for Visual Studio Code - Using markdown to write your email and send！</em></a><br><a href="https://marketplace.visualstudio.com/items?itemName=ccccly.markdown-mail&amp;WT.mc_id=dotenv-medium-buhollan" rel="noopener">marketplace.visualstudio.com</a></p>
<h3 id="now-you-know">Now you know</h3>
<p>Now you know what I know (which aint a lot, let me tell you) and I feel like I accomplished my goal of a tasteful amount of Java jokes along the way. Just in case I didn’t, I’ll leave you with this one.</p>
<blockquote>Java is a very powerful tool for turning XML into stack traces<br><br>— Unknown</blockquote>
<p><em>Satire Disclaimer: Most of this is a poor attempt at humor, and some of it at the expense of Java; which isn’t nice but is very easy. These jokes don’t write themselves.</em></p>
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
